import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useMemo, useRef, useState, type MouseEvent, type PointerEvent } from 'react'
import { Link, Navigate, useLocation, useNavigate, useParams } from 'react-router-dom'
import { errorText, getProgress, onStudyFeatureReady, saveProgress, type SectionProgress } from '../api/client.ts'
import { useAuth } from '../auth/AuthContext.tsx'
import { ContentsButton } from '../components/ContentsButton.tsx'
import { DeleteHighlightDialog } from '../components/DeleteHighlightDialog.tsx'
import { HighlightOffer, HighlightSavedNotice } from '../components/HighlightOffer.tsx'
import { Prose } from '../components/Prose.tsx'
import { SlideOver } from '../components/SlideOver.tsx'
import { StudyOutline } from '../components/StudyOutline.tsx'
import { NarrationBar } from '../components/NarrationBar.tsx'
import { Button } from '../components/ui/button.tsx'
import { flatSections } from '../content/pack.ts'
import { loadResume, saveResume } from '../study/draws.ts'
import { useStudyNav } from '../study/studyNav.ts'
import { useHighlights } from '../study/HighlightContext.tsx'
import { groupOrder, listNarrationStatus, sentenceParts, splitSentences } from '../study/narrator.ts'
import { scrollNarrationTarget, useNarration } from '../study/useNarration.ts'
import {
  HIGHLIGHT_NOTICE_MS,
  HIGHLIGHT_TEXT_MAX,
  anchorHighlight,
  bodyOffsetFromDom,
  highlightArrowControls,
  highlightPopupOffer,
  highlightSavedMessage,
  orderHighlights,
  type ViewportRect,
} from '../study/highlights.ts'

type Offer = { start: number; end: number; text: string; rect: ViewportRect }

export function StudyIndex() {
  const { person } = useAuth()
  const sections = flatSections()
  if (!person) return null
  const saved = loadResume(person.personId)
  const target = sections.some((section) => section.id === saved) ? saved : sections[0]?.id
  if (!target) return <p>No study sections are loaded.</p>
  return <Navigate to={`/study/${target}`} replace />
}

export function StudyPage() {
  const { sectionId = '' } = useParams()
  const location = useLocation()
  const { person } = useAuth()
  const navigate = useNavigate()
  const sections = flatSections()
  const current = sections.find((section) => section.id === sectionId) ?? null
  const index = sections.findIndex((section) => section.id === sectionId)
  const [rows, setRows] = useState<SectionProgress[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)
  const [draft, setDraft] = useState<Offer | null>(null)
  const [adding, setAdding] = useState(false)
  const [notice, setNotice] = useState(false)
  const [noticeTick, setNoticeTick] = useState(0)
  const [pendingDelete, setPendingDelete] = useState<{ id: string; text: string } | null>(null)
  const [deleting, setDeleting] = useState(false)
  const [deleteError, setDeleteError] = useState('')
  const deletingRef = useRef(false)
  const proseRef = useRef<HTMLDivElement>(null)
  const draftRef = useRef<Offer | null>(null)
  const pinned = useRef<Offer | null>(null)
  const holdingOffer = useRef(false)
  const addingRef = useRef(false)
  draftRef.current = draft
  const { highlights, addHighlight, removeHighlight } = useHighlights()
  const chapterId = current?.chapter.id ?? ''
  const { navOpen, toggleChapter } = useStudyNav(chapterId)
  const [contentsOpen, setContentsOpen] = useState(false)
  const sectionBody = current?.body ?? ''
  const sentences = useMemo(() => splitSentences(sectionBody), [sectionBody])
  const speechParts = useMemo(() => sentenceParts(sentences), [sentences])
  const narration = useNarration(sectionId, speechParts)
  const speechGroups = useMemo(() => groupOrder(speechParts), [speechParts])
  const narrationStatus = listNarrationStatus({
    supported: narration.supported,
    phase: narration.phase,
    anchor: narration.anchor,
    activeGroup: narration.activeGroup,
    groups: speechGroups,
    noun: 'sentence',
    empty: 'This section has nothing to read.',
    fromStart: 'Starts at the top of this section.',
  })
  const activeSentence =
    narration.activeGroup != null && Number.isInteger(Number(narration.activeGroup)) ? Number(narration.activeGroup) : null
  const selectedSentence = narration.anchor != null && Number.isInteger(Number(narration.anchor)) ? Number(narration.anchor) : null

  useEffect(() => {
    if (narration.phase !== 'speaking' || narration.activeGroup == null) return
    scrollNarrationTarget(proseRef.current?.querySelector(`[data-sentence="${narration.activeGroup}"]`) ?? null)
  }, [narration.phase, narration.activeGroup])

  useEffect(() => {
    let cancel = false
    setLoading(true)
    setError('')
    getProgress()
      .then((result) => {
        if (!cancel) setRows(result.sections)
      })
      .catch((cause: unknown) => {
        if (!cancel) setError(errorText(cause, 'Could not load reading progress.'))
      })
      .finally(() => {
        if (!cancel) setLoading(false)
      })
    return () => {
      cancel = true
    }
  }, [])

  useEffect(
    () =>
      onStudyFeatureReady((feature) => {
        if (feature !== 'progress') return
        void getProgress()
          .then((result) => setRows(result.sections))
          .catch(() => {
            /* The next visit loads progress again. */
          })
      }),
    [],
  )

  useEffect(() => {
    if (person && current) saveResume(person.personId, current.id)
  }, [current, person])

  useEffect(() => {
    setDraft(null)
    setNotice(false)
    setPendingDelete(null)
    setDeleteError('')
  }, [sectionId])

  useEffect(() => {
    if (!notice) return
    const id = window.setTimeout(() => setNotice(false), HIGHLIGHT_NOTICE_MS)
    return () => window.clearTimeout(id)
  }, [notice, noticeTick])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key !== 'Escape') return
      if (draftRef.current) {
        event.preventDefault()
        pinned.current = null
        holdingOffer.current = false
        setDraft(null)
        window.getSelection()?.removeAllRanges()
        return
      }
      if (notice) {
        event.preventDefault()
        setNotice(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [notice])

  useEffect(() => {
    const root = proseRef.current
    if (!root || !current) return
    const body = current.body
    const ranges = highlights.flatMap((row) => {
      if (row.sectionId !== current.id) return []
      const anchored = anchorHighlight(body, row)
      return anchored.status === 'anchored' ? [anchored] : []
    })
    function sameRect(a: ViewportRect, b: ViewportRect) {
      return (
        Math.abs(a.top - b.top) < 0.5 &&
        Math.abs(a.left - b.left) < 0.5 &&
        Math.abs(a.bottom - b.bottom) < 0.5 &&
        Math.abs(a.right - b.right) < 0.5
      )
    }
    function publish(next: Offer | null) {
      setDraft((existing) => {
        if (next == null) return existing == null ? existing : null
        if (
          existing &&
          existing.start === next.start &&
          existing.end === next.end &&
          existing.text === next.text &&
          sameRect(existing.rect, next.rect)
        ) {
          return existing
        }
        return next
      })
    }
    function retainOffer() {
      return holdingOffer.current || Boolean(document.activeElement?.closest('[data-highlight-offer]'))
    }
    function readSelection() {
      if (!root) return
      const selection = document.getSelection()
      const hasRange = Boolean(selection && selection.rangeCount > 0 && !selection.isCollapsed)
      const anchorNode = selection?.anchorNode ?? null
      const focusNode = selection?.focusNode ?? null
      const insideSection = Boolean(anchorNode && focusNode && root.contains(anchorNode) && root.contains(focusNode))
      const start =
        hasRange && insideSection && anchorNode ? bodyOffsetFromDom(root, anchorNode, selection?.anchorOffset ?? 0) : null
      const end = hasRange && insideSection && focusNode ? bodyOffsetFromDom(root, focusNode, selection?.focusOffset ?? 0) : null
      const offer = highlightPopupOffer(body, { hasRange, insideSection, start, end }, ranges)
      if (!offer || !selection || selection.rangeCount === 0) {
        if (retainOffer()) return
        publish(null)
        return
      }
      const rect = selection.getRangeAt(0).getBoundingClientRect()
      publish({ ...offer, rect: { top: rect.top, right: rect.right, bottom: rect.bottom, left: rect.left } })
    }
    function onPointerDown(event: globalThis.PointerEvent) {
      const target = event.target
      if (target instanceof Element && target.closest('[data-highlight-offer]')) return
      holdingOffer.current = false
    }
    function onPointerRelease() {
      readSelection()
      holdingOffer.current = false
    }
    function onFocusIn(event: FocusEvent) {
      const target = event.target
      if (target instanceof Element && target.closest('[data-highlight-offer]')) return
      const selection = document.getSelection()
      const alive = Boolean(selection && selection.rangeCount > 0 && !selection.isCollapsed)
      if (!alive) {
        holdingOffer.current = false
        publish(null)
      }
    }
    readSelection()
    document.addEventListener('selectionchange', readSelection)
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('pointerup', onPointerRelease)
    document.addEventListener('pointercancel', onPointerRelease)
    document.addEventListener('touchend', readSelection)
    document.addEventListener('keyup', readSelection)
    document.addEventListener('focusin', onFocusIn)
    window.addEventListener('resize', readSelection)
    document.addEventListener('scroll', readSelection, true)
    return () => {
      document.removeEventListener('selectionchange', readSelection)
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('pointerup', onPointerRelease)
      document.removeEventListener('pointercancel', onPointerRelease)
      document.removeEventListener('touchend', readSelection)
      document.removeEventListener('keyup', readSelection)
      document.removeEventListener('focusin', onFocusIn)
      window.removeEventListener('resize', readSelection)
      document.removeEventListener('scroll', readSelection, true)
    }
  }, [current, highlights])

  useEffect(() => {
    const id = location.hash.replace(/^#/, '')
    if (!id) return
    document.getElementById(id)?.scrollIntoView({ block: 'center' })
  }, [sectionId, highlights, location.hash])

  if (!current) {
    return (
      <div className="rounded-2xl bg-white p-6">
        <p>That section is not in the course.</p>
        <Link className="mt-3 inline-block font-semibold text-[#2a6cb5]" to="/study">
          Back to the first section
        </Link>
      </div>
    )
  }

  const done = new Set(rows.filter((row) => row.completed).map((row) => row.sectionId))
  const previous = index > 0 ? sections[index - 1] : null
  const next = index < sections.length - 1 ? sections[index + 1] : null
  const marked = done.has(current.id)
  const jumpControls = highlightArrowControls(
    orderHighlights(
      highlights.flatMap((row) => {
        const section = sections.find((item) => item.id === row.sectionId)
        if (!section) return []
        const anchored = anchorHighlight(section.body, row)
        if (anchored.status !== 'anchored') return []
        return [
          {
            highlightId: row.highlightId,
            sectionId: row.sectionId,
            sectionTitle: section.title,
            sectionIndex: sections.findIndex((item) => item.id === row.sectionId),
            startOffset: anchored.startOffset,
          },
        ]
      }),
      sections.map((section) => ({ id: section.id, chapterNumber: section.chapter.number })),
    ),
  )

  function pinDraft(event: PointerEvent<HTMLElement> | MouseEvent<HTMLElement>) {
    event.preventDefault()
    pinned.current = draftRef.current
    holdingOffer.current = true
  }

  function dismissOffer() {
    pinned.current = null
    holdingOffer.current = false
    setDraft(null)
    window.getSelection()?.removeAllRanges()
  }

  async function confirmDelete() {
    if (!pendingDelete || deletingRef.current) return
    const highlightId = pendingDelete.id
    deletingRef.current = true
    setDeleting(true)
    setDeleteError('')
    try {
      await removeHighlight(highlightId)
      setDraft(null)
      window.getSelection()?.removeAllRanges()
      setPendingDelete(null)
    } catch (cause) {
      setDeleteError(errorText(cause, 'Could not delete that highlight.'))
    } finally {
      deletingRef.current = false
      setDeleting(false)
    }
  }

  async function addFromSelection() {
    if (addingRef.current) return
    const picked = pinned.current ?? draftRef.current
    pinned.current = null
    if (!picked || !current) return
    if (picked.text.length > HIGHLIGHT_TEXT_MAX) {
      setError('A highlight can be at most 2000 characters.')
      return
    }
    addingRef.current = true
    setAdding(true)
    setError('')
    try {
      const created = await addHighlight({
        chapterId: current.chapter.id,
        sectionId: current.id,
        startOffset: picked.start,
        endOffset: picked.end,
        text: picked.text,
      })
      holdingOffer.current = false
      setDraft(null)
      window.getSelection()?.removeAllRanges()
      setNoticeTick((tick) => tick + 1)
      setNotice(true)
      navigate(`/study/${current.id}#h-${created.highlightId}`, { replace: true })
    } catch (cause) {
      setError(errorText(cause, 'Could not save that highlight.'))
    } finally {
      addingRef.current = false
      setAdding(false)
    }
  }

  async function toggleComplete() {
    setSaving(true)
    setError('')
    try {
      const result = await saveProgress(current!.chapter.id, current!.id, !marked)
      setRows((existing) => {
        const rest = existing.filter((row) => row.sectionId !== result.section.sectionId)
        return [...rest, result.section]
      })
    } catch (cause) {
      setError(errorText(cause, 'Could not save this section.'))
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
      <ContentsButton pressed={contentsOpen} onClick={() => setContentsOpen(true)} />
      <SlideOver open={contentsOpen} title="Contents" onClose={() => setContentsOpen(false)}>
        <StudyOutline
          idPrefix="mobile"
          navOpen={navOpen}
          onToggle={toggleChapter}
          done={done}
          loading={loading}
          currentSectionId={current.id}
          onPick={() => setContentsOpen(false)}
        />
      </SlideOver>
      <aside className="hidden lg:sticky lg:top-4 lg:block lg:self-start">
        <div className="rounded-2xl border border-[#d5e2f0] bg-white p-4">
          <StudyOutline
            idPrefix="desktop"
            navOpen={navOpen}
            onToggle={toggleChapter}
            done={done}
            loading={loading}
            currentSectionId={current.id}
          />
        </div>
      </aside>
      <article className="min-w-0 rounded-2xl border border-[#d5e2f0] bg-white p-5 sm:p-8">
        <p className="text-sm font-semibold text-[#2a6cb5]">
          Chapter {current.chapter.number} · {current.chapter.title}
        </p>
        <h1 className="mt-1 font-['Fraunces',Georgia,serif] text-3xl font-semibold text-[#14375f]">{current.title}</h1>
        {marked ? <p className="mt-2 text-sm text-[#5c7288]">Marked complete</p> : null}
        {error ? <p className="mt-4 rounded-xl bg-[#fdecec] px-3 py-2 text-sm text-[#8d1d1d]">{error}</p> : null}
        <div className="mt-4">
          <NarrationBar
            supported={narration.supported}
            phase={narration.phase}
            rate={narration.rate}
            status={narrationStatus}
            stepName="sentence"
            startTitle="Start reading aloud from the sentence you chose, or from the top of the section"
            canPrevious={narration.canPrevious}
            canNext={narration.canNext}
            onStart={() => narration.start()}
            onStop={narration.stop}
            onPrevious={narration.previous}
            onNext={narration.next}
            onCycleRate={narration.cycleRate}
          />
        </div>
        <div ref={proseRef} className="mt-6 select-text" style={{ WebkitUserSelect: 'text', userSelect: 'text' }}>
          <Prose
            text={current.body}
            sentences={sentences}
            selectedSentence={selectedSentence}
            activeSentence={narration.phase === 'speaking' ? activeSentence : null}
            onSentenceTap={narration.supported ? (index) => narration.select(String(index)) : undefined}
            highlights={highlights.flatMap((row) => {
              if (row.sectionId !== current.id) return []
              const anchored = anchorHighlight(current.body, row)
              if (anchored.status !== 'anchored') return []
              return [{ highlightId: row.highlightId, startOffset: anchored.startOffset, endOffset: anchored.endOffset }]
            })}
            jumps={jumpControls}
            onJump={(href) => navigate(href)}
            onDelete={(highlightId) => {
              const row = highlights.find((item) => item.highlightId === highlightId)
              setDeleteError('')
              setPendingDelete({ id: highlightId, text: row?.text ?? '' })
            }}
          />
        </div>
        {draft ? (
          <HighlightOffer
            rect={draft.rect}
            textLength={draft.text.length}
            adding={adding}
            onPointerDown={pinDraft}
            onConfirm={() => void addFromSelection()}
            onDismiss={dismissOffer}
          />
        ) : null}
        <HighlightSavedNotice open={notice} message={highlightSavedMessage()} onDismiss={() => setNotice(false)} />
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
        <div className="mt-8 flex flex-col gap-3 border-t border-[#e4eef7] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <Button type="button" variant={marked ? 'outline' : 'default'} disabled={saving} onClick={() => void toggleComplete()}>
            {saving ? 'Saving…' : marked ? 'Mark as not complete' : 'Mark section complete'}
          </Button>
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              disabled={!previous}
              onClick={() => previous && navigate(`/study/${previous.id}`)}
            >
              <ChevronLeft size={16} />
              Previous
            </Button>
            <Button type="button" variant="outline" disabled={!next} onClick={() => next && navigate(`/study/${next.id}`)}>
              Next
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
}

