import { describe, expect, it } from 'vitest'
import { createScrollMemory, parseSession, sessionAfterSearch } from './SearchContext.tsx'
import { bodyMatches } from './search.ts'

describe('search session selection', () => {
  it('reads the picked result back from storage', () => {
    expect(parseSession(JSON.stringify({ query: 'annuity', tab: 'search', selected: 'ch2-s3' }))).toEqual({
      query: 'annuity',
      tab: 'search',
      selected: 'ch2-s3',
    })
  })
  it('treats an older session without a pick as nothing picked', () => {
    expect(parseSession(JSON.stringify({ query: 'x', tab: 'search' }))?.selected).toBe('')
  })
  it('keeps the pick when the same search reruns and drops it for a new one', () => {
    const current = { query: 'annuity', tab: 'contents' as const, selected: 'a' }
    expect(sessionAfterSearch(current, 'annuity').selected).toBe('a')
    expect(sessionAfterSearch(current, 'grace period')).toEqual({ query: 'grace period', tab: 'search', selected: '' })
  })
})

describe('results scroll memory', () => {
  it('remembers each panel separately and clears', () => {
    const memory = createScrollMemory()
    expect(memory.get('t:mobile')).toBe(0)
    memory.set('t:mobile', 420)
    memory.set('t:desktop', 90)
    memory.set('t:mobile', Number.NaN)
    expect(memory.get('t:mobile')).toBe(420)
    expect(memory.get('t:desktop')).toBe(90)
    memory.clear()
    expect(memory.get('t:mobile')).toBe(0)
  })
})

describe('bodyMatches', () => {
  it('finds every place the words appear, merged, ignoring case', () => {
    const body = 'An Annuity pays. Annuities differ from a policy.'
    const found = bodyMatches(body, 'annuity')
    expect(found.map((r) => body.slice(r.start, r.end))).toEqual(['Annuity', 'Annuities'])
  })
  it('returns nothing for a blank query', () => {
    expect(bodyMatches('text', '   ')).toEqual([])
  })
})
