import { describe, expect, it } from 'vitest'
import { columnScrollOffset } from './columnScroll.ts'

describe('column scroll', () => {
  const box = { scrollTop: 400, containerTop: 80, containerHeight: 600 }

  it('leaves a child that is already visible', () => {
    expect(
      columnScrollOffset({
        ...box,
        childTop: 200,
        childHeight: 40,
        block: 'nearest',
      }),
    ).toBeNull()
  })

  it('moves the column, not past zero, to reveal a child above or below', () => {
    expect(
      columnScrollOffset({
        ...box,
        childTop: 40,
        childHeight: 20,
        block: 'nearest',
      }),
    ).toBe(352)
    expect(
      columnScrollOffset({
        ...box,
        scrollTop: 4,
        childTop: 10,
        childHeight: 20,
        block: 'start',
      }),
    ).toBe(0)
    expect(
      columnScrollOffset({
        ...box,
        childTop: 900,
        childHeight: 30,
        block: 'nearest',
      }),
    ).toBe(658)
  })

  it('centers a sentence in the reading column', () => {
    expect(
      columnScrollOffset({
        ...box,
        childTop: 500,
        childHeight: 40,
        block: 'center',
      }),
    ).toBe(540)
  })
})
