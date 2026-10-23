import { describe, expect, it } from 'vitest'
import {
  ACTIVE_WINDOW_MS,
  advanceClock,
  enqueueEvents,
  flushClock,
  initialClock,
  markActive,
  MAX_EVENT_SECONDS,
  MAX_EVENTS_PER_REQUEST,
  nextBatch,
  outcomeForStatus,
  queueAfterSend,
  splitStudySeconds,
  syncChapter,
  withVisibility,
  type ActivityEvent,
  type StudyClock,
} from './activity.ts'

const start = Date.parse('2026-10-23T14:00:00.000Z')

function openChapter(chapterId: string, at = start): StudyClock {
  const opened = syncChapter(initialClock(), chapterId, at).clock
  return withVisibility(markActive(opened, at), true, at)
}

describe('active study seconds', () => {
  it('counts only while the tab is visible and the reader was active in the last 2 minutes', () => {
    const clock = openChapter('ch-general')
    const ten = advanceClock(clock, start + 10_000)
    expect(Math.floor(ten.accruedMs / 1000)).toBe(10)

    const hidden = withVisibility(ten, false, start + 15_000)
    const stillHidden = advanceClock(hidden, start + 25_000)
    expect(Math.floor(stillHidden.accruedMs / 1000)).toBe(15)

    const shown = withVisibility(stillHidden, true, start + 25_000)
    const idle = advanceClock(shown, start + ACTIVE_WINDOW_MS + 10_000)
    expect(Math.floor(idle.accruedMs / 1000)).toBe(110)

    const resumed = markActive(idle, start + ACTIVE_WINDOW_MS + 10_000)
    const more = advanceClock(resumed, start + ACTIVE_WINDOW_MS + 15_000)
    expect(Math.floor(more.accruedMs / 1000)).toBe(115)
  })

  it('does not count a chapter the reader has not touched, and flushes the previous chapter on a change', () => {
    const quiet = advanceClock(syncChapter(initialClock(), 'ch-policies', start).clock, start + 30_000)
    expect(flushClock(quiet, start + 30_000).events).toEqual([])

    const reading = openChapter('ch-policies')
    const changed = syncChapter(advanceClock(reading, start + 4_000), 'ch-provisions', start + 4_000)
    expect(changed.events).toEqual([
      {
        kind: 'study',
        chapterId: 'ch-policies',
        seconds: 4,
        occurredAtUtc: new Date(start).toISOString(),
      },
    ])
    expect(changed.clock.chapterId).toBe('ch-provisions')
    expect(changed.clock.accruedMs).toBe(0)
  })

  it('skips a flush of zero seconds and stamps the event when the stretch started', () => {
    const clock = openChapter('ch-annuities')
    expect(flushClock(clock, start).events).toEqual([])
    const flushed = flushClock(advanceClock(clock, start + 2_500), start + 2_500)
    expect(flushed.events).toEqual([
      {
        kind: 'study',
        chapterId: 'ch-annuities',
        seconds: 2,
        occurredAtUtc: new Date(start).toISOString(),
      },
    ])
    expect(flushed.clock.accruedMs).toBe(0)
  })
})

describe('chunking', () => {
  it('caps each study event at 7200 seconds and continues the stretch on the next event', () => {
    const occurredAtUtc = '2026-10-23T14:00:00.000Z'
    expect(splitStudySeconds('ch-utah', 0, occurredAtUtc)).toEqual([])
    expect(splitStudySeconds('ch-utah', MAX_EVENT_SECONDS, occurredAtUtc)).toEqual([
      { kind: 'study', chapterId: 'ch-utah', seconds: 7200, occurredAtUtc },
    ])
    expect(splitStudySeconds('ch-utah', 7201, occurredAtUtc)).toEqual([
      { kind: 'study', chapterId: 'ch-utah', seconds: 7200, occurredAtUtc },
      { kind: 'study', chapterId: 'ch-utah', seconds: 1, occurredAtUtc: '2026-10-23T16:00:00.000Z' },
    ])
  })

  it('sends at most 50 events and keeps the rest queued', () => {
    const incoming: ActivityEvent[] = Array.from({ length: 60 }, (_, index) => ({
      kind: 'login',
      chapterId: null,
      seconds: 0,
      occurredAtUtc: new Date(start + index * 1000).toISOString(),
    }))
    const queued = enqueueEvents([], [
      ...incoming,
      { kind: 'study', chapterId: 'ch-general', seconds: 0, occurredAtUtc: new Date(start).toISOString() },
      { kind: 'test', chapterId: 'ch-general', seconds: 30, occurredAtUtc: new Date(start).toISOString() },
    ])
    expect(queued).toHaveLength(60)
    const { batch, rest } = nextBatch(queued)
    expect(batch).toHaveLength(MAX_EVENTS_PER_REQUEST)
    expect(rest).toHaveLength(10)
    expect(batch[0]?.kind).toBe('login')
  })

  it('splits one long study stretch across the batch limit', () => {
    const queued = enqueueEvents([], [
      {
        kind: 'study',
        chapterId: 'ch-health',
        seconds: MAX_EVENT_SECONDS * 51,
        occurredAtUtc: '2026-10-23T14:00:00.000Z',
      },
    ])
    expect(queued).toHaveLength(51)
    expect(queued[0]?.seconds).toBe(7200)
    expect(queued[50]?.seconds).toBe(7200)
    expect(nextBatch(queued).batch).toHaveLength(50)
    expect(nextBatch(queued).rest).toHaveLength(1)
  })
})

describe('queue drop rules', () => {
  const batch: ActivityEvent[] = [
    { kind: 'login', chapterId: null, seconds: 0, occurredAtUtc: '2026-10-23T14:00:00.000Z' },
    { kind: 'study', chapterId: 'ch-dental', seconds: 12, occurredAtUtc: '2026-10-23T14:01:00.000Z' },
  ]
  const extra: ActivityEvent = {
    kind: 'study',
    chapterId: 'ch-medicare',
    seconds: 3,
    occurredAtUtc: '2026-10-23T14:02:00.000Z',
  }
  const queue = [...batch, extra]

  it('drops the attempted batch on 404 and any other 4xx, and retries network and 5xx', () => {
    expect(outcomeForStatus(404)).toBe('drop')
    expect(outcomeForStatus(400)).toBe('drop')
    expect(outcomeForStatus(401)).toBe('drop')
    expect(outcomeForStatus(200)).toBe('ok')
    expect(outcomeForStatus(503)).toBe('retry')
    expect(outcomeForStatus('network')).toBe('retry')

    expect(queueAfterSend(queue, batch, 'drop')).toEqual([extra])
    expect(queueAfterSend(queue, batch, 'ok')).toEqual([extra])
    expect(queueAfterSend(queue, batch, 'retry')).toEqual(queue)
  })
})
