import { chapter1 } from './chapter1.ts'
import { chapter2 } from './chapter2.ts'
import { chapter3 } from './chapter3.ts'
import { chapter4 } from './chapter4.ts'
import { chapter5 } from './chapter5.ts'
import { chapter6 } from './chapter6.ts'
import { chapter7 } from './chapter7.ts'
import { chapter8 } from './chapter8.ts'
import { chapter9 } from './chapter9.ts'
import { chapter10 } from './chapter10.ts'
import { chapter11 } from './chapter11.ts'
import { chapter12 } from './chapter12.ts'
import { chapter13 } from './chapter13.ts'
import { chapter14 } from './chapter14.ts'
import { chapter15 } from './chapter15.ts'
import type { Chapter, Question, Section, StudyPack } from './types.ts'

export const studyPack: StudyPack = {
  source:
    'Course chapters on insurance basics, how life insurance works, kinds of life insurance, extra features and add-ons, annuities, retirement plans, taxes on life insurance and annuities, kinds of health insurance, medical plans, employer health insurance, dental insurance, disability insurance, Medicare and long-term care, taxes on health insurance, and Utah insurance rules. Cleaned from the page images in content/source.',
  chapters: [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6, chapter7, chapter8, chapter10, chapter11, chapter12, chapter9, chapter13, chapter14, chapter15],
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

export { correctOptionId } from './answers.ts'
