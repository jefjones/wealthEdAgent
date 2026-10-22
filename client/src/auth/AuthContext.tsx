import {
  createContext,
  useCallback,
  useContext,
  useEffect,
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
  setStudyUnavailableHandler,
  studyUsingLocalFallback,
  tokenExpMs,
  type Person,
  type RegisterInput,
} from '../api/client.ts'

type AuthValue = {
  ready: boolean
  person: Person | null
  localStudy: boolean
  login: (username: string, password: string) => Promise<void>
  register: (input: RegisterInput) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate()
  const [person, setPerson] = useState<Person | null>(() => loadSession().person)
  const [token, setToken] = useState(() => loadSession().token)
  const [localStudy, setLocalStudy] = useState(studyUsingLocalFallback())

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
    setStudyUnavailableHandler(() => setLocalStudy(true))
    return () => {
      setSessionExpiredHandler(null)
      setStudyUnavailableHandler(null)
    }
  }, [navigate])

  useEffect(() => {
    if (!token || !person) return
    const exp = tokenExpMs(token)
    if (!exp) return
    const delay = Math.max(5_000, exp - Date.now() - 2 * 60 * 1000)
    const timer = window.setTimeout(() => {
      void refreshSession()
        .then((next) => apply(next.person, next.token))
        .catch(() => {
          clearSession()
          markSessionExpired()
          setPerson(null)
          setToken('')
          navigate('/login', { replace: true })
        })
    }, delay)
    return () => window.clearTimeout(timer)
  }, [apply, navigate, person, token])

  const login = useCallback(
    async (username: string, password: string) => {
      const session = await apiLogin(username, password)
      apply(session.person, session.token)
    },
    [apply],
  )

  const register = useCallback(
    async (input: RegisterInput) => {
      const session = await apiRegister(input)
      apply(session.person, session.token)
    },
    [apply],
  )

  const logout = useCallback(() => {
    clearSession()
    setPerson(null)
    setToken('')
    navigate('/login', { replace: true })
  }, [navigate])

  const value = useMemo(
    () => ({ ready: true, person, localStudy, login, register, logout }),
    [person, localStudy, login, register, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const value = useContext(AuthContext)
  if (!value) throw new Error('useAuth must be used inside AuthProvider')
  return value
}
