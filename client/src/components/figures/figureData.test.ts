import { describe, expect, it } from 'vitest'
import { expectedReturn, figureFor, figures, figuresFor } from './figureData.ts'

describe('study figures', () => {
  it('gives every figure a caption and real content', () => {
    for (const [id, figure] of Object.entries(figures)) {
      expect(id).toMatch(/^[a-z0-9-]+$/)
      expect(figure.caption.trim().length).toBeGreaterThan(10)
      if (figure.kind === 'compare') expect(figure.columns.length).toBeGreaterThan(1)
      if (figure.kind === 'steps') expect(figure.steps.length).toBeGreaterThan(1)
      if (figure.kind === 'bars') expect(figure.bars.every((bar) => bar.value > 0)).toBe(true)
      if (figure.kind === 'chart') expect(figure.description.trim().length).toBeGreaterThan(10)
    }
  })

  it('skips unknown ids and keeps order', () => {
    expect(figureFor('nope')).toBeNull()
    expect(figureFor('toString')).toBeNull()
    expect(figuresFor(['alpha-beta', 'nope', 'beta-compare']).map((item) => item.id)).toEqual(['alpha-beta', 'beta-compare'])
    expect(figuresFor(undefined)).toEqual([])
  })

  it('draws the market on the expected return line at beta 1', () => {
    expect(expectedReturn(0)).toBe(3)
    expect(expectedReturn(1)).toBe(9)
    expect(expectedReturn(2)).toBeGreaterThan(expectedReturn(1))
  })
})
