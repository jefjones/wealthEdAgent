import { AlertTriangle, Check, CloudOff, Loader2, LogIn } from 'lucide-react'
import { useState } from 'react'
import { useAuth } from '../auth/AuthContext.tsx'
import { formatLocal } from '../lib/utils.ts'
import { discardSetAside, syncNow, useSyncStatus } from '../offline/sync.ts'

const pill = 'inline-flex min-h-9 items-center gap-1.5 rounded-full px-3 text-xs font-semibold whitespace-nowrap'

/** Header status: Offline, Syncing (n), Synced at time, Sign in to sync, or refused changes. */
export function SyncPill() {
  const status = useSyncStatus()
  const { logout } = useAuth()
  const [open, setOpen] = useState(false)

  let body = null
  if (status.state === 'signIn') {
    body = (
      <button type="button" className={`${pill} bg-[#fff4d6] text-[#6b4a00]`} onClick={logout}>
        <LogIn size={14} aria-hidden />
        Sign in to sync
      </button>
    )
  } else if (status.state === 'offline') {
    body = (
      <span className={`${pill} bg-white/15 text-white`}>
        <CloudOff size={14} aria-hidden />
        Offline{status.pending > 0 ? ` (${status.pending})` : ''}
      </span>
    )
  } else if (status.pending > 0 || status.state === 'syncing') {
    body = (
      <button type="button" className={`${pill} bg-white/15 text-white`} onClick={() => void syncNow()}>
        <Loader2 size={14} className="animate-spin" aria-hidden />
        Syncing ({status.pending})
      </button>
    )
  } else if (status.state === 'synced' && status.lastSyncAt) {
    body = (
      <span className={`${pill} bg-white/15 text-white`} title={`Synced ${formatLocal(status.lastSyncAt)}`}>
        <Check size={14} aria-hidden />
        <span className="hidden sm:inline">Synced</span> {new Date(status.lastSyncAt).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
      </span>
    )
  }

  const refused = status.setAside
  return (
    <div className="relative flex shrink-0 items-center gap-1">
      {body}
      {refused.length > 0 ? (
        <button
          type="button"
          className={`${pill} bg-[#fdecec] text-[#8d1d1d]`}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <AlertTriangle size={14} aria-hidden />
          {refused.length} not saved
        </button>
      ) : null}
      {open && refused.length > 0 ? (
        <div className="absolute top-full right-0 z-50 mt-2 w-[min(20rem,calc(100vw-2rem))] rounded-xl bg-white p-3 text-sm text-[#172033] shadow-lg">
          <p className="font-semibold text-[#14375f]">The server did not accept these changes</p>
          <ul className="mt-2 max-h-64 space-y-2 overflow-auto">
            {refused.map((item) => (
              <li key={item.seq} className="rounded-lg bg-[#f3f7fb] p-2">
                <p>{item.setAside?.message}</p>
                <p className="mt-1 text-xs text-[#5c7288]">{formatLocal(item.createdAt)}</p>
                <button
                  type="button"
                  className="mt-1 text-xs font-semibold text-[#a32626] underline"
                  onClick={() => void discardSetAside(item.seq)}
                >
                  Discard
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
