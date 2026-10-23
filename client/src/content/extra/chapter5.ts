import { question } from '../build.ts'
import type { Question } from '../types.ts'

export const chapter5Extra: Record<string, Question[]> = {
  'c5-parties': [
    question(
      'c5q18',
      'What does an annuity contract provide?',
      [
        {
          text: 'A face amount payable when the annuitant dies.',
          why: 'An annuity does not pay a face amount when the annuitant dies. In most cases the payments stop at that death.',
        },
        {
          text: 'Income for a specified period of years, or for life.',
          why: 'That income protects a person from outliving their money. The contract is a vehicle for the accumulation of money and the liquidation of an estate.',
          correct: true,
        },
        {
          text: 'A rule that the owner and the annuitant must be different parties.',
          why: 'The owner and the annuitant do not have to be the same person, but most often they are. The contract does not require them to be different.',
        },
        {
          text: 'The right of a corporation, trust, or other legal entity to serve as the annuitant.',
          why: 'A corporation, trust, or other legal entity may own an annuity. The annuitant must be a natural person, meaning a human being.',
        },
      ],
    ),
    question(
      'c5q19',
      'What does deferred mean in this chapter?',
      [
        {
          text: 'Converting net worth into a cash flow.',
          why: 'That is liquidation of an estate. Deferred means withheld or postponed until a specified time or event in the future.',
        },
        {
          text: 'Dependent upon whether or not the insured is alive.',
          why: 'That is a life contingency. Deferred refers to timing, not to whether the insured is alive.',
        },
        {
          text: 'Withheld or postponed until a specified time or event in the future.',
          why: 'The chapter uses deferred for something that waits until a later time or event. It does not mean income has already started.',
          correct: true,
        },
        {
          text: 'A human being, rather than a corporation, trust, or other legal entity.',
          why: 'That is a natural person, and the annuitant must be one. Deferred describes postponement, not the legal form of a party.',
        },
      ],
    ),
    question(
      'c5q20',
      'What is liquidation of an estate?',
      [
        {
          text: 'Paying a face amount when the annuitant dies.',
          why: 'An annuity does not pay a face amount at death. Liquidation of an estate means converting net worth into a cash flow.',
        },
        {
          text: 'Naming the beneficiary and surrendering the annuity.',
          why: 'Those are rights of the owner. Liquidation of an estate is the conversion of net worth into a cash flow.',
        },
        {
          text: 'A retirement plan that meets IRS guidelines for favorable tax treatment.',
          why: 'That is a qualified plan, and the IRS is the tax agency behind those guidelines. Liquidation of an estate means converting net worth into a cash flow.',
        },
        {
          text: 'Converting net worth into a cash flow.',
          why: 'An annuity is a vehicle for the accumulation of money and for that liquidation. The income may last for a period of years or for life.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q21',
      'What is a life contingency?',
      [
        {
          text: 'A condition that depends on whether or not the insured is alive.',
          why: 'The chapter defines a life contingency that way. It is not a postponement of income, and it is not a test of whether a product fits a customer.',
          correct: true,
        },
        {
          text: 'A requirement to determine whether a product or an investment fits a particular customer.',
          why: 'That requirement is suitability. A life contingency depends on whether or not the insured is alive.',
        },
        {
          text: 'Withheld or postponed until a specified future event.',
          why: 'That is the definition of deferred. A life contingency turns on life, not on a postponed date.',
        },
        {
          text: 'The U.S. government agency that collects taxes and enforces the Internal Revenue Code.',
          why: 'That agency is the IRS. A life contingency is a condition tied to whether the insured is alive.',
        },
      ],
    ),
    question(
      'c5q22',
      'Which companies market annuities, and who is authorized to sell some types?',
      [
        {
          text: 'The IRS markets them in order to enforce the Internal Revenue Code.',
          why: 'The IRS collects taxes and enforces the Internal Revenue Code. Life insurance companies market annuities.',
        },
        {
          text: 'Life insurance companies market them, and licensed life insurance agents are authorized to sell some types.',
          why: 'Annuities are not life insurance, but life insurers market them. A life insurance license covers some types of annuity sales.',
          correct: true,
        },
        {
          text: 'Only the beneficiary may sell them, because the beneficiary holds every contract right.',
          why: 'Naming the beneficiary and surrendering the annuity are rights of the owner. Life insurance companies market annuities, and licensed life agents may sell some types.',
        },
        {
          text: 'No license is required, because an annuity pays a face amount like any other product.',
          why: 'An annuity does not pay a face amount. Licensed life insurance agents are authorized to sell some types, and life insurance companies market them.',
        },
      ],
    ),
    question(
      'c5q23',
      'What does a mortality table show, and how does an annuity table compare with a life insurance table?',
      [
        {
          text: 'It lists the face amount paid at death, and the annuity table uses a shorter life expectancy.',
          why: 'An annuity does not pay a face amount. A mortality table shows expected survival in a group, and annuity tables reflect a longer life expectancy.',
        },
        {
          text: 'It names the beneficiary, and both products must use the same table.',
          why: 'Naming the beneficiary is a right of the owner. Annuity mortality tables reflect a longer life expectancy than life insurance tables.',
        },
        {
          text: 'It shows how many people in a specified group, starting at a certain age, are expected to be alive at a later age. Annuity tables reflect a longer life expectancy.',
          why: 'The group may be males, females, smokers, or nonsmokers. Annuity tables reflect a longer life expectancy than the tables used for life insurance.',
          correct: true,
        },
        {
          text: 'It shows the tax on each premium, and annuity tables ignore survival.',
          why: 'Taxes belong to the IRS. A mortality table measures how many people in a group are expected to be alive later, and annuity tables assume a longer life.',
        },
      ],
    ),
    question(
      'c5q24',
      'Which statement describes the owner of an annuity?',
      [
        {
          text: 'The owner must be the person who receives the payments and must be a natural person.',
          why: 'The owner is the purchaser, but not necessarily the person who receives the benefits. The annuitant, not the owner, must be a natural person.',
        },
        {
          text: 'The owner receives the payments, and a trust can be the annuitant when the trust is the owner.',
          why: 'The annuitant receives the payments. A trust may own the contract, but the annuitant must be a natural person.',
        },
        {
          text: 'The owner has no contract rights. Only the beneficiary may surrender the annuity.',
          why: 'The owner has all of the rights, including naming the beneficiary and surrendering the annuity.',
        },
        {
          text: 'The owner is the purchaser and has all of the rights, including naming the beneficiary and surrendering the annuity.',
          why: 'The owner is not necessarily the person who receives the benefits. The owner may be a corporation, trust, or other legal entity.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q25',
      'Must the owner and the annuitant be the same person?',
      [
        {
          text: 'No. They do not have to be the same person, but most often they are.',
          why: 'The owner purchases the contract and holds the rights. The annuitant receives the payments, and the life expectancy of the annuitant is the one that is used.',
          correct: true,
        },
        {
          text: 'Yes. The contract cannot exist unless the purchaser and the measuring life are one person.',
          why: 'The annuitant and the owner do not have to be the same person, although most often they are.',
        },
        {
          text: 'Yes. When a corporation owns the contract, the corporation becomes the annuitant.',
          why: 'A corporation may own an annuity, but the annuitant must be a natural person. Corporate ownership does not make the corporation the annuitant.',
        },
        {
          text: 'No. They must always be different people, and the owner must also be the beneficiary.',
          why: 'They do not have to be the same person, but most often they are. The owner is not required to be the beneficiary.',
        },
      ],
    ),
    question(
      'c5q26',
      'Who may own an annuity?',
      [
        {
          text: 'Only a natural person. A trust is allowed to be the annuitant instead.',
          why: 'A trust may own an annuity. The annuitant must be a natural person, so a trust cannot be the annuitant.',
        },
        {
          text: 'A person, or a corporation, trust, or other legal entity.',
          why: 'The owner is the purchaser and holds the rights, such as naming the beneficiary and surrendering the annuity. The annuitant must be a human being.',
          correct: true,
        },
        {
          text: 'Only the beneficiary. The purchaser cannot hold contract rights.',
          why: 'The owner is the purchaser and has all of the rights. The beneficiary may receive assets or the balance of benefits, but those interests are not ownership.',
        },
        {
          text: 'Only the life insurance company that markets the contract.',
          why: 'Life insurance companies market annuities. The owner is the purchaser, and that purchaser may be a person or a legal entity.',
        },
      ],
    ),
    question(
      'c5q27',
      'Who receives the annuity payments, and whose life expectancy is used?',
      [
        {
          text: 'The beneficiary, and the annuity is written so it can pay a face amount.',
          why: 'An annuity does not pay a face amount. The annuitant receives the payments, that life expectancy is used, and the annuity is written for that person.',
        },
        {
          text: 'The owner in every case, including when the owner is a corporation.',
          why: 'The owner is not necessarily the person who receives the benefits. A corporation may own the contract, but the annuitant must be a natural person.',
        },
        {
          text: 'The annuitant. The annuity is written for that person, and that life expectancy is taken into consideration.',
          why: 'The annuitant and the owner do not have to be the same person, but most often they are. The annuitant must be a natural person.',
          correct: true,
        },
        {
          text: 'The IRS, because a qualified plan uses the life expectancy of that agency.',
          why: 'The IRS collects taxes and enforces the Internal Revenue Code. The life expectancy used is the life expectancy of the annuitant.',
        },
      ],
    ),
    question(
      'c5q28',
      'Which party receives the balance of annuity benefits that is paid out?',
      [
        {
          text: 'The owner, but only when the owner is a trust.',
          why: 'A trust may own the annuity and holds the contract rights. The beneficiary receives the balance of annuity benefits that is paid out.',
        },
        {
          text: 'The life insurance company, because payments stop at death in most cases.',
          why: 'In most cases the payments stop at the death of the annuitant. When a balance of benefits is paid out, the beneficiary receives it.',
        },
        {
          text: 'The annuitant, because the annuitant must be a natural person.',
          why: 'The annuitant receives the payments while they are payable to that person. The balance of benefits that is paid out goes to the beneficiary.',
        },
        {
          text: 'The beneficiary.',
          why: 'The beneficiary receives that balance. If the annuitant dies during the accumulation period, the beneficiary receives the amount paid into the annuity or the cash value, whichever is greater.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q29',
      'What is a qualified plan?',
      [
        {
          text: 'A retirement plan that meets IRS guidelines for favorable tax treatment.',
          why: 'The IRS is the U.S. government agency that collects taxes and enforces the Internal Revenue Code. Meeting those guidelines is what makes the plan qualified.',
          correct: true,
        },
        {
          text: 'Any annuity that a corporation owns.',
          why: 'A corporation may own an annuity, but that form of ownership is not the definition of a qualified plan.',
        },
        {
          text: 'A contract that pays a face amount at the death of the annuitant.',
          why: 'An annuity does not pay a face amount at death. A qualified plan is a retirement plan with favorable tax treatment under IRS guidelines.',
        },
        {
          text: 'A requirement that the product be appropriate for a particular customer.',
          why: 'That requirement is suitability. A qualified plan is a retirement plan that meets IRS guidelines.',
        },
      ],
    ),
    question(
      'c5q30',
      'What is suitability?',
      [
        {
          text: 'The right of the owner to name the beneficiary and surrender the annuity.',
          why: 'Those are contract rights of the owner. Suitability is a requirement to determine whether a product or investment is appropriate for a particular customer.',
        },
        {
          text: 'A requirement to determine if an insurance product or an investment is appropriate for a particular customer.',
          why: 'The chapter defines suitability that way. It is separate from the rights of the owner and from the definition of a qualified plan.',
          correct: true,
        },
        {
          text: 'The rule that the annuitant and the owner must be different people.',
          why: 'The annuitant and the owner do not have to be the same person, but most often they are. Suitability asks whether the product fits the customer.',
        },
        {
          text: 'Converting net worth into a cash flow.',
          why: 'That is liquidation of an estate. Suitability is the requirement to judge whether a product or investment is appropriate for a particular customer.',
        },
      ],
    ),
  ],
  'c5-periods': [
    question(
      'c5q31',
      'What is another name for the accumulation period?',
      [
        {
          text: 'The annuitization period.',
          why: 'The annuitization period is another name for the annuity period, when the accumulated sum is converted into income.',
        },
        {
          text: 'The liquidation period.',
          why: 'Liquidation period is another name for the annuity, or pay-out, period. It is not the pay-in period.',
        },
        {
          text: 'The pay-in period.',
          why: 'During the accumulation period the owner makes premium payments into the annuity, and those payments earn interest on a tax-deferred basis.',
          correct: true,
        },
        {
          text: 'The annuitization date.',
          why: 'The annuitization date is when benefit payouts begin. The accumulation period is the earlier time during which premiums are paid in.',
        },
      ],
    ),
    question(
      'c5q32',
      'Which names refer to the annuity period?',
      [
        {
          text: 'Pay-in period only.',
          why: 'Pay-in period is the accumulation period, when the owner pays premiums. The annuity period is the pay-out period.',
        },
        {
          text: 'The time before any premium is paid.',
          why: 'Premiums are paid during the accumulation period. The annuity period is when the accumulated sum is converted into income.',
        },
        {
          text: 'Only the annuitization date.',
          why: 'The annuitization date is the moment payouts begin. The annuity period is the span of time during which income is paid.',
        },
        {
          text: 'Annuitization period, liquidation period, and pay-out period.',
          why: 'Those are the other names for the annuity period. During it, the sum that accumulated is converted into a stream of income payments to the annuitant.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q33',
      'What is converted into a stream of income during the annuity period?',
      [
        {
          text: 'The sum that accumulated during the pay-in period.',
          why: 'The annuity period turns that sum into income payments to the annuitant. It may last for the lifetime of the annuitant or for a specified period.',
          correct: true,
        },
        {
          text: 'A face amount, as if the contract were life insurance.',
          why: 'Annuities are not life insurance, and they do not pay a face amount when the annuitant dies.',
        },
        {
          text: 'New premiums, because the pay-out period is the same as the pay-in period.',
          why: 'Paying premiums is the accumulation period. The annuity period converts the sum already accumulated into income.',
        },
        {
          text: 'Interest that is taxed each year as it is credited.',
          why: 'Interest during the accumulation period is earned on a tax-deferred basis. The annuity period converts the accumulated sum into income.',
        },
      ],
    ),
    question(
      'c5q34',
      'How long may the annuity period last?',
      [
        {
          text: 'Only until the first premium is paid.',
          why: 'Paying premiums is the accumulation, or pay-in, period. The annuity period is the income period after that sum has accumulated.',
        },
        {
          text: 'For the lifetime of the annuitant, or for a specified period that could be longer or shorter.',
          why: 'The annuity period is also called the annuitization, liquidation, or pay-out period. The annuitization date is when those payouts begin.',
          correct: true,
        },
        {
          text: 'Until the contract pays a face amount at death.',
          why: 'An annuity does not pay a face amount when the annuitant dies. In most cases the payment phase stops at death.',
        },
        {
          text: 'Only for as long as interest is taxed each year.',
          why: 'Interest during the accumulation period is earned on a tax-deferred basis. The annuity period lasts for a lifetime or for a specified period.',
        },
      ],
    ),
    question(
      'c5q35',
      'What is the annuitization date?',
      [
        {
          text: 'The day the owner pays the first premium into the annuity.',
          why: 'Premiums go in during the accumulation period. The annuitization date is when the benefit payouts begin.',
        },
        {
          text: 'The date a deferred annuity must be surrendered.',
          why: 'The annuitization date triggers benefit payouts. It is not a required surrender date.',
        },
        {
          text: 'The date when the benefit payouts begin. It is the trigger for benefits.',
          why: 'On that date the accumulated sum starts to be paid as income. The annuity period may then last for life or for a specified period.',
          correct: true,
        },
        {
          text: 'The date interest is taxed as it is credited.',
          why: 'Interest during accumulation is tax-deferred, and a deferred annuity grows tax-deferred. The annuitization date is when payouts begin, not when interest becomes taxable.',
        },
      ],
    ),
    question(
      'c5q36',
      'How does a deferred annuity grow during the accumulation period?',
      [
        {
          text: 'The interest is taxed each year as it is credited.',
          why: 'Payments earn interest on a tax-deferred basis. A deferred annuity grows tax-deferred.',
        },
        {
          text: 'It pays a face amount that increases with each premium.',
          why: 'Annuities do not pay a face amount when the annuitant dies. Growth during accumulation is tax-deferred interest on the payments.',
        },
        {
          text: 'The growth is forfeited if the annuitant is living when payouts begin.',
          why: 'The accumulated sum is converted into income when the annuity period starts. Survival to that date does not forfeit the growth.',
        },
        {
          text: 'It grows tax-deferred.',
          why: 'During the accumulation period the payments earn interest on a tax-deferred basis. That is how a deferred annuity grows.',
          correct: true,
        },
      ],
    ),
  ],
  'c5-funding': [
    question(
      'c5q37',
      'How are annuities classified?',
      [
        {
          text: 'By how premiums are paid in, how premiums are invested, and when and how benefits are paid out.',
          why: 'Those are the three classifications in this section. Funding itself is either a single premium or periodic payments.',
          correct: true,
        },
        {
          text: 'Only by whether the owner is a corporation, trust, or other legal entity.',
          why: 'Who may own the contract is a separate point. Classification uses funding, investment, and the timing and method of benefits.',
        },
        {
          text: 'By the face amount paid at the death of the annuitant.',
          why: 'An annuity does not pay a face amount at death. Classification looks at premiums, investments, and benefits.',
        },
        {
          text: 'Only by whether the payout is joint life or joint and survivor.',
          why: 'Those are payout choices for two or more lives. Classification also covers how premiums are paid in and how they are invested.',
        },
      ],
    ),
    question(
      'c5q38',
      'What are the two ways an annuity can be funded?',
      [
        {
          text: 'Level premium only, or flexible premium only.',
          why: 'Level premium and flexible premium are the two kinds of periodic payments. The broader funding choice is a single premium or periodic payments over time.',
        },
        {
          text: 'A single premium, meaning one lump-sum payment, or periodic payments in installments over time.',
          why: 'Periodic payments are then either a level premium, a fixed installment, or a flexible premium, in which the amount and frequency of each installment vary.',
          correct: true,
        },
        {
          text: 'Only by income that starts within 1 month, or only by a 20-year period certain.',
          why: 'A first payment as early as 1 month is an immediate annuity, and 20 years is a period-certain example. Funding is the single-premium or periodic-payment choice.',
        },
        {
          text: 'By placing money in the general account, or by leaving the premium uninvested.',
          why: 'Fixed annuity premiums go into the general account and are invested. Funding is how the premium is paid in: one lump sum or installments over time.',
        },
      ],
    ),
    question(
      'c5q39',
      'What is true of an immediate annuity?',
      [
        {
          text: 'Income must wait until sometime after one year, and the premiums may be periodic.',
          why: 'Income that begins after one year is a deferred annuity. An immediate annuity is bought with one lump sum and starts income within one year.',
        },
        {
          text: 'It is funded only with flexible premiums that vary from year to year.',
          why: 'Flexible periodic premiums describe a flexible premium deferred annuity. An immediate annuity uses a single lump-sum payment.',
        },
        {
          text: 'It is purchased with a single lump-sum payment, and income starts within one year from the date of purchase.',
          why: 'The first payment is typically as early as 1 month from the purchase date. This contract is most commonly a single premium immediate annuity.',
          correct: true,
        },
        {
          text: 'It cannot accept a lump sum, so income cannot start until a level premium has been paid for life.',
          why: 'An immediate annuity is purchased with one lump-sum payment. A level premium is a fixed installment used for periodic funding.',
        },
      ],
    ),
    question(
      'c5q40',
      'When is the first payment of an immediate annuity typically made?',
      [
        {
          text: 'Sometime after one year from the date of purchase.',
          why: 'Income that begins after one year is deferred. The first payment of an immediate annuity is typically as early as 1 month from the purchase date.',
        },
        {
          text: 'Only after the annuitant dies.',
          why: 'An immediate annuity provides income that starts within one year of purchase. An annuity does not wait to pay a face amount at death.',
        },
        {
          text: 'After a flexible premium deferred annuity has accepted periodic payments for more than one year.',
          why: 'An FPDA is deferred, so income begins sometime after one year. The immediate annuity payment is typically as early as 1 month from purchase.',
        },
        {
          text: 'As early as 1 month from the purchase date.',
          why: 'An immediate annuity is bought with a single lump sum and starts income within one year. It is most commonly a single premium immediate annuity.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q41',
      'What is an SPDA, and how is it funded?',
      [
        {
          text: 'A single premium deferred annuity, funded with one lump sum, with income beginning sometime after one year from purchase.',
          why: 'A deferred annuity can also be funded with periodic payments as a flexible premium deferred annuity. Income within one year of a lump sum is a single premium immediate annuity.',
          correct: true,
        },
        {
          text: 'A single premium immediate annuity, whose first payment is typically as early as 1 month.',
          why: 'That immediate contract is a SPIA. SPDA means single premium deferred annuity, and its income waits until sometime after one year.',
        },
        {
          text: 'A level premium contract, because the installment can never change.',
          why: 'A level premium is a fixed installment. SPDA means single premium deferred annuity, which is one lump sum rather than a series of installments.',
        },
        {
          text: 'A variable annuity funded in the separate account.',
          why: 'The separate account is where variable annuity premiums are invested. SPDA means single premium deferred annuity.',
        },
      ],
    ),
    question(
      'c5q42',
      'What is an FPDA?',
      [
        {
          text: 'A fixed-period annuity that pays only while the annuitant is living.',
          why: 'Fixed period is an annuity certain and pays whether or not the annuitant is living. FPDA means flexible premium deferred annuity.',
        },
        {
          text: 'A flexible premium deferred annuity, funded with periodic payments, with income beginning sometime after one year.',
          why: 'Those periodic payments can vary from year to year. A single lump-sum deferred contract is an SPDA instead.',
          correct: true,
        },
        {
          text: 'A single premium immediate annuity with the first payment as early as 1 month.',
          why: 'That describes a SPIA. An FPDA is deferred and uses periodic payments that can vary.',
        },
        {
          text: 'A market value adjusted annuity that locks a rate for 3 to 10 years.',
          why: 'A market value adjusted annuity is a single-premium deferred annuity with a rate locked for 3 to 10 years. FPDA refers to flexible premium funding of a deferred annuity.',
        },
      ],
    ),
    question(
      'c5q43',
      'What does a longer deferral allow for the payment of premiums?',
      [
        {
          text: 'It removes the right to pay a single premium.',
          why: 'A deferred annuity can still be funded with a single lump sum, an SPDA. Longer deferral adds flexibility for paying premiums.',
        },
        {
          text: 'It forces every installment to stay the same amount.',
          why: 'A fixed installment is a level premium. Longer deferral allows more flexibility, and periodic payments can vary from year to year.',
        },
        {
          text: 'More flexibility for the payment of premiums.',
          why: 'The longer the annuity is deferred, the more flexibility it allows for payment of premiums. Periodic payments on a deferred annuity can vary from year to year.',
          correct: true,
        },
        {
          text: 'It requires the first income payment within 1 month.',
          why: 'A first payment as early as 1 month belongs to an immediate annuity bought with a lump sum. Deferral postpones income until after one year.',
        },
      ],
    ),
  ],
  'c5-surrender': [
    question(
      'c5q44',
      'What does the nonforfeiture law require of a deferred annuity?',
      [
        {
          text: 'A face amount if the owner surrenders before annuitization.',
          why: 'An annuity does not pay a face amount. The nonforfeiture law requires a guaranteed surrender value if the owner surrenders before annuitization.',
        },
        {
          text: 'Surrender charges that rise each year until the contract ends.',
          why: 'A surrender charge is generally a percentage that reduces over time. The nonforfeiture requirement is a guaranteed surrender value.',
        },
        {
          text: 'Forfeiture of all premiums if surrender occurs before annuitization.',
          why: 'The law requires a guaranteed surrender value instead. An example is 100% of the premiums paid, less prior withdrawals and related surrender charges.',
        },
        {
          text: 'A guaranteed surrender value if the owner surrenders before annuitization.',
          why: 'One example is 100% of the premiums paid, less any prior withdrawals and related surrender charges. The owner is not left with nothing.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q45',
      'Which amount is the nonforfeiture example of a guaranteed surrender value?',
      [
        {
          text: '100% of the premiums paid, less any prior withdrawals and related surrender charges.',
          why: 'That is the example given for the guaranteed surrender value a deferred annuity must provide if surrendered before annuitization.',
          correct: true,
        },
        {
          text: '100% of the premiums paid, with prior withdrawals added and surrender charges ignored.',
          why: 'The example subtracts prior withdrawals and related surrender charges. It does not add withdrawals or ignore the charges.',
        },
        {
          text: 'Only the interest, because the premiums stay with the insurer.',
          why: 'The example starts with 100% of the premiums paid and then subtracts prior withdrawals and related surrender charges.',
        },
        {
          text: 'The 7% first-year surrender charge, paid to the owner as the full value.',
          why: '7% is the first year of a common surrender-charge schedule. The nonforfeiture example is 100% of premiums paid, less withdrawals and related charges.',
        },
      ],
    ),
    question(
      'c5q46',
      'What penalty applies to early withdrawals prior to age 59½?',
      [
        {
          text: 'The first-year surrender charge of 7%, kept in force for the life of the contract.',
          why: '7% is the first year of a common surrender-charge schedule that then declines. The penalty on early withdrawals before age 59½ is 10%.',
        },
        {
          text: 'A 10% penalty.',
          why: 'That penalty applies to early withdrawals prior to age 59½. It is separate from the surrender charge levied against the cash value.',
          correct: true,
        },
        {
          text: 'No penalty of any kind.',
          why: 'A 10% penalty applies prior to age 59½. A different rule waives surrender charges after at least 30 days in a long-term care facility.',
        },
        {
          text: 'The same waiver that follows 30 days in a long-term care facility.',
          why: 'Confinement of at least 30 days can waive surrender charges. That waiver is not the 10% penalty on withdrawals before age 59½.',
        },
      ],
    ),
    question(
      'c5q47',
      'What is the purpose of a surrender charge on a deferred annuity?',
      [
        {
          text: 'To fund a face amount for the beneficiary.',
          why: 'An annuity does not pay a face amount. A surrender charge helps compensate the company for lost investment value on an early surrender.',
        },
        {
          text: 'To raise the guaranteed minimum interest rate.',
          why: 'The charge does not increase the interest guarantee. It compensates the company for the loss of investment value from an early surrender.',
        },
        {
          text: 'To help compensate the company for the loss of investment value from an early surrender.',
          why: 'The charge is levied against the cash value. It is generally a percentage that reduces over time.',
          correct: true,
        },
        {
          text: 'To stop income after the contract has already been annuitized.',
          why: 'The charge addresses an early surrender of a deferred annuity. At surrender the owner receives premium plus interest, minus the charge.',
        },
      ],
    ),
    question(
      'c5q48',
      'What is a common surrender-charge schedule?',
      [
        {
          text: '1% in the first year, followed by a higher charge each later year.',
          why: 'The common schedule starts at 7% and declines through 6%, 5%, 4%, 3%, 2%, 1%, and 0%. It does not start at 1% and rise.',
        },
        {
          text: 'A flat 10% that replaces any declining schedule.',
          why: '10% is the penalty on early withdrawals before age 59½. The common surrender-charge schedule declines from 7% to 0%.',
        },
        {
          text: '0% in the first year and 7% in the 8th year.',
          why: 'The common schedule is 7% the first year. Surrender in the 8th year or after carries no further surrender charge.',
        },
        {
          text: '7% the first year, then 6%, 5%, 4%, 3%, 2%, 1%, and 0%.',
          why: 'The charge is a percentage that reduces over time. Surrendered in the 8th year or after, there is no further surrender charge.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q49',
      'If a deferred annuity is surrendered in the 8th year or after, what further surrender charge applies under the common schedule?',
      [
        {
          text: 'No further surrender charge.',
          why: 'The common schedule has declined from 7% to 0% by then. The owner still receives premium plus interest, minus any surrender charge that still applies, and here none remains.',
          correct: true,
        },
        {
          text: 'The first-year charge of 7% is collected again.',
          why: '7% is the first-year charge. In the 8th year or after, the common schedule leaves no further surrender charge.',
        },
        {
          text: 'A 10% charge is added because the contract reached the 8th year.',
          why: 'The 10% penalty applies to early withdrawals before age 59½, not to reaching the 8th year. Under the common schedule there is no further surrender charge in the 8th year or after.',
        },
        {
          text: 'The owner gives up the interest and recovers only the charge.',
          why: 'The owner receives premium plus interest, minus the surrender charge. In the 8th year or after there is no further surrender charge.',
        },
      ],
    ),
    question(
      'c5q50',
      'What does the owner receive when a deferred annuity is surrendered?',
      [
        {
          text: 'The surrender charge by itself.',
          why: 'The surrender charge is subtracted. The owner receives the premium plus interest, minus that charge.',
        },
        {
          text: 'The premium plus interest, minus the surrender charge.',
          why: 'In the course example the premium is $700, interest is $35, and the charge is $70. The value at surrender is $665.',
          correct: true,
        },
        {
          text: 'The premium only, because the interest is forfeited.',
          why: 'Interest is included. The surrender amount is premium plus interest, minus the surrender charge.',
        },
        {
          text: 'The premium, the interest, and the surrender charge added together.',
          why: 'The charge is deducted, not added. The example subtracts the $70 charge from $700 plus $35.',
        },
      ],
    ),
    question(
      'c5q51',
      'When do annuity contracts waive surrender charges because of long-term care?',
      [
        {
          text: 'After the owner has held the contract into the 8th year.',
          why: 'The 8th year is when the common surrender-charge schedule reaches zero. The long-term care waiver applies after confinement of at least 30 days.',
        },
        {
          text: 'When interest rates drop a specified amount within a specified time frame.',
          why: 'Surrender without charge in that rate drop is a bail-out provision. The long-term care waiver depends on confinement of at least 30 days.',
        },
        {
          text: 'If the annuitant is confined to a long-term care facility for at least 30 days.',
          why: 'The waiver removes the surrender charge in that situation. It is separate from the 10% penalty on withdrawals before age 59½.',
          correct: true,
        },
        {
          text: 'Whenever the owner names a beneficiary.',
          why: 'Naming a beneficiary is a right of the owner. Surrender charges are waived after long-term care confinement of at least 30 days.',
        },
      ],
    ),
    question(
      'c5q52',
      'What does a bail-out provision allow?',
      [
        {
          text: 'The beneficiary to collect a face amount if interest rates rise.',
          why: 'An annuity does not pay a face amount. A bail-out lets the contract holder surrender without charge if interest rates drop a specified amount within a specified time frame.',
        },
        {
          text: 'The insurer to increase the surrender charge when rates fall.',
          why: 'The bail-out removes the charge when rates drop a specified amount within a specified time. It does not increase the charge.',
        },
        {
          text: 'Waiver of surrender charges after at least 30 days in a long-term care facility.',
          why: 'That 30-day confinement waives surrender charges. A bail-out is the rate-drop right, not the long-term care waiver.',
        },
        {
          text: 'The contract holder to surrender without charge if interest rates drop a specified amount within a specified time frame.',
          why: 'Some contracts include that provision. It is different from the declining surrender-charge schedule and from the 30-day long-term care waiver.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q53',
      'Against what is the surrender charge levied?',
      [
        {
          text: 'The cash value.',
          why: 'The charge helps compensate the company for the loss of investment value from an early surrender. The owner then receives premium plus interest, minus the charge.',
          correct: true,
        },
        {
          text: 'A face amount.',
          why: 'An annuity does not pay a face amount. The surrender charge is levied against the cash value.',
        },
        {
          text: 'The estate, on every death during the accumulation period.',
          why: 'If no beneficiary is named, the death benefit, the greater of the cash value and the premiums paid, goes to the estate. The surrender charge is levied against the cash value.',
        },
        {
          text: 'The long-term care facility.',
          why: 'Confinement in a long-term care facility for at least 30 days can waive the surrender charge. The charge itself is levied against the cash value.',
        },
      ],
    ),
  ],
  'c5-life': [
    question(
      'c5q54',
      'What do annuity payment options specify?',
      [
        {
          text: 'How the contract qualifies for favorable tax treatment with the IRS.',
          why: 'A qualified plan meets IRS guidelines for favorable tax treatment. Payment options specify how the funds are paid out.',
        },
        {
          text: 'How the funds are paid out.',
          why: 'Those options are very similar to the settlement options in life insurance. A life annuity pays a specific amount for the rest of the life of the annuitant.',
          correct: true,
        },
        {
          text: 'The securities registration required before any fixed annuity can be sold.',
          why: 'A securities license and FINRA registration apply to variable annuity sales, while a fixed annuity uses a life insurance license. Payment options specify the payout, not the license.',
        },
        {
          text: 'The first-year surrender charge of 7%.',
          why: 'A common surrender charge starts at 7% and declines. Payment options specify how funds are paid out.',
        },
      ],
    ),
    question(
      'c5q55',
      'What does a life annuity pay?',
      [
        {
          text: 'A lump sum equal to a face amount on the annuitization date.',
          why: 'An annuity does not pay a face amount. A life annuity pays a specific amount for the rest of the life of the annuitant.',
        },
        {
          text: 'Income for a fixed period only, whether or not the annuitant is living.',
          why: 'A payment limited to a fixed period, whether or not the annuitant is living, is an annuity certain. A life annuity pays for the rest of the life of the annuitant.',
        },
        {
          text: 'A specific amount for the rest of the life of the annuitant.',
          why: 'Pure life, refund life, and life with period certain are forms of that lifetime payment. Pure life stops at death and does not promise that all proceeds will be paid out.',
          correct: true,
        },
        {
          text: 'Installments to two or more lives that stop at the first death.',
          why: 'Payments to two or more lives that stop at the first death are joint life. A life annuity pays a specific amount for the rest of the life of the annuitant.',
        },
      ],
    ),
    question(
      'c5q56',
      'What is another name for pure life?',
      [
        {
          text: 'Cash refund or installment refund.',
          why: 'Those are the two refund life annuities. Pure life is also called life-only or straight life.',
        },
        {
          text: 'Joint and survivor.',
          why: 'Joint and survivor covers two recipients. Pure life is life-only or straight life and follows one annuitant.',
        },
        {
          text: 'Fixed amount.',
          why: 'Fixed amount is an annuity certain that pays until the funds are exhausted, whether or not the annuitant is living. Pure life is also called life-only or straight life.',
        },
        {
          text: 'Life-only or straight life.',
          why: 'Pure life stops at the death of the annuitant no matter how soon that happens in the annuitization period. It provides the highest monthly benefit for an individual annuitant.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q57',
      'Pure life guarantees payments for life. What happens to those payments when the annuitant dies?',
      [
        {
          text: 'At the death of the annuitant, no matter how soon that happens in the annuitization period.',
          why: 'Payments are guaranteed for life, but there is no guarantee that all of the proceeds will be paid out. This option is also called life-only or straight life.',
          correct: true,
        },
        {
          text: 'Only after the entire principal has been paid to a beneficiary.',
          why: 'A promise that the entire principal will be paid is refund life, also called life with guaranteed minimum. Pure life can stop before all proceeds are paid out.',
        },
        {
          text: 'After 20 years, even if the annuitant is still living.',
          why: 'A 20-year guarantee is life income with a 20-year period certain. Pure life has no period certain and stops at death.',
        },
        {
          text: 'At the first death among two or more annuitants.',
          why: 'Stopping at the first death among two or more annuitants is joint life. Pure life follows one life.',
        },
      ],
    ),
    question(
      'c5q58',
      'What is life with guaranteed minimum also called, and what does it promise about principal?',
      [
        {
          text: 'Term certain. Only 20 years are paid, and unpaid principal is forfeited.',
          why: 'Term certain is another name for life with period certain. Life with guaranteed minimum is refund life, and the entire principal will be paid.',
        },
        {
          text: 'Refund life. The entire principal will be paid.',
          why: 'If the annuitant dies before the principal has been paid out, the remainder goes to the beneficiary. Cash refund and installment refund are the two forms.',
          correct: true,
        },
        {
          text: 'Straight life. Nothing further is paid after the annuitant dies.',
          why: 'Straight life is pure life, which stops at death without promising that all proceeds will be paid out. Refund life promises that the entire principal will be paid.',
        },
        {
          text: 'Joint life. Payments stop at the first death and the insurer keeps the principal.',
          why: 'Joint life stops at the first death among two or more annuitants. Refund life pays the remainder so the entire principal is paid.',
        },
      ],
    ),
    question(
      'c5q59',
      'What does the cash refund option pay the beneficiary?',
      [
        {
          text: 'Guaranteed installments until both principal and interest are paid.',
          why: 'Continuing installments until the principal is paid is the installment refund. Cash refund is a lump sum, and it does not guarantee to pay any interest.',
        },
        {
          text: 'A new lifetime income measured by the life of the beneficiary.',
          why: 'Income measured by one life is a single life annuity. Cash refund pays a lump sum of remaining principal.',
        },
        {
          text: 'A lump-sum refund of the principal minus benefit payments already made.',
          why: 'This option does not guarantee to pay any interest. It is one of the two refund life annuities, so the entire principal is paid.',
          correct: true,
        },
        {
          text: 'Nothing further, the same result as pure life.',
          why: 'Stopping with nothing further paid is pure life. Cash refund pays the beneficiary the remaining principal in a lump sum.',
        },
      ],
    ),
    question(
      'c5q60',
      'How are unpaid annuity benefits taxed when they are paid to a beneficiary after the annuitant dies?',
      [
        {
          text: 'They are free of tax because a refund life option was chosen.',
          why: 'Any unpaid annuity benefits paid to a beneficiary after the death of the annuitant are taxable when paid. A refund option does not remove that tax.',
        },
        {
          text: 'They were already taxed each year during the accumulation period.',
          why: 'Interest during accumulation on a deferred annuity is tax-deferred. Unpaid benefits paid after the death of the annuitant are taxable when paid.',
        },
        {
          text: 'They are taxed only when the beneficiary is a corporation.',
          why: 'A corporation may own an annuity, but the annuitant must be a natural person. Unpaid benefits paid to a beneficiary are taxable when paid, without that corporate limit.',
        },
        {
          text: 'They are taxable when paid.',
          why: 'The rule covers any unpaid annuity benefits paid to a beneficiary after the death of the annuitant, including amounts still due under a refund or period-certain option.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q61',
      'What does life with period certain guarantee?',
      [
        {
          text: 'Payments for the lifetime of the annuitant and for a specified period for the beneficiary.',
          why: 'This option is also called term certain. Under a 20-year period certain, death shortly after payments begin continues the payments to a beneficiary for the rest of the 20 years.',
          correct: true,
        },
        {
          text: 'A lump sum of remaining principal and no lifetime income.',
          why: 'A lump sum of remaining principal, with no guarantee of interest, is cash refund. Period certain keeps a lifetime income and adds a stated period.',
        },
        {
          text: 'That payments stop at the first death and the beneficiary receives nothing.',
          why: 'Stopping at the first death is joint life. Life with period certain continues payments to a beneficiary for the rest of the specified period.',
        },
        {
          text: 'Payments of a selected amount until funds are exhausted, with no lifetime promise.',
          why: 'That description is a fixed-amount annuity certain. Period certain is lifetime income plus a specified period for the beneficiary.',
        },
      ],
    ),
    question(
      'c5q62',
      'Under a life income with a 20-year period certain, what happens if the annuitant dies shortly after payments begin?',
      [
        {
          text: 'All payments stop, and the beneficiary has no further right.',
          why: 'Pure life stops at death. Life with a 20-year period certain continues payments to a beneficiary for the rest of the 20 years.',
        },
        {
          text: 'Payments continue to a beneficiary for the rest of the 20 years.',
          why: 'The annuitant was entitled to payments for life. Death shortly after payments begin does not cancel the remainder of the period certain.',
          correct: true,
        },
        {
          text: 'The beneficiary receives a lump sum of principal minus payments already made.',
          why: 'That lump sum is cash refund, and cash refund does not guarantee interest. The 20-year period certain continues the payments for the rest of the 20 years.',
        },
        {
          text: 'The insurer pays interest only and keeps the remaining principal.',
          why: 'Cash refund does not guarantee interest, and it refunds remaining principal. Under the 20-year period certain, the payments themselves continue.',
        },
      ],
    ),
    question(
      'c5q63',
      'What does a single life annuity cover?',
      [
        {
          text: 'Two or more lives, with payments stopping at the first death.',
          why: 'Two or more lives make a multiple life annuity, and joint life stops at the first death. Single life covers one life only.',
        },
        {
          text: 'Two people, with the survivor receiving one half of the earlier payment.',
          why: 'A survivor share of one half is joint and ½ survivor. Single life covers one life, and payments refer to that one life only.',
        },
        {
          text: 'One life, and payments are made with reference to that one life only.',
          why: 'Contributions can be a single premium or periodic premiums. Values accumulate until the contract is annuitized.',
          correct: true,
        },
        {
          text: 'A fixed period, whether or not anyone is alive.',
          why: 'A fixed period that pays whether or not the annuitant is living is an annuity certain. Single life refers to one life only.',
        },
      ],
    ),
    question(
      'c5q64',
      'What do multiple life annuities cover, and which forms are most common?',
      [
        {
          text: 'One life only, most commonly straight life.',
          why: 'One life is a single life annuity, and straight life is another name for pure life. Multiple life annuities cover two or more lives.',
        },
        {
          text: 'A 20-year period certain measured on one life.',
          why: 'A 20-year period certain is life with period certain. Multiple life annuities cover two or more lives.',
        },
        {
          text: 'A short-term fixed amount that continues until the funds are exhausted.',
          why: 'Fixed amount is an annuity certain. Multiple life annuities cover two or more lives, most commonly joint life and joint and survivor.',
        },
        {
          text: 'Two or more lives. The most common forms are joint life, and joint and survivor.',
          why: 'Single life annuities cover one life and make payments with reference to that life only. Values can accumulate from a single premium or from periodic premiums until annuitization.',
          correct: true,
        },
      ],
    ),
  ],
  'c5-joint': [
    question(
      'c5q65',
      'How many lives does a joint life payout cover?',
      [
        {
          text: 'Two or more.',
          why: 'Those annuitants receive payments until the first death among them, and then the payments stop. Joint and survivor is the form that continues for a survivor.',
          correct: true,
        },
        {
          text: 'One life only.',
          why: 'One life is a single life annuity. Joint life covers two or more annuitants and stops at the first death.',
        },
        {
          text: 'Only the survivor, after the first death has already occurred.',
          why: 'Payments that continue to a survivor are joint and survivor. Joint life pays two or more annuitants until the first death.',
        },
        {
          text: 'No lives. Payment depends on a fixed period rather than on people.',
          why: 'A fixed period that pays whether or not the annuitant is living is an annuity certain. Joint life covers two or more lives.',
        },
      ],
    ),
    question(
      'c5q66',
      'What does a joint and survivor annuity guarantee?',
      [
        {
          text: 'Payments that stop when the first recipient dies.',
          why: 'Payments that stop at the first death are joint life. Joint and survivor guarantees an income for two recipients that neither can outlive.',
        },
        {
          text: 'An income for two recipients that neither can outlive.',
          why: 'It is a modification of the life income option. The survivor may receive the same amount, but most contracts reduce the payment after the first death.',
          correct: true,
        },
        {
          text: 'A lump-sum refund of principal and no further income.',
          why: 'A lump sum of remaining principal is cash refund. Joint and survivor continues income so that neither recipient can outlive it.',
        },
        {
          text: 'Income that ends after 20 years even if both people are still alive.',
          why: 'A 20-year feature on a lifetime income is life with period certain. Joint and survivor follows two lives rather than ending at a fixed year.',
        },
      ],
    ),
    question(
      'c5q67',
      'After the first recipient dies, what do most joint and survivor contracts do to the payment?',
      [
        {
          text: 'They stop it, and the remaining principal is paid to the estate.',
          why: 'Stopping at the first death is joint life. Joint and survivor continues income to the survivor, and most contracts reduce that payment.',
        },
        {
          text: 'They increase it above the amount paid while both people were alive.',
          why: 'The survivor may receive the same amount, but most contracts reduce the payment. An increase is not the usual result.',
        },
        {
          text: 'They reduce it.',
          why: 'The option is most commonly written as joint and ½ survivor or joint and ⅔ survivor. The survivor receives ½ or ⅔ of what was paid while both were alive.',
          correct: true,
        },
        {
          text: 'They replace it with a fixed maturity of 3 to 10 years.',
          why: 'A maturity of 3 to 10 years is the rate-lock period of a market value adjusted annuity. Most joint and survivor contracts reduce the payment after the first death.',
        },
      ],
    ),
    question(
      'c5q68',
      'What does the survivor receive under a joint and ½ survivor option?',
      [
        {
          text: 'The full amount paid while both people were alive, under every contract of this form.',
          why: 'Some joint and survivor contracts can pay the survivor the same amount, but joint and ½ survivor pays one half. Most contracts reduce the payment after the first death.',
        },
        {
          text: 'Payments only for the rest of a 20-year period certain.',
          why: 'A 20-year continuation is life with period certain. Joint and ½ survivor pays the survivor ½ of the amount paid while both were alive.',
        },
        {
          text: 'Two thirds of the amount paid while both were alive.',
          why: 'Two thirds is the survivor share under joint and ⅔ survivor. Joint and ½ survivor pays one half.',
        },
        {
          text: 'One half of what was paid while both were alive.',
          why: 'Joint and ⅔ survivor pays the survivor ⅔ of the earlier amount. Couples in retirement commonly select a joint and survivor option.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q69',
      'Who commonly selects a joint and survivor annuity?',
      [
        {
          text: 'Couples in retirement.',
          why: 'The option guarantees an income for two recipients that neither can outlive. It is most commonly written as joint and ½ survivor or joint and ⅔ survivor.',
          correct: true,
        },
        {
          text: 'A corporation that wants to be the annuitant.',
          why: 'The annuitant must be a natural person. A corporation may own an annuity, but couples in retirement commonly select joint and survivor.',
        },
        {
          text: 'A single annuitant seeking the highest monthly benefit.',
          why: 'The highest monthly benefit for an individual annuitant is pure life. Couples in retirement commonly select joint and survivor.',
        },
        {
          text: 'An owner who wants payments to end at the first death.',
          why: 'Payments that end at the first death are joint life. Joint and survivor is the option couples in retirement commonly select.',
        },
      ],
    ),
    question(
      'c5q70',
      'If both recipients under a joint and survivor annuity die shortly after installments begin, must all the proceeds be paid out?',
      [
        {
          text: 'Yes. The estate receives remaining principal plus guaranteed interest.',
          why: 'Cash refund does not guarantee interest, and joint and survivor is not a cash refund. There is no guarantee that all the proceeds will be paid out if both die shortly after installments begin.',
        },
        {
          text: 'No. As with life income, there is no such guarantee.',
          why: 'The option still guarantees that neither recipient can outlive the income while one of them is living. Early death of both does not promise a full payout of the proceeds.',
          correct: true,
        },
        {
          text: 'Yes. The estate must receive ⅔ of the original principal.',
          why: '⅔ is the payment to a living survivor under a joint and ⅔ survivor option. It is not a required estate refund after both deaths.',
        },
        {
          text: 'Yes. The contract changes to pure life and pays the insurer.',
          why: 'Pure life pays the highest monthly benefit to an individual annuitant. It does not pay the insurer, and joint and survivor does not guarantee a full payout if both die soon.',
        },
      ],
    ),
  ],
  'c5-certain': [
    question(
      'c5q71',
      'What kind of annuities are annuities certain?',
      [
        {
          text: 'Lifetime annuities that pay the highest monthly benefit.',
          why: 'The highest monthly lifetime benefit for an individual is pure life. Annuities certain are short-term annuities.',
        },
        {
          text: 'Joint and survivor annuities used by couples in retirement.',
          why: 'Joint and survivor is a life income option for two recipients. Annuities certain are short-term annuities.',
        },
        {
          text: 'Short-term annuities.',
          why: 'Unlike life contingency options, they limit the amounts paid to a certain fixed period or until a certain fixed amount is liquidated.',
          correct: true,
        },
        {
          text: 'Variable annuities invested in the separate account.',
          why: 'The separate account is where variable annuity premiums are invested. Annuities certain describe a short-term payout, not that account.',
        },
      ],
    ),
    question(
      'c5q72',
      'How do annuities certain differ from life contingency options?',
      [
        {
          text: 'They pay only while the annuitant is alive and stop at death even if funds remain.',
          why: 'Stopping at death even if proceeds remain is pure life. Annuities certain pay for a fixed period or until a fixed amount is liquidated, whether or not the annuitant is living.',
        },
        {
          text: 'They guarantee that two people cannot outlive the income.',
          why: 'That guarantee is joint and survivor. Annuities certain limit payments to a fixed period or a fixed amount.',
        },
        {
          text: 'They pay a face amount if death occurs during the payout.',
          why: 'An annuity does not pay a face amount. Annuities certain limit the amounts paid to a certain fixed period or until a certain fixed amount is liquidated.',
        },
        {
          text: 'They limit the amounts paid to a certain fixed period or until a certain fixed amount is liquidated.',
          why: 'They are short-term annuities. A life contingency depends on whether or not the insured is alive, and annuities certain do not.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q73',
      'Under a fixed-period annuity certain, what does the annuitant select?',
      [
        {
          text: 'The time period for the benefits.',
          why: 'The insurer then determines how much each payment will be, based on the value of the account and future earnings projections. Payments last for that time whether or not the annuitant is living.',
          correct: true,
        },
        {
          text: 'The dollar amount of each payment.',
          why: 'Selecting the payment amount is the fixed-amount option. Under fixed period, the annuitant selects the time period and the insurer sets the payment.',
        },
        {
          text: 'A lifetime income plus a 20-year period certain.',
          why: 'Lifetime income plus a stated period is life with period certain. Fixed period pays for the selected time only.',
        },
        {
          text: 'The investments inside the separate account.',
          why: 'The separate account holds variable annuity investments. Under fixed period, the annuitant selects the time period for the benefits.',
        },
      ],
    ),
    question(
      'c5q74',
      'Which figures does the insurer use to calculate each fixed-period payment?',
      [
        {
          text: 'A life insurance mortality table, without using the account value.',
          why: 'Annuity mortality tables reflect a longer life expectancy than life insurance tables, and this payment is not set that way. The insurer uses the account value and future earnings projections.',
        },
        {
          text: 'The value of the account and future earnings projections.',
          why: 'The annuitant has already selected the time period. The insurer uses those two items to decide how much each payment will be.',
          correct: true,
        },
        {
          text: 'Only a guaranteed minimum of 3%, with the account value left out.',
          why: 'A guaranteed minimum, typically 3%, is a fixed annuity interest feature. The fixed-period payment is based on the account value and future earnings projections.',
        },
        {
          text: 'The surrender-charge schedule that starts at 7%.',
          why: '7% is a common first-year surrender charge. It is not the basis for the fixed-period installment.',
        },
      ],
    ),
    question(
      'c5q75',
      'Who chooses the payment size under a fixed-amount annuity certain, and who decides how long payments last?',
      [
        {
          text: 'The annuitant chooses the length, and the insurer chooses the payment size.',
          why: 'That split belongs to fixed period. Under fixed amount, the annuitant selects the payment and the insurer determines how long the funds will last.',
        },
        {
          text: 'Both choices belong to a joint and ½ survivor option.',
          why: 'Joint and ½ survivor is a two-life income option. Under fixed amount, the annuitant selects the payment size and the insurer sets the length.',
        },
        {
          text: 'The annuitant selects how much each payment will be, and the insurer determines how long benefits are paid.',
          why: 'The insurer analyzes the value of the account and future earnings to set that length. Payments continue until the funds are exhausted, whether or not the annuitant is living.',
          correct: true,
        },
        {
          text: 'The insurer selects both the size and the length, using only the guaranteed minimum rate.',
          why: 'The guaranteed minimum on a fixed annuity is typically 3%, but that rate does not assign these choices. The annuitant selects the payment, and the insurer sets the length from the account value and future earnings.',
        },
      ],
    ),
    question(
      'c5q76',
      'When do fixed-amount annuity certain payments stop?',
      [
        {
          text: 'At the death of the annuitant, even if funds remain.',
          why: 'Stopping at death even if proceeds remain describes pure life. Fixed amount pays until the funds are exhausted, whether or not the annuitant is living.',
        },
        {
          text: 'At the first death among two or more annuitants.',
          why: 'That stopping point is joint life. Fixed amount pays a specific amount until the funds are exhausted, whether or not the annuitant is living.',
        },
        {
          text: 'At the end of a time period the annuitant selected, even if money remains.',
          why: 'Paying for a selected time only is fixed period. Fixed amount continues until the funds are exhausted, and the insurer determines the length.',
        },
        {
          text: 'When the funds are exhausted.',
          why: 'The option pays a specific amount until the funds are exhausted, whether or not the annuitant is living. The insurer figures the length from the account value and future earnings.',
          correct: true,
        },
      ],
    ),
  ],
  'c5-fixed': [
    question(
      'c5q77',
      'What decides whether an annuity is fixed or variable?',
      [
        {
          text: 'How the premium payments are invested.',
          why: 'A fixed annuity credits a guaranteed minimum rate and uses the general account. A variable annuity uses the separate account and does not guarantee a minimum interest rate.',
          correct: true,
        },
        {
          text: 'Whether the annuitant is a natural person.',
          why: 'The annuitant must be a natural person. Fixed versus variable depends on how the premiums are invested.',
        },
        {
          text: 'Whether income starts within one year or after one year.',
          why: 'That timing is the immediate-versus-deferred classification. Fixed versus variable depends on how the premiums are invested.',
        },
        {
          text: 'Whether the payout is joint life or joint and survivor.',
          why: 'Those are multiple-life payout options. Fixed versus variable depends on how the premiums are invested.',
        },
      ],
    ),
    question(
      'c5q78',
      'What interest promise does a fixed annuity make on the purchase payments?',
      [
        {
          text: 'No minimum. The rate can disappear if a separate account falls.',
          why: 'No guaranteed minimum interest rate, and the separate account, describe a variable annuity. A fixed annuity credits a guaranteed minimum rate to the purchase payments.',
        },
        {
          text: 'A guaranteed minimum rate of interest.',
          why: 'Income payments do not vary from one payment to the next. The insurer guarantees the specified dollar amount of each payment and the length of the period set by the settlement option.',
          correct: true,
        },
        {
          text: 'A credit equal to the full yearly change in an equity index.',
          why: 'An indexed annuity often ties the credited rate to an index, and the insurer generally keeps the initial return. A fixed annuity promises a guaranteed minimum rate.',
        },
        {
          text: 'A promise that every contract credits 12%.',
          why: '12% is the interest earned in the indexed-annuity example, not a guarantee on every fixed contract. The typical guaranteed minimum is 3%.',
        },
      ],
    ),
    question(
      'c5q79',
      'During the annuity period of a fixed annuity, what does the annuitant know about each payment?',
      [
        {
          text: 'That each payment will change with the value of an annuity unit.',
          why: 'Fluctuating annuity-unit values describe a variable annuity. In a fixed annuity the annuitant knows the exact amount of each payment.',
        },
        {
          text: 'That the dollar payment rises whenever inflation rises.',
          why: 'Inflation may erode the purchasing power of the fixed payments. The dollar amount does not vary from one payment to the next.',
        },
        {
          text: 'The exact amount of each payment.',
          why: 'That known amount is a level benefit payment amount. The insurer guarantees the dollar amount and the length of the period chosen in the settlement option.',
          correct: true,
        },
        {
          text: 'Only the surrender charge, not the income amount.',
          why: 'A surrender charge is levied against cash value on an early surrender. During the fixed annuity period, the annuitant knows the exact amount of each payment.',
        },
      ],
    ),
    question(
      'c5q80',
      'What is a disadvantage of the level payments from a fixed annuity?',
      [
        {
          text: 'The insurer may credit less than the guaranteed minimum if bonds fall in value.',
          why: 'The rate may not drop below the guaranteed minimum, typically 3%. If rates drop below that guarantee, the insurer must still pay the guaranteed rate.',
        },
        {
          text: 'The annuitant bears the investment risk of the general account.',
          why: 'In a fixed annuity the insurer bears the investment risk. Premiums go into the general account, which is mostly conservative investments such as bonds.',
        },
        {
          text: 'The dollar guarantee ends as soon as payments begin.',
          why: 'The insurer guarantees the dollar amount of each payment and the length of the payment period. The disadvantage is what those fixed dollars will buy later.',
        },
        {
          text: 'Inflation may erode the purchasing power of those payments over time.',
          why: 'The payments do not vary from one payment to the next, and the annuitant knows the exact amount. That fixed amount may buy less as time passes.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q81',
      'What kinds of investments make up most of the general account?',
      [
        {
          text: 'Conservative investments such as bonds.',
          why: 'Fixed annuity premiums go into that account. Those investments are secure enough for the company to guarantee a specified rate of interest and the future income payments.',
          correct: true,
        },
        {
          text: 'Equities held in the separate account, with no guarantee.',
          why: 'Equities with no guarantee describe the separate account of a variable annuity. The general account is mostly conservative investments such as bonds.',
        },
        {
          text: 'Only the index used to credit an equity indexed annuity.',
          why: `An equity indexed annuity often ties its credited rate to an index such as the Standard and Poor's 500. The general account is mostly bonds.`,
        },
        {
          text: 'Cash that is never invested.',
          why: 'During accumulation the insurer invests the principal. The general account is made up mostly of conservative investments such as bonds.',
        },
      ],
    ),
    question(
      'c5q82',
      'What is the typical guaranteed minimum interest rate on a fixed annuity?',
      [
        {
          text: '8%, the amount credited in the indexed example.',
          why: '8% is credited in the example that earns 12% when the company keeps the first 4%. The typical guaranteed minimum on a fixed annuity is 3%.',
        },
        {
          text: '3%.',
          why: 'The credited rate may not drop below that guaranteed minimum. If market rates fall further, the insurer must still pay the guaranteed rate.',
          correct: true,
        },
        {
          text: '7%, matching the first-year surrender charge.',
          why: '7% is the first year of a common surrender-charge schedule. The typical guaranteed minimum interest rate is 3%.',
        },
        {
          text: 'Whatever the general account earns, with no contractual floor.',
          why: 'Performance of the general account affects the rate actually paid, but the rate may not drop below the minimum. That minimum is the lowest rate the principal can contractually earn, typically 3%.',
        },
      ],
    ),
    question(
      'c5q83',
      'During accumulation, which rate does the insurer credit on a fixed annuity?',
      [
        {
          text: 'Always the current interest rate, even when it is below the guarantee.',
          why: 'The rate may not drop below the guaranteed minimum. The insurer credits the higher of that minimum and the current rate.',
        },
        {
          text: 'Always the guaranteed minimum, even when the current rate is higher.',
          why: 'The insurer credits the higher of the two rates. A current rate above the minimum is not ignored.',
        },
        {
          text: 'The higher of the guaranteed minimum rate specified in the annuity or the current interest rate.',
          why: 'The insurer invests the principal during accumulation. The rate actually paid depends on general-account performance, but it cannot fall below the contractual minimum.',
          correct: true,
        },
        {
          text: 'An index return reduced by the 10% early-withdrawal penalty.',
          why: 'An index credit belongs to an equity indexed annuity, and 10% is the penalty on early withdrawals before age 59½. A fixed annuity credits the higher of the guaranteed minimum and the current rate.',
        },
      ],
    ),
    question(
      'c5q84',
      'What does the minimum rate in a fixed annuity mean?',
      [
        {
          text: 'Whatever rate the general account earns at the moment.',
          why: 'The current rate is credited when it is higher. The minimum rate is the lowest rate the principal can contractually earn.',
        },
        {
          text: 'The first 4% kept on an indexed contract.',
          why: 'Keeping the first 4% is the equity indexed example. The minimum rate is the contractual floor on the principal.',
        },
        {
          text: 'The surrender charge still due in the 8th year.',
          why: 'In the 8th year or after, the common schedule has no further surrender charge. The minimum rate is an interest floor, not a surrender charge.',
        },
        {
          text: 'The lowest rate the principal can contractually earn.',
          why: 'During accumulation the insurer credits the higher of that guaranteed minimum or the current interest rate. The credited rate may not fall below the minimum.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q85',
      'What is an equity indexed annuity?',
      [
        {
          text: 'A fixed annuity that invests on a relatively aggressive basis to aim for higher returns.',
          why: 'It is also called an indexed annuity. It has a guaranteed minimum interest rate, and at the end of the term it is credited with the greater of the guaranteed minimum value or the indexed value.',
          correct: true,
        },
        {
          text: 'A variable annuity with no minimum interest rate.',
          why: 'A variable annuity does not guarantee a minimum interest rate and uses the separate account. An equity indexed annuity is a fixed annuity with a guaranteed minimum.',
        },
        {
          text: 'A market value adjusted annuity that pays a bonus whenever current rates rise.',
          why: 'On an early surrender of a market value adjusted annuity, a higher current rate produces a penalty, not a bonus. An equity indexed annuity is a fixed annuity aimed at higher returns.',
        },
        {
          text: 'Another name for pure life.',
          why: 'Pure life is a payout option that stops at death. An equity indexed annuity is a fixed annuity that invests on a relatively aggressive basis to aim for higher returns.',
        },
      ],
    ),
    question(
      'c5q86',
      'What guaranteed minimum interest rate is typical for an indexed annuity, also called an equity indexed annuity?',
      [
        {
          text: '12%, the return in the course example.',
          why: '12% is the interest earned in that example, not the guarantee. The typical guaranteed minimum is 3% or 4%.',
        },
        {
          text: '3% or 4%.',
          why: `At the end of the term the annuity is credited with the greater of the guaranteed minimum value or the current indexed value. The credited rate is often tied to an index such as the Standard and Poor's 500.`,
          correct: true,
        },
        {
          text: '8%, and that figure is the only credit the contract can give.',
          why: '8% is the credit in the example where interest earned is 12% and the company keeps the first 4%. The typical guarantee is a floor of 3% or 4%.',
        },
        {
          text: 'No minimum, because an indexed annuity is a variable contract.',
          why: 'An indexed annuity is a fixed annuity and has a guaranteed minimum, typically 3% or 4%. A variable annuity has no minimum interest rate.',
        },
      ],
    ),
    question(
      'c5q87',
      'At the end of the term of an indexed annuity, which value is credited?',
      [
        {
          text: 'Only the current indexed value, even when it is below the guarantee.',
          why: 'The contract is credited with the greater of the two values. A lower indexed value gives way to the guaranteed minimum value.',
        },
        {
          text: 'Only the guaranteed minimum value, even when the indexed value is higher.',
          why: 'The greater value is credited. A higher indexed result is not thrown out.',
        },
        {
          text: 'The greater of the guaranteed minimum value or the current indexed value.',
          why: `The credited rate is often tied to an index such as the Standard and Poor's 500. Insurers generally keep the initial returns and pay the excess to the annuitant.`,
          correct: true,
        },
        {
          text: 'The Bond Fund Index rate used in the market value adjustment example.',
          why: 'That example ties a 10-year 6% fixed annuity to the Bond Fund Index. An equity indexed annuity is credited with the greater of the guaranteed minimum value or the current indexed value.',
        },
      ],
    ),
    question(
      'c5q88',
      'How do insurers generally treat the return on an equity indexed annuity?',
      [
        {
          text: 'They credit the full index return and keep none of it.',
          why: 'Insurers generally keep the initial returns and pay the excess to the annuitant. In the example the company keeps the first 4%.',
        },
        {
          text: 'They keep the entire return and credit nothing beyond the premiums.',
          why: 'The company keeps the initial return and credits the excess. The account is not limited to premiums alone.',
        },
        {
          text: 'They credit the excess only when the annuitant holds a securities license.',
          why: 'A securities license is required of an agent who sells variable annuities. It is not a condition of the indexed credit.',
        },
        {
          text: 'They keep the initial returns and pay the excess to the annuitant.',
          why: 'The company may keep the first 4% earned and credit any accumulation above 4%. If the interest earned is 12%, the company keeps 4% and the account is credited with 8%.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q89',
      'How does an equity indexed annuity compare in risk and expected interest with a variable annuity, a mutual fund, and a fixed annuity?',
      [
        {
          text: 'It is less risky than a variable annuity or a mutual fund, and it is expected to earn a higher interest rate than a fixed annuity.',
          why: 'It remains a fixed annuity with a guaranteed minimum, typically 3% or 4%. The insurer generally keeps the initial return and credits the excess.',
          correct: true,
        },
        {
          text: 'It is riskier than a variable annuity and is expected to earn less than a fixed annuity.',
          why: 'The comparison runs the other way. Equity indexed annuities are less risky than a variable annuity or a mutual fund and are expected to earn a higher rate than a fixed annuity.',
        },
        {
          text: 'It has no guaranteed minimum and must be invested in the separate account.',
          why: 'No minimum interest rate and the separate account describe a variable annuity. An equity indexed annuity is a fixed annuity with a guaranteed minimum.',
        },
        {
          text: 'It pays the full index return, and the company keeps none of that return.',
          why: 'The credited rate is often tied to an index, but the company generally keeps the initial returns and pays the excess. The guarantee is the minimum value.',
        },
      ],
    ),
  ],
  'c5-variable': [
    question(
      'c5q90',
      'Why can a variable annuity serve as a hedge against inflation?',
      [
        {
          text: 'Because the insurer promises a level dollar payment that cannot change.',
          why: 'A level payment is a fixed annuity, and inflation may erode its purchasing power. A variable annuity may produce different rates of return.',
        },
        {
          text: 'Because the annuitant may receive different rates of return on the funds paid into the annuity.',
          why: 'The payments are invested in the separate account, and the insurer does not guarantee a minimum interest rate. Those moving returns are the inflation hedge.',
          correct: true,
        },
        {
          text: 'Because the contract pays a face amount that increases over time.',
          why: 'An annuity does not pay a face amount. The hedge is the possibility of different rates of return on the funds paid in.',
        },
        {
          text: 'Because the general account credits a guaranteed minimum of 3%.',
          why: 'A guaranteed minimum, typically 3%, and the general account describe a fixed annuity. A variable annuity does not guarantee a minimum interest rate.',
        },
      ],
    ),
    question(
      'c5q91',
      'Where are variable annuity payments invested?',
      [
        {
          text: 'In the general account, alongside conservative bond investments.',
          why: 'The general account holds fixed annuity premiums and is mostly conservative investments such as bonds. Variable payments go into the separate account.',
        },
        {
          text: 'They remain uninvested cash until annuitization.',
          why: 'Variable premiums buy accumulation units in the fund. They are invested in the separate account.',
        },
        {
          text: 'In the separate account of the insurer, not the general account.',
          why: 'The separate account is not part of the investment portfolio of the company and is not subject to the restrictions that apply to the general account.',
          correct: true,
        },
        {
          text: 'In the long-term care facility that confined the annuitant.',
          why: 'Confinement in a long-term care facility for at least 30 days can waive surrender charges. It is not an investment account.',
        },
      ],
    ),
    question(
      'c5q92',
      'How is the separate account related to the investment portfolio of the insurer?',
      [
        {
          text: 'It is the general account, so it is limited to bonds.',
          why: 'The general account is mostly conservative investments such as bonds. The separate account is not part of the investment portfolio of the company.',
        },
        {
          text: 'It must follow every restriction that applies to the general account.',
          why: 'The separate account is not subject to the restrictions that apply to the general account, and it is not part of the portfolio of the company.',
        },
        {
          text: 'It holds fixed annuities, which guarantee each income payment.',
          why: 'Fixed premiums go to the general account, and that company guarantees the payment. Variable premiums use the separate account.',
        },
        {
          text: 'It is not part of the investment portfolio of the company.',
          why: 'It also is not subject to the restrictions that apply to the general account. Variable annuity payments are invested in the separate account.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q93',
      'What minimum interest rate does the company guarantee on a variable annuity?',
      [
        {
          text: 'It does not guarantee a minimum interest rate.',
          why: 'That is one of the main features of a variable annuity. The annuitant may receive different rates of return, which is how the contract can hedge inflation.',
          correct: true,
        },
        {
          text: 'Typically 3%, the same floor as a fixed annuity.',
          why: 'Typically 3% is the guaranteed minimum on a fixed annuity. A variable annuity has no guaranteed minimum interest rate.',
        },
        {
          text: 'Typically 3% or 4%, the floor used for an indexed annuity.',
          why: 'An indexed annuity is a fixed annuity and typically guarantees 3% or 4%. A variable annuity does not guarantee a minimum interest rate.',
        },
        {
          text: '6%, the rate locked in the market value adjustment example.',
          why: '6% is the contracted rate in that 10-year example. A variable annuity does not guarantee a minimum interest rate.',
        },
      ],
    ),
    question(
      'c5q94',
      'Which regulators oversee a variable annuity?',
      [
        {
          text: 'Only state insurance regulators, because the contract is not a security.',
          why: 'A variable annuity is a security. It is regulated by the Securities and Exchange Commission in addition to state insurance regulations.',
        },
        {
          text: 'The Securities and Exchange Commission, in addition to state insurance regulators.',
          why: 'An agent who sells variable annuities needs a securities license as well as a life insurance license. Agents or companies that sell them must also be registered with FINRA.',
          correct: true,
        },
        {
          text: 'FINRA alone, with state insurance rules set aside.',
          why: 'State insurance regulations still apply, and the Securities and Exchange Commission regulates the contract as a security. FINRA registration is required of agents or companies that sell variable annuities.',
        },
        {
          text: 'The IRS alone, because every variable annuity is a qualified plan.',
          why: 'The IRS collects taxes and enforces the Internal Revenue Code, and a qualified plan meets IRS guidelines. Variable annuity oversight is the Securities and Exchange Commission plus state insurance regulation.',
        },
      ],
    ),
    question(
      'c5q95',
      'What must an agent have in order to sell variable annuities?',
      [
        {
          text: 'A life insurance license only, the same authority used for a fixed annuity.',
          why: 'Fixed annuities are sold with a life insurance license. Variable annuities also require a securities license, and the seller must be registered with FINRA.',
        },
        {
          text: 'A securities license only, with the life insurance license waived.',
          why: 'The securities license is in addition to a life insurance license. FINRA registration is also required.',
        },
        {
          text: 'A securities license in addition to a life insurance license, plus FINRA registration.',
          why: 'A variable annuity is a security regulated by the Securities and Exchange Commission in addition to state insurance regulations. Agents or companies that sell them must be properly registered with FINRA.',
          correct: true,
        },
        {
          text: 'No license, because the separate account is not regulated.',
          why: 'The contract is a security. The agent needs both licenses, and agents or companies that sell variable annuities must be registered with FINRA.',
        },
      ],
    ),
    question(
      'c5q96',
      'What do variable premiums buy before annuitization?',
      [
        {
          text: 'Annuity units.',
          why: 'Annuity units are created at annuitization, when accumulation units are converted. Before that, variable premiums buy accumulation units.',
        },
        {
          text: 'Shares of the general account.',
          why: 'The general account backs fixed annuities. Variable premiums buy accumulation units in the separate-account fund.',
        },
        {
          text: 'A guaranteed dollar amount that cannot change.',
          why: 'A guaranteed dollar payment is a fixed annuity feature. Variable premiums buy accumulation units.',
        },
        {
          text: 'Accumulation units, similar to shares in a mutual fund.',
          why: 'Accumulation units represent ownership interest in the separate account. At annuitization they are converted to annuity units.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q97',
      'What do accumulation units represent?',
      [
        {
          text: 'Ownership interest in the separate account.',
          why: 'They are similar to shares in a mutual fund. At annuitization they are converted to annuity units, and income is then based on the value of those units.',
          correct: true,
        },
        {
          text: 'A guaranteed interest credit in the general account.',
          why: 'Guaranteed interest in the general account is a fixed annuity feature. Accumulation units are an ownership interest in the separate account.',
        },
        {
          text: 'The surrender charge as a percent of cash value.',
          why: 'A surrender charge is levied against the cash value and generally declines. Accumulation units represent ownership in the separate account.',
        },
        {
          text: 'The years promised by a period certain.',
          why: 'A period certain is a payout guarantee. Accumulation units are the ownership interest in the separate account.',
        },
      ],
    ),
    question(
      'c5q98',
      'After a variable annuity is annuitized, what is the income based on?',
      [
        {
          text: 'A guaranteed dollar amount that never changes.',
          why: 'A guaranteed dollar amount is the income payment of a fixed annuity. Variable income is paid based on the value of the annuity units.',
        },
        {
          text: 'The value of the annuity units.',
          why: 'Accumulation units are converted to annuity units. The number of annuity units stays level, but the unit values fluctuate until they are paid to the annuitant.',
          correct: true,
        },
        {
          text: 'The general account at the guaranteed minimum rate.',
          why: 'The general account and a guaranteed minimum describe a fixed annuity. Variable income follows the annuity units in the separate account.',
        },
        {
          text: 'One lump-sum return of premiums, after which the units end.',
          why: 'Annuitization converts accumulation units into annuity units. Income continues based on the value of the annuity units.',
        },
      ],
    ),
    question(
      'c5q99',
      'In the fixed-versus-variable comparison, what is true of expenses and of the income payment?',
      [
        {
          text: 'Expenses are guaranteed only for a variable annuity, and both products guarantee income.',
          why: 'Expenses are guaranteed for both. Income is guaranteed for a fixed annuity and is not guaranteed for a variable annuity.',
        },
        {
          text: 'Neither product guarantees expenses, and both guarantee the income payment.',
          why: 'Expenses are guaranteed for both. Only the fixed annuity guarantees the income payment.',
        },
        {
          text: 'Expenses are guaranteed for both. Income is guaranteed for a fixed annuity and is not guaranteed for a variable annuity.',
          why: 'A fixed annuity guarantees interest and uses the general account, while a variable annuity has no interest guarantee and uses the separate account. Selling a variable annuity also adds a securities license to the life license.',
          correct: true,
        },
        {
          text: 'Expenses are guaranteed for both, and income is guaranteed only for a variable annuity.',
          why: 'Expenses are guaranteed for both, but the income guarantee belongs to the fixed annuity. Variable income has no guarantee.',
        },
      ],
    ),
  ],
  'c5-mva': [
    question(
      'c5q100',
      'What is another name for a market value adjusted annuity?',
      [
        {
          text: 'A variable annuity.',
          why: 'A variable annuity uses the separate account and does not guarantee a minimum interest rate. A market value adjusted annuity is also called a modified guaranteed annuity.',
        },
        {
          text: 'An equity indexed annuity.',
          why: 'An equity indexed annuity is a fixed annuity aimed at higher returns, often linked to an index. The other name for the market value adjusted contract is modified guaranteed annuity.',
        },
        {
          text: 'A single premium immediate annuity.',
          why: 'A single premium immediate annuity starts income within one year of a lump-sum purchase. A market value adjusted annuity is a single-premium deferred annuity.',
        },
        {
          text: 'A modified guaranteed annuity.',
          why: 'It is also called a market value adjustment annuity. The owner locks in a guaranteed interest rate for a stated maturity anywhere from 3 to 10 years.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q101',
      'How is a market value adjusted annuity funded, and what can the owner lock in?',
      [
        {
          text: 'It is a single-premium deferred annuity, and the owner can lock in a guaranteed interest rate for a stated maturity period.',
          why: 'That maturity is anywhere from 3 to 10 years. An early surrender is adjusted based on current interest rates at the time of surrender.',
          correct: true,
        },
        {
          text: 'It uses flexible premiums and locks in separate-account units.',
          why: 'Flexible premiums fund an FPDA, and accumulation units belong to a variable annuity. This contract is a single-premium deferred annuity with a locked interest rate.',
        },
        {
          text: 'It is an immediate annuity and locks in a 20-year period certain.',
          why: 'A 20-year period certain is a life-income payout. This product is a single-premium deferred annuity with a rate locked for 3 to 10 years.',
        },
        {
          text: 'It uses level periodic premiums, and the interest rate is not guaranteed.',
          why: 'A level premium is a fixed installment. This annuity is a single premium, and the owner does lock in a guaranteed interest rate for the maturity period.',
        },
      ],
    ),
    question(
      'c5q102',
      'How long can the stated maturity period be?',
      [
        {
          text: '1 month, matching the earliest typical payment of an immediate annuity.',
          why: '1 month is how soon the first payment of an immediate annuity is typically made. The maturity period on this annuity is anywhere from 3 to 10 years.',
        },
        {
          text: 'Anywhere from 3 to 10 years.',
          why: 'The owner locks in a guaranteed interest rate for that period. In the course example the annuity is 10 years long and the client withdraws the money in 5 years.',
          correct: true,
        },
        {
          text: 'Exactly 20 years.',
          why: '20 years is the period used in the life-income period-certain example. This maturity is anywhere from 3 to 10 years.',
        },
        {
          text: 'Only until the annuitant reaches age 59½.',
          why: 'Age 59½ is the threshold for the 10% penalty on early withdrawals. The maturity period is anywhere from 3 to 10 years.',
        },
      ],
    ),
    question(
      'c5q103',
      'In the course example, what market value adjusted contract does the client buy?',
      [
        {
          text: 'A 5-year variable annuity tied to an equity index.',
          why: 'Five years is when the client withdraws. The contract bought is a 10-year 6% fixed annuity tied to the Bond Fund Index, not a variable annuity.',
        },
        {
          text: 'A pure life annuity with no stated interest rate.',
          why: 'Pure life is a payout option. The example is a 10-year 6% fixed annuity tied to the Bond Fund Index interest rate.',
        },
        {
          text: 'A 10-year 6% fixed annuity tied to the Bond Fund Index interest rate.',
          why: `The example names the Bond Fund Index interest rate, Moody's. The client withdraws the money in 5 years, and any adjustment depends on the current interest rate.`,
          correct: true,
        },
        {
          text: 'An 8-year flexible premium deferred annuity with no index.',
          why: '8% is the current rate that produces a penalty when the contracted rate is 6%. It is not the length of this 10-year 6% fixed annuity.',
        },
      ],
    ),
    question(
      'c5q104',
      'The client withdraws from that 6% contract in 5 years while the current interest rate is still 6%. What adjustment is made?',
      [
        {
          text: 'A penalty, because every withdrawal before maturity is adjusted.',
          why: 'A penalty is assessed when the current rate is 8%. When the current rate is still 6%, there is no adjustment.',
        },
        {
          text: 'A bonus, because the withdrawal happened in year 5.',
          why: 'A bonus may be paid when the current rate is 4%. An equal rate of 6% produces no adjustment.',
        },
        {
          text: 'The funds are moved into the separate account.',
          why: 'The separate account is used for a variable annuity. When the current rate equals the contracted 6%, there is no market value adjustment.',
        },
        {
          text: 'There is no adjustment.',
          why: 'The contracted rate and the current rate are both 6%. A penalty applies at 8%, and the company may pay a bonus at 4%.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q105',
      'If the current rate is 4% when that 6% annuity is surrendered early, what may the company do?',
      [
        {
          text: 'Pay a bonus.',
          why: 'A lower current rate may produce a bonus, while a higher rate such as 8% produces a penalty. If the current rate is still the contracted 6%, there is no adjustment.',
          correct: true,
        },
        {
          text: 'Assess the penalty that applies when the current rate is 8%.',
          why: 'A penalty is assessed when the current rate is 8%. At 4% the company may pay a bonus instead.',
        },
        {
          text: 'Refuse the surrender until the 10-year maturity.',
          why: 'The contract can be surrendered early. The result depends on current rates, and at 4% the company may pay a bonus.',
        },
        {
          text: 'Change the payout to joint and ½ survivor.',
          why: 'Joint and ½ survivor is a two-life income option, not a result of interest rates. At a 4% current rate the company may pay a bonus.',
        },
      ],
    ),
    question(
      'c5q106',
      'How is the market value adjustment usually measured, and what risk does an early surrender share?',
      [
        {
          text: 'It is a flat 10% fee, and the only risk shared is death before age 59½.',
          why: '10% is the penalty on early withdrawals before age 59½. The adjustment is usually a percentage of the difference in interest rates, and the risk shared is market risk from changing rates.',
        },
        {
          text: 'It is usually a percentage of the difference between the contracted rate and the current rate. The annuitant shares the market risk of changing interest rates.',
          why: 'In the example, 8% produces a penalty and 4% may produce a bonus. When the current rate stays at the contracted 6%, there is no adjustment.',
          correct: true,
        },
        {
          text: 'It pays the greater of the cash value and the premiums, and no market risk is shared.',
          why: 'The greater of cash value and premiums paid is the accumulation-period death benefit. The adjustment instead shares interest-rate risk on an early surrender.',
        },
        {
          text: 'It changes the payment to ½ or ⅔, and the risk shared is the first death.',
          why: '½ and ⅔ are joint and survivor fractions. The adjustment is usually a percentage of the difference between the contracted rate and the current rate at surrender.',
        },
      ],
    ),
  ],
  'c5-uses': [
    question(
      'c5q107',
      'What is the principal use of an annuity?',
      [
        {
          text: 'To pay a face amount at death in place of life insurance.',
          why: 'An annuity does not pay a face amount, and it is not life insurance. The principal use is income for retirement.',
        },
        {
          text: 'To act only as a securities account, with no income purpose.',
          why: 'A variable annuity is a security, but the principal use of an annuity is to provide income for retirement.',
        },
        {
          text: 'To provide income for retirement.',
          why: 'An annuity may also accumulate cash or liquidate an estate. Because uses vary, the agent should judge whether the product fits the needs and resources of the applicant.',
          correct: true,
        },
        {
          text: 'To waive surrender charges after 30 days of ownership.',
          why: 'Surrender charges are waived if the annuitant is confined to a long-term care facility for at least 30 days. The principal use of an annuity is retirement income.',
        },
      ],
    ),
    question(
      'c5q108',
      'Besides retirement income, what else may an annuity be used for?',
      [
        {
          text: 'Replacing a life insurance face amount.',
          why: 'An annuity does not pay a face amount. It may also be used to accumulate cash or to liquidate an estate.',
        },
        {
          text: 'Forcing the owner to be a corporation.',
          why: 'A corporation may own an annuity, but that is not a use of the product. Other uses are accumulating cash and liquidating an estate.',
        },
        {
          text: 'Skipping any review of the resources of the applicant.',
          why: 'Suitability means judging the needs and resources of the applicant. Other uses of an annuity are accumulating cash and liquidating an estate.',
        },
        {
          text: 'Accumulating cash or liquidating an estate.',
          why: 'The principal use remains income for retirement. Liquidation of an estate means converting net worth into a cash flow.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q109',
      'Why should an agent assess suitability before recommending an annuity?',
      [
        {
          text: 'Because the uses vary, so the product should meet the needs and resources of the applicant.',
          why: 'That assessment is suitability. Retirement income is the principal use, and an annuity may also accumulate cash or liquidate an estate.',
          correct: true,
        },
        {
          text: 'Because the IRS will not recognize the contract until the agent sets the payment.',
          why: 'The IRS collects taxes and enforces the Internal Revenue Code. Suitability is about the needs and resources of the applicant, not about the IRS setting a payment.',
        },
        {
          text: 'Because every annuity must be a group profit-sharing pension plan.',
          why: 'A profit-sharing pension plan is one group form of qualified retirement annuity. Suitability is required because uses vary, not because every contract is that plan.',
        },
        {
          text: 'Because a fixed annuity has no minimum rate unless the agent adds one.',
          why: 'A fixed annuity already has a guaranteed minimum rate, typically 3%. Suitability asks whether the product fits the applicant.',
        },
      ],
    ),
    question(
      'c5q110',
      'Which lump sums can an annuity turn into income?',
      [
        {
          text: 'Only wages paid monthly. A lump sum cannot be placed in an annuity.',
          why: 'The chapter lists lump sums that can be turned into income, including an inheritance, a lottery prize, lawsuit damages, business-sale proceeds, and a qualified pension distribution.',
        },
        {
          text: 'An inheritance, a lottery prize, damages from a lawsuit, proceeds from the sale of a business, or a lump-sum distribution from a qualified pension plan.',
          why: 'The person may buy a single premium immediate annuity, which converts the lump sum into periodic payments.',
          correct: true,
        },
        {
          text: 'Only a face amount paid after the annuitant dies.',
          why: 'An annuity does not pay a face amount at death. The lump sums described are living amounts such as an inheritance or a pension distribution.',
        },
        {
          text: 'Only annuity units after a variable contract has been annuitized.',
          why: 'Annuity units measure variable income after annuitization. The lump-sum use covers an inheritance, a lottery prize, lawsuit damages, a business sale, or a qualified pension distribution.',
        },
      ],
    ),
    question(
      'c5q111',
      'How can a person turn one of those lump sums into periodic payments?',
      [
        {
          text: 'By buying a flexible premium deferred annuity and varying later premiums.',
          why: 'An FPDA takes periodic payments and starts income after one year. The lump-sum conversion in this section is a single premium immediate annuity.',
        },
        {
          text: 'By choosing pure life, which returns the lump sum at death.',
          why: 'Pure life stops at death and does not promise that all proceeds will be paid out. The lump sum is converted by a single premium immediate annuity.',
        },
        {
          text: 'By buying a single premium immediate annuity.',
          why: 'That contract converts the lump sum into periodic payments. The lump sum may be an inheritance, a lottery prize, lawsuit damages, business-sale proceeds, or a qualified pension distribution.',
          correct: true,
        },
        {
          text: 'By paying the 7% first-year surrender charge and taking the lump sum back.',
          why: '7% is a common first-year surrender charge on a deferred annuity. The use described here is conversion of the lump sum into periodic payments through a single premium immediate annuity.',
        },
      ],
    ),
    question(
      'c5q112',
      'What forms can qualified retirement annuities take?',
      [
        {
          text: 'Individual contracts only. Group plans cannot be funded with annuities.',
          why: 'Qualified retirement annuities can be individual or group. Group examples include a tax-sheltered annuity and a profit-sharing pension plan.',
        },
        {
          text: 'A tax-sheltered annuity only. Individual retirement accounts are excluded.',
          why: 'Individual retirement accounts are the individual example. A tax-sheltered annuity and a profit-sharing pension plan are group examples.',
        },
        {
          text: 'Nonqualified contracts only.',
          why: 'Qualified plans meet IRS guidelines for favorable tax treatment. The annuities that fund them can be individual or group.',
        },
        {
          text: 'Individual contracts, such as individual retirement accounts, or group contracts, such as a tax-sheltered annuity or a profit-sharing pension plan.',
          why: 'Annuities often fund qualified retirement plans. Those plans meet IRS guidelines for favorable tax treatment.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q113',
      'A Guaranteed Living Benefit rider is similar to which other benefit?',
      [
        {
          text: 'The Guaranteed Minimum Withdrawal Benefit.',
          why: 'Both address investment losses. The withdrawal benefit lets the annuitant take a maximum percentage of the investment each year until the initial investment has been recovered.',
          correct: true,
        },
        {
          text: 'A bail-out provision.',
          why: 'A bail-out allows surrender without charge if interest rates drop a specified amount within a specified time. The living benefit is similar to the guaranteed minimum withdrawal benefit.',
        },
        {
          text: 'The 10% penalty on withdrawals before age 59½.',
          why: 'That 10% penalty applies to early withdrawals. It is not the benefit the living-benefit rider resembles.',
        },
        {
          text: 'The level payment of a fixed annuity.',
          why: 'A fixed annuity pays a level benefit, and inflation may erode its purchasing power. The living benefit is similar to the guaranteed minimum withdrawal benefit.',
        },
      ],
    ),
    question(
      'c5q114',
      'What does a Guaranteed Living Benefit rider assure?',
      [
        {
          text: 'That the separate account will earn at least 12% each year.',
          why: '12% is the interest earned in the equity indexed example. The rider assures at least the money invested, or a certain income, usually up to the purchase amount.',
        },
        {
          text: 'At least the amount invested, or a certain amount of income, usually up to the annuity purchase amount, regardless of market conditions.',
          why: 'The rider is similar to the guaranteed minimum withdrawal benefit. It is generally offered to variable annuity investors because the account follows portfolio mutual funds.',
          correct: true,
        },
        {
          text: 'That every surrender charge is waived as soon as the contract is issued.',
          why: 'Surrender charges can be waived after at least 30 days in a long-term care facility, or under a bail-out. The living benefit generally does not apply if the contract is surrendered.',
        },
        {
          text: 'A face amount for the beneficiary if the annuitant dies.',
          why: 'An annuity does not pay a face amount. The rider assures the amount invested or a stated income, usually up to the purchase amount, regardless of the market.',
        },
      ],
    ),
    question(
      'c5q115',
      'To whom is a Guaranteed Living Benefit rider generally offered, and why?',
      [
        {
          text: 'To owners of fixed annuities, because the general account cannot change.',
          why: 'Fixed payments come from the general account as guaranteed dollar amounts. The rider is generally offered to variable annuity investors because the account depends on portfolio mutual funds.',
        },
        {
          text: 'To buyers of immediate annuities, because income can start within 1 month.',
          why: 'A first payment as early as 1 month describes a single premium immediate annuity. The rider is generally offered to variable annuity investors.',
        },
        {
          text: 'To variable annuity investors, because the account value depends on the returns of the portfolio mutual funds.',
          why: 'The rider assures at least the amount invested, or certain income usually up to the purchase amount, regardless of market conditions.',
          correct: true,
        },
        {
          text: 'Only to joint life annuitants, because their payments stop at the first death.',
          why: 'Joint life stops at the first death among two or more annuitants. The rider is generally offered to variable annuity investors.',
        },
      ],
    ),
    question(
      'c5q116',
      'When can a Guaranteed Living Benefit rider often be exercised, and what fee is usual?',
      [
        {
          text: 'On the issue date, for a fee of 10% of each withdrawal.',
          why: '10% is the penalty on early withdrawals before age 59½. The rider often waits for a stated period, for example 10 years, and the usual fee is 0.25% to 1% of contract value each year.',
        },
        {
          text: 'Only after age 59½, for a fee equal to the surrender charge.',
          why: 'Age 59½ relates to the 10% early-withdrawal penalty. The rider often can be exercised after a stated period such as 10 years, for a fee usually of 0.25% to 1% a year.',
        },
        {
          text: 'After 30 days in a long-term care facility, and the rider has no fee.',
          why: 'Thirty days of confinement can waive surrender charges. The living-benefit fee is usually 0.25% to 1% of contract value each year, and exercise often waits for a stated period such as 10 years.',
        },
        {
          text: 'Often only after a stated period, for example after 10 years, for a fee usually equal to 0.25% to 1% of the contract value each year.',
          why: 'In the course example a 0.50% fee on $100,000 deducts $500 a year. Riders from different companies work differently.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q117',
      'What does the chapter say about distributions from nonqualified annuities that pay long-term care premiums?',
      [
        {
          text: 'They used to be taxed. They can now pay those premiums and, in many cases, eliminate the taxes on the annuity gains.',
          why: 'Under the Pension Protection Act of 2006, annuity money may be transferred to pay long-term care insurance premiums tax free. Many insurers also offer a hybrid annuity with a long-term care feature.',
          correct: true,
        },
        {
          text: 'They now draw the 10% early-withdrawal penalty and can no longer pay long-term care premiums.',
          why: 'The 10% penalty applies to early withdrawals before age 59½. These nonqualified distributions can now pay long-term care premiums and, in many cases, eliminate tax on the gains.',
        },
        {
          text: 'They must be paid as a face amount directly to the care facility.',
          why: 'An annuity does not pay a face amount. The distributions can pay long-term care premiums and, in many cases, eliminate the taxes on the annuity gains.',
        },
        {
          text: 'They are available only from an individual retirement account.',
          why: 'An individual retirement account is an individual qualified retirement annuity. The tax history in this sentence is about distributions from nonqualified annuities.',
        },
      ],
    ),
    question(
      'c5q118',
      'In the living-benefit example, what has the fee done if the account rises?',
      [
        {
          text: 'It is refunded once the account is above the $100,000 investment.',
          why: 'The annuitant invests $100,000 and pays 0.50%, which is $500, each year. If the account rises, that fee has still come out of the account and has lowered the account value.',
        },
        {
          text: 'The annuitant has paid the fee from the account, much like automobile insurance, and the fee has lowered the account value.',
          why: 'The yearly deduction in the example is $500. If the account had fallen to $75,000, the annuitant would still receive the agreed $100,000.',
          correct: true,
        },
        {
          text: 'The insurer returns the fee as a market-value bonus.',
          why: 'A bonus may be paid on a market value adjusted annuity when the current rate falls below the contracted rate. The living-benefit fee is deducted and lowers the account.',
        },
        {
          text: 'The contract becomes a fixed annuity at the typical 3% minimum.',
          why: 'Typically 3% is the guaranteed minimum on a fixed annuity, and a rising account does not convert the contract. The living-benefit fee is still deducted and lowers the account value.',
        },
      ],
    ),
    question(
      'c5q119',
      'When does the Guaranteed Living Benefit rider generally not apply?',
      [
        {
          text: 'When the account rises above the amount invested.',
          why: 'If the account rises, the fee has still been paid from the account and has lowered the value. The rider generally does not apply if the contract is surrendered.',
        },
        {
          text: 'When the annuitant waits until a stated period, such as 10 years, before using it.',
          why: 'Waiting 10 years is an example of when the rider often can be exercised. The rider generally does not apply on surrender.',
        },
        {
          text: 'If the contract is surrendered.',
          why: 'Withdrawals are subtracted from the account value dollar for dollar. Riders from different companies work differently, and surrender generally keeps this rider from applying.',
          correct: true,
        },
        {
          text: 'Whenever the account is invested in portfolio mutual funds.',
          why: 'The rider is generally offered to variable annuity investors because the account depends on those mutual-fund returns. Surrender, not the presence of the funds, is when it generally does not apply.',
        },
      ],
    ),
    question(
      'c5q120',
      'How are withdrawals treated under the living-benefit discussion?',
      [
        {
          text: 'They reduce the annual rider fee, and the account value stays the same.',
          why: 'Withdrawals are subtracted from the account value dollar for dollar. They are not taken from the rider fee in place of the account.',
        },
        {
          text: 'They are ignored until the account falls to $75,000.',
          why: '$75,000 is the fallen value in the example, and the annuitant still receives the agreed $100,000. Withdrawals are subtracted dollar for dollar as they occur.',
        },
        {
          text: 'They are added to the account as new premium.',
          why: 'A withdrawal leaves the account and is subtracted dollar for dollar. It is not credited as additional premium.',
        },
        {
          text: 'They are subtracted from the account value dollar for dollar.',
          why: 'The rider generally does not apply if the contract is surrendered. Riders from different companies work differently.',
          correct: true,
        },
      ],
    ),
    question(
      'c5q121',
      'Under the Pension Protection Act of 2006, what may annuitants do with annuity money?',
      [
        {
          text: 'Transfer it to pay long-term care insurance premiums, tax free.',
          why: 'Distributions from nonqualified annuities used to be taxed. Those distributions can now pay long-term care premiums and, in many cases, eliminate the taxes on the annuity gains.',
          correct: true,
        },
        {
          text: 'Transfer it to pay life insurance premiums and collect a face amount.',
          why: 'An annuity does not pay a face amount. The 2006 law allows a tax-free transfer to pay long-term care insurance premiums.',
        },
        {
          text: 'Cancel the living-benefit fee of 0.25% to 1%.',
          why: 'That range is the usual yearly charge for a Guaranteed Living Benefit rider. The Act addresses a tax-free transfer for long-term care premiums.',
        },
        {
          text: 'Move a fixed annuity into the separate account without any securities license.',
          why: 'A variable annuity uses the separate account, and the agent needs a securities license plus a life insurance license. The Act allows annuity money to pay long-term care premiums tax free.',
        },
      ],
    ),
    question(
      'c5q122',
      'What can an annuity provide for education, and what can a hybrid annuity with a long-term care feature provide?',
      [
        {
          text: 'A loan taxed each year for tuition, and a hybrid policy that pays only a death benefit.',
          why: 'Education funding is savings on a tax-deferred basis for the education expenses of the annuitant. Hybrid policies provide income, long-term care, or both.',
        },
        {
          text: 'Tax-deferred savings for the education expenses of the annuitant. The hybrid can provide income, long-term care, or both.',
          why: 'Annuities can accumulate funds for college on that tax-deferred basis. Many insurers offer a hybrid annuity with a long-term care feature.',
          correct: true,
        },
        {
          text: 'A 20-year period certain that must be spent on tuition, and a hybrid limited to joint life.',
          why: 'A 20-year period certain is lifetime income plus a stated period, not a tuition rule. College funding is tax-deferred savings, and hybrid policies provide income, long-term care, or both.',
        },
        {
          text: 'Income that must start within 1 month, and a hybrid that deletes the guaranteed minimum.',
          why: 'A first payment as early as 1 month describes an immediate annuity, not college funding. College savings are tax-deferred, and a long-term care hybrid provides income, long-term care, or both.',
        },
      ],
    ),
  ],
}
