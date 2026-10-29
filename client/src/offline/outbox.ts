/**
 * Offline outbox: writes made while the server is unreachable, replayed in order once it is back.
 * Pure logic. Storage is passed in (IndexedDB in the app, memory in tests).
 */
import type { HighlightInput } from '../api/client.ts'

/** localStorage mirrors, read synchronously by the API client and the header. */
export const OUTBOX_COUNT_KEY = 'wealthEdAgent.outboxCount.v1'
export const OFFLINE_TESTS_KEY = 'wealthEdAgent.offlineTests.v1'

export const BACKOFF_MIN_MS = 2_000
export const BACKOFF_MAX_MS = 5 * 60_000

export type OutboxOp =
  | {
      kind: 'attempt.create'
      localAttemptId: string
      clientId: string
      body: Record<string, unknown>
    }
  | {
      kind: 'attempt.answer'
      localAttemptId: string
      questionId: string
      body: { chosenOptionId: string; correctOptionId: string; secondsSpent?: number }
    }
  | { kind: 'attempt.complete'; localAttemptId: string; completedAt: string }
  | { kind: 'progress'; chapterId: string; sectionId: string; completed: boolean }
  | { kind: 'highlight.create'; localHighlightId: string; input: HighlightInput }
  | { kind: 'highlight.delete'; highlightId: string }
  /** localEntryId: the browser id of the entry, mapped to the server id once sent. */
  | { kind: 'search.add'; testId: string; text: string; localEntryId?: string }
  | { kind: 'search.delete'; testId: string; entryId: string }
  | { kind: 'search.clear'; testId: string }

export type SetAside = { status?: number; message: string; at: string }

export type OutboxItem = {
  seq: number
  opId: string
  personId: string
  createdAt: string
  op: OutboxOp
  tries: number
  nextAt: number
  setAside?: SetAside
}

export type NewOutboxItem = Omit<OutboxItem, 'seq'>

export interface OutboxStore {
  /** Adds the item and returns it with its sequence number (always increasing). */
  add(item: NewOutboxItem): Promise<OutboxItem>
  /** All items in sequence order. */
  list(): Promise<OutboxItem[]>
  put(item: OutboxItem): Promise<void>
  remove(seq: number): Promise<void>
  getMeta<T>(key: string): Promise<T | undefined>
  setMeta(key: string, value: unknown): Promise<void>
}

/** Local id (attempt, highlight, search entry) to the server id, once its create succeeded. */
export type IdMap = Record<string, string>
export const ID_MAP_META = 'idMap'

/** 2 s, 4 s, 8 s … capped at 5 min, with up to 20% extra jitter (still capped). */
export function backoffMs(tries: number, random: () => number = Math.random) {
  const base = Math.min(BACKOFF_MAX_MS, BACKOFF_MIN_MS * 2 ** Math.max(0, tries))
  return Math.min(BACKOFF_MAX_MS, Math.max(BACKOFF_MIN_MS, Math.round(base * (1 + 0.2 * random()))))
}

export function attemptIdOf(op: OutboxOp): string | null {
  return op.kind === 'attempt.create' || op.kind === 'attempt.answer' || op.kind === 'attempt.complete' ? op.localAttemptId : null
}

/**
 * Conflict rules applied when a new write joins the queue:
 * - progress: last write for a section wins (earlier queued writes for it are dropped);
 * - a highlight created and deleted while offline never reaches the server;
 * - clearing a test's searches drops that test's queued adds and deletes;
 * Attempts are append-only and never coalesced.
 */
export function coalesce(pending: readonly OutboxItem[], op: OutboxOp): { removeSeqs: number[]; add: boolean } {
  const open = pending.filter((item) => !item.setAside)
  if (op.kind === 'progress') {
    return {
      removeSeqs: open
        .filter((item) => item.op.kind === 'progress' && item.op.chapterId === op.chapterId && item.op.sectionId === op.sectionId)
        .map((item) => item.seq),
      add: true,
    }
  }
  if (op.kind === 'highlight.delete') {
    const created = open.find((item) => item.op.kind === 'highlight.create' && item.op.localHighlightId === op.highlightId)
    if (created) return { removeSeqs: [created.seq], add: false }
    return { removeSeqs: [], add: true }
  }
  if (op.kind === 'search.delete') {
    const added = open.find((item) => item.op.kind === 'search.add' && item.op.localEntryId === op.entryId)
    if (added) return { removeSeqs: [added.seq], add: false }
    return { removeSeqs: [], add: true }
  }
  if (op.kind === 'search.clear') {
    return {
      removeSeqs: open
        .filter((item) => (item.op.kind === 'search.add' || item.op.kind === 'search.delete') && item.op.testId === op.testId)
        .map((item) => item.seq),
      add: true,
    }
  }
  return { removeSeqs: [], add: true }
}

/** What one response means for one item. */
export type Outcome =
  | { kind: 'done'; body?: unknown }
  | { kind: 'retry' }
  | { kind: 'signIn' }
  | { kind: 'reject'; status?: number; message: string }

/**
 * Idempotent handling: 2xx is done. 409 is done for an answer (already stored) and for a complete
 * or highlight (already there). 404 is done for deletes (already gone). 401 pauses for sign-in.
 * 408, 429 and 5xx retry. Any other 4xx (400 included) is set aside for the reader, never dropped.
 */
export function classify(op: OutboxOp, status: number, message: string): Outcome {
  if (status >= 200 && status < 300) return { kind: 'done' }
  if (status === 401) return { kind: 'signIn' }
  if (status === 408 || status === 429 || status >= 500) return { kind: 'retry' }
  if (status === 409 && op.kind !== 'attempt.create') return { kind: 'done' }
  if (status === 404 && (op.kind === 'highlight.delete' || op.kind === 'search.delete')) return { kind: 'done' }
  return { kind: 'reject', status, message: message || `The server refused this change (${status}).` }
}

export type Sender = (item: OutboxItem, ids: IdMap) => Promise<Outcome>
/** Called after an item is done, with its response body; returns the server id a create made, if any. */
export type OnDone = (item: OutboxItem, body: unknown, ids: IdMap) => string | null | void

export type ReplayResult =
  | { status: 'idle'; sent: number }
  | { status: 'waiting'; sent: number; nextAt: number }
  | { status: 'signIn'; sent: number }

/**
 * Sends the person's items strictly in order. Stops at the first item that must wait (retry or
 * backoff not due), so later items never overtake earlier ones. A refused attempt create sets
 * aside that attempt's answers and complete too.
 */
export async function replay(
  store: OutboxStore,
  personId: string,
  send: Sender,
  onDone: OnDone,
  options: { now?: () => number; random?: () => number } = {},
): Promise<ReplayResult> {
  const now = options.now ?? Date.now
  const ids: IdMap = { ...((await store.getMeta<IdMap>(ID_MAP_META)) ?? {}) }
  const refused = new Set<string>()
  let sent = 0
  const items = (await store.list()).filter((item) => item.personId === personId && !item.setAside)
  for (const item of items) {
    const attemptId = attemptIdOf(item.op)
    if (attemptId && item.op.kind !== 'attempt.create' && refused.has(attemptId)) {
      await store.put({ ...item, setAside: { message: 'This answer belongs to a test the server did not save.', at: new Date(now()).toISOString() } })
      continue
    }
    if (item.nextAt > now()) return { status: 'waiting', sent, nextAt: item.nextAt }
    const outcome = await send(item, ids)
    if (outcome.kind === 'done') {
      const serverId = onDone(item, outcome.body, ids)
      if (serverId) {
        const localId =
          item.op.kind === 'attempt.create'
            ? item.op.localAttemptId
            : item.op.kind === 'highlight.create'
              ? item.op.localHighlightId
              : item.op.kind === 'search.add'
                ? (item.op.localEntryId ?? null)
                : null
        if (localId) {
          ids[localId] = serverId
          await store.setMeta(ID_MAP_META, ids)
        }
      }
      await store.remove(item.seq)
      sent += 1
      continue
    }
    if (outcome.kind === 'signIn') return { status: 'signIn', sent }
    if (outcome.kind === 'retry') {
      const tries = item.tries + 1
      const nextAt = now() + backoffMs(item.tries, options.random)
      await store.put({ ...item, tries, nextAt })
      return { status: 'waiting', sent, nextAt }
    }
    await store.put({ ...item, setAside: { status: outcome.status, message: outcome.message, at: new Date(now()).toISOString() } })
    if (item.op.kind === 'attempt.create') refused.add(item.op.localAttemptId)
  }
  return { status: 'idle', sent }
}

/** The request for one item, with local ids swapped for server ids. */
export function requestFor(op: OutboxOp, ids: IdMap): { method: string; path: string; body?: unknown } {
  const base = 'api/wealthEdAgent/study/'
  const enc = encodeURIComponent
  const real = (id: string) => ids[id] ?? id
  switch (op.kind) {
    case 'attempt.create':
      return { method: 'POST', path: `${base}attempts`, body: { ...op.body, clientId: op.clientId } }
    case 'attempt.answer':
      return { method: 'PUT', path: `${base}attempts/${enc(real(op.localAttemptId))}/answers/${enc(op.questionId)}`, body: op.body }
    case 'attempt.complete':
      return { method: 'POST', path: `${base}attempts/${enc(real(op.localAttemptId))}/complete`, body: { completedAt: op.completedAt } }
    case 'progress':
      return { method: 'PUT', path: `${base}progress/${enc(op.chapterId)}/${enc(op.sectionId)}`, body: { completed: op.completed } }
    case 'highlight.create':
      return { method: 'POST', path: `${base}highlights`, body: op.input }
    case 'highlight.delete':
      return { method: 'DELETE', path: `${base}highlights/${enc(real(op.highlightId))}` }
    case 'search.add':
      return { method: 'POST', path: `${base}search-history`, body: { text: op.text, testId: op.testId } }
    case 'search.delete':
      return { method: 'DELETE', path: `${base}search-history/${enc(real(op.entryId))}` }
    case 'search.clear':
      return { method: 'DELETE', path: `${base}search-history?testId=${enc(op.testId)}` }
  }
}

/** In-memory store for tests and for browsers without IndexedDB. */
export function memoryOutboxStore(): OutboxStore {
  let seq = 0
  const items = new Map<number, OutboxItem>()
  const meta = new Map<string, unknown>()
  return {
    async add(item) {
      seq += 1
      const row = { ...item, seq }
      items.set(seq, row)
      return row
    },
    async list() {
      return [...items.values()].sort((a, b) => a.seq - b.seq).map((row) => ({ ...row }))
    },
    async put(item) {
      items.set(item.seq, { ...item })
    },
    async remove(s) {
      items.delete(s)
    },
    async getMeta<T>(key: string) {
      return meta.get(key) as T | undefined
    },
    async setMeta(key, value) {
      meta.set(key, value)
    },
  }
}
