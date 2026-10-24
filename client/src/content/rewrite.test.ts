import { describe, expect, it } from 'vitest'
import { allQuestions, studyPack } from './pack.ts'
import { subjectTitle } from './rewrite.ts'

function sectionBody(id: string): string {
  for (const chapter of studyPack.chapters) {
    const section = chapter.sections.find((item) => item.id === id)
    if (section) return section.body
  }
  throw new Error(`missing section ${id}`)
}

describe('subject titles', () => {
  it('drops a leading topic number and keeps the subject', () => {
    expect(subjectTitle('Topic 4: Policy Riders')).toBe('Policy Riders')
    expect(subjectTitle('Topic 12 — Taxes')).toBe('Taxes')
    expect(subjectTitle('  topic 3. Kinds of policies')).toBe('Kinds of policies')
    expect(subjectTitle('What insurance is')).toBe('What insurance is')
    expect(subjectTitle('A topic of the lesson')).toBe('A topic of the lesson')
  })
})

describe('study text', () => {
  it('keeps the corrected facts in the only section body', () => {
    const facts: Record<string, string[]> = {
      'c1-terms': ['indemnify', 'Law of large numbers'],
      'c1-contracts': ['$65', '$80,000', '$30,000', '$8,200'],
      'c1-insurers': ['American Samoa', 'Puerto Rico', 'Certificate of Authority'],
      'c1-market': ['AM Best', 'ceding insurer'],
      'c1-producers': ['commingle'],
      'c2-amount': ['$72,000', '$55,000', '$1,925,000', '35 years'],
      'c2-classes': ['about $1,000 or less', 'age 121'],
      'c2-personal': ['No other legal method creates an immediate estate at such a small cost.'],
      'c2-premium': ['$910', '$240', '$1,150'],
      'c2-settlements': ['Camila', '$60,000', '$95,000', 'STOLI'],
      'c2-company': ['Fair Credit Reporting Act', 'Medical Information Bureau'],
      'c3-term': ['25% to 50%', '$640', '$12,800'],
      'c3-whole': ['age 121', 'third policy year'],
      'c3-universal': ['0% to 2%', 'December 31, 1984'],
      'c3-variable': ['Series 6', 'Series 7', 'Series 63', 'not a trustee'],
      'c3-group': ['31 days', '5 years'],
      'c4-contract': ['10 days', '30 days'],
      'c4-beneficiaries': ['$120,000', 'Priya Shah', '$20,000'],
      'c4-loans': ['$157,250', '6 months'],
      'c4-benefit': ['$154,550', '90 days', '25% to 40%'],
      'c5-fixed': ['typically 3%', '15%', 'Standard and Poor'],
      'c5-mva': ["Moody's", '7-year', '3 to 10 years'],
      'c5-surrender': ['$1,194', '59½', '8th year'],
      'c5-uses': ['$320', 'Pension Protection Act of 2006'],
      'c6-ira': ['January 1, 2023', '72 to 73', '25%', '2033', '$400'],
      'c6-keogh': ['1,000 hours', 'at least 10%'],
      'c6-sep-simple': ['25%', '$5,000', '3%'],
      'c6-401k': ['50%'],
      'c7-surrender': ['$50,000', 'transfer for value', '$2,000'],
      'c7-mec': ['7-pay', 'Tax Reform Act of 1984'],
      'c7-annuity': ['$800', '25% of the shortfall', '10% of the shortfall'],
      'c7-rollover': ['60 days', '20%'],
      'c7-inherited': ['December 31', '10 years'],
      'c7-1035': ['Section 1035'],
      'c8-limited': ['THIS IS A LIMITED POLICY', '90 days'],
      'c8-replace': ['Aisha'],
      'c8-contract': ['45 days', '15 days'],
      'c10-hsa': ['$1,700', '$4,400', '$8,750', '$8,500', '20%'],
      'c10-dependents': ['$4,000', 'age 26'],
      'c10-pool': ['$1,500,000', '12 directors'],
      'c10-aca': ['March 23, 2010', 'bronze 60%'],
      'c11-cobra': ['102%', '18 months', '36 months'],
      'c11-utah': ['180 days'],
      'c11-small': ['between 2 and 50', '$1,500'],
      'c11-defined': ['January 1, 2010', '25%'],
      'c11-medicare': ['30 months', '$160,000'],
      'c12-benefits': ['80%', '$720'],
      'c12-limits': ['6 months', "plan's schedule", '5 years'],
      'c9-qualify': ['24 months', '30%'],
      'c9-income': ['pediatric dentist', '45%'],
      'c9-periods': ['61st day', '91st day'],
      'c9-social': ['$24,480', '$2,040', '1935', '40 quarters'],
      'c13-parta': ['$565', '$311', '40 quarters'],
      'c13-hospital': ['190 days', '$1,736'],
      'c13-partb': ['$202.90', '$283'],
      'c13-partd': ['$2,100', '$615', 'national base beneficiary premium'],
      'c13-mippa': ['low-income subsidy'],
      'c13-gaprules': ['June 1, 2010', '200%'],
      'c13-ltc': ['$210', '$185', 'Title XVIII'],
      'c14-personal': ['7.5%'],
      'c14-disability': ['$2,000', '$1,500', '$500'],
      'c14-chart': ['7.5%', '20%'],
      'c15-maintain': ['24 hours'],
      'c15-discipline': ['$2,500', '$10,000'],
      'c15-unfair': ['$25 lunch', '$10 coffee', 'under $100'],
      'c15-federal': ['18 U.S.C. 1033', '8 a.m.', '9 p.m.'],
    }
    for (const chapter of studyPack.chapters) {
      for (const section of chapter.sections) {
        expect(section.body.length, section.id).toBeGreaterThan(80)
        expect(section.body.toLowerCase().includes('mywealthed'), section.id).toBe(false)
        for (const fact of facts[section.id] ?? []) {
          expect(section.body, `${section.id} missing ${fact}`).toContain(fact)
        }
      }
    }
    expect(sectionBody('c1-handling')).not.toContain('plane crash')
    expect(sectionBody('c1-contracts')).not.toContain('$200')
    expect(sectionBody('c2-amount')).not.toContain('$1,000,000')
    expect(sectionBody('c2-settlements')).not.toContain('$575,000')
    expect(sectionBody('c3-term')).not.toContain('$11,400')
    expect(sectionBody('c4-beneficiaries')).not.toContain('Quentin')
    expect(sectionBody('c4-loans')).not.toContain('$96,500')
    expect(sectionBody('c5-surrender')).not.toContain('$665')
    expect(sectionBody('c7-surrender')).not.toContain('$13,000')
    expect(sectionBody('c8-replace')).not.toContain('Robert')
    expect(sectionBody('c10-ppo')).not.toContain('90%')
    expect(sectionBody('c9-income')).not.toContain('ophthalmologist')
    expect(sectionBody('c13-ltc')).not.toContain('$100')
    expect(sectionBody('c14-disability')).not.toContain('40%')
    expect(sectionBody('c7-annuity')).not.toContain('50% of the shortfall')
    expect(sectionBody('c13-partd')).not.toContain('$4,660')
    expect(sectionBody('c13-mippa')).not.toContain('eliminates Medicare Part D')
    expect(sectionBody('c14-chart')).not.toContain('10% of adjusted')
    expect(sectionBody('c8-specialty')).not.toContain('once a year')
    expect(sectionBody('c8-adjustments')).not.toContain('to credit life insurance')
    expect(sectionBody('c2-classes')).not.toContain('$2,000 to $10,000')
    expect(sectionBody('c3-universal')).not.toContain('often 3% to 6%')
    expect(sectionBody('c13-medicaid')).not.toContain('Department of Public Welfare')
  })

  it('does not teach the retired figures as a correct answer', () => {
    const retired = [
      '50% of the shortfall',
      '$4,660',
      'eliminates Medicare Part D',
      'eliminates Part D late-enrollment',
      'exams and cleaning once a year',
      'cleaning once a year',
      '10% of adjusted gross income',
      '2 to 3 years',
      '$506',
      '$278',
      '$1,050',
      '3% to 6%',
      '$2,000 to $10,000',
      'age 100',
      'age-100',
      '$3,850',
      '$7,750',
      'Department of Public Welfare',
      'Center for Medicare and Medicaid',
      '$150,000 if that year is 2023',
    ]
    for (const question of allQuestions()) {
      const correct = question.options.find((option) => option.correct)
      const blob = `${question.stem}\n${correct?.text ?? ''}\n${correct?.rationale ?? ''}`
      for (const phrase of retired) {
        expect(blob, `${question.id} still teaches ${phrase}`).not.toContain(phrase)
      }
    }
  })
})
