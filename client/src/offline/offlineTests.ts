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

/** What "Go offline" is doing right now, for the button. */
export type OfflineProgress =
  | { step: 'starting' }
  | { step: 'content'; done: number; total: number }
  | { step: 'data' }

export const PACK_CACHE_PREFIX = 'wea-pack-'
export const PACK_MANIFEST = 'pack-manifest.json'
export const DEV_OFFLINE_MESSAGE =
  'Offline mode works on the built site, not the dev server. Run npx vite build, then npx vite preview, and open that address.'
const ATTEMPT_DETAIL_LIMIT = 200
const WORKER_WAIT_MS = 8_000

const listeners = new Set<() => void>()
let cached: { raw: string | null; value: OfflineIndex } = { raw: null, value: {} }
const busy = new Map<string, 'downloading' | 'removing'>()
const progress = new Map<string, OfflineProgress>()

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

export function offlineProgress(testId: string) {
  return progress.get(testId) ?? null
}

function setProgress(testId: string, next: OfflineProgress) {
  progress.set(testId, next)
  emit()
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

/** A reason "Go offline" cannot work here, known at once (no waiting), or null. */
export function offlineBlocker(env: { dev: boolean; serviceWorker: boolean; caches: boolean; secure: boolean }): string | null {
  if (env.dev) return DEV_OFFLINE_MESSAGE
  if (!env.secure) return 'Offline mode needs a secure address (https, or localhost on this computer).'
  if (!env.serviceWorker || !env.caches) return 'This browser cannot save tests for offline use.'
  return null
}

function timeout(ms: number) {
  return new Promise<null>((resolve) => setTimeout(() => resolve(null), ms))
}

/**
 * The service worker that will serve the saved files. Registers it if the page has not yet, waits
 * a short, bounded time for it to activate, then for it to control the page (clientsClaim).
 * Caching works once it is active; control is only needed to open pages with no connection.
 */
export async function ensureWorker(container: ServiceWorkerContainer, scriptUrl: string, waitMs = WORKER_WAIT_MS) {
  let registration = (await container.getRegistration()) ?? null
  if (!registration) registration = await container.register(scriptUrl, { scope: import.meta.env.BASE_URL || '/' })
  const ready = await Promise.race([container.ready, timeout(waitMs)])
  if (!ready?.active) {
    throw new Error('The offline service did not start. Reload the page, then click Go offline again.')
  }
  if (!container.controller) {
    await Promise.race([
      new Promise<void>((resolve) => container.addEventListener('controllerchange', () => resolve(), { once: true })),
      timeout(Math.min(waitMs, 3_000)),
    ])
  }
  return { registration: ready, controlled: Boolean(container.controller) }
}

/** Download each content file into the test's cache. Any failed file is an error, never skipped. */
export async function cachePackFiles(
  cache: Pick<Cache, 'put'>,
  urls: readonly string[],
  fetcher: (url: string) => Promise<Response>,
  onProgress: (done: number, total: number) => void,
) {
  onProgress(0, urls.length)
  let done = 0
  for (const url of urls) {
    let response: Response
    try {
      response = await fetcher(url)
    } catch {
      throw new Error('Could not download the test. Check the connection and try again.')
    }
    if (!response.ok) throw new Error(`Could not download the test (file ${done + 1} of ${urls.length}, error ${response.status}). Try again.`)
    await cache.put(url, response)
    done += 1
    onProgress(done, urls.length)
  }
}

/** Load the reader's data for one test (this also fills the browser copy used offline) and return it. */
async function takeSnapshot(testId: TestId) {
  const [progressRows, seen, attempts, highlights, searches, state] = await Promise.all([
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
    progress: progressRows.sections,
    seen: seen.seen,
    attempts: details,
    highlights: highlights.highlights,
    searches: searches.entries,
    state,
  }
}

/** "Go offline": make sure the service worker is running, save the test's content, then the reader's data. */
export async function goOffline(testId: TestId) {
  const personId = outboxPersonId()
  if (!personId) throw new Error('Sign in first.')
  const blocker = offlineBlocker({
    dev: import.meta.env.DEV,
    serviceWorker: typeof navigator !== 'undefined' && 'serviceWorker' in navigator,
    caches: typeof caches !== 'undefined',
    secure: typeof window === 'undefined' || window.isSecureContext,
  })
  if (blocker) throw new Error(blocker)
  if (typeof navigator !== 'undefined' && navigator.onLine === false) throw new Error('Connect to the internet to save this test.')
  busy.set(testId, 'downloading')
  setProgress(testId, { step: 'starting' })
  try {
    const base = import.meta.env.BASE_URL || '/'
    await ensureWorker(navigator.serviceWorker, `${base}sw.js`)
    const response = await fetch(`${base}${PACK_MANIFEST}`, { cache: 'no-store' }).catch(() => null)
    if (!response?.ok) throw new Error('Could not get the list of files for this test. Reload the page and try again.')
    const manifest = (await response.json()) as { packs?: Record<string, string[]> }
    const files = manifest.packs?.[testId] ?? []
    if (files.length === 0) throw new Error('This test has no offline files in this version of the site. Reload the page and try again.')
    const cache = await caches.open(`${PACK_CACHE_PREFIX}${testId}`)
    await cachePackFiles(
      cache,
      files.map((file) => `${base}${file}`),
      (url) => fetch(url, { cache: 'no-cache' }),
      (done, total) => setProgress(testId, { step: 'content', done, total }),
    )
    await loadPack(testId)
    setProgress(testId, { step: 'data' })
    const snapshot = await takeSnapshot(testId)
    await putSnapshot(snapshotKey(personId, testId), snapshot)
    writeOfflineIndex({ ...readOfflineIndex(), [testId]: { savedAt: snapshot.savedAt, personId } })
  } finally {
    busy.delete(testId)
    progress.delete(testId)
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
