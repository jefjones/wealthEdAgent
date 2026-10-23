import { question } from '../build.ts'
import type { Question } from '../types.ts'

export const chapter4Extra: Record<string, Question[]> = {
  'c4-standard': [
    question(
      'c4q21',
      'What do provisions stipulate in a life insurance contract?',
      [
        {
          text: 'The rights and obligations of the contract, and they are fairly universal from one policy to the next.',
          why: 'The chapter defines provisions as the rights and obligations of an insurance contract. Those provisions are fairly universal from one policy to the next.',
          correct: true,
        },
        {
          text: 'Changes that increase or decrease benefits and premiums by modifying what is already in the policy.',
          why: 'That is the work of riders. Provisions are the rights and obligations themselves.',
        },
        {
          text: 'Ways for the insurer and the insured to invest or distribute a sum of money available in the policy.',
          why: 'That is the definition of options, such as the nonforfeiture, dividend, and settlement choices described later in the chapter.',
        },
        {
          text: 'One standard policy form that every life insurer must use.',
          why: 'The chapter states that there is no single standard policy form. NAIC standard provisions create uniformity, but they are not one required form.',
        },
      ],
    ),
    question(
      'c4q22',
      'What do options offer the insurer and the insured?',
      [
        {
          text: 'A transfer of policy ownership that the insurer must approve before it is valid.',
          why: 'Assignment is a transfer of ownership rights, and the owner may make it without consent from the insurer. Options are ways to invest or distribute money in the policy.',
        },
        {
          text: 'Ways to invest or distribute a sum of money available in a life policy.',
          why: 'The chapter defines options as ways for insurers and insureds to invest or distribute a sum of money available in a life policy.',
          correct: true,
        },
        {
          text: 'The rights and obligations that stay fairly universal from one policy to the next.',
          why: 'Those are provisions. Options deal with how a sum of money in the policy is invested or distributed.',
        },
        {
          text: 'The second claim on the proceeds after the primary beneficiary dies.',
          why: 'That is the contingent beneficiary. An option is a method of investing or distributing policy money, not a class of beneficiary.',
        },
      ],
    ),
    question(
      'c4q23',
      'How do life policy forms and the NAIC standard provisions relate?',
      [
        {
          text: 'The NAIC issues the policy and the copy of the application that make up the entire contract.',
          why: 'The entire contract is the policy, a copy of the application, and any riders or amendments. The NAIC does not become a party by issuing those documents.',
        },
        {
          text: 'There is one standard life policy form, and the NAIC provisions apply only when a rider is attached.',
          why: 'The chapter says there is no single standard policy form. NAIC provisions create uniformity among life policies generally, not only when a rider is added.',
        },
        {
          text: 'There is no single standard policy form. Standard provisions adopted by the NAIC create uniformity among life insurance policies.',
          why: 'Both points are stated together. The NAIC provisions are what produce uniformity, and they do not create one mandatory policy form.',
          correct: true,
        },
        {
          text: 'Uniformity comes only from riders, and each commissioner writes a different entire contract for that state.',
          why: 'Riders modify a policy. Uniformity among life policies comes from the standard provisions the NAIC has adopted.',
        },
      ],
    ),
    question(
      'c4q24',
      'Who makes up the National Association of Insurance Commissioners?',
      [
        {
          text: 'The insurer, the policyowner, the insured, and the beneficiary.',
          why: 'Those are the parties to the life insurance contract. The NAIC is made up of insurance commissioners.',
        },
        {
          text: 'Commissioners from the 50 states only.',
          why: 'The chapter includes more than the 50 states. Membership also includes the District of Columbia and the 5 U.S. territories.',
        },
        {
          text: 'Only owners of participating policies, because they receive dividends.',
          why: 'Dividends are paid on participating policies. That ownership has nothing to do with who sits on the NAIC.',
        },
        {
          text: 'Insurance commissioners from all 50 states, the District of Columbia, and the 5 U.S. territories.',
          why: 'The chapter gives that full membership. Those commissioners are the body that adopts the standard life policy provisions.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q25',
      'Which activities does this chapter include in activities of daily living?',
      [
        {
          text: 'Bathing, dressing, eating, transferring, toileting, and continence.',
          why: 'The chapter defines activities of daily living as the essential activities of a person and lists those six.',
          correct: true,
        },
        {
          text: 'Skydiving and auto racing.',
          why: 'Skydiving and auto racing are examples of hazardous hobbies that may be excluded or charged a higher premium. They are not activities of daily living.',
        },
        {
          text: 'Monthly, quarterly, semiannually, and annually.',
          why: 'Those are premium modes the policy may state. Activities of daily living are personal care activities, not payment frequencies.',
        },
        {
          text: 'Cash surrender, reduced paid-up insurance, and extended term.',
          why: 'Those are the three nonforfeiture options. They are not the activities of daily living listed in the chapter terms.',
        },
      ],
    ),
    question(
      'c4q26',
      'In the list of terms for this chapter, what is an assignment?',
      [
        {
          text: 'The face value of the policy, meaning the original amount invested before earnings.',
          why: 'That is the principal amount. Assignment is a transfer of ownership rights.',
        },
        {
          text: 'A transfer of rights of policy ownership.',
          why: 'The chapter term list defines assignment as a transfer of rights of policy ownership.',
          correct: true,
        },
        {
          text: 'The first claim to the policy proceeds after the insured dies.',
          why: 'That is the primary beneficiary. An assignment transfers ownership rights rather than naming who is paid first at death.',
        },
        {
          text: 'An arrangement that holds funds or property for another person.',
          why: 'That is a trust. The person who benefits is the trust beneficiary, not an assignee.',
        },
      ],
    ),
    question(
      'c4q27',
      'Which beneficiary has the second claim to the proceeds after the insured dies?',
      [
        {
          text: 'The primary beneficiary.',
          why: 'The primary beneficiary has the first claim to the proceeds after the insured dies, not the second claim.',
        },
        {
          text: 'The tertiary beneficiary, who is paid before the primary beneficiary.',
          why: 'The tertiary beneficiary is third and is paid only if both the primary and the contingent beneficiaries die first.',
        },
        {
          text: 'The contingent beneficiary, usually after the death of the primary beneficiary.',
          why: 'The chapter defines the contingent beneficiary as the person with the second claim, usually after the primary beneficiary has died.',
          correct: true,
        },
        {
          text: 'The trust beneficiary, who must be paid before any named person.',
          why: 'A trust is an arrangement that holds funds for another person. Naming a trust does not automatically give that person the second claim ahead of a primary beneficiary.',
        },
      ],
    ),
    question(
      'c4q28',
      'What is the principal amount of a life policy?',
      [
        {
          text: 'Cash value minus unpaid loans and interest.',
          why: 'That is loan value. The principal amount is the face value of the policy.',
        },
        {
          text: 'A dividend left with the insurer to earn interest.',
          why: 'Accumulation at interest is a dividend option. The principal amount is the face value before earnings.',
        },
        {
          text: 'Unearned premium that must be refunded if the insured dies during a period already paid.',
          why: 'That refund is an additional amount paid with the proceeds. It is not the definition of the principal amount.',
        },
        {
          text: 'The face value of the policy, which is the original amount invested before the earnings.',
          why: 'The chapter defines the principal amount as the face value and as the original amount invested before earnings.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q29',
      'How does this chapter define a trust?',
      [
        {
          text: 'An arrangement in which funds or property are held by a person or corporation for the benefit of another person.',
          why: 'That other person is the trust beneficiary. The chapter uses this definition for a trust.',
          correct: true,
        },
        {
          text: 'A permanent and total transfer of every ownership right to another person or entity.',
          why: 'That is an absolute assignment. A trust holds funds or property for someone else rather than transferring all policy rights.',
        },
        {
          text: 'A partial, temporary transfer of rights used to secure a loan.',
          why: 'That is a collateral assignment. When the debt is repaid, those rights return to the policyowner.',
        },
        {
          text: 'Ownership in which the policyowner and the insured must be the same person.',
          why: 'When the owner and the insured are different people, the arrangement is third-party ownership. A trust is a way of holding funds or property for another person.',
        },
      ],
    ),
    question(
      'c4q30',
      'Who are the parties to a life insurance contract?',
      [
        {
          text: 'The NAIC and the Commissioner only.',
          why: 'The NAIC is the body of commissioners that adopts standard provisions. The parties to the contract are the insurer, the policyowner, the insured, and the beneficiary.',
        },
        {
          text: 'The insurer, the policyowner, the insured, and the beneficiary.',
          why: 'The chapter names those four parties. The policyowner and the insured may be the same person or different persons.',
          correct: true,
        },
        {
          text: 'Only the primary beneficiary and the contingent beneficiary.',
          why: 'Beneficiaries are one party category. The contract parties also include the insurer, the policyowner, and the insured.',
        },
        {
          text: 'The executive officer who signs endorsements and the agent who delivers the policy.',
          why: 'An executive officer must sign modifications, and delivery starts the free look. Neither role is the list of contract parties.',
        },
      ],
    ),
    question(
      'c4q31',
      'When is a life insurance arrangement called third-party ownership?',
      [
        {
          text: 'When the policyowner and the insured are the same person.',
          why: 'Third-party ownership is the opposite case. It exists when the owner and the insured are not the same person.',
        },
        {
          text: 'When the beneficiary designation is irrevocable.',
          why: 'An irrevocable beneficiary has a vested interest and must consent to certain changes. That designation does not define third-party ownership.',
        },
        {
          text: 'When the policyowner and the insured are not the same person.',
          why: 'The chapter states that this difference between owner and insured is third-party ownership. Only the policyowner has the ownership rights.',
          correct: true,
        },
        {
          text: 'When part of the policy is assigned to a lender until a debt is repaid.',
          why: 'That is a collateral assignment. Third-party ownership describes a policy whose owner and insured are different people.',
        },
      ],
    ),
    question(
      'c4q32',
      'When must the policyowner have an insurable interest in the insured?',
      [
        {
          text: 'Only at the time of the claim.',
          why: 'The chapter requires the policyowner to have an insurable interest at the time of application, not only when a claim is made.',
        },
        {
          text: 'At the time of an absolute assignment, because every new owner must have it.',
          why: 'Under an absolute assignment, the new policyowner does not need an insurable interest in the insured. The original owner must have that interest at application.',
        },
        {
          text: 'When the primary beneficiary dies.',
          why: 'Death of the primary beneficiary affects who is next in line for the proceeds. It is not the time at which insurable interest is required.',
        },
        {
          text: 'At the time of application. The policyowner is also the one who pays the premiums.',
          why: 'Both duties are stated together. Insurable interest is required at application, and the policyowner pays the premiums.',
          correct: true,
        },
      ],
    ),
  ],
  'c4-assignment': [
    question(
      'c4q33',
      'May a policyowner transfer ownership without the consent of the insurer?',
      [
        {
          text: 'Yes. Partial or complete ownership may be transferred without consent from the insurer, but the insurer must be notified in writing.',
          why: 'Consent is not required. Written notice is required if the owner wants the insurer to recognize the assignment.',
          correct: true,
        },
        {
          text: 'No. The insurer must consent before any ownership transfer is allowed.',
          why: 'The chapter allows the transfer without consent from the insurer. The owner still must notify the insurer in writing.',
        },
        {
          text: 'Yes, and a spoken notice to the producer is enough to change the insured.',
          why: 'Notice must be in writing. An assignment does not change the insured or the amount of coverage.',
        },
        {
          text: 'Only a collateral assignment is allowed, and only with written consent from the beneficiary.',
          why: 'The owner may transfer partial or complete ownership. Written consent of an irrevocable beneficiary is a separate limit on assigning the policy, not the rule for every assignment.',
        },
      ],
    ),
    question(
      'c4q34',
      'What may happen if the policyowner assigns the policy and does not notify the insurer in writing?',
      [
        {
          text: 'The insurer must pay the claim to both the old owner and the new assignee.',
          why: 'Paying the claim twice is the concern of the company, but lack of written notice means the insurer may not recognize the assignment at all.',
        },
        {
          text: 'The insurer may not recognize the assignment and does not assume responsibility for its validity.',
          why: 'Written notice is what puts the insurer on notice. Without it, the insurer may refuse to recognize the assignment and does not vouch for its validity.',
          correct: true,
        },
        {
          text: 'The amount of coverage automatically changes to match the share of the assignee.',
          why: 'Transferring the policy does not change the amount of coverage. It changes who has the ownership rights.',
        },
        {
          text: 'The assignment becomes an absolute assignment after the grace period.',
          why: 'Absolute and collateral assignments are different transfers. A missing written notice does not convert one into the other after the grace period.',
        },
      ],
    ),
    question(
      'c4q35',
      'What is the major concern of the insurer when a policy is assigned?',
      [
        {
          text: 'Whether a new absolute owner has an insurable interest in the insured.',
          why: 'The new policyowner under an absolute assignment does not need an insurable interest. The stated concern is paying the claim twice.',
        },
        {
          text: 'Changing the insured so the assignee becomes the life that is covered.',
          why: 'An assignment does not change the insured. The concern is which owner gets paid.',
        },
        {
          text: 'Paying the claim twice.',
          why: 'The chapter identifies that double payment as the company major concern when ownership has been transferred.',
          correct: true,
        },
        {
          text: 'Starting a new 2-year period in which the application can be contested.',
          why: 'Incontestability runs from the time the policy has been in force. It is not the concern the chapter gives for an assignment.',
        },
      ],
    ),
    question(
      'c4q36',
      'What changes when a life policy is transferred to another owner?',
      [
        {
          text: 'The insured changes, and the amount of coverage stays the same.',
          why: 'The insured does not change. The transfer also leaves the amount of coverage alone.',
        },
        {
          text: 'The amount of coverage changes, and the original owner keeps the ownership rights.',
          why: 'Coverage does not change. The transfer changes who has the ownership rights.',
        },
        {
          text: 'Both the insured and the amount of coverage are replaced.',
          why: 'Neither the insured nor the amount of coverage changes. Only the ownership rights move.',
        },
        {
          text: 'Only the person who has the ownership rights changes. The insured and the amount of coverage stay the same.',
          why: 'The chapter states that limit directly. Assignment moves ownership rights and nothing else about the insured life or the coverage amount.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q37',
      'A lender receives only some policy rights until a loan is repaid. Which assignment is that?',
      [
        {
          text: 'A collateral assignment, which is a partial and temporary transfer, usually to secure a loan or some other transaction.',
          why: 'Collateral assignment does not move every right forever. It is the partial, temporary form used for a loan or similar transaction.',
          correct: true,
        },
        {
          text: 'An absolute assignment, because every assignment to a lender is permanent.',
          why: 'Absolute assignment is a permanent and total transfer of all rights. A temporary pledge of some rights is collateral.',
        },
        {
          text: 'A revocable beneficiary designation, which transfers ownership to the lender.',
          why: 'A revocable designation can be changed without consent from the beneficiary. It does not transfer ownership rights to a lender.',
        },
        {
          text: 'Extended term, which is the automatic nonforfeiture option.',
          why: 'Extended term uses cash value to buy term insurance. It is not a transfer of ownership rights to a creditor.',
        },
      ],
    ),
    question(
      'c4q38',
      'After the debt behind a collateral assignment is repaid, what happens to the assigned rights?',
      [
        {
          text: 'They stay with the assignee as a permanent transfer of all ownership.',
          why: 'A permanent transfer of all rights is an absolute assignment. Collateral rights are temporary.',
        },
        {
          text: 'They return to the policyowner.',
          why: 'Once the debt or loan is repaid, the rights that were assigned as collateral return to the policyowner.',
          correct: true,
        },
        {
          text: 'The policy must be surrendered, and a surrendered policy cannot be reinstated.',
          why: 'Surrender is a nonforfeiture choice that ends coverage. Repayment of a collaterally secured debt returns the assigned rights instead.',
        },
        {
          text: 'The insured changes back to the original policyowner.',
          why: 'Assignment never changes the insured. Repayment returns the partial ownership rights to the policyowner.',
        },
      ],
    ),
  ],
  'c4-contract': [
    question(
      'c4q39',
      'Can statements made before the contract was written be used to alter the policy?',
      [
        {
          text: 'Yes, if the producer repeats those statements when the policy is delivered.',
          why: 'Most modification clauses say no agent may waive provisions, make alterations or agreements, or extend the time for payment of premiums.',
        },
        {
          text: 'Yes. Anything said during the sale becomes part of the policy once the first premium is paid.',
          why: 'The policy should be treated as a receipt for the first premium. Statements made before the contract was written still cannot alter it.',
        },
        {
          text: 'No. No statements made before the contract was written can be used to alter it.',
          why: 'The entire contract provision limits the contract to the policy, a copy of the application, and any riders or amendments. Earlier statements cannot change that contract.',
          correct: true,
        },
        {
          text: 'Yes, but only during the 10-day free look, and only to reduce the premium.',
          why: 'The free look lets the owner return the policy for a full refund. It does not let earlier statements rewrite the contract. Backdating, not the free look, is the device used for a lower premium.',
        },
      ],
    ),
    question(
      'c4q40',
      'After a policy is in effect, how may its provisions be changed?',
      [
        {
          text: 'The insured may change them alone by sending a letter.',
          why: 'Neither the insurer nor the insured may change provisions alone once the policy is in effect.',
        },
        {
          text: 'The insurer may change them alone by mailing a notice to the owner.',
          why: 'A one-sided notice is not enough. Both parties must agree, and the change must be affixed to the contract.',
        },
        {
          text: 'The beneficiary may change them when the claim is filed.',
          why: 'The beneficiary is a party who may receive proceeds. Changing provisions requires agreement of the insurer and the insured, with the change affixed to the contract.',
        },
        {
          text: 'Neither the insurer nor the insured may change them unless both parties agree and the change is affixed to the contract.',
          why: 'That is the entire-contract limit on later changes. Agreement alone is not enough if the change is not affixed to the contract.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q41',
      'Whose signature must appear on a modification that is endorsed on or attached to the policy?',
      [
        {
          text: 'An executive officer of the insurer. The change must be in writing on or attached to the policy.',
          why: 'The policyowner may request a change, but only an executive officer of the insurer can make it, and the writing must carry the signature of that officer.',
          correct: true,
        },
        {
          text: 'The appointed producer who delivered the policy.',
          why: 'Most modification clauses say no agent has the right to waive provisions, make alterations or agreements, or extend the premium-payment time.',
        },
        {
          text: 'The contingent beneficiary.',
          why: 'A contingent beneficiary has a later claim to proceeds. That person does not sign policy modifications into effect.',
        },
        {
          text: 'The Commissioner, on every individual change.',
          why: 'The Commissioner may decide that other classes of policies fall outside the 10-day free look. Individual modifications are signed by an executive officer of the insurer.',
        },
      ],
    ),
    question(
      'c4q42',
      'May the policyowner ask for a policy change, and who is allowed to make that change?',
      [
        {
          text: 'The policyowner may both request the change and make it without the insurer.',
          why: 'The owner may request changes. Only an executive officer of the insurer can make them.',
        },
        {
          text: 'The policyowner may request changes, but only an executive officer of the insurer can make them.',
          why: 'Requesting a change and having authority to make it are separated. The signature of the officer is what puts the written change on the policy.',
          correct: true,
        },
        {
          text: 'Only the agent who delivered the policy can make the change.',
          why: 'An agent is not given that power. Most modification clauses deny the agent any right to alter the policy.',
        },
        {
          text: 'The irrevocable beneficiary makes the change, and the executive officer only watches.',
          why: 'An irrevocable beneficiary must consent before the owner changes the designation, borrows, or assigns. The person who makes a policy modification is an executive officer.',
        },
      ],
    ),
    question(
      'c4q43',
      'What do most modification clauses say that no agent has the right to do?',
      [
        {
          text: 'Deliver the policy, which is when the free-look period starts.',
          why: 'The free look starts when the policyowner receives the policy. The clause does not take away delivery. It forbids waiving provisions, making alterations or agreements, and extending premium-payment time.',
        },
        {
          text: 'Collect the first premium, for which the policy itself is treated as a receipt.',
          why: 'Premiums on an individual life or annuity contract may be paid to the appointed producer upon delivery. The modification clause is about waiving, altering, and extending time for payment.',
        },
        {
          text: 'Waive policy provisions, make alterations or agreements, or extend the time for payment of premiums.',
          why: 'Most modification clauses state those three limits on the agent. A real change must be in writing over the signature of an executive officer.',
          correct: true,
        },
        {
          text: 'Tell the owner that paid-up additions apply when no dividend option was chosen.',
          why: 'Paid-up additions are the dividend option used when the owner makes no choice. That fact is not the limit these modification clauses place on agents.',
        },
      ],
    ),
    question(
      'c4q44',
      'If the policyowner is dissatisfied during the free-look period, what refund is available?',
      [
        {
          text: 'Only the extra premium caused by a misstatement of age.',
          why: 'A misstatement of age or gender is handled by adjusting the benefit at claim time. The free look returns the full premium if the owner is dissatisfied for any reason.',
        },
        {
          text: 'No refund, unless the insured dies during the 10 days.',
          why: 'Death during the free look is not the condition for the refund. Dissatisfaction for any reason supports a full refund of premium.',
        },
        {
          text: 'A refund of premium minus a surrender charge.',
          why: 'A surrender charge is a fee when a life policy or annuity is surrendered for its cash value. The free-look return is a full refund of premium.',
        },
        {
          text: 'A full refund of premium. The owner may return the policy if dissatisfied for any reason.',
          why: 'The right to examine gives that full refund. The usual period is 10 days from receipt, with different treatment for listed classes such as replacement policies.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q45',
      'How long is the required free-look period on a replacement policy?',
      [
        {
          text: '30 days. The 10-day free look does not apply to replacement policies.',
          why: 'Replacement policies are one of the classes kept out of the 10-day rule, and the chapter states that their required free-look period is 30 days.',
          correct: true,
        },
        {
          text: '10 days from the day the insurer issues the policy.',
          why: 'Ten days is the usual free look, and it runs from receipt by the policyowner, not from issue. Replacement policies require 30 days.',
        },
        {
          text: '14 to 30 days, the period insurers commonly use for a common disaster clause.',
          why: 'That range is the common disaster period, not the replacement free look. Replacement policies require 30 days.',
        },
        {
          text: 'One year, the longest period for which an application may be backdated.',
          why: 'Backdating cannot go more than 1 year before the application or the medical exam, whichever is later. The replacement free look is 30 days.',
        },
      ],
    ),
    question(
      'c4q46',
      'Besides group, credit life, and replacement policies, who may place other classes outside the 10-day free look?',
      [
        {
          text: 'The producing agent, under the modification clause.',
          why: 'Most modification clauses deny the agent the right to waive provisions or make alterations. The Commissioner is the one who may name other classes.',
        },
        {
          text: 'The Commissioner.',
          why: 'The 10-day free look does not apply to group policies, credit life, replacement policies, or any other classes of policies as determined by the Commissioner.',
          correct: true,
        },
        {
          text: 'The primary beneficiary, by refusing the delivered policy.',
          why: 'The free look belongs to the policyowner, who may return the policy for any reason. The beneficiary does not decide which classes are outside the 10 days.',
        },
        {
          text: 'The NAIC, by repealing the standard provisions for that class.',
          why: 'The NAIC standard provisions create uniformity. The chapter gives the Commissioner, not the NAIC, the power to name additional classes outside the 10-day free look.',
        },
      ],
    ),
  ],
  'c4-premium': [
    question(
      'c4q47',
      'Which premium schedules does the chapter say a policy may set?',
      [
        {
          text: 'Weekly only, with the beneficiary choosing the day of the week.',
          why: 'The listed frequencies are monthly, quarterly, semiannually, and annually. The policy states when premiums are due, how often they are paid, and to whom.',
        },
        {
          text: 'A single payment at death, and no payment while the insured is alive.',
          why: 'Premiums must be paid in advance. The grace period exists so a due premium can still be paid before lapse.',
        },
        {
          text: 'Monthly, quarterly, semiannually, or annually. The policy also states when premiums are due and to whom they are paid.',
          why: 'Those are the frequencies named in the premium provision, together with the due date and the payee.',
          correct: true,
        },
        {
          text: 'Whatever mode the contingent beneficiary selects after the insured dies.',
          why: 'If the owner chose a settlement option, the beneficiary cannot change it. Premium frequency is set by the policy while premiums are payable, not by a contingent beneficiary after death.',
        },
      ],
    ),
    question(
      'c4q48',
      'When must life insurance premiums be paid?',
      [
        {
          text: 'At the end of the period they cover.',
          why: 'The chapter requires premiums to be paid in advance, not at the end of the period.',
        },
        {
          text: 'Only after the grace period has already ended and the policy has lapsed.',
          why: 'The grace period is the time after the due date in which the owner can still pay before lapse. Premiums themselves are payable in advance.',
        },
        {
          text: 'Only if the insured dies during that premium period.',
          why: 'If the insured dies during a period that was already paid, unearned premium is refunded with the proceeds. The premium still had to be paid in advance.',
        },
        {
          text: 'In advance.',
          why: 'The policy must provide for premiums in advance. An individual life or annuity contract must state that all premiums are payable in advance.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q49',
      'The insured dies during a period for which the premium was already paid. What happens to unearned premium?',
      [
        {
          text: 'The insurer must refund any unearned premium along with the policy proceeds.',
          why: 'That refund is required when death occurs in a period that has already been paid. It is separate from deducting an unpaid premium during the grace period.',
          correct: true,
        },
        {
          text: 'The insurer deducts that unearned premium from the death benefit.',
          why: 'Deduction applies to an unpaid premium when death occurs during the grace period. Unearned premium from a period already paid is refunded with the proceeds.',
        },
        {
          text: 'The insurer keeps the unearned premium because coverage ended at death.',
          why: 'The chapter requires the unearned premium to be refunded along with the policy proceeds.',
        },
        {
          text: 'The unearned premium is converted into a policy loan.',
          why: 'Policy loans are amounts borrowed against cash value. Unearned premium is refunded with the proceeds, not booked as a loan.',
        },
      ],
    ),
    question(
      'c4q50',
      'Where may premiums on an individual life insurance or annuity contract be paid?',
      [
        {
          text: 'Only to the primary beneficiary.',
          why: 'The beneficiary receives proceeds under the policy. Premiums are payable at the company home office or to the appointed producer upon delivery.',
        },
        {
          text: 'In advance, either at the company home office or to the appointed producer upon delivery of the policy.',
          why: 'An individual life or annuity contract must state that all premiums are payable in advance at one of those two places.',
          correct: true,
        },
        {
          text: 'Only when proof of death is filed.',
          why: 'Premiums are payable in advance, not at claim time. A death during a paid period produces a refund of unearned premium with the proceeds.',
        },
        {
          text: 'To the contingent beneficiary whenever the primary beneficiary is still living.',
          why: 'A contingent beneficiary receives nothing if the primary beneficiary is living when the insured dies. Premiums are paid to the home office or the appointed producer.',
        },
      ],
    ),
    question(
      'c4q51',
      'What should be treated as a receipt for the first premium payment?',
      [
        {
          text: 'The free-look acknowledgement alone.',
          why: 'The free look gives the owner time to examine the policy and return it for a full refund. The chapter says the policy itself should be considered the receipt for the first premium.',
        },
        {
          text: 'The collateral assignment form.',
          why: 'A collateral assignment transfers partial rights, usually to secure a loan. It is not the receipt for the first premium.',
        },
        {
          text: 'The policy itself.',
          why: 'The chapter says the policy itself should be considered a receipt for the first premium payment.',
          correct: true,
        },
        {
          text: 'The table of nonforfeiture values.',
          why: 'That table must show nonforfeiture values for a minimum of 20 years. It is not the receipt for the first premium.',
        },
      ],
    ),
    question(
      'c4q52',
      'What is the purpose of the grace period, and how long is it usually?',
      [
        {
          text: 'To give the insurer 2 years to contest statements in the application.',
          why: 'Two years is the incontestability period. The grace period protects the owner against an unintentional lapse after the premium due date.',
        },
        {
          text: 'To provide 10 days from receipt in which the owner can return the policy.',
          why: 'That is the free look. The grace period comes after the premium due date and is usually 30 or 31 days, or one month.',
        },
        {
          text: 'To let the insurer defer a cash-value loan for up to 6 months.',
          why: 'A loan request may be deferred for up to 6 months unless it pays the premium. The grace period is the short time in which an overdue premium may still be paid.',
        },
        {
          text: 'To protect the policyholder against an unintentional lapse. It is usually 30 or 31 days, or one month.',
          why: 'The grace period runs after the premium due date. If the insured dies during it, the death benefit is payable and any unpaid premium is deducted.',
          correct: true,
        },
      ],
    ),
  ],
  'c4-reinstate': [
    question(
      'c4q53',
      'What is the usual maximum time for putting a lapsed policy back in force?',
      [
        {
          text: 'Usually 3 years after the policy has lapsed.',
          why: 'Reinstatement has a maximum time limit that is usually 3 years after lapse. The owner must still meet the other reinstatement conditions.',
          correct: true,
        },
        {
          text: 'Usually 2 years, the same period as incontestability and the suicide limit.',
          why: 'Two years is the incontestability period and the suicide period measured from the effective date. The usual reinstatement maximum is 3 years after lapse.',
        },
        {
          text: 'Usually 30 or 31 days, or one month.',
          why: 'That is the usual grace period before a policy lapses. Reinstatement is the later chance to put a lapsed policy back in force, usually within 3 years.',
        },
        {
          text: 'A minimum of 20 years, shown in a table in the policy.',
          why: 'A nonforfeiture table must cover a minimum of 20 years. That is not the reinstatement time limit.',
        },
      ],
    ),
    question(
      'c4q54',
      'Besides evidence of insurability and back premiums with interest, what else may reinstatement require?',
      [
        {
          text: 'A new suicide period of 14 to 30 days.',
          why: 'Fourteen to 30 days is the period insurers commonly use in a common disaster clause. It is not a reinstatement requirement.',
        },
        {
          text: 'Repayment of any outstanding loans and interest. The owner may have to make that repayment.',
          why: 'The chapter lists evidence of insurability, all back premiums plus interest, and possible repayment of outstanding loans and interest.',
          correct: true,
        },
        {
          text: 'Proof that the policy was already surrendered for its cash value.',
          why: 'A policy that has been surrendered cannot be reinstated. Surrender is a bar, not a condition the owner must prove.',
        },
        {
          text: 'Payment of a guaranteed dividend before the policy can be restored.',
          why: 'Companies cannot guarantee dividends. Dividends are not one of the reinstatement payments the chapter lists.',
        },
      ],
    ),
    question(
      'c4q55',
      'What status and values does reinstatement give back to the policy?',
      [
        {
          text: 'It rewrites the policy at the insured attained age.',
          why: 'Pricing new coverage at attained age is how guaranteed insurability additions are priced. Reinstatement keeps the values established at the issue age.',
        },
        {
          text: 'It turns the policy into reduced paid-up insurance.',
          why: 'Reduced paid-up insurance is a nonforfeiture option that buys a smaller paid-up policy. Reinstatement restores the original policy.',
        },
        {
          text: 'It restores the policy to its original status and keeps the values established at the insured issue age.',
          why: 'Those preserved issue-age values are a reason to reinstate rather than buy a new policy. Evidence of insurability and the required payments still apply.',
          correct: true,
        },
        {
          text: 'It pays the current cash value and ends the coverage.',
          why: 'That is cash surrender. Coverage ends, and a surrendered policy cannot be reinstated.',
        },
      ],
    ),
    question(
      'c4q56',
      'Can a policy that has been surrendered be reinstated?',
      [
        {
          text: 'Yes, within the usual 3 years, if the owner proves insurability.',
          why: 'Those conditions apply to a lapsed policy. A policy that has been surrendered cannot be reinstated.',
        },
        {
          text: 'Yes, but only by using the cash value to buy extended term.',
          why: 'Extended term is a nonforfeiture option used when permanent coverage ends. It is not a way to reinstate a surrendered policy.',
        },
        {
          text: 'Yes, if the insurer refunds the surrender charge.',
          why: 'A surrender charge is a fee charged when a policy or annuity is surrendered for its cash value. Refunding it is not a reinstatement right in this chapter.',
        },
        {
          text: 'No. A policy that has been surrendered cannot be reinstated.',
          why: 'Surrender ends the chance to reinstate. Reinstatement is for a lapsed policy that has not been surrendered.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q57',
      'During the first 2 years a policy is in force, when may the insurer contest a claim because of the application?',
      [
        {
          text: 'If inaccurate or misleading information was in the application.',
          why: 'During the first 2 years the insurer may contest on that ground. After 2 years the clause bars a denial based on application statements, even a material misstatement or concealment.',
          correct: true,
        },
        {
          text: 'Never. Application statements are barred from the day the policy is issued.',
          why: 'The bar applies after the policy has been in force for 2 years. During the first 2 years, inaccurate or misleading application information can be used to contest a claim.',
        },
        {
          text: 'Only after 2 years, and only when the concealment was material.',
          why: 'After 2 years the insurer cannot deny a claim because of application statements, even a material misstatement or concealment. The contest for inaccurate or misleading information is available during the first 2 years.',
        },
        {
          text: 'Only when the premium was not paid. Application statements are outside the clause from the start.',
          why: 'Nonpayment of premiums is outside incontestability. During the first 2 years, the contest the chapter describes is for inaccurate or misleading information in the application.',
        },
      ],
    ),
    question(
      'c4q58',
      'Which matters stay outside the incontestability clause?',
      [
        {
          text: 'Every statement in the application, but only during the first 2 years.',
          why: 'During the first 2 years the insurer may contest inaccurate or misleading application information. The matters the clause does not cover include nonpayment of premiums and, usually, age, sex, and identity.',
        },
        {
          text: 'Nonpayment of premiums. The clause also usually does not apply to statements of age, sex, or identity.',
          why: 'Those are the stated exceptions. A misstatement of age or gender is handled by adjusting the benefit, not by the 2-year bar.',
          correct: true,
        },
        {
          text: 'Only a fare-paying passenger exclusion in the aviation provision.',
          why: 'Aviation is a common exclusion. It is not the list of matters kept outside the incontestability clause.',
        },
        {
          text: 'A material concealment after 2 years, which still voids the policy.',
          why: 'After 2 years the insurer cannot deny a claim for statements in the application, even a material misstatement or concealment.',
        },
      ],
    ),
    question(
      'c4q59',
      'If age or gender was misstated, which rates are used when the benefit is adjusted?',
      [
        {
          text: 'The insurer rates in effect on the date of death.',
          why: 'The adjustment is made at claim time, but the rates are the insurer rates at the date of policy issue, not the rates on the date of death.',
        },
        {
          text: 'Attained-age rates on the date the policy is reinstated.',
          why: 'Reinstatement keeps the values from the original issue age. The misstatement calculation uses the rates at the date of policy issue.',
        },
        {
          text: 'The insurer rates at the date of policy issue. The benefit becomes the amount that premium would have purchased at the correct age or gender.',
          why: 'The adjustment happens at claim time. The chapter specifies the issue-date rates and the amount the premium at the correct age or gender would have purchased.',
          correct: true,
        },
        {
          text: 'Whatever rates the beneficiary selects under a settlement option.',
          why: 'Settlement options decide how proceeds are paid. They do not supply the rates used to correct a misstatement of age or gender.',
        },
      ],
    ),
  ],
  'c4-exclusions': [
    question(
      'c4q60',
      'While a claim is pending, what may the insurer do at its own expense unless state law forbids it?',
      [
        {
          text: 'Backdate the application more than one year to reduce the premium.',
          why: 'Backdating is limited to 1 year before the application or the medical exam, whichever is later, and only to lower the premium. It is not the pending-claim examination right.',
        },
        {
          text: 'Forfeit the policy for a loan that is still below the loan value.',
          why: 'A life policy cannot be forfeited for failure to repay a loan or loan interest while total indebtedness is less than the loan value.',
        },
        {
          text: 'Change the beneficiary without the policyowner.',
          why: 'Naming and changing the beneficiary are ownership rights. They are not part of the insurer right to examine a pending claim.',
        },
        {
          text: 'Examine the insured, or have an autopsy performed, as often as it reasonably requires, to determine whether death was accidental or natural.',
          why: 'The insurer does this at its own expense while a claim is pending, unless state law forbids it.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q61',
      'Which risks does the chapter name as common exclusions?',
      [
        {
          text: 'Aviation, hazardous occupation, and war and military service.',
          why: 'Those three are the common exclusions the chapter lists. Suicide, backdating, and the war clauses are explained around that list.',
          correct: true,
        },
        {
          text: 'The grace period, the free look, and reinstatement.',
          why: 'Those are policy provisions that keep coverage available or restore it. They are not the common exclusions.',
        },
        {
          text: 'Per capita, per stirpes, and payment to the estate.',
          why: 'Those are ways proceeds are distributed when beneficiaries are named or when none remains. They are not exclusions from coverage.',
        },
        {
          text: 'Cash surrender, reduced paid-up insurance, and extended term.',
          why: 'Those are the three nonforfeiture options. They apply when permanent coverage ends, not as causes of death that are excluded.',
        },
      ],
    ),
    question(
      'c4q62',
      'How do most policies treat aviation?',
      [
        {
          text: 'They exclude every death aboard a regularly scheduled airline.',
          why: 'Most policies cover a fare-paying passenger or a pilot on a regularly scheduled airline. The restriction is aimed at noncommercial pilots, or at an extra premium for them.',
        },
        {
          text: 'They cover a fare-paying passenger or a pilot on a regularly scheduled airline, but they exclude noncommercial pilots or charge an extra premium.',
          why: 'That is the aviation exclusion as the chapter describes it. Noncommercial flying is the part that is excluded or surcharged.',
          correct: true,
        },
        {
          text: 'They treat skydiving as covered commercial aviation.',
          why: 'Skydiving is given as a hazardous hobby, which may be excluded or charged a higher premium. It is not the covered commercial-aviation case.',
        },
        {
          text: 'They pay triple indemnity for every noncommercial flight.',
          why: 'Triple indemnity is an accidental-death multiple some policies pay. Death from hazardous hobbies or avocations is not paid as accidental death under that rider.',
        },
      ],
    ),
    question(
      'c4q63',
      'What may an insurer do about death from a hazardous occupation or hobby, such as skydiving or auto racing?',
      [
        {
          text: 'It must pay the death as double indemnity.',
          why: 'Double indemnity is the usual accidental-death multiple. Hazardous hobbies are not included in accidental death, and the base policy may exclude them or charge more.',
        },
        {
          text: 'The status clause must cover the death because the insured was not at war.',
          why: 'The status clause excludes all causes of death while the insured is on active duty. Hazardous occupation or hobby is a separate exclusion.',
        },
        {
          text: 'The death may be excluded, or the insurer may charge a higher premium.',
          why: 'The chapter gives both treatments for death from a hazardous occupation or hobby and uses skydiving and auto racing as examples.',
          correct: true,
        },
        {
          text: 'After 2 years the insurer may refund only the premium, as it does for later suicide.',
          why: 'After the 2-year suicide period, the policy pays the death proceeds as if the death were from natural causes. A hazardous-hobby death is handled by exclusion or a higher premium.',
        },
      ],
    ),
    question(
      'c4q64',
      'Do most life policies issued today exclude military service?',
      [
        {
          text: 'Yes. Current policies use the status clause for every active-duty death.',
          why: 'The status clause would exclude all causes of death on active duty, but most policies issued today do not exclude military service.',
        },
        {
          text: 'Yes. Current policies use the results clause for every military death.',
          why: 'The results clause excludes death only from an act of war. Most policies issued today do not exclude military service at all.',
        },
        {
          text: 'Yes. Military death is always limited to a refund of premium.',
          why: 'A refund of premium is the suicide limit during the first 2 years after the effective date. It is not the current military rule stated here.',
        },
        {
          text: 'No. Most policies issued today do not exclude military service.',
          why: 'The chapter states that directly after describing the status clause and the results clause.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q65',
      'Under the results clause, is the war exclusion limited to a declared war?',
      [
        {
          text: 'No. The death benefit is excluded only if the insured is killed as a result of an act of war, declared or undeclared.',
          why: 'The results clause uses that act-of-war test and expressly covers both a declared and an undeclared war.',
          correct: true,
        },
        {
          text: 'Yes. Death in an undeclared war is paid in full under the results clause.',
          why: 'The clause says declared or undeclared. An undeclared act of war is still within the results exclusion.',
        },
        {
          text: 'The results clause excludes every cause of death while the insured is on active duty.',
          why: 'Excluding all causes of death on active duty is the status clause. The results clause is limited to death caused by an act of war.',
        },
        {
          text: 'The results clause refunds premium for suicide within 2 years and pays the face amount after that.',
          why: 'That is the suicide provision, measured from the policy effective date. It is not the results clause.',
        },
      ],
    ),
    question(
      'c4q66',
      'The insured dies by suicide within 2 years after the policy effective date. What is the insurer liability?',
      [
        {
          text: 'The full death proceeds are paid to the beneficiary.',
          why: 'Full proceeds, treated as death from natural causes, are paid after the 2-year suicide period. Within that period, liability is limited to a refund of premium.',
        },
        {
          text: 'Liability is limited to a refund of premium.',
          why: 'The suicide provision sets that limit when suicide occurs within 2 years after the policy effective date.',
          correct: true,
        },
        {
          text: 'Nothing is paid, and the premium is kept.',
          why: 'The chapter does not leave the beneficiary with nothing. The insurer liability is a refund of premium.',
        },
        {
          text: 'Twice the face amount is paid under double indemnity.',
          why: 'Double indemnity is an accidental-death benefit. Self-inflicted injuries are not accidental death under that rider, and early suicide is limited to a premium refund.',
        },
      ],
    ),
    question(
      'c4q67',
      'The insured dies by suicide after the 2-year suicide period. How is the claim treated?',
      [
        {
          text: 'The insurer still refunds only the premium.',
          why: 'The premium refund applies to suicide within 2 years after the effective date. After that period, the death proceeds are paid.',
        },
        {
          text: 'The claim is denied because suicide remains a permanent exclusion.',
          why: 'The suicide limit is 2 years. After that, the policy pays as if the death were from natural causes.',
        },
        {
          text: 'The policy pays the death proceeds to the beneficiary as if the death were from natural causes.',
          why: 'That is the result once the 2-year suicide period has passed.',
          correct: true,
        },
        {
          text: 'Only the cash value is paid, and the policy is treated as extended term.',
          why: 'Extended term is a nonforfeiture option that uses cash value to buy term insurance. It is not the suicide benefit after 2 years.',
        },
      ],
    ),
    question(
      'c4q68',
      'Which limits does the chapter place on forfeiting a life policy for a loan and on assessments?',
      [
        {
          text: 'The policy must be forfeited as soon as any loan interest is unpaid.',
          why: 'Forfeiture is not allowed for unpaid loan or loan interest while total indebtedness is less than the loan value.',
        },
        {
          text: 'The insurer may assess policyholders whenever a dividend is not paid.',
          why: 'Dividends cannot be guaranteed, and life policies cannot allow assessments or calls on policyholders.',
        },
        {
          text: 'A loan below the loan value ends the policy on the premium due date, with no grace period.',
          why: 'The grace period is usually 30 or 31 days, or one month. A loan below the loan value is not a ground for forfeiture.',
        },
        {
          text: 'The policy cannot be forfeited for failure to repay a loan or loan interest while total indebtedness is less than the loan value, and it cannot allow assessments or calls on policyholders.',
          why: 'The chapter states both limits. Indebtedness below the loan value does not justify forfeiture, and assessments or calls are not allowed.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q69',
      'How far may an application be backdated, and for what reason?',
      [
        {
          text: 'Not more than 1 year before the application or the medical examination, whichever is later. The only allowable reason is a lower premium, and all premiums must be paid from the effective date.',
          why: 'The chapter limits both the period and the purpose. The later of the application date and the medical exam date is the point from which the 1 year is measured.',
          correct: true,
        },
        {
          text: 'Up to 3 years, so the owner can skip evidence of insurability on a reinstatement.',
          why: 'Three years is the usual maximum for reinstating a lapsed policy, and evidence of insurability is still required. Backdating is limited to 1 year and only for a lower premium.',
        },
        {
          text: 'Up to 6 months, the waiting period used for waiver of premium.',
          why: 'Most insurers use a 6-month waiting period on waiver of premium. That period does not set the backdating limit.',
        },
        {
          text: 'Any distance into the past if the purpose is to avoid incontestability, even when the premium is higher.',
          why: 'The only allowable reason to backdate is a lower premium, and the period cannot exceed 1 year before the later of the application or the medical exam.',
        },
      ],
    ),
  ],
  'c4-beneficiaries': [
    question(
      'c4q70',
      'Who may be named to receive the proceeds of a life policy?',
      [
        {
          text: 'Only a relative who has an insurable interest in the insured.',
          why: 'The policyowner must have an insurable interest at application. The beneficiary does not need an insurable interest, and the payee is not limited to relatives.',
        },
        {
          text: 'A person, a class of persons, the estate of the insured, or an institution or other entity such as a foundation, charity, corporation, or trustee.',
          why: 'The chapter lists each of those possible beneficiaries. The beneficiary is the person or interest to whom the proceeds are paid when the insured dies.',
          correct: true,
        },
        {
          text: 'Only the policyowner, because only the owner has ownership rights.',
          why: 'Ownership rights belong to the policyowner, but the proceeds at death are paid to the named beneficiary, who can be someone else.',
        },
        {
          text: 'Only a minor, and the proceeds must be paid directly to that minor.',
          why: 'Paying life insurance benefits directly to a minor is generally not a good practice. Benefits for a minor go to a guardian, a trustee, or as a court directs.',
        },
      ],
    ),
    question(
      'c4q71',
      'Does the beneficiary need an insurable interest, and is the policy valid if none is named?',
      [
        {
          text: 'The beneficiary must have an insurable interest at death, or the policy is void.',
          why: 'Insurable interest is required of the policyowner at application. The beneficiary does not need it, and a policy with no named beneficiary is still valid.',
        },
        {
          text: 'Naming no beneficiary makes the contract invalid from the start.',
          why: 'The policy is valid even if the owner names no beneficiary. If none is named, or none is alive, the estate of the insured receives the proceeds.',
        },
        {
          text: 'The beneficiary does not need an insurable interest, and the policy is valid even if the owner names no beneficiary.',
          why: 'Both points are stated in the beneficiary section. The estate becomes the payee when no beneficiary was named or none is alive.',
          correct: true,
        },
        {
          text: 'The insured must be the only beneficiary, and any other name voids the policy.',
          why: 'The beneficiary may be a person, a class, the estate, or an institution. The insured and the beneficiary are different roles, and the policy can name someone else.',
        },
      ],
    ),
    question(
      'c4q72',
      'If more than one individual is named as beneficiary, how is the benefit divided?',
      [
        {
          text: 'Each named person receives the full face amount.',
          why: 'The benefit is split, not paid in full to each person. The split follows the percentages in the policy.',
        },
        {
          text: 'The oldest named person receives the entire benefit.',
          why: 'Age does not decide the share. Multiple named individuals split the benefit by the percentages in the policy.',
        },
        {
          text: 'The shares pass by bloodline even when every named beneficiary is alive and the policy states percentages.',
          why: 'Per stirpes sends the share of a deceased beneficiary to the heirs of that beneficiary. While the named people are alive, the split is by the percentages in the policy.',
        },
        {
          text: 'They split the benefit by the percentages in the policy.',
          why: 'The chapter states that percentage split when more than one individual is named.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q73',
      'How are life insurance benefits for a minor paid?',
      [
        {
          text: 'To the guardian of the minor, to the trustee if the trust is the beneficiary, or as a court directs. The guardian and the trustee can be the same person.',
          why: 'Those are the payment paths the chapter gives. Paying the benefit directly to the minor is generally not a good practice.',
          correct: true,
        },
        {
          text: 'Directly to the minor, which this chapter treats as the preferred practice.',
          why: 'The chapter says the opposite. Paying life insurance benefits directly to a minor is generally not a good practice.',
        },
        {
          text: 'To the insurer until the minor reaches 65.',
          why: 'Age 65 is a common expiry age for waiver of premium, spouse term, and the accidental death rider. Minor benefits are paid to a guardian, a trustee, or as a court directs.',
        },
        {
          text: 'Only to the minor estate, even when a guardian or trustee is available.',
          why: 'The estate receives proceeds when no beneficiary is named or none is alive. A minor benefit can be paid to the guardian or to the trustee.',
        },
      ],
    ),
    question(
      'c4q74',
      'Why can a class designation such as my children be a problem, and what do insurers often encourage?',
      [
        {
          text: 'Class designations are forbidden, so the proceeds must be kept by the insurer.',
          why: 'A class may be named. The problem is vagueness, and the insurer does not keep the proceeds for that reason.',
        },
        {
          text: 'A class such as "my children" can be vague. A less vague class names the children of a stated union, and insurers often encourage naming each child and the percentage each is to receive.',
          why: 'The chapter uses my children as a vague class and children of the union of Jane Smith and James Smith as a less vague class. Naming each child and a percentage is the practice insurers often encourage.',
          correct: true,
        },
        {
          text: 'The only acceptable class is the estate of the insured.',
          why: 'The estate can be the beneficiary, but it is not the only class. A person, a class, or an institution may also be named.',
        },
        {
          text: 'Insurers encourage the words "my children" because that class can never be unclear.',
          why: 'The chapter says a class such as "my children" can be vague. Insurers often encourage a name and a percentage for each child.',
        },
      ],
    ),
    question(
      'c4q75',
      'What does a per capita distribution do?',
      [
        {
          text: 'It pays the share of a deceased beneficiary to the heirs of that beneficiary.',
          why: 'That is per stirpes, which means by the bloodline. Per capita means by the head.',
        },
        {
          text: 'It pays the entire benefit to the estate whenever one named beneficiary is still alive.',
          why: 'The estate is paid when no beneficiary is alive or none was named. Per capita divides the benefit among the living named beneficiaries.',
        },
        {
          text: 'It means by the head, and it evenly distributes benefits among the living named beneficiaries.',
          why: 'Living named beneficiaries share evenly. People who were not named do not take a share under per capita.',
          correct: true,
        },
        {
          text: 'It pays only the tertiary beneficiary.',
          why: 'The tertiary beneficiary is paid only if both the primary and the contingent beneficiaries die first. Per capita is a method of dividing shares among living named beneficiaries.',
        },
      ],
    ),
    question(
      'c4q76',
      'What does a per stirpes distribution do?',
      [
        {
          text: 'It pays only the living named beneficiaries and cuts off their heirs.',
          why: 'That is per capita. Per stirpes follows the bloodline of a beneficiary who has already died.',
        },
        {
          text: 'It pays the estate of the insured in every case.',
          why: 'The estate is the payee when no beneficiary is named or none is alive. Per stirpes instead gives the share of a deceased beneficiary to the heirs of that beneficiary.',
        },
        {
          text: 'It gives the full face amount to the youngest heir.',
          why: 'No age ranking of that kind is stated. Per stirpes distributes the share of a deceased beneficiary to the heirs of that beneficiary.',
        },
        {
          text: 'It means by the bloodline, and it distributes the share of a deceased beneficiary to the heirs of that beneficiary.',
          why: 'The chapter defines per stirpes that way, in contrast to per capita, which pays the living named beneficiaries.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q77',
      'Bryan has a $90,000 policy and names Quentin, Steve, and Patrick for equal shares. Quentin dies first and leaves Bob and Lou. Bryan chose per capita. What is paid?',
      [
        {
          text: 'Steve and Patrick receive $45,000 each. Bob and Lou receive nothing because they were not named.',
          why: 'Per capita pays the living named beneficiaries. the share of Quentin is divided by the two surviving sons, and the grandchildren were not named.',
          correct: true,
        },
        {
          text: 'Steve and Patrick receive $30,000 each, and Bob and Lou receive $15,000 each.',
          why: 'Those are the per stirpes amounts. Per capita does not pass the share of Quentin to Bob and Lou.',
        },
        {
          text: 'Bob and Lou receive $45,000 each, and the sons receive nothing.',
          why: 'The grandchildren were not named. Under per capita they receive nothing, and Steve and Patrick receive $45,000 each.',
        },
        {
          text: 'The estate receives the full $90,000 because one son died.',
          why: 'The estate is paid when no beneficiary is alive or none was named. Steve and Patrick are alive and were named, so they take the per capita shares.',
        },
      ],
    ),
    question(
      'c4q78',
      'For whom does this chapter say trusts are commonly used, and what drawback does it mention?',
      [
        {
          text: 'Trusts are used to skip the grace period, and they cost nothing to administer.',
          why: 'The grace period protects against an unintentional lapse. Trusts are commonly used for minors or a scholarship fund, and they are expensive to administer.',
        },
        {
          text: 'Trusts are commonly used for minors or a scholarship fund, and they are expensive to administer.',
          why: 'The chapter gives both the common uses and the cost of administration. A trust can also be the payee of a minor benefit.',
          correct: true,
        },
        {
          text: 'A trust is the nonforfeiture option the insurer uses when the owner makes no choice.',
          why: 'Extended term is the automatic nonforfeiture option. A trust is a way to hold funds or property for another person.',
        },
        {
          text: 'Trusts are used only to secure policy loans, and the insurer must administer them for free.',
          why: 'A collateral assignment, not a trust, is the partial transfer usually used to secure a loan. Trusts are expensive to administer.',
        },
      ],
    ),
    question(
      'c4q79',
      'Does naming a trust as beneficiary, by itself, keep the death proceeds out of the taxable estate?',
      [
        {
          text: 'Yes. Any trust named as beneficiary automatically avoids estate taxes.',
          why: 'The chapter says naming a trust as beneficiary does not, by itself, avoid estate taxes. Proper use of a trust is a further step.',
        },
        {
          text: 'No. A trust can never keep death proceeds out of the taxable estate.',
          why: 'Used properly, a trust can keep death proceeds out of the taxable estate. Simply naming the trust is not enough.',
        },
        {
          text: 'No. Used properly, a trust can keep death proceeds out of the taxable estate, but naming a trust as beneficiary does not, by itself, avoid estate taxes.',
          why: 'Both halves are required. The estate may include the death benefit when the estate itself is the payee, and a trust is not an automatic tax shield.',
          correct: true,
        },
        {
          text: 'Yes, but only when the trust is also the insured.',
          why: 'A trust holds funds or property for another person. The insured is the life that is covered, and naming a trust does not by itself avoid estate taxes.',
        },
      ],
    ),
    question(
      'c4q80',
      'Who is the beneficiary of a life policy?',
      [
        {
          text: 'The person who must have an insurable interest at the time of application.',
          why: 'That duty belongs to the policyowner. The beneficiary does not need an insurable interest.',
        },
        {
          text: 'The only party who can assign the policy or borrow its cash value.',
          why: 'Those ownership rights belong to the policyowner, unless an irrevocable beneficiary must consent. The beneficiary is the person or interest paid at death.',
        },
        {
          text: 'The insurer, whenever the death benefit is paid in a lump sum.',
          why: 'Lump sum is how the contract pays if no other settlement option is chosen. The money is paid out. It is not kept because the insurer is the beneficiary.',
        },
        {
          text: 'The person or interest to whom the proceeds are paid when the insured dies.',
          why: 'That is the chapter definition. The beneficiary may be a person, a class, the estate, or an institution or other entity.',
          correct: true,
        },
      ],
    ),
  ],
  'c4-rights': [
    question(
      'c4q81',
      'When does a contingent beneficiary receive the policy proceeds?',
      [
        {
          text: 'Only if the beneficiaries above that level died before the insured. A contingent beneficiary receives nothing if the primary beneficiary is living when the insured dies.',
          why: 'The contingent, or secondary, claim waits for the higher beneficiary to have died first. A living primary beneficiary takes the proceeds.',
          correct: true,
        },
        {
          text: 'The contingent beneficiary shares the proceeds with a living primary beneficiary.',
          why: 'Contingent beneficiaries receive nothing if the primary beneficiary is living when the insured dies.',
        },
        {
          text: 'The contingent beneficiary is paid first, ahead of the primary beneficiary.',
          why: 'The primary beneficiary has the first claim. The contingent beneficiary has the next claim only if the beneficiaries above that level died first.',
        },
        {
          text: 'The contingent beneficiary is paid only when the primary beneficiary survives the insured.',
          why: 'Survival of the primary beneficiary shuts out the contingent beneficiary. The contingent claim arises when the higher beneficiaries died before the insured.',
        },
      ],
    ),
    question(
      'c4q82',
      'When is the tertiary beneficiary paid?',
      [
        {
          text: 'Whenever the primary beneficiary is alive.',
          why: 'A living primary beneficiary has the first claim. The tertiary beneficiary is not paid in that case.',
        },
        {
          text: 'Only if both the primary and the contingent beneficiaries die before the insured. The tertiary beneficiary is third in line.',
          why: 'The chapter places the tertiary beneficiary third and limits payment to the case in which both higher beneficiaries die first.',
          correct: true,
        },
        {
          text: 'The tertiary beneficiary shares equally with the primary beneficiary at the insured death.',
          why: 'Equal shares apply when more than one individual is named for stated percentages. Succession pays the tertiary beneficiary only after both higher beneficiaries have died first.',
        },
        {
          text: 'The tertiary beneficiary is another name for the policyowner.',
          why: 'The policyowner holds the ownership rights. The tertiary beneficiary is a third-level payee of the proceeds.',
        },
      ],
    ),
    question(
      'c4q83',
      'How may a revocable beneficiary designation be changed?',
      [
        {
          text: 'It cannot be changed without written consent from the beneficiary.',
          why: 'Written consent is required for an irrevocable designation. A revocable designation may be changed without the consent or knowledge of the beneficiary.',
        },
        {
          text: 'It can be changed only after the insured dies.',
          why: 'After death, the proceeds are paid according to the designation then in effect. A revocable designation may be changed at any time while the owner has that right.',
        },
        {
          text: 'It may be changed at any time without the consent or knowledge of the beneficiary.',
          why: 'Revocable means the owner can make that change alone. An irrevocable beneficiary, by contrast, has a vested interest.',
          correct: true,
        },
        {
          text: 'It can be changed only by the insurer during the first 2 years.',
          why: 'The first 2 years are the period in which the insurer may contest inaccurate application statements. They do not limit a revocable beneficiary change.',
        },
      ],
    ),
    question(
      'c4q84',
      'What kind of interest does an irrevocable beneficiary have?',
      [
        {
          text: 'An interest the owner can remove at any time without telling the beneficiary.',
          why: 'That describes a revocable designation. An irrevocable beneficiary has a vested interest.',
        },
        {
          text: 'The right to choose the premium mode and extend the time for payment.',
          why: 'Premium mode is stated in the policy, and an agent may not extend the time for payment. An irrevocable beneficiary interest is a vested interest in the designation.',
        },
        {
          text: 'Full ownership, including the duty to pay the premiums.',
          why: 'The policyowner pays the premiums and holds the ownership rights. The irrevocable beneficiary has a vested interest, not the owner duty to pay premiums.',
        },
        {
          text: 'A vested interest. The designation may not be changed without written consent from that beneficiary.',
          why: 'The vested interest is why consent is required. The owner also cannot borrow against the cash value or assign the policy without that beneficiary agreement.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q85',
      'When a divorce decree is rendered and either party owns a life policy or an annuity, what must the court include?',
      [
        {
          text: 'An acknowledgement that the policyowner has reviewed and updated the beneficiaries when appropriate, has affirmed that the listed beneficiaries are the intended ones after the divorce, and understands that if no changes are made, the beneficiaries currently listed will receive any funds the insurer pays.',
          why: 'The chapter requires that acknowledgement in the decree. It does not say the divorce itself rewrites the beneficiary list.',
          correct: true,
        },
        {
          text: 'An order that divorce automatically replaces every beneficiary with the estate of the insured.',
          why: 'The estate receives proceeds when no beneficiary is named or none is alive. The divorce rule instead requires an acknowledgement about the beneficiaries who are listed.',
        },
        {
          text: 'An order that the insurer surrender the policy for its cash value on the date of the decree.',
          why: 'Cash surrender is a nonforfeiture option the owner can choose. The divorce provision is about acknowledging the beneficiary designation.',
        },
        {
          text: 'A rule that an irrevocable designation becomes revocable without written consent.',
          why: 'An irrevocable designation may not be changed without written consent from the beneficiary. The divorce acknowledgement does not cancel that vested interest.',
        },
      ],
    ),
    question(
      'c4q86',
      'The insured and the primary beneficiary die in the same accident, and there is not enough evidence of who died first. How does the Uniform Simultaneous Death Law treat the proceeds?',
      [
        {
          text: 'It treats the proceeds as if the insured died first, so the estate of the primary beneficiary is paid.',
          why: 'The statute does the reverse. It treats the proceeds as if the primary beneficiary died first.',
        },
        {
          text: 'It treats the proceeds as if the primary beneficiary died first.',
          why: 'That presumption applies when there is not enough evidence of who died first. The proceeds can then follow the next beneficiary level.',
          correct: true,
        },
        {
          text: 'It splits the proceeds equally between the two estates.',
          why: 'No equal split of the two estates is stated. The law treats the primary beneficiary as having died first.',
        },
        {
          text: 'It pays the insurer because the order of deaths cannot be proved.',
          why: 'The insurer does not keep the proceeds for lack of proof. The Uniform Simultaneous Death Law supplies a presumption that the primary beneficiary died first.',
        },
      ],
    ),
    question(
      'c4q87',
      'How does the Common Disaster Clause go further than the Uniform Simultaneous Death Law?',
      [
        {
          text: 'It pays the primary beneficiary whenever that person survives the insured by any length of time.',
          why: 'Short survival can still be disregarded. The clause can presume the primary beneficiary died first even after a stated number of days.',
        },
        {
          text: 'It applies only when a court has proof that the primary beneficiary died first.',
          why: 'The simultaneous-death law is the rule for insufficient evidence. The Common Disaster Clause presumes the primary beneficiary died first even if that person outlived the insured for a stated number of days.',
        },
        {
          text: 'Even if the beneficiary outlived the insured by a stated number of days, the primary beneficiary is presumed to have died first, so the proceeds go to the contingent beneficiary or, if none is named, to the estate.',
          why: 'That further presumption is the point of the clause. Insurers commonly use 14 to 30 days as the stated period.',
          correct: true,
        },
        {
          text: 'It cancels the policy and refunds the premium to the owner estate.',
          why: 'A premium refund is the suicide limit within 2 years of the effective date. The Common Disaster Clause redirects the proceeds. It does not cancel the policy.',
        },
      ],
    ),
    question(
      'c4q88',
      'What period do insurers commonly use in a common disaster clause?',
      [
        {
          text: '10 days, the ordinary free-look period.',
          why: 'The usual free look is 10 days from receipt. Insurers commonly use 14 to 30 days for a common disaster clause.',
        },
        {
          text: '90 days, the usual period in which accidental death must occur.',
          why: 'Accidental death must usually occur within 90 days of the accident. The common disaster period insurers commonly use is 14 to 30 days.',
        },
        {
          text: '2 years, matching the suicide provision and incontestability.',
          why: 'Two years is the suicide period and the incontestability period. It is not the common disaster period.',
        },
        {
          text: '14 to 30 days.',
          why: 'The chapter says insurers commonly use 14 to 30 days. The course example pays the contingent beneficiary when the primary beneficiary dies 4 days later.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q89',
      'James dies immediately. Maggie, the primary beneficiary, dies 4 days later. Ben is the contingent beneficiary. Who is paid in the course example?',
      [
        {
          text: 'Ben, the contingent beneficiary, is paid.',
          why: 'Under the common disaster example, The death of Maggie 4 days later does not keep the proceeds for her. Ben is paid.',
          correct: true,
        },
        {
          text: 'Maggie estate is paid because she lived 4 days longer than James.',
          why: 'The Common Disaster Clause can presume the primary beneficiary died first even after survival for a stated number of days. In the example, Ben is paid.',
        },
        {
          text: 'The proceeds are forfeited because 4 days is shorter than the grace period.',
          why: 'The grace period, usually 30 or 31 days or one month, deals with unpaid premium. It does not forfeit a death claim in this example. Ben is paid.',
        },
        {
          text: 'The insurer keeps the proceeds because a contingent beneficiary is ignored after a common disaster.',
          why: 'The clause sends the proceeds to the contingent beneficiary, or to the estate if none is named. Ben is the contingent beneficiary and is paid.',
        },
      ],
    ),
    question(
      'c4q90',
      'What does the spendthrift clause protect beneficiaries against?',
      [
        {
          text: 'A contest of the application during the first 2 years the policy is in force.',
          why: 'Incontestability limits the insurer. The spendthrift clause protects beneficiaries from creditor claims and from reckless spending of the proceeds.',
        },
        {
          text: 'Claims of their creditors, and it also keeps a beneficiary from spending the proceeds recklessly.',
          why: 'Those are the two protections the chapter names. The clause applies to proceeds that have not yet been paid.',
          correct: true,
        },
        {
          text: 'Loss of the right to take the proceeds as a lump sum of their own choosing.',
          why: 'The beneficiary under this clause cannot choose a different settlement option. The clause purpose is creditor protection and control of reckless spending, not a general tax rule.',
        },
        {
          text: 'The need to pay premiums if the beneficiary becomes disabled.',
          why: 'Waiver of premium applies to the insured total disability. The payor benefit can waive premiums if the payor is disabled or dies. Neither is the spendthrift clause.',
        },
      ],
    ),
    question(
      'c4q91',
      'In what form are benefits paid when a spendthrift clause applies?',
      [
        {
          text: 'Only as one cash payment, which the beneficiary may then assign.',
          why: 'Lump sum is the usual settlement mode when no other option is chosen. Under the spendthrift clause, benefits are paid in fixed-period or fixed-amount installments, and the beneficiary cannot assign them.',
        },
        {
          text: 'As interest-only payments, with the principal already released to the beneficiary.',
          why: 'Interest only leaves the proceeds with the insurer and pays interest. The spendthrift clause uses fixed-period or fixed-amount installments.',
        },
        {
          text: 'In fixed-period or fixed-amount installments.',
          why: 'The chapter specifies those two installment forms. The beneficiary cannot choose a different settlement option.',
          correct: true,
        },
        {
          text: 'As paid-up additions bought with policy dividends.',
          why: 'Paid-up additions are a dividend option. They are not the payment form required by a spendthrift clause.',
        },
      ],
    ),
    question(
      'c4q92',
      'Under a spendthrift clause, what is the beneficiary not allowed to do with the proceeds?',
      [
        {
          text: 'Receive any installment at all.',
          why: 'Installments are how the benefit is paid. The limits are on choosing another settlement option and on assigning or borrowing the proceeds.',
        },
        {
          text: 'Be under age 21.',
          why: 'A stated age such as 21 appears in the payor benefit and as an expiry age for children term. It is not a spendthrift eligibility rule.',
        },
        {
          text: 'Be paid until the lapsed policy is reinstated.',
          why: 'Reinstatement restores a lapsed policy. The spendthrift clause restricts what the beneficiary can do with proceeds, not whether a lapsed policy must be reinstated first.',
        },
        {
          text: 'Choose a different settlement option, or assign or borrow the proceeds.',
          why: 'The clause closes those three actions. It protects proceeds that have not yet been paid from creditors of the beneficiary or the policyowner.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q93',
      'Which proceeds does the spendthrift clause protect from creditors?',
      [
        {
          text: 'Proceeds that have not yet been paid. The protection runs against creditors of the beneficiary or the policyowner.',
          why: 'The chapter limits the clause to unpaid proceeds and names both sets of creditors.',
          correct: true,
        },
        {
          text: 'Only cash value the insured has already borrowed while alive.',
          why: 'A policy loan is a debt against cash value, deducted from the death benefit if it remains unpaid. The spendthrift clause protects unpaid proceeds from creditors.',
        },
        {
          text: 'Premiums that are still inside the grace period.',
          why: 'The grace period lets the owner pay an overdue premium before lapse. It is not the creditor protection of the spendthrift clause.',
        },
        {
          text: 'Dividends that have already been mailed to the owner as cash.',
          why: 'The cash dividend option sends a check to the owner. The spendthrift clause deals with policy proceeds that have not yet been paid to the beneficiary.',
        },
      ],
    ),
  ],
  'c4-loans': [
    question(
      'c4q94',
      'Which policies have a policy loan option, and how much may the owner borrow?',
      [
        {
          text: 'Every term policy, up to the face amount.',
          why: 'The policy loan option is found only in policies that contain cash value. Term insurance is not described as having that loan option.',
        },
        {
          text: 'Only policies that contain cash value. The owner may borrow an amount equal to the available cash value.',
          why: 'Both the limit on which policies and the amount that may be borrowed are stated together.',
          correct: true,
        },
        {
          text: 'Only universal life policies, and only by a partial surrender.',
          why: 'Universal life allows a partial withdrawal, or partial surrender, of cash value. The chapter says a partial surrender is not the same as a policy loan, and policy loans exist in cash-value policies.',
        },
        {
          text: 'Any policy, but only up to the most recent dividend.',
          why: 'Dividends are paid only on participating policies and are not the loan limit. The owner may borrow an amount equal to the available cash value.',
        },
      ],
    ),
    question(
      'c4q95',
      'When can a policy loan cause a lapse, and what notice is required first?',
      [
        {
          text: 'Any loan lapses the policy on the day it is taken, with no notice.',
          why: 'A loan does not lapse the policy unless the loan and accrued interest exceed the available cash value, and 30 days written notice is required before that lapse.',
        },
        {
          text: 'The policy lapses when the loan is still below the cash value, after a 6-month notice.',
          why: 'Indebtedness below the loan value is not a forfeiture ground. Six months is the maximum deferral of a loan request, not the lapse notice, which is 30 days.',
        },
        {
          text: 'The policy does not lapse unless the loan and accrued interest exceed the available cash value. The insurer must give 30 days written notice before that lapse.',
          why: 'Both the excess-debt test and the 30-day written notice are required before a loan lapse.',
          correct: true,
        },
        {
          text: 'Notice is required only when the loan is used to pay the premium.',
          why: 'A loan that pays a due premium must be honored immediately. The 30-day written notice applies before a lapse caused by a loan and interest that exceed the cash value.',
        },
      ],
    ),
    question(
      'c4q96',
      'How long may the insurer defer a request for a policy loan?',
      [
        {
          text: 'Up to 30 days, with no exception for a premium loan.',
          why: 'Thirty days is the written notice before a loan lapse. A loan request may be deferred for up to 6 months, unless the loan pays the policy premium.',
        },
        {
          text: 'Up to 2 years, the same period as incontestability.',
          why: 'Two years is the incontestability period. The deferral of a loan request is up to 6 months, with an exception for a premium loan.',
        },
        {
          text: 'The insurer may not defer any loan, including a loan the owner wants for personal use.',
          why: 'The insurer may defer a loan request for up to 6 months. The exception is a loan used to pay the policy premium, which must be honored immediately.',
        },
        {
          text: 'Up to 6 months, unless the loan is to pay the policy premium.',
          why: 'That exception is stated with the deferral. A loan to pay a due premium cannot be held back the way another loan request can.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q97',
      'How does income tax apply to a policy loan?',
      [
        {
          text: 'Policy loans are not subject to income taxation.',
          why: 'The chapter states that policy loans are not subject to income taxation. Outstanding loans and accrued interest are still deducted from the proceeds at death.',
          correct: true,
        },
        {
          text: 'The entire loan is taxed as ordinary income when it is taken.',
          why: 'Ordinary income treatment is described for cash-surrender value that exceeds premiums paid, and for interest credited on accumulated dividends. Policy loans are not subject to income taxation.',
        },
        {
          text: 'A policy loan is taxed in the same way as interest credited on dividends that are left to accumulate.',
          why: 'Interest on accumulated dividends is taxable when it is credited. A policy loan is not subject to income taxation.',
        },
        {
          text: 'Only loans on participating policies escape income tax.',
          why: 'Participating policies are the ones that may pay dividends. The chapter says policy loans are not subject to income taxation, without limiting that statement to participating policies.',
        },
      ],
    ),
    question(
      'c4q98',
      'How is loan value computed?',
      [
        {
          text: 'Loan value equals the face amount of the policy.',
          why: 'The face amount is the principal amount. Loan value equals cash value minus unpaid loans and interest.',
        },
        {
          text: 'Loan value equals cash value minus unpaid loans and interest.',
          why: 'That formula is the chapter definition of loan value. Debt still outstanding at death reduces the death benefit.',
          correct: true,
        },
        {
          text: 'Loan value equals premiums paid plus the death benefit.',
          why: 'The return of premium rider can add premiums paid to the face amount if the insured dies before a stated age. That sum is not loan value.',
        },
        {
          text: 'Loan value equals the latest dividend plus one year of term insurance.',
          why: 'One-year term is a dividend option. Loan value is cash value minus unpaid loans and interest.',
        },
      ],
    ),
    question(
      'c4q99',
      'Is the automatic premium loan provision required, and what does it cost to add?',
      [
        {
          text: 'It is required on every term policy, and it always costs an extra premium.',
          why: 'The provision is not required. It is commonly added at no extra charge on cash-value policies, not described as a required term-policy charge.',
        },
        {
          text: 'It is forbidden once a policy has cash value.',
          why: 'Cash value is what makes a policy loan possible. Automatic premium loan is commonly added on cash-value policies.',
        },
        {
          text: 'It is not required, but it is commonly added at no extra charge on cash-value policies.',
          why: 'The owner usually must elect it in writing. The chapter distinguishes that common, no-extra-charge addition from a required provision.',
          correct: true,
        },
        {
          text: 'It replaces reinstatement and is available only after the policy is surrendered.',
          why: 'A surrendered policy cannot be reinstated. Automatic premium loan lends an unpaid premium from cash value at the end of the grace period.',
        },
      ],
    ),
    question(
      'c4q100',
      'How does the owner usually put automatic premium loan into effect?',
      [
        {
          text: 'It attaches to every cash-value policy, so no election is needed.',
          why: 'The provision is not required. The owner usually must elect it in writing.',
        },
        {
          text: 'The beneficiary elects it after the insured dies.',
          why: 'If the owner did not choose a settlement option, the beneficiary may choose one at death. Automatic premium loan is an owner election, usually in writing, while the policy is in force.',
        },
        {
          text: 'The agent may elect it orally after delivery.',
          why: 'Most modification clauses say no agent may make alterations or agreements. The owner usually must elect automatic premium loan in writing.',
        },
        {
          text: 'The owner usually must elect it in writing.',
          why: 'That written election is the usual way the provision is added. It is commonly available at no extra charge on cash-value policies.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q101',
      'The premium is still unpaid at the end of the grace period, and automatic premium loan is in effect. What does the insurer do?',
      [
        {
          text: 'The insurer lends the premium from the cash value and charges interest. If that loan is not repaid, it is subtracted from the death benefit.',
          why: 'The loan is made at the end of the grace period. Unpaid automatic premium loans reduce the death benefit, just as other unpaid loans do.',
          correct: true,
        },
        {
          text: 'The insurer must surrender the policy for its cash value.',
          why: 'Cash surrender ends coverage and cannot be reinstated. Automatic premium loan uses cash value to pay the premium instead of surrendering the policy.',
        },
        {
          text: 'The insurer waives the premium even though the insured is not disabled.',
          why: 'Waiver of premium requires the insured total disability, usually after a 6-month waiting period. Automatic premium loan is a loan, and it charges interest.',
        },
        {
          text: 'The insurer increases the face amount by the unpaid premium.',
          why: 'The unpaid loan is subtracted from the death benefit if it is not repaid. It is not added to the face amount.',
        },
      ],
    ),
    question(
      'c4q102',
      'When must the insurer honor a loan that pays a premium then due?',
      [
        {
          text: 'After a deferral of up to 6 months, the same as any other loan request.',
          why: 'Other loan requests may be deferred for up to 6 months. A loan to pay a due premium is the exception and must be honored immediately.',
        },
        {
          text: 'Immediately. Unlike other loans, a loan to pay a due premium must be honored immediately.',
          why: 'The chapter draws that contrast. The 6-month deferral does not apply to the premium loan.',
          correct: true,
        },
        {
          text: 'Only after 30 days written notice that the policy has already lapsed.',
          why: 'Thirty days written notice comes before a lapse caused by a loan and interest that exceed the cash value. A premium loan must be honored immediately.',
        },
        {
          text: 'Only if the owner also takes a partial surrender of a universal life policy.',
          why: 'A partial surrender is not a policy loan. A loan that pays a due premium must be honored immediately on its own.',
        },
      ],
    ),
    question(
      'c4q103',
      'How is a universal life partial withdrawal different from a policy loan?',
      [
        {
          text: 'It is a policy loan, so it cannot reduce the death benefit and it cannot be taxable.',
          why: 'Policy loans are not subject to income taxation, but a partial surrender is not the same as a policy loan. The death benefit is reduced by the amount withdrawn, and interest earned on the withdrawn value may be taxable depending on the plan.',
        },
        {
          text: 'It increases the death benefit by the amount withdrawn.',
          why: 'The death benefit is reduced by the amount withdrawn. It is not increased.',
        },
        {
          text: 'A partial surrender is not the same as a policy loan. There may be a charge, there are usually limits on how much and how often, interest earned on the withdrawn value may be taxable depending on the plan, and the death benefit is reduced by the amount withdrawn.',
          why: 'The chapter lists those features of a partial withdrawal, or partial surrender, and states that it is not a policy loan.',
          correct: true,
        },
        {
          text: 'It is available on term insurance and is paid as an automatic premium loan.',
          why: 'Automatic premium loan is a cash-value loan of an unpaid premium. A partial withdrawal is a universal life feature and is not that loan.',
        },
      ],
    ),
  ],
  'c4-riders': [
    question(
      'c4q104',
      'Must the insured always pay an extra premium for a rider that adds a benefit?',
      [
        {
          text: 'Yes. A rider with no extra premium is void.',
          why: 'Riders sometimes require an additional premium. The chapter does not say a rider without that charge is void.',
        },
        {
          text: 'Riders are settlement options, so they never change the benefits in the policy.',
          why: 'Settlement options pay proceeds. Riders are written modifications attached to a policy, and they provide benefits that are not in the original policy.',
        },
        {
          text: 'Riders replace the entire contract and always lower the premium.',
          why: 'The entire contract already includes any riders or amendments. A rider tailors the policy and sometimes costs an additional premium. It does not always lower the premium.',
        },
        {
          text: 'No. Riders are written modifications attached to a policy. They provide benefits not in the original policy, sometimes for an additional premium, and they tailor the policy to the insured.',
          why: 'The extra premium is possible, not automatic. Attachment in writing is how the rider is added.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q105',
      'What does waiver of cost of insurance, also called waiver of monthly deductions, do in a universal life policy?',
      [
        {
          text: 'If the insured is disabled, it waives the cost of insurance and other expenses. It does not waive the cost of premiums needed to accumulate cash values.',
          why: 'The rider is found in universal life and is limited to the cost of insurance and other expenses. Cash-value premiums stay in place.',
          correct: true,
        },
        {
          text: 'It waives every premium, including amounts needed to build cash value, on any whole life policy.',
          why: 'Waiving the policy premium during the insured total disability is waiver of premium. Waiver of cost of insurance is the universal life version and leaves cash-value premiums unwaived.',
        },
        {
          text: 'It pays a monthly income equal to a percentage of the face amount.',
          why: 'A monthly income based on a percentage of the face amount is the disability income rider. Waiver of monthly deductions does not pay that income.',
        },
        {
          text: 'It waives premiums on a juvenile policy when the payor dies.',
          why: 'That is the payor benefit rider. Waiver of cost of insurance applies when the insured on a universal life policy is disabled.',
        },
      ],
    ),
    question(
      'c4q106',
      'What does the disability income rider provide, and how is the income normally set?',
      [
        {
          text: 'It pays a monthly income and leaves the premium due.',
          why: 'The insurer waives the premiums and pays the monthly income. The premium is not left due.',
        },
        {
          text: 'The insurer waives the premiums and pays a monthly income. The amount is normally a percentage of the face amount of the policy the rider is attached to.',
          why: 'Both the waiver and the income are part of this rider, and the income is tied to the face amount of that policy.',
          correct: true,
        },
        {
          text: 'It pays the full face amount once and does not waive any premium.',
          why: 'The face amount is the death benefit of the base policy. Disability income pays a monthly income and waives premiums. It does not pay the face amount as a single disability benefit.',
        },
        {
          text: 'It waives only the cost of insurance and does not pay income.',
          why: 'That describes waiver of cost of insurance, or waiver of monthly deductions, on universal life. Disability income includes a monthly income.',
        },
      ],
    ),
    question(
      'c4q107',
      'On which policies is the payor benefit rider mainly used, and who is the payor?',
      [
        {
          text: 'It is used mainly when the insured pays the premiums on an adult policy covering that same insured.',
          why: 'Waiver of premium fits total disability of the insured. The payor benefit is used mainly with juvenile policies, and the payor is usually a parent or guardian.',
        },
        {
          text: 'It is another name for the spouse term rider.',
          why: 'Spouse term covers the spouse for a limited time and a specified amount, and it usually expires at age 65. The payor benefit waives premiums. It does not insure the spouse for a term period.',
        },
        {
          text: 'It is used mainly with juvenile policies. The payor is usually a parent or guardian. It is also used when the owner and the insured are different people.',
          why: 'The chapter gives both the juvenile use and the third-party case in which the owner and the insured differ.',
          correct: true,
        },
        {
          text: 'It covers every child of the family for one premium based on an average number of children.',
          why: 'That is the children term rider. The payor benefit waives premiums. It does not insure the children for one family premium.',
        },
      ],
    ),
    question(
      'c4q108',
      'If the payor is disabled or dies, what does the payor benefit rider waive, and until when?',
      [
        {
          text: 'It waives premiums only while the child is totally disabled, and only for 90 days.',
          why: 'Ninety days is the usual period in which death must occur for the accidental death rider. The payor benefit looks at the payor disability of at least 6 months, or the death of the payor, and waives premiums until a stated age such as 21.',
        },
        {
          text: 'It waives premiums for the entire life of the payor, with no stated age for the minor.',
          why: 'The waiver runs until the minor reaches a stated age, such as 21. It is not described as lasting for the entire life of the payor.',
        },
        {
          text: 'It pays the child a percentage of the face amount and does not waive premium.',
          why: 'A percentage of the face amount is the usual disability income benefit. The payor benefit waives premiums.',
        },
        {
          text: 'If the payor is disabled for at least 6 months or dies, the insurer waives the premiums until the minor reaches a stated age, such as 21.',
          why: 'Either the 6-month disability or the death of the payor can trigger the waiver, and the stated age ends it.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q109',
      'Whom does the other insured rider cover?',
      [
        {
          text: 'One or more family members other than the insured. It is usually level term on the base policy, and it is also called a family rider.',
          why: 'The other insured rider adds those family members. It is distinct from the family term rider, which combines spouse term and children term.',
          correct: true,
        },
        {
          text: 'Only the insured, for a multiple of the face amount if death is accidental.',
          why: 'A multiple of the face amount for accidental death is the accidental death rider. The other insured rider covers family members other than the insured.',
        },
        {
          text: 'Only the policyowner, for disability income.',
          why: 'Disability income waives the premium and pays a monthly income based on the face amount. It is not the other insured rider.',
        },
        {
          text: 'The insurer, as the beneficiary of last resort.',
          why: 'If no beneficiary is alive, or none was named, the estate of the insured receives the proceeds. The insurer is not named as that payee.',
        },
      ],
    ),
    question(
      'c4q110',
      'How long does a spouse term rider usually last?',
      [
        {
          text: 'It is permanent insurance on the spouse and has no expiry age.',
          why: 'Spouse term covers the spouse for a limited time and a specified amount. It usually expires when the spouse reaches 65.',
        },
        {
          text: 'It covers the spouse for a limited time and a specified amount, and it usually expires when the spouse reaches 65.',
          why: 'Both the limited term and the usual age 65 expiry are stated for this rider.',
          correct: true,
        },
        {
          text: 'It usually expires when the spouse reaches 40.',
          why: 'Age 40 is the usual expiry age of the guaranteed insurability rider. Spouse term usually expires at 65.',
        },
        {
          text: 'It expires when the youngest child reaches 18 or 21.',
          why: 'Children term usually expires at 18 or 21. Spouse term is tied to the spouse and usually expires at 65.',
        },
      ],
    ),
    question(
      'c4q111',
      'Which children can be added on a children term rider?',
      [
        {
          text: 'Only adult children who are already natural children of the insured.',
          why: 'The rider adds natural, adopted, or stepchildren. It is term insurance for a limited time, usually expiring at 18 or 21, not a rider limited to adults.',
        },
        {
          text: 'Only children who first prove insurability, and the coverage must be whole life.',
          why: 'Most of these riders let the child convert to permanent insurance without evidence of insurability. The rider itself is term insurance.',
        },
        {
          text: 'Natural, adopted, or stepchildren, for a limited time and a specified amount.',
          why: 'The chapter includes all three groups of children and describes the coverage as limited in time and amount.',
          correct: true,
        },
        {
          text: 'Any child, but only if that child is the payor of the policy.',
          why: 'The payor on a juvenile policy is usually a parent or guardian. Children term insures the children. It does not require the child to be the payor.',
        },
      ],
    ),
    question(
      'c4q112',
      'What do most children term riders allow the child to do, and when does the term usually end?',
      [
        {
          text: 'The child may convert only by providing evidence of insurability, and the term lasts to age 65.',
          why: 'Most riders allow conversion to a permanent policy without evidence of insurability. The term usually expires at 18 or 21, not at 65.',
        },
        {
          text: 'The child cannot convert, and the term must continue for the entire life of the child.',
          why: 'Conversion without evidence of insurability is allowed on most of these riders, and the term usually expires at 18 or 21.',
        },
        {
          text: 'Conversion is allowed only after the child has been disabled for 6 months.',
          why: 'Six months is the usual waiting period for waiver of premium and the disability period for the payor benefit. Children term conversion does not depend on that disability.',
        },
        {
          text: 'Most riders let the child convert to a permanent policy without evidence of insurability. The term usually expires at 18 or 21.',
          why: 'The rider is term insurance with that usual expiry, plus the conversion right on most riders.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q113',
      'What happens to the premium on a children term rider when another child is included?',
      [
        {
          text: 'One premium covers all the children, and the premium does not change when more children are included.',
          why: 'The chapter states both the single premium and the fact that it stays the same when more children are added.',
          correct: true,
        },
        {
          text: 'The premium is recalculated and increased for each new child.',
          why: 'The premium does not change when more children are included. One premium covers all of them.',
        },
        {
          text: 'The rider ends when a new child is born.',
          why: 'Adding a child does not terminate the rider. The same premium continues to cover the children.',
        },
        {
          text: 'Each child must have a separate policy and a separate premium.',
          why: 'One premium covers all the children. Separate policies, each with its own premium, are not how this rider is priced.',
        },
      ],
    ),
    question(
      'c4q114',
      'What is the premium for a children term rider based on?',
      [
        {
          text: 'The attained age of the oldest child only, with a new premium at every birth.',
          why: 'Attained-age pricing is used for coverage added under guaranteed insurability. The children term premium is based on an average number of children and does not change when more children are included.',
        },
        {
          text: 'An average number of children.',
          why: 'One premium, based on that average, covers all the children.',
          correct: true,
        },
        {
          text: 'The face amount of a spouse term rider that continues for the spouse entire life.',
          why: 'Spouse term usually expires at age 65 and covers a specified amount for a limited time. It does not set the children term premium.',
        },
        {
          text: 'The number of dividends the base policy has paid.',
          why: 'Dividends are a return of excess premium on participating policies. They are not the basis of the children term premium.',
        },
      ],
    ),
    question(
      'c4q115',
      'If the insured never returns to work, does waiver of premium stop?',
      [
        {
          text: 'Yes. The waiver stops after 6 months even if the disability continues.',
          why: 'Most insurers impose a 6-month waiting period. If the insured is still disabled then, premiums paid from the start of the disability are refunded, and the company keeps waiving them if the insured never returns to work.',
        },
        {
          text: 'The rider converts the policy into children term on the insured children.',
          why: 'Children term is a separate rider. Waiver of premium keeps the existing coverage in force by waiving premiums.',
        },
        {
          text: 'No. If the insured never returns to work, the company keeps waiving the premiums, and coverage stays in force until the insured can return to work.',
          why: 'The waiver continues for a disability that does not end. The rider usually expires at age 65.',
          correct: true,
        },
        {
          text: 'The insurer pays only a refund of premium, using the same limit as suicide within 2 years.',
          why: 'A refund of premium is the suicide limit within 2 years after the effective date. Waiver of premium keeps the policy in force by waiving premiums during total disability.',
        },
      ],
    ),
    question(
      'c4q116',
      'When a family term rider is added to a whole life policy, what coverage do the spouse and the children receive?',
      [
        {
          text: 'Waiver of premium on the spouse and disability income on each child.',
          why: 'Those are disability riders. Family term, added to whole life, provides level term on the spouse and all of the children.',
        },
        {
          text: 'Lifetime term on the spouse and whole life on each child from the start.',
          why: 'Spouse term usually expires at 65. Children term is term insurance and usually expires at 18 or 21, with conversion available on most riders. Family term provides level term, not lifetime whole life, on the spouse and the children.',
        },
        {
          text: 'A separate permanent policy for each child, each with its own premium.',
          why: 'Children term uses one premium for all the children. Family term combines spouse term and children term as level term.',
        },
        {
          text: 'Level term on the spouse and all of the children. The family term rider combines spouse term and children term.',
          why: 'Added to a whole life policy, that combination is level term on the spouse and all of the children. The other insured rider, also called a family rider, is the separate rider that covers other family members, usually as level term.',
          correct: true,
        },
      ],
    ),
  ],
  'c4-benefit': [
    question(
      'c4q117',
      'What does the accidental death rider pay, and how soon must death occur?',
      [
        {
          text: 'A multiple of the face amount if death is the result of an accident as the policy defines it. Death must usually occur within 90 days of the accident.',
          why: 'The rider uses the policy definition of accident and the usual 90-day period. The benefit is a multiple of the face amount.',
          correct: true,
        },
        {
          text: 'The cash value, payable whenever death occurs from any illness.',
          why: 'The rider adds no cash value. Death from a health problem or disability is not accidental death under this rider.',
        },
        {
          text: 'A refund of premium if death occurs within 2 years of the effective date.',
          why: 'That is the suicide provision. Accidental death pays a multiple of the face amount when the policy definition and the usual 90-day period are met.',
        },
        {
          text: 'All premiums paid, plus the face amount, if death occurs before a stated age such as 60.',
          why: 'That is the return of premium rider, which uses increasing term. It is not the accidental death rider.',
        },
      ],
    ),
    question(
      'c4q118',
      'What multiple does accidental death normally pay, and what do some policies pay instead?',
      [
        {
          text: 'Normally the face amount only, with some policies paying one-half of the face amount.',
          why: 'The benefit is normally two times the face amount. Some policies pay three times. One-half is a joint-and-survivor settlement fraction, not this rider.',
        },
        {
          text: 'Normally two times the face amount, called double indemnity. Some policies pay three times the face amount, called triple indemnity.',
          why: 'The chapter gives both multiples and both names. The rider often expires at 65.',
          correct: true,
        },
        {
          text: 'Normally three times the face amount, and no policy pays only two times.',
          why: 'Three times is the less common triple indemnity. The normal benefit is two times the face amount.',
        },
        {
          text: 'A percentage of the face amount paid each month while the insured is disabled.',
          why: 'That monthly percentage describes disability income. Accidental death is a multiple of the face amount after a covered accident.',
        },
      ],
    ),
    question(
      'c4q119',
      'Which deaths are outside the accidental death rider, and does the base policy still cover them?',
      [
        {
          text: 'Only fare-paying airline deaths are outside the rider, and the base policy excludes them too.',
          why: 'Most policies cover a fare-paying passenger or a pilot on a regularly scheduled airline. Accidental death excludes death from a health problem or disability, self-inflicted injuries, war, or hazardous hobbies or avocations.',
        },
        {
          text: 'Any death within 90 days is outside the rider, and the base policy pays nothing.',
          why: 'Ninety days is the usual window in which a covered accidental death must occur. It is not a list of excluded causes, and the base policy can still pay.',
        },
        {
          text: 'Death from a health problem or disability, self-inflicted injuries, war, or hazardous hobbies or avocations is not accidental death. Those deaths are covered by the base policy unless they are specifically excluded.',
          why: 'The rider withholds its multiple for those causes. The base policy remains the source of coverage unless a specific exclusion applies.',
          correct: true,
        },
        {
          text: 'Death while on active duty is always paid as triple indemnity.',
          why: 'War deaths are not accidental death under this rider. Most policies issued today do not exclude military service, but that does not turn a military death into triple indemnity.',
        },
      ],
    ),
    question(
      'c4q120',
      'Besides the cause of death, what limits apply to the accidental death rider?',
      [
        {
          text: 'It builds cash value, lasts for the insured entire life, and applies to paid-up additions.',
          why: 'The rider adds no cash value, it often expires at 65, and it applies only to the base face amount, not to extra amounts bought with dividends.',
        },
        {
          text: 'It can be exercised every 3 years without evidence of insurability.',
          why: 'Purchase dates usually every 3 years belong to guaranteed insurability. They are not the limits on accidental death.',
        },
        {
          text: 'It pays nursing-home care from part of the face amount.',
          why: 'Long-term care living benefits can pay nursing-home or at-home care. Accidental death pays a multiple of the face amount after a covered accident.',
        },
        {
          text: 'It often expires at 65, it adds no cash value, and it applies only to the base face amount, not to extra amounts bought with dividends.',
          why: 'Those three limits sit alongside the accident definition and the usual 90-day requirement.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q121',
      'When can guaranteed insurability be used to buy more coverage?',
      [
        {
          text: 'At specified future dates, usually every 3 years, or at events such as marriage or the birth of a child, without evidence of insurability, for an additional premium.',
          why: 'The rider offers those dates and events. The added coverage is purchased for an additional premium and without new evidence of insurability.',
          correct: true,
        },
        {
          text: 'Only after the insured proves insurability again, and only once, at age 65.',
          why: 'The point of the rider is purchase without evidence of insurability. It usually expires at age 40, and the dates are usually every 3 years or at events such as marriage or birth.',
        },
        {
          text: 'Automatically, whenever the Consumer Price Index rises, with no extra premium.',
          why: 'An automatic increase tied to an inflation index such as the Consumer Price Index is the cost of living rider. Guaranteed insurability is an optional purchase for an additional premium.',
        },
        {
          text: 'Only during the 10-day free look, and the new coverage is free.',
          why: 'The free look lets the owner return the policy for a full refund of premium. It is not a purchase option for additional coverage.',
        },
      ],
    ),
    question(
      'c4q122',
      'How is coverage added under guaranteed insurability priced, and when does the rider usually expire?',
      [
        {
          text: 'It is priced at the original issue age and usually expires at 65.',
          why: 'Keeping issue-age values is an advantage of reinstatement. Guaranteed insurability additions are priced at attained age, and the rider usually expires at age 40.',
        },
        {
          text: 'The added coverage is priced at the insured attained age. The rider usually expires at age 40.',
          why: 'Attained-age pricing and the usual age 40 expiry are both stated for this rider.',
          correct: true,
        },
        {
          text: 'It is priced at the age of the spouse and usually expires when the spouse reaches 65.',
          why: 'Spouse term usually expires at 65 and covers a specified amount. Guaranteed insurability prices the new coverage at the insured attained age and usually expires at 40.',
        },
        {
          text: 'The premium never changes, because it is based on an average number of children.',
          why: 'An average number of children is the basis of the children term premium. Guaranteed insurability charges an additional premium at attained age.',
        },
      ],
    ),
    question(
      'c4q123',
      'Can another rider defeat guaranteed insurability, and what happens to premiums on the increases if the insured is disabled?',
      [
        {
          text: 'Any other rider can cancel it, and disability never waives the new premiums.',
          why: 'Other riders do not modify or defeat guaranteed insurability. If waiver of premium is also on the policy and the insured is disabled, premiums on the increases can be waived as well.',
        },
        {
          text: 'Waiver of premium defeats the rider, so no increase can be purchased while the insured is disabled.',
          why: 'Other riders do not modify or defeat it. Waiver of premium can waive the premiums on the increases when the insured is disabled.',
        },
        {
          text: 'Other riders do not modify or defeat it. If waiver of premium is also on the policy and the insured is disabled, premiums on the increases can be waived as well.',
          why: 'The rider stays available despite other riders, and the waiver can extend to the new premiums during disability.',
          correct: true,
        },
        {
          text: 'The cost of living rider replaces it and prices the increase at the original issue age.',
          why: 'The cost of living rider is a separate automatic increase tied to an inflation index. It is not described as replacing guaranteed insurability or as using issue-age rates.',
        },
      ],
    ),
    question(
      'c4q124',
      'How does the cost of living rider change the amount of insurance?',
      [
        {
          text: 'The owner must prove insurability before each increase, and the increase is optional.',
          why: 'Guaranteed insurability allows optional purchases without evidence of insurability. The cost of living rider increases the amount automatically, also without evidence of insurability.',
        },
        {
          text: 'It pays a multiple of the face amount if death occurs within 90 days of an accident.',
          why: 'That is the accidental death rider. The cost of living rider increases the amount of insurance by an inflation factor.',
        },
        {
          text: 'It refunds all premiums if the insured dies before a stated age such as 60.',
          why: 'Returning premiums through increasing term is the return of premium rider. The cost of living rider adjusts the amount of insurance.',
        },
        {
          text: 'It increases the amount of insurance automatically, without evidence of insurability, by a factor tied to an inflation index such as the Consumer Price Index.',
          why: 'The increase is automatic, and the index, such as the Consumer Price Index, supplies the factor.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q125',
      'What does the return of premium rider pay if the insured dies before the stated age?',
      [
        {
          text: 'It uses increasing term. On a whole life policy, the beneficiary receives the face amount plus an amount equal to all premiums previously paid. The rider usually expires at a specified age, such as 60.',
          why: 'The extra amount equals premiums already paid, and the benefit is conditioned on death before the stated age. Increasing term is the form the rider uses.',
          correct: true,
        },
        {
          text: 'It pays double the face amount if death occurs within 90 days of an accident.',
          why: 'Double indemnity is the usual accidental death benefit. Return of premium adds the premiums paid to the face amount on a whole life policy.',
        },
        {
          text: 'It pays only a refund of premium and withholds the face amount.',
          why: 'A premium refund without the death benefit is the suicide limit within 2 years. Return of premium pays the face amount plus the premiums previously paid.',
        },
        {
          text: 'It pays the cash surrender value and ends the policy.',
          why: 'Cash surrender is a nonforfeiture option. Return of premium is a death benefit paid with increasing term if the insured dies before the stated age.',
        },
      ],
    ),
    question(
      'c4q126',
      'When does an accelerated benefit, or living needs, rider pay part of the death benefit early?',
      [
        {
          text: 'Whenever the insured is totally disabled, including a disability that is not terminal.',
          why: 'The rider does not cover disability. Waiver of premium is the disability provision that waives premiums. The accelerated benefit requires a terminal illness expected to result in death within 2 years, or another qualifying condition.',
        },
        {
          text: 'If the insured is diagnosed with a terminal illness that will result in death within 2 years, or has another qualifying condition. The rider does not cover disability.',
          why: 'Early payment is tied to that terminal illness or to another qualifying condition. Disability by itself is excluded.',
          correct: true,
        },
        {
          text: 'Only if the insured dies within 90 days of an accident.',
          why: 'Ninety days is the usual accidental-death window. An accelerated benefit is paid while the insured is still alive.',
        },
        {
          text: 'At specified dates, usually every 3 years, so the owner can buy more insurance.',
          why: 'Those dates belong to guaranteed insurability. An accelerated benefit pays part of the existing death benefit early.',
        },
      ],
    ),
    question(
      'c4q127',
      'Why do many insurers make no charge for the accelerated benefit rider, and what are the funds for?',
      [
        {
          text: 'They charge nothing because the rider adds a second death benefit, and the funds may be spent for any purpose.',
          why: 'The rider is an advance of the death benefit, not a second benefit. The funds are for medical and nursing home expenses from the illness.',
        },
        {
          text: 'They charge a surrender fee because the policy must be given up, and the beneficiary receives nothing later.',
          why: 'A surrender charge applies when a policy or annuity is surrendered for cash value. The remainder of an accelerated benefit is paid to the beneficiary at death.',
        },
        {
          text: 'Many insurers do not charge because the rider is an advance of the death benefit. The funds are for medical and nursing home expenses from the illness, and the remainder is paid to the beneficiary at death.',
          why: 'The lack of a charge follows from the advance. The purpose of the funds and the later payment of the remainder are both stated.',
          correct: true,
        },
        {
          text: 'They charge nothing only when the payment is a dividend used to reduce the next premium.',
          why: 'Reduction of premium is a dividend option. Dividends are a return of excess premium. They are not the reason the accelerated benefit rider often has no charge.',
        },
      ],
    ),
    question(
      'c4q128',
      'Which conditions may qualify for an accelerated benefit?',
      [
        {
          text: 'Only a hazardous hobby such as skydiving or auto racing.',
          why: 'Those hobbies may be excluded or charged a higher premium. They are not the qualifying conditions for an accelerated benefit.',
        },
        {
          text: 'Only nonpayment of premiums during the grace period.',
          why: 'The grace period lets the owner pay before lapse. Accelerated benefits are living benefits for specified medical conditions.',
        },
        {
          text: 'Only a misstatement of age or gender on the application.',
          why: 'Age or gender misstatement leads to a benefit adjustment at claim time. It does not qualify the insured for an accelerated benefit.',
        },
        {
          text: 'A terminal illness, a condition that requires an extraordinary intervention such as an organ transplant, a condition that without extensive treatment drastically limits lifetime, inability to perform activities of daily living, permanent institutionalization or confinement to a long-term care facility, or any other condition the Department of Insurance approves.',
          why: 'The chapter lists each of those qualifying conditions, including any other condition the Department of Insurance approves.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q129',
      'What maximum does the chapter give for an accelerated benefit?',
      [
        {
          text: 'The maximum is typically a percentage of the face amount, usually 50%, though the insurer may pay up to 100%. There may be a dollar limit, such as $100,000.',
          why: 'The percentage maximum and the possible dollar limit are both stated. The face amount is reduced after the payment.',
          correct: true,
        },
        {
          text: 'The maximum is 25% to 40% of the death benefit, and it is available only for a heart attack or cancer.',
          why: 'Twenty-five to 40 percent is the usual dread-disease limit. The accelerated-benefit maximum is typically a percentage of the face amount, usually 50%, and the insurer may pay up to 100%.',
        },
        {
          text: 'The maximum is always two times the face amount.',
          why: 'Two times the face amount is double indemnity under the accidental death rider. An accelerated benefit pays part of the death benefit early and reduces what remains.',
        },
        {
          text: 'The maximum is the cash value, and the death benefit stays the same.',
          why: 'Borrowing the available cash value is a policy loan. An accelerated benefit reduces the face amount after the payment.',
        },
      ],
    ),
    question(
      'c4q130',
      'After an accelerated benefit is paid, what happens to the face amount and the premium?',
      [
        {
          text: 'The face amount stays the same, and the premium must be increased.',
          why: 'The face amount is reduced after the payment. The premium is not necessarily reduced, but it may be waived. An increase is not the stated result.',
        },
        {
          text: 'The face amount is reduced after the payment. The premium is not necessarily reduced, but it may be waived.',
          why: 'Reduction of the face amount is required. Any premium change is limited to the possibility of a waiver, not a required reduction.',
          correct: true,
        },
        {
          text: 'Both the face amount and the premium are increased by the amount paid.',
          why: 'The payment is an advance, so the face amount goes down. The premium is not increased by the amount paid.',
        },
        {
          text: 'The policy is surrendered, and it cannot be continued for the remaining face amount.',
          why: 'The remainder is paid to the beneficiary at death. Surrender is a different option and would end the coverage entirely.',
        },
      ],
    ),
    question(
      'c4q131',
      'If the insured withdraws part of the face amount as an accelerated benefit, what is subtracted from the payable death benefit?',
      [
        {
          text: 'Only the premiums that were waived, if any.',
          why: 'The premium may be waived, but the payable death benefit formula subtracts the amount withdrawn and the earnings the insurer lost in interest.',
        },
        {
          text: 'Nothing. The beneficiary still receives the original face amount.',
          why: 'The face amount is reduced after an accelerated payment. The payable amount also subtracts interest earnings the insurer lost.',
        },
        {
          text: 'The amount withdrawn and the earnings lost by the insurer in interest. The payable death benefit equals the face amount minus the amount withdrawn minus those lost earnings.',
          why: 'The chapter states that formula. The beneficiary receives what remains, and the remainder is not the withdrawn amount itself.',
          correct: true,
        },
        {
          text: 'The full face amount plus the interest the insurer lost, paid to the owner while alive.',
          why: 'Lost interest is subtracted, not added. The early payment is part of the death benefit, and the beneficiary receives the reduced remainder at death.',
        },
      ],
    ),
    question(
      'c4q132',
      'How can a long-term care living benefit be paid?',
      [
        {
          text: 'As double indemnity if the insured enters a hospital within 90 days of an accident.',
          why: 'Double indemnity and the 90-day period belong to the accidental death rider. Long-term care pays nursing-home or at-home care from part of the face amount.',
        },
        {
          text: 'As a policy loan that does not reduce the death benefit.',
          why: 'Policy loans are deducted from the proceeds if unpaid, and they are not the long-term care benefit. Long-term care uses part of the face amount.',
        },
        {
          text: 'As interest-only settlement payments to a healthy insured.',
          why: 'Interest only is a settlement option used after proceeds are payable. Long-term care is a living benefit paid from part of the face amount.',
        },
        {
          text: 'Long-term care can pay nursing-home care or at-home care from part of the face amount.',
          why: 'That is one of the ways living benefits are paid, along with dread disease and terminal illness.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q133',
      'What limit and which conditions apply to a dread disease living benefit?',
      [
        {
          text: 'It is usually limited to 25% to 40% of the death benefit, and it pays for a heart attack, an organ transplant, cancer treatment, or another catastrophic disease.',
          why: 'The chapter gives that usual percentage range and those examples of catastrophic disease.',
          correct: true,
        },
        {
          text: 'It pays most of the death benefit for any diagnosis the insured reports.',
          why: 'Terminal illness pays most of the death benefit. Dread disease is usually limited to 25% to 40%, and the insurer may require an exam by a physician of its choice.',
        },
        {
          text: 'It is usually 50% and may be 100%, with a dollar cap such as $100,000, for any reason.',
          why: 'Usually 50%, up to 100%, with a dollar limit such as $100,000, describes the accelerated-benefit maximum. Dread disease has its own usual range of 25% to 40%.',
        },
        {
          text: 'It refunds the premium only, and only for suicide within 2 years.',
          why: 'That is the suicide provision. Dread disease pays a limited percentage of the death benefit for specified catastrophic conditions.',
        },
      ],
    ),
    question(
      'c4q134',
      'How much of the death benefit does a terminal illness living benefit pay?',
      [
        {
          text: 'A fixed 10-day refund of premium.',
          why: 'Ten days is the usual free-look period, which can produce a full refund if the owner returns the policy. Terminal illness pays most of the death benefit.',
        },
        {
          text: 'Most of the death benefit. Dread disease, by contrast, is usually limited to 25% to 40%.',
          why: 'The chapter separates those two living benefits by how much of the death benefit is paid.',
          correct: true,
        },
        {
          text: 'Nothing, because a terminal illness expected to cause death within 2 years is excluded.',
          why: 'A terminal illness that will result in death within 2 years is a reason to pay an accelerated benefit. Terminal illness pays most of the death benefit.',
        },
        {
          text: 'Two times the face amount, but only if death occurs within 90 days.',
          why: 'That is double indemnity under the accidental death rider. Terminal illness living benefits pay most of the death benefit early.',
        },
      ],
    ),
    question(
      'c4q135',
      'What may the insurer require before paying a death benefit early for one of these illnesses?',
      [
        {
          text: 'An autopsy after burial, paid for by the beneficiary.',
          why: 'While a claim is pending, the insurer may have an autopsy at its own expense unless state law forbids it. For an early living benefit, the stated right is an exam by a physician chosen by the insurer, at the expense of the insurer, to confirm the diagnosis.',
        },
        {
          text: 'Evidence of insurability at the insured attained age.',
          why: 'Attained-age evidence is the opposite of guaranteed insurability, which requires none. Confirming a living-benefit diagnosis is a physician exam at the expense of the insurer.',
        },
        {
          text: 'An exam by a physician of its choice, at its expense, to confirm the diagnosis.',
          why: 'The insurer may require that exam. The cost is the insurer expense, not the insured expense.',
          correct: true,
        },
        {
          text: 'A 6-month waiting period and a refund of premiums paid since disability began.',
          why: 'That waiting period and refund belong to waiver of premium. They are not the diagnosis check for an early death benefit.',
        },
      ],
    ),
    question(
      'c4q136',
      'For which situations may a policy pay the death benefit early?',
      [
        {
          text: 'A revocable change of beneficiary, a collateral assignment, and a policy loan.',
          why: 'Those are ownership and loan transactions. Early payment of the death benefit is described for illness and care, not for those transactions.',
        },
        {
          text: 'Nonpayment of premiums, a misstatement of age, and suicide within 2 years.',
          why: 'Nonpayment is outside incontestability, age misstatement adjusts the benefit, and early suicide limits payment to a premium refund. None of those is an early payment of the death benefit.',
        },
        {
          text: 'Marriage, birth of a child, or a date that falls every 3 years.',
          why: 'Those are guaranteed insurability purchase events. They add coverage. They do not pay the existing death benefit early.',
        },
        {
          text: 'A terminal illness, a catastrophic illness, or eligibility for long-term care.',
          why: 'The chapter lists those three situations as reasons a policy may pay the death benefit early.',
          correct: true,
        },
      ],
    ),
  ],
  'c4-nonforfeiture': [
    question(
      'c4q137',
      'Which policies have the cash values behind nonforfeiture options, and what does state law require?',
      [
        {
          text: 'Permanent life policies have cash values, and state law requires nonforfeiture values the policyowner cannot forfeit.',
          why: 'The nonforfeiture options exist because those values cannot be forfeited. The three choices are cash surrender, reduced paid-up insurance, and extended term.',
          correct: true,
        },
        {
          text: 'Term policies must include a loan value equal to the face amount.',
          why: 'Policy loans are found only in policies that contain cash value. Nonforfeiture values are required for permanent life policies, which have cash values.',
        },
        {
          text: 'Every policy must pay dividends, and those dividends are the nonforfeiture value.',
          why: 'Dividends are paid only on participating policies and cannot be guaranteed. They are not the nonforfeiture values state law requires.',
        },
        {
          text: 'Only universal life partial surrenders create nonforfeiture values, and the owner can forfeit them.',
          why: 'A partial surrender is not a nonforfeiture option. State law requires nonforfeiture values the policyowner cannot forfeit.',
        },
      ],
    ),
    question(
      'c4q138',
      'What nonforfeiture information must appear in the policy, and for how long?',
      [
        {
          text: 'A list of excluded hobbies, for the first 2 policy years.',
          why: 'Two years is the suicide and incontestability period. The policy must include a table of nonforfeiture values for a minimum of 20 years.',
        },
        {
          text: 'A table of nonforfeiture values for a minimum of 20 years.',
          why: 'That table is required in the policy. It shows values the policyowner cannot forfeit.',
          correct: true,
        },
        {
          text: 'A dividend projection guaranteed through the third policy year.',
          why: 'The first dividend must be paid no later than the end of the third policy year, but companies cannot guarantee dividends. The required table is a nonforfeiture table for at least 20 years.',
        },
        {
          text: 'The 10-day free-look form, repeated for 20 years.',
          why: 'The usual free look is 10 days from receipt. It is not a 20-year table of nonforfeiture values.',
        },
      ],
    ),
    question(
      'c4q139',
      'What are the three nonforfeiture options?',
      [
        {
          text: 'Cash dividend, paid-up additions, and one-year term.',
          why: 'Those are dividend options. The nonforfeiture options are cash surrender value, reduced paid-up insurance, and extended term.',
        },
        {
          text: 'Life income, interest only, and fixed-amount installments.',
          why: 'Those are settlement options. They pay proceeds. They are not the three nonforfeiture options.',
        },
        {
          text: 'Cash surrender value, reduced paid-up insurance, and extended term.',
          why: 'The chapter names those three. Each uses the policy cash value in a different way when permanent coverage ends.',
          correct: true,
        },
        {
          text: 'Reinstatement, grace period, and free look.',
          why: 'Those provisions keep or restore a policy. They are not nonforfeiture options.',
        },
      ],
    ),
    question(
      'c4q140',
      'What happens when the owner takes the cash surrender value?',
      [
        {
          text: 'Coverage continues as term insurance for the same face amount.',
          why: 'Same-face term bought with the cash value is extended term. Cash surrender pays the current cash value and ends coverage.',
        },
        {
          text: 'The cash value buys a smaller paid-up permanent policy that stays in force until death or maturity.',
          why: 'That is reduced paid-up insurance. Cash surrender does not leave a paid-up policy in force.',
        },
        {
          text: 'The policy can be reinstated within 3 years without evidence of insurability.',
          why: 'A lapsed policy may be reinstated, usually within 3 years, with evidence of insurability. A surrendered policy cannot be reinstated.',
        },
        {
          text: 'The owner surrenders the policy for its current cash value when coverage is no longer needed or affordable. Coverage ends, and the surrendered policy cannot be reinstated.',
          why: 'The chapter ties cash surrender to that situation and to the end of coverage, including the bar on reinstatement.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q141',
      'When is part of a cash surrender taxed?',
      [
        {
          text: 'If the cash value exceeds the premiums paid, the excess is taxable as ordinary income.',
          why: 'Only that excess is given this ordinary-income treatment. The surrender also ends the coverage.',
          correct: true,
        },
        {
          text: 'The entire cash value is always tax free, including any amount above the premiums paid.',
          why: 'The excess of cash value over premiums paid is taxable as ordinary income. The chapter does not treat that excess as tax free.',
        },
        {
          text: 'The tax is the same as the tax on a policy loan, which is taxed in full when the loan is made.',
          why: 'Policy loans are not subject to income taxation. Cash-surrender gain is the separate item that can be ordinary income.',
        },
        {
          text: 'Interest left on deposit is tax free, and the cash value is taxed whether or not it exceeds premiums paid.',
          why: 'Interest credited on accumulated dividends is taxable when credited. The cash-surrender rule taxes the excess over premiums paid, not the entire cash value in every case.',
        },
      ],
    ),
    question(
      'c4q142',
      'What is a surrender charge?',
      [
        {
          text: 'A deduction of unpaid premium when the insured dies during the grace period.',
          why: 'An unpaid premium is deducted from the death benefit if death occurs during the grace period. A surrender charge is a fee for surrendering a life policy or annuity for its cash value.',
        },
        {
          text: 'A fee charged when a life policy or annuity is surrendered for its cash value.',
          why: 'The chapter defines the surrender charge as that fee. It is part of the cash-surrender discussion, not a settlement option.',
          correct: true,
        },
        {
          text: 'Interest the insurer adds when a dividend is used to reduce the next premium.',
          why: 'Reduction of premium applies the dividend to the next premium. A $1,000 premium and a $100 dividend means the owner pays $900. No surrender fee is involved.',
        },
        {
          text: 'The 30-day charge before a policy loan can be taken.',
          why: 'Thirty days is the written notice before a lapse caused by a loan that exceeds the cash value. It is not a surrender charge.',
        },
      ],
    ),
    question(
      'c4q143',
      'What does the extended term option buy?',
      [
        {
          text: 'A smaller permanent policy that is paid up and builds new cash value.',
          why: 'That is reduced paid-up insurance. Extended term buys term insurance, not a smaller permanent policy.',
        },
        {
          text: 'A cash payment of the current cash value, after which coverage ends.',
          why: 'That is cash surrender. Extended term keeps a death benefit in force as term insurance.',
        },
        {
          text: 'Term insurance for the same face amount as the former permanent policy, for as long as the cash value will purchase.',
          why: 'The cash value is the single sum that buys that term. The face amount matches the permanent policy that ended, and the term lasts only as long as the cash value will pay for.',
          correct: true,
        },
        {
          text: 'Paid-up additions equal to the policy dividends.',
          why: 'Paid-up additions are a dividend option. Extended term is a nonforfeiture option bought with cash value.',
        },
      ],
    ),
    question(
      'c4q144',
      'What does reduced paid-up insurance provide?',
      [
        {
          text: 'Term insurance equal to the original face amount until the cash value runs out.',
          why: 'Same-face term that lasts as long as the cash value will buy is extended term. Reduced paid-up insurance is a smaller permanent policy.',
        },
        {
          text: 'The current cash value in cash, with no further insurance.',
          why: 'That is cash surrender. Reduced paid-up insurance leaves a paid-up policy in force.',
        },
        {
          text: 'One-year term equal to the cash value, purchased with a dividend.',
          why: 'One-year term is a dividend option. Reduced paid-up insurance uses the cash value as a single premium for permanent insurance.',
        },
        {
          text: 'The cash value is used as a single premium for a completely paid-up permanent policy with a smaller face amount. That new policy builds its own cash value and stays in force until death or maturity.',
          why: 'The new policy is permanent, paid up, and smaller. It is not term insurance, and it continues to build cash value.',
          correct: true,
        },
      ],
    ),
  ],
  'c4-dividends': [
    question(
      'c4q145',
      'On which policies are dividends paid, and why is the participating premium higher?',
      [
        {
          text: 'Dividends are paid only on participating policies. The owner pays a grossed-up premium as a safety margin.',
          why: 'If the insurer does not need that extra amount, a dividend may be returned. The dividend is a return of excess premium, so it is not taxable, and companies cannot guarantee dividends.',
          correct: true,
        },
        {
          text: 'Dividends are guaranteed on every whole life policy, participating or not.',
          why: 'Companies cannot guarantee dividends, and dividends are paid only on participating policies.',
        },
        {
          text: 'Dividends are paid on term policies that have no cash value, as a required nonforfeiture value.',
          why: 'Nonforfeiture values belong to permanent life policies with cash value. Dividends are a participating-policy return of excess premium.',
        },
        {
          text: 'Dividends are paid to the beneficiary only after the suicide period, and they are taxed as income.',
          why: 'The suicide provision pays death proceeds after 2 years. Dividends are not that death benefit, and the dividend itself is not taxable.',
        },
      ],
    ),
    question(
      'c4q146',
      'When does a participating policy return a dividend?',
      [
        {
          text: 'Whenever the owner misses a premium and the grace period ends.',
          why: 'The end of the grace period can lead to lapse or, if elected, an automatic premium loan. A dividend is not created by a missed premium.',
        },
        {
          text: 'If the insurer does not need the extra premium for claims and expenses, or if mortality improves, or if interest earned exceeds the assumptions.',
          why: 'Any of those results can produce a dividend. The dividend returns excess premium and cannot be guaranteed.',
          correct: true,
        },
        {
          text: 'Only after the policy is surrendered and the cash value exceeds the premiums paid.',
          why: 'That excess can be taxable as ordinary income on a cash surrender. A dividend is a return of excess premium on a participating policy and is not taxable.',
        },
        {
          text: 'Only when the insured dies during the grace period.',
          why: 'Death during the grace period pays the death benefit minus any unpaid premium. It does not determine whether a dividend is returned.',
        },
      ],
    ),
    question(
      'c4q147',
      'How soon may the first dividend be paid, and what is the latest time for that first dividend?',
      [
        {
          text: 'It may be paid when the application is taken, and it must be paid before the policy is delivered.',
          why: 'Delivery is when the free look starts, and the policy is a receipt for the first premium. The first dividend is not paid at application. It may be paid as early as the first policy anniversary.',
        },
        {
          text: 'It is paid only at death, and never during the insured lifetime.',
          why: 'Dividends can be paid while the policy is in force. The first one may come as early as the first anniversary and must arrive no later than the end of the third policy year.',
        },
        {
          text: 'The first dividend may be paid as early as the first policy anniversary, and it must be paid no later than the end of the third policy year. Later dividends are usually annual.',
          why: 'The chapter sets both the earliest possible time and the third-year deadline, then says later dividends are usually annual.',
          correct: true,
        },
        {
          text: 'It must be paid within 30 or 31 days after the first premium due date.',
          why: 'Thirty or 31 days, or one month, is the usual grace period. It is not the deadline for the first dividend.',
        },
      ],
    ),
    question(
      'c4q148',
      'How does the cash dividend option work?',
      [
        {
          text: 'The dividend buys one-year term equal to the cash value.',
          why: 'One-year term is a separate dividend option. The cash option sends the dividend to the owner as a check.',
        },
        {
          text: 'The dividend is left with the insurer to earn interest that is tax free if it stays on deposit.',
          why: 'Leaving the dividend to earn interest is accumulation at interest. That interest is taxable when credited, whether or not the owner withdraws it.',
        },
        {
          text: 'The dividend reduces the next premium dollar for dollar and is never paid in cash.',
          why: 'Reduction of premium is a different option. Under the cash option, the insurer sends a check.',
        },
        {
          text: 'The insurer sends a check, usually annually.',
          why: 'That check is the cash dividend option. Dividends after the first are usually annual, and the dividend itself is not taxable.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q149',
      'A participating policy has a $1,000 annual premium, and a $100 dividend is used to reduce the premium. What does the owner pay that year?',
      [
        {
          text: '$900.',
          why: 'Reduction of premium applies the dividend to the next premium. A $1,000 annual premium minus a $100 dividend leaves $900 for the owner to pay that year.',
          correct: true,
        },
        {
          text: '$1,000, because a dividend cannot reduce a premium that was grossed up.',
          why: 'The grossed-up premium is the safety margin on a participating policy. Using the dividend to reduce the next premium means the owner pays $900 in the example.',
        },
        {
          text: 'Nothing that year, because a dividend waives the premium the way a disability rider can.',
          why: 'Waiver of premium is a rider that can waive premium after disability. Reduction of premium only subtracts the dividend, so the owner pays $900 in the example.',
        },
        {
          text: '$100, because the dividend replaces the entire annual premium.',
          why: 'The $100 dividend reduces the $1,000 premium. It does not become the only amount due.',
        },
      ],
    ),
    question(
      'c4q150',
      'Under accumulation at interest, how is the dividend held?',
      [
        {
          text: 'The insurer must use it at once to buy extended term.',
          why: 'Extended term is a nonforfeiture option bought with cash value. Accumulation at interest leaves the dividend in an account.',
        },
        {
          text: 'The insurer holds the dividend in an account that earns interest at the rate in the policy, compounded annually. The owner may withdraw the dividends at any time.',
          why: 'The policy states the interest rate, and compounding is annual. Withdrawal of the dividends is allowed at any time.',
          correct: true,
        },
        {
          text: 'The dividend is paid to the beneficiary only if the insured dies within 90 days.',
          why: 'Ninety days is the usual accidental-death period. A dividend left at interest can be withdrawn by the owner at any time.',
        },
        {
          text: 'The account cannot earn interest, and the owner cannot withdraw the dividend.',
          why: 'The account earns interest at the rate in the policy, compounded annually, and the owner may withdraw the dividends at any time.',
        },
      ],
    ),
    question(
      'c4q151',
      'When is interest on dividends that accumulate at interest taxable?',
      [
        {
          text: 'The interest is never taxable if the owner leaves it in the policy, and the dividend is taxable when it is declared.',
          why: 'The dividend is not taxable. The interest is taxable when it is credited, whether or not the owner withdraws it.',
        },
        {
          text: 'The interest is taxable only in the year the owner withdraws it.',
          why: 'Withdrawal is not the tax event stated here. The interest is taxable when it is credited, even if it stays in the account.',
        },
        {
          text: 'The interest is taxable when it is credited, whether or not the owner withdraws it. The dividend itself is not taxable.',
          why: 'The chapter separates the nontaxable dividend from the taxable interest and says the interest is taxed when credited.',
          correct: true,
        },
        {
          text: 'Both the dividend and the interest are taxed as ordinary income when the policy is surrendered.',
          why: 'Ordinary income on a surrender applies to cash value in excess of premiums paid. Dividend interest is taxable when credited, and the dividend itself is not taxable.',
        },
      ],
    ),
    question(
      'c4q152',
      'What does the paid-up additions option do with a dividend?',
      [
        {
          text: 'It issues a separate policy of one-year term.',
          why: 'One-year term is a different dividend option. Paid-up additions do not use a separate policy.',
        },
        {
          text: 'It pays the original policy up early by combining dividends, interest, and cash value.',
          why: 'Using dividends, interest, and cash value to pay the policy up early is the paid-up insurance option. Paid-up additions buy an addition to the face amount.',
        },
        {
          text: 'It sends the owner a check and reduces the next premium.',
          why: 'A check is the cash option. Reducing the next premium is a separate option. Paid-up additions buy more insurance.',
        },
        {
          text: 'It buys a single-premium addition to the face amount. No separate policy is issued. Each addition builds cash value and pays dividends, and the amount of insurance is based on the attained age when the dividend is declared.',
          why: 'Those are the features of paid-up additions. The purchase uses the dividend as a single premium at the attained age on the declaration date.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q153',
      'How does the paid-up insurance dividend option pay a policy up early?',
      [
        {
          text: 'The insurer accumulates dividends at interest, then uses the dividends, the interest, and the policy cash value to pay the policy up early.',
          why: 'All three amounts are used. This option is different from paid-up additions, which buy extra face amount with each dividend.',
          correct: true,
        },
        {
          text: 'It uses only the current dividend to buy term for one year.',
          why: 'One-year term buys additional term with the dividend. Paid-up insurance accumulates dividends and then pays the policy up early.',
        },
        {
          text: 'It surrenders the policy for cash as soon as the first dividend is paid.',
          why: 'Cash surrender is a nonforfeiture option and ends coverage. Paid-up insurance keeps the policy, but pays it up early.',
        },
        {
          text: 'It waives all future premiums if the insured is disabled for 6 months.',
          why: 'A 6-month waiting period belongs to waiver of premium. Paid-up insurance is a dividend option, not a disability rider.',
        },
      ],
    ),
    question(
      'c4q154',
      'What one-year term can a dividend buy?',
      [
        {
          text: 'Only term equal to the original face amount, and the dividend must be large enough to buy that full amount.',
          why: 'The owner may buy as much one-year term as the dividend will purchase. The chapter does not require the term to equal the original face amount.',
        },
        {
          text: 'As much one-year term as the dividend will purchase, or term equal to the policy cash value for as long as the dividend will pay for it.',
          why: 'Those are the two amounts the chapter allows. The term increases the death benefit for that year.',
          correct: true,
        },
        {
          text: 'Permanent paid-up insurance for the spouse, expiring at age 65.',
          why: 'Spouse term usually expires at 65 and is a rider, not the one-year term dividend option. Paid-up additions are the permanent addition bought with a dividend.',
        },
        {
          text: 'Extended term for the same face amount, using the cash value rather than the dividend.',
          why: 'Extended term is a nonforfeiture use of cash value. One-year term is bought with the dividend.',
        },
      ],
    ),
    question(
      'c4q155',
      'If the insured dies while one-year term bought with a dividend is in effect, what does the beneficiary receive?',
      [
        {
          text: 'Only the one-year term. The base policy death benefit is forfeited.',
          why: 'The beneficiary receives both death benefits. The base benefit is not forfeited.',
        },
        {
          text: 'Only a refund of the dividend, because the term expired at death.',
          why: 'A premium refund is the suicide limit within 2 years. Death during the one-year term pays both death benefits.',
        },
        {
          text: 'Both death benefits. The one-year term increases the death benefit for that year.',
          why: 'The chapter states that the beneficiary receives both the base death benefit and the additional one-year term.',
          correct: true,
        },
        {
          text: 'The cash value only, under the reduced paid-up option.',
          why: 'Reduced paid-up insurance is a smaller permanent policy bought with cash value. It is not the payment when one-year term is in force at death.',
        },
      ],
    ),
  ],
  'c4-settlement': [
    question(
      'c4q156',
      'Besides the death benefit, what else can a settlement option pay?',
      [
        {
          text: 'A policy loan that the owner takes from cash value while alive.',
          why: 'A policy loan is borrowed from cash value. Settlement options pay the death benefit or the endowment benefit.',
        },
        {
          text: 'A dividend check sent to the owner of a participating policy.',
          why: 'The cash dividend option sends a check. It is not a settlement option.',
        },
        {
          text: 'The nonforfeiture value the owner takes when premiums stop.',
          why: 'Nonforfeiture options use cash value when permanent coverage ends. Settlement options pay death or endowment proceeds.',
        },
        {
          text: 'The endowment benefit, if the insured lives to the endowment date.',
          why: 'Settlement options pay the death benefit, or the endowment benefit if the insured lives to the endowment date.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q157',
      'When may the policyowner choose or change a settlement option, and what can the beneficiary do after the owner has chosen?',
      [
        {
          text: 'The policyowner may choose an option at application and may change it during the insured life. Once the owner has chosen, the beneficiary cannot change it.',
          why: 'The owner keeps the right to change the choice while the insured is alive. The beneficiary is bound by a choice the owner has already made.',
          correct: true,
        },
        {
          text: 'The owner may choose only at the insured death, and the beneficiary may override that choice.',
          why: 'The owner may choose at application and may change the choice during the insured life. After the owner has chosen, the beneficiary cannot change it.',
        },
        {
          text: 'Only an executive officer may select the option, and the choice must be endorsed during the free look.',
          why: 'An executive officer signs modifications to policy provisions. Settlement choices belong to the policyowner, or to the beneficiary if the owner made none.',
        },
        {
          text: 'The beneficiary may change the owner choice at any time before the first installment is paid.',
          why: 'Once the owner has chosen, the beneficiary cannot change it. The beneficiary chooses only when the owner did not.',
        },
      ],
    ),
    question(
      'c4q158',
      'If the policyowner never chooses a settlement option, who may choose one, and when?',
      [
        {
          text: 'No one. The proceeds stay with the insurer until a court chooses.',
          why: 'If no selection is made at all, the proceeds are paid in a single cash payment. If the owner made no choice, the beneficiary may still choose at the insured death.',
        },
        {
          text: 'The beneficiary may choose at the insured death.',
          why: 'The beneficiary receives that choice only because the owner did not make one. A choice the owner already made cannot be changed by the beneficiary.',
          correct: true,
        },
        {
          text: 'The contingent beneficiary may choose while the primary beneficiary is still living.',
          why: 'A contingent beneficiary receives nothing if the primary beneficiary is living when the insured dies. The settlement choice, if the owner made none, belongs to the beneficiary at the insured death.',
        },
        {
          text: 'The insurer must use extended term instead of paying the proceeds.',
          why: 'Extended term is the nonforfeiture option used when the owner does not choose among nonforfeiture options. It is not the rule for an unchosen settlement option.',
        },
      ],
    ),
    question(
      'c4q159',
      'As a rule, is the principal face amount paid after the insured death taxable as income?',
      [
        {
          text: 'Yes. It is taxed as ordinary income to the extent it exceeds the premiums paid.',
          why: 'Ordinary income on the excess over premiums paid is the cash-surrender rule. As a rule, the principal face amount paid after death is not taxable as income.',
        },
        {
          text: 'Yes, but only when it is paid under life income with 10 years certain.',
          why: 'Ten years certain is a life-income guarantee. The tax rule stated here is about the principal face amount paid after death, which as a rule is not taxable as income.',
        },
        {
          text: 'No. As a rule, that principal is not taxable as income.',
          why: 'The chapter states that income-tax result for the principal face amount paid after the insured death.',
          correct: true,
        },
        {
          text: 'No, unless the beneficiary elects interest only, in which case the principal itself becomes taxable.',
          why: 'Interest only pays interest on proceeds the insurer keeps. The chapter does not say that electing interest only makes the principal taxable. As a rule, the principal paid after death is not taxable as income.',
        },
      ],
    ),
    question(
      'c4q160',
      'What does life income, also called straight life, provide, and what is the installment based on?',
      [
        {
          text: 'Income for a fixed number of years only, based on the length of the period the beneficiary selects.',
          why: 'A selected number of years is fixed-period installments. Straight life provides income the recipient cannot outlive, based on life expectancy and the principal.',
        },
        {
          text: 'A chosen dollar amount until the principal and interest are exhausted.',
          why: 'That is fixed-amount installments. Life income is based on the life expectancy of the recipient and the principal.',
        },
        {
          text: 'Interest payments only, with the principal held for a later option.',
          why: 'Interest only is a temporary option. Straight life pays an income the recipient cannot outlive.',
        },
        {
          text: 'An income the recipient cannot outlive. The installment is based on the life expectancy of the recipient and the principal.',
          why: 'Life income and straight life are the same option. The two factors in the installment are life expectancy and principal.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q161',
      'Under straight life, what happens if the recipient dies soon, and what do guarantees do to each installment?',
      [
        {
          text: 'The balance is forfeited to the insurer. Guarantees that some or all of the proceeds will be paid reduce the size of each installment.',
          why: 'Early death forfeits the unpaid balance when there is no guarantee. Adding a guarantee that more of the proceeds will be paid makes each installment smaller.',
          correct: true,
        },
        {
          text: 'The balance is always paid to a contingent beneficiary, and guarantees increase each installment.',
          why: 'Payment to a contingent beneficiary until the proceeds are gone describes fixed-amount installments. Under straight life without a guarantee, the balance is forfeited, and guarantees reduce the installment.',
        },
        {
          text: 'The insurer refunds the principal in a lump sum, and guarantees have no effect on the size of the payment.',
          why: 'A lump-sum remainder is the cash refund form of life refund. Straight life forfeits the balance if the recipient dies soon, unless a guarantee is added, and that guarantee reduces each installment.',
        },
        {
          text: 'Payments stop, but the full principal must still be paid, and guarantees make each payment larger.',
          why: 'A guarantee that some or all of the proceeds will be paid reduces, rather than increases, each installment. Without it, an early death forfeits the balance to the insurer.',
        },
      ],
    ),
    question(
      'c4q162',
      'Under life income, what can happen if the recipient lives a long time?',
      [
        {
          text: 'Payments stop when the principal is exhausted, even if the recipient is still alive.',
          why: 'Stopping when principal and interest are exhausted is fixed-amount or, for a chosen period, fixed-period. Life income can continue so long that payments exceed the principal.',
        },
        {
          text: 'Payments may exceed the principal.',
          why: 'The recipient cannot outlive life income. A long life can cause the payments to add up to more than the principal.',
          correct: true,
        },
        {
          text: 'The unpaid balance is forfeited as soon as the payments equal the principal.',
          why: 'Forfeiture of the balance happens if the recipient dies soon under life income without a guarantee. Living a long time can make payments exceed the principal.',
        },
        {
          text: 'The installment doubles after the recipient outlives the life expectancy used to set it.',
          why: 'No doubling is stated. Double indemnity is an accidental-death multiple. A long life under life income may cause total payments to exceed the principal.',
        },
      ],
    ),
    question(
      'c4q163',
      'What does the single life settlement option pay?',
      [
        {
          text: 'Two recipients for as long as either one lives, with a reduced payment to the survivor.',
          why: 'That is life income joint and survivor. Single life pays one beneficiary.',
        },
        {
          text: 'Equal installments for a selected number of years, even if the recipient dies.',
          why: 'That is fixed-period, also called period certain. Single life is a life income on one person.',
        },
        {
          text: 'One beneficiary for life, and payments stop at that person death.',
          why: 'Single life has one payee. It ends when that person dies, which is the straight-life result without a refund or period certain.',
          correct: true,
        },
        {
          text: 'The surviving children, after interest has been paid to a spouse.',
          why: 'Interest paid to a surviving spouse, with principal later paid to the children, is an interest-only arrangement. It is not single life.',
        },
      ],
    ),
    question(
      'c4q164',
      'How are people paid under life income joint and survivor?',
      [
        {
          text: 'One person is paid for life, and payments stop at the first death with nothing further due.',
          why: 'Stopping at the first death, except during a specified term, describes joint life with term certain. Joint and survivor continues for the survivor, usually at a reduced amount.',
        },
        {
          text: 'Payments continue for a fixed period only, and they do not depend on either life.',
          why: 'A fixed period that does not guarantee income for life is fixed-period installments. Joint and survivor is based on the lives of two or more recipients.',
        },
        {
          text: 'The full principal is refunded in cash when the first recipient dies.',
          why: 'A lump-sum remainder is cash refund. Joint and survivor instead continues income to the survivor.',
        },
        {
          text: 'Two or more recipients are paid for as long as they live. After the first dies, the survivor usually receives a reduced payment, commonly joint and 1/2 survivor or joint and 2/3 survivor.',
          why: 'The chapter describes that continued, usually reduced, payment and gives those two common fractions.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q165',
      'If no period certain is added to joint and survivor, and everyone dies shortly after payments begin, are all of the proceeds guaranteed?',
      [
        {
          text: 'No. Unless a period certain is added, there is no guarantee that all of the proceeds will be paid.',
          why: 'Short survival of everyone can leave proceeds unpaid. A period certain is what adds a guarantee.',
          correct: true,
        },
        {
          text: 'Yes. Joint and survivor always pays the entire principal even without a period certain.',
          why: 'The chapter says there is no such guarantee unless a period certain is added.',
        },
        {
          text: 'Yes. The insurer pays a cash refund of any remainder automatically.',
          why: 'Cash refund is a life-refund option. It is not automatic under joint and survivor. Without a period certain, all of the proceeds are not guaranteed.',
        },
        {
          text: 'No. The contract pays nothing unless the owner also elected fixed-amount installments.',
          why: 'Joint and survivor does pay the recipients while they live. The missing guarantee is that all proceeds will be paid if everyone dies shortly after payments begin.',
        },
      ],
    ),
    question(
      'c4q166',
      'What happens under life income with 10 years certain if the recipient dies soon?',
      [
        {
          text: 'The balance is forfeited, because life income never continues after the recipient dies.',
          why: 'Forfeiture is straight life without a guarantee. Life income with 10 years certain continues payments for the rest of the 10 years.',
        },
        {
          text: 'Payments continue to a beneficiary for the rest of the 10 years. Those installments are smaller than life income only.',
          why: 'The option pays for the lifetime of the recipient and also guarantees the stated period. The guarantee is why the installments are smaller than life income with no certain period.',
          correct: true,
        },
        {
          text: 'The survivor receives one-half or two-thirds for the rest of that survivor life.',
          why: 'Joint and 1/2 or joint and 2/3 is a joint-and-survivor reduction. Ten years certain continues the payments for the remainder of the 10 years.',
        },
        {
          text: 'A larger installment is paid for the remaining years because the guarantee ended.',
          why: 'Guarantees reduce the size of each installment. The 10-year payments are smaller than life income only, not larger.',
        },
      ],
    ),
    question(
      'c4q167',
      'When do payments stop under joint life with term certain?',
      [
        {
          text: 'They continue until the last recipient dies, usually at a reduced amount.',
          why: 'Continuing for the survivor at a reduced amount is joint and survivor. Joint life with term certain stops at the first death, with a term exception.',
        },
        {
          text: 'They stop at the first death in every case, even during the specified term.',
          why: 'The option stops at the first death except when that death occurs during the specified term. During the term, payments continue to the others until the term ends.',
        },
        {
          text: 'It pays two or more people and stops at the first death, except that if the first death occurs during the specified term, payments continue to the others until the term ends.',
          why: 'The first-death stop is the general rule, and the specified term is the exception that keeps payments going to the others.',
          correct: true,
        },
        {
          text: 'They are paid as one cash sum when the first person dies.',
          why: 'A lump sum is the mode used when no settlement option is chosen, or the remainder under cash refund. Joint life with term certain pays income and stops under the first-death rule.',
        },
      ],
    ),
    question(
      'c4q168',
      'How do cash refund and installment refund differ if the annuitant dies before the fund is depleted?',
      [
        {
          text: 'Cash refund continues the payments, and installment refund pays the remainder as a lump sum.',
          why: 'The names run the other way. Cash refund pays the remainder in a lump sum. Installment refund continues the payments.',
        },
        {
          text: 'Both forfeit whatever principal remains.',
          why: 'Forfeiture of the balance is life income without a guarantee. Life refund guarantees that the annuity fund will be paid.',
        },
        {
          text: 'Only installment refund guarantees payment of the fund. Cash refund guarantees nothing.',
          why: 'Both the cash refund and the installment refund guarantee that the annuity fund will be paid to the annuitant or the beneficiary.',
        },
        {
          text: 'Both guarantee that the annuity fund will be paid to the annuitant or the beneficiary. Cash refund pays the remainder in a lump sum. Installment refund continues the payments.',
          why: 'The shared guarantee is the life-refund promise. The difference is lump sum versus continued installments.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q169',
      'What does the interest-only option pay, and how does the rate work?',
      [
        {
          text: 'The insurer keeps the proceeds and pays interest at regular intervals. A rate is guaranteed, and the insurer will often pay more. The option is temporary until the proceeds are paid as a lump sum or under another option.',
          why: 'The guaranteed rate is a floor. The temporary character of the option lets the payee decide on a later mode.',
          correct: true,
        },
        {
          text: 'The insurer pays the principal in equal installments and pays no interest.',
          why: 'Fixed-period installments pay principal and interest over a selected number of years. Interest only leaves the proceeds with the insurer and pays interest.',
        },
        {
          text: 'The insurer pays interest at a rate the beneficiary sets, and the option must last for the life of the beneficiary.',
          why: 'A rate is guaranteed, and the insurer will often pay more. The option is temporary. It is not a lifetime income the beneficiary designs.',
        },
        {
          text: 'The insurer pays the interest only if the beneficiary dies within 10 years.',
          why: 'Ten years certain is a life-income guarantee. Interest only pays interest at regular intervals while the insurer keeps the proceeds.',
        },
      ],
    ),
    question(
      'c4q170',
      'In the interest-only example, who can receive the interest, and who later receives the principal?',
      [
        {
          text: 'The children must receive the interest, and the spouse receives the principal immediately in cash.',
          why: 'The example runs the other way: interest to the surviving spouse, and principal to the children at a stated age or at the death of the spouse.',
        },
        {
          text: 'Interest may be paid annually to a surviving spouse, with the principal paid to the children at a stated age or at the death of the spouse. The option can also give a beneficiary time to decide.',
          why: 'The chapter uses that spouse-and-children arrangement as the example and also describes interest only as time for a beneficiary to decide.',
          correct: true,
        },
        {
          text: 'The insurer pays the principal to the primary beneficiary and the interest to the tertiary beneficiary at once.',
          why: 'The tertiary beneficiary is paid only if both the primary and the contingent beneficiaries die first. That succession is not the interest-only example.',
        },
        {
          text: 'Interest is paid to the estate, and the principal is forfeited if the spouse lives past the first year.',
          why: 'Forfeiture of a balance fits life income without a guarantee. The interest-only example keeps the principal for the children.',
        },
      ],
    ),
    question(
      'c4q171',
      'What sets the size of a fixed-period installment, and what does a longer period do?',
      [
        {
          text: 'The size is based only on the life expectancy of the recipient, and a longer period makes each installment larger.',
          why: 'Life expectancy is used for life income. Fixed-period size depends on the principal, the guaranteed interest, and the length of the period, and a longer period means a smaller installment.',
        },
        {
          text: 'The beneficiary chooses a dollar amount, and a larger amount lengthens the period.',
          why: 'Choosing the dollar amount is fixed-amount installments, and a larger installment means a shorter income period. Fixed-period selects the number of years.',
        },
        {
          text: 'The size depends on the principal, the guaranteed interest, and the length of the period. A longer period means a smaller installment. Payments continue for the selected number of years even if the recipient dies.',
          why: 'Those three factors set the installment. The period keeps running after the death of the recipient, but the option does not guarantee income for life.',
          correct: true,
        },
        {
          text: 'The installment is always the same as straight life, and death of the recipient ends the payments.',
          why: 'Straight life can forfeit the balance if the recipient dies soon. Fixed-period payments continue for the selected period even if the recipient dies.',
        },
      ],
    ),
    question(
      'c4q172',
      'Does fixed-period installment income, also called period certain, guarantee income for life?',
      [
        {
          text: 'Yes. The recipient cannot outlive the payments, and any remainder is forfeited.',
          why: 'Income the recipient cannot outlive is life income. Fixed-period does not guarantee income for life. It does pay out the entire principal.',
        },
        {
          text: 'Yes, but only for two lives, with the survivor receiving one-half.',
          why: 'Joint and 1/2 survivor is a life income joint and survivor option. Fixed-period guarantees a period of years, not a second lifetime at one-half.',
        },
        {
          text: 'Yes, whenever the selected period is 10 years, because that period is the same lifetime guarantee as life income with 10 years certain.',
          why: 'Life income with 10 years certain pays for the lifetime of the recipient and also guarantees 10 years. Fixed-period installments do not guarantee income for life, even if the selected number of years is 10.',
        },
        {
          text: 'No. It does not guarantee income for life, but it does pay out the entire principal.',
          why: 'The owner or beneficiary selects the number of years. The entire principal is paid over that period, without a promise that the payee will live only inside it or be paid for life.',
          correct: true,
        },
      ],
    ),
    question(
      'c4q173',
      'What does the fixed-amount option pay, and does it guarantee income for the lifetime of the beneficiary?',
      [
        {
          text: 'It pays a chosen dollar amount until the principal and interest are exhausted. It does not guarantee payments for life, but all of the proceeds are paid.',
          why: 'The recipient picks the dollar amount. A larger installment means a shorter income period. If the beneficiary dies first, payments continue to a contingent beneficiary until the proceeds are gone.',
          correct: true,
        },
        {
          text: 'It pays an income the beneficiary cannot outlive, based on life expectancy.',
          why: 'That is life income, or straight life. Fixed-amount can end when the money is exhausted, even if the beneficiary is still alive.',
        },
        {
          text: 'It pays interest only and holds the principal until a court selects a dollar amount.',
          why: 'Interest only is a temporary choice the owner or beneficiary can use. Fixed-amount itself pays a chosen dollar amount until principal and interest are exhausted.',
        },
        {
          text: 'It forfeits any principal that remains when the beneficiary dies.',
          why: 'Forfeiture of the balance is life income without a guarantee. Fixed-amount continues payments to a contingent beneficiary until the proceeds are gone.',
        },
      ],
    ),
  ],
}
