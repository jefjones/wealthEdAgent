import { question } from '../build.ts'
import type { Question } from '../types.ts'

export const chapter14Extra: Record<string, Question[]> = {
  'c14-personal': [
    question(
      'c14q16',
      'What often determines how insurance benefits are taxed?',
      [
        {
          text: 'Whether the insured itemizes deductions on the tax return.',
          why: 'Itemizing is the filing step required before an unreimbursed medical expense deduction applies. Taxation of insurance benefits is often determined by whether or not the premiums were taxed.',
        },
        {
          text: 'Whether the plan is a defined-benefit plan or a defined-contribution plan.',
          why: 'Those terms describe how an employer plan states benefits or contributions. Taxation of insurance benefits is often determined by whether or not the premiums were taxed.',
        },
        {
          text: 'Whether gross income has already been reduced by adjustments to income.',
          why: 'Gross income minus adjustments to income is adjusted gross income. Taxation of insurance benefits is often determined by whether or not the premiums were taxed.',
        },
        {
          text: 'Whether or not the premiums were taxed.',
          why: 'Taxation of insurance benefits is often determined by whether or not the premiums were taxed. The comparison is between personally owned health insurance and similar coverage provided by an employer.',
          correct: true,
        },
      ],
    ),
    question(
      'c14q17',
      'Which coverages are compared in this discussion of personally owned health insurance?',
      [
        {
          text: 'Personally owned health insurance and similar coverage provided by an employer.',
          why: 'The comparison is between personally owned health insurance and similar coverage provided by an employer.',
          correct: true,
        },
        {
          text: 'Defined-benefit plans and defined-contribution plans.',
          why: 'A defined-benefit plan has the employer specify promised benefits, and a defined-contribution plan focuses on contributions. The comparison drawn here is personally owned health insurance and similar employer coverage.',
        },
        {
          text: 'Tax-exempt amounts and taxable amounts.',
          why: 'Tax exempt means not subject to taxation, and taxable means subject to taxation. The comparison drawn here is personally owned health insurance and similar coverage provided by an employer.',
        },
        {
          text: 'Adjusted gross income and the Internal Revenue Code.',
          why: 'Adjusted gross income is gross income minus adjustments, and the Internal Revenue Service enforces the Internal Revenue Code. The comparison is personally owned health insurance and similar employer coverage.',
        },
      ],
    ),
    question(
      'c14q18',
      'What is adjusted gross income?',
      [
        {
          text: 'All income from whatever source, before any adjustments.',
          why: 'Gross income means all income from whatever source. Adjusted gross income is that gross income minus adjustments to income.',
        },
        {
          text: 'Gross income, meaning all income from whatever source, minus adjustments to income.',
          why: 'Adjusted gross income is gross income, meaning all income from whatever source, minus adjustments to income.',
          correct: true,
        },
        {
          text: 'A qualified expense that may reduce the amount of income subject to taxation.',
          why: 'That is the meaning of tax deductible. Adjusted gross income is gross income minus adjustments to income.',
        },
        {
          text: 'Income that is not subject to taxation.',
          why: 'Not subject to taxation is the meaning of tax exempt. Adjusted gross income is gross income minus adjustments to income.',
        },
      ],
    ),
    question(
      'c14q19',
      'In a defined-benefit plan, what does the employer specify?',
      [
        {
          text: 'Contributions rather than the benefits the plan will pay out.',
          why: 'Defined-contribution plans focus on contributions rather than on the benefits they will pay out. In a defined-benefit plan, the employer specifies an amount of benefits promised to the employee.',
        },
        {
          text: 'That every benefit is tax exempt.',
          why: 'Tax exempt means not subject to taxation, which is not what a defined-benefit plan specifies. The employer specifies an amount of benefits promised to the employee.',
        },
        {
          text: 'An amount of benefits promised to the employee.',
          why: 'In a defined-benefit plan, the employer specifies an amount of benefits promised to the employee.',
          correct: true,
        },
        {
          text: 'The taxes the Internal Revenue Service will collect.',
          why: 'The Internal Revenue Service collects taxes and enforces the Internal Revenue Code. A defined-benefit plan is one in which the employer specifies an amount of benefits promised to the employee.',
        },
      ],
    ),
    question(
      'c14q20',
      'What do defined-contribution plans focus on?',
      [
        {
          text: 'An amount of benefits the employer promises to the employee.',
          why: 'That is a defined-benefit plan. Defined-contribution plans focus on contributions rather than on the benefits they will pay out.',
        },
        {
          text: 'Whether or not the premiums were taxed.',
          why: 'Whether or not the premiums were taxed often determines how benefits are taxed. Defined-contribution plans focus on contributions rather than on the benefits they will pay out.',
        },
        {
          text: 'Collecting taxes and enforcing the Internal Revenue Code.',
          why: 'That is the role of the Internal Revenue Service. Defined-contribution plans focus on contributions rather than on the benefits they will pay out.',
        },
        {
          text: 'Contributions rather than the benefits they will pay out.',
          why: 'Defined-contribution plans focus on contributions rather than on the benefits they will pay out.',
          correct: true,
        },
      ],
    ),
    question(
      'c14q21',
      'What is the Internal Revenue Service responsible for?',
      [
        {
          text: 'Collecting taxes and enforcing the Internal Revenue Code.',
          why: 'The Internal Revenue Service is the U.S. government agency responsible for collecting taxes and enforcing the Internal Revenue Code.',
          correct: true,
        },
        {
          text: 'Deciding that a receipt is subject to taxation.',
          why: 'Subject to taxation is the meaning of taxable. The Internal Revenue Service collects taxes and enforces the Internal Revenue Code.',
        },
        {
          text: 'Treating a receipt as not subject to taxation.',
          why: 'Not subject to taxation is the meaning of tax exempt. The Internal Revenue Service collects taxes and enforces the Internal Revenue Code.',
        },
        {
          text: 'Labeling a qualified expense that may reduce income subject to taxation.',
          why: 'A qualified expense that may reduce the amount of income subject to taxation is tax deductible. The Internal Revenue Service collects taxes and enforces the Internal Revenue Code.',
        },
      ],
    ),
    question(
      'c14q22',
      'Unreimbursed medical expenses must be in excess of what share of adjusted gross income before the law permits a deduction?',
      [
        {
          text: 'All adjusted gross income, with nothing left over.',
          why: 'The deduction is not allowed for the entire adjusted gross income. The law permits deductions for unreimbursed expenses in excess of 7.5% of adjusted gross income.',
        },
        {
          text: '7.5% of adjusted gross income.',
          why: 'The law permits deductions for unreimbursed expenses in excess of 7.5% of adjusted gross income. This applies only if the insured itemizes these deductions on the tax return.',
          correct: true,
        },
        {
          text: 'The amount of benefits a defined-benefit plan promises.',
          why: 'A defined-benefit plan is one in which the employer specifies an amount of benefits promised to the employee. The medical expense deduction uses 7.5% of adjusted gross income.',
        },
        {
          text: 'Any expense the glossary calls tax exempt.',
          why: 'Tax exempt means not subject to taxation. The law permits a deduction for unreimbursed expenses in excess of 7.5% of adjusted gross income.',
        },
      ],
    ),
    question(
      'c14q23',
      'Under a medical expense policy, whose unreimbursed medical expenses may be claimed as deductions when the percentage test is met?',
      [
        {
          text: 'Only the insured.',
          why: 'The insured is included, and so are two other groups. Unreimbursed medical expenses paid for the insured, the insured’s spouse, and dependents may be claimed when the expenses exceed a certain percentage of adjusted gross income.',
        },
        {
          text: 'Only dependents.',
          why: 'Dependents are included, and so are the insured and the insured’s spouse. Those unreimbursed medical expenses may be claimed when they exceed a certain percentage of the insured’s adjusted gross income.',
        },
        {
          text: 'The insured, the insured’s spouse, and dependents.',
          why: 'Unreimbursed medical expenses paid for the insured, the insured’s spouse, and dependents may be claimed as deductions if the expenses exceed a certain percentage of the insured’s adjusted gross income.',
          correct: true,
        },
        {
          text: 'Only the insured’s spouse.',
          why: 'The spouse is included together with the insured and dependents. The deduction is for unreimbursed medical expenses paid for all three when the percentage test is met.',
        },
      ],
    ),
    question(
      'c14q24',
      'What must the insured do for the unreimbursed medical expense deduction to apply?',
      [
        {
          text: 'Have an employer specify the benefit in a defined-benefit plan.',
          why: 'A defined-benefit plan is a plan in which the employer specifies an amount of benefits promised to the employee. The medical expense deduction applies only if the insured itemizes these deductions on the tax return.',
        },
        {
          text: 'Treat the expense as tax exempt and skip the tax return.',
          why: 'Tax exempt means not subject to taxation. The unreimbursed medical expense deduction applies only if the insured itemizes these deductions on the tax return.',
        },
        {
          text: 'Ask the Internal Revenue Service to pay the expense.',
          why: 'The Internal Revenue Service collects taxes and enforces the Internal Revenue Code. The deduction applies only if the insured itemizes these deductions on the tax return.',
        },
        {
          text: 'Itemize these deductions on the tax return.',
          why: 'The unreimbursed medical expense deduction applies only if the insured itemizes these deductions on the tax return. The expenses must also be in excess of 7.5% of adjusted gross income.',
          correct: true,
        },
      ],
    ),
  ],
  'c14-disability': [
    question(
      'c14q25',
      'How may the employer treat premiums it pays for employees’ disability income insurance?',
      [
        {
          text: 'As a deductible business expense.',
          why: 'Premiums the employer pays for employees’ disability income insurance are deductible as a business expense and are not taxable income to the employee.',
          correct: true,
        },
        {
          text: 'As a nondeductible personal expense of the employee.',
          why: 'The employee’s own contribution is not deductible. Premiums the employer pays are deductible as a business expense.',
        },
        {
          text: 'As taxable income to the employee.',
          why: 'Those employer-paid premiums are not taxable income to the employee. They are deductible by the employer as a business expense.',
        },
        {
          text: 'As income benefits taxed as ordinary income.',
          why: 'Income benefits taxed as ordinary income are a benefit rule under certain plans. The employer’s premium itself is deductible as a business expense.',
        },
      ],
    ),
    question(
      'c14q26',
      'How are disability benefits taxed when they are attributable to employer contributions?',
      [
        {
          text: 'They are not taxable.',
          why: 'Benefits attributable to the employee’s portion of the contribution are not taxable. Benefits attributable to employer contributions are fully taxable to the employee as income.',
        },
        {
          text: 'They are fully taxable to the employee as income.',
          why: 'Benefits an employee receives that are attributable to employer contributions are fully taxable to the employee as income.',
          correct: true,
        },
        {
          text: 'They are deductible by the employee.',
          why: 'The employee’s own contribution is not deductible. Benefits attributable to employer contributions are fully taxable to the employee as income.',
        },
        {
          text: 'They are received income tax free because the employer paid the premium.',
          why: 'Employer payment of the premium does not make those benefits tax free. Benefits attributable to employer contributions are fully taxable to the employee as income.',
        },
      ],
    ),
    question(
      'c14q27',
      'What is the tax treatment of the employee’s own contribution toward disability income insurance?',
      [
        {
          text: 'It is deductible as a business expense.',
          why: 'A business-expense deduction is available for premiums the employer pays. The employee’s own contribution is not deductible.',
        },
        {
          text: 'It is included in the employer’s gross income.',
          why: 'Benefits attributable to employer contributions are fully taxable to the employee as income. The employee’s own contribution is not deductible.',
        },
        {
          text: 'It is not deductible.',
          why: 'The employee’s own contribution is not deductible. Benefits attributable to the employee’s portion of the contribution are not taxable.',
          correct: true,
        },
        {
          text: 'It makes every benefit fully taxable.',
          why: 'Benefits attributable to the employee’s portion are not taxable. The employee’s own contribution is not deductible.',
        },
      ],
    ),
    question(
      'c14q28',
      'In a partially contributory disability plan, who pays the premium?',
      [
        {
          text: 'The employer pays the entire premium.',
          why: 'The employer pays the entire premium in a noncontributory plan. In a partially contributory plan, the employer and the employee each pay part of the premium.',
        },
        {
          text: 'The employee pays the entire premium.',
          why: 'The employee pays the entire premium in a fully contributory plan. In a partially contributory plan, the employer and the employee each pay part of the premium.',
        },
        {
          text: 'Neither party pays, because benefits are a business expense.',
          why: 'Premiums the employer pays are deductible as a business expense, but that does not remove the premium. In a partially contributory plan, the employer and the employee each pay part.',
        },
        {
          text: 'The employer and the employee each pay part of the premium.',
          why: 'In a partially contributory plan, the employer and the employee each pay part of the premium.',
          correct: true,
        },
      ],
    ),
    question(
      'c14q29',
      'In a partially contributory plan, how is the portion of the benefit paid by the employee received?',
      [
        {
          text: 'Income tax free.',
          why: 'Under a partially contributory plan, the portion paid by the employee is received income tax free. The portion paid by the employer is included in the employee’s gross income and taxed as ordinary income.',
          correct: true,
        },
        {
          text: 'Included in the employee’s gross income and taxed as ordinary income.',
          why: 'That is how the portion paid by the employer is treated. The portion paid by the employee is received income tax free.',
        },
        {
          text: 'Fully taxable because the employer also pays part.',
          why: 'The employer’s part is taxed. The portion paid by the employee is received income tax free.',
        },
        {
          text: 'Deductible as a business expense of the employee.',
          why: 'The employee’s own contribution is not deductible. The portion of the benefit paid by the employee is received income tax free.',
        },
      ],
    ),
    question(
      'c14q30',
      'What benefit period do short-term disability group plans usually have?',
      [
        {
          text: '2 years or longer.',
          why: 'Long-term disability group plans usually pay benefits for 2 years or longer. Short-term disability group plans usually have a benefit period of less than 2 years.',
        },
        {
          text: 'Less than 2 years.',
          why: 'Short-term disability group plans usually have a benefit period of less than 2 years.',
          correct: true,
        },
        {
          text: 'No benefit period when the disability results from an accident.',
          why: 'The accident exception applies to the elimination period, not to erasing the benefit period. Short-term plans usually have a benefit period of less than 2 years.',
        },
        {
          text: 'A period that starts only after a maximum dollar amount is reached.',
          why: 'It is common to place a maximum dollar amount on the benefit regardless of earnings. The usual benefit period for a short-term plan is less than 2 years.',
        },
      ],
    ),
    question(
      'c14q31',
      'What is it common to place on a short-term disability benefit regardless of earnings?',
      [
        {
          text: 'An elimination period that applies only to accidents.',
          why: 'Short-term plans usually have an elimination period except for disability resulting from accidents. It is also common to place a maximum dollar amount on the benefit regardless of earnings.',
        },
        {
          text: 'A benefit period of 2 years or longer.',
          why: 'A benefit period of 2 years or longer is the usual long-term plan. On a short-term benefit, it is common to place a maximum dollar amount regardless of earnings.',
        },
        {
          text: 'A maximum dollar amount.',
          why: 'It is common to place a maximum dollar amount on the short-term benefit regardless of earnings.',
          correct: true,
        },
        {
          text: 'Federal Insurance Contributions Act withholding on the employee’s own contribution.',
          why: 'Federal Insurance Contributions Act withholding applies to benefits attributable to the employer’s contribution. A short-term plan commonly places a maximum dollar amount on the benefit regardless of earnings.',
        },
      ],
    ),
    question(
      'c14q32',
      'Short-term disability group plans usually have an elimination period. Which disability is the exception?',
      [
        {
          text: 'A disability that lasts 2 years or longer.',
          why: 'Benefits for 2 years or longer describe a long-term plan. The elimination-period exception is disability resulting from accidents.',
        },
        {
          text: 'A disability paid for by the employee’s contribution.',
          why: 'Benefits attributable to the employee’s portion are not taxable, which is a tax rule. The elimination-period exception is disability resulting from accidents.',
        },
        {
          text: 'A disability under a plan in which the employer pays the entire premium.',
          why: 'A plan in which the employer pays the entire premium is noncontributory. The elimination-period exception is disability resulting from accidents.',
        },
        {
          text: 'Disability resulting from accidents.',
          why: 'Short-term disability group plans usually have an elimination period, except for disability resulting from accidents.',
          correct: true,
        },
      ],
    ),
    question(
      'c14q33',
      'How long do long-term disability group plans usually pay benefits?',
      [
        {
          text: 'For 2 years or longer.',
          why: 'Long-term disability group plans usually pay benefits for 2 years or longer.',
          correct: true,
        },
        {
          text: 'For less than 2 years.',
          why: 'Less than 2 years is the usual short-term benefit period. Long-term plans usually pay benefits for 2 years or longer.',
        },
        {
          text: 'Only through the elimination period.',
          why: 'An elimination period is a common short-term feature, except for accidents. Long-term plans usually pay benefits for 2 years or longer.',
        },
        {
          text: 'Only for disability resulting from accidents.',
          why: 'Disability resulting from accidents is the exception to the short-term elimination period. Long-term plans usually pay benefits for 2 years or longer.',
        },
      ],
    ),
    question(
      'c14q34',
      'Which disability benefits are subject to Federal Insurance Contributions Act withholding for Social Security purposes?',
      [
        {
          text: 'Benefits attributable to the employee’s own contribution.',
          why: 'Benefits attributable to the employee’s portion of the contribution are not taxable. Federal Insurance Contributions Act withholding applies to benefits attributable to the employer’s contribution.',
        },
        {
          text: 'Benefits attributable to the employer’s contribution.',
          why: 'Benefits paid to disabled employees that are attributable to the employer’s contribution are subject to Federal Insurance Contributions Act withholding for Social Security purposes.',
          correct: true,
        },
        {
          text: 'Benefits from a plan in which the employee pays the entire premium.',
          why: 'When the employee pays the entire premium, the plan is fully contributory and the income benefits are received income tax free. Federal Insurance Contributions Act withholding applies to benefits attributable to the employer’s contribution.',
        },
        {
          text: 'Only the maximum dollar amount on a short-term benefit.',
          why: 'A maximum dollar amount is a common limit on a short-term benefit regardless of earnings. Federal Insurance Contributions Act withholding applies to benefits attributable to the employer’s contribution.',
        },
      ],
    ),
    question(
      'c14q35',
      'In a fully contributory disability plan, who pays the entire premium?',
      [
        {
          text: 'The employer.',
          why: 'The employer pays the entire premium in a noncontributory plan. In a fully contributory plan, the employee pays the entire premium.',
        },
        {
          text: 'The employer and the employee each pay part.',
          why: 'Each party paying part describes a partially contributory plan. In a fully contributory plan, the employee pays the entire premium.',
        },
        {
          text: 'The employee.',
          why: 'In a fully contributory plan, the employee pays the entire premium, so the income benefits are received income tax free.',
          correct: true,
        },
        {
          text: 'The employer pays 60% and the employee pays 40%.',
          why: 'If an employee contributes 40% of the premium, the taxed share is the 60% employer share. A fully contributory plan is one in which the employee pays the entire premium.',
        },
      ],
    ),
  ],
  'c14-medical': [
    question(
      'c14q36',
      'Which general rule applies to premiums for long-term care policies?',
      [
        {
          text: 'Premiums are received income tax free as daily benefits.',
          why: 'Daily benefits, not premiums, are received income tax free when they do not exceed the daily cost of care. Premiums may be deductible.',
        },
        {
          text: 'Premiums are deductible only above 7.5% of adjusted gross income for people who itemize.',
          why: 'That limit is the rule most people who itemize use for unreimbursed medical expenses. For long-term care, premiums may be deductible.',
        },
        {
          text: 'Premiums are deductible only as accidental death and dismemberment business expenses.',
          why: 'Group accidental death and dismemberment premiums are deductible to the employer as an ordinary business expense. Long-term care premiums may be deductible under the general long-term care rules.',
        },
        {
          text: 'Premiums may be deductible.',
          why: 'Under the general rules for long-term care policies, premiums may be deductible.',
          correct: true,
        },
      ],
    ),
    question(
      'c14q37',
      'Why may sole proprietors and partners deduct the cost of a medical expense plan provided to them and their families?',
      [
        {
          text: 'They are self-employed individuals, not employees.',
          why: 'Sole proprietors and partners may deduct 100% of the cost of a medical expense plan provided to them and their families, because they are self-employed individuals, not employees.',
          correct: true,
        },
        {
          text: 'They are employees who itemize unreimbursed expenses.',
          why: 'Itemizing is the rule for people claiming unreimbursed medical expenses above 7.5% of adjusted gross income. Sole proprietors and partners may deduct the plan because they are self-employed individuals, not employees.',
        },
        {
          text: 'Group medical and dental benefits are taxable to them.',
          why: 'Group medical and dental benefits are received income tax free by the employee. Sole proprietors and partners deduct the plan cost because they are self-employed individuals, not employees.',
        },
        {
          text: 'Their daily long-term care benefits exceed the cost of care.',
          why: 'Long-term care benefits paid in excess of the cost of care received are taxed as ordinary income. The sole proprietor deduction exists because they are self-employed individuals, not employees.',
        },
      ],
    ),
    question(
      'c14q38',
      'What unreimbursed medical expenses may most people who itemize claim?',
      [
        {
          text: 'Every medical expense, including amounts health insurance covers.',
          why: 'The expenses that may be claimed are those not covered by health insurance. Most people who itemize may claim amounts that exceed 7.5% of adjusted gross income.',
        },
        {
          text: 'Expenses not covered by health insurance that exceed 7.5% of adjusted gross income.',
          why: 'Most people who itemize can claim unreimbursed medical expenses, those not covered by health insurance, that exceed 7.5% of adjusted gross income.',
          correct: true,
        },
        {
          text: '100% of a family plan with no earned-income limit.',
          why: 'Sole proprietors and partners may deduct 100% of a medical expense plan, and that deduction may not exceed earned income for the year. Itemizers claim unreimbursed expenses not covered by health insurance that exceed 7.5% of adjusted gross income.',
        },
        {
          text: 'Long-term care benefits that exceed the cost of care received.',
          why: 'Benefits paid in excess of the cost of care received are taxed as ordinary income. Itemizers claim unreimbursed medical expenses not covered by health insurance that exceed 7.5% of adjusted gross income.',
        },
      ],
    ),
    question(
      'c14q39',
      'When are daily long-term care benefits received income tax free?',
      [
        {
          text: 'When they exceed the cost of care received.',
          why: 'Benefits paid in excess of the cost of care received are taxed as ordinary income. Daily benefits are received income tax free as long as they do not exceed the daily cost of long-term care.',
        },
        {
          text: 'When the person does not itemize.',
          why: 'Itemizing relates to unreimbursed medical expenses that exceed 7.5% of adjusted gross income. Daily long-term care benefits are income tax free as long as they do not exceed the daily cost of long-term care.',
        },
        {
          text: 'As long as they do not exceed the daily cost of long-term care.',
          why: 'Daily benefits are received income tax free, as long as they do not exceed the daily cost of long-term care.',
          correct: true,
        },
        {
          text: 'Only when they are accidental death and dismemberment benefits.',
          why: 'Accidental death and dismemberment benefits are received income tax free under their own rule. Daily long-term care benefits are income tax free as long as they do not exceed the daily cost of long-term care.',
        },
      ],
    ),
    question(
      'c14q40',
      'How are long-term care benefits taxed when they are paid in excess of the cost of care received?',
      [
        {
          text: 'They are received income tax free.',
          why: 'Daily benefits are income tax free only when they do not exceed the daily cost of long-term care. Benefits paid in excess of the cost of care received are taxed as ordinary income.',
        },
        {
          text: 'They are deductible by the employer as an ordinary business expense.',
          why: 'An ordinary business expense deduction is the rule for group accidental death and dismemberment premiums. Long-term care benefits paid in excess of the cost of care received are taxed as ordinary income.',
        },
        {
          text: 'They are allowed only to the extent of 7.5% of adjusted gross income.',
          why: 'The 7.5% figure is the itemizer threshold for unreimbursed medical expenses. Long-term care benefits paid in excess of the cost of care received are taxed as ordinary income.',
        },
        {
          text: 'They are taxed as ordinary income.',
          why: 'Benefits paid in excess of the cost of care received are taxed as ordinary income.',
          correct: true,
        },
      ],
    ),
    question(
      'c14q41',
      'How does the employer treat premiums for group accidental death and dismemberment?',
      [
        {
          text: 'They are deductible as an ordinary business expense.',
          why: 'Premiums for group accidental death and dismemberment are deductible to the employer as an ordinary business expense.',
          correct: true,
        },
        {
          text: 'They are deductible only for people who itemize.',
          why: 'Itemizing is required for employees deducting premiums that, with other unreimbursed medical expenses, exceed a percentage of adjusted gross income. Group accidental death and dismemberment premiums are deductible to the employer as an ordinary business expense.',
        },
        {
          text: 'They are taxable benefits to the employee.',
          why: 'The benefits are received income tax free. The premiums are deductible to the employer as an ordinary business expense.',
        },
        {
          text: 'They may not exceed the taxpayer’s earned income.',
          why: 'The earned-income ceiling applies to the medical expense plan deduction for sole proprietors and partners. Group accidental death and dismemberment premiums are deductible to the employer as an ordinary business expense.',
        },
      ],
    ),
    question(
      'c14q42',
      'How are group accidental death and dismemberment benefits received?',
      [
        {
          text: 'They are taxed as ordinary income.',
          why: 'Ordinary-income taxation applies to long-term care benefits paid in excess of the cost of care received. Accidental death and dismemberment benefits are received income tax free.',
        },
        {
          text: 'They are received income tax free.',
          why: 'The benefits of group accidental death and dismemberment are received income tax free.',
          correct: true,
        },
        {
          text: 'They are tax free only up to the daily cost of care.',
          why: 'The daily-cost limit applies to long-term care daily benefits. Accidental death and dismemberment benefits are received income tax free.',
        },
        {
          text: 'They are deductible by the employee above 7.5% of adjusted gross income.',
          why: 'The 7.5% threshold is for unreimbursed medical expenses claimed by most people who itemize. Accidental death and dismemberment benefits are received income tax free.',
        },
      ],
    ),
    question(
      'c14q43',
      'What ceiling applies to the medical expense plan deduction for sole proprietors and partners?',
      [
        {
          text: '7.5% of adjusted gross income.',
          why: 'Most people who itemize use 7.5% of adjusted gross income for unreimbursed medical expenses. The sole proprietor and partner deduction may not exceed the taxpayer’s earned income for the year.',
        },
        {
          text: 'The daily cost of long-term care.',
          why: 'The daily cost of long-term care is the ceiling for income-tax-free daily long-term care benefits. The sole proprietor and partner deduction may not exceed the taxpayer’s earned income for the year.',
        },
        {
          text: 'The taxpayer’s earned income for the year.',
          why: 'Sole proprietors and partners may deduct 100% of the plan cost provided to them and their families, and the deduction may not exceed the taxpayer’s earned income for the year.',
          correct: true,
        },
        {
          text: 'An ordinary business expense available only to employees.',
          why: 'Group accidental death and dismemberment premiums are an ordinary business expense of the employer. Sole proprietors and partners are self-employed individuals, not employees, and their deduction may not exceed earned income for the year.',
        },
      ],
    ),
  ],
  'c14-business': [
    question(
      'c14q44',
      'Why does a business buy disability insurance on its key employees?',
      [
        {
          text: 'To give the key person a deduction for the premium.',
          why: 'Key-person premiums are not deductible to the business. The business buys the coverage to protect itself from loss when the employee becomes disabled.',
        },
        {
          text: 'To fund the purchase of a disabled partner’s business interest.',
          why: 'Providing funds to purchase a disabled partner’s business interest is what disability buy-sell insurance does. Key-employee disability coverage protects the business from loss when the employee becomes disabled.',
        },
        {
          text: 'To insure the business itself as the insured person.',
          why: 'The key person is the insured, and the business is owner, premium payer, and beneficiary. The purchase protects the business from loss when the employee becomes disabled.',
        },
        {
          text: 'To protect itself from loss when the employee becomes disabled.',
          why: 'A business buys disability insurance on key employees to protect itself from loss when the employee becomes disabled, just as an individual buys disability income insurance to protect the ability to earn a living.',
          correct: true,
        },
      ],
    ),
    question(
      'c14q45',
      'What is the key person’s economic value for this coverage?',
      [
        {
          text: 'The potential loss of business income, plus the expense of hiring and training a replacement.',
          why: 'The key person’s economic value is the potential loss of business income, plus the expense of hiring and training a replacement.',
          correct: true,
        },
        {
          text: 'The income tax free benefit paid personally to the key person.',
          why: 'Key-person benefits are received income tax free by the business, which is the beneficiary. Economic value is the potential loss of business income, plus the expense of hiring and training a replacement.',
        },
        {
          text: 'The premium deduction the business takes.',
          why: 'The premiums are not deductible to the business. Economic value is the potential loss of business income, plus the expense of hiring and training a replacement.',
        },
        {
          text: 'The price of a disabled partner’s business interest.',
          why: 'Disability buy-sell insurance provides funds for the business to purchase the business interest of a disabled partner. Key-person economic value is potential loss of business income plus hiring and training a replacement.',
        },
      ],
    ),
    question(
      'c14q46',
      'Who is the insured on a key-person disability policy?',
      [
        {
          text: 'The business that owns the contract.',
          why: 'The business owns the contract, pays the premium, and is the beneficiary. The key person is the insured.',
        },
        {
          text: 'The key person.',
          why: 'The key person is the insured, and the business must have that person’s written consent to be insured.',
          correct: true,
        },
        {
          text: 'The disabled partner whose interest will be purchased.',
          why: 'A disabled partner’s interest is the subject of disability buy-sell insurance. On key-person disability, the key person is the insured.',
        },
        {
          text: 'The beneficiary who pays the premium.',
          why: 'The business is the beneficiary and pays the premium. The key person is the insured.',
        },
      ],
    ),
    question(
      'c14q47',
      'What must the business have from the key person before that person is insured?',
      [
        {
          text: 'A deductible premium.',
          why: 'The premiums are not deductible to the business. The business must have the key person’s written consent to be insured.',
        },
        {
          text: 'An entity purchase buy-sell policy.',
          why: 'An entity purchase is one form of disability buy-sell insurance. Key-person coverage requires the key person’s written consent to be insured.',
        },
        {
          text: 'That person’s written consent to be insured.',
          why: 'The business must have the key person’s written consent to be insured.',
          correct: true,
        },
        {
          text: 'Benefits that are taxable to the key person.',
          why: 'The benefits are received income tax free by the business. The business must have the key person’s written consent to be insured.',
        },
      ],
    ),
    question(
      'c14q48',
      'Whom does disability buy-sell insurance typically cover?',
      [
        {
          text: 'Every employee of any business.',
          why: 'Key-person coverage is bought on key employees. Disability buy-sell insurance is typically written to cover partners or corporate officers of a closely held business.',
        },
        {
          text: 'Only a key person whose premium the business deducts.',
          why: 'Key-person premiums are not deductible to the business. Disability buy-sell insurance typically covers partners or corporate officers of a closely held business.',
        },
        {
          text: 'An individual protecting the ability to earn a living.',
          why: 'An individual buys disability income insurance to protect the ability to earn a living. Disability buy-sell insurance typically covers partners or corporate officers of a closely held business.',
        },
        {
          text: 'Partners or corporate officers of a closely held business.',
          why: 'Disability buy-sell insurance is typically written to cover partners or corporate officers of a closely held business.',
          correct: true,
        },
      ],
    ),
    question(
      'c14q49',
      'A disability buy-sell policy may be a cross purchase or an entity purchase. What is true of the tax treatment of both forms?',
      [
        {
          text: 'Premiums are not deductible to the business, and benefits are income tax free to the business, either way.',
          why: 'Whether the policy is a cross purchase or an entity purchase, the premiums are not deductible to the business, and the benefits are received income tax free by the business.',
          correct: true,
        },
        {
          text: 'Only the cross purchase makes the premiums deductible.',
          why: 'Premiums are not deductible to the business in either form. The same is true whether the policy is a cross purchase or an entity purchase.',
        },
        {
          text: 'Only the entity purchase makes the benefits taxable to the business.',
          why: 'Benefits are received income tax free by the business in either form. Tax treatment does not change between a cross purchase and an entity purchase.',
        },
        {
          text: 'The key person is taxed unless that person gives written consent.',
          why: 'Written consent is required before a key person is insured, and key-person benefits are received income tax free by the business. Buy-sell premiums are not deductible and benefits are income tax free either way.',
        },
      ],
    ),
    question(
      'c14q50',
      'Who purchases key-person disability insurance, and on whose life is it purchased?',
      [
        {
          text: 'The key person purchases it on the life of the employer.',
          why: 'The key person is the insured, not the purchaser. Key-person disability is purchased by the employer on the life of a key employee.',
        },
        {
          text: 'The employer purchases it on the life of a key employee.',
          why: 'Key-person disability is purchased by the employer on the life of a key employee.',
          correct: true,
        },
        {
          text: 'Partners purchase it on the life of a corporate officer of a closely held business.',
          why: 'Disability buy-sell insurance is typically written to cover partners or corporate officers of a closely held business. Key-person disability is purchased by the employer on the life of a key employee.',
        },
        {
          text: 'The business purchases it on its own life.',
          why: 'The business owns the contract and is the beneficiary. The insurance is purchased by the employer on the life of a key employee.',
        },
      ],
    ),
  ],
  'c14-cdhp': [
    question(
      'c14q51',
      'Which of these is listed as a tax-free withdrawal from a health savings account?',
      [
        {
          text: 'A deductible gap.',
          why: 'A deductible gap must be met before an insurance plan covers additional cost. Tax-free withdrawals include physical therapy, not the deductible gap.',
        },
        {
          text: 'A special nursery school for a child.',
          why: 'Members of a consumer-driven plan may use plan funds for a special nursery school for a child without being denied coverage. That example is not on the health savings account tax-free withdrawal list, which includes physical therapy.',
        },
        {
          text: 'Physical therapy.',
          why: 'Tax-free withdrawals include physical therapy, doctors, dentists, and hospitals, artificial limbs, drugs, eyeglasses and contacts, chiropractic, laboratory expenses, nursing home costs, psychoanalysis, x-rays, and nursing home insurance premiums.',
          correct: true,
        },
        {
          text: 'Coverage that other plans restrict.',
          why: 'Other plans may restrict certain coverage. Physical therapy is one of the listed tax-free withdrawals from a health savings account.',
        },
      ],
    ),
    question(
      'c14q52',
      'Consumer-driven plans are also called consumer-driven health plans, high-deductible plans, or patient-directed plans. Who controls them?',
      [
        {
          text: 'The employee, through first-dollar coverage.',
          why: 'The employee receives first-dollar coverage from a designated health account until the funds are depleted. The plans are controlled by the employer.',
        },
        {
          text: 'The member who chooses genetic testing.',
          why: 'Members may use plan funds for genetic testing without being denied coverage. The plans are controlled by the employer.',
        },
        {
          text: 'The insurance plan that pays after the deductible gap.',
          why: 'An insurance plan covers additional cost after a deductible gap is met. Consumer-driven plans are controlled by the employer.',
        },
        {
          text: 'The employer.',
          why: 'Consumer-driven plans, also called consumer-driven health plans, high-deductible plans, or patient-directed plans, are controlled by the employer.',
          correct: true,
        },
      ],
    ),
    question(
      'c14q53',
      'Under a consumer-driven plan, where does the employee receive first-dollar coverage, and until when?',
      [
        {
          text: 'From a designated health account, which can be a health reimbursement account or a health savings account, until the funds are depleted.',
          why: 'The employee receives first-dollar coverage from a designated health account, which can be a health reimbursement account or a health savings account, until the funds are depleted.',
          correct: true,
        },
        {
          text: 'From the insurance plan, before any deductible gap is met.',
          why: 'A deductible gap must be met before an insurance plan covers additional cost. First-dollar coverage comes from the designated health account until the funds are depleted.',
        },
        {
          text: 'From coverage that other plans restrict and deny.',
          why: 'Other plans may restrict certain coverage. First-dollar coverage comes from a designated health account until the funds are depleted.',
        },
        {
          text: 'From excess funds that cannot be carried past the current year.',
          why: 'Excess funds in a health savings account can be carried over to the next year. First-dollar coverage comes from the designated health account until the funds are depleted.',
        },
      ],
    ),
    question(
      'c14q54',
      'After the designated health account is depleted, what must be met before an insurance plan covers additional cost?',
      [
        {
          text: 'Another round of first-dollar coverage.',
          why: 'First-dollar coverage lasts until the designated health account funds are depleted. A deductible gap must then be met before an insurance plan covers additional cost.',
        },
        {
          text: 'A deductible gap.',
          why: 'A deductible gap must then be met before an insurance plan covers additional cost.',
          correct: true,
        },
        {
          text: 'A denial of genetic testing.',
          why: 'Members may use plan funds for genetic testing without being denied coverage. After the account is depleted, a deductible gap must be met before the insurance plan covers additional cost.',
        },
        {
          text: 'A taxable withdrawal for eyeglasses and contacts.',
          why: 'Eyeglasses and contacts are on the tax-free withdrawal list. The amount that must be met before the insurance plan covers additional cost is a deductible gap.',
        },
      ],
    ),
    question(
      'c14q55',
      'For which costs may members of a consumer-driven plan use plan funds without being denied coverage?',
      [
        {
          text: 'Only doctors, dentists, and hospitals.',
          why: 'Doctors, dentists, and hospitals are on the health savings account tax-free withdrawal list. Consumer-driven plan members may use plan funds for costs such as genetic testing or a special nursery school for a child without being denied coverage.',
        },
        {
          text: 'Only costs that other plans restrict.',
          why: 'Other plans may restrict certain coverage. Members of a consumer-driven plan may use plan funds for costs such as genetic testing or a special nursery school for a child without being denied coverage.',
        },
        {
          text: 'Costs such as genetic testing or a special nursery school for a child.',
          why: 'Members of a consumer-driven plan may use plan funds for costs such as genetic testing or a special nursery school for a child without being denied coverage. Other plans may restrict certain coverage.',
          correct: true,
        },
        {
          text: 'Only nursing home insurance premiums.',
          why: 'Nursing home insurance premiums are a tax-free health savings account withdrawal. The consumer-driven plan examples are costs such as genetic testing or a special nursery school for a child.',
        },
      ],
    ),
    question(
      'c14q56',
      'What kind of growth do health savings accounts feature?',
      [
        {
          text: 'Growth that is paid out and taxed each year.',
          why: 'Health savings accounts feature tax-deferred growth. Excess funds can be carried over to the next year instead of being paid out each year.',
        },
        {
          text: 'Growth that is lost if funds remain at year end.',
          why: 'Excess funds can be carried over to the next year. Health savings accounts feature tax-deferred growth.',
        },
        {
          text: 'Growth that is denied when the member uses genetic testing.',
          why: 'Members may use plan funds for genetic testing without being denied coverage. Health savings accounts feature tax-deferred growth.',
        },
        {
          text: 'Tax-deferred growth.',
          why: 'Health savings accounts feature tax-deferred growth. They also let the insured pay for medical expenses with pre-tax income.',
          correct: true,
        },
      ],
    ),
    question(
      'c14q57',
      'Health savings accounts let the insured pay for medical expenses with what kind of income?',
      [
        {
          text: 'Pre-tax income.',
          why: 'Health savings accounts let the insured pay for medical expenses with pre-tax income.',
          correct: true,
        },
        {
          text: 'Income used only after the insurance plan pays the deductible gap.',
          why: 'A deductible gap is met before an insurance plan covers additional cost under a consumer-driven plan. A health savings account lets the insured pay for medical expenses with pre-tax income.',
        },
        {
          text: 'Income that must be forfeited if it is not spent this year.',
          why: 'Excess funds can be carried over to the next year. The account lets the insured pay for medical expenses with pre-tax income.',
        },
        {
          text: 'Income from coverage that other plans deny.',
          why: 'Other plans may restrict certain coverage. Health savings accounts let the insured pay for medical expenses with pre-tax income.',
        },
      ],
    ),
    question(
      'c14q58',
      'What can be done with excess funds in a health savings account?',
      [
        {
          text: 'They are lost if they are not used in the same year.',
          why: 'Excess funds are not forfeited at year end. They can be carried over to the next year.',
        },
        {
          text: 'They can be carried over to the next year.',
          why: 'Excess funds in a health savings account can be carried over to the next year.',
          correct: true,
        },
        {
          text: 'They are taxed because the employer controls the plan.',
          why: 'Consumer-driven plans are controlled by the employer and are taxed in the same manner as other traditional health plans. Excess health savings account funds can be carried over to the next year.',
        },
        {
          text: 'They may be spent only on a special nursery school.',
          why: 'A special nursery school for a child is one example of a cost members may pay without being denied coverage. Excess funds can be carried over to the next year.',
        },
      ],
    ),
  ],
  'c14-hra': [
    question(
      'c14q59',
      'Who must receive health reimbursement account benefits?',
      [
        {
          text: 'The employer, as reimbursement of a business expense.',
          why: 'The employer’s contribution is tax deductible in the year the reimbursement is made to the employee. Benefits must be paid solely to the employee.',
        },
        {
          text: 'Dependents, instead of the employee.',
          why: 'Dependents may be the persons whose medical care is covered. Benefits must be paid solely to the employee.',
        },
        {
          text: 'Solely the employee.',
          why: 'Benefits must be paid solely to the employee for medical care of the employee, the employee’s spouse, or dependents.',
          correct: true,
        },
        {
          text: 'Anyone who receives a distribution for something other than medical care.',
          why: 'A distribution for something other than medical care is taxable income to the employee. Benefits must be paid solely to the employee.',
        },
      ],
    ),
    question(
      'c14q60',
      'How is a health reimbursement account distribution treated when it is for something other than medical care?',
      [
        {
          text: 'It is tax deductible to the employee in a later year.',
          why: 'The employer’s contribution is tax deductible in the year the reimbursement is made to the employee. A distribution for something other than medical care is taxable income to the employee.',
        },
        {
          text: 'The employee is not taxed on it.',
          why: 'The employee is not taxed on receipt of the benefit when it is paid for medical care. If funds are distributed for something other than medical care, the benefit is taxable income to the employee.',
        },
        {
          text: 'It is paid to the employer instead of the employee.',
          why: 'Benefits must be paid solely to the employee. A distribution for something other than medical care is taxable income to the employee.',
        },
        {
          text: 'It is taxable income to the employee.',
          why: 'If funds are distributed for something other than medical care, the benefit is taxable income to the employee.',
          correct: true,
        },
      ],
    ),
    question(
      'c14q61',
      'Whose medical care may health reimbursement account benefits cover?',
      [
        {
          text: 'The employee, the employee’s spouse, or dependents.',
          why: 'Benefits must be paid solely to the employee for medical care of the employee, the employee’s spouse, or dependents. The employee is not taxed on receipt of the benefit.',
          correct: true,
        },
        {
          text: 'Only the employer’s business expenses.',
          why: 'The employer’s contribution is tax deductible in the year the reimbursement is made to the employee. The benefits themselves are for medical care of the employee, the employee’s spouse, or dependents.',
        },
        {
          text: 'Only care that is not medical care.',
          why: 'A distribution for something other than medical care is taxable income to the employee. The benefits are for medical care of the employee, the employee’s spouse, or dependents.',
        },
        {
          text: 'Any person other than the employee.',
          why: 'Benefits must be paid solely to the employee. The medical care they cover is care of the employee, the employee’s spouse, or dependents.',
        },
      ],
    ),
  ],
  'c14-chart': [
    question(
      'c14q62',
      'How does the tax chart treat premiums for individual disability income?',
      [
        {
          text: 'Deductible for the employer.',
          why: 'Deductible for the employer is the premium treatment for group disability income. Individual disability income premiums are not deductible.',
        },
        {
          text: 'Not deductible.',
          why: 'The chart lists individual disability income premiums as not deductible, and the benefits as not taxable.',
          correct: true,
        },
        {
          text: 'Taxable.',
          why: 'Taxable benefits are the chart result for group disability income. Individual disability income premiums are not deductible, and the benefits are not taxable.',
        },
        {
          text: 'Deductible, with the benefits taxable.',
          why: 'Deductible premiums and taxable benefits are the group disability income row. Individual disability income premiums are not deductible, and the benefits are not taxable.',
        },
      ],
    ),
    question(
      'c14q63',
      'How does the tax chart treat benefits from group disability income?',
      [
        {
          text: 'Not taxable.',
          why: 'Not taxable is the benefit result for individual disability income and for group medical. Group disability income benefits are taxable.',
        },
        {
          text: 'Not deductible.',
          why: 'Not deductible describes certain premiums, such as individual disability income premiums. Group disability income benefits are taxable.',
        },
        {
          text: 'Taxable.',
          why: 'The chart lists group disability income premiums as deductible for the employer and the benefits as taxable.',
          correct: true,
        },
        {
          text: 'Taxable only when taken out at the end of the year.',
          why: 'Benefits taken out at the end of the year are the taxable MSA case. Group disability income benefits are taxable.',
        },
      ],
    ),
    question(
      'c14q64',
      'How does the tax chart treat premiums for group medical coverage?',
      [
        {
          text: 'Not deductible.',
          why: 'Not deductible is the premium result for individual disability income and for FSAs. Group medical premiums are deductible for the employer.',
        },
        {
          text: 'Not taxable.',
          why: 'Group medical benefits are not taxable. The premiums are deductible for the employer.',
        },
        {
          text: 'Taxable.',
          why: 'Taxable is the benefit result for group disability income. Group medical premiums are deductible for the employer, and the benefits are not taxable.',
        },
        {
          text: 'Deductible for the employer.',
          why: 'The chart lists group medical premiums as deductible for the employer and the benefits as not taxable.',
          correct: true,
        },
      ],
    ),
    question(
      'c14q65',
      'How does the tax chart treat benefits from individual medical coverage?',
      [
        {
          text: 'Not taxable.',
          why: 'The chart lists individual medical benefits as not taxable.',
          correct: true,
        },
        {
          text: 'Taxable.',
          why: 'Taxable benefits appear on the group disability income row. Individual medical benefits are not taxable.',
        },
        {
          text: 'Deductible for the employer.',
          why: 'Deductible for the employer is the premium treatment for group medical coverage. Individual medical benefits are not taxable.',
        },
        {
          text: 'Taxable when taken out at the end of the year.',
          why: 'That end-of-year rule is the MSA benefit rule. Individual medical benefits are not taxable.',
        },
      ],
    ),
    question(
      'c14q66',
      'How does the tax chart treat premiums for group long-term care?',
      [
        {
          text: 'Not deductible.',
          why: 'Individual disability income premiums are not deductible. Group long-term care premiums are deductible for the employer.',
        },
        {
          text: 'Deductible for the employer.',
          why: 'The chart lists group long-term care premiums as deductible for the employer and the benefits as not taxable.',
          correct: true,
        },
        {
          text: 'Taxable.',
          why: 'Group disability income benefits are taxable. Group long-term care premiums are deductible for the employer, and the benefits are not taxable.',
        },
        {
          text: 'Taxable, plus a 20% penalty, for nonmedical use under age 65.',
          why: 'The 20% penalty is the health savings account rule for nonmedical use under age 65. Group long-term care premiums are deductible for the employer.',
        },
      ],
    ),
    question(
      'c14q67',
      'How does the tax chart treat benefits from an individual Medicare supplement?',
      [
        {
          text: 'Taxable.',
          why: 'Group disability income benefits are taxable. Individual Medicare supplement benefits are not taxable.',
        },
        {
          text: 'Deductible for the employer.',
          why: 'Group Medicare supplement premiums are deductible for the employer. Individual Medicare supplement benefits are not taxable.',
        },
        {
          text: 'Not taxable.',
          why: 'The chart lists individual Medicare supplement benefits as not taxable.',
          correct: true,
        },
        {
          text: 'Taxable when taken out at the end of the year.',
          why: 'MSA benefits are taxable when taken out at the end of the year. Individual Medicare supplement benefits are not taxable.',
        },
      ],
    ),
    question(
      'c14q68',
      'How does the tax chart treat premiums for a group Medicare supplement?',
      [
        {
          text: 'Not deductible.',
          why: 'FSA premiums are not deductible. Group Medicare supplement premiums are deductible for the employer.',
        },
        {
          text: 'Not taxable.',
          why: 'Group Medicare supplement benefits are not taxable. The premiums are deductible for the employer.',
        },
        {
          text: 'Taxable.',
          why: 'Taxable benefits are listed for group disability income. Group Medicare supplement premiums are deductible for the employer, and the benefits are not taxable.',
        },
        {
          text: 'Deductible for the employer.',
          why: 'The chart lists group Medicare supplement premiums as deductible for the employer and the benefits as not taxable.',
          correct: true,
        },
      ],
    ),
    question(
      'c14q69',
      'How does the tax chart treat premiums for FSAs?',
      [
        {
          text: 'Not deductible.',
          why: 'The chart lists FSA premiums as not deductible and the benefits as not taxable.',
          correct: true,
        },
        {
          text: 'Deductible for the employer.',
          why: 'Deductible for the employer is the premium result for group medical coverage. FSA premiums are not deductible.',
        },
        {
          text: 'Taxable.',
          why: 'Group disability income benefits are taxable. FSA premiums are not deductible, and FSA benefits are not taxable.',
        },
        {
          text: 'Deductible, and taxable when taken out at the end of the year.',
          why: 'MSA premiums are deductible, and MSA benefits are taxable when taken out at the end of the year. FSA premiums are not deductible.',
        },
      ],
    ),
    question(
      'c14q70',
      'How does the tax chart treat benefits from health reimbursement accounts?',
      [
        {
          text: 'Taxable.',
          why: 'Group disability income benefits are taxable. Health reimbursement account benefits are not taxable.',
        },
        {
          text: 'Not taxable.',
          why: 'The chart lists health reimbursement account premiums as deductible and the benefits as not taxable.',
          correct: true,
        },
        {
          text: 'Not deductible.',
          why: 'Not deductible is the premium result for FSAs. Health reimbursement account benefits are not taxable, and the premiums are deductible.',
        },
        {
          text: 'Taxable, plus a 20% penalty, under age 65.',
          why: 'A 20% penalty applies to nonmedical health savings account use under age 65. Health reimbursement account benefits are not taxable.',
        },
      ],
    ),
    question(
      'c14q71',
      'According to the tax chart, when are MSA benefits taxable?',
      [
        {
          text: 'When they are used for medical expenses.',
          why: 'MSA benefits are not taxable when used for medical expenses. They are taxable when taken out at the end of the year.',
        },
        {
          text: 'They are never taxable, like FSA benefits.',
          why: 'FSA benefits are not taxable. MSA benefits are not taxable when used for medical expenses, and they are taxable when taken out at the end of the year.',
        },
        {
          text: 'When taken out at the end of the year.',
          why: 'MSA premiums are deductible. Benefits are not taxable when used for medical expenses, and they are taxable when taken out at the end of the year.',
          correct: true,
        },
        {
          text: 'Whenever the premium is not deductible.',
          why: 'MSA premiums are deductible. Benefits are taxable when taken out at the end of the year.',
        },
      ],
    ),
    question(
      'c14q72',
      'What does the tax chart say about nonmedical health savings account use over age 65?',
      [
        {
          text: 'There is a 20% penalty.',
          why: 'A 20% penalty applies to nonmedical use under age 65. There is no penalty over age 65.',
        },
        {
          text: 'The premiums are not deductible.',
          why: 'Health savings account premiums are deductible. For nonmedical use over age 65, there is no penalty.',
        },
        {
          text: 'Benefits used for medical expenses are taxable.',
          why: 'Health savings account benefits are not taxable when used for medical expenses. For nonmedical use over age 65, there is no penalty.',
        },
        {
          text: 'There is no penalty.',
          why: 'Health savings account benefits are taxable, plus a 20% penalty, for nonmedical use under age 65. There is no penalty over age 65.',
          correct: true,
        },
      ],
    ),
  ],
}
