import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { errorText, getProgress, getSeen, listAttempts, onStudyFeatureReady, type Attempt, type SectionProgress } from '../api/client.ts'
import { ContentsButton } from '../components/ContentsButton.tsx'
import { SlideOver } from '../components/SlideOver.tsx'
import { StudyOutline } from '../components/StudyOutline.tsx'
import { Button } from '../components/ui/button.tsx'
import { useStudyNav } from '../study/studyNav.ts'
import { allQuestions } from '../content/pack.ts'
import { formatLocal, formatPercent } from '../lib/utils.ts'

export function ProgressPage() {
  const [attempts, setAttempts] = useState<Attempt[]>([])
  const [seen, setSeen] = useState(0)
  const [sections, setSections] = useState<SectionProgress[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [contentsOpen, setContentsOpen] = useState(false)
  const { navOpen, toggleChapter } = useStudyNav()
  const bank = allQuestions().length
  const done = useMemo(() => new Set(sections.filter((row) => row.completed).map((row) => row.sectionId)), [sections])

  function load() {
    setLoading(true)
    setError('')
    Promise.all([listAttempts(), getSeen()])
      .then(([attemptResult, seenResult]) => {
        setAttempts(attemptResult.attempts)
        setSeen(seenResult.questionIds.length)
      })
      .catch((cause: unknown) => setError(errorText(cause, 'Could not load progress.')))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
    let cancel = false
    getProgress()
      .then((result) => {
        if (!cancel) setSections(result.sections)
      })
      .catch(() => {
        /* Scores still render when the reading list cannot load. */
      })
    return () => {
      cancel = true
    }
  }, [])

  useEffect(
    () =>
      onStudyFeatureReady((feature) => {
        if (feature === 'attempts' || feature === 'seen') load()
        if (feature === 'progress') {
          void getProgress()
            .then((result) => setSections(result.sections))
            .catch(() => {
              /* Scores stay on the page. */
            })
        }
      }),
    [],
  )

  const finished = attempts.filter((attempt) => attempt.completedAt)
  const average =
    finished.length > 0 ? finished.reduce((sum, attempt) => sum + Number(attempt.percent), 0) / finished.length : 0
  const chart = [...finished].sort((a, b) => (a.startedAt < b.startedAt ? -1 : 1))

  return (
    <div>
      <ContentsButton pressed={contentsOpen} onClick={() => setContentsOpen(true)} />
      <SlideOver open={contentsOpen} title="Contents" onClose={() => setContentsOpen(false)}>
        <StudyOutline
          idPrefix="progress"
          navOpen={navOpen}
          onToggle={toggleChapter}
          done={done}
          onPick={() => setContentsOpen(false)}
        />
      </SlideOver>
      <h1 className="font-['Fraunces',Georgia,serif] text-3xl font-semibold text-[#14375f]">Progress</h1>
      <p className="mt-2 text-[#3d5166]">Every practice test, with the score and the local date and time.</p>
      {loading ? <p className="mt-6 text-[#3d5166]">Loading your attempts…</p> : null}
      {error ? (
        <div className="mt-6 rounded-xl bg-[#fdecec] px-3 py-3 text-sm text-[#8d1d1d]">
          <p>{error}</p>
          <Button className="mt-3" type="button" variant="outline" onClick={load}>
            Try again
          </Button>
        </div>
      ) : null}
      {!loading && !error ? (
        <>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <Tile label="Attempts" value={String(attempts.length)} />
            <Tile label="Average score" value={finished.length ? `${formatPercent(average)}%` : '—'} />
            <Tile label="Questions seen" value={`${seen} of ${bank}`} />
          </div>
          <Trend attempts={chart} />
          {attempts.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-dashed border-[#b7d0ea] bg-white p-6">
              <p className="font-semibold text-[#14375f]">No practice tests yet.</p>
              <p className="mt-1 text-sm text-[#3d5166]">Start one from Practice Test. The score will show up here.</p>
              <Link className="mt-4 inline-block" to="/practice">
                <Button type="button">Go to Practice Test</Button>
              </Link>
            </div>
          ) : (
            <div className="mt-8 overflow-hidden rounded-2xl border border-[#d5e2f0] bg-white">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#f4f8fc] text-xs tracking-wide text-[#5c7288] uppercase">
                  <tr>
                    <th className="px-4 py-3 font-semibold">When</th>
                    <th className="px-4 py-3 font-semibold">Questions</th>
                    <th className="px-4 py-3 font-semibold">Score</th>
                    <th className="px-4 py-3 font-semibold">Percent</th>
                  </tr>
                </thead>
                <tbody>
                  {attempts.map((attempt) => (
                    <tr key={attempt.attemptId} className="border-t border-[#e4eef7]">
                      <td className="px-4 py-3">
                        <Link className="font-semibold text-[#2a6cb5] hover:underline" to={`/test/${attempt.attemptId}`}>
                          {formatLocal(attempt.completedAt ?? attempt.startedAt)}
                        </Link>
                        <p className="text-xs text-[#5c7288]">
                          {attempt.completedAt ? (attempt.mode === 'unseen' ? 'Unseen' : 'Any questions') : 'In progress'}
                        </p>
                      </td>
                      <td className="px-4 py-3">{attempt.questionCount}</td>
                      <td className="px-4 py-3">
                        {attempt.correctCount} / {attempt.questionCount}
                      </td>
                      <td className="px-4 py-3">{formatPercent(attempt.percent)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      ) : null}
    </div>
  )
}

function Tile({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[#d5e2f0] bg-white px-4 py-4">
      <p className="text-xs font-semibold tracking-wide text-[#5c7288] uppercase">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-[#14375f]">{value}</p>
    </div>
  )
}

function Trend({ attempts }: { attempts: Attempt[] }) {
  if (attempts.length < 2) {
    return (
      <p className="mt-4 text-sm text-[#5c7288]">
        {attempts.length === 0
          ? 'The trend chart appears after you finish a test.'
          : 'Finish one more test to see the score trend.'}
      </p>
    )
  }
  const width = 640
  const height = 160
  const pad = 16
  const points = attempts.map((attempt, index) => {
    const x = pad + (index * (width - pad * 2)) / (attempts.length - 1)
    const y = height - pad - (Number(attempt.percent) / 100) * (height - pad * 2)
    return `${x},${y}`
  })
  return (
    <div className="mt-6 rounded-2xl border border-[#d5e2f0] bg-white p-4">
      <p className="text-sm font-semibold text-[#14375f]">Score trend</p>
      <svg viewBox={`0 0 ${width} ${height}`} className="mt-2 h-40 w-full" role="img" aria-label="Score trend">
        <polyline fill="none" stroke="#2a6cb5" strokeWidth="3" points={points.join(' ')} />
        {points.map((point, index) => {
          const [x, y] = point.split(',')
          return <circle key={attempts[index]?.attemptId} cx={x} cy={y} r="4" fill="#2a6cb5" />
        })}
      </svg>
    </div>
  )
}
