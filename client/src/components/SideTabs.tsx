type Tab = 'contents' | 'search'

export function SideTabs({ tab, onChange }: { tab: Tab; onChange: (tab: Tab) => void }) {
  return (
    <div role="tablist" aria-label="Study side panel" className="grid grid-cols-2 gap-1 rounded-xl bg-[#e7f1fb] p-1">
      {(
        [
          ['contents', 'Contents'],
          ['search', 'Search'],
        ] as const
      ).map(([value, label]) => {
        const selected = tab === value
        return (
          <button
            key={value}
            type="button"
            role="tab"
            aria-selected={selected}
            className={`min-h-11 rounded-lg text-sm font-semibold ${selected ? 'bg-white text-[#1f5a9a] shadow-sm' : 'text-[#3d5166] hover:bg-white/60'}`}
            onClick={() => onChange(value)}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
