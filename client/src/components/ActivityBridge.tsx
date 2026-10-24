import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { findSectionAnywhere } from '../content/catalog.ts'
import { FLUSH_INTERVAL_MS } from '../study/activity.ts'
import { flushActivity, noteActivity, showActivity, syncActivityChapter } from '../study/activityTracker.ts'

function chapterIdFromPath(pathname: string): string | null {
  const match = /^\/tests\/[^/]+\/study\/([^/]+)/.exec(pathname)
  if (!match?.[1]) return null
  return findSectionAnywhere(decodeURIComponent(match[1]))?.chapter.id ?? null
}

/** Counts visible, active study time and asks the tracker to report it. Renders nothing. */
export function ActivityBridge() {
  const { pathname } = useLocation()

  useEffect(() => {
    syncActivityChapter(chapterIdFromPath(pathname))
  }, [pathname])

  useEffect(() => {
    showActivity(document.visibilityState === 'visible')
    const mark = () => noteActivity()
    const onVisibility = () => {
      const visible = document.visibilityState === 'visible'
      showActivity(visible)
      if (!visible) flushActivity()
    }
    const onPageHide = () => flushActivity()
    const capture: AddEventListenerOptions = { capture: true, passive: true }
    document.addEventListener('scroll', mark, capture)
    document.addEventListener('click', mark, capture)
    document.addEventListener('keydown', mark, capture)
    document.addEventListener('touchstart', mark, capture)
    document.addEventListener('mousemove', mark, capture)
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('pagehide', onPageHide)
    const interval = window.setInterval(() => flushActivity(), FLUSH_INTERVAL_MS)
    return () => {
      window.clearInterval(interval)
      document.removeEventListener('scroll', mark, capture)
      document.removeEventListener('click', mark, capture)
      document.removeEventListener('keydown', mark, capture)
      document.removeEventListener('touchstart', mark, capture)
      document.removeEventListener('mousemove', mark, capture)
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pagehide', onPageHide)
      flushActivity()
    }
  }, [])

  return null
}
