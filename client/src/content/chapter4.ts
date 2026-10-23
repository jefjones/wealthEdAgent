import { question } from './build.ts'
import type { Chapter } from './types.ts'
import { chapter4Extra } from './extra/chapter4.ts'

/**
 * Wording follows the course OCR in content/source/chapter-4-ocr.txt.
 * The source pages have no practice questions. Questions are written from that text,
 * four options each, with a reason for the right answer and for each wrong one.
 */
export const chapter4: Chapter = {
  id: 'ch-provisions',
  number: 4,
  title: 'Extra Features and Add-Ons',
  summary:
    'The standard provisions inside a life policy, who receives the proceeds, loans and withdrawals, riders, and the nonforfeiture, dividend, and settlement choices.',
  sections: [
    {
      id: 'c4-standard',
      title: 'The standard parts of a life policy',
      body: `Provisions stipulate the rights and obligations of an insurance contract and are fairly universal from one policy to the next. Riders modify provisions that already exist and are used to increase or decrease policy benefits and premiums. Options offer insurers and insureds ways to invest or distribute a sum of money available in a life policy.

There is no single “standard” policy form in life insurance. The standard policy provisions adopted by the National Association of Insurance Commissioners (NAIC) create uniformity among life insurance policies. The NAIC is composed of insurance commissioners from all 50 states, the District of Columbia, and the 5 U.S. territories.

Terms used in this chapter:
• Activities of daily living (ADLs) — a person’s essential activities, including bathing, dressing, eating, transferring, toileting, and continence.
• Assignment — transfer of rights of policy ownership.
• Contingent beneficiary — a beneficiary who has second claim to the policy proceeds after the death of the insured, usually after the death of the primary beneficiary.
• Primary beneficiary — a beneficiary who has the first claim to the policy proceeds after the death of the insured.
• Principal amount — the face value of the policy; the original amount invested before the earnings.
• Trust — an arrangement in which funds or property are held by a person or corporation for the benefit of another person (the trust beneficiary).

The parties to the contract are the insurer, the policyowner, the insured, and the beneficiary. The policyowner and the insured may be the same person or different persons. Only the policyowner has the ownership rights, not the insured or the beneficiary. Those rights include naming and changing the beneficiary, receiving the policy’s living benefits, selecting a benefit payment option, and assigning the policy.

The policyowner pays the premiums and must have an insurable interest in the insured at the time of application. When the owner and the insured are not the same person, the arrangement is third-party ownership.`,
      questions: [
        question(
          'c4q01',
          'What do riders do to a life insurance policy?',
          [
            {
              text: 'They modify provisions that already exist, and they can increase or decrease benefits and premiums.',
              why: 'The chapter opens by defining riders as modifications of existing provisions, used to increase or decrease policy benefits and premiums.',
              correct: true,
            },
            {
              text: 'They are the rights and obligations that are fairly universal from one policy to the next.',
              why: 'That is the definition of provisions, not riders.',
            },
            {
              text: 'They are the ways to invest or distribute a sum of money available in the policy.',
              why: 'That is the definition of options, such as nonforfeiture, dividend, and settlement options.',
            },
            {
              text: 'They replace the NAIC standard provisions with a form that is different for every insurer.',
              why: 'There is no single standard policy form, but the NAIC provisions create uniformity. Riders modify a policy; they are not a substitute for those provisions.',
            },
          ],
        ),
        question(
          'c4q02',
          'Who has the ownership rights under a life insurance policy?',
          [
            {
              text: 'Only the policyowner, even when the policyowner and the insured are different people.',
              why: 'Only the policyowner can name the beneficiary, receive living benefits, select a payment option, and assign the policy. Different owner and insured is third-party ownership.',
              correct: true,
            },
            {
              text: 'The insured and the beneficiary share the rights equally.',
              why: 'The insured and the beneficiary do not have the ownership rights. The beneficiary has a claim to proceeds, not ownership.',
            },
            {
              text: 'The insurer, because it issued the contract.',
              why: 'The insurer is a party to the contract, but the ownership rights listed in the policy belong to the policyowner.',
            },
            {
              text: 'Whoever has an insurable interest at the time of the claim.',
              why: 'Insurable interest is required of the policyowner at application. It does not move the ownership rights to someone else at claim time.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c4-contract',
      title: 'The entire contract, changes, and the free look',
      body: `The entire contract provision says the policy and a copy of the application, along with any riders or amendments, constitute the entire contract. No statements made before the contract was written can be used to alter it. Neither the insurer nor the insured may change policy provisions once the policy is in effect unless both parties agree and the change is affixed to the contract.

Modifications must be endorsed on, or attached to, the policy in writing over the signature of an executive officer of the insurer. The policyowner may request changes, but only an executive officer can make them. Most modification clauses state that no agent has the right to waive policy provisions, make alterations or agreements, or extend the time for payment of premiums.

The right to examine, or free look, gives the policyowner 10 days from receipt to look over the policy and, if dissatisfied for any reason, return it for a full refund of premium. The free-look period starts when the policyowner receives the policy, not when the insurer issues it. The 10-day free look does not apply to:
• Group policies
• Credit life insurance
• Replacement policies, where the required free-look period is 30 days
• Any other classes of policies as determined by the Commissioner`,
      questions: [
        question(
          'c4q04',
          'What makes up the entire contract?',
          [
            {
              text: 'The policy, a copy of the application, and any riders or amendments.',
              why: 'The entire contract provision names those documents. Statements made before the contract was written cannot alter it.',
              correct: true,
            },
            {
              text: 'The policy and any sales illustration the producer used.',
              why: 'An illustration is not part of the entire contract. Riders and amendments are included only when they are part of the contract.',
            },
            {
              text: 'The application alone, because the insured signed it.',
              why: 'The application is included as a copy, together with the policy and any riders or amendments.',
            },
            {
              text: 'Whatever the agent agrees to orally at delivery.',
              why: 'No agent may waive provisions or make alterations. A change must be in writing over an executive officer’s signature.',
            },
          ],
        ),
        question(
          'c4q05',
          'When does the 10-day free look start, and which policies are outside it?',
          [
            {
              text: 'It starts when the policyowner receives the policy. It does not apply to group, credit life, or replacement policies.',
              why: 'The period runs from receipt, not from issue. Replacement policies require 30 days. The Commissioner may name other classes as well.',
              correct: true,
            },
            {
              text: 'It starts when the insurer issues the policy, and it applies to every individual and group policy.',
              why: 'The free look starts at delivery to the policyowner. Group policies are one of the classes the 10-day rule does not cover.',
            },
            {
              text: 'It starts at application, and a return forfeits the premium.',
              why: 'The owner may return the policy for a full refund of premium. The clock starts at receipt.',
            },
            {
              text: 'It is 30 days for every new life policy and 10 days only after a reinstatement.',
              why: 'The usual free look is 10 days. Thirty days is the free-look period for replacement policies, not for every new policy.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c4-premium',
      title: 'Premiums and the grace period',
      body: `The policy states when premiums are due, how often they are paid (monthly, quarterly, semiannually, or annually), and to whom. Premiums must be paid in advance. If the insured dies during a period for which the premium has been paid, the insurer must refund any unearned premium along with the policy proceeds.

Any individual life insurance or annuity contract must state that all premiums are payable in advance, either at the company’s home office or to the appointed producer upon delivery of the policy. The policy itself should be considered a receipt for the first premium payment.

The grace period is the time after the premium due date that the policyowner has to pay before the policy lapses, usually 30 or 31 days, or one month. Its purpose is to protect the policyholder against an unintentional lapse. If the insured dies during the grace period, the death benefit is payable, but any unpaid premium is deducted from the death benefit.`,
      questions: [
        question(
          'c4q06',
          'If the insured dies during the grace period, what is payable?',
          [
            {
              text: 'The death benefit, minus any unpaid premium.',
              why: 'Coverage continues through the grace period, usually 30 or 31 days or one month. The unpaid premium is deducted from the death benefit.',
              correct: true,
            },
            {
              text: 'Nothing, because the policy lapsed on the due date.',
              why: 'The grace period exists so the policy does not lapse immediately. Death during that period is covered.',
            },
            {
              text: 'Only a refund of the premiums paid before the due date.',
              why: 'A refund of unearned premium applies when the insured dies during a period for which premium was already paid. During the grace period the benefit is paid, less the unpaid premium.',
            },
            {
              text: 'The death benefit plus the overdue premium as interest.',
              why: 'The unpaid premium is subtracted from the benefit. It is not added.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c4-reinstate',
      title: 'Reinstatement, incontestability, and age',
      body: `Reinstatement lets a lapsed policy be put back in force. The maximum time limit is usually 3 years after the policy has lapsed. The policyowner must provide evidence of insurability, pay all back premiums plus interest, and may have to repay any outstanding loans and interest. Reinstating restores the policy to its original status and keeps the values established at the insured’s issue age. A policy that has been surrendered cannot be reinstated.

The incontestability clause prevents the insurer from denying a claim because of statements in the application after the policy has been in force for 2 years, even if there was a material misstatement or concealment. During the first 2 years, the insurer may contest a claim if inaccurate or misleading information was in the application. Incontestability does not apply to nonpayment of premiums, and it usually does not apply to statements of age, sex, or identity.

If age or gender was misstated, the insurer may adjust the benefits, at claim time, to the amount the premium at the correct age or gender would have purchased. The calculation uses the insurer’s rates at the date of policy issue.`,
      questions: [
        question(
          'c4q07',
          'Which lapsed policy can be reinstated?',
          [
            {
              text: 'A policy that lapsed, usually within 3 years, if the owner proves insurability and pays back premiums plus interest.',
              why: 'Reinstatement restores the original status and the issue-age values. A surrendered policy cannot be reinstated.',
              correct: true,
            },
            {
              text: 'Any policy, including one surrendered for its cash value, with no evidence of insurability.',
              why: 'Evidence of insurability is required, and a surrendered policy cannot be reinstated.',
            },
            {
              text: 'Only a policy that lapsed more than 3 years ago.',
              why: 'The maximum time limit is usually 3 years after lapse, not a minimum.',
            },
            {
              text: 'A policy the owner stopped paying, and the new premium is based on attained age.',
              why: 'One advantage of reinstatement is that the policy keeps the values from the original issue age. A new purchase would be priced at the current age.',
            },
          ],
        ),
        question(
          'c4q08',
          'After a policy has been in force for 2 years, which statement may the insurer still use to adjust a claim?',
          [
            {
              text: 'A misstatement of age or gender. Benefits are adjusted to what the premium would have bought at the correct age or gender.',
              why: 'Incontestability usually does not apply to age, sex, or identity. The rates used are those in effect on the date of issue. Nonpayment of premium is also outside the clause.',
              correct: true,
            },
            {
              text: 'A material concealment in the application, which voids the policy.',
              why: 'After 2 years the insurer cannot deny a claim for statements in the application, even a material misstatement or concealment.',
            },
            {
              text: 'Any statement on the application, because the entire contract includes the application.',
              why: 'The application is part of the contract, but the incontestability clause stops the insurer from using those statements to deny a claim after 2 years.',
            },
            {
              text: 'None. After 2 years the face amount must be paid even if premiums were never paid.',
              why: 'Incontestability does not apply to nonpayment of premiums.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c4-exclusions',
      title: 'Exclusions, suicide, and backdating',
      body: `The insurer may, at its own expense, examine the insured or have an autopsy performed as often as it reasonably requires while a claim is pending, unless state law forbids it, to determine whether death was accidental or natural.

Common exclusions are aviation, hazardous occupation, and war and military service.
• Aviation — most policies cover a fare-paying passenger or a pilot on a regularly scheduled airline, but exclude noncommercial pilots or charge an extra premium.
• Hazardous occupations or hobbies — death from a hazardous occupation or hobby, such as skydiving or auto racing, may be excluded, or the insurer may charge a higher premium.
• War or military service — two limits may be used. The status clause excludes all causes of death while the insured is on active duty. The results clause excludes the death benefit only if the insured is killed as a result of an act of war, declared or undeclared. Most policies issued today do not exclude military service.

The suicide provision limits the insurer’s liability to a refund of premium if the insured dies by suicide within 2 years after the policy effective date. After that 2-year period, the policy pays the death proceeds to the beneficiary as if the death were from natural causes.

Life policies cannot forfeit the policy for failure to repay a loan or loan interest while the total indebtedness is less than the loan value, and they cannot allow assessments or calls on policyholders.

An application may be backdated to lower the premium, but not for more than 1 year before the date of the application or the medical examination, whichever is later. All premiums must be paid from the effective date. The only allowable reason to backdate is a lower premium.`,
      questions: [
        question(
          'c4q09',
          'The status clause and the results clause differ in which way?',
          [
            {
              text: 'The status clause excludes all causes of death while the insured is on active duty. The results clause excludes death only from an act of war.',
              why: 'Both are war or military limitations. Most policies issued today do not exclude military service at all.',
              correct: true,
            },
            {
              text: 'The status clause covers fare-paying airline passengers, and the results clause covers noncommercial pilots.',
              why: 'That is the aviation exclusion, not the war clauses.',
            },
            {
              text: 'The status clause refunds premium after two years of suicide, and the results clause pays the face amount.',
              why: 'Suicide within 2 years of the effective date limits the insurer to a refund of premium. After 2 years the death benefit is paid. Those are not the war clauses.',
            },
            {
              text: 'The status clause lets the insurer backdate one year, and the results clause lets it backdate three years.',
              why: 'Backdating is limited to 1 year before the application or the medical exam, whichever is later, and only to obtain a lower premium.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c4-assignment',
      title: 'Transferring the policy to someone else',
      body: `The policyowner may transfer partial or complete ownership to another person without the insurer’s consent, but must notify the insurer in writing. Without written notice, the insurer may not recognize the assignment and does not assume responsibility for its validity. The company’s major concern is paying the claim twice. Transferring the policy does not change the insured or the amount of coverage. It only changes who has the ownership rights.

Absolute assignment transfers all rights of ownership to another person or entity. It is a permanent and total transfer. The new policyowner does not need an insurable interest in the insured.

Collateral assignment transfers partial rights, usually to secure a loan or some other transaction. It is partial and temporary. Once the debt or loan is repaid, the assigned rights return to the policyowner.`,
      questions: [
        question(
          'c4q03',
          'Which assignment is a permanent transfer of all policy rights?',
          [
            {
              text: 'An absolute assignment. The new owner does not need an insurable interest in the insured.',
              why: 'Absolute assignment is a permanent and total transfer of all rights. Collateral assignment is only partial and temporary.',
              correct: true,
            },
            {
              text: 'A collateral assignment, which ends only when the insured dies.',
              why: 'Collateral assignment is partial and temporary, usually to secure a loan. The rights return when the debt is repaid.',
            },
            {
              text: 'A verbal assignment made to the producer, which changes the insured.',
              why: 'The owner must notify the insurer in writing. An assignment does not change the insured or the amount of coverage.',
            },
            {
              text: 'An irrevocable beneficiary designation.',
              why: 'Naming an irrevocable beneficiary limits what the owner can do. It is not an assignment of ownership.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c4-beneficiaries',
      title: 'Who receives the death benefit',
      body: `The beneficiary is the person or interest to whom the proceeds are paid when the insured dies. The beneficiary may be a person, a class of persons, the insured’s estate, or an institution or other entity such as a foundation, charity, corporation, or trustee. The beneficiary does not need an insurable interest. The policy is valid even if the owner names no beneficiary.

If more than one individual is named, they split the benefit by the percentages in the policy. Benefits for a minor are paid to the minor’s guardian, to the trustee if the trust is the beneficiary, or as a court directs. The guardian and the trustee can be the same person. Paying life insurance benefits directly to a minor is generally not a good practice.

A class designation such as “my children” can be vague. A less vague class is “children of the union of Jane Smith and James Smith.” Insurers often encourage the owner to name each child and the percentage each is to receive.

Per capita means by the head. It evenly distributes benefits among the living named beneficiaries. Per stirpes means by the bloodline. It distributes a deceased beneficiary’s share to that beneficiary’s heirs.

In the course example, Bryan has a $90,000 policy and names his sons Quentin, Steve, and Patrick for equal shares. Quentin has two children, Bob and Lou, and Quentin dies before Bryan. Per capita pays Steve and Patrick $45,000 each. Quentin’s children receive nothing because they were not named. Per stirpes pays Steve and Patrick $30,000 each, and Bob and Lou share Quentin’s allotment at $15,000 each.

If no beneficiary is alive, or none was named, the insured’s estate receives the proceeds. The death benefit may then be included in the insured’s taxable estate. Trusts are commonly used for minors or a scholarship fund. Used properly, a trust can keep death proceeds out of the taxable estate. Trusts are expensive to administer. Naming a trust as beneficiary does not, by itself, avoid estate taxes.`,
      questions: [
        question(
          'c4q10',
          'In Bryan’s $90,000 policy, Quentin dies first and Bryan had chosen per stirpes. What do Quentin’s children receive?',
          [
            {
              text: 'They share Quentin’s third equally, $15,000 each.',
              why: 'Per stirpes follows the bloodline. Steve and Patrick each receive $30,000, and Bob and Lou split Quentin’s $30,000.',
              correct: true,
            },
            {
              text: 'Nothing, because they were not named.',
              why: 'That is the per capita result. Per capita pays the living named beneficiaries, Steve and Patrick, $45,000 each.',
            },
            {
              text: 'The full $90,000, because they are the only grandchildren.',
              why: 'Per stirpes does not give the grandchildren the other sons’ shares. Steve and Patrick still receive their thirds.',
            },
            {
              text: '$45,000 each, split from the whole policy.',
              why: '$45,000 is what each surviving named son receives under per capita, not what each grandchild receives under per stirpes.',
            },
          ],
        ),
        question(
          'c4q11',
          'If no beneficiary is named, or none is alive, who receives the proceeds?',
          [
            {
              text: 'The insured’s estate, and the benefit may be included in the taxable estate.',
              why: 'The estate is the automatic recipient. A trust can be used in estate planning, but simply naming a trust does not avoid estate taxes.',
              correct: true,
            },
            {
              text: 'The insurer keeps the proceeds.',
              why: 'The policy does not have to name a beneficiary to be valid, and the proceeds are not retained by the insurer for that reason.',
            },
            {
              text: 'The state insurance commissioner.',
              why: 'The Commissioner is not the default beneficiary. The estate receives the proceeds.',
            },
            {
              text: 'Any person who can show an insurable interest at the time of death.',
              why: 'A beneficiary does not need an insurable interest. The default payee is the estate, not whoever has an interest.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c4-rights',
      title: 'Backup beneficiaries and related limits',
      body: `The primary beneficiary has the first claim. A contingent beneficiary, also called secondary or tertiary in the succession, has the next claim only if the beneficiaries above that level died before the insured. The tertiary beneficiary is third, and is paid only if both the primary and the contingent beneficiaries die first. Contingent beneficiaries receive nothing if the primary beneficiary is living when the insured dies.

A revocable designation may be changed at any time without the beneficiary’s consent or knowledge. An irrevocable designation may not be changed without the beneficiary’s written consent. An irrevocable beneficiary has a vested interest. The owner also cannot borrow against the cash value or assign the policy without that beneficiary’s agreement.

When a divorce decree is rendered and either party owns a life policy or an annuity, the court must include an acknowledgement that the policyowner has reviewed and updated the beneficiaries when appropriate, has affirmed that the listed beneficiaries are the intended ones after the divorce, and understands that if no changes are made, the beneficiaries currently listed will receive any funds the insurer pays.

If the insured and the primary beneficiary die in the same accident and there is not enough evidence of who died first, the Uniform Simultaneous Death Law treats the proceeds as if the primary beneficiary died first. The Common Disaster Clause goes further: even if the beneficiary outlived the insured by a stated number of days, the primary beneficiary is presumed to have died first, so the proceeds go to the contingent beneficiary or, if none is named, to the estate. Insurers commonly use 14 to 30 days. In the course example, James dies immediately and his wife Maggie, the primary beneficiary, dies 4 days later. Their son Ben, the contingent beneficiary, is paid.

The spendthrift clause protects beneficiaries from the claims of their creditors and keeps a beneficiary from spending the proceeds recklessly. Benefits are paid in fixed-period or fixed-amount installments. The beneficiary cannot choose a different settlement option and cannot assign or borrow the proceeds. The clause protects proceeds that have not yet been paid from creditors of the beneficiary or the policyowner.`,
      questions: [
        question(
          'c4q12',
          'What can the policyowner not do without an irrevocable beneficiary’s consent?',
          [
            {
              text: 'Change the beneficiary, borrow against the cash value, or assign the policy.',
              why: 'An irrevocable beneficiary has a vested interest. A revocable designation can be changed at any time without the beneficiary’s knowledge.',
              correct: true,
            },
            {
              text: 'Pay the premium.',
              why: 'Paying the premium remains the policyowner’s duty. The restriction is on changing rights that reduce or redirect the beneficiary’s interest.',
            },
            {
              text: 'Name a tertiary beneficiary while the primary beneficiary is still alive.',
              why: 'Succession levels can be named in the policy. The irrevocable restriction is on changing the designation and on borrowing or assigning without consent.',
            },
            {
              text: 'Ask the insurer to pay a claim after the incontestability period.',
              why: 'Incontestability limits the insurer, not the owner’s rights relative to an irrevocable beneficiary.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c4-loans',
      title: 'Policy loans and withdrawals',
      body: `The policy loan option is found only in policies that contain cash value. The owner may borrow an amount equal to the available cash value. Outstanding loans and accrued interest are deducted from the proceeds at death. The policy does not lapse because of a loan unless the loan and accrued interest exceed the available cash value. The insurer must give 30 days’ written notice before that lapse. The insurer may defer a loan request for up to 6 months, unless the loan is to pay the policy premium. Policy loans are not subject to income taxation.

Loan value equals cash value minus unpaid loans and interest. If loans are outstanding at death, that debt reduces the death benefit. In the course example, Vera’s whole life policy has a $150,000 face amount, a $50,000 loan, and $3,500 of interest. The death benefit is $96,500.

The automatic premium loan provision is not required, but it is commonly added at no extra charge on cash-value policies. The owner usually must elect it in writing. If the premium is unpaid at the end of the grace period, the insurer lends the premium from the cash value and charges interest. If it is not repaid, it is subtracted from the death benefit. Unlike other loans, a loan to pay a due premium must be honored immediately.

Universal life policies allow a partial withdrawal, or partial surrender, of cash value. There may be a charge, and there are usually limits on how much and how often. Interest earned on the withdrawn value may be taxable, depending on the plan. The death benefit is reduced by the amount withdrawn. A partial surrender is not the same as a policy loan.`,
      questions: [
        question(
          'c4q13',
          'Vera’s $150,000 policy has a $50,000 loan and $3,500 of loan interest when she dies. What is the death benefit?',
          [
            {
              text: '$96,500.',
              why: 'The death benefit is reduced by the debt: $150,000 minus $50,000 minus $3,500. Policy loans are not subject to income taxation.',
              correct: true,
            },
            {
              text: '$150,000, because loans are repaid only from cash value while the insured is alive.',
              why: 'Outstanding loans and accrued interest are deducted from the proceeds at death.',
            },
            {
              text: '$100,000, because only the principal of the loan is deducted.',
              why: 'Both the unpaid loan and the accrued interest reduce the benefit.',
            },
            {
              text: '$53,500, the loan plus interest, paid to the beneficiary instead of the face amount.',
              why: 'The loan is a debt against the policy. The beneficiary receives the face amount reduced by that debt, not the debt itself.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c4-nonforfeiture',
      title: 'Choices if you stop paying premiums',
      body: `Permanent life policies have cash values, and state law requires nonforfeiture values the policyowner cannot forfeit. A table of those values for a minimum of 20 years must be in the policy. The three nonforfeiture options are cash surrender value, reduced paid-up insurance, and extended term.

Cash surrender value: the owner surrenders the policy for its current cash value when coverage is no longer needed or affordable. If the cash value exceeds the premiums paid, the excess is taxable as ordinary income. Coverage ends. A surrendered policy cannot be reinstated. A surrender charge is a fee charged when a life policy or annuity is surrendered for its cash value.

Extended term: the insurer uses the cash value to buy term insurance for the same face amount as the former permanent policy. The term lasts as long as that cash value will purchase. If the owner did not choose a nonforfeiture option, the insurer automatically uses extended term when the original policy terminates.

Reduced paid-up insurance: the cash value is a single premium for a completely paid-up permanent policy with a smaller face amount. The new policy builds its own cash value and stays in force until death or maturity.`,
      questions: [
        question(
          'c4q17',
          'If the policyowner does not choose a nonforfeiture option, which one does the insurer use?',
          [
            {
              text: 'Extended term, for the same face amount, for as long as the cash value will buy.',
              why: 'Extended term is the automatic option. Reduced paid-up buys a smaller permanent policy. Cash surrender ends coverage and cannot be reinstated.',
              correct: true,
            },
            {
              text: 'Reduced paid-up insurance.',
              why: 'Reduced paid-up is a choice the owner can make. It is not the option the insurer applies automatically.',
            },
            {
              text: 'Cash surrender, mailed as a check.',
              why: 'Cash surrender pays the current cash value and ends the insurance. The insurer does not choose it for an owner who made no selection.',
            },
            {
              text: 'Paid-up additions.',
              why: 'Paid-up additions are the automatic dividend option, not a nonforfeiture option.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c4-dividends',
      title: 'What you can do with dividends',
      body: `Dividends are paid only on participating policies. The owner of a participating policy pays a grossed-up premium as a safety margin. If the insurer does not need that extra amount for claims and expenses, or if mortality improves or interest earned exceeds the assumptions, a dividend is returned. Dividends are a return of excess premium, so they are not taxable. Companies cannot guarantee dividends.

The first dividend may be paid as early as the first policy anniversary, and it must be paid no later than the end of the third policy year. After that, dividends are usually annual.

• Cash — the insurer sends a check, usually annually.
• Reduction of premium — the dividend reduces the next premium. A $1,000 annual premium and a $100 dividend means the owner pays $900 that year.
• Accumulation at interest — the insurer holds the dividend in an account that earns interest at the rate in the policy, compounded annually. The owner may withdraw the dividends at any time. The dividend is not taxable. The interest is taxable when it is credited, whether or not the owner withdraws it.
• Paid-up additions — the dividend buys a single-premium addition to the face amount. No separate policy is issued. Each addition builds cash value and pays dividends. The amount of insurance is based on attained age when the dividend is declared. If the owner did not choose a dividend option, the insurer uses paid-up additions.
• Paid-up insurance — the insurer accumulates dividends at interest, then uses the dividends, the interest, and the policy cash value to pay the policy up early.
• One-year term — the dividend buys additional one-year term that increases the death benefit. The owner may buy as much one-year term as the dividend will purchase, or term equal to the policy’s cash value for as long as the dividend will pay for it. If the insured dies during that year, the beneficiary receives both death benefits.`,
      questions: [
        question(
          'c4q18',
          'Which statement about policy dividends is correct?',
          [
            {
              text: 'They are a nontaxable return of excess premium, they cannot be guaranteed, and paid-up additions are used if the owner makes no choice.',
              why: 'Interest earned on dividends accumulated at interest is taxable when credited. The dividend itself is not. The first dividend must be paid no later than the end of the third policy year.',
              correct: true,
            },
            {
              text: 'They are guaranteed on every whole life policy and are taxed as income.',
              why: 'Dividends are paid only on participating policies. They cannot be guaranteed, and they are not taxable because they are a return of excess premium.',
            },
            {
              text: 'If the owner makes no choice, the insurer pays the dividend in cash.',
              why: 'The automatic dividend option is paid-up additions, not cash.',
            },
            {
              text: 'The interest credited on accumulated dividends is tax free if the owner leaves it in the policy.',
              why: 'That interest is taxable to the policyowner when credited, whether or not it is withdrawn.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c4-settlement',
      title: 'How the death benefit is paid',
      body: `Settlement options pay the death benefit, or the endowment benefit if the insured lives to the endowment date. The policyowner may choose an option at application and may change it during the insured’s life. Once the owner has chosen, the beneficiary cannot change it. If the owner does not choose, the beneficiary may choose at the insured’s death.

Cash, or lump sum, is how the contract pays unless the recipient chooses another way. If no selection is made, the proceeds are paid in a single cash payment. As a rule, the principal face amount paid after the insured’s death is not taxable as income.

Life income, also called straight life, provides an income the recipient cannot outlive. The installment is based on the recipient’s life expectancy and the principal. If the recipient lives a long time, payments may exceed the principal. If the recipient dies soon, the balance is forfeited to the insurer. Guarantees that some or all of the proceeds will be paid reduce the size of each installment. Single life pays one beneficiary for life and stops at that person’s death.

Life income joint and survivor pays two or more recipients for as long as they live. After the first dies, the survivor usually receives a reduced payment, commonly joint and 1/2 survivor or joint and 2/3 survivor. Unless a period certain is added, there is no guarantee that all of the proceeds will be paid if everyone dies shortly after payments begin.

Life income with period certain pays for the recipient’s lifetime and also guarantees a stated period. A life income with 10 years certain continues payments to a beneficiary for the rest of the 10 years if the recipient dies soon. Those installments are smaller than life income only. Joint life with term certain pays two or more people and stops at the first death, except that if the first death occurs during the specified term, payments continue to the others until the term ends.

Life refund is either a cash refund or an installment refund. Both guarantee that the annuity fund will be paid to the annuitant or the beneficiary. If the annuitant dies before the fund is depleted, cash refund pays the remainder in a lump sum. Installment refund continues the payments.

Interest only: the insurer keeps the proceeds and pays interest to the beneficiary at regular intervals. A rate is guaranteed, and the insurer will often pay more. This is a temporary option until the proceeds are paid in a lump sum or under another option. It can give a beneficiary time to decide. The owner might, for example, have interest paid annually to a surviving spouse, with the principal paid to the children at a stated age or at the spouse’s death.

Fixed-period installments, also called period certain, pay equal installments for a selected number of years. Payments continue for that period even if the recipient dies. The size of each installment depends on the principal, the guaranteed interest, and the length of the period. A longer period means a smaller installment. This option does not guarantee income for life, but it does pay out the entire principal.

Fixed-amount installments pay a chosen dollar amount until the principal and interest are exhausted. If the beneficiary dies first, payments continue to a contingent beneficiary until the proceeds are gone. A larger installment means a shorter income period. Like fixed-period, it does not guarantee payments for life, but all of the proceeds are paid.`,
      questions: [
        question(
          'c4q19',
          'If nobody chooses a settlement option, how are the proceeds paid?',
          [
            {
              text: 'In one cash payment. The principal paid after death is not taxable as income.',
              why: 'Lump sum is the automatic mode. If the policyowner already chose an option, the beneficiary cannot change that choice.',
              correct: true,
            },
            {
              text: 'As life income, so the beneficiary cannot outlive the payments.',
              why: 'Life income is a choice. It can forfeit the remaining principal if the recipient dies soon. It is not the automatic option.',
            },
            {
              text: 'As interest only, until a court picks an option.',
              why: 'Interest only is a temporary choice the owner or beneficiary can use. It is not what the policy does when no one selects an option.',
            },
            {
              text: 'To the insurer, because a settlement option is required before a claim is paid.',
              why: 'The contract is designed to pay the proceeds in cash unless a different mode is chosen.',
            },
          ],
        ),
        question(
          'c4q20',
          'Under fixed-amount installments, what does a larger installment do?',
          [
            {
              text: 'It shortens the time the income is paid. Payments still continue until the proceeds are exhausted, even if the beneficiary dies.',
              why: 'The recipient picks the dollar amount. Fixed-period instead picks the number of years, and a longer period makes each installment smaller. Neither option guarantees income for life.',
              correct: true,
            },
            {
              text: 'It guarantees that the beneficiary cannot outlive the income.',
              why: 'That is life income. Fixed-amount does not guarantee payments for the life of the beneficiary.',
            },
            {
              text: 'It pays the survivor half after the first recipient dies.',
              why: 'A reduced payment to a survivor, such as joint and 1/2, is a joint and survivor life income option.',
            },
            {
              text: 'It forfeits whatever principal remains when the beneficiary dies.',
              why: 'Forfeiture of the balance is life income without a guarantee. Fixed-amount continues installments to a contingent beneficiary until the proceeds are gone.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c4-riders',
      title: 'Riders for disability and other people',
      body: `Riders are written modifications attached to a policy. They provide benefits not in the original policy, sometimes for an additional premium, and they tailor the policy to the insured.

Waiver of premium waives the premium if the insured becomes totally disabled. Coverage stays in force until the insured can return to work. If the insured never returns, the company keeps waiving the premiums. Most insurers impose a 6-month waiting period. If the insured is still disabled then, the insurer refunds the premium paid from the start of the disability. This rider usually expires at age 65.

Waiver of cost of insurance, or waiver of monthly deductions, is found in universal life. If the insured is disabled, it waives the cost of insurance and other expenses. It does not waive the cost of premiums needed to accumulate cash values.

With the disability income rider, the insurer waives the premiums and pays a monthly income. The amount is normally a percentage of the face amount of the policy it is attached to.

The payor benefit rider is used mainly with juvenile policies. If the payor, usually a parent or guardian, is disabled for at least 6 months or dies, the insurer waives the premiums until the minor reaches a stated age, such as 21. It is also used when the owner and the insured are different people.

The other insured rider covers one or more family members other than the insured. It is usually level term on the base policy, also called a family rider. A spouse term rider covers the spouse for a limited time and a specified amount, and it usually expires when the spouse reaches 65.

The children’s term rider adds natural, adopted, or stepchildren for a limited time and a specified amount. It is term insurance and usually expires at 18 or 21. Most riders let the child convert to a permanent policy without evidence of insurability. One premium covers all the children. The premium does not change when more children are included. It is based on an average number of children.

The family term rider combines the spouse term rider and the children’s term rider. Added to a whole life policy, it provides level term on the spouse and all of the children.

Family term = spouse term + children’s term.`,
      questions: [
        question(
          'c4q14',
          'How does waiver of premium work after the insured becomes totally disabled?',
          [
            {
              text: 'Premiums are waived after a waiting period, usually 6 months, and premiums paid from the start of the disability are refunded. The rider usually expires at 65.',
              why: 'Coverage remains in force. If the insured never returns to work, the company continues to waive the premiums.',
              correct: true,
            },
            {
              text: 'It waives only the cost of insurance in a universal life policy, not the premium that builds cash value.',
              why: 'That describes waiver of cost of insurance, or waiver of monthly deductions, not waiver of premium.',
            },
            {
              text: 'It pays a monthly income equal to the face amount and leaves the premium due.',
              why: 'Disability income waives the premium and pays a monthly income based on a percentage of the face amount. Waiver of premium does not pay that income.',
            },
            {
              text: 'It waives premiums on a juvenile policy if a parent dies, until the child is 21.',
              why: 'That is the payor benefit rider. Waiver of premium applies to the insured’s own total disability.',
            },
          ],
        ),
        question(
          'c4q15',
          'A family term rider is equal to which coverages?',
          [
            {
              text: 'Spouse term plus children’s term.',
              why: 'Added to whole life, family term is level term on the spouse and all the children. Children’s term uses one premium based on an average number of children, and that premium does not change when another child is added.',
              correct: true,
            },
            {
              text: 'Waiver of premium plus disability income.',
              why: 'Those are disability riders. They do not add term insurance on a spouse or children.',
            },
            {
              text: 'A spouse term rider that lasts for the spouse’s lifetime, plus whole life on each child.',
              why: 'Spouse term usually expires at the spouse’s age 65. Children’s term expires at 18 or 21, with an option to convert to permanent insurance without evidence of insurability.',
            },
            {
              text: 'A separate policy issued to each child, each with its own premium.',
              why: 'Children’s term covers all the children of the family for one premium.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c4-benefit',
      title: 'Riders that change the death benefit',
      body: `The accidental death rider pays a multiple of the face amount if death is the result of an accident as the policy defines it. Death must usually occur within 90 days of the accident. The benefit is normally two times the face amount (double indemnity). Some policies pay three times (triple indemnity). Accidental death does not include death from a health problem or disability, or from self-inflicted injuries, war, or hazardous hobbies or avocations. Those deaths are covered by the base policy unless they are specifically excluded. The rider often expires at 65. It adds no cash value. It applies only to the base face amount, not to extra amounts bought with dividends.

Guaranteed insurability lets the insured buy additional coverage at specified future dates, usually every 3 years, or at events such as marriage or birth of a child, without evidence of insurability, for an additional premium. The added coverage is priced at attained age. The rider usually expires at age 40. Other riders do not modify or defeat it. If waiver of premium is also on the policy and the insured is disabled, premiums on the increases can be waived as well.

The cost of living rider increases the amount of insurance automatically, without evidence of insurability, by a factor tied to an inflation index such as the Consumer Price Index.

The return of premium rider uses increasing term. On a whole life policy, if the insured dies before a stated age, the beneficiary receives the face amount plus an amount equal to all premiums previously paid. It usually expires at a specified age, such as 60.

The accelerated benefit, or living needs, rider pays part of the death benefit early if the insured is diagnosed with a terminal illness that will result in death within 2 years, or has another qualifying condition. It does not cover disability. The funds are for medical and nursing home expenses from the illness. Many insurers do not charge for the rider because it is an advance of the death benefit. The remainder is paid to the beneficiary at death.

Accelerated benefits may be paid for a terminal illness, a condition that requires an extraordinary intervention such as an organ transplant, a condition that without extensive treatment drastically limits lifetime, inability to perform activities of daily living, permanent institutionalization or confinement to a long-term care facility, or any other condition the Department of Insurance approves. The maximum is typically a percentage of the face amount, usually 50%, though the insurer may pay up to 100%. There may be a dollar limit, such as $100,000. The face amount is reduced after the payment. The premium is not necessarily reduced, but it may be waived.

If the insured withdraws part of the face amount, the death benefit is reduced by the amount withdrawn plus the interest earnings the insurer lost.

Payable death benefit = face amount − amount withdrawn − earnings lost by the insurer in interest.

In the course example, the face amount is $100,000, the insured withdrew $30,000, and the insurer lost $300 of interest. The beneficiary receives $69,700.

Long-term care, dread disease, and terminal illness are ways these living benefits are paid. Long-term care can pay nursing home or at-home care from part of the face amount. Dread disease pays, usually limited to 25% to 40% of the death benefit, for a heart attack, organ transplant, cancer treatment, or other catastrophic disease. Terminal illness pays most of the death benefit. The insurer may require an exam by a physician of its choice, at its expense, to confirm the diagnosis. A policy may pay the death benefit early for a terminal illness, a catastrophic illness, or eligibility for long-term care.`,
      questions: [
        question(
          'c4q16',
          'An insured with a $100,000 policy takes a $30,000 accelerated benefit, and the insurer loses $300 of interest. What does the beneficiary receive at death?',
          [
            {
              text: '$69,700.',
              why: 'The payable death benefit is face amount minus the amount withdrawn minus earnings the insurer lost: $100,000 − $30,000 − $300.',
              correct: true,
            },
            {
              text: '$100,000, because an accelerated benefit does not reduce the face amount.',
              why: 'The face amount is reduced after an accelerated payment. The rider is an advance of the death benefit, not an extra benefit.',
            },
            {
              text: '$70,000, because only the withdrawn amount is subtracted.',
              why: 'The formula also subtracts the interest earnings the insurer lost, $300 in the example.',
            },
            {
              text: '$30,300, the withdrawn amount plus the lost interest.',
              why: 'That figure is what is subtracted. The beneficiary receives what remains of the face amount.',
            },
          ],
        ),
      ],
    },

  ],
}

for (const section of chapter4.sections) {
  section.questions.push(...(chapter4Extra[section.id] ?? []))
}
