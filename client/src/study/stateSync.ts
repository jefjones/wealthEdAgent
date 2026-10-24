/**
 * Keeps study state on the server so it follows the reader across devices.
 * Saves are debounced (about 1.5 s) and flushed when the page is hidden.
 * Each save sends baseUpdatedAt; a 409 merges field by field and retries once.
 * A 404 (table not there yet) or a network error keeps the state in this browser and tries again later.
 */
import { useEffect, useState } from 'react'
import {
  ApiError,
  browserOnlySearches,
  getStudyState,
  markStateMigrated,
  postSearchHistoryEntry,
  putStudyState,
  stateMigrated,
  studyStateRemote,
  type ServerState,
} from '../api/client.ts'
import {
  GLOBAL_STATE_ID,
  mergeStudyState,
  newerUpdatedAt,
  patchStudyState,
  planStateMigration,
  sanitizeStudyState,
  STATE_MAX_BYTES,
  stateSize,
  type StateField,
  type TestState,
} from './studyState.ts'

export const SAVE_DEBOUNCE_MS = 1500
const RETRY_AFTER_MS = 60_000
const CACHE_KEY = 'wealthEdAgent.studyState.v1'

type Doc = {
  state: TestState
  updatedAt: string | null
  /** True after a server read or write, so baseUpdatedAt is meaningful. */
  known: boolean
  dirty: Set<string>
  version: number
  loading: Promise<TestState> | null
  ready: boolean
}

type CacheRow = { state: TestState; updatedAt: string | null; dirty: string[] }

let personId: string | null = null
const docs = new Map<string, Doc>()
const listeners = new Map<string, Set<() => void>>()
const timers = new Map<string, ReturnType<typeof setTimeout>>()
let unavailableUntil = 0

function readCache(): Record<string, Record<string, CacheRow>> {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    return raw ? (JSON.parse(raw) as Record<string, Record<string, CacheRow>>) : {}
  } catch {
    return {}
  }
}

function writeCache(testId: string, doc: Doc) {
  if (!personId) return
  try {
    const all = readCache()
    all[personId] = { ...(all[personId] ?? {}), [testId]: { state: doc.state, updatedAt: doc.updatedAt, dirty: [...doc.dirty] } }
    localStorage.setItem(CACHE_KEY, JSON.stringify(all))
  } catch {
    /* Private mode can reject storage. */
  }
}

function docFor(testId: string): Doc {
  let doc = docs.get(testId)
  if (doc) return doc
  const cached = personId ? readCache()[personId]?.[testId] : undefined
  doc = {
    state: sanitizeStudyState(cached?.state),
    updatedAt: cached?.updatedAt ?? null,
    known: false,
    dirty: new Set(cached?.dirty ?? []),
    version: 0,
    loading: null,
    ready: false,
  }
  docs.set(testId, doc)
  return doc
}

function notify(testId: string) {
  listeners.get(testId)?.forEach((listener) => listener())
}

function remoteUsable() {
  return Boolean(personId) && studyStateRemote() && Date.now() >= unavailableUntil
}

function quietFailure(error: unknown) {
  if (error instanceof ApiError && (error.network || error.status === 404 || (error.status ?? 0) >= 500)) {
    unavailableUntil = Date.now() + RETRY_AFTER_MS
    return true
  }
  return false
}

/** Fields whose merged value differs from the server copy still need sending. */
function changedFields(merged: TestState, server: TestState): string[] {
  const fields: StateField[] = ['lastPosition', 'search', 'navExpanded', 'voice', 'rate', 'autoContinue']
  return fields.filter((field) => JSON.stringify(merged[field]) !== JSON.stringify(server[field]))
}

/** Apply a server copy: newest updatedAt is kept, fields merged by save time. */
export function adoptServer(doc: Pick<Doc, 'state' | 'updatedAt' | 'dirty'>, server: ServerState) {
  const remote = sanitizeStudyState(server.state)
  const merged = mergeStudyState(doc.state, remote, [...doc.dirty])
  return {
    state: merged,
    updatedAt: server.updatedAt ?? null,
    dirty: new Set(changedFields(merged, remote)),
    cacheWasNewer: newerUpdatedAt(doc.updatedAt, server.updatedAt) !== (server.updatedAt ?? null),
  }
}

export function setStateSyncPerson(next: string | null) {
  if (next === personId) return
  for (const timer of timers.values()) clearTimeout(timer)
  timers.clear()
  docs.clear()
  personId = next
  unavailableUntil = 0
  for (const testId of listeners.keys()) notify(testId)
}

export function peekStudyState(testId: string): TestState {
  return docFor(testId).state
}

export function studyStateReady(testId: string) {
  return docFor(testId).ready
}

export function loadStudyState(testId: string): Promise<TestState> {
  const doc = docFor(testId)
  if (doc.loading) return doc.loading
  const finish = () => {
    doc.ready = true
    doc.loading = null
    notify(testId)
    return doc.state
  }
  if (!remoteUsable()) return Promise.resolve(finish())
  doc.loading = getStudyState(testId)
    .then((server) => {
      const next = adoptServer(doc, server)
      doc.state = next.state
      doc.updatedAt = next.updatedAt
      doc.dirty = next.dirty
      doc.known = true
      writeCache(testId, doc)
      if (doc.dirty.size > 0) scheduleSave(testId)
      return finish()
    })
    .catch((error: unknown) => {
      quietFailure(error)
      return finish()
    })
  return doc.loading
}

export function updateStudyState(testId: string, patch: Partial<TestState>) {
  if (!personId) return
  const doc = docFor(testId)
  doc.state = patchStudyState(doc.state, patch, new Date().toISOString())
  Object.keys(patch).forEach((key) => doc.dirty.add(key))
  doc.version += 1
  writeCache(testId, doc)
  notify(testId)
  scheduleSave(testId)
}

function scheduleSave(testId: string) {
  const existing = timers.get(testId)
  if (existing) clearTimeout(existing)
  timers.set(
    testId,
    setTimeout(() => {
      timers.delete(testId)
      void saveStudyState(testId)
    }, SAVE_DEBOUNCE_MS),
  )
}

export async function saveStudyState(testId: string, keepalive = false) {
  const doc = docFor(testId)
  if (doc.dirty.size === 0 || !remoteUsable()) return
  if (!doc.known && !keepalive) {
    await loadStudyState(testId)
    if (!doc.known || doc.dirty.size === 0) return
  }
  if (stateSize(doc.state) > STATE_MAX_BYTES) doc.state = { ...doc.state, navExpanded: [] }
  if (stateSize(doc.state) > STATE_MAX_BYTES) return
  const version = doc.version
  const send = async (base: string | null | undefined): Promise<boolean> => {
    const saved = await putStudyState(testId, doc.state as Record<string, unknown>, base, keepalive)
    doc.updatedAt = saved.updatedAt
    doc.known = true
    if (doc.version === version) doc.dirty.clear()
    writeCache(testId, doc)
    return true
  }
  try {
    await send(doc.known ? doc.updatedAt : undefined)
  } catch (error) {
    const current = staleCurrent(error)
    if (current) {
      const next = adoptServer(doc, current)
      doc.state = next.state
      doc.updatedAt = next.updatedAt
      doc.dirty = next.dirty
      doc.known = true
      writeCache(testId, doc)
      notify(testId)
      if (doc.dirty.size === 0) return
      try {
        await send(doc.updatedAt)
      } catch (retryError) {
        quietFailure(retryError)
      }
      return
    }
    quietFailure(error)
  }
}

/** The server copy carried by a 409 stale response, or null for any other error. */
export function staleCurrent(error: unknown): ServerState | null {
  if (!(error instanceof ApiError) || error.status !== 409) return null
  const body = error.body as { current?: ServerState } | null
  if (!body?.current) return null
  return { testId: body.current.testId, state: body.current.state ?? null, updatedAt: body.current.updatedAt ?? null }
}

/** Send everything pending now. Used when the page is hidden or closed. */
export function flushStudyState(keepalive = false) {
  for (const [testId, timer] of timers) {
    clearTimeout(timer)
    timers.delete(testId)
  }
  for (const [testId, doc] of docs) {
    if (doc.dirty.size > 0) void saveStudyState(testId, keepalive)
  }
}

export function subscribeStudyState(testId: string, listener: () => void) {
  let set = listeners.get(testId)
  if (!set) {
    set = new Set()
    listeners.set(testId, set)
  }
  set.add(listener)
  return () => {
    set.delete(listener)
  }
}

/** The state of one test (or '_global'), loaded from the server once per page. */
export function useStudyState(testId: string) {
  const [, setTick] = useState(0)
  useEffect(() => {
    const off = subscribeStudyState(testId, () => setTick((tick) => tick + 1))
    void loadStudyState(testId)
    return off
  }, [testId])
  return { state: peekStudyState(testId), ready: studyStateReady(testId) }
}

/* ---------- One-time upload of browser-only data ---------- */

export type MigrationDeps = {
  readResume: () => Record<string, string>
  chapterOf: (testId: string, sectionId: string) => string | null
  readVoiceId: () => string | null
  readAutoContinue: () => boolean | null
  voices: () => { name: string; lang: string; voiceURI?: string }[]
}

let migrating: Promise<void> | null = null

export function migrateStudyState(deps: MigrationDeps) {
  if (migrating) return migrating
  migrating = runMigration(deps).finally(() => {
    migrating = null
  })
  return migrating
}

async function runMigration(deps: MigrationDeps) {
  const id = personId
  if (!id || !studyStateRemote() || stateMigrated(id)) return
  const resume = deps.readResume()
  const ids = [GLOBAL_STATE_ID, ...Object.keys(resume)]
  for (const testId of ids) {
    await loadStudyState(testId)
    if (!docFor(testId).known) return
  }
  const server: Record<string, TestState | null> = {}
  ids.forEach((testId) => {
    server[testId] = docFor(testId).state
  })
  const searches = browserOnlySearches()
  const plan = planStateMigration({
    searchesByTest: searches,
    resume,
    chapterOf: deps.chapterOf,
    voiceId: deps.readVoiceId(),
    voices: deps.voices(),
    autoContinue: deps.readAutoContinue(),
    server,
    nowIso: new Date().toISOString(),
  })
  for (const post of plan.searchPosts) {
    try {
      await postSearchHistoryEntry(post.text, post.testId)
    } catch (error) {
      if (error instanceof ApiError && error.status === 400) continue
      return
    }
  }
  for (const [testId, patch] of Object.entries(plan.patches)) updateStudyState(testId, patch)
  for (const testId of Object.keys(plan.patches)) await saveStudyState(testId)
  if (personId === id) markStateMigrated(id)
}
