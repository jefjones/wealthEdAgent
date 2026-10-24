import { describe, expect, it } from 'vitest'
import { allQuestions, flatSections, studyPack } from './pack.ts'
import { LIFE_HEALTH_ID, SIE_ID, courseChapters, courseSections, getTest, tests } from './catalog.ts'

describe('test catalog', () => {
  it('keeps Life and Health ids and adds SIE without reusing them', () => {
    expect(tests.map((test) => test.id)).toEqual([LIFE_HEALTH_ID, SIE_ID])
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
})
