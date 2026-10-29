import { describe, expect, it } from 'vitest'
import { packGate } from './offlineTests.ts'
import { getTest, getTestInfo, loadedPack, SIE_ID, tests } from '../content/catalog.ts'

describe('offline gating of tests', () => {
  it('online: every test loads', () => {
    expect(packGate({ loaded: false, online: true, saved: false })).toBe('load')
  })
  it('offline: only the saved test loads, any other is online only', () => {
    expect(packGate({ loaded: false, online: false, saved: true })).toBe('load')
    expect(packGate({ loaded: false, online: false, saved: false })).toBe('online-only')
  })
  it('a pack already in memory shows even offline', () => {
    expect(packGate({ loaded: true, online: false, saved: false })).toBe('ready')
  })
})

describe('lazy packs', () => {
  it('metadata chapter counts match the loaded packs', () => {
    for (const test of tests) expect(loadedPack(test.id)?.chapters.length).toBe(test.chapterCount)
  })
  it('getTest returns the content only once loaded; getTestInfo always', () => {
    expect(getTestInfo(SIE_ID)?.title).toContain('SIE')
    expect(getTest(SIE_ID)?.pack.chapters.length).toBe(16)
    expect(getTestInfo('nope')).toBeNull()
  })
})
