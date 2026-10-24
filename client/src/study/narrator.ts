import { anchorHighlight, orderHighlights } from './highlights.ts'

/**
 * Read-aloud queues for the study page and the highlights page.
 * Pause and resume are intentionally not part of this model. iOS Safari
 * often fails to resume after speechSynthesis.pause(), and Chrome on Android
 * can leave the queue stuck. Start and Stop cancel the queue instead.
 * Each entry is one utterance so Chrome's long-utterance cutoff does not
 * drop the end of a section.
 */

export type Sentence = {
  start: number
  end: number
  speak: string
}

export type SpeechPart = {
  /** Next and Previous move by group. A highlight group has several parts. */
  group: string
  speak: string
}

/** Stay under Chrome's roughly 15 second utterance cutoff, including the slower 0.8× rate. */
export const SPEECH_CHUNK_LIMIT = 180

export const NARRATION_RATES = [0.8, 1, 1.25] as const
export type NarrationRate = (typeof NARRATION_RATES)[number]

export type PlayerPhase = 'idle' | 'speaking'

export type PlayerState = {
  phase: PlayerPhase
  /** Group Start should begin at. Null means the first group. */
  anchor: string | null
  /** Part index while speaking. */
  index: number | null
  rate: NarrationRate
}

export type PlayerAction =
  | { type: 'select'; group: string }
  | { type: 'start'; index: number }
  | { type: 'tick'; index: number }
  | { type: 'stop' }
  | { type: 'finish' }
  | { type: 'rate'; rate: NarrationRate }
  | { type: 'reset' }

export type HighlightNarrationCue = {
  highlightId: string
  sectionId: string
  announcement: string
  text: string
}

export type HighlightSource = {
  highlightId: string
  sectionId: string
  startOffset: number
  endOffset: number
  text: string
}

export type NarrationSection = {
  id: string
  title: string
  chapterNumber: number
  body: string
}

export type VoiceChoice = {
  lang: string
  name: string
  default?: boolean
}

export const SENTENCE_TAP_MOVE_PX = 10
export const SENTENCE_TAP_HOLD_MS = 500

const TITLES = new Set([
  'mr',
  'mrs',
  'ms',
  'dr',
  'jr',
  'sr',
  'st',
  'prof',
  'sgt',
  'lt',
  'col',
  'gen',
  'rev',
  'hon',
  'no',
  'fig',
  'vol',
  'pp',
  'ed',
  'al',
  'vs',
  'cf',
  'approx',
  'esp',
  'dept',
])

export function initialPlayerState(): PlayerState {
  return { phase: 'idle', anchor: null, index: null, rate: 1 }
}

export function playerReducer(state: PlayerState, action: PlayerAction): PlayerState {
  switch (action.type) {
    case 'select':
      if (!action.group) return state
      return { ...state, anchor: action.group }
    case 'start':
      if (!Number.isInteger(action.index) || action.index < 0) return state
      return { ...state, phase: 'speaking', index: action.index }
    case 'tick':
      if (state.phase !== 'speaking') return state
      if (!Number.isInteger(action.index) || action.index < 0) return state
      return { ...state, index: action.index }
    case 'stop':
    case 'finish':
      return { ...state, phase: 'idle', index: null }
    case 'rate':
      return { ...state, rate: action.rate }
    case 'reset':
      return { phase: 'idle', anchor: null, index: null, rate: state.rate }
    default:
      return state
  }
}

export function nextNarrationRate(rate: NarrationRate): NarrationRate {
  const index = NARRATION_RATES.indexOf(rate)
  return NARRATION_RATES[(index + 1) % NARRATION_RATES.length] ?? 1
}

export function splitSentences(body: string): Sentence[] {
  const sentences: Sentence[] = []
  const length = body.length
  let start = 0
  let index = 0
  while (index < length) {
    const ch = body[index] ?? ''
    if (ch === '\n' && body[index + 1] === '\n') {
      pushSentence(body, sentences, start, index)
      index += 1
      while (index < length && body[index] === '\n') index += 1
      start = index
      continue
    }
    if (ch === '\n' && body.startsWith('• ', index + 1)) {
      pushSentence(body, sentences, start, index)
      index += 1
      start = index
      continue
    }
    if (ch === '\n' && isHeadingLine(body, start, index)) {
      pushSentence(body, sentences, start, index)
      index += 1
      start = index
      continue
    }
    const boundary =
      ch === '.'
        ? isPeriodBoundary(body, index)
        : (ch === '!' || ch === '?' || ch === ';') && isHardBoundary(body, index)
    if (boundary) {
      let end = index + 1
      while (end < length && isCloser(body[end] ?? '')) end += 1
      pushSentence(body, sentences, start, end)
      index = consumeGap(body, end)
      start = index
      continue
    }
    if (ch === ':' && isColonHeading(body, index)) {
      const end = index + 1
      pushSentence(body, sentences, start, end)
      index = consumeGap(body, end)
      start = index
      continue
    }
    index += 1
  }
  pushSentence(body, sentences, start, length)
  return sentences
}

export function sentenceParts(sentences: readonly Sentence[]): SpeechPart[] {
  const parts: SpeechPart[] = []
  sentences.forEach((sentence, index) => {
    for (const speak of chunkSpeech(sentence.speak)) parts.push({ group: String(index), speak })
  })
  return parts
}

/** Break a long utterance on commas, semicolons, or spaces. Short text is unchanged. */
export function chunkSpeech(speak: string, limit = SPEECH_CHUNK_LIMIT): string[] {
  const text = speak.replace(/\s+/g, ' ').trim()
  if (!text) return []
  if (text.length <= limit) return [text]
  const parts: string[] = []
  let rest = text
  while (rest.length > limit) {
    const window = rest.slice(0, limit + 1)
    const comma = window.lastIndexOf(', ')
    const semi = window.lastIndexOf('; ')
    const space = window.lastIndexOf(' ')
    let cut = limit
    if (comma >= 80) cut = comma + 1
    else if (semi >= 80) cut = semi + 1
    else if (space >= 40) cut = space
    const chunk = rest.slice(0, cut).trim()
    if (!chunk) break
    parts.push(chunk)
    const next = rest.slice(cut).trim()
    if (next === rest) break
    rest = next
  }
  if (rest) parts.push(rest)
  return parts
}

/** Pieces of one painted slice. Concatenating `text` restores the slice. */
export function sentencePieces(
  sliceStart: number,
  sliceText: string,
  sentences: readonly { start: number; end: number }[],
): { start: number; text: string; sentence: number | null }[] {
  const sliceEnd = sliceStart + sliceText.length
  const pieces: { start: number; text: string; sentence: number | null }[] = []
  let cursor = sliceStart
  for (let index = 0; index < sentences.length; index += 1) {
    const sentence = sentences[index]
    if (!sentence || sentence.end <= cursor) continue
    if (sentence.start >= sliceEnd) break
    if (sentence.start > cursor) {
      const gapEnd = Math.min(sentence.start, sliceEnd)
      pieces.push({
        start: cursor,
        text: sliceText.slice(cursor - sliceStart, gapEnd - sliceStart),
        sentence: null,
      })
      cursor = gapEnd
    }
    if (cursor >= sliceEnd) break
    const to = Math.min(sentence.end, sliceEnd)
    if (to > cursor) {
      pieces.push({
        start: cursor,
        text: sliceText.slice(cursor - sliceStart, to - sliceStart),
        sentence: index,
      })
      cursor = to
    }
  }
  if (cursor < sliceEnd) {
    pieces.push({ start: cursor, text: sliceText.slice(cursor - sliceStart), sentence: null })
  }
  return pieces.filter((piece) => piece.text.length > 0)
}

export function isSentenceTap(input: {
  targetChrome: boolean
  movedPx: number
  durationMs: number
  selectionCollapsed: boolean
}): boolean {
  if (input.targetChrome) return false
  if (!(input.movedPx <= SENTENCE_TAP_MOVE_PX)) return false
  if (!(input.durationMs < SENTENCE_TAP_HOLD_MS)) return false
  if (!input.selectionCollapsed) return false
  return true
}

export function highlightAnnouncement(chapterNumber: number, sectionTitle: string): string {
  const title = sectionTitle.replace(/\s+/g, ' ').trim().replace(/[.!?]+$/u, '')
  return `Chapter ${chapterNumber}, ${title}.`
}

/** Highlights whose saved words are still in the section, in display order. */
export function highlightNarrationCues(
  highlights: readonly HighlightSource[],
  sections: readonly NarrationSection[],
): HighlightNarrationCue[] {
  const ordered = orderHighlights(
    highlights,
    sections.map((section) => ({ id: section.id, chapterNumber: section.chapterNumber })),
  )
  const byId = new Map(sections.map((section) => [section.id, section]))
  const cues: HighlightNarrationCue[] = []
  for (const row of ordered) {
    const section = byId.get(row.sectionId)
    if (!section) continue
    if (anchorHighlight(section.body, row).status !== 'anchored') continue
    const text = row.text.replace(/\s+/g, ' ').trim()
    if (!text) continue
    cues.push({
      highlightId: row.highlightId,
      sectionId: row.sectionId,
      announcement: highlightAnnouncement(section.chapterNumber, section.title),
      text,
    })
  }
  return cues
}

export function highlightSpeechParts(cues: readonly HighlightNarrationCue[]): SpeechPart[] {
  const parts: SpeechPart[] = []
  for (const cue of cues) {
    const announcement = cue.announcement.replace(/\s+/g, ' ').trim()
    if (announcement) parts.push({ group: cue.highlightId, speak: announcement })
    const reads = splitSentences(cue.text).flatMap((sentence) => chunkSpeech(sentence.speak))
    if (reads.length === 0) {
      for (const speak of chunkSpeech(cue.text)) parts.push({ group: cue.highlightId, speak })
    } else {
      for (const speak of reads) parts.push({ group: cue.highlightId, speak })
    }
  }
  return parts
}

export function groupOrder(parts: readonly { group: string }[]): string[] {
  const groups: string[] = []
  for (const part of parts) {
    if (groups[groups.length - 1] !== part.group) groups.push(part.group)
  }
  return groups
}

export function startPartIndex(parts: readonly { group: string }[], anchor: string | null): number | null {
  if (parts.length === 0) return null
  if (anchor == null) return 0
  const index = parts.findIndex((part) => part.group === anchor)
  return index === -1 ? 0 : index
}

/** Move to another group. Previous from the middle of a group restarts that group. */
export function moveGroup(parts: readonly { group: string }[], index: number, direction: -1 | 1): number | null {
  if (parts.length === 0 || !Number.isInteger(index) || index < 0 || index >= parts.length) return null
  const current = parts[index]?.group
  if (current == null) return null
  if (direction < 0) {
    let start = index
    while (start > 0 && parts[start - 1]?.group === current) start -= 1
    if (index > start) return start
    if (start === 0) return null
    let previous = start - 1
    const previousGroup = parts[previous]?.group
    while (previous > 0 && parts[previous - 1]?.group === previousGroup) previous -= 1
    return previous
  }
  for (let cursor = index + 1; cursor < parts.length; cursor += 1) {
    if (parts[cursor]?.group !== current) return cursor
  }
  return null
}

export function stepDestination(
  parts: readonly { group: string }[],
  phase: PlayerPhase,
  index: number | null,
  anchor: string | null,
  direction: -1 | 1,
): number | null {
  if (parts.length === 0) return null
  const at = phase === 'speaking' && index != null ? index : (startPartIndex(parts, anchor) ?? 0)
  return moveGroup(parts, at, direction)
}

export function listNarrationStatus(input: {
  supported: boolean
  phase: PlayerPhase
  anchor: string | null
  activeGroup: string | null
  groups: readonly string[]
  noun: 'sentence' | 'highlight'
  empty: string
  fromStart: string
}): string {
  if (!input.supported) return 'Read aloud is not available in this browser.'
  const total = input.groups.length
  if (total === 0) return input.empty
  const place = (group: string | null) => {
    if (group == null) return null
    const found = input.groups.indexOf(group)
    return found === -1 ? null : found + 1
  }
  if (input.phase === 'speaking') {
    const current = place(input.activeGroup)
    if (current != null) return `Reading ${input.noun} ${current} of ${total}.`
  }
  const chosen = place(input.anchor)
  if (chosen != null) return `Starts at ${input.noun} ${chosen} of ${total}.`
  return input.fromStart
}

export function preferEnglishVoice<T extends VoiceChoice>(voices: readonly T[]): T | null {
  const english = voices.filter((voice) => voice.lang.toLowerCase().startsWith('en'))
  if (english.length === 0) return null
  const score = (voice: T) => {
    const lang = voice.lang.toLowerCase()
    const name = voice.name.toLowerCase()
    let value = 0
    if (lang === 'en-us') value += 4
    if (voice.default) value += 1
    if (/natural|premium|enhanced|samantha|google/.test(name)) value += 3
    return value
  }
  return [...english].sort((left, right) => score(right) - score(left) || left.name.localeCompare(right.name))[0] ?? null
}

export function speechSynthesisAvailable(host: { speechSynthesis?: unknown; SpeechSynthesisUtterance?: unknown }): boolean {
  return host.speechSynthesis != null && typeof host.SpeechSynthesisUtterance === 'function'
}

function pushSentence(body: string, sentences: Sentence[], start: number, end: number) {
  let from = start
  let to = end
  while (from < to && /\s/u.test(body[from] ?? '')) from += 1
  while (to > from && /\s/u.test(body[to - 1] ?? '')) to -= 1
  if (body.startsWith('• ', from) || body.startsWith('•\t', from)) {
    from += 2
    while (from < to && /\s/u.test(body[from] ?? '')) from += 1
  } else if (body[from] === '•') {
    from += 1
    while (from < to && /\s/u.test(body[from] ?? '')) from += 1
  }
  if (from >= to) return
  const speak = body.slice(from, to).replace(/\s+/g, ' ').trim()
  if (!speak) return
  sentences.push({ start: from, end: to, speak })
}

function isWordChar(ch: string) {
  return /[\p{L}.'’]/u.test(ch)
}

function wordBefore(text: string, periodIndex: number) {
  let index = periodIndex - 1
  while (index >= 0 && isWordChar(text[index] ?? '')) index -= 1
  return text.slice(index + 1, periodIndex)
}

function isInitialism(token: string) {
  if (!token.includes('.')) return false
  return token
    .toLowerCase()
    .split('.')
    .every((part) => /^[\p{L}]{1,2}$/u.test(part))
}

function isProtected(token: string) {
  const lower = token.toLowerCase().replace(/[’']/g, '')
  return TITLES.has(lower) || isInitialism(lower)
}

function isDecimal(text: string, index: number) {
  const before = text[index - 1]
  const after = text[index + 1]
  return before != null && after != null && /\d/.test(before) && /\d/.test(after)
}

function isListMarker(text: string, index: number) {
  let cursor = index - 1
  if (cursor < 0 || !/\d/.test(text[cursor] ?? '')) return false
  while (cursor >= 0 && /\d/.test(text[cursor] ?? '')) cursor -= 1
  while (cursor >= 0 && (text[cursor] === ' ' || text[cursor] === '\t')) cursor -= 1
  return cursor < 0 || text[cursor] === '\n'
}

function isCloser(ch: string) {
  return /['"”’)\]]/u.test(ch)
}

type NextKind = 'end' | 'break' | 'lower' | 'upper' | 'bullet' | 'other'

function lookAhead(text: string, punctIndex: number): NextKind {
  let index = punctIndex + 1
  while (index < text.length && isCloser(text[index] ?? '')) index += 1
  if (index >= text.length) return 'end'
  const ch = text[index] ?? ''
  if (ch === '\n') return 'break'
  if (ch !== ' ' && ch !== '\t') return 'other'
  while (index < text.length && (text[index] === ' ' || text[index] === '\t')) index += 1
  if (index >= text.length || text[index] === '\n') return 'break'
  const next = text[index] ?? ''
  if (next === '•') return 'bullet'
  if (/\p{Ll}/u.test(next)) return 'lower'
  if (/\p{Lu}/u.test(next) || next === '"' || next === '“') return 'upper'
  return 'other'
}

function hasWhitespaceAfter(text: string, punctIndex: number) {
  let index = punctIndex + 1
  while (index < text.length && isCloser(text[index] ?? '')) index += 1
  return index >= text.length || /\s/u.test(text[index] ?? '')
}

function isPeriodBoundary(text: string, index: number) {
  if (isDecimal(text, index) || isListMarker(text, index)) return false
  const next = lookAhead(text, index)
  if (isProtected(wordBefore(text, index))) return next === 'end' || next === 'break' || next === 'bullet'
  if (next === 'lower') return false
  if (next === 'end' || next === 'break' || next === 'upper' || next === 'bullet') return true
  return next === 'other' && hasWhitespaceAfter(text, index)
}

function isHardBoundary(text: string, index: number) {
  return hasWhitespaceAfter(text, index)
}

function isColonHeading(text: string, index: number) {
  let cursor = index + 1
  while (cursor < text.length && (text[cursor] === ' ' || text[cursor] === '\t')) cursor += 1
  return cursor >= text.length || text[cursor] === '\n'
}

function isHeadingLine(text: string, start: number, end: number) {
  const line = text.slice(start, end)
  if (!line.trim()) return false
  return !/[.!?]/.test(line)
}

function consumeGap(text: string, index: number) {
  let cursor = index
  while (cursor < text.length && (text[cursor] === ' ' || text[cursor] === '\t')) cursor += 1
  if (text[cursor] === '\n') {
    while (cursor < text.length && text[cursor] === '\n') cursor += 1
  }
  return cursor
}
