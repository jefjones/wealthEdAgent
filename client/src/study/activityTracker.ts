import { mockApiEnabled, postActivity, STORAGE } from '../api/client.ts'
import {
  enqueueEvents,
  flushClock,
  initialClock,
  markActive,
  nextBatch,
  outcomeForStatus,
  queueAfterSend,
  syncChapter,
  withVisibility,
  type ActivityEvent,
  type StudyClock,
} from './activity.ts'

export const ACTIVITY_QUEUE_KEY = 'wealthEdAgent.activity.v1'

const state: { clock: StudyClock; queue: ActivityEvent[]; sending: boolean; loaded: boolean } = {
  clock: initialClock(),
  queue: [],
  sending: false,
  loaded: false,
}

let generation = 0
let inflight: ActivityEvent[] = []

function isEvent(value: unknown): value is ActivityEvent {
  if (!value || typeof value !== 'object') return false
  const row = value as ActivityEvent
  const kindOk = row.kind === 'study' || row.kind === 'test' || row.kind === 'login'
  const chapterOk = row.chapterId === null || typeof row.chapterId === 'string'
  return kindOk && chapterOk && Number.isInteger(row.seconds) && typeof row.occurredAtUtc === 'string'
}

function readQueue(): ActivityEvent[] {
  try {
    const raw = localStorage.getItem(ACTIVITY_QUEUE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw) as unknown
    if (!Array.isArray(parsed)) return []
    return enqueueEvents([], parsed.filter(isEvent))
  } catch {
    return []
  }
}

function saveQueue(queue: readonly ActivityEvent[]) {
  localStorage.setItem(ACTIVITY_QUEUE_KEY, JSON.stringify(queue))
}

function ensure() {
  if (state.loaded || typeof localStorage === 'undefined') return
  state.loaded = true
  state.queue = readQueue()
}

function remember(events: readonly ActivityEvent[]) {
  if (mockApiEnabled() || events.length === 0) return
  ensure()
  state.queue = enqueueEvents(state.queue, events)
  saveQueue(state.queue)
  void sendQueued()
}

async function sendQueued() {
  if (state.sending || mockApiEnabled()) return
  const { batch } = nextBatch(state.queue)
  if (batch.length === 0) return
  const gen = generation
  state.sending = true
  inflight = batch
  const outcome = await postActivity(batch)
  if (gen !== generation) return
  state.sending = false
  inflight = []
  if (outcome === 'skipped') return
  const decided = outcome === 'retry' ? outcomeForStatus('network') : outcome
  state.queue = queueAfterSend(state.queue, batch, decided)
  saveQueue(state.queue)
  if (decided !== 'retry' && state.queue.length > 0) void sendQueued()
}

export function noteActivity(nowMs = Date.now()) {
  ensure()
  state.clock = markActive(state.clock, nowMs)
}

export function showActivity(visible: boolean, nowMs = Date.now()) {
  ensure()
  state.clock = withVisibility(state.clock, visible, nowMs)
}

export function syncActivityChapter(chapterId: string | null, nowMs = Date.now()) {
  ensure()
  const result = syncChapter(state.clock, chapterId, nowMs)
  state.clock = result.clock
  remember(result.events)
}

export function flushActivity(nowMs = Date.now()) {
  ensure()
  const result = flushClock(state.clock, nowMs)
  state.clock = result.clock
  remember(result.events)
}

/** One login event after a successful sign-in. Not used for a restored session or a token refresh. */
export function recordLogin(now = new Date()) {
  remember([
    {
      kind: 'login',
      chapterId: null,
      seconds: 0,
      occurredAtUtc: now.toISOString(),
    },
  ])
}

/** Send whatever is pending, then forget it. A later sign-in must not retry the previous person's time. */
export function logoutActivity(nowMs = Date.now()) {
  ensure()
  generation += 1
  state.sending = false
  const result = flushClock(state.clock, nowMs)
  const pending = enqueueEvents(state.queue, result.events)
  const leftover = queueAfterSend(pending, inflight, 'ok')
  inflight = []
  state.clock = initialClock()
  state.queue = []
  saveQueue([])
  if (mockApiEnabled() || leftover.length === 0) return
  const token = localStorage.getItem(STORAGE.token) ?? ''
  for (let index = 0; index < leftover.length; index += 50) {
    void postActivity(leftover.slice(index, index + 50), token)
  }
}
