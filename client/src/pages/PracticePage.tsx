import { useEffect, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { createAttempt, errorText, getSeen, onStudyFeatureReady, type AttemptMode } from '../api/client.ts'
import { useAuth } from '../auth/AuthContext.tsx'
import { ContentsButton } from '../components/ContentsButton.tsx'
import { SlideOver } from '../components/SlideOver.tsx'
import { Button } from '../components/ui/button.tsx'
import { Card } from '../components/ui/card.tsx'
import { Input } from '../components/ui/input.tsx'
import { Label } from '../components/ui/label.tsx'
import { studyPack } from '../content/pack.ts'
import { subjectTitle } from '../content/rewrite.ts'
import { drawQuestions } from '../study/draw.ts'
import { reservedQuestionIds, saveDraw } from '../study/draws.ts'
import { chapterSelectionError, questionsInChapters } from '../study/testSession.ts'

export function PracticePage() {
  const { person } = useAuth()
  const navigate = useNavigate()
  const chapters = studyPack.chapters
  const bank = chapters.flatMap((chapter) =>
    chapter.sections.flatMap((section) =>
      section.questions.map((question) => ({
        id: question.id,
        chapterId: chapter.id,
        optionIds: question.options.map((option) => option.id),
      })),
    ),
  )
  const [mode, setMode] = useState<AttemptMode>('unseen')
  const [count, setCount] = useState(10)
  const [selected, setSelected] = useState<string[]>(() => chapters.map((chapter) => chapter.id))
  const [seenCount, setSeenCount] = useState(0)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [loading, setLoading] = useState(true)
  const [contentsOpen, setContentsOpen] = useState(false)

  useEffect(() => {
    let cancel = false
    getSeen()
      .then((result) => {
        if (!cancel) setSeenCount(result.questionIds.length)
      })
      .catch((cause: unknown) => {
        if (!cancel) setError(errorText(cause, 'Could not load which questions you have seen.'))
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
        if (feature !== 'seen') return
        void getSeen()
          .then((result) => setSeenCount(result.questionIds.length))
          .catch(() => {
            /* The count stays at the last value. */
          })
      }),
    [],
  )

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    if (!person) return
    const selectionError = chapterSelectionError(selected)
    if (selectionError) {
      setError(selectionError)
      return
    }
    setBusy(true)
    setError('')
    try {
      const seen = await getSeen()
      const seenIds = new Set(seen.questionIds)
      if (mode === 'unseen') {
        reservedQuestionIds(person.personId).forEach((id) => seenIds.add(id))
      }
      const pool = questionsInChapters(bank, selected)
      const drawn = drawQuestions(pool, seenIds, count, mode)
      const created = await createAttempt({ mode, questionCount: count })
      saveDraw(person.personId, created.attempt.attemptId, {
        questionIds: drawn.map((row) => row.questionId),
        optionOrder: Object.fromEntries(drawn.map((row) => [row.questionId, row.optionOrder])),
      })
      navigate(`/test/${created.attempt.attemptId}`)
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : errorText(cause, 'Could not start the test.'))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="mx-auto max-w-xl">
      <ContentsButton pressed={contentsOpen} onClick={() => setContentsOpen(true)} />
      <SlideOver open={contentsOpen} title="Chapters" onClose={() => setContentsOpen(false)}>
        <ChapterChoices chapters={chapters} selected={selected} onChange={setSelected} />
        <Button type="button" className="mt-4 w-full" onClick={() => setContentsOpen(false)}>
          Done
        </Button>
      </SlideOver>
      <h1 className="font-['Fraunces',Georgia,serif] text-3xl font-semibold text-[#14375f]">Practice test</h1>
      <p className="mt-2 text-[#3d5166]">
        Choose the chapters to include. The test draws only from the chapters you check, and the answer order is shuffled.
      </p>
      <p className="mt-2 text-sm text-[#3d5166] lg:hidden">
        {selected.length === chapters.length
          ? `All ${chapters.length} chapters are included. Open Contents to change them.`
          : `${selected.length} of ${chapters.length} chapters are included. Open Contents to change them.`}
      </p>
      <Card className="mt-6 p-6">
        <p className="text-sm text-[#3d5166]">
          {loading
            ? 'Checking your question history…'
            : `${seenCount} of ${bank.length} questions seen on your account. The bank has ${bank.length} questions.`}
        </p>
        <form className="mt-5 space-y-5" onSubmit={onSubmit}>
          <fieldset>
            <legend className="text-sm font-semibold text-[#24364a]">Which questions</legend>
            <div className="mt-2 space-y-2">
              <label className="flex items-start gap-2 text-sm">
                <input type="radio" name="mode" checked={mode === 'unseen'} onChange={() => setMode('unseen')} />
                <span>Unseen questions only</span>
              </label>
              <label className="flex items-start gap-2 text-sm">
                <input type="radio" name="mode" checked={mode === 'any'} onChange={() => setMode('any')} />
                <span>Any questions</span>
              </label>
            </div>
          </fieldset>
          <fieldset className="hidden lg:block">
            <legend className="text-sm font-semibold text-[#24364a]">Chapters</legend>
            <div className="mt-2">
              <ChapterChoices chapters={chapters} selected={selected} onChange={setSelected} />
            </div>
          </fieldset>
          <div className="space-y-1.5">
            <Label htmlFor="count">Number of questions</Label>
            <Input
              id="count"
              type="number"
              min={1}
              max={500}
              value={count}
              onChange={(event) => setCount(Number(event.target.value))}
              required
            />
          </div>
          {error ? (
            <p className="rounded-xl bg-[#fdecec] px-3 py-2 text-sm text-[#8d1d1d]" role="alert">
              {error}
            </p>
          ) : null}
          <Button type="submit" disabled={busy || loading || selected.length === 0}>
            {busy ? 'Starting…' : 'Start test'}
          </Button>
        </form>
      </Card>
    </div>
  )
}

function ChapterChoices({
  chapters,
  selected,
  onChange,
}: {
  chapters: Array<{ id: string; number: number; title: string }>
  selected: string[]
  onChange: (next: string[]) => void
}) {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Button type="button" variant="outline" onClick={() => onChange(chapters.map((chapter) => chapter.id))}>
          Select all
        </Button>
        <Button type="button" variant="outline" onClick={() => onChange([])}>
          Select none
        </Button>
      </div>
      <div className="mt-3 space-y-2">
        {chapters.map((chapter) => {
          const checked = selected.includes(chapter.id)
          return (
            <label key={chapter.id} className="flex min-h-11 items-center gap-3 rounded-xl border border-[#d5e2f0] px-3 py-2 text-sm">
              <input
                className="h-4 w-4 shrink-0"
                type="checkbox"
                checked={checked}
                onChange={() =>
                  onChange(selected.includes(chapter.id) ? selected.filter((id) => id !== chapter.id) : [...selected, chapter.id])
                }
              />
              <span>
                Chapter {chapter.number}. {subjectTitle(chapter.title)}
              </span>
            </label>
          )
        })}
      </div>
      {selected.length === 0 ? (
        <p className="mt-3 rounded-xl bg-[#fdecec] px-3 py-2 text-sm text-[#8d1d1d]" role="alert">
          Choose at least one chapter.
        </p>
      ) : null}
    </>
  )
}
