export const SLIDE_MS = 200

/** Close animation length. Reduced motion unmounts immediately. */
export function slideDurationMs(reducedMotion: boolean) {
  return reducedMotion ? 0 : SLIDE_MS
}

/**
 * Leave at least 40px of backdrop so a 320px-wide screen can still tap outside.
 * Cap the panel at 320px so a 375px screen keeps a visible dimmed strip.
 */
export function slidePanelWidth(viewportWidth: number) {
  const gutter = 40
  const cap = 320
  if (viewportWidth <= gutter) return Math.max(0, viewportWidth)
  return Math.min(cap, viewportWidth - gutter)
}
