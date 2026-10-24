/**
 * Highlight offsets are JavaScript string indexes into the section body
 * (`section.body`), the same plain text the study page renders.
 * `startOffset` is inclusive and `endOffset` is exclusive.
 * Newlines and the bullet prefix "• " count, even when the page shows
 * them as structure. A highlight's `text` is `body.slice(startOffset, endOffset)`.
 * If the body later changes, `anchorHighlight` puts the saved text back
 * on the nearest remaining copy, or reports it missing.
 */

export const HIGHLIGHT_TEXT_MAX = 2000
export const HIGHLIGHT_PREVIEW_LENGTH = 100
export const HIGHLIGHT_DELETE_PREVIEW_LENGTH = 60

/** Label of the highlights item in the study nav. The saved message uses this word. */
export const HIGHLIGHTS_NAV_LABEL = 'Highlights'

/** How long the saved-highlight note stays up before it leaves on its own. */
export const HIGHLIGHT_NOTICE_MS = 6000

export function highlightSavedMessage(toolLabel = HIGHLIGHTS_NAV_LABEL): string {
  return `You can see your highlighted text in the ${toolLabel} tool in the nav bar above.`
}

export type SourceRun = {
  start: number
  end: number
  text: string
}

export type SourceBlock = { kind: 'paragraph'; run: SourceRun } | { kind: 'list'; runs: SourceRun[] }

export type AnchorResult =
  | { status: 'anchored'; startOffset: number; endOffset: number }
  | { status: 'missing' }

export type HighlightRange = {
  highlightId: string
  startOffset: number
  endOffset: number
}

export type PaintedSlice = {
  start: number
  end: number
  text: string
  highlightId: string | null
}

export type HighlightSortKey = {
  highlightId: string
  chapterNumber: number
  sectionIndex: number
  startOffset: number
}

export type HighlightCursor =
  | { kind: 'highlight'; highlightId: string }
  | { kind: 'section'; sectionIndex: number }
  | { kind: 'before-book' }

/** Split a section body into the visible runs, each still addressed by body offsets. */
export function sourceBlocks(body: string): SourceBlock[] {
  const blocks: SourceBlock[] = []
  const separator = /\n\n+/g
  let cursor = 0
  let match: RegExpExecArray | null
  while ((match = separator.exec(body))) {
    pushBlock(blocks, body, cursor, match.index)
    cursor = match.index + match[0].length
  }
  pushBlock(blocks, body, cursor, body.length)
  return blocks
}

function pushBlock(blocks: SourceBlock[], body: string, start: number, end: number) {
  if (start >= end) return
  blocks.push(parseBlock(body.slice(start, end), start))
}

function parseBlock(text: string, start: number): SourceBlock {
  const lines = splitLines(text, start).filter((line) => line.text.length > 0)
  if (lines.length > 0 && lines.every((line) => line.text.startsWith('• '))) {
    return {
      kind: 'list',
      runs: lines.map((line) => ({
        start: line.start + '• '.length,
        end: line.end,
        text: line.text.slice('• '.length),
      })),
    }
  }
  return { kind: 'paragraph', run: { start, end: start + text.length, text } }
}

function splitLines(text: string, start: number) {
  const lines: SourceRun[] = []
  let cursor = 0
  const breaks = /\n/g
  let match: RegExpExecArray | null
  while ((match = breaks.exec(text))) {
    lines.push({ start: start + cursor, end: start + match.index, text: text.slice(cursor, match.index) })
    cursor = match.index + 1
  }
  lines.push({ start: start + cursor, end: start + text.length, text: text.slice(cursor) })
  return lines
}

/**
 * Keep a saved highlight on the words it stored.
 * Offsets that still slice to `text` stay put. Otherwise the nearest copy
 * of that text in the current body is used. An equal distance keeps the
 * earlier copy. Text that is gone is missing and is not painted.
 */
export function anchorHighlight(
  body: string,
  saved: { startOffset: number; endOffset: number; text: string },
): AnchorResult {
  const text = saved.text
  if (typeof text !== 'string' || text.length === 0) return { status: 'missing' }
  const start = saved.startOffset
  const end = saved.endOffset
  if (Number.isInteger(start) && Number.isInteger(end) && start >= 0 && end <= body.length && body.slice(start, end) === text) {
    return { status: 'anchored', startOffset: start, endOffset: end }
  }
  const hits: number[] = []
  let from = 0
  while (from <= body.length) {
    const index = body.indexOf(text, from)
    if (index < 0) break
    hits.push(index)
    from = index + 1
  }
  if (hits.length === 0) return { status: 'missing' }
  const target = Number.isFinite(start) ? start : 0
  let best = hits[0] ?? 0
  let bestDistance = Math.abs(best - target)
  for (const index of hits) {
    const distance = Math.abs(index - target)
    if (distance < bestDistance) {
      best = index
      bestDistance = distance
    }
  }
  return { status: 'anchored', startOffset: best, endOffset: best + text.length }
}

/** Paint one visible run, splitting it where highlights start or end. */
export function paintRun(runStart: number, runText: string, ranges: readonly HighlightRange[]): PaintedSlice[] {
  const runEnd = runStart + runText.length
  if (runText.length === 0) return []
  const points = new Set<number>([runStart, runEnd])
  ranges.forEach((range) => {
    const from = Math.max(range.startOffset, runStart)
    const to = Math.min(range.endOffset, runEnd)
    if (from < to) {
      points.add(from)
      points.add(to)
    }
  })
  const ordered = [...ranges].sort(
    (a, b) => a.startOffset - b.startOffset || (a.highlightId < b.highlightId ? -1 : a.highlightId > b.highlightId ? 1 : 0),
  )
  const cuts = [...points].sort((a, b) => a - b)
  const slices: PaintedSlice[] = []
  for (let index = 0; index < cuts.length - 1; index += 1) {
    const start = cuts[index] ?? runStart
    const end = cuts[index + 1] ?? runEnd
    if (end <= start) continue
    const hit = ordered.find((range) => range.startOffset <= start && range.endOffset >= end)
    slices.push({
      start,
      end,
      text: runText.slice(start - runStart, end - runStart),
      highlightId: hit?.highlightId ?? null,
    })
  }
  return slices
}

/** Local offset inside a rendered run, back into the section body. */
export function bodyOffset(runStart: number, localOffset: number): number | null {
  if (!Number.isInteger(runStart) || !Number.isInteger(localOffset) || runStart < 0 || localOffset < 0) return null
  return runStart + localOffset
}

export type HighlightPopupDraft = { start: number; end: number; text: string }

/**
 * Offer to highlight a selection, or hide the popup.
 * Hidden when there is no range, the selection is collapsed, either end sits
 * outside the study section, the text is empty or whitespace, or the selection
 * lies entirely inside an existing highlight. A selection that only overlaps
 * a highlight is still offered.
 */
export function highlightPopupOffer(
  body: string,
  selection: {
    hasRange: boolean
    insideSection: boolean
    start: number | null
    end: number | null
  },
  ranges: readonly { startOffset: number; endOffset: number }[],
): HighlightPopupDraft | null {
  if (!selection.hasRange || !selection.insideSection) return null
  const { start, end } = selection
  if (start == null || end == null || start === end) return null
  const from = Math.min(start, end)
  const to = Math.max(start, end)
  const text = sliceHighlight(body, from, to)
  if (!text || !text.trim()) return null
  const covered = ranges.some((range) => range.startOffset <= from && range.endOffset >= to)
  if (covered) return null
  return { start: from, end: to, text }
}

export type ViewportRect = { top: number; right: number; bottom: number; left: number }

/**
 * Place the offer just clear of the selection, preferring below it, and keep
 * the popup inside the viewport. A selection that fills the screen can still
 * overlap, because there is no free band left.
 */
export function placeHighlightPopup(input: {
  selection: ViewportRect
  popup: { width: number; height: number }
  viewport: { width: number; height: number }
  margin?: number
  gap?: number
}): { top: number; left: number } {
  const margin = input.margin ?? 8
  const gap = input.gap ?? 12
  const { selection, popup, viewport } = input
  const width = Math.min(popup.width, Math.max(0, viewport.width - margin * 2))
  const aboveTop = selection.top - gap - popup.height
  const belowTop = selection.bottom + gap
  const fitsAbove = aboveTop >= margin
  const fitsBelow = belowTop + popup.height <= viewport.height - margin
  let top: number
  if (fitsBelow) top = belowTop
  else if (fitsAbove) top = aboveTop
  else {
    const roomAbove = selection.top - margin
    const roomBelow = viewport.height - margin - selection.bottom
    top = roomAbove >= roomBelow ? aboveTop : belowTop
    if (top < margin) top = margin
    const maxTop = viewport.height - margin - popup.height
    if (top > maxTop) top = Math.max(margin, maxTop)
  }
  let left = selection.left
  const maxLeft = Math.max(margin, viewport.width - margin - width)
  if (left < margin) left = margin
  if (left > maxLeft) left = maxLeft
  return { top, left }
}

export function sliceHighlight(body: string, startOffset: number, endOffset: number): string | null {
  if (!Number.isInteger(startOffset) || !Number.isInteger(endOffset)) return null
  if (startOffset < 0 || endOffset > body.length || endOffset <= startOffset) return null
  return body.slice(startOffset, endOffset)
}

export function highlightInputError(input: {
  chapterId: string
  sectionId: string
  startOffset: number
  endOffset: number
  text: string
}): string | null {
  if (!input.chapterId || input.chapterId.length > 64) return 'chapterId must be 1 to 64 characters.'
  if (!input.sectionId || input.sectionId.length > 64) return 'sectionId must be 1 to 64 characters.'
  if (!Number.isInteger(input.startOffset) || input.startOffset < 0) return 'startOffset must be a whole number from 0.'
  if (!Number.isInteger(input.endOffset) || input.endOffset <= input.startOffset) return 'endOffset must be after startOffset.'
  if (typeof input.text !== 'string' || input.text.length < 1 || input.text.length > HIGHLIGHT_TEXT_MAX) {
    return 'Highlight text must be from 1 to 2000 characters.'
  }
  if (input.endOffset - input.startOffset !== input.text.length) return 'Highlight offsets do not match the text.'
  return null
}

/** Report line: whitespace collapsed, then the first 100 characters, with an ellipsis when cut. */
export function highlightPreview(text: string, limit = HIGHLIGHT_PREVIEW_LENGTH): string {
  const flat = text.replace(/\s+/g, ' ').trim()
  if (flat.length <= limit) return flat
  return `${flat.slice(0, limit)}…`
}

/** Confirmation line: the same preview, cut near 60 characters. */
export function highlightDeletePreview(text: string): string {
  return highlightPreview(text, HIGHLIGHT_DELETE_PREVIEW_LENGTH)
}

export function compareHighlights(a: HighlightSortKey, b: HighlightSortKey): number {
  if (a.chapterNumber !== b.chapterNumber) return a.chapterNumber - b.chapterNumber
  if (a.sectionIndex !== b.sectionIndex) return a.sectionIndex - b.sectionIndex
  if (a.startOffset !== b.startOffset) return a.startOffset - b.startOffset
  return a.highlightId < b.highlightId ? -1 : a.highlightId > b.highlightId ? 1 : 0
}

export function orderHighlights<T extends { highlightId: string; sectionId: string; startOffset: number }>(
  highlights: readonly T[],
  sections: readonly { id: string; chapterNumber: number }[],
): T[] {
  const place = new Map(
    sections.map((section, index) => [section.id, { chapterNumber: section.chapterNumber, sectionIndex: index }]),
  )
  return [...highlights].sort((a, b) => {
    const left = place.get(a.sectionId) ?? { chapterNumber: Number.MAX_SAFE_INTEGER, sectionIndex: Number.MAX_SAFE_INTEGER }
    const right = place.get(b.sectionId) ?? { chapterNumber: Number.MAX_SAFE_INTEGER, sectionIndex: Number.MAX_SAFE_INTEGER }
    return compareHighlights(
      { highlightId: a.highlightId, ...left, startOffset: a.startOffset },
      { highlightId: b.highlightId, ...right, startOffset: b.startOffset },
    )
  })
}

/** Hash cursor wins when that highlight is in the bank. Otherwise the open section, or before the book. */
export function resolveHighlightCursor(
  ordered: readonly { highlightId: string }[],
  hashId: string,
  sectionIndex: number,
): HighlightCursor {
  if (hashId && ordered.some((row) => row.highlightId === hashId)) return { kind: 'highlight', highlightId: hashId }
  if (sectionIndex >= 0) return { kind: 'section', sectionIndex }
  return { kind: 'before-book' }
}

/** Hint for a disabled jump. Null when that direction has a highlight to open. */
export function highlightJumpHint(
  side: 'previous' | 'next',
  neighbors: { previous: unknown; next: unknown },
  total: number,
): string | null {
  const missing = side === 'previous' ? neighbors.previous == null : neighbors.next == null
  if (!missing) return null
  const otherMissing = side === 'previous' ? neighbors.next == null : neighbors.previous == null
  if (total <= 1 && otherMissing) return 'No other highlights'
  return side === 'previous' ? 'First highlight' : 'Last highlight'
}

/** Label for the arrow on a highlighted passage. A null target is the muted end of the list. */
export function highlightArrowLabel(
  side: 'previous' | 'next',
  target: { sectionId: string; sectionTitle: string } | null,
  hereSectionId: string,
): string {
  if (!target) return side === 'previous' ? 'No earlier highlight' : 'No later highlight'
  const name = side === 'previous' ? 'Previous highlight' : 'Next highlight'
  if (target.sectionId === hereSectionId) return name
  return `${name} in ${target.sectionTitle}`
}

export function highlightArrowControls<
  T extends {
    highlightId: string
    sectionId: string
    sectionTitle: string
    sectionIndex: number
    startOffset: number
  },
>(
  ordered: readonly T[],
  toHref: (sectionId: string, highlightId: string) => string = (sectionId, highlightId) => `/study/${sectionId}#h-${highlightId}`,
): Record<string, { previous: { href: string; label: string } | null; next: { href: string; label: string } | null }> {
  const controls: Record<string, { previous: { href: string; label: string } | null; next: { href: string; label: string } | null }> = {}
  for (const row of ordered) {
    const neighbors = adjacentHighlights(ordered, { kind: 'highlight', highlightId: row.highlightId })
    const link = (side: 'previous' | 'next', target: T | null) => {
      if (!target) return null
      return {
        href: toHref(target.sectionId, target.highlightId),
        label: highlightArrowLabel(side, target, row.sectionId),
      }
    }
    controls[row.highlightId] = { previous: link('previous', neighbors.previous), next: link('next', neighbors.next) }
  }
  return controls
}

/**
 * Map a selection point back to a section-body offset.
 * Nodes marked `data-chrome` (jump arrows and the delete control) are not
 * part of the body, so they do not move the offset or the saved text.
 */
export function bodyOffsetFromDom(root: HTMLElement, node: Node, offset: number): number | null {
  const element = node.nodeType === Node.ELEMENT_NODE ? (node as Element) : node.parentElement
  if (!element || element.closest('[data-chrome]')) return null
  const host = element.closest('[data-start]')
  if (!host || !root.contains(host)) return null
  const start = Number(host.getAttribute('data-start'))
  if (!Number.isInteger(start)) return null
  if (node === host) {
    const chars = [...host.childNodes].slice(0, offset).reduce((sum, child) => sum + countableLength(child), 0)
    return start + chars
  }
  let chars = 0
  const walker = document.createTreeWalker(host, NodeFilter.SHOW_TEXT, {
    acceptNode(current) {
      const parent = current.parentElement
      if (parent?.closest('[data-chrome]')) return NodeFilter.FILTER_REJECT
      return NodeFilter.FILTER_ACCEPT
    },
  })
  let current = walker.nextNode()
  while (current) {
    if (current === node) return start + chars + offset
    chars += current.textContent?.length ?? 0
    current = walker.nextNode()
  }
  return null
}

function countableLength(node: Node): number {
  if (node.nodeType === Node.ELEMENT_NODE && (node as Element).hasAttribute('data-chrome')) return 0
  if (node.nodeType === Node.TEXT_NODE) return node.textContent?.length ?? 0
  let total = 0
  node.childNodes.forEach((child) => {
    total += countableLength(child)
  })
  return total
}

export function adjacentHighlights<T extends { highlightId: string; sectionIndex: number; startOffset: number }>(
  ordered: readonly T[],
  cursor: HighlightCursor,
): { previous: T | null; next: T | null } {
  if (ordered.length === 0) return { previous: null, next: null }
  if (cursor.kind === 'before-book') return { previous: null, next: ordered[0] ?? null }
  if (cursor.kind === 'highlight') {
    const index = ordered.findIndex((item) => item.highlightId === cursor.highlightId)
    if (index === -1) return { previous: null, next: ordered[0] ?? null }
    return { previous: index > 0 ? (ordered[index - 1] ?? null) : null, next: ordered[index + 1] ?? null }
  }
  let previous: T | null = null
  let next: T | null = null
  for (const item of ordered) {
    if (item.sectionIndex < cursor.sectionIndex) previous = item
    else if (!next) next = item
  }
  return { previous, next }
}
