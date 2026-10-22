export type Choice = {
  id: string
  text: string
  correct: boolean
  rationale: string
}

export type Question = {
  id: string
  stem: string
  options: Choice[]
}

export type Section = {
  id: string
  title: string
  body: string
  questions: Question[]
}

export type Chapter = {
  id: string
  number: number
  title: string
  summary: string
  sections: Section[]
}

export type StudyPack = {
  source: string
  chapters: Chapter[]
}
