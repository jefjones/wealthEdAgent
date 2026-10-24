import { describe, expect, it } from 'vitest'
import {
  SEARCH_HISTORY_CAP,
  applySearchHistory,
  mergeSearchHistory,
  type SearchHistoryEntry,
} from './searchHistory.ts'

function entry(partial: Partial<SearchHistoryEntry> & Pick<SearchHistoryEntry, 'entryId' | 'text'>): SearchHistoryEntry {
  return { searchedAt: '2026-10-01T00:00:00.000Z', ...partial }
}

describe('search history', () => {
  it('moves a repeated search to the top and keeps one entry', () => {
    const first = applySearchHistory([], {
      type: 'add',
      entry: entry({ entryId: 'a', text: 'Annuity', searchedAt: '2026-10-01T00:00:00.000Z' }),
    })
    const next = applySearchHistory(first, {
      type: 'add',
      entry: entry({ entryId: 'a', text: 'annuity', searchedAt: '2026-10-02T00:00:00.000Z' }),
    })
    expect(next).toHaveLength(1)
    expect(next[0]).toMatchObject({ entryId: 'a', text: 'annuity', searchedAt: '2026-10-02T00:00:00.000Z' })

    const other = applySearchHistory(next, {
      type: 'add',
      entry: entry({ entryId: 'b', text: 'Grace period', searchedAt: '2026-10-03T00:00:00.000Z' }),
    })
    expect(other.map((row) => row.entryId)).toEqual(['b', 'a'])
    expect(applySearchHistory(other, { type: 'delete', entryId: 'b' }).map((row) => row.entryId)).toEqual(['a'])
    expect(applySearchHistory(other, { type: 'clear' })).toEqual([])
  })

  it('keeps the newest 50 searches', () => {
    let rows: SearchHistoryEntry[] = []
    for (let index = 0; index < SEARCH_HISTORY_CAP + 5; index += 1) {
      rows = applySearchHistory(rows, {
        type: 'add',
        entry: entry({
          entryId: `id-${index}`,
          text: `term ${index}`,
          searchedAt: new Date(Date.UTC(2026, 0, 1, 0, index)).toISOString(),
        }),
      })
    }
    expect(rows).toHaveLength(SEARCH_HISTORY_CAP)
    expect(rows[0]?.entryId).toBe(`id-${SEARCH_HISTORY_CAP + 4}`)
    expect(rows.some((row) => row.entryId === 'id-0')).toBe(false)
  })
})

describe('search history adapter', () => {
  it('uploads a newer local search, drops deleted ids, and caps the merge', () => {
    const server = [
      entry({ entryId: 's-annuity', text: 'Annuity', searchedAt: '2026-10-01T00:00:00.000Z' }),
      entry({ entryId: 's-gone', text: 'Old term', searchedAt: '2026-10-01T00:00:00.000Z' }),
    ]
    const local = [entry({ entryId: 's-annuity', text: 'annuity', searchedAt: '2026-10-04T00:00:00.000Z' })]
    const merged = mergeSearchHistory(server, local, ['s-gone'])
    expect(merged.deleteIds).toEqual(['s-gone'])
    expect(merged.merged.map((row) => row.entryId)).toEqual(['s-annuity'])
    expect(merged.upload.map((row) => row.searchedAt)).toEqual(['2026-10-04T00:00:00.000Z'])
    expect(merged.merged[0]?.text).toBe('annuity')

    const many = Array.from({ length: 60 }, (_, index) =>
      entry({
        entryId: `srv-${index}`,
        text: `server ${index}`,
        searchedAt: new Date(Date.UTC(2026, 0, 1, 0, index)).toISOString(),
      }),
    )
    expect(mergeSearchHistory(many, [], []).merged).toHaveLength(SEARCH_HISTORY_CAP)

    const cleared = mergeSearchHistory(server, [], [], true)
    expect(cleared.merged).toEqual([])
    expect(cleared.deleteIds.sort()).toEqual(['s-annuity', 's-gone'])
  })
})
