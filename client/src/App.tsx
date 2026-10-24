import type { ReactNode } from 'react'
import { Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom'
import { useAuth } from './auth/AuthContext.tsx'
import { Shell } from './components/Shell.tsx'
import { ForgotPage } from './pages/ForgotPage.tsx'
import { HighlightsPage } from './pages/HighlightsPage.tsx'
import { LoginPage } from './pages/LoginPage.tsx'
import { PracticePage } from './pages/PracticePage.tsx'
import { ProgressPage } from './pages/ProgressPage.tsx'
import { RegisterPage } from './pages/RegisterPage.tsx'
import { ResetPage } from './pages/ResetPage.tsx'
import { SearchPage } from './pages/SearchPage.tsx'
import { StudyIndex, StudyPage } from './pages/StudyPage.tsx'
import { TestPage } from './pages/TestPage.tsx'
import { TestsPage } from './pages/TestsPage.tsx'
import { HighlightProvider } from './study/HighlightContext.tsx'
import { TestScope } from './study/TestContext.tsx'
import { LIFE_HEALTH_ID } from './content/catalog.ts'

function RequireAuth({ children }: { children: ReactNode }) {
  const { ready, person } = useAuth()
  const location = useLocation()
  if (!ready) return <p className="px-4 py-8 text-[#3d5166]">Loading your session…</p>
  if (!person) {
    const next = `${location.pathname}${location.search}${location.hash}`
    return <Navigate to={`/login?next=${encodeURIComponent(next)}`} replace />
  }
  return children
}

function LegacyStudySection() {
  const { sectionId = '' } = useParams()
  const { hash } = useLocation()
  return <Navigate to={`/tests/${LIFE_HEALTH_ID}/study/${sectionId}${hash}`} replace />
}

function LegacyAttempt() {
  const { attemptId = '' } = useParams()
  return <Navigate to={`/tests/${LIFE_HEALTH_ID}/test/${attemptId}`} replace />
}

export default function App() {
  return (
    <HighlightProvider>
      <Routes>
        <Route element={<Shell />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot" element={<ForgotPage />} />
          <Route path="/reset-password/:token" element={<ResetPage />} />
          <Route
            path="/"
            element={
              <RequireAuth>
                <TestsPage />
              </RequireAuth>
            }
          />
          <Route
            path="/tests/:testId"
            element={
              <RequireAuth>
                <TestScope />
              </RequireAuth>
            }
          >
            <Route index element={<Navigate to="study" replace />} />
            <Route path="study" element={<StudyIndex />} />
            <Route path="study/:sectionId" element={<StudyPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="practice" element={<PracticePage />} />
            <Route path="test/:attemptId" element={<TestPage />} />
            <Route path="progress" element={<ProgressPage />} />
            <Route path="highlights" element={<HighlightsPage />} />
          </Route>
          <Route path="/study" element={<Navigate to={`/tests/${LIFE_HEALTH_ID}/study`} replace />} />
          <Route path="/study/:sectionId" element={<LegacyStudySection />} />
          <Route path="/search" element={<Navigate to={`/tests/${LIFE_HEALTH_ID}/search`} replace />} />
          <Route path="/practice" element={<Navigate to={`/tests/${LIFE_HEALTH_ID}/practice`} replace />} />
          <Route path="/progress" element={<Navigate to={`/tests/${LIFE_HEALTH_ID}/progress`} replace />} />
          <Route path="/highlights" element={<Navigate to={`/tests/${LIFE_HEALTH_ID}/highlights`} replace />} />
          <Route path="/test/:attemptId" element={<LegacyAttempt />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HighlightProvider>
  )
}
