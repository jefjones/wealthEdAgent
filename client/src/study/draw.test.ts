import { describe, expect, it } from 'vitest'
import { drawQuestions, shuffle } from './draw.ts'

const bank = [
  { id: 'a', optionIds: ['a1', 'a2', 'a3', 'a4'] },
  { id: 'b', optionIds: ['b1', 'b2', 'b3', 'b4'] },
  { id: 'c', optionIds: ['c1', 'c2', 'c3', 'c4'] },
]

describe('drawQuestions', () => {
  it('returns the requested count with shuffled option ids', () => {
    const drawn = drawQuestions(bank, new Set(), 2, 'any', () => 0)
    expect(drawn).toHaveLength(2)
    expect(new Set(drawn.map((row) => row.questionId)).size).toBe(2)
    for (const row of drawn) {
      expect(row.optionOrder).toHaveLength(4)
      expect(new Set(row.optionOrder).size).toBe(4)
    }
  })

  it('skips seen questions in unseen mode', () => {
    const drawn = drawQuestions(bank, new Set(['a', 'b']), 1, 'unseen', () => 0)
    expect(drawn.map((row) => row.questionId)).toEqual(['c'])
  })

  it('refuses to draw more questions than remain', () => {
    expect(() => drawQuestions(bank, new Set(['a']), 3, 'unseen')).toThrow(/Only 2 unseen/)
  })
})

describe('shuffle', () => {
  it('keeps every item', () => {
    expect(shuffle(['x', 'y', 'z'], () => 0.9).sort()).toEqual(['x', 'y', 'z'])
  })
})
