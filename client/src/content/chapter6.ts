import { question } from './build.ts'
import type { Chapter } from './types.ts'
import { chapter6Extra } from './extra/chapter6.ts'

/**
 * Section text is the current study wording.
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
      body: `A qualified retirement plan provides tax benefits. A nonqualified retirement plan does not. Federal rules decide which plans are qualified. This chapter explains those conditions and the common plan types.

These words are used in this chapter.

• Earned income. Salary, wages, or commissions. It does not include income from investments, unemployment benefits, and similar sources.
• Gross income. A person's income before taxes or other deductions.
• Nonprofit organization. An organization that uses its surplus to fulfill its purpose instead of distributing the surplus to its owners or members.
• Pretax contribution. A contribution made before federal and/or state taxes are taken out of earnings.
• Rollover. Taking money out of one qualified plan and placing it into another plan.
• Vesting. A participant's right to keep part or all of the retirement plan benefits.

An employer-sponsored qualified retirement plan is approved by the IRS. That approval gives the employer and the employee benefits such as deductible contributions and tax-deferred growth.

A qualified plan has these characteristics.

• It is designed for the exclusive benefit of the employees and their beneficiaries.
• It is formally written and communicated to the employees.
• It uses a benefit or contribution formula that does not discriminate in favor of the prohibited group. That group is officers, stockholders, and highly paid employees.
• It is not geared exclusively to the prohibited group.
• It is permanent.
• It is approved by the IRS.
• It has a vesting requirement.`,
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
      body: `A nonqualified plan is not subject to the participation, discrimination, and vesting requirements that apply to a qualified plan. It does not need government approval. An employer uses a nonqualified plan to favor a valuable employee. Nonqualified plans accept after-tax contributions.

The two kinds of plans differ in these ways.

• Contributions. Qualified: currently tax deductible. Nonqualified: not currently tax deductible.
• IRS approval. Qualified: the plan is approved by the IRS. Nonqualified: the plan does not need IRS approval.
• Discrimination. Qualified: the plan cannot discriminate. Nonqualified: the plan can discriminate.
• Earnings. Both grow tax deferred.
• Withdrawals. Qualified: all withdrawals are taxed. Nonqualified: only the amount above the cost basis is taxed.`,
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

A Traditional IRA lets a person with earned income make a tax-deductible contribution regardless of age. The participant may contribute up to a specified dollar limit each year, or 100% of salary if that is less than the maximum. A person age 50 or older may make an additional catch-up contribution. A married couple could contribute a specified amount that is double the individual amount, even if only one spouse had earned income. Each spouse must keep a separate account, and neither account may exceed the individual limit.

The owner may withdraw funds at any time. A withdrawal before age 59½ is an early withdrawal and is subject to a 10% additional tax. Starting at age 59½, the owner may withdraw without that 10% additional tax. The owner must start receiving required minimum distributions, or RMDs. Under SECURE 2.0, effective January 1, 2023, that age rose from 72 to 73. It rises to 75 for a person who reaches age 74 after December 31, 2032, so required distributions at 75 start in 2033. The penalty for failing to take an RMD is 25% of the shortfall. The penalty is 10% of the shortfall if the person corrects it in time.

Nora is 48 and takes $4,000 from her traditional IRA. Because she is under 59½, the 10% additional tax on that early withdrawal is $400, and the withdrawal is also subject to ordinary income tax.`,
      questions: [
        question(
          'c6q03',
          'When must a traditional IRA owner begin required minimum distributions?',
          [
            {
              text: 'At age 73. Under SECURE 2.0, effective January 1, 2023, that age rose from 72. The penalty for failing to take an RMD is 25% of the shortfall, or 10% of the shortfall if the person corrects it in time.',
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
      body: `A Roth IRA is funded with after-tax contributions. A person can contribute 100% of earned income up to an IRS-specified maximum, the same kind of limit that applies to a traditional IRA. The dollar amounts change every year. Roth contributions can continue no matter how old the account owner is. Unlike a traditional IRA, distributions do not have to begin at a specified age. A Roth IRA grows tax free as long as the account is open for at least 5 years.`,
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
      body: `An HR-10 plan, also called a Keogh plan, lets a self-employed person be covered under an IRS qualified retirement plan. The person funds retirement with pre-tax dollars, as if the person were under a corporate retirement or pension plan. To be covered, the person must be self-employed, or a partner working part time or full time who owns at least 10% of the business.

The contribution limit is the lesser of an established dollar limit or 100% of total earned income. The contribution is tax deductible, and it accumulates tax deferred until it is withdrawn.

If a participant dies, the payout can be available immediately. If a participant becomes disabled, the benefits may be collected immediately, or the funds may be left to accumulate. At retirement, the distribution must occur no earlier than age 59½ and no later than the required beginning age. That age is 73 under SECURE 2.0. It is 75 for a person who reaches age 74 after December 31, 2032. Before January 2023, the latest age was 72. A withdrawal before age 59½ brings a 10% penalty. Payments may be stopped at any time with no penalty, and the funds can be left to accumulate.

Any person who is at least 21, has worked for a self-employed person for one year or more, and worked at least 1,000 hours per year must be included in the Keogh plan. The employer must contribute the same percentage of funds into the employee's retirement account as the employer contributes into the employer's own account.`,
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
      body: `A Simplified Employee Pension, or SEP, suits a small employer or a self-employed person. The employee sets up and maintains an individual retirement account, and the employer contributes to it. The employer's contributions are not included in the employee's gross income. The main difference from an IRA is the much larger amount that can be contributed to a SEP each year. The limit is an IRS annual dollar limit, or 25% of the employee's compensation, whichever is less.

A SIMPLE plan, the Savings Incentive Match Plan for Employees, is available to a small business that employs no more than 100 employees who received at least $5,000 in compensation from the employer during the previous year. The employer must not already have a qualified plan. An employee who participates may defer up to a specified amount each year. The employer then matches the employee's contribution dollar for dollar, up to 3% of the employee's annual compensation. Tax is deferred on both the contributions and the earnings until the funds are withdrawn.

A landscaping company with 40 employees, each of whom earned at least $5,000 from the company last year, and with no other qualified plan in place, can offer a SIMPLE plan. If an employee defers part of pay, the company matches that deferral dollar for dollar up to 3% of the employee's annual compensation.`,
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
      body: `A profit-sharing plan is a qualified plan in which a portion of the company's profit is contributed to the plan and shared with the employees. If the plan does not provide a definite formula for figuring the profits to be shared, the employer's contributions must be systematic and substantial.

A 401(k) lets an employee take a reduction in current salary by deferring that amount into a retirement plan. The company can also match the employee's contribution, either dollar for dollar or on a percentage basis. A participant may choose to receive taxable cash compensation, or to have the money contributed into the 401(k). That choice is a cash or deferred arrangement, or CODA. Contributions are excluded from the employee's gross income up to a specified dollar amount. That ceiling is adjusted every year for inflation. A participant age 50 or over may make an additional catch-up contribution, up to a limit, at the end of the calendar year.

A 401(k) may be arranged as a pure salary reduction plan, a bonus plan, or a thrift plan. Under a bonus plan or a thrift plan, the employer contributes an amount or a percentage for each dollar the employee contributes. Employee contributions are not always required.

The plan may permit an early withdrawal for a specified hardship, such as death or disability. Loans are also permitted in certain cases, up to 50% of the participant's vested accrued benefit or up to the annual IRS-established dollar amount.`,
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
      body: `A 403(b) plan, also called a tax-sheltered annuity or TSA, is a qualified plan for employees of certain nonprofit organizations under Section 501(c)(3) of the Internal Revenue Code, and for employees of public school systems. Contributions can be made by the employer or by the employee through a salary reduction. They are excluded from the employee's current income. As with other qualified plans, a 403(b) limits the employee's contributions to a maximum that changes every year and is adjusted for inflation. The same catch-up provisions apply.

Who is eligible, and who puts the money in, can be summarized this way.

• HR-10 (Keogh). Self-employed people. The employer matches the employee's contribution.
• SEP. A small employer or a self-employed person. The employer is the only contributor.
• SIMPLE. A small employer with no more than 100 employees. The employer matches the employee's contribution.
• 401(k). Any employer. The employer matches the employee's contribution.
• 403(b) TSA. Nonprofit organizations and public school systems. The employer and the employee both contribute.`,
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
      body: `If a plan meets the general requirements for a qualified plan, these tax advantages apply.

• Employer contributions are tax deductible to the employer, and they are not taxed as income to the employee.
• Earnings in the plan accumulate tax deferred.
• A lump-sum distribution to an employee is eligible for favorable tax treatment.

The benefits are taxable to the participant when they are received during retirement, which is when the retired person is likely to be in a much lower tax bracket. A distribution before age 59½ imposes a 10% penalty, unless it falls under an exception.

These distributions are exceptions to the early distribution rule. They are not subject to the 10% early withdrawal penalty.

• Death of the participant.
• The participant's disability.
• A divorce decree that requires a distribution to a spouse as part of the settlement.
• A series of equal payments, at least once a year, over the participant's life expectancy.
• A loan from the plan.
• A distribution that is part of a qualified rollover.`,
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
