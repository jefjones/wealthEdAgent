/**
 * The only module that talks to the network.
 * Login, register, and refresh use api/wealthEdAgent/auth/.
 * Forgot and reset use api/wealthEdAgent/auth/password/.
 * Study data uses api/wealthEdAgent/study/.
 * VITE_USE_MOCK=true never calls the network.
 * A study 404 "Study progress is not available yet." keeps that data in this browser.
 * A later successful load merges that browser copy onto the server once.
 */

import type { ActivityEvent } from '../study/activity.ts'
import { copyDraw } from '../study/draws.ts'
import { highlightInputError } from '../study/highlights.ts'
import {
  applySearchHistory,
  cleanSearchText,
  mergeSearchHistory,
  searchHistoryKey,
  type SearchHistoryEntry,
} from '../study/searchHistory.ts'
import {
  classifyFeatureFailure,
  featuresDueForReprobe,
  highlightContentKey,
  mergeAttempts,
  mergeHighlights,
  mergeProgress,
  mergeSeen,
  noticeFeatures,
  REPROBE_MS,
  unionAttempts,
  type StudyFeature,
} from '../study/studySync.ts'

export type { StudyFeature }
export { studyNoticeMessage } from '../study/studySync.ts'

export const STORAGE = {
  person: 'wealthEd.person',
  token: 'wealthEd.authToken',
} as const

const EXPIRED_KEY = 'wealthEd.sessionExpired'
const MOCK_DIRECTORY = 'wealthEdAgent.mockDirectory.v1'
const MOCK_RESETS = 'wealthEdAgent.mockResets.v1'
const MOCK_STUDY = 'wealthEdAgent.mockStudy.v1'
const LOCAL_STUDY = 'wealthEdAgent.localStudy.v1'
const MIGRATED_KEY = 'wealthEdAgent.studyMigrated.v1'

export const SESSION_EXPIRED_MESSAGE = 'Your session timed out. Please sign in again.'
export const NETWORK_MESSAGE = "Can't reach the server right now. Try again in a moment."
export const STUDY_UNAVAILABLE_MESSAGE = 'Study progress is not available yet.'

export type Person = {
  personId: string
  username: string
  fname: string
  lname: string
  emailAddress: string
  phone: string | null
  agentId: string | null
  agentSlug: string | null
}

export type RegisterInput = {
  username: string
  password: string
  confirmPassword: string
  fname: string
  lname: string
  emailAddress: string
}

export type SectionProgress = {
  chapterId: string
  sectionId: string
  completed: boolean
  completedAt: string | null
}

export type SeenRow = {
  questionId: string
  firstSeenUtc: string
}

export type AttemptMode = 'unseen' | 'any'

export type Attempt = {
  attemptId: string
  mode: AttemptMode
  startedAt: string
  completedAt: string | null
  questionCount: number
  answeredCount: number
  correctCount: number
  percent: number
}

export type Answer = {
  questionId: string
  chosenOptionId: string
  correctOptionId: string
  isCorrect: boolean
  answeredAt: string
  /** Seconds from question display to answer. Absent on results stored before timing. */
  seconds?: number
}

export type Highlight = {
  highlightId: string
  chapterId: string
  sectionId: string
  startOffset: number
  endOffset: number
  text: string
  createdAt: string
}

export type HighlightInput = {
  chapterId: string
  sectionId: string
  startOffset: number
  endOffset: number
  text: string
}

export class ApiError extends Error {
  status?: number
  body?: unknown
  network?: boolean
  sessionExpired?: boolean
  studyUnavailable?: boolean
}

type Account = { password: string; person: Person }
type AttemptRecord = Attempt & { answers: Answer[] }
type AttemptUploadState = {
  serverAttemptId: string
  sent: string[]
  completed: boolean
}

type StudyDb = {
  sections: SectionProgress[]
  seen: SeenRow[]
  attempts: AttemptRecord[]
  highlights?: Highlight[]
  deletedHighlightIds?: string[]
  searchHistory?: SearchHistoryEntry[]
  deletedSearchIds?: string[]
  searchHistoryCleared?: boolean
  attemptUploads?: Record<string, AttemptUploadState>
}

type MigratableFeature = Exclude<StudyFeature, 'activity'>

let onSessionExpired: (() => void) | null = null
let onStudyNotice: ((features: StudyFeature[]) => void) | null = null
let mockOverride: boolean | null = null
let downFor: string | null = null
const downAt = new Map<StudyFeature, number>()
const migrateFlights = new Map<MigratableFeature, Promise<void>>()
const readyListeners = new Set<(feature: StudyFeature) => void>()
let reprobeTimer: ReturnType<typeof setInterval> | null = null
let reprobeListening = false

export function setSessionExpiredHandler(handler: (() => void) | null) {
  onSessionExpired = handler
}

export function setStudyNoticeHandler(handler: ((features: StudyFeature[]) => void) | null) {
  onStudyNotice = handler
}

export function studyNoticeSnapshot(): StudyFeature[] {
  return noticeFeatures(downAt.keys())
}

export function onStudyFeatureReady(listener: (feature: StudyFeature) => void) {
  readyListeners.add(listener)
  return () => {
    readyListeners.delete(listener)
  }
}

export function studyUsingLocalFallback() {
  return studyNoticeSnapshot().length > 0
}

export function resetApiForTests() {
  mockOverride = null
  onSessionExpired = null
  onStudyNotice = null
  downFor = null
  downAt.clear()
  migrateFlights.clear()
  readyListeners.clear()
  stopStudyReprobe()
}

export function setMockOverride(value: boolean | null) {
  mockOverride = value
}

export function mockApiEnabled() {
  if (mockOverride !== null) return mockOverride
  return String(import.meta.env.VITE_USE_MOCK || '').toLowerCase() === 'true'
}

/** API host is only VITE_API_BASE_URL. Dev: https://localhost:44348/ Production: https://ecdmy.com/ */
export function resolveApiHost() {
  const configured = String(import.meta.env.VITE_API_BASE_URL || '').trim()
  if (!configured) throw new Error('Set VITE_API_BASE_URL.')
  return configured.endsWith('/') ? configured : `${configured}/`
}

export function tokenExpMs(token: string) {
  try {
    const part = String(token || '').split('.')[1]
    if (!part) return null
    const json = JSON.parse(
      atob(part.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(part.length / 4) * 4, '=')),
    ) as { exp?: number }
    const exp = Number(json?.exp)
    return Number.isFinite(exp) && exp > 0 ? exp * 1000 : null
  } catch {
    return null
  }
}

export function tokenExpired(token: string, nowMs = Date.now()) {
  const exp = tokenExpMs(token)
  return exp !== null && exp <= nowMs
}

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

export function loadSession(): { person: Person | null; token: string } {
  const token = localStorage.getItem(STORAGE.token) || ''
  if (!token || tokenExpired(token)) {
    if (token) {
      localStorage.removeItem(STORAGE.token)
      localStorage.removeItem(STORAGE.person)
      markSessionExpired()
    }
    return { person: null, token: '' }
  }
  return { person: readJson<Person | null>(STORAGE.person, null), token }
}

export function setSession(person: Person | null, token: string) {
  if (person) localStorage.setItem(STORAGE.person, JSON.stringify(person))
  else localStorage.removeItem(STORAGE.person)
  if (token) localStorage.setItem(STORAGE.token, token)
  else localStorage.removeItem(STORAGE.token)
}

export function clearSession() {
  localStorage.removeItem(STORAGE.person)
  localStorage.removeItem(STORAGE.token)
}

export function markSessionExpired() {
  try {
    sessionStorage.setItem(EXPIRED_KEY, '1')
  } catch {
    /* ignore */
  }
}

export function takeSessionExpired() {
  try {
    const expired = sessionStorage.getItem(EXPIRED_KEY) === '1'
    sessionStorage.removeItem(EXPIRED_KEY)
    return expired
  } catch {
    return false
  }
}

function b64url(value: object) {
  return btoa(JSON.stringify(value)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function issueToken(person: Person) {
  const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 12
  return `${b64url({ alg: 'HS256', typ: 'JWT' })}.${b64url({
    exp,
    personId: person.personId,
    sub: person.personId,
    unique_name: person.username,
  })}.mock`
}

function textOf(value: unknown) {
  return String(value ?? '').trim()
}

function normalizePerson(raw: unknown): Person {
  const person = (raw ?? {}) as Record<string, unknown>
  return {
    personId: textOf(person.personId || person.PersonId),
    username: textOf(person.username || person.Username),
    fname: textOf(person.fname || person.Fname || person.firstName),
    lname: textOf(person.lname || person.Lname || person.lastName),
    emailAddress: textOf(person.emailAddress || person.EmailAddress || person.email),
    phone: textOf(person.phone || person.Phone) || null,
    agentId: textOf(person.agentId || person.AgentId) || null,
    agentSlug: textOf(person.agentSlug || person.AgentSlug) || null,
  }
}

function sessionFrom(body: unknown) {
  const record = (body ?? {}) as { token?: string; person?: unknown }
  const person = normalizePerson(record.person)
  const token = textOf(record.token)
  if (!person.personId || !token) fail(500, 'The server did not return a session.')
  return { token, person }
}

export function isStudyUnavailableMessage(message: string) {
  return message.trim() === STUDY_UNAVAILABLE_MESSAGE
}

function fail(status: number, message: string, extra?: Partial<ApiError>): never {
  const error = new ApiError(message || `Request failed (${status})`)
  error.status = status
  Object.assign(error, extra)
  throw error
}

function expireFromCall(): never {
  clearSession()
  markSessionExpired()
  onSessionExpired?.()
  fail(401, SESSION_EXPIRED_MESSAGE, { sessionExpired: true })
}

function requirePerson() {
  const session = loadSession()
  if (!session.person || !session.token) expireFromCall()
  return session.person
}

function formatProblemErrors(errors: unknown) {
  if (!errors || typeof errors !== 'object') return ''
  const parts: string[] = []
  Object.entries(errors as Record<string, unknown>).forEach(([rawKey, value]) => {
    const key = String(rawKey || '').replace(/^\$\.?/, '')
    const messages = (Array.isArray(value) ? value : [value])
      .map((item) => String(item || '').trim())
      .filter(Boolean)
    messages.forEach((message) => {
      parts.push(key && !message.toLowerCase().includes(key.toLowerCase()) ? `${key}: ${message}` : message)
    })
  })
  return parts.join('; ')
}

/** Parse a response body. Empty or non-JSON text is left alone. */
export function parseResponseBody(text: string): unknown {
  const trimmed = text.trim()
  if (!trimmed) return null
  if (trimmed[0] !== '{' && trimmed[0] !== '[') return { message: trimmed }
  try {
    return JSON.parse(trimmed) as unknown
  } catch {
    return { message: trimmed }
  }
}

function messageFrom(body: unknown, status: number) {
  const record = (body ?? {}) as { message?: string; errors?: unknown; title?: string; detail?: string }
  return (
    textOf(record.message) ||
    formatProblemErrors(record.errors) ||
    textOf(record.detail) ||
    textOf(record.title) ||
    `Request failed (${status})`
  )
}

async function realApi<T>(path: string, options: RequestInit = {}): Promise<T> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> | undefined),
  }
  const token = localStorage.getItem(STORAGE.token) || ''
  if (token && !headers.Authorization) headers.Authorization = `Bearer ${token}`
  const usedSession = Boolean(token) && headers.Authorization === `Bearer ${token}`
  if (usedSession && tokenExpired(token)) expireFromCall()

  const clean = path.replace(/^\//, '')
  const url = `${resolveApiHost()}${clean}`
  let response: Response
  try {
    response = await fetch(url, { ...options, headers })
  } catch (cause) {
    if (cause instanceof DOMException && cause.name === 'AbortError') throw cause
    const error = new ApiError(NETWORK_MESSAGE)
    error.network = true
    throw error
  }

  const text = await response.text()
  // A signed-out 401 on study routes has an empty body. Never JSON.parse that.
  const body = parseResponseBody(text)
  if (!response.ok) {
    const message = messageFrom(body, response.status)
    if (response.status === 401 && !/(^|\/)auth\//.test(clean)) expireFromCall()
    const unavailable = response.status === 404 && isStudyUnavailableMessage(message) && clean.includes('api/wealthEdAgent/study/')
    fail(response.status, message, { body, studyUnavailable: unavailable })
  }
  return body as T
}

function assertId(id: string, label: string) {
  if (!id || id.length > 64) fail(400, `${label} must be 1 to 64 characters.`)
}

function nowIso() {
  return new Date().toISOString()
}

function emptyDb(): StudyDb {
  return { sections: [], seen: [], attempts: [] }
}

function studyStorageKey() {
  return mockApiEnabled() ? MOCK_STUDY : LOCAL_STUDY
}

function allStudy(): Record<string, StudyDb> {
  return readJson(studyStorageKey(), {})
}

function writeAllStudy(next: Record<string, StudyDb>) {
  localStorage.setItem(studyStorageKey(), JSON.stringify(next))
}

function withDb<T>(update: (db: StudyDb) => T): T {
  const person = requirePerson()
  const all = allStudy()
  const db = all[person.personId] ?? emptyDb()
  const result = update(db)
  all[person.personId] = db
  writeAllStudy(all)
  return result
}

function directory() {
  return readJson<Record<string, Account>>(MOCK_DIRECTORY, {})
}

function saveDirectory(next: Record<string, Account>) {
  localStorage.setItem(MOCK_DIRECTORY, JSON.stringify(next))
}

function validEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function validateRegister(input: RegisterInput) {
  const username = input.username.trim()
  const fname = input.fname.trim()
  const lname = input.lname.trim()
  const email = input.emailAddress.trim()
  if (!username) fail(400, 'Username is required.')
  if (username.length > 100) fail(400, 'Username must be 100 characters or fewer.')
  if (!fname) fail(400, 'First name is required.')
  if (fname.length > 200) fail(400, 'First name must be 200 characters or fewer.')
  if (!lname) fail(400, 'Last name is required.')
  if (lname.length > 25) fail(400, 'Last name must be 25 characters or fewer.')
  if (!validEmail(email)) fail(400, 'Enter a valid email address.')
  if (input.password.length < 8) fail(400, 'Password must be at least 8 characters.')
  if (input.password !== input.confirmPassword) fail(400, 'Password and confirm password must match.')
  return { username, fname, lname, email }
}

function mockRegister(input: RegisterInput) {
  const { username, fname, lname, email } = validateRegister(input)
  const accounts = directory()
  if (accounts[username.toLowerCase()]) fail(409, 'An account with that username already exists.')
  const person: Person = {
    personId: crypto.randomUUID(),
    username,
    fname,
    lname,
    emailAddress: email,
    phone: null,
    agentId: null,
    agentSlug: null,
  }
  accounts[username.toLowerCase()] = { password: input.password, person }
  saveDirectory(accounts)
  return { token: issueToken(person), person }
}

function mockLogin(username: string, password: string) {
  const account = directory()[username.trim().toLowerCase()]
  if (!account || account.password !== password) fail(401, 'Incorrect username or password.')
  return { token: issueToken(account.person), person: account.person }
}

function touchSeen(db: StudyDb, questionId: string) {
  if (!db.seen.some((row) => row.questionId === questionId)) {
    db.seen.push({ questionId, firstSeenUtc: nowIso() })
  }
}

function score(attempt: AttemptRecord) {
  attempt.answeredCount = attempt.answers.length
  attempt.correctCount = attempt.answers.filter((answer) => answer.isCorrect).length
  attempt.percent =
    attempt.questionCount > 0 ? Math.round((attempt.correctCount / attempt.questionCount) * 100) : 0
}

function findAttempt(db: StudyDb, attemptId: string) {
  const attempt = db.attempts.find((row) => row.attemptId === attemptId)
  if (!attempt) fail(404, 'Test not found.')
  return attempt
}

function localProgress() {
  return withDb((db) => ({ sections: db.sections.map((section) => ({ ...section })) }))
}

function localSaveProgress(chapterId: string, sectionId: string, completed: boolean) {
  assertId(chapterId, 'chapterId')
  assertId(sectionId, 'sectionId')
  return withDb((db) => {
    let section = db.sections.find((row) => row.chapterId === chapterId && row.sectionId === sectionId)
    if (!section) {
      section = { chapterId, sectionId, completed: false, completedAt: null }
      db.sections.push(section)
    }
    section.completed = completed
    section.completedAt = completed ? section.completedAt || nowIso() : null
    return { section: { ...section } }
  })
}

function localSeen() {
  return withDb((db) => ({
    questionIds: db.seen.map((row) => row.questionId),
    seen: db.seen.map((row) => ({ ...row })),
  }))
}

function localCreateAttempt(mode: AttemptMode, questionCount: number) {
  if (!Number.isInteger(questionCount) || questionCount < 1 || questionCount > 500) {
    fail(400, 'questionCount must be from 1 to 500.')
  }
  const attemptMode: AttemptMode = mode === 'any' ? 'any' : 'unseen'
  return withDb((db) => {
    const attempt: AttemptRecord = {
      attemptId: crypto.randomUUID(),
      mode: attemptMode,
      startedAt: nowIso(),
      completedAt: null,
      questionCount,
      answeredCount: 0,
      correctCount: 0,
      percent: 0,
      answers: [],
    }
    db.attempts.unshift(attempt)
    return { attempt: publicAttempt(attempt) }
  })
}

function publicAttempt(attempt: AttemptRecord): Attempt {
  return {
    attemptId: attempt.attemptId,
    mode: attempt.mode,
    startedAt: attempt.startedAt,
    completedAt: attempt.completedAt,
    questionCount: attempt.questionCount,
    answeredCount: attempt.answeredCount,
    correctCount: attempt.correctCount,
    percent: attempt.percent,
  }
}

function storedSeconds(seconds: number | undefined) {
  if (typeof seconds !== 'number' || !Number.isFinite(seconds) || seconds < 0) return undefined
  return Math.round(seconds)
}

function localAnswer(
  attemptId: string,
  questionId: string,
  chosenOptionId: string,
  correctOptionId: string,
  seconds?: number,
) {
  assertId(attemptId, 'attemptId')
  assertId(questionId, 'questionId')
  assertId(chosenOptionId, 'chosenOptionId')
  assertId(correctOptionId, 'correctOptionId')
  return withDb((db) => {
    const attempt = findAttempt(db, attemptId)
    if (attempt.completedAt) fail(409, 'This test is already finished.')
    const existing = attempt.answers.find((answer) => answer.questionId === questionId)
    if (existing) {
      if (existing.chosenOptionId !== chosenOptionId || existing.correctOptionId !== correctOptionId) {
        fail(409, 'That question already has a different answer.')
      }
      return { answer: { ...existing }, attempt: publicAttempt(attempt) }
    }
    if (attempt.answers.length >= attempt.questionCount) fail(409, 'This test is already full.')
    const answer: Answer = {
      questionId,
      chosenOptionId,
      correctOptionId,
      isCorrect: chosenOptionId === correctOptionId,
      answeredAt: nowIso(),
    }
    const elapsed = storedSeconds(seconds)
    if (elapsed !== undefined) answer.seconds = elapsed
    attempt.answers.push(answer)
    touchSeen(db, questionId)
    score(attempt)
    return { answer, attempt: publicAttempt(attempt) }
  })
}

function localComplete(attemptId: string) {
  return withDb((db) => {
    const attempt = findAttempt(db, attemptId)
    if (attempt.answers.length < attempt.questionCount) fail(400, 'Answer every question before finishing.')
    if (!attempt.completedAt) {
      score(attempt)
      attempt.completedAt = nowIso()
    }
    return { attempt: publicAttempt(attempt) }
  })
}

function localList() {
  return withDb((db) => ({
    attempts: [...db.attempts]
      .sort((a, b) => (a.startedAt < b.startedAt ? 1 : -1))
      .map(publicAttempt),
  }))
}

function localGet(attemptId: string) {
  return withDb((db) => {
    const attempt = findAttempt(db, attemptId)
    return {
      attempt: publicAttempt(attempt),
      answers: attempt.answers.map((answer) => ({ ...answer })),
    }
  })
}

function sameHighlight(row: Highlight, input: HighlightInput) {
  return (
    row.chapterId === input.chapterId &&
    row.sectionId === input.sectionId &&
    row.startOffset === input.startOffset &&
    row.endOffset === input.endOffset &&
    row.text === input.text
  )
}

function localListHighlights() {
  return withDb((db) => ({
    highlights: (db.highlights ?? []).map((row) => ({ ...row })),
  }))
}

function localCreateHighlight(input: HighlightInput) {
  const message = highlightInputError(input)
  if (message) fail(400, message)
  return withDb((db) => {
    const highlights = db.highlights ?? []
    const existing = highlights.find((row) => sameHighlight(row, input))
    if (existing) return { highlight: { ...existing } }
    const highlight: Highlight = {
      highlightId: crypto.randomUUID(),
      chapterId: input.chapterId,
      sectionId: input.sectionId,
      startOffset: input.startOffset,
      endOffset: input.endOffset,
      text: input.text,
      createdAt: nowIso(),
    }
    db.highlights = [highlight, ...highlights]
    return { highlight: { ...highlight } }
  })
}

function copySearchEntries(entries: readonly SearchHistoryEntry[]) {
  return entries.map((entry) => ({ ...entry }))
}

function localListSearchHistory() {
  return withDb((db) => ({ entries: copySearchEntries(db.searchHistory ?? []) }))
}

function localRecordSearchHistory(text: string) {
  const cleaned = cleanSearchText(text)
  if (!cleaned) fail(400, 'Enter a subject to search for.')
  return withDb((db) => {
    const existing = (db.searchHistory ?? []).find((entry) => searchHistoryKey(entry.text) === searchHistoryKey(cleaned))
    const entry: SearchHistoryEntry = {
      entryId: existing?.entryId ?? crypto.randomUUID(),
      text: cleaned,
      searchedAt: nowIso(),
    }
    db.searchHistory = applySearchHistory(db.searchHistory ?? [], { type: 'add', entry })
    return { entries: copySearchEntries(db.searchHistory) }
  })
}

function localDeleteSearchHistory(entryId: string) {
  assertId(entryId, 'entryId')
  return withDb((db) => {
    const entries = db.searchHistory ?? []
    if (!entries.some((entry) => entry.entryId === entryId)) fail(404, 'Search not found.')
    db.searchHistory = applySearchHistory(entries, { type: 'delete', entryId })
    const ids = new Set(db.deletedSearchIds ?? [])
    ids.add(entryId)
    db.deletedSearchIds = [...ids]
    return { deleted: true as const }
  })
}

function localClearSearchHistory() {
  return withDb((db) => {
    const ids = new Set(db.deletedSearchIds ?? [])
    for (const entry of db.searchHistory ?? []) ids.add(entry.entryId)
    db.searchHistory = []
    db.deletedSearchIds = [...ids]
    db.searchHistoryCleared = true
    return { deleted: true as const }
  })
}

function localDeleteHighlight(highlightId: string) {
  assertId(highlightId, 'highlightId')
  return withDb((db) => {
    const highlights = db.highlights ?? []
    const index = highlights.findIndex((row) => row.highlightId === highlightId)
    if (index < 0) fail(404, 'Highlight not found.')
    db.highlights = highlights.filter((row) => row.highlightId !== highlightId)
    return { deleted: true as const }
  })
}

function publishNotice() {
  onStudyNotice?.(noticeFeatures(downAt.keys()))
}

function rememberPerson(personId: string) {
  if (downFor === personId) return
  downFor = personId
  downAt.clear()
  publishNotice()
}

function isFeatureDown(feature: StudyFeature) {
  const since = downAt.get(feature)
  if (since === undefined) return false
  return !featuresDueForReprobe([{ feature, downSince: since }], Date.now()).includes(feature)
}

function markFeatureDown(feature: StudyFeature) {
  downAt.set(feature, Date.now())
  publishNotice()
}

function markFeatureUp(feature: StudyFeature) {
  const wasDown = downAt.delete(feature)
  publishNotice()
  if (wasDown) readyListeners.forEach((listener) => listener(feature))
}

function failureOf(error: unknown, feature: StudyFeature, missingRouteFallsBack?: boolean) {
  if (!(error instanceof ApiError)) return null
  return classifyFeatureFailure(
    feature,
    {
      network: error.network,
      status: error.status,
      studyUnavailable: error.studyUnavailable,
    },
    missingRouteFallsBack,
  )
}

function backupMap() {
  return readJson<Record<string, StudyDb>>(LOCAL_STUDY, {})
}

function peekDb(): StudyDb {
  const person = requirePerson()
  return backupMap()[person.personId] ?? emptyDb()
}

function updateDb(update: (db: StudyDb) => void) {
  const person = requirePerson()
  const all = backupMap()
  const db = all[person.personId] ?? emptyDb()
  update(db)
  all[person.personId] = db
  localStorage.setItem(LOCAL_STUDY, JSON.stringify(all))
}

function migrationMap() {
  return readJson<Record<string, Partial<Record<MigratableFeature, true>>>>(MIGRATED_KEY, {})
}

function isMigrated(personId: string, feature: MigratableFeature) {
  return migrationMap()[personId]?.[feature] === true
}

function setMigrated(personId: string, feature: MigratableFeature, migrated: boolean) {
  const all = migrationMap()
  const row = { ...(all[personId] ?? {}) }
  if (migrated) row[feature] = true
  else delete row[feature]
  all[personId] = row
  localStorage.setItem(MIGRATED_KEY, JSON.stringify(all))
}

function mirrorSection(section: SectionProgress) {
  updateDb((db) => {
    const index = db.sections.findIndex((row) => row.chapterId === section.chapterId && row.sectionId === section.sectionId)
    if (index >= 0) db.sections[index] = { ...section }
    else db.sections.push({ ...section })
  })
}

function mirrorHighlight(row: Highlight) {
  updateDb((db) => {
    const key = highlightContentKey(row)
    const highlights = (db.highlights ?? []).filter(
      (item) => item.highlightId !== row.highlightId && highlightContentKey(item) !== key,
    )
    db.highlights = [{ ...row }, ...highlights]
  })
}

function mirrorAttempt(attempt: Attempt, answers?: Answer[]) {
  updateDb((db) => {
    const existing = db.attempts.find((row) => row.attemptId === attempt.attemptId)
    if (existing) {
      Object.assign(existing, attempt)
      if (answers) existing.answers = answers.map((answer) => ({ ...answer }))
      return
    }
    db.attempts.unshift({ ...attempt, answers: answers ? answers.map((answer) => ({ ...answer })) : [] })
  })
}

function resolveAttemptId(attemptId: string) {
  if (mockApiEnabled()) return attemptId
  const mapped = peekDb().attemptUploads?.[attemptId]?.serverAttemptId
  return mapped || attemptId
}

function finishedUploadIds(db: StudyDb) {
  const ids: string[] = []
  Object.entries(db.attemptUploads ?? {}).forEach(([localId, state]) => {
    const attempt = db.attempts.find((row) => row.attemptId === localId)
    if (!attempt) {
      ids.push(localId)
      return
    }
    const answersDone = attempt.answers.every((answer) => state.sent.includes(answer.questionId))
    const completeDone = !attempt.completedAt || state.completed
    if (answersDone && completeDone) ids.push(localId)
  })
  return ids
}

function noteFeatureFailure(feature: StudyFeature, error: unknown) {
  const kind = failureOf(error, feature)
  if (!kind) return false
  markFeatureDown(feature)
  return true
}

async function migrateProgress() {
  const personId = requirePerson().personId
  if (isMigrated(personId, 'progress')) return
  let body: { sections: SectionProgress[] }
  try {
    body = await realApi<{ sections: SectionProgress[] }>('api/wealthEdAgent/study/progress')
  } catch (error) {
    if (noteFeatureFailure('progress', error)) return
    throw error
  }
  const plan = mergeProgress(body.sections, peekDb().sections)
  const applied = new Map(body.sections.map((row) => [`${row.chapterId}\u0000${row.sectionId}`, row]))
  for (const row of plan.upload) {
    try {
      const saved = await realApi<{ section: SectionProgress }>(
        `api/wealthEdAgent/study/progress/${encodeURIComponent(row.chapterId)}/${encodeURIComponent(row.sectionId)}`,
        { method: 'PUT', body: JSON.stringify({ completed: row.completed }) },
      )
      applied.set(`${saved.section.chapterId}\u0000${saved.section.sectionId}`, saved.section)
    } catch (error) {
      if (noteFeatureFailure('progress', error)) return
      if (error instanceof ApiError && error.status === 400) continue
      throw error
    }
  }
  updateDb((db) => {
    db.sections = [...applied.values()]
  })
  setMigrated(personId, 'progress', true)
  markFeatureUp('progress')
}

async function pushLocalAttempt(local: AttemptRecord) {
  let state = peekDb().attemptUploads?.[local.attemptId]
  if (!state) {
    let created: { attempt: Attempt }
    try {
      created = await realApi<{ attempt: Attempt }>('api/wealthEdAgent/study/attempts', {
        method: 'POST',
        body: JSON.stringify({ mode: local.mode, questionCount: local.questionCount }),
      })
    } catch (error) {
      if (noteFeatureFailure('attempts', error)) return
      if (error instanceof ApiError && error.status === 400) return
      throw error
    }
    state = { serverAttemptId: created.attempt.attemptId, sent: [], completed: false }
    const createdState = state
    updateDb((db) => {
      db.attemptUploads = { ...(db.attemptUploads ?? {}), [local.attemptId]: createdState }
    })
    copyDraw(requirePerson().personId, local.attemptId, createdState.serverAttemptId)
  }
  const serverAttemptId = state.serverAttemptId
  for (const answer of local.answers) {
    if ((peekDb().attemptUploads?.[local.attemptId]?.sent ?? []).includes(answer.questionId)) continue
    try {
      await realApi(
        `api/wealthEdAgent/study/attempts/${encodeURIComponent(serverAttemptId)}/answers/${encodeURIComponent(answer.questionId)}`,
        {
          method: 'PUT',
          body: JSON.stringify({
            chosenOptionId: answer.chosenOptionId,
            correctOptionId: answer.correctOptionId,
            ...(answer.seconds !== undefined ? { seconds: answer.seconds } : {}),
          }),
        },
      )
    } catch (error) {
      if (error instanceof ApiError && error.status === 409) {
        updateDb((db) => {
          const row = db.attemptUploads?.[local.attemptId]
          if (row && !row.sent.includes(answer.questionId)) row.sent.push(answer.questionId)
        })
        continue
      }
      if (noteFeatureFailure('attempts', error)) return
      throw error
    }
    updateDb((db) => {
      const row = db.attemptUploads?.[local.attemptId]
      if (row && !row.sent.includes(answer.questionId)) row.sent.push(answer.questionId)
      touchSeen(db, answer.questionId)
    })
  }
  if (local.completedAt && !peekDb().attemptUploads?.[local.attemptId]?.completed) {
    try {
      await realApi(`api/wealthEdAgent/study/attempts/${encodeURIComponent(serverAttemptId)}/complete`, {
        method: 'POST',
        body: JSON.stringify({}),
      })
    } catch (error) {
      if (noteFeatureFailure('attempts', error)) return
      if (!(error instanceof ApiError && error.status === 400)) throw error
    }
    updateDb((db) => {
      const row = db.attemptUploads?.[local.attemptId]
      if (row) row.completed = true
    })
  }
  updateDb((db) => {
    const adopted: AttemptRecord = {
      attemptId: serverAttemptId,
      mode: local.mode,
      startedAt: local.startedAt,
      completedAt: local.completedAt,
      questionCount: local.questionCount,
      answeredCount: local.answeredCount,
      correctCount: local.correctCount,
      percent: local.percent,
      answers: local.answers.map((answer) => ({ ...answer })),
    }
    db.attempts = db.attempts.filter((row) => row.attemptId !== local.attemptId && row.attemptId !== serverAttemptId)
    db.attempts.unshift(adopted)
  })
}

async function migrateAttempts() {
  const personId = requirePerson().personId
  if (isMigrated(personId, 'attempts')) return
  let body: { attempts: Attempt[] }
  try {
    body = await realApi<{ attempts: Attempt[] }>('api/wealthEdAgent/study/attempts')
  } catch (error) {
    if (noteFeatureFailure('attempts', error)) return
    throw error
  }
  const pending = mergeAttempts(body.attempts, peekDb().attempts, finishedUploadIds(peekDb())).upload
  for (const local of pending) {
    await pushLocalAttempt(local)
    if (isFeatureDown('attempts')) return
  }
  updateDb((db) => {
    body.attempts.forEach((summary) => {
      const existing = db.attempts.find((row) => row.attemptId === summary.attemptId)
      if (existing) Object.assign(existing, summary)
      else db.attempts.push({ ...summary, answers: [] })
    })
  })
  setMigrated(personId, 'attempts', true)
  markFeatureUp('attempts')
}

async function migrateSeen() {
  const personId = requirePerson().personId
  if (isMigrated(personId, 'seen')) return
  try {
    const body = await realApi<{ seen: SeenRow[] }>('api/wealthEdAgent/study/questions/seen')
    const plan = mergeSeen(body.seen, peekDb().seen)
    updateDb((db) => {
      db.seen = plan.merged.map((row) => ({ ...row }))
    })
  } catch (error) {
    if (noteFeatureFailure('seen', error)) return
    throw error
  }
  setMigrated(personId, 'seen', true)
  markFeatureUp('seen')
}

async function migrateHighlights() {
  const personId = requirePerson().personId
  if (isMigrated(personId, 'highlights')) return
  let body: { highlights: Highlight[] }
  try {
    body = await realApi<{ highlights: Highlight[] }>('api/wealthEdAgent/study/highlights')
  } catch (error) {
    if (noteFeatureFailure('highlights', error)) return
    throw error
  }
  const plan = mergeHighlights(body.highlights, peekDb().highlights ?? [], peekDb().deletedHighlightIds ?? [])
  for (const highlightId of plan.deleteIds) {
    try {
      await realApi(`api/wealthEdAgent/study/highlights/${encodeURIComponent(highlightId)}`, { method: 'DELETE' })
    } catch (error) {
      if (error instanceof ApiError && error.status === 404) {
        /* The row is already gone. A missing highlight is not a missing route. */
      } else if (noteFeatureFailure('highlights', error)) {
        return
      } else {
        throw error
      }
    }
    updateDb((db) => {
      db.deletedHighlightIds = (db.deletedHighlightIds ?? []).filter((id) => id !== highlightId)
      db.highlights = (db.highlights ?? []).filter((row) => row.highlightId !== highlightId)
    })
  }
  for (const row of plan.upload) {
    let saved: { highlight: Highlight }
    try {
      saved = await realApi<{ highlight: Highlight }>('api/wealthEdAgent/study/highlights', {
        method: 'POST',
        body: JSON.stringify({
          chapterId: row.chapterId,
          sectionId: row.sectionId,
          startOffset: row.startOffset,
          endOffset: row.endOffset,
          text: row.text,
        }),
      })
    } catch (error) {
      if (noteFeatureFailure('highlights', error)) return
      if (error instanceof ApiError && error.status === 400) continue
      throw error
    }
    const created = saved.highlight
    updateDb((db) => {
      const key = highlightContentKey(row)
      db.highlights = (db.highlights ?? []).filter(
        (item) => item.highlightId !== row.highlightId && item.highlightId !== created.highlightId && highlightContentKey(item) !== key,
      )
      db.highlights.unshift(created)
    })
  }
  const serverRows = body.highlights.filter((row) => !plan.deleteIds.includes(row.highlightId))
  updateDb((db) => {
    const deleted = new Set(db.deletedHighlightIds ?? [])
    const have = new Set(serverRows.map((row) => row.highlightId))
    const haveContent = new Set(serverRows.map((row) => highlightContentKey(row)))
    const localLeft = (db.highlights ?? []).filter(
      (row) => !deleted.has(row.highlightId) && !have.has(row.highlightId) && !haveContent.has(highlightContentKey(row)),
    )
    db.highlights = [...serverRows, ...localLeft]
  })
  setMigrated(personId, 'highlights', true)
  markFeatureUp('highlights')
}

async function migrateSearchHistory() {
  const personId = requirePerson().personId
  if (isMigrated(personId, 'searchHistory')) return
  let body: { entries: SearchHistoryEntry[] }
  try {
    body = await realApi<{ entries: SearchHistoryEntry[] }>('api/wealthEdAgent/study/search-history')
  } catch (error) {
    if (noteFeatureFailure('searchHistory', error)) return
    throw error
  }
  const plan = mergeSearchHistory(
    body.entries,
    peekDb().searchHistory ?? [],
    peekDb().deletedSearchIds ?? [],
    peekDb().searchHistoryCleared === true,
  )
  for (const entryId of plan.deleteIds) {
    try {
      await realApi(`api/wealthEdAgent/study/search-history/${encodeURIComponent(entryId)}`, { method: 'DELETE' })
    } catch (error) {
      if (error instanceof ApiError && error.status === 404) {
        /* The row is already gone. A missing search is not a missing route. */
      } else if (noteFeatureFailure('searchHistory', error)) {
        return
      } else {
        throw error
      }
    }
    updateDb((db) => {
      db.deletedSearchIds = (db.deletedSearchIds ?? []).filter((id) => id !== entryId)
    })
  }
  for (const row of plan.upload) {
    try {
      const saved = await realApi<{ entry: SearchHistoryEntry }>('api/wealthEdAgent/study/search-history', {
        method: 'POST',
        body: JSON.stringify({ text: row.text }),
      })
      updateDb((db) => {
        db.searchHistory = applySearchHistory(db.searchHistory ?? [], { type: 'add', entry: saved.entry })
      })
    } catch (error) {
      if (noteFeatureFailure('searchHistory', error)) return
      if (error instanceof ApiError && error.status === 400) continue
      throw error
    }
  }
  updateDb((db) => {
    db.searchHistory = mergeSearchHistory(body.entries, db.searchHistory ?? [], plan.deleteIds).merged
    db.searchHistoryCleared = false
    db.deletedSearchIds = []
  })
  setMigrated(personId, 'searchHistory', true)
  markFeatureUp('searchHistory')
}

async function ensureMigrated(feature: MigratableFeature) {
  const personId = requirePerson().personId
  if (isMigrated(personId, feature)) return
  const existing = migrateFlights.get(feature)
  if (existing) return existing
  const run = (
    feature === 'progress'
      ? migrateProgress()
      : feature === 'seen'
        ? migrateSeen()
        : feature === 'attempts'
          ? migrateAttempts()
          : feature === 'searchHistory'
            ? migrateSearchHistory()
            : migrateHighlights()
  ).finally(() => {
    migrateFlights.delete(feature)
  })
  migrateFlights.set(feature, run)
  await run
}

async function withFeature<T>(
  feature: MigratableFeature,
  local: () => T,
  online: () => Promise<T>,
  options: { write?: boolean; missingRoute?: boolean } = {},
): Promise<T> {
  if (mockApiEnabled()) return local()
  const personId = requirePerson().personId
  rememberPerson(personId)
  if (isFeatureDown(feature)) {
    if (options.write) setMigrated(personId, feature, false)
    return local()
  }
  try {
    await ensureMigrated(feature)
    if (isFeatureDown(feature)) {
      if (options.write) setMigrated(personId, feature, false)
      return local()
    }
    const result = await online()
    markFeatureUp(feature)
    return result
  } catch (error) {
    const kind = failureOf(error, feature, options.missingRoute)
    if (kind) {
      markFeatureDown(feature)
      if (options.write) setMigrated(personId, feature, false)
      return local()
    }
    throw error
  }
}

async function reprobeStudyFeatures(focus: boolean) {
  if (mockApiEnabled()) return
  const due = featuresDueForReprobe(
    [...downAt.entries()].map(([feature, downSince]) => ({ feature, downSince })),
    Date.now(),
    { focus, intervalMs: REPROBE_MS },
  )
  for (const feature of due) {
    if (feature === 'activity') continue
    downAt.delete(feature)
    try {
      if (feature === 'progress') await getProgress()
      else if (feature === 'seen') await getSeen()
      else if (feature === 'attempts') await listAttempts()
      else if (feature === 'highlights') await listHighlights()
      else if (feature === 'searchHistory') await listSearchHistory()
    } catch {
      /* The call records its own failure. */
    }
  }
  publishNotice()
}

export async function reprobeStudyFeaturesNow() {
  await reprobeStudyFeatures(true)
}

export function startStudyReprobe() {
  if (reprobeListening || typeof window === 'undefined') return () => {}
  reprobeListening = true
  const onFocus = () => {
    void reprobeStudyFeatures(true)
  }
  const onVisible = () => {
    if (typeof document !== 'undefined' && document.visibilityState === 'hidden') return
    void reprobeStudyFeatures(true)
  }
  window.addEventListener('focus', onFocus)
  if (typeof document !== 'undefined') document.addEventListener('visibilitychange', onVisible)
  reprobeTimer = setInterval(() => {
    void reprobeStudyFeatures(false)
  }, REPROBE_MS)
  return () => stopStudyReprobe()
}

function stopStudyReprobe() {
  reprobeListening = false
  if (reprobeTimer !== null) {
    clearInterval(reprobeTimer)
    reprobeTimer = null
  }
}

export async function login(username: string, password: string) {
  if (mockApiEnabled()) return mockLogin(username, password)
  const body = await realApi<unknown>('api/wealthEdAgent/auth/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  })
  return sessionFrom(body)
}

export async function register(input: RegisterInput) {
  const clean = validateRegister(input)
  const payload = {
    username: clean.username,
    password: input.password,
    confirmPassword: input.confirmPassword,
    fname: clean.fname,
    lname: clean.lname,
    emailAddress: clean.email,
  }
  if (mockApiEnabled()) return mockRegister(payload)
  const body = await realApi<unknown>('api/wealthEdAgent/auth/register', {
    method: 'POST',
    body: JSON.stringify(payload),
  })
  return sessionFrom(body)
}

export async function refreshSession() {
  if (mockApiEnabled()) {
    const person = requirePerson()
    return { token: issueToken(person), person }
  }
  const body = await realApi<unknown>('api/wealthEdAgent/auth/refresh', {
    method: 'POST',
    body: JSON.stringify({}),
  })
  return sessionFrom(body)
}

const RESET_SENT_MESSAGE = 'If an account exists for that username, a reset email was sent.'
const RESET_INVALID_MESSAGE = 'This reset link is invalid or has expired.'

function mockForgot(username: string) {
  const key = username.trim().toLowerCase()
  const accounts = directory()
  if (key && accounts[key]) {
    const token = crypto.randomUUID()
    const resets = readJson<Record<string, string>>(MOCK_RESETS, {})
    resets[token] = key
    localStorage.setItem(MOCK_RESETS, JSON.stringify(resets))
  }
  return { message: RESET_SENT_MESSAGE }
}

function mockReset(token: string, newPassword: string) {
  const resets = readJson<Record<string, string>>(MOCK_RESETS, {})
  const key = resets[token]
  const accounts = directory()
  const account = key ? accounts[key] : undefined
  if (!key || !account) fail(400, RESET_INVALID_MESSAGE)
  account.password = newPassword
  saveDirectory(accounts)
  delete resets[token]
  localStorage.setItem(MOCK_RESETS, JSON.stringify(resets))
  return { message: 'Your password was reset.' }
}

export async function forgotPassword(username: string) {
  if (mockApiEnabled()) return mockForgot(username)
  return realApi<unknown>('api/wealthEdAgent/auth/password/forgot', {
    method: 'POST',
    body: JSON.stringify({ username }),
  })
}

export async function resetPassword(input: { token: string; newPassword: string; confirmPassword: string }) {
  if (input.newPassword.length < 8) fail(400, 'Password must be at least 8 characters.')
  if (input.newPassword !== input.confirmPassword) fail(400, 'Password and confirm password must match.')
  if (mockApiEnabled()) return mockReset(input.token, input.newPassword)
  return realApi<unknown>('api/wealthEdAgent/auth/password/reset', {
    method: 'POST',
    body: JSON.stringify({
      token: input.token,
      newPassword: input.newPassword,
      confirmPassword: input.confirmPassword,
    }),
  })
}

export function getProgress() {
  return withFeature('progress', localProgress, async () => {
    const body = await realApi<{ sections: SectionProgress[] }>('api/wealthEdAgent/study/progress')
    const plan = mergeProgress(body.sections, peekDb().sections)
    return { sections: plan.merged }
  })
}

export function saveProgress(chapterId: string, sectionId: string, completed: boolean) {
  return withFeature(
    'progress',
    () => localSaveProgress(chapterId, sectionId, completed),
    async () => {
      const result = await realApi<{ section: SectionProgress }>(
        `api/wealthEdAgent/study/progress/${encodeURIComponent(chapterId)}/${encodeURIComponent(sectionId)}`,
        { method: 'PUT', body: JSON.stringify({ completed }) },
      )
      mirrorSection(result.section)
      return result
    },
    { write: true },
  )
}

export function getSeen() {
  return withFeature('seen', localSeen, async () => {
    const body = await realApi<{ questionIds: string[]; seen: SeenRow[] }>('api/wealthEdAgent/study/questions/seen')
    const plan = mergeSeen(body.seen, peekDb().seen)
    updateDb((db) => {
      db.seen = plan.merged.map((row) => ({ ...row }))
    })
    return { questionIds: plan.merged.map((row) => row.questionId), seen: plan.merged }
  })
}

export function createAttempt(input: { mode: AttemptMode; questionCount: number }) {
  return withFeature(
    'attempts',
    () => localCreateAttempt(input.mode, input.questionCount),
    async () => {
      const result = await realApi<{ attempt: Attempt }>('api/wealthEdAgent/study/attempts', {
        method: 'POST',
        body: JSON.stringify({ mode: input.mode, questionCount: input.questionCount }),
      })
      mirrorAttempt(result.attempt, [])
      return result
    },
    { write: true },
  )
}

export function submitAnswer(
  attemptId: string,
  questionId: string,
  input: { chosenOptionId: string; correctOptionId: string; seconds?: number },
) {
  const seconds = storedSeconds(input.seconds)
  const id = () => resolveAttemptId(attemptId)
  return withFeature(
    'attempts',
    () => localAnswer(id(), questionId, input.chosenOptionId, input.correctOptionId, seconds),
    async () => {
      const result = await realApi<{ answer: Answer; attempt: Attempt }>(
        `api/wealthEdAgent/study/attempts/${encodeURIComponent(id())}/answers/${encodeURIComponent(questionId)}`,
        {
          method: 'PUT',
          body: JSON.stringify({
            chosenOptionId: input.chosenOptionId,
            correctOptionId: input.correctOptionId,
            ...(seconds !== undefined ? { seconds } : {}),
          }),
        },
      )
      updateDb((db) => {
        touchSeen(db, questionId)
        const attempt = db.attempts.find((row) => row.attemptId === result.attempt.attemptId)
        if (!attempt) {
          db.attempts.unshift({ ...result.attempt, answers: [{ ...result.answer }] })
          return
        }
        Object.assign(attempt, result.attempt)
        const existing = attempt.answers.find((answer) => answer.questionId === result.answer.questionId)
        if (existing) Object.assign(existing, result.answer)
        else attempt.answers.push({ ...result.answer })
      })
      return result
    },
    { write: true },
  )
}

export function completeAttempt(attemptId: string) {
  const id = () => resolveAttemptId(attemptId)
  return withFeature(
    'attempts',
    () => localComplete(id()),
    async () => {
      const result = await realApi<{ attempt: Attempt }>(
        `api/wealthEdAgent/study/attempts/${encodeURIComponent(id())}/complete`,
        { method: 'POST', body: JSON.stringify({}) },
      )
      mirrorAttempt(result.attempt)
      return result
    },
    { write: true },
  )
}

export function listAttempts() {
  return withFeature('attempts', localList, async () => {
    const body = await realApi<{ attempts: Attempt[] }>('api/wealthEdAgent/study/attempts')
    body.attempts.forEach((summary) => mirrorAttempt(summary))
    const db = peekDb()
    const extras = mergeAttempts(body.attempts, db.attempts, finishedUploadIds(db)).upload.map(publicAttempt)
    return { attempts: unionAttempts(body.attempts, extras) }
  })
}

export function getAttempt(attemptId: string) {
  const id = () => resolveAttemptId(attemptId)
  return withFeature(
    'attempts',
    () => localGet(id()),
    async () => {
      const result = await realApi<{ attempt: Attempt; answers: Answer[] }>(
        `api/wealthEdAgent/study/attempts/${encodeURIComponent(id())}`,
      )
      mirrorAttempt(result.attempt, result.answers)
      return result
    },
  )
}

export function listSearchHistory() {
  return withFeature(
    'searchHistory',
    localListSearchHistory,
    async () => {
      const body = await realApi<{ entries: SearchHistoryEntry[] }>('api/wealthEdAgent/study/search-history')
      const db = peekDb()
      return {
        entries: mergeSearchHistory(body.entries, db.searchHistory ?? [], db.deletedSearchIds ?? [], db.searchHistoryCleared === true)
          .merged,
      }
    },
    { missingRoute: true },
  )
}

export function recordSearchHistory(text: string) {
  const cleaned = cleanSearchText(text)
  if (!cleaned) fail(400, 'Enter a subject to search for.')
  return withFeature(
    'searchHistory',
    () => localRecordSearchHistory(cleaned),
    async () => {
      const result = await realApi<{ entry: SearchHistoryEntry }>('api/wealthEdAgent/study/search-history', {
        method: 'POST',
        body: JSON.stringify({ text: cleaned }),
      })
      updateDb((db) => {
        db.searchHistory = applySearchHistory(db.searchHistory ?? [], { type: 'add', entry: result.entry })
        db.deletedSearchIds = (db.deletedSearchIds ?? []).filter((id) => id !== result.entry.entryId)
        db.searchHistoryCleared = false
      })
      return { entries: copySearchEntries(peekDb().searchHistory ?? []) }
    },
    { write: true, missingRoute: true },
  )
}

export function deleteSearchHistory(entryId: string) {
  return withFeature(
    'searchHistory',
    () => localDeleteSearchHistory(entryId),
    async () => {
      const result = await realApi<{ deleted: true }>(
        `api/wealthEdAgent/study/search-history/${encodeURIComponent(entryId)}`,
        { method: 'DELETE' },
      )
      updateDb((db) => {
        db.searchHistory = (db.searchHistory ?? []).filter((entry) => entry.entryId !== entryId)
        db.deletedSearchIds = (db.deletedSearchIds ?? []).filter((id) => id !== entryId)
      })
      return result
    },
    { write: true, missingRoute: false },
  )
}

export function clearSearchHistory() {
  return withFeature(
    'searchHistory',
    localClearSearchHistory,
    async () => {
      const result = await realApi<{ deleted: true }>('api/wealthEdAgent/study/search-history', { method: 'DELETE' })
      updateDb((db) => {
        db.searchHistory = []
        db.deletedSearchIds = []
        db.searchHistoryCleared = false
      })
      return result
    },
    { write: true, missingRoute: true },
  )
}

export function listHighlights() {
  return withFeature(
    'highlights',
    localListHighlights,
    async () => {
      const body = await realApi<{ highlights: Highlight[] }>('api/wealthEdAgent/study/highlights')
      const db = peekDb()
      return { highlights: mergeHighlights(body.highlights, db.highlights ?? [], db.deletedHighlightIds ?? []).merged }
    },
    { missingRoute: true },
  )
}

export function createHighlight(input: HighlightInput) {
  const message = highlightInputError(input)
  if (message) fail(400, message)
  return withFeature(
    'highlights',
    () => localCreateHighlight(input),
    async () => {
      const result = await realApi<{ highlight: Highlight }>('api/wealthEdAgent/study/highlights', {
        method: 'POST',
        body: JSON.stringify(input),
      })
      mirrorHighlight(result.highlight)
      return result
    },
    { write: true, missingRoute: true },
  )
}

export function deleteHighlight(highlightId: string) {
  return withFeature(
    'highlights',
    () => {
      const result = localDeleteHighlight(highlightId)
      updateDb((db) => {
        const ids = new Set(db.deletedHighlightIds ?? [])
        ids.add(highlightId)
        db.deletedHighlightIds = [...ids]
      })
      return result
    },
    async () => {
      const result = await realApi<{ deleted: true }>(
        `api/wealthEdAgent/study/highlights/${encodeURIComponent(highlightId)}`,
        { method: 'DELETE' },
      )
      updateDb((db) => {
        db.highlights = (db.highlights ?? []).filter((row) => row.highlightId !== highlightId)
        db.deletedHighlightIds = (db.deletedHighlightIds ?? []).filter((id) => id !== highlightId)
      })
      return result
    },
    { write: true, missingRoute: false },
  )
}

/**
 * Report study and login activity. Mock mode does not call the network.
 * A 4xx, including 404 when the route is not deployed, is a drop.
 * This does not switch study data into the local fallback and does not sign the reader out.
 */
export async function postActivity(
  events: readonly ActivityEvent[],
  tokenOverride?: string,
): Promise<'ok' | 'drop' | 'retry' | 'skipped'> {
  if (events.length === 0) return 'ok'
  if (mockApiEnabled()) return 'skipped'
  const token = tokenOverride ?? localStorage.getItem(STORAGE.token) ?? ''
  if (!token) return 'drop'
  try {
    const response = await fetch(`${resolveApiHost()}api/wealthEdAgent/study/activity`, {
      method: 'POST',
      keepalive: true,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ events }),
    })
    if (response.ok) {
      markFeatureUp('activity')
      return 'ok'
    }
    if (response.status === 404) {
      markFeatureDown('activity')
      return 'drop'
    }
    if (response.status >= 400 && response.status < 500) return 'drop'
    markFeatureDown('activity')
    return 'retry'
  } catch {
    markFeatureDown('activity')
    return 'retry'
  }
}

export function errorText(error: unknown, fallback: string) {
  if (error instanceof ApiError && error.sessionExpired) return ''
  if (error instanceof Error && error.message.trim()) return error.message.trim()
  return fallback
}
