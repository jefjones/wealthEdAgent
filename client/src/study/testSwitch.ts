import { LIFE_HEALTH_ID, tests } from '../content/catalog.ts'
import { highlightsPath, practicePath, progressPath, searchPath, studyPath } from './paths.ts'

export type TestFeature = 'study' | 'search' | 'practice' | 'progress' | 'highlights'

/** Short name for headers: the part of the catalog title before the dash (Life and Health is "Life/Health"). */
export function testShortName(testId: string): string {
  if (testId === LIFE_HEALTH_ID) return 'Life/Health'
  const test = tests.find((row) => row.id === testId)
  if (!test) return testId
  return test.title.split(/\s+[-\u2013\u2014]\s+/u)[0]!.trim()
}

/** Which feature a per-test path is on. A practice attempt (/test/:id) counts as Practice. */
export function featureOfPath(pathname: string): TestFeature | null {
  const match = /^\/tests\/[^/]+\/([^/?#]+)/.exec(pathname)
  switch (match?.[1]) {
    case 'study':
      return 'study'
    case 'search':
      return 'search'
    case 'practice':
    case 'test':
      return 'practice'
    case 'progress':
      return 'progress'
    case 'highlights':
      return 'highlights'
    default:
      return null
  }
}

/** Router state Search reads once to re-run the carried words in the new test. */
export type CarrySearchState = { carrySearch: string }

export function isCarrySearchState(state: unknown): state is CarrySearchState {
  return Boolean(state && typeof state === 'object' && typeof (state as { carrySearch?: unknown }).carrySearch === 'string')
}

/**
 * Where to go when the reader picks another test: the same feature in that test.
 * Study opens where the reader left off in the new test; Practice opens the start page, never mid-attempt.
 * Search carries the current words so they run again in the new test.
 */
export function switchTestTarget(pathname: string, toTestId: string, searchQuery = ''): { to: string; state?: CarrySearchState } {
  const feature = featureOfPath(pathname) ?? 'study'
  switch (feature) {
    case 'search': {
      const query = searchQuery.trim()
      return query ? { to: searchPath(toTestId), state: { carrySearch: query } } : { to: searchPath(toTestId) }
    }
    case 'practice':
      return { to: practicePath(toTestId) }
    case 'progress':
      return { to: progressPath(toTestId) }
    case 'highlights':
      return { to: highlightsPath(toTestId) }
    default:
      return { to: studyPath(toTestId) }
  }
}