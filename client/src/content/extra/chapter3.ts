import { question } from '../build.ts'
import type { Question } from '../types.ts'

export const chapter3Extra: Record<string, Question[]> = {
  'c3-term': [
    question(
      'c3q17',
      'Term insurance is temporary protection for a specific period. It is also called what?',
      [
        {
          text: 'Pure life insurance.',
          why: 'All life insurance is either temporary or permanent. Term is temporary protection for a specific period, and it is also called pure life insurance.',
          correct: true,
        },
        {
          text: 'Continuous premium whole life.',
          why: 'Continuous premium whole life is another name for straight whole life, a permanent form. Term is the temporary form called pure life insurance.',
        },
        {
          text: 'Flexible premium adjustable life.',
          why: 'Flexible premium adjustable life is another name for universal life. Term is called pure life insurance.',
        },
        {
          text: 'Second-to-die life.',
          why: 'Second-to-die is another name for survivorship life. Term is called pure life insurance.',
        },
      ],
    ),
    question(
      'c3q18',
      'How does the premium for return-of-premium term compare with traditional term?',
      [
        {
          text: 'It is lower than traditional term.',
          why: 'Return of premium costs more than traditional term. The premium is much higher, sometimes 25% to 50% more.',
        },
        {
          text: 'It is much higher than traditional term, sometimes 25% to 50% more.',
          why: 'The premium for return of premium is much higher than traditional term, sometimes 25% to 50% more.',
          correct: true,
        },
        {
          text: 'It is one lump sum that creates immediate cash value.',
          why: 'One lump sum that creates immediate cash value is single premium whole life. Return of premium charges a higher premium than traditional term, sometimes 25% to 50% more.',
        },
        {
          text: 'It is based on a joint age and is less than the sum of two individual premiums.',
          why: 'A joint-age premium that is less than the sum of two individual premiums describes joint life. Return of premium costs more than traditional term, sometimes 25% to 50% more.',
        },
      ],
    ),
    question(
      'c3q19',
      'What does the chapter say about the age at which term coverage will be offered or renewed?',
      [
        {
          text: 'There is no maximum age, and renewal always keeps the original premium.',
          why: 'That contradicts the term rule. There is usually a maximum age above which coverage will not be offered or cannot be renewed. Age 100 is the whole life maturity date, not a promise that term can always be renewed.',
        },
        {
          text: 'The premium must be based on a joint age.',
          why: 'A joint age is used for joint life and survivorship life. Term usually has a maximum age above which coverage will not be offered or cannot be renewed.',
        },
        {
          text: 'There is usually a maximum age above which coverage will not be offered or cannot be renewed.',
          why: 'Term is temporary. There is usually a maximum age above which coverage will not be offered or cannot be renewed.',
          correct: true,
        },
        {
          text: 'The face amount must increase at a predetermined age, often age 21.',
          why: 'A face amount that increases at a predetermined age, often age 21, describes a jumping juvenile policy. The term rule is a usual maximum age for offering or renewing coverage.',
        },
      ],
    ),
    question(
      'c3q20',
      'Under term insurance that provides pure death protection, what is payable if the policy is canceled or expires before the insured dies?',
      [
        {
          text: 'The cash value, also called the nonforfeiture value.',
          why: 'Cash value, also called the nonforfeiture value, is a whole life feature. Pure death protection has no cash value or other living benefit, so nothing is payable if the policy is canceled or expires before death.',
        },
        {
          text: 'The face amount, because the policy endows at the end of the term.',
          why: 'To endow means the cash value has reached the contractual face amount. Pure term does not endow. If the policy is canceled or expires before death, nothing is payable.',
        },
        {
          text: 'A guaranteed minimum death benefit from a separate account.',
          why: 'A guaranteed minimum death benefit, with assets in a separate account, describes variable life. If pure term is canceled or expires before death, nothing is payable.',
        },
        {
          text: 'Nothing is payable.',
          why: 'Term provides pure death protection. If the policy is canceled or expires before death, nothing is payable. There is no cash value or other living benefit.',
          correct: true,
        },
      ],
    ),
    question(
      'c3q21',
      'During the term, the premium stays level. What may change?',
      [
        {
          text: 'Only the death benefit may change.',
          why: 'The premium stays level during the term. Only the death benefit may change. A new premium is figured at attained age when the policy is sold, renewed, or converted.',
          correct: true,
        },
        {
          text: 'The premium must change during the term because it is based on attained age.',
          why: 'Attained age is used when the policy is sold, renewed, or converted. During the term itself the premium stays level, and only the death benefit may change.',
        },
        {
          text: 'Cash value must be credited at a guaranteed interest rate.',
          why: 'Whole life cash values are credited regularly at a guaranteed interest rate. Term has no cash value. During the term, only the death benefit may change.',
        },
        {
          text: 'The policy must be moved into a separate account.',
          why: 'A separate account holds variable-contract assets. During the term, the premium stays level and only the death benefit may change.',
        },
      ],
    ),
    question(
      'c3q22',
      'When a term policy is sold, renewed, or converted, how is the premium figured?',
      [
        {
          text: 'At the original issue age, so the premium stays the same for life.',
          why: 'A premium based on issue age that stays the same for life is whole life. Term uses attained age when the policy is sold, renewed, or converted.',
        },
        {
          text: 'At attained age, which is the age of the insured at the time of that transaction.',
          why: 'When the policy is sold, renewed, or converted, the premium is figured at attained age, the age of the insured at the time of that transaction.',
          correct: true,
        },
        {
          text: 'At a joint age that is less than the sum of two individual premiums.',
          why: 'A joint age, with a premium less than the sum of two individual premiums, is the joint life premium basis. Term uses attained age for a sale, renewal, or conversion.',
        },
        {
          text: 'As one lump sum that creates immediate cash value.',
          why: 'One lump sum that creates immediate cash value is single premium whole life. Term premiums for a sale, renewal, or conversion are figured at attained age.',
        },
      ],
    ),
    question(
      'c3q23',
      'In the course example, the insured pays $380 a year for 30 years on a $250,000 return-of-premium policy. How much is returned if the insured is still alive?',
      [
        {
          text: '$250,000.',
          why: '$250,000 is the face amount in the example, not the amount returned. If the insured is still alive, the company returns $11,400.',
        },
        {
          text: '$380.',
          why: '$380 is one year of premium in the example. The amount returned if the insured is still alive is $11,400.',
        },
        {
          text: '$11,400.',
          why: 'In the course example, $380 a year for 30 years on a $250,000 policy is $11,400 returned if the insured is still alive. The amount returned equals the amount paid in, so the returned premiums are not taxable.',
          correct: true,
        },
        {
          text: 'Nothing, because a policy that reaches the end of the term never returns premium.',
          why: 'Ordinary term pays nothing if it expires before death. This return-of-premium example returns $11,400 if the insured is still alive.',
        },
      ],
    ),
    question(
      'c3q24',
      'In level term insurance, what does the word level refer to?',
      [
        {
          text: 'A premium that increases at each renewal because of attained age.',
          why: 'A premium that increases at each renewal because it is based on attained age describes annual renewable term. In level term, level refers to the death benefit.',
        },
        {
          text: 'Cash value that equals the face amount at age 100.',
          why: 'Cash value scheduled to equal the face amount at age 100 is whole life. Level term has no cash value. Level refers to the death benefit, which does not change.',
        },
        {
          text: 'A death benefit that drops each year while the premium stays level.',
          why: 'A level premium and a death benefit that drops each year describe decreasing term. In level term, the death benefit does not change.',
        },
        {
          text: 'The death benefit, which does not change.',
          why: 'Level term is the most common temporary protection. The word level refers to the death benefit, which does not change.',
          correct: true,
        },
      ],
    ),
    question(
      'c3q25',
      'What does level premium term provide during the term?',
      [
        {
          text: 'Both a level death benefit and a level premium.',
          why: 'Level premium term provides both a level death benefit and a level premium during the term.',
          correct: true,
        },
        {
          text: 'A level premium and a death benefit that drops each year.',
          why: 'A level premium with a death benefit that drops each year is decreasing term. Level premium term keeps both the death benefit and the premium level.',
        },
        {
          text: 'A death benefit that grows by a stated amount or percentage.',
          why: 'A death benefit that grows by a stated amount or percentage is increasing term. Level premium term keeps both the death benefit and the premium level.',
        },
        {
          text: 'A premium the owner may skip if cash value covers the cost of insurance.',
          why: 'A premium the owner may skip is a universal life feature. Level premium term provides both a level death benefit and a level premium during the term.',
        },
      ],
    ),
    question(
      'c3q26',
      'A $100,000 10-year level term policy pays how much if the insured dies at any time during those 10 years?',
      [
        {
          text: 'Nothing, because the benefit is paid only if the insured outlives the term.',
          why: 'If the insured dies during the term, the policy pays the death benefit. This policy pays $100,000 if death occurs at any time during the 10 years.',
        },
        {
          text: '$100,000.',
          why: 'A $100,000 10-year level term policy pays $100,000 if the insured dies at any time during those 10 years.',
          correct: true,
        },
        {
          text: '$11,400.',
          why: '$11,400 is the return in the course example of $380 a year for 30 years on a $250,000 return-of-premium policy. The 10-year level term example pays $100,000.',
        },
        {
          text: 'The face amount plus the cash value.',
          why: 'The face amount plus the current cash value is universal life Option B. This level term policy pays $100,000 and has no cash value.',
        },
      ],
    ),
    question(
      'c3q27',
      'Annual renewable term renews each year without what requirement?',
      [
        {
          text: 'Payment of a premium.',
          why: 'A premium is still paid, and it increases at each renewal because it is based on attained age. The renewal does not require evidence of insurability.',
        },
        {
          text: 'A life license plus either Series 6 or Series 7, and Series 63.',
          why: 'A producer who recommends the sale or termination of a variable contract must hold a life license plus either Series 6 or Series 7, and Series 63. Annual renewable term renews each year without evidence of insurability.',
        },
        {
          text: 'Evidence of insurability.',
          why: 'Annual renewable term renews each year without evidence of insurability. The premium increases at each renewal because it is based on attained age.',
          correct: true,
        },
        {
          text: 'Any maximum age for renewal.',
          why: 'Term usually has a maximum age above which coverage will not be offered or cannot be renewed. The stated renewal feature is that evidence of insurability is not required.',
        },
      ],
    ),
    question(
      'c3q28',
      'Why does the premium on annual renewable term increase at each renewal?',
      [
        {
          text: 'Because the death benefit drops each year.',
          why: 'A death benefit that drops each year, with a level premium, is decreasing term. The annual renewable term premium increases because it is based on attained age.',
        },
        {
          text: 'Because the policy endows at age 100.',
          why: 'Cash value scheduled to equal the face amount at age 100 is whole life. The annual renewable term premium increases because it is based on attained age.',
        },
        {
          text: 'Because return of premium costs sometimes 25% to 50% more than traditional term.',
          why: 'That price difference describes return of premium compared with traditional term. The annual renewable term premium increases at each renewal because it is based on attained age.',
        },
        {
          text: 'Because the premium is based on attained age.',
          why: 'Annual renewable term renews each year without evidence of insurability. The premium increases at each renewal because it is based on attained age.',
          correct: true,
        },
      ],
    ),
    question(
      'c3q29',
      'Why is decreasing term usually not renewable?',
      [
        {
          text: 'Because the death benefit is zero at the end of the term.',
          why: 'Decreasing term has a level premium and a death benefit that drops each year. It is usually convertible and usually not renewable, because the death benefit is zero at the end of the term.',
          correct: true,
        },
        {
          text: 'Because the premium increases at each renewal with attained age.',
          why: 'A premium that increases at each renewal because it is based on attained age describes annual renewable term. Decreasing term is usually not renewable because the death benefit is zero at the end of the term.',
        },
        {
          text: 'Because the premium must become a single lump sum.',
          why: 'A single lump sum is single premium whole life. Decreasing term keeps a level premium and is usually not renewable because the death benefit reaches zero.',
        },
        {
          text: 'Because the contract must be held in a separate account.',
          why: 'A separate account is used for variable contracts. Decreasing term is usually not renewable because the death benefit is zero at the end of the term.',
        },
      ],
    ),
    question(
      'c3q30',
      'Increasing term has a death benefit that grows by a stated amount or percentage. How is that benefit often provided?',
      [
        {
          text: 'As straight whole life, the basic permanent policy.',
          why: 'Straight whole life has a death benefit that is guaranteed and level for life. Increasing term is often added as a rider.',
        },
        {
          text: 'It is often added as a rider, including a cost-of-living rider or a return-of-premium rider, and it is used for inflation.',
          why: 'Increasing term is used for inflation and is often added as a rider, including cost-of-living and return-of-premium riders.',
          correct: true,
        },
        {
          text: 'As credit life, with a benefit that cannot exceed the debt.',
          why: 'Credit life is usually decreasing term, and the benefit cannot exceed the debt. Increasing term grows and is often added as a rider used for inflation.',
        },
        {
          text: 'As survivorship life used to pay estate tax at the second death.',
          why: 'Survivorship life pays at the last death and is often used for estate tax. Increasing term is used for inflation and is often added as a rider.',
        },
      ],
    ),
    question(
      'c3q31',
      'Return of premium is an increasing term policy. If the insured dies within a stated period, what additional death benefit does it pay?',
      [
        {
          text: 'The cash value scheduled to equal the face amount at age 100.',
          why: 'Cash value equal to the face amount at age 100 is whole life maturity. Return of premium pays an additional death benefit equal to the premiums paid.',
        },
        {
          text: 'Nothing. An increasing term benefit never pays on death.',
          why: 'Increasing term has a death benefit that grows. If the insured dies within a stated period, return of premium pays an additional death benefit equal to the premiums paid.',
        },
        {
          text: 'An additional death benefit equal to the premiums paid.',
          why: 'Return of premium pays an additional death benefit equal to the premiums paid if the insured dies within a stated period or outlives the term.',
          correct: true,
        },
        {
          text: 'Only the remaining balance of a mortgage.',
          why: 'A benefit that follows a shrinking debt is decreasing term, commonly used for a mortgage or other debt. Return of premium adds a benefit equal to the premiums paid.',
        },
      ],
    ),
  ],
  'c3-whole': [
    question(
      'c3q32',
      'A whole life premium is based on the issue age. How long does that premium stay the same?',
      [
        {
          text: 'Only for the current year, after which it is recomputed at attained age.',
          why: 'A premium that is recomputed at attained age fits term when the policy is sold, renewed, or converted. The whole life premium is based on the issue age and stays the same for life.',
        },
        {
          text: 'Only until the third policy year.',
          why: 'Cash value usually does not build until the third policy year. That timing does not end the level premium. The premium stays the same for life.',
        },
        {
          text: 'Only until age 65 on every whole life policy.',
          why: 'Life paid-up at 65 is one limited-pay example. It is not the premium period of every whole life policy. The whole life premium is based on issue age and stays the same for life.',
        },
        {
          text: 'It stays the same for life.',
          why: 'The whole life premium is level. It is based on the issue age, and it stays the same for life.',
          correct: true,
        },
      ],
    ),
    question(
      'c3q33',
      'Which statement describes the whole life death benefit?',
      [
        {
          text: 'It is guaranteed and level for life.',
          why: 'Whole life provides lifetime protection. The death benefit is guaranteed and level for life.',
          correct: true,
        },
        {
          text: 'It drops each year while the premium stays level.',
          why: 'A level premium and a death benefit that drops each year describe decreasing term. The whole life death benefit is guaranteed and level for life.',
        },
        {
          text: 'It equals the face amount plus the cash value.',
          why: 'The face amount plus the current cash value is universal life Option B. The whole life death benefit is guaranteed and level for life.',
        },
        {
          text: 'It is paid only if the insured dies during a stated term.',
          why: 'Payment only if death occurs during a specific period is term insurance. The whole life death benefit is guaranteed and level for life.',
        },
      ],
    ),
    question(
      'c3q34',
      'When whole life cash value equals the face amount at the maturity date, who is paid that cash value?',
      [
        {
          text: 'The beneficiary, but only if a second insured has already died.',
          why: 'Payment that waits until the last death is survivorship life. At whole life maturity the cash value is paid to the policyowner.',
        },
        {
          text: 'The policyowner.',
          why: 'Cash value is scheduled to equal the face amount at age 100, the maturity date, and is then paid to the policyowner.',
          correct: true,
        },
        {
          text: 'The sponsoring employer that holds the master contract.',
          why: 'The master contract goes to the group sponsor, often the employer. Whole life maturity pays the cash value to the policyowner.',
        },
        {
          text: 'The creditor, up to the balance of the debt.',
          why: 'The creditor is the beneficiary of credit life, and that benefit cannot exceed the debt. Whole life maturity pays the policyowner.',
        },
      ],
    ),
    question(
      'c3q35',
      'How are whole life cash values credited?',
      [
        {
          text: 'They fluctuate with a portfolio of securities and are not guaranteed.',
          why: 'Cash value based on a portfolio of securities, with no guarantee of performance, describes a variable contract. Whole life cash values are credited regularly at a guaranteed interest rate.',
        },
        {
          text: 'They develop only when the owner pays more than the cost of the policy.',
          why: 'Cash value that develops only when premiums paid are more than the cost of the policy describes adjustable life. Whole life cash values are credited regularly at a guaranteed interest rate.',
        },
        {
          text: 'They are credited regularly at a guaranteed interest rate.',
          why: 'Whole life cash values are credited regularly at a guaranteed interest rate and are scheduled to equal the face amount at age 100.',
          correct: true,
        },
        {
          text: 'A current rate may be higher than the contract rate, and that current rate is not guaranteed.',
          why: 'A contract rate, often 3% to 6%, with a higher current rate that is not guaranteed, describes universal life. Whole life cash values are credited regularly at a guaranteed interest rate.',
        },
      ],
    ),
    question(
      'c3q36',
      'On a whole life policy, must the insured and the policyowner be the same person?',
      [
        {
          text: 'Yes. The policy can endow only when they are the same person.',
          why: 'To endow means the cash value has reached the contractual face amount. The insured and the policyowner do not have to be the same person.',
        },
        {
          text: 'Yes. Otherwise the owner cannot borrow against the cash value.',
          why: 'The owner can borrow against the cash value or receive it on surrender. The insured and the policyowner do not have to be the same person.',
        },
        {
          text: 'Yes, but only on limited-pay whole life.',
          why: 'Limited-pay life compresses premiums into a shorter period. It does not require the insured and the policyowner to be the same person.',
        },
        {
          text: 'No. They do not have to be the same person.',
          why: 'The insured and the policyowner do not have to be the same person. At maturity the cash value is paid to the policyowner.',
          correct: true,
        },
      ],
    ),
    question(
      'c3q37',
      'Which living benefit can the owner use with whole life cash value?',
      [
        {
          text: 'The owner can borrow against the cash value or receive it on surrender.',
          why: 'Living benefits let the owner borrow against the cash value or receive it on surrender. Cash value is also called the nonforfeiture value.',
          correct: true,
        },
        {
          text: 'The owner can skip premiums and the policy cannot expire.',
          why: 'Universal life lets the owner skip a premium, but the policy expires if cash value is too small to cover the monthly cost of insurance. The whole life living benefits are a loan or the surrender value.',
        },
        {
          text: 'The company returns the premiums if the insured is alive at the end of a term.',
          why: 'Returning premiums if the insured is alive at the end of the term is return of premium. Whole life living benefits are a loan against cash value or the value received on surrender.',
        },
        {
          text: 'The face amount increases at a predetermined age while the premium stays level.',
          why: 'A face amount that jumps, often at age 21, with a level premium, is a jumping juvenile policy. It is not the whole life living benefit.',
        },
      ],
    ),
    question(
      'c3q38',
      'Whole life cash value is also called the nonforfeiture value. When does it usually begin to build, and how is that growth treated for tax purposes?',
      [
        {
          text: 'It builds immediately and is taxed each year as it is credited.',
          why: 'Immediate cash value describes single premium whole life. Usual whole life cash value does not build until the third policy year, and it grows tax deferred.',
        },
        {
          text: 'It usually does not build until the third policy year, and it grows tax deferred.',
          why: 'Cash value, also called the nonforfeiture value, usually does not build until the third policy year and grows tax deferred.',
          correct: true,
        },
        {
          text: 'It builds only in a separate account, and the owner bears the investment risk.',
          why: 'A separate account, with investment risk on the policyowner, describes a variable contract. Whole life cash value usually starts in the third policy year and grows tax deferred.',
        },
        {
          text: 'It equals the premiums paid and is returned at the end of a term.',
          why: 'A return of premiums equal to the amount paid in is return-of-premium term. Whole life cash value usually starts in the third policy year and grows tax deferred.',
        },
      ],
    ),
    question(
      'c3q39',
      'Straight life is also called ordinary life or continuous premium whole life. How long does the owner pay?',
      [
        {
          text: 'With one lump sum, which creates immediate cash value.',
          why: 'One lump sum and immediate cash value describe single premium whole life. Straight life premiums continue from issue until the insured dies or age 100, whichever comes first.',
        },
        {
          text: 'Only until age 65, after which every straight life policy is paid up.',
          why: 'Life paid-up at 65 is a limited-pay example. Straight life premiums continue until the insured dies or age 100, whichever comes first.',
        },
        {
          text: 'From issue until the insured dies or age 100, whichever comes first.',
          why: 'Straight life is the basic policy. The owner pays from issue until the insured dies or age 100, whichever comes first. Cash value builds more slowly than in a limited-pay policy.',
          correct: true,
        },
        {
          text: 'Until the first death when two lives are insured.',
          why: 'Payment at the first death is joint life. Straight life premiums run until the insured dies or age 100, whichever comes first.',
        },
      ],
    ),
    question(
      'c3q40',
      'How does limited-pay whole life, such as 20-pay life or life paid-up at 65, compare with straight life?',
      [
        {
          text: 'The annual premium is lower, and cash value builds more slowly.',
          why: 'Of the common whole life forms, straight life has the lowest annual premium, and its cash value builds more slowly. Limited-pay annual premiums are higher, and cash value builds faster.',
        },
        {
          text: 'Premiums may be skipped whenever cash value covers the cost of insurance.',
          why: 'A premium that may be skipped is universal life. Limited-pay whole life uses higher annual premiums for a shorter paying period.',
        },
        {
          text: 'Coverage ends when the paying period ends.',
          why: 'After the paying period the policy is paid up, but coverage lasts for life. It does not end when premium payments stop.',
        },
        {
          text: 'Annual premiums are higher, cash value builds faster, and after the paying period the policy is paid up while coverage lasts for life.',
          why: 'Limited-pay whole life compresses the premiums into a shorter period. Annual premiums are higher, cash value builds faster, and coverage lasts for life after the policy is paid up.',
          correct: true,
        },
      ],
    ),
    question(
      'c3q41',
      'How is single premium whole life paid, and what cash-value result does that payment create?',
      [
        {
          text: 'It is paid with one lump sum, and it creates an immediate cash value.',
          why: 'Single premium whole life is paid with one lump sum and creates an immediate cash value. The three basic forms are straight whole life, limited-pay whole life, and single premium whole life.',
          correct: true,
        },
        {
          text: 'Premiums continue to age 100, and cash value usually starts in the third policy year.',
          why: 'Premiums until death or age 100, with cash value that usually starts in the third policy year, describe straight whole life. Single premium whole life is one lump sum and creates immediate cash value.',
        },
        {
          text: 'The premium increases at each renewal, and there is no cash value.',
          why: 'A renewal premium based on attained age, with no cash value, describes annual renewable term. Single premium whole life creates immediate cash value.',
        },
        {
          text: 'The owner pays more than a permanent-plan premium only to shorten the paying period.',
          why: 'Paying more than the permanent-plan premium to build extra cash value or shorten the paying period is an adjustable life choice. Single premium whole life is one lump sum with immediate cash value.',
        },
      ],
    ),
  ],
  'c3-adjustable': [
    question(
      'c3q42',
      'Adjustable life can be written as which kinds of coverage, and what may the policyowner do as needs change?',
      [
        {
          text: 'Variable life only, and the face amount must stay fixed.',
          why: 'Variable life has a level fixed premium, and the cash value fluctuates. Adjustable life can be term or whole life, and the owner can move it from one to the other.',
        },
        {
          text: 'Term or whole life, and the owner can move the policy from one to the other.',
          why: 'Adjustable life can be term or whole life. The policyowner can move it from one to the other as needs change.',
          correct: true,
        },
        {
          text: 'Joint life or survivorship life only.',
          why: 'Joint life pays at the first death, and survivorship life pays at the last death. Adjustable life can be term or whole life, and the owner can move between them.',
        },
        {
          text: 'Credit life only, with the creditor as owner.',
          why: 'Credit life insures the debtor, and the creditor is the owner and beneficiary. Adjustable life can be term or whole life.',
        },
      ],
    ),
    question(
      'c3q43',
      'Which premium and face-amount changes can the adjustable life owner make?',
      [
        {
          text: 'The premium is fixed for life, and the face amount cannot change.',
          why: 'A level premium based on issue age that stays the same for life, with a level death benefit, describes whole life. An adjustable life owner can increase or decrease the premium and can change the face amount.',
        },
        {
          text: 'The premium increases at each renewal with attained age, and the face amount stays level.',
          why: 'An attained-age increase at renewal describes annual renewable term. The adjustable life owner can increase or decrease the premium and can change the face amount.',
        },
        {
          text: 'The owner can increase or decrease the premium and can change the face amount.',
          why: 'The owner can increase or decrease the premium and can change the face amount. An increase in the death benefit requires proof of insurability.',
          correct: true,
        },
        {
          text: 'The owner may skip every premium, and the policy can never expire.',
          why: 'Universal life lets the owner skip a premium, but the policy expires if cash value cannot cover the monthly cost of insurance. Adjustable life lets the owner increase or decrease the premium and change the face amount.',
        },
      ],
    ),
    question(
      'c3q44',
      'What does an increase in the adjustable life death benefit require?',
      [
        {
          text: 'A transfer of the cash value into a separate account.',
          why: 'A separate account holds variable-contract assets. An increase in the adjustable life death benefit requires proof of insurability.',
        },
        {
          text: 'Proof that the group exists for a reason other than buying insurance.',
          why: 'A group must exist for a reason other than buying insurance. An increase in the adjustable life death benefit requires proof of insurability.',
        },
        {
          text: 'Payment of the universal life target premium.',
          why: 'The target premium is the recommended universal life amount that keeps the policy in force for life. An adjustable life death-benefit increase requires proof of insurability.',
        },
        {
          text: 'Proof of insurability.',
          why: 'The owner can change the face amount. An increase in the death benefit requires proof of insurability.',
          correct: true,
        },
      ],
    ),
    question(
      'c3q45',
      'Why may the adjustable life owner pay more than the permanent-plan premium?',
      [
        {
          text: 'To build extra cash value or to shorten the premium-paying period.',
          why: 'The owner may pay more than the permanent-plan premium in order to build extra cash value or to shorten the premium-paying period.',
          correct: true,
        },
        {
          text: 'To guarantee a securities portfolio inside the general account.',
          why: 'Variable cash value follows a portfolio of securities in a separate account, and performance is not guaranteed. Extra adjustable life premium is used to build extra cash value or to shorten the paying period.',
        },
        {
          text: 'To make the policy pay at the first of two deaths.',
          why: 'Payment at the first death is joint life. Extra premium on adjustable life builds extra cash value or shortens the premium-paying period.',
        },
        {
          text: 'To increase the death benefit without proof of insurability.',
          why: 'An increase in the death benefit requires proof of insurability. Paying more than the permanent-plan premium builds extra cash value or shortens the premium-paying period.',
        },
      ],
    ),
    question(
      'c3q46',
      'What rate does adjustable life cash value earn, and where is that cash value held?',
      [
        {
          text: 'A variable portfolio return in a separate account.',
          why: 'A separate account and a securities portfolio describe variable life. Adjustable life cash value earns a fixed rate and is held in the general account of the insurer.',
        },
        {
          text: 'A fixed rate, and the cash value is held in the general account of the insurer.',
          why: 'Adjustable life cash value earns a fixed rate and is held in the general account of the insurer. The owner can borrow against it.',
          correct: true,
        },
        {
          text: 'A current rate that is not guaranteed and may exceed a contract rate of 3% to 6%.',
          why: 'A contract guarantee often of 3% to 6%, with a higher current rate that is not guaranteed, describes universal life. Adjustable life cash value earns a fixed rate in the general account.',
        },
        {
          text: 'No rate, because adjustable life cannot develop cash value.',
          why: 'Cash value develops when the premiums paid are more than the cost of the policy. That cash value earns a fixed rate and is held in the general account.',
        },
      ],
    ),
  ],
  'c3-universal': [
    question(
      'c3q47',
      'Universal life is also called what?',
      [
        {
          text: 'Variable whole life.',
          why: 'Variable whole life is another name for variable life, which has a level fixed premium. Universal life is called flexible premium adjustable life.',
        },
        {
          text: 'Continuous premium whole life.',
          why: 'Continuous premium whole life is straight life. Universal life is called flexible premium adjustable life.',
        },
        {
          text: 'Flexible premium adjustable life.',
          why: 'Universal life is also called flexible premium adjustable life. The owner may raise or lower the premium and may skip a premium.',
          correct: true,
        },
        {
          text: 'Return-of-premium term.',
          why: 'Return of premium is an increasing term policy. Universal life is called flexible premium adjustable life.',
        },
      ],
    ),
    question(
      'c3q48',
      'What may the owner do with a universal life premium?',
      [
        {
          text: 'Pay a premium based on issue age that cannot change for life.',
          why: 'A premium based on issue age that stays the same for life is whole life. The universal life owner may raise or lower the premium and may skip a premium.',
        },
        {
          text: 'Pay only one lump sum.',
          why: 'One lump sum is single premium whole life. The universal life owner may raise or lower the premium and may skip a premium.',
        },
        {
          text: 'Renew the premium each year only after new evidence of insurability.',
          why: 'Annual renewable term renews without evidence of insurability. The universal life premium choice is that the owner may raise, lower, or skip a premium.',
        },
        {
          text: 'Raise or lower the premium, or skip a premium.',
          why: 'The owner may raise or lower the premium and may skip a premium. The policy does not lapse if cash value can cover the monthly cost of insurance.',
          correct: true,
        },
      ],
    ),
    question(
      'c3q49',
      'What does the universal life minimum premium do?',
      [
        {
          text: 'It keeps the policy in force for the current year and makes the policy perform like annually renewable term.',
          why: 'The minimum premium keeps the policy in force for the current year and makes it perform like annually renewable term.',
          correct: true,
        },
        {
          text: 'It is the recommended amount that keeps the policy in force for life.',
          why: 'The recommended amount that covers the cost of insurance and keeps the policy in force for life is the target premium. The minimum premium keeps the policy in force for the current year.',
        },
        {
          text: 'It guarantees the current interest rate.',
          why: 'The current rate is not guaranteed. The contract guarantees a rate, often 3% to 6%. The minimum premium keeps the policy in force for the current year and makes it perform like annually renewable term.',
        },
        {
          text: 'It makes the death benefit equal the face amount plus the cash value.',
          why: 'The face amount plus the current cash value is Option B. The minimum premium keeps the policy in force for the current year and makes it perform like annually renewable term.',
        },
      ],
    ),
    question(
      'c3q50',
      'What is the universal life target premium?',
      [
        {
          text: 'The premium that keeps the policy in force for the current year and makes it perform like annually renewable term.',
          why: 'That description is the minimum premium. The target premium is the recommended amount that covers the cost of insurance and keeps the policy in force for life.',
        },
        {
          text: 'The recommended amount that covers the cost of insurance and keeps the policy in force for life.',
          why: 'The target premium is the recommended amount that covers the cost of insurance and keeps the policy in force for life.',
          correct: true,
        },
        {
          text: 'A level premium payable until death or age 100, whichever comes first.',
          why: 'Premiums until death or age 100 describe straight whole life. The target premium is the recommended universal life amount that keeps the policy in force for life.',
        },
        {
          text: 'The guaranteed contract interest rate, often 3% to 6%.',
          why: 'Often 3% to 6% is the guaranteed contract interest rate. It is not the target premium. The target premium is the recommended amount that covers the cost of insurance and keeps the policy in force for life.',
        },
      ],
    ),
    question(
      'c3q51',
      'Universal life is interest sensitive. Which statement about its rates is correct?',
      [
        {
          text: 'The current rate is guaranteed, and the contract rate is not.',
          why: 'The contract guarantees a rate, often 3% to 6%. A current rate may be higher and is not guaranteed.',
        },
        {
          text: 'Cash value can earn only a fixed general-account rate, with no current rate.',
          why: 'A fixed rate in the general account describes adjustable life cash value. Universal life guarantees a contract rate, often 3% to 6%, and a current rate may be higher and is not guaranteed.',
        },
        {
          text: 'The contract guarantees a rate, often 3% to 6%. A current rate may be higher and is not guaranteed.',
          why: 'Universal life is interest sensitive. The contract guarantees a rate, often 3% to 6%. A current rate may be higher and is not guaranteed.',
          correct: true,
        },
        {
          text: 'The only rate is the portfolio return, and the owner bears the investment risk.',
          why: 'A portfolio of securities, with investment risk on the policyowner, describes a variable contract. Universal life uses a guaranteed contract rate, often 3% to 6%, and an unguaranteed current rate.',
        },
      ],
    ),
    question(
      'c3q52',
      'A universal life policy has two parts. What are they?',
      [
        {
          text: 'A level fixed premium and a guaranteed cash value.',
          why: 'Variable life has a level fixed premium, and its cash value is not guaranteed. Universal life has an insurance component and a cash account.',
        },
        {
          text: 'A master contract and certificates of insurance.',
          why: 'A master contract and certificates describe group life. Universal life has an insurance component and a cash account.',
        },
        {
          text: 'A joint-age premium and a benefit paid at the last death.',
          why: 'A joint age and payment at the last death describe survivorship life. Universal life has an insurance component and a cash account.',
        },
        {
          text: 'An insurance component, which is always annually renewable term, and a cash account.',
          why: 'The policy has two parts: an insurance component, which is always annually renewable term, and a cash account.',
          correct: true,
        },
      ],
    ),
    question(
      'c3q53',
      'Under universal life Option A, what happens to the pure insurance protection as cash value rises?',
      [
        {
          text: 'Pure insurance protection shrinks so the total death benefit stays level.',
          why: 'Option A is the level death benefit. As cash value rises, the pure insurance protection shrinks so the total death benefit stays level.',
          correct: true,
        },
        {
          text: 'Pure insurance stays level, and the death benefit equals the face amount plus the cash value.',
          why: 'Pure insurance that stays level, with a benefit equal to the face amount plus the cash value, is Option B. Under Option A, pure insurance shrinks so the total death benefit stays level.',
        },
        {
          text: 'The death benefit falls each year and is zero at the end of the term.',
          why: 'A death benefit that drops each year and is zero at the end of the term describes decreasing term. Option A keeps the total death benefit level.',
        },
        {
          text: 'The policy matures when cash value equals the face amount at age 100.',
          why: 'Cash value scheduled to equal the face amount at age 100 is traditional whole life. Under Option A, pure insurance shrinks so the total death benefit stays level.',
        },
      ],
    ),
    question(
      'c3q54',
      'For universal life contracts issued after December 31, 1984, the corridor percentages depend on what?',
      [
        {
          text: 'Whether the producer holds Series 6 or Series 7.',
          why: 'Series 6 or Series 7, together with Series 63, is part of the variable-contract producer requirement. Corridor percentages depend on age and the amount of coverage.',
        },
        {
          text: 'The age of the insured and the amount of coverage.',
          why: 'IRS rules for contracts issued after December 31, 1984 require a corridor, a gap between the cash value and the death benefit. The corridor percentages depend on age and the amount of coverage.',
          correct: true,
        },
        {
          text: 'The ratio of men to women in an employer group.',
          why: 'Group life cost is based on the average age of the group and the ratio of men to women. Corridor percentages depend on age and the amount of coverage.',
        },
        {
          text: 'Whether the policy pays at the first death or the last death.',
          why: 'Joint life pays at the first death, and survivorship life pays at the last death. Corridor percentages depend on age and the amount of coverage.',
        },
      ],
    ),
    question(
      'c3q55',
      'How is the universal life Option B death benefit calculated?',
      [
        {
          text: 'The total death benefit stays level while pure insurance shrinks.',
          why: 'A level total death benefit, with pure insurance that shrinks as cash value rises, is Option A. Option B equals the face amount plus the current cash value.',
        },
        {
          text: 'The benefit cannot be more than the balance of a debt.',
          why: 'A benefit that cannot exceed the debt is credit life. Option B equals the face amount plus the current cash value.',
        },
        {
          text: 'It equals the face amount plus the current cash value.',
          why: 'Option B is the increasing death benefit. The benefit equals the face amount plus the current cash value, and pure insurance stays level.',
          correct: true,
        },
        {
          text: 'It equals the premiums paid if the insured outlives a term.',
          why: 'An additional benefit equal to the premiums paid is return of premium. Option B equals the face amount plus the current cash value.',
        },
      ],
    ),
    question(
      'c3q56',
      'All else equal, how do expenses and later cash value under Option B compare with Option A?',
      [
        {
          text: 'Expenses are lower than under Option A, and later cash value is higher.',
          why: 'The chapter states the opposite comparison. Expenses are higher than under Option A, and cash value in the later years is lower, all else equal.',
        },
        {
          text: 'Expenses are the same, because both options use a separate account.',
          why: 'A separate account is a variable-contract feature. Under Option B, expenses are higher than under Option A, and later cash value is lower, all else equal.',
        },
        {
          text: 'Option B has no cost of insurance, so cash value is higher in the later years.',
          why: 'The insurance component is always annually renewable term, so there is a cost of insurance. Under Option B, expenses are higher than under Option A, and cash value in the later years is lower.',
        },
        {
          text: 'Expenses are higher than under Option A, and cash value in the later years is lower.',
          why: 'Under Option B, pure insurance stays level, expenses are higher than under Option A, and cash value in the later years is lower, all else equal.',
          correct: true,
        },
      ],
    ),
  ],
  'c3-variable': [
    question(
      'c3q57',
      'Under Utah variable contract law, who owns the amounts in a separate account?',
      [
        {
          text: 'The company owns those amounts, and the company is not a trustee of them.',
          why: 'Amounts in a separate account are owned by the company. The company is not a trustee of those amounts.',
          correct: true,
        },
        {
          text: 'The policyowner owns them because the policyowner bears the investment risk.',
          why: 'The policyowner does bear the investment risk, but that does not transfer ownership of the account. Amounts in a separate account are owned by the company, and the company is not a trustee.',
        },
        {
          text: 'FINRA owns them because variable products are securities.',
          why: 'FINRA is one regulator of variable products, along with the state insurance department and the SEC. FINRA does not own the separate-account amounts. The company owns them and is not a trustee.',
        },
        {
          text: 'The creditor owns them and is the beneficiary.',
          why: 'The creditor is the owner and beneficiary of credit life. Amounts in a variable separate account are owned by the company, and the company is not a trustee.',
        },
      ],
    ),
    question(
      'c3q58',
      'How does a variable contract accumulate cash value?',
      [
        {
          text: 'At a guaranteed interest rate credited regularly.',
          why: 'Regular credits at a guaranteed interest rate describe whole life cash value. Variable cash value is based on a portfolio of securities, with no guarantee of performance.',
        },
        {
          text: 'Based on a portfolio of securities, with no guarantee of performance.',
          why: 'Variable contracts accumulate cash value based on a portfolio of securities, with no guarantee of performance. Fixed contracts offer guaranteed minimum or fixed benefits stated in the contract.',
          correct: true,
        },
        {
          text: 'Only when premiums paid are more than the cost of the policy, at a fixed rate.',
          why: 'Cash value that develops only when premiums exceed the cost of the policy, and that earns a fixed rate, describes adjustable life. Variable cash value follows a securities portfolio and is not guaranteed.',
        },
        {
          text: 'By returning the premiums if the insured is alive at the end of a term.',
          why: 'A return of premiums if the insured is alive at the end of the term is return of premium. Variable cash value is based on a portfolio of securities, with no guarantee of performance.',
        },
      ],
    ),
    question(
      'c3q59',
      'A domestic life company may set up separate accounts for benefits payable in which amounts?',
      [
        {
          text: 'Variable amounts only.',
          why: 'The company is not limited to variable amounts. A domestic life company may set up separate accounts for benefits payable in fixed amounts, variable amounts, or both.',
        },
        {
          text: 'Only the universal life target premium.',
          why: 'The target premium is the recommended universal life premium that keeps the policy in force for life. Separate accounts may provide benefits in fixed amounts, variable amounts, or both.',
        },
        {
          text: 'Fixed amounts, variable amounts, or both.',
          why: 'A domestic life company may set up separate accounts for benefits payable in fixed amounts, variable amounts, or both.',
          correct: true,
        },
        {
          text: 'Only an amount equal to the balance of a debt.',
          why: 'A benefit that cannot exceed the debt is credit life. A domestic life company may set up separate accounts for fixed amounts, variable amounts, or both.',
        },
      ],
    ),
    question(
      'c3q60',
      'Variable life, sometimes called variable whole life, has which premium and which guarantees?',
      [
        {
          text: 'A flexible premium, and both the death benefit and the cash value are guaranteed.',
          why: 'A flexible premium describes universal life or variable universal life. Variable life has a level fixed premium. The death benefit has a guaranteed minimum, but the cash value is not guaranteed.',
        },
        {
          text: 'A premium that increases with attained age, and neither the death benefit nor the cash value is guaranteed.',
          why: 'An attained-age premium increase describes annual renewable term. Variable life has a level fixed premium and a guaranteed minimum death benefit. The cash value is not guaranteed.',
        },
        {
          text: 'One lump sum, and cash value is scheduled to equal the face amount at age 100.',
          why: 'One lump sum describes single premium whole life, and age 100 is the traditional whole life maturity date. Variable life uses a level fixed premium, guarantees a minimum death benefit, and does not guarantee cash value.',
        },
        {
          text: 'A level fixed premium and a guaranteed minimum death benefit. The cash value is not guaranteed and fluctuates with the portfolio.',
          why: 'Variable life, sometimes called variable whole life, has a level fixed premium and a guaranteed minimum death benefit. The cash value is not guaranteed and fluctuates with the portfolio.',
          correct: true,
        },
      ],
    ),
    question(
      'c3q61',
      'Why are variable-contract assets held in a separate account rather than the general account?',
      [
        {
          text: 'Because the insurer is not taking the investment risk.',
          why: 'Because the insurer is not taking the investment risk, the assets cannot sit in the general account. They are held in a separate account.',
          correct: true,
        },
        {
          text: 'Because adjustable life cash value is prohibited from earning a fixed rate.',
          why: 'Adjustable life cash value does earn a fixed rate in the general account. Variable assets are kept out of the general account because the insurer is not taking the investment risk.',
        },
        {
          text: 'Because the corridor required after December 31, 1984 must be a separate account.',
          why: 'The corridor is a gap between cash value and the death benefit on universal life so the contract still qualifies as life insurance. Variable assets are separated because the insurer is not taking the investment risk.',
        },
        {
          text: 'Because group certificates must be invested apart from the master contract.',
          why: 'Group life uses a master contract and certificates and is usually annually renewable term. Variable assets are in a separate account because the insurer is not taking the investment risk.',
        },
      ],
    ),
    question(
      'c3q62',
      'A variable separate account invests in what?',
      [
        {
          text: 'Only the general-account assets, which are commingled with the separate account.',
          why: 'Separate-account assets cannot be commingled with general-account assets. The separate account invests in stocks, bonds, and other securities.',
        },
        {
          text: 'Stocks, bonds, and other securities.',
          why: 'The separate account invests in stocks, bonds, and other securities.',
          correct: true,
        },
        {
          text: 'Premiums that will be returned if the insured outlives a term.',
          why: 'Returned premiums are a return-of-premium feature. A separate account invests in stocks, bonds, and other securities.',
        },
        {
          text: 'Loan balances insured as credit life.',
          why: 'Credit life pays off a loan balance and is usually decreasing term. A separate account invests in stocks, bonds, and other securities.',
        },
      ],
    ),
    question(
      'c3q63',
      'What must a domestic insurer that issues variable contracts establish, and what must the assets of each account at least equal?',
      [
        {
          text: 'One general account, with assets equal to the face amount at age 100.',
          why: 'Equality of cash value and face amount at age 100 is a whole life schedule. A domestic insurer that issues variable contracts must establish one or more separate accounts, and the assets of each account must at least equal the reserves and other contract liabilities.',
        },
        {
          text: 'A trust for the policyowners, with assets equal to two individual premiums.',
          why: 'The company is not a trustee of separate-account amounts. A premium less than the sum of two individual premiums is a joint life fact. The insurer must establish one or more separate accounts whose assets at least equal the reserves and other contract liabilities.',
        },
        {
          text: 'One or more separate accounts, and the assets must at least equal the reserves and other contract liabilities.',
          why: 'A domestic insurer that issues variable contracts must establish one or more separate accounts. The assets of each account must at least equal the reserves and other contract liabilities.',
          correct: true,
        },
        {
          text: 'No separate account. The assets stay in the general account and may be commingled there.',
          why: 'That contradicts the separate-account rule. A domestic insurer that issues variable contracts must establish one or more separate accounts, and separate-account assets cannot be commingled with general-account assets. The assets of each account must at least equal the reserves and other contract liabilities.',
        },
      ],
    ),
    question(
      'c3q64',
      'Which rule applies to assets in a variable separate account?',
      [
        {
          text: 'They earn a fixed rate and are held in the general account of the insurer.',
          why: 'A fixed rate in the general account describes adjustable life cash value. Separate-account assets cannot be commingled with general-account assets.',
        },
        {
          text: 'They are scheduled to equal the face amount at age 100.',
          why: 'Cash value scheduled to equal the face amount at age 100 is whole life. Separate-account assets cannot be commingled with general-account assets, and variable cash value is not guaranteed.',
        },
        {
          text: 'They are returned if the insured is alive at the end of the term.',
          why: 'A return of premiums if the insured is alive at the end of the term is return of premium. Separate-account assets cannot be commingled with general-account assets.',
        },
        {
          text: 'They cannot be commingled with general-account assets.',
          why: 'Separate-account assets cannot be commingled with general-account assets.',
          correct: true,
        },
      ],
    ),
    question(
      'c3q65',
      'Variable universal life combines which features?',
      [
        {
          text: 'A flexible premium, an adjustable death benefit, and the investment component of variable life.',
          why: 'Variable universal life combines a flexible premium, an adjustable death benefit, and the investment component of variable life.',
          correct: true,
        },
        {
          text: 'A level fixed premium, guaranteed cash value, and premiums that stop at age 65.',
          why: 'Variable life has a level fixed premium, but its cash value is not guaranteed. Life paid-up at 65 is limited-pay whole life. Variable universal life combines a flexible premium, an adjustable death benefit, and the variable life investment component.',
        },
        {
          text: 'Decreasing term, a creditor beneficiary, and a benefit limited to the debt.',
          why: 'Those features describe credit life. Variable universal life combines a flexible premium, an adjustable death benefit, and the investment component of variable life.',
        },
        {
          text: 'A master contract, certificates, and annually renewable term on a group.',
          why: 'Those features describe group life. Variable universal life combines a flexible premium, an adjustable death benefit, and the investment component of variable life.',
        },
      ],
    ),
    question(
      'c3q66',
      'If the policy value can fund the death benefit, what can the owner of a variable universal life policy do?',
      [
        {
          text: 'Require a guaranteed return on every investment choice.',
          why: 'Unlike universal life, most of the investment choices do not guarantee a return. The owner can raise, lower, or skip premiums if the policy value can fund the death benefit, and can take withdrawals or loans.',
        },
        {
          text: 'Raise, lower, or skip premiums, and also take withdrawals or loans.',
          why: 'Like universal life, the owner can raise, lower, or skip premiums if the policy value can fund the death benefit, and can take withdrawals or loans.',
          correct: true,
        },
        {
          text: 'Convert to group term within 31 days without evidence of insurability.',
          why: 'Thirty-one days to convert, without evidence of insurability, applies when an employee leaves a group plan. It is not the variable universal life premium right.',
        },
        {
          text: 'Move the benefit to a first-death payment at a fixed general-account rate.',
          why: 'Payment at the first death is joint life, and a fixed rate in the general account is adjustable life. The variable universal life owner can adjust or skip premiums when policy value can fund the death benefit, and can take withdrawals or loans.',
        },
      ],
    ),
    question(
      'c3q67',
      'How do most investment choices in variable universal life differ from universal life?',
      [
        {
          text: 'They guarantee the contract rate of 3% to 6%.',
          why: 'A contract guarantee, often 3% to 6%, is a universal life interest feature. Most variable universal life investment choices do not guarantee a return.',
        },
        {
          text: 'They earn a fixed rate in the general account.',
          why: 'A fixed rate in the general account describes adjustable life cash value. Most variable universal life investment choices do not guarantee a return.',
        },
        {
          text: 'They do not guarantee a return.',
          why: 'Unlike universal life, most of the investment choices in variable universal life do not guarantee a return.',
          correct: true,
        },
        {
          text: 'They guarantee that cash value will equal the face amount at age 100.',
          why: 'Cash value scheduled to equal the face amount at age 100 is traditional whole life. Most variable universal life investment choices do not guarantee a return.',
        },
      ],
    ),
    question(
      'c3q68',
      'Which statement matches the regulation of variable products and the Utah producer approval in this chapter?',
      [
        {
          text: 'Fixed contracts state guaranteed benefits, so variable products are regulated only as fixed insurance with no producer approval.',
          why: 'Fixed contracts do offer guaranteed minimum or fixed benefits stated in the contract. Variable products are different: they are regulated by the state insurance department, the SEC, and FINRA, and the producer must be approved as a Utah resident producer through the Central Registration Depository of FINRA.',
        },
        {
          text: 'Only the state insurance department regulates the product, because a separate account is only an insurance product.',
          why: 'Variable products are regulated both as insurance and as securities. The regulators are the state insurance department, the SEC, and FINRA, and the producer must also be approved as a Utah resident producer through the Central Registration Depository of FINRA.',
        },
        {
          text: 'The SEC alone regulates the product, and a life license is enough for the producer.',
          why: 'The SEC is one of three regulators. A life license alone is not the full producer requirement, and the producer must also be approved as a Utah resident producer through the Central Registration Depository of FINRA.',
        },
        {
          text: 'The state insurance department, the SEC, and FINRA regulate them, and the producer must be approved as a Utah resident producer through the Central Registration Depository of FINRA.',
          why: 'Variable products are regulated both as insurance and as securities, by the state insurance department, the SEC, and FINRA. The producer must also be approved as a Utah resident producer through the Central Registration Depository of FINRA.',
          correct: true,
        },
      ],
    ),
    question(
      'c3q69',
      'Under Utah variable contract law, a company may not deliver variable contracts in this state unless it is licensed to do which business here?',
      [
        {
          text: 'A life insurance or annuity business.',
          why: 'A company may not deliver variable contracts in this state unless it is licensed to do a life insurance or annuity business here.',
          correct: true,
        },
        {
          text: 'Only a group business that issues certificates to employees.',
          why: 'Certificates and a master contract describe group life. Delivery of variable contracts requires a license to do a life insurance or annuity business in this state.',
        },
        {
          text: 'A business in which the policyowner bears no investment risk.',
          why: 'In a variable contract the policyowner bears the investment risk. The delivery rule requires a license to do a life insurance or annuity business in this state.',
        },
        {
          text: 'Credit life, with the creditor as owner and beneficiary.',
          why: 'On credit life the creditor is the owner and the beneficiary. That role is not the license required here. A company may not deliver variable contracts in this state unless it is licensed to do a life insurance or annuity business here.',
        },
      ],
    ),
  ],
  'c3-joint': [
    question(
      'c3q70',
      'Joint life insures how many lives, and when does it pay?',
      [
        {
          text: 'One life, and it pays only if that person dies during a stated term.',
          why: 'Term is temporary protection for a specific period. Joint life insures two or more lives and pays at the first death.',
        },
        {
          text: 'Two or more lives, and it pays at the first death.',
          why: 'Joint life insures two or more lives and pays at the first death. The premium is based on a joint age.',
          correct: true,
        },
        {
          text: 'Two or more lives, and it pays at the last death.',
          why: 'Payment at the last death is survivorship life. Joint life pays at the first death.',
        },
        {
          text: 'A minor, and the face amount increases at a predetermined age.',
          why: 'Juvenile life insurance is written on the life of a minor. Joint life insures two or more lives and pays at the first death.',
        },
      ],
    ),
    question(
      'c3q71',
      'The joint life premium is based on a joint age. How does that premium compare with the premiums for two individual policies?',
      [
        {
          text: 'It equals the sum of the two individual premiums.',
          why: 'The joint life premium is less than the sum of two individual premiums. It is not equal to that sum.',
        },
        {
          text: 'It is higher than a survivorship premium because the survivorship payment is delayed.',
          why: 'Survivorship does have a lower premium than joint life because payment is delayed. The comparison asked here is with two individual policies: the joint life premium is less than the sum of those two premiums.',
        },
        {
          text: 'It is less than the sum of two individual premiums.',
          why: 'The premium is based on a joint age and is less than the sum of two individual premiums.',
          correct: true,
        },
        {
          text: 'It is one lump sum that creates immediate cash value.',
          why: 'One lump sum and immediate cash value describe single premium whole life. The joint life premium is based on a joint age and is less than the sum of two individual premiums.',
        },
      ],
    ),
    question(
      'c3q72',
      'Joint life fits a need that ends at the first death. Which examples does the chapter give?',
      [
        {
          text: 'Estate tax due when the second insured dies.',
          why: 'Estate tax when the second insured dies is a survivorship use. Joint life fits a need that ends at the first death.',
        },
        {
          text: 'Inflation protection added as a cost-of-living rider.',
          why: 'Increasing term is used for inflation and is often added as a rider. Joint life fits a need that ends at the first death.',
        },
        {
          text: 'A permanent need that continues until age 100.',
          why: 'Lifetime protection, with cash value scheduled to equal the face amount at age 100, is whole life. Joint life fits a need that ends at the first death.',
        },
        {
          text: 'The mortgage of a two-income couple, or a buy-sell agreement between business partners.',
          why: 'Joint life fits a need that ends at the first death, such as the mortgage of a two-income couple, or a buy-sell agreement between business partners.',
          correct: true,
        },
      ],
    ),
    question(
      'c3q73',
      'Survivorship life is also called what?',
      [
        {
          text: 'Second-to-die or last survivor.',
          why: 'Survivorship life, also called second-to-die or last survivor, also uses a joint age, but it pays on the last death.',
          correct: true,
        },
        {
          text: 'Flexible premium adjustable life.',
          why: 'Flexible premium adjustable life is universal life. Survivorship life is also called second-to-die or last survivor.',
        },
        {
          text: 'Ordinary life or continuous premium whole life.',
          why: 'Ordinary life and continuous premium whole life are names for straight whole life. Survivorship life is also called second-to-die or last survivor.',
        },
        {
          text: 'Pure life insurance.',
          why: 'Pure life insurance is another name for term. Survivorship life is also called second-to-die or last survivor.',
        },
      ],
    ),
    question(
      'c3q74',
      'Why is a survivorship life premium lower than a joint life premium, and what use does the chapter give for survivorship coverage?',
      [
        {
          text: 'The premium is lower because it is based on issue age, and the coverage is used for a mortgage that shrinks.',
          why: 'A shrinking mortgage is a decreasing-term use, and it can also be a joint life need that ends at the first death. Survivorship costs less because payment is delayed, and it is often used to pay estate tax when the second insured dies.',
        },
        {
          text: 'The premium is lower because payment is delayed, and the coverage is often used to pay estate tax when the second insured dies.',
          why: 'Because payment is delayed, the premium is lower than a joint life premium. Survivorship coverage is often used to pay estate tax when the second insured dies.',
          correct: true,
        },
        {
          text: 'The premium is lower because there is no cash value, and the coverage is a 10-year level term policy.',
          why: 'No cash value describes term, and the $100,000 10-year example is level term. Survivorship is lower than joint life because payment is delayed, and it is often used for estate tax.',
        },
        {
          text: 'The premium is lower because the face amount increases at age 21.',
          why: 'A face amount that increases at a predetermined age, often age 21, is a jumping juvenile policy, and the premium on that policy stays level. Survivorship is lower than joint life because payment is delayed.',
        },
      ],
    ),
  ],
  'c3-juvenile': [
    question(
      'c3q75',
      'What is juvenile life insurance?',
      [
        {
          text: 'Life insurance that pays at the first death of two adults.',
          why: 'Insurance on two or more lives that pays at the first death is joint life. Juvenile life insurance is any life insurance written on the life of a minor.',
        },
        {
          text: 'A policy that endows when cash value equals the face amount.',
          why: 'To endow means the cash value has reached the contractual face amount. Juvenile life insurance is any life insurance written on the life of a minor.',
        },
        {
          text: 'Any life insurance written on the life of a minor.',
          why: 'Juvenile life insurance is any life insurance written on the life of a minor.',
          correct: true,
        },
        {
          text: 'A certificate issued to an employee under a group master contract.',
          why: 'A certificate of insurance is what each group participant receives. Juvenile life insurance is any life insurance written on the life of a minor.',
        },
      ],
    ),
    question(
      'c3q76',
      'The face amount of a jumping juvenile policy increases at a predetermined age. The chapter says that age is often what?',
      [
        {
          text: 'Age 100.',
          why: 'Age 100 is the maturity date when traditional whole life cash value is scheduled to equal the face amount. The jumping juvenile face amount increases at a predetermined age, often age 21.',
        },
        {
          text: 'Age 65.',
          why: 'Life paid-up at 65 is a limited-pay whole life example. The jumping juvenile face amount increases at a predetermined age, often age 21.',
        },
        {
          text: 'The third policy year.',
          why: 'The third policy year is when whole life cash value usually begins to build. The jumping juvenile face amount increases at a predetermined age, often age 21.',
        },
        {
          text: 'Often age 21.',
          why: 'A jumping juvenile policy is called that because the face amount increases at a predetermined age, often age 21.',
          correct: true,
        },
      ],
    ),
    question(
      'c3q77',
      'When the face amount of a jumping juvenile policy increases, what happens to the premium?',
      [
        {
          text: 'The premium stays level.',
          why: 'The face amount jumps. The premium stays level.',
          correct: true,
        },
        {
          text: 'The premium increases at the same time as the face amount.',
          why: 'That contradicts the policy design in this section. The face amount jumps, and the premium stays level.',
        },
        {
          text: 'The premium is figured again at attained age on the increase date.',
          why: 'Attained age is used when term is sold, renewed, or converted. On a jumping juvenile policy, the premium stays level when the face amount jumps.',
        },
        {
          text: 'The premium becomes one lump sum.',
          why: 'One lump sum describes single premium whole life. The jumping juvenile premium stays level.',
        },
      ],
    ),
  ],
  'c3-group': [
    question(
      'c3q78',
      'Group life is issued to whom, and how many people does it cover?',
      [
        {
          text: 'One person, who owns an individual policy.',
          why: 'An individual owner of one policy is not the group arrangement. Group life is issued to a sponsoring organization and covers more than one person.',
        },
        {
          text: 'A sponsoring organization, and it covers more than one person.',
          why: 'Group life is issued to a sponsoring organization and covers more than one person. It is commonly written for employer groups.',
          correct: true,
        },
        {
          text: 'The creditor only, for the balance of one loan.',
          why: 'Credit life insures the debtor and pays the balance of a loan. Group life is issued to a sponsoring organization and covers more than one person.',
        },
        {
          text: 'Two people whose premium is based on a joint age.',
          why: 'Two or more lives insured for a premium based on a joint age describes joint life. Group life is issued to a sponsoring organization and covers more than one person.',
        },
      ],
    ),
    question(
      'c3q79',
      'Besides employer groups, group life is also written for which groups?',
      [
        {
          text: 'Only groups formed so the members can buy insurance.',
          why: 'The group must exist for a reason other than buying insurance. Besides employer groups, group life is written for debtor groups, labor unions, credit unions, and associations.',
        },
        {
          text: 'Only separate accounts used for variable contracts.',
          why: 'A separate account holds variable-contract assets. Group life is also written for debtor groups, labor unions, credit unions, and associations.',
        },
        {
          text: 'Debtor groups, labor unions, credit unions, and associations.',
          why: 'Group life is commonly written for employer groups, and also for debtor groups, labor unions, credit unions, and associations.',
          correct: true,
        },
        {
          text: 'Only policies written on the life of a minor.',
          why: 'Juvenile life insurance is any life insurance written on the life of a minor. Group life is also written for debtor groups, labor unions, credit unions, and associations.',
        },
      ],
    ),
    question(
      'c3q80',
      'The group that buys group life must exist for what kind of reason?',
      [
        {
          text: 'It may be formed only to buy insurance.',
          why: 'That contradicts the rule. The group must exist for a reason other than buying insurance.',
        },
        {
          text: 'It must exist in order to invest a separate account.',
          why: 'A separate account is a variable-contract requirement. The group must exist for a reason other than buying insurance.',
        },
        {
          text: 'It must exist so that every certificate endows at age 100.',
          why: 'Age 100 is the traditional whole life maturity date. The group must exist for a reason other than buying insurance.',
        },
        {
          text: 'It must exist for a reason other than buying insurance.',
          why: 'The group must exist for a reason other than buying insurance. Group life is issued to a sponsoring organization.',
          correct: true,
        },
      ],
    ),
    question(
      'c3q81',
      'Group life is usually written as which kind of insurance?',
      [
        {
          text: 'Annually renewable term.',
          why: 'Group life is usually written as annually renewable term. The master contract is for the sponsor, and certificates of insurance are for the individual insureds.',
          correct: true,
        },
        {
          text: 'Straight whole life, with cash value from the third policy year.',
          why: 'Straight whole life is permanent insurance, and cash value usually starts in the third policy year. Group life is usually annually renewable term.',
        },
        {
          text: 'Variable universal life.',
          why: 'Variable universal life combines a flexible premium, an adjustable death benefit, and the investment component of variable life. Group life is usually annually renewable term.',
        },
        {
          text: 'Single premium whole life.',
          why: 'Single premium whole life is paid with one lump sum and creates immediate cash value. Group life is usually annually renewable term.',
        },
      ],
    ),
    question(
      'c3q82',
      'When is evidence of insurability required for someone enrolling in group life?',
      [
        {
          text: 'It is required for every participant.',
          why: 'Evidence of insurability is usually not required. It is required when someone enrolls outside the normal enrollment period.',
        },
        {
          text: 'It is usually not required, unless the person enrolls outside the normal enrollment period.',
          why: 'Evidence of insurability is usually not required, unless someone enrolls outside the normal enrollment period.',
          correct: true,
        },
        {
          text: 'It is required only when a face amount increases at age 21.',
          why: 'A face-amount increase at a predetermined age, often age 21, is a jumping juvenile feature. Group evidence of insurability is usually not required unless enrollment is outside the normal period.',
        },
        {
          text: 'It is required before any death benefit can be paid during the conversion period.',
          why: 'If the insured dies during the conversion period, the group policy pays whether or not an individual application was completed. Evidence of insurability is usually not required unless the person enrolls outside the normal enrollment period.',
        },
      ],
    ),
    question(
      'c3q83',
      'Why do participants in a group life plan not receive a policy?',
      [
        {
          text: 'Because each participant already owns an individual whole life policy.',
          why: 'Participants do not own or control the group policy. That is why they do not receive a policy. Each participant gets a certificate of insurance.',
        },
        {
          text: 'Because the insurer issues no document of any kind to the sponsor or the participants.',
          why: 'The master policy goes to the sponsor, and each participant gets a certificate of insurance. Participants do not receive a policy because they do not own or control it.',
        },
        {
          text: 'Because they do not own or control the policy.',
          why: 'Participants do not receive a policy, because they do not own or control it. The master policy goes to the sponsor, often the employer, and the sponsor is the policyholder.',
          correct: true,
        },
        {
          text: 'Because the creditor must own every group plan, including an employer plan.',
          why: 'The creditor owns the master policy on group credit life. On group life, participants do not receive a policy because they do not own or control it. The sponsor is the policyholder.',
        },
      ],
    ),
    question(
      'c3q84',
      'Group underwriting looks at the group. Which factors does the chapter list?',
      [
        {
          text: 'The securities held in a separate account.',
          why: 'A separate account invests in stocks, bonds, and other securities for a variable contract. Group underwriting looks at purpose, size, turnover of younger lives, and financial strength.',
        },
        {
          text: 'The guaranteed interest rate and endowment at age 100.',
          why: 'A guaranteed interest rate and maturity at age 100 are whole life features. Group underwriting looks at purpose, size, turnover, and financial strength to pay premiums.',
        },
        {
          text: 'The corridor percentages and the Option A death benefit.',
          why: 'The corridor and Option A are universal life features. Group underwriting looks at the purpose, size, turnover, and financial strength of the group.',
        },
        {
          text: 'Purpose, size under the law of large numbers, a steady turnover of younger lives replacing older ones, and the financial strength to pay premiums.',
          why: 'Underwriting looks at the group: its purpose, its size (the law of large numbers), a steady turnover of younger lives replacing older ones, and the financial strength to pay premiums.',
          correct: true,
        },
      ],
    ),
    question(
      'c3q85',
      'Group life cost is based on what?',
      [
        {
          text: 'The average age of the group and the ratio of men to women.',
          why: 'Cost is based on the average age of the group and the ratio of men to women.',
          correct: true,
        },
        {
          text: 'The issue age of each employee, with a premium that stays the same for that life.',
          why: 'A premium based on issue age that stays the same for life is whole life. Group cost is based on the average age of the group and the ratio of men to women.',
        },
        {
          text: 'A joint age that produces a premium lower than two individual premiums.',
          why: 'A joint age, with a premium less than the sum of two individual premiums, is joint life. Group cost uses the average age of the group and the ratio of men to women.',
        },
        {
          text: 'The universal life contract rate, often 3% to 6%.',
          why: 'Often 3% to 6% is the guaranteed contract interest rate on universal life. Group cost is based on the average age of the group and the ratio of men to women.',
        },
      ],
    ),
    question(
      'c3q86',
      'Why does group life require a minimum number of participants, and what does that minimum depend on?',
      [
        {
          text: 'To create immediate cash value for each participant.',
          why: 'Immediate cash value is a feature of single premium whole life. The minimum number of participants limits adverse selection, and that minimum depends on who pays the premium.',
        },
        {
          text: 'To limit adverse selection, and the minimum depends on who pays the premium.',
          why: 'A minimum number of participants is required to limit adverse selection, and that minimum depends on who pays the premium.',
          correct: true,
        },
        {
          text: 'To allow the group to be formed solely to buy insurance.',
          why: 'The group must exist for a reason other than buying insurance. The participant minimum limits adverse selection and depends on who pays the premium.',
        },
        {
          text: 'To make the death benefit equal the face amount plus the cash value.',
          why: 'The face amount plus the cash value is universal life Option B. The participant minimum limits adverse selection and depends on who pays the premium.',
        },
      ],
    ),
    question(
      'c3q87',
      'Which statement describes conversion when an employee leaves the group?',
      [
        {
          text: 'Evidence of insurability is required, and the new policy must be term.',
          why: 'Conversion does not require evidence of insurability. It is to a form the insurer issues, usually whole life, not to term.',
        },
        {
          text: 'Only a person covered for at least 5 years may convert, and only to term.',
          why: 'The 5-year rule applies when the master contract ends, and that conversion is to individual permanent insurance. An employee who leaves may convert without evidence of insurability, usually to whole life, not to term.',
        },
        {
          text: 'The employee may convert without evidence of insurability, at standard rates based on attained age, usually to whole life rather than term. The face amount equals the group term face amount, and the premium is higher.',
          why: 'The employee may convert to an individual policy without evidence of insurability, at standard rates based on attained age. Conversion is usually to whole life, not to term. The face amount equals the group term face amount, and the premium is higher.',
          correct: true,
        },
        {
          text: 'The employee must convert to variable life and must hold Series 6 or Series 7 and Series 63.',
          why: 'Series 6 or Series 7, and Series 63, are part of the license of a variable contract producer. Employee conversion is usually to whole life, without evidence of insurability, at standard attained-age rates.',
        },
      ],
    ),
    question(
      'c3q88',
      'How long does an employee who leaves the group have to convert, and is that person covered during that time?',
      [
        {
          text: 'At least 5 years, and group coverage ends on the day the employee leaves.',
          why: 'Five years is how long a person must have been on the plan to convert when the master contract ends. An employee who leaves has 31 days to convert and remains covered under the group policy during that period.',
        },
        {
          text: 'Until age 100, with no separate conversion window.',
          why: 'Age 100 is the traditional whole life maturity date. The employee has 31 days to convert and remains covered under the group policy during that period.',
        },
        {
          text: 'Until cash value equals the face amount, as on a whole life maturity date.',
          why: 'Cash value scheduled to equal the face amount at age 100 is whole life maturity. An employee who leaves the group has 31 days to convert and remains covered under the group policy during that period.',
        },
        {
          text: '31 days, and the employee remains covered under the group policy during that period.',
          why: 'The employee has 31 days to convert and remains covered under the group policy during that period.',
          correct: true,
        },
      ],
    ),
    question(
      'c3q89',
      'If the insured dies during the group conversion period, what does the group policy do?',
      [
        {
          text: 'It pays the death benefit whether or not an individual application was completed.',
          why: 'If the insured dies during the conversion period, the group policy pays the death benefit whether or not an individual application was completed.',
          correct: true,
        },
        {
          text: 'It pays nothing unless the individual policy has already been issued.',
          why: 'That contradicts the conversion rule. The group policy pays the death benefit whether or not an individual application was completed.',
        },
        {
          text: 'It pays only cash value, because the group coverage endows during the 31 days.',
          why: 'Group life is usually annually renewable term. To endow means cash value has reached the contractual face amount, which is not this conversion rule. The group policy pays the death benefit if the insured dies during the conversion period.',
        },
        {
          text: 'It pays the creditor the balance of a loan.',
          why: 'Paying the balance of a loan to the creditor is credit life. During the group conversion period, the group policy pays the death benefit whether or not an application was completed.',
        },
      ],
    ),
  ],
  'c3-credit': [
    question(
      'c3q90',
      'Whom does credit life insure, and what does it pay if that person dies?',
      [
        {
          text: 'The creditor, and it may pay more than the loan.',
          why: 'The debtor is the insured. The benefit cannot be more than the balance of the debt. Credit life pays off the balance of the loan if the debtor dies.',
        },
        {
          text: 'The debtor, and it pays off the balance of the loan.',
          why: 'Credit life insures the debtor and pays off the balance of a loan if the debtor dies.',
          correct: true,
        },
        {
          text: 'Two partners, and it pays at the second death.',
          why: 'Two lives, with payment at the last death, describe survivorship life, often used for estate tax. Credit life insures the debtor and pays the loan balance.',
        },
        {
          text: 'A minor, and the face amount increases at a predetermined age.',
          why: 'Insurance on a minor, with a face amount that increases at a predetermined age, is juvenile life. Credit life insures the debtor and pays the loan balance.',
        },
      ],
    ),
    question(
      'c3q91',
      'Credit life may be written in which of these ways?',
      [
        {
          text: 'Only as variable universal life.',
          why: 'Variable universal life combines a flexible premium, an adjustable death benefit, and a variable investment component. Credit life may be an individual policy or a group plan.',
        },
        {
          text: 'Only as single premium whole life.',
          why: 'Single premium whole life creates immediate cash value. Credit life may be written as an individual policy or as a group plan.',
        },
        {
          text: 'As an individual policy or as a group plan.',
          why: 'Credit life may be written as an individual policy or as a group plan. It is usually decreasing term.',
          correct: true,
        },
        {
          text: 'Only as survivorship life on the creditor and the debtor.',
          why: 'Survivorship life pays on the last death. Credit life may be an individual policy or a group plan insuring the debtor.',
        },
      ],
    ),
    question(
      'c3q92',
      'In a group credit life plan, who owns the master policy, and what does each debtor receive?',
      [
        {
          text: 'Each debtor owns the master policy and names the beneficiary.',
          why: 'The debtor does not own the master policy. The creditor owns the master policy, and each debtor receives a certificate.',
        },
        {
          text: 'The insurer gives each debtor a separate whole life policy.',
          why: 'Group participants do not receive a policy they own. In group credit life, the creditor owns the master policy and each debtor receives a certificate.',
        },
        {
          text: 'The employer owns the master policy, and the debtor receives the policy itself.',
          why: 'An employer is the usual sponsor of employer group life. In a group credit plan, the creditor owns the master policy and each debtor receives a certificate.',
        },
        {
          text: 'The creditor owns the master policy, and each debtor receives a certificate.',
          why: 'In a group plan the creditor owns the master policy and each debtor receives a certificate.',
          correct: true,
        },
      ],
    ),
    question(
      'c3q93',
      'Who generally pays the premium on credit life?',
      [
        {
          text: 'The borrower, although the creditor is the owner and the beneficiary.',
          why: 'The creditor is the owner and the beneficiary, although the borrower generally pays the premium.',
          correct: true,
        },
        {
          text: 'The insurer, because the benefit cannot exceed the debt.',
          why: 'The benefit cannot be more than the balance of the debt, but that limit does not make the insurer the payer. The borrower generally pays the premium.',
        },
        {
          text: 'A person the debtor names as beneficiary.',
          why: 'The creditor is the beneficiary. The borrower generally pays the premium.',
        },
        {
          text: 'The state insurance department.',
          why: 'The state insurance department is a regulator of variable products. The borrower generally pays the credit life premium.',
        },
      ],
    ),
    question(
      'c3q94',
      'Why can the credit life benefit not be more than the balance of the debt?',
      [
        {
          text: 'So the policy will endow at age 100.',
          why: 'Endowment when cash value reaches the face amount, scheduled at age 100, is whole life. The credit life limit exists so there is no financial incentive for the death of the insured.',
        },
        {
          text: 'So there is no financial incentive for the death of the insured.',
          why: 'The benefit cannot be more than the balance of the debt, so there is no financial incentive for the death of the insured.',
          correct: true,
        },
        {
          text: 'So the premium can be based on a joint age.',
          why: 'A joint age is the premium basis for joint life and survivorship life. The credit life cap exists so there is no financial incentive for the death of the insured.',
        },
        {
          text: 'So the cash value can be kept in a separate account.',
          why: 'A separate account holds variable-contract assets. The credit life benefit is limited to the debt so there is no financial incentive for the death of the insured.',
        },
      ],
    ),
  ],
}
