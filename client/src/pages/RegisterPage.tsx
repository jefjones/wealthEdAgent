import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ApiError, errorText } from '../api/client.ts'
import { useAuth } from '../auth/AuthContext.tsx'
import { Button } from '../components/ui/button.tsx'
import { Card } from '../components/ui/card.tsx'
import { Input } from '../components/ui/input.tsx'
import { Label } from '../components/ui/label.tsx'

export function RegisterPage() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    username: '',
    fname: '',
    lname: '',
    emailAddress: '',
    password: '',
    confirmPassword: '',
  })
  const [error, setError] = useState('')
  const [conflict, setConflict] = useState(false)
  const [busy, setBusy] = useState(false)

  function setField(key: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [key]: value }))
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    setBusy(true)
    setError('')
    setConflict(false)
    try {
      await register(form)
      navigate('/study', { replace: true })
    } catch (cause) {
      setConflict(cause instanceof ApiError && cause.status === 409)
      setError(errorText(cause, 'Could not create the account.'))
    } finally {
      setBusy(false)
    }
  }

  return (
    <Card className="mx-auto max-w-lg p-6 sm:p-8">
      <h1 className="font-['Fraunces',Georgia,serif] text-3xl font-semibold text-[#14375f]">Create a study account</h1>
      <p className="mt-2 text-sm text-[#3d5166]">
        If you already have a study account, sign in instead.
      </p>
      <form className="mt-5 space-y-4" onSubmit={onSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="fname">First name</Label>
            <Input id="fname" maxLength={200} value={form.fname} onChange={(event) => setField('fname', event.target.value)} required />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="lname">Last name</Label>
            <Input id="lname" maxLength={25} value={form.lname} onChange={(event) => setField('lname', event.target.value)} required />
          </div>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            maxLength={100}
            autoComplete="username"
            value={form.username}
            onChange={(event) => setField('username', event.target.value)}
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            value={form.emailAddress}
            onChange={(event) => setField('emailAddress', event.target.value)}
            required
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            autoComplete="new-password"
            minLength={8}
            value={form.password}
            onChange={(event) => setField('password', event.target.value)}
            required
          />
          <p className="text-xs text-[#5c7288]">At least 8 characters.</p>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="confirm">Confirm password</Label>
          <Input
            id="confirm"
            type="password"
            autoComplete="new-password"
            value={form.confirmPassword}
            onChange={(event) => setField('confirmPassword', event.target.value)}
            required
          />
        </div>
        {error ? (
          <div className="rounded-xl bg-[#fdecec] px-3 py-2 text-sm text-[#8d1d1d]" role="alert">
            <p>{error}</p>
            {conflict ? (
              <p className="mt-1">
                <Link className="font-semibold underline" to="/login">
                  Sign in instead
                </Link>
              </p>
            ) : null}
          </div>
        ) : null}
        <Button type="submit" className="w-full" disabled={busy}>
          {busy ? 'Creating account…' : 'Create account'}
        </Button>
      </form>
      <p className="mt-4 text-sm text-[#3d5166]">
        Already registered?{' '}
        <Link className="font-semibold text-[#2a6cb5] hover:underline" to="/login">
          Sign in
        </Link>
      </p>
    </Card>
  )
}
