import { describe, expect, it } from 'vitest'
import { findNearDuplicates, normalizeText, stemOverlap } from './nearDuplicates.ts'
import type { Question } from './types.ts'

function item(id: string, stem: string, answer: string, sectionId = 'a'): Question & { sectionId: string } {
  return {
    id,
    stem,
    sectionId,
    options: [
      { id: `${id}a`, text: answer, correct: true, rationale: 'Right.' },
      { id: `${id}b`, text: 'Other one', correct: false, rationale: 'No.' },
      { id: `${id}c`, text: 'Other two', correct: false, rationale: 'No.' },
      { id: `${id}d`, text: 'Other three', correct: false, rationale: 'No.' },
    ],
  } as Question & { sectionId: string }
}

describe('near-duplicate check', () => {
  it('normalizes case and punctuation but keeps numbers', () => {
    expect(normalizeText('  What is  $500,000? ')).toBe('what is $500 000')
    expect(stemOverlap('A b c', 'a B c')).toBe(1)
    expect(stemOverlap('one two', 'three four')).toBe(0)
  })

  it('flags repeated stems and same-answer rewordings', () => {
    expect(findNearDuplicates([item('q1', 'Who files Form BD?', 'A broker-dealer'), item('q2', 'who files form BD', 'An agent', 'b')])).toHaveLength(1)
    expect(findNearDuplicates([item('q1', 'How long must a firm keep trade records?', '3 years'), item('q2', 'How long must a firm keep its trade records?', '3 years')])).toHaveLength(1)
  })

  it('allows the same idea with a different fact or a different section', () => {
    expect(findNearDuplicates([item('q1', 'An adviser has $105 million in AUM. Where does it register?', 'Either'), item('q2', 'An adviser has $130 million in AUM. Where does it register?', 'The SEC')])).toEqual([])
    expect(findNearDuplicates([item('q1', 'How long are records kept?', '3 years', 'a'), item('q2', 'How long are records kept for advisers?', '3 years', 'b')])).toEqual([])
  })
})
