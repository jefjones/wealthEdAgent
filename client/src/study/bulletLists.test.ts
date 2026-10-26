import { describe, expect, it } from 'vitest'
import { courseSections, tests } from '../content/catalog.ts'
import { sourceBlocks, type SourceRun } from './highlights.ts'
import { splitSentences } from './narrator.ts'

const body = 'Intro line.\n\nAs owners, common shareholders have rights: • Inspect books. Reports go out. • Transfer ownership. • A residual claim. Owners are paid last.'

function runsOf(text: string): SourceRun[] {
  return sourceBlocks(text).flatMap((block) => (block.kind === 'list' ? block.runs : [block.run]))
}

describe('inline bullet lists', () => {
  it('splits a lead-in paragraph and list items with offsets into the body', () => {
    const blocks = sourceBlocks(body)
    expect(blocks.map((block) => block.kind)).toEqual(['paragraph', 'paragraph', 'list'])
    const lead = blocks[1]
    expect(lead?.kind === 'paragraph' && lead.run.text).toBe('As owners, common shareholders have rights:')
    const list = blocks[2]
    if (list?.kind !== 'list') throw new Error('no list')
    expect(list.runs.map((run) => run.text)).toEqual(['Inspect books. Reports go out.', 'Transfer ownership.', 'A residual claim. Owners are paid last.'])
    for (const run of runsOf(body)) expect(body.slice(run.start, run.end)).toBe(run.text)
  })

  it('keeps own-line bullet lists and plain paragraphs as before', () => {
    const lined = 'Lead:\n• One\n• Two'
    const blocks = sourceBlocks(lined)
    expect(blocks.map((block) => block.kind)).toEqual(['paragraph', 'list'])
    expect(sourceBlocks('Just text.')).toEqual([{ kind: 'paragraph', run: { start: 0, end: 10, text: 'Just text.' } }])
  })

  it('narration starts a new sentence at each bullet and never speaks the bullet', () => {
    const sentences = splitSentences(body)
    expect(sentences.some((s) => s.speak.includes('•'))).toBe(false)
    expect(sentences.map((s) => s.speak)).toContain('As owners, common shareholders have rights:')
    expect(sentences.map((s) => s.speak)).toContain('Transfer ownership.')
    const runs = runsOf(body)
    for (const s of sentences) expect(runs.some((run) => s.start >= run.start && s.end <= run.end)).toBe(true)
  })

  it('every run in every test points at its own body text', () => {
    const counts: Record<string, number> = {}
    for (const test of tests) {
      counts[test.id] = 0
      for (const section of courseSections(test.id)) {
        for (const para of section.body.split(/\n\n+/)) if (/\S[ \t]+•/u.test(para)) counts[test.id]! += 1
        for (const run of runsOf(section.body)) expect(section.body.slice(run.start, run.end)).toBe(run.text)
      }
    }
    console.log('INLINE_BULLET_PARAGRAPHS', JSON.stringify(counts))
  })
})
