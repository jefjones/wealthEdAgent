import { describe, expect, it } from 'vitest'
import { progressLabel } from '../components/OfflineButton.tsx'
import { cachePackFiles, DEV_OFFLINE_MESSAGE, offlineBlocker } from './offlineTests.ts'

describe('Go offline checks', () => {
  const ok = { dev: false, serviceWorker: true, caches: true, secure: true }
  it('says at once that the dev server cannot save offline', () => {
    expect(offlineBlocker({ ...ok, dev: true })).toBe(DEV_OFFLINE_MESSAGE)
  })
  it('needs a secure page and service worker support', () => {
    expect(offlineBlocker({ ...ok, secure: false })).toMatch(/secure address/)
    expect(offlineBlocker({ ...ok, serviceWorker: false })).toMatch(/cannot save/)
    expect(offlineBlocker(ok)).toBeNull()
  })
})

describe('cachePackFiles', () => {
  it('stores every file and reports progress', async () => {
    const stored: string[] = []
    const steps: string[] = []
    await cachePackFiles(
      { put: async (url) => void stored.push(String(url)) },
      ['/a.js', '/b.js'],
      async () => new Response('x'),
      (done, total) => steps.push(`${done}/${total}`),
    )
    expect(stored).toEqual(['/a.js', '/b.js'])
    expect(steps).toEqual(['0/2', '1/2', '2/2'])
  })
  it('fails loudly on a bad file instead of skipping it', async () => {
    await expect(
      cachePackFiles({ put: async () => {} }, ['/a.js', '/b.js'], async (url) => new Response('', { status: url === '/b.js' ? 404 : 200 }), () => {}),
    ).rejects.toThrow('file 2 of 2, error 404')
    await expect(
      cachePackFiles({ put: async () => {} }, ['/a.js'], async () => {
        throw new TypeError('Failed to fetch')
      }, () => {}),
    ).rejects.toThrow(/Check the connection/)
  })
})

describe('progress label', () => {
  it('shows the step', () => {
    expect(progressLabel(null)).toBe('Saving for offline…')
    expect(progressLabel({ step: 'content', done: 1, total: 3 })).toBe('Saving for offline… test content 1 of 3')
    expect(progressLabel({ step: 'data' })).toBe('Saving for offline… your answers and progress')
  })
})
