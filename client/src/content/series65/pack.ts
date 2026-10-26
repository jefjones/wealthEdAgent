import type { StudyPack } from '../types.ts'
import { securitiesChapter } from './ch01.ts'
import { economyChapter } from './ch02.ts'
import { portfolioChapter } from './ch03.ts'
import { clientsChapter } from './ch04.ts'
import { accountsChapter } from './ch05.ts'
import { registrationChapter } from './ch06.ts'
import { afterRegChapter } from './ch07.ts'
import { securitiesLawChapter } from './ch08.ts'
import { ethicsChapter } from './ch09.ts'

export const series65Pack: StudyPack = {
  source: 'Series 65 — Uniform Investment Adviser Law. Nine chapters rewritten from the source chapter text, with 2026 rules.',
  chapters: [
    securitiesChapter,
    economyChapter,
    portfolioChapter,
    clientsChapter,
    accountsChapter,
    registrationChapter,
    afterRegChapter,
    securitiesLawChapter,
    ethicsChapter,
  ],
}
