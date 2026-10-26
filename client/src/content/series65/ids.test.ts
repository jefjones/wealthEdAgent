import { describe, expect, it } from 'vitest'
import { series65Pack } from './pack.ts'

/** Backend ids are stored and compared exactly. A slash would break the study routes. */
function collectIds(): string[] {
  const ids: string[] = []
  for (const chapter of series65Pack.chapters) {
    ids.push(chapter.id)
    for (const section of chapter.sections) {
      ids.push(section.id)
      for (const question of section.questions) ids.push(question.id)
    }
  }
  return ids
}

describe('Series 65 id constraints', () => {
  it('keeps every id within 64 characters, without a slash, and unique', () => {
    const ids = collectIds()
    expect(ids.length).toBeGreaterThan(700)
    const seen = new Set<string>()
    for (const id of ids) {
      expect(id.length).toBeGreaterThan(0)
      expect(id.length).toBeLessThanOrEqual(64)
      expect(id.includes('/')).toBe(false)
      expect(id).toBe(id.toLowerCase())
      expect(seen.has(id)).toBe(false)
      seen.add(id)
    }
  })
})
