import { describe, expect, it } from 'vitest'
import { SIE_ID, courseChapters, courseQuestions } from '../catalog.ts'

type Sourced = { id: string; sectionId?: string; stem: string; options: { text: string; correct: boolean; rationale: string }[] }

describe('SIE question bank', () => {
  it('has 2,000 questions, 125 in each chapter, with a section id from that chapter', () => {
    const questions = courseQuestions(SIE_ID) as Sourced[]
    expect(questions).toHaveLength(2000)
    const ids = new Set<string>()
    let counted = 0
    for (const chapter of courseChapters(SIE_ID)) {
      const sectionIds = new Set(chapter.sections.map((section) => section.id))
      const inChapter = chapter.sections.flatMap((section) => section.questions) as Sourced[]
      expect(inChapter).toHaveLength(125)
      counted += inChapter.length
      for (const item of inChapter) {
        expect(item.sectionId && sectionIds.has(item.sectionId)).toBe(true)
        expect(item.id.includes('/')).toBe(false)
        expect(item.id.length).toBeLessThanOrEqual(64)
        expect(ids.has(item.id)).toBe(false)
        ids.add(item.id)
        expect(item.options).toHaveLength(4)
        expect(item.options.filter((option) => option.correct)).toHaveLength(1)
      }
    }
    expect(counted).toBe(2000)
    expect(questions).toHaveLength(ids.size)
  })

  it('asks exam questions rather than sentence-recognition prompts', () => {
    for (const item of courseQuestions(SIE_ID)) {
      expect(item.stem).not.toMatch(/this section/i)
      expect(item.stem).not.toMatch(/Which of these sentences/i)
    }
  })
})
