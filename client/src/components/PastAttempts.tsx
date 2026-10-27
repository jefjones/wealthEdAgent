import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { errorText, listAttempts, onStudyFeatureReady, type Attempt } from '../api/client.ts'
import { formatDenver, formatPercent } from '../lib/utils.ts'
import { attemptPath } from '../study/paths.ts'
import { attemptBelongsToTest } from '../study/testSummary.ts'

/** This test's attempts, newest first. Each opens its results (or resumes an unfinished one). */
export function PastAttempts({ testId }: { testId: string }) {
  const [attempts, setAttempts] = useState<Attempt[] | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancel = false
    const load = () =>
      listAttempts()
        .then((result) => {
          if (cancel) return
          setError('')
          setAttempts(
            result.attempts
              .filter((attempt) => attemptBelongsToTest(attempt, testId))
              .sort((a, b) => ((a.completedAt ?? a.startedAt) < (b.completedAt ?? b.startedAt) ? 1 : -1)),
          )
        })
        .catch((cause: unknown) => {
          if (!cancel) setError(errorText(cause, 'Could not load your attempts.'))
        })
    void load()
    const off = onStudyFeatureReady((feature) => {
      if (feature === 'attempts') void load()
    })
    return () => {
      cancel = true
      off()
    }
  }, [testId])

  return (
    <section className="mt-8" aria-labelledby="past-attempts">
      <h2 id="past-attempts" className="text-lg font-semibold text-[#14375f]">
        Your attempts
      </h2>
      {error ? <p className="mt-2 rounded-xl bg-[#fdecec] px-3 py-2 text-sm text-[#8d1d1d]">{error}</p> : null}
      {attempts === null && !error ? <p className="mt-2 text-sm text-[#3d5166]">Loading…</p> : null}
      {attempts?.length === 0 ? <p className="mt-2 text-sm text-[#3d5166]">No attempts yet. Your scores will show here.</p> : null}
      {attempts && attempts.length > 0 ? (
        <ul className="mt-3 space-y-2">
          {attempts.map((attempt) => (
            <li key={attempt.attemptId}>
              <Link
                to={attemptPath(testId, attempt.attemptId)}
                className="flex min-h-14 items-center justify-between gap-3 rounded-xl border border-[#d5e2f0] bg-white px-4 py-3 hover:border-[#2a6cb5] focus-visible:outline-2 focus-visible:outline-[#2a6cb5]"
              >
                <span className="min-w-0">
                  <span className="block font-semibold text-[#2a6cb5]">{formatDenver(attempt.completedAt ?? attempt.startedAt)}</span>
                  <span className="block text-xs text-[#5c7288]">
                    {attempt.completedAt ? 'See results' : `In progress, ${attempt.answeredCount} of ${attempt.questionCount} answered`}
                  </span>
                </span>
                <span className="shrink-0 text-right">
                  <span className="block font-semibold text-[#14375f]">
                    {attempt.correctCount} / {attempt.questionCount}
                  </span>
                  <span className="block text-xs text-[#5c7288]">{formatPercent(attempt.percent)}%</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}
