import { LIFE_HEALTH_ID } from '../content/catalog.ts'

export type SummaryProgress = {
  sectionId: string
  completed: boolean
  completedAt: string | null
}

export type SummarySeen = {
  questionId: string
  firstSeenUtc: string
}

export type SummaryAttempt = {
  testId?: string
  startedAt: string
  completedAt: string | null
  answeredCount: number
  correctCount: number
  percent: number
}

export type TestSummary = {
  sectionsRead: number
  sectionsTotal: number
  questionsAnswered: number
  practiceAccuracy: number | null
  lastEffortAt: string | null
}

function stamp(value: string | null | undefined) {
  if (!value) return 0
  const ms = Date.parse(value)
  return Number.isFinite(ms) ? ms : 0
}

/** Missing test id means a record saved before tests were split. Those stay on Life and Health. */
export function attemptBelongsToTest(attempt: { testId?: string }, testId: string) {
  return (attempt.testId || LIFE_HEALTH_ID) === testId
}

/**
 * Reading progress, practice accuracy, questions answered, and the latest effort date.
 * Accuracy is correct answers divided by answers on finished practice tests.
 */
export function summarizeTest(input: {
  testId: string
  sectionIds: readonly string[]
  progress: readonly SummaryProgress[]
  seen: readonly SummarySeen[]
  attempts: readonly SummaryAttempt[]
  /** When a chapter or section was last opened in Study (synced study state). */
  lastStudiedAt?: string | null
}): TestSummary {
  const sections = new Set(input.sectionIds)
  const read = input.progress.filter((row) => row.completed && sections.has(row.sectionId))
  const attempts = input.attempts.filter((attempt) => attemptBelongsToTest(attempt, input.testId))
  const finished = attempts.filter((attempt) => attempt.completedAt)
  const answered = finished.reduce((sum, attempt) => sum + attempt.answeredCount, 0)
  const correct = finished.reduce((sum, attempt) => sum + attempt.correctCount, 0)
  const dates = [
    ...read.map((row) => row.completedAt),
    ...attempts.flatMap((attempt) => [attempt.startedAt, attempt.completedAt]),
    ...input.seen.map((row) => row.firstSeenUtc),
    input.lastStudiedAt,
  ]
  let lastMs = 0
  let lastEffortAt: string | null = null
  for (const value of dates) {
    const ms = stamp(value)
    if (ms > lastMs && value) {
      lastMs = ms
      lastEffortAt = value
    }
  }
  return {
    sectionsRead: read.length,
    sectionsTotal: input.sectionIds.length,
    questionsAnswered: attempts.reduce((sum, attempt) => sum + attempt.answeredCount, 0),
    practiceAccuracy: answered > 0 ? (correct / answered) * 100 : null,
    lastEffortAt,
  }
}
