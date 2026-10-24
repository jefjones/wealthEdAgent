import { describe, expect, it } from 'vitest'
import { highlightPreview } from './highlights.ts'
import {
  chunkSpeech,
  groupOrder,
  highlightAnnouncement,
  highlightNarrationCues,
  highlightSpeechParts,
  initialPlayerState,
  isSentenceTap,
  listNarrationStatus,
  moveGroup,
  nextNarrationRate,
  playerReducer,
  preferEnglishVoice,
  sentenceParts,
  sentencePieces,
  speechSynthesisAvailable,
  splitSentences,
  startPartIndex,
  stepDestination,
} from './narrator.ts'

function spoken(body: string) {
  return splitSentences(body).map((sentence) => sentence.speak)
}

describe('splitSentences', () => {
  it('keeps abbreviations, initials, and decimals in the sentence', () => {
    expect(spoken('See e.g. term life and whole life.')).toEqual(['See e.g. term life and whole life.'])
    expect(spoken('A U.S. insurer writes the policy. The next rule is separate.')).toEqual([
      'A U.S. insurer writes the policy.',
      'The next rule is separate.',
    ])
    expect(spoken('Acme, Inc. sells coverage to the public.')).toEqual(['Acme, Inc. sells coverage to the public.'])
    expect(spoken('Acme, Inc. The board meets tomorrow.')).toEqual(['Acme, Inc.', 'The board meets tomorrow.'])
    expect(spoken('The passing grade is 70.5% of the items. The next rule is separate.')).toEqual([
      'The passing grade is 70.5% of the items.',
      'The next rule is separate.',
    ])
    expect(spoken('The benefit is $1,000.50 today. Tomorrow it changes.')).toEqual([
      'The benefit is $1,000.50 today.',
      'Tomorrow it changes.',
    ])
    expect(spoken('Mr. Smith stayed home. The visit was short.')).toEqual([
      'Mr. Smith stayed home.',
      'The visit was short.',
    ])
    expect(spoken('Pay the claim; keep the receipt. Then close the file.')).toEqual([
      'Pay the claim;',
      'keep the receipt.',
      'Then close the file.',
    ])
  })

  it('does not split U.S. before a capital name', () => {
    const body =
      'A foreign insurer is incorporated in another state or a U.S. territory (Puerto Rico and the U.S. Virgin Islands).'
    expect(spoken(body)).toEqual([body])
  })

  it('splits headings, bullets, and numbered items without reading the bullet', () => {
    const body = [
      'The terms used throughout the course:',
      '• Agent/producer — a legal representative. Agents represent the insurer.',
      '• Premium — the money paid for the policy.',
      '',
      '1. First item stays together.',
      '2. Second item is separate.',
    ].join('\n')
    expect(spoken(body)).toEqual([
      'The terms used throughout the course:',
      'Agent/producer — a legal representative.',
      'Agents represent the insurer.',
      'Premium — the money paid for the policy.',
      '1. First item stays together.',
      '2. Second item is separate.',
    ])
    expect(spoken(body).some((line) => line.includes('•'))).toBe(false)
  })

  it('treats a short line without punctuation as its own sentence', () => {
    expect(spoken('Methods\nAvoidance means eliminating exposure.')).toEqual([
      'Methods',
      'Avoidance means eliminating exposure.',
    ])
  })
})

describe('sentence pieces and taps', () => {
  it('splits a slice on sentence bounds without dropping characters', () => {
    const body = 'Alpha line. Keep this sentence.'
    const sentences = splitSentences(body)
    const pieces = sentencePieces(0, body, sentences)
    expect(pieces.map((piece) => piece.text).join('')).toBe(body)
    expect(pieces.map((piece) => piece.sentence)).toEqual([0, null, 1])
    expect(pieces[0]).toMatchObject({ start: 0, text: 'Alpha line.' })
    expect(body.slice(pieces[2]?.start, (pieces[2]?.start ?? 0) + (pieces[2]?.text.length ?? 0))).toBe('Keep this sentence.')
  })

  it('treats a drag, a long press, a selection, or a chrome control as not a sentence tap', () => {
    const tap = { targetChrome: false, movedPx: 0, durationMs: 40, selectionCollapsed: true }
    expect(isSentenceTap(tap)).toBe(true)
    expect(isSentenceTap({ ...tap, movedPx: 11 })).toBe(false)
    expect(isSentenceTap({ ...tap, durationMs: 500 })).toBe(false)
    expect(isSentenceTap({ ...tap, selectionCollapsed: false })).toBe(false)
    expect(isSentenceTap({ ...tap, targetChrome: true })).toBe(false)
  })
})

describe('player queue', () => {
  it('starts at the chosen sentence and stop keeps that choice', () => {
    const parts = sentenceParts(splitSentences('One ends here. Two ends here. Three ends here.'))
    expect(startPartIndex(parts, null)).toBe(0)
    expect(startPartIndex(parts, '1')).toBe(1)
    expect(startPartIndex([], '1')).toBeNull()
    let state = initialPlayerState()
    state = playerReducer(state, { type: 'select', group: '1' })
    state = playerReducer(state, { type: 'start', index: 1 })
    expect(state).toMatchObject({ phase: 'speaking', anchor: '1', index: 1 })
    state = playerReducer(state, { type: 'tick', index: 2 })
    state = playerReducer(state, { type: 'stop' })
    expect(state).toMatchObject({ phase: 'idle', anchor: '1', index: null })
    state = playerReducer(state, { type: 'rate', rate: 1.25 })
    state = playerReducer(state, { type: 'reset' })
    expect(state).toEqual({ phase: 'idle', anchor: null, index: null, rate: 1.25 })
    expect(nextNarrationRate(1)).toBe(1.25)
    expect(nextNarrationRate(1.25)).toBe(0.8)
  })

  it('steps highlights by group, restarting the current one from its announcement', () => {
    const parts = [
      { group: 'h1', speak: 'Chapter 1, Alpha.' },
      { group: 'h1', speak: 'First words.' },
      { group: 'h2', speak: 'Chapter 3, Policy Riders.' },
      { group: 'h2', speak: 'Rider words.' },
    ]
    expect(moveGroup(parts, 0, 1)).toBe(2)
    expect(moveGroup(parts, 1, -1)).toBe(0)
    expect(moveGroup(parts, 0, -1)).toBeNull()
    expect(moveGroup(parts, 2, 1)).toBeNull()
    expect(chunkSpeech('Short line.')).toEqual(['Short line.'])
    const long = Array.from({ length: 30 }, (_, index) => `reason ${index + 1}`).join(', ')
    const chunks = chunkSpeech(long)
    expect(chunks.length).toBeGreaterThan(1)
    expect(chunks.every((chunk) => chunk.length <= 180)).toBe(true)
    expect(chunks.join(' ').replace(/, /g, ',')).toBe(long.replace(/, /g, ','))
    const grouped = sentenceParts([{ start: 0, end: long.length, speak: long }])
    expect(grouped.every((part) => part.group === '0')).toBe(true)
    expect(grouped.length).toBe(chunks.length)
    expect(stepDestination(parts, 'speaking', 1, 'h1', 1)).toBe(2)
    expect(stepDestination(parts, 'idle', null, 'h2', -1)).toBe(0)
    expect(groupOrder(parts)).toEqual(['h1', 'h2'])
  })

  it('describes the idle and speaking positions', () => {
    expect(
      listNarrationStatus({
        supported: true,
        phase: 'idle',
        anchor: null,
        activeGroup: null,
        groups: ['0', '1'],
        noun: 'sentence',
        empty: 'This section has nothing to read.',
        fromStart: 'Starts at the top of this section.',
      }),
    ).toBe('Starts at the top of this section.')
    expect(
      listNarrationStatus({
        supported: true,
        phase: 'speaking',
        anchor: '1',
        activeGroup: '1',
        groups: ['0', '1', '2'],
        noun: 'highlight',
        empty: 'No highlights to read.',
        fromStart: 'Starts at the first highlight.',
      }),
    ).toBe('Reading highlight 2 of 3.')
    expect(
      listNarrationStatus({
        supported: false,
        phase: 'idle',
        anchor: null,
        activeGroup: null,
        groups: [],
        noun: 'sentence',
        empty: 'empty',
        fromStart: 'top',
      }),
    ).toBe('Read aloud is not available in this browser.')
  })
})

describe('highlight narration', () => {
  const sections = [
    { id: 'a', title: 'Alpha Subject', chapterNumber: 1, body: 'Alpha is here in the text.' },
    { id: 'b', title: 'Policy Riders.', chapterNumber: 3, body: 'Riders add benefits. Waiver is a rider.' },
    { id: 'c', title: 'Later Subject', chapterNumber: 3, body: 'Later words live here.' },
  ]

  it('announces the chapter and section, in chapter order, and skips text that is gone', () => {
    expect(highlightAnnouncement(3, 'Policy Riders.')).toBe('Chapter 3, Policy Riders.')
    const cues = highlightNarrationCues(
      [
        { highlightId: 'late', sectionId: 'c', startOffset: 0, endOffset: 11, text: 'Later words' },
        { highlightId: 'second', sectionId: 'b', startOffset: 21, endOffset: 38, text: 'Waiver is a rider.' },
        { highlightId: 'gone', sectionId: 'a', startOffset: 0, endOffset: 4, text: 'Gone' },
        { highlightId: 'early', sectionId: 'a', startOffset: 0, endOffset: 5, text: 'Alpha' },
        { highlightId: 'first-rider', sectionId: 'b', startOffset: 0, endOffset: 20, text: 'Riders add benefits.' },
        { highlightId: 'missing-section', sectionId: 'nope', startOffset: 0, endOffset: 4, text: 'Nope' },
      ],
      sections,
    )
    expect(cues.map((cue) => cue.highlightId)).toEqual(['early', 'first-rider', 'second', 'late'])
    expect(cues.map((cue) => cue.announcement)).toEqual([
      'Chapter 1, Alpha Subject.',
      'Chapter 3, Policy Riders.',
      'Chapter 3, Policy Riders.',
      'Chapter 3, Later Subject.',
    ])
    const parts = highlightSpeechParts(cues)
    expect(parts.slice(0, 4)).toEqual([
      { group: 'early', speak: 'Chapter 1, Alpha Subject.' },
      { group: 'early', speak: 'Alpha' },
      { group: 'first-rider', speak: 'Chapter 3, Policy Riders.' },
      { group: 'first-rider', speak: 'Riders add benefits.' },
    ])
    expect(parts.some((part) => part.speak.includes('Gone') || part.group === 'gone')).toBe(false)
    expect(moveGroup(parts, 0, 1)).toBe(2)
  })

  it('reads the full saved highlight, not the shortened list line', () => {
    const text =
      'The policy pays the hospital, the surgeon, the nurse, and the pharmacy, then pays the rest of the bill, and it keeps going until every saved word has been read aloud to the listener without cutting the passage short.'
    expect(text.length).toBeGreaterThan(100)
    expect(highlightPreview(text).endsWith('…')).toBe(true)
    expect(highlightPreview(text).includes('without cutting the passage short.')).toBe(false)
    const cues = highlightNarrationCues(
      [{ highlightId: 'long', sectionId: 'b', startOffset: 0, endOffset: text.length, text }],
      [{ id: 'b', title: 'Policy Riders', chapterNumber: 3, body: text }],
    )
    expect(cues.map((cue) => cue.text)).toEqual([text])
    expect(cues[0]?.announcement).toBe('Chapter 3, Policy Riders.')
    const parts = highlightSpeechParts(cues)
    expect(parts[0]).toEqual({ group: 'long', speak: 'Chapter 3, Policy Riders.' })
    const read = parts
      .slice(1)
      .map((part) => part.speak)
      .join(' ')
    expect(read.includes('without cutting the passage short.')).toBe(true)
    expect(read.includes('…')).toBe(false)
    expect(parts.every((part) => part.group === 'long')).toBe(true)
  })

  it('reads a highlight with more than one sentence after a single announcement', () => {
    const parts = highlightSpeechParts([
      {
        highlightId: 'h1',
        sectionId: 'b',
        announcement: 'Chapter 3, Policy Riders.',
        text: 'Riders add benefits. Waiver is extra.',
      },
    ])
    expect(parts).toEqual([
      { group: 'h1', speak: 'Chapter 3, Policy Riders.' },
      { group: 'h1', speak: 'Riders add benefits.' },
      { group: 'h1', speak: 'Waiver is extra.' },
    ])
  })
})

describe('voice choice', () => {
  it('prefers an English voice and reports when speech synthesis is missing', () => {
    const chosen = preferEnglishVoice([
      { lang: 'es-ES', name: 'Lucia' },
      { lang: 'en-GB', name: 'Daniel', default: true },
      { lang: 'en-US', name: 'Samantha' },
    ])
    expect(chosen?.name).toBe('Samantha')
    expect(preferEnglishVoice([{ lang: 'fr-FR', name: 'Thomas' }])).toBeNull()
    expect(speechSynthesisAvailable({})).toBe(false)
    expect(speechSynthesisAvailable({ speechSynthesis: {}, SpeechSynthesisUtterance: function Utterance() {} })).toBe(true)
  })
})
