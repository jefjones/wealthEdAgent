import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import {
  clearSearchHistory,
  deleteSearchHistory,
  errorText,
  listSearchHistory,
  onStudyFeatureReady,
  recordSearchHistory,
} from '../api/client.ts'
import { useAuth } from '../auth/AuthContext.tsx'
import { LIFE_HEALTH_ID } from '../content/catalog.ts'
import { searchCourse, type SearchGroup, type SearchHit } from './search.ts'
import { cleanSearchText, type SearchHistoryEntry } from './searchHistory.ts'
import { updateStudyState, useStudyState } from './stateSync.ts'
import { fieldTime, type SearchState } from './studyState.ts'

const SESSION_KEY = 'wealthEdAgent.searchSession.v1'

function sessionKey(testId: string) {
  return `${SESSION_KEY}.${testId}`
}

export type SearchFocus = {
  sectionId: string
  start: number | null
  end: number | null
  token: number
}

type SearchTab = 'contents' | 'search'

export type SessionShape = { query: string; tab: SearchTab; selected: string }

export function parseSession(raw: string | null): SessionShape | null {
  if (!raw) return null
  try {
    const parsed = JSON.parse(raw) as { query?: unknown; tab?: unknown; selected?: unknown }
    return {
      query: typeof parsed.query === 'string' ? parsed.query.slice(0, 200) : '',
      tab: parsed.tab === 'search' ? 'search' : 'contents',
      selected: typeof parsed.selected === 'string' ? parsed.selected.slice(0, 200) : '',
    }
  } catch {
    return null
  }
}

function readSession(testId: string): SessionShape {
  if (typeof sessionStorage === 'undefined') return { query: '', tab: 'contents', selected: '' }
  const saved = parseSession(sessionStorage.getItem(sessionKey(testId)))
  if (saved) return saved
  if (testId === LIFE_HEALTH_ID) return parseSession(sessionStorage.getItem(SESSION_KEY)) ?? { query: '', tab: 'contents', selected: '' }
  return { query: '', tab: 'contents', selected: '' }
}

/** Where each results list was scrolled to, so a closed slide-out reopens at the same place. */
export function createScrollMemory() {
  const tops = new Map<string, number>()
  return {
    get: (key: string) => tops.get(key) ?? 0,
    has: (key: string) => tops.has(key),
    set: (key: string, top: number) => {
      if (Number.isFinite(top) && top >= 0) tops.set(key, top)
    },
    clear: () => tops.clear(),
  }
}

/** The next session after a search runs: a different query drops the old picked result. */
export function sessionAfterSearch(current: SessionShape, text: string): SessionShape {
  return { query: text, tab: 'search', selected: text === current.query ? current.selected : '' }
}

/** A Search nav click starts over. The signal is router state, so it is used once and never on a slide-out reopen. */
export function isFreshSearchSignal(state: unknown): boolean {
  return Boolean(state && typeof state === 'object' && (state as { freshSearch?: unknown }).freshSearch === true)
}

/** Session after a fresh start: no words, no results, nothing picked, on the Search tab. */
export function freshSearchSession(): SessionShape {
  return { query: '', tab: 'search', selected: '' }
}

/** Use the server's search only when it was saved after this tab's own copy. */
export function shouldRestoreServerSearch(localSavedAtMs: number, serverSavedAtMs: number) {
  return serverSavedAtMs > localSavedAtMs
}

function readSessionSavedAt(testId: string) {
  try {
    const raw = sessionStorage.getItem(sessionKey(testId))
    const value = raw ? Number((JSON.parse(raw) as { savedAt?: unknown }).savedAt) : 0
    return Number.isFinite(value) ? value : 0
  } catch {
    return 0
  }
}

function writeSession(testId: string, session: SessionShape) {
  try {
    sessionStorage.setItem(sessionKey(testId), JSON.stringify({ ...session, savedAt: Date.now() }))
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
  /** Section id of the result picked last; stays marked when the list reopens. */
  selectedHit: string
  /** Scroll top of a results list, keyed by panel (mobile/desktop/page). */
  savedScroll: (panel: string) => number
  rememberScroll: (panel: string, top: number) => void
  /** Search nav click: clear words, results, pick and scroll, here and on the server. */
  startFresh: () => void
  history: SearchHistoryEntry[]
  historyReady: boolean
  historyError: string
  removeHistory: (entryId: string) => void
  clearHistory: () => void
}

const SearchContext = createContext<SearchValue | null>(null)

export function SearchProvider({ testId, children }: { testId: string; children: ReactNode }) {
  const { person } = useAuth()
  const [session, setSession] = useState(() => readSession(testId))
  const [focus, setFocus] = useState<SearchFocus | null>(null)
  const scrollMemory = useRef(createScrollMemory())
  const sessionRef = useRef(session)
  sessionRef.current = session
  const [history, setHistory] = useState<SearchHistoryEntry[]>([])
  const [historyReady, setHistoryReady] = useState(false)
  const [historyError, setHistoryError] = useState('')
  const serverScroll = useRef(0)
  const lastSentScroll = useRef(0)
  const { state: saved, ready: savedReady } = useStudyState(testId)
  const restored = useRef(false)
  const [restoreTick, setRestoreTick] = useState(0)
  const groups = useMemo(() => searchCourse(session.query, testId), [session.query, testId])
  const resultCount = groups.reduce((sum, group) => sum + group.hits.length, 0)

  const pushSearch = useCallback(
    (next: SessionShape, top: number) => {
      const search: SearchState = { query: next.query, tab: next.tab, selected: next.selected, resultsScrollTop: Math.round(top) }
      lastSentScroll.current = search.resultsScrollTop
      updateStudyState(testId, { search })
    },
    [testId],
  )

  const replaceSession = useCallback(
    (next: SessionShape) => {
      setSession(next)
      writeSession(testId, next)
      pushSearch(next, next.query === sessionRef.current.query ? lastSentScroll.current : 0)
    },
    [pushSearch, testId],
  )

  // Another device saved a newer search: show it here, with its picked result and scroll position.
  useEffect(() => {
    if (!savedReady || restored.current) return
    restored.current = true
    const search = saved.search
    if (!search) return
    if (!shouldRestoreServerSearch(readSessionSavedAt(testId), fieldTime(saved, 'search'))) return
    const next: SessionShape = { query: search.query, tab: search.tab, selected: search.selected }
    serverScroll.current = search.resultsScrollTop
    lastSentScroll.current = search.resultsScrollTop
    scrollMemory.current.clear()
    setSession(next)
    setRestoreTick((tick) => tick + 1)
    try {
      sessionStorage.setItem(sessionKey(testId), JSON.stringify({ ...next, savedAt: fieldTime(saved, 'search') }))
    } catch {
      /* ignore */
    }
  }, [saved, savedReady, testId])

  const reloadHistory = useCallback(async () => {
    if (!person) {
      setHistory([])
      setHistoryReady(true)
      setHistoryError('')
      return
    }
    const result = await listSearchHistory(testId)
    setHistory(result.entries)
    setHistoryError('')
  }, [person, testId])

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
    void recordSearchHistory(cleaned, testId)
      .then((result) => {
        setHistory(result.entries)
        setHistoryError('')
      })
      .catch((cause: unknown) => {
        setHistoryError(errorText(cause, 'Could not save that search.'))
      })
  }, [testId])

  const setQuery = useCallback(
    (value: string) => {
      replaceSession({ ...sessionRef.current, query: value.slice(0, 200), tab: 'search' })
    },
    [replaceSession],
  )

  const clearQuery = useCallback(() => {
    setFocus(null)
    scrollMemory.current.clear()
    serverScroll.current = 0
    lastSentScroll.current = 0
    replaceSession({ query: '', tab: sessionRef.current.tab, selected: '' })
  }, [replaceSession])

  const setTab = useCallback(
    (tab: SearchTab) => {
      replaceSession({ ...sessionRef.current, tab })
    },
    [replaceSession],
  )

  const runSearch = useCallback(
    (text?: string) => {
      const next = cleanSearchText(text ?? session.query)
      if (next !== sessionRef.current.query) {
        scrollMemory.current.clear()
        serverScroll.current = 0
        lastSentScroll.current = 0
      }
      replaceSession(sessionAfterSearch(sessionRef.current, next))
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
      replaceSession({ ...sessionRef.current, tab: 'search', selected: hit.sectionId })
      remember(session.query)
    },
    [remember, replaceSession, session.query],
  )

  const removeHistory = useCallback((entryId: string) => {
    void deleteSearchHistory(entryId, testId)
      .then(() => {
        setHistory((current) => current.filter((entry) => entry.entryId !== entryId))
        setHistoryError('')
      })
      .catch((cause: unknown) => {
        setHistoryError(errorText(cause, 'Could not remove that search.'))
      })
  }, [testId])

  const clearHistory = useCallback(() => {
    void clearSearchHistory(testId)
      .then(() => {
        setHistory([])
        setHistoryError('')
      })
      .catch((cause: unknown) => {
        setHistoryError(errorText(cause, 'Could not clear search history.'))
      })
  }, [testId])

  const savedScroll = useCallback(
    (panel: string) => {
      const key = `${testId}:${panel}`
      return scrollMemory.current.has(key) ? scrollMemory.current.get(key) : serverScroll.current
    },
    // restoreTick: a restored server position must reach panels that are already open.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [testId, restoreTick],
  )
  const rememberScroll = useCallback(
    (panel: string, top: number) => {
      scrollMemory.current.set(`${testId}:${panel}`, top)
      if (!sessionRef.current.query) return
      if (Math.abs(top - lastSentScroll.current) < 24) return
      pushSearch(sessionRef.current, top)
    },
    [pushSearch, testId],
  )

  const startFresh = useCallback(() => {
    setFocus(null)
    scrollMemory.current.clear()
    serverScroll.current = 0
    lastSentScroll.current = 0
    const next = freshSearchSession()
    setSession(next)
    writeSession(testId, next)
    updateStudyState(testId, { search: null })
  }, [testId])

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
      selectedHit: session.selected,
      savedScroll,
      rememberScroll,
      startFresh,
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
      savedScroll,
      rememberScroll,
      startFresh,
      session.selected,
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
