/** Saved subject searches. The newest 50 are kept. The same words count as one entry. */

export const SEARCH_HISTORY_CAP = 50
export const SEARCH_HISTORY_TEXT_MAX = 200

export type SearchHistoryEntry = {
  entryId: string
  text: string
  searchedAt: string
}

export type SearchHistoryAction =
  | { type: 'add'; entry: SearchHistoryEntry }
  | { type: 'delete'; entryId: string }
  | { type: 'clear' }

export function searchHistoryKey(text: string): string {
  return text
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim()
}

export function cleanSearchText(text: string): string {
  return text.replace(/\s+/g, ' ').trim().slice(0, SEARCH_HISTORY_TEXT_MAX)
}

function byNewest(left: SearchHistoryEntry, right: SearchHistoryEntry) {
  if (left.searchedAt === right.searchedAt) return left.entryId < right.entryId ? -1 : left.entryId > right.entryId ? 1 : 0
  return left.searchedAt < right.searchedAt ? 1 : -1
}

function stamp(value: string) {
  const ms = Date.parse(value)
  return Number.isFinite(ms) ? ms : 0
}

/** Newest first. Adding the same words replaces that entry and moves it to the top. */
export function applySearchHistory(entries: readonly SearchHistoryEntry[], action: SearchHistoryAction): SearchHistoryEntry[] {
  if (action.type === 'clear') return []
  if (action.type === 'delete') return entries.filter((entry) => entry.entryId !== action.entryId)
  const key = searchHistoryKey(action.entry.text)
  const rest = entries.filter((entry) => entry.entryId !== action.entry.entryId && searchHistoryKey(entry.text) !== key)
  return [action.entry, ...rest].sort(byNewest).slice(0, SEARCH_HISTORY_CAP)
}

/**
 * Server rows win unless a local row for the same words is strictly newer.
 * Deleted ids are removed. A cleared browser list deletes the server rows.
 * The merged list is capped at 50, newest first.
 */
export function mergeSearchHistory(
  server: readonly SearchHistoryEntry[],
  local: readonly SearchHistoryEntry[],
  deletedIds: readonly string[] = [],
  cleared = false,
): { merged: SearchHistoryEntry[]; upload: SearchHistoryEntry[]; deleteIds: string[] } {
  const deleted = new Set(deletedIds)
  if (cleared) {
    const kept = local
      .filter((entry) => !deleted.has(entry.entryId) && searchHistoryKey(entry.text))
      .sort(byNewest)
      .slice(0, SEARCH_HISTORY_CAP)
    const keptIds = new Set(kept.map((entry) => entry.entryId))
    return {
      merged: kept,
      upload: kept,
      deleteIds: [...new Set(server.map((entry) => entry.entryId).filter((id) => !keptIds.has(id)))],
    }
  }
  const byKey = new Map<string, SearchHistoryEntry>()
  for (const row of server) {
    if (deleted.has(row.entryId)) continue
    byKey.set(searchHistoryKey(row.text), row)
  }
  const upload: SearchHistoryEntry[] = []
  for (const row of local) {
    if (deleted.has(row.entryId) || !searchHistoryKey(row.text)) continue
    const key = searchHistoryKey(row.text)
    const existing = byKey.get(key)
    if (!existing) {
      byKey.set(key, row)
      upload.push(row)
      continue
    }
    if (stamp(row.searchedAt) > stamp(existing.searchedAt)) {
      byKey.set(key, row)
      upload.push(row)
    }
  }
  const merged = [...byKey.values()].sort(byNewest).slice(0, SEARCH_HISTORY_CAP)
  const keptIds = new Set(merged.map((entry) => entry.entryId))
  return {
    merged,
    upload: upload.filter((entry) => keptIds.has(entry.entryId)),
    deleteIds: [...new Set(server.filter((entry) => deleted.has(entry.entryId)).map((entry) => entry.entryId))],
  }
}
