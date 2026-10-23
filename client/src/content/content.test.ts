import { describe, expect, it } from 'vitest'
import { allQuestions, flatSections, studyPack } from './pack.ts'

describe('study pack', () => {
  it('gives every chapter at least 15 questions and covers every section', () => {
    expect(studyPack.chapters).toHaveLength(15)
    for (const chapter of studyPack.chapters) {
      const questions = chapter.sections.flatMap((section) => section.questions)
      expect(questions.length).toBeGreaterThanOrEqual(15)
      for (const section of chapter.sections) {
        expect(section.questions.length).toBeGreaterThan(0)
        expect(section.body.length).toBeGreaterThan(80)
      }
    }
  })

  it('uses four options, one correct answer, and short ids', () => {
    const ids = new Set<string>()
    for (const question of allQuestions()) {
      expect(question.id.length).toBeGreaterThan(0)
      expect(question.id.length).toBeLessThanOrEqual(64)
      expect(ids.has(question.id)).toBe(false)
      ids.add(question.id)
      expect(question.options).toHaveLength(4)
      expect(question.options.filter((option) => option.correct)).toHaveLength(1)
      for (const option of question.options) {
        expect(option.id.length).toBeLessThanOrEqual(64)
        expect(option.text.trim().length).toBeGreaterThan(0)
        expect(option.rationale.trim().length).toBeGreaterThan(0)
      }
    }
    expect(flatSections().length).toBeGreaterThanOrEqual(20)
  })

  it('keeps chapter ids and shows the new display order', () => {
    expect(studyPack.chapters.map((chapter) => [chapter.number, chapter.id, chapter.title])).toEqual([
      [1, 'ch-general', 'Insurance Basics'],
      [2, 'ch-basics', 'How Life Insurance Works'],
      [3, 'ch-policies', 'Kinds of Life Insurance'],
      [4, 'ch-provisions', 'Extra Features and Add-Ons'],
      [5, 'ch-annuities', 'Annuities: Income for Retirement'],
      [6, 'ch-qualified', 'Retirement Plans like 401(k)s and IRAs'],
      [7, 'ch-taxation', 'Taxes on Life Insurance and Annuities'],
      [8, 'ch-health', 'Kinds of Health Insurance'],
      [9, 'ch-medical', 'Medical Plans like HMOs and PPOs'],
      [10, 'ch-group', 'Health Insurance from an Employer'],
      [11, 'ch-dental', 'Dental Insurance'],
      [12, 'ch-disability', 'Disability Insurance: Pay When You Can’t Work'],
      [13, 'ch-medicare', 'Medicare and Long-Term Care'],
      [14, 'ch-health-tax', 'Taxes on Health Insurance'],
      [15, 'ch-utah', 'Utah Insurance Rules'],
    ])
  })

  it('keeps every section id and shows the same order in the menu and the study pages', () => {
    const previousIds: Record<string, string[]> = {
      'ch-general': ['c1-terms', 'c1-risk', 'c1-handling', 'c1-insurable', 'c1-insurers', 'c1-market', 'c1-producers', 'c1-contracts'],
      'ch-basics': ['c2-interest', 'c2-personal', 'c2-amount', 'c2-settlements', 'c2-business', 'c2-classes', 'c2-solicit', 'c2-field', 'c2-company', 'c2-premium', 'c2-delivery'],
      'ch-policies': ['c3-term', 'c3-whole', 'c3-adjustable', 'c3-universal', 'c3-variable', 'c3-joint', 'c3-juvenile', 'c3-group', 'c3-credit'],
      'ch-provisions': ['c4-standard', 'c4-assignment', 'c4-contract', 'c4-premium', 'c4-reinstate', 'c4-exclusions', 'c4-beneficiaries', 'c4-rights', 'c4-loans', 'c4-riders', 'c4-benefit', 'c4-nonforfeiture', 'c4-dividends', 'c4-settlement'],
      'ch-annuities': ['c5-parties', 'c5-periods', 'c5-funding', 'c5-surrender', 'c5-life', 'c5-joint', 'c5-certain', 'c5-fixed', 'c5-variable', 'c5-mva', 'c5-uses'],
      'ch-qualified': ['c6-qualified', 'c6-contrast', 'c6-ira', 'c6-roth', 'c6-keogh', 'c6-sep-simple', 'c6-401k', 'c6-403b', 'c6-tax'],
      'ch-taxation': ['c7-life', 'c7-surrender', 'c7-estate', 'c7-mec', 'c7-annuity', 'c7-corporate', 'c7-ira', 'c7-inherited', 'c7-roth', 'c7-rollover', 'c7-1035'],
      'ch-health': ['c8-perils', 'c8-classes', 'c8-limited', 'c8-specialty', 'c8-exclusions', 'c8-marketing', 'c8-field', 'c8-sources', 'c8-replace', 'c8-contract', 'c8-claims', 'c8-adjustments', 'c8-renew'],
      'ch-medical': ['c10-concepts', 'c10-major', 'c10-hmo', 'c10-ppo', 'c10-pos', 'c10-hsa', 'c10-hra', 'c10-cost', 'c10-dependents', 'c10-hipaa', 'c10-pool', 'c10-aca'],
      'ch-group': ['c11-contract', 'c11-marketing', 'c11-groups', 'c11-funding', 'c11-underwriting', 'c11-eligibility', 'c11-cob', 'c11-replace', 'c11-cobra', 'c11-utah', 'c11-small', 'c11-defined', 'c11-erisa', 'c11-fairness', 'c11-medicare'],
      'ch-dental': ['c12-plans', 'c12-treatment', 'c12-benefits', 'c12-deductible', 'c12-limits', 'c12-group', 'c12-pediatric'],
      'ch-disability': ['c9-qualify', 'c9-income', 'c9-periods', 'c9-features', 'c9-riders', 'c9-partial', 'c9-coord', 'c9-underwrite', 'c9-group', 'c9-business', 'c9-social'],
      'ch-medicare': ['c13-parts', 'c13-parta', 'c13-hospital', 'c13-partb', 'c13-advantage', 'c13-partd', 'c13-primary', 'c13-medigap', 'c13-gaprules', 'c13-select', 'c13-medicaid', 'c13-mippa', 'c13-ltc', 'c13-ltcrules'],
      'ch-health-tax': ['c14-personal', 'c14-disability', 'c14-medical', 'c14-business', 'c14-cdhp', 'c14-hra', 'c14-chart'],
      'ch-utah': ['c15-license', 'c15-types', 'c15-maintain', 'c15-commissioner', 'c15-company', 'c15-claims', 'c15-fiduciary', 'c15-discipline', 'c15-unfair', 'c15-fraud', 'c15-federal'],
    }
    const display: Record<string, string[][]> = {
      'ch-general': [
        ['c1-terms', 'What insurance is'],
        ['c1-risk', 'Risk, hazard, peril, and loss'],
        ['c1-handling', 'Ways to handle a risk'],
        ['c1-insurable', 'Which risks can be insured'],
        ['c1-contracts', 'What makes an insurance contract'],
        ['c1-insurers', 'Who issues the policy'],
        ['c1-producers', 'Agents and the authority they have'],
        ['c1-market', 'How policies are sold and shared'],
      ],
      'ch-basics': [
        ['c2-interest', 'Who is allowed to buy a policy'],
        ['c2-personal', 'Why families buy life insurance'],
        ['c2-amount', 'How much life insurance to buy'],
        ['c2-classes', 'Term coverage and permanent coverage'],
        ['c2-business', 'Why a business buys life insurance'],
        ['c2-solicit', 'Sales talks, illustrations, and suitability'],
        ['c2-field', 'The application and field underwriting'],
        ['c2-company', 'How the company accepts or rates the risk'],
        ['c2-premium', 'How the premium is calculated'],
        ['c2-delivery', 'Issuing and delivering the policy'],
        ['c2-settlements', 'Selling an existing policy, and STOLI'],
      ],
      'ch-policies': [
        ['c3-term', 'Term life: coverage for a set period'],
        ['c3-whole', 'Whole life: lifetime coverage with cash value'],
        ['c3-adjustable', 'Adjustable life: move between term and whole life'],
        ['c3-universal', 'Universal life: change the premium'],
        ['c3-variable', 'Variable life: cash value follows investments'],
        ['c3-joint', 'One policy on two people'],
        ['c3-juvenile', 'Life insurance on a child'],
        ['c3-group', 'Life insurance from a group'],
        ['c3-credit', 'Coverage that pays off a loan'],
      ],
      'ch-provisions': [
        ['c4-standard', 'The standard parts of a life policy'],
        ['c4-contract', 'The entire contract, changes, and the free look'],
        ['c4-premium', 'Premiums and the grace period'],
        ['c4-reinstate', 'Reinstatement, incontestability, and age'],
        ['c4-exclusions', 'Exclusions, suicide, and backdating'],
        ['c4-assignment', 'Transferring the policy to someone else'],
        ['c4-beneficiaries', 'Who receives the death benefit'],
        ['c4-rights', 'Backup beneficiaries and related limits'],
        ['c4-loans', 'Policy loans and withdrawals'],
        ['c4-nonforfeiture', 'Choices if you stop paying premiums'],
        ['c4-dividends', 'What you can do with dividends'],
        ['c4-settlement', 'How the death benefit is paid'],
        ['c4-riders', 'Riders for disability and other people'],
        ['c4-benefit', 'Riders that change the death benefit'],
      ],
      'ch-annuities': [
        ['c5-parties', 'What an annuity is'],
        ['c5-periods', 'The pay-in period and the income period'],
        ['c5-funding', 'How you pay in, and when income starts'],
        ['c5-life', 'Income that can last for life'],
        ['c5-joint', 'Income for two people'],
        ['c5-certain', 'Income for a fixed number of years'],
        ['c5-fixed', 'Fixed and indexed annuities'],
        ['c5-variable', 'Variable annuities'],
        ['c5-mva', 'Market value adjusted annuities'],
        ['c5-surrender', 'Taking money out early'],
        ['c5-uses', 'Ways people use annuities'],
      ],
      'ch-qualified': [
        ['c6-qualified', 'What makes a retirement plan qualified'],
        ['c6-contrast', 'Qualified plans and nonqualified plans'],
        ['c6-ira', 'Traditional IRAs'],
        ['c6-roth', 'Roth IRAs'],
        ['c6-keogh', 'Keogh plans for self-employed people'],
        ['c6-sep-simple', 'SEP and SIMPLE plans'],
        ['c6-401k', 'Profit-sharing and 401(k) plans'],
        ['c6-403b', '403(b) plans for schools and charities'],
        ['c6-tax', 'Taxes when the money comes out'],
      ],
      'ch-taxation': [
        ['c7-life', 'Taxes on life insurance you own'],
        ['c7-surrender', 'Cashing in a policy, and the death benefit'],
        ['c7-estate', 'Life insurance in the taxable estate'],
        ['c7-mec', 'Modified endowment contracts'],
        ['c7-annuity', 'Taxes on an annuity you own'],
        ['c7-corporate', 'Annuities in the estate and company-owned annuities'],
        ['c7-ira', 'Taxes on a traditional IRA'],
        ['c7-roth', 'Roth IRAs compared with traditional IRAs'],
        ['c7-inherited', 'What an IRA beneficiary receives'],
        ['c7-rollover', 'Rolling money from one plan to another'],
        ['c7-1035', 'Swapping one contract for another'],
      ],
      'ch-health': [
        ['c8-perils', 'Accidents, sickness, and the benefits paid'],
        ['c8-classes', 'The main kinds of health policies'],
        ['c8-limited', 'Policies that cover only some costs'],
        ['c8-specialty', 'Other limited health policies'],
        ['c8-exclusions', 'Losses a health policy will not pay'],
        ['c8-marketing', 'How health policies are advertised'],
        ['c8-field', 'The application and field underwriting'],
        ['c8-sources', 'How the company investigates the risk'],
        ['c8-replace', 'Replacing a health policy'],
        ['c8-contract', 'The contract, the grace period, and beneficiaries'],
        ['c8-claims', 'Claims and the time limit on certain defenses'],
        ['c8-adjustments', 'Age, job, and other policy rules'],
        ['c8-renew', 'Whether you can renew the policy'],
      ],
      'ch-medical': [
        ['c10-concepts', 'Deductibles, coinsurance, and copays'],
        ['c10-major', 'Major medical plans'],
        ['c10-hmo', 'HMOs'],
        ['c10-ppo', 'PPOs and other network plans'],
        ['c10-pos', 'Point-of-service plans'],
        ['c10-hsa', 'Health savings accounts'],
        ['c10-hra', 'Health reimbursement accounts'],
        ['c10-cost', 'How plans try to control cost'],
        ['c10-dependents', 'Who can be covered as a dependent in Utah'],
        ['c10-hipaa', 'HIPAA'],
        ['c10-pool', 'The Utah high-risk health pool'],
        ['c10-aca', 'The Affordable Care Act and the Utah exchange'],
      ],
      'ch-group': [
        ['c11-contract', 'The master policy and the certificates'],
        ['c11-groups', 'Groups that can buy coverage'],
        ['c11-funding', 'Insurer-funded plans and self-funded plans'],
        ['c11-underwriting', 'How a group is underwritten'],
        ['c11-eligibility', 'Who may enroll'],
        ['c11-cob', 'When two group plans cover the same person'],
        ['c11-replace', 'Changing from one insurer to another'],
        ['c11-cobra', 'Keeping the plan after you leave the job'],
        ['c11-utah', 'Utah continuation, conversion, and military leave'],
        ['c11-small', 'Medical plans for small employers'],
        ['c11-defined', 'Defined contribution arrangements and pre-existing conditions'],
        ['c11-marketing', 'Advertising and which state law applies'],
        ['c11-erisa', 'ERISA'],
        ['c11-fairness', 'Age, pregnancy, and civil rights'],
        ['c11-medicare', 'When the employer plan pays before Medicare'],
      ],
      'ch-dental': [
        ['c12-plans', 'Scheduled plans and nonscheduled plans'],
        ['c12-treatment', 'Diagnostic, preventive, and restorative care'],
        ['c12-benefits', 'Preventive, basic, and major services'],
        ['c12-deductible', 'Deductibles and combination plans'],
        ['c12-limits', 'Exclusions and predetermination'],
        ['c12-group', 'Dental coverage from an employer'],
        ['c12-pediatric', 'Dental coverage for children'],
      ],
      'ch-disability': [
        ['c9-qualify', 'What disability income insurance does'],
        ['c9-income', 'Total disability and replacing income'],
        ['c9-partial', 'Partial and residual disability'],
        ['c9-periods', 'The waiting period and the benefit period'],
        ['c9-features', 'Injury, sickness, and waiver of premium'],
        ['c9-riders', 'Extra benefits and refund riders'],
        ['c9-coord', 'Coordinating with Social Security'],
        ['c9-underwrite', 'How an individual policy is underwritten'],
        ['c9-group', 'Disability coverage from an employer'],
        ['c9-business', 'Disability coverage a business buys'],
        ['c9-social', 'Social Security disability'],
      ],
      'ch-medicare': [
        ['c13-parts', 'Who Medicare covers'],
        ['c13-parta', 'How you get Part A'],
        ['c13-hospital', 'What Part A pays for a hospital stay'],
        ['c13-partb', 'What Part B pays'],
        ['c13-advantage', 'Medicare Advantage'],
        ['c13-partd', 'Part D prescription drugs'],
        ['c13-primary', 'Which plan pays first'],
        ['c13-medigap', 'Medicare supplement plans'],
        ['c13-select', 'Medicare SELECT'],
        ['c13-gaprules', 'Utah rules for Medicare supplements'],
        ['c13-mippa', 'Rules for selling to people on Medicare'],
        ['c13-medicaid', 'Medicaid'],
        ['c13-ltc', 'What long-term care insurance pays'],
        ['c13-ltcrules', 'Utah rules for long-term care'],
      ],
      'ch-health-tax': [
        ['c14-personal', 'Health insurance you pay for yourself'],
        ['c14-disability', 'Disability premiums an employer pays'],
        ['c14-medical', 'Group medical, dental, long-term care, and AD&D'],
        ['c14-business', 'Key person and buy-sell disability'],
        ['c14-cdhp', 'High-deductible plans and health savings accounts'],
        ['c14-hra', 'Health reimbursement accounts'],
        ['c14-chart', 'A chart of what is deductible and what is taxed'],
      ],
      'ch-utah': [
        ['c15-commissioner', 'The Insurance Commissioner'],
        ['c15-license', 'Who must have a license'],
        ['c15-types', 'Producers, consultants, adjusters, and nonresidents'],
        ['c15-maintain', 'Renewing a license and continuing education'],
        ['c15-company', 'Insurer rates, policy forms, and appointments'],
        ['c15-fiduciary', 'Trust accounts, controlled business, and commissions'],
        ['c15-unfair', 'Unfair marketing practices'],
        ['c15-claims', 'Unfair claim practices'],
        ['c15-discipline', 'License suspension, revocation, and fines'],
        ['c15-fraud', 'Privacy, fraud, and contracts that are not allowed'],
        ['c15-federal', 'Federal credit, fraud, privacy, and telemarketing rules'],
      ],
    }
    const pages = flatSections()
    const seen = new Set<string>()
    const questionSection = new Map<string, string>()
    for (const chapter of studyPack.chapters) {
      const menu = chapter.sections.map((section) => [section.id, section.title])
      const study = pages.filter((section) => section.chapter.id === chapter.id).map((section) => [section.id, section.title])
      expect(study).toEqual(menu)
      expect(menu).toEqual(display[chapter.id])
      const ids = menu.map((row) => row[0] ?? '')
      expect(new Set(ids)).toEqual(new Set(previousIds[chapter.id]))
      expect(ids).toHaveLength(previousIds[chapter.id]?.length)
      for (const id of ids) {
        expect(seen.has(id)).toBe(false)
        seen.add(id)
      }
      for (const section of chapter.sections) {
        for (const question of section.questions) {
          expect(questionSection.has(question.id)).toBe(false)
          questionSection.set(question.id, section.id)
        }
      }
    }
    expect(seen.size).toBe(pages.length)
    expect(questionSection.get('c1q01')).toBe('c1-terms')
    expect(questionSection.get('c11q22')).toBe('c11-contract')
    expect(questionSection.get('c15q21')).toBe('c15-license')
    expect(questionSection.get('c9q17')).toBe('c9-qualify')
  })
})
