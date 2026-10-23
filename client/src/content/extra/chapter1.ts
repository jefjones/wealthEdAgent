import { question } from '../build.ts'
import type { Question } from '../types.ts'

export const chapter1Extra: Record<string, Question[]> = {
  'c1-terms': [
    question(
      'c1q17',
      'Under an insurance contract, what does the insurance company agree to indemnify the insured against?',
      [
        {
          text: 'Loss, damage, or liability arising from an unknown event.',
          why: 'Insurance is a contract in which the insurance company agrees to indemnify the insured against loss, damage, or liability arising from an unknown event.',
          correct: true,
        },
        {
          text: 'A chance of financial gain from gambling.',
          why: 'Gambling is speculative risk, which involves a chance of loss or gain and is not insurable. The contract indemnifies against loss from an unknown event.',
        },
        {
          text: 'Dividends paid to stockholders when the company has a profit.',
          why: 'Taxable stockholder dividends can be paid by a stock company. They are not the loss, damage, or liability that the insurance contract covers.',
        },
        {
          text: 'Any loss the insured causes on purpose.',
          why: 'The contract responds to an unknown event. A loss the insured controls fails the requirement that an insurable loss be due to chance.',
        },
      ],
    ),
    question(
      'c1q18',
      'In life insurance, who is protected from losses suffered after an insured dies?',
      [
        {
          text: 'The insurer, because the contract removes the chance of death.',
          why: 'Life insurance does not remove the chance of death. It protects survivors from the financial loss that follows.',
        },
        {
          text: 'Survivors of the insured.',
          why: 'In life insurance, the policy protects survivors from losses suffered after an insured dies.',
          correct: true,
        },
        {
          text: 'Stockholders, who share in the profits or losses of a stock company.',
          why: 'Stockholders provide the capital of a stock company and share in its profits or losses. A life policy protects survivors, not those owners.',
        },
        {
          text: 'The producer who solicited the application.',
          why: 'A producer is a legal representative who sells, solicits, or negotiates insurance. The life policy protects survivors, not the producer.',
        },
      ],
    ),
    question(
      'c1q19',
      'How is the cost of an insured loss handled?',
      [
        {
          text: 'The person who suffered the loss bears the whole cost.',
          why: 'That is what happens when insurance does not transfer the risk. With insurance, the cost is transferred to the insurer and spread among other insureds.',
        },
        {
          text: 'The insured assumes the loss through a deductible, a copayment, or self-insurance.',
          why: 'Deductibles, copayments, and self-insurance are retention. An insured loss that is transferred is spread by the insurer among other insureds.',
        },
        {
          text: 'The cost is transferred to the insurer and spread among other insureds.',
          why: 'Insurance transfers the risk of loss. The cost of an insured loss is transferred to the insurer and spread among other insureds.',
          correct: true,
        },
        {
          text: 'The exposure is eliminated, so nobody pays for the loss.',
          why: 'Eliminating an exposure is avoidance. Insurance transfers the cost to the insurer and spreads that cost among other insureds.',
        },
      ],
    ),
    question(
      'c1q20',
      'Which description of an agent is accurate?',
      [
        {
          text: 'An agent is a producer who is not appointed by an insurer and who is deemed to represent the client.',
          why: 'That is a broker. An agent is a legal representative of the insurance company.',
        },
        {
          text: 'An agent is the company that issues the policy.',
          why: 'The company that issues the policy is the insurer, also called the principal. An agent represents that company.',
        },
        {
          text: 'An agent is the person covered by the policy.',
          why: 'The person covered by the policy is the insured. An agent is a producer who represents the insurer.',
        },
        {
          text: 'An agent is a legal representative of an insurance company, and agents are the agents of the insurer.',
          why: 'An agent or producer is a legal representative of an insurance company. Producers include agents and brokers, and agents are the agents of the insurer.',
          correct: true,
        },
      ],
    ),
    question(
      'c1q21',
      'Who is an applicant, also called a proposed insured?',
      [
        {
          text: 'A person applying for insurance.',
          why: 'The applicant, or proposed insured, is a person applying for insurance.',
          correct: true,
        },
        {
          text: 'A person who receives the benefits of an insurance policy.',
          why: 'That person is the beneficiary. The applicant is the person applying for insurance.',
        },
        {
          text: 'The person entitled to exercise the rights and privileges in the policy.',
          why: 'That person is the policyowner. The applicant is the person applying for coverage.',
        },
        {
          text: 'The money paid to the insurance company for the policy.',
          why: 'That payment is the premium. It is not the applicant.',
        },
      ],
    ),
    question(
      'c1q22',
      'Which person receives the benefits of an insurance policy?',
      [
        {
          text: 'The insurer, because it is the principal.',
          why: 'The insurer is the company that issues the policy. It does not receive the policy benefits.',
        },
        {
          text: 'The beneficiary.',
          why: 'A beneficiary is a person who receives the benefits of an insurance policy.',
          correct: true,
        },
        {
          text: 'Any producer, including an agent or a broker.',
          why: 'Producers sell, solicit, or negotiate insurance. Receiving the policy benefits is the role of the beneficiary.',
        },
        {
          text: 'Only the person who submits the application, and only while the application is pending.',
          why: 'The person applying is the applicant, or proposed insured. The beneficiary is the person who receives the benefits.',
        },
      ],
    ),
    question(
      'c1q23',
      'What does indemnity mean for the amount the insured may recover?',
      [
        {
          text: 'The insured may recover the policy limit even when that limit exceeds the loss.',
          why: 'Indemnity means the insured cannot recover more than the loss. Insurance restores the prior position rather than creating a gain.',
        },
        {
          text: 'Recovery is limited to a return of excess premium.',
          why: 'A return of excess premium describes a policyowner dividend on a participating policy. Indemnity limits recovery to the loss itself.',
        },
        {
          text: 'The insured cannot recover more than the loss, and insurance restores the position held before the loss.',
          why: 'Indemnity means the insured cannot recover more than the loss. Insurance restores the insured to the position held before the loss.',
          correct: true,
        },
        {
          text: 'The larger the group of insureds, the more each insured may collect above the loss.',
          why: 'The law of large numbers makes losses more predictable as the group grows. It does not let an insured recover more than the loss.',
        },
      ],
    ),
    question(
      'c1q24',
      'Which description matches an insurance policy?',
      [
        {
          text: 'A mutual interchange of rights and privileges between two insurers.',
          why: 'A mutual interchange of rights and privileges is reciprocity, or a reciprocal. An insurance policy is a contract to pay for a specified loss.',
        },
        {
          text: 'The legal representative who negotiates the sale for the company.',
          why: 'That representative is an agent or other producer. The policy is the contract itself.',
        },
        {
          text: 'A unit of measure used to set rates from age, medical history, occupation, and sex.',
          why: 'That unit is exposure. An insurance policy is the contract between the policyowner and/or insured and the insurer.',
        },
        {
          text: 'A contract between a policyowner and/or an insured and an insurer, which agrees to pay the insured or the beneficiary for loss caused by specific events.',
          why: 'An insurance policy is that contract. The insurer agrees to pay the insured or the beneficiary for loss caused by specific events.',
          correct: true,
        },
      ],
    ),
    question(
      'c1q25',
      'Which statement correctly distinguishes the insured from the policyowner?',
      [
        {
          text: 'The insured is the person covered by the policy and may or may not be the policyowner, who is entitled to exercise the rights and privileges in the policy.',
          why: 'The insured is the person covered and may or may not own the policy. The policyowner is the person entitled to exercise the rights and privileges in the policy.',
          correct: true,
        },
        {
          text: 'The insured must be the policyowner, and the policyowner must also be the beneficiary.',
          why: 'The insured may or may not be the policyowner. The beneficiary is a separate person who receives the benefits.',
        },
        {
          text: 'The insured is the company that issues the policy, and the policyowner is the producer.',
          why: 'The company that issues the policy is the insurer, or principal, and a producer represents the insurer. Neither role defines the insured or the policyowner.',
        },
        {
          text: 'The policyowner is the producer who is not appointed by an insurer and who represents the client.',
          why: 'That producer is a broker. The policyowner is the person entitled to exercise the rights and privileges in the policy.',
        },
      ],
    ),
    question(
      'c1q26',
      'What does the law of large numbers say about people with a similar exposure to loss?',
      [
        {
          text: 'A larger group makes each individual loss impossible to predict.',
          why: 'The law runs in the other direction. A larger number of people with a similar exposure makes actual losses more predictable.',
        },
        {
          text: 'The larger the number of those people, the more predictable actual losses will be.',
          why: 'The law of large numbers says that the larger the number of people with a similar exposure to loss, the more predictable actual losses will be.',
          correct: true,
        },
        {
          text: 'Predictability depends on giving each person a chance of financial gain.',
          why: 'A chance of gain is speculative risk, which insurers do not accept. The law of large numbers concerns similar exposures and predictable losses.',
        },
        {
          text: 'Once the group is large, the person who suffers the loss must bear the whole cost.',
          why: 'Without insurance, the person who suffered the loss would bear the whole cost. The law of large numbers is about predictability, and insurance spreads the cost.',
        },
      ],
    ),
    question(
      'c1q27',
      'What is the premium?',
      [
        {
          text: 'A mutual interchange of rights and privileges.',
          why: 'That is reciprocity, or a reciprocal. The premium is the money paid to the insurance company for the policy.',
        },
        {
          text: 'The reduction in value that results when a peril occurs.',
          why: 'That reduction is a loss. The premium is the price paid to the insurance company for the policy.',
        },
        {
          text: 'The money paid to the insurance company for the policy.',
          why: 'Premium is the money paid to the insurance company for the policy.',
          correct: true,
        },
        {
          text: 'The authority of a producer to act for the insurer.',
          why: 'That relationship is agency. Premium is the payment the insurance company receives for the policy.',
        },
      ],
    ),
  ],
  'c1-risk': [
    question(
      'c1q28',
      'How does the course define risk?',
      [
        {
          text: 'A condition that increases the probability of an insured loss.',
          why: 'That is a hazard. Risk is the uncertainty or chance of a loss occurring.',
        },
        {
          text: 'The cause of a loss.',
          why: 'The cause of a loss is a peril. Risk is the uncertainty or chance that a loss will occur.',
        },
        {
          text: 'The reduction in value that becomes the basis of a claim.',
          why: 'That is a loss, which results when a peril occurs. Risk is the chance that such a loss will occur.',
        },
        {
          text: 'The uncertainty or chance of a loss occurring.',
          why: 'Risk is the uncertainty or chance of a loss occurring. Only one of the two types of risk is insurable.',
          correct: true,
        },
      ],
    ),
    question(
      'c1q29',
      'Which outcomes can pure risk produce?',
      [
        {
          text: 'Only a loss or no change, with no chance of financial gain.',
          why: 'Pure risk can result only in a loss or in no change. There is no chance of financial gain, and it is the only type insurers will accept.',
          correct: true,
        },
        {
          text: 'A chance of loss or a chance of gain.',
          why: 'A chance of loss or gain is speculative risk. Gambling is the textbook example, and it is not insurable.',
        },
        {
          text: 'A guaranteed profit for the person who buys the policy.',
          why: 'Pure risk has no chance of financial gain. Insurance restores rather than creating a profit.',
        },
        {
          text: 'Only a gain, because insurers reject every loss.',
          why: 'Insurers accept pure risk, which can end in a loss or in no change. They do not accept risk that offers a gain.',
        },
      ],
    ),
    question(
      'c1q30',
      'Why is gambling not an insurable risk?',
      [
        {
          text: 'Gambling is pure risk, and insurers accept only speculative risk.',
          why: 'The labels are reversed. Gambling is speculative risk, and pure risk is the only type insurers will accept.',
        },
        {
          text: 'Gambling is speculative risk because it involves a chance of loss or gain.',
          why: 'Speculative risk involves a chance of loss or gain. Gambling is the textbook example, and it is not insurable.',
          correct: true,
        },
        {
          text: 'Gambling is a peril, and the cause of a loss can never be insured.',
          why: 'A peril is the cause of a loss. Gambling is excluded because it is speculative risk, not because perils are uninsurable.',
        },
        {
          text: 'Gambling is a physical condition present at birth.',
          why: 'A physical condition, past medical history, or a condition at birth is a physical hazard. Gambling is a speculative risk.',
        },
      ],
    ),
    question(
      'c1q31',
      'In life insurance, what is exposure, and which factors does the course name?',
      [
        {
          text: 'Exposure is the cause of a loss, measured only by the policy limit.',
          why: 'The cause of a loss is a peril. Exposure is a unit of measure used to determine rates.',
        },
        {
          text: 'Exposure is indifference to loss, measured by age alone.',
          why: 'Indifference to loss is a morale hazard. Exposure uses several life factors, not a state of mind.',
        },
        {
          text: 'Exposure is a unit of measure used to determine rates, and the life factors include age, medical history, occupation, and sex.',
          why: 'Exposure is a unit of measure used to determine rates. In life insurance the factors include age, medical history, occupation, and sex.',
          correct: true,
        },
        {
          text: 'Exposure is a formal exchange in which subscribers share losses after a claim is paid.',
          why: 'A reciprocal insurance exchange is a formal risk-sharing arrangement. Exposure is the rating unit, not that arrangement.',
        },
      ],
    ),
    question(
      'c1q32',
      'Which group does the course call homogeneous, and among whom does insurance share risk?',
      [
        {
          text: 'A group chosen because every member already expects a loss, with risk shared only by those members.',
          why: 'People who buy because they have a higher probability of loss illustrate adverse selection. A homogeneous group is built from similar exposure, not from expected loss.',
        },
        {
          text: 'A group facing a chance of gain, with risk shared by the stockholders of the insurer.',
          why: 'A chance of gain is speculative and is not insurable. Stockholders share company profits or losses, which is not the homogeneous pool.',
        },
        {
          text: 'A small group whose members have unlike exposures, so that losses stay unpredictable.',
          why: 'Homogeneous means the same or similar exposure. Unlike exposures are the opposite of that group.',
        },
        {
          text: 'A large number of units with the same or similar exposure to loss. Insurance shares risk among the members of that large homogeneous group.',
          why: 'A large number of units with the same or similar exposure to loss is homogeneous. Insurance shares risk among the members of a large homogeneous group.',
          correct: true,
        },
      ],
    ),
    question(
      'c1q33',
      'What is a hazard?',
      [
        {
          text: 'A condition that increases the probability of an insured loss.',
          why: 'Hazards are conditions that increase the probability of an insured loss. Physical, moral, and morale hazards are the three forms named in the course.',
          correct: true,
        },
        {
          text: 'The uncertainty that a loss will occur.',
          why: 'That uncertainty is risk. A hazard is a condition that makes an insured loss more probable.',
        },
        {
          text: 'The cause of a loss.',
          why: 'The cause of a loss is a peril. A hazard increases the probability that a loss will occur.',
        },
        {
          text: 'The reduction in value that results when a peril occurs.',
          why: 'That reduction is the loss, and it is the basis of a claim. A hazard is the condition that raises the probability of the loss.',
        },
      ],
    ),
    question(
      'c1q34',
      'Which description matches a physical hazard?',
      [
        {
          text: 'A tendency toward increased risk that is tied to character and reputation, such as a fraudulent claim.',
          why: 'That is a moral hazard. Lying on an application and fraudulent claims are the course examples of character risk.',
        },
        {
          text: 'An individual characteristic such as a physical condition, past medical history, or a condition at birth, such as blindness.',
          why: 'Physical hazards are individual characteristics such as a physical condition, past medical history, or a condition at birth, such as blindness.',
          correct: true,
        },
        {
          text: 'A state of mind that causes indifference to loss, such as carelessness.',
          why: 'That is a morale hazard. It comes from attitude, not from a physical condition or a condition at birth.',
        },
        {
          text: 'The cause of the loss itself.',
          why: 'The cause of a loss is a peril. A physical hazard increases the chance of loss, but it is not the peril.',
        },
      ],
    ),
    question(
      'c1q35',
      'How do a peril and a loss differ?',
      [
        {
          text: 'A peril is indifference to loss, and a loss is a physical condition at birth.',
          why: 'Indifference is a morale hazard, and a condition at birth is a physical hazard. Neither term is the peril or the loss.',
        },
        {
          text: 'A peril is the uncertainty of loss, and a loss is a unit used to set rates.',
          why: 'Uncertainty is risk, and the rating unit is exposure. A peril causes the loss, and the loss is the reduction in value.',
        },
        {
          text: 'A peril is the cause of a loss. A loss is the reduction in value, or the basis of a claim, that results when a peril occurs.',
          why: 'A peril is the cause of a loss. A loss is the reduction in value, or the basis of a claim, that results when a peril occurs.',
          correct: true,
        },
        {
          text: 'A peril is a chance of gain, and a loss is the profit the insured is allowed to keep.',
          why: 'A chance of gain is speculative risk, which is not insurable. Indemnity does not let the insured profit from the loss.',
        },
      ],
    ),
  ],
  'c1-handling': [
    question(
      'c1q36',
      'A person who never flies, so as to eliminate the exposure to dying in a plane crash, is using which method of handling risk?',
      [
        {
          text: 'Retention, because the person is funding a loss that cannot be insured.',
          why: 'Funding an uninsurable loss is one use of retention. Never flying eliminates the exposure, which is avoidance.',
        },
        {
          text: 'Reduction, because the person is lessening the severity of an airplane loss.',
          why: 'Reduction lessens possibility or severity, as with a lifestyle change. Eliminating the exposure entirely is avoidance.',
        },
        {
          text: 'Transfer, because the airline bears the financial loss.',
          why: 'Transfer moves the loss to another party. Refusing to fly removes the exposure instead of moving it.',
        },
        {
          text: 'Avoidance, which eliminates the exposure. The method works, but it is seldom practical.',
          why: 'Avoidance means eliminating exposure to a loss. Never flying avoids the risk of dying in a plane crash, but avoidance is seldom practical.',
          correct: true,
        },
      ],
    ),
    question(
      'c1q37',
      'Retention is the planned assumption of risk through which arrangements, and what does the insured accept before the insurer pays?',
      [
        {
          text: 'Deductibles, copayments, or self-insurance. The insured accepts the loss before the insurer pays.',
          why: 'Retention is the planned assumption of risk through deductibles, copayments, or self-insurance. The insured accepts the loss before the insurer pays.',
          correct: true,
        },
        {
          text: 'A refusal to engage in the activity that creates the exposure.',
          why: 'Eliminating the exposure is avoidance. Retention assumes part of the risk rather than eliminating it.',
        },
        {
          text: 'A group arrangement in which similar businesses share whatever losses occur.',
          why: 'That is sharing. A reciprocal insurance exchange is the formal example, not a deductible or self-insurance.',
        },
        {
          text: 'A hold-harmless contract that moves the entire loss to another party.',
          why: 'Hold-harmless and other contracts transfer risk. Retention leaves a planned portion with the insured.',
        },
      ],
    ),
    question(
      'c1q38',
      'For which purposes does the course say retention is used?',
      [
        {
          text: 'To remove an exposure that is seldom practical to keep, such as air travel.',
          why: 'Eliminating exposure is avoidance, and avoidance is seldom practical. Retention has different purposes.',
        },
        {
          text: 'To reduce expenses and improve cash flow, to increase control of claim reserving and settlements, and to fund losses that cannot be insured.',
          why: 'Those are the three uses of retention named in the course. The insured plans to assume that risk.',
          correct: true,
        },
        {
          text: 'To make the loss borne by another party, which is the most effective method.',
          why: 'Moving the loss to another party is transfer, and transfer is the most effective way to handle risk. Retention keeps a planned share.',
        },
        {
          text: 'To require a reinsurer to accept every risk ceded for a year or longer.',
          why: 'A treaty, or automatic reinsurance, binds the reinsurer to accept ceded risks. That is not retention by the insured.',
        },
      ],
    ),
    question(
      'c1q39',
      'How does sharing handle risk?',
      [
        {
          text: 'One person eliminates the exposure by never taking the risk.',
          why: 'Eliminating exposure is avoidance. Sharing keeps the exposure inside a group and divides the losses.',
        },
        {
          text: 'The insured accepts the first part of the loss through a deductible or copayment.',
          why: 'A deductible or copayment is retention. Sharing spreads losses across a group with a similar exposure.',
        },
        {
          text: 'A group of people or businesses with the same or similar exposure shares the losses that occur in that group.',
          why: 'Sharing is used by a group with the same or similar exposure. A reciprocal insurance exchange is a formal risk-sharing arrangement.',
          correct: true,
        },
        {
          text: 'The financial loss is moved to an insurance company, which is the most common method of transfer.',
          why: 'Buying insurance is transfer, the most common method. Sharing is the group method, not the purchase of a policy from an insurer.',
        },
      ],
    ),
    question(
      'c1q40',
      'What does reduction do to a risk?',
      [
        {
          text: 'It eliminates the exposure, though that approach is seldom practical.',
          why: 'Eliminating the exposure is avoidance. Reduction leaves the exposure in place but lessens the loss.',
        },
        {
          text: 'It plans for the insured to assume the loss through self-insurance.',
          why: 'Self-insurance is retention. Reduction acts on the possibility or severity of the loss.',
        },
        {
          text: 'It divides losses among businesses with a similar exposure.',
          why: 'Dividing losses inside a similar group is sharing. Reduction is a step the person takes to lessen loss.',
        },
        {
          text: 'It lessens the possibility or severity of a loss. Lifestyle changes are one example.',
          why: 'Reduction lessens the possibility or severity of a loss. Lifestyle changes, smoke detectors, and an annual physical are the course examples.',
          correct: true,
        },
      ],
    ),
    question(
      'c1q41',
      'Which statement about the most effective way to handle risk is correct?',
      [
        {
          text: 'Transfer it so the loss is borne by another party. Insurance is the most common method, and buying coverage relieves the financial loss without eliminating the risk of death or illness.',
          why: 'The most effective way to handle risk is to transfer it so the loss is borne by another party. Insurance is the safest and most common method of transfer, and buying it relieves the financial loss without eliminating the risk of death or illness.',
          correct: true,
        },
        {
          text: 'Avoid the exposure entirely, because avoidance is both the most effective method and always practical.',
          why: 'Avoidance can work, but it is seldom practical. The course calls transfer the most effective way to handle risk.',
        },
        {
          text: 'Retain every loss, because retention gives the insured complete control and removes the need for another party.',
          why: 'Retention is used for expenses, cash flow, claim control, and uninsurable losses. It is not described as the most effective method.',
        },
        {
          text: 'Share the loss inside a group, because a reciprocal exchange eliminates the risk of death or illness.',
          why: 'A reciprocal is a formal sharing arrangement. Sharing does not eliminate death or illness, and it is not the method the course calls most effective.',
        },
      ],
    ),
    question(
      'c1q42',
      'Other than buying insurance, what else can transfer risk?',
      [
        {
          text: 'A deductible, a copayment, or a self-insurance plan.',
          why: 'Those are retention. The insured assumes that portion instead of moving it away.',
        },
        {
          text: 'Hold-harmless and other contracts.',
          why: 'Transfer moves the loss to another party. Hold-harmless and other contracts can transfer risk, and insurance is the most common method.',
          correct: true,
        },
        {
          text: 'An annual physical or another lifestyle change.',
          why: 'Those steps are reduction. They lessen possibility or severity rather than moving the loss to another party.',
        },
        {
          text: 'Refusing to fly so the exposure never exists.',
          why: 'Never flying is avoidance. It eliminates exposure instead of transferring the loss.',
        },
      ],
    ),
  ],
  'c1-insurable': [
    question(
      'c1q43',
      'Which losses meet the requirement that an insurable risk be due to chance?',
      [
        {
          text: 'Losses the insured schedules in order to collect the benefit.',
          why: 'A loss the insured schedules is within the control of the insured. Due to chance means the loss is outside the control of the insured.',
        },
        {
          text: 'Losses that offer a realistic chance of financial gain.',
          why: 'A chance of gain is speculative risk. Due to chance refers to a loss outside the control of the insured, not to a chance of profit.',
        },
        {
          text: 'Losses outside the control of the insured.',
          why: 'Due to chance means the loss is outside the control of the insured.',
          correct: true,
        },
        {
          text: 'Only catastrophic losses, such as war and nuclear events.',
          why: 'War and nuclear events are the losses policies usually exclude. An insurable loss must not be catastrophic, and it must be due to chance.',
        },
      ],
    ),
    question(
      'c1q44',
      'Why must an insurable loss be definite and measurable?',
      [
        {
          text: 'So the insured can decide the time and amount of the loss.',
          why: 'The insured does not get to set the loss. Definite and measurable means the loss is specific as to cause, time, place, and amount.',
        },
        {
          text: 'So the contract can pay a profit above the amount of the loss.',
          why: 'Indemnity does not allow recovery above the loss. The definite-and-measurable element lets the insurer determine the benefit.',
        },
        {
          text: 'So the insurer can ignore cause, time, place, and amount.',
          why: 'The element requires those specifics. Without them the insurer cannot tell the amount of the benefit or when it is payable.',
        },
        {
          text: 'So the insurer can tell how much the benefit is and when it is payable. The loss must be specific as to cause, time, place, and amount.',
          why: 'A definite and measurable loss is specific as to cause, time, place, and amount, so the insurer can tell how much the benefit is and when it is payable.',
          correct: true,
        },
      ],
    ),
    question(
      'c1q45',
      'What do mortality tables and morbidity tables allow an insurer to do?',
      [
        {
          text: 'Estimate the average frequency and severity of future losses and set premium rates.',
          why: 'Statistically predictable means the insurer can estimate average frequency and severity and set rates. Mortality tables and morbidity tables are used in life and health insurance.',
          correct: true,
        },
        {
          text: 'Prove that the insured controlled the cause of the loss.',
          why: 'An insurable loss must be outside the control of the insured. These tables are used to estimate future losses, not to prove control.',
        },
        {
          text: 'Replace underwriting as the protection against adverse selection.',
          why: 'Underwriting protects the insurer against adverse selection. Mortality and morbidity tables support prediction and rates.',
        },
        {
          text: 'Show that every pure risk is catastrophic and therefore unrateable.',
          why: 'Catastrophic risk is the element insurers avoid, and war and nuclear events have no statistical basis for a rate. These tables exist so life and health losses can be estimated.',
        },
      ],
    ),
    question(
      'c1q46',
      'The rule that an insurable risk must not be catastrophic requires which belief by the insurer?',
      [
        {
          text: 'The loss will remain within the control of the insured.',
          why: 'Control by the insured defeats the due-to-chance element. The catastrophic element is about losses staying within limits.',
        },
        {
          text: 'The insurer can be reasonably certain that losses will not exceed specific limits.',
          why: 'Not catastrophic means the insurer needs to be reasonably certain losses will not exceed specific limits.',
          correct: true,
        },
        {
          text: 'There is a chance of gain large enough to offset a war loss.',
          why: 'A chance of gain is speculative and is not insurable. War losses are excluded because they are catastrophic and have no statistical basis for a rate.',
        },
        {
          text: 'The pool can be limited to people who already expect to have a loss.',
          why: 'A pool tilted toward people who expect a loss is adverse selection. The catastrophic element is about limits on losses, not about who is eager to buy.',
        },
      ],
    ),
    question(
      'c1q47',
      'A randomly selected and large loss exposure requires which kind of pool?',
      [
        {
          text: 'A small pool limited to people who can control their losses.',
          why: 'Losses within the control of the insured are not due to chance. The pool must be large and randomly selected.',
        },
        {
          text: 'A pool made up only of people with a higher probability of loss.',
          why: 'That concentration is adverse selection. Random selection is meant to represent a spread of risks, and underwriting guards against adverse selection.',
        },
        {
          text: 'A large pool that represents a random selection by age, gender, occupation, health, economic status, and location.',
          why: 'There must be a large pool that represents a random selection of risks by age, gender, occupation, health, economic status, and location.',
          correct: true,
        },
        {
          text: 'A pool of one occupation in one location, with age and health held out of the selection.',
          why: 'Limiting the pool to one occupation and location, and ignoring age and health, contradicts the random selection the element requires.',
        },
      ],
    ),
    question(
      'c1q48',
      'What protects the insurer against adverse selection?',
      [
        {
          text: 'Paying taxable dividends to stockholders.',
          why: 'Stockholder dividends depend on profit of a stock company. They are not the protection against adverse selection.',
        },
        {
          text: 'Accepting speculative risk so the chance of gain balances the pool.',
          why: 'Speculative risk is not insurable. Adverse selection is about who buys, and underwriting is the protection.',
        },
        {
          text: 'Raising the benefit above the financial loss so lower risks will apply.',
          why: 'Indemnity does not let anyone profit from the loss. Paying more than the loss is not the guard against adverse selection.',
        },
        {
          text: 'Underwriting.',
          why: 'Adverse selection is the tendency of people with a higher probability of loss to buy insurance more often than people who present a lower risk. Underwriting protects the insurer against it.',
          correct: true,
        },
      ],
    ),
    question(
      'c1q49',
      'Does every pure risk qualify for insurance?',
      [
        {
          text: 'No. Insurers insure only pure risks, and even those must have the characteristics of an insurable risk.',
          why: 'Not all risks are insurable. Insurers insure only pure risks, and even those must have certain characteristics.',
          correct: true,
        },
        {
          text: 'Yes. Any pure risk is insurable even when the insured controls it and the loss is catastrophic.',
          why: 'Control by the insured and catastrophic loss both fail the elements. Pure risk is required, and the other characteristics are required too.',
        },
        {
          text: 'No. Insurers prefer speculative risk once a premium is paid.',
          why: 'Insurers accept pure risk, not speculative risk. Paying a premium does not turn a chance of gain into an insurable risk.',
        },
        {
          text: 'Yes. Pure risk is insurable only when the insured can profit from the loss.',
          why: 'Pure risk has no chance of financial gain, and indemnity does not allow a profit. Profit is not what makes a pure risk insurable.',
        },
      ],
    ),
    question(
      'c1q50',
      'How does the law of large numbers make a premium rate possible?',
      [
        {
          text: 'It removes the need for the loss to be specific as to cause, time, place, and amount.',
          why: 'Definite and measurable remains a separate element. The law of large numbers supplies predictability, not a waiver of those specifics.',
        },
        {
          text: 'The larger number of people with a similar exposure makes actual losses more predictable, and that predictability is what makes a premium rate possible.',
          why: 'The law of large numbers says that the larger the number of people with a similar exposure to loss, the more predictable actual losses will be. That predictability is what makes a premium rate possible.',
          correct: true,
        },
        {
          text: 'It guarantees that people with a higher probability of loss will stay out of the pool.',
          why: 'Keeping higher-probability buyers from distorting the pool is the job of underwriting, which protects against adverse selection.',
        },
        {
          text: 'It lets the insurer set rates without estimating average frequency and severity.',
          why: 'Statistical predictability is the estimate of average frequency and severity. The law of large numbers supports that estimate rather than replacing it.',
        },
      ],
    ),
  ],
  'c1-insurers': [
    question(
      'c1q51',
      'Which statement compares government insurance programs with private policies?',
      [
        {
          text: 'Both are funded by premiums, and government programs exist to pay stockholder dividends.',
          why: 'Private policies are funded by premiums. Government programs are funded with taxes and serve social purposes, not stockholder dividends.',
        },
        {
          text: 'Government programs are funded by policyowner dividends, and private policies are funded by taxes.',
          why: 'The funding sources are reversed. Taxes fund government programs, and premiums fund private policies.',
        },
        {
          text: 'Government programs are funded with taxes and serve national and state social purposes. Private policies are funded by premiums.',
          why: 'Insurance comes from private companies and from government. Government programs are funded with taxes and serve national and state social purposes, while private policies are funded by premiums.',
          correct: true,
        },
        {
          text: 'Government programs are funded by excess and surplus lines brokers, and private policies are funded by a Certificate of Authority.',
          why: 'Surplus lines brokers are a limited path for unauthorized insurers. A Certificate of Authority is permission to transact business, not the funding of a private policy.',
        },
      ],
    ),
    question(
      'c1q52',
      'Private insurers can be classified in which ways?',
      [
        {
          text: 'Only by the state where the producer lives.',
          why: 'Producer residence is not a classification basis. The course lists ownership, authority, domicile, marketing system, and financial rating.',
        },
        {
          text: 'Only by whether they sell coverage to nonmembers.',
          why: 'Selling only to members describes a fraternal. Private insurers are classified on five broader bases, and one company can fit more than one description.',
        },
        {
          text: 'By the age, medical history, occupation, and sex of one beneficiary.',
          why: 'Age, medical history, occupation, and sex are life-insurance exposure factors used to determine rates. They do not classify the insurer.',
        },
        {
          text: 'By ownership, authority to transact business, domicile, marketing system, and financial rating. The same company can fit more than one description.',
          why: 'Private insurers can be classified by ownership, authority to transact business, domicile, marketing system, and financial rating. The same company can fit more than one description.',
          correct: true,
        },
      ],
    ),
    question(
      'c1q53',
      'Who owns a stock insurance company, who provides its capital, and who manages it?',
      [
        {
          text: 'Stockholders own it, provide the capital, and share in profits or losses. Officers elected by the stockholders manage the company.',
          why: 'Stock companies are owned by stockholders, who provide the capital and share in profits or losses. Officers elected by the stockholders manage the company.',
          correct: true,
        },
        {
          text: 'Policyowners own it, and they manage it by receiving a return of excess premium.',
          why: 'Policyowners own a mutual company. A return of excess premium is a participating dividend, not the management of a stock company.',
        },
        {
          text: 'An attorney-in-fact owns it and manages the subscribers.',
          why: 'An attorney-in-fact manages a reciprocal. Subscribers, not stockholders, are the parties in that exchange.',
        },
        {
          text: 'The state owns it, because every stock company is a government social program.',
          why: 'Government programs are a separate source of insurance and are funded with taxes. A stock company is a private insurer owned by stockholders.',
        },
      ],
    ),
    question(
      'c1q54',
      'Which statement describes dividends a stock company may pay to stockholders?',
      [
        {
          text: 'They are a nontaxable return of excess premium and are guaranteed each year.',
          why: 'A nontaxable return of excess premium describes a policyowner dividend on a participating policy. Stockholder dividends are different.',
        },
        {
          text: 'They may be paid to stockholders, they are taxable, and they are not guaranteed because they depend on profit.',
          why: 'Taxable dividends may be paid to stockholders, and they are not guaranteed because they depend on profit. A nonparticipating policy does not pay dividends to policyowners.',
          correct: true,
        },
        {
          text: 'They are paid to policyowners because a stock company traditionally issues participating policies.',
          why: 'Stock companies traditionally issue nonparticipating policies, which do not pay dividends to policyowners. Participating policies belong to mutual companies.',
        },
        {
          text: 'They are required by the Certificate of Authority whenever the company writes business in another state.',
          why: 'A Certificate of Authority is permission to transact business. It does not guarantee a stockholder dividend.',
        },
      ],
    ),
    question(
      'c1q55',
      'Who owns a mutual company, and what kind of policy does it issue?',
      [
        {
          text: 'Stockholders own it and it issues nonparticipating policies.',
          why: 'Stockholder ownership and nonparticipating policies describe a stock company. A mutual company is owned by its policyowners.',
        },
        {
          text: 'Subscribers own the exchange and an attorney-in-fact manages it.',
          why: 'That is a reciprocal, which operates like a mutual but is an unincorporated exchange. A mutual company is owned by the policyowners.',
        },
        {
          text: 'The policyowners own it, and it issues participating policies.',
          why: 'Mutual companies are owned by the policyowners and issue participating policies.',
          correct: true,
        },
        {
          text: `Lloyd's is not an insurance company. It provides facilities for underwriters who each assume part of a risk.`,
          why: `Lloyd's is not an insurance company. A mutual company is owned by the policyowners and issues participating policies.`,
        },
      ],
    ),
    question(
      'c1q56',
      'How does the course describe dividends paid to policyowners on a participating policy?',
      [
        {
          text: 'They are taxable dividends paid to stockholders and they depend on profit.',
          why: 'Taxable, profit-dependent dividends to stockholders belong to a stock company. Participating dividends go to policyowners.',
        },
        {
          text: 'They let the policyowner recover more than the financial loss.',
          why: 'Indemnity bars recovery above the loss. A participating dividend is a return of excess premium, not a profit on the loss.',
        },
        {
          text: 'They are funded by taxes because participating policies are government programs.',
          why: 'Government programs are funded with taxes. Participating dividends are a return of excess premium on a mutual policy.',
        },
        {
          text: 'They are a return of excess premium and are generally not taxable.',
          why: 'Participating policies may pay dividends to policyowners. Those dividends are a return of excess premium and are generally not taxable.',
          correct: true,
        },
      ],
    ),
    question(
      'c1q57',
      'Which statement about a fraternal benefit society is correct?',
      [
        {
          text: 'It provides insurance for members of an affiliated lodge, religious organization, or fraternal organization with a representative form of government. It sells only to members and is considered a charitable institution.',
          why: 'A fraternal benefit society provides insurance for members of those organizations with a representative form of government. Fraternals sell only to members and are considered charitable institutions.',
          correct: true,
        },
        {
          text: 'It sells to any member of the public and is owned by stockholders who elect the officers.',
          why: 'Stockholder ownership describes a stock company. A fraternal sells only to its own members.',
        },
        {
          text: 'It is a liability insurer owned by members of the same industry who are not required to belong to a lodge or similar group.',
          why: 'A risk retention group is owned by members who share a business or industry liability risk. A fraternal is tied to a lodge, religious organization, or fraternal organization.',
        },
        {
          text: 'It is an unincorporated exchange managed by an attorney-in-fact and open to any subscriber.',
          why: 'That structure is a reciprocal. A fraternal is a society for its members, not an exchange of indemnity agreements among subscribers.',
        },
      ],
    ),
    question(
      'c1q58',
      'Which products may a fraternal benefit society issue, and which products does it not issue?',
      [
        {
          text: 'Only property and liability policies, and only to the general public.',
          why: 'Fraternals do not issue property or liability policies, and they sell only to members. The permitted products are life, health, and annuities.',
        },
        {
          text: 'Life insurance, including endowments, health insurance, and annuities. It does not issue property or liability policies.',
          why: 'Fraternals may issue life insurance, including endowments, health insurance, and annuities. They do not issue property or liability policies.',
          correct: true,
        },
        {
          text: 'Only surplus lines liability policies for members of one industry.',
          why: 'A risk retention group assumes and spreads member liability. A fraternal may issue life, health, and annuity products, not property or liability policies.',
        },
        {
          text: `Nonparticipating policies for stockholders, plus property insurance through an American Lloyd's association.`,
          why: `Nonparticipating policies are the traditional stock-company product. American Lloyd's associations operate mainly in property insurance, which a fraternal does not issue.`,
        },
      ],
    ),
    question(
      'c1q59',
      `What is Lloyd's, as the course uses that name?`,
      [
        {
          text: 'A stock company that issues nonparticipating policies to the public.',
          why: `A stock company is an insurer owned by stockholders. Lloyd's is not an insurance company.`,
        },
        {
          text: 'A government program funded with taxes for a social purpose.',
          why: `Government programs are funded with taxes and serve social purposes. Lloyd's is a facility for underwriters, not that program.`,
        },
        {
          text: `Lloyd's is not an insurance company. It provides facilities for underwriters who each assume a part of a risk, and each member is liable only for that member's portion.`,
          why: `Lloyd's is not an insurance company. It provides facilities for underwriters who each assume a part of a risk, and each member is liable only for that member's portion.`,
          correct: true,
        },
        {
          text: 'An admitted insurer that holds a Certificate of Authority without meeting the financial requirements of the state.',
          why: `An admitted insurer has a Certificate of Authority and meets the financial requirements of the state. Lloyd's is not itself an insurance company.`,
        },
      ],
    ),
    question(
      'c1q60',
      `Where do American Lloyd's associations mainly operate, and what do most states do about organizing or licensing them?`,
      [
        {
          text: 'They operate mainly in life insurance, and every state must license them.',
          why: `American Lloyd's associations operate mainly in property insurance. Most states prohibit organizing or licensing them.`,
        },
        {
          text: 'They issue annuities to the general public as mutual companies.',
          why: `Mutual companies are owned by policyowners and may issue participating policies. American Lloyd's associations are not that mutual product.`,
        },
        {
          text: 'They are domestic insurers by definition because they conduct business in this state.',
          why: `Domicile is the place of incorporation, not where business is conducted. American Lloyd's associations are not domestic merely because they operate in a state.`,
        },
        {
          text: 'They operate mainly in property insurance, and most states prohibit organizing or licensing them.',
          why: `American Lloyd's associations operate mainly in property insurance, and most states prohibit organizing or licensing them.`,
          correct: true,
        },
      ],
    ),
    question(
      'c1q61',
      'How is a reciprocal organized and managed?',
      [
        {
          text: 'It is an unincorporated exchange of indemnity agreements among subscribers, managed by an attorney-in-fact. It operates like a mutual, and subscribers are liable for their share of losses and expenses.',
          why: 'A reciprocal is an unincorporated exchange of indemnity agreements among subscribers, managed by an attorney-in-fact, and it operates like a mutual. Subscribers are liable for their share of losses and expenses.',
          correct: true,
        },
        {
          text: 'It is a corporation owned by stockholders who elect the officers.',
          why: 'Stockholder ownership and elected officers describe a stock company. A reciprocal is unincorporated.',
        },
        {
          text: `It is Lloyd's, and Lloyd's as the insurer assumes the whole risk.`,
          why: `Lloyd's is not an insurance company, and each member is liable only for that member's portion. A reciprocal is an exchange among subscribers.`,
        },
        {
          text: 'It is a government social program funded with taxes.',
          why: 'Government programs are funded with taxes and serve national and state social purposes. A reciprocal is an unincorporated exchange among subscribers.',
        },
      ],
    ),
    question(
      'c1q62',
      'What is a risk retention group?',
      [
        {
          text: 'An insurer that sells property policies to the general public.',
          why: 'Property policies for the public are not the purpose of a risk retention group. Fraternals also do not issue property policies, but they are a different organization.',
        },
        {
          text: 'A liability insurance company owned by its members, who are in the same business or industry and share similar liability risks. Its purpose is to assume and spread the liability of its members.',
          why: 'A risk retention group is a liability insurance company owned by its members, who are in the same business or industry and share similar liability risks. Its purpose is to assume and spread the liability of its members.',
          correct: true,
        },
        {
          text: 'A fraternal that may issue life insurance and annuities but may not issue liability coverage.',
          why: 'A fraternal may not issue property or liability policies. A risk retention group exists to assume and spread member liability.',
        },
        {
          text: 'A reinsurer that must accept all risks ceded under a treaty negotiated for a year or longer.',
          why: 'A treaty, also called automatic reinsurance, is a blanket arrangement usually negotiated for a year or longer. A risk retention group is a liability company owned by members of one business or industry.',
        },
      ],
    ),
    question(
      'c1q63',
      'What must an insurer obtain before transacting business in this state, and which insurer is admitted?',
      [
        {
          text: 'A participating policy. The insurer is admitted only when it pays nontaxable dividends.',
          why: 'Participating policies and nontaxable dividends describe a mutual company. Admission is a Certificate of Authority plus the financial requirements of the state.',
        },
        {
          text: 'An appointment from a broker who represents the client. Foreign insurers are admitted by that appointment alone.',
          why: 'A broker represents the client and is not appointed by the insurer. A broker appointment does not make an insurer admitted.',
        },
        {
          text: 'A Certificate of Authority. An admitted insurer has that certificate and meets the financial requirements of the state. A nonadmitted insurer does not.',
          why: 'Insurers must obtain a Certificate of Authority before transacting business in this state. An admitted insurer has that certificate and meets the financial requirements of the state, and a nonadmitted insurer does not.',
          correct: true,
        },
        {
          text: 'A reinsurance treaty. The ceding insurer becomes admitted when the reinsurer accepts all ceded risks.',
          why: 'Treaty reinsurance is an agreement between insurers. It is not the state certificate that makes an insurer admitted.',
        },
      ],
    ),
    question(
      'c1q64',
      'How do most states treat an unauthorized insurer?',
      [
        {
          text: 'They allow it to transact business freely whenever it is incorporated in another state.',
          why: 'Incorporation in another state makes the insurer foreign, which is domicile, not permission to transact. Unauthorized insurers are barred except for a narrow path.',
        },
        {
          text: 'They treat it as admitted as soon as it is a mutual company.',
          why: 'Mutual ownership does not confer admission. An admitted insurer needs a Certificate of Authority and must meet the financial requirements of the state.',
        },
        {
          text: 'They let a captive agent place its policies without a surplus lines license.',
          why: 'A captive agent represents one appointed insurer. The exception for unauthorized insurers runs through licensed excess and surplus lines brokers.',
        },
        {
          text: 'They bar it except through licensed excess and surplus lines brokers. Every insurer, wherever it is incorporated, still needs a Certificate of Authority before it transacts insurance in the state.',
          why: 'Most states bar unauthorized insurers except through licensed excess and surplus lines brokers. Every insurer, wherever it is incorporated, still needs a Certificate of Authority before it transacts insurance in the state.',
          correct: true,
        },
      ],
    ),
    question(
      'c1q65',
      'Which description of insurer domicile is accurate?',
      [
        {
          text: 'Domicile is where an insurer is incorporated, not necessarily where it conducts business. Domestic means incorporated in this state. Foreign means incorporated in another state, the District of Columbia, or a U.S. territory, including American Samoa, Guam, the Northern Mariana Islands, Puerto Rico, and the U.S. Virgin Islands. Alien means incorporated outside the United States. A company chartered in Puerto Rico is foreign in any U.S. state.',
          why: 'Domicile is the place of incorporation, not necessarily the place of business, and domestic, foreign, and alien follow that place. A company chartered in Puerto Rico is foreign in any U.S. state because Puerto Rico is a U.S. territory.',
          correct: true,
        },
        {
          text: 'Domicile is wherever the insurer conducts business, so a company chartered in Puerto Rico is domestic in every state where it sells.',
          why: 'Domicile is incorporation, not the place of sale. A Puerto Rico charter is foreign in any U.S. state.',
        },
        {
          text: 'An alien insurer is one incorporated in Guam, Puerto Rico, or another U.S. territory, and a domestic insurer is one incorporated in another state.',
          why: 'Territorial insurers are foreign, not alien. Domestic means incorporated in this state, and alien means incorporated outside the United States.',
        },
        {
          text: 'A domestic insurer is any company incorporated outside the United States, and a foreign insurer cannot obtain a Certificate of Authority.',
          why: 'Incorporation outside the United States is alien. Foreign describes domicile, and a foreign insurer can be admitted once it has a Certificate of Authority.',
        },
      ],
    ),
  ],
  'c1-market': [
    question(
      'c1q66',
      'Which statement describes the independent agency system, also called the American agency system?',
      [
        {
          text: 'One agent represents one company, and renewals can be placed only with the appointing insurer.',
          why: 'That is an exclusive agency, or captive agent. An independent agent represents several companies and may place renewals with any of them.',
        },
        {
          text: 'One agent represents several companies, is nonexclusive, earns commissions on personal sales, and may place renewals with any company.',
          why: 'In the independent agency, or American agency, system, one agent represents several companies, is nonexclusive, earns commissions on personal sales, and may place renewals with any company.',
          correct: true,
        },
        {
          text: 'A salaried branch manager supervises agents who may be employees or independent contractors.',
          why: 'That is the managerial system. The independent agent is nonexclusive and is paid commissions on personal sales.',
        },
        {
          text: 'No agent is used, and consumers apply after mass-marketing advertising.',
          why: 'That is direct response. The independent agency system uses an agent who represents several companies.',
        },
      ],
    ),
    question(
      'c1q67',
      'An exclusive agency, also called a captive agent arrangement, restricts the agent in which way?',
      [
        {
          text: 'The agent must represent several companies and may move renewals to any of them.',
          why: 'Representing several companies and placing renewals freely describes the independent agency system.',
        },
        {
          text: 'The agent is an entrepreneur who appoints subagents and is paid compensation plus commissions.',
          why: 'A general agent entrepreneur represents one company and appoints subagents. The captive restriction in this question is about renewals.',
        },
        {
          text: 'One agent represents one company, and renewals can be placed only with the appointing insurer.',
          why: 'Exclusive agency, or captive agents, means one agent represents one company. Renewals can be placed only with the appointing insurer.',
          correct: true,
        },
        {
          text: 'The agent is replaced by mail, internet, television, or other mass marketing.',
          why: 'Selling with no agents is direct response. A captive agent still represents the appointing insurer.',
        },
      ],
    ),
    question(
      'c1q68',
      'Which description matches the general agency system?',
      [
        {
          text: 'A nonexclusive agent represents several companies and keeps personal commissions on renewals placed anywhere.',
          why: 'That is the independent, or American agency, system. A general agent represents one company.',
        },
        {
          text: 'Renewals can be placed only with the appointing insurer, and the agent does not appoint subagents.',
          why: 'Renewals limited to the appointing insurer describe a captive agent. The general agency point here is the entrepreneur who appoints subagents.',
        },
        {
          text: 'A branch manager is salaried and supervises agents who may be employees or independent contractors.',
          why: 'A salaried branch manager describes the managerial system. A general agent is an entrepreneur paid by compensation and commissions.',
        },
        {
          text: 'A general agent entrepreneur represents one company, is paid by compensation and commissions, and appoints subagents.',
          why: 'In the general agency system, a general agent entrepreneur represents one company, is paid by compensation and commissions, and appoints subagents.',
          correct: true,
        },
      ],
    ),
    question(
      'c1q69',
      'How is the managerial system organized?',
      [
        {
          text: 'A branch manager supervises agents, is salaried, and the agents may be employees or independent contractors.',
          why: 'In the managerial system, a branch manager supervises agents, is salaried, and the agents may be employees or independent contractors.',
          correct: true,
        },
        {
          text: 'One nonexclusive agent represents several insurers and may place renewals with any company.',
          why: 'That is the independent agency system. The managerial system uses a salaried branch manager.',
        },
        {
          text: 'An entrepreneur who represents one company appoints subagents and is paid compensation and commissions.',
          why: 'That is the general agency system. The managerial branch manager is salaried rather than paid as that entrepreneur.',
        },
        {
          text: 'The company uses no agents and waits for consumers to apply directly.',
          why: 'No agents and direct applications describe direct response, not a branch manager supervising agents.',
        },
      ],
    ),
    question(
      'c1q70',
      'What is direct response marketing?',
      [
        {
          text: 'One captive agent represents one company and places renewals only with that insurer.',
          why: 'A captive agent is exclusive agency. Direct response uses no agents.',
        },
        {
          text: 'No agents are used. The company advertises through mail, the internet, television, or other mass marketing, and consumers apply directly.',
          why: 'Direct response uses no agents. The company advertises through mail, the internet, television, or other mass marketing, and consumers apply directly.',
          correct: true,
        },
        {
          text: 'A general agent appoints subagents to make the sales.',
          why: 'Appointing subagents is the general agency system. Direct response does not use agents.',
        },
        {
          text: 'A salaried branch manager hires the agents who meet the public.',
          why: 'A salaried branch manager is the managerial system. Direct response sells without agents.',
        },
      ],
    ),
    question(
      'c1q71',
      'From which results is the financial strength of an insurer judged?',
      [
        {
          text: 'Only from the number of captive agents the insurer appoints.',
          why: 'Captive agency is a marketing system. Financial strength is judged from claims experience, investment earnings, reserves, and management.',
        },
        {
          text: 'From whether the insurer issues participating or nonparticipating policies.',
          why: 'Participating and nonparticipating describe mutual and stock policies. They are not the four results used to judge financial strength.',
        },
        {
          text: 'From claims experience, investment earnings, reserves, and management.',
          why: 'Financial strength is judged from claims experience, investment earnings, reserves, and management.',
          correct: true,
        },
        {
          text: 'From the premium the insured paid and the benefit the beneficiary might collect.',
          why: 'Unequal premium and benefit illustrate an aleatory contract. They are not the measure of insurer financial strength.',
        },
      ],
    ),
    question(
      'c1q72',
      'In a reinsurance contract, which company is the ceding insurer and which company takes the risk?',
      [
        {
          text: 'The ceding insurer takes the risk, and the assuming insurer is the company that originated the policy.',
          why: 'The names are reversed. The originating company cedes, and the assuming insurer, or reinsurer, takes the risk.',
        },
        {
          text: 'Both names refer to the producer who placed the policy.',
          why: 'A producer sells, solicits, or negotiates. Reinsurance is a contract between insurers.',
        },
        {
          text: 'The state is the ceding insurer, and a surplus lines broker is the assuming insurer.',
          why: 'Surplus lines brokers are a path for unauthorized insurers. They are not the two parties to a reinsurance contract.',
        },
        {
          text: 'The originating company is the ceding insurer. The company that takes the risk is the assuming insurer, or reinsurer. The purpose is to protect against catastrophic losses.',
          why: 'Reinsurance is a contract under which one insurer indemnifies another for part or all of its liabilities, in order to protect against catastrophic losses. The originating company is the ceding insurer, and the company that takes the risk is the assuming insurer, or reinsurer.',
          correct: true,
        },
      ],
    ),
    question(
      'c1q73',
      'What does facultative reinsurance cover, and how is that risk underwritten?',
      [
        {
          text: 'A specific policy. The reinsurer underwrites each application separately.',
          why: 'Facultative reinsurance covers a specific policy. The reinsurer underwrites each application separately.',
          correct: true,
        },
        {
          text: 'Every risk the ceding insurer chooses to send, and the reinsurer must accept all of them.',
          why: 'A duty to accept all ceded risks is treaty, or automatic, reinsurance. Facultative underwriting is case by case.',
        },
        {
          text: 'The consumer policy, and the reinsurer replaces the ceding insurer as the company named on that policy.',
          why: 'Reinsurance indemnifies the ceding insurer for part or all of its liabilities. It does not rename the company on the consumer policy.',
        },
        {
          text: 'A Certificate of Authority for the ceding company, renewed each year.',
          why: 'A Certificate of Authority comes from the state. Facultative reinsurance is a specific-policy agreement between insurers.',
        },
      ],
    ),
    question(
      'c1q74',
      'A treaty is also called automatic reinsurance. Which additional description of a treaty is correct?',
      [
        {
          text: 'It covers one specific policy, and the reinsurer may reject that application after a separate underwriting review.',
          why: 'Separate underwriting of one policy is facultative reinsurance. A treaty is a blanket arrangement.',
        },
        {
          text: 'It is a blanket arrangement, and treaties are usually negotiated for a year or longer.',
          why: 'A treaty, also called automatic reinsurance, is a blanket arrangement usually negotiated for a year or longer. Under that arrangement the reinsurer must accept all risks ceded to it.',
          correct: true,
        },
        {
          text: 'It is direct response marketing, in which consumers apply to the company with no agent involved.',
          why: 'Direct response uses no agents, and the company advertises through mail, the internet, television, or other mass marketing. A treaty is a reinsurance arrangement, not that sales method.',
        },
        {
          text: 'It is the judgment of financial strength from claims experience, investment earnings, reserves, and management.',
          why: 'Financial strength is judged from claims experience, investment earnings, reserves, and management. A treaty is a reinsurance contract, not that evaluation.',
        },
      ],
    ),
  ],
  'c1-producers': [
    question(
      'c1q75',
      'What is an agent or producer licensed to do, and on whose behalf?',
      [
        {
          text: 'Mix premium collected from applicants with personal funds of the producer.',
          why: 'Commingling premium collected from applicants with personal funds of the producer is illegal. The license is to sell, solicit, or negotiate insurance for the insurer.',
        },
        {
          text: 'Represent the client as a person who is not appointed by any insurer.',
          why: 'A producer who is not appointed and who represents the client is a broker. The agency point here is acting for the principal.',
        },
        {
          text: 'Sell, solicit, or negotiate insurance on behalf of the principal, the insurer.',
          why: 'An agent or producer is licensed to sell, solicit, or negotiate insurance on behalf of the principal, the insurer.',
          correct: true,
        },
        {
          text: 'Issue the Certificate of Authority that admits the insurer.',
          why: 'A Certificate of Authority is state permission to transact business. A producer does not issue it.',
        },
      ],
    ),
    question(
      'c1q76',
      'Under the law of agency, which acts are treated as the acts of the insurer?',
      [
        {
          text: 'Every act of the applicant, whether or not a producer was involved.',
          why: 'The applicant is the person applying for insurance. The law of agency concerns the producer, not every act of the applicant.',
        },
        {
          text: 'Acts of the beneficiary who receives the policy benefits.',
          why: 'The beneficiary is the person who receives the benefits of the policy. The law of agency concerns acts of the producer within the scope of authority.',
        },
        {
          text: 'Acts outside the scope of authority.',
          why: 'The law of agency treats acts within the scope of authority as the acts of the insurer. Apparent authority is a separate appearance created by the principal, not a rule that every act binds the insurer.',
        },
        {
          text: 'The acts of the producer within the scope of authority.',
          why: 'Under the law of agency, the acts of the producer within the scope of authority are the acts of the insurer.',
          correct: true,
        },
      ],
    ),
    question(
      'c1q77',
      'Whom does an insurance agent represent?',
      [
        {
          text: 'The insurer, not the insured.',
          why: 'An agent represents the insurer, not the insured. Insurance agents represent the insurer, the principal.',
          correct: true,
        },
        {
          text: 'The insured, not the insurer.',
          why: 'Representation of the client fits a broker, who is not appointed by an insurer. An agent represents the insurer.',
        },
        {
          text: 'The beneficiary, but only after a loss occurs.',
          why: 'The beneficiary receives the policy benefits. The agent represents the insurer from the agency relationship, not only after a loss.',
        },
        {
          text: 'The client, as a producer who was not appointed by an insurer.',
          why: 'A producer who is not appointed by an insurer and who represents the client is a broker. An agent represents the insurer.',
        },
      ],
    ),
    question(
      'c1q78',
      'Knowledge of the agent is presumed to be knowledge of which party?',
      [
        {
          text: 'The beneficiary named to receive the proceeds.',
          why: 'The beneficiary receives the benefits. Knowledge of the agent is presumed to be knowledge of the insurer.',
        },
        {
          text: 'The insurer.',
          why: 'Any knowledge of the agent is presumed to be knowledge of the insurer.',
          correct: true,
        },
        {
          text: 'Only the agent, with no effect on the company.',
          why: 'The presumption runs to the insurer. Knowledge of the agent is not confined to the agent.',
        },
        {
          text: 'The state that issued the Certificate of Authority.',
          why: 'A Certificate of Authority is admission to transact business. It is not the party presumed to know what the agent knows.',
        },
      ],
    ),
    question(
      'c1q79',
      'When is the insurer fully responsible for the agent?',
      [
        {
          text: 'Only after the agent has commingled premium with personal funds.',
          why: 'Commingling premium with personal funds of the producer is illegal. It is not the condition that makes the insurer responsible.',
        },
        {
          text: 'If the agent is working outside the contract.',
          why: 'Full responsibility applies if the agent is working within the contract. Work outside the contract is not the rule stated in the course.',
        },
        {
          text: 'If the agent is working within the contract.',
          why: 'If the agent is working within the contract, the insurer is fully responsible.',
          correct: true,
        },
        {
          text: 'Only when the agent is a broker representing the client.',
          why: 'A broker is deemed to represent the client and is not appointed by the insurer. The responsibility rule here is about an agent working within the contract.',
        },
      ],
    ),
    question(
      'c1q80',
      'Payment to the agent counts as payment to whom?',
      [
        {
          text: 'The beneficiary, who must then forward it to the insurer.',
          why: 'The beneficiary receives policy benefits. Payment to the agent is payment to the insurer, not to the beneficiary.',
        },
        {
          text: 'The applicant, as a refund of premium.',
          why: 'The applicant is the person applying. A payment made to the agent is treated as payment to the insurer.',
        },
        {
          text: 'No one other than the agent. The insurer is paid only when the money reaches the company.',
          why: 'Payment to the agent is payment to the insurer. The premium does not have to reach the company before the payment counts.',
        },
        {
          text: 'The insurer.',
          why: 'Payment to the agent is payment to the insurer.',
          correct: true,
        },
      ],
    ),
    question(
      'c1q81',
      'Which tasks does the agent perform with the application and the policy?',
      [
        {
          text: 'Complete applications accurately, submit them for underwriting, and deliver the policy.',
          why: 'The agent completes applications accurately, submits them for underwriting, and delivers the policy.',
          correct: true,
        },
        {
          text: 'Approve the application, issue the policy, and set the premium rate from mortality tables.',
          why: 'Acceptance occurs when the underwriter approves the application and issues a policy, and mortality tables help the insurer estimate losses and set rates. Those tasks are not the agent duties of completing, submitting, and delivering.',
        },
        {
          text: 'Intentionally withhold a material fact from the application.',
          why: 'Intentional withholding of a material fact is concealment, and it can void a policy. The agent duty is to complete the application accurately and submit it.',
        },
        {
          text: 'Ask for a gift or loan as a condition of completing the business, and mix the premium with personal funds.',
          why: 'Asking for a gift or loan as a condition of business is a market-conduct problem, and commingling premium with personal funds is illegal. Neither is the duty to complete, submit, and deliver.',
        },
      ],
    ),
    question(
      'c1q82',
      'Which description matches implied authority?',
      [
        {
          text: 'Authority the principal intends to grant and writes into the contract of the agent.',
          why: 'Authority written in the contract is express authority. Implied authority is not written.',
        },
        {
          text: 'Authority that is not written, but that the agent is assumed to have in order to transact business. It is incidental to express authority because the contract cannot spell out every detail.',
          why: 'Implied authority is not written, but the agent is assumed to have it in order to transact business. It is incidental to express authority because the contract cannot spell out every detail.',
          correct: true,
        },
        {
          text: 'The appearance of authority created when the agent uses stationery of the insurer.',
          why: 'The appearance created by actions, words, or deeds of the principal is apparent, or perceived, authority. Stationery is the course example of that appearance.',
        },
        {
          text: 'The position of trust that comes from handling premium funds.',
          why: 'A person in a position of trust is a fiduciary. Implied authority is a kind of authority, not the fiduciary role.',
        },
      ],
    ),
    question(
      'c1q83',
      'Apparent authority, also called perceived authority, comes from what?',
      [
        {
          text: 'A clause the principal writes into the contract of the agent.',
          why: 'Written authority is express authority. Apparent authority is not that written grant.',
        },
        {
          text: 'Details the contract cannot spell out, which the agent is assumed to have.',
          why: 'Authority assumed because the contract cannot spell out every detail is implied authority.',
        },
        {
          text: 'The appearance of authority created by actions, words, or deeds of the principal. Stationery of the insurer can lead an applicant to believe the agent is authorized to transact insurance for that insurer.',
          why: 'Apparent authority, also called perceived authority, is the appearance of authority created by actions, words, or deeds of the principal. If an agent uses stationery of the insurer, an applicant may believe the agent is authorized.',
          correct: true,
        },
        {
          text: 'A license to sell surplus lines for an unauthorized insurer.',
          why: 'Licensed excess and surplus lines brokers are the exception most states allow for unauthorized insurers. That license is not apparent authority.',
        },
      ],
    ),
    question(
      'c1q84',
      'Which statement about the trust and market-conduct duties of a producer is correct?',
      [
        {
          text: 'The producer may mix premium with personal funds if the applications were completed accurately.',
          why: 'Accurate applications are a duty, but mixing premium with personal funds is still illegal. A fiduciary handles funds of both the insured and the insurer.',
        },
        {
          text: 'Market conduct requires the producer to place personal interest ahead of the public and to request a gift as a condition of completing business.',
          why: 'Professionalism means placing the public interest above personal interest. Asking for a gift or loan as a condition of completing business is one of the practices market conduct addresses, not a requirement.',
        },
        {
          text: 'A fiduciary duty applies only to brokers, and agents have no duty of trust because they represent the insurer.',
          why: 'Agents represent the insurer and still handle funds of both the insured and the insurer. That handling is why the agent is a fiduciary.',
        },
        {
          text: 'The agent is a fiduciary, a person in a position of trust, because the agent handles funds of both the insured and the insurer. Market conduct is the code of ethics covering conflicts of interest, asking for a gift or loan as a condition of completing business, and supplying confidential information. Professionalism means placing the public interest above personal interest, and a failure can bring a penalty.',
          why: 'Because the agent handles funds of both the insured and the insurer, the agent is a fiduciary, and commingling premium with personal funds of the producer is illegal. Market conduct is the ethics code for those business practices, and professionalism puts the public interest first.',
          correct: true,
        },
      ],
    ),
  ],
  'c1-contracts': [
    question(
      'c1q85',
      'What is a contract?',
      [
        {
          text: 'An agreement between two or more parties enforceable by law.',
          why: 'A contract is an agreement between two or more parties enforceable by law.',
          correct: true,
        },
        {
          text: 'Any advertisement that implies coverage, whether or not the parties agree.',
          why: 'Advertising, sales literature, or statements can create reasonable expectations about coverage. A contract still requires an agreement enforceable by law.',
        },
        {
          text: 'A promise that only the insured can enforce, with no duty on the insurer.',
          why: 'In a unilateral insurance contract, the enforceable promise is the promise of the insurer. A contract is still an agreement enforceable by law.',
        },
        {
          text: 'A statement on the application that must be absolutely true.',
          why: 'A statement that must be absolutely true is a warranty. A contract is the agreement itself.',
        },
      ],
    ),
    question(
      'c1q86',
      'In the agreement element, who usually makes the offer, and when does acceptance occur?',
      [
        {
          text: 'The insurer makes the offer by delivering stationery, and the applicant accepts by paying a claim.',
          why: 'Stationery can create apparent authority, but it is not the usual offer. Acceptance is the underwriter approving the application and issuing a policy, not the payment of a claim.',
        },
        {
          text: 'The applicant usually makes the offer by submitting the application. Acceptance occurs when the underwriter approves the application and issues a policy.',
          why: 'Agreement is offer and acceptance. The applicant usually makes the offer by submitting the application, and acceptance occurs when the underwriter approves the application and issues a policy.',
          correct: true,
        },
        {
          text: 'The beneficiary makes the offer at the time of loss, and the agent accepts by delivering the policy.',
          why: 'Delivery is an agent duty, and the beneficiary receives benefits. The usual offer is the application, and acceptance is underwriter approval and issue.',
        },
        {
          text: 'The reinsurer makes the offer, and acceptance is a treaty that lasts a year or longer.',
          why: 'A treaty is reinsurance between insurers. The agreement element of the consumer contract is the application and the underwriter issue of the policy.',
        },
      ],
    ),
    question(
      'c1q87',
      'What is the consideration given by the insurer?',
      [
        {
          text: 'The premium and the representations made in the application.',
          why: 'The premium and the representations in the application are the consideration of the insured. The insurer gives a different promise.',
        },
        {
          text: 'Insurable interest and consent at the time the policy is issued.',
          why: 'A life policy needs insurable interest and consent as part of legal purpose. That is not the consideration of the insurer.',
        },
        {
          text: 'The promise to pay in the event of loss.',
          why: 'Consideration is something of value each party gives. The consideration of the insurer is the promise to pay in the event of loss.',
          correct: true,
        },
        {
          text: 'A waiver of a known legal right by the beneficiary.',
          why: 'Waiver is the voluntary giving up of a known legal right. It is not the consideration the insurer gives.',
        },
      ],
    ),
    question(
      'c1q88',
      'Which parties are competent to contract?',
      [
        {
          text: 'Any party who can pay the premium, including a party under the influence of alcohol.',
          why: 'Payment of premium is part of consideration. Competence still requires that the party not be under the influence of drugs or alcohol.',
        },
        {
          text: 'Any party of any age, as long as the purpose is legal.',
          why: 'Legal purpose is a separate element. Competence requires legal age, mental competence, and freedom from the influence of drugs or alcohol.',
        },
        {
          text: 'Only insurers that have already issued a policy, because applicants need not be competent.',
          why: 'Each party must be competent. The applicant is not excused from legal age, mental competence, and freedom from drugs or alcohol.',
        },
        {
          text: 'Each party must be of legal age, mentally competent, and not under the influence of drugs or alcohol.',
          why: 'Competent parties means each party must be of legal age, mentally competent, and not under the influence of drugs or alcohol.',
          correct: true,
        },
      ],
    ),
    question(
      'c1q89',
      'What does legal purpose require, and what is the status of a contract that lacks it?',
      [
        {
          text: 'The purpose must be legal and not against public policy. A life policy needs insurable interest and consent. A contract without a legal purpose is void.',
          why: 'Legal purpose means the purpose must be legal and not against public policy, and a life policy needs insurable interest and consent. A contract without a legal purpose is void.',
          correct: true,
        },
        {
          text: 'The purpose must give the insured a chance of gain, and a contract without that chance is aleatory.',
          why: 'Unequal amounts make a contract aleatory. A chance of gain is speculative and is not what legal purpose requires.',
        },
        {
          text: 'The insurer must be of legal age, and a contract with a minor insurer is only voidable by the beneficiary.',
          why: 'Legal age is part of competent parties, not the definition of legal purpose. A contract without a legal purpose is void.',
        },
        {
          text: 'The applicant must submit proof of loss before the application can be taken, or the contract is void.',
          why: 'Proof of loss is a condition that must be met before the contract is carried out. It is not the legal-purpose element.',
        },
      ],
    ),
    question(
      'c1q90',
      'Why is an insurance contract personal, and when may a life policy be assigned?',
      [
        {
          text: 'It is personal because the insurer prepared the wording, and a life policy can never be assigned.',
          why: 'Wording prepared by the insurer makes the contract one of adhesion. A life policy may be assigned if the insurer is notified.',
        },
        {
          text: 'The contract is between the insurer and a particular insured. A life policy may be assigned if the insurer is notified.',
          why: 'Insurance contracts are personal: the contract is between the insurer and a particular insured, though a life policy may be assigned if the insurer is notified.',
          correct: true,
        },
        {
          text: 'It is personal because only the insured makes an enforceable promise, so assignment is automatic at death.',
          why: 'Only the insurer makes an enforceable promise, which is the unilateral feature. Assignment of a life policy requires notice to the insurer.',
        },
        {
          text: 'It is personal because the amounts exchanged are unequal, and assignment is barred as against public policy.',
          why: 'Unequal amounts make the contract aleatory. A life policy may be assigned if the insurer is notified, and legal purpose is a separate element.',
        },
      ],
    ),
    question(
      'c1q91',
      'Which statement shows that an insurance contract is unilateral?',
      [
        {
          text: 'The insured writes the contract, and the insurer must accept every sentence as written.',
          why: 'The insurer prepares the contract, and the insured accepts or rejects it. That is adhesion, not the unilateral feature.',
        },
        {
          text: 'Both parties must meet conditions such as proof of loss before anything is paid.',
          why: 'Conditions such as paying the premium and providing proof of loss make the contract conditional.',
        },
        {
          text: 'Only the insurer makes an enforceable promise. The insured does not promise to pay premiums, but the insurer does not have to pay a claim if premiums are not paid.',
          why: 'The contract is unilateral because only the insurer makes an enforceable promise. The insured does not promise to pay premiums, but the insurer does not have to pay a claim if premiums are not paid.',
          correct: true,
        },
        {
          text: 'The premium and the benefit must be equal amounts or the promise cannot be enforced.',
          why: 'The amounts exchanged are unequal, which makes the contract aleatory. Equality is not required for the promise of the insurer to be enforceable.',
        },
      ],
    ),
    question(
      'c1q92',
      'How does a contract of adhesion work, and how is ambiguity resolved?',
      [
        {
          text: 'The insured prepares the contract, and ambiguity is resolved in favor of the insurer.',
          why: 'The insurer prepares the contract. Ambiguity is settled in favor of the insured, not the insurer.',
        },
        {
          text: 'Either party may rewrite the wording after issue, and courts ignore ambiguous sentences.',
          why: 'The insured accepts or rejects the contract the insurer prepared. Courts interpret an ambiguity in favor of the insured.',
        },
        {
          text: 'Both parties draft the wording together so that neither side needs a rule for ambiguity.',
          why: 'Joint drafting is not how this contract is formed. The insurer prepares it, and the insured accepts or rejects it.',
        },
        {
          text: 'The insurer prepares the contract, and the insured accepts or rejects it. Any ambiguity is settled in favor of the insured, and courts interpret an ambiguity that way.',
          why: 'Insurance contracts are contracts of adhesion: the insurer prepares the contract, and the insured accepts or rejects it. Any ambiguity is settled in favor of the insured, and courts interpret it that way.',
          correct: true,
        },
      ],
    ),
    question(
      'c1q93',
      'Under reasonable expectations, when can an insured expect coverage that an agent implied?',
      [
        {
          text: 'When an agent implies coverage through advertising, sales literature, or statements.',
          why: 'Under reasonable expectations, if an agent implies coverage through advertising, sales literature, or statements, the insured can reasonably expect that coverage.',
          correct: true,
        },
        {
          text: 'Only when the implied coverage is written as a warranty that is absolutely true.',
          why: 'A warranty must be absolutely true, and breach can void the policy. Reasonable expectations come from what the agent implies, not from a warranty.',
        },
        {
          text: 'Only after the insured has waived a known legal right.',
          why: 'Waiver is the voluntary giving up of a known legal right. Reasonable expectations are a separate rule about implied coverage.',
        },
        {
          text: 'Whenever the premium and the benefit are unequal amounts.',
          why: 'Unequal amounts make the contract aleatory. They do not decide whether an agent implied coverage.',
        },
      ],
    ),
    question(
      'c1q94',
      'Why is an insurance contract conditional?',
      [
        {
          text: 'Because the insurer prepared the wording and the insured cannot negotiate it.',
          why: 'Preparation by the insurer, with acceptance or rejection by the insured, is adhesion.',
        },
        {
          text: 'Because the policyowner and the company must meet conditions, such as paying the premium and providing proof of loss, before the contract is carried out.',
          why: 'The contract is conditional because the policyowner and the company must meet conditions, such as paying the premium and providing proof of loss, before the contract is carried out.',
          correct: true,
        },
        {
          text: 'Because only the insurer made an enforceable promise.',
          why: 'A promise made only by the insurer is the unilateral feature. Conditions are the steps both sides must meet.',
        },
        {
          text: 'Because the contract follows one particular insured and cannot be assigned.',
          why: 'The contract is personal because it is with a particular insured. A life policy may still be assigned if the insurer is notified.',
        },
      ],
    ),
    question(
      'c1q95',
      'A health policy has a $20,000 limit, and the medical bills are $15,000. How much does indemnity allow the policy to reimburse?',
      [
        {
          text: 'The full $20,000 limit, because the limit is paid even when the bills are lower.',
          why: 'Indemnity, sometimes called reimbursement, pays only to the extent of the financial loss. A $15,000 loss is not paid as $20,000.',
        },
        {
          text: '$100,000, because the amounts exchanged in an insurance contract are unequal.',
          why: 'A $200 premium and a $100,000 benefit illustrate an aleatory contract. They are not the reimbursement on these medical bills.',
        },
        {
          text: '$15,000, and not the $20,000 limit, because recovery is limited to the financial loss.',
          why: 'A health policy with a $20,000 limit reimburses $15,000 of medical bills, not $20,000, when the loss is $15,000. Indemnity restores and does not let anyone profit.',
          correct: true,
        },
        {
          text: '$200, the premium used to show an unequal exchange.',
          why: 'The $200 figure is a premium in the aleatory example. The health loss of $15,000 is reimbursed to the extent of that loss.',
        },
      ],
    ),
    question(
      'c1q96',
      'What does utmost good faith require of the parties?',
      [
        {
          text: 'The insured may conceal material facts if the insurer still collects the premium.',
          why: 'Concealment is the intentional withholding of a material fact and can void a policy. Utmost good faith forbids it.',
        },
        {
          text: 'The insurer may describe benefits in a misleading way if the contract is one of adhesion.',
          why: 'Adhesion means the insurer prepares the contract. Utmost good faith still requires the insurer to describe features and benefits clearly and not to conceal or mislead.',
        },
        {
          text: 'Each party may profit from a loss as long as the amounts exchanged stay unequal.',
          why: 'Unequal amounts are the aleatory feature. Indemnity still blocks a profit, and utmost good faith blocks fraud, misrepresentation, and concealment.',
        },
        {
          text: 'There will be no fraud, misrepresentation, or concealment between the parties. The insured must give accurate information, and the insurer must describe features and benefits clearly and must not conceal or mislead.',
          why: 'Utmost good faith means there will be no fraud, misrepresentation, or concealment between the parties. The insured must give accurate information, and the insurer must describe features and benefits clearly and must not conceal or mislead.',
          correct: true,
        },
      ],
    ),
    question(
      'c1q97',
      'Which description of representations is accurate?',
      [
        {
          text: `They are statements believed to be true to the best of one's knowledge, but they are not guaranteed. On an application they are the answers of the applicant. Untrue statements are misrepresentations and can void the contract.`,
          why: `Representations are statements believed to be true to the best of one's knowledge, but they are not guaranteed, and on an application they are the answers of the applicant. Untrue statements are misrepresentations and can void the contract.`,
          correct: true,
        },
        {
          text: 'They are statements that must be absolutely true, and the validity of the policy depends on them.',
          why: 'A statement that must be absolutely true is a warranty. Representations are believed to be true, but they are not guaranteed.',
        },
        {
          text: 'They are the promise of the insurer to pay in the event of loss.',
          why: 'The promise to pay is the consideration of the insurer. Representations are the statements of the applicant.',
        },
        {
          text: 'They cannot affect the contract even when they are untrue.',
          why: 'Untrue statements are misrepresentations and can void the contract. A material misrepresentation would alter the underwriting decision.',
        },
      ],
    ),
    question(
      'c1q98',
      'When is a misrepresentation material, and what is fraud?',
      [
        {
          text: 'A misrepresentation is material only when the applicant believes the statement is true, and an intentional misstatement is still only a representation.',
          why: 'A statement believed to be true is a representation, and it is not guaranteed. A material misrepresentation would alter the underwriting decision, and an intentional misrepresentation is fraud.',
        },
        {
          text: 'A material misrepresentation would alter the underwriting decision. Fraud is intentional misrepresentation or intentional concealment of a material fact used to induce a contract or to deceive, and fraud is grounds for voiding the contract.',
          why: 'A material misrepresentation would alter the underwriting decision, and if it is intentional it is fraud. Fraud is intentional misrepresentation or intentional concealment of a material fact used to induce a contract or to deceive, and it is grounds for voiding the contract.',
          correct: true,
        },
        {
          text: 'A misrepresentation is material only when it is a warranty, and fraud cannot void the policy.',
          why: 'Statements on life and health applications are usually representations, not warranties, except in cases of fraud. Fraud is grounds for voiding the contract.',
        },
        {
          text: 'Material means the parties exchanged unequal amounts, and fraud is the legal name for an aleatory contract.',
          why: 'Unequal amounts make the contract aleatory. Material refers to the underwriting decision, and fraud is intentional deception or inducement.',
        },
      ],
    ),
    question(
      'c1q99',
      'How does a warranty differ from the statements usually made on a life or health application?',
      [
        {
          text: 'A warranty is believed to be true but is not guaranteed, and life applications use warranties in every case.',
          why: 'A statement believed to be true but not guaranteed is a representation. Life and health application statements are usually representations, not warranties, except in cases of fraud.',
        },
        {
          text: 'A warranty can never void a policy, while a representation always voids it.',
          why: 'Breach of a warranty can void the policy, and a misrepresentation can void the contract as well. Statements on life and health applications are usually representations, not warranties, except in cases of fraud.',
        },
        {
          text: 'A warranty must be absolutely true, and the validity of the policy depends on it. Breach can void the policy. Statements on life and health applications are usually representations, not warranties, except in cases of fraud.',
          why: 'A warranty is a statement that must be absolutely true, and the validity of the policy depends on it. Breach can void the policy, while statements on life and health applications are usually representations, not warranties, except in cases of fraud.',
          correct: true,
        },
        {
          text: 'A warranty is the voluntary giving up of a known legal right, and life applications are warranties because the insurer prepared them.',
          why: 'Giving up a known legal right is waiver. The insurer preparing the contract makes it a contract of adhesion, not a set of warranties.',
        },
      ],
    ),
    question(
      'c1q100',
      'What is concealment, and what can it do to a policy?',
      [
        {
          text: 'It is a statement believed to be true based on personal knowledge, and it cannot affect the policy.',
          why: 'A statement believed to be true, but not guaranteed, is a representation. Concealment is intentional withholding of a material fact, and it can void a policy.',
        },
        {
          text: 'It is the promise to pay in the event of loss, and it is the consideration of the insurer.',
          why: 'The promise to pay is consideration. Concealment is the intentional withholding of a material fact.',
        },
        {
          text: 'It is a court rule that resolves ambiguous wording in favor of the insured.',
          why: 'Resolving ambiguity in favor of the insured is the rule for a contract of adhesion. Concealment is conduct of a party, not that court rule.',
        },
        {
          text: 'It is the intentional withholding of a material fact, and it can void a policy.',
          why: 'Concealment is the intentional withholding of a material fact. It can void a policy.',
          correct: true,
        },
      ],
    ),
    question(
      'c1q101',
      'How are waiver and estoppel related?',
      [
        {
          text: 'Waiver is the voluntary giving up of a known legal right. Estoppel prevents a party from reasserting a right after that right has been waived. Estoppel is the legal consequence of a waiver.',
          why: 'Waiver is the voluntary giving up of a known legal right. Estoppel prevents a party from reasserting a right after that right has been waived, and estoppel is the legal consequence of a waiver.',
          correct: true,
        },
        {
          text: 'Waiver is intentional concealment of a material fact, and estoppel is the premium paid by the insured.',
          why: 'Intentional withholding of a material fact is concealment. The premium is part of the consideration of the insured, not estoppel.',
        },
        {
          text: 'Estoppel is the offer, and waiver is acceptance by the underwriter when the policy is issued.',
          why: 'Offer and acceptance form the agreement element. Waiver and estoppel are what happens after a known right is given up.',
        },
        {
          text: 'Waiver lets the insurer reassert a right it gave up, and estoppel has no effect on that right.',
          why: 'Waiver is the voluntary giving up of a known legal right. Estoppel prevents a party from reasserting a right after that right has been waived.',
        },
      ],
    ),
  ],
}
