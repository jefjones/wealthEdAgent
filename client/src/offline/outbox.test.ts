import { describe, expect, it } from 'vitest'
import {
  BACKOFF_MAX_MS,
  BACKOFF_MIN_MS,
  backoffMs,
  classify,
  coalesce,
  memoryOutboxStore,
  replay,
  requestFor,
  type IdMap,
  type OutboxItem,
  type OutboxOp,
  type Outcome,
} from './outbox.ts'

const P = 'person-1'
const create: OutboxOp = { kind: 'attempt.create', localAttemptId: 'L1', clientId: 'L1', body: { mode: 'any', questionCount: 2 } }
const answer = (q: string): OutboxOp => ({
  kind: 'attempt.answer',
  localAttemptId: 'L1',
  questionId: q,
  body: { chosenOptionId: 'a', correctOptionId: 'a' },
})
const complete: OutboxOp = { kind: 'attempt.complete', localAttemptId: 'L1', completedAt: '2026-10-29T12:00:00.000Z' }

async function storeWith(ops: OutboxOp[], person = P) {
  const store = memoryOutboxStore()
  for (const op of ops) await store.add({ opId: crypto.randomUUID(), personId: person, createdAt: 'x', op, tries: 0, nextAt: 0 })
  return store
}

describe('outbox replay', () => {
  it('sends in order and maps the local attempt id to the server id', async () => {
    const store = await storeWith([create, answer('q1'), answer('q2'), complete])
    const paths: string[] = []
    const send = async (item: OutboxItem, ids: IdMap): Promise<Outcome> => {
      paths.push(`${requestFor(item.op, ids).method} ${requestFor(item.op, ids).path}`)
      return item.op.kind === 'attempt.create' ? { kind: 'done', body: { attempt: { attemptId: 'S1' } } } : { kind: 'done' }
    }
    const result = await replay(store, P, send, (item, body) =>
      item.op.kind === 'attempt.create' ? (body as { attempt: { attemptId: string } }).attempt.attemptId : null,
    )
    expect(result).toEqual({ status: 'idle', sent: 4 })
    expect(paths).toEqual([
      'POST api/wealthEdAgent/study/attempts',
      'PUT api/wealthEdAgent/study/attempts/S1/answers/q1',
      'PUT api/wealthEdAgent/study/attempts/S1/answers/q2',
      'POST api/wealthEdAgent/study/attempts/S1/complete',
    ])
    expect(await store.list()).toEqual([])
    expect(await store.getMeta('idMap')).toEqual({ L1: 'S1' })
  })

  it('never re-sends a create that already succeeded (clientId ignored by the server)', async () => {
    const store = await storeWith([create, answer('q1')])
    let creates = 0
    let failAnswer = true
    const send = async (item: OutboxItem): Promise<Outcome> => {
      if (item.op.kind === 'attempt.create') {
        creates += 1
        return { kind: 'done', body: { attempt: { attemptId: 'S1' } } }
      }
      if (failAnswer) return { kind: 'retry' }
      return { kind: 'done' }
    }
    const onDone = (item: OutboxItem) => (item.op.kind === 'attempt.create' ? 'S1' : null)
    const first = await replay(store, P, send, onDone, { now: () => 0, random: () => 0 })
    expect(first.status).toBe('waiting')
    failAnswer = false
    const second = await replay(store, P, send, onDone, { now: () => 10 * 60_000 })
    expect(second).toEqual({ status: 'idle', sent: 1 })
    expect(creates).toBe(1)
  })

  it('stops at a retry so later items never overtake, and backs off', async () => {
    const store = await storeWith([{ kind: 'progress', chapterId: 'c', sectionId: 's', completed: true }, create])
    const sent: string[] = []
    const send = async (item: OutboxItem): Promise<Outcome> => {
      sent.push(item.op.kind)
      return { kind: 'retry' }
    }
    const result = await replay(store, P, send, () => null, { now: () => 1_000, random: () => 0 })
    expect(result).toEqual({ status: 'waiting', sent: 0, nextAt: 1_000 + BACKOFF_MIN_MS })
    expect(sent).toEqual(['progress'])
    const [head] = await store.list()
    expect(head!.tries).toBe(1)
    // Not due yet: nothing is sent.
    const again = await replay(store, P, send, () => null, { now: () => 1_500 })
    expect(again.status).toBe('waiting')
    expect(sent).toHaveLength(1)
  })

  it('pauses the whole queue on 401 and keeps every item', async () => {
    const store = await storeWith([create, answer('q1')])
    const result = await replay(store, P, async () => ({ kind: 'signIn' }), () => null)
    expect(result).toEqual({ status: 'signIn', sent: 0 })
    expect(await store.list()).toHaveLength(2)
  })

  it('sets a refused item aside (never dropped) and with it the answers of a refused create', async () => {
    const store = await storeWith([create, answer('q1'), { kind: 'search.add', testId: 'sie', text: 'bonds' }])
    const send = async (item: OutboxItem): Promise<Outcome> =>
      item.op.kind === 'attempt.create' ? { kind: 'reject', status: 400, message: 'Bad startedAt.' } : { kind: 'done' }
    const result = await replay(store, P, send, () => null)
    expect(result).toEqual({ status: 'idle', sent: 1 })
    const left = await store.list()
    expect(left.map((item) => [item.op.kind, item.setAside?.message])).toEqual([
      ['attempt.create', 'Bad startedAt.'],
      ['attempt.answer', 'This answer belongs to a test the server did not save.'],
    ])
    // Set-aside items are not sent again.
    const again = await replay(store, P, send, () => null)
    expect(again).toEqual({ status: 'idle', sent: 0 })
  })

  it("only replays the signed-in person's items", async () => {
    const store = await storeWith([create], 'someone-else')
    let calls = 0
    await replay(store, P, async () => {
      calls += 1
      return { kind: 'done' }
    }, () => null)
    expect(calls).toBe(0)
    expect(await store.list()).toHaveLength(1)
  })
})

describe('status handling', () => {
  it('treats 2xx and duplicate 409s as done, 400 as set aside, 401 as sign-in, 5xx as retry', () => {
    expect(classify(create, 200, '')).toEqual({ kind: 'done' })
    expect(classify(answer('q'), 409, 'already answered')).toEqual({ kind: 'done' })
    expect(classify(complete, 409, '')).toEqual({ kind: 'done' })
    expect(classify({ kind: 'highlight.delete', highlightId: 'h' }, 404, '')).toEqual({ kind: 'done' })
    expect(classify(create, 409, 'conflict')).toEqual({ kind: 'reject', status: 409, message: 'conflict' })
    expect(classify(create, 400, 'Bad clientId.')).toEqual({ kind: 'reject', status: 400, message: 'Bad clientId.' })
    expect(classify(answer('q'), 401, '')).toEqual({ kind: 'signIn' })
    expect(classify(answer('q'), 503, '')).toEqual({ kind: 'retry' })
    expect(classify(answer('q'), 429, '')).toEqual({ kind: 'retry' })
  })

  it('backs off from 2 s up to 5 min', () => {
    expect(backoffMs(0, () => 0)).toBe(2_000)
    expect(backoffMs(1, () => 0)).toBe(4_000)
    expect(backoffMs(3, () => 0)).toBe(16_000)
    expect(backoffMs(20, () => 1)).toBe(BACKOFF_MAX_MS)
    expect(backoffMs(0, () => 1)).toBe(2_400)
  })

  it('sends clientId, startedAt and completedAt', () => {
    const body = { mode: 'any', questionCount: 2, startedAt: '2026-10-29T11:00:00.000Z' }
    expect(requestFor({ ...create, body } as OutboxOp, {}).body).toEqual({ ...body, clientId: 'L1' })
    expect(requestFor(complete, { L1: 'S1' }).body).toEqual({ completedAt: '2026-10-29T12:00:00.000Z' })
  })
})

describe('conflict rules on enqueue', () => {
  const item = (seq: number, op: OutboxOp): OutboxItem => ({ seq, opId: String(seq), personId: P, createdAt: 'x', op, tries: 0, nextAt: 0 })

  it('keeps only the last progress write for a section', () => {
    const pending = [
      item(1, { kind: 'progress', chapterId: 'c', sectionId: 's', completed: true }),
      item(2, { kind: 'progress', chapterId: 'c', sectionId: 'other', completed: true }),
    ]
    expect(coalesce(pending, { kind: 'progress', chapterId: 'c', sectionId: 's', completed: false })).toEqual({ removeSeqs: [1], add: true })
  })

  it('drops a highlight created and deleted while offline', () => {
    const input = { chapterId: 'c', sectionId: 's', startOffset: 0, endOffset: 4, text: 'risk' }
    const pending = [item(1, { kind: 'highlight.create', localHighlightId: 'h-local', input })]
    expect(coalesce(pending, { kind: 'highlight.delete', highlightId: 'h-local' })).toEqual({ removeSeqs: [1], add: false })
    expect(coalesce(pending, { kind: 'highlight.delete', highlightId: 'h-server' })).toEqual({ removeSeqs: [], add: true })
  })

  it("a clear drops that test's queued search adds and deletes only", () => {
    const pending = [
      item(1, { kind: 'search.add', testId: 'sie', text: 'bonds' }),
      item(2, { kind: 'search.add', testId: 'series-6', text: 'funds' }),
      item(3, { kind: 'search.delete', testId: 'sie', entryId: 'e1' }),
    ]
    expect(coalesce(pending, { kind: 'search.clear', testId: 'sie' })).toEqual({ removeSeqs: [1, 3], add: true })
  })

  it('never coalesces attempts (append-only)', () => {
    const pending = [item(1, create), item(2, answer('q1'))]
    expect(coalesce(pending, answer('q1'))).toEqual({ removeSeqs: [], add: true })
  })
})
