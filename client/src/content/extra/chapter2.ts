import { question } from '../build.ts'
import type { Question } from '../types.ts'

export const chapter2Extra: Record<string, Question[]> = {
  'c2-interest': [
    question(
      'c2q17',
      'What is insurable interest?',
      [
        {
          text: 'The possibility that the policyowner will lose money or something of value if a loss occurs.',
          why: 'Insurable interest is that possibility of loss. Without it, the policyowner cannot buy the insurance.',
          correct: true,
        },
        {
          text: 'A duty of the beneficiary to prove a loss at the time of the claim.',
          why: 'Insurable interest is not required of beneficiaries. It is the stake of the policyowner in the life of the insured at application.',
        },
        {
          text: 'A requirement that the insurer confirm the interest again before paying the death benefit.',
          why: 'Once the policy is issued, the insurer must pay the benefit whether or not insurable interest still exists.',
        },
        {
          text: 'An interest that only a business partner can create.',
          why: 'A valid interest also exists in the life of the policyowner, in a spouse or close blood relative, and in a key employee or someone with a financial obligation to the policyowner.',
        },
      ],
    ),
    question(
      'c2q18',
      'Why does a creditor have an insurable interest in the life of a debtor?',
      [
        {
          text: 'Because the creditor is the beneficiary, and every beneficiary must have insurable interest.',
          why: 'Insurable interest is not required of beneficiaries. A creditor interest comes from the debt, not from the beneficiary role.',
        },
        {
          text: 'Because the debtor has a financial obligation to the creditor.',
          why: 'Someone who has a financial obligation to the policyowner can be the insured. A debtor has that obligation to the creditor.',
          correct: true,
        },
        {
          text: 'Because insurable interest between a creditor and a debtor must be proved again at death.',
          why: 'Insurable interest must exist at application. After issue, the benefit is payable whether or not that interest continues.',
        },
        {
          text: 'Because a creditor may insure a debtor only when the two are close blood relatives.',
          why: 'A close blood relative is one family basis for insurable interest. The creditor interest rests on the financial obligation, not on a blood relationship.',
        },
      ],
    ),
    question(
      'c2q19',
      'Does a beneficiary have to have an insurable interest in the insured?',
      [
        {
          text: 'Yes. The life of the beneficiary is the life being insured.',
          why: 'The life of the beneficiary is not the life being insured. Insurable interest is not required of beneficiaries.',
        },
        {
          text: 'Yes, but only when the beneficiary is a spouse or a close blood relative.',
          why: 'A spouse or close blood relative can give the policyowner an insurable interest. That rule does not impose the interest on the beneficiary.',
        },
        {
          text: 'No. Insurable interest is not required of beneficiaries.',
          why: 'The requirement runs between the policyowner and the insured. The beneficiary does not have to show insurable interest.',
          correct: true,
        },
        {
          text: 'No, unless the policy insures the life of the policyowner.',
          why: 'Insurable interest is not required of beneficiaries in any of these cases. Insuring the life of the policyowner is a valid interest for the owner, not a beneficiary test.',
        },
      ],
    ),
    question(
      'c2q20',
      'After a life policy is issued, insurable interest ends. What must the insurer do?',
      [
        {
          text: 'Refuse to pay the benefit, because the interest must continue until the claim is paid.',
          why: 'The interest must exist at application. It does not have to continue until the claim.',
        },
        {
          text: 'Pay the benefit only if the current owner is a creditor of the insured.',
          why: 'A creditor interest is one valid reason to buy coverage. It is not a condition for paying a claim after issue.',
        },
        {
          text: 'Pay the benefit only if the beneficiary is a family member.',
          why: 'Family membership can create insurable interest for a policyowner at application. Beneficiaries do not have to have that interest when the claim is paid.',
        },
        {
          text: 'Pay the benefit whether or not insurable interest still exists.',
          why: 'Once the policy is issued, the insurer must pay the benefit even if insurable interest no longer exists.',
          correct: true,
        },
      ],
    ),
    question(
      'c2q21',
      'Which life can the policyowner insure because the owner has an insurable interest in that life itself?',
      [
        {
          text: 'The life of the policyowner.',
          why: 'A valid insurable interest exists when the policy insures the life of the policyowner.',
          correct: true,
        },
        {
          text: 'Only the life of a person who owes the owner money.',
          why: 'A financial obligation is one valid interest. The owner also has an interest in the life of the owner, in family, and in a business partner or key employee.',
        },
        {
          text: 'The life of the beneficiary, because that is the life being insured.',
          why: 'The life of the beneficiary is not the life being insured, and beneficiaries are not required to have insurable interest.',
        },
        {
          text: 'Any life, as long as the interest is proved again at death.',
          why: 'The interest must exist at application between the policyowner and the insured. It is not reopened as a condition of payment at death.',
        },
      ],
    ),
    question(
      'c2q22',
      'Which family member can be the insured under a valid insurable interest?',
      [
        {
          text: 'Any person named as beneficiary, because beneficiaries must be related to the insured.',
          why: 'Insurable interest is not required of beneficiaries, and the life of the beneficiary is not the life being insured.',
        },
        {
          text: 'A spouse or a close blood relative.',
          why: 'The policyowner has a valid insurable interest in the life of a family member, described as a spouse or a close blood relative.',
          correct: true,
        },
        {
          text: 'Only a business partner.',
          why: 'A business partner can be the insured because of the business relationship. The family basis named in the section is a spouse or a close blood relative.',
        },
        {
          text: 'A person with no relationship to the policyowner.',
          why: 'The section limits family interest to a spouse or a close blood relative. A person with no relationship does not fit that basis.',
        },
      ],
    ),
    question(
      'c2q23',
      'Besides the life of the owner and a family member, which people can be insured when the policyowner has a valid insurable interest?',
      [
        {
          text: 'Only the beneficiary, and only at the time of death.',
          why: 'Insurable interest is not required of beneficiaries, and it must exist at application rather than at death.',
        },
        {
          text: 'Only a debtor, and the interest must continue until the claim is paid.',
          why: 'A debtor is one example of a financial obligation. The interest does not have to continue after the policy is issued.',
        },
        {
          text: 'A business partner, a key employee, or someone who has a financial obligation to the policyowner.',
          why: 'Those three relationships are named, along with the life of the owner and a family member, as valid insurable interests.',
          correct: true,
        },
        {
          text: 'Anyone the insurer agrees to list, because the interest is required only of the beneficiary.',
          why: 'The policyowner must have the insurable interest in the life of the insured. Beneficiaries do not have to have it.',
        },
      ],
    ),
  ],
  'c2-personal': [
    question(
      'c2q24',
      'What does survivor protection do when a wage earner dies?',
      [
        {
          text: 'It builds cash value that the policyowner can use while living.',
          why: 'Cash accumulation is the living buildup of cash value in a permanent policy. Survivor protection replaces income after a death.',
        },
        {
          text: 'It pays estate taxes so other assets do not have to be sold.',
          why: 'That is estate conservation. Survivor protection replaces income the family loses when a wage earner dies.',
        },
        {
          text: 'It sells estate assets to raise capital for the survivors.',
          why: 'Selling assets is liquidation. Survivor protection is the income replacement that can keep a family from having to liquidate the estate.',
        },
        {
          text: 'It replaces income for the survivors.',
          why: 'Survivor protection replaces income when a wage earner dies. Planning it looks at assets, liabilities, and what the survivors will need.',
          correct: true,
        },
      ],
    ),
    question(
      'c2q25',
      'Survivor protection can also protect a family in which situation?',
      [
        {
          text: 'A nonearning spouse who cares for minor children dies.',
          why: 'Survivor protection is not limited to a wage earner. It can also protect a family when a nonearning spouse who cares for minor children dies.',
          correct: true,
        },
        {
          text: 'The policyowner borrows against cash value for an immediate need.',
          why: 'Borrowing against cash value is liquidity, a living use of a permanent policy. It is not the death benefit use called survivor protection.',
        },
        {
          text: 'The first premium creates an estate at least equal to the death benefit.',
          why: 'That is estate creation. Survivor protection is the coverage aimed at the family loss when a wage earner or caregiving spouse dies.',
        },
        {
          text: 'The entire death benefit is paid in one sum to a person under legal age.',
          why: 'A lump-sum payment pays the entire benefit in one sum, but a minor generally cannot receive policy proceeds directly.',
        },
      ],
    ),
    question(
      'c2q26',
      'Planning survivor protection means looking at which information?',
      [
        {
          text: 'How long a whole life policy can stay in force if the premium is paid.',
          why: 'Permanent insurance can stay in force to age 121. Planning survivor protection looks at the family finances, not the maturity age of the policy.',
        },
        {
          text: 'Current assets, liabilities, and what the survivors will need.',
          why: 'The section states that planning survivor protection means looking at current assets, liabilities, and what the survivors will need.',
          correct: true,
        },
        {
          text: 'Whether dividends will be paid as cash or as paid-up additions.',
          why: 'Those are dividend options on a participating policy. They are not the planning factors for survivor protection.',
        },
        {
          text: 'The average number of months a settlement provider projects the insured to live.',
          why: 'That is life expectancy in a life settlement. Survivor-protection planning uses assets, liabilities, and survivor needs.',
        },
      ],
    ),
    question(
      'c2q27',
      'What does the course say about a young family and the estate created when the first premium is paid?',
      [
        {
          text: 'Earnings, savings, and investments create that estate before any premium is paid.',
          why: 'Earnings, savings, and investments take time. The immediate estate is created when the first premium is paid.',
        },
        {
          text: 'The new estate equals the cash value that has built inside a permanent policy.',
          why: 'Cash accumulation builds value over time while the insured is living. Estate creation at the first premium is at least equal to the death benefit.',
        },
        {
          text: 'The family can create an immediate estate at least equal to the death benefit, and no other legal method creates an immediate estate at such a small cost.',
          why: 'Estate creation happens at the first premium. The course states both the size of that estate and that no other legal method creates an immediate estate at such a small cost.',
          correct: true,
        },
        {
          text: 'The family must liquidate other assets before the death benefit becomes an estate.',
          why: 'Liquidation is selling assets to raise capital. Life insurance can keep a family from having to liquidate the estate at death.',
        },
      ],
    ),
    question(
      'c2q28',
      'Which statement describes cash accumulation?',
      [
        {
          text: 'It pays the entire death benefit in one sum.',
          why: 'That is a lump-sum payment of the death benefit. Cash accumulation is a living benefit inside a permanent policy.',
        },
        {
          text: 'It replaces the income of a wage earner or of a nonearning spouse who cares for minor children.',
          why: 'That is survivor protection. Cash accumulation is cash value the owner can use while living.',
        },
        {
          text: 'It uses the death benefit to pay estate taxes and other costs.',
          why: 'That is estate conservation. Cash accumulation happens while the insured is living, inside a permanent policy such as whole life.',
        },
        {
          text: 'In a permanent policy such as whole life, cash value builds and the policyowner can use it while living.',
          why: 'Cash accumulation is that living buildup of cash value. Liquidity is the further ability to borrow against those values for an immediate need.',
          correct: true,
        },
      ],
    ),
    question(
      'c2q29',
      'How does estate conservation use the death benefit?',
      [
        {
          text: 'It pays estate taxes and other costs so the assets of the estate do not have to be sold.',
          why: 'Estate conservation is that use of the death benefit. Liquidation would be the sale of assets the insurance is meant to avoid.',
          correct: true,
        },
        {
          text: 'It creates an estate the moment the first premium is paid.',
          why: 'That is estate creation. Estate conservation assumes an estate is already there and uses the benefit to pay death costs.',
        },
        {
          text: 'It lets the owner borrow against cash value while the insured is alive.',
          why: 'Borrowing against cash value is liquidity. Estate conservation is a death benefit use, not a living loan.',
        },
        {
          text: 'It pays policy proceeds directly to a minor because a minor is under legal age.',
          why: 'A minor generally cannot receive policy proceeds directly. Estate conservation pays estate taxes and other costs so assets need not be sold.',
        },
      ],
    ),
    question(
      'c2q30',
      'In this chapter, what is liquidation?',
      [
        {
          text: 'Paying the entire benefit in one sum.',
          why: 'A lump-sum payment pays the entire benefit in one sum. Liquidation means selling assets to raise capital.',
        },
        {
          text: 'Selling assets to raise capital.',
          why: 'The section defines liquidation as selling assets to raise capital. Life insurance can keep a family from having to liquidate the estate at death.',
          correct: true,
        },
        {
          text: 'Building cash value that can be used while the insured is living.',
          why: 'That is cash accumulation in a permanent policy. Liquidation is a sale of assets, which estate conservation is designed to avoid.',
        },
        {
          text: 'Replacing income by looking at assets, liabilities, and survivor needs.',
          why: 'That is the planning of survivor protection. Liquidation is the sale of assets to raise capital.',
        },
      ],
    ),
    question(
      'c2q31',
      'Which statement matches the chapter on a lump-sum payment and on a minor?',
      [
        {
          text: 'A lump-sum payment holds the benefit until legal age, and a minor must receive the proceeds directly.',
          why: 'A lump-sum payment pays the entire benefit in one sum. A minor generally cannot receive policy proceeds directly.',
        },
        {
          text: 'A lump-sum payment is the sale of estate assets, and a minor is the person who must liquidate the estate.',
          why: 'Selling assets is liquidation. A lump-sum payment is a form of paying the benefit, and a minor generally cannot receive proceeds directly.',
        },
        {
          text: 'A lump-sum payment pays the entire benefit in one sum. A minor is a person under legal age and generally cannot receive policy proceeds directly.',
          why: 'Those are the two definitions in the section. The payment form and the limit on a minor are separate points.',
          correct: true,
        },
        {
          text: 'A lump-sum payment builds cash value while the insured is living, and a minor is any owner of a permanent policy.',
          why: 'Cash value that can be used while living is cash accumulation. A minor is a person under legal age, and that person generally cannot receive proceeds directly.',
        },
      ],
    ),
  ],
  'c2-amount': [
    question(
      'c2q32',
      'In the human life value example, $40,000 a year for 25 years produces what amount for the family?',
      [
        {
          text: 'A needs-approach total limited to the $50,000 wage.',
          why: 'The $50,000 figure is the wage in the example. The human life value stated for the family is $40,000 times 25 years.',
        },
        {
          text: 'A net premium of $400 and a gross premium of $600.',
          why: 'Those figures are the premium example of net premium plus loading. They are not the human life value result.',
        },
        {
          text: 'Cash value of $390,000 inside a $1,000,000 policy.',
          why: 'Those figures come from the life settlement example. Human life value in this example is $40,000 times 25 years.',
        },
        {
          text: 'A human life value to the family of $1,000,000.',
          why: 'The course calculates $40,000 times 25 years and states the human life value to the family as $1,000,000.',
          correct: true,
        },
      ],
    ),
    question(
      'c2q33',
      'What does the needs approach ask?',
      [
        {
          text: 'What the survivors need, rather than capitalizing the earnings of the insured.',
          why: 'The needs approach starts from predicted family needs after a premature death. It does not capitalize the earnings of the insured.',
          correct: true,
        },
        {
          text: 'How many of the 25 wage years remain for a 40-year-old earning $50,000.',
          why: 'The 40-year-old, the $50,000 wage, and the 25 years belong to the human life value example, which capitalizes earnings.',
        },
        {
          text: 'How interest and inflation adjust a human life value of $1,000,000.',
          why: 'Interest and inflation are used in the human life value example to set a benefit that could replace income. The needs approach asks what the survivors need.',
        },
        {
          text: 'Whether $40,000 of the wage is the portion spent on family needs.',
          why: 'That split is part of the human life value example. The needs approach looks at survivor needs instead of capitalizing earnings.',
        },
      ],
    ),
    question(
      'c2q34',
      'Which items are included in the predicted needs of the family under the needs approach?',
      [
        {
          text: 'Wages, inflation, the years until retirement, and the time value of money.',
          why: 'Those are the factors in the human life value approach. The needs approach starts from what the survivors will need.',
        },
        {
          text: 'Income, debt including the mortgage, investments, and other ongoing expenses.',
          why: 'The section lists those predicted needs. The approach asks what the survivors need rather than capitalizing earnings.',
          correct: true,
        },
        {
          text: 'The portion of a $50,000 wage that equals $40,000 a year for 25 years.',
          why: 'That arithmetic is the human life value example, which produces $1,000,000. It is not the needs list.',
        },
        {
          text: 'Mortality, interest, and expense loading.',
          why: 'Those three factors determine premium. The needs approach is a way to choose the amount of insurance from family needs.',
        },
      ],
    ),
    question(
      'c2q35',
      'In the human life value example, how much of the wage is spent on family needs, and until what age do the wages continue?',
      [
        {
          text: '$50,000 a year until age 121.',
          why: 'Age 121 is the maturity point described for whole life. In this example the person earns $50,000 until age 65, and $40,000 a year is spent on family needs.',
        },
        {
          text: '$1,000,000 a year until age 65.',
          why: '$1,000,000 is the human life value result, $40,000 times 25 years. It is not the yearly family amount.',
        },
        {
          text: '$40,000 a year, with wages continuing until age 65.',
          why: 'The 40-year-old earns $50,000 until age 65, and $40,000 a year of that is spent on family needs.',
          correct: true,
        },
        {
          text: '$40,000 until the mortgage is paid, because the mortgage is a human life value factor.',
          why: 'Debt, including the mortgage, is a needs-approach item. The human life value example uses $40,000 a year until age 65.',
        },
      ],
    ),
    question(
      'c2q36',
      'In the human life value example, the 40-year-old earns how much until age 65?',
      [
        {
          text: '$40,000.',
          why: '$40,000 a year is the portion spent on family needs. The wage itself is $50,000 until age 65.',
        },
        {
          text: '$1,000,000.',
          why: '$1,000,000 is the human life value, equal to $40,000 times 25 years. It is not the wage.',
        },
        {
          text: '$575,000.',
          why: '$575,000 is the life settlement offer in a different example. The wage in the human life value example is $50,000.',
        },
        {
          text: '$50,000.',
          why: 'The example states that a 40-year-old earns $50,000 until age 65. Of that, $40,000 a year is spent on family needs.',
          correct: true,
        },
      ],
    ),
    question(
      'c2q37',
      'After the human life value example multiplies $40,000 by 25 years, what are interest and inflation used to do?',
      [
        {
          text: 'Set a benefit that could replace that income.',
          why: 'The section states that interest and inflation are then used to set a benefit that could replace that income.',
          correct: true,
        },
        {
          text: 'Choose income, the mortgage, investments, and other ongoing expenses instead of earnings.',
          why: 'That list is the needs approach. Interest and inflation in this example are applied to the human life value so the benefit can replace income.',
        },
        {
          text: 'Decide whether coverage should be term or permanent.',
          why: 'Term and permanent describe how long coverage lasts. They are not the interest and inflation step in the human life value example.',
        },
        {
          text: 'Measure life expectancy as an average number of months.',
          why: 'Life expectancy in a life settlement is a month-based projection from medical history and mortality factors. It is not this interest and inflation step.',
        },
      ],
    ),
  ],
  'c2-settlements': [
    question(
      'c2q38',
      'What transfer of rights does a life settlement require?',
      [
        {
          text: 'A beneficiary change that leaves the original owner in place.',
          why: 'A life settlement sells the policy. It requires an absolute assignment of all rights from the original owner to the new owner.',
        },
        {
          text: 'An absolute assignment of all rights from the original owner to the new owner.',
          why: 'The sale is for compensation, usually cash, and that absolute assignment moves every ownership right to the buyer.',
          correct: true,
        },
        {
          text: 'A surrender that pays only the cash value from the insurer.',
          why: 'A settlement is a sale to a third party, often for more than the cash surrender value. It is not a surrender to the insurer.',
        },
        {
          text: 'A new application in which a stranger must have insurable interest at the time of sale.',
          why: 'Insurable interest must exist at the original application between the policyowner and the insured. The settlement business sells to a third party who has no insurable interest.',
        },
      ],
    ),
    question(
      'c2q39',
      'Why do owners sell existing policies in a life settlement?',
      [
        {
          text: 'To create an immediate estate at the first premium.',
          why: 'Estate creation is a personal use of newly purchased insurance. Owners settle existing policies because they no longer need the coverage or the premium has grown too high.',
        },
        {
          text: 'To fund the purchase of a business after an owner dies or becomes disabled.',
          why: 'That is the role of life insurance in a buy-sell agreement. A life settlement is a sale of an existing policy to a third party.',
        },
        {
          text: 'Because they no longer need the coverage or because the premium has grown too high.',
          why: 'Those are the reasons the section gives for the sale. The buyer then pays the premiums and collects the death benefit.',
          correct: true,
        },
        {
          text: 'Because a lawful settlement must be initiated by a stranger before the policy is issued.',
          why: 'A policy initiated for later sale is STOLI. A lawful life settlement is the sale of an existing policy.',
        },
      ],
    ),
    question(
      'c2q40',
      'Life settlements are often offered to which people, and for how much compared with cash surrender value?',
      [
        {
          text: 'To any beneficiary, for exactly the cash surrender value.',
          why: 'Beneficiaries are not required to have insurable interest, and they are not the people described as settlement offers. Offers are often for more than the cash surrender value.',
        },
        {
          text: 'To key employees, for a premium the business can deduct.',
          why: 'In key person insurance the business cannot deduct the premium. Settlement offers are a sale of an existing policy, often for more than cash surrender value.',
        },
        {
          text: 'Only to a 40-year-old, and only for a human life value of $1,000,000.',
          why: 'Those figures belong to the human life value example. Settlements are often offered to seniors, including people with a life-threatening illness and a short life expectancy.',
        },
        {
          text: 'Often to seniors, including people with a life-threatening illness and a short life expectancy, for more than the cash surrender value of the policy.',
          why: 'The section describes that market and states that the offer is for more than the cash surrender value.',
          correct: true,
        },
      ],
    ),
    question(
      'c2q41',
      'A 70-year-old owns a $1,000,000 policy with $390,000 of cash value. After reviewing medical records, what does the settlement provider offer?',
      [
        {
          text: '$575,000.',
          why: 'In the course example the provider offers $575,000, which is more than the $390,000 cash value.',
          correct: true,
        },
        {
          text: '$390,000, because a settlement cannot exceed the cash surrender value.',
          why: '$390,000 is the cash value in the example. The offer is $575,000, and settlements are often for more than cash surrender value.',
        },
        {
          text: '$1,000,000, paid by the insurer as a surrender.',
          why: 'The $1,000,000 is the death benefit the settlement company collects later. The offer to the owner is $575,000, and the transaction is a sale, not a surrender.',
        },
        {
          text: '$40,000, matching one year of family needs in the human life value example.',
          why: '$40,000 is the yearly family-needs figure in a different example. The settlement offer is $575,000.',
        },
      ],
    ),
    question(
      'c2q42',
      'After the transfer in that life settlement example, what does the settlement company do?',
      [
        {
          text: 'Returns the policy when the premium grows too high.',
          why: 'A premium that has grown too high is a reason the original owner sells. After the transfer, the settlement company pays the premiums.',
        },
        {
          text: 'Pays the premiums and collects the $1,000,000 death benefit.',
          why: 'The example states that after the transfer the settlement company pays the premiums and collects the $1,000,000 death benefit.',
          correct: true,
        },
        {
          text: 'Must itself have had insurable interest at the time of the original application.',
          why: 'Insurable interest must exist at application between the policyowner and the insured. The business of life settlements involves a third party who has no insurable interest.',
        },
        {
          text: 'Rewrites the face amount down to the $390,000 cash value.',
          why: '$390,000 is the cash value before the sale. The company collects the $1,000,000 death benefit after paying the premiums.',
        },
      ],
    ),
    question(
      'c2q43',
      'What is the business of life settlements?',
      [
        {
          text: 'Any activity in which an employer and an employee split the premium on a policy the employee owns.',
          why: 'A shared premium between employer and employee describes split dollar. The business of life settlements is solicitation or sale of a settlement contract.',
        },
        {
          text: 'The home office decision to accept a risk and assign a premium class.',
          why: 'That is company underwriting. The business of life settlements is activity that solicits or sells a life settlement contract.',
        },
        {
          text: 'Any activity that solicits or sells a life settlement contract to a third party who has no insurable interest in the insured.',
          why: 'That is the definition in the section. The owner seeks the settlement, and the insured is the person covered.',
          correct: true,
        },
        {
          text: 'Field underwriting by the producer who first solicited the applicant.',
          why: 'The producer is the field underwriter at application. Life settlement activity is the later solicitation or sale of a settlement contract to a third party.',
        },
      ],
    ),
    question(
      'c2q44',
      'In life settlement terms, who is the owner and who is the insured?',
      [
        {
          text: 'The owner is the settlement provider, and the insured is the person who buys a new policy.',
          why: 'The owner is the person who already owns the policy and seeks the settlement. The insured is the person covered.',
        },
        {
          text: 'The owner is the beneficiary, and the insured is the creditor.',
          why: 'A creditor interest is an insurable-interest rule, and beneficiaries do not have to have that interest. Settlement terms define the owner as the person seeking the settlement.',
        },
        {
          text: 'The owner is a stranger who initiates the policy, and the insured is the producer.',
          why: 'A stranger who initiates a policy for sale describes STOLI. In settlement terms the owner seeks the settlement and the insured is the person covered.',
        },
        {
          text: 'The owner is the person who owns the policy and seeks the settlement. The insured is the person covered.',
          why: 'The section defines those two roles that way. Life expectancy is then calculated for the insured.',
          correct: true,
        },
      ],
    ),
    question(
      'c2q45',
      'How does the chapter define life expectancy in a life settlement?',
      [
        {
          text: 'A calculation of the average number of months the insured is projected to live, based on medical history and mortality factors.',
          why: 'That is the settlement definition of life expectancy. It is a projection for the person covered.',
          correct: true,
        },
        {
          text: 'The 25 years from age 40 to age 65 in the human life value example.',
          why: 'Those ages and years capitalize earnings for human life value. Settlement life expectancy is an average number of months.',
        },
        {
          text: 'The specific period of temporary protection called pure life insurance.',
          why: 'That describes term insurance. Life expectancy here is a month-based projection from medical history and mortality factors.',
        },
        {
          text: 'How many people in a group, starting at a given age, are expected to be alive at the next age.',
          why: 'That is what a mortality table shows. Life expectancy in a settlement is the average number of months the insured is projected to live.',
        },
      ],
    ),
    question(
      'c2q46',
      'STOLI is financed and purchased solely for what purpose?',
      [
        {
          text: 'To give a business an immediate payment if a key employee dies.',
          why: 'An immediate payment at the death of a key employee is a business use of insurance the employer buys. STOLI is financed and purchased so the policy can be sold.',
        },
        {
          text: 'So the policy can be sold in a life settlement.',
          why: 'STOLI is financed and purchased solely for that sale. A person with no relationship to the insured initiates the policy in order to sell it.',
          correct: true,
        },
        {
          text: 'So the original owner can keep a policy after the premium grows too high.',
          why: 'A premium that has grown too high is a reason an owner sells an existing policy. STOLI is initiated so the new policy can be sold.',
        },
        {
          text: 'To create an estate at least equal to the death benefit for a young family.',
          why: 'That is estate creation from a personal purchase. STOLI exists so the policy can be sold in a life settlement.',
        },
      ],
    ),
    question(
      'c2q47',
      'Which statement about STOLI and a lawful life settlement is correct?',
      [
        {
          text: 'A lawful sale of an existing policy is STOLI whenever the insured is age 70.',
          why: 'Age 70 is only the age in the settlement example. A lawful life settlement of an existing policy is not STOLI.',
        },
        {
          text: 'Only the beneficiary must detect STOLI, because beneficiaries must have insurable interest.',
          why: 'Beneficiaries are not required to have insurable interest. Insurers take steps to detect STOLI.',
        },
        {
          text: 'Insurers take steps to detect STOLI, and a lawful life settlement of an existing policy is not STOLI.',
          why: 'The section states both points. STOLI is the arrangement initiated so a policy can be sold, not the lawful sale of a policy that already exists.',
          correct: true,
        },
        {
          text: 'STOLI is permitted when the employer is the beneficiary of key person insurance.',
          why: 'Key person insurance is a business purchase in which the business has an insurable interest. STOLI violates insurable interest, and insurers take steps to detect it.',
        },
      ],
    ),
    question(
      'c2q48',
      'A person with no relationship to the insured initiates a policy that will benefit someone who has no insurable interest. What is that arrangement?',
      [
        {
          text: 'A lawful life settlement of a policy the owner bought earlier and no longer needs.',
          why: 'A lawful settlement sells an existing policy. STOLI is initiated to obtain a policy that will benefit someone who has no insurable interest.',
        },
        {
          text: 'Estate conservation, because the death benefit will pay estate taxes.',
          why: 'Estate conservation uses proceeds to pay death costs. The arrangement in the question is STOLI, which violates insurable interest.',
        },
        {
          text: 'An executive bonus, because the employee will own the policy.',
          why: 'An executive bonus lets an employee own a policy paid for with an employer bonus. STOLI is initiated for someone who has no insurable interest.',
        },
        {
          text: 'STOLI, which violates insurable interest.',
          why: 'STOLI is initiated to obtain a policy that will benefit someone who has no insurable interest. The policy is financed and purchased so it can be sold.',
          correct: true,
        },
      ],
    ),
  ],
  'c2-business': [
    question(
      'c2q49',
      'Businesses buy life insurance because it creates an immediate payment at death. What is the most common business use?',
      [
        {
          text: 'An employee benefit.',
          why: 'The most common business use is an employee benefit. Other uses fund a continuation agreement, compensate executives, and protect the business if a key employee dies or becomes disabled.',
          correct: true,
        },
        {
          text: 'A life settlement sold to a third party who has no insurable interest.',
          why: 'That is the business of life settlements, and STOLI violates insurable interest. It is not the most common business use of life insurance.',
        },
        {
          text: 'Industrial insurance with a face amount of about $1,000 or less.',
          why: 'Those small face amounts describe industrial, or home service, life insurance. The most common business use is an employee benefit.',
        },
        {
          text: 'A financed purchase that reduces the cash value of an existing policy.',
          why: 'Using existing coverage in a financed purchase is one form of replacement. The most common business use is an employee benefit.',
        },
      ],
    ),
    question(
      'c2q50',
      'Key person insurance is written on an employee with which value to the business?',
      [
        {
          text: 'An employee whose policy must pay dividends to that employee.',
          why: 'Policyowner dividends belong to participating policies. A key person is valued for knowledge, skills, or contacts the business would struggle to replace.',
        },
        {
          text: 'An employee whose knowledge, skills, or contacts the business would struggle to replace.',
          why: 'That is the key person the section describes. The employee is the insured, and the business receives the benefit.',
          correct: true,
        },
        {
          text: 'Any employee, because the death benefit is taxable income to the business.',
          why: 'The death benefit is usually received tax free, and the premium cannot be deducted. Coverage is for a person the business would struggle to replace.',
        },
        {
          text: 'A person with no relationship to the business who will sell the policy.',
          why: 'A stranger who initiates a policy for sale is STOLI. Key person coverage insures someone the business would struggle to replace.',
        },
      ],
    ),
    question(
      'c2q51',
      'Which statement about the kind of policy used for key person insurance is correct?',
      [
        {
          text: 'It must be term insurance, because a permanent policy cannot name a business as beneficiary.',
          why: 'Key person insurance may be term or permanent. Whole life and universal life are used most often, and the business is the beneficiary.',
        },
        {
          text: 'It must be industrial insurance, with premiums collected at the home of the employee.',
          why: 'Industrial insurance is small individual coverage, often for funeral expenses. Key person coverage may be term or permanent, and whole life and universal life are used most often.',
        },
        {
          text: 'It may be term or permanent, and whole life and universal life are used most often.',
          why: 'The section states both the range of plans and the two permanent forms used most often. The employee is the insured.',
          correct: true,
        },
        {
          text: 'It must be a nonparticipating policy that pays dividends to the employee.',
          why: 'A nonparticipating policy does not pay dividends to policyowners. Dividend rights are not what distinguishes key person insurance.',
        },
      ],
    ),
    question(
      'c2q52',
      'How are the key person premium and the death benefit usually treated for the business?',
      [
        {
          text: 'The premium is deductible, and the death benefit is taxable.',
          why: 'The business cannot deduct the premium. The death benefit is usually received tax free.',
        },
        {
          text: 'Both the premium and the death benefit are paid to the estate of the employee.',
          why: 'The employee must give permission and is the insured. The business is the premium payer and the beneficiary.',
        },
        {
          text: 'The employee pays the premium on a policy the business owns.',
          why: 'An executive bonus uses a bonus so the employee can pay premiums on a policy the employee owns. In key person coverage the business pays the premium and cannot deduct it.',
        },
        {
          text: 'The business cannot deduct the premium, and the death benefit is usually received tax free.',
          why: 'Those are the tax results stated for key person insurance. No other special contract is required.',
          correct: true,
        },
      ],
    ),
    question(
      'c2q53',
      'What consent is required for key person coverage, and what other contract must be signed?',
      [
        {
          text: 'The employee must give permission, and no other special contract is required.',
          why: 'The section states that the employee must give permission and that no other special contract is required. An employer may insure more than one key person.',
          correct: true,
        },
        {
          text: 'The employee must become the policyowner and the premium payer.',
          why: 'The employee is the insured and must consent. The business is the applicant, policyowner, premium payer, and beneficiary.',
        },
        {
          text: 'The employee must absolutely assign the policy to a settlement provider.',
          why: 'An absolute assignment of all rights is a life settlement. Key person coverage requires the employee permission and no other special contract.',
        },
        {
          text: 'The employer must use a buy-sell agreement, because that is the only way to insure a key person.',
          why: 'A buy-sell agreement is a separate business-continuation arrangement. Key person coverage requires employee permission and no other special contract.',
        },
      ],
    ),
    question(
      'c2q54',
      'Who is the insured in key person insurance, and how many key people may an employer insure?',
      [
        {
          text: 'The business is the insured, and the employer may cover only one key person.',
          why: 'The employee is the insured. An employer may insure more than one key person.',
        },
        {
          text: 'The employee is the insured, and an employer may insure more than one key person.',
          why: 'The business is the applicant, owner, premium payer, and beneficiary. The employee is the insured, and more than one key person may be covered.',
          correct: true,
        },
        {
          text: 'The creditor is the insured because the business owes money to that creditor.',
          why: 'A creditor can have an insurable interest in a debtor. In key person coverage the employee is the insured.',
        },
        {
          text: 'The beneficiary is the insured, because the life of the beneficiary is the life being insured.',
          why: 'The life of the beneficiary is not the life being insured. In this arrangement the employee is the insured and the business is the beneficiary.',
        },
      ],
    ),
    question(
      'c2q55',
      'What does a buy-sell, or business continuation, agreement decide, and what does life insurance do?',
      [
        {
          text: 'It splits the premium, the cash value, or the death benefit between the employer and the employee.',
          why: 'That split is a split-dollar plan. A buy-sell agreement decides what happens to the business if an owner dies or becomes disabled.',
        },
        {
          text: 'It pays the employee a bonus used for premiums on a policy the employee owns.',
          why: 'That is an executive bonus. A buy-sell agreement is funded with life insurance so the business interest can be purchased.',
        },
        {
          text: 'It decides what happens to the business if an owner dies or becomes disabled, and life insurance funds the purchase.',
          why: 'The section gives the agreement that name, business continuation, and states that life insurance funds the purchase.',
          correct: true,
        },
        {
          text: 'It lets the business replace the insured with another key employee without evidence of insurability.',
          why: 'A change-of-insured provision can replace the insured life, but it is subject to evidence of insurability. A buy-sell agreement funds a purchase after death or disability.',
        },
      ],
    ),
    question(
      'c2q56',
      'In an executive bonus arrangement, who owns the policy and how is the premium paid?',
      [
        {
          text: 'The business owns the policy, pays the premium, and is the beneficiary.',
          why: 'Those are the business roles in key person insurance. An executive bonus is a policy the employee owns.',
        },
        {
          text: 'The employer and the employee share the premium, the cash value, or the death benefit.',
          why: 'That sharing is split dollar. An executive bonus uses the employer bonus to pay premiums on a policy the employee owns.',
        },
        {
          text: 'A third party with no insurable interest buys an existing policy for cash.',
          why: 'That is a life settlement. An executive bonus is compensation, not a sale to a third party.',
        },
        {
          text: 'The employee owns the policy and uses a bonus from the employer to pay the premiums.',
          why: 'The employer pays the bonus for that purpose. The policy belongs to the employee.',
          correct: true,
        },
      ],
    ),
    question(
      'c2q57',
      'How does the chapter describe deferred compensation?',
      [
        {
          text: 'An employer retirement, savings, or other plan that is not a qualified plan, often informally funded with life insurance.',
          why: 'That is the description in the section. It is separate from an executive bonus and from split dollar.',
          correct: true,
        },
        {
          text: 'A participating-policy dividend paid as a savings program.',
          why: 'A savings program is one way a participating policy may distribute dividends. Deferred compensation is an employer plan that is not a qualified plan.',
        },
        {
          text: 'A qualified plan.',
          why: 'Deferred compensation is not a qualified plan. It is often informally funded with life insurance.',
        },
        {
          text: 'The needs-approach list of income, debt, and the mortgage.',
          why: 'Those items help decide how much personal insurance a family needs. Deferred compensation is a business plan for an employee.',
        },
      ],
    ),
    question(
      'c2q58',
      'In a split-dollar plan, which parts of the policy may the employer and the employee agree to split?',
      [
        {
          text: 'Only the producer commission inside the expense loading.',
          why: 'Commission is one expense in the loading that helps set gross premium. Split dollar divides policy elements the employer and employee agree on.',
        },
        {
          text: 'The premium, the cash value, or the death benefit, as they agree.',
          why: 'The employer and the employee agree to buy and fund life insurance on the employee and to split the premium, the cash value, or the death benefit as they agree.',
          correct: true,
        },
        {
          text: 'The Notice Regarding Replacement and the buyer guide.',
          why: 'Those are disclosure documents in a sale or a replacement. They are not the values split in a split-dollar plan.',
        },
        {
          text: 'Dividends that a nonparticipating policy pays to the employee.',
          why: 'A nonparticipating policy does not pay dividends to policyowners. Split dollar is an agreement to split premium, cash value, or death benefit.',
        },
      ],
    ),
    question(
      'c2q59',
      'What does a change-of-insured provision let a business do?',
      [
        {
          text: 'Deduct the key person premium and tax the death benefit.',
          why: 'The business cannot deduct the key person premium, and the death benefit is usually received tax free. A change-of-insured provision is about replacing the insured life.',
        },
        {
          text: 'Sell the policy to a third party without an absolute assignment.',
          why: 'A life settlement requires an absolute assignment of all rights. A change-of-insured provision lets the business change which key employee is insured.',
        },
        {
          text: 'Replace the insured life with another key employee, subject to evidence of insurability, instead of buying a new policy.',
          why: 'The provision is found in some business-owned policies and allows that substitution instead of a new policy, subject to evidence of insurability.',
          correct: true,
        },
        {
          text: 'Name the insurer as beneficiary until the first key employee retires.',
          why: 'In key person coverage the business is the beneficiary. The change-of-insured provision replaces the insured life, subject to evidence of insurability.',
        },
      ],
    ),
  ],
  'c2-classes': [
    question(
      'c2q60',
      'What is term insurance?',
      [
        {
          text: 'A general name for whole life policies that stay in force to age 121 if the premium is paid.',
          why: 'That is permanent life insurance. Term insurance is temporary protection for a specific period.',
        },
        {
          text: 'Coverage of many people under one contract.',
          why: 'That is group insurance. Term describes how long an individual period of protection lasts, not how many people are covered.',
        },
        {
          text: 'A policy that accumulates cash value based on a portfolio of securities.',
          why: 'That is a variable product, and it has no guarantee of performance. Term is temporary protection, also called pure life insurance.',
        },
        {
          text: 'Temporary protection for a specific period, also called pure life insurance.',
          why: 'The section defines term that way. Permanent insurance is the class that adds lifetime protection and cash value.',
          correct: true,
        },
      ],
    ),
    question(
      'c2q61',
      'What does permanent life insurance provide, and how long can whole life stay in force?',
      [
        {
          text: 'Lifetime protection and a savings element, the cash value. Whole life stays in force to age 121 if the premium is paid.',
          why: 'Permanent life insurance is the general name for those whole life policies, and it provides both the lifetime protection and the cash value.',
          correct: true,
        },
        {
          text: 'Temporary protection for a specific period, with no savings element described.',
          why: 'Temporary protection, also called pure life insurance, is term. Permanent insurance adds lifetime protection and cash value.',
        },
        {
          text: 'Dividends to policyowners even when the policy is nonparticipating.',
          why: 'A nonparticipating policy does not pay dividends to policyowners. Permanent insurance is defined by lifetime protection and cash value, not by dividends.',
        },
        {
          text: 'A usual face amount of about $1,000 or less, with premiums collected at the home of the insured.',
          why: 'Those traits describe industrial, or home service, life insurance. Permanent insurance is lifetime protection plus cash value.',
        },
      ],
    ),
    question(
      'c2q62',
      'A participating policy issued by a mutual company may distribute dividends to policyowners in which ways?',
      [
        {
          text: 'As a performance guarantee on a variable policy.',
          why: 'Variable products accumulate cash value based on a portfolio of securities, without a guarantee of performance. Dividend options are a separate feature of participating policies.',
        },
        {
          text: 'As cash, reduced premiums, paid-up additions, a savings program, or one-year term insurance.',
          why: 'Those are the dividend forms named for a participating policy issued by a mutual company.',
          correct: true,
        },
        {
          text: 'As the death benefit, because every term policy pays dividends.',
          why: 'Every life policy pays a death benefit, but that benefit is not a dividend. A nonparticipating policy does not pay dividends, and term describes duration rather than dividend rights.',
        },
        {
          text: 'Only when the face amount is about $1,000 or less.',
          why: 'A face amount of about $1,000 or less describes industrial insurance. Dividend rights depend on whether the policy participates.',
        },
      ],
    ),
    question(
      'c2q63',
      'Which statement describes a nonparticipating policy?',
      [
        {
          text: 'It must distribute dividends as paid-up additions.',
          why: 'Paid-up additions are one dividend option on a participating policy. A nonparticipating policy does not pay dividends to policyowners.',
        },
        {
          text: 'It is another name for industrial insurance of about $1,000 or less.',
          why: 'Industrial insurance is distinguished by small face amounts and frequent premium collection. Nonparticipating refers to the absence of policyowner dividends.',
        },
        {
          text: 'It does not pay dividends to policyowners.',
          why: 'Only participating policies distribute dividends to policyowners. A nonparticipating policy does not.',
          correct: true,
        },
        {
          text: 'It pays dividends to policyowners as cash or as one-year term insurance.',
          why: 'Cash and one-year term insurance are dividend options on a participating policy. A nonparticipating policy does not pay dividends to policyowners.',
        },
      ],
    ),
    question(
      'c2q64',
      'Which description fits industrial, or home service, life insurance?',
      [
        {
          text: 'The larger individual policies written in bigger amounts.',
          why: 'That is ordinary life insurance. Industrial insurance is written in small amounts.',
        },
        {
          text: 'Many people covered under one contract.',
          why: 'That is group insurance. Industrial insurance is written on an individual basis.',
        },
        {
          text: 'Cash value based on a portfolio of securities, with no guarantee of performance.',
          why: 'That is a variable product. Industrial insurance is small individual coverage, often to help pay funeral expenses.',
        },
        {
          text: 'Individual policies in small amounts, usually a face amount of about $1,000 or less, often to help pay funeral expenses, with premiums collected frequently, often at the home of the insured.',
          why: 'The section describes industrial, or home service, life insurance with those amounts, that purpose, and that collection pattern.',
          correct: true,
        },
      ],
    ),
    question(
      'c2q65',
      'What is ordinary life insurance?',
      [
        {
          text: 'The larger individual policies written in bigger amounts.',
          why: 'Ordinary life is that larger individual coverage. Industrial insurance is the small-amount counterpart.',
          correct: true,
        },
        {
          text: 'Temporary protection for a specific period, also called pure life insurance.',
          why: 'That is term insurance. Ordinary life refers to larger individual policies, not to the term class.',
        },
        {
          text: 'Coverage that stays in force only until age 65.',
          why: 'Age 65 is the retirement age in the human life value example. Ordinary life is defined by larger individual amounts, not by that age.',
        },
        {
          text: 'A life policy that does not pay a death benefit.',
          why: 'Every life policy pays a death benefit. Ordinary life is the larger individual policy written in bigger amounts.',
        },
      ],
    ),
    question(
      'c2q66',
      'How does group insurance differ from individual insurance?',
      [
        {
          text: 'Group insurance covers one life and is underwritten on that person, while individual insurance covers many people under one contract.',
          why: 'Those descriptions are reversed. Group coverage is many people under one contract. Individual coverage is one life, underwritten on that person.',
        },
        {
          text: 'Group insurance covers many people under one contract. Individual insurance covers one life and is underwritten on that person.',
          why: 'The section draws that contrast. Both are still life insurance, and every life policy pays a death benefit.',
          correct: true,
        },
        {
          text: 'Group insurance is the only class that pays a death benefit.',
          why: 'Every life policy pays a death benefit. Group and individual differ in how many people are covered and how the life is underwritten.',
        },
        {
          text: 'Group insurance is ordinary life written in bigger amounts, and individual insurance is industrial coverage of about $1,000 or less.',
          why: 'Ordinary life is the larger individual policy, and industrial coverage is the small face amount. Group insurance covers many people under one contract. Individual insurance covers one life and is underwritten on that person.',
        },
      ],
    ),
    question(
      'c2q67',
      'How do fixed life products differ from variable life products?',
      [
        {
          text: 'Fixed products have no guarantee, and variable products guarantee the cash value.',
          why: 'The guarantees run the other way. Fixed products offer guaranteed minimum or fixed benefits. Variable products do not guarantee performance.',
        },
        {
          text: 'Fixed products are temporary protection, and variable products are pure life insurance.',
          why: 'Temporary protection, also called pure life insurance, is term. Fixed and variable describe the benefit or cash-value guarantee, not the term class.',
        },
        {
          text: 'Fixed products offer guaranteed minimum or fixed benefits. Variable products accumulate cash value based on a portfolio of securities, without a guarantee of performance.',
          why: 'That is the contrast in the section. The classes also differ in how long coverage lasts and in who shares in company earnings.',
          correct: true,
        },
        {
          text: 'Variable products pay policyowner dividends, and fixed products are nonparticipating by definition.',
          why: 'Dividends depend on whether the policy participates. Fixed and variable refer to guaranteed benefits versus a securities portfolio with no performance guarantee.',
        },
      ],
    ),
    question(
      'c2q68',
      'Every life policy pays a death benefit. In what two ways do the classes of life insurance differ?',
      [
        {
          text: 'In the premium mode, and in whether the producer is a field underwriter.',
          why: 'Premium mode is how often the premium is paid, and the producer is the field underwriter. Classes differ in duration and in who shares in company earnings.',
        },
        {
          text: 'In the human life value approach and in the needs approach.',
          why: 'Those are two ways to decide how much personal insurance to buy. They are not the differences among classes of policies.',
        },
        {
          text: 'In who may buy a life settlement and in how insurers detect STOLI.',
          why: 'Those are settlement rules. Policy classes differ in how long coverage lasts and in who shares in company earnings.',
        },
        {
          text: 'In how long coverage lasts and in who shares in company earnings.',
          why: 'The section states those two differences. Term and permanent illustrate duration. Participating and nonparticipating policies illustrate sharing through dividends.',
          correct: true,
        },
      ],
    ),
  ],
  'c2-solicit': [
    question(
      'c2q69',
      'What is solicitation?',
      [
        {
          text: 'The attempt to persuade a person to buy a policy.',
          why: 'The section defines solicitation that way. Advertising used in that attempt must be accurate and must not be misleading.',
          correct: true,
        },
        {
          text: 'A presentation that shows nonguaranteed values as guaranteed.',
          why: 'An illustration may not show nonguaranteed values as guaranteed. Solicitation is the attempt to persuade a person to buy.',
        },
        {
          text: 'The home office decision to accept a risk and set the rate.',
          why: 'That decision belongs to the home office underwriter. Solicitation happens when someone tries to persuade a person to buy.',
        },
        {
          text: 'Delivery of an issued policy by mail.',
          why: 'Delivery may be by mail or in person after the company issues the policy. Solicitation is the earlier attempt to persuade the person to buy.',
        },
      ],
    ),
    question(
      'c2q70',
      'What standard must life insurance advertising meet?',
      [
        {
          text: 'It may use the existence of a guaranty association as the reason to buy.',
          why: 'Producers may not use the association as a reason to buy or advertise it as a selling point. Advertising must be accurate and must not be misleading.',
        },
        {
          text: 'It must be accurate and must not be misleading.',
          why: 'That is the advertising standard stated with solicitation. An illustration has a separate rule against showing nonguaranteed values as guaranteed.',
          correct: true,
        },
        {
          text: 'It may show nonguaranteed values as guaranteed if a buyer guide is attached.',
          why: 'An illustration may not show nonguaranteed values as guaranteed. A buyer guide is a generic consumer document, not permission to misstate values.',
        },
        {
          text: 'It takes the place of the policy summary for the policy being issued.',
          why: 'A policy summary is specific to the policy being issued. Advertising still has to be accurate and must not be misleading.',
        },
      ],
    ),
    question(
      'c2q71',
      'Which rule applies when a producer uses a life insurance illustration?',
      [
        {
          text: 'Nonguaranteed values may be shown as guaranteed so the buyer can compare costs.',
          why: 'An illustration may not show nonguaranteed values as guaranteed. It must show what is guaranteed and what is not.',
        },
        {
          text: 'The illustration is the generic consumer document that explains how to choose the amount and type of insurance.',
          why: 'That generic document is a buyer guide. An illustration is a presentation of nonguaranteed elements and must separate them from guaranteed values.',
        },
        {
          text: 'It must show what is guaranteed and what is not, and it may not show nonguaranteed values as guaranteed.',
          why: 'The section states both parts of that rule. The illustration depicts nonguaranteed elements of a policy.',
          correct: true,
        },
        {
          text: 'It is the report of the Medical Information Bureau and is given to the applicant as a sales piece.',
          why: 'The MIB is an underwriting aid. An illustration is a presentation of nonguaranteed policy elements, and those values may not be shown as guaranteed.',
        },
      ],
    ),
    question(
      'c2q72',
      'What is a buyer guide?',
      [
        {
          text: 'A document specific to the policy being issued that identifies the insurer, the agent, and the benefits.',
          why: 'That specific document is a policy summary. A buyer guide is generic.',
        },
        {
          text: 'The Notice Regarding Replacement signed by the applicant and the producer.',
          why: 'That notice is a replacement disclosure. A buyer guide explains how to choose amount and type and how to compare costs.',
        },
        {
          text: 'An illustration that treats nonguaranteed values as if they were guaranteed.',
          why: 'An illustration may not do that. A buyer guide is a generic consumer document, not a depiction of nonguaranteed values of one policy.',
        },
        {
          text: 'A generic consumer document that explains how to choose the amount and type of insurance and how to compare costs.',
          why: 'The section defines the buyer guide that way. The policy summary, by contrast, is specific to the policy being issued.',
          correct: true,
        },
      ],
    ),
    question(
      'c2q73',
      'What does a policy summary contain?',
      [
        {
          text: 'It is specific to the policy being issued. It identifies the insurer, the agent, the policy, premiums, and benefits, including cash values and dividends, and it distinguishes guaranteed from nonguaranteed items.',
          why: 'Those are the contents named in the section. A buyer guide is the generic document, not this policy-specific summary.',
          correct: true,
        },
        {
          text: 'It is a generic guide that never names the policy being issued.',
          why: 'A generic guide to amount, type, and cost comparison is the buyer guide. The policy summary is specific to the policy being issued.',
        },
        {
          text: 'It advertises guaranty association limits as a reason to choose the insurer.',
          why: 'Producers may not use the guaranty association as a reason to buy. A policy summary discloses the specific policy and separates guaranteed from nonguaranteed items.',
        },
        {
          text: 'It replaces the need to learn the situation of the customer before recommending a policy.',
          why: 'Suitability means the recommendation fits the needs and financial objectives of the customer. A policy summary is a disclosure about the policy being issued.',
        },
      ],
    ),
    question(
      'c2q74',
      'Which methods does the chapter name for comparing the cost of policies?',
      [
        {
          text: 'The human life value approach and the needs approach.',
          why: 'Those approaches help decide how much insurance to buy. Cost comparison methods are traditional net cost and interest-adjusted methods.',
        },
        {
          text: 'Traditional net cost and interest-adjusted methods.',
          why: 'The section names those cost comparison methods. A comparison that ignores the time value of money can make a policy look cheaper than it is.',
          correct: true,
        },
        {
          text: 'Preferred, standard, and substandard risk classes.',
          why: 'Those classes describe how an accepted risk is rated. They are not the cost comparison methods used to compare policies.',
        },
        {
          text: 'Mortality tables and morbidity tables.',
          why: 'Mortality tables project deaths, and morbidity tables do similar work for sickness and injury. Cost comparison methods named here are traditional net cost and interest-adjusted methods.',
        },
      ],
    ),
    question(
      'c2q75',
      'What can happen if a cost comparison ignores the time value of money?',
      [
        {
          text: 'The policy summary must leave out cash values and dividends.',
          why: 'A policy summary includes benefits such as cash values and dividends. Ignoring the time value of money can make a policy look cheaper than it is.',
        },
        {
          text: 'The illustration may label nonguaranteed values as guaranteed.',
          why: 'An illustration may not show nonguaranteed values as guaranteed. That rule is separate from the warning about cost comparisons and the time value of money.',
        },
        {
          text: 'The comparison can make a policy look cheaper than it is.',
          why: 'The section states that result for a comparison that ignores the time value of money. Interest-adjusted methods are one way to compare costs.',
          correct: true,
        },
        {
          text: 'The annual premium mode becomes the most expensive way to pay.',
          why: 'The annual mode has the lowest total outlay. A cost comparison that ignores the time value of money can make a policy look cheaper than it is.',
        },
      ],
    ),
    question(
      'c2q76',
      'What does a guaranty association do for policyowners?',
      [
        {
          text: 'It sets the gross premium by adding expense loading to the net premium.',
          why: 'Gross premium is net premium plus expense. A guaranty association protects policyowners if a member insurer becomes insolvent.',
        },
        {
          text: 'It assigns applicants to preferred, standard, or substandard classes.',
          why: 'The home office underwriter assigns the risk class. The guaranty association is a protection if a member insurer becomes insolvent.',
        },
        {
          text: 'It replaces existing coverage through a financed purchase.',
          why: 'A financed purchase is one form of replacement. The guaranty association protects policyowners, up to stated limits, in an insolvency.',
        },
        {
          text: 'It protects policyowners, up to stated limits, if a member insurer becomes insolvent.',
          why: 'That is the protection the section describes. Producers may not use the existence of the association as a reason to buy.',
          correct: true,
        },
      ],
    ),
    question(
      'c2q77',
      'What does suitability require of a producer recommendation?',
      [
        {
          text: 'The recommendation fits the insurance needs and financial objectives of the customer, and the producer should learn the customer situation before recommending a policy.',
          why: 'The section defines suitability that way and states that the producer should learn the situation first.',
          correct: true,
        },
        {
          text: 'Any policy is suitable if the advertising is accurate.',
          why: 'Advertising must be accurate and must not be misleading. Suitability is the further requirement that the recommendation fit the customer needs and objectives.',
        },
        {
          text: 'A recommendation is suitable when the guaranty association is the reason the policy fits.',
          why: 'Producers may not use the guaranty association as a reason to buy. Suitability is about the customer needs and financial objectives.',
        },
        {
          text: 'Suitability means the illustration shows only nonguaranteed values and labels them guaranteed.',
          why: 'An illustration must show what is guaranteed and what is not, and it may not show nonguaranteed values as guaranteed. Suitability is about the fit of the recommendation.',
        },
      ],
    ),
  ],
  'c2-field': [
    question(
      'c2q78',
      'Which tasks are part of field underwriting?',
      [
        {
          text: 'Setting the gross premium from mortality, interest, and expense.',
          why: 'The company sets the premium from those factors. Field underwriting is the producer work of solicitation, the application, signatures, the initial premium and receipt, and delivery.',
        },
        {
          text: 'Proper solicitation, helping prevent adverse selection, completing the application, and obtaining the required signatures.',
          why: 'Those duties are included in field underwriting. The producer is the company field underwriter because the producer solicited the applicant.',
          correct: true,
        },
        {
          text: 'Deciding at the home office whether to accept the risk and at what rate.',
          why: 'The home office underwriter makes that decision. The producer gathers information as the field underwriter.',
        },
        {
          text: 'Refusing coverage solely because of an MIB report.',
          why: 'An applicant cannot be refused solely because of adverse MIB information. That refusal is not a field-underwriting duty.',
        },
      ],
    ),
    question(
      'c2q79',
      'What is the application in the underwriting of life insurance?',
      [
        {
          text: 'A sales illustration of nonguaranteed elements.',
          why: 'An illustration depicts nonguaranteed elements and may not show them as guaranteed. The application is the starting point for risk selection.',
        },
        {
          text: 'The policy summary left with the applicant at delivery.',
          why: 'A policy summary identifies the specific policy being issued. The application is the basic source of information for risk selection.',
        },
        {
          text: 'The starting point and the basic source of information for risk selection.',
          why: 'The section describes the application that way. Part 1 is general information, and Part 2 is medical information.',
          correct: true,
        },
        {
          text: 'The guaranty association notice used as an inducement to buy.',
          why: 'Producers may not use the guaranty association as a reason to buy. The application is the basic source of underwriting information.',
        },
      ],
    ),
    question(
      'c2q80',
      'Part 1, General Information, asks for which items?',
      [
        {
          text: 'Only the health history of the proposed insured.',
          why: 'Health history is Part 2, Medical Information. Part 1 asks for identifying and financial items such as name, age, address, and occupation.',
        },
        {
          text: 'An attending physician statement and a written HIV consent.',
          why: 'Those are company-underwriting tools. Part 1 asks for general information such as name, age, address, birth date, gender, income, marital status, and occupation.',
        },
        {
          text: 'The net premium, the loading, and the premium mode.',
          why: 'Those are premium-calculation items. Part 1 collects general information about the proposed insured and the coverage.',
        },
        {
          text: 'Name, age, address, birth date, gender, income, marital status, and occupation.',
          why: 'Those are the Part 1 items listed in the section. The same part also asks about existing policies and replacement.',
          correct: true,
        },
      ],
    ),
    question(
      'c2q81',
      'Besides personal details, what else does Part 1 cover?',
      [
        {
          text: 'It asks about existing policies and whether the new insurance will replace them. It identifies the type and amount of coverage and usually names the beneficiary.',
          why: 'Part 1 includes those coverage and replacement questions along with the general identifying information.',
          correct: true,
        },
        {
          text: 'It is limited to hobbies and habits gathered for an inspection report.',
          why: 'Finances, character, work, hobbies, and habits belong to an inspection report. Part 1 asks about existing policies, replacement, the coverage, and usually the beneficiary.',
        },
        {
          text: 'It calculates life expectancy as an average number of months.',
          why: 'That calculation is life expectancy in a life settlement. Part 1 identifies the coverage and asks whether existing policies will be replaced.',
        },
        {
          text: 'It assigns a preferred, standard, or substandard class.',
          why: 'The home office underwriter assigns the class if the applicant is acceptable. Part 1 supplies general information, including existing coverage and the beneficiary.',
        },
      ],
    ),
    question(
      'c2q82',
      'What does Part 2, Medical Information, cover?',
      [
        {
          text: 'The insurer, the agent, the premiums, the cash values, and the dividends.',
          why: 'Those identifications belong in a policy summary. Part 2 covers the health history of the proposed insured.',
        },
        {
          text: 'The health history of the proposed insured.',
          why: 'Part 2 is Medical Information and covers that health history. Part 1 is the general information section.',
          correct: true,
        },
        {
          text: 'Whether a life settlement contract is being sold to a third party.',
          why: 'The business of life settlements is that solicitation or sale. Part 2 of the application covers health history.',
        },
        {
          text: 'The Fair Credit Reporting Act notice for an inspection report.',
          why: 'Companies that use inspection reports must follow the Fair Credit Reporting Act. Part 2 itself covers the health history of the proposed insured.',
        },
      ],
    ),
    question(
      'c2q83',
      'When may a conditional receipt provide coverage?',
      [
        {
          text: 'Only after the policy is personally delivered and a statement of good health is signed, even though no premium was collected.',
          why: 'Coverage generally begins when the premium has been paid and the policy has been delivered, unless a receipt already put coverage in force. A conditional receipt has its own start.',
        },
        {
          text: 'From the date of death, if the beneficiary has insurable interest.',
          why: 'Beneficiaries do not have to have insurable interest, and the interest is not retested at death. A conditional receipt may start at application or the medical exam if the person is insurable as applied for.',
        },
        {
          text: 'From the date of application or the medical exam, if the proposed insured is insurable as applied for.',
          why: 'That is the conditional-receipt rule in the section. The producer issues the appropriate receipt when a premium is collected with the application.',
          correct: true,
        },
        {
          text: 'Only when the premium is paid monthly, because monthly mode has the lowest total outlay.',
          why: 'The annual mode has the lowest total outlay. A conditional receipt is tied to insurability as applied for, not to the monthly mode.',
        },
      ],
    ),
    question(
      'c2q84',
      'If the producer collects a premium with the application, what must the producer issue?',
      [
        {
          text: 'Nothing until personal delivery, even though the premium was collected.',
          why: 'If a premium is collected with the application, the producer issues the appropriate receipt at that time. Personal delivery is a later field duty.',
        },
        {
          text: 'A copy of the MIB report comparing this application with other insurers.',
          why: 'The MIB is an underwriting aid, and an applicant cannot be refused solely because of adverse information in it. Collecting the premium calls for the appropriate receipt.',
        },
        {
          text: 'A waiver of the required signatures, if the receipt is conditional.',
          why: 'The producer must obtain the required signatures. Collecting a premium also means issuing the appropriate receipt.',
        },
        {
          text: 'The appropriate receipt.',
          why: 'The section states that if a premium is collected with the application, the producer issues the appropriate receipt. A conditional receipt may provide early coverage if the person is insurable as applied for.',
          correct: true,
        },
      ],
    ),
    question(
      'c2q85',
      'Which pair of duties belongs to the producer as field underwriter?',
      [
        {
          text: 'Collecting the initial premium and issuing a receipt when one applies, and delivering the policy.',
          why: 'Both duties are included in field underwriting, along with solicitation, preventing adverse selection, the application, and the required signatures.',
          correct: true,
        },
        {
          text: 'Assigning the rated premium at the home office and ordering HIV tests for a large amount of coverage.',
          why: 'The home office underwriter decides the rate, and HIV testing is a company underwriting step. Field underwriting includes the initial premium, the receipt, and delivery.',
        },
        {
          text: 'Paying the death benefit and deciding whether insurable interest still exists at death.',
          why: 'After issue, the insurer pays the benefit whether or not insurable interest still exists. Field underwriting is application and delivery work, not claim payment.',
        },
        {
          text: 'Using the guaranty association as a selling point while collecting the premium.',
          why: 'Producers may not use the guaranty association as a reason to buy. Collecting the initial premium and delivering the policy are proper field duties.',
        },
      ],
    ),
  ],
  'c2-company': [
    question(
      'c2q86',
      'Who decides whether to accept a life insurance risk and at what rate?',
      [
        {
          text: 'The field underwriter who solicited the applicant.',
          why: 'The producer is the field underwriter and gathers the application. The accept-or-rate decision belongs to the home office underwriter.',
        },
        {
          text: 'The home office underwriter.',
          why: 'The home office underwriter decides whether to accept the risk and at what rate, using sources such as the application, reports, and exams.',
          correct: true,
        },
        {
          text: 'The Medical Information Bureau.',
          why: 'The MIB is only an aid. An applicant cannot be refused solely because of adverse information in an MIB report, and the MIB does not set the rate.',
        },
        {
          text: 'The guaranty association.',
          why: 'A guaranty association protects policyowners if a member insurer becomes insolvent. It does not accept risks or set rates.',
        },
      ],
    ),
    question(
      'c2q87',
      'Which list matches sources the home office underwriter may use?',
      [
        {
          text: 'The buyer guide, the policy summary, and the traditional net cost method only.',
          why: 'Those are solicitation and cost-comparison tools. Underwriting sources include the application, the agent report, medical information, and the MIB.',
        },
        {
          text: 'Dividend options, the premium mode, and the age-121 cash value.',
          why: 'Dividend options and age 121 describe policy classes. The premium mode is how often the premium is paid. They are not the underwriting-source list.',
        },
        {
          text: 'The application, the agent report, an attending physician statement, an inspection report, the MIB, and medical or lab exams, including HIV tests when required.',
          why: 'The section lists those sources. The underwriter uses them to decide whether to accept the risk and at what rate.',
          correct: true,
        },
        {
          text: 'Only the conditional receipt and the statement of good health.',
          why: 'A conditional receipt can put coverage in force early, and a statement of good health can be confirmed at delivery. The underwriter also uses the application, reports, the MIB, and exams.',
        },
      ],
    ),
    question(
      'c2q88',
      'What does an inspection, or investigative consumer, report cover, and which law applies when companies use these reports?',
      [
        {
          text: 'It covers only the death benefit and the cash values, under the replacement notice.',
          why: 'Cash values and benefits appear in a policy summary. An inspection report covers finances, character, work, hobbies, and habits, and the Fair Credit Reporting Act applies.',
        },
        {
          text: 'It covers mortality, interest, and loading, under the premium formula.',
          why: 'Those three factors determine premium. An inspection report covers finances, character, work, hobbies, and habits.',
        },
        {
          text: 'It is the MIB report, and the applicant can be refused solely because of it.',
          why: 'The MIB is a separate aid, and coverage cannot be refused solely because of adverse MIB information. An inspection report is the investigative consumer report, and companies that use it must follow the Fair Credit Reporting Act.',
        },
        {
          text: 'It covers finances, character, work, hobbies, and habits. Companies that use these reports must follow the Fair Credit Reporting Act.',
          why: 'The section states both the contents of the inspection report and the Fair Credit Reporting Act duty.',
          correct: true,
        },
      ],
    ),
    question(
      'c2q89',
      'What is the Medical Information Bureau?',
      [
        {
          text: 'A nonprofit membership corporation owned by member insurers.',
          why: 'The section identifies the MIB that way. It collects underwriting information so member companies can compare what they know.',
          correct: true,
        },
        {
          text: 'A government agency that sets the gross premium.',
          why: 'Gross premium is net premium plus expense, set by the insurer. The MIB is a nonprofit membership corporation owned by member insurers.',
        },
        {
          text: 'The producer who completes Part 1 of the application.',
          why: 'The producer is the field underwriter. The MIB is a nonprofit organization owned by member insurers, not the producer.',
        },
        {
          text: 'A settlement provider that offers more than the cash surrender value.',
          why: 'A settlement provider may offer more than cash surrender value for an existing policy. The MIB is an underwriting information bureau owned by member insurers.',
        },
      ],
    ),
    question(
      'c2q90',
      'Why do member insurers share information through the MIB?',
      [
        {
          text: 'So an insurer can refuse coverage solely because of adverse MIB information.',
          why: 'An applicant cannot be refused solely because of adverse information in an MIB report. The MIB is only an aid.',
        },
        {
          text: 'So companies can compare what they know with what other insurers have reported. The MIB is only an aid.',
          why: 'The section gives that comparison purpose and states that the MIB is only an aid. Sole reliance on adverse MIB information cannot support a refusal.',
          correct: true,
        },
        {
          text: 'So the report can be printed in the policy illustration as a guaranteed value.',
          why: 'An illustration depicts nonguaranteed policy elements and may not show them as guaranteed. MIB information is an underwriting aid, not an illustration entry.',
        },
        {
          text: 'So the MIB can assign the preferred, standard, and substandard classes.',
          why: 'If the applicant is acceptable, the underwriter assigns the class. The MIB only helps companies compare information.',
        },
      ],
    ),
    question(
      'c2q91',
      'Who performs medical exams, and who pays for them?',
      [
        {
          text: 'The applicant selects any physician and pays the fee.',
          why: 'Medical exams are done by physicians or paramedics at the expense of the insurer. The applicant does not bear that cost under this section.',
        },
        {
          text: 'The MIB performs the exam and bills the producer.',
          why: 'The MIB collects underwriting information from member insurers. It does not perform the medical exam. Physicians or paramedics do, at the insurer expense.',
        },
        {
          text: 'Physicians or paramedics perform the exams at the expense of the insurer.',
          why: 'The section states that medical exams are done that way. An HIV test, when required, has additional disclosure and consent rules.',
          correct: true,
        },
        {
          text: 'The guaranty association pays for the exams after a member insurer becomes insolvent.',
          why: 'The guaranty association protects policyowners, up to stated limits, in an insolvency. Medical exams are at the expense of the insurer.',
        },
      ],
    ),
    question(
      'c2q92',
      'When is an HIV test common, and what must the insurer do if it tests?',
      [
        {
          text: 'It is required for every industrial policy of about $1,000 or less, and the results may be used in advertising.',
          why: 'Industrial insurance is small coverage, often for funeral expenses. An HIV test is common for a large amount of coverage, and advertising must not be misleading. Results must be kept confidential.',
        },
        {
          text: 'It replaces the application as the basic source of information for risk selection.',
          why: 'The application remains the starting point and basic source. An HIV test is an additional exam step, common for a large amount of coverage.',
        },
        {
          text: 'It is forbidden in every case, because any HIV question is unfair discrimination.',
          why: 'Requiring an HIV test is not unfair discrimination when the stated conditions are met. The insurer must disclose the test, get written consent, keep results confidential, and use an approved protocol.',
        },
        {
          text: 'It is common for a large amount of coverage. The insurer must disclose the test, get written consent, keep results confidential, and use an approved protocol.',
          why: 'The section states both when the test is common and those four insurer duties.',
          correct: true,
        },
      ],
    ),
    question(
      'c2q93',
      'When is requiring an HIV test not unfair discrimination?',
      [
        {
          text: 'When everyone in the same class is tested, coverage is not denied on the test alone, and the test is FDA approved.',
          why: 'The section lists those three conditions. Meeting them means the testing requirement is not unfair discrimination.',
          correct: true,
        },
        {
          text: 'When the insurer denies coverage solely because of the test result.',
          why: 'One condition is that coverage is not denied on the test alone. A sole denial based on the test does not meet that condition.',
        },
        {
          text: 'When only some people in the same class are selected for the test.',
          why: 'The condition is that everyone in the same class is tested. Testing only some people in the class does not meet it.',
        },
        {
          text: 'When the test is not FDA approved.',
          why: 'One condition is that the test is FDA approved. A test that is not FDA approved fails that condition.',
        },
      ],
    ),
    question(
      'c2q94',
      'May an insurer ask whether the proposed insured has tested positive on an AIDS-related test?',
      [
        {
          text: 'No. Any question about an AIDS-related test is the same as investigating sexual orientation.',
          why: 'Investigating sexual orientation as part of underwriting is listed as unfair discrimination. Separately, an insurer may ask whether the proposed insured has tested positive on an AIDS-related test.',
        },
        {
          text: 'Yes. An insurer may ask whether the proposed insured has tested positive on an AIDS-related test.',
          why: 'The section permits that question. It is distinct from the ban on investigating sexual orientation.',
          correct: true,
        },
        {
          text: 'Yes, but only after the policy is delivered and coverage has already begun.',
          why: 'The question is an underwriting inquiry about the proposed insured. Delivery is later, when coverage generally begins if the premium is paid and no receipt already put coverage in force.',
        },
        {
          text: 'No. Only the MIB may ask, and the insurer cannot see the answer.',
          why: 'The MIB is an aid that lets insurers compare information. The section says the insurer may ask about a positive AIDS-related test.',
        },
      ],
    ),
    question(
      'c2q95',
      'What may an insurer do when it classifies risks, and what is it forbidden to do?',
      [
        {
          text: 'It must charge every person the same rate, even when the risks differ.',
          why: 'An insurer may distinguish good risks from poor risks. The higher the risk, the higher the premium.',
        },
        {
          text: 'It may use different rates, benefits, or terms for people of the same class and equal life expectancy.',
          why: 'The insurer may not unfairly discriminate between people of the same class and equal life expectancy in rates, benefits, or terms.',
        },
        {
          text: 'It may distinguish good risks from poor risks. It may not unfairly discriminate between people of the same class and equal life expectancy in rates, benefits, or terms.',
          why: 'The section states both the permission to distinguish risks and the limit on unfair discrimination within the same class and equal life expectancy.',
          correct: true,
        },
        {
          text: 'It may refuse coverage solely on adverse MIB information when two applicants have equal life expectancy.',
          why: 'Equal life expectancy is part of the unfair-discrimination limit. Adverse MIB information still cannot be the sole reason for a refusal.',
        },
      ],
    ),
    question(
      'c2q96',
      'Which of the following does the chapter list as unfair discrimination?',
      [
        {
          text: 'Charging a preferred risk a lower premium for superior health, lifestyle, and habits.',
          why: 'Preferred risks meet extra requirements and pay a lower premium for those reasons. That rating is a permitted distinction between risks.',
        },
        {
          text: 'Charging a substandard risk a rated premium because of occupation or habits.',
          why: 'Substandard risks are not acceptable at standard rates because of physical condition, history, occupation, or habits, and they pay a rated premium.',
        },
        {
          text: 'Using mortality, interest, and expense to set the premium for an accepted risk.',
          why: 'Those are the three primary premium factors. They are not the unfair-discrimination list.',
        },
        {
          text: 'Differences based solely on age or gender in a way the law forbids, on physical or mental impairment, on blindness or partial blindness, or on genetic characteristics, and investigating sexual orientation as part of underwriting.',
          why: 'The section includes those items as unfair discrimination. Distinguishing good risks from poor risks remains allowed.',
          correct: true,
        },
      ],
    ),
    question(
      'c2q97',
      'How does the underwriter treat a standard risk?',
      [
        {
          text: 'As the average risk, accepted with no extra rating.',
          why: 'Standard risks are the average risk and are accepted with no extra rating. Preferred risks pay less, and substandard risks pay a rated premium.',
          correct: true,
        },
        {
          text: 'As a risk that pays a lower premium than a preferred risk.',
          why: 'Preferred risks pay a lower premium than the standard risk because of superior health, lifestyle, and habits. Standard is the average rate.',
        },
        {
          text: 'As a risk rejected because there is no insurable interest.',
          why: 'Lack of insurable interest is a reason to decline a risk. A standard risk is accepted with no extra rating.',
        },
        {
          text: 'As a risk that pays a rated premium because of a physical condition.',
          why: 'A rated premium for physical condition, history, occupation, or habits describes a substandard risk. Standard risks have no extra rating.',
        },
      ],
    ),
    question(
      'c2q98',
      'Why is a person treated as a substandard, or high-exposure, risk, and what premium applies?',
      [
        {
          text: 'Superior health, lifestyle, and habits qualify the person for a lower premium.',
          why: 'That describes a preferred risk. A substandard risk is not acceptable at standard rates and pays a rated premium.',
        },
        {
          text: 'Physical condition, history, occupation, or habits make the person unacceptable at standard rates, so the person pays a rated premium.',
          why: 'The section defines substandard, or high-exposure, risks that way. The higher the risk, the higher the premium.',
          correct: true,
        },
        {
          text: 'The person is the average risk and is accepted with no extra rating.',
          why: 'That is the standard class. Substandard risks pay a rated premium because they are not acceptable at standard rates.',
        },
        {
          text: 'The purpose of the insurance is illegal, so the insurer issues no policy.',
          why: 'An illegal purpose, or a purpose against public policy, is a reason to decline. A substandard applicant can be issued at a rated premium.',
        },
      ],
    ),
    question(
      'c2q99',
      'Which applicant is a declined risk?',
      [
        {
          text: 'A preferred applicant who meets extra requirements for health, lifestyle, and habits.',
          why: 'Preferred risks are accepted at a lower premium. Declined risks are rejected and are not issued.',
        },
        {
          text: 'A standard applicant accepted at the average rate with no extra rating.',
          why: 'Standard risks are issued. A declined applicant is rejected.',
        },
        {
          text: 'An applicant rejected because there is no insurable interest, the person is medically unacceptable, the loss potential is not insurance, or the purpose is illegal or against public policy.',
          why: 'Those are the decline reasons in the section. No premium class is issued for a declined risk.',
          correct: true,
        },
        {
          text: 'A substandard applicant who accepts a rated premium.',
          why: 'A substandard risk is issued at a rated premium. A declined risk is rejected rather than rated.',
        },
      ],
    ),
    question(
      'c2q100',
      'Which statement matches the chapter rule that links risk and premium?',
      [
        {
          text: 'The higher the risk, the lower the premium.',
          why: 'The rule runs the other way. The higher the risk, the higher the premium.',
        },
        {
          text: 'Declined risks pay the lowest premium because the insurer expects no claim.',
          why: 'Declined risks are rejected. They are not a low-premium class. Preferred risks are the ones that pay less than standard.',
        },
        {
          text: 'Standard risks pay more than substandard risks.',
          why: 'Substandard risks pay a rated premium because the exposure is higher. Standard risks are accepted with no extra rating.',
        },
        {
          text: 'The higher the risk, the higher the premium.',
          why: 'That is the rule stated for risk classification. Preferred risks pay less than standard, and substandard risks pay more.',
          correct: true,
        },
      ],
    ),
  ],
  'c2-premium': [
    question(
      'c2q101',
      'Premiums are paid in advance. Which three primary factors determine the premium?',
      [
        {
          text: 'Mortality, interest, and expense.',
          why: 'Those are the three primary factors. Mortality minus interest is the net premium, and net premium plus expense is the gross premium.',
          correct: true,
        },
        {
          text: 'Human life value, family needs, and estate conservation.',
          why: 'Human life value and the needs approach help choose the amount of insurance. Estate conservation is a use of the death benefit. They are not the three premium factors.',
        },
        {
          text: 'Preferred, standard, and substandard classes.',
          why: 'Those classes change the rate for a given risk. The three primary factors that determine premium are mortality, interest, and expense.',
        },
        {
          text: 'Solicitation, the illustration, and suitability.',
          why: 'Those are sales duties. Once the applicant is insurable, mortality, interest, and expense determine the premium.',
        },
      ],
    ),
    question(
      'c2q102',
      'What is mortality in premium determination?',
      [
        {
          text: 'What the insurer expects to earn by investing premiums before claims are paid.',
          why: 'That is interest. Mortality is the rate of death in a specific group over a period of time.',
        },
        {
          text: 'The rate of death in a specific group over a period of time.',
          why: 'The section defines mortality that way. Mortality tables then show how many people in a group are expected to be alive at the next age.',
          correct: true,
        },
        {
          text: 'Commissions, taxes, and the cost of doing business.',
          why: 'Those items are expense, also called loading. Mortality is the rate of death, not the loading.',
        },
        {
          text: 'The average number of months a settlement insured is projected to live.',
          why: 'That is life expectancy in a life settlement, based on medical history and mortality factors. Mortality itself is the rate of death in a specific group.',
        },
      ],
    ),
    question(
      'c2q103',
      'What do mortality tables show, and what do morbidity tables do?',
      [
        {
          text: 'Mortality tables show cash values at age 121. Morbidity tables list dividend options.',
          why: 'Age 121 is a whole life duration, and dividend options belong to participating policies. Mortality tables project survivors, and morbidity tables address sickness and injury.',
        },
        {
          text: 'Mortality tables set the interest assumption. Morbidity tables set the loading.',
          why: 'Interest is expected investment earnings, and loading is expense. The tables measure death, or sickness and injury, rather than those two premium factors.',
        },
        {
          text: 'Mortality tables show how many people in a group, such as men, women, smokers, or nonsmokers, starting at a given age, are expected to be alive at the next age. Morbidity tables do similar work for sickness and injury in health insurance.',
          why: 'The section describes both tables that way. Mortality is the death factor in the life premium.',
          correct: true,
        },
        {
          text: 'Mortality tables are the interest-adjusted cost method. Morbidity tables are buyer guides.',
          why: 'Interest-adjusted methods compare policy costs, and a buyer guide is a generic consumer document. The tables measure mortality or morbidity.',
        },
      ],
    ),
    question(
      'c2q104',
      'What is interest in the determination of a life premium?',
      [
        {
          text: 'The extra collection expense of a monthly premium mode.',
          why: 'More frequent modes cost more because the insurer loses interest and has extra collection expense. Interest itself is the earnings the insurer expects from investing premiums.',
        },
        {
          text: 'Another name for expense loading.',
          why: 'Expense, also called loading, covers commissions, taxes, and the cost of doing business. Interest is a separate factor and is subtracted when the net premium is calculated.',
        },
        {
          text: 'The rated premium charged to a substandard risk.',
          why: 'A substandard risk pays a rated premium because of higher exposure. Interest is what the insurer expects to earn by investing premiums before claims are paid.',
        },
        {
          text: 'What the insurer expects to earn by investing premiums before claims are paid.',
          why: 'That expected earnings figure is interest. Mortality minus interest equals the net premium.',
          correct: true,
        },
      ],
    ),
    question(
      'c2q105',
      'Expense, also called loading, covers what?',
      [
        {
          text: 'Commissions, taxes, and the cost of doing business.',
          why: 'The section defines expense, or loading, as those costs. Net premium plus that expense equals the gross premium.',
          correct: true,
        },
        {
          text: 'Only the mortality charge shown for smokers on a mortality table.',
          why: 'Smokers are one group a mortality table can follow. Loading is commissions, taxes, and the cost of doing business, not the mortality charge alone.',
        },
        {
          text: 'The cash value the owner borrows for an immediate need.',
          why: 'Borrowing against cash value is liquidity. Loading is an element of the premium, not a policy loan.',
        },
        {
          text: 'The estate taxes paid from the death benefit so assets need not be sold.',
          why: 'That payment is estate conservation. Loading is the expense portion of the premium.',
        },
      ],
    ),
    question(
      'c2q106',
      'How is the net premium found, and what net premium does the course example use?',
      [
        {
          text: 'Gross premium plus loading. The example uses $600.',
          why: '$600 is the gross premium in the example, after $200 of loading is added. The net premium is mortality minus interest.',
        },
        {
          text: 'Mortality minus interest. In the example, mortality and interest produce a $400 net premium.',
          why: 'The section states that formula and that example. The policyowner pays the gross premium, which adds expense to this net premium.',
          correct: true,
        },
        {
          text: 'Interest plus expense. The example uses $200.',
          why: '$200 is the loading in the example, not the net premium. Net premium is mortality minus interest, and the example net premium is $400.',
        },
        {
          text: 'The annual mode outlay only. The example uses $50,000.',
          why: '$50,000 is the wage in the human life value example. The net premium example is $400, equal to mortality minus interest.',
        },
      ],
    ),
    question(
      'c2q107',
      'In the course example, the net premium is $400 and loading is $200. What gross premium does the policyowner pay?',
      [
        {
          text: '$200.',
          why: '$200 is the loading alone. Gross premium is the $400 net premium plus that $200 expense.',
        },
        {
          text: '$400.',
          why: '$400 is the net premium produced by mortality and interest. The policyowner pays the gross premium, which adds loading.',
        },
        {
          text: '$600.',
          why: 'Net premium plus expense equals the gross premium. The example adds $200 of loading to the $400 net premium and gets $600.',
          correct: true,
        },
        {
          text: '$1,000,000.',
          why: '$1,000,000 is the human life value in one example and the face amount in the settlement example. The gross premium in the premium example is $600.',
        },
      ],
    ),
    question(
      'c2q108',
      'Premiums may be paid annually, semiannually, quarterly, or monthly. Which statement about those modes is correct?',
      [
        {
          text: 'Monthly mode has the lowest total outlay because the insurer earns more interest.',
          why: 'More frequent modes cost more because the insurer loses interest and has extra collection expense. The annual mode has the lowest total outlay.',
        },
        {
          text: 'More frequent modes cost less because collection expense falls as payments increase.',
          why: 'More frequent modes have extra collection expense, and the insurer loses interest. They cost more, not less.',
        },
        {
          text: 'The only permitted mode is annual, so semiannual, quarterly, and monthly payments are unavailable.',
          why: 'The mode may be annual, semiannual, quarterly, or monthly. Annual has the lowest total outlay, but it is not the only mode.',
        },
        {
          text: 'More frequent modes cost more because the insurer loses interest and has extra collection expense. The annual mode has the lowest total outlay.',
          why: 'The section states both the reason more frequent modes cost more and the advantage of the annual mode.',
          correct: true,
        },
      ],
    ),
  ],
  'c2-delivery': [
    question(
      'c2q109',
      'What can personal delivery of the policy let the producer do?',
      [
        {
          text: 'Explain the contract, confirm that the health of the insured has not changed when a statement of good health is required, and collect any premium that was not paid with the application.',
          why: 'The section lists those three advantages of personal delivery. Delivery may also be by mail.',
          correct: true,
        },
        {
          text: 'Assign the risk class and set the mortality charge.',
          why: 'The home office underwriter accepts the risk and sets the rate. Mortality is a premium factor, not something personal delivery assigns.',
        },
        {
          text: 'Skip the Notice Regarding Replacement when the same producer knows the applicant.',
          why: 'The replacing producer must present that notice signed by the applicant and the producer. Personal delivery does not remove the replacement duty.',
        },
        {
          text: 'Use the guaranty association as the reason the buyer should accept the policy.',
          why: 'Producers may not use the guaranty association as a reason to buy. Personal delivery is for explaining the contract, the statement of good health when required, and any unpaid premium.',
        },
      ],
    ),
    question(
      'c2q110',
      'When does life insurance coverage generally begin?',
      [
        {
          text: 'At solicitation, before any premium is paid.',
          why: 'Solicitation is the attempt to persuade a person to buy. Coverage generally begins when the premium has been paid and the policy has been delivered, unless a receipt already put it in force.',
        },
        {
          text: 'When the premium has been paid and the policy has been delivered, unless a receipt already put coverage in force.',
          why: 'That is the general effective rule in the section, including the exception for a receipt that already started coverage.',
          correct: true,
        },
        {
          text: 'Only at the death of the insured, and only if insurable interest still exists.',
          why: 'After issue, the insurer pays whether or not insurable interest still exists. Coverage generally begins at premium payment and delivery, unless a receipt already put it in force.',
        },
        {
          text: 'When the buyer guide is mailed, even if the premium has not been paid.',
          why: 'A buyer guide is a generic consumer document. It does not start coverage. The premium and delivery rule, or an earlier receipt, does.',
        },
      ],
    ),
    question(
      'c2q111',
      'Which purchase is a replacement?',
      [
        {
          text: 'Paying the renewal premium on an existing policy that is left unchanged.',
          why: 'Replacement involves new life insurance or a new annuity that causes an existing policy to be dropped or reduced. An unchanged renewal is not that transaction.',
        },
        {
          text: 'Naming a beneficiary on the first policy the applicant has ever owned.',
          why: 'Part 1 usually names the beneficiary. Replacement requires an effect on existing coverage, which a first policy does not have.',
        },
        {
          text: 'Buying new life insurance or a new annuity that causes existing coverage to be lapsed, forfeited, surrendered, or terminated.',
          why: 'The section defines replacement to include that result. The existing coverage will be, or has been, ended in one of those ways.',
          correct: true,
        },
        {
          text: 'Borrowing against cash value for an immediate need while the policy stays in full force.',
          why: 'Borrowing against cash value is liquidity. Replacement is a new purchase that lapses, forfeits, surrenders, terminates, or reduces existing coverage.',
        },
      ],
    ),
    question(
      'c2q112',
      'Which result also makes the purchase of new life insurance or a new annuity a replacement?',
      [
        {
          text: 'The new policy is delivered by mail rather than in person.',
          why: 'Delivery may be by mail or in person. The delivery method is not one of the replacement results.',
        },
        {
          text: 'The producer explains which values are guaranteed and which are not.',
          why: 'An illustration must separate guaranteed and nonguaranteed values. That explanation is not itself a replacement.',
        },
        {
          text: 'The applicant is classified as a standard risk.',
          why: 'A standard risk is the average risk accepted with no extra rating. Risk class is not the replacement definition.',
        },
        {
          text: 'Existing coverage is reissued with a reduction in cash value.',
          why: 'Reissue with a reduction in cash value is one of the results that makes the new purchase a replacement.',
          correct: true,
        },
      ],
    ),
    question(
      'c2q113',
      'Continuing existing coverage in which form is a replacement when new life insurance or a new annuity is purchased?',
      [
        {
          text: 'As reduced paid-up insurance or extended term, or as coverage otherwise reduced by a nonforfeiture option.',
          why: 'The section includes continued coverage in those reduced forms as replacement when it results from the new purchase.',
          correct: true,
        },
        {
          text: 'As the same policy with a larger death benefit and no reduction.',
          why: 'Replacement includes reductions and terminations of existing coverage. An increase with no reduction is not one of the listed results.',
        },
        {
          text: 'As new key person coverage that the employer applies for when the business has never owned a policy.',
          why: 'Key person coverage is a business use. Replacement requires an effect on existing life insurance or annuity coverage.',
        },
        {
          text: 'As a participating policy that begins to pay policyowner dividends.',
          why: 'Only participating policies distribute dividends. Starting dividends is not the reduced paid-up or extended term result that counts as replacement.',
        },
      ],
    ),
    question(
      'c2q114',
      'Which other changes count as replacement when they result from buying new life insurance or a new annuity?',
      [
        {
          text: 'Increasing the face amount and leaving the benefits and the term intact.',
          why: 'The listed amendments are reductions of benefits or of the term. An increase that leaves benefits and term intact is not that list.',
        },
        {
          text: 'Amending the existing policy so benefits or the term are reduced, or using the existing policy in a financed purchase.',
          why: 'Both of those results are included in the replacement definition when they follow the purchase of new life insurance or a new annuity.',
          correct: true,
        },
        {
          text: 'Collecting the initial premium and issuing a conditional receipt on the only policy the applicant has ever applied for.',
          why: 'That is field underwriting of a new application. Replacement requires an effect on existing coverage.',
        },
        {
          text: 'Splitting the premium, the cash value, or the death benefit under a split-dollar plan.',
          why: 'Split dollar is an employer and employee funding arrangement. It is not the amendment or financed-purchase result in the replacement definition.',
        },
      ],
    ),
    question(
      'c2q115',
      'In a replacement, which company is the replacing insurer and which is the existing insurer?',
      [
        {
          text: 'The replacing insurer is the company whose policy is being replaced, and the existing insurer issues the new policy.',
          why: 'Those roles are reversed. The replacing insurer issues the new policy. The existing insurer is the company whose policy is being replaced.',
        },
        {
          text: 'Both names refer to the guaranty association that protects policyowners in an insolvency.',
          why: 'The guaranty association is not either insurer in a replacement. The replacing insurer issues the new policy, and the existing insurer is the company being replaced.',
        },
        {
          text: 'The replacing insurer issues the new policy. The existing insurer is the company whose policy is being replaced.',
          why: 'The section defines the two insurers that way. The replacing producer sends the replacement notice to the replacing insurer with the application.',
          correct: true,
        },
        {
          text: 'The replacing insurer is the MIB, and the existing insurer is the producer.',
          why: 'The MIB is an underwriting bureau, and the producer is the field underwriter. Neither is the replacing or existing insurer.',
        },
      ],
    ),
    question(
      'c2q116',
      'Besides presenting the Notice Regarding Replacement and leaving a copy with the applicant, what else must the replacing producer do?',
      [
        {
          text: 'Nothing else once the applicant has signed the notice.',
          why: 'The producer must also list the policies being replaced, leave copies of the sales materials, and send the notice to the replacing insurer with the application.',
        },
        {
          text: 'Wait until a claim is filed to list the policies being replaced.',
          why: 'The list, the sales materials, and the notice are part of the application process. They are not delayed until a claim.',
        },
        {
          text: 'Advertise the guaranty association inside the sales materials left with the applicant.',
          why: 'Producers may not advertise the guaranty association as a selling point. The producer leaves copies of the sales materials and lists the policies being replaced.',
        },
        {
          text: 'List the policies being replaced, leave copies of the sales materials, and send the notice to the replacing insurer with the application.',
          why: 'Those duties accompany the signed notice and the copy left with the applicant. The notice is signed by the applicant and the producer.',
          correct: true,
        },
      ],
    ),
    question(
      'c2q117',
      'What replacement statements must the application include?',
      [
        {
          text: 'The applicant statement about whether replacement is involved, and the producer statement about whether the producer knows replacement is or may be involved.',
          why: 'The section requires both statements on the application. Each producer who initiates the application must submit them.',
          correct: true,
        },
        {
          text: 'Only an MIB authorization, with no question about existing coverage.',
          why: 'Part 1 already asks about existing policies and whether the new insurance will replace them. In a replacement, the application also needs the applicant statement and the producer statement.',
        },
        {
          text: 'A promise that insurable interest will still exist at the death of the insured.',
          why: 'Insurable interest must exist at application, and the benefit is payable later whether or not it continues. That promise is not the replacement statement.',
        },
        {
          text: 'The gross premium formula, showing mortality minus interest as the amount the policyowner pays.',
          why: 'Mortality minus interest is the net premium. The policyowner pays the gross premium. Neither formula is the replacement statement on the application.',
        },
      ],
    ),
    question(
      'c2q118',
      'How may the company deliver a policy it has issued?',
      [
        {
          text: 'Only by personal delivery, because a policy sent by mail never takes effect.',
          why: 'Delivery may be by mail or in person. Coverage generally begins when the premium has been paid and the policy has been delivered, unless a receipt already put coverage in force.',
        },
        {
          text: 'By mail or in person.',
          why: 'The section allows either method. Personal delivery adds the chance to explain the contract, confirm a statement of good health when one is required, and collect any unpaid premium.',
          correct: true,
        },
        {
          text: 'Only after the existing insurer signs the Notice Regarding Replacement.',
          why: 'The notice is signed by the applicant and the producer, not by the existing insurer. Delivery of an issued policy may be by mail or in person.',
        },
        {
          text: 'Only after a life settlement provider reviews the medical records and offers $575,000.',
          why: 'That offer belongs to the life settlement example. Issue and delivery occur when the applicant is acceptable, and delivery may be by mail or in person.',
        },
      ],
    ),
  ],
}
