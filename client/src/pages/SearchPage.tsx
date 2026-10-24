import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SearchPanel } from '../components/SearchPanel.tsx'
import { COLUMN_SCROLL } from '../study/columnScroll.ts'
import { isFreshSearchSignal, useSearch } from '../study/SearchContext.tsx'

export function SearchPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { startFresh } = useSearch()
  const [freshToken, setFreshToken] = useState(0)

  // The Search nav item sends router state { freshSearch: true }. Use it once, then drop it from history,
  // so Back, refresh, and reopening the results slide-out keep the current search.
  useEffect(() => {
    if (!isFreshSearchSignal(location.state)) return
    startFresh()
    window.scrollTo({ top: 0 })
    setFreshToken((token) => token + 1)
    navigate(`${location.pathname}${location.search}${location.hash}`, { replace: true, state: null })
  }, [location.key, location.state, location.pathname, location.search, location.hash, navigate, startFresh])

  return (
    <div className="grid gap-6 lg:h-full lg:min-h-0 lg:flex-1 lg:grid-cols-[320px_minmax(0,1fr)] lg:grid-rows-1 lg:gap-4 lg:overflow-hidden">
      <aside
        {...{ [COLUMN_SCROLL]: '' }}
        aria-label="Subject search"
        className="column-scroll rounded-2xl border border-[#d5e2f0] bg-white p-4 lg:h-full lg:min-h-0 lg:overflow-y-auto lg:overscroll-contain"
      >
        <SearchPanel idPrefix="page" autoFocus freshToken={freshToken} />
      </aside>
      <article
        {...{ [COLUMN_SCROLL]: '' }}
        aria-label="How subject search works"
        className="column-scroll hidden rounded-2xl border border-[#d5e2f0] bg-white p-8 lg:block lg:h-full lg:min-h-0 lg:overflow-y-auto lg:overscroll-contain"
      >
        <p className="text-sm font-semibold text-[#2a6cb5]">Subject search</p>
        <h1 className="mt-1 font-['Fraunces',Georgia,serif] text-3xl font-semibold text-[#14375f]">Find a section, then keep the results.</h1>
        <p className="mt-4 max-w-xl text-lg text-[#3d5166]">
          Search stays in the side panel while you open sections on this side. Clear it when you are done. Recent searches are kept so you can run one again.
        </p>
      </article>
    </div>
  )
}
