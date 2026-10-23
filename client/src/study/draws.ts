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

/** Question ids already handed out in this browser, so a second unseen test does not repeat them. */
export function reservedQuestionIds(personId: string) {
  const draws = read()[personId] ?? {}
  const ids = new Set<string>()
  Object.values(draws).forEach((draw) => draw.questionIds.forEach((id) => ids.add(id)))
  return ids
}

const RESUME = 'wealthEdAgent.resume.v1'

export function saveResume(personId: string, sectionId: string) {
  const all = readResumeMap()
  all[personId] = sectionId
  localStorage.setItem(RESUME, JSON.stringify(all))
}

export function loadResume(personId: string) {
  return readResumeMap()[personId] ?? null
}

function readResumeMap() {
  try {
    const raw = localStorage.getItem(RESUME)
    return raw ? (JSON.parse(raw) as Record<string, string>) : {}
  } catch {
    return {}
  }
}
