import { describe, expect, it } from 'vitest'
import { allQuestions, flatSections, studyPack } from './pack.ts'
import { LIFE_HEALTH_ID, SERIES63_ID, SERIES65_ID, SERIES6_ID, SIE_ID, courseChapters, courseSections, getTest, tests } from './catalog.ts'

describe('test catalog', () => {
  it('keeps Life and Health ids and adds SIE without reusing them', () => {
    expect(tests.map((test) => test.id)).toEqual([LIFE_HEALTH_ID, SIE_ID, SERIES6_ID, SERIES63_ID, SERIES65_ID])
    expect(getTest(LIFE_HEALTH_ID)?.pack).toBe(studyPack)
    const lifeIds = new Set([
      ...studyPack.chapters.map((chapter) => chapter.id),
      ...flatSections().map((section) => section.id),
      ...allQuestions().map((question) => question.id),
    ])
    const chapters = courseChapters(SIE_ID)
    expect(chapters).toHaveLength(16)
    expect(chapters.map((chapter) => chapter.number)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
    const sie = courseSections(SIE_ID)
    expect(sie.length).toBeGreaterThan(16)
    for (const section of sie) {
      expect(section.id.startsWith('sie-')).toBe(true)
      expect(section.chapter.id.startsWith('sie-')).toBe(true)
      expect(section.chapter.title).not.toMatch(/Topic\s+\d/i)
      expect(section.title).not.toMatch(/Topic\s+\d/i)
      expect(section.body.length).toBeGreaterThan(80)
      expect(section.body).not.toMatch(/still being added/i)
      expect(lifeIds.has(section.id)).toBe(false)
      expect(lifeIds.has(section.chapter.id)).toBe(false)
    }
  })

  it('adds Series 6 with its own ids', () => {
    const otherIds = new Set([...courseSections(LIFE_HEALTH_ID), ...courseSections(SIE_ID)].flatMap((section) => [section.id, section.chapter.id]))
    const chapters = courseChapters(SERIES6_ID)
    expect(chapters).toHaveLength(10)
    for (const section of courseSections(SERIES6_ID)) {
      expect(section.id.startsWith('s6-')).toBe(true)
      expect(section.chapter.id.startsWith('s6-')).toBe(true)
      expect(section.testId).toBe(SERIES6_ID)
      expect(otherIds.has(section.id)).toBe(false)
      expect(otherIds.has(section.chapter.id)).toBe(false)
    }
    expect(getTest(SERIES6_ID)?.title).not.toMatch(/mywealthed|wealthedagent\.com/i)
  })

  it('adds Series 63 with its own ids', () => {
    const otherIds = new Set(
      [...courseSections(LIFE_HEALTH_ID), ...courseSections(SIE_ID), ...courseSections(SERIES6_ID)].flatMap((section) => [section.id, section.chapter.id]),
    )
    expect(courseChapters(SERIES63_ID)).toHaveLength(6)
    for (const section of courseSections(SERIES63_ID)) {
      expect(section.id.startsWith('s63-')).toBe(true)
      expect(section.chapter.id.startsWith('s63-')).toBe(true)
      expect(section.testId).toBe(SERIES63_ID)
      expect(otherIds.has(section.id)).toBe(false)
      expect(otherIds.has(section.chapter.id)).toBe(false)
    }
    expect(getTest(SERIES63_ID)?.title).toMatch(/Series 63/)
  })

  it('adds Series 65 with its own ids', () => {
    const otherIds = new Set(
      [LIFE_HEALTH_ID, SIE_ID, SERIES6_ID, SERIES63_ID].flatMap((id) => courseSections(id)).flatMap((section) => [section.id, section.chapter.id]),
    )
    expect(courseChapters(SERIES65_ID)).toHaveLength(9)
    for (const section of courseSections(SERIES65_ID)) {
      expect(section.id.startsWith('s65-')).toBe(true)
      expect(section.chapter.id.startsWith('s65-')).toBe(true)
      expect(section.testId).toBe(SERIES65_ID)
      expect(otherIds.has(section.id)).toBe(false)
      expect(otherIds.has(section.chapter.id)).toBe(false)
    }
    expect(getTest(SERIES65_ID)?.title).toMatch(/Series 65/)
  })
})
