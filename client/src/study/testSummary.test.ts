import { describe, expect, it } from 'vitest'
import { LIFE_HEALTH_ID, SIE_ID } from '../content/catalog.ts'
import { attemptBelongsToTest, summarizeTest } from './testSummary.ts'

describe('test summaries', () => {
  it('keeps an old attempt on Life and Health and scores only finished answers', () => {
    expect(attemptBelongsToTest({}, LIFE_HEALTH_ID)).toBe(true)
    expect(attemptBelongsToTest({}, SIE_ID)).toBe(false)
    expect(attemptBelongsToTest({ testId: SIE_ID }, SIE_ID)).toBe(true)

    const summary = summarizeTest({
      testId: SIE_ID,
      sectionIds: ['sie-ch-stocks-intro', 'sie-ch-bonds-intro'],
      progress: [
        { sectionId: 'sie-ch-stocks-intro', completed: true, completedAt: '2026-10-02T00:00:00.000Z' },
        { sectionId: 'c1-terms', completed: true, completedAt: '2026-10-20T00:00:00.000Z' },
      ],
      seen: [{ questionId: 'sie-q1', firstSeenUtc: '2026-10-03T00:00:00.000Z' }],
      attempts: [
        {
          testId: SIE_ID,
          startedAt: '2026-10-04T00:00:00.000Z',
          completedAt: '2026-10-04T01:00:00.000Z',
          answeredCount: 4,
          correctCount: 3,
          percent: 75,
        },
        {
          testId: SIE_ID,
          startedAt: '2026-10-05T00:00:00.000Z',
          completedAt: null,
          answeredCount: 1,
          correctCount: 0,
          percent: 0,
        },
        {
          startedAt: '2026-10-01T00:00:00.000Z',
          completedAt: '2026-10-01T01:00:00.000Z',
          answeredCount: 10,
          correctCount: 10,
          percent: 100,
        },
      ],
    })

    expect(summary.sectionsRead).toBe(1)
    expect(summary.sectionsTotal).toBe(2)
    expect(summary.questionsAnswered).toBe(5)
    expect(summary.practiceAccuracy).toBe(75)
    expect(summary.lastEffortAt).toBe('2026-10-05T00:00:00.000Z')
  })
})
