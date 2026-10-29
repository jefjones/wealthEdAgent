/**
 * One row per attempt in a list that mixes server rows and browser-only rows.
 * A browser row is the same attempt as a server row when its local id maps to the server id
 * (after its create synced), or when the clientIds match, or when the server's clientId is the
 * local id. The server row wins; fields only the browser has (testId, draw) are kept.
 */
export type DedupeAttempt = {
  attemptId: string
  startedAt: string
  clientId?: string | null
  testId?: string
  draw?: unknown
}

function sameAttempt(server: DedupeAttempt, local: DedupeAttempt, aliases: Readonly<Record<string, string>>) {
  if (server.attemptId === local.attemptId) return true
  if (aliases[local.attemptId] === server.attemptId) return true
  if (server.clientId && (server.clientId === local.attemptId || server.clientId === local.clientId)) return true
  return false
}

function mergeRow<T extends DedupeAttempt>(server: T, local: T): T {
  const merged = { ...local } as T
  for (const [key, value] of Object.entries(server)) {
    if (value !== undefined && value !== null) (merged as Record<string, unknown>)[key] = value
  }
  // The DB default does not override a test the browser knows.
  if (local.testId && (!server.testId || server.testId === 'life-health')) merged.testId = local.testId
  return merged
}

export function dedupeAttempts<T extends DedupeAttempt>(
  server: readonly T[],
  local: readonly T[],
  aliases: Readonly<Record<string, string>> = {},
): T[] {
  const rows: T[] = []
  const seen = new Set<string>()
  for (const row of server) {
    if (seen.has(row.attemptId)) continue
    seen.add(row.attemptId)
    rows.push(row)
  }
  for (const row of local) {
    const index = rows.findIndex((have) => sameAttempt(have, row, aliases))
    if (index >= 0) rows[index] = mergeRow(rows[index]!, row)
    else rows.push(row)
  }
  return rows.sort((a, b) => (a.startedAt < b.startedAt ? 1 : a.startedAt > b.startedAt ? -1 : 0))
}
