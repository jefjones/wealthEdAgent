import { createContext, useContext, useMemo, type ReactNode } from 'react'
import { Link, Navigate, Outlet, useParams } from 'react-router-dom'
import { Button } from '../components/ui/button.tsx'
import { getTestInfo, type TestCourse } from '../content/catalog.ts'
import { usePack } from '../offline/usePack.ts'
import { testsHomePath } from './paths.ts'
import { SearchProvider } from './SearchContext.tsx'

const TestContext = createContext<TestCourse | null>(null)

export function TestScope({ children }: { children?: ReactNode }) {
  const { testId = '' } = useParams()
  const info = getTestInfo(testId)
  const status = usePack(info?.id ?? null)
  const pack = status.kind === 'ready' ? status.pack : null
  const test = useMemo(() => (info && pack ? { ...info, pack } : null), [info, pack])
  if (!info) return <Navigate to="/" replace />
  if (!test) {
    return (
      <div className="mx-auto max-w-xl py-8" role="status" aria-live="polite">
        <h1 className="font-['Fraunces',Georgia,serif] text-2xl font-semibold text-[#14375f]">{info.title}</h1>
        {status.kind === 'loading' ? <p className="mt-3 text-[#3d5166]">Loading this test…</p> : null}
        {status.kind === 'online-only' ? (
          <div className="mt-3 rounded-xl bg-[#eef4fb] px-4 py-3 text-[#1c3f66]">
            <p className="font-semibold">Available online only</p>
            <p className="mt-1 text-sm">
              This test is not saved on this device. Connect to the internet to study it, or use a test you saved for offline use.
            </p>
          </div>
        ) : null}
        {status.kind === 'error' ? (
          <div className="mt-3 rounded-xl bg-[#fdecec] px-4 py-3 text-sm text-[#8d1d1d]">
            <p>Could not load this test.</p>
            <Button className="mt-3" type="button" variant="outline" onClick={status.retry}>
              Try again
            </Button>
          </div>
        ) : null}
        <Link to={testsHomePath()} className="mt-4 inline-block text-sm font-semibold text-[#2a6cb5] underline">
          Back to tests
        </Link>
      </div>
    )
  }
  return (
    <TestContext.Provider value={test}>
      <SearchProvider key={test.id} testId={test.id}>
        {children ?? <Outlet />}
      </SearchProvider>
    </TestContext.Provider>
  )
}

export function useTest() {
  const test = useContext(TestContext)
  if (!test) throw new Error('useTest must be used inside a test route.')
  return test
}
