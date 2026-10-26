import { describe, expect, it } from 'vitest'
import { studyOpenPosition } from './studyState.ts'
import { summarizeTest } from './testSummary.ts'

describe('study effort', () => {
  it('records a new section open and throttles a quick reopen of the same section', () => {
    const first = studyOpenPosition(null, 'c1', 's1', '2026-10-25T10:00:00.000Z')
    expect(first).toEqual({ chapterId: 'c1', sectionId: 's1', savedAt: '2026-10-25T10:00:00.000Z' })
    expect(studyOpenPosition(first, 'c1', 's1', '2026-10-25T10:00:30.000Z')).toBeNull()
    expect(studyOpenPosition(first, 'c1', 's1', '2026-10-25T10:02:00.000Z')?.savedAt).toBe('2026-10-25T10:02:00.000Z')
    expect(studyOpenPosition(first, 'c1', 's2', '2026-10-25T10:00:05.000Z')?.sectionId).toBe('s2')
  })

  it('uses the last study open as last effort when it is newest', () => {
    const summary = summarizeTest({
      testId: 'sie', sectionIds: ['s1'], progress: [], seen: [],
      attempts: [{ testId: 'sie', startedAt: '2026-10-01T00:00:00.000Z', completedAt: null, answeredCount: 0, correctCount: 0, percent: 0 }],
      lastStudiedAt: '2026-10-25T10:00:00.000Z',
    })
    expect(summary.lastEffortAt).toBe('2026-10-25T10:00:00.000Z')
  })
})