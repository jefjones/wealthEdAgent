import { Check, ChevronRight } from 'lucide-react'
import type { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { subjectTitle } from '../content/rewrite.ts'
import { percent } from '../lib/utils.ts'
import { studyPath } from '../study/paths.ts'
import { useTest } from '../study/TestContext.tsx'

export function StudyOutline({
  idPrefix,
  navOpen,
  onToggle,
  done,
  loading,
  currentSectionId,
  onPick,
}: {
  idPrefix: string
  navOpen: Record<string, boolean>
  onToggle: (chapterId: string) => void
  done: Set<string>
  loading?: boolean
  currentSectionId?: string
  onPick?: (sectionId: string, event: MouseEvent<HTMLAnchorElement>) => void
}) {
  const test = useTest()
  const chapters = test.pack.chapters
  const sections = chapters.flatMap((chapter) => chapter.sections)
  const completedCount = sections.filter((section) => done.has(section.id)).length
  const currentChapterId = chapters.find((chapter) => chapter.sections.some((section) => section.id === currentSectionId))?.id

  return (
    <>
      <p className="text-sm font-semibold text-[#1c3f66]">
        Reading progress {loading ? '…' : `${percent(completedCount, sections.length)}%`}
      </p>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e4eef7]">
        <div className="h-full rounded-full bg-[#2a6cb5]" style={{ width: `${percent(completedCount, sections.length)}%` }} />
      </div>
      <div className="mt-4 space-y-1">
        {chapters.map((chapter) => {
          const chapterDone = chapter.sections.filter((section) => done.has(section.id)).length
          const open = Boolean(navOpen[chapter.id])
          const here = chapter.id === currentChapterId
          const panelId = `${idPrefix}-nav-${chapter.id}`
          return (
            <div key={chapter.id} className={here ? 'rounded-xl bg-[#e7f1fb]' : undefined}>
              <button
                type="button"
                className={`flex min-h-11 w-full items-center gap-2 rounded-xl px-2 py-2 text-left focus-visible:ring-2 focus-visible:ring-[#2a6cb5] focus-visible:ring-offset-2 focus-visible:outline-none ${here ? '' : 'hover:bg-[#f4f8fc]'}`}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => onToggle(chapter.id)}
              >
                <ChevronRight
                  size={16}
                  aria-hidden
                  className={`shrink-0 text-[#2a6cb5] transition-transform motion-reduce:transition-none ${open ? 'rotate-90' : ''}`}
                />
                <span className="min-w-0">
                  <span className="flex items-start text-xs leading-none font-semibold tracking-wide text-[#5c7288] uppercase">
                    <span className="whitespace-pre">Chapter </span>
                    <span className="relative -top-[3px] overflow-visible text-[calc(1em+6px)] leading-none font-[700] text-[#000]">{chapter.number}</span>
                    <span>{` · ${chapterDone}/${chapter.sections.length}`}</span>
                  </span>
                  <span className="block text-sm font-semibold text-[#14375f]">{subjectTitle(chapter.title)}</span>
                </span>
              </button>
              {open ? (
                <ul id={panelId} className="space-y-0.5 px-1 pb-2">
                  {chapter.sections.map((section) => {
                    const active = section.id === currentSectionId
                    return (
                      <li key={section.id}>
                        <Link
                          to={studyPath(test.id, section.id)}
                          aria-current={active ? 'page' : undefined}
                          onClick={(event) => onPick?.(section.id, event)}
                          className={`flex min-h-11 items-center gap-2 rounded-lg px-2 py-2 text-sm ${active ? 'bg-white font-semibold text-[#1f5a9a]' : 'text-[#24364a] hover:bg-[#f4f8fc]'}`}
                        >
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center">
                            {done.has(section.id) ? (
                              <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#dcfce7]">
                                <Check size={12} className="text-[#15803d]" aria-hidden />
                              </span>
                            ) : null}
                          </span>
                          <span>{subjectTitle(section.title)}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              ) : null}
            </div>
          )
        })}
      </div>
    </>
  )
}
