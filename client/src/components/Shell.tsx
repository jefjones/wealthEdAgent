import { BookOpen, Bookmark, ClipboardList, LayoutGrid, LogOut, Menu, Search, TrendingUp, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext.tsx'
import { SITE_TITLE } from '../content/catalog.ts'
import { HIGHLIGHTS_NAV_LABEL } from '../study/highlights.ts'
import { highlightsPath, practicePath, progressPath, searchPath, studyPath, testsHomePath } from '../study/paths.ts'
import { studyNoticeMessage } from '../study/studySync.ts'
import { ActivityBridge } from './ActivityBridge.tsx'
import { TestSwitcher } from './TestSwitcher.tsx'
import { getTestInfo } from '../content/catalog.ts'
import { SyncPill } from './SyncPill.tsx'
import { StateBridge } from './StateBridge.tsx'

type NavItem = { to: string; label: string; icon: typeof LayoutGrid; state?: { freshSearch: true } }

function navLinks(testId: string | null): NavItem[] {
  if (!testId) return [{ to: testsHomePath(), label: 'Tests', icon: LayoutGrid }]
  return [
    { to: testsHomePath(), label: 'Tests', icon: LayoutGrid },
    { to: studyPath(testId), label: 'Study', icon: BookOpen },
    { to: searchPath(testId), label: 'Search', icon: Search, state: { freshSearch: true } },
    { to: practicePath(testId), label: 'Practice Test', icon: ClipboardList },
    { to: progressPath(testId), label: 'Progress', icon: TrendingUp },
    { to: highlightsPath(testId), label: HIGHLIGHTS_NAV_LABEL, icon: Bookmark },
  ]
}

export function Shell() {
  const { person, logout, studyNotice } = useAuth()
  const studyMessage = studyNoticeMessage(studyNotice)
  const path = useLocation().pathname
  const testMatch = /^\/tests\/([^/]+)/.exec(path)
  const testId = testMatch?.[1] ?? null
  const links = navLinks(testId)
  const split = testId != null && (/\/study(\/|$)/.test(path) || /\/search(\/|$)/.test(path))
  /** The tests home page uses the full screen width (up to 1600px) so cards fit three across. */
  const frame = path === testsHomePath() ? 'max-w-[1600px]' : 'max-w-6xl'
  const [open, setOpen] = useState(false)
  const first = person?.fname?.trim()

  useEffect(() => {
    if (!split) return
    const query = window.matchMedia('(min-width: 1024px)')
    const apply = () => document.documentElement.classList.toggle('study-split', query.matches)
    apply()
    query.addEventListener('change', apply)
    return () => {
      query.removeEventListener('change', apply)
      document.documentElement.classList.remove('study-split')
    }
  }, [split])

  return (
    <div
      className={`bg-[#f3f7fb] text-[#172033] ${split ? 'min-h-svh lg:flex lg:h-dvh lg:max-h-dvh lg:flex-col lg:overflow-hidden' : 'min-h-svh'}`}
    >
      <header className="shrink-0 bg-[#2a6cb5] text-white">
        <div className={`mx-auto flex ${frame} items-center gap-3 px-4 py-3`}>
          <div className="min-w-0 flex-1">
            <NavLink to={person ? testsHomePath() : '/login'} className="block" onClick={() => setOpen(false)}>
              <span className="block font-['Fraunces',Georgia,serif] text-base leading-tight font-semibold tracking-tight sm:text-lg">
                {SITE_TITLE}
              </span>
            </NavLink>
            {person && testId && getTestInfo(testId) ? <TestSwitcher testId={testId} /> : null}
          </div>
          {person ? <SyncPill /> : null}
          {person ? <div id="mobile-contents-slot" className="lg:hidden" /> : null}
          {person ? (
            <button
              type="button"
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full hover:bg-white/10 md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          ) : null}
          <nav className="hidden items-center gap-1 md:flex">
            {person
              ? links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    state={link.state}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `rounded-full px-3 py-2 text-sm font-semibold ${isActive ? 'bg-white text-[#1f5a9a]' : 'text-white hover:bg-white/10'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))
              : null}
            {person ? (
              <button
                type="button"
                onClick={logout}
                className="ml-1 rounded-full px-3 py-2 text-sm font-semibold hover:bg-white/10"
              >
                Logout
              </button>
            ) : (
              <NavLink to="/login" className="rounded-full px-3 py-2 text-sm font-semibold hover:bg-white/10">
                Sign in
              </NavLink>
            )}
          </nav>
        </div>
        {person && open ? (
          <nav className="space-y-1 border-t border-white/15 px-4 py-3 md:hidden">
            {links.map((link) => {
              const Icon = link.icon
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  state={link.state}
                  end={link.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-xl px-3 py-3 text-base font-semibold ${isActive ? 'bg-white text-[#1f5a9a]' : 'hover:bg-white/10'}`
                  }
                >
                  <Icon size={18} />
                  {link.label}
                </NavLink>
              )
            })}
            <button
              type="button"
              onClick={() => {
                setOpen(false)
                logout()
              }}
              className="flex w-full items-center gap-2 rounded-xl px-3 py-3 text-left text-base font-semibold hover:bg-white/10"
            >
              <LogOut size={18} />
              Logout
            </button>
          </nav>
        ) : null}
      </header>
      {studyMessage ? (
        <div className="shrink-0 bg-[#fff6e8] text-[#6a4b16]" role="status">
          <p className={`mx-auto ${frame} px-4 py-2 text-sm`}>{studyMessage}</p>
        </div>
      ) : null}
      {person ? <ActivityBridge /> : null}
      {person ? <StateBridge /> : null}
      <main className={`mx-auto w-full ${frame} px-4 py-6 sm:py-8 ${split ? 'lg:flex lg:min-h-0 lg:flex-1 lg:flex-col lg:overflow-hidden lg:py-4' : ''}`}>
        <Outlet />
      </main>
      {first && (
        <footer className={`shrink-0 border-t border-[#d5e2f0] bg-white ${split ? 'lg:hidden' : ''}`}>
          <div className={`mx-auto flex ${frame} flex-col gap-2 px-4 py-4 text-sm text-[#4d6278] sm:flex-row sm:items-center sm:justify-between`}>
            <p>Signed in as {first}.</p>
          </div>
        </footer>
      )}
    </div>
  )
}
