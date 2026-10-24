import { describe, expect, it } from 'vitest'
import { slideDurationMs, slidePanelWidth } from './slideOver.ts'

describe('slideDurationMs', () => {
  it('skips the slide when motion is reduced', () => {
    expect(slideDurationMs(true)).toBe(0)
    expect(slideDurationMs(false)).toBeGreaterThan(0)
  })
})

describe('slidePanelWidth', () => {
  it('keeps a tappable backdrop at 320px and 375px', () => {
    expect(slidePanelWidth(320)).toBe(280)
    expect(320 - slidePanelWidth(320)).toBeGreaterThanOrEqual(40)
    expect(slidePanelWidth(375)).toBe(320)
    expect(375 - slidePanelWidth(375)).toBeGreaterThanOrEqual(40)
  })
})
