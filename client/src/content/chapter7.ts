import { question } from './build.ts'
import type { Chapter } from './types.ts'
import { chapter7Extra } from './extra/chapter7.ts'

/**
 * Section text is the current study wording.
 * The source pages have no practice questions. Questions are written from that text,
 * four options each, with a reason for the right answer and for each wrong one.
 */
export const chapter7: Chapter = {
  id: 'ch-taxation',
  number: 7,
  title: 'Taxes on Life Insurance and Annuities',
  summary:
    'How life insurance benefits, dividends, loans, annuities, and IRAs are taxed, and which exchanges can be made without income tax.',
  sections: [
    {
      id: 'c7-life',
      title: 'Taxes on life insurance you own',
      body: `This chapter explains how policy benefits, dividends, loans, and certain exchanges are taxed.

These words are used in this chapter.

• Exclusion ratio. The calculation that decides how much of an annuity payment is left out of taxable income.
• LIFO (Last In, First Out). The money paid into the contract last is treated as the money paid out first.
• FIFO (First In, First Out). The money paid into the contract first is treated as the money paid out first.
• Policy endowment. The maturity date.
• Policy proceeds. In life insurance, the death benefit.
• Surrender. The policyowner's early termination of a policy.
• Tax deductible. An amount that reduces taxable income and therefore reduces the tax owed.
• Taxable. Subject to tax, payable to the state and the federal government.
• Tax deferred. Tax on a gain, such as interest or a dividend, is paid at a later date instead of in the year the gain is earned.
• Vesting. A retirement-plan participant's right to keep part or all of the benefits.

Premiums an individual pays for personal life insurance are not tax deductible. A death benefit paid as a lump sum to a named beneficiary is tax free. If the proceeds are paid in installments, the principal is tax free and the interest is taxable.

Cash value grows tax deferred. The policyowner may borrow against it or receive it on surrender. On a surrender or an endowment, any cash value above the cost basis is taxable as ordinary income. The cost basis is the premiums that were paid. On death, the face amount is paid and there is no longer a cash value. A death benefit is generally paid to the beneficiary free of income tax.

A dividend is a return of unused premium, so it is not income for tax purposes. If dividends are left with the insurer to accumulate interest, that interest is taxed as ordinary income in each year it is earned, whether or not it is paid out to the policyowner.

Money borrowed against the cash value is not taxable as income. The company charges interest on an outstanding policy loan. A policy loan, together with its interest, can be repaid by the owner while the policy is in force. It can also be subtracted from the cash value at surrender or maturity, or subtracted from the death benefit when the insured dies.`,
      questions: [
        question(
          'c7q01',
          'How is a personal life insurance death benefit taxed when a named beneficiary takes it as a lump sum?',
          [
            {
              text: 'It is tax free. Premiums were not deductible. If the proceeds are paid in installments, only the interest is taxable.',
              why: 'The principal of an installment settlement stays tax free. Cash value grows tax deferred, and on death the face amount is paid and there is no remaining cash value.',
              correct: true,
            },
            {
              text: 'The entire death benefit is ordinary income, because the premiums were deducted.',
              why: 'Personal life insurance premiums are not tax deductible, and a lump-sum death benefit to a named beneficiary is tax free.',
            },
            {
              text: 'The principal is taxable and the interest is tax free.',
              why: 'That reverses the installment rule. Principal is tax free. Interest is taxable.',
            },
            {
              text: 'It is tax free only if the premiums were paid with pre-tax dollars.',
              why: 'Personal life premiums are not deductible. The lump-sum death benefit is still income tax free to a named beneficiary.',
            },
          ],
        ),
        question(
          'c7q02',
          'What is taxed when dividends are left with the insurer to accumulate interest?',
          [
            {
              text: 'The interest earned on the dividend account, each year it is earned, whether or not it is paid out. The dividend itself is not income.',
              why: 'Dividends are a return of unused premiums. A policy loan is also not income taxable, though the insurer charges interest on it.',
              correct: true,
            },
            {
              text: 'The dividend and the interest are both taxed as ordinary income.',
              why: 'The dividend is not considered income. Only the interest on accumulated dividends is taxed.',
            },
            {
              text: 'Nothing, because both the dividend and the interest are a return of premium.',
              why: 'The dividend is a return of unused premium. The interest earned on it is taxable ordinary income.',
            },
            {
              text: 'The dividend is taxed only in the year the policyowner withdraws it.',
              why: 'Interest is taxed each year it is earned, whether or not it is paid out. The dividend itself is not taxed.',
            },
          ],
        ),
        question(
          'c7q03',
          'A policy loan is repaid at the insured’s death. How is that repayment made?',
          [
            {
              text: 'It is subtracted from the death benefit. The loan itself was not income taxable.',
              why: 'The loan and interest can also be repaid by the owner while the policy is in force, or subtracted from the cash value at surrender or maturity. The insurer charges interest on the outstanding loan.',
              correct: true,
            },
            {
              text: 'It is added to the death benefit and taxed as interest to the beneficiary.',
              why: 'The outstanding loan is subtracted from the death benefit. It is not added, and the borrowed money was not income taxable.',
            },
            {
              text: 'It must be paid in cash by the beneficiary before any proceeds are released.',
              why: 'One of the repayment methods is subtraction from the death benefit at death. The beneficiary is not required to pay the loan in cash first.',
            },
            {
              text: 'It is forgiven, and the full face amount is paid with the loan taxed as a dividend.',
              why: 'The loan is not forgiven at death, and it is not taxed as a dividend. Dividends are a return of unused premium. The loan is subtracted from the death benefit.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c7-surrender',
      title: 'Cashing in a policy, and the death benefit',
      body: `If the cash surrender value is more than the premiums paid, some of the cash value the owner receives is taxable as income. A partial surrender, which is a withdrawal of cash value from a universal life policy, reduces both the cash value and the death benefit.

The face amount is $400,000. The premiums paid are $90,000, and the total cash value is $140,000. If the owner withdraws $25,000 of cash value, the full $25,000 is free of income tax, because $25,000 does not exceed the premiums paid. If the owner takes out the full $140,000, the last $50,000 is taxable, because $140,000 exceeds the premiums paid by $50,000.

Life insurance proceeds paid to a named beneficiary are generally free of federal income tax if they are taken as a lump sum. There is an exception when the benefit results from a transfer for value, which means the policy was sold to another party before the insured's death.

Under a settlement option, the interest portion of a payment that includes both principal and interest is taxable. If $80,000 of proceeds is paid as $10,000 a year for 10 years, $8,000 a year is the return of principal and is free of income tax, and $2,000 a year is interest and is taxable.`,
      questions: [
        question(
          'c7q04',
          'Premiums paid are $70,000 and cash value is $100,000. The insured withdraws the full $100,000. How much is taxable?',
          [
            {
              text: '$30,000. A withdrawal of only $30,000 would have been entirely income tax free.',
              why: 'The taxable amount is the cash value in excess of premiums paid. A partial surrender of a universal life policy also reduces the death benefit.',
              correct: true,
            },
            {
              text: 'The full $100,000, because any surrender is ordinary income.',
              why: 'Only the excess over the cost basis, the premiums paid, is taxable. The first $70,000 recovers premiums.',
            },
            {
              text: 'Nothing. Cash value is always tax free when it is withdrawn.',
              why: 'Cash value grows tax deferred, but on surrender the excess over premiums paid is taxable as ordinary income.',
            },
            {
              text: '$70,000, the premiums, and the $30,000 of gain is tax free.',
              why: 'That reverses the rule. The gain above premiums is the taxable part.',
            },
          ],
        ),
        question(
          'c7q05',
          '$100,000 of life proceeds pay $13,000 a year for 10 years. How much of each payment is taxable?',
          [
            {
              text: '$3,000. The $10,000 of principal each year is income tax free.',
              why: 'A lump sum to a named beneficiary is generally free of federal income tax. It is not, if the payment results from a transfer for value, a sale of the policy before the insured’s death.',
              correct: true,
            },
            {
              text: 'The entire $13,000, because installment settlements are fully taxable.',
              why: 'Only the interest portion is taxable. Principal is tax free.',
            },
            {
              text: 'Nothing, because settlement options keep both principal and interest tax free.',
              why: 'Interest paid with the principal is taxable income. The principal portion is not.',
            },
            {
              text: '$10,000, and the $3,000 of interest is tax free.',
              why: 'That reverses the split. $10,000 is the tax-free principal and $3,000 is the taxable interest.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c7-estate',
      title: 'Life insurance in the taxable estate',
      body: `The death benefit, or face amount, may be included in the insured's taxable estate and subject to the federal estate tax. Three situations bring the life insurance into that estate.

Incidents of ownership. An incident of ownership is any right of policy ownership. Examples are the right to the cash value, the right to change the beneficiary, the right to obtain a policy loan, and the right to assign the policy. If the insured or the policyowner held any one of these rights at death, the entire face amount is included in the taxable estate, even though the proceeds were paid to the beneficiary.

Estate as beneficiary. If the insured's estate is the designated beneficiary at death, the entire face amount is included in the taxable estate.

Transfer of ownership. If the insured, as policyowner, assigns or transfers ownership of the policy, or gives the policy away, within 3 years before death, the entire face amount is included in the taxable estate.`,
      questions: [
        question(
          'c7q06',
          'The insured gave the policy away two years before death and kept no ownership rights. Is the face amount in the taxable estate?',
          [
            {
              text: 'Yes. A transfer or gift of ownership within 3 years of death pulls the entire face amount into the estate.',
              why: 'The face amount is also included if the insured held any incident of ownership at death, or if the estate itself is the beneficiary. The proceeds can still have been paid to a named beneficiary.',
              correct: true,
            },
            {
              text: 'No. A gift removes the policy from the estate immediately.',
              why: 'A gift or assignment within 3 years before death does not remove the face amount from the taxable estate.',
            },
            {
              text: 'Only the cash value is included, not the face amount.',
              why: 'In each of the three situations, the entire face amount is included.',
            },
            {
              text: 'Yes, but only if the new owner is the insured’s estate.',
              why: 'Naming the estate as beneficiary is a separate situation. A transfer of ownership within 3 years includes the face amount even when someone else receives the proceeds.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c7-mec',
      title: 'Modified endowment contracts',
      body: `An endowment promises to pay the face amount if the insured survives to the end of a specified period, such as 20 years, 30 years, or age 65. It also pays if the insured dies during that period. An endowment requires premiums far beyond the amount needed to fund the death benefit. After the Tax Reform Act of 1984 eliminated many tax shelters, single premium life was still used to set aside large sums for tax-deferred growth and for tax-free cash flow through loans and partial surrenders.

The IRS 7-pay test decides whether a policy is overfunded. Any life insurance policy that fails the 7-pay test is a Modified Endowment Contract, or MEC, and it loses the standard tax benefits of a life insurance contract. A policy fails the test when the cumulative premiums paid during the first 7 years exceed the total net level premiums that would pay the policy up, using guaranteed mortality costs and interest. Once a policy becomes a MEC, it remains a MEC.

Every life insurance policy is subject to the 7-pay test. A material change, such as an increase in the death benefit, requires a new 7-pay test. The death benefit is tax free whether it is paid from a life insurance policy or from a MEC.

MEC cash value is taxed as follows.

• Accumulations are tax deferred.
• Any distribution is taxable, including a withdrawal and a policy loan.
• Distributions are taxed on a LIFO basis. That is the interest-first rule.
• A distribution before age 59½ is subject to a 10% penalty.`,
      questions: [
        question(
          'c7q07',
          'When does a life insurance policy become a modified endowment contract?',
          [
            {
              text: 'When it fails the 7-pay test, because premiums in the first 7 years exceed the net level premiums that would pay the policy up. It then remains a MEC.',
              why: 'Every life policy is subject to the test, and a material change such as an increase in the death benefit starts a new test. The death benefit is still tax free.',
              correct: true,
            },
            {
              text: 'When the insured survives to age 65, the usual endowment date.',
              why: 'An endowment can mature at a stated age or after 20 or 30 years. That maturity is not what makes a contract a MEC. Failing the 7-pay test does.',
            },
            {
              text: 'Only if the policy is surrendered for more than the premiums paid.',
              why: 'Gain on surrender is taxable on an ordinary life policy too. MEC status comes from overfunding under the 7-pay test, not from a later surrender.',
            },
            {
              text: 'It becomes a MEC for seven years, then it returns to ordinary life insurance treatment.',
              why: 'Once a policy fails the 7-pay test and becomes a MEC, it remains a MEC.',
            },
          ],
        ),
        question(
          'c7q08',
          'How is a loan from a modified endowment contract taxed?',
          [
            {
              text: 'It is a taxable distribution, taxed interest first. Before age 59½ it is also subject to a 10% penalty.',
              why: 'MEC accumulations are still tax deferred, but withdrawals and policy loans are taxable distributions. A loan from a life policy that is not a MEC is not income taxable.',
              correct: true,
            },
            {
              text: 'It is not income taxable, the same as any life insurance policy loan.',
              why: 'That is the rule for a policy that is not a MEC. In a MEC, policy loans are taxable distributions.',
            },
            {
              text: 'It is taxed FIFO, so principal comes out before interest.',
              why: 'MEC distributions use LIFO, the interest-first rule, not FIFO.',
            },
            {
              text: 'Only the death benefit is taxable. Loans and withdrawals stay tax free.',
              why: 'The death benefit from a MEC is tax free. The taxable items are the distributions, including loans and withdrawals.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c7-annuity',
      title: 'Taxes on an annuity you own',
      body: `Part of each annuity payment is taxable, and part is not. The nontaxable part is the expected return of the principal that was paid in. That principal is the cost base. The taxable part is the interest earned on the principal. That interest is the tax base. The exclusion ratio decides how much of each annuity payment is left out of taxable income. The annuitant recovers the cost basis without tax. The rest of each payment is taxable interest.

The accumulation phase is the period after the purchase and before distributions begin. Premium dollars that have already been taxed are the cost base, and they are not taxed again when they are withdrawn. Interest is the tax base, and the tax on that interest is deferred during accumulation.

Money withdrawn during the accumulation phase is taxed LIFO. Withdrawals are taxable until the owner's cost basis is reached. After all of the interest has been received and taxed, the principal is received with no additional tax.

A cash surrender causes the interest that has been earned to be taxed immediately.

Besides ordinary income tax, the IRS imposes a 10% penalty on the annuity tax base for an early withdrawal before age 59½. A 57-year-old withdraws $8,000, and the entire amount is taxable. The penalty is 10% of the withdrawal, which is $800.

When an annuity funds a traditional IRA, the distributions are fully taxable if the contributions were made with pretax dollars. Required minimum distributions begin at age 73 under SECURE 2.0, and at age 75 for a person who reaches age 74 after December 31, 2032. If there is no distribution at the required age, or if the distribution is not large enough, the penalty is 25% of the shortfall from the required annual amount. The penalty is 10% of the shortfall if the person corrects it in time.

If the contract holder dies before the annuitization date, the interest that has accumulated in the annuity becomes taxable. If the beneficiary is a spouse, the tax can continue to be deferred. Unpaid annuity benefits after the annuitant's death are paid to the beneficiary, and those benefits are taxable.`,
      questions: [
        question(
          'c7q09',
          'During the accumulation phase, how are annuity withdrawals taxed?',
          [
            {
              text: 'LIFO. Interest is taxed until the cost basis is recovered, and the principal after that is not taxed again.',
              why: 'The exclusion ratio splits later benefit payments into a nontaxable return of principal, the cost base, and taxable interest, the tax base. A cash surrender taxes the interest immediately.',
              correct: true,
            },
            {
              text: 'FIFO. Principal is paid out and taxed before any interest.',
              why: 'Accumulation withdrawals use Last In, First Out, so interest comes out first. FIFO assumes the first dollars in are the first dollars out.',
            },
            {
              text: 'The entire withdrawal is tax free until the annuitant reaches age 73.',
              why: 'Interest withdrawn during accumulation is taxable. Age rules in this chapter include a 10% penalty before 59½, not a tax-free period until 73.',
            },
            {
              text: 'Only the principal is taxable. Interest is always excluded by the exclusion ratio.',
              why: 'The exclusion ratio excludes the cost basis, the principal. Interest is the taxable tax base.',
            },
          ],
        ),
        question(
          'c7q10',
          'A 58-year-old withdraws $6,000 from an annuity and the whole amount is taxable. What is the penalty?',
          [
            {
              text: '$600, which is 10% of the withdrawal, on top of ordinary income tax.',
              why: 'The 10% penalty applies to the annuity tax base for withdrawals before age 59½. If a spouse inherits before annuitization, the tax on accumulated interest can continue to be deferred.',
              correct: true,
            },
            {
              text: '$3,000, half the withdrawal, because every early annuity withdrawal is taxed at 50%.',
              why: 'The 10% figure is the early-withdrawal penalty. The shortfall penalty, when a traditional IRA funded by an annuity misses the required amount, is 25% of the shortfall, or 10% of the shortfall if it is corrected in time.',
            },
            {
              text: 'Nothing. Annuity withdrawals before age 59½ are tax free.',
              why: 'The withdrawal is ordinary income to the extent it is taxable, and the early withdrawal adds a 10% penalty.',
            },
            {
              text: '$60, because the penalty is 1% of the taxable amount.',
              why: 'The penalty is 10% of the taxable withdrawal in the example, which is $600, not 1%.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c7-corporate',
      title: 'Annuities in the estate and company-owned annuities',
      body: `If the annuitant dies during the accumulation period, the insurer must return all or a portion of the annuity cash value, which is the value accumulated under the contract. That amount is included in the deceased annuitant's estate. If the annuity has been paid up and the annuitant dies during the annuity period, the annuity benefits are taxable and are included in the estate.

A corporate-owned annuity is taxed differently from an individual annuity. Growth in the corporate annuity is not tax deferred. The interest income is taxed every year, unless the corporation owns a group annuity for its employees and each employee receives a certificate of participation.`,
      questions: [
        question(
          'c7q11',
          'When is interest in a corporate-owned annuity taxed?',
          [
            {
              text: 'Annually. Growth is not tax deferred, unless the corporation owns a group annuity for its employees and each employee receives a certificate of participation.',
              why: 'An individually owned annuity defers tax on the interest during accumulation. A corporate contract does not, except for that group-annuity case.',
              correct: true,
            },
            {
              text: 'Never. A corporation always receives annuity interest tax free.',
              why: 'Corporate-owned annuity interest is taxed annually, aside from the group annuity exception.',
            },
            {
              text: 'Only when the corporation surrenders the contract after age 59½.',
              why: 'The 10% penalty before 59½ is an individual premature-distribution rule. Corporate interest is taxed annually, not only at surrender.',
            },
            {
              text: 'It is deferred until each employee retires, even if no certificates are issued.',
              why: 'The deferral exception requires a group annuity for the employees and a certificate of participation for each employee.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c7-ira',
      title: 'Taxes on a traditional IRA',
      body: `These rules apply to contributions to a traditional IRA.

• A contribution is tax deductible for the year of the contribution, based on the person's income.
• The contribution must be made in cash in order to be tax deductible. Cash includes any form of money, such as currency, a check, or a money order.
• An excess contribution is taxed at 6% per year for as long as the excess remains in the IRA.
• Earnings are tax deferred and are not taxed until they are withdrawn.

A distribution is subject to income tax in the year it is withdrawn. An early distribution, before age 59½, also draws a 10% penalty. The 10% penalty does not apply in these cases.

• The participant is age 59½.
• The participant is totally disabled.
• The money is used as a down payment on a home, not to exceed $10,000, and usually for a first-time homebuyer.
• The withdrawal pays post-secondary education expenses.
• The withdrawal pays catastrophic medical expenses, or it is made upon death.`,
      questions: [
        question(
          'c7q12',
          'Which traditional IRA withdrawal avoids the 10% early-distribution penalty?',
          [
            {
              text: 'Up to $10,000 used as a down payment on a home, usually by a first-time homebuyer.',
              why: 'The penalty also does not apply at age 59½, for total disability, for post-secondary education, or for catastrophic medical expenses or death. Excess contributions are taxed at 6% a year while they remain in the IRA. Deductible contributions must be made in cash.',
              correct: true,
            },
            {
              text: 'Any withdrawal before age 59½, because IRA earnings are tax free.',
              why: 'An early distribution is taxed in the year it is withdrawn and, unless an exception applies, it also pays a 10% penalty. Earnings are tax deferred, not tax free.',
            },
            {
              text: 'A withdrawal of property contributed to the IRA instead of cash.',
              why: 'Contributions must be in cash, including a check or money order, to be tax deductible. Contributing property is not a penalty exception.',
            },
            {
              text: 'A withdrawal of the excess contribution after the 6% tax has been paid once.',
              why: 'The 6% tax continues each year the excess remains. Paying it once is not an exception to the 10% early-withdrawal penalty.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c7-roth',
      title: 'Roth IRAs compared with traditional IRAs',
      body: `Roth IRA contributions are not tax deductible. An excess contribution is subject to a 6% tax penalty.

The two accounts compare this way.

• Both allow a contribution of 100% of earned income, up to an IRS-specified limit.
• Both charge a 6% penalty on an excess contribution.
• A traditional IRA grows tax deferred. A Roth IRA grows tax free if the account is open for at least 5 years.
• A traditional contribution is tax deductible and is made with pre-tax dollars. A Roth contribution is not tax deductible and is made with after-tax dollars.
• A traditional IRA has a 10% penalty for an early nonqualified distribution before age 59½, with some exceptions. A Roth qualified distribution cannot occur until the account has been open for 5 years and the owner is 59½.
• A traditional distribution is taxable. A Roth distribution is not taxable.
• Traditional payouts must begin by age 73, or by age 75 for an owner who reaches age 74 after December 31, 2032. A Roth IRA has no required minimum age for payouts.`,
      questions: [
        question(
          'c7q14',
          'Which statement matches the course comparison of a Roth IRA and a traditional IRA?',
          [
            {
              text: 'Roth contributions are after-tax and not deductible. Qualified distributions require 5 years and age 59½, and there is no required age to start payouts.',
              why: 'A traditional IRA is funded with deductible pre-tax dollars, distributions are taxable, and payouts must begin by age 73. Both limit contributions to 100% of income up to an IRS limit, and both penalize excess contributions at 6%.',
              correct: true,
            },
            {
              text: 'Roth contributions are pre-tax, and payouts must begin at 73.',
              why: 'Pre-tax deductible contributions and a required starting age of 73 describe the traditional IRA. Roth contributions are after tax, and there is no required minimum age for payouts.',
            },
            {
              text: 'Both grow tax free from the first year, and neither penalizes excess contributions.',
              why: 'A traditional IRA grows tax deferred. A Roth grows tax free if the account is open at least 5 years. Both assess a 6% penalty on excess contributions.',
            },
            {
              text: 'A Roth qualified distribution can be taken at any age as long as the account is open for one year.',
              why: 'A qualified Roth distribution cannot occur until the account has been open for 5 years and the owner is 59½.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c7-inherited',
      title: 'What an IRA beneficiary receives',
      body: `If the owner dies before distributions have begun, the entire interest must be distributed in full on or before December 31 of the calendar year that contains the fifth anniversary of the owner's death, unless the owner named a beneficiary.

A spouse who is the sole designated beneficiary may do any of the following.

• Treat the IRA as the spouse's own.
• Base the required minimum distribution on the spouse's own current age.
• Base the required minimum distribution on the decedent's age at death, reducing the distribution period by one each year.
• Withdraw the entire account balance by the end of the fifth year following the owner's death, if the owner died before the required beginning date. If the owner died before the required beginning date, the surviving spouse can wait until the owner would have reached the required beginning age, 73 or 75 under the SECURE 2.0 rule above, to begin receiving required minimum distributions.

An individual beneficiary who is not a spouse must withdraw the entire amount within 10 years of the owner's death. A non-spouse beneficiary may not treat an inherited IRA as the beneficiary's own. That beneficiary may not make contributions to it, and may not roll amounts into or out of the inherited IRA. Like the original owner, the beneficiary generally will not owe tax on the assets until a distribution is received.`,
      questions: [
        question(
          'c7q13',
          'A non-spouse inherits an IRA. What must that beneficiary do?',
          [
            {
              text: 'Withdraw the entire amount within 10 years. The beneficiary cannot treat the IRA as the beneficiary’s own, contribute to it, or roll money into or out of it.',
              why: 'A spouse who is the sole beneficiary may treat the IRA as the spouse’s own, or wait until the owner would have turned 73 if the owner died before the required beginning date. Tax is generally due when distributions are received.',
              correct: true,
            },
            {
              text: 'Leave the IRA untouched for life, because inherited IRAs have no distribution deadline.',
              why: 'A non-spouse must withdraw the entire amount within 10 years. If no beneficiary was named and distributions had not begun, the interest must be distributed by December 31 of the year of the fifth anniversary of death.',
            },
            {
              text: 'Roll the balance into the beneficiary’s own IRA and keep making contributions.',
              why: 'A non-spouse beneficiary is specifically not allowed to make contributions or to roll amounts into or out of the inherited IRA.',
            },
            {
              text: 'Pay income tax on the whole account in the year of the owner’s death, before any distribution.',
              why: 'The beneficiary generally does not owe tax on the assets until distributions are received.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c7-rollover',
      title: 'Rolling money from one plan to another',
      body: `A person may move money from one qualified retirement plan to another. Benefits withdrawn from a qualified plan are taxable in the year they are received if the money is not moved properly. The two methods are a rollover and a transfer.

A rollover is a tax-free distribution of cash from one retirement plan to another. An IRA rollover generally must be completed within 60 days from the time the money is taken out of the first plan. If the distribution is paid directly to the participant, the payor must withhold 20%. That 20% withholding can be avoided if the distribution goes directly from the first plan to the trustee, or to the administrator or custodian, of the new IRA. That direct movement is a direct rollover.

A transfer, also called a direct transfer, is a tax-free movement of funds from one retirement program to a traditional IRA, or a movement of the interest in a traditional IRA from one trustee directly to another trustee.`,
      questions: [
        question(
          'c7q15',
          'An IRA distribution is paid directly to the participant, who intends to roll it over. What must the payor withhold?',
          [
            {
              text: '20%. The withholding is avoided if the money goes directly to the trustee or custodian of the new IRA, and the rollover generally must be finished within 60 days.',
              why: 'A rollover is a tax-free distribution of cash from one retirement plan to another. If the money is not moved properly, the withdrawal is taxable in the year it is received. A direct transfer moves funds from one trustee to another without coming to the participant.',
              correct: true,
            },
            {
              text: '10%, the same penalty as an early withdrawal, and there is no time limit.',
              why: 'The 10% figure is the early-distribution penalty. A rollover paid to the participant is subject to 20% withholding, and it generally must be completed in 60 days.',
            },
            {
              text: '6%, the excess-contribution penalty, whether or not the rollover is direct.',
              why: 'The 6% penalty applies to excess contributions left in an IRA. It is not the withholding on a rollover paid to the participant.',
            },
            {
              text: 'Nothing. Money paid to the participant can be rolled over later with no withholding and no deadline.',
              why: 'A distribution paid to the participant requires 20% withholding. A direct rollover to the new trustee avoids that withholding. The rollover generally has a 60-day deadline.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c7-1035',
      title: 'Swapping one contract for another',
      body: `Under Section 1035 of the Internal Revenue Code, certain exchanges of life insurance policies and annuities are not taxable. When a policyowner exchanges a cash value life policy for another cash value life policy, a cash value life policy for an annuity, or an annuity for another annuity, the contracts must be on the same life. There is no income tax on these transactions.

These exchanges are allowed.

• A life insurance policy for another life insurance policy, an endowment contract, or an annuity contract.
• An endowment contract for another endowment contract, or for an annuity contract.
• An annuity contract for another annuity contract.

A policyowner may not exchange funds from an annuity into a cash value life policy. Term life is not used in a 1035 exchange, because term life has no cash value. The exchange may not go from a contract with fewer tax advantages to a contract with more tax advantages. An exchange of the same kind of contract for the same kind is acceptable.`,
      questions: [
        question(
          'c7q16',
          'Which exchange can be made under Section 1035 without income tax?',
          [
            {
              text: 'A cash value life policy for an annuity on the same life.',
              why: 'Life insurance may also be exchanged for life insurance or an endowment, an endowment for an endowment or an annuity, and an annuity for an annuity. Same to same is acceptable.',
              correct: true,
            },
            {
              text: 'An annuity for a cash value life policy on the same life.',
              why: 'Funds may not be exchanged from an annuity into a cash value life policy. That would move from a less tax-advantaged contract to a more tax-advantaged one.',
            },
            {
              text: 'A term life policy for a cash value life policy.',
              why: 'Term life is not used in a 1035 exchange because it has no cash value.',
            },
            {
              text: 'A cash value life policy for an annuity on a different insured.',
              why: 'The policies or annuities in these exchanges must be on the same life.',
            },
          ],
        ),
      ],
    },

  ],
}

for (const section of chapter7.sections) {
  section.questions.push(...(chapter7Extra[section.id] ?? []))
}
