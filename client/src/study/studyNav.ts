import { useEffect, useRef, useState } from 'react'

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

function writeNavExpanded(value: Record<string, boolean>) {
  sessionStorage.setItem(NAV_EXPANDED_KEY, JSON.stringify(value))
}

/** Which chapters are expanded in the study list. Shared by the sidebar and the mobile panel. */
export function useStudyNav(currentChapterId = '') {
  const [navOpen, setNavOpen] = useState<Record<string, boolean>>(readNavExpanded)
  const seen = useRef<string | null>(null)

  useEffect(() => {
    if (!currentChapterId) return
    const previous = seen.current
    seen.current = currentChapterId
    const arrivedFromAnother = previous !== null && previous !== currentChapterId
    setNavOpen((existing) => {
      if (!arrivedFromAnother && Object.prototype.hasOwnProperty.call(existing, currentChapterId)) return existing
      if (existing[currentChapterId]) return existing
      const next = { ...existing, [currentChapterId]: true }
      writeNavExpanded(next)
      return next
    })
  }, [currentChapterId])

  function toggleChapter(id: string) {
    setNavOpen((existing) => {
      const next = { ...existing, [id]: !existing[id] }
      writeNavExpanded(next)
      return next
    })
  }

  return { navOpen, toggleChapter }
}
