import { describe, expect, it } from 'vitest'
import {
  GLOBAL_STATE_ID,
  guessVoiceGender,
  matchVoice,
  mergeStudyState,
  patchStudyState,
  planStateMigration,
  sanitizeStudyState,
} from './studyState.ts'
import { adoptServer } from './stateSync.ts'
import { freshSearchSession, isFreshSearchSignal, shouldRestoreServerSearch } from './SearchContext.tsx'

const voices = [
  { name: 'Google US English', lang: 'en-US' },
  { name: 'Microsoft David', lang: 'en-US' },
  { name: 'Microsoft Zira', lang: 'en-US' },
  { name: 'Daniel', lang: 'en-GB' },
]

describe('voice matching', () => {
  it('uses the exact name first', () => {
    expect(matchVoice(voices, { name: 'Daniel', lang: 'en-GB' })?.name).toBe('Daniel')
  })
  it('then same language and gender', () => {
    expect(matchVoice(voices, { name: 'Samantha', lang: 'en-US' })?.name).toBe('Microsoft Zira')
    expect(matchVoice(voices, { name: 'Alex', lang: 'en-US' })?.name).toBe('Microsoft David')
  })
  it('then same language, then language prefix, else nothing', () => {
    expect(matchVoice(voices, { name: 'Unknown', lang: 'en-us' })?.name).toBe('Google US English')
    expect(matchVoice(voices, { name: 'Karen', lang: 'en-AU' })?.name).toBe('Google US English')
    expect(matchVoice(voices, { name: 'Amelie', lang: 'fr-CA' })).toBeNull()
    expect(matchVoice(voices, null)).toBeNull()
  })
  it('guesses gender from the name table', () => {
    expect(guessVoiceGender('Microsoft Aria Online (Natural)')).toBe('female')
    expect(guessVoiceGender('Google UK English Male')).toBeNull()
    expect(guessVoiceGender('Arthur')).toBe('male')
  })
})

describe('study state merge', () => {
  it('keeps the newer copy of each field', () => {
    const local = patchStudyState({}, { rate: 1.25 }, '2026-10-24T10:00:00.000Z')
    const server = patchStudyState({}, { rate: 0.8, autoContinue: false }, '2026-10-24T09:00:00.000Z')
    const withSearch = patchStudyState(server, { search: { query: 'x', tab: 'search', selected: '', resultsScrollTop: 0 } }, '2026-10-24T11:00:00.000Z')
    const merged = mergeStudyState(local, withSearch)
    expect(merged.rate).toBe(1.25)
    expect(merged.autoContinue).toBe(false)
    expect(merged.search?.query).toBe('x')
  })
  it('uses lastPosition.savedAt and lets an unsent local change win a tie', () => {
    const at = '2026-10-24T10:00:00.000Z'
    const a = { lastPosition: { chapterId: 'c1', sectionId: 's1', savedAt: at } }
    const b = { lastPosition: { chapterId: 'c2', sectionId: 's2', savedAt: at } }
    expect(mergeStudyState(a, b).lastPosition?.sectionId).toBe('s2')
    expect(mergeStudyState(a, b, ['lastPosition']).lastPosition?.sectionId).toBe('s1')
  })
  it('on a 409, merges the server copy and keeps only newer local fields to resend', () => {
    const local = patchStudyState({}, { rate: 1.25 }, '2026-10-24T12:00:00.000Z')
    const remote = patchStudyState({}, { rate: 0.8, autoContinue: false }, '2026-10-24T11:00:00.000Z')
    const next = adoptServer(
      { state: local, updatedAt: '2026-10-24T10:00:00.000Z', dirty: new Set(['rate']) },
      { testId: GLOBAL_STATE_ID, state: remote as Record<string, unknown>, updatedAt: '2026-10-24T11:00:00.123Z' },
    )
    expect(next.updatedAt).toBe('2026-10-24T11:00:00.123Z')
    expect(next.state.rate).toBe(1.25)
    expect(next.state.autoContinue).toBe(false)
    expect([...next.dirty]).toEqual(['rate'])
  })
  it('drops broken fields from the server', () => {
    expect(sanitizeStudyState({ rate: 'fast', voice: { lang: 'en' }, navExpanded: ['a', 3] })).toEqual({ navExpanded: ['a'] })
  })
})

describe('one-time migration', () => {
  const base = {
    chapterOf: (_t: string, sectionId: string) => (sectionId === 'gone' ? null : `ch-${sectionId}`),
    voices: [{ name: 'Samantha', lang: 'en-US', voiceURI: 'com.apple.samantha' }],
    nowIso: '2026-10-24T12:00:00.000Z',
  }
  it('posts searches oldest first with their test, and fills only empty server fields', () => {
    const plan = planStateMigration({
      ...base,
      searchesByTest: {
        sie: [
          { text: 'newer', searchedAt: '2026-10-02T00:00:00Z' },
          { text: 'older', searchedAt: '2026-10-01T00:00:00Z' },
        ],
      },
      resume: { 'life-health': 's1', sie: 's9', other: 'gone' },
      voiceId: 'com.apple.samantha',
      autoContinue: false,
      server: { sie: { lastPosition: { chapterId: 'c', sectionId: 'x', savedAt: '' } }, [GLOBAL_STATE_ID]: null },
    })
    expect(plan.searchPosts).toEqual([
      { testId: 'sie', text: 'older' },
      { testId: 'sie', text: 'newer' },
    ])
    expect(plan.patches['life-health']?.lastPosition?.chapterId).toBe('ch-s1')
    expect(plan.patches.sie).toBeUndefined()
    expect(plan.patches.other).toBeUndefined()
    expect(plan.patches[GLOBAL_STATE_ID]).toEqual({
      voice: { name: 'Samantha', lang: 'en-US', gender: 'female' },
      autoContinue: false,
    })
  })
  it('leaves the voice alone when the server already has one or the choice was auto', () => {
    const plan = planStateMigration({
      ...base,
      searchesByTest: {},
      resume: {},
      voiceId: 'en-GB::Daniel',
      autoContinue: null,
      server: { [GLOBAL_STATE_ID]: { voice: { name: 'Ava', lang: 'en-US' } } },
    })
    expect(plan.patches[GLOBAL_STATE_ID]).toBeUndefined()
    const auto = planStateMigration({ ...base, searchesByTest: {}, resume: {}, voiceId: 'auto', autoContinue: null, server: {} })
    expect(auto.patches).toEqual({})
  })
})

describe('fresh search from the nav', () => {
  it('only router state { freshSearch: true } starts fresh', () => {
    expect(isFreshSearchSignal({ freshSearch: true })).toBe(true)
    expect(isFreshSearchSignal(null)).toBe(false)
    expect(isFreshSearchSignal({ freshSearch: 'yes' })).toBe(false)
    expect(freshSearchSession()).toEqual({ query: '', tab: 'search', selected: '' })
  })
  it('restores a server search only when it is newer than this tab', () => {
    expect(shouldRestoreServerSearch(0, 5)).toBe(true)
    expect(shouldRestoreServerSearch(10, 5)).toBe(false)
  })
})
