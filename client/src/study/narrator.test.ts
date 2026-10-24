import { describe, expect, it } from 'vitest'
import { highlightPreview } from './highlights.ts'
import {
  SPEECH_CHUNK_LIMIT,
  chunkSpeech,
  groupOrder,
  highlightAnnouncement,
  highlightNarrationCues,
  highlightSpeechParts,
  initialPlayerState,
  isSentenceTap,
  listNarrationStatus,
  beginNarrationRun,
  moveGroup,
  narrationJump,
  narrationRunAfterEnd,
  nextNarrationRate,
  playerReducer,
  AUTO_VOICE_ID,
  isIosWebKitVoiceHost,
  preferEnglishVoice,
  rankNarrationVoices,
  readVoicePreference,
  resolveNarrationVoice,
  sentenceParts,
  voiceStorageId,
  writeVoicePreference,
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

  it('jumps to a different sentence and ignores the cancelled utterance end', () => {
    const parts = sentenceParts(splitSentences('One ends here. Two ends here. Three ends here.'))
    expect(narrationJump({ phase: 'idle', parts, targetGroup: '2', index: null, plainTap: true })).toEqual({
      action: 'anchor',
    })
    expect(narrationJump({ phase: 'speaking', parts, targetGroup: '2', index: 0, plainTap: false })).toEqual({
      action: 'ignore',
    })
    expect(narrationJump({ phase: 'speaking', parts, targetGroup: '2', index: 0, plainTap: true })).toEqual({
      action: 'jump',
      index: 2,
    })
    expect(narrationJump({ phase: 'speaking', parts, targetGroup: '0', index: 0, plainTap: true })).toEqual({
      action: 'anchor',
    })
    const highlights = [
      { group: 'h1', speak: 'Chapter 1, Alpha.' },
      { group: 'h1', speak: 'First words.' },
      { group: 'h2', speak: 'Chapter 2, Beta.' },
    ]
    expect(narrationJump({ phase: 'speaking', parts: highlights, targetGroup: 'h2', index: 1, plainTap: true })).toEqual({
      action: 'jump',
      index: 2,
    })

    let run = beginNarrationRun(0, 0)
    expect(run).toEqual({ token: 1, phase: 'speaking', index: 0 })
    const jumped = narrationJump({ phase: run.phase, parts, targetGroup: '2', index: run.index, plainTap: true })
    expect(jumped).toEqual({ action: 'jump', index: 2 })
    const previous = run.token
    run = beginNarrationRun(previous, 2)
    expect(run).toEqual({ token: 2, phase: 'speaking', index: 2 })
    expect(narrationRunAfterEnd(run, previous, true)).toEqual(run)
    expect(narrationRunAfterEnd(run, run.token, false)).toEqual(run)
    expect(narrationRunAfterEnd(run, run.token, true)).toEqual({ token: 2, phase: 'idle', index: null })
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
    const long = Array.from({ length: 80 }, (_, index) => `reason ${index + 1}`).join(', ')
    expect(long.length).toBeGreaterThan(SPEECH_CHUNK_LIMIT)
    const chunks = chunkSpeech(long)
    expect(chunks.length).toBeGreaterThan(1)
    expect(chunks.every((chunk) => chunk.length <= SPEECH_CHUNK_LIMIT)).toBe(true)
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
    expect(highlightAnnouncement(4, 'Topic 4: Policy Riders.')).toBe('Chapter 4, Policy Riders.')
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
  const voices = [
    { lang: 'es-ES', name: 'Lucia', voiceURI: 'lucia' },
    { lang: 'en-GB', name: 'Daniel', default: true, voiceURI: 'daniel' },
    { lang: 'en-US', name: 'Alex', voiceURI: 'alex' },
    { lang: 'en-US', name: 'Albert', voiceURI: 'albert' },
    { lang: 'en-US', name: 'Bad News', voiceURI: 'bad-news' },
    { lang: 'en-US', name: 'Fred', voiceURI: 'fred' },
    { lang: 'en-US', name: 'Samantha (Compact)', voiceURI: 'samantha-compact' },
    { lang: 'en-US', name: 'Samantha', voiceURI: 'samantha' },
    { lang: 'en-US', name: 'Samantha (Enhanced)', voiceURI: 'samantha-enhanced' },
    { lang: 'en-US', name: 'Ava (Premium)', voiceURI: 'ava-premium' },
    { lang: 'en-US', name: 'Zoe', voiceURI: 'zoe' },
    { lang: 'en-US', name: 'Allison', voiceURI: 'allison' },
    { lang: 'en-US', name: 'Evan', voiceURI: 'evan' },
    { lang: 'en-US', name: 'Nathan', voiceURI: 'nathan' },
    { lang: 'en-US', name: 'Google US English', voiceURI: 'google-us' },
    { lang: 'en-GB', name: 'Google UK English Female', voiceURI: 'google-uk' },
    { lang: 'en-US', name: 'Microsoft David - English (United States)', voiceURI: 'david' },
    { lang: 'en-US', name: 'Microsoft Aria Online (Natural)', voiceURI: 'aria' },
    { lang: 'en-US', name: 'Microsoft Jenny Online (Natural)', voiceURI: 'jenny' },
    { lang: 'en-US', name: 'Siri (Voice 1)', voiceURI: 'siri' },
  ]

  it('ranks natural English voices ahead of robotic, compact, and novelty voices', () => {
    const ranked = rankNarrationVoices(voices).map((voice) => voice.name)
    const at = (name: string) => ranked.indexOf(name)
    expect(ranked).not.toContain('Lucia')
    expect(at('Microsoft Aria Online (Natural)')).toBeLessThan(at('Google US English'))
    expect(at('Microsoft Jenny Online (Natural)')).toBeLessThan(at('Google US English'))
    expect(at('Samantha (Enhanced)')).toBeLessThan(at('Samantha'))
    expect(at('Ava (Premium)')).toBeLessThan(at('Samantha'))
    expect(at('Siri (Voice 1)')).toBeLessThan(at('Google US English'))
    expect(at('Google US English')).toBeLessThan(at('Samantha'))
    expect(at('Google US English')).toBeLessThan(at('Google UK English Female'))
    expect(at('Samantha')).toBeLessThan(at('Alex'))
    expect(at('Zoe')).toBeLessThan(at('Alex'))
    expect(at('Allison')).toBeLessThan(at('Alex'))
    expect(at('Evan')).toBeLessThan(at('Alex'))
    expect(at('Nathan')).toBeLessThan(at('Alex'))
    expect(at('Google UK English Female')).toBeLessThan(at('Daniel'))
    expect(at('Alex')).toBeLessThan(at('Daniel'))
    expect(at('Daniel')).toBeLessThan(at('Albert'))
    expect(at('Daniel')).toBeLessThan(at('Bad News'))
    expect(at('Daniel')).toBeLessThan(at('Fred'))
    expect(at('Samantha')).toBeLessThan(at('Samantha (Compact)'))
    expect(at('Microsoft David - English (United States)')).toBeLessThan(at('Albert'))
    expect(preferEnglishVoice(voices)?.name).toBe(ranked[0])
    expect(preferEnglishVoice([{ lang: 'fr-FR', name: 'Thomas' }])).toBeNull()
    expect(speechSynthesisAvailable({})).toBe(false)
    expect(speechSynthesisAvailable({ speechSynthesis: {}, SpeechSynthesisUtterance: function Utterance() {} })).toBe(true)
  })

  it('keeps a saved voice, and falls back to auto only after the voice list is ready', () => {
    const saved = voiceStorageId({ lang: 'en-US', name: 'Samantha', voiceURI: 'samantha' })
    expect(resolveNarrationVoice(voices, saved, true).voice?.name).toBe('Samantha')
    expect(resolveNarrationVoice(voices, AUTO_VOICE_ID, true).id).toBe(AUTO_VOICE_ID)
    expect(resolveNarrationVoice(voices, AUTO_VOICE_ID, true).voice?.name).toBe('Microsoft Aria Online (Natural)')
    expect(resolveNarrationVoice(voices, 'missing-voice', false).id).toBe('missing-voice')
    expect(resolveNarrationVoice(voices, 'missing-voice', false).voice?.name).toBe('Microsoft Aria Online (Natural)')
    expect(resolveNarrationVoice(voices, 'missing-voice', true)).toMatchObject({
      id: AUTO_VOICE_ID,
      voice: expect.objectContaining({ name: 'Microsoft Aria Online (Natural)' }),
    })
    const storage = new Map<string, string>()
    const memory = {
      getItem: (key: string) => storage.get(key) ?? null,
      setItem: (key: string, value: string) => {
        storage.set(key, value)
      },
    }
    expect(readVoicePreference(memory)).toBe(AUTO_VOICE_ID)
    writeVoicePreference(memory, saved)
    expect(readVoicePreference(memory)).toBe(saved)
    writeVoicePreference(null, saved)
    expect(readVoicePreference(null)).toBe(AUTO_VOICE_ID)
  })

  it('treats iPhone and iPad as WebKit voice hosts', () => {
    expect(isIosWebKitVoiceHost('Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) CriOS/120.0')).toBe(true)
    expect(isIosWebKitVoiceHost('Mozilla/5.0 (Linux; Android 14) Chrome/120.0')).toBe(false)
    expect(isIosWebKitVoiceHost('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', 5, 'MacIntel')).toBe(true)
    expect(isIosWebKitVoiceHost('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)', 0, 'MacIntel')).toBe(false)
  })
})
