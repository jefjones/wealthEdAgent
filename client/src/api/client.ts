/**
 * The only module that talks to the network.
 * Login, register, and refresh use api/wealthEdAgent/auth/ (shared with myWealthEd accounts).
 * Forgot-password still posts to ebi/WealthEd/auth/password/forgot.
 * Study data uses api/wealthEdAgent/study/.
 * VITE_USE_MOCK=true never calls the network.
 * A study 404 "Study progress is not available yet." keeps that data in this browser.
 */

export const STORAGE = {
  person: 'wealthEd.person',
  token: 'wealthEd.authToken',
} as const

const EXPIRED_KEY = 'wealthEd.sessionExpired'
const MOCK_DIRECTORY = 'wealthEdAgent.mockDirectory.v1'
const MOCK_STUDY = 'wealthEdAgent.mockStudy.v1'
const LOCAL_STUDY = 'wealthEdAgent.localStudy.v1'

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
type StudyDb = {
  sections: SectionProgress[]
  seen: SeenRow[]
  attempts: AttemptRecord[]
}

let onSessionExpired: (() => void) | null = null
let onStudyUnavailable: (() => void) | null = null
let localStudy = false
let mockOverride: boolean | null = null

export function setSessionExpiredHandler(handler: (() => void) | null) {
  onSessionExpired = handler
}

export function setStudyUnavailableHandler(handler: (() => void) | null) {
  onStudyUnavailable = handler
}

export function studyUsingLocalFallback() {
  return localStudy
}

export function resetApiForTests() {
  localStudy = false
  mockOverride = null
  onSessionExpired = null
  onStudyUnavailable = null
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
  let response: Response
  try {
    response = await fetch(`${resolveApiHost()}${clean}`, { ...options, headers })
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

function localAnswer(
  attemptId: string,
  questionId: string,
  chosenOptionId: string,
  correctOptionId: string,
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

async function studyCall<T>(path: string, options: RequestInit | undefined, local: () => T): Promise<T> {
  if (mockApiEnabled() || localStudy) return local()
  try {
    return await realApi<T>(path, options)
  } catch (error) {
    if (error instanceof ApiError && error.studyUnavailable) {
      localStudy = true
      onStudyUnavailable?.()
      return local()
    }
    throw error
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

export async function forgotPassword(username: string) {
  if (mockApiEnabled()) return { message: 'If that username is eligible, a reset email was sent.' }
  return realApi<unknown>('ebi/WealthEd/auth/password/forgot', {
    method: 'POST',
    body: JSON.stringify({ username }),
  })
}

export async function resetPassword(input: { token: string; newPassword: string; confirmPassword: string }) {
  if (input.newPassword.length < 8) fail(400, 'Password must be at least 8 characters.')
  if (input.newPassword !== input.confirmPassword) fail(400, 'Password and confirm password must match.')
  if (mockApiEnabled()) fail(400, 'Reset link is invalid or expired.')
  return realApi<unknown>('ebi/WealthEd/auth/password/reset', {
    method: 'POST',
    body: JSON.stringify({
      token: input.token,
      newPassword: input.newPassword,
      confirmPassword: input.confirmPassword,
    }),
  })
}

export function getProgress() {
  return studyCall('api/wealthEdAgent/study/progress', undefined, localProgress)
}

export function saveProgress(chapterId: string, sectionId: string, completed: boolean) {
  return studyCall(
    `api/wealthEdAgent/study/progress/${encodeURIComponent(chapterId)}/${encodeURIComponent(sectionId)}`,
    { method: 'PUT', body: JSON.stringify({ completed }) },
    () => localSaveProgress(chapterId, sectionId, completed),
  )
}

export function getSeen() {
  return studyCall('api/wealthEdAgent/study/questions/seen', undefined, localSeen)
}

export function createAttempt(input: { mode: AttemptMode; questionCount: number }) {
  return studyCall(
    'api/wealthEdAgent/study/attempts',
    { method: 'POST', body: JSON.stringify({ mode: input.mode, questionCount: input.questionCount }) },
    () => localCreateAttempt(input.mode, input.questionCount),
  )
}

export function submitAnswer(
  attemptId: string,
  questionId: string,
  input: { chosenOptionId: string; correctOptionId: string },
) {
  return studyCall(
    `api/wealthEdAgent/study/attempts/${encodeURIComponent(attemptId)}/answers/${encodeURIComponent(questionId)}`,
    {
      method: 'PUT',
      body: JSON.stringify({
        chosenOptionId: input.chosenOptionId,
        correctOptionId: input.correctOptionId,
      }),
    },
    () => localAnswer(attemptId, questionId, input.chosenOptionId, input.correctOptionId),
  )
}

export function completeAttempt(attemptId: string) {
  return studyCall(
    `api/wealthEdAgent/study/attempts/${encodeURIComponent(attemptId)}/complete`,
    { method: 'POST', body: JSON.stringify({}) },
    () => localComplete(attemptId),
  )
}

export function listAttempts() {
  return studyCall('api/wealthEdAgent/study/attempts', undefined, localList)
}

export function getAttempt(attemptId: string) {
  return studyCall(`api/wealthEdAgent/study/attempts/${encodeURIComponent(attemptId)}`, undefined, () =>
    localGet(attemptId),
  )
}

export function errorText(error: unknown, fallback: string) {
  if (error instanceof ApiError && (error.network || error.sessionExpired)) return ''
  if (error instanceof Error && error.message.trim()) return error.message.trim()
  return fallback
}
