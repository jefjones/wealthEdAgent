/**
 * Study state that follows the reader across devices.
 * Per test: last reading spot, current search, expanded chapters.
 * Global ('_global'): narrator voice, rate and auto-continue.
 * Every field carries its own save time in `_t` so two devices merge field by field.
 */

export const GLOBAL_STATE_ID = '_global'
export const STATE_MAX_BYTES = 16 * 1024

export type LastPosition = { chapterId: string; sectionId: string; savedAt: string }
export type SearchState = {
  query: string
  tab: 'contents' | 'search'
  selected: string
  resultsScrollTop: number
}
export type VoicePick = { name: string; lang: string; gender?: 'female' | 'male' }

export type TestState = {
  lastPosition?: LastPosition | null
  search?: SearchState | null
  navExpanded?: string[]
  voice?: VoicePick | null
  rate?: number
  autoContinue?: boolean
  /** Save time of each field, ISO. */
  _t?: Record<string, string>
}

export type StateField = Exclude<keyof TestState, '_t'>

const FIELDS: readonly StateField[] = ['lastPosition', 'search', 'navExpanded', 'voice', 'rate', 'autoContinue']

function ms(value: string | undefined | null) {
  if (!value) return 0
  const parsed = Date.parse(value)
  return Number.isFinite(parsed) ? parsed : 0
}

/** When a field was saved. lastPosition also carries its own savedAt. */
export function fieldTime(state: TestState | null | undefined, field: StateField): number {
  if (!state) return 0
  const stamp = ms(state._t?.[field])
  if (field === 'lastPosition') return Math.max(stamp, ms(state.lastPosition?.savedAt))
  return stamp
}

function has(state: TestState | null | undefined, field: StateField) {
  return Boolean(state) && Object.prototype.hasOwnProperty.call(state, field) && state?.[field] !== undefined
}

/**
 * Merge two copies field by field. The newer save time wins.
 * A field the local side changed and has not sent yet wins a tie.
 */
export function mergeStudyState(
  local: TestState | null | undefined,
  remote: TestState | null | undefined,
  dirty: readonly string[] = [],
): TestState {
  const out: TestState = {}
  const times: Record<string, string> = {}
  for (const field of FIELDS) {
    const inLocal = has(local, field)
    const inRemote = has(remote, field)
    if (!inLocal && !inRemote) continue
    let useLocal: boolean
    if (!inRemote) useLocal = true
    else if (!inLocal) useLocal = false
    else {
      const l = fieldTime(local, field)
      const r = fieldTime(remote, field)
      useLocal = l > r || (l === r && dirty.includes(field))
    }
    const source = useLocal ? local : remote
    ;(out as Record<string, unknown>)[field] = source?.[field]
    const stamp = source?._t?.[field] ?? (field === 'lastPosition' ? source?.lastPosition?.savedAt : undefined)
    if (stamp) times[field] = stamp
  }
  if (Object.keys(times).length > 0) out._t = times
  return out
}

/** Set fields and stamp them now. */
export function patchStudyState(state: TestState | null | undefined, patch: Partial<TestState>, nowIso: string): TestState {
  const next: TestState = { ...(state ?? {}), _t: { ...(state?._t ?? {}) } }
  for (const [key, value] of Object.entries(patch)) {
    if (key === '_t') continue
    ;(next as Record<string, unknown>)[key] = value
    next._t![key] = nowIso
  }
  return next
}

/** Keep only known fields with the right shapes. Unknown or broken data is dropped. */
export function sanitizeStudyState(raw: unknown): TestState {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return {}
  const row = raw as Record<string, unknown>
  const out: TestState = {}
  const lp = row.lastPosition as Record<string, unknown> | null | undefined
  if (lp && typeof lp.sectionId === 'string' && lp.sectionId) {
    out.lastPosition = {
      chapterId: typeof lp.chapterId === 'string' ? lp.chapterId : '',
      sectionId: lp.sectionId,
      savedAt: typeof lp.savedAt === 'string' ? lp.savedAt : '',
    }
  }
  const search = row.search as Record<string, unknown> | null | undefined
  if (search && typeof search === 'object') {
    const top = Number(search.resultsScrollTop)
    out.search = {
      query: typeof search.query === 'string' ? search.query.slice(0, 200) : '',
      tab: search.tab === 'search' ? 'search' : 'contents',
      selected: typeof search.selected === 'string' ? search.selected.slice(0, 200) : '',
      resultsScrollTop: Number.isFinite(top) && top > 0 ? Math.round(top) : 0,
    }
  }
  if (Array.isArray(row.navExpanded)) {
    out.navExpanded = row.navExpanded.filter((id): id is string => typeof id === 'string').slice(0, 200)
  }
  if (row.voice === null) out.voice = null
  else if (row.voice && typeof row.voice === 'object') {
    const voice = row.voice as Record<string, unknown>
    if (typeof voice.name === 'string' && voice.name) {
      out.voice = { name: voice.name, lang: typeof voice.lang === 'string' ? voice.lang : '' }
      if (voice.gender === 'female' || voice.gender === 'male') out.voice.gender = voice.gender
    }
  }
  if (typeof row.rate === 'number' && Number.isFinite(row.rate)) out.rate = row.rate
  if (typeof row.autoContinue === 'boolean') out.autoContinue = row.autoContinue
  if (row._t && typeof row._t === 'object') {
    const times: Record<string, string> = {}
    for (const [key, value] of Object.entries(row._t as Record<string, unknown>)) {
      if (FIELDS.includes(key as StateField) && typeof value === 'string') times[key] = value
    }
    if (Object.keys(times).length > 0) out._t = times
  }
  return out
}

/** The server compares these to the millisecond, so they are compared as text and never reformatted. */
export function newerUpdatedAt(left: string | null | undefined, right: string | null | undefined) {
  if (!left) return right ?? null
  if (!right) return left
  return ms(right) > ms(left) ? right : left
}

export function stateSize(state: TestState) {
  return new TextEncoder().encode(JSON.stringify(state)).length
}

/* ---------- Study effort ---------- */

/** Reopening the same section counts again only after this long, so reloads do not spam saves. */
export const STUDY_EFFORT_THROTTLE_MS = 60_000

/**
 * Opening a chapter or section is an effort. Returns the lastPosition to save,
 * or null when it is the same section saved less than a minute ago.
 */
export function studyOpenPosition(
  previous: LastPosition | null | undefined,
  chapterId: string,
  sectionId: string,
  nowIso: string,
): LastPosition | null {
  if (previous?.sectionId === sectionId && ms(nowIso) - ms(previous.savedAt) < STUDY_EFFORT_THROTTLE_MS) return null
  return { chapterId, sectionId, savedAt: nowIso }
}

/* ---------- Voice matching ---------- */

const FEMALE = ['samantha', 'zira', 'aria', 'jenny', 'karen', 'moira', 'tessa', 'victoria', 'allison', 'ava', 'susan', 'serena', 'libby', 'sonia']
const MALE = ['daniel', 'david', 'mark', 'guy', 'alex', 'fred', 'tom', 'aaron', 'ryan', 'arthur', 'george', 'james']

/** Guess from a small table of common voice names. Unknown names give null. */
export function guessVoiceGender(name: string): 'female' | 'male' | null {
  const words = name.toLowerCase().split(/[^a-z]+/).filter(Boolean)
  if (words.some((word) => FEMALE.includes(word))) return 'female'
  if (words.some((word) => MALE.includes(word))) return 'male'
  return null
}

export type MatchableVoice = { name: string; lang: string }

function langKey(lang: string) {
  return lang.replace(/_/g, '-').toLowerCase()
}

/**
 * Pick the device voice closest to the saved one:
 * exact name; then same full language and same gender; then same full language;
 * then same language prefix. Null means use the automatic default.
 */
export function matchVoice<T extends MatchableVoice>(voices: readonly T[], saved: VoicePick | null | undefined): T | null {
  if (!saved?.name) return null
  const exact = voices.find((voice) => voice.name === saved.name)
  if (exact) return exact
  const lang = langKey(saved.lang || '')
  if (!lang) return null
  const gender = saved.gender ?? guessVoiceGender(saved.name)
  const sameLang = voices.filter((voice) => langKey(voice.lang) === lang)
  if (gender) {
    const sameGender = sameLang.find((voice) => guessVoiceGender(voice.name) === gender)
    if (sameGender) return sameGender
  }
  if (sameLang[0]) return sameLang[0]
  const prefix = lang.split('-')[0]
  return voices.find((voice) => langKey(voice.lang).split('-')[0] === prefix) ?? null
}

export function voicePickFrom(voice: MatchableVoice): VoicePick {
  const gender = guessVoiceGender(voice.name)
  return gender ? { name: voice.name, lang: voice.lang, gender } : { name: voice.name, lang: voice.lang }
}

/* ---------- One-time migration of browser-only data ---------- */

export type MigrationInput = {
  /** Browser-only searches per test (tests other than Life and Health), newest first as stored. */
  searchesByTest: Record<string, { text: string; searchedAt: string }[]>
  /** testId -> sectionId from the old resume key. */
  resume: Record<string, string>
  chapterOf: (testId: string, sectionId: string) => string | null
  /** The old local voice id ('auto', a voiceURI, or 'lang::name'). */
  voiceId: string | null
  /** Device voices, when the browser has them. */
  voices: readonly (MatchableVoice & { voiceURI?: string })[]
  /** The old local auto-continue value, or null when never set. */
  autoContinue: boolean | null
  /** Server state per test id that the migration may fill. Null means nothing stored. */
  server: Record<string, TestState | null>
  nowIso: string
}

export type MigrationPlan = {
  searchPosts: { testId: string; text: string }[]
  patches: Record<string, Partial<TestState>>
}

export function planStateMigration(input: MigrationInput): MigrationPlan {
  const searchPosts: MigrationPlan['searchPosts'] = []
  for (const [testId, entries] of Object.entries(input.searchesByTest)) {
    ;[...entries]
      .sort((a, b) => ms(a.searchedAt) - ms(b.searchedAt))
      .forEach((entry) => searchPosts.push({ testId, text: entry.text }))
  }
  const patches: Record<string, Partial<TestState>> = {}
  for (const [testId, sectionId] of Object.entries(input.resume)) {
    if (!sectionId || input.server[testId]?.lastPosition) continue
    const chapterId = input.chapterOf(testId, sectionId)
    if (!chapterId) continue
    patches[testId] = { lastPosition: { chapterId, sectionId, savedAt: input.nowIso } }
  }
  const global = input.server[GLOBAL_STATE_ID] ?? null
  const globalPatch: Partial<TestState> = {}
  if (input.voiceId && input.voiceId !== 'auto' && !global?.voice) {
    const found = input.voices.find((voice) => voice.voiceURI === input.voiceId || `${voice.lang}::${voice.name}` === input.voiceId)
    let pick: VoicePick | null = null
    if (found) pick = voicePickFrom(found)
    else if (input.voiceId.includes('::')) {
      const [lang, ...rest] = input.voiceId.split('::')
      pick = voicePickFrom({ name: rest.join('::'), lang })
    } else pick = voicePickFrom({ name: input.voiceId, lang: '' })
    if (pick?.name) globalPatch.voice = pick
  }
  if (input.autoContinue !== null && global?.autoContinue === undefined) globalPatch.autoContinue = input.autoContinue
  if (Object.keys(globalPatch).length > 0) patches[GLOBAL_STATE_ID] = globalPatch
  return { searchPosts, patches }
}
