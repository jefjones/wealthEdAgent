import { useEffect, useState, type FormEvent } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { ApiError, errorText, SESSION_EXPIRED_MESSAGE, takeSessionExpired } from '../api/client.ts'
import { useAuth } from '../auth/AuthContext.tsx'
import { Button } from '../components/ui/button.tsx'
import { Card } from '../components/ui/card.tsx'
import { Input } from '../components/ui/input.tsx'
import { Label } from '../components/ui/label.tsx'

export function safeNext(value: string | null) {
  if (!value || !value.startsWith('/') || value.startsWith('//') || value.startsWith('/login')) return '/'
  return value
}

export function LoginPage() {
  const { person, login } = useAuth()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const next = safeNext(params.get('next'))
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [notice] = useState(() => (takeSessionExpired() ? SESSION_EXPIRED_MESSAGE : ''))
  const [busy, setBusy] = useState(false)

  useEffect(() => {
    if (person) navigate(next, { replace: true })
  }, [navigate, next, person])

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    setBusy(true)
    setError('')
    try {
      await login(username, password)
      navigate(next, { replace: true })
    } catch (cause) {
      if (cause instanceof ApiError && cause.sessionExpired) return
      setError(errorText(cause, 'Could not sign in.'))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div>
        <p className="text-sm font-semibold tracking-wide text-[#2a6cb5] uppercase">License study</p>
        <h1 className="mt-2 font-['Fraunces',Georgia,serif] text-4xl leading-tight font-semibold text-[#14375f] sm:text-5xl">
          Read the course. Then prove it on a practice test.
        </h1>
        <p className="mt-4 inline-block rounded-full bg-[#e6f4ea] px-4 py-1 text-xl font-bold text-[#14375f]">Free - Always!</p>
        <p className="mt-4 max-w-xl text-lg text-[#3d5166]">
          Practice tests are a great way to keep learning. Take as many as you can to fine-tune your understanding. Pass the test the first time by being ready for anything! You need to pass with 70%. We do not have the actual test answers. We can only create our own to help you refine your understanding. Don't get lazy. If you can pass these tests at 80%, you should be good to go. But don't be lazy. Know everything you can.
        </p>
        <p className="mt-4 max-w-xl text-lg text-[#3d5166]">
          Utah Life and Health, and the Securities Industry Essentials exam. Pick a test after you sign in. Your reading progress and scores stay with your account.
        </p>
      </div>
      <Card className="p-6 sm:p-8">
        <h2 className="font-['Fraunces',Georgia,serif] text-2xl font-semibold text-[#14375f]">Sign in</h2>
        <p className="mt-2 text-sm text-[#3d5166]">Sign in with your study account username and password.</p>
        {notice ? <p className="mt-4 rounded-xl bg-[#fff6e8] px-3 py-2 text-sm text-[#6a4b16]">{notice}</p> : null}
        <form className="mt-5 space-y-4" onSubmit={onSubmit}>
          <div className="space-y-1.5">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              autoComplete="username"
              maxLength={100}
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>
          {error ? (
            <p className="rounded-xl bg-[#fdecec] px-3 py-2 text-sm text-[#8d1d1d]" role="alert">
              {error}
            </p>
          ) : null}
          <Button type="submit" className="w-full" disabled={busy}>
            {busy ? 'Signing in…' : 'Sign in'}
          </Button>
        </form>
        <p className="mt-4 text-sm text-[#3d5166]">
          New here?{' '}
          <Link className="font-semibold text-[#2a6cb5] hover:underline" to="/register">
            Create a study account
          </Link>
        </p>
        <p className="mt-2 text-sm">
          <Link className="font-semibold text-[#2a6cb5] hover:underline" to="/forgot">
            Forgot password?
          </Link>
        </p>
      </Card>
    </div>
  )
}
