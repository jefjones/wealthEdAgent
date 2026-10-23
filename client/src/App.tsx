import type { ReactNode } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useAuth } from './auth/AuthContext.tsx'
import { Shell } from './components/Shell.tsx'
import { ForgotPage } from './pages/ForgotPage.tsx'
import { HighlightsPage } from './pages/HighlightsPage.tsx'
import { LoginPage } from './pages/LoginPage.tsx'
import { PracticePage } from './pages/PracticePage.tsx'
import { ProgressPage } from './pages/ProgressPage.tsx'
import { RegisterPage } from './pages/RegisterPage.tsx'
import { ResetPage } from './pages/ResetPage.tsx'
import { StudyIndex, StudyPage } from './pages/StudyPage.tsx'
import { TestPage } from './pages/TestPage.tsx'
import { HighlightProvider } from './study/HighlightContext.tsx'

function RequireAuth({ children }: { children: ReactNode }) {
  const { ready, person } = useAuth()
  const location = useLocation()
  if (!ready) return <p className="px-4 py-8 text-[#3d5166]">Loading your session…</p>
  if (!person) {
    const next = `${location.pathname}${location.search}`
    return <Navigate to={`/login?next=${encodeURIComponent(next)}`} replace />
  }
  return children
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
          path="/study"
          element={
            <RequireAuth>
              <StudyIndex />
            </RequireAuth>
          }
        />
        <Route
          path="/study/:sectionId"
          element={
            <RequireAuth>
              <StudyPage />
            </RequireAuth>
          }
        />
        <Route
          path="/practice"
          element={
            <RequireAuth>
              <PracticePage />
            </RequireAuth>
          }
        />
        <Route
          path="/test/:attemptId"
          element={
            <RequireAuth>
              <TestPage />
            </RequireAuth>
          }
        />
        <Route
          path="/progress"
          element={
            <RequireAuth>
              <ProgressPage />
            </RequireAuth>
          }
        />
        <Route
          path="/highlights"
          element={
            <RequireAuth>
              <HighlightsPage />
            </RequireAuth>
          }
        />
        <Route path="/" element={<Navigate to="/study" replace />} />
        <Route path="*" element={<Navigate to="/study" replace />} />
      </Route>
    </Routes>
    </HighlightProvider>
  )
}
