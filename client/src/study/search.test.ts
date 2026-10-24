import { describe, expect, it } from 'vitest'
import { searchSections, searchTerms, type SearchSection } from './search.ts'

const sections: SearchSection[] = [
  {
    id: 'terms',
    title: 'Terms',
    body: 'Wait one period. Later, the grace period still applies.',
    chapterId: 'c1',
    chapterNumber: 1,
    chapterTitle: 'Insurance Basics',
  },
  {
    id: 'resume',
    title: 'Résumé of benefits',
    body: 'The résumé lists the contract.',
    chapterId: 'c2',
    chapterNumber: 2,
    chapterTitle: 'Contracts',
  },
  {
    id: 'fixed',
    title: 'Fixed annuities',
    body: 'A fixed annuity credits a set rate.',
    chapterId: 'c5',
    chapterNumber: 5,
    chapterTitle: 'Annuities',
  },
  {
    id: 'variable',
    title: 'Variable accounts',
    body: 'A variable annuity can lose value.',
    chapterId: 'c5',
    chapterNumber: 5,
    chapterTitle: 'Annuities',
  },
  {
    id: 'grace',
    title: 'Grace period',
    body: 'Pay within the grace period.',
    chapterId: 'c9',
    chapterNumber: 9,
    chapterTitle: 'Provisions',
  },
  {
    id: 'ira',
    title: 'Individual retirement accounts',
    body: 'An annuity inside an IRA is still a retirement account.',
    chapterId: 'c6',
    chapterNumber: 6,
    chapterTitle: 'Retirement plans',
  },
]

function ids(query: string) {
  return searchSections(sections, query).flatMap((group) => group.hits.map((hit) => hit.sectionId))
}

describe('subject search', () => {
  it('requires every word and ignores case and diacritics', () => {
    expect(searchTerms('  Fixed   annuity, ')).toEqual(['fixed', 'annuity'])
    expect(ids('fixed annuity')).toEqual(['fixed'])
    expect(ids('RESUME')).toEqual(['resume'])
    expect(ids('')).toEqual([])
  })

  it('ranks a heading match ahead of a body match and groups by that order', () => {
    const groups = searchSections(sections, 'grace period')
    expect(groups.map((group) => group.chapterNumber)).toEqual([9, 1])
    expect(groups[0]?.hits.map((hit) => hit.sectionId)).toEqual(['grace'])
    expect(groups[0]?.hits[0]?.headingMatch).toBe(true)
    expect(groups[1]?.hits[0]?.headingMatch).toBe(false)
    const early = groups[1]?.hits[0]
    expect(early?.snippet.text.toLowerCase()).toContain('grace period')
    expect(early && early.bodyStart != null && early.bodyEnd != null ? sections[0]!.body.slice(early.bodyStart, early.bodyEnd).toLowerCase() : '').toBe(
      'grace period',
    )

    const annuities = searchSections(sections, 'annuity')
    expect(annuities.map((group) => group.chapterNumber)).toEqual([5, 6])
    expect(annuities[0]?.hits.map((hit) => hit.sectionId)).toEqual(['fixed', 'variable'])
    expect(annuities[0]?.hits[0]?.headingMatch).toBe(true)
    expect(annuities[0]?.hits[0]?.score).toBeGreaterThan(annuities[0]?.hits[1]?.score ?? 0)
    expect(annuities[0]?.hits[0]?.snippet.text.toLowerCase()).toContain('annuit')
    expect(annuities[1]?.hits[0]?.headingMatch).toBe(false)
  })

  it('highlights the matched words in the snippet', () => {
    const hit = searchSections(sections, 'annuity').flatMap((group) => group.hits).find((row) => row.sectionId === 'fixed')
    expect(hit?.bodyStart).toBeGreaterThan(0)
    expect(hit?.snippet.text.toLowerCase()).toContain('annuity')
    const covered = hit?.snippet.marks.map((mark) => hit.snippet.text.slice(mark.start, mark.end).toLowerCase()) ?? []
    expect(covered).toContain('annuity')
  })
})
