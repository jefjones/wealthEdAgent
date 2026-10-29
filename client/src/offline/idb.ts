/** IndexedDB "wea-offline": outbox (ordered writes), meta (id map, saved tests), snapshot (study data per test). */
import type { NewOutboxItem, OutboxItem, OutboxStore } from './outbox.ts'

const DB_NAME = 'wea-offline'
const DB_VERSION = 1

function request<T>(req: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
}

let opening: Promise<IDBDatabase> | null = null

export function openOfflineDb(factory: IDBFactory = indexedDB): Promise<IDBDatabase> {
  if (opening) return opening
  opening = new Promise<IDBDatabase>((resolve, reject) => {
    const req = factory.open(DB_NAME, DB_VERSION)
    req.onupgradeneeded = () => {
      const db = req.result
      if (!db.objectStoreNames.contains('outbox')) db.createObjectStore('outbox', { keyPath: 'seq', autoIncrement: true })
      if (!db.objectStoreNames.contains('meta')) db.createObjectStore('meta')
      if (!db.objectStoreNames.contains('snapshot')) db.createObjectStore('snapshot')
    }
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  }).catch((error: unknown) => {
    opening = null
    throw error
  })
  return opening
}

/** Test hook: forget the open connection (fake-indexeddb gives a fresh factory per test). */
export function resetOfflineDbForTests() {
  opening = null
}

async function tx<T>(store: string, mode: IDBTransactionMode, run: (s: IDBObjectStore) => IDBRequest<T>, factory?: IDBFactory) {
  const db = await openOfflineDb(factory)
  const t = db.transaction(store, mode)
  const done = new Promise<void>((resolve, reject) => {
    t.oncomplete = () => resolve()
    t.onerror = () => reject(t.error)
    t.onabort = () => reject(t.error)
  })
  const result = await request(run(t.objectStore(store)))
  await done
  return result
}

export function idbOutboxStore(factory?: IDBFactory): OutboxStore {
  return {
    async add(item: NewOutboxItem) {
      const seq = await tx('outbox', 'readwrite', (s) => s.add(item), factory)
      return { ...item, seq: Number(seq) }
    },
    async list() {
      const rows = await tx('outbox', 'readonly', (s) => s.getAll() as IDBRequest<OutboxItem[]>, factory)
      return rows.sort((a, b) => a.seq - b.seq)
    },
    async put(item: OutboxItem) {
      await tx('outbox', 'readwrite', (s) => s.put(item), factory)
    },
    async remove(seq: number) {
      await tx('outbox', 'readwrite', (s) => s.delete(seq), factory)
    },
    async getMeta<T>(key: string) {
      return (await tx('meta', 'readonly', (s) => s.get(key), factory)) as T | undefined
    },
    async setMeta(key: string, value: unknown) {
      await tx('meta', 'readwrite', (s) => s.put(value, key), factory)
    },
  }
}

export async function putSnapshot(key: string, value: unknown, factory?: IDBFactory) {
  await tx('snapshot', 'readwrite', (s) => s.put(value, key), factory)
}

export async function getSnapshot<T>(key: string, factory?: IDBFactory) {
  return (await tx('snapshot', 'readonly', (s) => s.get(key), factory)) as T | undefined
}

export async function deleteSnapshot(key: string, factory?: IDBFactory) {
  await tx('snapshot', 'readwrite', (s) => s.delete(key), factory)
}
