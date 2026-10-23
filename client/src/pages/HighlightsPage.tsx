import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { errorText } from '../api/client.ts'
import { DeleteHighlightDialog } from '../components/DeleteHighlightDialog.tsx'
import { Button } from '../components/ui/button.tsx'
import { flatSections } from '../content/pack.ts'
import { useHighlights } from '../study/HighlightContext.tsx'
import { anchorHighlight, highlightPreview, orderHighlights } from '../study/highlights.ts'

export function HighlightsPage() {
  const { highlights, ready, error, removeHighlight } = useHighlights()
  const [pendingDelete, setPendingDelete] = useState<{ id: string; text: string } | null>(null)
  const [deleting, setDeleting] = useState(false)
  const [deleteError, setDeleteError] = useState('')
  const deletingRef = useRef(false)
  const sections = flatSections()
  const ordered = orderHighlights(
    highlights,
    sections.map((section) => ({ id: section.id, chapterNumber: section.chapter.number })),
  )

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
      <h1 className="font-['Fraunces',Georgia,serif] text-3xl font-semibold text-[#14375f]">Highlights</h1>
      <p className="mt-2 text-[#3d5166]">Notes you saved from the study text. Open one to jump back to that spot.</p>
      {error ? <p className="mt-4 rounded-xl bg-[#fdecec] px-3 py-2 text-sm text-[#8d1d1d]">{error}</p> : null}
      {!ready ? <p className="mt-6 text-[#3d5166]">Loading highlights…</p> : null}
      {ready && ordered.length === 0 ? (
        <p className="mt-6 rounded-2xl bg-white px-4 py-5 text-[#3d5166]">
          No highlights yet. Select text in a study section and add it as a highlight.
        </p>
      ) : null}
      <ul className="mt-6 space-y-3">
        {ordered.map((row) => {
          const section = sections.find((item) => item.id === row.sectionId)
          const anchored = section ? anchorHighlight(section.body, row) : { status: 'missing' as const }
          const target = anchored.status === 'anchored' ? `/study/${row.sectionId}#h-${row.highlightId}` : `/study/${row.sectionId}`
          return (
            <li key={row.highlightId} className="rounded-2xl border border-[#d5e2f0] bg-white p-4">
              <Link className="block font-semibold break-words text-[#1c3f66] hover:underline" to={target}>
                {highlightPreview(row.text)}
              </Link>
              {anchored.status === 'missing' ? (
                <p className="mt-2 text-sm text-[#8d1d1d]">Text no longer in this section</p>
              ) : null}
              <p className="mt-2 text-sm break-words text-[#5c7288]">
                {section
                  ? `Chapter ${section.chapter.number}. ${section.chapter.title}`
                  : row.chapterId}
                {' · '}
                {section?.title ?? row.sectionId}
              </p>
              <Button
                className="mt-3 min-h-11"
                type="button"
                variant="outline"
                onClick={() => {
                  setDeleteError('')
                  setPendingDelete({ id: row.highlightId, text: row.text })
                }}
              >
                Delete
              </Button>
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
