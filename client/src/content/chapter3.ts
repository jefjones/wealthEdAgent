import { question } from './build.ts'
import type { Chapter } from './types.ts'
import { chapter3Extra } from './extra/chapter3.ts'

/** Wording follows the course OCR in content/source/chapter-3-ocr.txt. */
export const chapter3: Chapter = {
  id: 'ch-policies',
  number: 3,
  title: 'Kinds of Life Insurance',
  summary:
    'Term, whole life, adjustable and universal life, variable contracts, joint and juvenile policies, group life, and credit life.',
  sections: [
    {
      id: 'c3-term',
      title: 'Term life: coverage for a set period',
      body: `All life insurance is either temporary or permanent. Term insurance is temporary protection for a specific period. It is also called pure life insurance. Term provides the greatest amount of coverage for the lowest premium of any form of protection. There is usually a maximum age above which coverage will not be offered or cannot be renewed.

Term provides pure death protection. If the insured dies during the term, the policy pays the death benefit. If the policy is canceled or expires before death, nothing is payable. There is no cash value or other living benefit.

The premium stays level during the term. Only the death benefit may change. When the policy is sold, renewed, or converted, the premium is figured at attained age, the insured’s age at the time of that transaction.

Level term is the most common temporary protection. The word level refers to the death benefit, which does not change.

Level premium term provides both a level death benefit and a level premium during the term. A $100,000 10-year level term policy pays $100,000 if the insured dies at any time during those 10 years.

Annual renewable term renews each year without evidence of insurability. The premium increases at each renewal because it is based on attained age. Decreasing term has a level premium and a death benefit that drops each year. It is used when the need shrinks over time, commonly a mortgage or other debt. It is usually convertible and usually not renewable, because the death benefit is zero at the end of the term. Increasing term has a death benefit that grows by a stated amount or percentage. It is used for inflation and is often added as a rider, including cost-of-living and return-of-premium riders.

Return of premium (ROP) is an increasing term policy that pays an additional death benefit equal to the premiums paid, if the insured dies within a stated period or outlives the term. The premium is much higher than traditional term, sometimes 25% to 50% more. If the insured is alive at the end of the term, the company returns the premiums. Because the amount returned equals the amount paid in, the returned premiums are not taxable. In the course example, $380 a year for 30 years on a $250,000 policy is $11,400 returned if the insured is still alive.`,
      questions: [
        question(
          'c3q01',
          'Which statement about term insurance is correct?',
          [
            {
              text: 'It provides the greatest amount of coverage for the lowest premium, and it has no cash value.',
              why: 'Term is pure death protection. If the insured survives the term, nothing is paid, and there are no living benefits.',
              correct: true,
            },
            {
              text: 'It builds cash value that equals the face amount at age 100.',
              why: 'Cash value scheduled to equal the face amount at age 100 is whole life, not term.',
            },
            {
              text: 'The word “level” means the premium increases every year with attained age.',
              why: 'In level term, “level” means the death benefit does not change. Attained-age increases apply when the policy is renewed or converted.',
            },
            {
              text: 'It pays a death benefit only if the insured outlives the term.',
              why: 'If the insured outlives the term, a traditional term policy expires and pays nothing. The death benefit is paid if the insured dies during the term.',
            },
          ],
        ),
        question(
          'c3q02',
          'Decreasing term is commonly used for which need?',
          [
            {
              text: 'A mortgage or other debt that gets smaller over time.',
              why: 'The death benefit decreases as the outstanding balance decreases. The premium stays level. The policy is usually convertible and usually not renewable.',
              correct: true,
            },
            {
              text: 'A permanent need that lasts to age 100.',
              why: 'A need that lasts for life is a permanent-insurance use. Decreasing term ends when the benefit reaches zero.',
            },
            {
              text: 'Inflation protection that increases the death benefit each year.',
              why: 'A death benefit that rises is increasing term, often used as a cost-of-living rider.',
            },
            {
              text: 'A securities account that the policyowner invests.',
              why: 'Investment risk in a separate account describes variable life, not decreasing term.',
            },
          ],
        ),
        question(
          'c3q03',
          'What happens if the insured outlives a return-of-premium term policy?',
          [
            {
              text: 'The insurer returns the premiums, and that return is not taxable because it equals what was paid in.',
              why: 'ROP returns the premiums if the insured is alive at the end of the term. The returned amount equals premiums paid, so it is not taxable. The premium for ROP is higher than traditional term.',
              correct: true,
            },
            {
              text: 'The policy endows and pays the face amount in cash.',
              why: 'Endowment, when cash value equals the face amount, is a whole life maturity feature, typically at age 100.',
            },
            {
              text: 'The death benefit jumps and the premium stays level.',
              why: 'A face amount that jumps while the premium stays level describes a jumping juvenile policy, not ROP.',
            },
            {
              text: 'Nothing is paid, because term insurance never returns premium.',
              why: 'Traditional term pays nothing if the insured survives. ROP is the term form that does return premiums.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c3-whole',
      title: 'Whole life: lifetime coverage with cash value',
      body: `Whole life provides lifetime protection and accumulates cash value. Key features:

• Level premium — based on the issue age, and it stays the same for life.
• Death benefit — guaranteed and level for life.
• Cash value — scheduled to equal the face amount at age 100, the maturity date, and then paid to the policyowner. Cash values are credited regularly at a guaranteed interest rate. The insured and the policyowner do not have to be the same person.
• Living benefits — the owner can borrow against the cash value or receive it on surrender. Cash value, also called the nonforfeiture value, usually does not build until the third policy year and grows tax deferred.

To endow means the cash value has reached the contractual face amount.

The three basic forms are straight whole life, limited-pay whole life, and single premium whole life.

Straight life, also called ordinary life or continuous premium whole life, is the basic policy. The owner pays from issue until the insured’s death or age 100, whichever comes first. Of the common whole life forms, straight life has the lowest annual premium. Cash value builds more slowly than in a limited-pay policy.

Limited-pay whole life, such as 20-pay life or life paid-up at 65, compresses the premiums into a shorter period. Annual premiums are higher, and cash value builds faster. After the paying period the policy is paid up, but coverage lasts for life.

Single premium whole life is paid with one lump sum. It creates an immediate cash value.`,
      questions: [
        question(
          'c3q04',
          'When does a traditional whole life policy endow?',
          [
            {
              text: 'When the cash value equals the face amount, scheduled at age 100.',
              why: 'Endow means the cash value has reached the contractual face amount. On a traditional whole life policy that date is age 100, and the cash value is paid to the policyowner.',
              correct: true,
            },
            {
              text: 'When the insured dies during a stated term.',
              why: 'A death during the term is how term insurance pays. Endowment is the living maturity of the cash value.',
            },
            {
              text: 'When the owner skips a premium and the policy lapses.',
              why: 'A lapse is termination for nonpayment. It is the opposite of the policy maturing for its face amount.',
            },
            {
              text: 'At the first renewal, when the premium is recalculated at attained age.',
              why: 'Attained-age recalculation is a term renewal feature. Whole life premiums are based on issue age and stay level.',
            },
          ],
        ),
        question(
          'c3q05',
          'Which whole life form has the lowest annual premium?',
          [
            {
              text: 'Straight life, also called continuous premium or ordinary life.',
              why: 'Premiums are payable to death or age 100, so each annual premium is lower than on a limited-pay or single-premium policy. Cash value builds more slowly.',
              correct: true,
            },
            {
              text: 'Life paid-up at 65.',
              why: 'Limited-pay policies charge a higher annual premium so the policy is paid up sooner and cash value builds faster.',
            },
            {
              text: 'Single premium whole life.',
              why: 'A single premium is one large payment, not a low annual premium. It does create immediate cash value.',
            },
            {
              text: 'Annually renewable term.',
              why: 'Annually renewable term is not whole life. Its premium rises each year and it has no cash value.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c3-adjustable',
      title: 'Adjustable life: move between term and whole life',
      body: `Adjustable life can be term or whole life, and the policyowner can move it from one to the other as needs change. The owner can increase or decrease the premium, and can change the face amount. An increase in the death benefit requires proof of insurability. The owner may also pay more than the permanent-plan premium in order to build extra cash value or to shorten the premium-paying period.

The cash value of an adjustable life policy develops only when the premiums paid are more than the cost of the policy. Cash value earns a fixed rate and is held in the insurer’s general account. The owner can borrow against it.`,
      questions: [
        question(
          'c3q06',
          'When does cash value develop in an adjustable life policy?',
          [
            {
              text: 'Only when the premiums paid are more than the cost of the policy.',
              why: 'Adjustable life can function as term or as permanent insurance. Cash value appears when the owner pays more than the pure cost of the protection.',
              correct: true,
            },
            {
              text: 'Automatically in the first year, even if only the term cost is paid.',
              why: 'Paying only the cost of the protection does not produce cash value. Whole life’s early cash-value schedule does not apply just because the policy is adjustable.',
            },
            {
              text: 'Only if the policy is moved into a separate account.',
              why: 'Adjustable life cash value earns a fixed rate in the general account. A separate account is the variable-contract requirement.',
            },
            {
              text: 'When the face amount is increased, with no evidence of insurability.',
              why: 'An increase in the death benefit generally requires proof of insurability. That increase is not what creates the cash value.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c3-universal',
      title: 'Universal life: change the premium',
      body: `Universal life is also called flexible premium adjustable life. The owner may raise or lower the premium and may skip a premium. The policy does not lapse as long as the cash value can cover the monthly cost of insurance. If the cash value is too small, the policy expires.

The minimum premium keeps the policy in force for the current year and makes it perform like annually renewable term. The target premium is the recommended amount that covers the cost of insurance and keeps the policy in force for life.

Universal life is interest sensitive. The contract guarantees a rate, often 3% to 6%. A current rate may be higher and is not guaranteed. The policy has two parts: an insurance component, which is always annually renewable term, and a cash account.

Option A is the level death benefit. As cash value rises, the pure insurance protection shrinks so the total death benefit stays level. IRS rules for contracts issued after December 31, 1984 require a corridor, a gap between the cash value and the death benefit, so the contract still qualifies as life insurance. The corridor percentages depend on age and the amount of coverage.

Option B is the increasing death benefit. The benefit equals the face amount plus the current cash value. Pure insurance stays level, expenses are higher than under Option A, and cash value in the later years is lower, all else equal.`,
      questions: [
        question(
          'c3q07',
          'What happens if the owner of a universal life policy skips a premium?',
          [
            {
              text: 'The missing premium may be taken from the cash value, and the policy does not lapse if the cash value is sufficient.',
              why: 'Universal life stays in force as long as cash value covers the monthly cost of insurance. If cash value is too small, the policy expires.',
              correct: true,
            },
            {
              text: 'The policy lapses immediately, because universal life premiums are fixed.',
              why: 'A fixed, required premium describes traditional whole life. Universal life is flexible premium adjustable life.',
            },
            {
              text: 'The death benefit is paid as a return of premium.',
              why: 'Return of premium is a term feature that refunds premiums if the insured survives. Skipping a universal life premium is handled from cash value.',
            },
            {
              text: 'The contract must be moved to a separate account.',
              why: 'A separate account holds the assets of a variable contract. Skipping a universal life premium does not convert the policy.',
            },
          ],
        ),
        question(
          'c3q08',
          'Under universal life Option A, what does the corridor do?',
          [
            {
              text: 'It keeps a gap between the cash value and the death benefit so the contract still qualifies as life insurance.',
              why: 'Option A is a level death benefit. As cash value rises, net amount at risk falls. The IRS corridor stops the cash value from crowding out the insurance element.',
              correct: true,
            },
            {
              text: 'It makes the death benefit equal the face amount plus the cash value.',
              why: 'Face amount plus cash value is Option B, the increasing death benefit.',
            },
            {
              text: 'It guarantees the current interest rate shown in the illustration.',
              why: 'The current rate is not guaranteed. The contract rate, often 3% to 6%, is the guarantee. The corridor is a tax definition, not an interest guarantee.',
            },
            {
              text: 'It lets the owner skip premiums with no effect on cash value.',
              why: 'A skipped premium is deducted from cash value. The corridor does not make that deduction disappear.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c3-variable',
      title: 'Variable life: cash value follows investments',
      body: `Fixed contracts offer guaranteed minimum or fixed benefits stated in the contract. Variable contracts accumulate cash value based on a portfolio of securities, with no guarantee of performance. The policyowner bears the investment risk.

Variable life, sometimes called variable whole life, has a level fixed premium and a guaranteed minimum death benefit. The cash value is not guaranteed and fluctuates with the portfolio. Because the insurer is not taking the investment risk, the assets cannot sit in the general account. They are held in a separate account, which invests in stocks, bonds, and other securities. A domestic insurer that issues variable contracts must establish one or more separate accounts. Each account’s assets must at least equal the reserves and other contract liabilities. Separate-account assets cannot be commingled with general-account assets.

Variable universal life combines a flexible premium, an adjustable death benefit, and the investment component of variable life. Like universal life, the owner can raise, lower, or skip premiums if the policy value can fund the death benefit, and can take withdrawals or loans. Unlike universal life, most of the investment choices do not guarantee a return.

Variable products are regulated both as insurance and as securities, by the state insurance department, the SEC, and FINRA. A producer who recommends the sale or termination of a variable contract must be a variable contract producer: a life insurance license plus a securities license (either Series 6 or Series 7, and Series 63). The producer must also be approved as a Utah resident producer through FINRA’s Central Registration Depository.

Utah variable contract law: a company may not deliver variable contracts in this state unless it is licensed to do a life insurance or annuity business here. A domestic life company may set up separate accounts for benefits payable in fixed amounts, variable amounts, or both. Amounts in a separate account are owned by the company. The company is not a trustee of those amounts.`,
      questions: [
        question(
          'c3q09',
          'Who bears the investment risk in a variable life contract?',
          [
            {
              text: 'The policyowner. Cash value is not guaranteed and the assets are in a separate account.',
              why: 'Variable cash value follows the portfolio. The insurer does not guarantee performance, so the assets are not held in the general account.',
              correct: true,
            },
            {
              text: 'The insurer, through a guaranteed minimum cash value in the general account.',
              why: 'The death benefit has a guaranteed minimum. The cash value does not. General-account guarantees describe fixed products.',
            },
            {
              text: 'FINRA, because variable contracts are securities.',
              why: 'FINRA regulates the securities side of the sale. It does not absorb the investment loss.',
            },
            {
              text: 'The beneficiary, but only after the insured reaches age 100.',
              why: 'Age-100 endowment is a whole life cash-value schedule. It does not shift variable investment risk to the beneficiary.',
            },
          ],
        ),
        question(
          'c3q10',
          'Before recommending the sale or termination of a variable contract in Utah, a producer must hold which licenses?',
          [
            {
              text: 'A life insurance license and a securities license, either Series 6 or Series 7, and Series 63.',
              why: 'The producer must be a variable contract producer and be approved as a Utah resident producer through FINRA’s CRD. The company must also be licensed to deliver variable contracts in the state.',
              correct: true,
            },
            {
              text: 'A property and casualty license only.',
              why: 'Variable life is a life insurance and securities product. A property license does not authorize the recommendation.',
            },
            {
              text: 'A life license only, because the separate account is still an insurance product.',
              why: 'The contract is dually regulated. The securities license is required in addition to the life license.',
            },
            {
              text: 'An adjuster’s license and an MIB membership.',
              why: 'Adjusters handle claims. The MIB is an underwriting exchange. Neither licenses a producer to sell variable contracts.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c3-joint',
      title: 'One policy on two people',
      body: `Joint life insures two or more lives and pays at the first death. The premium is based on a joint age and is less than the sum of two individual premiums. It fits a need that ends at the first death, such as a two-income couple’s mortgage, or a buy-sell agreement between business partners.

Survivorship life, also called second-to-die or last survivor, also uses a joint age, but it pays on the last death. Because payment is delayed, the premium is lower than a joint life premium. Survivorship coverage is often used to pay estate tax when the second insured dies.`,
      questions: [
        question(
          'c3q11',
          'A survivorship life policy pays the death benefit when?',
          [
            {
              text: 'When the last insured dies.',
              why: 'Survivorship, or second-to-die, pays on the last death. It is often used for the estate tax due at the second death, and its premium is lower than joint life.',
              correct: true,
            },
            {
              text: 'When the first insured dies.',
              why: 'Payment at the first death is joint life. After that death the joint life need is usually gone.',
            },
            {
              text: 'When either insured reaches age 100, whichever is first.',
              why: 'Age 100 is the maturity date of traditional whole life. It is not what distinguishes survivorship from joint life.',
            },
            {
              text: 'In equal shares at each death.',
              why: 'These policies pay once: joint life at the first death, survivorship at the last. They do not pay half at each death.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c3-juvenile',
      title: 'Life insurance on a child',
      body: `Juvenile life insurance is any life insurance written on the life of a minor. A jumping juvenile policy is called that because the face amount increases at a predetermined age, often age 21. The face amount jumps. The premium stays level.`,
      questions: [
        question(
          'c3q12',
          'What jumps in a jumping juvenile policy?',
          [
            {
              text: 'The face amount, often at age 21, while the premium stays level.',
              why: 'The policy is written on a minor. At a stated age the death benefit increases and the premium does not.',
              correct: true,
            },
            {
              text: 'The premium, at each birthday, while the face amount stays level.',
              why: 'A premium that steps up with age describes annually renewable term, not a jumping juvenile policy.',
            },
            {
              text: 'The cash value, which must equal the face amount at age 21.',
              why: 'Endowment at age 100, not age 21, is the traditional whole life maturity. The juvenile “jump” is in the face amount.',
            },
            {
              text: 'The number of insureds, from one parent to both.',
              why: 'Adding a second insured would be a joint or survivorship design. Jumping juvenile is written on the minor.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c3-group',
      title: 'Life insurance from a group',
      body: `Group life is issued to a sponsoring organization and covers more than one person. It is commonly written for employer groups, and also for debtor groups, labor unions, credit unions, and associations. The group must exist for a reason other than buying insurance. It is usually written as annually renewable term.

Evidence of insurability is usually not required, unless someone enrolls outside the normal enrollment period. Participants do not receive a policy, because they do not own or control it. Each participant gets a certificate of insurance. The master policy goes to the sponsor, often the employer, and the sponsor is the policyholder.

Underwriting looks at the group: its purpose, its size (the law of large numbers), a steady turnover of younger lives replacing older ones, and the financial strength to pay premiums. Cost is based on the average age of the group and the ratio of men to women. A minimum number of participants is required to limit adverse selection, and that minimum depends on who pays the premium.

If an employee leaves the group, the employee may convert to an individual policy without evidence of insurability, at standard rates based on attained age. Conversion is to a form the insurer issues, usually whole life, not to term. The face amount equals the group term face amount, and the premium is higher. The employee has 31 days to convert and remains covered under the group policy during that period. If the insured dies during the conversion period, the group policy pays the death benefit whether or not an individual application was completed.

If the master contract ends, every person who has been on the plan for at least 5 years may convert to individual permanent insurance of the same coverage.`,
      questions: [
        question(
          'c3q13',
          'In an employer group life plan, what does each employee receive?',
          [
            {
              text: 'A certificate of insurance. The employer holds the master contract.',
              why: 'Participants do not own the policy. The sponsor is the policyholder. Group coverage is usually annually renewable term, and evidence of insurability is usually not required during eligible enrollment.',
              correct: true,
            },
            {
              text: 'An individual whole life policy underwritten on that employee’s medical exam.',
              why: 'Individual underwriting and a policy the insured owns describe individual insurance. Group insurance is underwritten on the group.',
            },
            {
              text: 'The master policy, which the employee may assign.',
              why: 'The master policy is issued to the sponsor. The employee receives a certificate.',
            },
            {
              text: 'A variable contract in a separate account.',
              why: 'A separate account is a variable-product requirement. Ordinary group life in this chapter is annually renewable term.',
            },
          ],
        ),
        question(
          'c3q14',
          'If the group master contract is terminated, who may convert to individual permanent insurance?',
          [
            {
              text: 'Every person who has been on the plan for at least 5 years.',
              why: 'Termination of the master policy gives a conversion right to people covered for at least 5 years. An employee who simply leaves the group has 31 days to convert without evidence of insurability.',
              correct: true,
            },
            {
              text: 'Only employees who can pass a medical exam.',
              why: 'Group conversion does not require evidence of insurability. The new premium is a standard rate at the person’s attained age.',
            },
            {
              text: 'Only employees who convert back to annually renewable term.',
              why: 'Conversion from group is to a permanent form the insurer issues, usually whole life, not to term.',
            },
            {
              text: 'No one. Coverage ends with the master contract.',
              why: 'Coverage under the group ends, but people who meet the 5-year rule may convert to individual permanent insurance.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c3-credit',
      title: 'Coverage that pays off a loan',
      body: `Credit life insures the debtor and pays off the balance of a loan if the debtor dies. It is usually written as decreasing term, either as an individual policy or as a group plan. In a group plan the creditor owns the master policy and each debtor receives a certificate.

The creditor is the owner and the beneficiary, although the borrower generally pays the premium. The benefit cannot be more than the balance of the debt, so there is no financial incentive for the death of the insured. A creditor may require the debtor to have life insurance. The creditor cannot require the debtor to buy that insurance from a particular insurer.`,
      questions: [
        question(
          'c3q15',
          'Which statement about credit life insurance is correct?',
          [
            {
              text: 'The creditor is the owner and beneficiary, the benefit cannot exceed the debt, and the debtor cannot be required to buy from a specific insurer.',
              why: 'Credit life is usually decreasing term so the benefit tracks the loan. The borrower generally pays the premium. The creditor may require insurance, but not a particular company.',
              correct: true,
            },
            {
              text: 'The debtor owns the policy and names a family member as beneficiary.',
              why: 'The debtor is the insured. The creditor owns the policy and is the beneficiary so the loan is paid off.',
            },
            {
              text: 'The benefit is a level amount that may be larger than the loan.',
              why: 'The benefit cannot exceed the debt. That is why decreasing term is the usual form.',
            },
            {
              text: 'The creditor must be the insurer that issues the policy.',
              why: 'The creditor may require insurance. The creditor cannot require the debtor to buy it from a specific insurer, and the creditor is not itself the insurance company.',
            },
          ],
        ),
        question(
          'c3q16',
          'Credit life is usually written as which kind of insurance?',
          [
            {
              text: 'Decreasing term, so the benefit follows the declining loan balance.',
              why: 'As the debt shrinks, the death benefit shrinks. It may be an individual policy or a group certificate, with the creditor as owner and beneficiary.',
              correct: true,
            },
            {
              text: 'Single premium whole life, so cash value is immediate.',
              why: 'Single premium whole life creates immediate cash value for a permanent need. Credit life exists to pay off a loan.',
            },
            {
              text: 'Variable universal life in a separate account.',
              why: 'Variable universal life puts investment risk on the policyowner. Credit life is not an investment product.',
            },
            {
              text: 'Survivorship life that pays at the second death.',
              why: 'Survivorship life insures two lives and pays at the last death, often for estate tax. Credit life insures the debtor.',
            },
          ],
        ),
      ],
    },

  ],
}

for (const section of chapter3.sections) {
  section.questions.push(...(chapter3Extra[section.id] ?? []))
}
