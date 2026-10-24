import { Link } from 'react-router-dom'
import { subjectTitle } from '../content/rewrite.ts'
import { useSearch } from '../study/SearchContext.tsx'
import type { SearchSnippet } from '../study/search.ts'
import type { SearchHistoryEntry } from '../study/searchHistory.ts'
import { Button } from './ui/button.tsx'

function whenSearched(iso: string) {
  const ms = Date.parse(iso)
  if (!Number.isFinite(ms)) return ''
  return new Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' }).format(ms)
}

function SnippetText({ snippet }: { snippet: SearchSnippet }) {
  const parts: (string | { mark: string; key: number })[] = []
  let cursor = 0
  snippet.marks.forEach((mark, index) => {
    if (mark.start > cursor) parts.push(snippet.text.slice(cursor, mark.start))
    parts.push({ mark: snippet.text.slice(mark.start, mark.end), key: index })
    cursor = mark.end
  })
  if (cursor < snippet.text.length) parts.push(snippet.text.slice(cursor))
  return (
    <p className="mt-1 text-sm leading-5 text-[#3d5166]">
      {snippet.lead ? '…' : null}
      {parts.map((part, index) =>
        typeof part === 'string' ? (
          <span key={`t-${index}`}>{part}</span>
        ) : (
          <mark key={part.key} className="rounded-sm bg-[#ffe08a] px-0.5 text-[#3a2a00]">
            {part.mark}
          </mark>
        ),
      )}
      {snippet.trail ? '…' : null}
    </p>
  )
}

function HistoryRow({ entry, onOpen, onDelete }: { entry: SearchHistoryEntry; onOpen: () => void; onDelete: () => void }) {
  return (
    <li className="flex items-center gap-1">
      <button
        type="button"
        className="min-h-11 min-w-0 flex-1 rounded-lg px-2 py-2 text-left hover:bg-[#f4f8fc]"
        onClick={onOpen}
      >
        <span className="block truncate text-sm font-semibold text-[#14375f]">{entry.text}</span>
        <span className="block text-xs text-[#5c7288]">{whenSearched(entry.searchedAt)}</span>
      </button>
      <button
        type="button"
        className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-sm font-semibold text-[#5c7288] hover:bg-[#f4f8fc] hover:text-[#8d1d1d]"
        aria-label={`Remove ${entry.text} from search history`}
        onClick={onDelete}
      >
        Remove
      </button>
    </li>
  )
}

export function SearchPanel({
  idPrefix,
  autoFocus = false,
  onNavigate,
}: {
  idPrefix: string
  autoFocus?: boolean
  onNavigate?: () => void
}) {
  const search = useSearch()
  const fieldId = `${idPrefix}-subject-search`
  const query = search.query.trim()
  return (
    <div>
      <form
        className="space-y-2"
        onSubmit={(event) => {
          event.preventDefault()
          search.runSearch()
        }}
      >
        <label htmlFor={fieldId} className="text-sm font-semibold text-[#14375f]">
          Subject search
        </label>
        <input
          id={fieldId}
          value={search.query}
          autoFocus={autoFocus}
          maxLength={200}
          placeholder="Try grace period or annuity"
          className="h-11 w-full rounded-xl border border-[#c5d5e8] bg-white px-3 text-base text-[#172033] outline-none focus-visible:ring-2 focus-visible:ring-[#2a6cb5]"
          onChange={(event) => search.setQuery(event.target.value)}
        />
        <div className="flex gap-2">
          <Button type="submit" className="min-w-11 px-4">
            Search
          </Button>
          <Button type="button" variant="outline" disabled={!search.query} onClick={search.clearQuery}>
            Clear
          </Button>
        </div>
      </form>
      {query ? (
        <p className="mt-3 text-sm text-[#5c7288]">
          {search.resultCount === 0 ? `No sections match “${query}”.` : `${search.resultCount} ${search.resultCount === 1 ? 'section' : 'sections'}`}
        </p>
      ) : (
        <p className="mt-3 text-sm text-[#5c7288]">Type a subject. The results stay here until you clear them.</p>
      )}
      <div className="mt-3 space-y-4">
        {search.groups.map((group) => (
          <section key={group.chapterId}>
            <h3 className="text-xs font-semibold tracking-wide text-[#5c7288] uppercase">
              Chapter {group.chapterNumber} · {subjectTitle(group.chapterTitle)}
            </h3>
            <ul className="mt-1 space-y-1">
              {group.hits.map((hit) => (
                <li key={hit.sectionId}>
                  <Link
                    to={`/study/${hit.sectionId}`}
                    onClick={() => {
                      search.openHit(hit)
                      onNavigate?.()
                    }}
                    className="block rounded-xl px-2 py-2 hover:bg-[#f4f8fc]"
                  >
                    <span className="block text-sm font-semibold text-[#1f5a9a]">{hit.sectionTitle}</span>
                    <SnippetText snippet={hit.snippet} />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="mt-6 border-t border-[#e4eef7] pt-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-sm font-semibold text-[#14375f]">Recent searches</h3>
          <button
            type="button"
            className="min-h-11 rounded-full px-2 text-sm font-semibold text-[#1f5a9a] hover:underline disabled:text-[#8aa0b5] disabled:no-underline"
            disabled={search.history.length === 0}
            onClick={search.clearHistory}
          >
            Clear history
          </button>
        </div>
        {search.historyError ? <p className="mt-2 text-sm text-[#8d1d1d]">{search.historyError}</p> : null}
        {!search.historyReady ? <p className="mt-2 text-sm text-[#5c7288]">Loading recent searches…</p> : null}
        {search.historyReady && search.history.length === 0 ? (
          <p className="mt-2 text-sm text-[#5c7288]">Searches you run are listed here, with the time you ran them.</p>
        ) : null}
        <ul className="mt-1">
          {search.history.map((entry) => (
            <HistoryRow
              key={entry.entryId}
              entry={entry}
              onOpen={() => search.runSearch(entry.text)}
              onDelete={() => search.removeHistory(entry.entryId)}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
