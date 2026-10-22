import { chapter1 } from './chapter1.ts'
import { chapter2 } from './chapter2.ts'
import { chapter3 } from './chapter3.ts'
import type { Chapter, Question, Section, StudyPack } from './types.ts'

export const studyPack: StudyPack = {
  source:
    'Course chapters on general insurance, life insurance basics, and types of life policies. Cleaned from the page images in content/source.',
  chapters: [chapter1, chapter2, chapter3],
}

export type FlatSection = Section & { chapter: Chapter }

export function flatSections(): FlatSection[] {
  return studyPack.chapters.flatMap((chapter) =>
    chapter.sections.map((section) => ({ ...section, chapter })),
  )
}

export function allQuestions(): Question[] {
  return studyPack.chapters.flatMap((chapter) => chapter.sections.flatMap((section) => section.questions))
}

export function findQuestion(id: string) {
  return allQuestions().find((question) => question.id === id) ?? null
}

export function findSection(id: string) {
  return flatSections().find((section) => section.id === id) ?? null
}

export function sectionNeighbors(sectionId: string) {
  const sections = flatSections()
  const index = sections.findIndex((section) => section.id === sectionId)
  return {
    index,
    previous: index > 0 ? sections[index - 1] : null,
    next: index >= 0 && index < sections.length - 1 ? sections[index + 1] : null,
  }
}

export function correctOptionId(question: Question) {
  const correct = question.options.find((option) => option.correct)
  if (!correct) throw new Error(`Question ${question.id} has no correct option.`)
  return correct.id
}
