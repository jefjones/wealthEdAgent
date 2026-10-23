/** Whole seconds from when a question was shown until it was answered. */
export function secondsSpent(shownAtMs: number, answeredAtMs: number): number {
  if (!Number.isFinite(shownAtMs) || !Number.isFinite(answeredAtMs)) return 0
  if (shownAtMs <= 0 || answeredAtMs <= 0) return 0
  const delta = answeredAtMs - shownAtMs
  if (delta <= 0) return 0
  return Math.round(delta / 1000)
}

/**
 * Seconds stored on the result, or the seconds recorded while the test was taken.
 * Null when an older result has neither.
 */
export function questionSeconds(
  fromResult: number | null | undefined,
  recorded: number | null | undefined,
): number | null {
  const value = typeof fromResult === 'number' && Number.isFinite(fromResult) ? fromResult : recorded
  if (typeof value !== 'number' || !Number.isFinite(value) || value < 0) return null
  return Math.round(value)
}

export function formatQuestionTime(seconds: number | null | undefined): string {
  if (seconds == null) return '—'
  return `${seconds}s`
}

/** Sum of recorded question times. Null when no question has timing. */
export function totalTimeSeconds(seconds: readonly (number | null | undefined)[]): number | null {
  const known = seconds.filter((value): value is number => typeof value === 'number' && Number.isFinite(value) && value >= 0)
  if (known.length === 0) return null
  return known.reduce((sum, value) => sum + value, 0)
}

export function formatTotalTime(seconds: number | null): string {
  if (seconds == null) return '—'
  const whole = Math.max(0, Math.round(seconds))
  const hours = Math.floor(whole / 3600)
  const minutes = Math.floor((whole % 3600) / 60)
  const rest = whole % 60
  if (hours > 0) return `${hours}h ${minutes}m ${rest}s`
  if (minutes > 0) return `${minutes}m ${rest}s`
  return `${rest}s`
}

/**
 * Index of the next incorrectly answered question after `fromIndex`.
 * Null when none remain after the current question.
 */
export function nextIncorrectIndex(
  correct: readonly (boolean | null | undefined)[],
  fromIndex: number,
): number | null {
  for (let index = fromIndex + 1; index < correct.length; index += 1) {
    if (correct[index] === false) return index
  }
  return null
}

export const NO_CHAPTER_MESSAGE = 'Choose at least one chapter.'

export function chapterSelectionError(chapterIds: readonly string[]): string | null {
  return chapterIds.length === 0 ? NO_CHAPTER_MESSAGE : null
}

/** Questions whose chapter is checked. Throws when no chapter is checked. */
export function questionsInChapters<T extends { chapterId: string }>(
  questions: readonly T[],
  chapterIds: readonly string[],
): T[] {
  const message = chapterSelectionError(chapterIds)
  if (message) throw new Error(message)
  const selected = new Set(chapterIds)
  return questions.filter((question) => selected.has(question.chapterId))
}
