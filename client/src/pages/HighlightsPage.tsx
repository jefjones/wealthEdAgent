import { Play } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { errorText, getProgress, type SectionProgress } from '../api/client.ts'
import { ContentsButton } from '../components/ContentsButton.tsx'
import { DeleteHighlightDialog } from '../components/DeleteHighlightDialog.tsx'
import { NarrationBar } from '../components/NarrationBar.tsx'
import { SlideOver } from '../components/SlideOver.tsx'
import { StudyOutline } from '../components/StudyOutline.tsx'
import { Button } from '../components/ui/button.tsx'
import { flatSections } from '../content/pack.ts'
import { subjectTitle } from '../content/rewrite.ts'
import { cn } from '../lib/utils.ts'
import { useStudyNav } from '../study/studyNav.ts'
import { useHighlights } from '../study/HighlightContext.tsx'
import { anchorHighlight, highlightPreview, orderHighlights } from '../study/highlights.ts'
import { groupOrder, highlightNarrationCues, highlightSpeechParts, listNarrationStatus } from '../study/narrator.ts'
import { scrollNarrationTarget } from '../study/columnScroll.ts'
import { useNarration } from '../study/useNarration.ts'

export function HighlightsPage() {
  const { highlights, ready, error, removeHighlight } = useHighlights()
  const [pendingDelete, setPendingDelete] = useState<{ id: string; text: string } | null>(null)
  const [deleting, setDeleting] = useState(false)
  const [deleteError, setDeleteError] = useState('')
  const [contentsOpen, setContentsOpen] = useState(false)
  const [sectionFilter, setSectionFilter] = useState<string | null>(null)
  const [progress, setProgress] = useState<SectionProgress[]>([])
  const deletingRef = useRef(false)
  const { navOpen, toggleChapter } = useStudyNav()
  const sections = flatSections()
  const done = useMemo(() => new Set(progress.filter((row) => row.completed).map((row) => row.sectionId)), [progress])
  const cues = useMemo(() => {
    return highlightNarrationCues(
      highlights,
      flatSections().map((section) => ({
        id: section.id,
        title: subjectTitle(section.title),
        chapterNumber: section.chapter.number,
        body: section.body,
      })),
    )
  }, [highlights])
  const speechParts = useMemo(() => highlightSpeechParts(cues), [cues])
  const narration = useNarration('highlights', speechParts)
  const speechGroups = useMemo(() => groupOrder(speechParts), [speechParts])
  const narrationStatus =
    narration.supported && !ready
      ? 'Loading highlights…'
      : listNarrationStatus({
          supported: narration.supported,
          phase: narration.phase,
          anchor: narration.anchor,
          activeGroup: narration.activeGroup,
          groups: speechGroups,
          noun: 'highlight',
          empty: 'No highlights to read.',
          fromStart: 'Starts at the first highlight.',
        })

  useEffect(() => {
    let cancel = false
    getProgress()
      .then((result) => {
        if (!cancel) setProgress(result.sections)
      })
      .catch(() => {
        /* The highlight list still renders when reading progress cannot load. */
      })
    return () => {
      cancel = true
    }
  }, [])

  useEffect(() => {
    if (narration.phase !== 'speaking' || !narration.activeGroup || !sectionFilter) return
    const row = highlights.find((item) => item.highlightId === narration.activeGroup)
    if (row && row.sectionId !== sectionFilter) setSectionFilter(null)
  }, [narration.phase, narration.activeGroup, highlights, sectionFilter])

  useEffect(() => {
    if (narration.phase !== 'speaking' || !narration.activeGroup) return
    scrollNarrationTarget(document.getElementById(`narrate-${narration.activeGroup}`), 'start')
  }, [narration.phase, narration.activeGroup, sectionFilter])

  const ordered = orderHighlights(
    highlights,
    sections.map((section) => ({ id: section.id, chapterNumber: section.chapter.number })),
  )
  const visible = sectionFilter ? ordered.filter((row) => row.sectionId === sectionFilter) : ordered
  const filteredSection = sectionFilter ? sections.find((section) => section.id === sectionFilter) : null

  async function confirmDelete() {
    if (!pendingDelete || deletingRef.current) return
    const highlightId = pendingDelete.id
    deletingRef.current = true
    setDeleting(true)
    setDeleteError('')
    try {
      await removeHighlight(highlightId)
      setPendingDelete(null)
    } catch (cause) {
      setDeleteError(errorText(cause, 'Could not delete that highlight.'))
    } finally {
      deletingRef.current = false
      setDeleting(false)
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      <ContentsButton pressed={contentsOpen} onClick={() => setContentsOpen(true)} />
      <SlideOver open={contentsOpen} title="Contents" onClose={() => setContentsOpen(false)}>
        <button
          type="button"
          className="mb-2 flex min-h-11 w-full items-center rounded-xl px-2 text-left text-sm font-semibold text-[#14375f] hover:bg-[#f4f8fc]"
          onClick={() => {
            setSectionFilter(null)
            setContentsOpen(false)
          }}
        >
          All highlights
        </button>
        <StudyOutline
          idPrefix="highlights"
          navOpen={navOpen}
          onToggle={toggleChapter}
          done={done}
          currentSectionId={sectionFilter ?? undefined}
          onPick={(sectionId, event) => {
            event.preventDefault()
            setSectionFilter(sectionId)
            setContentsOpen(false)
          }}
        />
      </SlideOver>
      <h1 className="font-['Fraunces',Georgia,serif] text-3xl font-semibold text-[#14375f]">Highlights</h1>
      <p className="mt-2 text-[#3d5166]">
        Start reads every highlight on this page. It says the chapter and section, then the full saved text, then goes to the next row. The row opens while it is read. Tap one to begin there, or use Play.
      </p>
      <div className="mt-4">
        <NarrationBar
          supported={narration.supported}
          phase={narration.phase}
          rate={narration.rate}
          status={narrationStatus}
          stepName="highlight"
          startTitle="Start reading highlights from the one you chose, or from the first highlight"
          canPrevious={narration.canPrevious}
          canNext={narration.canNext}
          onStart={() => narration.start()}
          onStop={narration.stop}
          onPrevious={narration.previous}
          onNext={narration.next}
          onCycleRate={narration.cycleRate}
          voiceId={narration.voiceId}
          voices={narration.voices}
          showIosVoiceHint={narration.showIosVoiceHint}
          onVoiceChange={narration.chooseVoice}
          onPreviewVoice={narration.previewVoice}
        />
      </div>
      {filteredSection ? (
        <p className="mt-2 text-sm font-semibold text-[#1c3f66]">
          {`Chapter ${filteredSection.chapter.number}. ${subjectTitle(filteredSection.chapter.title)} · ${subjectTitle(filteredSection.title)}`}
        </p>
      ) : null}
      {error ? <p className="mt-4 rounded-xl bg-[#fdecec] px-3 py-2 text-sm text-[#8d1d1d]">{error}</p> : null}
      {!ready ? <p className="mt-6 text-[#3d5166]">Loading highlights…</p> : null}
      {ready && ordered.length === 0 ? (
        <p className="mt-6 rounded-2xl bg-white px-4 py-5 text-[#3d5166]">
          No highlights yet. Select text in a study section and add it as a highlight.
        </p>
      ) : null}
      {ready && ordered.length > 0 && visible.length === 0 ? (
        <p className="mt-6 rounded-2xl bg-white px-4 py-5 text-[#3d5166]">No highlights in this section.</p>
      ) : null}
      <ul className="mt-6 space-y-3">
        {visible.map((row) => {
          const section = sections.find((item) => item.id === row.sectionId)
          const anchored = section
            ? anchorHighlight(section.body, row)
            : { status: 'missing' as const }
          const readable = anchored.status === 'anchored'
          const target = readable ? `/study/${row.sectionId}#h-${row.highlightId}` : `/study/${row.sectionId}`
          const selected = narration.anchor === row.highlightId
          const active = narration.phase === 'speaking' && narration.activeGroup === row.highlightId
          return (
            <li
              key={row.highlightId}
              id={`narrate-${row.highlightId}`}
              aria-current={active ? 'true' : undefined}
              className={cn(
                'scroll-mt-4 scroll-mb-32 rounded-2xl border p-4 lg:scroll-mb-4',
                active ? 'border-[#2a6cb5] bg-[#e4f0fb]' : selected ? 'border-[#b7d0ea] bg-[#f4f8fc]' : 'border-[#d5e2f0] bg-white',
              )}
              onClick={(event) => {
                if (!readable) return
                const targetNode = event.target
                if (targetNode instanceof Element && targetNode.closest('a, button')) return
                narration.select(row.highlightId)
              }}
            >
              {active ? (
                <p className="whitespace-pre-wrap break-words text-[17px] leading-7 font-semibold text-[#14375f]">{row.text.trim()}</p>
              ) : readable ? (
                <button
                  type="button"
                  className="block min-h-11 w-full cursor-pointer text-left font-semibold break-words text-[#1c3f66]"
                  aria-label={
                    narration.phase === 'speaking'
                      ? `Jump reading to this highlight: ${highlightPreview(row.text)}`
                      : `Start reading from this highlight: ${highlightPreview(row.text)}`
                  }
                  title={narration.phase === 'speaking' ? 'Jump reading to this highlight' : 'Choose this highlight as the start'}
                  onClick={() => narration.select(row.highlightId)}
                >
                  {highlightPreview(row.text)}
                </button>
              ) : (
                <p className="font-semibold break-words text-[#1c3f66]">{highlightPreview(row.text)}</p>
              )}
              {anchored.status === 'missing' ? <p className="mt-2 text-sm text-[#8d1d1d]">Text no longer in this section</p> : null}
              <p className="mt-2 text-sm break-words text-[#5c7288]">
                {section ? `Chapter ${section.chapter.number}. ${subjectTitle(section.chapter.title)}` : row.chapterId}
                {' · '}
                {section ? subjectTitle(section.title) : row.sectionId}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button
                  className="min-h-11 min-w-11"
                  type="button"
                  variant="outline"
                  disabled={!readable}
                  aria-label="Read this highlight aloud"
                  title={readable ? 'Read this highlight aloud' : 'Text no longer in this section'}
                  onClick={() => narration.start(row.highlightId)}
                >
                  <Play size={16} aria-hidden />
                  Play
                </Button>
                <Link
                  className="inline-flex min-h-11 items-center rounded-full px-3 text-sm font-semibold text-[#2a6cb5] hover:underline"
                  to={target}
                >
                  Open in study
                </Link>
                <Button
                  className="min-h-11"
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setDeleteError('')
                    setPendingDelete({ id: row.highlightId, text: row.text })
                  }}
                >
                  Delete
                </Button>
              </div>
            </li>
          )
        })}
      </ul>
      {pendingDelete ? (
        <DeleteHighlightDialog
          text={pendingDelete.text}
          busy={deleting}
          error={deleteError}
          onCancel={() => {
            if (deletingRef.current) return
            setPendingDelete(null)
            setDeleteError('')
          }}
          onConfirm={() => void confirmDelete()}
        />
      ) : null}
    </div>
  )
}
