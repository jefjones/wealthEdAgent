import { describe, expect, it } from 'vitest'
import { chapter13 } from './chapter13.ts'
import { allQuestions, flatSections, studyPack } from './pack.ts'
import { drawQuestions } from '../study/draw.ts'

describe('chapter 13', () => {
  it('loads Medicare and Long-Term Care with unique section ids', () => {
    expect(studyPack.chapters.map((chapter) => chapter.id)).toContain('ch-medicare')
    expect(chapter13.number).toBe(13)
    expect(chapter13.sections.length).toBeGreaterThan(0)
    const sectionIds = chapter13.sections.map((section) => section.id)
    expect(new Set(sectionIds).size).toBe(sectionIds.length)
    for (const id of sectionIds) {
      expect(id.startsWith('c13-')).toBe(true)
      expect(flatSections().filter((section) => section.id === id)).toHaveLength(1)
    }
  })

  it('adds valid questions to the practice pool without colliding with earlier chapters', () => {
    const questions = chapter13.sections.flatMap((section) => section.questions)
    expect(questions.length).toBeGreaterThanOrEqual(15)
    const earlier = new Set(
      studyPack.chapters
        .filter((chapter) => chapter.number < chapter13.number)
        .flatMap((chapter) => chapter.sections.flatMap((section) => section.questions.map((question) => question.id))),
    )
    const ids = questions.map((question) => question.id)
    expect(new Set(ids).size).toBe(ids.length)
    for (const section of chapter13.sections) {
      expect(section.questions.length).toBeGreaterThan(0)
    }
    for (const question of questions) {
      expect(question.id.startsWith('c13q')).toBe(true)
      expect(earlier.has(question.id)).toBe(false)
      expect(question.options).toHaveLength(4)
      expect(question.options.filter((option) => option.correct)).toHaveLength(1)
    }
    const bank = allQuestions().map((question) => ({
      id: question.id,
      optionIds: question.options.map((option) => option.id),
    }))
    expect(bank.some((question) => question.id.startsWith('c13q'))).toBe(true)
    const seen = new Set(questions.map((question) => question.id))
    const unseen = drawQuestions(bank, seen, 3, 'unseen', () => 0)
    expect(unseen.every((row) => !row.questionId.startsWith('c13q'))).toBe(true)
    const fromChapter = drawQuestions(
      bank.filter((question) => question.id.startsWith('c13q')),
      new Set(),
      3,
      'unseen',
      () => 0,
    )
    expect(fromChapter).toHaveLength(3)
  })
})
