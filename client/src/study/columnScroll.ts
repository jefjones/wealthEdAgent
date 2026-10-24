/** Marks a column that scrolls on its own at the desktop study layout. */
export const COLUMN_SCROLL = 'data-column-scroll'

export function columnScrollOffset(input: {
  scrollTop: number
  containerTop: number
  containerHeight: number
  childTop: number
  childHeight: number
  block: ScrollLogicalPosition
  pad?: number
}): number | null {
  const pad = input.pad ?? 8
  const deltaTop = input.childTop - input.containerTop
  const deltaBottom = input.childTop + input.childHeight - (input.containerTop + input.containerHeight)
  if (input.block === 'nearest') {
    if (deltaTop >= 0 && deltaBottom <= 0) return null
    if (deltaTop < 0) return Math.max(0, input.scrollTop + deltaTop - pad)
    return Math.max(0, input.scrollTop + deltaBottom + pad)
  }
  if (input.block === 'start') return Math.max(0, input.scrollTop + deltaTop - pad)
  if (input.block === 'end') return Math.max(0, input.scrollTop + deltaBottom + pad)
  return Math.max(0, input.scrollTop + deltaTop - input.containerHeight / 2 + input.childHeight / 2)
}

export function isColumnScroller(element: HTMLElement): boolean {
  const overflow = getComputedStyle(element).overflowY
  return overflow === 'auto' || overflow === 'scroll' || overflow === 'overlay'
}

export function columnScroller(node: Element | null): HTMLElement | null {
  const column = node?.closest<HTMLElement>(`[${COLUMN_SCROLL}]`) ?? null
  if (!column || !isColumnScroller(column)) return null
  return column
}

export function scrollChildIntoView(container: HTMLElement, child: HTMLElement, block: ScrollLogicalPosition) {
  const childRect = child.getBoundingClientRect()
  const box = container.getBoundingClientRect()
  const next = columnScrollOffset({
    scrollTop: container.scrollTop,
    containerTop: box.top,
    containerHeight: container.clientHeight,
    childTop: childRect.top,
    childHeight: childRect.height,
    block,
  })
  if (next == null || Math.abs(next - container.scrollTop) < 1) return
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  container.scrollTo({ top: next, behavior: reduced ? 'auto' : 'smooth' })
}

/** Scroll a sentence or highlight inside the reading column. The window stays put on desktop. */
export function scrollNarrationTarget(node: Element | null, block: ScrollLogicalPosition = 'center') {
  if (!(node instanceof HTMLElement)) return
  const column = columnScroller(node)
  if (column) {
    scrollChildIntoView(column, node, block)
    return
  }
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  node.scrollIntoView({ block, inline: 'nearest', behavior: reduced ? 'auto' : 'smooth' })
}

/** Restore the window and any column after a focus change that would jump the page. */
export function captureScroll(): () => void {
  const columns = [...document.querySelectorAll<HTMLElement>(`[${COLUMN_SCROLL}]`)]
  const saved = columns.map((column) => column.scrollTop)
  const x = window.scrollX
  const y = window.scrollY
  return () => {
    window.scrollTo(x, y)
    columns.forEach((column, index) => {
      column.scrollTop = saved[index] ?? column.scrollTop
    })
  }
}
