import { LIFE_HEALTH_ID } from '../content/catalog.ts'

export function testsHomePath() {
  return '/'
}

export function studyPath(testId: string, sectionId?: string, hash?: string) {
  const section = sectionId ? `/${encodeURIComponent(sectionId)}` : ''
  const suffix = hash ? (hash.startsWith('#') ? hash : `#${hash}`) : ''
  return `/tests/${testId}/study${section}${suffix}`
}

export function searchPath(testId: string) {
  return `/tests/${testId}/search`
}

export function practicePath(testId: string) {
  return `/tests/${testId}/practice`
}

export function progressPath(testId: string) {
  return `/tests/${testId}/progress`
}

export function highlightsPath(testId: string) {
  return `/tests/${testId}/highlights`
}

export function attemptPath(testId: string, attemptId: string) {
  return `/tests/${testId}/test/${encodeURIComponent(attemptId)}`
}

export function lifeHealthPath(rest: string) {
  const clean = rest.replace(/^\//, '')
  return `/tests/${LIFE_HEALTH_ID}/${clean}`
}
