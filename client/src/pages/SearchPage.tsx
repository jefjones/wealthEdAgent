import { SearchPanel } from '../components/SearchPanel.tsx'
import { COLUMN_SCROLL } from '../study/columnScroll.ts'

export function SearchPage() {
  return (
    <div className="grid gap-6 lg:h-full lg:min-h-0 lg:flex-1 lg:grid-cols-[320px_minmax(0,1fr)] lg:grid-rows-1 lg:gap-4 lg:overflow-hidden">
      <aside
        {...{ [COLUMN_SCROLL]: '' }}
        aria-label="Subject search"
        className="column-scroll rounded-2xl border border-[#d5e2f0] bg-white p-4 lg:h-full lg:min-h-0 lg:overflow-y-auto lg:overscroll-contain"
      >
        <SearchPanel idPrefix="page" autoFocus />
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
