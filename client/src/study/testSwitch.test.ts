import { describe, expect, it } from 'vitest'
import { featureOfPath, isCarrySearchState, switchTestTarget, testShortName } from './testSwitch.ts'

describe('test switcher', () => {
  it('gives short names from the catalog', () => {
    expect(['life-health', 'sie', 'series-6', 'series-63', 'series-65'].map(testShortName)).toEqual(['Life/Health', 'SIE', 'Series 6', 'Series 63', 'Series 65'])
  })

  it('keeps the feature when switching tests', () => {
    expect(switchTestTarget('/tests/sie/study/sie-c1-x', 'series-6').to).toBe('/tests/series-6/study')
    expect(switchTestTarget('/tests/sie/progress', 'series-63').to).toBe('/tests/series-63/progress')
    expect(switchTestTarget('/tests/sie/highlights', 'life-health').to).toBe('/tests/life-health/highlights')
    expect(switchTestTarget('/tests/sie/practice', 'series-65').to).toBe('/tests/series-65/practice')
  })

  it('sends a practice attempt to the new test practice start, not mid-attempt', () => {
    expect(featureOfPath('/tests/sie/test/abc123')).toBe('practice')
    expect(switchTestTarget('/tests/sie/test/abc123', 'series-6')).toEqual({ to: '/tests/series-6/practice' })
  })

  it('carries the search words over, and none when empty', () => {
    const next = switchTestTarget('/tests/sie/search', 'series-6', '  margin call ')
    expect(next).toEqual({ to: '/tests/series-6/search', state: { carrySearch: 'margin call' } })
    expect(isCarrySearchState(next.state)).toBe(true)
    expect(switchTestTarget('/tests/sie/search', 'series-6', '   ')).toEqual({ to: '/tests/series-6/search' })
    expect(isCarrySearchState({ freshSearch: true })).toBe(false)
  })
})