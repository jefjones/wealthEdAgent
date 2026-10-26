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
  /** Figure ids drawn below the study text. They are not part of the body, so text offsets stay the same. */
  figures?: string[]
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
