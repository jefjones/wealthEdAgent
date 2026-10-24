import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  ApiError,
  errorText,
  completeAttempt,
  createAttempt,
  getProgress,
  getSeen,
  listAttempts,
  forgotPassword,
  login,
  NETWORK_MESSAGE,
  parseResponseBody,
  register,
  resetPassword,
  listHighlights,
  resetApiForTests,
  resolveApiHost,
  saveProgress,
  setMockOverride,
  setSession,
  setSessionExpiredHandler,
  reprobeStudyFeaturesNow,
  setStudyNoticeHandler,
  submitAnswer,
  type StudyFeature,
} from './client.ts'
import { formatPercent } from '../lib/utils.ts'

class MemoryStorage {
  private store = new Map<string, string>()
  getItem(key: string) {
    return this.store.has(key) ? (this.store.get(key) as string) : null
  }
  setItem(key: string, value: string) {
    this.store.set(key, String(value))
  }
  removeItem(key: string) {
    this.store.delete(key)
  }
  clear() {
    this.store.clear()
  }
}

beforeEach(() => {
  resetApiForTests()
  const local = new MemoryStorage()
  const session = new MemoryStorage()
  Object.defineProperty(globalThis, 'localStorage', { value: local, configurable: true })
  Object.defineProperty(globalThis, 'sessionStorage', { value: session, configurable: true })
})

describe('parseResponseBody', () => {
  it('does not parse an empty 401 body as JSON', () => {
    expect(parseResponseBody('')).toBeNull()
    expect(parseResponseBody('   ')).toBeNull()
    expect(() => JSON.parse('')).toThrow()
    expect(parseResponseBody('{"message":"Incorrect username or password."}')).toEqual({
      message: 'Incorrect username or password.',
    })
  })
})

describe('formatPercent', () => {
  it('renders 50 and 50.0 the same way', () => {
    expect(formatPercent(50)).toBe('50')
    expect(formatPercent(50.0)).toBe('50')
    expect(formatPercent('50.0')).toBe('50')
    expect(formatPercent(66.6)).toBe('66.6')
  })
})

describe('resolveApiHost', () => {
  it('uses VITE_API_BASE_URL and ignores the page host', () => {
    vi.stubEnv('VITE_API_BASE_URL', 'https://localhost:44348')
    Object.defineProperty(globalThis, 'window', {
      value: { location: { hostname: 'example.test' } },
      configurable: true,
    })
    expect(resolveApiHost()).toBe('https://localhost:44348/')
    vi.stubEnv('VITE_API_BASE_URL', 'https://ecdmy.com/')
    expect(resolveApiHost()).toBe('https://ecdmy.com/')
    vi.unstubAllEnvs()
  })
})

describe('mock auth and study flow', () => {
  it('registers, tracks a section, and scores a test', async () => {
    const session = await register({
      username: 'ada',
      password: 'Study#One',
      confirmPassword: 'Study#One',
      fname: 'Ada',
      lname: 'Learner',
      emailAddress: 'ada@example.com',
    })
    setSession(session.person, session.token)

    await saveProgress('c1', 'c1s1', true)
    const state = await getProgress()
    expect(state.sections[0]?.completed).toBe(true)
    expect(state.sections[0]?.completedAt).toMatch(/Z$/)

    const created = await createAttempt({ mode: 'unseen', questionCount: 2 })
    const wrong = await submitAnswer(created.attempt.attemptId, 'q1', {
      chosenOptionId: 'q1b',
      correctOptionId: 'q1a',
    })
    expect(wrong.answer.isCorrect).toBe(false)
    const right = await submitAnswer(created.attempt.attemptId, 'q2', {
      chosenOptionId: 'q2c',
      correctOptionId: 'q2c',
    })
    expect(right.answer.isCorrect).toBe(true)
    expect(formatPercent(right.attempt.percent)).toBe('50')

    const finished = await completeAttempt(created.attempt.attemptId)
    expect(finished.attempt.correctCount).toBe(1)
    expect(finished.attempt.percent).toBe(50)

    const list = await listAttempts()
    expect(list.attempts).toHaveLength(1)
    expect(list.attempts[0]?.percent).toBe(50)

    await expect(login('ada', 'nope')).rejects.toThrow('Incorrect username or password.')
    const back = await login('ada', 'Study#One')
    expect(back.person.personId).toBe(session.person.personId)
  })
})

describe('signed-out study 401', () => {
  it('treats an empty body as unauthorized and does not parse it', async () => {
    setMockOverride(false)
    vi.stubEnv('VITE_API_BASE_URL', 'https://localhost:44348/')
    const expired = vi.fn()
    setSessionExpiredHandler(expired)
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '')
    const payload = btoa(JSON.stringify({ exp: Math.floor(Date.now() / 1000) + 3600, personId: 'p1' }))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=+$/, '')
    setSession(
      {
        personId: 'p1',
        username: 'ada',
        fname: 'Ada',
        lname: 'Learner',
        emailAddress: 'ada@example.com',
        phone: null,
        agentId: null,
        agentSlug: null,
      },
      `${header}.${payload}.sig`,
    )
    const fetchMock = vi.fn(async (..._args: unknown[]) => new Response('', { status: 401 }))
    vi.stubGlobal('fetch', fetchMock)
    await expect(getProgress()).rejects.toBeInstanceOf(ApiError)
    expect(expired).toHaveBeenCalled()
    expect(fetchMock).toHaveBeenCalled()
    const calls = fetchMock.mock.calls as unknown as [string, ...unknown[]][]
    expect(String(calls[0]?.[0])).toBe('https://localhost:44348/api/wealthEdAgent/study/progress')
    vi.unstubAllGlobals()
    vi.unstubAllEnvs()
  })
})

describe('mock password reset', () => {
  it('emails nothing visible, rotates the password once, and rejects the used token', async () => {
    await register({
      username: 'ada',
      password: 'studytest1',
      confirmPassword: 'studytest1',
      fname: 'Ada',
      lname: 'Lovelace',
      emailAddress: 'ada@example.com',
    })
    const unknown = await forgotPassword('nobody')
    expect(unknown).toEqual({ message: 'If an account exists for that username, a reset email was sent.' })
    expect(localStorage.getItem('wealthEdAgent.mockResets.v1')).toBeNull()

    const known = await forgotPassword('Ada')
    expect(known).toEqual({ message: 'If an account exists for that username, a reset email was sent.' })
    const resets = JSON.parse(localStorage.getItem('wealthEdAgent.mockResets.v1') || '{}') as Record<string, string>
    const token = Object.keys(resets)[0]
    expect(token).toBeTruthy()

    await expect(
      resetPassword({ token: token as string, newPassword: 'newpass1', confirmPassword: 'otherpass' }),
    ).rejects.toMatchObject({ message: 'Password and confirm password must match.' })
    await expect(login('ada', 'studytest1')).resolves.toMatchObject({ person: { username: 'ada' } })

    await resetPassword({ token: token as string, newPassword: 'newpass12', confirmPassword: 'newpass12' })
    await expect(login('ada', 'studytest1')).rejects.toMatchObject({ message: 'Incorrect username or password.' })
    await expect(login('ada', 'newpass12')).resolves.toMatchObject({ person: { username: 'ada' } })
    await expect(
      resetPassword({ token: token as string, newPassword: 'newpass12', confirmPassword: 'newpass12' }),
    ).rejects.toMatchObject({ message: 'This reset link is invalid or has expired.' })
  })
})

describe('register failures are visible', () => {
  const input = {
    username: 'studyTest',
    fname: 'Study',
    lname: 'Test',
    email: 'study@example.com',
    emailAddress: 'study@example.com',
    password: 'longenough1',
    confirmPassword: 'longenough1',
  }

  it('shows the network message when the server cannot be reached', async () => {
    setMockOverride(false)
    vi.stubEnv('VITE_API_BASE_URL', 'https://localhost:44348/')
    vi.stubGlobal('fetch', vi.fn(async () => { throw new TypeError('Failed to fetch') }))
    const cause = await register(input).catch((error: unknown) => error)
    expect(errorText(cause, 'Could not create the account.')).toBe(NETWORK_MESSAGE)
    vi.unstubAllGlobals()
    vi.unstubAllEnvs()
  })

  it('names the missing API host instead of failing silently', async () => {
    setMockOverride(false)
    vi.stubEnv('VITE_API_BASE_URL', '')
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)
    const cause = await register(input).catch((error: unknown) => error)
    expect(errorText(cause, 'Could not create the account.')).toBe('Set VITE_API_BASE_URL.')
    expect(fetchMock).not.toHaveBeenCalled()
    vi.unstubAllGlobals()
    vi.unstubAllEnvs()
  })
})


function signedIn() {
  const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
  const payload = btoa(JSON.stringify({ exp: Math.floor(Date.now() / 1000) + 3600, personId: 'p1' }))
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
  setSession(
    {
      personId: 'p1',
      username: 'ada',
      fname: 'Ada',
      lname: 'Learner',
      emailAddress: 'ada@example.com',
      phone: null,
      agentId: null,
      agentSlug: null,
    },
    `${header}.${payload}.sig`,
  )
}

function jsonResponse(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  })
}

describe('server study sync', () => {
  beforeEach(() => {
    setMockOverride(false)
    vi.stubEnv('VITE_API_BASE_URL', 'https://ecdmy.com/')
    signedIn()
  })

  it('uploads local-only progress and highlights once', async () => {
    localStorage.setItem(
      'wealthEdAgent.localStudy.v1',
      JSON.stringify({
        p1: {
          sections: [
            {
              chapterId: 'ch-general',
              sectionId: 's1',
              completed: true,
              completedAt: '2026-10-04T00:00:00.000Z',
            },
          ],
          seen: [{ questionId: 'q-local', firstSeenUtc: '2026-10-04T00:00:00.000Z' }],
          attempts: [
            {
              attemptId: 'local-attempt',
              mode: 'unseen',
              startedAt: '2026-10-04T00:00:00.000Z',
              completedAt: '2026-10-04T00:10:00.000Z',
              questionCount: 1,
              answeredCount: 1,
              correctCount: 1,
              percent: 100,
              answers: [
                {
                  questionId: 'q1',
                  chosenOptionId: 'a',
                  correctOptionId: 'a',
                  isCorrect: true,
                  answeredAt: '2026-10-04T00:05:00.000Z',
                },
              ],
            },
          ],
          highlights: [
            {
              highlightId: 'h-local',
              chapterId: 'ch-general',
              sectionId: 's1',
              startOffset: 0,
              endOffset: 4,
              text: 'Term',
              createdAt: '2026-10-04T00:00:00.000Z',
            },
          ],
        },
      }),
    )
    const calls: string[] = []
    vi.stubGlobal('fetch', async (url: string, init?: RequestInit) => {
      const method = init?.method ?? 'GET'
      const path = String(url).replace('https://ecdmy.com/', '')
      calls.push(`${method} ${path}`)
      if (method === 'GET' && path === 'api/wealthEdAgent/study/progress') {
        return jsonResponse({
          sections: [{ chapterId: 'ch-general', sectionId: 's1', completed: false, completedAt: '2026-10-01T00:00:00.000Z' }],
        })
      }
      if (method === 'PUT' && path.startsWith('api/wealthEdAgent/study/progress/')) {
        return jsonResponse({
          section: { chapterId: 'ch-general', sectionId: 's1', completed: true, completedAt: '2026-10-04T00:00:00.000Z' },
        })
      }
      if (method === 'GET' && path === 'api/wealthEdAgent/study/attempts') return jsonResponse({ attempts: [] })
      if (method === 'POST' && path === 'api/wealthEdAgent/study/attempts') {
        return jsonResponse({
          attempt: {
            attemptId: 'server-attempt',
            mode: 'unseen',
            startedAt: '2026-10-04T00:00:00.000Z',
            completedAt: null,
            questionCount: 1,
            answeredCount: 0,
            correctCount: 0,
            percent: 0,
          },
        })
      }
      if (method === 'PUT' && path.includes('/answers/')) {
        return jsonResponse({
          answer: {
            questionId: 'q1',
            chosenOptionId: 'a',
            correctOptionId: 'a',
            isCorrect: true,
            answeredAt: '2026-10-04T00:05:00.000Z',
          },
          attempt: { attemptId: 'server-attempt', percent: 100 },
        })
      }
      if (method === 'POST' && path.endsWith('/complete')) {
        return jsonResponse({
          attempt: {
            attemptId: 'server-attempt',
            mode: 'unseen',
            startedAt: '2026-10-04T00:00:00.000Z',
            completedAt: '2026-10-04T00:10:00.000Z',
            questionCount: 1,
            answeredCount: 1,
            correctCount: 1,
            percent: 100,
          },
        })
      }
      if (method === 'GET' && path === 'api/wealthEdAgent/study/highlights') return jsonResponse({ highlights: [] })
      if (method === 'POST' && path === 'api/wealthEdAgent/study/highlights') {
        return jsonResponse({
          highlight: {
            highlightId: 'h-server',
            chapterId: 'ch-general',
            sectionId: 's1',
            startOffset: 0,
            endOffset: 4,
            text: 'Term',
            createdAt: '2026-10-04T00:00:00.000Z',
          },
        })
      }
      if (path === 'api/wealthEdAgent/study/questions/seen') {
        return jsonResponse({ questionIds: ['q-server'], seen: [{ questionId: 'q-server', firstSeenUtc: '2026-10-01T00:00:00.000Z' }] })
      }
      return jsonResponse({})
    })

    const progress = await getProgress()
    expect(progress.sections.find((row) => row.sectionId === 's1')?.completed).toBe(true)
    const highlights = await listHighlights()
    expect(highlights.highlights.map((row) => row.highlightId)).toEqual(['h-server'])
    await listAttempts()
    const seen = await getSeen()
    expect(seen.questionIds).toEqual(['q-server', 'q-local', 'q1'])

    const writes = () => calls.filter((call) => call.startsWith('POST ') || call.startsWith('PUT '))
    const posted = writes()
    expect(posted.filter((call) => call.includes('/progress/'))).toHaveLength(1)
    expect(posted.filter((call) => call === 'POST api/wealthEdAgent/study/highlights')).toHaveLength(1)
    expect(posted.filter((call) => call === 'POST api/wealthEdAgent/study/attempts')).toHaveLength(1)

    await getProgress()
    await listHighlights()
    expect(writes()).toEqual(posted)
    vi.unstubAllGlobals()
    vi.unstubAllEnvs()
  })

  it('keeps progress on the server when highlights return an empty 404', async () => {
    const notices: StudyFeature[][] = []
    setStudyNoticeHandler((features) => notices.push(features))
    const calls: string[] = []
    vi.stubGlobal('fetch', async (url: string, init?: RequestInit) => {
      const method = init?.method ?? 'GET'
      const path = String(url).replace('https://ecdmy.com/', '')
      calls.push(`${method} ${path}`)
      if (path.endsWith('/highlights')) return new Response('', { status: 404 })
      if (path.endsWith('/progress')) {
        return jsonResponse({
          sections: [{ chapterId: 'ch-general', sectionId: 's1', completed: true, completedAt: '2026-10-04T00:00:00.000Z' }],
        })
      }
      return jsonResponse({ attempts: [], questionIds: [], seen: [], highlights: [] })
    })

    const highlights = await listHighlights()
    expect(highlights.highlights).toEqual([])
    expect(notices.at(-1)).toEqual(['highlights'])
    const progress = await getProgress()
    expect(progress.sections[0]?.completed).toBe(true)
    const highlightCalls = () => calls.filter((call) => call.includes('highlights'))
    const progressCalls = () => calls.filter((call) => call.includes('/progress'))
    expect(highlightCalls()).toHaveLength(1)
    expect(progressCalls().length).toBeGreaterThan(0)
    await listHighlights()
    expect(highlightCalls()).toHaveLength(1)
    const progressBefore = progressCalls().length
    await reprobeStudyFeaturesNow()
    expect(highlightCalls().length).toBeGreaterThan(1)
    expect(progressCalls()).toHaveLength(progressBefore)
    vi.unstubAllGlobals()
    vi.unstubAllEnvs()
  })
})
