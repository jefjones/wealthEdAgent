/**
 * Tests saved for offline use. Each saved test has: its content chunk(s) in the Cache Storage
 * cache "wea-pack-<testId>", a snapshot of the reader's data in IndexedDB, and an entry in the
 * localStorage index (read synchronously to gate pages and to keep an expired sign-in usable).
 */
import { useSyncExternalStore } from 'react'
import {
  getAttempt,
  getProgress,
  getSeen,
  listAttempts,
  listHighlights,
  listSearchHistory,
  outboxPersonId,
} from '../api/client.ts'
import { LIFE_HEALTH_ID, loadPack, type TestId } from '../content/catalog.ts'
import { loadStudyState } from '../study/stateSync.ts'
import { deleteSnapshot, putSnapshot } from './idb.ts'
import { OFFLINE_TESTS_KEY } from './outbox.ts'
import { syncNow, unsyncedCount } from './sync.ts'

export type OfflineEntry = { savedAt: string; personId: string }
export type OfflineIndex = Record<string, OfflineEntry>

export const PACK_CACHE_PREFIX = 'wea-pack-'
export const PACK_MANIFEST = 'pack-manifest.json'
const ATTEMPT_DETAIL_LIMIT = 200

const listeners = new Set<() => void>()
let cached: { raw: string | null; value: OfflineIndex } = { raw: null, value: {} }
const busy = new Map<string, 'downloading' | 'removing'>()

function emit() {
  listeners.forEach((listener) => listener())
}

export function readOfflineIndex(): OfflineIndex {
  let raw: string | null = null
  try {
    raw = localStorage.getItem(OFFLINE_TESTS_KEY)
  } catch {
    raw = null
  }
  if (raw === cached.raw) return cached.value
  let value: OfflineIndex = {}
  try {
    value = raw ? (JSON.parse(raw) as OfflineIndex) : {}
  } catch {
    value = {}
  }
  cached = { raw, value }
  return value
}

function writeOfflineIndex(next: OfflineIndex) {
  localStorage.setItem(OFFLINE_TESTS_KEY, JSON.stringify(next))
  emit()
}

export function isSavedOffline(testId: string) {
  return Boolean(readOfflineIndex()[testId])
}

export function subscribeOffline(listener: () => void) {
  listeners.add(listener)
  const onStorage = (event: StorageEvent) => {
    if (event.key === OFFLINE_TESTS_KEY) listener()
  }
  if (typeof window !== 'undefined') window.addEventListener('storage', onStorage)
  return () => {
    listeners.delete(listener)
    if (typeof window !== 'undefined') window.removeEventListener('storage', onStorage)
  }
}

export function useOfflineIndex() {
  return useSyncExternalStore(subscribeOffline, readOfflineIndex, readOfflineIndex)
}

export function offlineBusy(testId: string) {
  return busy.get(testId) ?? null
}

/**
 * Whether a test's content can be shown: already loaded, worth trying to load, or online only.
 * Offline, only a test saved for offline use is tried; the others say "Available online only".
 */
export function packGate(input: { loaded: boolean; online: boolean; saved: boolean }): 'ready' | 'load' | 'online-only' {
  if (input.loaded) return 'ready'
  if (!input.online && !input.saved) return 'online-only'
  return 'load'
}

export function snapshotKey(personId: string, testId: string) {
  return `${personId}:${testId}`
}

function withTimeout<T>(promise: Promise<T>, ms: number, message: string) {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(message)), ms)
    promise.then(
      (value) => {
        clearTimeout(timer)
        resolve(value)
      },
      (error: unknown) => {
        clearTimeout(timer)
        reject(error instanceof Error ? error : new Error(message))
      },
    )
  })
}

/** Load the reader's data for one test (this also fills the browser copy used offline) and return it. */
async function takeSnapshot(testId: TestId) {
  const [progress, seen, attempts, highlights, searches, state] = await Promise.all([
    getProgress(),
    getSeen(),
    listAttempts(),
    listHighlights(),
    listSearchHistory(testId),
    loadStudyState(testId),
  ])
  const mine = attempts.attempts.filter((attempt) => (attempt.testId ?? LIFE_HEALTH_ID) === testId)
  const details = []
  for (const attempt of mine.slice(0, ATTEMPT_DETAIL_LIMIT)) {
    // Each read also keeps the answers in this browser, so results open offline.
    details.push(await getAttempt(attempt.attemptId))
  }
  return {
    testId,
    savedAt: new Date().toISOString(),
    progress: progress.sections,
    seen: seen.seen,
    attempts: details,
    highlights: highlights.highlights,
    searches: searches.entries,
    state,
  }
}

/** "Go offline": save the shell check, the test's content chunk(s), and the reader's data. */
export async function goOffline(testId: TestId) {
  const personId = outboxPersonId()
  if (!personId) throw new Error('Sign in first.')
  if (typeof caches === 'undefined' || typeof navigator === 'undefined' || !('serviceWorker' in navigator)) {
    throw new Error('This browser cannot save tests for offline use.')
  }
  busy.set(testId, 'downloading')
  emit()
  try {
    await withTimeout(
      navigator.serviceWorker.ready,
      15_000,
      'Offline use is not ready on this page yet. Reload the page and try again.',
    )
    const base = import.meta.env.BASE_URL || '/'
    const response = await fetch(`${base}${PACK_MANIFEST}`, { cache: 'no-store' })
    if (!response.ok) throw new Error('Saving for offline use is not available in this version of the site.')
    const manifest = (await response.json()) as { packs?: Record<string, string[]> }
    const files = manifest.packs?.[testId] ?? []
    if (files.length === 0) throw new Error('Saving for offline use is not available in this version of the site.')
    const cache = await caches.open(`${PACK_CACHE_PREFIX}${testId}`)
    await cache.addAll(files.map((file) => `${base}${file}`))
    await loadPack(testId)
    const snapshot = await takeSnapshot(testId)
    await putSnapshot(snapshotKey(personId, testId), snapshot)
    writeOfflineIndex({ ...readOfflineIndex(), [testId]: { savedAt: snapshot.savedAt, personId } })
  } finally {
    busy.delete(testId)
    emit()
  }
}

export class OfflineRemoveBlocked extends Error {}

/** Turn offline off for a test. Blocked while any change has not reached the server. */
export async function removeOffline(testId: TestId) {
  busy.set(testId, 'removing')
  emit()
  try {
    await syncNow()
    const left = await unsyncedCount()
    if (left > 0) {
      throw new OfflineRemoveBlocked(
        left === 1
          ? '1 change is not on the server yet. Connect to the internet so it can sync, then try again.'
          : `${left} changes are not on the server yet. Connect to the internet so they can sync, then try again.`,
      )
    }
    if (typeof caches !== 'undefined') await caches.delete(`${PACK_CACHE_PREFIX}${testId}`)
    const entry = readOfflineIndex()[testId]
    if (entry) await deleteSnapshot(snapshotKey(entry.personId, testId)).catch(() => {})
    const next = { ...readOfflineIndex() }
    delete next[testId]
    writeOfflineIndex(next)
  } finally {
    busy.delete(testId)
    emit()
  }
}
