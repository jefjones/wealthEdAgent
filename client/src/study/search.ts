import { courseSections } from '../content/catalog.ts'
import { flatSections } from '../content/pack.ts'
import { subjectTitle } from '../content/rewrite.ts'

export type SearchSection = {
  id: string
  title: string
  body: string
  chapterId: string
  chapterNumber: number
  chapterTitle: string
}

export type SearchSnippet = {
  text: string
  /** Ranges inside `text`. Ellipsis is drawn outside this string. */
  marks: { start: number; end: number }[]
  lead: boolean
  trail: boolean
}

export type SearchHit = {
  sectionId: string
  chapterId: string
  chapterNumber: number
  chapterTitle: string
  sectionTitle: string
  /** Higher means a closer heading match. */
  score: number
  headingMatch: boolean
  snippet: SearchSnippet
  /** First matching range in the section body, when the body contains a term. */
  bodyStart: number | null
  bodyEnd: number | null
}

export type SearchGroup = {
  chapterId: string
  chapterNumber: number
  chapterTitle: string
  hits: SearchHit[]
}

const SNIPPET_RADIUS = 70

/** Lowercase, strip diacritics, and remember which original index each folded character came from. */
export function foldText(text: string): { folded: string; map: number[] } {
  let folded = ''
  const map: number[] = []
  for (let index = 0; index < text.length; index += 1) {
    const piece = text[index]!.normalize('NFD').replace(/\p{M}/gu, '').toLowerCase()
    for (const char of piece) {
      folded += char
      map.push(index)
    }
  }
  return { folded, map }
}

export function searchTerms(query: string): string[] {
  const { folded } = foldText(query)
  return folded
    .split(/\s+/)
    .map((term) => term.replace(/^[^\p{L}\p{N}]+|[^\p{L}\p{N}]+$/gu, ''))
    .filter((term) => term.length > 0)
}

/** `policy`/`policies` and `annuity`/`annuities`. A trailing s already matches as a substring. */
function pluralForms(term: string): string[] {
  const forms = [term]
  if (term.length >= 4 && /[^aeiou]y$/u.test(term)) forms.push(`${term.slice(0, -1)}ies`)
  if (term.length >= 5 && term.endsWith('ies')) forms.push(`${term.slice(0, -3)}y`)
  return forms
}

function textHas(folded: string, term: string) {
  return pluralForms(term).some((form) => folded.includes(form))
}

function findAll(folded: string, map: number[], term: string): { start: number; end: number }[] {
  const found: { start: number; end: number }[] = []
  for (const form of pluralForms(term)) {
    let from = 0
    while (from <= folded.length - form.length) {
      const at = folded.indexOf(form, from)
      if (at < 0) break
      const start = map[at]
      const last = map[at + form.length - 1]
      if (start != null && last != null) found.push({ start, end: last + 1 })
      from = at + Math.max(form.length, 1)
    }
  }
  return found
}

function allHits(folded: string, map: number[], terms: string[]) {
  const hits: { term: string; start: number; end: number }[] = []
  for (const term of terms) {
    for (const hit of findAll(folded, map, term)) hits.push({ term, ...hit })
  }
  hits.sort((left, right) => left.start - right.start || left.end - right.end)
  return hits
}

/** Tightest span that contains every word, so an early stray word does not win. */
function tightestSpan(hits: readonly { term: string; start: number; end: number }[], terms: readonly string[]) {
  const need = new Set(terms).size
  let best: { start: number; markEnd: number; end: number; span: number } | null = null
  for (let left = 0; left < hits.length; left += 1) {
    const seen = new Set<string>()
    for (let right = left; right < hits.length; right += 1) {
      seen.add(hits[right]!.term)
      if (seen.size < need) continue
      const start = hits[left]!.start
      const end = hits[right]!.end
      const span = end - start
      if (!best || span < best.span || (span === best.span && start < best.start)) {
        best = { start, markEnd: hits[left]!.end, end, span }
      }
      break
    }
  }
  return best
}

function snippetAround(source: string, terms: string[], anchor: { start: number; end: number }): SearchSnippet {
  const from = Math.max(0, anchor.start - SNIPPET_RADIUS)
  const to = Math.min(source.length, anchor.end + SNIPPET_RADIUS)
  const text = source.slice(from, to).replace(/\s+/g, ' ').trim()
  const windowFold = foldText(text)
  const marks = terms.flatMap((term) => findAll(windowFold.folded, windowFold.map, term))
  marks.sort((left, right) => left.start - right.start || left.end - right.end)
  const merged: { start: number; end: number }[] = []
  for (const mark of marks) {
    const previous = merged[merged.length - 1]
    if (previous && mark.start <= previous.end) previous.end = Math.max(previous.end, mark.end)
    else merged.push({ ...mark })
  }
  return { text, marks: merged, lead: from > 0, trail: to < source.length }
}

function sectionScore(title: string, chapter: string, body: string, terms: string[]) {
  let heading = 0
  let inBody = 0
  for (const term of terms) {
    const inTitle = textHas(title, term)
    const inChapter = textHas(chapter, term)
    if (inTitle) heading += 2
    else if (inChapter) heading += 1
    if (textHas(body, term)) inBody += 1
    if (!inTitle && !inChapter && !textHas(body, term)) return null
  }
  return { score: heading * 10 + inBody, headingMatch: heading > 0 }
}

/**
 * Every word must appear. Matching ignores case and diacritics.
 * A section whose heading contains a word ranks above a body-only match.
 * Groups follow that rank, so a heading chapter is listed before a body-only chapter.
 */
export function searchSections(sections: readonly SearchSection[], query: string): SearchGroup[] {
  const terms = searchTerms(query)
  if (terms.length === 0) return []
  const ranked: (SearchHit & { order: number })[] = []
  sections.forEach((section, index) => {
    const sectionTitle = subjectTitle(section.title)
    const chapterTitle = subjectTitle(section.chapterTitle)
    const titleFold = foldText(sectionTitle)
    const chapterFold = foldText(chapterTitle)
    const bodyFold = foldText(section.body)
    const scored = sectionScore(titleFold.folded, chapterFold.folded, bodyFold.folded, terms)
    if (!scored) return
    const bodySpan = tightestSpan(allHits(bodyFold.folded, bodyFold.map, terms), terms)
    const titleSpan = tightestSpan(allHits(titleFold.folded, titleFold.map, terms), terms)
    const phrase = bodySpan && bodySpan.span <= 80
    const snippet = bodySpan
      ? snippetAround(section.body, terms, { start: bodySpan.start, end: phrase ? bodySpan.end : bodySpan.markEnd })
      : snippetAround(sectionTitle, terms, titleSpan ?? { start: 0, end: Math.min(sectionTitle.length, 24) })
    ranked.push({
      sectionId: section.id,
      chapterId: section.chapterId,
      chapterNumber: section.chapterNumber,
      chapterTitle,
      sectionTitle,
      score: scored.score,
      headingMatch: scored.headingMatch,
      snippet,
      bodyStart: bodySpan?.start ?? null,
      bodyEnd: bodySpan ? (phrase ? bodySpan.end : bodySpan.markEnd) : null,
      order: index,
    })
  })
  ranked.sort((left, right) => {
    const leftHeading = left.headingMatch ? 1 : 0
    const rightHeading = right.headingMatch ? 1 : 0
    if (leftHeading !== rightHeading) return rightHeading - leftHeading
    if (left.score !== right.score) return right.score - left.score
    if (left.chapterNumber !== right.chapterNumber) return left.chapterNumber - right.chapterNumber
    return left.order - right.order
  })
  const groups: SearchGroup[] = []
  const byChapter = new Map<string, SearchGroup>()
  for (const rankedHit of ranked) {
    let group = byChapter.get(rankedHit.chapterId)
    if (!group) {
      group = {
        chapterId: rankedHit.chapterId,
        chapterNumber: rankedHit.chapterNumber,
        chapterTitle: rankedHit.chapterTitle,
        hits: [],
      }
      byChapter.set(rankedHit.chapterId, group)
      groups.push(group)
    }
    const { order, ...hit } = rankedHit
    void order
    group.hits.push(hit)
  }
  return groups
}

/** Every place the query's words appear in a section body, merged, so the reading can keep them all lit. */
export function bodyMatches(body: string, query: string): { start: number; end: number }[] {
  const terms = searchTerms(query)
  if (terms.length === 0 || !body) return []
  const fold = foldText(body)
  const marks = terms.flatMap((term) => findAll(fold.folded, fold.map, term))
  marks.sort((left, right) => left.start - right.start || left.end - right.end)
  const merged: { start: number; end: number }[] = []
  for (const mark of marks) {
    const previous = merged[merged.length - 1]
    if (previous && mark.start <= previous.end) previous.end = Math.max(previous.end, mark.end)
    else merged.push({ ...mark })
  }
  return merged
}

export function searchCourse(query: string, testId = 'life-health'): SearchGroup[] {
  const sections = testId === 'life-health' ? flatSections() : courseSections(testId)
  return searchSections(
    sections.map((section) => ({
      id: section.id,
      title: section.title,
      body: section.body,
      chapterId: section.chapter.id,
      chapterNumber: section.chapter.number,
      chapterTitle: section.chapter.title,
    })),
    query,
  )
}
