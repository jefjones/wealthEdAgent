import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { errorText, forgotPassword } from '../api/client.ts'
import { Button } from '../components/ui/button.tsx'
import { Card } from '../components/ui/card.tsx'
import { Input } from '../components/ui/input.tsx'
import { Label } from '../components/ui/label.tsx'

export function ForgotPage() {
  const [username, setUsername] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function onSubmit(event: FormEvent) {
    event.preventDefault()
    setBusy(true)
    setError('')
    setMessage('')
    try {
      await forgotPassword(username.trim())
      setMessage('If an account exists for that username, a reset email was sent.')
    } catch (cause) {
      setError(errorText(cause, 'Could not send the reset email.'))
    } finally {
      setBusy(false)
    }
  }

  return (
    <Card className="mx-auto max-w-md p-6 sm:p-8">
      <h1 className="font-['Fraunces',Georgia,serif] text-3xl font-semibold text-[#14375f]">Forgot password</h1>
      <p className="mt-2 text-sm text-[#3d5166]">
        Enter your username. If an account exists, we will email a link to choose a new password.
      </p>
      <form className="mt-5 space-y-4" onSubmit={onSubmit}>
        <div className="space-y-1.5">
          <Label htmlFor="username">Username</Label>
          <Input id="username" maxLength={100} value={username} onChange={(event) => setUsername(event.target.value)} required />
        </div>
        {message ? (
          <p className="rounded-xl bg-[#e8f6ee] px-3 py-2 text-sm text-[#146c36]" role="status">
            {message}
          </p>
        ) : null}
        {error ? <p className="rounded-xl bg-[#fdecec] px-3 py-2 text-sm text-[#8d1d1d]">{error}</p> : null}
        <Button type="submit" className="w-full" disabled={busy}>
          {busy ? 'Sending…' : 'Send reset email'}
        </Button>
      </form>
      <p className="mt-4 text-sm">
        <Link className="font-semibold text-[#2a6cb5] hover:underline" to="/login">
          Back to sign in
        </Link>
      </p>
    </Card>
  )
}
