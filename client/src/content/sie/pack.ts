import type { StudyPack } from '../types.ts'
import { stocksChapter } from './ch01.ts'
import { bondsChapter } from './ch02.ts'
import { bondRisksChapter } from './ch03.ts'
import { govBondsChapter } from './ch04.ts'
import { muniChapter } from './ch05.ts'
import { fundsChapter } from './ch06.ts'
import { optionsChapter } from './ch07.ts'
import { newIssuesChapter } from './ch08.ts'
import { tradingChapter } from './ch09.ts'
import { settlementChapter } from './ch10.ts'
import { accountsChapter } from './ch11.ts'
import { otherAccountsChapter } from './ch12.ts'
import { retirementChapter } from './ch13.ts'
import { economyChapter } from './ch14.ts'
import { federalChapter } from './ch15.ts'
import { rulesChapter } from './ch16.ts'

export const siePack: StudyPack = {
  source: 'SIE — Securities Industry Essentials. Sixteen chapters taken from the source chapter text, with the stated 2026 figures.',
  chapters: [
    stocksChapter,
    bondsChapter,
    bondRisksChapter,
    govBondsChapter,
    muniChapter,
    fundsChapter,
    optionsChapter,
    newIssuesChapter,
    tradingChapter,
    settlementChapter,
    accountsChapter,
    otherAccountsChapter,
    retirementChapter,
    economyChapter,
    federalChapter,
    rulesChapter,
  ],
}
