import { Check, X } from 'lucide-react'
import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
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
import { correctOptionId } from '../content/pack.ts'
import { findCourseQuestion } from '../content/catalog.ts'
import { progressPath } from '../study/paths.ts'
import { useTest } from '../study/TestContext.tsx'
import { subjectTitle } from '../content/rewrite.ts'
import { formatLocal, formatPercent } from '../lib/utils.ts'
import { loadDraw, saveDraw, type Draw } from '../study/draws.ts'
import {
  formatQuestionTime,
  formatTotalTime,
  nextIncorrectIndex,
  questionSeconds,
  secondsSpent,
  totalTimeSeconds,
} from '../study/testSession.ts'

type View = 'loading' | 'question' | 'feedback' | 'finish' | 'summary' | 'review'

export function TestPage() {
  const test = useTest()
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
  const shownAtMs = useRef(0)

  useEffect(() => {
    if (view === 'question') shownAtMs.current = Date.now()
  }, [view, index])

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
    return id ? findCourseQuestion(test.id, id) : null
  }, [draw, index, test.id])

  const orderedOptions = useMemo(() => {
    if (!question || !draw) return []
    const order = draw.optionOrder[question.id] ?? question.options.map((option) => option.id)
    return order
      .map((id) => question.options.find((option) => option.id === id))
      .filter((option): option is (typeof question.options)[number] => Boolean(option))
  }, [draw, question])

  const currentAnswer = answers.find((answer) => answer.questionId === question?.id) ?? null

  function rememberSeconds(questionId: string, seconds: number) {
    if (!person || !draw) return
    const next: Draw = {
      ...draw,
      secondsByQuestion: { ...draw.secondsByQuestion, [questionId]: seconds },
    }
    saveDraw(person.personId, attemptId, next)
    setDraw(next)
  }

  async function submit() {
    if (!question || !picked) return
    const seconds = secondsSpent(shownAtMs.current, Date.now())
    setBusy(true)
    setError('')
    try {
      const result = await submitAnswer(attemptId, question.id, {
        chosenOptionId: picked,
        correctOptionId: correctOptionId(question),
        seconds,
      })
      rememberSeconds(question.id, result.answer.seconds ?? seconds)
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
        <Link className="mt-4 inline-block font-semibold text-[#2a6cb5]" to={progressPath(test.id)}>
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
        testId={test.id}
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
      <h1 className="mt-2 font-['Fraunces',Georgia,serif] text-2xl font-semibold text-[#14375f] sm:text-3xl">{subjectTitle(question.stem)}</h1>
      {revealed && error ? <p className="mt-4 rounded-xl bg-[#fdecec] px-3 py-2 text-sm text-[#8d1d1d]">{error}</p> : null}
      {revealed ? (
        <AnsweredChoices
          options={orderedOptions}
          chosenOptionId={currentAnswer?.chosenOptionId ?? picked ?? ''}
          isCorrect={Boolean(currentAnswer?.isCorrect)}
          controls={
            <ContinueButton
              busy={busy}
              last={index + 1 === draw.questionIds.length}
              onClick={() => {
                if (index + 1 === draw.questionIds.length) void finish()
                else goNext()
              }}
            />
          }
          bottom={
            <ContinueButton
              busy={busy}
              last={index + 1 === draw.questionIds.length}
              onClick={() => {
                if (index + 1 === draw.questionIds.length) void finish()
                else goNext()
              }}
            />
          }
        />
      ) : (
        <div className="mt-5 space-y-3">
          {orderedOptions.map((option) => {
            const selected = chosenId === option.id
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setPicked(option.id)}
                className={`flex w-full items-start gap-3 rounded-2xl border px-4 py-3 text-left text-[15px] ${
                  selected ? 'border-[#2a6cb5] bg-[#e7f1fb]' : 'border-[#d5e2f0] bg-white hover:border-[#9eb8d2]'
                }`}
              >
                <span
                  className={`mt-0.5 block h-4 w-4 shrink-0 rounded-full border ${selected ? 'border-[#2a6cb5] bg-[#2a6cb5]' : 'border-[#9eb8d2]'}`}
                />
                <span>{option.text}</span>
              </button>
            )
          })}
        </div>
      )}
      {revealed ? null : (
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

function AnsweredChoices({
  options,
  chosenOptionId,
  isCorrect,
  controls,
  bottom,
}: {
  options: { id: string; text: string; correct: boolean; rationale: string }[]
  chosenOptionId: string
  isCorrect: boolean
  controls: ReactNode
  bottom?: ReactNode
}) {
  return (
    <div className="mt-5">
      <p className={`text-lg font-semibold ${isCorrect ? 'text-[#157a43]' : 'text-[#c43535]'}`}>{isCorrect ? 'Correct' : 'Incorrect'}</p>
      {controls ? <div className="mt-3 flex flex-wrap gap-2">{controls}</div> : null}
      <div className="mt-4 space-y-4">
        {options.map((option) => {
          const chosenWrong = option.id === chosenOptionId && !option.correct
          return (
            <div key={option.id}>
              <div
                className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-[15px] ${
                  option.correct
                    ? 'border-[#157a43] bg-[#e8f6ee]'
                    : chosenWrong
                      ? 'border-[#c43535] bg-[#fdecec]'
                      : 'border-[#d5e2f0] bg-white'
                }`}
              >
                {option.correct ? <Check className="mt-0.5 shrink-0 text-[#157a43]" size={18} /> : null}
                {chosenWrong ? <X className="mt-0.5 shrink-0 text-[#c43535]" size={18} /> : null}
                {!option.correct && !chosenWrong ? <span className="mt-0.5 h-4 w-4 shrink-0" /> : null}
                <span className="min-w-0">{option.text}</span>
              </div>
              <p className="mt-2 px-1 text-sm leading-6 break-words text-[#24364a]">
                <span className="font-semibold">{option.correct ? 'Why this is right: ' : 'Why this is wrong: '}</span>
                {option.rationale}
              </p>
            </div>
          )
        })}
      </div>
      {bottom ? <div className="mt-4">{bottom}</div> : null}
    </div>
  )
}

function ContinueButton({ busy, last, onClick }: { busy: boolean; last: boolean; onClick: () => void }) {
  return (
    <Button type="button" disabled={busy} onClick={onClick}>
      {busy ? 'Finishing…' : last ? 'Finish' : 'Next'}
    </Button>
  )
}

function ScoreBlock({ attempt }: { attempt: Attempt }) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
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
      <p className="mt-1 text-base font-semibold break-words text-[#14375f] sm:text-lg">{value}</p>
    </div>
  )
}

function Summary({
  testId,
  attempt,
  answers,
  draw,
  reviewIndex,
  error,
  onOpen,
  onBack,
}: {
  testId: string
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
    const question = id ? findCourseQuestion(testId, id) : null
    const answer = answers.find((row) => row.questionId === id)
    if (!question || !answer) {
      return <p>That answer is not on this attempt.</p>
    }
    const order = draw.optionOrder[question.id] ?? question.options.map((option) => option.id)
    const options = order
      .map((optionId) => question.options.find((option) => option.id === optionId))
      .filter((option): option is (typeof question.options)[number] => Boolean(option))
    const correctFlags = draw.questionIds.map((questionId) => {
      const row = answers.find((item) => item.questionId === questionId)
      return row ? row.isCorrect : null
    })
    const nextWrong = nextIncorrectIndex(correctFlags, reviewIndex)
    const hasNext = reviewIndex + 1 < draw.questionIds.length
    return (
      <div className="mx-auto max-w-2xl">
        <button type="button" className="text-sm font-semibold text-[#2a6cb5]" onClick={onBack}>
          Back to summary
        </button>
        <p className="mt-3 text-sm font-semibold text-[#2a6cb5]">
          Question {reviewIndex + 1} of {draw.questionIds.length}
        </p>
        <h1 className="mt-2 font-['Fraunces',Georgia,serif] text-2xl font-semibold text-[#14375f]">{subjectTitle(question.stem)}</h1>
        <AnsweredChoices
          options={options}
          chosenOptionId={answer.chosenOptionId}
          isCorrect={answer.isCorrect}
          controls={
            hasNext || nextWrong !== null ? (
              <>
                {hasNext ? (
                  <Button type="button" onClick={() => onOpen(reviewIndex + 1)}>
                    Next
                  </Button>
                ) : null}
                {nextWrong !== null ? (
                  <Button type="button" variant="outline" onClick={() => onOpen(nextWrong)}>
                    Next incorrect -&gt;
                  </Button>
                ) : null}
              </>
            ) : null
          }
        />
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
      <ul className="mt-3 space-y-2">
        {draw.questionIds.map((id, position) => {
          const answer = answers.find((row) => row.questionId === id)
          const correct = answer?.isCorrect
          const seconds = questionSeconds(answer?.seconds, draw.secondsByQuestion?.[id])
          const stem = subjectTitle(findCourseQuestion(testId, id)?.stem ?? '')
          const mark = correct ? 'correct' : answer ? 'incorrect' : 'unanswered'
          return (
            <li key={id}>
              <button
                type="button"
                aria-label={`Question ${position + 1}, ${mark}, ${formatQuestionTime(seconds)}`}
                disabled={!answer}
                onClick={() => onOpen(position)}
                className="flex w-full items-center gap-3 rounded-2xl border border-[#d5e2f0] bg-white px-3 py-3 text-left disabled:opacity-70"
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                    correct ? 'bg-[#e8f6ee] text-[#157a43]' : answer ? 'bg-[#fdecec] text-[#c43535]' : 'bg-[#e4eef7] text-[#5c7288]'
                  }`}
                >
                  {correct ? <Check size={18} aria-hidden /> : answer ? <X size={18} aria-hidden /> : position + 1}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-[#14375f]">Question {position + 1}</span>
                  {stem ? <span className="block truncate text-sm text-[#5c7288]">{stem}</span> : null}
                </span>
                <span className="shrink-0 text-sm font-semibold tabular-nums text-[#24364a]">{formatQuestionTime(seconds)}</span>
              </button>
            </li>
          )
        })}
      </ul>
      <div className="mt-4 flex items-center justify-between gap-3 rounded-xl bg-[#f4f8fc] px-4 py-3">
        <span className="text-sm font-semibold text-[#14375f]">Total time</span>
        <span className="text-sm font-semibold tabular-nums text-[#14375f]">
          {formatTotalTime(
            totalTimeSeconds(
              draw.questionIds.map((id) => {
                const answer = answers.find((row) => row.questionId === id)
                return questionSeconds(answer?.seconds, draw.secondsByQuestion?.[id])
              }),
            ),
          )}
        </span>
      </div>
      <p className="mt-3 text-sm text-[#5c7288]">Select a question to open it and the explanation.</p>
      <Link className="mt-6 inline-block font-semibold text-[#2a6cb5]" to={progressPath(testId)}>
        All attempts
      </Link>
    </div>
  )
}
