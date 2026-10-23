/**
 * Study-time accounting for POST study/activity.
 * Chapter ids are the same values the progress routes already store
 * (`ch-general`, `ch-basics`, and the other chapter ids).
 * This module does not send requests.
 */

export const ACTIVE_WINDOW_MS = 2 * 60 * 1000
export const FLUSH_INTERVAL_MS = 5 * 60 * 1000
export const MAX_EVENT_SECONDS = 7200
export const MAX_EVENTS_PER_REQUEST = 50

export type ActivityKind = 'study' | 'test' | 'login'

export type ActivityEvent = {
  kind: ActivityKind
  chapterId: string | null
  seconds: number
  occurredAtUtc: string
}

export type StudyClock = {
  chapterId: string | null
  visible: boolean
  lastActiveAtMs: number | null
  lastTickAtMs: number | null
  stretchStartedAtMs: number | null
  accruedMs: number
}

export type SendOutcome = 'ok' | 'drop' | 'retry'

export function initialClock(): StudyClock {
  return {
    chapterId: null,
    visible: false,
    lastActiveAtMs: null,
    lastTickAtMs: null,
    stretchStartedAtMs: null,
    accruedMs: 0,
  }
}

/** Add active time since the previous tick. Call this before changing visibility, chapter, or activity. */
export function advanceClock(clock: StudyClock, nowMs: number): StudyClock {
  const next: StudyClock = { ...clock }
  if (next.lastTickAtMs == null) {
    next.lastTickAtMs = nowMs
    return next
  }
  const from = next.lastTickAtMs
  next.lastTickAtMs = nowMs
  if (nowMs <= from) return next
  if (!next.chapterId || !next.visible || next.lastActiveAtMs == null) return next
  const countUntil = Math.min(nowMs, next.lastActiveAtMs + ACTIVE_WINDOW_MS)
  if (countUntil <= from) return next
  if (next.stretchStartedAtMs == null) next.stretchStartedAtMs = from
  next.accruedMs += countUntil - from
  return next
}

export function markActive(clock: StudyClock, nowMs: number): StudyClock {
  const advanced = advanceClock(clock, nowMs)
  return { ...advanced, lastActiveAtMs: nowMs }
}

export function withVisibility(clock: StudyClock, visible: boolean, nowMs: number): StudyClock {
  const advanced = advanceClock(clock, nowMs)
  return { ...advanced, visible }
}

export function syncChapter(
  clock: StudyClock,
  chapterId: string | null,
  nowMs: number,
): { clock: StudyClock; events: ActivityEvent[] } {
  const advanced = advanceClock(clock, nowMs)
  if (advanced.chapterId === chapterId) return { clock: advanced, events: [] }
  return {
    clock: { ...advanced, chapterId, accruedMs: 0, stretchStartedAtMs: null },
    events: studyEventsFrom(advanced),
  }
}

/** Take whole active seconds and start the next stretch clean. Sub-second remainder is dropped. */
export function flushClock(clock: StudyClock, nowMs: number): { clock: StudyClock; events: ActivityEvent[] } {
  const advanced = advanceClock(clock, nowMs)
  const events = studyEventsFrom(advanced)
  if (events.length === 0) return { clock: advanced, events }
  return { clock: { ...advanced, accruedMs: 0, stretchStartedAtMs: null }, events }
}

export function studyEventsFrom(clock: StudyClock): ActivityEvent[] {
  if (!clock.chapterId || clock.stretchStartedAtMs == null) return []
  const seconds = Math.floor(clock.accruedMs / 1000)
  if (seconds <= 0) return []
  return splitStudySeconds(clock.chapterId, seconds, new Date(clock.stretchStartedAtMs).toISOString())
}

/** Split a study stretch into events of at most 7200 seconds. Zero seconds produces nothing. */
export function splitStudySeconds(chapterId: string, seconds: number, occurredAtUtc: string): ActivityEvent[] {
  if (!chapterId || !Number.isInteger(seconds) || seconds <= 0) return []
  const start = Date.parse(occurredAtUtc)
  if (!Number.isFinite(start)) return []
  const events: ActivityEvent[] = []
  let left = seconds
  let at = start
  while (left > 0) {
    const chunk = Math.min(left, MAX_EVENT_SECONDS)
    events.push({
      kind: 'study',
      chapterId,
      seconds: chunk,
      occurredAtUtc: new Date(at).toISOString(),
    })
    left -= chunk
    at += chunk * 1000
  }
  return events
}

/** Drop test events and empty study stretches. Cap login seconds. Split long study stretches. */
export function normalizeEvents(events: readonly ActivityEvent[]): ActivityEvent[] {
  const out: ActivityEvent[] = []
  for (const event of events) {
    if (event.kind === 'test') continue
    if (!Number.isInteger(event.seconds) || event.seconds < 0) continue
    if (event.kind === 'login') {
      out.push({
        kind: 'login',
        chapterId: null,
        seconds: Math.min(event.seconds, MAX_EVENT_SECONDS),
        occurredAtUtc: event.occurredAtUtc,
      })
      continue
    }
    if (event.kind !== 'study' || !event.chapterId) continue
    out.push(...splitStudySeconds(event.chapterId, event.seconds, event.occurredAtUtc))
  }
  return out
}

export function enqueueEvents(queue: readonly ActivityEvent[], incoming: readonly ActivityEvent[]): ActivityEvent[] {
  return [...queue, ...normalizeEvents(incoming)]
}

export function nextBatch(queue: readonly ActivityEvent[], limit = MAX_EVENTS_PER_REQUEST): {
  batch: ActivityEvent[]
  rest: ActivityEvent[]
} {
  return { batch: queue.slice(0, limit), rest: queue.slice(limit) }
}

/** 2xx is stored. Any 4xx, including 404, is dropped after that one attempt. Network and 5xx stay queued. */
export function outcomeForStatus(status: number | 'network'): SendOutcome {
  if (status === 'network') return 'retry'
  if (status >= 200 && status < 300) return 'ok'
  if (status >= 400 && status < 500) return 'drop'
  return 'retry'
}

export function queueAfterSend(
  queue: readonly ActivityEvent[],
  batch: readonly ActivityEvent[],
  outcome: SendOutcome,
): ActivityEvent[] {
  if (outcome === 'retry') return [...queue]
  let index = 0
  for (const event of batch) {
    const current = queue[index]
    if (!current || !sameEvent(current, event)) return [...queue]
    index += 1
  }
  return queue.slice(index)
}

function sameEvent(left: ActivityEvent, right: ActivityEvent): boolean {
  return (
    left.kind === right.kind &&
    left.chapterId === right.chapterId &&
    left.seconds === right.seconds &&
    left.occurredAtUtc === right.occurredAtUtc
  )
}
