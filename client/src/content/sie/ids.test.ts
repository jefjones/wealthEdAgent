import { describe, expect, it } from 'vitest'
import { siePack } from './pack.ts'

/**
 * Backend ids are stored and compared exactly.
 * "Sie-Ch-Stocks" and "sie-ch-stocks" would be two different ids.
 * A slash would break the study routes, which treat "/" as a path separator.
 */
function collectSieIds(): string[] {
  const ids: string[] = []
  for (const chapter of siePack.chapters) {
    ids.push(chapter.id)
    for (const section of chapter.sections) {
      ids.push(section.id)
      for (const question of section.questions) {
        ids.push(question.id)
      }
    }
  }
  return ids
}

describe('SIE id constraints', () => {
  it('keeps every chapter, section, and question id within 64 characters and without a slash', () => {
    const ids = collectSieIds()
    expect(ids.length).toBeGreaterThan(16)
    const seen = new Set<string>()
    for (const id of ids) {
      expect(id.length).toBeGreaterThan(0)
      expect(id.length).toBeLessThanOrEqual(64)
      expect(id.includes('/')).toBe(false)
      expect(seen.has(id)).toBe(false)
      seen.add(id)
    }
  })

  it('compares ids case-sensitively', () => {
    const exact = new Set(collectSieIds())
    exact.add('SIE-CH-STOCKS')
    expect(exact.has('sie-ch-stocks')).toBe(true)
    expect(exact.has('SIE-CH-STOCKS')).toBe(true)
    expect(exact.has('SIE-ch-stocks')).toBe(false)
    const folded = new Set(collectSieIds().map((id) => id.toLowerCase()))
    expect(folded.size).toBe(exact.size - 1)
  })
})
