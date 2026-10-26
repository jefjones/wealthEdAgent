import { question } from '../build.ts'
import type { Question, Section } from '../types.ts'

type Option = { text: string; why: string; correct?: boolean }

export type SourcedQuestion = Question & { sectionId: string; quote: string }

export function section(id: string, title: string, body: string, questions: Question[] = [], figures?: string[]): Section {
  const built: Section = { id, title, body: body.trim(), questions }
  return figures && figures.length > 0 ? { ...built, figures } : built
}

/** A question tied to its section. The quote is the exact study text that answers it. */
export function sourced(
  id: string,
  sectionId: string,
  quote: string,
  stem: string,
  options: [Option, Option, Option, Option],
): Question {
  const item: SourcedQuestion = { ...question(id, stem, options), sectionId, quote }
  return item
}
