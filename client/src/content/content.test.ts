import { describe, expect, it } from 'vitest'
import { allQuestions, flatSections, studyPack } from './pack.ts'

describe('study pack', () => {
  it('gives every chapter at least 15 questions and covers every section', () => {
    expect(studyPack.chapters).toHaveLength(3)
    for (const chapter of studyPack.chapters) {
      const questions = chapter.sections.flatMap((section) => section.questions)
      expect(questions.length).toBeGreaterThanOrEqual(15)
      for (const section of chapter.sections) {
        expect(section.questions.length).toBeGreaterThan(0)
        expect(section.body.length).toBeGreaterThan(80)
      }
    }
  })

  it('uses four options, one correct answer, and short ids', () => {
    const ids = new Set<string>()
    for (const question of allQuestions()) {
      expect(question.id.length).toBeGreaterThan(0)
      expect(question.id.length).toBeLessThanOrEqual(64)
      expect(ids.has(question.id)).toBe(false)
      ids.add(question.id)
      expect(question.options).toHaveLength(4)
      expect(question.options.filter((option) => option.correct)).toHaveLength(1)
      for (const option of question.options) {
        expect(option.id.length).toBeLessThanOrEqual(64)
        expect(option.text.trim().length).toBeGreaterThan(0)
        expect(option.rationale.trim().length).toBeGreaterThan(0)
      }
    }
    expect(flatSections().length).toBeGreaterThanOrEqual(20)
  })
})
