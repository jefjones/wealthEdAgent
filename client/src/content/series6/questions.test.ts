import { describe, expect, it } from 'vitest'
import { SERIES6_ID, courseChapters, courseQuestions } from '../catalog.ts'
import { figureFor } from '../../components/figures/figureData.ts'
import { findNearDuplicates } from '../nearDuplicates.ts'

type Sourced = {
  id: string
  sectionId?: string
  quote?: string
  stem: string
  options: { text: string; correct: boolean; rationale: string }[]
}

const perChapter = [128, 130, 122, 130, 132, 192, 133, 146, 145, 154]
const total = perChapter.reduce((sum, count) => sum + count, 0)

describe('Series 6 question bank', () => {
  it('has every question spread by chapter, each tied to a section in its chapter', () => {
    const chapters = courseChapters(SERIES6_ID)
    expect(chapters.map((chapter) => chapter.number)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const ids = new Set<string>()
    chapters.forEach((chapter, index) => {
      const sectionIds = new Set(chapter.sections.map((section) => section.id))
      const inChapter = chapter.sections.flatMap((section) => section.questions) as Sourced[]
      expect(inChapter).toHaveLength(perChapter[index])
      for (const item of inChapter) {
        expect(item.sectionId && sectionIds.has(item.sectionId)).toBe(true)
        expect(ids.has(item.id)).toBe(false)
        ids.add(item.id)
        expect(item.options).toHaveLength(4)
        expect(new Set(item.options.map((option) => option.text)).size).toBe(4)
        expect(item.options.filter((option) => option.correct)).toHaveLength(1)
        for (const option of item.options) expect(option.rationale.trim().length).toBeGreaterThan(0)
      }
    })
    expect(courseQuestions(SERIES6_ID)).toHaveLength(total)
    expect(ids.size).toBe(total)
  })

  it('grounds every question in its own section text', () => {
    for (const chapter of courseChapters(SERIES6_ID)) {
      for (const section of chapter.sections) {
        for (const item of section.questions as Sourced[]) {
          expect(item.sectionId).toBe(section.id)
          expect(item.quote && item.quote.length >= 3).toBe(true)
          expect(section.body.includes(item.quote ?? '')).toBe(true)
        }
      }
    }
  })

  it('asks exam questions rather than sentence-recognition prompts', () => {
    for (const item of courseQuestions(SERIES6_ID)) {
      expect(item.stem).not.toMatch(/this section/i)
      expect(item.stem).not.toMatch(/Which of these sentences/i)
      expect(item.stem).not.toMatch(/which statement is in/i)
    }
  })

  it('has no repeated or near-duplicate questions', () => {
    expect(findNearDuplicates(courseQuestions(SERIES6_ID))).toEqual([])
  })

  it('keeps study text plain: no Topic headings and no outside brand links', () => {
    for (const chapter of courseChapters(SERIES6_ID)) {
      expect(chapter.title).not.toMatch(/Topic\s+\d/i)
      for (const section of chapter.sections) {
        expect(section.title).not.toMatch(/Topic\s+\d/i)
        expect(section.body).not.toMatch(/Topic\s+\d/i)
        expect(section.body).not.toMatch(/mywealthed|wealthedagent\.com/i)
        expect(section.body.length).toBeGreaterThan(80)
      }
    }
  })

  it('uses 2026 figures', () => {
    const text = courseChapters(SERIES6_ID)
      .flatMap((chapter) => chapter.sections.map((section) => section.body))
      .join('\n')
    expect(text).toContain('$24,500')
    expect(text).toContain('$7,500')
    expect(text).toContain('$19,000')
  })

  it('only points at figures that exist, including the alpha and beta chart', () => {
    const used: string[] = []
    for (const chapter of courseChapters(SERIES6_ID)) {
      for (const section of chapter.sections) {
        for (const id of section.figures ?? []) {
          expect(figureFor(id)).not.toBeNull()
          used.push(id)
        }
      }
    }
    expect(used).toContain('alpha-beta')
    expect(new Set(used).size).toBe(used.length)
  })
})
