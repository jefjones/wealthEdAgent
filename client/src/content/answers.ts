import type { Question } from './types.ts'

/** Kept out of pack.ts so pages can use it without pulling the Life and Health content into the main chunk. */
export function correctOptionId(question: Question) {
  const correct = question.options.find((option) => option.correct)
  if (!correct) throw new Error(`Question ${question.id} has no correct option.`)
  return correct.id
}
