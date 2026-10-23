import { describe, expect, it } from 'vitest'
import {
  adjacentHighlights,
  anchorHighlight,
  bodyOffset,
  highlightArrowControls,
  highlightArrowLabel,
  highlightInputError,
  highlightJumpHint,
  highlightPopupOffer,
  highlightDeletePreview,
  highlightPreview,
  highlightSavedMessage,
  orderHighlights,
  paintRun,
  placeHighlightPopup,
  resolveHighlightCursor,
  sliceHighlight,
  sourceBlocks,
} from './highlights.ts'

const body = 'Alpha line.\n\nKeep this sentence.\n\n• First fact\n• Second fact'

describe('offset to highlight', () => {
  it('keeps every visible run equal to that slice of the section body', () => {
    const blocks = sourceBlocks(body)
    const runs = blocks.flatMap((block) => (block.kind === 'list' ? block.runs : [block.run]))
    expect(runs.map((run) => body.slice(run.start, run.end))).toEqual(runs.map((run) => run.text))
    expect(runs.map((run) => run.text)).toEqual(['Alpha line.', 'Keep this sentence.', 'First fact', 'Second fact'])
  })

  it('maps a local run offset back to the body and slices that text', () => {
    const paragraph = sourceBlocks(body).find((block) => block.kind === 'paragraph' && block.run.text.startsWith('Keep'))
    if (!paragraph || paragraph.kind !== 'paragraph') throw new Error('missing paragraph')
    const offset = bodyOffset(paragraph.run.start, 5)
    expect(offset).toBe(paragraph.run.start + 5)
    expect(sliceHighlight(body, paragraph.run.start, paragraph.run.start + 4)).toBe('Keep')
    expect(bodyOffset(-1, 0)).toBeNull()
  })

  it('splits a run around a highlight and leaves the rest unmarked', () => {
    const slices = paintRun(0, 'Alpha line.', [{ highlightId: 'h1', startOffset: 6, endOffset: 10 }])
    expect(slices).toEqual([
      { start: 0, end: 6, text: 'Alpha ', highlightId: null },
      { start: 6, end: 10, text: 'line', highlightId: 'h1' },
      { start: 10, end: 11, text: '.', highlightId: null },
    ])
  })

  it('rejects a highlight whose offsets do not match the text', () => {
    expect(
      highlightInputError({ chapterId: 'ch-general', sectionId: 'c1-terms', startOffset: 0, endOffset: 5, text: 'Alpha' }),
    ).toBeNull()
    expect(
      highlightInputError({ chapterId: 'ch-general', sectionId: 'c1-terms', startOffset: 0, endOffset: 4, text: 'Alpha' }),
    ).toMatch(/do not match/)
    expect(
      highlightInputError({ chapterId: 'ch-general', sectionId: 'c1-terms', startOffset: 0, endOffset: 2001, text: 'a'.repeat(2001) }),
    ).toMatch(/2000/)
  })
})

describe('highlight order and preview', () => {
  const sections = [
    { id: 'c1', chapterNumber: 1 },
    { id: 'c2', chapterNumber: 1 },
    { id: 'c3', chapterNumber: 2 },
  ]
  const rows = [
    { highlightId: 'late', sectionId: 'c3', startOffset: 4, text: 'from the next chapter' },
    { highlightId: 'second', sectionId: 'c1', startOffset: 20, text: 'later in the first section' },
    { highlightId: 'first', sectionId: 'c1', startOffset: 2, text: 'opens the book' },
    { highlightId: 'mid', sectionId: 'c2', startOffset: 1, text: 'the following section' },
  ]

  it('orders by chapter, then section, then offset', () => {
    expect(orderHighlights(rows, sections).map((row) => row.highlightId)).toEqual(['first', 'second', 'mid', 'late'])
  })

  it('cuts the delete confirmation near 60 characters', () => {
    expect(highlightDeletePreview('Keep this sentence.')).toBe('Keep this sentence.')
    expect(highlightDeletePreview('  Alpha\nline.  ')).toBe('Alpha line.')
    const preview = highlightDeletePreview(`${'a'.repeat(40)} ${'b'.repeat(40)}`)
    expect(preview).toHaveLength(61)
    expect(preview.endsWith('…')).toBe(true)
    expect(preview.slice(0, 60)).toBe(`${'a'.repeat(40)} ${'b'.repeat(19)}`)
  })

  it('keeps a short note whole and cuts a long one at 100 characters', () => {
    expect(highlightPreview('Keep this sentence.')).toBe('Keep this sentence.')
    const long = `  ${'a'.repeat(80)}\n${'b'.repeat(40)}  `
    const preview = highlightPreview(long)
    expect(preview).toHaveLength(101)
    expect(preview.endsWith('…')).toBe(true)
    expect(preview.slice(0, 100)).toBe(`${'a'.repeat(80)} ${'b'.repeat(19)}`)
  })
})

describe('re-anchor a saved highlight', () => {
  it('keeps offsets that still slice to the saved text', () => {
    const section = 'Alpha line. Beta line. Alpha line.'
    expect(anchorHighlight(section, { startOffset: 23, endOffset: 28, text: 'Alpha' })).toEqual({
      status: 'anchored',
      startOffset: 23,
      endOffset: 28,
    })
  })

  it('moves to the copy nearest the old offset', () => {
    const section = 'Alpha line. Beta line. Alpha line.'
    expect(anchorHighlight(section, { startOffset: 12, endOffset: 17, text: 'Alpha' })).toEqual({
      status: 'anchored',
      startOffset: 23,
      endOffset: 28,
    })
  })

  it('keeps the earlier copy when both are the same distance away', () => {
    expect(anchorHighlight('one two one', { startOffset: 4, endOffset: 7, text: 'one' })).toEqual({
      status: 'anchored',
      startOffset: 0,
      endOffset: 3,
    })
  })

  it('reports text that is no longer in the section', () => {
    expect(anchorHighlight('Alpha line.', { startOffset: 40, endOffset: 70, text: 'Insurance is the transfer of risk of loss.' })).toEqual({
      status: 'missing',
    })
    expect(anchorHighlight('Alpha line.', { startOffset: 0, endOffset: 0, text: '' })).toEqual({ status: 'missing' })
  })
})

describe('previous and next highlight', () => {
  const ordered = [
    { highlightId: 'a', sectionIndex: 0, startOffset: 2, sectionId: 'c1' },
    { highlightId: 'b', sectionIndex: 0, startOffset: 20, sectionId: 'c1' },
    { highlightId: 'c', sectionIndex: 2, startOffset: 1, sectionId: 'c3' },
  ]

  it('steps to the neighbors of the current highlight', () => {
    expect(adjacentHighlights(ordered, { kind: 'highlight', highlightId: 'b' })).toMatchObject({
      previous: { highlightId: 'a' },
      next: { highlightId: 'c' },
    })
    expect(adjacentHighlights(ordered, { kind: 'highlight', highlightId: 'a' }).previous).toBeNull()
    expect(adjacentHighlights(ordered, { kind: 'highlight', highlightId: 'c' }).next).toBeNull()
  })

  it('from a section, reaches backward and forward across sections', () => {
    expect(adjacentHighlights(ordered, { kind: 'section', sectionIndex: 1 })).toMatchObject({
      previous: { highlightId: 'b' },
      next: { highlightId: 'c' },
    })
    expect(adjacentHighlights(ordered, { kind: 'section', sectionIndex: 0 })).toMatchObject({
      previous: null,
      next: { highlightId: 'a' },
    })
    expect(adjacentHighlights(ordered, { kind: 'before-book' })).toMatchObject({
      previous: null,
      next: { highlightId: 'a' },
    })
  })

  it('with one highlight, hash and section cursors pick the neighbors', () => {
    const only = [{ highlightId: 'solo', sectionIndex: 4, startOffset: 3, sectionId: 'c3-credit' }]
    const onHighlight = resolveHighlightCursor(only, 'solo', 4)
    expect(onHighlight).toEqual({ kind: 'highlight', highlightId: 'solo' })
    const atHighlight = adjacentHighlights(only, onHighlight)
    expect(atHighlight).toEqual({ previous: null, next: null })
    expect(highlightJumpHint('previous', atHighlight, only.length)).toBe('No other highlights')
    expect(highlightJumpHint('next', atHighlight, only.length)).toBe('No other highlights')

    const onSection = resolveHighlightCursor(only, '', 4)
    expect(onSection).toEqual({ kind: 'section', sectionIndex: 4 })
    const fromSection = adjacentHighlights(only, onSection)
    expect(fromSection.previous).toBeNull()
    expect(fromSection.next?.highlightId).toBe('solo')
    expect(highlightJumpHint('previous', fromSection, only.length)).toBe('First highlight')
    expect(highlightJumpHint('next', fromSection, only.length)).toBeNull()

    const before = adjacentHighlights(only, resolveHighlightCursor(only, 'missing', 1))
    expect(before).toMatchObject({ previous: null, next: { highlightId: 'solo' } })
    const after = adjacentHighlights(only, resolveHighlightCursor(only, '', 9))
    expect(after).toMatchObject({ previous: { highlightId: 'solo' }, next: null })
    expect(highlightJumpHint('next', after, only.length)).toBe('Last highlight')
    expect(resolveHighlightCursor(only, '', -1)).toEqual({ kind: 'before-book' })
  })

  it('names the first and last highlights in a longer list', () => {
    const first = adjacentHighlights(ordered, { kind: 'highlight', highlightId: 'a' })
    const last = adjacentHighlights(ordered, { kind: 'highlight', highlightId: 'c' })
    expect(highlightJumpHint('previous', first, ordered.length)).toBe('First highlight')
    expect(highlightJumpHint('next', first, ordered.length)).toBeNull()
    expect(highlightJumpHint('previous', last, ordered.length)).toBeNull()
    expect(highlightJumpHint('next', last, ordered.length)).toBe('Last highlight')
    const middle = adjacentHighlights(ordered, resolveHighlightCursor(ordered, 'b', 0))
    expect(middle.previous?.highlightId).toBe('a')
    expect(middle.next?.highlightId).toBe('c')
  })
})

describe('highlight arrow labels', () => {
  const ordered = [
    { highlightId: 'a', sectionId: 's1', sectionTitle: 'Terms', sectionIndex: 0, startOffset: 2 },
    { highlightId: 'b', sectionId: 's1', sectionTitle: 'Terms', sectionIndex: 0, startOffset: 20 },
    { highlightId: 'c', sectionId: 's2', sectionTitle: 'Contracts', sectionIndex: 1, startOffset: 4 },
  ]

  it('disables the arrows at the first and last highlights and names another section', () => {
    const controls = highlightArrowControls(ordered)
    expect(controls.a?.previous).toBeNull()
    expect(highlightArrowLabel('previous', null, 's1')).toBe('No earlier highlight')
    expect(controls.a?.next).toEqual({ href: '/study/s1#h-b', label: 'Next highlight' })
    expect(controls.b?.next).toEqual({ href: '/study/s2#h-c', label: 'Next highlight in Contracts' })
    expect(controls.c?.previous).toEqual({ href: '/study/s1#h-b', label: 'Previous highlight in Terms' })
    expect(controls.c?.next).toBeNull()
    expect(highlightArrowLabel('next', null, 's2')).toBe('No later highlight')
  })

  it('keeps a preview on the saved words, with no arrow glyphs', () => {
    const saved = 'Keep this sentence.'
    expect(highlightPreview(saved)).toBe(saved)
    expect(highlightPreview(saved).includes('←')).toBe(false)
    expect(highlightPreview(saved).includes('→')).toBe(false)
  })
})

describe('highlight popup offer', () => {
  const open = { hasRange: true, insideSection: true, start: 0, end: 5 }

  it('offers a real selection and keeps a selection that only overlaps a highlight', () => {
    expect(highlightPopupOffer('Alpha line.', open, [])).toEqual({ start: 0, end: 5, text: 'Alpha' })
    expect(highlightPopupOffer('Alpha line.', { ...open, start: 8, end: 2 }, [])).toEqual({
      start: 2,
      end: 8,
      text: 'pha li',
    })
    expect(highlightPopupOffer('Alpha line.', { ...open, start: 0, end: 11 }, [{ startOffset: 6, endOffset: 10 }])).toEqual({
      start: 0,
      end: 11,
      text: 'Alpha line.',
    })
  })

  it('hides when nothing is selected, the selection is outside the section, or it sits inside a highlight', () => {
    expect(highlightPopupOffer('Alpha line.', { ...open, hasRange: false }, [])).toBeNull()
    expect(highlightPopupOffer('Alpha line.', { ...open, insideSection: false }, [])).toBeNull()
    expect(highlightPopupOffer('Alpha line.', { ...open, start: null, end: 5 }, [])).toBeNull()
    expect(highlightPopupOffer('Alpha line.', { ...open, start: 4, end: 4 }, [])).toBeNull()
    expect(highlightPopupOffer('Alpha line.', { ...open, start: 0, end: 5 }, [])).not.toBeNull()
    expect(highlightPopupOffer('   \n\nAlpha', { hasRange: true, insideSection: true, start: 0, end: 3 }, [])).toBeNull()
    expect(highlightPopupOffer('Alpha line.', open, [{ startOffset: 0, endOffset: 11 }])).toBeNull()
    expect(highlightPopupOffer('Alpha line.', open, [{ startOffset: 0, endOffset: 5 }])).toBeNull()
  })

  it('names the saved note after the Highlights tool', () => {
    expect(highlightSavedMessage()).toBe('You can see your highlighted text in the Highlights tool in the nav bar above.')
  })
})

describe('highlight popup placement', () => {
  const popup = { width: 280, height: 120 }
  const viewport = { width: 375, height: 812 }

  function overlaps(top: number, left: number, selection: { top: number; right: number; bottom: number; left: number }) {
    const bottom = top + popup.height
    const right = left + popup.width
    return left < selection.right && right > selection.left && top < selection.bottom && bottom > selection.top
  }

  it('sits below the selection and inside a 375px viewport', () => {
    const selection = { top: 240, right: 300, bottom: 268, left: 16 }
    const place = placeHighlightPopup({ selection, popup, viewport })
    expect(place.top).toBe(selection.bottom + 12)
    expect(place.left).toBe(16)
    expect(overlaps(place.top, place.left, selection)).toBe(false)
    expect(place.left).toBeGreaterThanOrEqual(8)
    expect(place.left + popup.width).toBeLessThanOrEqual(viewport.width - 8)
  })

  it('flips above a selection near the bottom and clamps the right edge', () => {
    const selection = { top: 760, right: 360, bottom: 790, left: 220 }
    const place = placeHighlightPopup({ selection, popup, viewport })
    expect(place.top).toBe(selection.top - 12 - popup.height)
    expect(overlaps(place.top, place.left, selection)).toBe(false)
    expect(place.left).toBe(375 - 8 - popup.width)
    expect(place.top).toBeGreaterThanOrEqual(8)
  })
})
