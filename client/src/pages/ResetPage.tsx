import { useState, type FormEvent } from 'react'
import { Link, useParams } from 'react-router-dom'
import { errorText, resetPassword } from '../api/client.ts'
import { Button } from '../components/ui/button.tsx'
import { Card } from '../components/ui/card.tsx'
import { Input } from '../components/ui/input.tsx'
import { Label } from '../components/ui/label.tsx'

export function ResetPage() {
  const { token = '' } = useParams()
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    setBusy(true)
    setError('')
    setMessage('')
    try {
      await resetPassword({ token, newPassword: password, confirmPassword: confirm })
      setMessage('Your password was reset. Sign in with the new password.')
    } catch (cause) {
      setError(errorText(cause, 'Could not reset the password.'))
    } finally {
      setBusy(false)
    }
  }

  return (
    <Card className="mx-auto max-w-md p-6 sm:p-8">
      <h1 className="font-['Fraunces',Georgia,serif] text-3xl font-semibold text-[#14375f]">Choose a new password</h1>
      <form className="mt-5 space-y-4" onSubmit={onSubmit}>
        <div className="space-y-1.5">
          <Label htmlFor="password">New password</Label>
          <Input id="password" type="password" minLength={8} value={password} onChange={(event) => setPassword(event.target.value)} required />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="confirm">Confirm password</Label>
          <Input id="confirm" type="password" value={confirm} onChange={(event) => setConfirm(event.target.value)} required />
        </div>
        {message ? <p className="rounded-xl bg-[#e8f6ee] px-3 py-2 text-sm text-[#146c36]">{message}</p> : null}
        {error ? <p className="rounded-xl bg-[#fdecec] px-3 py-2 text-sm text-[#8d1d1d]">{error}</p> : null}
        <Button type="submit" className="w-full" disabled={busy || !token}>
          {busy ? 'Saving…' : 'Reset password'}
        </Button>
      </form>
      <p className="mt-4 text-sm">
        <Link className="font-semibold text-[#2a6cb5] hover:underline" to="/login">
          Sign in
        </Link>
      </p>
    </Card>
  )
}
