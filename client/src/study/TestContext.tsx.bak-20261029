import { createContext, useContext, type ReactNode } from 'react'
import { Navigate, Outlet, useParams } from 'react-router-dom'
import { getTest, type TestCourse } from '../content/catalog.ts'
import { SearchProvider } from './SearchContext.tsx'

const TestContext = createContext<TestCourse | null>(null)

export function TestScope({ children }: { children?: ReactNode }) {
  const { testId = '' } = useParams()
  const test = getTest(testId)
  if (!test) return <Navigate to="/" replace />
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
