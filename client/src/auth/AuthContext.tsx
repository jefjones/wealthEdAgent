import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { useNavigate } from 'react-router-dom'
import {
  clearSession,
  loadSession,
  login as apiLogin,
  markSessionExpired,
  refreshSession,
  register as apiRegister,
  setSession,
  setSessionExpiredHandler,
  ApiError,
  offlineHold,
  setStudyNoticeHandler,
  startStudyReprobe,
  studyNoticeSnapshot,
  tokenExpMs,
  type Person,
  type RegisterInput,
  type StudyFeature,
} from '../api/client.ts'
import { startSync, syncNow } from '../offline/sync.ts'
import { logoutActivity, recordLogin } from '../study/activityTracker.ts'

type AuthValue = {
  ready: boolean
  person: Person | null
  studyNotice: StudyFeature[]
  login: (username: string, password: string) => Promise<void>
  register: (input: RegisterInput) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate()
  const [person, setPerson] = useState<Person | null>(() => loadSession().person)
  const [token, setToken] = useState(() => loadSession().token)
  const [studyNotice, setStudyNotice] = useState<StudyFeature[]>(studyNoticeSnapshot)

  const apply = useCallback((nextPerson: Person | null, nextToken: string) => {
    setSession(nextPerson, nextToken)
    setPerson(nextPerson)
    setToken(nextToken)
  }, [])

  useEffect(() => {
    setSessionExpiredHandler(() => {
      setPerson(null)
      setToken('')
      navigate('/login', { replace: true })
    })
    return () => {
      setSessionExpiredHandler(null)
    }
  }, [navigate])

  useLayoutEffect(() => {
    setStudyNoticeHandler((features) => setStudyNotice(features))
    setStudyNotice(studyNoticeSnapshot())
    return () => setStudyNoticeHandler(null)
  }, [])

  useEffect(() => startStudyReprobe(), [])

  const personId = person?.personId ?? null
  useEffect(() => (personId ? startSync() : undefined), [personId])

  // Bumped to try the refresh again after a network failure.
  const [refreshTry, setRefreshTry] = useState(0)

  useEffect(() => {
    if (!token || !person) return
    const exp = tokenExpMs(token)
    if (!exp) return
    // The token lasts 12 hours and refresh needs it unexpired: refresh 2 minutes early, and again on reconnect.
    if (exp <= Date.now()) return
    const delay = Math.max(5_000, exp - Date.now() - 2 * 60 * 1000)
    const run = () => {
      void refreshSession()
        .then((next) => apply(next.person, next.token))
        .catch((error: unknown) => {
          const network = (error instanceof ApiError && error.network) || navigator.onLine === false
          // A network failure never signs the reader out or clears data; try again later.
          if (network || offlineHold()) {
            window.setTimeout(() => setRefreshTry((n) => n + 1), 60_000)
            return
          }
          clearSession()
          markSessionExpired()
          setPerson(null)
          setToken('')
          navigate('/login', { replace: true })
        })
    }
    const timer = window.setTimeout(run, delay)
    const onOnline = () => {
      if (tokenExpMs(token) !== null && (tokenExpMs(token) ?? 0) - Date.now() < 60 * 60 * 1000) run()
    }
    window.addEventListener('online', onOnline)
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener('online', onOnline)
    }
  }, [apply, navigate, person, token, refreshTry])

  const login = useCallback(
    async (username: string, password: string) => {
      const session = await apiLogin(username, password)
      apply(session.person, session.token)
      recordLogin()
      void syncNow()
    },
    [apply],
  )

  const register = useCallback(
    async (input: RegisterInput) => {
      const session = await apiRegister(input)
      apply(session.person, session.token)
      recordLogin()
    },
    [apply],
  )

  const logout = useCallback(() => {
    logoutActivity()
    clearSession()
    setPerson(null)
    setToken('')
    navigate('/login', { replace: true })
  }, [navigate])

  const value = useMemo(
    () => ({ ready: true, person, studyNotice, login, register, logout }),
    [person, studyNotice, login, register, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const value = useContext(AuthContext)
  if (!value) throw new Error('useAuth must be used inside AuthProvider')
  return value
}
