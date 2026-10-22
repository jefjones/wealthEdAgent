import { Check, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  completeAttempt,
  errorText,
  getAttempt,
  submitAnswer,
  type Answer,
  type Attempt,
} from '../api/client.ts'
import { useAuth } from '../auth/AuthContext.tsx'
import { Button } from '../components/ui/button.tsx'
import { correctOptionId, findQuestion } from '../content/pack.ts'
import { formatLocal, formatPercent } from '../lib/utils.ts'
import { loadDraw, type Draw } from '../study/draws.ts'

type View = 'loading' | 'question' | 'feedback' | 'finish' | 'summary' | 'review'

export function TestPage() {
  const { attemptId = '' } = useParams()
  const { person } = useAuth()
  const [attempt, setAttempt] = useState<Attempt | null>(null)
  const [answers, setAnswers] = useState<Answer[]>([])
  const [draw, setDraw] = useState<Draw | null>(null)
  const [index, setIndex] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const [view, setView] = useState<View>('loading')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (!person) return
    let cancel = false
    setView('loading')
    setError('')
    getAttempt(attemptId)
      .then((result) => {
        if (cancel) return
        const stored = loadDraw(person.personId, attemptId)
        setAttempt(result.attempt)
        setAnswers(result.answers)
        setDraw(stored)
        if (!stored) {
          setView('summary')
          return
        }
        if (result.attempt.completedAt) {
          setView('summary')
          return
        }
        const open = stored.questionIds.findIndex((id) => !result.answers.some((answer) => answer.questionId === id))
        if (open === -1) setView('finish')
        else {
          setIndex(open)
          setView('question')
        }
      })
      .catch((cause: unknown) => {
        if (!cancel) {
          setError(errorText(cause, 'Could not open this test.'))
          setView('summary')
        }
      })
    return () => {
      cancel = true
    }
  }, [attemptId, person])

  const question = useMemo(() => {
    const id = draw?.questionIds[index]
    return id ? findQuestion(id) : null
  }, [draw, index])

  const orderedOptions = useMemo(() => {
    if (!question || !draw) return []
    const order = draw.optionOrder[question.id] ?? question.options.map((option) => option.id)
    return order
      .map((id) => question.options.find((option) => option.id === id))
      .filter((option): option is (typeof question.options)[number] => Boolean(option))
  }, [draw, question])

  const currentAnswer = answers.find((answer) => answer.questionId === question?.id) ?? null

  async function submit() {
    if (!question || !picked) return
    setBusy(true)
    setError('')
    try {
      const result = await submitAnswer(attemptId, question.id, {
        chosenOptionId: picked,
        correctOptionId: correctOptionId(question),
      })
      setAnswers((existing) => {
        const rest = existing.filter((answer) => answer.questionId !== result.answer.questionId)
        return [...rest, result.answer]
      })
      setAttempt(result.attempt)
      setView('feedback')
    } catch (cause) {
      setError(errorText(cause, 'Could not save that answer.'))
    } finally {
      setBusy(false)
    }
  }

  function goNext() {
    if (!draw) return
    const nextIndex = draw.questionIds.findIndex(
      (id, position) => position > index && !answers.some((answer) => answer.questionId === id),
    )
    if (nextIndex === -1) setView('finish')
    else {
      setIndex(nextIndex)
      setPicked(null)
      setView('question')
    }
  }

  async function finish() {
    setBusy(true)
    setError('')
    try {
      const result = await completeAttempt(attemptId)
      setAttempt(result.attempt)
      setView('summary')
    } catch (cause) {
      setError(errorText(cause, 'Could not finish the test.'))
    } finally {
      setBusy(false)
    }
  }

  if (view === 'loading') {
    return <p className="text-[#3d5166]">Loading the test…</p>
  }

  if (!attempt) {
    return <p className="rounded-xl bg-[#fdecec] px-3 py-2 text-sm text-[#8d1d1d]">{error || 'This test could not be opened.'}</p>
  }

  if (!draw) {
    return (
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-6">
        <h1 className="font-['Fraunces',Georgia,serif] text-3xl font-semibold text-[#14375f]">Test record</h1>
        <ScoreBlock attempt={attempt} />
        <p className="mt-4 text-sm text-[#3d5166]">
          The question list for this attempt is stored in the browser that started it, so the answer review is not available here.
        </p>
        <Link className="mt-4 inline-block font-semibold text-[#2a6cb5]" to="/progress">
          Back to progress
        </Link>
      </div>
    )
  }

  if (view === 'finish') {
    return (
      <div className="mx-auto max-w-xl rounded-2xl bg-white p-6">
        <h1 className="font-['Fraunces',Georgia,serif] text-3xl font-semibold text-[#14375f]">All questions answered</h1>
        <p className="mt-2 text-[#3d5166]">Finish the test to record the score.</p>
        {error ? <p className="mt-4 rounded-xl bg-[#fdecec] px-3 py-2 text-sm text-[#8d1d1d]">{error}</p> : null}
        <Button className="mt-5" type="button" disabled={busy} onClick={() => void finish()}>
          {busy ? 'Finishing…' : 'See results'}
        </Button>
      </div>
    )
  }

  if (view === 'summary' || view === 'review') {
    return (
      <Summary
        attempt={attempt}
        answers={answers}
        draw={draw}
        reviewIndex={view === 'review' ? index : null}
        error={error}
        onOpen={(position) => {
          setIndex(position)
          setView('review')
        }}
        onBack={() => setView('summary')}
      />
    )
  }

  if (!question) return <p>That question is not in the study bank.</p>

  const revealed = view === 'feedback'
  const chosenId = revealed ? (currentAnswer?.chosenOptionId ?? picked) : picked

  return (
    <div className="mx-auto max-w-2xl">
      <p className="text-sm font-semibold text-[#2a6cb5]">
        Question {index + 1} of {draw.questionIds.length}
      </p>
      <h1 className="mt-2 font-['Fraunces',Georgia,serif] text-2xl font-semibold text-[#14375f] sm:text-3xl">{question.stem}</h1>
      <div className="mt-5 space-y-3">
        {orderedOptions.map((option) => {
          const selected = chosenId === option.id
          const showCorrect = revealed && option.correct
          const showWrong = revealed && selected && !option.correct
          return (
            <button
              key={option.id}
              type="button"
              disabled={revealed}
              onClick={() => setPicked(option.id)}
              className={`flex w-full items-start gap-3 rounded-2xl border px-4 py-3 text-left text-[15px] ${
                showCorrect
                  ? 'border-[#157a43] bg-[#e8f6ee]'
                  : showWrong
                    ? 'border-[#c43535] bg-[#fdecec]'
                    : selected
                      ? 'border-[#2a6cb5] bg-[#e7f1fb]'
                      : 'border-[#d5e2f0] bg-white hover:border-[#9eb8d2]'
              }`}
            >
              <span className="mt-0.5">
                {showCorrect ? <Check className="text-[#157a43]" size={18} /> : null}
                {showWrong ? <X className="text-[#c43535]" size={18} /> : null}
                {!showCorrect && !showWrong ? (
                  <span
                    className={`block h-4 w-4 rounded-full border ${selected ? 'border-[#2a6cb5] bg-[#2a6cb5]' : 'border-[#9eb8d2]'}`}
                  />
                ) : null}
              </span>
              <span>{option.text}</span>
            </button>
          )
        })}
      </div>
      {revealed ? (
        <div className="mt-5 rounded-2xl bg-white p-4">
          <p className={`text-lg font-semibold ${currentAnswer?.isCorrect ? 'text-[#157a43]' : 'text-[#c43535]'}`}>
            {currentAnswer?.isCorrect ? 'Correct' : 'Incorrect'}
          </p>
          <div className="mt-3 space-y-3 text-sm leading-6 text-[#24364a]">
            {question.options.map((option) => (
              <p key={option.id}>
                <span className="font-semibold">{option.correct ? 'Why this is right: ' : 'Why this is wrong: '}</span>
                {option.text} — {option.rationale}
              </p>
            ))}
          </div>
          <Button
            className="mt-4"
            type="button"
            disabled={busy}
            onClick={() => {
              if (index + 1 === draw.questionIds.length) void finish()
              else goNext()
            }}
          >
            {busy ? 'Finishing…' : index + 1 === draw.questionIds.length ? 'Finish' : 'Next'}
          </Button>
        </div>
      ) : (
        <div className="mt-5">
          {error ? <p className="mb-3 rounded-xl bg-[#fdecec] px-3 py-2 text-sm text-[#8d1d1d]">{error}</p> : null}
          <Button type="button" disabled={!picked || busy} onClick={() => void submit()}>
            {busy ? 'Checking…' : 'Submit answer'}
          </Button>
        </div>
      )}
    </div>
  )
}

function ScoreBlock({ attempt }: { attempt: Attempt }) {
  return (
    <div className="mt-4 grid grid-cols-3 gap-3">
      <Stat label="Score" value={`${attempt.correctCount} / ${attempt.questionCount}`} />
      <Stat label="Percent" value={`${formatPercent(attempt.percent)}%`} />
      <Stat label="Finished" value={formatLocal(attempt.completedAt)} />
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-[#f4f8fc] px-3 py-3">
      <p className="text-xs font-semibold tracking-wide text-[#5c7288] uppercase">{label}</p>
      <p className="mt-1 text-lg font-semibold text-[#14375f]">{value}</p>
    </div>
  )
}

function Summary({
  attempt,
  answers,
  draw,
  reviewIndex,
  error,
  onOpen,
  onBack,
}: {
  attempt: Attempt
  answers: Answer[]
  draw: Draw
  reviewIndex: number | null
  error: string
  onOpen: (index: number) => void
  onBack: () => void
}) {
  if (reviewIndex !== null) {
    const id = draw.questionIds[reviewIndex]
    const question = id ? findQuestion(id) : null
    const answer = answers.find((row) => row.questionId === id)
    if (!question || !answer) {
      return <p>That answer is not on this attempt.</p>
    }
    const order = draw.optionOrder[question.id] ?? question.options.map((option) => option.id)
    const options = order
      .map((optionId) => question.options.find((option) => option.id === optionId))
      .filter((option): option is (typeof question.options)[number] => Boolean(option))
    return (
      <div className="mx-auto max-w-2xl">
        <button type="button" className="text-sm font-semibold text-[#2a6cb5]" onClick={onBack}>
          Back to summary
        </button>
        <p className="mt-3 text-sm font-semibold text-[#2a6cb5]">
          Question {reviewIndex + 1} of {draw.questionIds.length}
        </p>
        <h1 className="mt-2 font-['Fraunces',Georgia,serif] text-2xl font-semibold text-[#14375f]">{question.stem}</h1>
        <div className="mt-4 space-y-3">
          {options.map((option) => {
            const wrong = option.id === answer.chosenOptionId && !option.correct
            return (
              <div
                key={option.id}
                className={`flex items-start gap-3 rounded-2xl border px-4 py-3 ${
                  option.correct ? 'border-[#157a43] bg-[#e8f6ee]' : wrong ? 'border-[#c43535] bg-[#fdecec]' : 'border-[#d5e2f0] bg-white'
                }`}
              >
                {option.correct ? <Check className="mt-0.5 text-[#157a43]" size={18} /> : null}
                {wrong ? <X className="mt-0.5 text-[#c43535]" size={18} /> : null}
                <span>{option.text}</span>
              </div>
            )
          })}
        </div>
        <p className={`mt-4 text-lg font-semibold ${answer.isCorrect ? 'text-[#157a43]' : 'text-[#c43535]'}`}>
          {answer.isCorrect ? 'Correct' : 'Incorrect'}
        </p>
        <div className="mt-3 space-y-3 text-sm leading-6">
          {question.options.map((option) => (
            <p key={option.id}>
              <span className="font-semibold">{option.correct ? 'Why this is right: ' : 'Why this is wrong: '}</span>
              {option.text} — {option.rationale}
            </p>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-['Fraunces',Georgia,serif] text-3xl font-semibold text-[#14375f]">
        {attempt.completedAt ? 'Test results' : 'Test in progress'}
      </h1>
      <p className="mt-1 text-sm text-[#5c7288]">
        {attempt.mode === 'unseen' ? 'Unseen questions' : 'Any questions'} · started {formatLocal(attempt.startedAt)}
      </p>
      <ScoreBlock attempt={attempt} />
      {error ? <p className="mt-4 rounded-xl bg-[#fdecec] px-3 py-2 text-sm text-[#8d1d1d]">{error}</p> : null}
      <h2 className="mt-8 text-sm font-semibold tracking-wide text-[#5c7288] uppercase">Question by question</h2>
      <div className="mt-3 flex flex-wrap gap-2">
        {draw.questionIds.map((id, position) => {
          const answer = answers.find((row) => row.questionId === id)
          const correct = answer?.isCorrect
          return (
            <button
              key={id}
              type="button"
              aria-label={`Question ${position + 1}, ${correct ? 'correct' : answer ? 'incorrect' : 'unanswered'}`}
              disabled={!answer}
              onClick={() => onOpen(position)}
              className={`flex h-11 w-11 items-center justify-center rounded-full ${
                correct ? 'bg-[#157a43] text-white' : answer ? 'bg-[#c43535] text-white' : 'bg-[#e4eef7] text-[#5c7288]'
              }`}
            >
              {correct ? <Check size={18} /> : answer ? <X size={18} /> : position + 1}
            </button>
          )
        })}
      </div>
      <p className="mt-3 text-sm text-[#5c7288]">Select a mark to open that question and the explanation.</p>
      <Link className="mt-6 inline-block font-semibold text-[#2a6cb5]" to="/progress">
        All attempts
      </Link>
    </div>
  )
}
