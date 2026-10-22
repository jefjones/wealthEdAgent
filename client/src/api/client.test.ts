import { beforeEach, describe, expect, it } from 'vitest'
import {
  completeTest,
  createTest,
  getStudyState,
  listAttempts,
  login,
  register,
  saveSection,
  submitAnswer,
  usernameAvailable,
} from './client.ts'

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
  const local = new MemoryStorage()
  const session = new MemoryStorage()
  Object.defineProperty(globalThis, 'localStorage', { value: local, configurable: true })
  Object.defineProperty(globalThis, 'sessionStorage', { value: session, configurable: true })
  if (!globalThis.crypto?.randomUUID) {
    Object.defineProperty(globalThis, 'crypto', {
      value: { randomUUID: () => '00000000-0000-4000-8000-000000000001' },
      configurable: true,
    })
  }
})

describe('mock auth and study flow', () => {
  it('registers, tracks a section, and scores a test', async () => {
    const taken = await usernameAvailable('ada')
    expect(taken.available).toBe(true)

    const session = await register({
      username: 'ada',
      password: 'Study#One',
      confirmPassword: 'Study#One',
      fname: 'Ada',
      lname: 'Learner',
      emailAddress: 'ada@example.com',
    })
    localStorage.setItem('wealthEd.person', JSON.stringify(session.person))
    localStorage.setItem('wealthEd.authToken', session.token)

    const again = await usernameAvailable('Ada')
    expect(again.available).toBe(false)

    await saveSection('c1s1', { viewed: true, completed: true })
    const state = await getStudyState()
    expect(state.lastSectionId).toBe('c1s1')
    expect(state.sections[0]?.completedAt).toBeTruthy()

    const attempt = await createTest({
      mode: 'unseen',
      questions: [
        { questionId: 'q1', optionOrder: ['q1a', 'q1b', 'q1c', 'q1d'] },
        { questionId: 'q2', optionOrder: ['q2a', 'q2b', 'q2c', 'q2d'] },
      ],
    })
    expect(attempt.items).toHaveLength(2)
    const seen = await getStudyState()
    expect(seen.seenQuestionIds).toEqual(['q1', 'q2'])

    const wrong = await submitAnswer(attempt.attemptId, {
      questionId: 'q1',
      selectedOptionId: 'q1b',
      correctOptionId: 'q1a',
    })
    expect(wrong.isCorrect).toBe(false)
    const right = await submitAnswer(attempt.attemptId, {
      questionId: 'q2',
      selectedOptionId: 'q2c',
      correctOptionId: 'q2c',
    })
    expect(right.isCorrect).toBe(true)

    const finished = await completeTest(attempt.attemptId)
    expect(finished.correctCount).toBe(1)
    expect(finished.percentage).toBe(50)
    expect(finished.completedAt).toBeTruthy()

    const list = await listAttempts()
    expect(list).toHaveLength(1)
    expect(list[0]?.percentage).toBe(50)

    await expect(login('ada', 'nope')).rejects.toThrow(/Username or password/)
    const back = await login('ada', 'Study#One')
    expect(back.person.personId).toBe(session.person.personId)
  })
})
