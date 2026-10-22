import { useEffect, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { createAttempt, errorText, getSeen, type AttemptMode } from '../api/client.ts'
import { useAuth } from '../auth/AuthContext.tsx'
import { Button } from '../components/ui/button.tsx'
import { Card } from '../components/ui/card.tsx'
import { Input } from '../components/ui/input.tsx'
import { Label } from '../components/ui/label.tsx'
import { allQuestions } from '../content/pack.ts'
import { drawQuestions } from '../study/draw.ts'
import { reservedQuestionIds, saveDraw } from '../study/draws.ts'

export function PracticePage() {
  const { person } = useAuth()
  const navigate = useNavigate()
  const bank = allQuestions()
  const [mode, setMode] = useState<AttemptMode>('unseen')
  const [count, setCount] = useState(10)
  const [seenCount, setSeenCount] = useState(0)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [loading, setLoading] = useState(true)

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

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    if (!person) return
    setBusy(true)
    setError('')
    try {
      const seen = await getSeen()
      const seenIds = new Set(seen.questionIds)
      if (mode === 'unseen') {
        reservedQuestionIds(person.personId).forEach((id) => seenIds.add(id))
      }
      const drawn = drawQuestions(
        bank.map((question) => ({ id: question.id, optionIds: question.options.map((option) => option.id) })),
        seenIds,
        count,
        mode,
      )
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
      <h1 className="font-['Fraunces',Georgia,serif] text-3xl font-semibold text-[#14375f]">Practice test</h1>
      <p className="mt-2 text-[#3d5166]">
        Questions are drawn from all three chapters. The answer order is shuffled. This is one overall test, not a quiz for a
        single section.
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
          <Button type="submit" disabled={busy || loading}>
            {busy ? 'Starting…' : 'Start test'}
          </Button>
        </form>
      </Card>
    </div>
  )
}
