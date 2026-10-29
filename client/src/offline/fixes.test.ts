import { describe, expect, it, vi } from 'vitest'
import { courseQuestions, LIFE_HEALTH_ID, SIE_ID } from '../content/catalog.ts'
import { dedupeAttempts } from '../study/attemptDedupe.ts'
import { resolveAttemptTestId as resolveAttemptTestIdLoaded } from '../study/attemptTest.ts'
import { coalesce, memoryOutboxStore, replay, requestFor, type OutboxItem, type OutboxOp } from './outbox.ts'

const P = 'p'
const item = (seq: number, op: OutboxOp): OutboxItem => ({ seq, opId: String(seq), personId: P, createdAt: 'x', op, tries: 0, nextAt: 0 })

describe('offline search typed then deleted', () => {
  it('cancels both when the add has not synced', () => {
    const pending = [item(1, { kind: 'search.add', testId: 'sie', text: 'bonds', localEntryId: 'e-local' })]
    expect(coalesce(pending, { kind: 'search.delete', testId: 'sie', entryId: 'e-local' })).toEqual({ removeSeqs: [1], add: false })
  })

  it('deletes by the server id once the add synced', async () => {
    const store = memoryOutboxStore()
    const base = { personId: P, createdAt: 'x', tries: 0, nextAt: 0 }
    await store.add({ ...base, opId: 'a', op: { kind: 'search.add', testId: 'sie', text: 'bonds', localEntryId: 'e-local' } })
    const paths: string[] = []
    const onDone = (done: OutboxItem) => (done.op.kind === 'search.add' ? 'e-server' : null)
    await replay(store, P, async (sent, ids) => {
      paths.push(requestFor(sent.op, ids).path)
      return { kind: 'done' }
    }, onDone)
    // The delete is queued after the add already went out, still with the browser id.
    await store.add({ ...base, opId: 'b', op: { kind: 'search.delete', testId: 'sie', entryId: 'e-local' } })
    await replay(store, P, async (sent, ids) => {
      paths.push(requestFor(sent.op, ids).path)
      return { kind: 'done' }
    }, onDone)
    expect(paths).toEqual(['api/wealthEdAgent/study/search-history', 'api/wealthEdAgent/study/search-history/e-server'])
    expect(await store.list()).toEqual([])
  })
})

describe('attempt list de-duplication', () => {
  const server = { attemptId: 'S1', startedAt: '2026-10-29T10:00:00Z', clientId: 'L1', testId: 'life-health', percent: 80 }
  const local = { attemptId: 'L1', startedAt: '2026-10-29T10:00:00Z', clientId: 'L1', testId: 'sie', percent: 50 }

  it('matches by clientId and prefers the server row, keeping the test the browser knows', () => {
    expect(dedupeAttempts([server], [local])).toEqual([{ ...server, testId: 'sie' }])
  })

  it('matches by the mapped server id when the server returns no clientId (before the SQL)', () => {
    const noClient = { ...server, clientId: null }
    const rows = dedupeAttempts([noClient], [{ ...local, clientId: null }], { L1: 'S1' })
    expect(rows).toHaveLength(1)
    expect(rows[0]!.attemptId).toBe('S1')
    expect(rows[0]!.percent).toBe(80)
  })

  it('keeps a browser-only attempt and different attempts apart', () => {
    const other = { attemptId: 'L2', startedAt: '2026-10-29T11:00:00Z', testId: 'sie' }
    expect(dedupeAttempts([server], [other]).map((row) => row.attemptId)).toEqual(['L2', 'S1'])
  })
})

describe('attempt test offline', () => {
  const sieIds = courseQuestions(SIE_ID).slice(0, 3).map((q) => q.id)
  const lhQuestions = courseQuestions(LIFE_HEALTH_ID)
  const lhIds = lhQuestions.slice(0, 2).map((q) => q.id)

  it('marks an attempt unknown when its questions belong to a test that is not loaded', async () => {
    vi.resetModules()
    // Offline with only Life and Health saved: the other packs are not loaded.
    vi.doMock('../content/catalog.ts', async (importOriginal) => {
      const real = await importOriginal<typeof import('../content/catalog.ts')>()
      return {
        ...real,
        allPacksLoaded: () => false,
        courseQuestions: (testId: string) => (testId === LIFE_HEALTH_ID ? lhQuestions : []),
      }
    })
    const { resolveAttemptTestId, UNKNOWN_TEST_ID } = await import('../study/attemptTest.ts')
    const { attemptBelongsToTest } = await import('../study/testSummary.ts')
    const testId = resolveAttemptTestId('life-health', undefined, sieIds)
    expect(testId).toBe(UNKNOWN_TEST_ID)
    for (const id of [LIFE_HEALTH_ID, SIE_ID]) expect(attemptBelongsToTest({ testId }, id)).toBe(false)
    // A server or stored test id still wins, and Life and Health questions still match.
    expect(resolveAttemptTestId('series-6', undefined, sieIds)).toBe('series-6')
    expect(resolveAttemptTestId('life-health', 'sie', sieIds)).toBe('sie')
    expect(resolveAttemptTestId('life-health', undefined, lhIds)).toBe(LIFE_HEALTH_ID)
    vi.doUnmock('../content/catalog.ts')
    vi.resetModules()
  })

  it('resolves as before once all content is loaded', () => {
    expect(resolveAttemptTestIdLoaded('life-health', undefined, sieIds)).toBe(SIE_ID)
  })
})
