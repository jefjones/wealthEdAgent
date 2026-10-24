import type { Question, Section } from '../types.ts'

export function section(id: string, title: string, body: string, questions: Question[] = []): Section {
  return { id, title, body: body.trim(), questions }
}
