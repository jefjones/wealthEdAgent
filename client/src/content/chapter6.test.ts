import { describe, expect, it } from 'vitest'
import { chapter6 } from './chapter6.ts'
import { allQuestions, flatSections, studyPack } from './pack.ts'
import { drawQuestions } from '../study/draw.ts'

describe('chapter 6', () => {
  it('loads Retirement Plans like 401(k)s and IRAs with unique section ids', () => {
    expect(studyPack.chapters.map((chapter) => chapter.id)).toContain('ch-qualified')
    expect(chapter6.number).toBe(6)
    expect(chapter6.sections.length).toBeGreaterThan(0)
    const sectionIds = chapter6.sections.map((section) => section.id)
    expect(new Set(sectionIds).size).toBe(sectionIds.length)
    for (const id of sectionIds) {
      expect(id.startsWith('c6-')).toBe(true)
      expect(flatSections().filter((section) => section.id === id)).toHaveLength(1)
    }
  })

  it('adds valid questions to the practice pool without colliding with earlier chapters', () => {
    const questions = chapter6.sections.flatMap((section) => section.questions)
    expect(questions.length).toBeGreaterThanOrEqual(15)
    const earlier = new Set(
      studyPack.chapters
        .filter((chapter) => chapter.number < chapter6.number)
        .flatMap((chapter) => chapter.sections.flatMap((section) => section.questions.map((question) => question.id))),
    )
    for (const section of chapter6.sections) {
      expect(section.questions.length).toBeGreaterThan(0)
    }
    for (const question of questions) {
      expect(question.id.startsWith('c6q')).toBe(true)
      expect(earlier.has(question.id)).toBe(false)
      expect(question.options).toHaveLength(4)
      expect(question.options.filter((option) => option.correct)).toHaveLength(1)
    }
    const bank = allQuestions().map((question) => ({
      id: question.id,
      optionIds: question.options.map((option) => option.id),
    }))
    expect(bank.some((question) => question.id.startsWith('c6q'))).toBe(true)
    const seen = new Set(questions.map((question) => question.id))
    const unseen = drawQuestions(bank, seen, 3, 'unseen', () => 0)
    expect(unseen.every((row) => !row.questionId.startsWith('c6q'))).toBe(true)
    const fromChapter = drawQuestions(
      bank.filter((question) => question.id.startsWith('c6q')),
      new Set(),
      3,
      'unseen',
      () => 0,
    )
    expect(fromChapter).toHaveLength(3)
  })
})