import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { errorText, getProgress, saveProgress, type SectionProgress } from '../api/client.ts'
import { useAuth } from '../auth/AuthContext.tsx'
import { Prose } from '../components/Prose.tsx'
import { Button } from '../components/ui/button.tsx'
import { flatSections, studyPack } from '../content/pack.ts'
import { percent } from '../lib/utils.ts'
import { loadResume, saveResume } from '../study/draws.ts'

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
  const { person } = useAuth()
  const navigate = useNavigate()
  const sections = flatSections()
  const current = sections.find((section) => section.id === sectionId) ?? null
  const index = sections.findIndex((section) => section.id === sectionId)
  const [rows, setRows] = useState<SectionProgress[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)

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

  useEffect(() => {
    if (person && current) saveResume(person.personId, current.id)
  }, [current, person])

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
  const completedCount = sections.filter((section) => done.has(section.id)).length
  const previous = index > 0 ? sections[index - 1] : null
  const next = index < sections.length - 1 ? sections[index + 1] : null
  const marked = done.has(current.id)

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
      <aside className="lg:sticky lg:top-4 lg:self-start">
        <div className="rounded-2xl border border-[#d5e2f0] bg-white p-4">
          <p className="text-sm font-semibold text-[#1c3f66]">
            Reading progress {loading ? '…' : `${percent(completedCount, sections.length)}%`}
          </p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e4eef7]">
            <div
              className="h-full rounded-full bg-[#2a6cb5]"
              style={{ width: `${percent(completedCount, sections.length)}%` }}
            />
          </div>
          <div className="mt-4 space-y-4">
            {studyPack.chapters.map((chapter) => {
              const chapterDone = chapter.sections.filter((section) => done.has(section.id)).length
              return (
                <div key={chapter.id}>
                  <p className="text-xs font-semibold tracking-wide text-[#5c7288] uppercase">
                    Chapter {chapter.number} · {chapterDone}/{chapter.sections.length}
                  </p>
                  <p className="text-sm font-semibold text-[#14375f]">{chapter.title}</p>
                  <ul className="mt-1 space-y-0.5">
                    {chapter.sections.map((section) => {
                      const active = section.id === current.id
                      return (
                        <li key={section.id}>
                          <Link
                            to={`/study/${section.id}`}
                            className={`flex items-start gap-2 rounded-lg px-2 py-1.5 text-sm ${active ? 'bg-[#e7f1fb] font-semibold text-[#1f5a9a]' : 'text-[#24364a] hover:bg-[#f4f8fc]'}`}
                          >
                            <span className="mt-0.5 w-4 shrink-0">
                              {done.has(section.id) ? <Check size={14} className="text-[#157a43]" /> : null}
                            </span>
                            <span>{section.title}</span>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </aside>
      <article className="min-w-0 rounded-2xl border border-[#d5e2f0] bg-white p-5 sm:p-8">
        <p className="text-sm font-semibold text-[#2a6cb5]">
          Chapter {current.chapter.number} · {current.chapter.title}
        </p>
        <h1 className="mt-1 font-['Fraunces',Georgia,serif] text-3xl font-semibold text-[#14375f]">{current.title}</h1>
        <p className="mt-2 text-sm text-[#5c7288]">
          Section {index + 1} of {sections.length}
          {marked ? ' · Marked complete' : ''}
        </p>
        {error ? <p className="mt-4 rounded-xl bg-[#fdecec] px-3 py-2 text-sm text-[#8d1d1d]">{error}</p> : null}
        <div className="mt-6">
          <Prose text={current.body} />
        </div>
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
