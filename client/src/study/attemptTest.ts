import { allPacksLoaded, courseQuestions, packVersion, tests } from '../content/catalog.ts'

let owners: Map<string, string> | null = null
let ownersVersion = -1

/** Built from the packs loaded so far, and rebuilt when another pack loads. */
function questionOwners() {
  if (owners && ownersVersion === packVersion()) return owners
  ownersVersion = packVersion()
  const map = new Map<string, string>()
  for (const test of tests) {
    for (const question of courseQuestions(test.id)) if (!map.has(question.id)) map.set(question.id, test.id)
  }
  owners = map
  return map
}

/** The test whose question bank holds most of these question ids, or null when none match. */
export function testIdForQuestions(questionIds: readonly string[] | null | undefined): string | null {
  if (!questionIds?.length) return null
  const map = questionOwners()
  const counts = new Map<string, number>()
  for (const id of questionIds) {
    const owner = map.get(id)
    if (owner) counts.set(owner, (counts.get(owner) ?? 0) + 1)
  }
  let best: string | null = null
  let bestCount = 0
  for (const [testId, count] of counts) {
    if (count > bestCount) {
      best = testId
      bestCount = count
    }
  }
  return best
}

/**
 * An older attempt whose questions belong to a test whose content is not loaded (offline).
 * It matches no test, so it is hidden instead of being filed under Life and Health.
 */
export const UNKNOWN_TEST_ID = 'unknown'

/** The DB default for attempts saved before the server stored a test id, so it is ambiguous. */
export const DEFAULT_SERVER_TEST_ID = 'life-health'

/** A test id the server accepts: 1-64 chars, no '/', no control characters. */
export function isValidTestId(testId: string | null | undefined): testId is string {
  return typeof testId === 'string' && testId.length >= 1 && testId.length <= 64 && !testId.includes('/') && !/[\u0000-\u001f\u007f]/.test(testId)
}

/** The testId part of a create-attempt request body; empty when the id is missing or invalid. */
export function attemptTestIdBody(testId: string | null | undefined): { testId?: string } {
  return isValidTestId(testId) ? { testId } : {}
}

/**
 * Older attempts which test an attempt is for. Use, in order: the server value,
 * the value saved in this browser, then the test that owns the drawn questions.
 */
export function resolveAttemptTestId(
  serverTestId: string | undefined,
  localTestId: string | undefined,
  questionIds: readonly string[] | null | undefined,
): string | undefined {
  if (isValidTestId(serverTestId) && serverTestId !== DEFAULT_SERVER_TEST_ID && serverTestId !== UNKNOWN_TEST_ID) return serverTestId
  if (localTestId && localTestId !== UNKNOWN_TEST_ID) return localTestId
  const inferred = testIdForQuestions(questionIds)
  if (inferred) return inferred
  // Questions that no loaded test owns: with some content missing, the owner is not known yet.
  if (questionIds?.length && !allPacksLoaded()) return UNKNOWN_TEST_ID
  return isValidTestId(serverTestId) && serverTestId !== UNKNOWN_TEST_ID ? serverTestId : undefined
}
