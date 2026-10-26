import type { Question } from './types.ts'

type Located = Question & { sectionId?: string }

/** Lowercase, keep letters, digits, $, %, and dots, and squeeze spaces. */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9$%. ]/g, ' ')
    .split(/\s+/)
    .filter(Boolean)
    .join(' ')
}

/** Share of distinct words two stems have in common, from 0 to 1. */
export function stemOverlap(a: string, b: string): number {
  const left = new Set(normalizeText(a).split(' ').filter(Boolean))
  const right = new Set(normalizeText(b).split(' ').filter(Boolean))
  const union = new Set([...left, ...right])
  if (union.size === 0) return 1
  let shared = 0
  for (const word of left) if (right.has(word)) shared += 1
  return shared / union.size
}

function correctText(item: Question): string {
  return normalizeText(item.options.find((option) => option.correct)?.text ?? '')
}

/**
 * Finds questions that repeat each other. Flags a repeated stem anywhere, the same stem with the same answer,
 * and, inside one section, stems that are nearly the same word for word or that share most words and the same answer.
 */
export function findNearDuplicates(items: readonly Located[]): string[] {
  const problems: string[] = []
  const stems = new Map<string, string>()
  for (const item of items) {
    const key = normalizeText(item.stem)
    const earlier = stems.get(key)
    if (earlier) problems.push(`${earlier} and ${item.id} repeat the stem "${item.stem}"`)
    else stems.set(key, item.id)
  }
  const bySection = new Map<string, Located[]>()
  for (const item of items) {
    const list = bySection.get(item.sectionId ?? '') ?? []
    list.push(item)
    bySection.set(item.sectionId ?? '', list)
  }
  for (const list of bySection.values()) {
    for (let i = 0; i < list.length; i += 1) {
      for (let j = i + 1; j < list.length; j += 1) {
        const overlap = stemOverlap(list[i].stem, list[j].stem)
        const sameAnswer = correctText(list[i]) === correctText(list[j])
        if (overlap >= 0.97 || (sameAnswer && overlap >= 0.8)) {
          problems.push(`${list[i].id} and ${list[j].id} are near duplicates`)
        }
      }
    }
  }
  return problems
}
