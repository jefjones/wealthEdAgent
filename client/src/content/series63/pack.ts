import type { StudyPack } from '../types.ts'
import { advisersChapter } from './ch01.ts'
import { brokerDealersChapter } from './ch02.ts'
import { afterRegistrationChapter } from './ch03.ts'
import { securitiesChapter } from './ch04.ts'
import { clientAccountsChapter } from './ch05.ts'
import { ethicsChapter } from './ch06.ts'

export const series63Pack: StudyPack = {
  source: 'Series 63 — Uniform Securities Agent State Law. Six chapters taken from the source chapter text, with 2026 rules.',
  chapters: [
    advisersChapter,
    brokerDealersChapter,
    afterRegistrationChapter,
    securitiesChapter,
    clientAccountsChapter,
    ethicsChapter,
  ],
}
