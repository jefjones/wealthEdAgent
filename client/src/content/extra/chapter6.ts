import { question } from '../build.ts'
import type { Question } from '../types.ts'

export const chapter6Extra: Record<string, Question[]> = {
  'c6-qualified': [
    question(
      'c6q17',
      'What do qualified retirement plans provide that nonqualified retirement plans do not?',
      [
        {
          text: 'Tax benefits.',
          why: 'Qualified retirement plans provide tax benefits. Nonqualified retirement plans do not.',
          correct: true,
        },
        {
          text: 'An exemption from the federal rules that decide which plans are qualified.',
          why: 'Federal rules decide which plans are qualified. The difference named here is that qualified plans provide tax benefits and nonqualified plans do not.',
        },
        {
          text: 'A plan geared exclusively to officers, stockholders, or highly paid employees.',
          why: 'A qualified plan is not geared exclusively to that prohibited group. Qualified plans provide tax benefits, and nonqualified plans do not.',
        },
        {
          text: 'Freedom from a formal writing and from any vesting requirement.',
          why: 'A qualified plan is formally written and has a vesting requirement. The stated difference is that qualified plans provide tax benefits and nonqualified plans do not.',
        },
      ],
    ),
    question(
      'c6q18',
      'What decides which retirement plans are qualified?',
      [
        {
          text: 'A rollover from one plan into another plan.',
          why: 'A rollover is withdrawal of the money from one qualified plan and placing it into another plan. Federal rules decide which plans are qualified.',
        },
        {
          text: 'Federal rules.',
          why: 'Federal rules decide which plans are qualified. This chapter explains those conditions and the plan types.',
          correct: true,
        },
        {
          text: 'Whether the money came from investments or from unemployment benefits.',
          why: 'Those sources are excluded from earned income and do not decide which plans are qualified. Federal rules do.',
        },
        {
          text: 'Approval by beneficiaries after the participant vests.',
          why: 'Vesting is the participant’s right to retain part or all of the benefits. Federal rules, not beneficiary approval, decide which plans are qualified.',
        },
      ],
    ),
    question(
      'c6q19',
      'Which of these counts as earned income?',
      [
        {
          text: 'Income from investments.',
          why: 'Income from investments is not earned income. Earned income is salary, wages, or commissions.',
        },
        {
          text: 'Unemployment benefits.',
          why: 'Unemployment benefits are not earned income. Earned income is salary, wages, or commissions.',
        },
        {
          text: 'Salary, wages, or commissions.',
          why: 'Earned income means salary, wages, or commissions, but not income from investments, unemployment benefits, and similar sources.',
          correct: true,
        },
        {
          text: 'Similar sources that are not salary, wages, or commissions.',
          why: 'The definition excludes income from investments, unemployment benefits, and similar sources. Those amounts are not earned income.',
        },
      ],
    ),
    question(
      'c6q20',
      'What is gross income?',
      [
        {
          text: 'Income left after taxes and other deductions.',
          why: 'Gross income is measured before those amounts. It is a person’s income before taxes or other deductions.',
        },
        {
          text: 'Salary, wages, or commissions only.',
          why: 'Salary, wages, or commissions are earned income. Gross income is a person’s income before taxes or other deductions.',
        },
        {
          text: 'A contribution made before federal and/or state taxes are deducted from earnings.',
          why: 'That is a pretax contribution. Gross income is a person’s income before taxes or other deductions.',
        },
        {
          text: 'A person’s income before taxes or other deductions.',
          why: 'Gross income is a person’s income before taxes or other deductions.',
          correct: true,
        },
      ],
    ),
    question(
      'c6q21',
      'Which organization fits the definition of a nonprofit organization?',
      [
        {
          text: 'One that uses its surplus to fulfill its purpose instead of distributing the surplus to its owners or members.',
          why: 'A nonprofit organization uses its surplus to fulfill its purpose instead of distributing the surplus to its owners or members.',
          correct: true,
        },
        {
          text: 'One that distributes its surplus to its owners or members.',
          why: 'Distributing surplus to owners or members is the practice the definition sets aside. A nonprofit uses its surplus to fulfill its purpose.',
        },
        {
          text: 'Any employer whose plan has been approved by the IRS.',
          why: 'IRS approval is a feature of an employer-sponsored qualified plan. It is not the definition of a nonprofit organization.',
        },
        {
          text: 'A plan that is geared exclusively to officers and stockholders.',
          why: 'A qualified plan must not be geared exclusively to the prohibited group. That rule does not define a nonprofit organization.',
        },
      ],
    ),
    question(
      'c6q22',
      'What is a pretax contribution?',
      [
        {
          text: 'A contribution made after federal and state taxes have been deducted from earnings.',
          why: 'Timing is the other way around. A pretax contribution is made before federal and/or state taxes are deducted from earnings.',
        },
        {
          text: 'A contribution made before federal and/or state taxes are deducted from earnings.',
          why: 'A pretax contribution is a contribution made before federal and/or state taxes are deducted from earnings.',
          correct: true,
        },
        {
          text: 'Income from investments that is placed into a retirement plan.',
          why: 'Income from investments is not earned income. A pretax contribution is made before federal and/or state taxes are deducted from earnings.',
        },
        {
          text: 'The right to retain part or all of the retirement plan benefits.',
          why: 'That right is vesting. A pretax contribution is made before federal and/or state taxes are deducted from earnings.',
        },
      ],
    ),
    question(
      'c6q23',
      'How must a qualified plan be recorded and shared with employees?',
      [
        {
          text: 'It may be kept informal and does not have to be communicated to the employees.',
          why: 'A qualified plan is formally written and communicated to the employees. An informal, uncommunicated plan misses that requirement.',
        },
        {
          text: 'It must be written, but it may be withheld from the employees.',
          why: 'Writing alone is not enough. The plan is formally written and communicated to the employees.',
        },
        {
          text: 'It is formally written and communicated to the employees.',
          why: 'A qualified plan is formally written and communicated to the employees.',
          correct: true,
        },
        {
          text: 'It is communicated orally and does not have to be written down.',
          why: 'The plan must be formally written as well as communicated. An oral notice without a formal writing does not meet the rule.',
        },
      ],
    ),
    question(
      'c6q24',
      'What is vesting?',
      [
        {
          text: 'Withdrawal of the money from one qualified plan and placing it into another plan.',
          why: 'That movement of money is a rollover. Vesting is the right of a participant to retain part or all of the retirement plan benefits.',
        },
        {
          text: 'A contribution made before federal and/or state taxes are deducted from earnings.',
          why: 'That is a pretax contribution. Vesting is the right of a participant to retain part or all of the retirement plan benefits.',
        },
        {
          text: 'A person’s income before taxes or other deductions.',
          why: 'That is gross income. Vesting is the right of a participant to retain part or all of the retirement plan benefits.',
        },
        {
          text: 'The right of a participant to retain part or all of the retirement plan benefits.',
          why: 'Vesting is the right of a participant to retain part or all of the retirement plan benefits.',
          correct: true,
        },
      ],
    ),
    question(
      'c6q25',
      'What benefits does IRS approval give the employer and the employee under an employer-sponsored qualified plan?',
      [
        {
          text: 'Deductible contributions and tax-deferred growth.',
          why: 'IRS approval gives the employer and the employee benefits such as deductible contributions and tax-deferred growth.',
          correct: true,
        },
        {
          text: 'A contribution formula that favors officers, stockholders, or highly paid employees.',
          why: 'The formula must not discriminate in favor of that prohibited group. Approval brings deductible contributions and tax-deferred growth.',
        },
        {
          text: 'The right to drop the vesting requirement.',
          why: 'A qualified plan has a vesting requirement. Approval does not remove it, and the approval benefits are deductible contributions and tax-deferred growth.',
        },
        {
          text: 'Permission to keep the plan unwritten.',
          why: 'A qualified plan is formally written and communicated to the employees. Approval brings deductible contributions and tax-deferred growth.',
        },
      ],
    ),
    question(
      'c6q26',
      'For whose exclusive benefit must a qualified plan be designed?',
      [
        {
          text: 'Officers, stockholders, or highly paid employees.',
          why: 'Those persons are the prohibited group. The plan must be designed for the exclusive benefit of the employees and their beneficiaries, and the formula must not favor that group.',
        },
        {
          text: 'The employees and their beneficiaries.',
          why: 'A qualified plan is designed for the exclusive benefit of the employees and their beneficiaries.',
          correct: true,
        },
        {
          text: 'The employer that deducts the contributions.',
          why: 'Deductible contributions are a benefit of IRS approval. The plan itself is designed for the exclusive benefit of the employees and their beneficiaries.',
        },
        {
          text: 'Only participants who already have a vested right to every benefit.',
          why: 'Vesting is the right to retain part or all of the benefits, and the plan has a vesting requirement. The design standard is the exclusive benefit of the employees and their beneficiaries.',
        },
      ],
    ),
    question(
      'c6q27',
      'Which statement fits the permanence rule and the prohibited-group rule for a qualified plan?',
      [
        {
          text: 'The plan may be temporary if it is geared exclusively to officers, stockholders, or highly paid employees.',
          why: 'A qualified plan is permanent, and it is not geared exclusively to the prohibited group. A temporary plan for that group fails both rules.',
        },
        {
          text: 'The plan must be geared exclusively to the prohibited group, but it must also be permanent.',
          why: 'Permanence is required, but the plan is not geared exclusively to the prohibited group. The formula also must not discriminate in favor of that group.',
        },
        {
          text: 'The plan is permanent, and it is not geared exclusively to the prohibited group.',
          why: 'Qualified plans are permanent and are not geared exclusively to the prohibited group: officers, stockholders, or highly paid employees.',
          correct: true,
        },
        {
          text: 'The plan is permanent only when it skips IRS approval and the vesting requirement.',
          why: 'A qualified plan is permanent, is approved by the IRS, and has a vesting requirement. Permanence does not replace those other requirements.',
        },
      ],
    ),
  ],
  'c6-contrast': [
    question(
      'c6q28',
      'Which requirements that apply to qualified plans do not apply to nonqualified plans?',
      [
        {
          text: 'A requirement that earnings grow tax deferred.',
          why: 'Earnings in both qualified and nonqualified plans grow tax deferred. Nonqualified plans are excused from the participation, discrimination, and vesting requirements.',
        },
        {
          text: 'A requirement that the plan accept only currently deductible contributions.',
          why: 'Qualified contributions are currently tax deductible, and nonqualified contributions are not. The requirements nonqualified plans avoid are participation, discrimination, and vesting.',
        },
        {
          text: 'A requirement that every withdrawal be taxed only on the excess over the cost basis.',
          why: 'Taxing the excess over the cost basis is the nonqualified withdrawal rule. Nonqualified plans are not subject to the participation, discrimination, and vesting requirements.',
        },
        {
          text: 'The participation, discrimination, and vesting requirements.',
          why: 'Nonqualified plans are not subject to the participation, discrimination, and vesting requirements that apply to qualified plans.',
          correct: true,
        },
      ],
    ),
    question(
      'c6q29',
      'For what purpose does an employer use a nonqualified plan?',
      [
        {
          text: 'To discriminate in favor of a valuable employee.',
          why: 'An employer uses a nonqualified plan to discriminate in favor of a valuable employee.',
          correct: true,
        },
        {
          text: 'To obtain IRS approval of the arrangement.',
          why: 'A nonqualified plan does not need IRS approval. The employer uses it to discriminate in favor of a valuable employee.',
        },
        {
          text: 'To meet the vesting requirement that applies to a qualified plan.',
          why: 'Nonqualified plans are not subject to the vesting requirements that apply to qualified plans. The employer uses the plan to favor a valuable employee.',
        },
        {
          text: 'To make the contributions currently tax deductible.',
          why: 'Nonqualified contributions are not currently tax deductible. The employer uses the plan to discriminate in favor of a valuable employee.',
        },
      ],
    ),
    question(
      'c6q30',
      'What kind of contributions do nonqualified plans accept?',
      [
        {
          text: 'Contributions that are currently tax deductible.',
          why: 'Currently tax-deductible contributions are the qualified-plan rule. Nonqualified plans accept after-tax contributions, and those contributions are not currently tax deductible.',
        },
        {
          text: 'After-tax contributions.',
          why: 'Nonqualified plans accept after-tax contributions.',
          correct: true,
        },
        {
          text: 'Contributions that the IRS must approve before they are deposited.',
          why: 'A nonqualified plan does not need IRS approval and needs no government approval. It accepts after-tax contributions.',
        },
        {
          text: 'Contributions that are never taxed, including the excess over the cost basis at withdrawal.',
          why: 'On withdrawal, the excess over the cost basis is taxed. The contributions the plan accepts are after-tax contributions.',
        },
      ],
    ),
    question(
      'c6q31',
      'How do qualified and nonqualified plans differ on discrimination?',
      [
        {
          text: 'Both plans are forbidden to discriminate.',
          why: 'A qualified plan cannot discriminate. A nonqualified plan can discriminate.',
        },
        {
          text: 'A qualified plan can discriminate, and a nonqualified plan cannot.',
          why: 'That reverses the rule. A qualified plan cannot discriminate, and a nonqualified plan can.',
        },
        {
          text: 'A qualified plan cannot discriminate, and a nonqualified plan can.',
          why: 'A qualified plan cannot discriminate. A nonqualified plan can discriminate.',
          correct: true,
        },
        {
          text: 'Neither plan may discriminate, because both need IRS approval.',
          why: 'A nonqualified plan does not need IRS approval and can discriminate. A qualified plan is approved by the IRS and cannot discriminate.',
        },
      ],
    ),
    question(
      'c6q32',
      'What IRS approval does each kind of plan need?',
      [
        {
          text: 'Both kinds of plans must be approved by the IRS.',
          why: 'A qualified plan is approved by the IRS. A nonqualified plan does not need IRS approval.',
        },
        {
          text: 'The qualified plan needs no approval, and the nonqualified plan must have IRS approval.',
          why: 'Approval runs the other way. The qualified plan is approved by the IRS, and the nonqualified plan does not need IRS approval.',
        },
        {
          text: 'Neither plan is approved by the IRS, because neither needs government approval.',
          why: 'Nonqualified plans need no government approval. A qualified plan is approved by the IRS.',
        },
        {
          text: 'The qualified plan is approved by the IRS, and the nonqualified plan does not need IRS approval.',
          why: 'A qualified plan is approved by the IRS. A nonqualified plan does not need IRS approval and needs no government approval.',
          correct: true,
        },
      ],
    ),
    question(
      'c6q33',
      'How do earnings grow in qualified and nonqualified plans?',
      [
        {
          text: 'Earnings in both plans grow tax deferred.',
          why: 'Earnings grow tax deferred in both qualified and nonqualified plans.',
          correct: true,
        },
        {
          text: 'Only qualified-plan earnings grow tax deferred.',
          why: 'Tax-deferred growth is not limited to qualified plans. Earnings in both plans grow tax deferred.',
        },
        {
          text: 'Only nonqualified-plan earnings grow tax deferred.',
          why: 'Both kinds of plans have tax-deferred earnings. The nonqualified plan is not the only one.',
        },
        {
          text: 'Neither plan’s earnings grow tax deferred, because withdrawals are taxed while the money is still inside the plan.',
          why: 'All qualified withdrawals are taxed, and a nonqualified withdrawal is taxed on the excess over the cost basis. Earnings in both plans still grow tax deferred.',
        },
      ],
    ),
  ],
  'c6-ira': [
    question(
      'c6q34',
      'Which plans are the two most common qualified individual plans?',
      [
        {
          text: 'Two accounts that spouses must merge into one joint Traditional IRA.',
          why: 'Each spouse must keep a separate account. The two most common qualified individual plans are Traditional IRAs and Roth IRAs.',
        },
        {
          text: 'Traditional IRAs and Roth IRAs.',
          why: 'The two most common qualified individual plans are Traditional IRAs and Roth IRAs.',
          correct: true,
        },
        {
          text: 'A Traditional IRA and a required minimum distribution account.',
          why: 'The required minimum distribution is the minimum annual amount the owner must receive, not a second plan. The two plans are Traditional IRAs and Roth IRAs.',
        },
        {
          text: 'Only Roth IRAs, because a Traditional IRA is not an individual plan.',
          why: 'Both are included. The two most common qualified individual plans are Traditional IRAs and Roth IRAs.',
        },
      ],
    ),
    question(
      'c6q35',
      'Who can contribute to a Traditional IRA or a Roth IRA?',
      [
        {
          text: 'Only people age 50 or older.',
          why: 'Age 50 or older is when additional catch-up contributions are allowed. Anybody with earned income can contribute to either plan.',
        },
        {
          text: 'Only owners who have reached age 73.',
          why: 'Age 73 is when required distributions must start. Anybody with earned income can contribute to either plan.',
        },
        {
          text: 'Anybody with earned income.',
          why: 'Anybody with earned income can contribute to either a Traditional IRA or a Roth IRA.',
          correct: true,
        },
        {
          text: 'Anybody, including a person with no earned income.',
          why: 'Earned income is required. Anybody with earned income can contribute to either plan.',
        },
      ],
    ),
    question(
      'c6q36',
      'What is true of tax-deductible Traditional IRA contributions and the owner’s age?',
      [
        {
          text: 'They are allowed only before age 50.',
          why: 'Age 50 is when catch-up contributions may be added. Tax-deductible contributions are available regardless of age for individuals with earned income.',
        },
        {
          text: 'They must stop at age 59½.',
          why: 'Age 59½ is when the owner may withdraw without the 10% additional tax. Contributions may be tax deductible regardless of age.',
        },
        {
          text: 'They are allowed only after required distributions begin at age 73.',
          why: 'Age 73 is the distribution age, not a start date for deductions. Individuals with earned income may make tax-deductible contributions regardless of age.',
        },
        {
          text: 'Individuals with earned income may make them regardless of age.',
          why: 'A Traditional IRA lets individuals with earned income make tax-deductible contributions regardless of age.',
          correct: true,
        },
      ],
    ),
    question(
      'c6q37',
      'What is the regular annual contribution limit for a Traditional IRA participant?',
      [
        {
          text: 'A specified dollar limit, or 100% of salary if that is less than the maximum.',
          why: 'Participants may contribute up to a specified dollar limit each year, or 100% of salary if that is less than the maximum.',
          correct: true,
        },
        {
          text: '100% of salary even when salary exceeds the maximum dollar limit.',
          why: 'The 100% of salary figure is used when it is less than the maximum. The participant may not ignore the specified dollar limit.',
        },
        {
          text: 'The specified dollar limit plus 100% of salary.',
          why: 'The two figures are not added. The limit is a specified dollar limit, or 100% of salary if that is less than the maximum.',
        },
        {
          text: 'Only the catch-up amount, and only before age 50.',
          why: 'Catch-up contributions are additional amounts for individuals age 50 or older. The regular limit is a specified dollar limit or 100% of salary if less.',
        },
      ],
    ),
    question(
      'c6q38',
      'Who may make additional catch-up contributions to a Traditional IRA?',
      [
        {
          text: 'Every contributor, with no age condition.',
          why: 'Catch-up contributions are not open to every age. Individuals age 50 or older may make them.',
        },
        {
          text: 'Individuals age 50 or older.',
          why: 'Individuals age 50 or older may make additional catch-up contributions.',
          correct: true,
        },
        {
          text: 'Only owners who have reached the required minimum distribution age of 73.',
          why: 'Age 73 is when required distributions start. Catch-up contributions are for individuals age 50 or older.',
        },
        {
          text: 'Only a spouse whose separate account already exceeds the individual limit.',
          why: 'Each spouse’s account must not exceed the individual limit. Catch-up eligibility is an age rule for individuals age 50 or older.',
        },
      ],
    ),
    question(
      'c6q39',
      'What account must each spouse keep when a married couple contributes to Traditional IRAs?',
      [
        {
          text: 'One joint account that may hold more than the individual limit.',
          why: 'The couple amount can be a specified amount that is double the individual amount. Each spouse must still keep a separate account that does not exceed the individual limit.',
        },
        {
          text: 'No account for the spouse who is age 50 or older.',
          why: 'Age 50 or older allows catch-up contributions and does not remove an account. Each spouse must keep a separate account that does not exceed the individual limit.',
        },
        {
          text: 'A separate account that does not exceed the individual limit.',
          why: 'Each spouse must keep a separate account that does not exceed the individual limit.',
          correct: true,
        },
        {
          text: 'A separate account that may hold double the individual limit.',
          why: 'Double the individual amount is the couple figure, not the cap on one account. Each separate account must not exceed the individual limit.',
        },
      ],
    ),
    question(
      'c6q40',
      'How is a Traditional IRA withdrawal before age 59½ treated?',
      [
        {
          text: 'It is forbidden until age 73.',
          why: 'The owner may withdraw funds at any time, and a withdrawal before age 59½ is an early withdrawal subject to a 10% additional tax. Age 73 is when required distributions must start.',
        },
        {
          text: 'It is allowed, and the 10% additional tax does not apply at any age.',
          why: 'The owner may withdraw at any time, but the 10% additional tax applies before age 59½. That extra tax drops away starting at age 59½.',
        },
        {
          text: 'It is an early withdrawal subject to a 25% additional tax.',
          why: '25% is the reduced penalty for failing to take a required minimum distribution. An early withdrawal before age 59½ is subject to a 10% additional tax.',
        },
        {
          text: 'The owner may take it, but it is an early withdrawal subject to a 10% additional tax.',
          why: 'The owner may withdraw funds at any time. Withdrawals before age 59½ are early withdrawals and are subject to a 10% additional tax.',
          correct: true,
        },
      ],
    ),
    question(
      'c6q41',
      'Once Traditional IRA distributions are required, what must the owner receive each year?',
      [
        {
          text: 'At least a minimum annual amount, called the required minimum distribution.',
          why: 'From age 73, the owner must receive at least a minimum annual amount, the required minimum distribution (RMD).',
          correct: true,
        },
        {
          text: 'The entire balance in that first year.',
          why: 'The requirement is at least a minimum annual amount, not the entire balance in a single year.',
        },
        {
          text: 'Nothing, if the owner already withdrew funds before age 59½.',
          why: 'An earlier withdrawal does not cancel the later rule. From the required age, the owner must receive at least the minimum annual amount.',
        },
        {
          text: 'Only the catch-up contributions made after age 50.',
          why: 'Catch-up contributions are extra amounts put in at age 50 or older. The required distribution is at least a minimum annual amount.',
        },
      ],
    ),
    question(
      'c6q42',
      'Effective January 1, 2023, what did the SECURE Act change about required minimum distributions?',
      [
        {
          text: 'It lowered the required minimum distribution age from 73 to 72 and raised the missed-distribution penalty from 25% to 50%.',
          why: 'The direction is reversed. The SECURE Act raised the age from 72 to 73 and reduced the penalty from 50% to 25%.',
        },
        {
          text: 'It raised the required minimum distribution age from 72 to 73 and reduced the penalty for failing to take an RMD from 50% to 25%.',
          why: 'Effective January 1, 2023, the SECURE Act raised the required minimum distribution age from 72 to 73 and reduced the penalty for failing to take an RMD from 50% to 25%.',
          correct: true,
        },
        {
          text: 'It replaced the 10% additional tax on withdrawals before age 59½ with a 25% tax.',
          why: 'The 10% additional tax still applies before age 59½. The 50% to 25% change is the penalty for failing to take a required minimum distribution.',
        },
        {
          text: 'It moved the start of required distributions to age 59½ and set the missed-distribution penalty at 10%.',
          why: 'Age 59½ is when the 10% additional tax on early withdrawals ends. The SECURE Act change concerns the required minimum distribution age and the penalty for missing that distribution.',
        },
      ],
    ),
  ],
  'c6-roth': [
    question(
      'c6q43',
      'How is a Roth IRA funded?',
      [
        {
          text: 'With contributions that must stop when the owner reaches a specified age.',
          why: 'Roth contributions can continue regardless of the account owner’s age. A Roth IRA is funded with after-tax contributions.',
        },
        {
          text: 'With earnings that are taxed every year the account is open.',
          why: 'A Roth IRA grows tax free as long as the account is open for at least 5 years. The account is funded with after-tax contributions.',
        },
        {
          text: 'With after-tax contributions.',
          why: 'A Roth IRA is funded with after-tax contributions.',
          correct: true,
        },
        {
          text: 'With more than 100% of earned income.',
          why: 'An individual can contribute 100% of earned income up to an IRS-specified maximum. Funding is with after-tax contributions, not with amounts above earned income.',
        },
      ],
    ),
    question(
      'c6q44',
      'What contribution limit applies to a Roth IRA?',
      [
        {
          text: 'A dollar amount that stays the same every year, with no tie to earned income.',
          why: 'The dollar amounts change every year. The individual can contribute 100% of earned income up to an IRS-specified maximum.',
        },
        {
          text: '100% of earned income with no IRS maximum.',
          why: 'The 100% of earned income rule stops at an IRS-specified maximum, as with traditional IRAs.',
        },
        {
          text: 'Contributions that must end at a specified age, with a dollar maximum that never changes.',
          why: 'Roth contributions can continue regardless of the account owner’s age, and the dollar amounts change every year.',
        },
        {
          text: '100% of earned income up to an IRS-specified maximum, with dollar amounts that change every year.',
          why: 'An individual can contribute 100% of earned income up to an IRS-specified maximum, as with traditional IRAs. The dollar amounts change every year.',
          correct: true,
        },
      ],
    ),
    question(
      'c6q45',
      'How long must a Roth IRA be open to grow tax free?',
      [
        {
          text: 'At least 5 years.',
          why: 'A Roth IRA grows tax free as long as the account is open for at least 5 years.',
          correct: true,
        },
        {
          text: 'Until distributions are forced to begin at a specified age.',
          why: 'Unlike a traditional IRA, Roth distributions do not have to begin at a specified age. Tax-free growth depends on the account being open for at least 5 years.',
        },
        {
          text: 'Only while contributions continue, and contributions must stop at a stated age.',
          why: 'Contributions can continue regardless of the owner’s age. Tax-free growth requires the account to be open for at least 5 years.',
        },
        {
          text: 'One year, matching the yearly change in the dollar contribution amounts.',
          why: 'Dollar amounts change every year, but that is not the tax-free period. The account must be open for at least 5 years.',
        },
      ],
    ),
  ],
  'c6-keogh': [
    question(
      'c6q46',
      'How do HR-10 or Keogh plans fund retirement?',
      [
        {
          text: 'With contributions that are not tax deductible and are taxed while they accumulate.',
          why: 'The contribution is tax deductible and accumulates tax deferred until withdrawal. Funding is with pre-tax dollars as if under a corporate retirement or pension plan.',
        },
        {
          text: 'With pre-tax dollars, as if under a corporate retirement or pension plan.',
          why: 'HR-10 or Keogh plans let self-employed persons be covered under an IRS qualified retirement plan. They fund retirement with pre-tax dollars as if under a corporate retirement or pension plan.',
          correct: true,
        },
        {
          text: 'Only by payments that start after the participant reaches age 73.',
          why: 'Age 73 is the latest age for a distribution at retirement, not the way the plan is funded. Funding uses pre-tax dollars as if under a corporate retirement or pension plan.',
        },
        {
          text: 'By a contribution equal to the greater of a dollar limit or 100% of earned income.',
          why: 'The contribution limit is the lesser of an established dollar limit or 100% of total earned income. Funding is with pre-tax dollars as if under a corporate retirement or pension plan.',
        },
      ],
    ),
    question(
      'c6q47',
      'What is the Keogh contribution limit?',
      [
        {
          text: 'An established dollar limit plus 100% of total earned income.',
          why: 'The two amounts are not added. The limit is the lesser of an established dollar limit or 100% of total earned income.',
        },
        {
          text: '100% of total earned income even when that is more than the established dollar limit.',
          why: 'The larger figure is not available. The limit is the lesser of an established dollar limit or 100% of total earned income.',
        },
        {
          text: 'The lesser of an established dollar limit or 100% of total earned income.',
          why: 'The contribution limit is the lesser of an established dollar limit or 100% of total earned income.',
          correct: true,
        },
        {
          text: 'The greater of an established dollar limit or 100% of total earned income.',
          why: 'The plan uses the lesser of an established dollar limit or 100% of total earned income, not the greater amount.',
        },
      ],
    ),
    question(
      'c6q48',
      'How is the Keogh contribution taxed before withdrawal?',
      [
        {
          text: 'It is not deductible, and earnings are taxed each year.',
          why: 'The contribution is tax deductible, and the funds accumulate tax deferred until withdrawal.',
        },
        {
          text: 'It is deductible, but earnings are taxed as they accumulate.',
          why: 'The accumulation is tax deferred until withdrawal, and the contribution is tax deductible.',
        },
        {
          text: 'It is taxed when contributed, and only later earnings are deductible.',
          why: 'The contribution itself is tax deductible. It accumulates tax deferred until withdrawal.',
        },
        {
          text: 'It is tax deductible, and it accumulates tax deferred until withdrawal.',
          why: 'The contribution is tax deductible and accumulates tax deferred until withdrawal.',
          correct: true,
        },
      ],
    ),
    question(
      'c6q49',
      'If a Keogh participant dies, when can payouts be available?',
      [
        {
          text: 'Immediately.',
          why: 'If a participant dies, payouts can be available immediately.',
          correct: true,
        },
        {
          text: 'No earlier than age 59½.',
          why: 'Age 59½ is the earliest age for a distribution at retirement. If a participant dies, payouts can be available immediately.',
        },
        {
          text: 'No later than age 73, and not before that birthday.',
          why: 'Age 73 is the latest age for a retirement distribution. Death payouts can be available immediately.',
        },
        {
          text: 'Only after the funds stay in the plan for one more year.',
          why: 'One year or more of work is part of who must be included in the plan, not a waiting period after death. Death payouts can be available immediately.',
        },
      ],
    ),
    question(
      'c6q50',
      'If a Keogh participant becomes disabled, what may happen to the benefits?',
      [
        {
          text: 'Payment must wait until age 73.',
          why: 'Age 73 is the latest retirement distribution age. On disability, benefits may be collected immediately or the funds may be left to accumulate.',
        },
        {
          text: 'Benefits may be collected immediately, or the funds may be left to accumulate.',
          why: 'If a participant becomes disabled, benefits may be collected immediately or the funds may be left to accumulate.',
          correct: true,
        },
        {
          text: 'The only choice is an immediate payout, and the funds may not be left in the plan.',
          why: 'Disability allows either choice. Benefits may be collected immediately or the funds may be left to accumulate.',
        },
        {
          text: 'A 10% penalty applies if the benefits are collected immediately.',
          why: 'The 10% penalty applies to a withdrawal before age 59½. On disability, benefits may be collected immediately or left to accumulate.',
        },
      ],
    ),
    question(
      'c6q51',
      'At retirement, when must a Keogh distribution occur?',
      [
        {
          text: 'No earlier than age 21 and no later than age 59½.',
          why: 'Age 21 is part of who must be included in the plan. At retirement, distribution must occur no earlier than age 59½ and no later than age 73.',
        },
        {
          text: 'Immediately, using the same timing as a death payout.',
          why: 'Death payouts can be available immediately. At retirement, distribution must occur no earlier than age 59½ and no later than age 73.',
        },
        {
          text: 'No earlier than age 59½ and no later than age 73.',
          why: 'At retirement, distribution must occur no earlier than age 59½ and no later than age 73.',
          correct: true,
        },
        {
          text: 'No earlier than age 72 and no later than age 73.',
          why: 'Before January 2023, the latest age was 72. The retirement rule is no earlier than age 59½ and no later than age 73.',
        },
      ],
    ),
    question(
      'c6q52',
      'What percentage must the employer put into an employee’s Keogh account?',
      [
        {
          text: 'A smaller percentage than the employer puts into the employer’s own account.',
          why: 'The percentages match. The employer must contribute the same percentage into the employee’s account as into the employer’s own account.',
        },
        {
          text: '10% of the business, without regard to the employer’s own contribution rate.',
          why: 'At least 10% is the ownership level for a partner who is covered. The contribution rule is the same percentage for the employee’s account as for the employer’s own account.',
        },
        {
          text: '100% of the employee’s earned income, and nothing into the employer’s account.',
          why: '100% of total earned income is one side of the contribution limit. The employer must use the same percentage for the employee’s account and the employer’s own account.',
        },
        {
          text: 'The same percentage the employer contributes to the employer’s own account.',
          why: 'The employer must contribute the same percentage of funds into the employee’s retirement account as into the employer’s own account.',
          correct: true,
        },
      ],
    ),
    question(
      'c6q53',
      'What is the penalty for a Keogh withdrawal before age 59½?',
      [
        {
          text: 'A 10% penalty.',
          why: 'Withdrawal before age 59½ brings a 10% penalty.',
          correct: true,
        },
        {
          text: 'No penalty, which is also the result when payments are discontinued.',
          why: 'Payments may be discontinued at any time with no penalty. A withdrawal before age 59½ is different and brings a 10% penalty.',
        },
        {
          text: 'A penalty that applies only when the withdrawal is postponed past age 73.',
          why: 'Age 73 is the latest retirement distribution age. The 10% penalty applies to a withdrawal before age 59½.',
        },
        {
          text: 'Loss of tax deferral back to the first contribution, with no stated percentage penalty.',
          why: 'The contribution accumulates tax deferred until withdrawal. The early-withdrawal consequence stated here is a 10% penalty.',
        },
      ],
    ),
    question(
      'c6q54',
      'What happens if Keogh payments are discontinued?',
      [
        {
          text: 'A 10% penalty is due, and the balance must be paid out at once.',
          why: 'A 10% penalty applies to a withdrawal before age 59½. Payments may be discontinued at any time with no penalty, and the funds can be left to accumulate.',
        },
        {
          text: 'They may stop at any time with no penalty, and the funds can be left to accumulate.',
          why: 'Payments may be discontinued at any time with no penalty, and the funds can be left to accumulate.',
          correct: true,
        },
        {
          text: 'Distributions must begin no later than age 59½.',
          why: 'Age 59½ is the earliest retirement distribution age, not a deadline triggered by stopping payments. Discontinuing payments brings no penalty, and the funds can be left to accumulate.',
        },
        {
          text: 'The funds can be left to accumulate only if the participant has died.',
          why: 'Death can make payouts available immediately. Stopping payments has no penalty, and the funds can be left to accumulate.',
        },
      ],
    ),
  ],
  'c6-sep-simple': [
    question(
      'c6q55',
      'Who is a Simplified Employee Pension suited for?',
      [
        {
          text: 'A business that already has a qualified plan and employs more than 100 people.',
          why: 'No more than 100 employees, and no plan already in place, are SIMPLE conditions. A SEP suits a small employer or a self-employed person.',
        },
        {
          text: 'Only an employee who wants an account with no employer contribution.',
          why: 'The employee establishes and maintains the individual retirement account, and the employer contributes to it. A SEP suits a small employer or a self-employed person.',
        },
        {
          text: 'A small employer or a self-employed person.',
          why: 'A Simplified Employee Pension suits a small employer or a self-employed person.',
          correct: true,
        },
        {
          text: 'Any employer whose match is capped at 3% of compensation.',
          why: 'The 3% figure is the SIMPLE match, up to 3% of the employee’s annual compensation. A SEP suits a small employer or a self-employed person.',
        },
      ],
    ),
    question(
      'c6q56',
      'In a SEP, who establishes the individual retirement account, and who contributes?',
      [
        {
          text: 'The employer establishes the account, and the employee is the only contributor.',
          why: 'The roles run the other way. The employee establishes and maintains the account, and the employer contributes to it.',
        },
        {
          text: 'The employer both establishes the account and is the only party who maintains it.',
          why: 'The employee establishes and maintains the individual retirement account. The employer contributes to it.',
        },
        {
          text: 'The employee contributes, and the employer is not allowed to put money in.',
          why: 'The employer contributes to the account, and those contributions are not included in the employee’s gross income. The employee establishes and maintains the account.',
        },
        {
          text: 'The employee establishes and maintains it, and the employer contributes to it.',
          why: 'The employee establishes and maintains an individual retirement account, and the employer contributes to it.',
          correct: true,
        },
      ],
    ),
    question(
      'c6q57',
      'How are SEP employer contributions treated in the employee’s gross income?',
      [
        {
          text: 'They are not included in the employee’s gross income.',
          why: 'Employer contributions are not included in the employee’s gross income.',
          correct: true,
        },
        {
          text: 'They are included in gross income in the year the employer pays them.',
          why: 'Inclusion in that year reverses the rule. Employer contributions are not included in the employee’s gross income.',
        },
        {
          text: 'They are included up to 25% of compensation and excluded above that percent.',
          why: '25% of the employee’s compensation is part of how large the annual contribution may be, not a gross-income threshold. The contributions are not included in the employee’s gross income.',
        },
        {
          text: 'They are taxed as soon as the account is open, while SIMPLE contributions and earnings wait until withdrawal.',
          why: 'SIMPLE taxation is deferred on both contributions and earnings until the funds are withdrawn. SEP employer contributions are not included in the employee’s gross income.',
        },
      ],
    ),
    question(
      'c6q58',
      'What is the main difference between a SEP and an IRA?',
      [
        {
          text: 'The SEP contribution must be smaller than an IRA contribution.',
          why: 'The difference runs the other way. The main difference is the much larger amount that can be contributed to a SEP each year.',
        },
        {
          text: 'A much larger amount can be contributed to a SEP each year.',
          why: 'The main difference from an IRA is the much larger amount that can be contributed to a SEP each year. That amount is an IRS annual dollar limit, or 25% of the employee’s compensation, whichever is less.',
          correct: true,
        },
        {
          text: 'The employee funds the SEP, and the employer funds the IRA.',
          why: 'In a SEP the employee establishes and maintains the account and the employer contributes. The main difference from an IRA is the much larger contribution.',
        },
        {
          text: 'SEP employer contributions are included in gross income, and IRA contributions are not.',
          why: 'SEP employer contributions are not included in the employee’s gross income. The main difference from an IRA is the much larger amount that can be contributed each year.',
        },
      ],
    ),
    question(
      'c6q59',
      'What is true of an existing qualified plan when an employer wants a SIMPLE plan?',
      [
        {
          text: 'The employer must already have a qualified plan.',
          why: 'The rule is the opposite. The employer must not already have a qualified plan.',
        },
        {
          text: 'The employer may keep any number of other qualified plans beside the SIMPLE plan.',
          why: 'The employer must not already have a qualified plan. Other qualified plans already in place break that condition.',
        },
        {
          text: 'The employer must not already have a qualified plan.',
          why: 'The employer must not already have a qualified plan.',
          correct: true,
        },
        {
          text: 'A qualified plan is required if more than 100 employees received at least $5,000 in the prior year.',
          why: 'A SIMPLE plan is for small businesses that employ no more than 100 employees who received at least $5,000 in compensation from the employer during the previous year. The employer must not already have a qualified plan.',
        },
      ],
    ),
    question(
      'c6q60',
      'How does the employer match SIMPLE deferrals?',
      [
        {
          text: 'Dollar for dollar, with no cap tied to compensation.',
          why: 'The match is dollar for dollar only up to 3% of the employee’s annual compensation.',
        },
        {
          text: 'Up to 25% of the employee’s compensation.',
          why: '25% of compensation is the SEP contribution comparison with the IRS dollar limit. The SIMPLE match is dollar for dollar up to 3% of the employee’s annual compensation.',
        },
        {
          text: 'A flat $5,000, the prior-year pay level used to count employees.',
          why: '$5,000 is the prior-year compensation level used in the SIMPLE employee-count test. The match is dollar for dollar up to 3% of the employee’s annual compensation.',
        },
        {
          text: 'Dollar for dollar, up to 3% of the employee’s annual compensation.',
          why: 'The employer matches dollar for dollar, up to 3% of the employee’s annual compensation. Employees who participate may defer up to a specified amount each year.',
          correct: true,
        },
      ],
    ),
    question(
      'c6q61',
      'When are SIMPLE contributions and earnings taxed?',
      [
        {
          text: 'Taxation is deferred on both until the funds are withdrawn.',
          why: 'Taxation is deferred on both contributions and earnings until the funds are withdrawn.',
          correct: true,
        },
        {
          text: 'Contributions are taxed when they are deferred, and only earnings wait until withdrawal.',
          why: 'Both contributions and earnings are deferred. Taxation is not collected on the contributions at the time of deferral.',
        },
        {
          text: 'Both are taxed in the year of the employer match.',
          why: 'The match does not make the amounts currently taxable. Taxation is deferred on both contributions and earnings until the funds are withdrawn.',
        },
        {
          text: 'They are never taxed, including when the funds are withdrawn.',
          why: 'Deferral runs until the funds are withdrawn. The section does not say the tax disappears at withdrawal.',
        },
      ],
    ),
  ],
  'c6-401k': [
    question(
      'c6q62',
      'What happens to a portion of company profit in a profit-sharing plan?',
      [
        {
          text: 'It is paid only to officers as current wages outside the plan.',
          why: 'A profit-sharing plan is a qualified plan. A portion of the company’s profit is contributed to the plan and shared with employees.',
        },
        {
          text: 'It is contributed to the plan and shared with employees.',
          why: 'Profit-sharing plans are qualified plans in which a portion of the company’s profit is contributed to the plan and shared with employees.',
          correct: true,
        },
        {
          text: 'It is held back until a participant requests a loan.',
          why: 'Loans are permitted in certain instances and are not the profit-sharing contribution. A portion of the company’s profit is contributed to the plan and shared with employees.',
        },
        {
          text: 'It is returned to the company whenever the plan has no definite formula.',
          why: 'If there is no definite formula for figuring the profits to be shared, employer contributions must be systematic and substantial. The profit portion is contributed to the plan and shared with employees.',
        },
      ],
    ),
    question(
      'c6q63',
      'If a profit-sharing plan gives no definite formula for the profits to be shared, what must employer contributions be?',
      [
        {
          text: 'Optional, and skippable in any year the employer chooses.',
          why: 'Without a definite formula, employer contributions must be systematic and substantial. They are not merely optional.',
        },
        {
          text: 'Limited to one dollar for each dollar an employee puts into a 401(k).',
          why: 'A bonus or thrift 401(k) uses an employer amount or percentage for each dollar the employee contributes. When a profit-sharing plan lacks a definite formula, contributions must be systematic and substantial.',
        },
        {
          text: 'Systematic and substantial.',
          why: 'If the plan does not provide a definite formula for figuring the profits to be shared, employer contributions must be systematic and substantial.',
          correct: true,
        },
        {
          text: 'Paid only as taxable cash, with nothing contributed to the plan.',
          why: 'Taxable cash is one choice under a cash or deferred arrangement. This profit-sharing rule requires employer contributions to be systematic and substantial.',
        },
      ],
    ),
    question(
      'c6q64',
      'How can a 401(k) affect an employee’s current salary?',
      [
        {
          text: 'It increases current salary by the amount of any employer match.',
          why: 'The company can match the contribution. The employee’s own 401(k) step is a reduction in current salary by deferring amounts into a retirement plan.',
        },
        {
          text: 'It replaces salary with a profit-sharing deposit that must be systematic and substantial.',
          why: 'Systematic and substantial contributions are the profit-sharing rule when there is no definite formula. A 401(k) lets the employee reduce current salary by deferring amounts into a retirement plan.',
        },
        {
          text: 'It forbids any reduction in salary and accepts only employer money.',
          why: 'Employee contributions are not always required, but a 401(k) does let employees take a reduction in current salaries by deferring amounts into a retirement plan.',
        },
        {
          text: 'The employee takes a reduction in current salary by deferring amounts into a retirement plan.',
          why: 'A 401(k) lets employees take a reduction in their current salaries by deferring amounts into a retirement plan.',
          correct: true,
        },
      ],
    ),
    question(
      'c6q65',
      'How may the company match a 401(k) contribution?',
      [
        {
          text: 'Either dollar for dollar or on a percentage basis.',
          why: 'The company can match the employee’s contribution, either dollar for dollar or on a percentage basis.',
          correct: true,
        },
        {
          text: 'Only dollar for dollar, never as a percentage.',
          why: 'A percentage match is allowed. The company can match either dollar for dollar or on a percentage basis.',
        },
        {
          text: 'Only as a share of company profit, with no link to the employee’s contribution.',
          why: 'Sharing company profit describes a profit-sharing plan. A 401(k) match follows the employee’s contribution, dollar for dollar or on a percentage basis.',
        },
        {
          text: 'The company is not allowed to match 401(k) contributions.',
          why: 'The company can match the employee’s contribution, either dollar for dollar or on a percentage basis.',
        },
      ],
    ),
    question(
      'c6q66',
      'How are 401(k) contributions treated in the employee’s gross income?',
      [
        {
          text: 'They are included in gross income up to a specified dollar amount.',
          why: 'The treatment is exclusion, not inclusion. Contributions are excluded from the employee’s gross income up to a specified dollar amount.',
        },
        {
          text: 'They are excluded from gross income up to a specified dollar amount.',
          why: 'Contributions are excluded from the employee’s gross income up to a specified dollar amount.',
          correct: true,
        },
        {
          text: 'They are excluded with no dollar ceiling.',
          why: 'The exclusion stops at a specified dollar amount. That ceiling is adjusted annually for inflation.',
        },
        {
          text: 'They are excluded only for participants age 50 or over.',
          why: 'Age 50 or over is the catch-up group. The exclusion from gross income up to a specified dollar amount is the general rule for contributions.',
        },
      ],
    ),
    question(
      'c6q67',
      'What happens to the ceiling on that 401(k) gross-income exclusion?',
      [
        {
          text: 'It is fixed and is never adjusted.',
          why: 'The ceiling is adjusted annually for inflation. It does not stay fixed.',
        },
        {
          text: 'It is adjusted only when the participant reaches age 50.',
          why: 'Age 50 or over is when catch-up contributions may be made. The exclusion ceiling is adjusted annually for inflation.',
        },
        {
          text: 'It is adjusted annually for inflation.',
          why: 'Contributions are excluded up to a specified dollar amount, and that ceiling is adjusted annually for inflation.',
          correct: true,
        },
        {
          text: 'It falls to zero at the end of each calendar year.',
          why: 'The end of the calendar year is when participants age 50 or over may make catch-up contributions. The exclusion ceiling is adjusted annually for inflation.',
        },
      ],
    ),
    question(
      'c6q68',
      'Which 401(k) participants may make additional catch-up contributions?',
      [
        {
          text: 'Every participant, at the beginning of the year, with no age rule.',
          why: 'Catch-up contributions are for participants age 50 or over, up to a limit, at the end of the calendar year.',
        },
        {
          text: 'Only participants who take a hardship withdrawal in the same year.',
          why: 'Hardship withdrawals are a separate access rule. Catch-up contributions are for participants age 50 or over.',
        },
        {
          text: 'Participants under age 50, with no stated limit.',
          why: 'The age group is reversed, and the catch-up is up to a limit. Participants age 50 or over may make those contributions at the end of the calendar year.',
        },
        {
          text: 'Participants age 50 or over, up to a limit, at the end of the calendar year.',
          why: 'Participants age 50 or over may make additional catch-up contributions, up to a limit, at the end of the calendar year.',
          correct: true,
        },
      ],
    ),
    question(
      'c6q69',
      'How may a 401(k) be arranged?',
      [
        {
          text: 'As a pure salary reduction plan, a bonus plan, or a thrift plan.',
          why: 'A 401(k) may be arranged as a pure salary reduction plan, a bonus plan, or a thrift plan.',
          correct: true,
        },
        {
          text: 'Only as a profit-sharing plan that has a definite formula.',
          why: 'Profit-sharing is a separate qualified plan in this section. A 401(k) may be a pure salary reduction plan, a bonus plan, or a thrift plan.',
        },
        {
          text: 'Only as a hardship-withdrawal program.',
          why: 'Hardship withdrawal is an early-access rule, not one of the three arrangements. A 401(k) may be a pure salary reduction plan, a bonus plan, or a thrift plan.',
        },
        {
          text: 'Only as an arrangement that pays taxable cash and cannot accept deferrals.',
          why: 'A cash or deferred arrangement lets the participant take taxable cash or contribute the money to the 401(k). The plan may still be a pure salary reduction plan, a bonus plan, or a thrift plan.',
        },
      ],
    ),
    question(
      'c6q70',
      'Under a bonus or thrift 401(k), what does the employer contribute?',
      [
        {
          text: 'Nothing, because employee contributions are required and unmatched.',
          why: 'Employee contributions are not always required. Under a bonus or thrift plan, the employer contributes a certain amount or percentage for each dollar the employee contributes.',
        },
        {
          text: 'A certain amount or percentage for each dollar the employee contributes.',
          why: 'Under a bonus or thrift plan, the employer contributes a certain amount or percentage for each dollar the employee contributes.',
          correct: true,
        },
        {
          text: 'A portion of company profit with no reference to employee dollars.',
          why: 'A portion of company profit is the profit-sharing approach. A bonus or thrift contribution is a certain amount or percentage for each dollar the employee contributes.',
        },
        {
          text: 'The participant’s vested accrued benefit, paid out as a loan.',
          why: 'Loans are permitted in certain instances and are not the bonus or thrift contribution. Under a bonus or thrift plan, the employer contributes a certain amount or percentage for each dollar the employee contributes.',
        },
      ],
    ),
    question(
      'c6q71',
      'Are employee contributions required in every 401(k)?',
      [
        {
          text: 'Yes. Employee contributions are required in every arrangement.',
          why: 'Employee contributions are not always required. Under a bonus or thrift plan the employer may contribute for each employee dollar, but the employee contribution itself is not always required.',
        },
        {
          text: 'Yes, but only in a pure salary reduction plan, and never in a bonus or thrift plan.',
          why: 'The section does not draw that split. It states that employee contributions are not always required.',
        },
        {
          text: 'No. Employee contributions are not always required.',
          why: 'Employee contributions are not always required.',
          correct: true,
        },
        {
          text: 'No. An employee is never allowed to contribute.',
          why: 'Employees may defer salary into the plan. The rule is that employee contributions are not always required, not that they are forbidden.',
        },
      ],
    ),
    question(
      'c6q72',
      'For which reasons may a 401(k) allow an early withdrawal?',
      [
        {
          text: 'For any reason the participant chooses.',
          why: 'Early withdrawal is limited to specified hardship reasons, such as death or disability.',
        },
        {
          text: 'Only to replace a loan, because loans are not permitted.',
          why: 'Loans are permitted in certain instances. Early withdrawal is allowed for specified hardship reasons, such as death or disability.',
        },
        {
          text: 'Only when the participant elects taxable cash instead of a deferral.',
          why: 'Taxable cash is the cash or deferred arrangement choice, not the hardship rule. Early withdrawal is permitted for specified hardship reasons, such as death or disability.',
        },
        {
          text: 'Specified hardship reasons, such as death or disability.',
          why: 'Plans permit early withdrawal for specified hardship reasons, such as death or disability.',
          correct: true,
        },
      ],
    ),
  ],
  'c6-403b': [
    question(
      'c6q73',
      'How may the employee contribute to a 403(b)?',
      [
        {
          text: 'Through salary reduction.',
          why: 'The employee may contribute through salary reduction. The employer may also contribute, and the contributions are excluded from the employee’s current income.',
          correct: true,
        },
        {
          text: 'Only by a distribution that is included in current income.',
          why: 'Contributions are excluded from the employee’s current income. The employee contributes through salary reduction, and the employer may contribute as well.',
        },
        {
          text: 'The employee may not contribute. Only the employer may put money in.',
          why: 'The employer-only pattern is the SEP line on the course summary. A 403(b) contribution can come from the employer or from the employee through salary reduction.',
        },
        {
          text: 'By taking the employer match described for a 401(k), with no salary reduction.',
          why: 'The summary says a 401(k) employer matches the employee’s contribution. For a 403(b), the employee may contribute through salary reduction, and the employer may also contribute.',
        },
      ],
    ),
    question(
      'c6q74',
      'How are 403(b) contributions treated in the employee’s current income?',
      [
        {
          text: 'They are taxed as current income in the year they are made.',
          why: 'The contributions are excluded from the employee’s current income. They are not added to current income in the year they are made.',
        },
        {
          text: 'They are excluded from the employee’s current income.',
          why: 'Contributions made by the employer or by the employee through salary reduction are excluded from the employee’s current income.',
          correct: true,
        },
        {
          text: 'They are excluded only when the annual maximum never changes.',
          why: 'The employee contribution maximum changes annually and is adjusted for inflation. Exclusion from current income still applies.',
        },
        {
          text: 'They are included in current income up to the annual maximum.',
          why: 'The maximum limits the employee contribution. Amounts that are contributed are excluded from the employee’s current income.',
        },
      ],
    ),
    question(
      'c6q75',
      'What is true of the maximum employee contribution to a 403(b)?',
      [
        {
          text: 'The maximum stays the same for the life of the plan.',
          why: 'The maximum changes annually and is adjusted for inflation. It is not frozen for the life of the plan.',
        },
        {
          text: 'The maximum applies only to the employer’s contribution.',
          why: 'The limit described here is on employee contributions. That maximum changes annually and is adjusted for inflation.',
        },
        {
          text: 'It changes annually and is adjusted for inflation.',
          why: 'As with other qualified plans, a 403(b) limits employee contributions to a maximum that changes annually and is adjusted for inflation.',
          correct: true,
        },
        {
          text: 'There is no maximum, because catch-up contributions replace it.',
          why: 'The same catch-up provisions apply, and they do not erase the maximum. Employee contributions are still limited to a maximum that changes annually and is adjusted for inflation.',
        },
      ],
    ),
    question(
      'c6q76',
      'What does this section say about catch-up contributions to a 403(b)?',
      [
        {
          text: 'Catch-up contributions are not available in a 403(b).',
          why: 'The same catch-up provisions apply. They are not barred.',
        },
        {
          text: 'Catch-up contributions are allowed only for the employer.',
          why: 'The section does not limit catch-up to the employer. The same catch-up provisions apply.',
        },
        {
          text: 'Public school systems use a different catch-up rule from other 403(b) employers.',
          why: 'The section does not split catch-up by type of employer. The same catch-up provisions apply.',
        },
        {
          text: 'The same catch-up provisions apply.',
          why: 'A 403(b) limits employee contributions to a maximum that changes annually and is adjusted for inflation, and the same catch-up provisions apply.',
          correct: true,
        },
      ],
    ),
    question(
      'c6q77',
      'On the course summary, how does the employer contribute to an HR-10 (Keogh)?',
      [
        {
          text: 'The employer matches the employee’s contribution.',
          why: 'The summary lists an HR-10 (Keogh) for the self-employed, and the employer matches the employee’s contribution.',
          correct: true,
        },
        {
          text: 'The employer is the only contributor.',
          why: 'Employer-only contributions are the SEP line. For an HR-10, the employer matches the employee’s contribution.',
        },
        {
          text: 'The employer and the employee both contribute, and no match is described.',
          why: 'Both the employer and the employee contributing is the 403(b) TSA line. The HR-10 line says the employer matches the employee’s contribution.',
        },
        {
          text: 'The employer contributes nothing.',
          why: 'The summary does not say the HR-10 employer contributes nothing. The employer matches the employee’s contribution.',
        },
      ],
    ),
    question(
      'c6q78',
      'On the course summary, which statement describes a 401(k)?',
      [
        {
          text: 'It is for small employers with no more than 100 employees, and the employer is the only contributor.',
          why: 'No more than 100 employees is the SIMPLE line, and employer-only funding is the SEP line. A 401(k) is for any employer, and the employer matches the employee’s contribution.',
        },
        {
          text: 'Any employer may use it, and the employer matches the employee’s contribution.',
          why: 'The summary lists a 401(k) for any employer, and the employer matches the employee’s contribution.',
          correct: true,
        },
        {
          text: 'It is only for the self-employed, and the employee cannot contribute.',
          why: 'Self-employed is the HR-10 line. A 401(k) is for any employer, and the employer matches the employee’s contribution.',
        },
        {
          text: 'It is for nonprofits and public school systems, and only the employee contributes.',
          why: 'A 403(b) is for employees of certain nonprofit organizations under Section 501(c)(3) and for public school systems, and both the employer and the employee contribute. A 401(k) is for any employer, and the employer matches the employee’s contribution.',
        },
      ],
    ),
    question(
      'c6q79',
      'On the course summary, who contributes to a 403(b) TSA?',
      [
        {
          text: 'The employer only.',
          why: 'Employer-only contributions are the SEP description. For a 403(b) TSA, the employer and the employee contribute.',
        },
        {
          text: 'The employer matches the employee’s contribution, and that is the only pattern listed for this plan.',
          why: 'An employer match is the summary pattern for an HR-10, a SIMPLE plan, and a 401(k). For a 403(b) TSA, the employer and the employee contribute.',
        },
        {
          text: 'The employer and the employee.',
          why: 'On the course summary, the employer and the employee contribute to a 403(b) TSA.',
          correct: true,
        },
        {
          text: 'Neither party, because the summary lists the plan as unfunded.',
          why: 'The summary says the employer and the employee contribute. It does not list the 403(b) as unfunded.',
        },
      ],
    ),
    question(
      'c6q80',
      'Which description matches the SIMPLE line on the course summary?',
      [
        {
          text: 'A small employer or a self-employed person, and the employer only contributes.',
          why: 'That is the SEP line. The SIMPLE line is small employers with no more than 100 employees, and the employer matches the employee’s contribution.',
        },
        {
          text: 'Any employer, and the employer matches the employee’s contribution.',
          why: 'Any employer is the 401(k) line. The SIMPLE line is small employers with no more than 100 employees, and the employer matches the employee’s contribution.',
        },
        {
          text: 'The self-employed, and the employer matches the employee’s contribution.',
          why: 'Self-employed is the HR-10 line. The SIMPLE line is small employers with no more than 100 employees, and the employer matches the employee’s contribution.',
        },
        {
          text: 'Small employers with no more than 100 employees, and the employer matches the employee’s contribution.',
          why: 'The course summary describes a SIMPLE plan as small employers with no more than 100 employees, and the employer matches the employee’s contribution.',
          correct: true,
        },
      ],
    ),
  ],
  'c6-tax': [
    question(
      'c6q81',
      'How are employer contributions taxed when a plan meets the qualified-plan requirements?',
      [
        {
          text: 'They are tax deductible to the employer and are not taxed as income to the employee.',
          why: 'Employer contributions are tax deductible to the employer and are not taxed as income to the employee.',
          correct: true,
        },
        {
          text: 'They are deductible to the employer and are also taxed as current income to the employee.',
          why: 'The employee does not take them into income now. They are tax deductible to the employer and are not taxed as income to the employee.',
        },
        {
          text: 'They are not deductible to the employer, and they are never taxed to anyone.',
          why: 'The employer deduction is part of the advantage. Benefits are taxable to the participant when they are received during retirement.',
        },
        {
          text: 'They are deductible only if the employee takes a lump-sum distribution in the same year.',
          why: 'Lump-sum distributions have their own favorable tax treatment. Employer contributions are deductible to the employer and are not taxed as income to the employee.',
        },
      ],
    ),
    question(
      'c6q82',
      'How do earnings inside a qualified plan accumulate?',
      [
        {
          text: 'They are taxed each year as they are credited.',
          why: 'Yearly taxation is not the rule. Earnings in the plan accumulate tax deferred.',
        },
        {
          text: 'They accumulate tax deferred.',
          why: 'Earnings in the plan accumulate tax deferred.',
          correct: true,
        },
        {
          text: 'They are free of tax when the participant receives them in retirement.',
          why: 'Benefits are taxable to the participant when they are received during retirement. While they remain in the plan, earnings accumulate tax deferred.',
        },
        {
          text: 'They receive favorable tax treatment only if paid as equal payments over life expectancy.',
          why: 'Favorable tax treatment is the rule for lump-sum distributions. Earnings inside the plan accumulate tax deferred, and equal life-expectancy payments are an early-distribution exception.',
        },
      ],
    ),
    question(
      'c6q83',
      'What tax treatment can a lump-sum distribution to an employee receive?',
      [
        {
          text: 'The distribution is free of all income tax.',
          why: 'A lump-sum distribution is eligible for favorable tax treatment. The section does not say it is free of tax, and benefits are taxable when received.',
        },
        {
          text: 'The distribution is taxed with no favorable treatment available.',
          why: 'Lump-sum distributions to employees are eligible for favorable tax treatment. Denying that treatment reverses the rule.',
        },
        {
          text: 'Favorable tax treatment.',
          why: 'Lump-sum distributions to employees are eligible for favorable tax treatment.',
          correct: true,
        },
        {
          text: 'A mandatory 10% penalty, even when the employee is older than 59½.',
          why: 'The 10% penalty applies to distributions before age 59½ unless an exception applies. The advantage stated for a lump-sum distribution is favorable tax treatment.',
        },
      ],
    ),
    question(
      'c6q84',
      'When are qualified-plan benefits taxable to the participant?',
      [
        {
          text: 'When the employer contributes them, while the participant is still working.',
          why: 'Employer contributions are not taxed as income to the employee. Benefits are taxable when they are received during retirement.',
        },
        {
          text: 'Each year as the earnings accumulate.',
          why: 'Earnings accumulate tax deferred. Benefits are taxable to the participant when they are received during retirement.',
        },
        {
          text: 'Only when the distribution is taken before age 59½.',
          why: 'A distribution before age 59½ imposes a 10% penalty unless an exception applies. Income tax on the benefits applies when they are received during retirement.',
        },
        {
          text: 'When they are received during retirement, when the retired person is likely to be in a much lower tax bracket.',
          why: 'Benefits are taxable to the participant when they are received during retirement, when the retired person is likely to be in a much lower tax bracket.',
          correct: true,
        },
      ],
    ),
    question(
      'c6q85',
      'What extra penalty do qualified-plan distributions before age 59½ impose?',
      [
        {
          text: 'A 10% penalty, unless the distribution falls under an exception.',
          why: 'Distributions before age 59½ impose a 10% penalty, unless they fall under an exception.',
          correct: true,
        },
        {
          text: 'A 10% penalty that still applies to death, disability, and a loan from the plan.',
          why: 'Death of the participant, the participant’s disability, and a loan from the plan are exceptions. They are not subject to the 10% early withdrawal penalty.',
        },
        {
          text: 'No penalty of any kind before age 59½.',
          why: 'Distributions before age 59½ impose a 10% penalty unless an exception applies.',
        },
        {
          text: 'Favorable lump-sum treatment in place of any penalty, with no exception list.',
          why: 'Favorable tax treatment applies to lump-sum distributions and is separate from the early-distribution penalty. The penalty is 10% unless the distribution is an exception.',
        },
      ],
    ),
    question(
      'c6q86',
      'A divorce decree requires a distribution to a spouse as part of the settlement. What happens to the 10% early withdrawal penalty?',
      [
        {
          text: 'The penalty applies, because a divorce is not an exception.',
          why: 'A divorce decree that requires a distribution to a spouse as part of the settlement is an exception. That distribution is not subject to the 10% early withdrawal penalty.',
        },
        {
          text: 'The distribution is not subject to the 10% early withdrawal penalty.',
          why: 'A divorce decree requiring a distribution to a spouse as part of the settlement is an exception to the early distribution rule.',
          correct: true,
        },
        {
          text: 'The penalty is waived only when the payment is a loan to the spouse.',
          why: 'A loan from the plan is its own exception. The divorce distribution is excepted on its own and is not subject to the 10% penalty.',
        },
        {
          text: 'The penalty applies unless the payment is also a qualified rollover.',
          why: 'A distribution made as part of a qualified rollover is a separate exception. The divorce distribution itself is not subject to the 10% early withdrawal penalty.',
        },
      ],
    ),
    question(
      'c6q87',
      'How does the 10% early withdrawal penalty treat a distribution caused by the participant’s death or disability?',
      [
        {
          text: 'Both events are penalized, because only a divorce decree is an exception.',
          why: 'Death of the participant and the participant’s disability are both exceptions. A divorce decree is a further exception, not the only one.',
        },
        {
          text: 'Only death is excepted. Disability is still penalized.',
          why: 'Both are excepted. The list includes death of the participant and the participant’s disability.',
        },
        {
          text: 'Neither distribution is subject to the 10% early withdrawal penalty.',
          why: 'Death of the participant and the participant’s disability are exceptions to the early distribution rule and are not subject to the 10% early withdrawal penalty.',
          correct: true,
        },
        {
          text: 'The penalty applies unless the payments are a series of unequal withdrawals.',
          why: 'A series of equal payments, at least annually, over the participant’s life expectancy is the payments exception. Death and disability are excepted on their own.',
        },
      ],
    ),
  ],
}
