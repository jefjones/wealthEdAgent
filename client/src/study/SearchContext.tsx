import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  clearSearchHistory,
  deleteSearchHistory,
  errorText,
  listSearchHistory,
  onStudyFeatureReady,
  recordSearchHistory,
} from '../api/client.ts'
import { useAuth } from '../auth/AuthContext.tsx'
import { searchCourse, type SearchGroup, type SearchHit } from './search.ts'
import { cleanSearchText, type SearchHistoryEntry } from './searchHistory.ts'

const SESSION_KEY = 'wealthEdAgent.searchSession.v1'

export type SearchFocus = {
  sectionId: string
  start: number | null
  end: number | null
  token: number
}

type SearchTab = 'contents' | 'search'

type SessionShape = { query: string; tab: SearchTab }

function readSession(): SessionShape {
  if (typeof sessionStorage === 'undefined') return { query: '', tab: 'contents' }
  try {
    const raw = sessionStorage.getItem(SESSION_KEY)
    if (!raw) return { query: '', tab: 'contents' }
    const parsed = JSON.parse(raw) as { query?: unknown; tab?: unknown }
    return {
      query: typeof parsed.query === 'string' ? parsed.query.slice(0, 200) : '',
      tab: parsed.tab === 'search' ? 'search' : 'contents',
    }
  } catch {
    return { query: '', tab: 'contents' }
  }
}

function writeSession(session: SessionShape) {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(session))
  } catch {
    /* Private mode can reject storage. The in-memory search still applies. */
  }
}

type SearchValue = {
  query: string
  setQuery: (value: string) => void
  clearQuery: () => void
  runSearch: (text?: string) => void
  groups: SearchGroup[]
  resultCount: number
  tab: SearchTab
  setTab: (tab: SearchTab) => void
  focus: SearchFocus | null
  openHit: (hit: SearchHit) => void
  history: SearchHistoryEntry[]
  historyReady: boolean
  historyError: string
  removeHistory: (entryId: string) => void
  clearHistory: () => void
}

const SearchContext = createContext<SearchValue | null>(null)

export function SearchProvider({ children }: { children: ReactNode }) {
  const { person } = useAuth()
  const [session, setSession] = useState(readSession)
  const [focus, setFocus] = useState<SearchFocus | null>(null)
  const [history, setHistory] = useState<SearchHistoryEntry[]>([])
  const [historyReady, setHistoryReady] = useState(false)
  const [historyError, setHistoryError] = useState('')
  const groups = useMemo(() => searchCourse(session.query), [session.query])
  const resultCount = groups.reduce((sum, group) => sum + group.hits.length, 0)

  const replaceSession = useCallback((next: SessionShape) => {
    setSession(next)
    writeSession(next)
  }, [])

  const reloadHistory = useCallback(async () => {
    if (!person) {
      setHistory([])
      setHistoryReady(true)
      setHistoryError('')
      return
    }
    const result = await listSearchHistory()
    setHistory(result.entries)
    setHistoryError('')
  }, [person])

  useEffect(() => {
    let cancel = false
    setHistoryReady(false)
    reloadHistory()
      .catch((cause: unknown) => {
        if (!cancel) setHistoryError(errorText(cause, 'Could not load search history.'))
      })
      .finally(() => {
        if (!cancel) setHistoryReady(true)
      })
    return () => {
      cancel = true
    }
  }, [reloadHistory])

  useEffect(
    () =>
      onStudyFeatureReady((feature) => {
        if (feature !== 'searchHistory') return
        void reloadHistory().catch(() => {
          /* The banner already says searches are still in this browser. */
        })
      }),
    [reloadHistory],
  )

  const remember = useCallback((text: string) => {
    const cleaned = cleanSearchText(text)
    if (!cleaned) return
    void recordSearchHistory(cleaned)
      .then((result) => {
        setHistory(result.entries)
        setHistoryError('')
      })
      .catch((cause: unknown) => {
        setHistoryError(errorText(cause, 'Could not save that search.'))
      })
  }, [])

  const setQuery = useCallback(
    (value: string) => {
      replaceSession({ query: value.slice(0, 200), tab: 'search' })
    },
    [replaceSession],
  )

  const clearQuery = useCallback(() => {
    setFocus(null)
    replaceSession({ query: '', tab: session.tab })
  }, [replaceSession, session.tab])

  const setTab = useCallback(
    (tab: SearchTab) => {
      replaceSession({ query: session.query, tab })
    },
    [replaceSession, session.query],
  )

  const runSearch = useCallback(
    (text?: string) => {
      const next = cleanSearchText(text ?? session.query)
      replaceSession({ query: next, tab: 'search' })
      remember(next)
    },
    [remember, replaceSession, session.query],
  )

  const openHit = useCallback(
    (hit: SearchHit) => {
      setFocus((current) => ({
        sectionId: hit.sectionId,
        start: hit.bodyStart,
        end: hit.bodyEnd,
        token: (current?.token ?? 0) + 1,
      }))
      replaceSession({ query: session.query, tab: 'search' })
      remember(session.query)
    },
    [remember, replaceSession, session.query],
  )

  const removeHistory = useCallback((entryId: string) => {
    void deleteSearchHistory(entryId)
      .then(() => {
        setHistory((current) => current.filter((entry) => entry.entryId !== entryId))
        setHistoryError('')
      })
      .catch((cause: unknown) => {
        setHistoryError(errorText(cause, 'Could not remove that search.'))
      })
  }, [])

  const clearHistory = useCallback(() => {
    void clearSearchHistory()
      .then(() => {
        setHistory([])
        setHistoryError('')
      })
      .catch((cause: unknown) => {
        setHistoryError(errorText(cause, 'Could not clear search history.'))
      })
  }, [])

  const value = useMemo(
    () => ({
      query: session.query,
      setQuery,
      clearQuery,
      runSearch,
      groups,
      resultCount,
      tab: session.tab,
      setTab,
      focus,
      openHit,
      history,
      historyReady,
      historyError,
      removeHistory,
      clearHistory,
    }),
    [
      clearHistory,
      clearQuery,
      focus,
      groups,
      history,
      historyError,
      historyReady,
      openHit,
      removeHistory,
      resultCount,
      runSearch,
      session.query,
      session.tab,
      setQuery,
      setTab,
    ],
  )

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}

export function useSearch() {
  const value = useContext(SearchContext)
  if (!value) throw new Error('useSearch must be used inside SearchProvider.')
  return value
}
