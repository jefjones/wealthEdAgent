import { useEffect, useState, useSyncExternalStore } from 'react'
import { loadedPack, loadPack, packVersion, subscribePacks, type TestId } from '../content/catalog.ts'
import type { StudyPack } from '../content/types.ts'
import { isSavedOffline, packGate, useOfflineIndex } from './offlineTests.ts'

function subscribeOnline(listener: () => void) {
  window.addEventListener('online', listener)
  window.addEventListener('offline', listener)
  return () => {
    window.removeEventListener('online', listener)
    window.removeEventListener('offline', listener)
  }
}

function onlineNow() {
  return typeof navigator === 'undefined' || navigator.onLine !== false
}

export function useOnline() {
  return useSyncExternalStore(subscribeOnline, onlineNow, () => true)
}

export type PackStatus =
  | { kind: 'ready'; pack: StudyPack }
  | { kind: 'loading' }
  | { kind: 'online-only' }
  | { kind: 'error'; retry: () => void }

/** Loads a test's content chunk, with the offline gate. */
export function usePack(testId: TestId | null): PackStatus {
  useSyncExternalStore(subscribePacks, packVersion, packVersion)
  useOfflineIndex()
  const online = useOnline()
  const [failedFor, setFailedFor] = useState<string | null>(null)
  const [tryCount, setTryCount] = useState(0)
  const pack = testId ? loadedPack(testId) : null
  const gate = testId ? packGate({ loaded: Boolean(pack), online, saved: isSavedOffline(testId) }) : 'online-only'

  useEffect(() => {
    if (!testId || gate !== 'load') return
    let live = true
    loadPack(testId).catch(() => {
      if (live) setFailedFor(testId)
    })
    return () => {
      live = false
    }
  }, [testId, gate, tryCount])

  if (pack) return { kind: 'ready', pack }
  if (gate === 'online-only') return { kind: 'online-only' }
  if (failedFor === testId) {
    if (!online) return { kind: 'online-only' }
    return {
      kind: 'error',
      retry: () => {
        setFailedFor(null)
        setTryCount((n) => n + 1)
      },
    }
  }
  return { kind: 'loading' }
}
