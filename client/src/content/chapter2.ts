import { question } from './build.ts'
import type { Chapter } from './types.ts'
import { chapter2Extra } from './extra/chapter2.ts'

/** Wording follows the course OCR in content/source/chapter-2-ocr.txt. */
export const chapter2: Chapter = {
  id: 'ch-basics',
  number: 2,
  title: 'How Life Insurance Works',
  summary:
    'Why people and businesses buy life insurance, how the amount is chosen, and how a policy is underwritten, priced, and delivered.',
  sections: [
    {
      id: 'c2-interest',
      title: 'Who is allowed to buy a policy',
      body: `To buy insurance, the policyowner must face the possibility of losing money or something of value if a loss occurs. That is insurable interest. In life insurance it must exist between the policyowner and the insured at the time of application. Once the policy is issued, the insurer must pay the benefit whether or not insurable interest still exists.

A valid insurable interest exists when the policy insures the policyowner’s own life, the life of a family member (a spouse or a close blood relative), or the life of a business partner, a key employee, or someone who has a financial obligation to the policyowner. A debtor has a financial obligation to a creditor, so the creditor has an insurable interest in the debtor’s life.

Insurable interest is not required of beneficiaries. The beneficiary’s life is not the life being insured.`,
      questions: [
        question(
          'c2q01',
          'When must insurable interest exist in a life insurance policy?',
          [
            {
              text: 'At the time of application, between the policyowner and the insured.',
              why: 'Insurable interest must exist at application. After issue, the insurer pays the benefit whether or not that interest continues.',
              correct: true,
            },
            {
              text: 'At the time of death, between the beneficiary and the insured.',
              why: 'Beneficiaries do not have to show insurable interest. The requirement is on the policyowner at application, not on the beneficiary at death.',
            },
            {
              text: 'Continuously, from application until the claim is paid.',
              why: 'Once the policy is issued, the benefit is payable even if insurable interest no longer exists.',
            },
            {
              text: 'Only when the policy is owned by a business.',
              why: 'Insurable interest is required for personal policies too. A person has an unlimited interest in his or her own life, and family and business relationships can also create it.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c2-personal',
      title: 'Why families buy life insurance',
      body: `Survivor protection replaces income when a wage earner dies, and it can also protect a family when a nonearning spouse who cares for minor children dies. Planning it means looking at current assets, liabilities, and what the survivors will need.

Estate creation happens the moment the first premium is paid. Earnings, savings, and investments take time. A young family can create an immediate estate, at least equal to the death benefit, at a small cost. The course states there is no other legal method that creates an immediate estate at such a small cost.

Cash accumulation, in permanent policies such as whole life, builds cash value the policyowner can use while living. Liquidity means those cash values can be borrowed against for an immediate need.

Estate conservation uses the death benefit to pay estate taxes and other costs so the estate’s assets do not have to be sold. Liquidation means selling assets to raise capital. Life insurance can keep a family from having to liquidate the estate at death.

A lump-sum payment pays the entire benefit in one sum. A minor is a person under legal age and generally cannot receive policy proceeds directly.`,
      questions: [
        question(
          'c2q02',
          'Which personal use of life insurance creates an immediate estate when the first premium is paid?',
          [
            {
              text: 'Estate creation',
              why: 'The purchase creates an estate of at least the death benefit the moment the first premium is paid. That is especially important for young families.',
              correct: true,
            },
            {
              text: 'Liquidity',
              why: 'Liquidity is the ability to borrow against cash value for an immediate need. It is not the creation of the death benefit itself.',
            },
            {
              text: 'Estate conservation',
              why: 'Estate conservation uses proceeds to pay death costs so other assets need not be sold. It assumes an estate already exists.',
            },
            {
              text: 'Cash accumulation',
              why: 'Cash accumulation is the living benefit that builds inside a permanent policy over time. It is not immediate at the first premium.',
            },
          ],
        ),
        question(
          'c2q03',
          'Life insurance provides liquidity when the policyowner does which of the following?',
          [
            {
              text: 'Names a minor as beneficiary so the proceeds are held until legal age.',
              why: 'A minor generally cannot receive proceeds directly. That is a settlement problem, not liquidity.',
            },
            {
              text: 'Borrows against the policy’s cash value for an immediate need.',
              why: 'Liquidity means cash values can be borrowed against at any time and used for immediate needs.',
              correct: true,
            },
            {
              text: 'Sells other estate assets to raise capital after the insured dies.',
              why: 'Selling assets is liquidation. One purpose of life insurance is to reduce the need to liquidate the estate.',
            },
            {
              text: 'Pays the entire death benefit in one sum.',
              why: 'A lump-sum settlement pays the death benefit at one time. Liquidity in this chapter is the living use of cash value.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c2-amount',
      title: 'How much life insurance to buy',
      body: `Two approaches help a producer and a buyer decide how much personal life insurance is appropriate.

The human life value approach estimates what the family would lose if the insured died prematurely. It looks at wages, inflation, the years until retirement, and the time value of money. In the course example, a 40-year-old earns $50,000 until age 65. Of that, $40,000 a year is spent on family needs. The human life value to the family is $1,000,000: $40,000 times 25 years. Interest and inflation are then used to set a benefit that could replace that income.

The needs approach starts from the predicted needs of the family after the premature death: income, debt including the mortgage, investments, and other ongoing expenses. It asks what the survivors need, rather than capitalizing the insured’s earnings.`,
      questions: [
        question(
          'c2q04',
          'The human life value approach determines the amount of life insurance by looking mainly at what?',
          [
            {
              text: 'The insured’s wages, inflation, years to retirement, and the time value of money.',
              why: 'Human life value estimates what the family loses from the insured’s premature death, using earnings and the time those earnings would have continued.',
              correct: true,
            },
            {
              text: 'Only the outstanding mortgage and other debts.',
              why: 'Debts, income, and ongoing expenses are factors in the needs approach, not the earnings capitalization of human life value.',
            },
            {
              text: 'The cash value the policy is projected to build by age 100.',
              why: 'Cash value is a feature of permanent insurance. It is not how human life value is calculated.',
            },
            {
              text: 'The average age and the ratio of men to women in a group.',
              why: 'Average age and gender mix are used in group underwriting, not in personal human life value.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c2-classes',
      title: 'Term coverage and permanent coverage',
      body: `Every life policy pays a death benefit. The classes differ in how long coverage lasts and in who shares in company earnings.

Term insurance is temporary protection for a specific period. It is also called pure life insurance. Permanent life insurance is a general name for whole life policies that stay in force to age 100 if the premium is paid. Permanent insurance provides lifetime protection and a savings element, the cash value.

A participating policy, issued by a mutual company, may distribute dividends to policyowners as cash, reduced premiums, paid-up additions, a savings program, or one-year term insurance. A nonparticipating policy does not pay dividends to policyowners.

Industrial, or home service, life insurance is written on an individual basis in small amounts, usually a face amount of $2,000 to $10,000, often to help pay funeral expenses. Premiums are collected frequently, often at the insured’s home. Ordinary life insurance is the larger individual policies written in bigger amounts. Group insurance covers many people under one contract. Individual insurance covers one life and is underwritten on that person. Fixed products offer guaranteed minimum or fixed benefits. Variable products accumulate cash value based on a portfolio of securities, without a guarantee of performance.`,
      questions: [
        question(
          'c2q09',
          'Which policies distribute dividends to policyowners?',
          [
            {
              text: 'Only participating policies.',
              why: 'A participating policy may pay policyowner dividends. A nonparticipating policy does not.',
              correct: true,
            },
            {
              text: 'Only nonparticipating stock policies.',
              why: 'Nonparticipating policies do not pay dividends to policyowners. A stock company may pay taxable dividends to its stockholders.',
            },
            {
              text: 'Every term policy, because term is pure insurance.',
              why: 'Term describes the length of coverage. Dividend rights depend on whether the policy participates, not on whether it is term.',
            },
            {
              text: 'Industrial policies only, because the face amount is small.',
              why: 'Industrial insurance is distinguished by small face amounts and frequent premium collection, not by a special right to dividends.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c2-business',
      title: 'Why a business buys life insurance',
      body: `Businesses buy life insurance because it creates an immediate payment at death. The most common business use is an employee benefit. Other uses fund a business-continuation agreement, compensate executives, and protect the business if a key employee dies or becomes disabled.

Key person insurance covers an employee whose knowledge, skills, or contacts the business would struggle to replace. It may be term or permanent. Whole life and universal life are used most often. The employee is the insured. The business is the applicant, the policyowner, the premium payer, and the beneficiary. The business cannot deduct the premium. The death benefit is usually received tax free. The employee must give permission. No other special contract is required, and an employer may insure more than one key person.

A buy-sell, or business continuation, agreement decides what happens to the business if an owner dies or becomes disabled. Life insurance funds the purchase.

An executive bonus is an arrangement in which the employer pays a bonus that the employee uses to pay premiums on a policy the employee owns. Deferred compensation is an employer retirement, savings, or other plan that is not a qualified plan, often informally funded with life insurance.

A split-dollar plan is an arrangement in which the employer and the employee agree to buy and fund life insurance on the employee and to split the premium, the cash value, or the death benefit as they agree.

A change-of-insured provision, found in some business-owned policies, lets the business replace the insured life with another key employee, subject to evidence of insurability, instead of buying a new policy.`,
      questions: [
        question(
          'c2q07',
          'In key person life insurance, who is the beneficiary?',
          [
            {
              text: 'The key employee’s spouse or estate.',
              why: 'The employee is the insured and must consent, but the employee’s family is not the beneficiary of key person coverage.',
            },
            {
              text: 'The business, which is also the applicant, owner, and premium payer.',
              why: 'The business owns the policy, pays the premium, and receives the benefit so it can cover the cost of replacing the employee.',
              correct: true,
            },
            {
              text: 'The creditor who financed the business.',
              why: 'A creditor’s interest describes credit life or a debtor-creditor insurable interest, not the key person arrangement.',
            },
            {
              text: 'The insurer, until the employee proves insurability.',
              why: 'The insurer issues the policy. It is not the beneficiary. Evidence of insurability may be required, but that does not make the insurer the payee.',
            },
          ],
        ),
        question(
          'c2q08',
          'A split-dollar plan is an arrangement in which who agrees to fund life insurance on an employee?',
          [
            {
              text: 'The employer and the employee.',
              why: 'In split dollar, the employer and the employee agree to purchase and fund the policy and to divide premium, cash value, or death benefit.',
              correct: true,
            },
            {
              text: 'A stranger and a life settlement provider.',
              why: 'That describes STOLI or a life settlement, not a compensation arrangement between an employer and an employee.',
            },
            {
              text: 'Only the employee, using a bonus the employer may later reimburse.',
              why: 'An executive bonus lets the employee own the policy and use a bonus to pay the premium. Split dollar is a shared funding arrangement.',
            },
            {
              text: 'The state guaranty association.',
              why: 'A guaranty association protects policyowners if an insurer becomes insolvent. It does not fund employee coverage.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c2-solicit',
      title: 'Sales talks, illustrations, and suitability',
      body: `Solicitation is the attempt to persuade a person to buy a policy. Advertising must be accurate and must not be misleading. An illustration is a presentation or depiction of nonguaranteed elements of a policy. It must show what is guaranteed and what is not, and it may not show nonguaranteed values as guaranteed.

A buyer’s guide is a generic consumer document that explains how to choose the amount and type of insurance and how to compare costs. A policy summary is specific to the policy being issued. It identifies the insurer, the agent, the policy, premiums, and benefits, including cash values and dividends, and it distinguishes guaranteed from nonguaranteed items.

Cost comparison methods, such as traditional net cost and interest-adjusted methods, help a buyer compare policies. A comparison that ignores the time value of money can make a policy look cheaper than it is.

A guaranty association protects policyowners, up to stated limits, if a member insurer becomes insolvent. Producers may not use the existence of the association as a reason to buy, or advertise it as a selling point.

Suitability means the recommendation fits the customer’s insurance needs and financial objectives. A producer should learn the customer’s situation before recommending a policy.`,
      questions: [
        question(
          'c2q10',
          'A life insurance illustration is a presentation of what?',
          [
            {
              text: 'Nonguaranteed elements of a policy.',
              why: 'The course defines illustrations as a presentation or depiction of nonguaranteed elements. They must not be shown as if they were guaranteed.',
              correct: true,
            },
            {
              text: 'The Certificate of Authority issued by the state.',
              why: 'A Certificate of Authority authorizes an insurer to transact business. It is not a sales depiction of policy values.',
            },
            {
              text: 'The Medical Information Bureau report on the applicant.',
              why: 'An MIB report is an underwriting aid. It is not shown to the applicant as a sales illustration.',
            },
            {
              text: 'The guaranty association’s coverage limits, used as a reason to buy.',
              why: 'Producers may not use the guaranty association as an inducement to buy. An illustration depicts policy elements.',
            },
          ],
        ),
        question(
          'c2q11',
          'Which use of a guaranty association is not allowed in a sale?',
          [
            {
              text: 'Telling a buyer the association exists so the buyer will choose that insurer.',
              why: 'The association may not be used in advertising or as an inducement to purchase. It is a safety net, not a sales feature.',
              correct: true,
            },
            {
              text: 'Explaining, when asked, that member insurers fund a safety net for insolvency.',
              why: 'A factual answer to a question is different from using the association as the reason to buy.',
            },
            {
              text: 'Delivering a policy summary that separates guaranteed and nonguaranteed values.',
              why: 'A policy summary is a required disclosure about that policy. It is not an advertisement of the guaranty association.',
            },
            {
              text: 'Recommending a policy that fits the customer’s stated needs.',
              why: 'That is suitability. It does not involve the guaranty association.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c2-field',
      title: 'The application and field underwriting',
      body: `The producer is the company’s front line and is called a field underwriter, because the producer solicited the applicant. Field underwriting includes proper solicitation, helping prevent adverse selection, completing the application, obtaining the required signatures, collecting the initial premium and issuing a receipt when one applies, and delivering the policy.

The application is the starting point and the basic source of information for risk selection. Part 1, General Information, asks name, age, address, birth date, gender, income, marital status, and occupation. It asks about existing policies and whether the new insurance will replace them. It identifies the type and amount of coverage and usually names the beneficiary. Part 2, Medical Information, covers the proposed insured’s health history. The producer must have the required signatures. If a premium is collected with the application, the producer issues the appropriate receipt. A conditional receipt may provide coverage from the date of application or the medical exam, if the proposed insured is insurable as applied for.`,
      questions: [
        question(
          'c2q12',
          'Why is a life insurance producer called a field underwriter?',
          [
            {
              text: 'The producer is usually the person who solicited the applicant and gathers the information the company uses.',
              why: 'The producer is the company’s front line: solicitation, the application, signatures, the initial premium and receipt, and delivery.',
              correct: true,
            },
            {
              text: 'The producer sets the premium rate from the mortality table.',
              why: 'Premium rates are determined by the company from mortality, interest, and expense. The producer does not price the policy in the field.',
            },
            {
              text: 'The producer represents the applicant, the way a broker represents a client.',
              why: 'An agent represents the insurer. The field-underwriter role is performed for the company.',
            },
            {
              text: 'The producer decides final claims and pays the death benefit.',
              why: 'Claims are the company’s obligation under the contract. Field underwriting happens at application, not at claim payment.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c2-company',
      title: 'How the company accepts or rates the risk',
      body: `The home office underwriter decides whether to accept the risk and at what rate. Sources include the application, the agent’s report, an attending physician’s statement, an inspection report, the Medical Information Bureau, and medical or lab exams, including HIV tests when required.

An inspection, or investigative consumer, report covers finances, character, work, hobbies, and habits. Companies that use these reports must follow the Fair Credit Reporting Act.

The MIB is a nonprofit membership corporation owned by member insurers. It collects underwriting information so companies can compare what they know with what other insurers have reported. It is only an aid. An applicant cannot be refused solely because of adverse information in an MIB report.

Medical exams are done by physicians or paramedics at the insurer’s expense. An HIV test is common for a large amount of coverage. The insurer must disclose the test, get written consent, keep results confidential, and use an approved protocol. Requiring an HIV test is not unfair discrimination if everyone in the same class is tested, coverage is not denied on the test alone, and the test is FDA approved. An insurer may ask whether the proposed insured has tested positive on an AIDS-related test.

An insurer may distinguish good risks from poor risks. It may not unfairly discriminate between people of the same class and equal life expectancy in rates, benefits, or terms. Unfair discrimination includes differences based solely on age or gender in a way the law forbids, physical or mental impairment, blindness or partial blindness, or genetic characteristics, and investigating sexual orientation as part of underwriting.

If the applicant is acceptable, the underwriter assigns a class. Preferred risks meet extra requirements and pay a lower premium because of superior health, lifestyle, and habits. Standard risks are the average risk and are accepted with no extra rating. Substandard, or high-exposure, risks are not acceptable at standard rates because of physical condition, history, occupation, or habits, and they pay a rated premium. Declined risks are rejected: no insurable interest, medically unacceptable, a loss potential that is not insurance, or a purpose that is illegal or against public policy.`,
      questions: [
        question(
          'c2q13',
          'What may an insurer do with adverse information from the Medical Information Bureau?',
          [
            {
              text: 'Refuse coverage solely because of that information.',
              why: 'The MIB cannot be the sole reason for a refusal. It only points to areas the insurer may need to investigate.',
            },
            {
              text: 'Use it as an aid to decide what to investigate further.',
              why: 'The MIB lets member companies compare information. An applicant cannot be refused simply because of adverse MIB information.',
              correct: true,
            },
            {
              text: 'Publish it in the policy illustration.',
              why: 'An illustration depicts nonguaranteed policy elements. MIB information is confidential underwriting data.',
            },
            {
              text: 'Treat it as a warranty that voids the policy if it is incomplete.',
              why: 'Application statements are representations, not warranties. The MIB is a separate information exchange, not a warranty.',
            },
          ],
        ),
        question(
          'c2q14',
          'Which risk class pays a lower premium than the standard risk?',
          [
            {
              text: 'Preferred, because of superior health, lifestyle, and habits.',
              why: 'Preferred risks qualify for lower premiums. Standard risks pay the average rate. Substandard risks pay more. Declined risks are not issued.',
              correct: true,
            },
            {
              text: 'Substandard, because the exposure is higher.',
              why: 'A higher risk pays a higher premium. Substandard applicants are rated up, not discounted.',
            },
            {
              text: 'Declined, because the insurer collects no premium.',
              why: 'A declined applicant is not insured. There is no premium class called declined that is cheaper than standard.',
            },
            {
              text: 'Standard, because most people are in that class.',
              why: 'Standard is the average rate. Preferred is the class that pays less than standard.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c2-premium',
      title: 'How the premium is calculated',
      body: `Once the applicant is insurable, the company sets the premium. Premiums are paid in advance. Three primary factors determine it: mortality, interest, and expense.

Mortality is the rate of death in a specific group over a period of time. Mortality tables show how many people in a group, such as men, women, smokers, or nonsmokers, starting at a given age, are expected to be alive at the next age. Morbidity tables do similar work for sickness and injury in health insurance.

Interest is what the insurer expects to earn by investing premiums before claims are paid. Expense, also called loading, covers commissions, taxes, and the cost of doing business.

Mortality minus interest equals the net premium. Net premium plus expense equals the gross premium, which is what the policyowner pays. In the course example, if mortality and interest produce a $400 net premium and loading is $200, the gross premium is $600.

The mode is how often the premium is paid: annually, semiannually, quarterly, or monthly. More frequent modes cost more, because the insurer loses interest and has extra collection expense. The annual mode has the lowest total outlay.`,
      questions: [
        question(
          'c2q15',
          'Gross premium equals which of the following?',
          [
            {
              text: 'Mortality minus interest.',
              why: 'Mortality minus interest is the net premium. It does not include the cost of doing business.',
            },
            {
              text: 'Net premium plus expense loading.',
              why: 'Gross premium is what the policyowner pays: net premium (mortality minus interest) plus expenses.',
              correct: true,
            },
            {
              text: 'The cash value scheduled at age 100.',
              why: 'The age-100 cash value is a whole life maturity feature, not the premium formula.',
            },
            {
              text: 'Interest plus the producer’s commission only.',
              why: 'Commission is one expense inside the loading. The formula also includes mortality and the interest credit.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c2-delivery',
      title: 'Issuing and delivering the policy',
      body: `If the applicant is acceptable, the company issues the policy. Delivery may be by mail or in person. Personal delivery lets the producer explain the contract, confirm that the insured’s health has not changed when a statement of good health is required, and collect any premium that was not paid with the application. Coverage generally begins when the premium has been paid and the policy has been delivered, unless a receipt already put coverage in force.

Replacement is any transaction in which new life insurance or a new annuity is purchased and, as a result, existing coverage will be or has been lapsed, forfeited, surrendered, or terminated; reissued with a reduction in cash value; continued as reduced paid-up or extended term or otherwise reduced by a nonforfeiture option; amended so benefits or the term are reduced; or used in a financed purchase.

The replacing insurer issues the new policy. The existing insurer is the company whose policy is being replaced. The replacing producer must present a Notice Regarding Replacement signed by the applicant and the producer, leave a copy with the applicant, list the policies being replaced, leave copies of the sales materials, and send the notice to the replacing insurer with the application. The application must include the applicant’s statement about whether replacement is involved and the producer’s statement about whether the producer knows replacement is or may be involved.`,
      questions: [
        question(
          'c2q16',
          'Which duty belongs to a producer who is replacing existing life insurance?',
          [
            {
              text: 'Present a Notice Regarding Replacement, signed by the applicant and the producer, and leave a copy with the applicant.',
              why: 'Replacement rules require that notice, a list of the policies being replaced, copies of the sales materials, and submission of the notice with the application.',
              correct: true,
            },
            {
              text: 'Wait until the claim is filed to tell the existing insurer.',
              why: 'The notice and the list of existing policies are part of the application process, not a claim form.',
            },
            {
              text: 'Use the guaranty association as the reason the new policy is safer.',
              why: 'The guaranty association may not be used as an inducement to buy. Replacement has its own disclosure.',
            },
            {
              text: 'Skip the notice if the new policy is with the same producer.',
              why: 'Each producer who initiates the application must submit the replacement statements. The same producer does not cancel the duty.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c2-settlements',
      title: 'Selling an existing policy, and STOLI',
      body: `A life settlement is the sale of an existing life policy to a third party for compensation, usually cash. It requires an absolute assignment of all rights from the original owner to the new owner. Owners sell because they no longer need the coverage or because the premium has grown too high. Settlements are often offered to seniors, including people with a life-threatening illness and a short life expectancy, for more than the policy’s cash surrender value.

In the course example, a 70-year-old owns a $1,000,000 policy with $390,000 of cash value. A settlement provider, after reviewing medical records, offers $575,000. After the transfer, the settlement company pays the premiums and collects the $1,000,000 death benefit.

The business of life settlements is any activity that solicits or sells a life settlement contract to a third party who has no insurable interest in the insured. The owner is the person who owns the policy and seeks the settlement. The insured is the person covered. Life expectancy is a calculation of the average number of months the insured is projected to live, based on medical history and mortality factors.

Stranger-originated life insurance (STOLI) is an arrangement in which a person with no relationship to the insured initiates a policy for the purpose of selling it. STOLI is financed and purchased solely so it can be sold in a life settlement. It violates insurable interest. Insurers take steps to detect STOLI. A lawful life settlement of an existing policy is not STOLI. STOLI is initiated to obtain a policy that will benefit someone who has no insurable interest.`,
      questions: [
        question(
          'c2q05',
          'In a life settlement, what does the policyowner do?',
          [
            {
              text: 'Surrenders the policy to the insurer for its cash value.',
              why: 'A surrender pays the cash value from the insurer. A life settlement sells the policy to a third party, often for more than that cash value.',
            },
            {
              text: 'Sells an existing life policy to a third party.',
              why: 'The owner assigns all rights to a third party for compensation. The buyer then pays the premiums and collects the death benefit.',
              correct: true,
            },
            {
              text: 'Names the insurer as beneficiary so the premium can be waived.',
              why: 'A settlement transfers ownership. It is not a waiver of premium or a beneficiary change that leaves the original owner in place.',
            },
            {
              text: 'Converts term insurance to permanent insurance without evidence of insurability.',
              why: 'Conversion is a contractual right, usually in group or convertible term. It is not a sale to a third party.',
            },
          ],
        ),
        question(
          'c2q06',
          'How is stranger-originated life insurance different from a lawful life settlement?',
          [
            {
              text: 'STOLI is the sale of a policy the insured bought years ago and no longer needs.',
              why: 'That describes a lawful life settlement of an existing policy. STOLI is initiated in order to obtain a policy for someone with no insurable interest.',
            },
            {
              text: 'STOLI is initiated to obtain a policy that will benefit a person who has no insurable interest.',
              why: 'STOLI violates insurable interest because the policy is purchased so it can be sold. A lawful settlement begins with an existing policy.',
              correct: true,
            },
            {
              text: 'STOLI pays the cash surrender value and nothing more.',
              why: 'A settlement offer is often higher than the cash value. STOLI is about who initiates the policy, not about paying only cash value.',
            },
            {
              text: 'STOLI is another name for key person insurance.',
              why: 'Key person insurance is owned by a business that has an insurable interest in an employee. STOLI involves a stranger.',
            },
          ],
        ),
      ],
    },

  ],
}

for (const section of chapter2.sections) {
  section.questions.push(...(chapter2Extra[section.id] ?? []))
}
