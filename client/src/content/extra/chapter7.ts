import { question } from '../build.ts'
import type { Question } from '../types.ts'

export const chapter7Extra: Record<string, Question[]> = {
  'c7-life': [
    question(
      'c7q17',
      'Are premiums paid for personal life insurance tax deductible?',
      [
        {
          text: 'No. Premiums paid for personal life insurance are not tax deductible.',
          why: 'Premiums paid for personal life insurance are not tax deductible. A tax deduction would be a reduction of taxable income, and these premiums do not receive that treatment.',
          correct: true,
        },
        {
          text: 'Yes. They reduce taxable income in the year they are paid.',
          why: 'Tax deductible means a reduction of taxable income, resulting in lower tax liability. Personal life premiums are not tax deductible.',
        },
        {
          text: 'Only the portion of the premium that builds cash value is deductible.',
          why: 'The premium is not split into a deductible cash-value portion. Premiums paid for personal life insurance are not tax deductible.',
        },
        {
          text: 'They are deductible when the death benefit is paid to a named beneficiary.',
          why: 'Payment of the death benefit does not turn the premiums into a deduction. Premiums paid for personal life insurance are not tax deductible.',
        },
      ],
    ),
    question(
      'c7q18',
      'When life insurance proceeds are paid in installments, which part is taxable?',
      [
        {
          text: 'The principal is taxable and the interest is tax free.',
          why: 'That reverses the installment rule. The principal is tax free and the interest is taxable.',
        },
        {
          text: 'The interest is taxable and the principal is tax free.',
          why: 'If the proceeds are paid in installments, the principal is tax free and the interest is taxable.',
          correct: true,
        },
        {
          text: 'Both the principal and the interest are tax free.',
          why: 'A lump-sum death benefit can be tax free. Installment payments do not make the interest tax free.',
        },
        {
          text: 'Both the principal and the interest are taxed as ordinary income.',
          why: 'Only the interest is taxable. The principal portion of the installment proceeds is tax free.',
        },
      ],
    ),
    question(
      'c7q19',
      'How does cash value in a personal life insurance policy grow for tax purposes?',
      [
        {
          text: 'It is taxed as ordinary income in the year it is earned.',
          why: 'Taxable means subject to taxation as it is incurred, but cash value does not grow that way. It grows tax deferred.',
        },
        {
          text: 'It is tax free in the year it is earned and is never taxed later.',
          why: 'Tax-deferred growth is not the same as tax-free growth. Taxes on the gain can be paid at a future date.',
        },
        {
          text: 'It grows tax deferred.',
          why: 'Cash value grows tax deferred. Taxes on that gain are paid at a future date instead of in the period in which the gain is incurred.',
          correct: true,
        },
        {
          text: 'It is tax deductible to the policyowner each year.',
          why: 'Tax deductible means a reduction of taxable income. Cash-value growth is tax deferred, not a deduction.',
        },
      ],
    ),
    question(
      'c7q20',
      'What may the policyowner do with the cash value?',
      [
        {
          text: 'Only receive it as a dividend that is taxed as ordinary income.',
          why: 'Dividends are a return of unused premiums, not the cash-value access rule. The policyowner may borrow against the cash value or receive it on surrender.',
        },
        {
          text: 'Only leave it to vest in a retirement plan.',
          why: 'Vesting is a retirement-plan participant’s right to keep benefits. It is not the way a policyowner takes cash value.',
        },
        {
          text: 'Only collect it together with the face amount when the insured dies.',
          why: 'On death, the face amount is paid and there is no more cash value. While the policy is in force, the owner may borrow against the cash value or receive it on surrender.',
        },
        {
          text: 'Borrow against it, or receive it on surrender.',
          why: 'The policyowner may borrow against the cash value, or receive it on surrender.',
          correct: true,
        },
      ],
    ),
    question(
      'c7q21',
      'On surrender or endowment, which part of the cash value is taxable as ordinary income?',
      [
        {
          text: 'Any cash value in excess of the cost basis, which is the premium payments.',
          why: 'On surrender or endowment, any cash value in excess of the cost basis (the premium payments) is taxable as ordinary income.',
          correct: true,
        },
        {
          text: 'The entire cash value, including the premium payments.',
          why: 'The cost basis, meaning the premium payments, is not the taxable portion. Only the excess over that basis is taxable as ordinary income.',
        },
        {
          text: 'None of the cash value, because surrender is always income tax free.',
          why: 'Cash value is not automatically income tax free on surrender or endowment. The excess over the premium payments is taxable as ordinary income.',
        },
        {
          text: 'Only the dividends, even when no dividend was left with the insurer.',
          why: 'Dividends themselves are not income for tax purposes. The amount taxed on surrender or endowment is cash value above the premium payments.',
        },
      ],
    ),
    question(
      'c7q22',
      'What happens to the cash value when the insured dies?',
      [
        {
          text: 'It is paid to the beneficiary in addition to the face amount.',
          why: 'On death, the face amount is paid and there is no more cash value. The cash value is not an extra payment.',
        },
        {
          text: 'The face amount is paid and there is no more cash value.',
          why: 'On death, the face amount is paid and there is no more cash value.',
          correct: true,
        },
        {
          text: 'The cash value stays in force and keeps growing tax deferred for the beneficiary.',
          why: 'Tax-deferred growth of cash value ends at death. The face amount is paid and there is no more cash value.',
        },
        {
          text: 'The cash value is taxed as ordinary income and then added to the face amount.',
          why: 'Death does not tax the cash value and add it to the face amount. The face amount is paid and there is no more cash value.',
        },
      ],
    ),
    question(
      'c7q23',
      'In life insurance, what are policy proceeds?',
      [
        {
          text: 'The cash value paid on surrender.',
          why: 'Surrender is early termination by the policyowner. Policy proceeds, in life insurance, are the death benefit.',
        },
        {
          text: 'The maturity date of the policy.',
          why: 'Policy endowment means the maturity date. Policy proceeds, in life insurance, are the death benefit.',
        },
        {
          text: 'The death benefit.',
          why: 'Policy proceeds, in life insurance, are the death benefit.',
          correct: true,
        },
        {
          text: 'The calculation that excludes annuity amounts from taxes.',
          why: 'That calculation is the exclusion ratio. Policy proceeds, in life insurance, are the death benefit.',
        },
      ],
    ),
    question(
      'c7q24',
      'What does policy endowment mean?',
      [
        {
          text: 'Early termination of a policy by the policyowner.',
          why: 'Early termination by the policyowner is a surrender. Policy endowment means the maturity date.',
        },
        {
          text: 'The death benefit.',
          why: 'The death benefit is policy proceeds. Policy endowment means the maturity date.',
        },
        {
          text: 'A return of unused premiums.',
          why: 'A return of unused premiums describes dividends. Policy endowment means the maturity date.',
        },
        {
          text: 'The maturity date.',
          why: 'Policy endowment means the maturity date.',
          correct: true,
        },
      ],
    ),
    question(
      'c7q25',
      'What is a surrender?',
      [
        {
          text: 'Early termination of a policy by the policyowner.',
          why: 'Surrender means early termination of a policy by the policyowner.',
          correct: true,
        },
        {
          text: 'The maturity date.',
          why: 'The maturity date is policy endowment. Surrender is early termination by the policyowner.',
        },
        {
          text: 'The right of a retirement-plan participant to retain benefits.',
          why: 'That right is vesting. Surrender is early termination of a policy by the policyowner.',
        },
        {
          text: 'A reduction of taxable income that lowers tax liability.',
          why: 'That is the meaning of tax deductible. Surrender is early termination of a policy by the policyowner.',
        },
      ],
    ),
    question(
      'c7q26',
      'Interest is earned on dividends left with the insurer, and that interest is not paid out to the policyowner. How is the interest taxed?',
      [
        {
          text: 'It is not taxed until the year the policyowner actually receives it.',
          why: 'The interest does not wait for a payout. It is taxed as ordinary income each year it is earned, whether or not it is paid out.',
        },
        {
          text: 'It is taxed as ordinary income each year it is earned, whether or not it is paid out.',
          why: 'If dividends are left with the insurer to accumulate interest, the interest is taxed as ordinary income each year it is earned, whether or not it is paid out to the policyowner.',
          correct: true,
        },
        {
          text: 'It is never taxed, because dividends are a return of unused premiums.',
          why: 'The dividend itself is not income. Interest earned on dividends left to accumulate is taxed as ordinary income each year it is earned.',
        },
        {
          text: 'It is taxed only in the year the policy is surrendered or endows.',
          why: 'Surrender or endowment taxes cash value above the premium payments. Dividend interest is taxed each year it is earned, even when it is not paid out.',
        },
      ],
    ),
    question(
      'c7q27',
      'Under LIFO, which funds are assumed to be paid out first?',
      [
        {
          text: 'The funds paid into the policy first.',
          why: 'Funds paid in first are the FIFO assumption. LIFO assumes the funds paid into the policy last are paid out first.',
        },
        {
          text: 'The premium payments that make up the cost basis, ahead of any later funds.',
          why: 'Paying the cost basis out first is not LIFO. LIFO assumes the funds paid into the policy last are paid out first.',
        },
        {
          text: 'The funds paid into the policy last.',
          why: 'LIFO (Last In, First Out) means the funds paid into the policy last are assumed to be paid out first.',
          correct: true,
        },
        {
          text: 'The death benefit, before any cash value.',
          why: 'Policy proceeds are the death benefit. LIFO is an assumption about which funds paid into the policy come out first.',
        },
      ],
    ),
    question(
      'c7q28',
      'How is money borrowed against the cash value taxed as income?',
      [
        {
          text: 'It is taxed as ordinary income to the extent it exceeds the premium payments.',
          why: 'Cash value above the premium payments can be taxed on surrender or endowment. Money borrowed against the cash value is not income taxable.',
        },
        {
          text: 'It is taxed each year, whether or not the policyowner spends it.',
          why: 'That is the rule for interest on accumulated dividends. Money borrowed against the cash value is not income taxable.',
        },
        {
          text: 'It is tax deductible to the policyowner.',
          why: 'A policy loan is not a deduction. Money borrowed against the cash value is not income taxable.',
        },
        {
          text: 'It is not income taxable.',
          why: 'Money borrowed against the cash value is not income taxable.',
          correct: true,
        },
      ],
    ),
    question(
      'c7q29',
      'What does the company charge on an outstanding policy loan?',
      [
        {
          text: 'Interest.',
          why: 'The company charges interest on outstanding policy loans.',
          correct: true,
        },
        {
          text: 'Income tax on the borrowed cash value.',
          why: 'Money borrowed against the cash value is not income taxable. The company charges interest on the outstanding loan.',
        },
        {
          text: 'A dividend equal to the unused premium.',
          why: 'Dividends are a return of unused premiums, not the charge on an outstanding policy loan. The company charges interest.',
        },
        {
          text: 'Nothing, until the policy endows.',
          why: 'The loan charge is not postponed to endowment. The company charges interest on outstanding policy loans.',
        },
      ],
    ),
    question(
      'c7q30',
      'While the policy is in force, who may repay a policy loan, with interest?',
      [
        {
          text: 'Only the beneficiary, and only after the insured dies.',
          why: 'Repayment is not limited to the beneficiary after death. The owner may repay the loan, with interest, while the policy is in force.',
        },
        {
          text: 'The owner.',
          why: 'A policy loan, with interest, can be repaid by the owner while the policy is in force.',
          correct: true,
        },
        {
          text: 'Only the insurer, by converting the loan into a dividend.',
          why: 'A dividend is a return of unused premium, not a required way to clear a loan. The owner may repay the loan while the policy is in force.',
        },
        {
          text: 'No one. The loan can be cleared only by surrendering the policy.',
          why: 'Surrender is one way an unpaid loan is handled, not the only way. The owner may repay the loan, with interest, while the policy is in force.',
        },
      ],
    ),
    question(
      'c7q31',
      'A policy loan is still outstanding at surrender or maturity. How is that loan handled?',
      [
        {
          text: 'It is added to the cash value the owner receives.',
          why: 'The loan is not added to the cash value. It is subtracted from the cash value at surrender or maturity.',
        },
        {
          text: 'It is taxed as a dividend and then forgiven.',
          why: 'Dividends are a return of unused premiums, not a forgiveness of a loan. An outstanding loan is subtracted from the cash value at surrender or maturity.',
        },
        {
          text: 'It is subtracted from the cash value.',
          why: 'A policy loan, with interest, can be subtracted from the cash value at surrender or maturity.',
          correct: true,
        },
        {
          text: 'It must be repaid in cash before any surrender value is released, or the surrender is void.',
          why: 'The owner may repay the loan while the policy is in force, but an outstanding loan at surrender or maturity is subtracted from the cash value.',
        },
      ],
    ),
    question(
      'c7q32',
      'How are life insurance dividends themselves treated for income tax, before any interest they earn?',
      [
        {
          text: 'They are taxed as ordinary income in the year they are declared.',
          why: 'Interest on dividends left to accumulate is taxed as ordinary income. The dividend itself is not income for tax purposes.',
        },
        {
          text: 'They are tax deferred until the policy endows.',
          why: 'Tax deferred describes cash-value growth, not dividends. Dividends are a return of unused premiums and are not income for tax purposes.',
        },
        {
          text: 'They are tax deductible and reduce the policyowner’s taxable income.',
          why: 'Personal life premiums are not tax deductible, and a dividend is not a deduction. Dividends are not income for tax purposes.',
        },
        {
          text: 'They are a return of unused premiums, so they are not income for tax purposes.',
          why: 'Dividends are a return of unused premiums, so they are not income for tax purposes.',
          correct: true,
        },
      ],
    ),
  ],
  'c7-surrender': [
    question(
      'c7q33',
      'If the cash surrender value exceeds the premiums paid, how is the cash value that is received treated for income tax?',
      [
        {
          text: 'Some of the cash value received is taxable as income.',
          why: 'If the cash surrender value exceeds the premiums paid, some of the cash value received is taxable as income.',
          correct: true,
        },
        {
          text: 'The entire cash surrender value is free of income tax.',
          why: 'The full amount is not automatically tax free once it exceeds the premiums paid. Some of the cash value received is taxable as income.',
        },
        {
          text: 'Only the premiums paid are taxable, and the excess is tax free.',
          why: 'That reverses the comparison. When cash surrender value exceeds premiums paid, some of the cash value received is taxable as income.',
        },
        {
          text: 'The death benefit is reduced, and that reduction is the taxable amount.',
          why: 'A partial surrender does reduce the death benefit, but the income-tax rule here is that some of the cash value received is taxable when it exceeds premiums paid.',
        },
      ],
    ),
    question(
      'c7q34',
      'What does a partial surrender reduce?',
      [
        {
          text: 'Only the premiums paid, leaving cash value and the death benefit unchanged.',
          why: 'A partial surrender does not reduce only the premiums. It reduces both the cash value and the death benefit.',
        },
        {
          text: 'Both the cash value and the death benefit.',
          why: 'A partial surrender, a withdrawal of cash value from a universal life policy, reduces both the cash value and the death benefit.',
          correct: true,
        },
        {
          text: 'Only the death benefit, leaving the cash value unchanged.',
          why: 'The death benefit is not the only amount reduced. A partial surrender reduces both the cash value and the death benefit.',
        },
        {
          text: 'Neither amount, because a partial surrender is only a loan.',
          why: 'A partial surrender is a withdrawal of cash value, not a loan that leaves both amounts unchanged. It reduces both the cash value and the death benefit.',
        },
      ],
    ),
    question(
      'c7q35',
      'In the course example, the insured surrenders $30,000 of cash value. How is that $30,000 taxed?',
      [
        {
          text: 'The full $30,000 is taxable as income.',
          why: 'The full $30,000 withdrawal is not the taxable piece. In the example, the full $30,000 is income tax free.',
        },
        {
          text: '$10,000 is income tax free and $3,000 is income taxable.',
          why: 'That split belongs to the settlement-option example, not to this $30,000 surrender. The full $30,000 is income tax free.',
        },
        {
          text: 'The full $30,000 is income tax free.',
          why: 'If the insured surrenders $30,000 of cash value in the example, the full $30,000 is income tax free.',
          correct: true,
        },
        {
          text: 'It is income tax free only when paid to a named beneficiary as a lump-sum death benefit.',
          why: 'Lump-sum proceeds have their own income-tax rule. This $30,000 cash-value surrender is income tax free on the facts of the example.',
        },
      ],
    ),
    question(
      'c7q36',
      'In the course surrender example, which amount is the face amount?',
      [
        {
          text: '$70,000.',
          why: 'Premiums paid are $70,000. The face amount in the example is $300,000.',
        },
        {
          text: '$100,000.',
          why: 'Total cash value is $100,000. The face amount in the example is $300,000.',
        },
        {
          text: '$30,000.',
          why: 'In the example, $30,000 is cash value that can be surrendered income tax free. The face amount is $300,000.',
        },
        {
          text: '$300,000.',
          why: 'In the course example, the face amount is $300,000. Premiums paid are $70,000, and total cash value is $100,000.',
          correct: true,
        },
      ],
    ),
    question(
      'c7q37',
      'Lump-sum life insurance proceeds paid to a named beneficiary are generally free of federal income tax. When does the exception in this section apply?',
      [
        {
          text: 'When the benefit results from a transfer for value.',
          why: 'An exception applies if the benefit results from a transfer for value, meaning the policy is sold to another party before the insured’s death.',
          correct: true,
        },
        {
          text: 'When the named beneficiary takes the proceeds as a lump sum.',
          why: 'The lump-sum payment to a named beneficiary is the general rule, not the exception. The exception is a transfer for value.',
        },
        {
          text: 'When the proceeds are paid under a settlement option.',
          why: 'A settlement option taxes the interest portion. The exception to the lump-sum federal income-tax rule is a transfer for value.',
        },
        {
          text: 'When a partial surrender reduces the death benefit.',
          why: 'A partial surrender is a withdrawal of cash value from a universal life policy. It is not the transfer-for-value exception.',
        },
      ],
    ),
    question(
      'c7q38',
      'What does transfer for value mean in this section?',
      [
        {
          text: 'The named beneficiary takes the death benefit as a lump sum.',
          why: 'A lump-sum payment to a named beneficiary is the general federal income-tax rule. Transfer for value means the policy is sold to another party before the insured’s death.',
        },
        {
          text: 'The policy is sold to another party before the insured’s death.',
          why: 'A transfer for value means the policy is sold to another party before the insured’s death.',
          correct: true,
        },
        {
          text: 'The insured withdraws cash value from a universal life policy.',
          why: 'That withdrawal is a partial surrender. Transfer for value means the policy is sold to another party before the insured’s death.',
        },
        {
          text: 'The proceeds are left with the insurer under a settlement option.',
          why: 'A settlement option pays principal and interest. Transfer for value means the policy is sold to another party before the insured’s death.',
        },
      ],
    ),
    question(
      'c7q39',
      'Under a settlement option, which part of a payment is taxable when the payment includes both principal and interest?',
      [
        {
          text: 'The entire payment, principal and interest.',
          why: 'The whole payment is not taxable. The interest portion of payments that include both principal and interest is taxable.',
        },
        {
          text: 'The principal portion only.',
          why: 'Principal is not the taxable portion under a settlement option. The interest portion is taxable.',
        },
        {
          text: 'The interest portion.',
          why: 'With a settlement option, the interest portion of payments that include both principal and interest is taxable.',
          correct: true,
        },
        {
          text: 'Neither portion, because settlement-option payments are free of federal income tax.',
          why: 'Lump-sum proceeds can be free of federal income tax. Under a settlement option, the interest portion is taxable.',
        },
      ],
    ),
    question(
      'c7q40',
      'What is a partial surrender?',
      [
        {
          text: 'A lump-sum death benefit paid to a named beneficiary.',
          why: 'A lump-sum death benefit is not a partial surrender. A partial surrender is a withdrawal of cash value from a universal life policy.',
        },
        {
          text: 'A sale of the policy to another party before the insured’s death.',
          why: 'That sale is a transfer for value. A partial surrender is a withdrawal of cash value from a universal life policy.',
        },
        {
          text: 'A settlement option that pays principal and interest for a stated period.',
          why: 'A settlement option is a way of paying proceeds. A partial surrender is a withdrawal of cash value from a universal life policy.',
        },
        {
          text: 'A withdrawal of cash value from a universal life policy.',
          why: 'A partial surrender is a withdrawal of cash value from a universal life policy. It reduces both the cash value and the death benefit.',
          correct: true,
        },
      ],
    ),
  ],
  'c7-estate': [
    question(
      'c7q41',
      'The death benefit or face amount may be included in the insured’s taxable estate. Which tax can then apply?',
      [
        {
          text: 'Federal estate tax.',
          why: 'The death benefit or face amount may be included in the insured’s taxable estate and subject to federal estate tax.',
          correct: true,
        },
        {
          text: 'A tax only on incidents of ownership, with the face amount left out.',
          why: 'Incidents of ownership are one reason the insurance is brought in. When that happens, the face amount may be included and subject to federal estate tax.',
        },
        {
          text: 'No estate tax, because payment to a beneficiary always removes the face amount.',
          why: 'Payment to a beneficiary does not always remove the face amount. In listed situations the face amount may be in the taxable estate and subject to federal estate tax.',
        },
        {
          text: 'A tax that applies only when the estate is not the beneficiary.',
          why: 'Naming the estate as beneficiary is one situation that includes the face amount. The tax the course names is federal estate tax.',
        },
      ],
    ),
    question(
      'c7q42',
      'Which situations bring life insurance into the insured’s taxable estate?',
      [
        {
          text: 'Only incidents of ownership held at death.',
          why: 'Incidents of ownership are one situation, not the only one. The estate as beneficiary and a transfer of ownership within 3 years before death also bring the insurance in.',
        },
        {
          text: 'Incidents of ownership, the estate as beneficiary, and a transfer of ownership within 3 years before death.',
          why: 'Three situations bring the life insurance into the taxable estate: incidents of ownership, the estate as beneficiary, and a transfer of ownership within 3 years before death.',
          correct: true,
        },
        {
          text: 'Only naming the insured’s estate as the beneficiary.',
          why: 'The estate as beneficiary is one situation. Incidents of ownership and a transfer within 3 years before death are the other two.',
        },
        {
          text: 'A gift of the policy that removes the face amount whenever it is made, with no time limit stated.',
          why: 'A gift does not automatically remove the face amount. A transfer or gift within 3 years before death includes the entire face amount.',
        },
      ],
    ),
    question(
      'c7q43',
      'What is an incident of ownership?',
      [
        {
          text: 'Only the right to change the beneficiary, and not the right to assign the policy.',
          why: 'The right to assign the policy is included. An incident of ownership is any right of policy ownership, including the rights to cash value, to change the beneficiary, to obtain policy loans, or to assign the policy.',
        },
        {
          text: 'The beneficiary’s right to receive the proceeds.',
          why: 'Receiving proceeds is not the ownership right described here. An incident of ownership is any right of policy ownership, such as cash value, changing the beneficiary, policy loans, or assigning the policy.',
        },
        {
          text: 'Any right of policy ownership, such as the right to cash value, to change the beneficiary, to obtain policy loans, or to assign the policy.',
          why: 'An incident of ownership is any right of policy ownership, such as the right to cash value, the right to change the beneficiary, the right to obtain policy loans, or the right to assign the policy.',
          correct: true,
        },
        {
          text: 'Only a right the insured gave away within 3 years before death.',
          why: 'A transfer within 3 years is a separate situation. An incident of ownership is any right of policy ownership held, such as cash value, beneficiary changes, loans, or assignment.',
        },
      ],
    ),
    question(
      'c7q44',
      'The insured held an incident of ownership at death, and the proceeds were paid to the beneficiary. What is included in the taxable estate?',
      [
        {
          text: 'Nothing, because the proceeds were paid to the beneficiary.',
          why: 'Payment to the beneficiary does not remove the insurance. If any incident of ownership was held at death, the entire face amount is included.',
        },
        {
          text: 'Only the cash-value right, not the face amount.',
          why: 'The right to cash value is an example of an incident of ownership. Holding any such right at death includes the entire face amount, not only that right.',
        },
        {
          text: 'The face amount only if the estate was also the beneficiary.',
          why: 'The estate as beneficiary is a separate situation. An incident of ownership at death includes the entire face amount even though the proceeds were paid to the beneficiary.',
        },
        {
          text: 'The entire face amount.',
          why: 'If the insured or policyowner held any incident of ownership at death, the entire face amount is included in the taxable estate, even though the proceeds were paid to the beneficiary.',
          correct: true,
        },
      ],
    ),
    question(
      'c7q45',
      'The insured’s estate is the designated beneficiary at death. What is included in the taxable estate?',
      [
        {
          text: 'The entire face amount.',
          why: 'If the insured’s estate is the designated beneficiary at death, the entire face amount is included in the taxable estate.',
          correct: true,
        },
        {
          text: 'Nothing, unless the insured also held every incident of ownership.',
          why: 'Naming the estate as beneficiary is its own situation. The entire face amount is included, without a requirement that every ownership right also be held.',
        },
        {
          text: 'Only the cash value the estate can collect.',
          why: 'The included amount is not limited to cash value. If the estate is the designated beneficiary at death, the entire face amount is included.',
        },
        {
          text: 'The face amount only if ownership was transferred within 3 years before death.',
          why: 'A transfer within 3 years is a separate situation. Naming the estate as beneficiary at death includes the entire face amount on its own.',
        },
      ],
    ),
    question(
      'c7q46',
      'The insured, as policyowner, assigns the policy, transfers ownership, or makes a gift of the policy. When does that include the entire face amount in the taxable estate?',
      [
        {
          text: 'It never includes the face amount if no incident of ownership remains at death.',
          why: 'Giving up ownership does not automatically keep the face amount out. An assignment, transfer, or gift within 3 years before death includes the entire face amount.',
        },
        {
          text: 'When the assignment, transfer, or gift is made within 3 years before death.',
          why: 'If the insured, as policyowner, assigns or transfers ownership of the policy, or makes a gift of the policy, within 3 years before death, the entire face amount is included in the taxable estate.',
          correct: true,
        },
        {
          text: 'Only when the estate is the designated beneficiary at the same time.',
          why: 'The estate as beneficiary is a separate situation. A transfer or gift within 3 years before death includes the entire face amount on its own.',
        },
        {
          text: 'Whenever the transfer is made, with no time limit stated in the course.',
          why: 'The course states a time limit. The entire face amount is included when the assignment, transfer, or gift is within 3 years before death.',
        },
      ],
    ),
    question(
      'c7q47',
      'Must the insured or policyowner hold every listed ownership right at death for the face amount to be included under incidents of ownership?',
      [
        {
          text: 'Yes. The rights to cash value, beneficiary changes, policy loans, and assignment must all be held together.',
          why: 'All of those rights are examples, not a combined requirement. Any one of these rights at death includes the entire face amount.',
        },
        {
          text: 'Yes, and the estate must also be the designated beneficiary.',
          why: 'The estate as beneficiary is a separate situation. Under incidents of ownership, any one right at death is enough to include the entire face amount.',
        },
        {
          text: 'No. Any one of these rights is enough to include the entire face amount.',
          why: 'If the insured or policyowner held any one of these rights at death, the entire face amount is included in the taxable estate.',
          correct: true,
        },
        {
          text: 'No. Incidents of ownership leave the face amount out whenever the proceeds are paid to the beneficiary.',
          why: 'Payment to the beneficiary does not remove the face amount. Any one incident of ownership at death includes the entire face amount.',
        },
      ],
    ),
  ],
  'c7-mec': [
    question(
      'c7q48',
      'Which description of an endowment matches the course?',
      [
        {
          text: 'It pays the face amount only if the insured dies during the period, and premiums are limited to the death benefit.',
          why: 'An endowment also pays if the insured survives the period, and its premiums are far beyond the amount needed to fund the death benefit.',
        },
        {
          text: 'It pays the face amount only if the insured survives the period, such as 20 years, 30 years, or age 65.',
          why: 'Survival to the end of the period is only half of the promise. The endowment also pays the face amount if the insured dies during that period.',
        },
        {
          text: 'It pays a return of premiums if the insured survives, but it never pays the face amount.',
          why: 'The promise is the face amount, not a return of premiums only. It pays if the insured survives the period and also if the insured dies during the period.',
        },
        {
          text: 'It pays the face amount if the insured survives a specified period, such as 20 years, 30 years, or age 65, and also if the insured dies during that period. Premiums are far beyond the amount needed to fund the death benefit.',
          why: 'An endowment promises to pay the face amount if the insured survives to the end of a specified period, such as 20 years, 30 years, or age 65, and also if the insured dies during that period. Endowments require premiums far beyond the amount needed to fund the death benefit.',
          correct: true,
        },
      ],
    ),
    question(
      'c7q49',
      'After the Tax Reform Act of 1984 eliminated many tax shelters, what was single premium life still used to do?',
      [
        {
          text: 'Set aside large sums for tax-deferred growth and tax-free cash flow through loans and partial surrenders.',
          why: 'After the Tax Reform Act of 1984 eliminated many tax shelters, single premium life was still used to set aside large sums for tax-deferred growth and tax-free cash flow through loans and partial surrenders.',
          correct: true,
        },
        {
          text: 'Eliminate tax-deferred growth inside life insurance.',
          why: 'The 1984 Act eliminated many tax shelters. Single premium life was still used for tax-deferred growth and tax-free cash flow through loans and partial surrenders.',
        },
        {
          text: 'Replace the 7-pay test with an endowment that pays at age 65.',
          why: 'Age 65 is one endowment period. Single premium life after 1984 was used to set aside large sums for tax-deferred growth and tax-free cash flow through loans and partial surrenders.',
        },
        {
          text: 'Make every life policy a modified endowment contract from issue.',
          why: 'A policy becomes a MEC when it fails the 7-pay test. Single premium life was still used for tax-deferred growth and tax-free cash flow through loans and partial surrenders.',
        },
      ],
    ),
    question(
      'c7q50',
      'How does the course tax MEC cash value as it accumulates and when it is distributed?',
      [
        {
          text: 'Accumulations are taxed each year, and distributions are tax free.',
          why: 'That reverses the MEC cash-value rules. Accumulations are tax deferred, and any distribution is taxable.',
        },
        {
          text: 'Accumulations are tax deferred. Any distribution is taxable, including withdrawals and policy loans. Distributions are taxed on a LIFO basis, the interest-first rule.',
          why: 'MEC accumulations are tax deferred. Any distribution is taxable, including withdrawals and policy loans, and distributions are taxed on a LIFO basis, the interest-first rule.',
          correct: true,
        },
        {
          text: 'Only withdrawals are taxable. Policy loans keep the tax-free treatment of a non-MEC loan, and distributions are principal first.',
          why: 'Policy loans are included. Any distribution is taxable, including withdrawals and policy loans, and the ordering rule is LIFO, interest first.',
        },
        {
          text: 'Accumulations are tax free, and distributions are taxed only after age 59½.',
          why: 'Accumulations are tax deferred, not tax free. Distributions are taxable, and distributions before age 59½ also draw a 10% penalty.',
        },
      ],
    ),
    question(
      'c7q51',
      'A life insurance policy fails the 7-pay test. What tax result does the course state?',
      [
        {
          text: 'The policy loses its death benefit.',
          why: 'Failing the test does not remove the death benefit. The policy loses the standard tax benefits of a life insurance contract.',
        },
        {
          text: 'The policy keeps the standard life-insurance tax benefits and gains an extra deduction.',
          why: 'There is no extra deduction for failing the test. A policy that fails the 7-pay test loses the standard tax benefits of a life insurance contract.',
        },
        {
          text: 'The policy loses the standard tax benefits of a life insurance contract.',
          why: 'The IRS 7-pay test determines whether a policy is overfunded. Any life insurance policy that fails is a modified endowment contract and loses the standard tax benefits of a life insurance contract.',
          correct: true,
        },
        {
          text: 'The policy is taxed only if the insured survives 20 years, 30 years, or to age 65.',
          why: 'Those periods describe an endowment promise. Failing the 7-pay test makes the policy a MEC that loses the standard tax benefits of a life insurance contract.',
        },
      ],
    ),
    question(
      'c7q52',
      'Cumulative premiums paid during the first 7 years cause a policy to fail the 7-pay test when they exceed which amount?',
      [
        {
          text: 'The face amount payable if the insured dies during an endowment period.',
          why: 'The face amount is not the 7-pay benchmark. Failure occurs when cumulative premiums exceed the total net level premiums that would pay the policy up using guaranteed mortality costs and interest.',
        },
        {
          text: 'Premiums paid only after a material change, ignoring the first 7 years.',
          why: 'The test looks at cumulative premiums during the first 7 years, and a material change requires a new 7-pay test. It does not erase that first-7-years comparison.',
        },
        {
          text: 'Guaranteed mortality costs only, with interest left out of the comparison.',
          why: 'Interest is part of the benchmark. The premiums fail the test when they exceed the total net level premiums that would pay the policy up using guaranteed mortality costs and interest.',
        },
        {
          text: 'The total net level premiums that would pay the policy up using guaranteed mortality costs and interest.',
          why: 'A policy fails the 7-pay test when the cumulative premiums paid during the first 7 years exceed the total net level premiums that would pay the policy up using guaranteed mortality costs and interest.',
          correct: true,
        },
      ],
    ),
    question(
      'c7q53',
      'Once a policy becomes a MEC, what does the course say about its status afterward?',
      [
        {
          text: 'It remains a MEC.',
          why: 'Once a policy becomes a MEC, it remains a MEC.',
          correct: true,
        },
        {
          text: 'It remains a MEC only during the first 7 years.',
          why: 'The first 7 years are the premium-test window. Once a policy becomes a MEC, it remains a MEC.',
        },
        {
          text: 'A later 7-pay test after a material change removes MEC status if that new test is passed.',
          why: 'A material change requires a new 7-pay test, but the course does not say that test undoes MEC status. Once a policy becomes a MEC, it remains a MEC.',
        },
        {
          text: 'MEC status ends when the insured reaches age 59½.',
          why: 'Age 59½ is the point at which the 10% penalty on earlier distributions no longer applies, and it does not end MEC status. Once a MEC, the policy remains a MEC.',
        },
      ],
    ),
    question(
      'c7q54',
      'Which life insurance policies are subject to the 7-pay test?',
      [
        {
          text: 'Only single premium policies used after the Tax Reform Act of 1984.',
          why: 'Single premium life is the history behind the rule. All life insurance policies are subject to the 7-pay test.',
        },
        {
          text: 'All life insurance policies.',
          why: 'All life insurance policies are subject to the 7-pay test.',
          correct: true,
        },
        {
          text: 'Only policies that have already failed the test and become MECs.',
          why: 'A policy that fails is a MEC, but the test is not limited to policies that already failed. All life insurance policies are subject to the 7-pay test.',
        },
        {
          text: 'Only endowment contracts that pay the face amount at age 65.',
          why: 'Age 65 is one endowment example. The 7-pay test applies to all life insurance policies.',
        },
      ],
    ),
    question(
      'c7q55',
      'What requires a new 7-pay test?',
      [
        {
          text: 'A distribution of cash value before age 59½.',
          why: 'A distribution before age 59½ can draw a 10% penalty. A new 7-pay test is required by a material change, such as an increase in the death benefit.',
        },
        {
          text: 'Leaving the policy unchanged for the first 7 years.',
          why: 'The first 7 years are the original test period. A new test is required by a material change, such as an increase in the death benefit.',
        },
        {
          text: 'A material change, such as an increase in the death benefit.',
          why: 'A material change, such as an increase in the death benefit, requires a new 7-pay test.',
          correct: true,
        },
        {
          text: 'Paying the death benefit from a MEC.',
          why: 'The death benefit is tax free whether it comes from a life policy or a MEC. A new 7-pay test follows a material change, such as an increase in the death benefit.',
        },
      ],
    ),
    question(
      'c7q56',
      'How is the death benefit taxed when it is paid from a MEC?',
      [
        {
          text: 'It is taxable because a MEC loses the standard tax benefits of a life insurance contract.',
          why: 'Losing the standard lifetime tax benefits does not tax the death benefit. The death benefit is tax free whether it comes from a life insurance policy or a MEC.',
        },
        {
          text: 'It is tax free from a life policy and taxable from a MEC.',
          why: 'The course does not split the death benefit that way. It is tax free whether it comes from a life insurance policy or a MEC.',
        },
        {
          text: 'It is taxed on a LIFO basis to the beneficiary.',
          why: 'LIFO, the interest-first rule, applies to MEC distributions, not to the death benefit. The death benefit is tax free from a life policy or a MEC.',
        },
        {
          text: 'It is tax free, whether it comes from a life insurance policy or a MEC.',
          why: 'The death benefit is tax free whether it comes from a life insurance policy or a MEC.',
          correct: true,
        },
      ],
    ),
    question(
      'c7q57',
      'A distribution from a MEC is taken before age 59½. What extra penalty does the course state?',
      [
        {
          text: 'A 10% penalty.',
          why: 'Distributions before age 59½ are subject to a 10% penalty.',
          correct: true,
        },
        {
          text: 'No penalty. The distribution is taxed only under the ordinary MEC income-tax rules at any age.',
          why: 'Ordinary taxation of a distribution is separate from the extra penalty. Distributions before age 59½ are subject to a 10% penalty.',
        },
        {
          text: 'A 10% penalty on distributions taken after age 59½, not before.',
          why: 'The age test runs the other way. Distributions before age 59½ are subject to a 10% penalty.',
        },
        {
          text: 'The 10% penalty replaces income tax, so the distribution is not otherwise taxable.',
          why: 'The penalty does not replace income tax. Any distribution is taxable, and distributions before age 59½ are also subject to a 10% penalty.',
        },
      ],
    ),
  ],
  'c7-annuity': [
    question(
      'c7q58',
      'In an annuity payment, what is the cost base?',
      [
        {
          text: 'The interest earned on the principal.',
          why: 'Interest earned on the principal is the tax base, the taxable portion. The cost base is the anticipated return of the principal paid in.',
        },
        {
          text: 'The anticipated return of the principal paid in, which is the nontaxable portion.',
          why: 'The nontaxable portion is the anticipated return of the principal paid in. That is the cost base.',
          correct: true,
        },
        {
          text: 'The exclusion ratio itself.',
          why: 'The exclusion ratio determines the annuity amounts excluded from taxes, so it is not the cost base. The cost base is the principal paid in.',
        },
        {
          text: 'The 10% penalty on an early withdrawal.',
          why: 'The 10% penalty applies to the annuity tax base for early withdrawals before age 59½. The cost base is the anticipated return of principal.',
        },
      ],
    ),
    question(
      'c7q59',
      'In an annuity payment, what is the tax base?',
      [
        {
          text: 'The principal paid in.',
          why: 'The principal paid in is the cost base, the nontaxable portion. The tax base is the interest earned on the principal.',
        },
        {
          text: 'The full payment, because principal and interest are taxed the same way.',
          why: 'A portion of each payment is taxable and a portion is not. The tax base is the interest earned on the principal.',
        },
        {
          text: 'The interest earned on the principal, which is the taxable portion.',
          why: 'The taxable portion is the interest earned on the principal. That is the tax base.',
          correct: true,
        },
        {
          text: 'The cost base that the annuitant recovers without tax.',
          why: 'The annuitant recovers the cost basis without tax. The tax base is the interest, and the rest of each payment is taxable interest.',
        },
      ],
    ),
    question(
      'c7q60',
      'What does the exclusion ratio determine?',
      [
        {
          text: 'The 10% penalty on an early withdrawal.',
          why: 'The 10% penalty is imposed on the annuity tax base for early withdrawals before age 59½. The exclusion ratio determines the annuity amounts excluded from taxes.',
        },
        {
          text: 'Whether traditional IRA contributions were made with pretax dollars.',
          why: 'Pretax IRA contributions affect whether distributions are fully taxable. The exclusion ratio determines the annuity amounts excluded from taxes.',
        },
        {
          text: 'The age at which the early-withdrawal penalty stops.',
          why: 'The early-withdrawal penalty applies before age 59½. The exclusion ratio determines the annuity amounts excluded from taxes.',
        },
        {
          text: 'The annuity amounts excluded from taxes.',
          why: 'The exclusion ratio determines the annuity amounts excluded from taxes. The annuitant recovers the cost basis without tax.',
          correct: true,
        },
      ],
    ),
    question(
      'c7q61',
      'An annuity funds a traditional IRA, and the contributions were made with pretax dollars. How are distributions taxed?',
      [
        {
          text: 'They are fully taxable.',
          why: 'When an annuity funds a traditional IRA, distributions are fully taxable if contributions were made with pretax dollars.',
          correct: true,
        },
        {
          text: 'Only the interest is taxable, and the principal is excluded.',
          why: 'The cost-base exclusion applies to annuity payments generally. When the annuity funds a traditional IRA with pretax contributions, distributions are fully taxable.',
        },
        {
          text: 'They are tax free because the exclusion ratio removes the tax base.',
          why: 'The exclusion ratio does not make these IRA distributions tax free. If contributions were pretax, the distributions are fully taxable.',
        },
        {
          text: 'They are taxed only when they are smaller than the required annual amount.',
          why: 'A shortfall from the required annual amount draws a penalty of 25% of the shortfall, or 10% of the shortfall if it is corrected in time. Pretax traditional IRA distributions are fully taxable.',
        },
      ],
    ),
    question(
      'c7q62',
      'What is the accumulation phase of an annuity?',
      [
        {
          text: 'The period after distributions begin.',
          why: 'Distributions have not started yet. The accumulation phase is the period after purchase and before distributions begin.',
        },
        {
          text: 'The period after purchase and before distributions begin.',
          why: 'The accumulation phase is the period after purchase and before distributions begin.',
          correct: true,
        },
        {
          text: 'The date the contract holder dies.',
          why: 'Death before the annuitization date makes accumulated interest taxable. The accumulation phase is the period after purchase and before distributions begin.',
        },
        {
          text: 'The period after the cost basis has already been recovered.',
          why: 'Recovery of the cost basis describes how payments are taxed. The accumulation phase is the period after purchase and before distributions begin.',
        },
      ],
    ),
    question(
      'c7q63',
      'Premium dollars in an annuity were already taxed. How are those dollars treated when withdrawn?',
      [
        {
          text: 'They are taxed again as the tax base.',
          why: 'The tax base is the interest, not premium dollars that were already taxed. Those premium dollars are the cost base and are not taxed again when withdrawn.',
        },
        {
          text: 'They are the taxable interest portion of each payment.',
          why: 'Interest earned on the principal is the taxable portion. Premium dollars already taxed are the cost base and are not taxed again when withdrawn.',
        },
        {
          text: 'They are the cost base and are not taxed again when withdrawn.',
          why: 'Premium dollars already taxed are the cost base and are not taxed again when withdrawn.',
          correct: true,
        },
        {
          text: 'They are subject to a penalty of 25% of the shortfall, or 10% of the shortfall if it is corrected in time.',
          why: 'The penalty on a shortfall from the required annual amount is 25% of the shortfall, or 10% of the shortfall if it is corrected in time. Already taxed premium dollars are the cost base and are not taxed again when withdrawn.',
        },
      ],
    ),
    question(
      'c7q64',
      'During the accumulation phase, when are taxes on the interest, which is the tax base, paid?',
      [
        {
          text: 'Each year as the interest is earned.',
          why: 'Interest is not taxed currently during accumulation. Those taxes are deferred during accumulation.',
        },
        {
          text: 'They are never paid, because accumulation is tax free.',
          why: 'Deferral is not tax-free treatment. Interest is the tax base, and those taxes are deferred during accumulation.',
        },
        {
          text: 'When the contract is purchased.',
          why: 'Purchase is the start of accumulation, not the moment the interest tax is paid. Taxes on the interest are deferred during accumulation.',
        },
        {
          text: 'The taxes are deferred during accumulation.',
          why: 'Interest is the tax base, and those taxes are deferred during accumulation.',
          correct: true,
        },
      ],
    ),
    question(
      'c7q65',
      'What happens to unpaid annuity benefits after the annuitant’s death?',
      [
        {
          text: 'They are paid to the beneficiary and are taxable.',
          why: 'Unpaid annuity benefits after the annuitant’s death are paid to the beneficiary and are taxable.',
          correct: true,
        },
        {
          text: 'They are paid to the beneficiary and are free of income tax.',
          why: 'They are paid to the beneficiary, but they are not tax free. Unpaid annuity benefits after the annuitant’s death are taxable.',
        },
        {
          text: 'They stay with the insurer and are not paid to the beneficiary.',
          why: 'The benefits do not stay with the insurer. Unpaid annuity benefits after the annuitant’s death are paid to the beneficiary and are taxable.',
        },
        {
          text: 'They are tax deferred for every beneficiary, whether or not that beneficiary is a spouse.',
          why: 'Spouse deferral is stated for interest when the contract holder dies before annuitization. Unpaid annuity benefits after the annuitant’s death are taxable.',
        },
      ],
    ),
    question(
      'c7q66',
      'What is the income-tax result of a cash surrender of an annuity?',
      [
        {
          text: 'The principal and the interest are both received with no income tax.',
          why: 'A cash surrender does not make the interest tax free. It results in immediate taxation of the interest earned.',
        },
        {
          text: 'Immediate taxation of the interest earned.',
          why: 'A cash surrender results in immediate taxation of the interest earned.',
          correct: true,
        },
        {
          text: 'Taxation of the interest is deferred until the annuitization date.',
          why: 'Deferral applies during accumulation, not to a cash surrender. A cash surrender results in immediate taxation of the interest earned.',
        },
        {
          text: 'A 25% penalty on the cost base.',
          why: 'The shortfall penalty is 25% of the shortfall, or 10% of the shortfall if it is corrected in time. It is not a penalty on the cost base at surrender. Surrender causes immediate taxation of the interest earned.',
        },
      ],
    ),
    question(
      'c7q67',
      'Besides ordinary income tax, what does the IRS impose on the annuity tax base for an early withdrawal before age 59½?',
      [
        {
          text: 'A penalty of 25% of the shortfall from the required annual amount, or 10% of that shortfall if it is corrected in time.',
          why: 'The penalty when distributions at the required age are missing or too small is 25% of the shortfall, or 10% of the shortfall if it is corrected in time. An early withdrawal before age 59½ draws a 10% penalty on the annuity tax base.',
        },
        {
          text: 'No penalty beyond ordinary income tax.',
          why: 'Ordinary income tax is not the only charge. The IRS also imposes a 10% penalty on the annuity tax base for early withdrawals before age 59½.',
        },
        {
          text: 'A 10% penalty.',
          why: 'Besides ordinary income tax, the IRS imposes a 10% penalty on the annuity tax base for early withdrawals before age 59½.',
          correct: true,
        },
        {
          text: 'A second tax on the cost base, which was already taxed.',
          why: 'Premium dollars already taxed are the cost base and are not taxed again. The early-withdrawal penalty is 10% of the annuity tax base before age 59½.',
        },
      ],
    ),
    question(
      'c7q68',
      'The contract holder dies before the annuitization date. What becomes taxable?',
      [
        {
          text: 'The cost base that was already taxed.',
          why: 'Already taxed premium dollars are not taxed again. If the contract holder dies before the annuitization date, the interest accumulated in the annuity becomes taxable.',
        },
        {
          text: 'Nothing, as long as a beneficiary was named.',
          why: 'Naming a beneficiary does not, by itself, erase the tax. The interest accumulated in the annuity becomes taxable if the contract holder dies before annuitization.',
        },
        {
          text: 'Only benefits that were already being paid as annuity installments.',
          why: 'Installments have not started if death is before the annuitization date. The interest accumulated in the annuity becomes taxable.',
        },
        {
          text: 'The interest accumulated in the annuity.',
          why: 'If the contract holder dies before the annuitization date, the interest accumulated in the annuity becomes taxable.',
          correct: true,
        },
      ],
    ),
    question(
      'c7q69',
      'The contract holder dies before annuitization, and the beneficiary is a spouse. What can happen to the tax on the accumulated interest?',
      [
        {
          text: 'The tax can continue to be deferred.',
          why: 'If the beneficiary is a spouse, the tax on the interest accumulated before annuitization can continue to be deferred.',
          correct: true,
        },
        {
          text: 'The interest is tax free to a spouse and can never be taxed later.',
          why: 'Spouse treatment continues the deferral. It does not make the interest permanently tax free.',
        },
        {
          text: 'Deferral is available only when the beneficiary is not a spouse.',
          why: 'The deferral runs the other way. If the beneficiary is a spouse, the tax can continue to be deferred.',
        },
        {
          text: 'A spouse must include the accumulated interest immediately and cannot keep it deferred.',
          why: 'Immediate inclusion is not required of a spouse. If the beneficiary is a spouse, the tax can continue to be deferred.',
        },
      ],
    ),
    question(
      'c7q70',
      'There are no distributions at the required age, or the distributions are not large enough. What is the penalty?',
      [
        {
          text: '10% of the annuity tax base.',
          why: 'The 10% additional tax applies to early withdrawals before age 59½. A shortfall from the required annual amount is penalized at 25% of that shortfall, or 10% of the shortfall if it is corrected in time.',
        },
        {
          text: '50% of the shortfall from the required annual amount.',
          why: 'The old 50% penalty no longer applies. The penalty is 25% of the shortfall, or 10% of the shortfall if the person corrects it in time.',
        },
        {
          text: '25% of the shortfall, or 10% of the shortfall if it is corrected in time.',
          why: 'If there are no distributions at the required age, or the distributions are not large enough, the penalty is 25% of the shortfall. It is 10% of the shortfall when the person corrects it in time.',
          correct: true,
        },
        {
          text: 'Loss of the exclusion ratio for every prior year.',
          why: 'The exclusion ratio is not forfeited for prior years by this shortfall. The penalty is 25% of the shortfall, or 10% of the shortfall if it is corrected in time.',
        },
      ],
    ),
  ],
  'c7-corporate': [
    question(
      'c7q71',
      'The annuitant dies during the accumulation period. What must the insurer return?',
      [
        {
          text: 'Nothing until the annuity period has begun.',
          why: 'Death during accumulation still requires a return. The insurer must return all or a portion of the annuity cash value, the values accumulated under the contract.',
        },
        {
          text: 'A certificate of participation for each employee of a corporation.',
          why: 'A certificate of participation belongs to the group-annuity exception for corporate interest. On death during accumulation, the insurer returns all or a portion of the annuity cash value.',
        },
        {
          text: 'All or a portion of the annuity cash value, the values accumulated under the contract.',
          why: 'If the annuitant dies during the accumulation period, the insurer must return all or a portion of the annuity cash value, the values accumulated under the contract.',
          correct: true,
        },
        {
          text: 'Only the annuity benefits that would have been paid during the annuity period.',
          why: 'Benefits during the annuity period are a different death situation, after the annuity has been paid up. Death during accumulation requires a return of all or a portion of the cash value.',
        },
      ],
    ),
    question(
      'c7q72',
      'The annuitant dies during the accumulation period and the insurer returns the accumulated annuity value. Where is that amount included?',
      [
        {
          text: 'It is left out of the estate if a beneficiary was named.',
          why: 'Naming a beneficiary is not the estate rule stated here. The returned amount is included in the deceased annuitant’s estate.',
        },
        {
          text: 'It is included only if the annuity had already been paid up.',
          why: 'Paid-up status is the annuity-period death rule. The value returned after death during accumulation is included in the deceased annuitant’s estate.',
        },
        {
          text: 'It is returned to the insurer’s surplus and left out of the estate.',
          why: 'The insurer returns the value, but it is not left out of the estate. That amount is included in the deceased annuitant’s estate.',
        },
        {
          text: 'In the deceased annuitant’s estate.',
          why: 'The cash value returned when the annuitant dies during the accumulation period is included in the deceased annuitant’s estate.',
          correct: true,
        },
      ],
    ),
    question(
      'c7q73',
      'The annuity has been paid up, and the annuitant dies during the annuity period. How are the benefits treated?',
      [
        {
          text: 'The annuity benefits are taxable and are included in the estate.',
          why: 'If the annuity has been paid up and the annuitant dies during the annuity period, the annuity benefits are taxable and are included in the estate.',
          correct: true,
        },
        {
          text: 'The insurer returns only the accumulation cash value, and that value is not taxed.',
          why: 'A return of accumulation value applies when death occurs during the accumulation period. After the annuity is paid up, death during the annuity period makes the benefits taxable and included in the estate.',
        },
        {
          text: 'The benefits are tax free and are excluded from the estate.',
          why: 'The benefits are not tax free and excluded. They are taxable and are included in the estate.',
        },
        {
          text: 'The benefits are included in the estate only if a corporation owned the annuity.',
          why: 'Corporate ownership is a separate tax topic. Paid-up annuity benefits at death during the annuity period are taxable and are included in the estate.',
        },
      ],
    ),
    question(
      'c7q74',
      'How does the course compare a corporate-owned annuity with an individual annuity?',
      [
        {
          text: 'They are taxed the same way, including tax-deferred growth.',
          why: 'Corporate-owned annuities are taxed differently from individual annuities. Growth in the corporate-owned annuity is not tax deferred.',
        },
        {
          text: 'Corporate-owned annuities are taxed differently, and growth in the annuity is not tax deferred.',
          why: 'Corporate-owned annuities are taxed differently from individual annuities. Growth in the annuity is not tax deferred.',
          correct: true,
        },
        {
          text: 'Growth is tax free to the corporation if it is not distributed to employees.',
          why: 'Undistributed growth is not described as tax free. Growth in a corporate-owned annuity is not tax deferred, and these annuities are taxed differently from individual annuities.',
        },
        {
          text: 'They are taxed only when an employee dies during the accumulation period.',
          why: 'Death during accumulation is the individual estate rule for returned cash value. Corporate-owned annuities are taxed differently, and growth is not tax deferred.',
        },
      ],
    ),
    question(
      'c7q75',
      'Interest income on a corporate-owned annuity is taxed annually. Which arrangement is the exception?',
      [
        {
          text: 'Any corporate-owned annuity, because growth is tax deferred.',
          why: 'Growth in a corporate-owned annuity is not tax deferred, and interest income is taxed annually unless the group-annuity exception applies.',
        },
        {
          text: 'An annuity that has been paid up when the annuitant dies.',
          why: 'Paid-up death during the annuity period makes benefits taxable and included in the estate. It is not the exception to annual taxation of corporate interest.',
        },
        {
          text: 'The corporation owns a group annuity for its employees, and each employee receives a certificate of participation.',
          why: 'Interest income is taxed annually unless the corporation owns a group annuity for its employees and each employee receives a certificate of participation.',
          correct: true,
        },
        {
          text: 'The annuitant dies during the accumulation period and the cash value is returned.',
          why: 'That return is included in the deceased annuitant’s estate. The exception to annual interest taxation is a group annuity for employees with a certificate of participation for each employee.',
        },
      ],
    ),
  ],
  'c7-ira': [
    question(
      'c7q76',
      'Traditional IRA contributions are tax deductible for which year, and what is that treatment based on?',
      [
        {
          text: 'The year of withdrawal, based on the earnings taken out.',
          why: 'A distribution is taxed in the year it is withdrawn. The contribution deduction is for the year of the contribution, based on the person’s income.',
        },
        {
          text: 'Each year the excess contribution remains in the IRA.',
          why: 'An excess contribution is taxed at 6% per year while it remains. Deductible contributions are deductible for the year of the contribution, based on the person’s income.',
        },
        {
          text: 'The year the participant reaches age 59½, based on the 10% penalty.',
          why: 'Age 59½ and the 10% penalty describe early distributions. Contributions are tax deductible for the year of the contribution, based on the person’s income.',
        },
        {
          text: 'The year of the contribution, based on the person’s income.',
          why: 'Contributions are tax deductible for the year of the contribution, based on the person’s income.',
          correct: true,
        },
      ],
    ),
    question(
      'c7q77',
      'What form must a traditional IRA contribution take in order to be tax deductible?',
      [
        {
          text: 'Cash, including any form of money such as cash, a check, or a money order.',
          why: 'Contributions must be made in cash to be tax deductible. Cash includes any form of money, such as cash, a check, or a money order.',
          correct: true,
        },
        {
          text: 'Currency only. A check or a money order is not cash for this purpose.',
          why: 'Cash is not limited to currency. It includes any form of money, such as cash, a check, or a money order.',
        },
        {
          text: 'Property other than money, as long as the custodian accepts it.',
          why: 'The deduction requires cash. Contributions must be made in cash to be tax deductible.',
        },
        {
          text: 'Any contribution is deductible whether or not it is made in cash.',
          why: 'The cash requirement is not optional. Contributions must be made in cash to be tax deductible.',
        },
      ],
    ),
    question(
      'c7q78',
      'How are excess traditional IRA contributions taxed?',
      [
        {
          text: 'At 10%, once, in the year of the contribution.',
          why: 'The 10% figure is the early-distribution penalty, not the excess-contribution tax. Excess contributions are taxed at 6% per year as long as the excess remains in the IRA.',
        },
        {
          text: 'At 6% per year as long as the excess remains in the IRA.',
          why: 'Excess contributions are taxed at 6% per year as long as the excess remains in the IRA.',
          correct: true,
        },
        {
          text: 'At 6% only in the year the excess is withdrawn.',
          why: 'The 6% tax is not limited to the withdrawal year. It applies per year as long as the excess remains in the IRA.',
        },
        {
          text: 'They are not taxed if the original contribution was made in cash.',
          why: 'Cash is required for a contribution to be deductible. An excess contribution is still taxed at 6% per year while it remains in the IRA.',
        },
      ],
    ),
    question(
      'c7q79',
      'When are earnings in a traditional IRA taxed?',
      [
        {
          text: 'Each year as the earnings are credited.',
          why: 'Earnings are not taxed as they are credited. They are tax deferred and are not taxed until withdrawn.',
        },
        {
          text: 'At 6% per year while they remain in the IRA.',
          why: 'The 6% tax applies to excess contributions, not to normal earnings. Earnings are tax deferred and are not taxed until withdrawn.',
        },
        {
          text: 'They are tax deferred and are not taxed until withdrawn.',
          why: 'Earnings are tax deferred and are not taxed until withdrawn.',
          correct: true,
        },
        {
          text: 'They are never taxed if the contribution for that year was deductible.',
          why: 'A deductible contribution does not make earnings permanently tax free. Earnings are tax deferred and are not taxed until withdrawn.',
        },
      ],
    ),
    question(
      'c7q80',
      'A traditional IRA distribution is subject to income tax in which year?',
      [
        {
          text: 'The year the contribution was made.',
          why: 'The contribution year is when a deductible contribution is claimed. A distribution is subject to income tax in the year it is withdrawn.',
        },
        {
          text: 'The year after the participant reaches age 59½, even if no money is taken.',
          why: 'Age 59½ is the point after which the 10% early-distribution penalty does not apply. Income tax on a distribution is due in the year it is withdrawn.',
        },
        {
          text: 'Only a year in which an excess contribution is still in the IRA.',
          why: 'The 6% excess-contribution tax is separate. A distribution is subject to income tax in the year it is withdrawn.',
        },
        {
          text: 'The year it is withdrawn.',
          why: 'A distribution is subject to income tax in the year it is withdrawn.',
          correct: true,
        },
      ],
    ),
    question(
      'c7q81',
      'What extra penalty applies to an early traditional IRA distribution, and what makes the distribution early?',
      [
        {
          text: 'A distribution before age 59½ also draws a 10% penalty.',
          why: 'A distribution is subject to income tax in the year it is withdrawn. An early distribution, before age 59½, also draws a 10% penalty.',
          correct: true,
        },
        {
          text: 'A distribution after age 59½ draws a 10% penalty.',
          why: 'The 10% penalty applies before age 59½, not after. The penalty also does not apply when the participant is age 59½.',
        },
        {
          text: 'Every distribution draws a 6% penalty in the year it is withdrawn.',
          why: 'Six percent is the tax on excess contributions that remain in the IRA. An early distribution before age 59½ draws a 10% penalty.',
        },
        {
          text: 'An early distribution is taxed at 6% instead of income tax.',
          why: 'The 6% tax does not replace income tax on a distribution. The distribution is subject to income tax, and an early distribution also draws a 10% penalty.',
        },
      ],
    ),
    question(
      'c7q82',
      'Money from a traditional IRA is used for a down payment on a home. What limit does the course place on the use that avoids the 10% penalty?',
      [
        {
          text: 'The home down payment is taxed at 6% per year, and the course states no dollar cap.',
          why: 'The 6% tax applies to excess contributions that remain in the IRA, not to this home use. The 10% penalty does not apply to a down payment not to exceed $10,000, usually for first-time homebuyers.',
        },
        {
          text: 'Not to exceed $10,000, and usually for first-time homebuyers.',
          why: 'The 10% penalty does not apply when the money is used for a down payment on a home, not to exceed $10,000, and usually for first-time homebuyers.',
          correct: true,
        },
        {
          text: 'The exception is only for post-secondary education expenses, not for a home.',
          why: 'Post-secondary education expenses are a separate exception. The home down payment is also excepted, not to exceed $10,000, and usually for first-time homebuyers.',
        },
        {
          text: 'Any home purchase qualifies, and the 10% penalty still applies.',
          why: 'The penalty does not still apply to the described home use. The exception is a down payment not to exceed $10,000, usually for first-time homebuyers.',
        },
      ],
    ),
  ],
  'c7-inherited': [
    question(
      'c7q83',
      'The owner dies before distributions have begun, and the owner did not name a beneficiary. By when must the entire interest be distributed?',
      [
        {
          text: 'Within 10 years of the owner’s death, the period for an individual beneficiary other than a spouse.',
          why: 'Ten years is the rule for an individual beneficiary other than a spouse. With no beneficiary named, the entire interest must be distributed by December 31 of the year containing the fifth anniversary of the owner’s death.',
        },
        {
          text: 'When the owner would have turned 73.',
          why: 'Age 73 is when a surviving spouse may wait to begin required minimum distributions if the owner died before the required beginning date. It is not the deadline when no beneficiary was named.',
        },
        {
          text: 'In full on or before December 31 of the calendar year that contains the fifth anniversary of the owner’s death.',
          why: 'If the owner dies before distributions have begun, the entire interest must be distributed in full on or before December 31 of the calendar year that contains the fifth anniversary of the owner’s death, unless the owner named a beneficiary.',
          correct: true,
        },
        {
          text: 'By December 31 of the year of death.',
          why: 'The deadline is not the year of death. It is December 31 of the calendar year that contains the fifth anniversary of the owner’s death, unless a beneficiary was named.',
        },
      ],
    ),
    question(
      'c7q84',
      'The fifth-anniversary deadline for distributing the entire interest does not apply in which case?',
      [
        {
          text: 'The owner died before distributions had begun.',
          why: 'Death before distributions have begun is the situation that triggers the deadline. The deadline applies unless the owner named a beneficiary.',
        },
        {
          text: 'The beneficiary is someone other than a spouse.',
          why: 'A non-spouse beneficiary has a 10-year withdrawal rule. The fifth-anniversary deadline is waived when the owner named a beneficiary.',
        },
        {
          text: 'The spouse treats the IRA as the spouse’s own.',
          why: 'Treating the IRA as the spouse’s own is one spouse option. The stated waiver of the fifth-anniversary deadline is that the owner named a beneficiary.',
        },
        {
          text: 'The owner named a beneficiary.',
          why: 'The entire interest must be distributed by that fifth-anniversary date unless the owner named a beneficiary.',
          correct: true,
        },
      ],
    ),
    question(
      'c7q85',
      'What may a spouse who is the sole designated beneficiary do with the inherited IRA?',
      [
        {
          text: 'Treat the IRA as the spouse’s own.',
          why: 'A spouse who is the sole designated beneficiary may treat the IRA as the spouse’s own.',
          correct: true,
        },
        {
          text: 'Treat the IRA as the spouse’s own only if the spouse is not the sole beneficiary.',
          why: 'The option belongs to a spouse who is the sole designated beneficiary. That spouse may treat the IRA as the spouse’s own.',
        },
        {
          text: 'Use only the non-spouse rules, including a ban on treating the IRA as the spouse’s own.',
          why: 'The ban on treating the IRA as one’s own applies to a non-spouse beneficiary. A sole-beneficiary spouse may treat the IRA as the spouse’s own.',
        },
        {
          text: 'Make new contributions only if the spouse refuses to treat the IRA as the spouse’s own.',
          why: 'The contribution ban is a non-spouse rule. A sole-beneficiary spouse may treat the IRA as the spouse’s own.',
        },
      ],
    ),
    question(
      'c7q86',
      'A spouse who is the sole designated beneficiary may base the required minimum distribution on which of these?',
      [
        {
          text: 'December 31 of the year of the owner’s death only.',
          why: 'December 31 of the fifth-anniversary year is a different deadline. A sole-beneficiary spouse may base the required minimum distribution on the spouse’s own current age.',
        },
        {
          text: 'The spouse’s own current age.',
          why: 'A spouse who is the sole designated beneficiary may base the required minimum distribution on the spouse’s own current age.',
          correct: true,
        },
        {
          text: 'The age at which a non-spouse must finish a 10-year payout.',
          why: 'The 10-year rule applies to an individual beneficiary other than a spouse. A sole-beneficiary spouse may base the required minimum distribution on the spouse’s own current age.',
        },
        {
          text: 'The year contributions to the inherited IRA must stop.',
          why: 'A non-spouse may not make contributions. A sole-beneficiary spouse may base the required minimum distribution on the spouse’s own current age.',
        },
      ],
    ),
    question(
      'c7q87',
      'A sole-beneficiary spouse bases the required minimum distribution on the decedent’s age at death. What happens to the distribution period?',
      [
        {
          text: 'It stays fixed at the decedent’s age at death.',
          why: 'The period is not frozen. It is reduced by one each year.',
        },
        {
          text: 'It is lengthened by one each year.',
          why: 'The period is not lengthened. Basing the required minimum distribution on the decedent’s age at death reduces the distribution period by one each year.',
        },
        {
          text: 'It is reduced by one each year.',
          why: 'A sole-beneficiary spouse may base the required minimum distribution on the decedent’s age at death, reducing the distribution period by one each year.',
          correct: true,
        },
        {
          text: 'It ends on December 31 of the year of death.',
          why: 'December 31 of the year of death is not this rule. The distribution period is reduced by one each year.',
        },
      ],
    ),
    question(
      'c7q88',
      'The owner died before the required beginning date. By when may a surviving spouse who is the sole beneficiary withdraw the entire account balance under one of the spouse options?',
      [
        {
          text: 'On or before December 31 of the year that contains the fifth anniversary, and only if no beneficiary was named.',
          why: 'That December 31 rule applies when the owner dies before distributions have begun, unless a beneficiary was named. A sole-beneficiary spouse may withdraw the entire balance by the end of the fifth year following the owner’s death if the owner died before the required beginning date.',
        },
        {
          text: 'Within 10 years, which is the only deadline a spouse may use.',
          why: 'Ten years is the period for an individual beneficiary other than a spouse. A qualifying spouse may withdraw the entire balance by the end of the fifth year following the owner’s death.',
        },
        {
          text: 'In the year of death, or the spouse loses the right to the account.',
          why: 'The account is not lost if it is not emptied in the year of death. One spouse option is withdrawal by the end of the fifth year following the owner’s death if the owner died before the required beginning date.',
        },
        {
          text: 'By the end of the fifth year following the owner’s death.',
          why: 'If the owner died before the required beginning date, a spouse who is the sole designated beneficiary may withdraw the entire account balance by the end of the fifth year following the owner’s death.',
          correct: true,
        },
      ],
    ),
    question(
      'c7q89',
      'The owner died before the required beginning date. How long may the surviving spouse wait to begin required minimum distributions?',
      [
        {
          text: 'Until the owner would have turned 73.',
          why: 'If the owner died before the required beginning date, the surviving spouse can wait until the owner would have turned 73 to begin receiving required minimum distributions.',
          correct: true,
        },
        {
          text: 'Until December 31 of the year of death.',
          why: 'December 31 of the year of death is not the spouse’s waiting point. The surviving spouse can wait until the owner would have turned 73.',
        },
        {
          text: 'The spouse cannot wait. Distributions must begin in the year of death.',
          why: 'The spouse is not forced to begin in the year of death. If the owner died before the required beginning date, the surviving spouse can wait until the owner would have turned 73.',
        },
        {
          text: 'Until the fifth anniversary, and only if the spouse is not the sole beneficiary.',
          why: 'The fifth-year withdrawal is a different spouse option, and it belongs to a sole designated beneficiary. The wait for required minimum distributions runs until the owner would have turned 73.',
        },
      ],
    ),
    question(
      'c7q90',
      'Which actions are barred for a non-spouse beneficiary of an inherited IRA?',
      [
        {
          text: 'Receiving a distribution. Tax is due on the whole account in the year of death whether or not a distribution is received.',
          why: 'The beneficiary generally will not owe tax until distributions are received. A non-spouse may not treat the IRA as the beneficiary’s own, may not contribute, and may not roll amounts into or out of it.',
        },
        {
          text: 'Treating the inherited IRA as the beneficiary’s own, making contributions to it, and rolling amounts into or out of it.',
          why: 'A non-spouse beneficiary may not treat an inherited IRA as the beneficiary’s own, may not make contributions to it, and may not roll amounts into or out of the inherited IRA.',
          correct: true,
        },
        {
          text: 'Leaving the assets invested until a distribution is received.',
          why: 'The beneficiary generally will not owe tax on the assets until distributions are received. The bans are on treating the IRA as the beneficiary’s own, contributing, and rolling amounts in or out.',
        },
        {
          text: 'Taking any withdrawal within 10 years of the owner’s death.',
          why: 'An individual beneficiary other than a spouse must withdraw the entire amount within 10 years. The bans are on treating the IRA as the beneficiary’s own, contributing, and rolling amounts in or out.',
        },
      ],
    ),
    question(
      'c7q91',
      'When does the beneficiary of an inherited IRA generally owe tax on the assets?',
      [
        {
          text: 'In the year of the owner’s death, on the entire balance, even if nothing is distributed.',
          why: 'Tax is not generally due on the entire balance in the year of death. Like the original owner, the beneficiary generally will not owe tax on the assets until distributions are received.',
        },
        {
          text: 'Only if the beneficiary is a spouse who treats the IRA as the spouse’s own.',
          why: 'The timing is not limited to a spouse. Like the original owner, the beneficiary generally will not owe tax on the assets until distributions are received.',
        },
        {
          text: 'Not until distributions are received, as with the original owner.',
          why: 'Like the original owner, the beneficiary generally will not owe tax on the assets until distributions are received.',
          correct: true,
        },
        {
          text: 'In any year the beneficiary makes a contribution to the inherited IRA.',
          why: 'A non-spouse beneficiary may not make contributions. Tax is generally not owed until distributions are received.',
        },
      ],
    ),
  ],
  'c7-roth': [
    question(
      'c7q92',
      'How does the course compare income tax on distributions from a traditional IRA and a Roth IRA?',
      [
        {
          text: 'Distributions from both accounts are taxable.',
          why: 'Roth distributions are not taxable. Traditional distributions are taxable.',
        },
        {
          text: 'Distributions from both accounts are not taxable.',
          why: 'Traditional distributions are taxable. Roth distributions are not taxable.',
        },
        {
          text: 'Traditional distributions are not taxable. Roth distributions are taxable.',
          why: 'That reverses the comparison. Traditional distributions are taxable, and Roth distributions are not taxable.',
        },
        {
          text: 'Traditional distributions are taxable. Roth distributions are not taxable.',
          why: 'Traditional distributions are taxable. Roth distributions are not taxable.',
          correct: true,
        },
      ],
    ),
    question(
      'c7q93',
      'What penalty do both a Roth IRA and a traditional IRA charge on excess contributions?',
      [
        {
          text: 'A 6% penalty.',
          why: 'Both charge a 6% penalty on excess contributions. Roth excess contributions are also described as subject to a 6% tax penalty.',
          correct: true,
        },
        {
          text: 'A 10% penalty.',
          why: 'The 10% penalty is the traditional IRA charge for early nonqualified distributions before age 59½. Excess contributions draw a 6% penalty on both accounts.',
        },
        {
          text: 'No penalty if the contribution is 100% of income.',
          why: 'Both allow a contribution of 100% of income up to an IRS-specified limit. Amounts in excess of that treatment still draw a 6% penalty.',
        },
        {
          text: 'A 6% penalty on the Roth IRA only. Traditional excess contributions are deductible.',
          why: 'The comparison says both charge a 6% penalty on excess contributions. The Roth penalty is not the only one.',
        },
      ],
    ),
    question(
      'c7q94',
      'What contribution rule applies to both a Roth IRA and a traditional IRA?',
      [
        {
          text: 'Both allow a contribution of 100% of income, and the course states no further limit.',
          why: 'The course does state a further limit. Both allow a contribution of 100% of income up to an IRS-specified limit.',
        },
        {
          text: 'Both allow a contribution of 100% of income up to an IRS-specified limit.',
          why: 'Both allow a contribution of 100% of income up to an IRS-specified limit.',
          correct: true,
        },
        {
          text: 'Only the traditional IRA allows a contribution. A Roth IRA does not.',
          why: 'Both accounts allow a contribution. The shared rule is 100% of income up to an IRS-specified limit.',
        },
        {
          text: 'Both limit the contribution to the amount that is tax deductible.',
          why: 'Roth contributions are not tax deductible. Both still allow a contribution of 100% of income up to an IRS-specified limit.',
        },
      ],
    ),
    question(
      'c7q95',
      'How do a traditional IRA and a Roth IRA differ in the way the account grows?',
      [
        {
          text: 'Both grow tax free starting in the year of the first contribution.',
          why: 'A traditional IRA grows tax deferred, not tax free. A Roth IRA grows tax free if the account is open for at least 5 years.',
        },
        {
          text: 'A Roth IRA grows tax deferred. A traditional IRA grows tax free if it has been open for 5 years.',
          why: 'That swaps the two accounts. A traditional IRA grows tax deferred, and a Roth IRA grows tax free if the account is open for at least 5 years.',
        },
        {
          text: 'A traditional IRA grows tax deferred. A Roth IRA grows tax free if the account is open for at least 5 years.',
          why: 'A traditional IRA grows tax deferred. A Roth IRA grows tax free if the account is open for at least 5 years.',
          correct: true,
        },
        {
          text: 'A Roth IRA grows tax free even when the account has been open for less than 5 years.',
          why: 'The tax-free growth condition is at least 5 years. A traditional IRA grows tax deferred.',
        },
      ],
    ),
    question(
      'c7q96',
      'How do traditional IRA contributions and Roth IRA contributions differ?',
      [
        {
          text: 'Both are tax deductible and are made with pre-tax dollars.',
          why: 'Roth contributions are not tax deductible and are made with after-tax dollars. Traditional contributions are tax deductible and are made with pre-tax dollars.',
        },
        {
          text: 'Roth contributions are tax deductible and are made with pre-tax dollars. Traditional contributions are not deductible.',
          why: 'That reverses the accounts. Traditional contributions are tax deductible and are made with pre-tax dollars, while Roth contributions are not tax deductible and are made with after-tax dollars.',
        },
        {
          text: 'Both are made with after-tax dollars, and neither is tax deductible.',
          why: 'Traditional contributions are tax deductible and are made with pre-tax dollars. Roth contributions are the ones that are not deductible and are made with after-tax dollars.',
        },
        {
          text: 'Traditional contributions are tax deductible and are made with pre-tax dollars. Roth contributions are not tax deductible and are made with after-tax dollars.',
          why: 'Traditional contributions are tax deductible and are made with pre-tax dollars. Roth contributions are not tax deductible and are made with after-tax dollars.',
          correct: true,
        },
      ],
    ),
    question(
      'c7q97',
      'When can a Roth qualified distribution occur?',
      [
        {
          text: 'After the account has been open for 5 years and the owner is 59½.',
          why: 'A Roth qualified distribution cannot occur until the account has been open for 5 years and the owner is 59½.',
          correct: true,
        },
        {
          text: 'Any time before age 59½ if the owner pays the 10% penalty that applies to a traditional IRA.',
          why: 'The 10% penalty describes a traditional IRA early nonqualified distribution, with some exceptions. A Roth qualified distribution cannot occur until the 5-year and age 59½ conditions are both met.',
        },
        {
          text: 'As soon as the account is opened, with no 5-year wait.',
          why: 'There is a 5-year wait. A Roth qualified distribution cannot occur until the account has been open for 5 years and the owner is 59½.',
        },
        {
          text: 'Only at age 73, the age when Roth payouts must begin.',
          why: 'Age 73 is when traditional payouts must begin. A Roth IRA has no required minimum age for payouts, and a qualified distribution waits for 5 years and age 59½.',
        },
      ],
    ),
    question(
      'c7q98',
      'What does the course say about a required minimum age for payouts?',
      [
        {
          text: 'Both a traditional IRA and a Roth IRA must begin payouts by age 73.',
          why: 'Traditional payouts must begin by age 73. A Roth IRA has no required minimum age for payouts.',
        },
        {
          text: 'Traditional payouts must begin by age 73. A Roth IRA has no required minimum age for payouts.',
          why: 'Traditional payouts must begin by age 73. A Roth IRA has no required minimum age for payouts.',
          correct: true,
        },
        {
          text: 'A Roth IRA must begin payouts by age 59½. A traditional IRA has no required age.',
          why: 'Age 59½ is part of the Roth qualified-distribution test, not a required start for Roth payouts. Traditional payouts must begin by age 73, and a Roth IRA has no required minimum age for payouts.',
        },
        {
          text: 'Neither account has a required minimum age for payouts.',
          why: 'A Roth IRA has no required minimum age for payouts. Traditional payouts must begin by age 73.',
        },
      ],
    ),
  ],
  'c7-rollover': [
    question(
      'c7q99',
      'Benefits are withdrawn from a qualified plan and the money is not moved properly. When are those benefits taxable?',
      [
        {
          text: 'They stay tax free if the participant intended to move them.',
          why: 'Intention is not enough. Benefits withdrawn from a qualified plan are taxable in the year they are received if the money is not moved properly.',
        },
        {
          text: 'They are taxable only when a transfer is used. A rollover removes the tax in every case.',
          why: 'Both a rollover and a transfer are methods of moving money. If the money is not moved properly, benefits are taxable in the year they are received.',
        },
        {
          text: 'In the year they are received.',
          why: 'Benefits withdrawn from a qualified plan are taxable in the year they are received if the money is not moved properly.',
          correct: true,
        },
        {
          text: 'They are taxable only if the payor withholds 20%.',
          why: 'The 20% withholding applies when a distribution is paid directly to the participant. Improperly moved benefits are taxable in the year they are received.',
        },
      ],
    ),
    question(
      'c7q100',
      'A person may move money from one qualified retirement plan to another. What two methods does the course name?',
      [
        {
          text: 'Only a rollover. A transfer is a taxable distribution.',
          why: 'A transfer is not described as the taxable method. The two methods are a rollover and a transfer.',
        },
        {
          text: 'A 20% withholding and a 60-day deadline, and no other method.',
          why: 'The 20% withholding and the 60-day period are rollover rules. The two methods of moving the money are a rollover and a transfer.',
        },
        {
          text: 'Two distributions paid directly to the same participant.',
          why: 'A payment directly to the participant is not the pair of methods. The two methods are a rollover and a transfer.',
        },
        {
          text: 'A rollover and a transfer.',
          why: 'A person may move money from one qualified retirement plan to another. The two methods are a rollover and a transfer.',
          correct: true,
        },
      ],
    ),
    question(
      'c7q101',
      'What is a rollover?',
      [
        {
          text: 'A tax-free distribution of cash from one retirement plan to another.',
          why: 'A rollover is a tax-free distribution of cash from one retirement plan to another.',
          correct: true,
        },
        {
          text: 'A taxable distribution that the participant must keep.',
          why: 'A distribution that is not moved properly is taxable in the year received. A rollover is a tax-free distribution of cash from one retirement plan to another.',
        },
        {
          text: 'A transfer of interest in a traditional IRA from one trustee directly to another trustee.',
          why: 'That trustee-to-trustee move is a transfer, or direct transfer. A rollover is a tax-free distribution of cash from one retirement plan to another.',
        },
        {
          text: 'A 20% penalty on money that leaves a qualified plan.',
          why: 'The 20% figure is withholding when the distribution is paid directly to the participant, not the definition of a rollover. A rollover is a tax-free distribution of cash from one retirement plan to another.',
        },
      ],
    ),
    question(
      'c7q102',
      'IRA rollovers generally must be completed within how long after the money is taken out of the first plan?',
      [
        {
          text: 'The course states no time limit once the distribution is called tax free.',
          why: 'Tax-free treatment does not remove the time limit. IRA rollovers generally must be completed within 60 days from the time the money is taken out of the first plan.',
        },
        {
          text: '60 days.',
          why: 'IRA rollovers generally must be completed within 60 days from the time the money is taken out of the first plan.',
          correct: true,
        },
        {
          text: 'The same day the money is taken out of the first plan.',
          why: 'Same-day completion is not the rule. IRA rollovers generally must be completed within 60 days from the time the money is taken out of the first plan.',
        },
        {
          text: 'Until the payor has withheld 20%, with no day count stated.',
          why: 'The 20% withholding is a separate rule for a payment directly to the participant. The rollover time limit is 60 days.',
        },
      ],
    ),
    question(
      'c7q103',
      'How can the 20% withholding be avoided when IRA money is rolled to a new IRA?',
      [
        {
          text: 'Have the distribution paid directly to the participant and finish the rollover within 60 days.',
          why: 'A distribution paid directly to the participant is the case in which the payor must withhold 20%. The withholding is avoided when the distribution goes directly to the new IRA’s trustee or administrator/custodian.',
        },
        {
          text: 'Ask the payor to withhold 20% and then return it after day 60.',
          why: 'Waiting past the withholding does not avoid it. The 20% withholding is avoided by a direct rollover to the trustee or administrator/custodian of the new IRA.',
        },
        {
          text: 'Make the distribution directly from the first plan to the trustee or administrator/custodian of the new IRA. That is a direct rollover.',
          why: 'The 20% withholding can be avoided if the distribution is made directly from the first plan to the trustee or administrator/custodian of the new IRA. That is a direct rollover.',
          correct: true,
        },
        {
          text: 'Use a second payment to the participant instead of a rollover or a transfer.',
          why: 'Another payment to the participant does not avoid withholding. A direct rollover to the trustee or administrator/custodian of the new IRA avoids the 20% withholding.',
        },
      ],
    ),
    question(
      'c7q104',
      'What is a transfer, or direct transfer?',
      [
        {
          text: 'A payment to the participant, followed by a redeposit within 60 days.',
          why: 'The 60-day redeposit describes an IRA rollover, and a payment to the participant can trigger 20% withholding. A transfer moves funds without that participant payment.',
        },
        {
          text: 'A taxable move that always requires 20% withholding.',
          why: 'A transfer is tax free. The 20% withholding applies when a distribution is paid directly to the participant.',
        },
        {
          text: 'A distribution of cash that the participant receives from one retirement plan and puts into another.',
          why: 'Cash distributed from one plan to another is the rollover description. A transfer is a tax-free movement from a retirement program to a traditional IRA, or from one trustee directly to another.',
        },
        {
          text: 'A tax-free transfer of funds from one retirement program to a traditional IRA, or a transfer of interest in a traditional IRA from one trustee directly to another.',
          why: 'A transfer, or direct transfer, is a tax-free transfer of funds from one retirement program to a traditional IRA, or a transfer of interest in a traditional IRA from one trustee directly to another.',
          correct: true,
        },
      ],
    ),
  ],
  'c7-1035': [
    question(
      'c7q105',
      'A policyowner exchanges a cash value life policy for another cash value life policy, a cash value life policy for an annuity, or an annuity for an annuity. What does the course require of those contracts?',
      [
        {
          text: 'The contracts must be on the same life.',
          why: 'When a policyowner makes one of those exchanges, the contracts must be on the same life. There is no income tax on these transactions.',
          correct: true,
        },
        {
          text: 'The contracts must be on different lives.',
          why: 'Different lives do not satisfy the rule. The contracts must be on the same life.',
        },
        {
          text: 'The new contract must be term life.',
          why: 'Term life is not used in a 1035 exchange because it has no cash value. These exchanges must be on the same life.',
        },
        {
          text: 'The exchange must move funds from an annuity into a cash value life policy.',
          why: 'A policyowner may not exchange funds from an annuity into a cash value life policy. The exchanges described must be on the same life.',
        },
      ],
    ),
    question(
      'c7q106',
      'A life insurance policy may be exchanged under Section 1035 for which of these?',
      [
        {
          text: 'Only an annuity contract, not another life policy and not an endowment.',
          why: 'An annuity is one allowed target, not the only one. A life insurance policy may be exchanged for another life insurance policy, an endowment contract, or an annuity contract.',
        },
        {
          text: 'Another life insurance policy, an endowment contract, or an annuity contract.',
          why: 'A life insurance policy may be exchanged for another life insurance policy, an endowment contract, or an annuity contract.',
          correct: true,
        },
        {
          text: 'A term life policy, because term life has no cash value.',
          why: 'Term life is not used in a 1035 exchange because it has no cash value. A life policy may be exchanged for another life policy, an endowment, or an annuity.',
        },
        {
          text: 'Only a contract on a different life.',
          why: 'The contracts must be on the same life. A life policy may be exchanged for another life policy, an endowment contract, or an annuity contract.',
        },
      ],
    ),
    question(
      'c7q107',
      'An endowment contract may be exchanged under Section 1035 for which of these?',
      [
        {
          text: 'A cash value life policy.',
          why: 'The allowable list does not name a cash value life policy as a target for an endowment. An endowment may be exchanged for another endowment contract or an annuity contract.',
        },
        {
          text: 'A term life policy.',
          why: 'Term life is not used in a 1035 exchange because it has no cash value. An endowment may be exchanged for another endowment contract or an annuity contract.',
        },
        {
          text: 'Another endowment contract or an annuity contract.',
          why: 'An endowment contract may be exchanged for another endowment contract or an annuity contract.',
          correct: true,
        },
        {
          text: 'Only another endowment contract, not an annuity contract.',
          why: 'An annuity contract is also allowed. An endowment may be exchanged for another endowment contract or an annuity contract.',
        },
      ],
    ),
    question(
      'c7q108',
      'May a policyowner exchange funds from an annuity into a cash value life policy under Section 1035?',
      [
        {
          text: 'Yes. An annuity may be exchanged for a life insurance policy.',
          why: 'An annuity may be exchanged for another annuity, not for a cash value life policy. A policyowner may not exchange funds from an annuity into a cash value life policy.',
        },
        {
          text: 'Yes, if both contracts are on the same life.',
          why: 'The same-life requirement does not authorize this direction. A policyowner may not exchange funds from an annuity into a cash value life policy.',
        },
        {
          text: 'Yes, because an annuity and a cash value life policy are treated as the same kind of contract.',
          why: 'Same to same is acceptable, but an annuity into a cash value life policy is not that exchange. A policyowner may not make it.',
        },
        {
          text: 'No. That exchange is not allowed.',
          why: 'A policyowner may not exchange funds from an annuity into a cash value life policy.',
          correct: true,
        },
      ],
    ),
    question(
      'c7q109',
      'Why is term life not used in a 1035 exchange?',
      [
        {
          text: 'Because it has no cash value.',
          why: 'Term life is not used in a 1035 exchange because it has no cash value.',
          correct: true,
        },
        {
          text: 'Because term life is a more tax-advantaged contract than an annuity.',
          why: 'The course does not give that reason. Term life is not used because it has no cash value.',
        },
        {
          text: 'Because the two contracts would be on the same life.',
          why: 'Same life is a requirement for allowed exchanges, not the reason term life is excluded. Term life is not used because it has no cash value.',
        },
        {
          text: 'Because term life can be exchanged only for an endowment contract.',
          why: 'Term life is not given an endowment-only exchange. It is not used in a 1035 exchange because it has no cash value.',
        },
      ],
    ),
    question(
      'c7q110',
      'Which statement matches the course limit on exchanging less tax-advantaged and more tax-advantaged contracts?',
      [
        {
          text: 'The exchange must run from a less tax-advantaged contract to a more tax-advantaged contract.',
          why: 'The direction is not allowed. The exchange may not be from a less tax-advantaged contract to a more tax-advantaged contract, and same to same is acceptable.',
        },
        {
          text: 'The exchange may not be from a less tax-advantaged contract to a more tax-advantaged contract. Same to same is acceptable.',
          why: 'The exchange may not be from a less tax-advantaged contract to a more tax-advantaged contract. Same to same is acceptable.',
          correct: true,
        },
        {
          text: 'Same to same is not acceptable.',
          why: 'Same to same is acceptable. What is not allowed is an exchange from a less tax-advantaged contract to a more tax-advantaged contract.',
        },
        {
          text: 'Any exchange is allowed if both contracts are term life policies.',
          why: 'Term life is not used in a 1035 exchange because it has no cash value. Same to same is acceptable, and a move from less tax-advantaged to more tax-advantaged is not.',
        },
      ],
    ),
  ],
}
