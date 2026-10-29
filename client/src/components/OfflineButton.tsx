import { CloudDownload, CloudOff, Loader2 } from 'lucide-react'
import { useState } from 'react'
import type { TestId } from '../content/catalog.ts'
import { formatLocal } from '../lib/utils.ts'
import { goOffline, offlineBusy, removeOffline, useOfflineIndex } from '../offline/offlineTests.ts'
import { useOnline } from '../offline/usePack.ts'
import { Button } from './ui/button.tsx'

/** Go offline / Downloading / Available offline (date) with a way to turn it off. One per test. */
export function OfflineButton({ testId }: { testId: TestId }) {
  const index = useOfflineIndex()
  const online = useOnline()
  const entry = index[testId]
  const busy = offlineBusy(testId)
  const [error, setError] = useState('')
  const [confirming, setConfirming] = useState(false)

  async function save() {
    setError('')
    try {
      await goOffline(testId)
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Could not save this test for offline use.')
    }
  }

  async function remove() {
    setError('')
    setConfirming(false)
    try {
      await removeOffline(testId)
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Could not turn offline off.')
    }
  }

  return (
    <div className="min-w-0">
      {busy === 'downloading' ? (
        <Button type="button" variant="outline" disabled>
          <Loader2 size={16} className="animate-spin" aria-hidden />
          Downloading…
        </Button>
      ) : entry ? (
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full bg-[#e6f4ec] px-3 py-1.5 text-xs font-semibold text-[#157a43]">
            <CloudOff size={14} aria-hidden />
            Available offline · {formatLocal(entry.savedAt)}
          </span>
          {confirming ? (
            <span className="inline-flex items-center gap-1">
              <Button type="button" size="sm" variant="danger" onClick={() => void remove()} disabled={busy === 'removing'}>
                Remove download
              </Button>
              <Button type="button" size="sm" variant="ghost" onClick={() => setConfirming(false)}>
                Keep
              </Button>
            </span>
          ) : (
            <Button type="button" size="sm" variant="ghost" onClick={() => setConfirming(true)} disabled={busy === 'removing'}>
              {busy === 'removing' ? 'Turning off…' : 'Turn off offline'}
            </Button>
          )}
        </div>
      ) : (
        <Button type="button" variant="outline" onClick={() => void save()} disabled={!online}>
          <CloudDownload size={16} aria-hidden />
          Go offline
        </Button>
      )}
      {error ? (
        <p className="mt-2 text-sm text-[#8d1d1d]" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}
