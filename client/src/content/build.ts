import type { Question } from './types.ts'

type Option = {
  text: string
  why: string
  correct?: boolean
}

export function question(id: string, stem: string, options: [Option, Option, Option, Option]): Question {
  const letters = ['a', 'b', 'c', 'd'] as const
  return {
    id,
    stem,
    options: options.map((option, index) => ({
      id: `${id}${letters[index]}`,
      text: option.text,
      correct: Boolean(option.correct),
      rationale: option.why,
    })),
  }
}
