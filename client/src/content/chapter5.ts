import { question } from './build.ts'
import type { Chapter } from './types.ts'
import { chapter5Extra } from './extra/chapter5.ts'

/**
 * Section text is the current study wording.
 * The source pages have no practice questions. Questions are written from that text,
 * four options each, with a reason for the right answer and for each wrong one.
 */
export const chapter5: Chapter = {
  id: 'ch-annuities',
  number: 5,
  title: 'Annuities: Income for Retirement',
  summary:
    'How an annuity differs from life insurance, who the parties are, how premiums are paid and invested, and how the income is paid out.',
  sections: [
    {
      id: 'c5-parties',
      title: 'What an annuity is',
      body: `An annuity is a contract that provides income for a specified number of years, or for life. It protects a person against outliving their money. An annuity is not life insurance. It is a way to accumulate money and then to liquidate an estate. Life insurance companies sell annuities, and a licensed life insurance agent is authorized to sell some types. An annuity does not pay a face amount when the annuitant dies. In most cases the payments stop at the annuitant's death. Annuities use mortality tables, but those tables assume a longer life expectancy than the tables used for life insurance. A mortality table shows how many people in a specified group, such as males, females, smokers, or nonsmokers, who start at a certain age, are expected to be alive at a later age.

These words are used in this chapter.

• Deferred. Withheld or postponed until a specified time, or until a specified event in the future.
• IRS. The Internal Revenue Service, the U.S. agency that collects taxes and enforces the Internal Revenue Code.
• Life contingency. A payment that depends on whether the person is alive.
• Liquidation of an estate. Turning a person's net worth into a cash flow.
• Natural person. A human being.
• Qualified plan. A retirement plan that meets IRS guidelines for favorable tax treatment.
• Suitability. The requirement to decide whether an insurance product or an investment fits a particular customer.

The owner is the person who buys the contract. The owner is not necessarily the person who receives the benefits. The owner has all of the rights, including naming the beneficiary and surrendering the annuity. The owner may be a corporation, a trust, or another legal entity.

The annuitant is the person who receives the benefits or payments. The annuitant's life expectancy is used to set the contract, and the annuity is written for that person. The annuitant and the owner do not have to be the same person, but most often they are. A corporation, a trust, or another legal entity may own an annuity. The annuitant must be a natural person.

The beneficiary receives the annuity assets if the annuitant dies during the accumulation period. The beneficiary receives the amount paid into the annuity or the cash value, whichever is greater. If the annuitant dies after payments have started, the beneficiary receives any balance of benefits that the contract still pays out.`,
      questions: [
        question(
          'c5q01',
          'How does an annuity differ from life insurance?',
          [
            {
              text: 'It does not pay a face amount at the annuitant’s death. In most cases the payments stop, and its mortality table assumes a longer life.',
              why: 'An annuity accumulates money and then liquidates an estate as income. It protects against outliving that money. It is not life insurance.',
              correct: true,
            },
            {
              text: 'It pays a face amount to a beneficiary when the annuitant dies, using the life insurance mortality table.',
              why: 'That is what life insurance does. An annuity does not pay a face amount at death, and its mortality table reflects a longer life expectancy.',
            },
            {
              text: 'The payments increase when the annuitant dies, because the contract uses a shorter life expectancy.',
              why: 'In most cases the payment phase stops at the annuitant’s death. The annuity mortality table assumes people live longer, not shorter.',
            },
            {
              text: 'Only a property insurer may issue it, and only a securities agent may sell every type.',
              why: 'Life insurance companies market annuities, and licensed life insurance agents are authorized to sell some types. Variable annuities add a securities license.',
            },
          ],
        ),
        question(
          'c5q02',
          'Who must be a natural person in an annuity contract?',
          [
            {
              text: 'The annuitant. The owner may be a corporation, trust, or other legal entity.',
              why: 'The annuitant is the person whose life expectancy is used and who receives the payments. The owner holds the rights, including naming the beneficiary and surrendering the contract, and need not be the person who receives the benefits.',
              correct: true,
            },
            {
              text: 'The owner. The annuitant may be a trust.',
              why: 'A trust may own an annuity. The annuitant cannot be a trust or other legal entity. The annuitant must be a human being.',
            },
            {
              text: 'The beneficiary. The annuitant may be the insurance company.',
              why: 'The beneficiary receives assets if the annuitant dies during accumulation, or the remaining benefits. The annuitant is the measuring life, and that person must be a natural person.',
            },
            {
              text: 'Neither. Any party to the contract may be a corporation.',
              why: 'The owner may be a legal entity. The annuitant may not.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c5-periods',
      title: 'The pay-in period and the income period',
      body: `The accumulation period, also called the pay-in period, is the time during which the owner pays premiums into the annuity. During that time the payments earn interest, and the tax on that interest is deferred.

The annuity period is also called the annuitization period, the liquidation period, or the pay-out period. It is the time when the accumulated sum is turned into a stream of income payments to the annuitant. The income may last for the annuitant's lifetime or for a specified period, and that period can be longer or shorter than the annuitant's life. The annuitization date is the day the benefit payouts begin. It is the trigger for the benefits.

An annuity is not life insurance, and it does not pay a face amount when the annuitant dies. In most cases the payment phase stops at death. A deferred annuity grows tax-deferred.`,
      questions: [
        question(
          'c5q03',
          'What happens during the accumulation period?',
          [
            {
              text: 'The owner pays premiums in, and those payments earn interest on a tax-deferred basis.',
              why: 'This is the pay-in period. The annuity period is when that sum is converted into income. The annuitization date is when payouts begin.',
              correct: true,
            },
            {
              text: 'The insurer converts the cash value into income payments that the annuitant cannot outlive.',
              why: 'Converting the accumulated sum into a stream of income is the annuity, or pay-out, period.',
            },
            {
              text: 'The contract pays a face amount if the annuitant dies.',
              why: 'An annuity does not pay a face amount at death. If death occurs during accumulation, the beneficiary is paid the cash value or the premiums paid, whichever is greater.',
            },
            {
              text: 'Interest is taxed each year as it is credited.',
              why: 'Interest during the accumulation period is earned on a tax-deferred basis. A deferred annuity grows tax-deferred.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c5-funding',
      title: 'How you pay in, and when income starts',
      body: `Annuities are classified by how the premiums are paid in, by how those premiums are invested, and by when and how the benefits are paid out.

Funding is either a single premium, which is one lump-sum payment, or periodic payments, which are installments over time. A periodic-payment annuity is either level premium, meaning a fixed installment, or flexible premium, meaning the amount and the timing of each installment can vary.

An immediate annuity is bought with a single lump-sum payment, and the income starts within one year from the date of purchase. The first payment is typically as early as 1 month from the purchase date. This contract is most commonly a Single Premium Immediate Annuity (SPIA).

A deferred annuity begins income payments sometime after one year from the date of purchase. It can be funded with a single lump sum, which is a Single Premium Deferred Annuity (SPDA), or with periodic payments, which is a Flexible Premium Deferred Annuity (FPDA). Periodic payments can vary from year to year. The longer the annuity is deferred, the more flexibility the owner has in paying the premiums.`,
      questions: [
        question(
          'c5q04',
          'Which annuity starts income within one year of a single lump-sum purchase?',
          [
            {
              text: 'A single premium immediate annuity. The first payment is typically as early as 1 month from purchase.',
              why: 'A deferred annuity waits until sometime after one year. It may be a single premium deferred annuity or a flexible premium deferred annuity.',
              correct: true,
            },
            {
              text: 'A flexible premium deferred annuity, because the owner can vary the payments.',
              why: 'An FPDA is deferred. Income begins sometime after one year, and the premiums are periodic payments that can vary.',
            },
            {
              text: 'Any deferred annuity, because deferral means payments start right away.',
              why: 'Deferred means the income is postponed. Immediate means income starts within one year of purchase.',
            },
            {
              text: 'A level premium annuity that pays the first income check at the end of the 10th year.',
              why: 'Income that begins after one year is a deferred annuity. Level premium only describes a fixed installment, not when income starts.',
            },
          ],
        ),
        question(
          'c5q05',
          'What is the difference between a level premium and a flexible premium?',
          [
            {
              text: 'Level premium is a fixed installment. Flexible premium lets the amount and frequency of each installment vary.',
              why: 'Both are ways to fund a periodic-payment annuity. A single premium is the other funding choice: one lump sum.',
              correct: true,
            },
            {
              text: 'Level premium starts income within one month. Flexible premium starts it after one year.',
              why: 'When income starts is the immediate-versus-deferred classification, not the level-versus-flexible classification.',
            },
            {
              text: 'Level premium is invested in the general account. Flexible premium is invested in the separate account.',
              why: 'Where the premium is invested distinguishes fixed and variable annuities. Level and flexible describe the payment schedule.',
            },
            {
              text: 'Level premium stops at the first death. Flexible premium continues to a survivor.',
              why: 'Those are joint life and joint and survivor payouts, not premium payment options.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c5-life',
      title: 'Income that can last for life',
      body: `Annuity payment options say how the funds are paid out. They are very similar to the settlement options in life insurance.

A life annuity pays a specific amount for the rest of the annuitant's life. Pure life, also called life-only or straight life, stops when the annuitant dies, no matter how soon that happens after annuitization. It provides the highest monthly benefit for an individual annuitant. The payments are guaranteed for life, but there is no guarantee that all of the proceeds will be paid out.

Life with a guaranteed minimum, also called refund life, pays the remainder of the principal to the beneficiary if the annuitant dies before the principal has been paid out. The entire principal will be paid.

There are two refund life annuities.

• Cash refund. The beneficiary receives a lump-sum refund of the principal minus the benefit payments already made. This option does not guarantee that any interest will be paid.
• Installment refund. The beneficiary keeps receiving guaranteed installments until the entire principal has been paid out.

Any unpaid annuity benefits that are paid to a beneficiary after the annuitant's death are taxable when they are paid.

Life with period certain, also called term certain, guarantees payments for the annuitant's lifetime and for a specified period for the beneficiary. A life income with a 20-year period certain pays the annuitant for life. If the annuitant dies shortly after payments begin, the payments continue to a beneficiary for the rest of the 20 years.

A single life annuity covers one life, and the payments are figured with reference to that one life only. Contributions can be a single premium or periodic premiums, and the values accumulate until the contract is annuitized. A multiple life annuity covers two or more lives. The most common forms are joint life, and joint and survivor.`,
      questions: [
        question(
          'c5q08',
          'Which life annuity pays the highest monthly benefit to an individual annuitant?',
          [
            {
              text: 'Pure life, also called life-only or straight life. Payments stop at the annuitant’s death.',
              why: 'There is no guarantee that all of the proceeds will be paid out. A refund or a period certain guarantees more of the principal and therefore pays a smaller installment.',
              correct: true,
            },
            {
              text: 'Cash refund, because the beneficiary also receives the interest.',
              why: 'Cash refund pays the beneficiary a lump sum of remaining principal and does not guarantee interest. It is not the highest monthly benefit.',
            },
            {
              text: 'Life with a 20-year period certain, because the term makes each payment larger.',
              why: 'Period certain continues payments to a beneficiary for the rest of the stated period. That guarantee does not increase the annuitant’s payment above pure life.',
            },
            {
              text: 'Installment refund, because the installments include a bonus if death is early.',
              why: 'Installment refund continues payments until the principal is paid out. Pure life pays more each month because it does not promise that refund.',
            },
          ],
        ),
        question(
          'c5q09',
          'How does a cash refund differ from an installment refund?',
          [
            {
              text: 'Cash refund pays the beneficiary a lump sum of principal minus payments already made, and it does not guarantee interest. Installment refund continues the installments until the principal is paid.',
              why: 'Both are refund life options, so the entire principal is paid out. Unpaid benefits are taxable when paid to the beneficiary.',
              correct: true,
            },
            {
              text: 'Cash refund pays interest only. Installment refund forfeits the remaining principal.',
              why: 'Cash refund does not guarantee interest. Installment refund keeps paying until the principal is exhausted. Neither forfeits the remaining principal.',
            },
            {
              text: 'Cash refund stops at the annuitant’s death with nothing more paid. Installment refund pays a new face amount.',
              why: 'Stopping with nothing further paid is pure life. Annuities do not pay a face amount.',
            },
            {
              text: 'Cash refund covers two lives. Installment refund covers one life for 20 years only.',
              why: 'Two lives are joint life or joint and survivor. A 20-year guarantee on top of a lifetime income is life with period certain.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c5-joint',
      title: 'Income for two people',
      body: `Joint life is a payout arrangement in which two or more annuitants receive payments until the first death among them. After that first death, the payments stop.

Joint and survivor is a modification of the life income option. It guarantees an income for two recipients that neither of them can outlive. The survivor may receive the same amount, but most contracts reduce the payment after the first recipient dies. The option is most commonly written as joint and 1/2 survivor or joint and 2/3 survivor. The survivor then receives one-half, or two-thirds, of what was paid while both people were alive. Couples in retirement commonly choose it. As with life income, there is no guarantee that all the proceeds will be paid out if both beneficiaries die shortly after the installments begin.

Rosa and Luis choose a joint and 1/2 survivor annuity. While both are alive, the payment is $2,000 a month. After the first of them dies, the survivor receives $1,000 a month for life.`,
      questions: [
        question(
          'c5q10',
          'When do joint life annuity payments stop?',
          [
            {
              text: 'At the first death among the annuitants.',
              why: 'Joint and survivor keeps paying so that neither recipient can outlive the income. After the first death the survivor often receives ½ or ⅔ of the earlier payment.',
              correct: true,
            },
            {
              text: 'When the second annuitant dies, with the same payment continuing to the survivor.',
              why: 'Payments that continue for both lives are joint and survivor. Most of those contracts reduce the payment after the first death rather than keep the full amount.',
            },
            {
              text: 'After a fixed number of years, whether or not either person is living.',
              why: 'A payment that lasts only for a selected time, whether or not the annuitant is living, is a fixed-period annuity certain.',
            },
            {
              text: 'They never stop, because joint life refunds the principal to the estate at the first death.',
              why: 'Joint life stops at the first death. A refund of remaining principal is a refund life option, not joint life.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c5-certain',
      title: 'Income for a fixed number of years',
      body: `Annuities certain are short-term annuities. Unlike life-contingency options, they limit what is paid to a fixed period, or until a fixed amount has been liquidated.

Under a fixed-period option, the annuitant selects how long the benefits will last. The insurer then decides how much each payment will be, based on the value of the account and on projections of future earnings. This option pays for a specified length of time only, whether or not the annuitant is living.

Under a fixed-amount option, the annuitant selects how much each payment will be. The insurer then decides how long the benefits will last, by looking at the value of the account and at future earnings. This option pays a specific amount until the funds are exhausted, whether or not the annuitant is living.`,
      questions: [
        question(
          'c5q11',
          'Under a fixed-period annuity certain, who decides the size of each payment?',
          [
            {
              text: 'The insurer. The annuitant selects the time period, and payments last that long whether or not the annuitant is living.',
              why: 'Under fixed amount, the annuitant selects the payment and the insurer decides how long the funds will last. Annuities certain are not based on the annuitant remaining alive.',
              correct: true,
            },
            {
              text: 'The annuitant selects both the payment amount and a lifetime guarantee.',
              why: 'A lifetime guarantee is a life contingency option. Fixed period pays only for the selected time.',
            },
            {
              text: 'The beneficiary selects the period after the annuitant dies.',
              why: 'The annuitant selects the time period. The insurer then sets the payment from the account value and future earnings projections.',
            },
            {
              text: 'The payment is always the same as a pure life annuity for that age.',
              why: 'Pure life is a life contingency and pays the highest monthly lifetime benefit. Fixed period is a short-term annuity certain, and the insurer calculates the installment.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c5-fixed',
      title: 'Fixed and indexed annuities',
      body: `Annuities are fixed or variable based on how the premium payments are invested.

A fixed annuity guarantees a minimum rate of interest on the purchase payments. The income payments do not change from one payment to the next. The insurance company guarantees the specified dollar amount of each payment and the length of the payment period, as the settlement option provides. The annuitant knows the exact amount of each payment during the annuity period. That is a level benefit payment. A disadvantage is that inflation may erode the purchasing power of those payments over time.

Fixed annuity premiums go into the life insurance company's general account. That account is made up mostly of conservative investments, such as bonds. Those investments are secure enough for the company to guarantee a specified rate of interest and the future income payments.

In a fixed annuity, the insurer bears the investment risk. The interest that is actually paid depends on how the general account performs, but the rate may not drop below the policy's guaranteed minimum, which is typically 3%. If market rates drop below that guarantee, the insurer must still pay the guaranteed rate. During accumulation, the insurer invests the principal and credits the higher of two rates: the guaranteed minimum rate in the annuity, or the current interest rate. The minimum rate is the lowest rate the principal can contractually earn.

An indexed annuity, also called an equity indexed annuity, is a fixed annuity that invests on a relatively aggressive basis in order to aim for higher returns. It has a guaranteed minimum interest rate, typically 3% or 4%. At the end of the contract term, the annuity is credited with the greater of the guaranteed minimum value or the current indexed value. The credited rate is often tied to an index such as the Standard and Poor's 500.

Insurers generally keep the initial returns and pay the excess to the annuitant. The company may keep the first 6% earned and credit any accumulation above 6% to the annuitant. If the index earns 15%, the company keeps 6% and the client's account is credited with 9%. An equity indexed annuity is less risky than a variable annuity or a mutual fund. It is expected to earn a higher interest rate than a plain fixed annuity.`,
      questions: [
        question(
          'c5q12',
          'Where are fixed annuity premiums invested, and who bears the investment risk?',
          [
            {
              text: 'In the insurer’s general account, mostly bonds. The insurer bears the risk and cannot credit less than the guaranteed minimum, typically 3%.',
              why: 'Payments are level, and the company guarantees the dollar amount and the length of the payment period. Inflation can erode what those fixed payments will buy.',
              correct: true,
            },
            {
              text: 'In the separate account. The annuitant bears the risk, and there is no minimum interest rate.',
              why: 'The separate account, with no guaranteed minimum interest, describes a variable annuity.',
            },
            {
              text: 'In a bond index chosen by the owner. If rates rise, the insurer pays a bonus even when the contract is kept to maturity.',
              why: 'A market value adjustment can pay a bonus or assess a penalty when a market value adjusted annuity is surrendered early. It is not how every fixed annuity is invested.',
            },
            {
              text: 'They are not invested. A fixed annuity only holds the premium in cash until annuitization.',
              why: 'The insurer invests the principal during accumulation and credits the higher of the guaranteed minimum and the current rate.',
            },
          ],
        ),
        question(
          'c5q13',
          'An equity indexed annuity earns 12%, and the company keeps the first 4%. What is credited to the annuitant?',
          [
            {
              text: '8%. The contract is still credited with the greater of the guaranteed minimum value or the indexed value.',
              why: 'An indexed annuity is a fixed annuity with a guaranteed minimum, typically 3% or 4%, often tied to the Standard and Poor’s 500. It is less risky than a variable annuity or a mutual fund.',
              correct: true,
            },
            {
              text: '12%, because the index return is credited in full.',
              why: 'The company keeps the initial return, in this example the first 4%, and credits the excess.',
            },
            {
              text: '4%, because the annuitant receives only the guaranteed minimum.',
              why: '4% is what the company keeps in the example. The account is credited with the excess, 8%, and the guarantee is a floor, not the only credit.',
            },
            {
              text: 'Nothing, unless the annuitant holds a securities license.',
              why: 'The securities license is required of an agent who sells variable annuities. It is not a condition of the indexed credit.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c5-variable',
      title: 'Variable annuities',
      body: `A variable annuity is a hedge against inflation. The annuitant may receive different rates of return on the money paid into the annuity. It has three main characteristics.

The payments are invested in the insurer's separate account, not the general account. The separate account is not part of the company's own investment portfolio, and it is not subject to the restrictions that apply to the general account.

The issuing company does not guarantee a minimum interest rate.

A variable annuity is a security. It is regulated by the Securities and Exchange Commission in addition to state insurance regulations. An agent who sells variable annuities must hold a securities license in addition to a life insurance license. Agents and companies that sell them must also be properly registered with FINRA.

Variable premiums buy accumulation units in the fund, similar to shares in a mutual fund. Accumulation units represent an ownership interest in the separate account. At annuitization, accumulation units are converted to annuity units. Income is then paid based on the value of the annuity units. The number of annuity units stays level. The unit values fluctuate until they are paid to the annuitant.

A fixed annuity and a variable annuity differ in these ways.

• Interest rate. Fixed: guaranteed by the insurer. Variable: no guarantee.
• Underlying investment. Fixed: the general account, which is safe and conservative. Variable: the separate account, which holds equities and has no guarantee.
• License needed. Fixed: a life insurance license. Variable: a life insurance license plus a securities license.
• Expenses. Guaranteed for both.
• Income payment. Fixed: guaranteed. Variable: no guarantee.`,
      questions: [
        question(
          'c5q14',
          'What happens to accumulation units when a variable annuity is annuitized?',
          [
            {
              text: 'They are converted to annuity units. The number of annuity units stays level, and the unit values fluctuate until paid.',
              why: 'Accumulation units are the ownership interest in the separate account, similar to mutual fund shares. The insurer does not guarantee a minimum interest rate, and the agent needs a securities license and FINRA registration as well as a life license.',
              correct: true,
            },
            {
              text: 'They are moved into the general account and converted to a guaranteed dollar payment.',
              why: 'The separate account stays separate. A guaranteed dollar payment is a fixed annuity feature.',
            },
            {
              text: 'They are forfeited, and the annuitant receives only the premiums paid.',
              why: 'Annuitization converts accumulation units into annuity units. It does not forfeit them.',
            },
            {
              text: 'The number of units fluctuates, and the value of each unit is frozen.',
              why: 'The number of annuity units remains level. The unit values fluctuate until they are paid out.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c5-mva',
      title: 'Market value adjusted annuities',
      body: `A market value adjusted annuity, also called a market value adjustment annuity or a modified guaranteed annuity, is a single-premium deferred annuity. It lets the owner lock in a guaranteed interest rate over a stated maturity period, anywhere from 3 to 10 years. If the annuity is surrendered early, the penalty depends on current interest rates at the time of surrender.

A client buys a 7-year annuity credited at 5%. The adjustment is tied to a bond index, such as Moody's Bond Fund Index. The client withdraws the money in year 3. If the current interest rate is still 5%, there is no adjustment. If the current rate is 7%, a penalty is assessed. If the current rate is 3%, the insurance company may pay a bonus. The adjustment is usually a percentage of the difference between the contracted rate in the annuity and the current rate at surrender. The company requires the annuitant to share in the market risk of changing interest rates if the annuity is surrendered early.`,
      questions: [
        question(
          'c5q15',
          'A client surrenders a 6% market value adjusted annuity early, and the current interest rate is 8%. What happens?',
          [
            {
              text: 'A penalty is assessed. If the current rate had fallen to 4%, the company might pay a bonus instead.',
              why: 'If the current rate equals the contracted 6%, there is no adjustment. The owner locked in a rate for a maturity of 3 to 10 years and shares the market risk of an early surrender.',
              correct: true,
            },
            {
              text: 'A bonus is paid, because a higher current rate always increases the surrender value.',
              why: 'A higher current rate at surrender produces a penalty. A lower current rate may produce a bonus.',
            },
            {
              text: 'Nothing changes, because the adjustment applies only when the contract is held to maturity.',
              why: 'The market value adjustment applies to a premature surrender. At an equal rate there is no adjustment, but 8% is not equal to the contracted 6%.',
            },
            {
              text: 'The contract is converted to a variable annuity in the separate account.',
              why: 'A market value adjusted annuity is a single-premium deferred annuity with a locked interest rate. It is not converted to a variable annuity because rates changed.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c5-surrender',
      title: 'Taking money out early',
      body: `The nonforfeiture law says a deferred annuity must have a guaranteed surrender value if the owner surrenders before annuitization. One form of that guarantee is 100% of the premiums paid, minus any prior withdrawals and the related surrender charges. A 10% penalty applies to an early withdrawal made before age 59½.

A surrender charge helps compensate the company for the investment value it loses when a deferred annuity is surrendered early. The charge is taken from the cash value. It is generally a percentage that gets smaller over time. A common schedule is 7% the first year, then 6%, 5%, 4%, 3%, 2%, 1%, and 0%. If the annuity is surrendered in the 8th year or later, there is no further surrender charge. At surrender, the owner receives the premium plus interest, which is the value of the annuity, minus the surrender charge.

An owner paid $1,200 in premium. Interest of $90 has accumulated, and the surrender charge is $96. The value at surrender is $1,194.

($1,200 premium + $90 interest) − $96 surrender charge = $1,194.

Annuity contracts waive the surrender charge if the annuitant is confined to a long-term care facility for at least 30 days.

Some contracts have a bail-out provision. If interest rates drop by a specified amount within a specified time, the contract holder may surrender the annuity without a charge.

If the annuitant dies during the accumulation period, the insurer must return to the beneficiary either the cash value or the total premiums paid, whichever is greater. If no beneficiary is named, the death benefit is paid to the annuitant's estate.`,
      questions: [
        question(
          'c5q06',
          'An owner paid $700, the annuity earned $35 of interest, and the surrender charge is $70. What is the value at surrender?',
          [
            {
              text: '$665.',
              why: 'Surrender value is premium plus interest, minus the surrender charge: $700 + $35 − $70. A common charge schedule reaches 0% in the 8th year.',
              correct: true,
            },
            {
              text: '$735, the premium plus interest, because a deferred annuity cannot be surrendered.',
              why: 'A deferred annuity has a guaranteed surrender value. The charge is subtracted. It is not added.',
            },
            {
              text: '$630, the premium minus the charge, with the interest forfeited.',
              why: 'The owner receives the premium plus the interest, then the surrender charge is subtracted.',
            },
            {
              text: '$70, which is all the owner can recover before annuitization.',
              why: '$70 is the surrender charge in the example, not the amount paid to the owner.',
            },
          ],
        ),
        question(
          'c5q07',
          'If the annuitant dies during the accumulation period, what is paid?',
          [
            {
              text: 'The beneficiary receives the cash value or the total premiums paid, whichever is greater. If none is named, the estate is paid.',
              why: 'A bail-out lets the owner surrender without charge if interest rates drop a specified amount within a specified time. Surrender charges are also waived after at least 30 days in a long-term care facility.',
              correct: true,
            },
            {
              text: 'Nothing. Annuity payments are designed to stop, so the company keeps the account.',
              why: 'Payments stopping at death describes the pay-out phase of a pure life annuity. Death during accumulation creates a death benefit.',
            },
            {
              text: 'A face amount chosen at issue, the same as a life policy.',
              why: 'An annuity does not pay a face amount. The accumulation death benefit is the greater of cash value and premiums paid.',
            },
            {
              text: 'Only the interest, because the premium is forfeited.',
              why: 'The beneficiary receives the greater of the cash value and the premiums paid, not the interest alone.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c5-uses',
      title: 'Ways people use annuities',
      body: `The principal use of an annuity is to provide income for retirement. An annuity may also be used to accumulate cash or to liquidate an estate. Because the uses differ, an agent should always judge how well a recommended product meets the applicant's needs and resources. That judgment is suitability.

An annuity can take a large lump sum and turn it into income. The lump sum might be an inheritance, a lottery prize, damages from a lawsuit, the proceeds from the sale of a business, or a lump-sum distribution from a qualified pension plan. The person may buy a single premium immediate annuity, which converts the lump sum into a series of payments.

Annuities often fund qualified retirement plans, which meet IRS guidelines for favorable tax treatment. A qualified retirement annuity can be individual, such as an individual retirement account, or group, such as a tax-sheltered annuity or a profit-sharing pension plan.

A Guaranteed Minimum Withdrawal Benefit lets the annuitant withdraw a maximum percentage of the investment each year until the initial investment has been recovered. It protects the annuitant against investment losses.

A Guaranteed Living Benefit rider is similar to that withdrawal benefit. It assures that the annuitant will receive at least the amount of money invested, or a certain amount of income, usually up to the annuity purchase amount, regardless of market conditions. It is generally offered to variable annuity investors, because the account value depends on the returns of the portfolio's mutual funds. The rider often can be exercised only after a stated period, for example after 8 years, and there is usually a fee of 0.25% to 1% of the contract value each year.

An annuitant invests $80,000 and buys the rider at 0.40%, so $320 is deducted from the account each year. If the account falls to $52,000, the annuitant still receives $80,000 as agreed. If the account rises, the annuitant has paid the fee out of the account, much as a person pays for automobile insurance, and the fee has lowered the account value. The rider generally does not apply if the contract is surrendered. Withdrawals are subtracted from the account value dollar for dollar. Each company's rider works differently.

Under the Pension Protection Act of 2006, an annuitant may transfer money from an annuity to pay long-term care insurance premiums, tax free. Distributions from nonqualified annuities used to be taxed. Those distributions can now pay long-term care premiums and, in many cases, eliminate the tax on the annuity gains. Many insurers offer a hybrid annuity with a long-term care feature. These policies provide income, long-term care, or both.

An annuity can also accumulate funds for college. It can provide savings on a tax-deferred basis for the annuitant's education expenses.`,
      questions: [
        question(
          'c5q16',
          'What does a Guaranteed Minimum Withdrawal Benefit let the annuitant do?',
          [
            {
              text: 'Withdraw a maximum percentage of the investment each year until the initial investment has been recovered.',
              why: 'The option protects against investment losses. The main use of an annuity is retirement income, and the product should be suitable for the applicant’s needs and resources.',
              correct: true,
            },
            {
              text: 'Skip the surrender charge in any year the interest rate falls.',
              why: 'Surrendering without charge when interest rates drop a specified amount is a bail-out provision, not the withdrawal benefit.',
            },
            {
              text: 'Move the account from the separate account into the general account.',
              why: 'The separate account and the general account distinguish variable and fixed annuities. This benefit is a withdrawal right.',
            },
            {
              text: 'Receive a face amount if death occurs during the accumulation period.',
              why: 'The accumulation death benefit is the greater of cash value and premiums paid. It is not a guaranteed minimum withdrawal of a percentage each year.',
            },
          ],
        ),
        question(
          'c5q17',
          'An annuitant pays 0.50% a year for a Guaranteed Living Benefit on a $100,000 variable annuity, and the account falls to $75,000. What is the result?',
          [
            {
              text: '$500 is deducted each year, and the annuitant still receives the agreed $100,000.',
              why: 'The rider assures at least the amount invested, or a stated income usually up to the purchase amount, regardless of the market. It generally does not apply if the contract is surrendered. Under the Pension Protection Act of 2006, annuity money can also be transferred tax free to pay long-term care premiums.',
              correct: true,
            },
            {
              text: 'The rider pays $75,000, because the benefit follows the account value.',
              why: 'The point of the rider is that the annuitant still receives the agreed amount when the account declines. $75,000 is the fallen account value, not the promised benefit.',
            },
            {
              text: 'The fee is refunded, and the annuity is converted to a fixed annuity.',
              why: 'The fee, 0.25% to 1% of contract value, is charged for the rider. A decline in value does not refund it or convert the contract.',
            },
            {
              text: 'Nothing is deducted, because the fee is charged only when the account rises.',
              why: 'In the example, $500 is deducted annually. If the account rises, that fee has still reduced the account, much like an insurance premium.',
            },
          ],
        ),
      ],
    },

  ],
}

for (const section of chapter5.sections) {
  section.questions.push(...(chapter5Extra[section.id] ?? []))
}
