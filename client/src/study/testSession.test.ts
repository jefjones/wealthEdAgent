import { describe, expect, it } from 'vitest'
import {
  NO_CHAPTER_MESSAGE,
  chapterSelectionError,
  formatQuestionTime,
  formatTotalTime,
  nextIncorrectIndex,
  questionSeconds,
  questionsInChapters,
  secondsSpent,
  totalTimeSeconds,
} from './testSession.ts'

describe('seconds per question', () => {
  it('measures whole seconds between display and answer', () => {
    expect(secondsSpent(1_000, 4_400)).toBe(3)
    expect(secondsSpent(1_000, 1_000)).toBe(0)
    expect(secondsSpent(5_000, 1_000)).toBe(0)
    expect(secondsSpent(Number.NaN, 1_000)).toBe(0)
    expect(secondsSpent(0, 5_000)).toBe(0)
  })

  it('uses the stored result, then the recorded time, and a dash when both are missing', () => {
    expect(questionSeconds(8, 3)).toBe(8)
    expect(questionSeconds(undefined, 3)).toBe(3)
    expect(questionSeconds(null, undefined)).toBeNull()
    expect(formatQuestionTime(questionSeconds(undefined, undefined))).toBe('—')
    expect(formatQuestionTime(12)).toBe('12s')
    expect(formatQuestionTime(0)).toBe('0s')
  })

  it('sums recorded times and leaves the total blank when none exist', () => {
    expect(totalTimeSeconds([4, undefined, 6])).toBe(10)
    expect(totalTimeSeconds([undefined, null])).toBeNull()
    expect(formatTotalTime(null)).toBe('—')
    expect(formatTotalTime(45)).toBe('45s')
    expect(formatTotalTime(75)).toBe('1m 15s')
  })
})

describe('next incorrect question', () => {
  const flags = [true, false, null, true, false]

  it('jumps to the next incorrect answer after the current question', () => {
    expect(nextIncorrectIndex(flags, 0)).toBe(1)
    expect(nextIncorrectIndex(flags, 1)).toBe(4)
  })

  it('returns null when no incorrect question remains', () => {
    expect(nextIncorrectIndex(flags, 4)).toBeNull()
    expect(nextIncorrectIndex([true, true, null], 0)).toBeNull()
    expect(nextIncorrectIndex(flags, 9)).toBeNull()
  })
})

describe('chapter selection', () => {
  const bank = [
    { id: 'a', chapterId: 'ch-general' },
    { id: 'b', chapterId: 'ch-life' },
    { id: 'c', chapterId: 'ch-general' },
    { id: 'd', chapterId: 'ch-utah' },
  ]

  it('keeps only questions from the checked chapters', () => {
    expect(questionsInChapters(bank, ['ch-general', 'ch-utah']).map((row) => row.id)).toEqual(['a', 'c', 'd'])
    expect(questionsInChapters(bank, ['ch-life']).map((row) => row.id)).toEqual(['b'])
  })

  it('requires at least one checked chapter', () => {
    expect(chapterSelectionError([])).toBe(NO_CHAPTER_MESSAGE)
    expect(chapterSelectionError(['ch-general'])).toBeNull()
    expect(() => questionsInChapters(bank, [])).toThrow(NO_CHAPTER_MESSAGE)
  })
})
