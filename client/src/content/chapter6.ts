import { question } from './build.ts'
import type { Chapter } from './types.ts'
import { chapter6Extra } from './extra/chapter6.ts'

/**
 * Wording follows the course OCR in content/source/chapter-6-ocr.txt.
 * The source pages have no practice questions. Questions are written from that text,
 * four options each, with a reason for the right answer and for each wrong one.
 */
export const chapter6: Chapter = {
  id: 'ch-qualified',
  number: 6,
  title: 'Retirement Plans like 401(k)s and IRAs',
  summary:
    'How a retirement plan becomes qualified, how it differs from a nonqualified plan, and the individual and employer plans that qualify.',
  sections: [
    {
      id: 'c6-qualified',
      title: 'What makes a retirement plan qualified',
      body: `Qualified retirement plans provide tax benefits. Nonqualified retirement plans do not. Federal rules decide which plans are qualified. This chapter explains those conditions and the plan types.

Terms used in this chapter:
• Earned income — salary, wages, or commissions, but not income from investments, unemployment benefits, and similar sources.
• Gross income — a person’s income before taxes or other deductions.
• Nonprofit organization — an organization that uses its surplus to fulfill its purpose instead of distributing the surplus to its owners or members.
• Pretax contribution — a contribution made before federal and/or state taxes are deducted from earnings.
• Rollover — withdrawal of the money from one qualified plan and placing it into another plan.
• Vesting — the right of a participant to retain part or all of the retirement plan benefits.

An employer-sponsored qualified retirement plan is approved by the IRS. That approval gives the employer and the employee benefits such as deductible contributions and tax-deferred growth.

Qualified plans have these characteristics:
• Designed for the exclusive benefit of the employees and their beneficiaries.
• Formally written and communicated to the employees.
• Use a benefit or contribution formula that does not discriminate in favor of the prohibited group: officers, stockholders, or highly paid employees.
• Are not geared exclusively to the prohibited group.
• Are permanent.
• Are approved by the IRS.
• Have a vesting requirement.`,
      questions: [
        question(
          'c6q01',
          'Which group is the prohibited group that a qualified plan’s formula must not favor?',
          [
            {
              text: 'Officers, stockholders, or highly paid employees.',
              why: 'A qualified plan is for the exclusive benefit of employees and their beneficiaries, is permanent, is approved by the IRS, and has a vesting requirement. The formula cannot discriminate in favor of that prohibited group.',
              correct: true,
            },
            {
              text: 'Employees age 50 or older who make catch-up contributions.',
              why: 'Catch-up contributions are allowed in several qualified plans. Age 50 is not the prohibited group.',
            },
            {
              text: 'Self-employed partners who own less than 10% of the business.',
              why: 'A partner must own at least 10% to be covered under a Keogh plan. That ownership test is not the prohibited group.',
            },
            {
              text: 'Employees of a nonprofit organization under Section 501(c)(3).',
              why: 'Those employees may use a 403(b) plan. They are not the group a qualified formula is forbidden to favor.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c6-contrast',
      title: 'Qualified plans and nonqualified plans',
      body: `Nonqualified plans are not subject to the participation, discrimination, and vesting requirements that apply to qualified plans. They need no government approval. An employer uses them to discriminate in favor of a valuable employee. Nonqualified plans accept after-tax contributions.

How the two kinds of plans differ:
• Contributions — qualified: currently tax deductible. Nonqualified: not currently tax deductible.
• IRS approval — qualified: the plan is approved by the IRS. Nonqualified: the plan does not need IRS approval.
• Discrimination — qualified: the plan cannot discriminate. Nonqualified: the plan can discriminate.
• Earnings — both grow tax deferred.
• Withdrawals — qualified: all withdrawals are taxed. Nonqualified: the excess over the cost basis is taxed.`,
      questions: [
        question(
          'c6q02',
          'Which statement compares taxation of qualified and nonqualified plans?',
          [
            {
              text: 'Qualified contributions are currently tax deductible, and all withdrawals are taxed. Nonqualified contributions are not currently deductible, and only the excess over cost basis is taxed.',
              why: 'Earnings grow tax deferred in both. A nonqualified plan needs no IRS approval and may discriminate. A qualified plan cannot discriminate and must be approved by the IRS.',
              correct: true,
            },
            {
              text: 'Qualified contributions are after tax, and nonqualified contributions are deductible.',
              why: 'That reverses the table. Qualified contributions are currently tax deductible. Nonqualified plans accept after-tax contributions that are not currently deductible.',
            },
            {
              text: 'Only nonqualified earnings grow tax deferred. Qualified earnings are taxed each year.',
              why: 'Earnings grow tax deferred in both kinds of plans.',
            },
            {
              text: 'A nonqualified plan must be approved by the IRS and cannot favor one employee.',
              why: 'A nonqualified plan does not need IRS approval, and the employer may use it to discriminate in favor of a valuable employee.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c6-ira',
      title: 'Traditional IRAs',
      body: `The two most common qualified individual plans are Traditional IRAs and Roth IRAs. Anybody with earned income can contribute to either plan.

A Traditional IRA lets individuals with earned income make tax-deductible contributions regardless of age. Participants may contribute up to a specified dollar limit each year, or 100% of salary if that is less than the maximum. Individuals age 50 or older may make additional catch-up contributions. A married couple could contribute a specified amount that is double the individual amount, even if only one person had earned income. Each spouse must keep a separate account that does not exceed the individual limit.

The owner may withdraw funds at any time. Withdrawals before age 59½ are early withdrawals and are subject to a 10% additional tax. Starting at age 59½, the owner may withdraw without that 10% additional tax. The owner must start receiving distributions at age 73. From that age, the owner must receive at least a minimum annual amount, the required minimum distribution (RMD).

Effective January 1, 2023, the SECURE Act raised the required minimum distribution age from 72 to 73, and reduced the penalty for failing to take an RMD from 50% to 25%.`,
      questions: [
        question(
          'c6q03',
          'When must a traditional IRA owner begin required minimum distributions?',
          [
            {
              text: 'At age 73. The SECURE Act raised that age from 72 effective January 1, 2023, and cut the missed-RMD penalty from 50% to 25%.',
              why: 'Withdrawals before age 59½ are early and carry a 10% additional tax. At 59½ that extra tax no longer applies, but the RMD still starts at 73.',
              correct: true,
            },
            {
              text: 'At age 59½, which is also when the 10% additional tax begins.',
              why: 'Age 59½ is when the 10% additional tax on early withdrawals stops, not when required distributions start.',
            },
            {
              text: 'At age 50, when catch-up contributions begin.',
              why: 'Age 50 is when additional catch-up contributions are allowed. It is not the RMD age.',
            },
            {
              text: 'There is no required age. Traditional IRA distributions may be postponed for life.',
              why: 'Roth IRAs do not have to begin distributions at a specified age. A traditional IRA must begin RMDs at 73.',
            },
          ],
        ),
        question(
          'c6q04',
          'How may a married couple fund traditional IRAs if only one spouse has earned income?',
          [
            {
              text: 'They may contribute up to double the individual amount, and each spouse must keep a separate account within the individual limit.',
              why: 'Contributions are tax deductible regardless of age, up to the dollar limit or 100% of salary if less. People age 50 or older may add a catch-up contribution.',
              correct: true,
            },
            {
              text: 'Only the spouse with earned income may have an account, and it may hold both spouses’ limits.',
              why: 'Each spouse must maintain a separate account, and neither account may exceed the individual limit.',
            },
            {
              text: 'They may contribute only investment income, because wages are excluded from earned income.',
              why: 'Earned income is salary, wages, or commissions. Income from investments and unemployment benefits is not earned income.',
            },
            {
              text: 'They must wait until both are age 73 before either may contribute.',
              why: 'Contributions are allowed regardless of age. Age 73 is when required distributions begin, not when contributions stop.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c6-roth',
      title: 'Roth IRAs',
      body: `A Roth IRA is funded with after-tax contributions. An individual can contribute 100% of earned income up to an IRS-specified maximum, as with traditional IRAs. The dollar amounts change every year. Roth contributions can continue regardless of the account owner’s age. Unlike a traditional IRA, distributions do not have to begin at a specified age. A Roth IRA grows tax free as long as the account is open for at least 5 years.`,
      questions: [
        question(
          'c6q05',
          'Which feature belongs to a Roth IRA and not to a traditional IRA?',
          [
            {
              text: 'It is funded with after-tax contributions, grows tax free if the account is open at least 5 years, and distributions do not have to start at a set age.',
              why: 'Contributions may continue regardless of age, up to 100% of earned income or the IRS maximum. A traditional IRA is tax deductible and must start RMDs at 73.',
              correct: true,
            },
            {
              text: 'Contributions are tax deductible, and required distributions begin at 73.',
              why: 'Those are traditional IRA rules. Roth contributions are after tax, and distributions need not begin at a specified age.',
            },
            {
              text: 'The account must be emptied at age 59½ or a 10% penalty applies to the whole balance.',
              why: 'The 10% additional tax is on early withdrawals from a traditional IRA before 59½. A Roth does not require distributions to begin at a specified age.',
            },
            {
              text: 'Only an employer may contribute, and the worker cannot.',
              why: 'Anybody with earned income can contribute to a Roth IRA. Employer-only contributions describe a SEP.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c6-keogh',
      title: 'Keogh plans for self-employed people',
      body: `HR-10 or Keogh plans let self-employed persons be covered under an IRS qualified retirement plan. They fund retirement with pre-tax dollars as if under a corporate retirement or pension plan. To be covered, the person must be self-employed, or a partner working part time or full time who owns at least 10% of the business.

The contribution limit is the lesser of an established dollar limit or 100% of total earned income. The contribution is tax deductible and accumulates tax deferred until withdrawal.

If a participant dies, payouts can be available immediately. If a participant becomes disabled, benefits may be collected immediately or the funds may be left to accumulate. At retirement, distribution must occur no earlier than age 59½ and no later than age 73. Before January 2023, the latest age was 72. Withdrawal before 59½ brings a 10% penalty. Payments may be discontinued at any time with no penalty, and the funds can be left to accumulate.

Any individual who is at least 21, has worked for a self-employed person for one year or more, and worked at least 1,000 hours per year must be included in the Keogh plan. The employer must contribute the same percentage of funds into the employee’s retirement account as into the employer’s own account.`,
      questions: [
        question(
          'c6q06',
          'Who can be covered under an HR-10 or Keogh plan?',
          [
            {
              text: 'A self-employed person, or a partner working part time or full time who owns at least 10% of the business.',
              why: 'Contributions are pre-tax, tax deductible, and the limit is the lesser of a dollar limit or 100% of earned income. The money accumulates tax deferred until withdrawal.',
              correct: true,
            },
            {
              text: 'Any employee of a business with no more than 100 workers, even if the worker owns nothing.',
              why: 'A plan for a business with no more than 100 employees who received at least $5,000 is a SIMPLE plan, not a Keogh plan.',
            },
            {
              text: 'Only employees of a public school system.',
              why: 'Public school employees and employees of certain nonprofits use a 403(b) tax-sheltered annuity.',
            },
            {
              text: 'Anyone with investment income, whether or not they work in the business.',
              why: 'Earned income is required for these retirement contributions. Investment income is not earned income, and Keogh coverage requires self-employment or the 10% partner test.',
            },
          ],
        ),
        question(
          'c6q07',
          'Which employee must be included in a Keogh plan?',
          [
            {
              text: 'A person who is at least 21, has worked for the self-employed person for one year or more, and worked at least 1,000 hours that year.',
              why: 'The employer must contribute the same percentage to the employee’s account as to the employer’s own account. Retirement distributions are no earlier than 59½ and no later than 73.',
              correct: true,
            },
            {
              text: 'Any part-time worker who is 18 and worked 500 hours.',
              why: 'The age is at least 21, the service is one year or more, and the hours test is at least 1,000 hours per year.',
            },
            {
              text: 'Only partners who own at least 50% of the business.',
              why: 'A partner needs at least 10% ownership to be covered. The employee inclusion rule is age, service, and hours, not a 50% ownership test.',
            },
            {
              text: 'No employees. A Keogh plan covers only the owner.',
              why: 'Eligible employees must be included, and the employer’s contribution percentage for them must match the percentage contributed for the employer.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c6-sep-simple',
      title: 'SEP and SIMPLE plans',
      body: `A Simplified Employee Pension (SEP) suits a small employer or a self-employed person. The employee establishes and maintains an individual retirement account, and the employer contributes to it. Employer contributions are not included in the employee’s gross income. The main difference from an IRA is the much larger amount that can be contributed to a SEP each year: an IRS annual dollar limit, or 25% of the employee’s compensation, whichever is less.

A SIMPLE plan (Savings Incentive Match Plan for Employees) is available to small businesses that employ no more than 100 employees who received at least $5,000 in compensation from the employer during the previous year. The employer must not already have a qualified plan. Employees who participate may defer up to a specified amount each year, and the employer then matches dollar for dollar, up to 3% of the employee’s annual compensation. Taxation is deferred on both contributions and earnings until the funds are withdrawn.`,
      questions: [
        question(
          'c6q08',
          'How much may be contributed to a SEP each year?',
          [
            {
              text: 'The IRS annual dollar limit, or 25% of the employee’s compensation, whichever is less.',
              why: 'The employee keeps an IRA, and the employer contributes. Those employer contributions are not included in the employee’s gross income. A SEP allows a much larger contribution than a traditional IRA.',
              correct: true,
            },
            {
              text: '3% of compensation, matched dollar for dollar, and only if the employer has no other plan.',
              why: 'The 3% dollar-for-dollar match, the 100-employee limit, and the rule against an existing qualified plan describe a SIMPLE plan.',
            },
            {
              text: '100% of earned income, with a required distribution starting at age 73.',
              why: 'Up to 100% of earned income, subject to a dollar limit, is the traditional IRA and Keogh style of limit. A SEP uses 25% of compensation or the dollar limit, whichever is less.',
            },
            {
              text: 'After-tax contributions only, which grow tax free after 5 years.',
              why: 'After-tax funding and tax-free growth after 5 years describe a Roth IRA. SEP contributions are employer contributions excluded from the employee’s gross income.',
            },
          ],
        ),
        question(
          'c6q09',
          'Which employer may establish a SIMPLE plan?',
          [
            {
              text: 'A small business with no more than 100 employees who received at least $5,000 from that employer in the previous year, and with no qualified plan already in place.',
              why: 'Participating employees may defer a specified amount. The employer matches dollar for dollar up to 3% of annual compensation. Contributions and earnings are tax deferred until withdrawal.',
              correct: true,
            },
            {
              text: 'Any employer, including one that already maintains a 401(k).',
              why: 'A 401(k) may be used by any employer. A SIMPLE plan cannot be established if a qualified plan is already in place, and it is limited to the 100-employee test.',
            },
            {
              text: 'Only a nonprofit under Section 501(c)(3) or a public school system.',
              why: 'Those employers use a 403(b) tax-sheltered annuity.',
            },
            {
              text: 'Only a self-employed person who owns at least 10% and contributes the same percentage for every eligible employee.',
              why: 'That is an HR-10 or Keogh plan. SIMPLE has its own size test and a 3% match.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c6-401k',
      title: 'Profit-sharing and 401(k) plans',
      body: `Profit-sharing plans are qualified plans in which a portion of the company’s profit is contributed to the plan and shared with employees. If the plan does not provide a definite formula for figuring the profits to be shared, employer contributions must be systematic and substantial.

A 401(k) lets employees take a reduction in their current salaries by deferring amounts into a retirement plan. The company can also match the employee’s contribution, either dollar for dollar or on a percentage basis. A participant may choose to receive taxable cash compensation, or to have the money contributed into the 401(k) in a cash or deferred arrangement (CODA). Contributions are excluded from the employee’s gross income up to a specified dollar amount. That ceiling is adjusted annually for inflation. Participants age 50 or over may make additional catch-up contributions, up to a limit, at the end of the calendar year.

A 401(k) may be arranged as a pure salary reduction plan, a bonus plan, or a thrift plan. Under a bonus or thrift plan, the employer contributes a certain amount or percentage for each dollar the employee contributes. Employee contributions are not always required.

Plans permit early withdrawal for specified hardship reasons, such as death or disability. Loans are also permitted in certain instances, up to 50% of the participant’s vested accrued benefit or the annual IRS-established dollar amount.`,
      questions: [
        question(
          'c6q10',
          'What choice does a 401(k) participant have under a cash or deferred arrangement?',
          [
            {
              text: 'Receive taxable cash compensation, or have the money contributed into the 401(k).',
              why: 'Amounts contributed are excluded from gross income up to an annual dollar ceiling that is adjusted for inflation. Participants age 50 or over may make catch-up contributions. The employer may match dollar for dollar or by a percentage.',
              correct: true,
            },
            {
              text: 'Take the contribution as tax-free cash, or roll it into a nonqualified plan.',
              why: 'The cash choice is taxable compensation. The other choice puts the money into the 401(k). A rollover moves money from one qualified plan to another. It is not the CODA choice.',
            },
            {
              text: 'Contribute only after-tax dollars, with distributions required at age 73.',
              why: '401(k) deferrals are excluded from current gross income. Required distributions at 73 are the traditional IRA rule stated in this chapter.',
            },
            {
              text: 'The employer must contribute exactly 25% of compensation, and the employee cannot defer salary.',
              why: '25% of compensation is the SEP limit. A 401(k) is a salary deferral, and the employer’s match is optional in amount.',
            },
          ],
        ),
        question(
          'c6q11',
          'How large a loan may a 401(k) allow?',
          [
            {
              text: 'Up to 50% of the participant’s vested accrued benefit, or the annual IRS dollar amount.',
              why: 'Early withdrawals are allowed for specified hardships such as death or disability. A 401(k) may be a pure salary reduction plan, a bonus plan, or a thrift plan. Under a bonus or thrift plan, employee contributions are not always required.',
              correct: true,
            },
            {
              text: 'The entire vested benefit, with no dollar cap.',
              why: 'The loan limit is 50% of the vested accrued benefit or the IRS dollar amount, not the whole benefit.',
            },
            {
              text: '3% of annual compensation, matched by the employer.',
              why: 'The 3% dollar-for-dollar match is the SIMPLE employer contribution, not the 401(k) loan limit.',
            },
            {
              text: 'Loans are never permitted. The only early access is a rollover.',
              why: 'Loans are permitted in certain instances. A qualified rollover is an exception to the 10% early-distribution penalty, not a substitute for the loan rule.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c6-403b',
      title: '403(b) plans for schools and charities',
      body: `A 403(b) plan, or tax-sheltered annuity (TSA), is a qualified plan for employees of certain nonprofit organizations under Section 501(c)(3) of the Internal Revenue Code, and for employees of public school systems. Contributions can be made by the employer or by the employee through salary reduction, and they are excluded from the employee’s current income. As with other qualified plans, a 403(b) limits employee contributions to a maximum that changes annually and is adjusted for inflation. The same catch-up provisions apply.

The course summarizes eligibility and who contributes:
• HR-10 (Keogh) — self-employed. The employer matches the employee’s contribution.
• SEP — a small employer or a self-employed person. The employer only contributes.
• SIMPLE — small employers with no more than 100 employees. The employer matches the employee’s contribution.
• 401(k) — any employer. The employer matches the employee’s contribution.
• 403(b) TSA — nonprofits and public school systems. The employer and the employee contribute.`,
      questions: [
        question(
          'c6q12',
          'Who may use a 403(b) tax-sheltered annuity?',
          [
            {
              text: 'Employees of certain 501(c)(3) nonprofit organizations and employees of public school systems.',
              why: 'The employer or the employee, through salary reduction, may contribute. Contributions are excluded from current income. The annual maximum changes with inflation, and the same catch-up provisions apply.',
              correct: true,
            },
            {
              text: 'Any employer, including a for-profit company with a salary-reduction plan.',
              why: 'Any employer may use a 401(k). A 403(b) is limited to certain nonprofits and public school systems.',
            },
            {
              text: 'Only a self-employed person who owns at least 10% of the business.',
              why: 'That person uses an HR-10 or Keogh plan.',
            },
            {
              text: 'Only businesses with no more than 100 employees and no other qualified plan.',
              why: 'That is the SIMPLE eligibility test.',
            },
          ],
        ),
        question(
          'c6q13',
          'On the course summary, which plan is funded by the employer only?',
          [
            {
              text: 'A SEP. It is for a small employer or a self-employed person.',
              why: 'HR-10, SIMPLE, and 401(k) are shown as the employer matching the employee’s contribution. A 403(b) is shown as both the employer and the employee contributing.',
              correct: true,
            },
            {
              text: 'A 403(b), because the employee cannot contribute.',
              why: 'The summary lists both the employer and the employee as contributors to a 403(b). The employee may contribute through salary reduction.',
            },
            {
              text: 'A SIMPLE plan, because the employee may not defer salary.',
              why: 'Employees who elect a SIMPLE plan may defer a specified amount, and the employer matches up to 3%.',
            },
            {
              text: 'A 401(k), because only the company may put money in.',
              why: 'A 401(k) participant defers salary, and the summary lists the employer as matching the employee’s contribution.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c6-tax',
      title: 'Taxes when the money comes out',
      body: `If a plan meets the general requirements for qualified plans, these tax advantages apply:
• Employer contributions are tax deductible to the employer and are not taxed as income to the employee.
• Earnings in the plan accumulate tax deferred.
• Lump-sum distributions to employees are eligible for favorable tax treatment.

Benefits are taxable to the participant when they are received during retirement, when the retired person is likely to be in a much lower tax bracket. Distributions before age 59½ impose a 10% penalty, unless they fall under an exception.

These distributions are exceptions to the early distribution rule and are not subject to the 10% early withdrawal penalty:
• Death of the participant.
• The participant’s disability.
• A divorce decree requiring a distribution to a spouse as part of the settlement.
• A series of equal payments, at least annually, over the participant’s life expectancy.
• A loan from the plan.
• As part of a qualified rollover.`,
      questions: [
        question(
          'c6q14',
          'Which tax advantage applies when a plan meets the qualified-plan requirements?',
          [
            {
              text: 'Employer contributions are deductible for the employer, are not income to the employee, and plan earnings accumulate tax deferred.',
              why: 'Lump-sum distributions to employees are also eligible for favorable tax treatment. The participant is taxed when benefits are received, often in a lower bracket.',
              correct: true,
            },
            {
              text: 'Employer contributions are taxed to the employee now, and earnings are taxed each year.',
              why: 'Qualified employer contributions are not taxed as income to the employee, and earnings accumulate tax deferred.',
            },
            {
              text: 'All withdrawals are tax free if the participant is under age 59½.',
              why: 'Qualified-plan withdrawals are taxed. A distribution before 59½ also imposes a 10% penalty unless an exception applies. Roth growth can be tax free, which is a different rule.',
            },
            {
              text: 'Only the excess over cost basis is taxed, because the contributions were after tax.',
              why: 'Taxing only the excess over cost basis is the nonqualified rule. Qualified plans tax all withdrawals, and the contributions were deductible.',
            },
          ],
        ),
        question(
          'c6q15',
          'Which distribution avoids the 10% penalty on a withdrawal before age 59½?',
          [
            {
              text: 'A series of equal payments, at least annually, over the participant’s life expectancy.',
              why: 'The other exceptions are death, disability, a divorce decree paying a spouse, a loan from the plan, and a qualified rollover. A withdrawal that is simply early, with none of those facts, still pays the 10% penalty.',
              correct: true,
            },
            {
              text: 'Any withdrawal after a one-year waiting period.',
              why: 'One year of service is a Keogh inclusion test. It does not waive the early-distribution penalty.',
            },
            {
              text: 'A cash distribution taken at age 50 to make a catch-up contribution.',
              why: 'Age 50 is when extra contributions are allowed. It is not an exception to the 10% penalty, and a catch-up is money put in, not a penalty-free withdrawal.',
            },
            {
              text: 'A distribution of investment earnings only, leaving the contributions in the plan.',
              why: 'Splitting earnings from contributions is not an exception. The listed exceptions are death, disability, divorce, equal payments over life expectancy, a plan loan, and a qualified rollover.',
            },
          ],
        ),
        question(
          'c6q16',
          'A participant takes money from one qualified plan and places it into another qualified plan. What is that transaction?',
          [
            {
              text: 'A rollover, and it is one of the exceptions to the 10% early withdrawal penalty.',
              why: 'A rollover is a withdrawal from one qualified plan placed into another plan. Vesting, by contrast, is the right to retain part or all of the benefits.',
              correct: true,
            },
            {
              text: 'A required minimum distribution, which must begin at age 50.',
              why: 'An RMD is the minimum annual amount a traditional IRA owner must receive starting at age 73. Age 50 is the catch-up age.',
            },
            {
              text: 'A vesting schedule, which moves the employer’s tax deduction to the employee.',
              why: 'Vesting is the participant’s right to keep part or all of the benefits. It is not a transfer between plans.',
            },
            {
              text: 'A nonqualified contribution, taxed only on the excess over cost basis.',
              why: 'Moving money between qualified plans is a rollover. Nonqualified taxation of the excess over cost basis is a different rule.',
            },
          ],
        ),
      ],
    },

  ],
}

for (const section of chapter6.sections) {
  section.questions.push(...(chapter6Extra[section.id] ?? []))
}
