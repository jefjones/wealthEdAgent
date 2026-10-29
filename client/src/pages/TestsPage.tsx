import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  errorText,
  getProgress,
  getSeen,
  listAttempts,
  onStudyFeatureReady,
  type Attempt,
  type SectionProgress,
  type SeenRow,
} from '../api/client.ts'
import { Button } from '../components/ui/button.tsx'
import { Card } from '../components/ui/card.tsx'
import { OfflineButton } from '../components/OfflineButton.tsx'
import { courseSections, tests, type TestInfo } from '../content/catalog.ts'
import { usePack } from '../offline/usePack.ts'
import { formatLocal, formatPercent, percent } from '../lib/utils.ts'
import { studyPath } from '../study/paths.ts'
import { useStudyState } from '../study/stateSync.ts'
import { summarizeTest } from '../study/testSummary.ts'

export function TestsPage() {
  const [progress, setProgress] = useState<SectionProgress[]>([])
  const [seen, setSeen] = useState<SeenRow[]>([])
  const [attempts, setAttempts] = useState<Attempt[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  function load() {
    setLoading(true)
    setError('')
    Promise.all([getProgress(), getSeen(), listAttempts()])
      .then(([progressResult, seenResult, attemptResult]) => {
        setProgress(progressResult.sections)
        setSeen(seenResult.seen)
        setAttempts(attemptResult.attempts)
      })
      .catch((cause: unknown) => setError(errorText(cause, 'Could not load your tests.')))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [])

  useEffect(
    () =>
      onStudyFeatureReady((feature) => {
        if (feature === 'progress' || feature === 'seen' || feature === 'attempts') load()
      }),
    [],
  )

  return (
    <div>
      <h1 className="font-['Fraunces',Georgia,serif] text-3xl font-semibold text-[#14375f] sm:text-4xl">Choose a test</h1>
      <p className="mt-2 max-w-2xl text-[#3d5166]">
        Pick the license you are studying. Your reading progress and practice scores stay with that test.
      </p>
      {loading ? <p className="mt-6 text-[#3d5166]">Loading your progress…</p> : null}
      {error ? (
        <div className="mt-6 rounded-xl bg-[#fdecec] px-3 py-3 text-sm text-[#8d1d1d]">
          <p>{error}</p>
          <Button className="mt-3" type="button" variant="outline" onClick={load}>
            Try again
          </Button>
        </div>
      ) : null}
      {!loading && !error ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tests.map((test) => (
            <TestCard
              key={test.id}
              test={test}
              progress={progress}
              seen={seen}
              attempts={attempts}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

function TestCard({
  test,
  progress,
  seen,
  attempts,
}: {
  test: TestInfo
  progress: SectionProgress[]
  seen: SeenRow[]
  attempts: Attempt[]
}) {
  const pack = usePack(test.id)
  const sections = pack.kind === 'ready' ? courseSections(test.id) : []
  const { state: studyState } = useStudyState(test.id)
  const summary = summarizeTest({
    testId: test.id,
    sectionIds: sections.map((section) => section.id),
    progress,
    seen,
    attempts,
    lastStudiedAt: studyState.lastPosition?.savedAt ?? null,
  })
  const readPercent = percent(summary.sectionsRead, summary.sectionsTotal)
  return (
    <Card className="flex h-full flex-col p-5 sm:p-6">
      <p className="text-sm font-semibold text-[#2a6cb5]">{test.chapterCount} chapters</p>
      <div className="md:min-h-[6rem]">
        <h2 className="mt-1 font-['Fraunces',Georgia,serif] text-2xl font-semibold text-[#14375f]">{test.title}</h2>
        <p className="mt-1 text-[#3d5166] md:line-clamp-2" title={test.blurb}>{test.blurb}</p>
      </div>
      <div className="mt-4">
        <div className="flex items-baseline justify-between gap-3 text-sm">
          <p className="font-semibold text-[#14375f]">
            Sections read {summary.sectionsRead} of {summary.sectionsTotal}
          </p>
          <p className="text-[#5c7288]">{readPercent}%</p>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e4eef7]">
          <div className="h-full rounded-full bg-[#2a6cb5]" style={{ width: `${readPercent}%` }} />
        </div>
      </div>
      <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
        <div>
          <dt className="text-xs font-semibold tracking-wide text-[#5c7288] uppercase">Practice accuracy</dt>
          <dd className="mt-1 text-lg font-semibold text-[#14375f]">
            {summary.practiceAccuracy == null ? '—' : `${formatPercent(summary.practiceAccuracy)}%`}
          </dd>
        </div>
        <div>
          <dt className="text-xs font-semibold tracking-wide text-[#5c7288] uppercase">Questions answered</dt>
          <dd className="mt-1 text-lg font-semibold text-[#14375f]">{summary.questionsAnswered}</dd>
        </div>
      </dl>
      {pack.kind === 'online-only' ? (
        <p className="mt-3 rounded-lg bg-[#eef4fb] px-3 py-2 text-sm font-semibold text-[#1c3f66]">Available online only</p>
      ) : null}
      <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-4">
        <div className="flex flex-wrap items-center gap-2">
          <Link to={studyPath(test.id)}>
            <Button type="button">Study this test</Button>
          </Link>
          <OfflineButton testId={test.id} />
        </div>
        <div className="min-w-0 text-right text-sm">
          <p className="text-[0.65rem] font-semibold tracking-wide text-[#5c7288] uppercase sm:text-xs">Last effort</p>
          <p className="font-semibold text-[#14375f]">{summary.lastEffortAt ? formatLocal(summary.lastEffortAt) : 'No work yet'}</p>
        </div>
      </div>
    </Card>
  )
}
