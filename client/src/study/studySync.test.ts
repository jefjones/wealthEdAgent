import { describe, expect, it } from 'vitest'
import {
  classifyFeatureFailure,
  classifyStudyFailure,
  featuresDueForReprobe,
  mergeAttempts,
  mergeHighlights,
  mergeProgress,
  mergeSeen,
  noticeFeatures,
  REPROBE_MS,
  shouldMigrate,
  studyNoticeMessage,
  unionAttempts,
  withFeatureMigrated,
  withoutFeatureMigrated,
  type SyncHighlight,
  type SyncProgress,
} from './studySync.ts'

function progress(partial: Partial<SyncProgress> & Pick<SyncProgress, 'sectionId' | 'completed'>): SyncProgress {
  return {
    chapterId: 'ch-general',
    completedAt: partial.completed ? '2026-10-01T00:00:00.000Z' : null,
    ...partial,
  }
}

function highlight(partial: Partial<SyncHighlight> & Pick<SyncHighlight, 'highlightId' | 'text'>): SyncHighlight {
  return {
    chapterId: 'ch-general',
    sectionId: 's1',
    startOffset: 0,
    endOffset: partial.text.length,
    createdAt: '2026-10-01T00:00:00.000Z',
    ...partial,
  }
}

describe('mergeProgress', () => {
  it('keeps the server row when it is newer or the same moment', () => {
    const server = [progress({ sectionId: 's1', completed: true, completedAt: '2026-10-03T00:00:00.000Z' })]
    const local = [progress({ sectionId: 's1', completed: false, completedAt: '2026-10-02T00:00:00.000Z' })]
    const newer = mergeProgress(server, local)
    expect(newer.upload).toEqual([])
    expect(newer.merged[0]?.completed).toBe(true)

    const equal = mergeProgress(
      [progress({ sectionId: 's1', completed: true, completedAt: '2026-10-02T00:00:00.000Z' })],
      [progress({ sectionId: 's1', completed: false, completedAt: '2026-10-02T00:00:00.000Z' })],
    )
    expect(equal.upload).toEqual([])
    expect(equal.merged[0]?.completed).toBe(true)
  })

  it('uploads a strictly newer local completion change and a local-only completion', () => {
    const server = [progress({ sectionId: 's1', completed: false, completedAt: '2026-10-01T00:00:00.000Z' })]
    const local = [
      progress({ sectionId: 's1', completed: true, completedAt: '2026-10-04T00:00:00.000Z' }),
      progress({ sectionId: 's2', completed: true, completedAt: '2026-10-04T00:00:00.000Z' }),
      progress({ sectionId: 's3', completed: false, completedAt: null }),
    ]
    const result = mergeProgress(server, local)
    expect(result.upload.map((row) => row.sectionId)).toEqual(['s1', 's2'])
    expect(result.merged.map((row) => row.sectionId)).toEqual(['s1', 's2'])
  })

  it('does not upload when the newer local row has the same completed flag', () => {
    const result = mergeProgress(
      [progress({ sectionId: 's1', completed: true, completedAt: '2026-10-01T00:00:00.000Z' })],
      [progress({ sectionId: 's1', completed: true, completedAt: '2026-10-05T00:00:00.000Z' })],
    )
    expect(result.upload).toEqual([])
    expect(result.merged[0]?.completedAt).toBe('2026-10-01T00:00:00.000Z')
  })

  it('keeps the server row when neither side has a timestamp', () => {
    const result = mergeProgress(
      [progress({ sectionId: 's1', completed: true, completedAt: null })],
      [progress({ sectionId: 's1', completed: false, completedAt: null })],
    )
    expect(result.upload).toEqual([])
    expect(result.merged[0]?.completed).toBe(true)
  })
})

describe('mergeHighlights', () => {
  it('unions by id and skips content the server already has', () => {
    const server = [highlight({ highlightId: 'server-1', text: 'Alpha' })]
    const local = [
      highlight({ highlightId: 'server-1', text: 'Alpha' }),
      highlight({ highlightId: 'local-copy', text: 'Alpha' }),
      highlight({ highlightId: 'local-2', text: 'Beta', startOffset: 1, endOffset: 5 }),
      highlight({ highlightId: 'local-2', text: 'Beta', startOffset: 1, endOffset: 5 }),
    ]
    const result = mergeHighlights(server, local)
    expect(result.upload.map((row) => row.highlightId)).toEqual(['local-2'])
    expect(result.merged.map((row) => row.highlightId)).toEqual(['server-1', 'local-2'])
    expect(result.deleteIds).toEqual([])
  })

  it('does not resurrect a highlight deleted locally', () => {
    const server = [highlight({ highlightId: 'h1', text: 'Alpha' })]
    const local = [highlight({ highlightId: 'h1', text: 'Alpha' })]
    const result = mergeHighlights(server, local, ['h1'])
    expect(result.merged).toEqual([])
    expect(result.upload).toEqual([])
    expect(result.deleteIds).toEqual(['h1'])
  })
})

describe('mergeAttempts', () => {
  it('uploads local attempt ids the server does not have and skips ones already posted', () => {
    const server = [{ attemptId: 'server-1' }]
    const local = [{ attemptId: 'server-1' }, { attemptId: 'local-1' }, { attemptId: 'local-1' }, { attemptId: 'posted' }]
    const result = mergeAttempts(server, local, ['posted'])
    expect(result.upload.map((row) => row.attemptId)).toEqual(['local-1'])
  })

  it('unions attempt lists without duplicating an id', () => {
    const merged = unionAttempts(
      [
        { attemptId: 'b', startedAt: '2026-10-02T00:00:00.000Z' },
        { attemptId: 'a', startedAt: '2026-10-01T00:00:00.000Z' },
      ],
      [{ attemptId: 'a', startedAt: '2026-10-03T00:00:00.000Z' }, { attemptId: 'c', startedAt: '2026-10-04T00:00:00.000Z' }],
    )
    expect(merged.map((row) => row.attemptId)).toEqual(['c', 'b', 'a'])
  })
})

describe('mergeSeen', () => {
  it('unions question ids and keeps server rows in place', () => {
    const result = mergeSeen(
      [{ questionId: 'q1', firstSeenUtc: '2026-10-01T00:00:00.000Z' }],
      [
        { questionId: 'q1', firstSeenUtc: '2026-10-02T00:00:00.000Z' },
        { questionId: 'q2', firstSeenUtc: '2026-10-03T00:00:00.000Z' },
        { questionId: 'q2', firstSeenUtc: '2026-10-04T00:00:00.000Z' },
      ],
    )
    expect(result.merged.map((row) => row.questionId)).toEqual(['q1', 'q2'])
    expect(result.localOnly.map((row) => row.questionId)).toEqual(['q2'])
    expect(result.merged[0]?.firstSeenUtc).toBe('2026-10-01T00:00:00.000Z')
  })
})

describe('classifyStudyFailure', () => {
  it('separates a missing study service from a network or server failure', () => {
    expect(classifyStudyFailure({ studyUnavailable: true, status: 404 })).toBe('undeployed')
    expect(classifyStudyFailure({ status: 404, missingRouteFallsBack: true })).toBe('undeployed')
    expect(classifyStudyFailure({ status: 404 })).toBeNull()
    expect(classifyStudyFailure({ network: true })).toBe('unreachable')
    expect(classifyStudyFailure({ status: 503 })).toBe('unreachable')
    expect(classifyStudyFailure({ status: 401 })).toBeNull()
    expect(classifyStudyFailure({ status: 409 })).toBeNull()
  })
})

describe('feature availability', () => {
  it('treats an empty highlights 404 as that feature only', () => {
    expect(classifyFeatureFailure('highlights', { status: 404 })).toBe('undeployed')
    expect(classifyFeatureFailure('activity', { status: 404 })).toBe('undeployed')
    expect(classifyFeatureFailure('progress', { status: 404 })).toBeNull()
    expect(classifyFeatureFailure('seen', { status: 404 })).toBeNull()
    expect(classifyFeatureFailure('attempts', { status: 404 })).toBeNull()
    expect(classifyFeatureFailure('progress', { status: 404, studyUnavailable: true })).toBe('undeployed')
    expect(classifyFeatureFailure('highlights', { network: true })).toBe('unreachable')
    expect(classifyFeatureFailure('highlights', { status: 404 }, false)).toBeNull()
    const down = noticeFeatures(['highlights', 'activity'])
    expect(down).toEqual(['highlights'])
    expect(down).not.toContain('progress')
  })

  it('reprobes on focus immediately and on a timer after the interval', () => {
    const down = [
      { feature: 'highlights' as const, downSince: 1_000 },
      { feature: 'progress' as const, downSince: 50_000 },
    ]
    expect(featuresDueForReprobe(down, 30_000)).toEqual([])
    expect(featuresDueForReprobe(down, 1_000 + REPROBE_MS)).toEqual(['highlights'])
    expect(featuresDueForReprobe(down, 30_000, { focus: true })).toEqual(['highlights', 'progress'])
  })

  it('marks a feature migrated once and can clear that mark without touching the others', () => {
    expect(shouldMigrate(undefined, 'highlights')).toBe(true)
    const marked = withFeatureMigrated({}, 'highlights')
    expect(shouldMigrate(marked, 'highlights')).toBe(false)
    expect(shouldMigrate(marked, 'progress')).toBe(true)
    expect(shouldMigrate(withoutFeatureMigrated(marked, 'highlights'), 'highlights')).toBe(true)
  })
})

describe('studyNoticeMessage', () => {
  it('names only the features that are unavailable', () => {
    expect(studyNoticeMessage(['highlights'])).toBe('Highlights are saved in this browser only for now.')
    expect(studyNoticeMessage(['progress', 'attempts'])).toBe(
      'Reading progress is saved in this browser only for now. Test scores are saved in this browser only for now.',
    )
    expect(studyNoticeMessage(['activity'])).toBe('')
    expect(studyNoticeMessage([])).toBe('')
    expect(studyNoticeMessage(['highlights'])).not.toMatch(/myWealthEd/i)
  })
})
