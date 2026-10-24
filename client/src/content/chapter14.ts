import { question } from './build.ts'
import type { Chapter } from './types.ts'
import { chapter14Extra } from './extra/chapter14.ts'

/**
 * Section text is the current study wording.
 * The source pages have no practice questions. Questions are written from that text,
 * four options each, with a reason for the right answer and for each wrong one.
 */
export const chapter14: Chapter = {
  id: 'ch-health-tax',
  number: 14,
  title: 'Taxes on Health Insurance',
  summary:
    'How premiums and benefits are taxed for personal, employer, and business health coverage, including disability income, medical expense, and reimbursement accounts.',
  sections: [
    {
      id: 'c14-personal',
      title: 'Health insurance you pay for yourself',
      body: `How an insurance benefit is taxed often depends on whether the premium was taxed. The comparison here is between health insurance a person owns and similar coverage an employer provides.

These words are used in this chapter.

• Adjusted gross income. Gross income, meaning all income from whatever source, minus adjustments to income.
• Defined-benefit plan. A plan in which the employer specifies the amount of benefits promised to the employee.
• Defined-contribution plan. A plan that focuses on the contributions rather than on the benefits they will pay out.
• IRS. The Internal Revenue Service, the U.S. agency that collects taxes and enforces the Internal Revenue Code.
• Tax deductible. A qualified expense that may reduce the amount of income subject to tax.
• Tax exempt. Not subject to tax.
• Taxable. Subject to tax.

A premium payment on a personally owned disability income policy is not deductible by the individual. The disability income benefit is received free of income tax by the individual.

On a medical expense policy, unreimbursed medical expenses paid for the insured, the insured's spouse, and dependents may be claimed as deductions if the expenses exceed a certain percentage of the insured's adjusted gross income. The law permits a deduction for unreimbursed expenses in excess of 7.5% of adjusted gross income. That 7.5% floor applies at every age. This applies only if the insured itemizes those deductions on the tax return.`,
      questions: [
        question(
          'c14q01',
          'How are premiums and benefits taxed on a personally owned disability income policy?',
          [
            {
              text: 'The individual cannot deduct the premiums. The disability income benefits are received income tax free.',
              why: 'Whether benefits are taxed often depends on whether the premiums were taxed. On a personally owned policy, the premiums were not deducted, and the benefits come out tax free.',
              correct: true,
            },
            {
              text: 'The premiums are deductible, and the benefits are taxed as ordinary income.',
              why: 'That pattern matches employer-paid group disability income, not a personally owned policy. Personal disability premiums are nondeductible, and the benefits are tax free.',
            },
            {
              text: 'Both the premiums and the benefits are tax free, with no limit.',
              why: 'The benefits are tax free. The premiums are not deductible, so they are not a tax benefit.',
            },
            {
              text: 'Benefits are tax free only to the extent they exceed 7.5% of adjusted gross income.',
              why: 'The 7.5% of adjusted gross income threshold is for unreimbursed medical expenses that are itemized. It is not the rule for personally owned disability income benefits.',
            },
          ],
        ),
        question(
          'c14q02',
          'When may unreimbursed medical expenses be deducted?',
          [
            {
              text: 'When they exceed 7.5% of adjusted gross income, and only if the insured itemizes deductions. The expenses may be for the insured, the spouse, and dependents.',
              why: 'The course states this rule for medical expense insurance. Premiums on a personally owned disability policy are a separate rule and are nondeductible.',
              correct: true,
            },
            {
              text: 'In full, whether or not the person itemizes, as an above-the-line deduction.',
              why: 'An above-the-line deduction of 100% against adjusted gross income is how the course describes money deposited into a health savings account. Unreimbursed medical expenses require itemizing and the 7.5% threshold.',
            },
            {
              text: 'Only the first 7.5% of adjusted gross income is deductible. Amounts above that are not.',
              why: 'The deduction is for the unreimbursed expenses in excess of 7.5%, not for the first 7.5%.',
            },
            {
              text: 'They are never deductible if a policy paid any part of the bill.',
              why: 'The deduction is for unreimbursed expenses, the part health insurance did not cover, once those expenses exceed 7.5% of adjusted gross income and are itemized.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c14-disability',
      title: 'Disability premiums an employer pays',
      body: `A premium the employer pays for an employee's disability income insurance is deductible as a business expense, and it is not taxable income to the employee.

A benefit the employee receives that is attributable to an employer contribution is fully taxable to the employee as income. The employee's own contribution is not deductible. A benefit attributable to the employee's portion of the contribution is not taxable.

How the benefit is taxed depends on the plan.

• Noncontributory. The employer pays the entire premium, so the income benefits are included in the employee's gross income and taxed as ordinary income.
• Fully contributory. The employee pays the entire premium, so the income benefits are received free of income tax.
• Partially contributory. The employer and the employee each pay part of the premium. The portion the employee paid is received free of income tax. The portion the employer paid is included in the employee's gross income and taxed as ordinary income.

If an employee contributes 25% of the premium and receives a benefit of $2,000, only $1,500 is taxed. That $1,500 is the 75% employer share. The $500 that matches the employee's 25% contribution is received tax free.

A short-term disability group plan usually has a benefit period of less than 2 years. It is common to place a maximum dollar amount on the benefit regardless of earnings, and to have an elimination period, except for a disability that results from an accident.

A long-term disability group plan usually pays benefits for 2 years or longer.

A benefit paid to a disabled employee that is attributable to the employer's contribution is subject to Federal Insurance Contributions Act (FICA) withholding for Social Security. Any portion of the benefit that the employer paid for and deducted is taxable income to the employee.`,
      questions: [
        question(
          'c14q03',
          'How is a noncontributory group disability plan taxed, compared with a fully contributory plan?',
          [
            {
              text: 'If the employer pays the entire premium, the benefits are ordinary income to the employee. If the employee pays the entire premium, the benefits are income tax free.',
              why: 'Employer-paid premiums are deductible to the employer and are not taxable income to the employee. On a partially contributory plan, only the employer-paid share of the benefit is taxed. The employee’s own premium is not deductible.',
              correct: true,
            },
            {
              text: 'Both plans pay tax-free benefits, because disability income is never taxed.',
              why: 'Personally owned disability benefits are tax free. Employer-paid group benefits are taxed. A fully contributory group plan is the one that pays tax-free benefits, because the employee paid the premium.',
            },
            {
              text: 'The employee deducts the employer-paid premium, and the employer is taxed on the benefit.',
              why: 'The employer deducts the premium. The employee does not include that premium as income. Benefits that come from the employer’s contribution are taxed to the employee.',
            },
            {
              text: 'A noncontributory plan taxes only 40% of the benefit.',
              why: 'Forty percent is the employee’s share in the course example of a partially contributory plan. A noncontributory plan is paid entirely by the employer, so the benefits are included in gross income.',
            },
          ],
        ),
        question(
          'c14q04',
          'An employee pays 40% of the disability premium and receives a $1,000 benefit. How much is taxed?',
          [
            {
              text: '$600 is taxed, matching the employer’s 60%. The $400 that matches the employee’s contribution is tax free.',
              why: 'On a partially contributory plan, the employee’s portion of the benefit is received income tax free and the employer’s portion is ordinary income. The employee’s premium payment itself is not deductible.',
              correct: true,
            },
            {
              text: 'The entire $1,000 is tax free, because the employee paid some of the premium.',
              why: 'Paying part of the premium shelters only that part of the benefit. The employer’s 60% is taxed.',
            },
            {
              text: 'The entire $1,000 is taxed, because any employer involvement makes the benefit taxable.',
              why: 'Full taxation is the noncontributory rule, where the employer pays the entire premium. A partial employee contribution keeps that share tax free.',
            },
            {
              text: '$400 is taxed and $600 is tax free.',
              why: 'The shares are reversed. The taxed amount follows the employer’s 60%, not the employee’s 40%.',
            },
          ],
        ),
        question(
          'c14q05',
          'How do short-term and long-term group disability plans differ, and when does FICA apply?',
          [
            {
              text: 'Short-term plans usually pay for less than 2 years. Long-term plans usually pay for 2 years or longer. Benefits attributable to the employer’s contribution are subject to FICA withholding.',
              why: 'Short-term plans commonly cap the benefit at a dollar maximum regardless of earnings, and they use an elimination period except when the disability results from an accident. The employer-paid portion of the benefit is taxable income to the employee.',
              correct: true,
            },
            {
              text: 'Short-term plans pay for 2 years or longer, and FICA applies only to the employee’s own contribution.',
              why: 'Two years or longer is the usual long-term plan. FICA withholding applies to benefits attributable to the employer’s contribution.',
            },
            {
              text: 'Neither plan uses an elimination period, and FICA never applies to disability benefits.',
              why: 'Short-term plans commonly have an elimination period, except for a disability that results from an accident. Employer-funded benefits are subject to FICA withholding.',
            },
            {
              text: 'Long-term benefits are tax free to the business, and short-term benefits are a key-person buy-sell.',
              why: 'Tax-free benefits to the business are the key-person and buy-sell rules. Group short-term and long-term plans pay the employee, and the employer-funded share is taxable to that employee.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c14-medical',
      title: 'Group medical, dental, long-term care, and AD&D',
      body: `For group medical and dental expense insurance, any premium the employer pays is deductible as a business expense. A premium the employee pays is deductible only to the extent that the premium, added to all other unreimbursed medical expenses, exceeds a percentage of adjusted gross income, and only for a person who itemizes. A person who itemizes can claim unreimbursed medical expenses, meaning expenses health insurance does not cover, that exceed 7.5% of adjusted gross income. That floor applies at every age. Group medical and dental benefits are received free of income tax by the employee.

These general rules apply to a long-term care policy.

• The premium may be deductible.
• A daily benefit is received free of income tax, as long as it does not exceed the daily cost of the long-term care.
• A benefit paid in excess of the cost of the care received is taxed as ordinary income.

A premium for group accidental death and dismemberment is deductible to the employer as an ordinary business expense. The benefit is received free of income tax.

A sole proprietor or a partner may deduct 100% of the cost of a medical expense plan provided to that person and that person's family, because they are self-employed individuals, not employees. The deduction may not exceed the taxpayer's earned income for the year.`,
      questions: [
        question(
          'c14q06',
          'How are group medical and dental premiums and benefits taxed?',
          [
            {
              text: 'The employer’s premium is deductible as a business expense. Benefits are income tax free to the employee. The employee’s own premium is deductible only with other unreimbursed medical expenses, above 7.5% of adjusted gross income, and only if the employee itemizes.',
              why: 'Unreimbursed medical expenses are those not covered by health insurance. Personally owned disability premiums are nondeductible and are not part of this medical-expense percentage.',
              correct: true,
            },
            {
              text: 'The employer’s premium is not deductible, and the benefits are taxed like employer-paid disability income.',
              why: 'Employer-paid disability benefits are taxable. Group medical and dental benefits are received income tax free, and the employer’s premium is a deductible business expense.',
            },
            {
              text: 'The employee may deduct the entire premium above the line, whether or not the expenses are itemized.',
              why: 'The above-the-line treatment is the health savings account rule. An employee’s medical premium is deductible only as part of itemized unreimbursed expenses above 7.5% of adjusted gross income.',
            },
            {
              text: 'Benefits are tax free only up to the daily cost of care. Anything above that is ordinary income.',
              why: 'That ceiling is the long-term care rule. Group medical and dental benefits are received income tax free, without that daily-cost limit in this section.',
            },
          ],
        ),
        question(
          'c14q07',
          'What deduction may a sole proprietor take for a family medical plan, and how is long-term care taxed?',
          [
            {
              text: 'A sole proprietor or partner may deduct 100% of the plan’s cost, but not more than earned income for the year. Long-term care benefits are tax free up to the daily cost of care. Amounts above the cost of care are ordinary income.',
              why: 'Sole proprietors and partners are treated as self-employed, not as employees. Group accidental death and dismemberment premiums are deductible to the employer, and those benefits are income tax free. Long-term care premiums may be deductible.',
              correct: true,
            },
            {
              text: 'The deduction is limited to 7.5% of earned income, and every long-term care benefit is taxable.',
              why: 'The 100% deduction is capped by earned income, not by 7.5%. Daily long-term care benefits are tax free up to the cost of care. Only the excess is ordinary income. The 7.5% figure is the itemized medical-expense threshold.',
            },
            {
              text: 'No deduction is allowed, because a sole proprietor is an employee of the business.',
              why: 'The course treats sole proprietors and partners as self-employed individuals, not employees, and allows the 100% deduction within earned income.',
            },
            {
              text: 'The proprietor deducts the premium only if the business is the beneficiary of a key-person policy.',
              why: 'Key-person disability premiums are not deductible. The sole-proprietor rule is a 100% deduction for a medical expense plan for the proprietor and family.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c14-business',
      title: 'Key person and buy-sell disability',
      body: `A business buys disability insurance on a key employee to protect itself from loss when the employee becomes disabled, just as an individual buys disability income insurance to protect the ability to earn a living.

Key-person disability is purchased by the employer on the life of a key employee. The key person's economic value is the potential loss of business income, plus the expense of hiring and training a replacement. The business owns the contract, pays the premium, and is the beneficiary. The key person is the insured, and the business must have that person's written consent to be insured. The premium is not deductible to the business. The benefit is received free of income tax by the business.

Disability buy-sell insurance is typically written to cover partners or corporate officers of a closely held business. It provides funds for the business to purchase the business interest of a disabled partner. Whether the policy is a cross purchase or an entity purchase, the premium is not deductible to the business, and the benefit is received free of income tax by the business.`,
      questions: [
        question(
          'c14q08',
          'Who owns a key-person disability policy, and how is it taxed?',
          [
            {
              text: 'The business owns the contract, pays the premium, and is the beneficiary. The premiums are not deductible. The benefits are income tax free to the business. The key person must consent in writing.',
              why: 'The key person’s value is the potential loss of business income and the cost of hiring and training a replacement. The key person is the insured, not the owner or the beneficiary.',
              correct: true,
            },
            {
              text: 'The key person owns the policy and deducts the premium. The business is taxed on the benefit.',
              why: 'The business is the owner, the premium payer, and the beneficiary. The premium is not deductible, and the benefit is tax free to the business.',
            },
            {
              text: 'The premium is deductible, and the benefit is taxed, because the employer paid it.',
              why: 'That is the group disability rule for benefits paid to the employee. Key-person premiums are not deductible, and the business receives the benefits tax free.',
            },
            {
              text: 'No written consent is required, and the benefit is taxed to the key person.',
              why: 'The business must have the key person’s written consent. The benefits are received by the business, income tax free, not by the key person.',
            },
          ],
        ),
        question(
          'c14q09',
          'What does a disability buy-sell policy do, and how is it taxed?',
          [
            {
              text: 'It funds the purchase of a disabled partner’s business interest. Premiums are not deductible, and the benefits are income tax free to the business, whether the arrangement is a cross purchase or an entity purchase.',
              why: 'These policies are typically written on partners or corporate officers of a closely held business. The tax result matches key-person disability: no deduction for the premium, and a tax-free benefit to the business.',
              correct: true,
            },
            {
              text: 'It pays the disabled partner a taxable wage replacement, and the premium is deductible.',
              why: 'Wage-replacement benefits that come from an employer contribution are the group disability rule. A buy-sell policy provides funds to purchase the business interest, and those benefits are tax free to the business.',
            },
            {
              text: 'Only an entity purchase is tax free. A cross purchase is taxed as ordinary income.',
              why: 'The course gives the same tax result to both. Premiums are not deductible, and benefits are income tax free to the business.',
            },
            {
              text: 'The policy pays accidental death benefits income tax free to the partner’s family, and the premium is a medical expense.',
              why: 'Group accidental death and dismemberment benefits are income tax free, and those premiums are deductible to the employer. A disability buy-sell policy buys a disabled partner’s business interest.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c14-cdhp',
      title: 'High-deductible plans and health savings accounts',
      body: `A consumer-driven plan is also called a consumer-driven health plan, a high-deductible plan, or a patient-directed plan. The employer controls it. The employee receives first-dollar coverage from a designated health account, which can be a health reimbursement account or a health savings account, until the funds are depleted. A deductible gap must then be met before an insurance plan covers additional cost. Another plan may restrict certain coverage. A member of a consumer-driven plan may use plan funds for a cost such as genetic testing, or a special nursery school for a child, without being denied coverage. These plans are taxed in the same manner as other traditional health plans.

A health savings account features tax-deferred growth. It lets the insured pay for medical expenses with pre-tax income. Excess funds can be carried over to the next year. Regardless of how the income is earned, money deposited into a health savings account is an above-the-line deduction, a 100% write-off against adjusted gross income.

These withdrawals are tax free.

• Doctors, dentists, and hospitals.
• Artificial limbs.
• Drugs.
• Eyeglasses and contacts.
• Chiropractic.
• Laboratory expenses.
• Nursing home costs.
• Physical therapy.
• Psychoanalysis.
• X-rays.
• Nursing home insurance premiums.`,
      questions: [
        question(
          'c14q10',
          'How does a consumer-driven health plan pay, and how is it taxed?',
          [
            {
              text: 'An employer-controlled account, either a health reimbursement account or a health savings account, pays first-dollar benefits until the money is gone. The member then meets a deductible gap before the insurance plan pays. The plan is taxed like other traditional health plans.',
              why: 'The account can pay costs such as genetic testing or a special nursery school for a child. A health savings account separately allows tax-deferred growth, a carryover of unused funds, and an above-the-line deduction.',
              correct: true,
            },
            {
              text: 'The insurance plan pays first, and the account pays only after a 7.5% of income threshold.',
              why: 'The account pays first. The 7.5% threshold is the itemized deduction for unreimbursed medical expenses, not the order of payment in a consumer-driven plan.',
            },
            {
              text: 'The employee owns the plan design, and every withdrawal is taxed as ordinary income.',
              why: 'The employer controls the plan. Qualified medical withdrawals from a health savings account are tax free. The plan’s taxation follows other traditional health plans.',
            },
            {
              text: 'Funds may not be used for anything an ordinary medical plan would exclude, such as a special nursery school.',
              why: 'The course uses genetic testing and a special nursery school as examples of costs the member may pay from the plan without being denied coverage.',
            },
          ],
        ),
        question(
          'c14q11',
          'What tax treatment does a deposit to a health savings account receive?',
          [
            {
              text: 'It is an above-the-line deduction, a 100% write-off against adjusted gross income, no matter how the income was earned. Unused funds carry over, and qualified medical withdrawals are tax free.',
              why: 'The account also grows tax deferred. Qualified withdrawals include doctors, dentists, hospitals, drugs, eyeglasses, chiropractic, laboratory expenses, nursing home costs, physical therapy, psychoanalysis, X-rays, and nursing home insurance premiums.',
              correct: true,
            },
            {
              text: 'It is deductible only if the person itemizes and the deposit exceeds 7.5% of adjusted gross income.',
              why: 'That is the unreimbursed medical-expense rule. A health savings account deposit is above the line and is a 100% write-off against adjusted gross income.',
            },
            {
              text: 'The deposit is not deductible, and unused money is forfeited at the end of the year.',
              why: 'Excess funds can be carried over to the next year. The deposit is deductible. A forfeiture at year-end is not the health savings account rule in this section.',
            },
            {
              text: 'Withdrawals for eyeglasses and chiropractic care are taxed, and only hospital bills are tax free.',
              why: 'Eyeglasses, contacts, and chiropractic care are on the list of tax-free withdrawals, along with hospital care and the other listed expenses.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c14-hra',
      title: 'Health reimbursement accounts',
      body: `In a health reimbursement account, the employer's contribution is tax deductible in the year the reimbursement is made to the employee. The employee is not taxed when the benefit is received. The benefit must be paid solely to the employee for medical care of the employee, the employee's spouse, or a dependent. If funds are distributed for something other than medical care, the benefit is taxable income to the employee.`,
      questions: [
        question(
          'c14q12',
          'When may an employer deduct a health reimbursement account contribution, and when is the employee taxed?',
          [
            {
              text: 'The employer deducts the contribution in the year the reimbursement is paid to the employee. The employee is not taxed if the money is for medical care of the employee, spouse, or dependents. Any other distribution is taxable income.',
              why: 'A health savings account deposit is an above-the-line deduction for the insured and can be carried over. A health reimbursement account is the employer’s deduction, timed to the year of reimbursement.',
              correct: true,
            },
            {
              text: 'The employer deducts the contribution when it is deposited, and the employee is taxed on every medical reimbursement.',
              why: 'The deduction is in the year the reimbursement is made. The employee is not taxed on a benefit paid for medical care.',
            },
            {
              text: 'The employee deducts the contribution, and the employer is taxed when a dependent’s bill is paid.',
              why: 'The employer’s contribution is the deductible item. Medical care for a spouse or dependent is a permitted tax-free use. The employee is taxed only when the distribution is not for medical care.',
            },
            {
              text: 'Neither party deducts anything, and unused funds must be carried over like a health savings account.',
              why: 'The employer does get a deduction, in the year of reimbursement. The carryover of excess funds is described for the health savings account, not for this reimbursement account.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c14-chart',
      title: 'A chart of what is deductible and what is taxed',
      body: `The course chart summarizes premiums and benefits this way.

• Individual disability income. Premiums are not deductible. Benefits are not taxable.
• Group disability income. Premiums are deductible for the employer. Benefits are taxable.
• Individual medical. Premiums are not deductible. Benefits are not taxable.
• Group medical. Premiums are deductible for the employer. Benefits are not taxable.
• Individual long-term care. Premiums are not deductible. Benefits are not taxable.
• Group long-term care. Premiums are deductible for the employer. Benefits are not taxable.
• Individual Medicare supplement. Premiums are not deductible. Benefits are not taxable.
• Group Medicare supplement. Premiums are deductible for the employer. Benefits are not taxable.
• Buy-sell. Premiums are not deductible. Benefits are not taxable.
• Key person. Premiums are not deductible. Benefits are not taxable.
• Business overhead expense. Premiums are deductible for the employer. Benefits are taxable.
• MSAs. Premiums are deductible. Benefits are not taxable when they are used for medical expenses, and they are taxable when they are taken out at the end of the year.
• FSAs. Premiums are not deductible. Benefits are not taxable.
• Health reimbursement accounts. Premiums are deductible. Benefits are not taxable.
• Health savings accounts. Premiums are deductible. Benefits are not taxable when they are used for medical expenses. They are taxable, plus a 20% penalty, for a nonmedical use under age 65. There is no penalty over age 65.

The chart marks individual medical, individual long-term care, and individual Medicare supplement premiums with a note. Those premiums are deductible only when the combined premiums and unreimbursed medical expenses exceed 7.5% of adjusted gross income, the taxpayer itemizes, and the deduction meets the tax-qualified limits. The 7.5% floor applies at every age.`,
      questions: [
        question(
          'c14q13',
          'On the tax chart, how do business overhead expense, key person, and buy-sell compare?',
          [
            {
              text: 'Business overhead expense premiums are deductible to the employer and the benefits are taxable. Key-person and buy-sell premiums are not deductible, and those benefits are not taxable.',
              why: 'Group disability income is also deductible to the employer with taxable benefits. Group medical, group long-term care, and a group Medicare supplement are deductible to the employer, but those benefits are not taxable.',
              correct: true,
            },
            {
              text: 'All three have deductible premiums and taxable benefits.',
              why: 'Only business overhead expense has that combination on the chart. Key person and buy-sell are not deductible and not taxable.',
            },
            {
              text: 'Business overhead expense benefits are tax free, and key-person premiums are deductible.',
              why: 'The chart shows business overhead expense benefits as taxable, and key-person premiums as not deductible.',
            },
            {
              text: 'Buy-sell benefits are taxable, and business overhead expense premiums are not deductible.',
              why: 'Those two rows are reversed. Buy-sell benefits are not taxable. Business overhead expense premiums are deductible for the employer.',
            },
          ],
        ),
        question(
          'c14q14',
          'What does the chart say about a nonmedical health savings account withdrawal before age 65?',
          [
            {
              text: 'It is taxable, plus a 20% penalty. There is no penalty after age 65. Withdrawals used for medical expenses are not taxable.',
              why: 'The premiums are deductible. An MSA is different: it is deductible, not taxable when used for medical expenses, and taxable when taken out at the end of the year. An FSA’s premiums are not deductible, and its benefits are not taxable.',
              correct: true,
            },
            {
              text: 'It is tax free at any age, with a 10% penalty only after age 65.',
              why: 'Medical use is the tax-free withdrawal. Nonmedical use under 65 is taxable and carries a 20% penalty. Over 65 there is no penalty. The chart does not use a 10% penalty.',
            },
            {
              text: 'It is taxed only if taken out at the end of the year, with no penalty.',
              why: 'Tax when the money is taken out at the end of the year is the MSA line. The health savings account penalty is the 20% nonmedical penalty under age 65.',
            },
            {
              text: 'The premiums are not deductible, so every withdrawal is tax free.',
              why: 'Nondeductible premiums and nontaxable benefits describe the FSA line. Health savings account premiums are deductible.',
            },
          ],
        ),
        question(
          'c14q15',
          'What exception does the chart give for individual medical, long-term care, and Medicare supplement premiums?',
          [
            {
              text: 'They are deductible only when combined premiums and unreimbursed medical expenses exceed 7.5% of adjusted gross income, the taxpayer itemizes, and the deduction meets the tax-qualified limits. The 7.5% floor applies at every age.',
              why: 'The 7.5% floor applies at every age. It is not a 10% threshold, and it is not limited to people age 65 or older. The taxpayer must itemize, and the tax-qualified limits still apply.',
              correct: true,
            },
            {
              text: 'They are deductible in full for a person under 65, and not deductible at 65 or older.',
              why: 'The 7.5% floor applies at every age. Age does not switch the threshold to 10% or remove the deduction.',
            },
            {
              text: 'They are always deductible above the line, like a health savings account deposit.',
              why: 'A health savings account deposit is the above-the-line 100% write-off. These individual premiums are marked not deductible unless the combined-expense test is met.',
            },
            {
              text: 'The employer may deduct them, and the benefits are taxable.',
              why: 'Deductible premiums and taxable benefits are the group disability and business overhead expense rows. These three lines are individual coverage.',
            },
          ],
        ),
      ],
    },

  ],
}

for (const section of chapter14.sections) {
  section.questions.push(...(chapter14Extra[section.id] ?? []))
}
