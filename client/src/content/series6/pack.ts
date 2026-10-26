import type { StudyPack } from '../types.ts'
import { basicsChapter } from './ch01.ts'
import { investmentCompaniesChapter } from './ch02.ts'
import { buyingSellingChapter } from './ch03.ts'
import { variableProductsChapter } from './ch04.ts'
import { retirementChapter } from './ch05.ts'
import { accountsChapter } from './ch06.ts'
import { taxationChapter } from './ch07.ts'
import { analysisChapter } from './ch08.ts'
import { regulationChapter } from './ch09.ts'
import { sroChapter } from './ch10.ts'

export const series6Pack: StudyPack = {
  source:
    'Series 6 — Investment Company and Variable Contracts Products. Ten chapters taken from the source chapter text, with 2026 figures.',
  chapters: [
    basicsChapter,
    investmentCompaniesChapter,
    buyingSellingChapter,
    variableProductsChapter,
    retirementChapter,
    accountsChapter,
    taxationChapter,
    analysisChapter,
    regulationChapter,
    sroChapter,
  ],
}
