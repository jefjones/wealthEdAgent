import { studyPack } from './pack.ts'
import { siePack } from './sie/pack.ts'
import type { Chapter, Question, Section, StudyPack } from './types.ts'

export const SITE_TITLE = 'Life/Health and Securities Licenses Test Content Study'

export const LIFE_HEALTH_ID = 'life-health'
export const SIE_ID = 'sie'

export type TestId = typeof LIFE_HEALTH_ID | typeof SIE_ID

export type TestCourse = {
  id: TestId
  title: string
  blurb: string
  pack: StudyPack
}

export const tests: readonly TestCourse[] = [
  {
    id: LIFE_HEALTH_ID,
    title: 'Utah Life and Health',
    blurb: 'Insurance basics through Utah insurance rules. Read the chapters, then practice.',
    pack: studyPack,
  },
  {
    id: SIE_ID,
    title: 'SIE — Securities Industry Essentials',
    blurb: 'Stocks, bonds, funds, accounts, and the rules for the securities industry.',
    pack: siePack,
  },
]

export function isTestId(value: string): value is TestId {
  return tests.some((test) => test.id === value)
}

export function getTest(testId: string): TestCourse | null {
  return tests.find((test) => test.id === testId) ?? null
}

export type CourseSection = Section & { chapter: Chapter; testId: TestId }

export function courseChapters(testId: string): Chapter[] {
  return getTest(testId)?.pack.chapters ?? []
}

export function courseSections(testId: string): CourseSection[] {
  const test = getTest(testId)
  if (!test) return []
  return test.pack.chapters.flatMap((chapter) =>
    chapter.sections.map((section) => ({ ...section, chapter, testId: test.id })),
  )
}

export function courseQuestions(testId: string): Question[] {
  return courseChapters(testId).flatMap((chapter) => chapter.sections.flatMap((section) => section.questions))
}

export function findCourseSection(testId: string, sectionId: string) {
  return courseSections(testId).find((section) => section.id === sectionId) ?? null
}

export function findCourseQuestion(testId: string, questionId: string) {
  return courseQuestions(testId).find((question) => question.id === questionId) ?? null
}

/** Any test. Used when a path has a section id but the caller only needs the chapter. */
export function findSectionAnywhere(sectionId: string) {
  for (const test of tests) {
    const section = findCourseSection(test.id, sectionId)
    if (section) return section
  }
  return null
}
