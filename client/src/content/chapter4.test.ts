import { describe, expect, it } from 'vitest'
import { chapter4 } from './chapter4.ts'
import { allQuestions, flatSections, studyPack } from './pack.ts'
import { drawQuestions } from '../study/draw.ts'

describe('chapter 4', () => {
  it('loads Extra Features and Add-Ons with unique section ids', () => {
    expect(studyPack.chapters.map((chapter) => chapter.id)).toContain('ch-provisions')
    expect(chapter4.number).toBe(4)
    expect(chapter4.sections.length).toBeGreaterThan(0)
    const sectionIds = chapter4.sections.map((section) => section.id)
    expect(new Set(sectionIds).size).toBe(sectionIds.length)
    for (const id of sectionIds) {
      expect(id.startsWith('c4-')).toBe(true)
      expect(flatSections().filter((section) => section.id === id)).toHaveLength(1)
    }
  })

  it('adds valid questions to the practice pool without colliding with earlier chapters', () => {
    const questions = chapter4.sections.flatMap((section) => section.questions)
    expect(questions.length).toBeGreaterThanOrEqual(15)
    const earlier = new Set(
      studyPack.chapters
        .filter((chapter) => chapter.number < chapter4.number)
        .flatMap((chapter) => chapter.sections.flatMap((section) => section.questions.map((question) => question.id))),
    )
    for (const section of chapter4.sections) {
      expect(section.questions.length).toBeGreaterThan(0)
    }
    for (const question of questions) {
      expect(question.id.startsWith('c4q')).toBe(true)
      expect(earlier.has(question.id)).toBe(false)
      expect(question.options).toHaveLength(4)
      expect(question.options.filter((option) => option.correct)).toHaveLength(1)
    }
    const bank = allQuestions().map((question) => ({
      id: question.id,
      optionIds: question.options.map((option) => option.id),
    }))
    expect(bank.some((question) => question.id.startsWith('c4q'))).toBe(true)
    const seen = new Set(questions.map((question) => question.id))
    const unseen = drawQuestions(bank, seen, 3, 'unseen', () => 0)
    expect(unseen.every((row) => !row.questionId.startsWith('c4q'))).toBe(true)
    const fromChapter = drawQuestions(
      bank.filter((question) => question.id.startsWith('c4q')),
      new Set(),
      3,
      'unseen',
      () => 0,
    )
    expect(fromChapter).toHaveLength(3)
  })
})