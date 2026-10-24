import { useEffect, useRef, useState } from 'react'
import { updateStudyState, useStudyState } from './stateSync.ts'
import { useTest } from './TestContext.tsx'

const NAV_EXPANDED_KEY = 'wealthEdAgent.nav.expanded.v1'

function readNavExpanded(): Record<string, boolean> {
  try {
    const raw = sessionStorage.getItem(NAV_EXPANDED_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw) as unknown
    if (!parsed || typeof parsed !== 'object') return {}
    return parsed as Record<string, boolean>
  } catch {
    return {}
  }
}

function hasLocalNav() {
  try {
    return sessionStorage.getItem(NAV_EXPANDED_KEY) !== null
  } catch {
    return false
  }
}

function writeNavExpanded(value: Record<string, boolean>, testId?: string) {
  try {
    sessionStorage.setItem(NAV_EXPANDED_KEY, JSON.stringify(value))
  } catch {
    /* ignore */
  }
  if (testId) updateStudyState(testId, { navExpanded: Object.keys(value).filter((id) => value[id]) })
}

/** Which chapters are expanded in the study list. Shared by the sidebar and the mobile panel. */
export function useStudyNav(currentChapterId = '') {
  const testId = useTest().id
  const [navOpen, setNavOpen] = useState<Record<string, boolean>>(readNavExpanded)
  const seen = useRef<string | null>(null)
  const hadLocal = useRef(hasLocalNav())
  const { state: saved, ready } = useStudyState(testId)

  // A new tab or device opens the chapters the reader had open elsewhere.
  useEffect(() => {
    if (!ready || hadLocal.current || !saved.navExpanded) return
    hadLocal.current = true
    const ids = saved.navExpanded
    setNavOpen((existing) => {
      const next = { ...existing }
      ids.forEach((id) => {
        next[id] = true
      })
      return next
    })
  }, [ready, saved.navExpanded])

  useEffect(() => {
    if (!currentChapterId) return
    const previous = seen.current
    seen.current = currentChapterId
    const arrivedFromAnother = previous !== null && previous !== currentChapterId
    setNavOpen((existing) => {
      if (!arrivedFromAnother && Object.prototype.hasOwnProperty.call(existing, currentChapterId)) return existing
      if (existing[currentChapterId]) return existing
      const next = { ...existing, [currentChapterId]: true }
      writeNavExpanded(next, testId)
      return next
    })
  }, [currentChapterId, testId])

  function toggleChapter(id: string) {
    setNavOpen((existing) => {
      const next = { ...existing, [id]: !existing[id] }
      hadLocal.current = true
      writeNavExpanded(next, testId)
      return next
    })
  }

  return { navOpen, toggleChapter }
}
