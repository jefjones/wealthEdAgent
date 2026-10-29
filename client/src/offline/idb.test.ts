import 'fake-indexeddb/auto'
import { describe, expect, it } from 'vitest'
import { getSnapshot, idbOutboxStore, putSnapshot } from './idb.ts'
import { replay } from './outbox.ts'

describe('IndexedDB outbox store', () => {
  it('keeps order, meta and snapshots', async () => {
    const store = idbOutboxStore()
    const base = { personId: 'p', createdAt: 'x', tries: 0, nextAt: 0 }
    const a = await store.add({ ...base, opId: 'a', op: { kind: 'search.add', testId: 'sie', text: 'one' } })
    const b = await store.add({ ...base, opId: 'b', op: { kind: 'search.add', testId: 'sie', text: 'two' } })
    expect(b.seq).toBeGreaterThan(a.seq)
    const order: string[] = []
    const result = await replay(store, 'p', async (item) => {
      order.push(item.opId)
      return { kind: 'done' }
    }, () => null)
    expect(result).toEqual({ status: 'idle', sent: 2 })
    expect(order).toEqual(['a', 'b'])
    expect(await store.list()).toEqual([])
    await store.setMeta('idMap', { L: 'S' })
    expect(await store.getMeta('idMap')).toEqual({ L: 'S' })
    await putSnapshot('p:sie', { savedAt: 'now' })
    expect(await getSnapshot('p:sie')).toEqual({ savedAt: 'now' })
  })
})
