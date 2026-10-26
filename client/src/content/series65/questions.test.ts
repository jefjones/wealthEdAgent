import { describe, expect, it } from 'vitest'
import { SERIES65_ID, courseChapters, courseQuestions } from '../catalog.ts'
import { figureFor } from '../../components/figures/figureData.ts'
import { findNearDuplicates } from '../nearDuplicates.ts'

type Sourced = {
  id: string
  sectionId?: string
  quote?: string
  stem: string
  options: { text: string; correct: boolean; rationale: string }[]
}

const perChapter = [248, 146, 83, 102, 133, 85, 91, 80, 68]
const total = perChapter.reduce((sum, count) => sum + count, 0)

describe('Series 65 question bank', () => {
  it('has every question tied to a section in its chapter, with four choices and one answer', () => {
    const chapters = courseChapters(SERIES65_ID)
    expect(chapters.map((chapter) => chapter.number)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
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
    expect(courseQuestions(SERIES65_ID)).toHaveLength(total)
    expect(ids.size).toBe(total)
  })

  it('grounds every question in its own section text', () => {
    for (const chapter of courseChapters(SERIES65_ID)) {
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
    for (const item of courseQuestions(SERIES65_ID)) {
      expect(item.stem).not.toMatch(/this section/i)
      expect(item.stem).not.toMatch(/Which of these sentences/i)
      expect(item.stem).not.toMatch(/which statement is in/i)
    }
  })

  it('has no repeated or near-duplicate questions', () => {
    expect(findNearDuplicates(courseQuestions(SERIES65_ID))).toEqual([])
  })

  it('keeps study text plain: no Topic headings, no Introduction titles, and no outside brand links', () => {
    for (const chapter of courseChapters(SERIES65_ID)) {
      expect(chapter.title).not.toMatch(/Topic\s+\d/i)
      for (const section of chapter.sections) {
        expect(section.id.startsWith('s65-')).toBe(true)
        expect(section.title).not.toMatch(/Topic\s+\d|^Introduction/i)
        expect(section.body).not.toMatch(/Topic\s+\d/i)
        expect(section.body).not.toMatch(/mywealthed|wealthedagent\.com/i)
        expect(section.body.length).toBeGreaterThan(80)
      }
    }
  })

  it('only points at Series 65 figures that exist, including the alpha-beta and yield curve charts', () => {
    const used: string[] = []
    for (const chapter of courseChapters(SERIES65_ID)) {
      for (const section of chapter.sections) {
        for (const id of section.figures ?? []) {
          expect(id.startsWith('s65-')).toBe(true)
          expect(figureFor(id)).not.toBeNull()
          used.push(id)
        }
      }
    }
    for (const id of ['s65-alpha-beta', 's65-capm-line', 's65-normal-yield', 's65-inverted-yield']) expect(used).toContain(id)
    expect(new Set(used).size).toBe(used.length)
  })
})
