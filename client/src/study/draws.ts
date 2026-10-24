export type Draw = {
  questionIds: string[]
  optionOrder: Record<string, string[]>
  /** Seconds recorded while this browser took the test. Missing on older draws. */
  secondsByQuestion?: Record<string, number>
}

const KEY = 'wealthEdAgent.draws.v1'

type Store = Record<string, Record<string, Draw>>

function read(): Store {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as Store) : {}
  } catch {
    return {}
  }
}

function write(store: Store) {
  localStorage.setItem(KEY, JSON.stringify(store))
}

export function saveDraw(personId: string, attemptId: string, draw: Draw) {
  const store = read()
  store[personId] = { ...(store[personId] ?? {}), [attemptId]: draw }
  write(store)
}

export function loadDraw(personId: string, attemptId: string): Draw | null {
  return read()[personId]?.[attemptId] ?? null
}

/** Keep the original draw and mirror it under the server attempt id after an upload. */
export function copyDraw(personId: string, fromAttemptId: string, toAttemptId: string) {
  if (!personId || !fromAttemptId || !toAttemptId || fromAttemptId === toAttemptId) return
  const store = read()
  const draws = store[personId]
  const from = draws?.[fromAttemptId]
  if (!from || draws[toAttemptId]) return
  draws[toAttemptId] = from
  write(store)
}

/** Question ids already handed out in this browser, so a second unseen test does not repeat them. */
export function reservedQuestionIds(personId: string) {
  const draws = read()[personId] ?? {}
  const ids = new Set<string>()
  Object.values(draws).forEach((draw) => draw.questionIds.forEach((id) => ids.add(id)))
  return ids
}

const RESUME = 'wealthEdAgent.resume.v1'

type ResumeValue = string | Record<string, string>

export function saveResume(personId: string, sectionId: string, testId = 'life-health') {
  const all = readResumeMap()
  const current = all[personId]
  const record: Record<string, string> =
    current && typeof current === 'object' ? { ...current } : typeof current === 'string' ? { 'life-health': current } : {}
  record[testId] = sectionId
  all[personId] = record
  localStorage.setItem(RESUME, JSON.stringify(all))
}

export function loadResume(personId: string, testId = 'life-health') {
  const value = readResumeMap()[personId]
  if (!value) return null
  if (typeof value === 'string') return testId === 'life-health' ? value : null
  return value[testId] ?? null
}

function readResumeMap() {
  try {
    const raw = localStorage.getItem(RESUME)
    return raw ? (JSON.parse(raw) as Record<string, ResumeValue>) : {}
  } catch {
    return {}
  }
}

/** testId -> sectionId from the old browser-only resume key. */
export function resumeEntries(personId: string): Record<string, string> {
  const value = readResumeMap()[personId]
  if (!value) return {}
  if (typeof value === 'string') return { 'life-health': value }
  return { ...value }
}
