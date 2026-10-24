import { question } from './build.ts'
import type { Chapter } from './types.ts'
import { chapter1Extra } from './extra/chapter1.ts'

/** Section text is the current study wording. */
export const chapter1: Chapter = {
  id: 'ch-general',
  number: 1,
  title: 'Insurance Basics',
  summary:
    'What insurance is, how risk is handled, who may issue a policy, and what makes an insurance contract enforceable.',
  sections: [
    {
      id: 'c1-terms',
      title: 'What insurance is',
      body: `Insurance is a contract. The insurance company agrees to indemnify the insured against loss, damage, or liability that comes from an unknown event. Indemnify means the company pays for that covered loss. In life insurance, the policy protects the survivors from the financial loss that follows the insured person's death.

Insurance transfers the risk of loss from a person or a business to an insurer. The insurer spreads the cost of unexpected losses across many people it insures. Without that transfer, the person who suffered the loss would pay the whole cost.

These words are used in every later chapter.

• Agent or producer. A legal representative of an insurance company. Producers include agents and brokers. An agent represents the insurer.
• Applicant or proposed insured. The person applying for insurance.
• Beneficiary. The person who receives the benefits of an insurance policy.
• Broker. A producer who is not appointed by an insurer. The law treats a broker as representing the client.
• Indemnity. The insured cannot recover more than the loss. Insurance restores the insured to the financial position held before the loss.
• Insurance policy. The contract between a policyowner (and/or the insured) and an insurer. The insurer agrees to pay the insured or the beneficiary for loss caused by specific events.
• Insured. The person the policy covers. This person may or may not be the policyowner.
• Insurer (principal). The company that issues the policy.
• Law of large numbers. The larger the number of people with a similar exposure to loss, the more predictable the actual losses will be.
• Policyowner. The person entitled to exercise the rights and privileges in the policy.
• Premium. The money paid to the insurance company for the policy.
• Reciprocity or reciprocal. A mutual interchange of rights and privileges.`,
      questions: [
        question(
          'c1q01',
          'Which statement best describes insurance?',
          [
            {
              text: 'It is the transfer of risk of loss from an individual or business to an insurer.',
              why: 'The course states that insurance is the transfer of risk of loss. The insurer spreads the cost of unexpected losses among many insureds.',
              correct: true,
            },
            {
              text: 'It eliminates the chance that a loss will occur.',
              why: 'Buying insurance does not remove the chance of death, illness, or other loss. It transfers the financial consequence.',
            },
            {
              text: 'It lets the insured recover more than the amount of the loss.',
              why: 'Indemnity means the insured cannot recover more than the loss. The purpose is to restore, not to create a gain.',
            },
            {
              text: 'It is a speculative contract that pays only when the insured has a chance to profit.',
              why: 'Speculative risk, such as gambling, is not insurable. Insurance deals with pure risk.',
            },
          ],
        ),
        question(
          'c1q02',
          'A broker is best described as which of the following?',
          [
            {
              text: 'An insurer’s appointed agent, whose acts within authority are the acts of the company.',
              why: 'That describes an agent of the insurer (the principal), not a broker.',
            },
            {
              text: 'The person covered by the policy, who may or may not own it.',
              why: 'That is the insured. The insured is not automatically the producer.',
            },
            {
              text: 'A producer who is not appointed by an insurer and is deemed to represent the client.',
              why: 'The terms list defines a broker as a producer not appointed by an insurer, representing the client.',
              correct: true,
            },
            {
              text: 'The person named to receive the policy benefit.',
              why: 'That is the beneficiary, not the broker.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c1-risk',
      title: 'Risk, hazard, peril, and loss',
      body: `Risk is the uncertainty, or the chance, that a loss will occur. Only one of the two types can be insured.

Pure risk can end only in a loss or in no change. There is no chance of a financial gain. Pure risk is the only type insurance companies will accept.

Speculative risk involves a chance of loss or a chance of gain. Gambling is the textbook example. Speculative risk is not insurable.

Exposure is a unit of measure used to set rates. In life insurance, the factors include the insured's age, medical history, occupation, and sex. A large number of units with the same or similar exposure to loss is called homogeneous. Insurance shares risk among the members of a large homogeneous group.

A hazard is a condition that increases the probability of an insured loss.

• A physical hazard is an individual characteristic. Examples are a physical condition, past medical history, or a condition at birth, such as a congenital heart defect.
• A moral hazard is a tendency toward increased risk that comes from character and reputation. Lying on an application or submitting a fraudulent claim is a moral hazard. A contractor who says a knee injury never happened, or a store owner who claims a break-in that did not occur, is showing a moral hazard.
• A morale hazard comes from a state of mind that causes indifference to loss, such as carelessness. A cafe owner who stops locking the walk-in cooler, because spoiled food would be insured, is a morale hazard.

A peril is the cause of a loss. A loss is the reduction in value, or the basis of a claim, that results when a peril occurs.`,
      questions: [
        question(
          'c1q03',
          'Which risk will an insurer accept?',
          [
            {
              text: 'Speculative risk, because it offers a chance of gain as well as loss.',
              why: 'Speculative risk is not insurable. Gambling is the course example.',
            },
            {
              text: 'Pure risk, which can result only in a loss or no change.',
              why: 'Pure risk has no opportunity for financial gain, and it is the only type insurers are willing to accept.',
              correct: true,
            },
            {
              text: 'Any risk, as long as the applicant can pay the premium.',
              why: 'Not every risk is insurable. Insurers accept pure risks that also meet the elements of an insurable risk.',
            },
            {
              text: 'Only risks the insured can control.',
              why: 'An insurable loss must be due to chance, outside the insured’s control.',
            },
          ],
        ),
        question(
          'c1q04',
          'An applicant who lies on the application is an example of which hazard?',
          [
            {
              text: 'A physical hazard, because it is a condition present at birth.',
              why: 'A physical hazard is a physical condition, past medical history, or a condition at birth, such as blindness.',
            },
            {
              text: 'A morale hazard, because it is carelessness or indifference to loss.',
              why: 'Morale hazard is a state of mind, such as carelessness. It is not deliberate misstatement.',
            },
            {
              text: 'A moral hazard, because it involves character and a tendency toward increased risk.',
              why: 'Moral hazards include applicants who may lie on an application or who have submitted fraudulent claims.',
              correct: true,
            },
            {
              text: 'A peril, because it is the cause of the loss.',
              why: 'A peril is the cause of a loss. A lie on the application increases the chance of a bad underwriting decision; it is a hazard.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c1-handling',
      title: 'Ways to handle a risk',
      body: `There are five ways to handle a risk.

Avoidance means eliminating the exposure to a loss. A homeowner who decides never to own a pool avoids the risk of a drowning on the property. Avoidance works, but it is seldom practical.

Retention is the planned assumption of risk. Deductibles, copayments, and self-insurance are forms of retention. The insured accepts that part of the loss before the insurer pays. Retention is used to reduce expenses and improve cash flow, to increase control of claim reserving and settlements, and to fund losses that cannot be insured.

Sharing is a method for a group of people or businesses with the same or similar exposure to share the losses that occur in that group. A reciprocal insurance exchange is a formal risk-sharing arrangement.

Reduction lessens the possibility or the severity of a loss. A bakery that adds nonslip mats, a driver who schedules a yearly vision check, and a family that installs a carbon monoxide alarm are all reducing risk.

Transfer moves the loss to another party. Insurance is the most common method. Buying coverage does not eliminate the risk of death or illness. It relieves the insured of the financial loss those events would cause. A hold-harmless agreement and other contracts can also transfer risk. Purchasing insurance is the safest and most common method of transfer.`,
      questions: [
        question(
          'c1q05',
          'Installing smoke detectors and having an annual physical are examples of which method of handling risk?',
          [
            {
              text: 'Avoidance',
              why: 'Avoidance eliminates the exposure entirely, such as never flying. These actions only lessen the chance or severity of loss.',
            },
            {
              text: 'Retention',
              why: 'Retention is the planned assumption of risk, such as a deductible or self-insurance, not a step that reduces the chance of loss.',
            },
            {
              text: 'Reduction',
              why: 'Reduction lessens the possibility or severity of a loss. Smoke detectors and annual physicals are the course examples.',
              correct: true,
            },
            {
              text: 'Sharing',
              why: 'Sharing spreads losses inside a group with a similar exposure, such as a reciprocal exchange.',
            },
          ],
        ),
        question(
          'c1q06',
          'A reciprocal insurance exchange is a formal example of which risk-handling method?',
          [
            {
              text: 'Transfer to an insurance company by purchasing a policy.',
              why: 'Buying a policy is transfer. A reciprocal is a formal sharing arrangement among subscribers.',
            },
            {
              text: 'Sharing of losses among a group with the same or similar exposure.',
              why: 'Sharing lets a group with a similar exposure share the losses that occur. A reciprocal exchange is the formal example.',
              correct: true,
            },
            {
              text: 'Avoidance of the exposure.',
              why: 'Avoidance removes the exposure. Subscribers in a reciprocal still face the loss and share it.',
            },
            {
              text: 'Retention through a deductible.',
              why: 'A deductible is retention by the insured. It is not the reciprocal arrangement.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c1-insurable',
      title: 'Which risks can be insured',
      body: `Not every risk can be insured. Insurers insure only pure risks, and even a pure risk must have these characteristics.

• Due to chance. The loss is outside the insured's control.
• Definite and measurable. The loss is specific as to cause, time, place, and amount. The insurer can tell how much the benefit is and when it is payable.
• Statistically predictable. The insurer can estimate the average frequency and severity of future losses and set premium rates. Life and health insurance uses mortality tables and morbidity tables for that estimate.
• Not catastrophic. The insurer needs to be reasonably certain that losses will not exceed specific limits. Policies usually exclude war and nuclear events because there is no statistical basis for a rate.
• Randomly selected, and a large loss exposure. There must be a large pool that represents a random selection of risks by age, gender, occupation, health, economic status, and location.

Adverse selection is the tendency of people with a higher probability of loss to buy insurance more often than people who present a lower risk. Underwriting protects the insurer against adverse selection.

The law of large numbers says that the larger the number of people with a similar exposure to loss, the more predictable the actual losses will be. That predictability is what makes a premium rate possible.`,
      questions: [
        question(
          'c1q07',
          'Why do policies usually exclude loss caused by war or nuclear events?',
          [
            {
              text: 'Those losses are speculative, so they offer a chance of gain.',
              why: 'War and nuclear losses are catastrophic, not speculative. The problem is that they are not statistically predictable.',
            },
            {
              text: 'Insurers need losses that are not catastrophic, and there is no statistical basis for a rate.',
              why: 'An insurable risk must not be catastrophic. There is no data from which to develop rates for war or nuclear events.',
              correct: true,
            },
            {
              text: 'Those losses are not definite as to time and place.',
              why: 'A war loss can be definite and measurable. The course reason for the exclusion is the catastrophic, unrateable nature of the event.',
            },
            {
              text: 'Only the government may insure pure risks.',
              why: 'Private insurers insure pure risks that meet the insurable-risk elements. Government programs are a separate classification.',
            },
          ],
        ),
        question(
          'c1q08',
          'Adverse selection is best described as which tendency?',
          [
            {
              text: 'Insurers selecting only the largest groups so losses become predictable.',
              why: 'That describes the law of large numbers, not adverse selection.',
            },
            {
              text: 'People with a higher probability of loss buying insurance more often than people who present a lower risk.',
              why: 'That is the course definition of adverse selection. Underwriting is the protection against it.',
              correct: true,
            },
            {
              text: 'Insureds retaining small losses through deductibles.',
              why: 'That is retention, a method of handling risk.',
            },
            {
              text: 'Producers placing business with several insurers at once.',
              why: 'That describes an independent agency marketing system, not adverse selection.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c1-contracts',
      title: 'What makes an insurance contract',
      body: `A contract is an agreement between two or more parties that a court can enforce. An insurance contract needs four elements.

• Agreement. This is offer and acceptance. The applicant usually makes the offer by submitting the application. Acceptance occurs when the underwriter approves the application and issues a policy.
• Consideration. Each party gives something of value. The insured's consideration is the premium and the representations made in the application. The insurer's consideration is the promise to pay in the event of a loss.
• Competent parties. Each party must be of legal age, mentally competent, and not under the influence of drugs or alcohol.
• Legal purpose. The purpose must be legal and not against public policy. A life policy needs insurable interest and the insured's consent. A contract without a legal purpose is void.

Insurance contracts also have features that set them apart from many other contracts.

They are personal. The contract is between the insurer and a particular insured. A life policy may still be assigned if the insurer is notified.

They are unilateral. Only the insurer makes an enforceable promise. The insured does not promise to pay premiums. If the premiums are not paid, the insurer does not have to pay a claim.

They are contracts of adhesion. The insurer prepares the contract, and the insured accepts it or rejects it. Any ambiguity is settled in favor of the insured. Courts interpret an ambiguity in a contract of adhesion in favor of the insured.

Under reasonable expectations, if an agent implies coverage through advertising, sales literature, or statements, the insured can reasonably expect that coverage.

They are aleatory. The amounts exchanged are unequal. Luis pays a $65 premium. If Luis dies while the policy is in force, the beneficiary may receive $80,000.

They are conditional. The policyowner and the company must meet conditions before the contract is carried out. Those conditions include paying the premium and providing proof of loss.

Indemnity, sometimes called reimbursement, means the insured or the beneficiary can collect only to the extent of the financial loss. Insurance restores the loss. It does not let anyone profit from the loss. Nora has a health policy with a $30,000 limit. Her covered medical bills are $8,200. The policy pays $8,200. It does not pay the $30,000 limit.

Utmost good faith means there will be no fraud, misrepresentation, or concealment between the parties. The insured must give accurate information. The insurer must describe features and benefits clearly and must not conceal information or mislead.

A representation is a statement believed to be true to the best of one's knowledge. It is not guaranteed to be true. On an application, the applicant's answers are representations. An untrue statement is a misrepresentation and can void the contract. A material misrepresentation is one that would alter the underwriting decision. If a material misrepresentation is intentional, it is fraud.

A warranty is a statement that must be absolutely true. The validity of the policy depends on it. A breach of warranty can void the policy. Statements on life and health applications are usually representations, not warranties, except in cases of fraud.

Concealment is the intentional withholding of a material fact. Concealment can void a policy. Fraud is the intentional misrepresentation or the intentional concealment of a material fact, used to induce a contract or to deceive. Fraud is grounds for voiding the contract.

A waiver is the voluntary giving up of a known legal right. Estoppel prevents a party from reasserting a right after that right has been waived. Estoppel is the legal consequence of a waiver.`,
      questions: [
        question(
          'c1q15',
          'In an insurance contract, what is the insured’s consideration?',
          [
            {
              text: 'The insurer’s promise to pay in the event of a loss.',
              why: 'The promise to pay is the insurer’s consideration, not the insured’s.',
            },
            {
              text: 'Payment of the premium and the representations made in the application.',
              why: 'Consideration is something of value each party gives. For the insured, that is the premium plus the statements in the application.',
              correct: true,
            },
            {
              text: 'A countersignature by the insurance commissioner.',
              why: 'Legal purpose, competent parties, agreement, and consideration are the four elements. A commissioner countersignature is not the insured’s consideration.',
            },
            {
              text: 'The beneficiary’s insurable interest at the time of the claim.',
              why: 'Insurable interest supports legal purpose and, in life insurance, must exist at application. It is not the definition of consideration.',
            },
          ],
        ),
        question(
          'c1q16',
          'A life policy is aleatory because of which fact?',
          [
            {
              text: 'The insurer wrote the contract and the insured must take it or leave it.',
              why: 'That is adhesion. Ambiguities in an adhesion contract are interpreted in favor of the insured.',
            },
            {
              text: 'Only the insurer makes a legally enforceable promise.',
              why: 'That is a unilateral contract. The insured does not promise to keep paying premiums.',
            },
            {
              text: 'The premium paid and the benefit that may be paid are unequal amounts.',
              why: 'Aleatory means an exchange of unequal values. The course example is $200 of premium in exchange for a $100,000 benefit.',
              correct: true,
            },
            {
              text: 'The policyowner must pay the premium and submit proof of loss before the insurer pays.',
              why: 'Those conditions make the contract conditional, not aleatory.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c1-insurers',
      title: 'Who issues the policy',
      body: `Insurance comes from private companies and from government. Government programs are funded with taxes and serve national and state social purposes. Private policies are funded by premiums.

A private insurer can be classified by ownership, by its authority to transact business, by domicile, by its marketing system, and by its financial rating. The same company can fit more than one of these descriptions.

A stock company is owned by stockholders. The stockholders provide the capital and share in the profits or losses. Officers elected by the stockholders manage the company. Stock companies traditionally issue nonparticipating policies. A nonparticipating policy does not pay dividends to policyowners. Taxable dividends may be paid to stockholders. Those stockholder dividends are not guaranteed, because they depend on profit.

A mutual company is owned by the policyowners and issues participating policies. A participating policy may pay dividends to policyowners. Those policy dividends are a return of excess premium and are generally not taxable.

A fraternal benefit society provides insurance for members of an affiliated lodge, religious organization, or fraternal organization with a representative form of government. Fraternals sell only to members and are considered charitable institutions. They may issue life insurance, including endowments, health insurance, and annuities. They do not issue property or liability policies.

Lloyd's is not an insurance company. It provides facilities for underwriters, and each underwriter assumes a part of a risk. Each member is liable only for that member's portion. American Lloyd's associations operate mainly in property insurance, and most states prohibit organizing or licensing them.

A reciprocal is an unincorporated exchange of indemnity agreements among subscribers. An attorney-in-fact manages the exchange. It operates like a mutual. Subscribers are liable for their share of losses and expenses.

A risk retention group is a liability insurance company owned by its members. The members are in the same business or industry and share similar liability risks. The group's purpose is to assume and spread the liability of its members.

An admitted insurer, also called an authorized insurer, has a Certificate of Authority and meets the state's financial requirements. A nonadmitted insurer, also called an unauthorized insurer, does not. Most states bar unauthorized insurers except through licensed excess and surplus lines brokers.

Domicile is the place where the insurer was incorporated.

• A domestic insurer is incorporated in this state.
• A foreign insurer is incorporated in another state, the District of Columbia, or a U.S. territory. Those territories are American Samoa, Guam, the Northern Mariana Islands, Puerto Rico, and the U.S. Virgin Islands.
• An alien insurer is incorporated outside the United States.

A company chartered in Puerto Rico is a foreign insurer in any U.S. state. Every insurer, wherever it is incorporated, still needs a Certificate of Authority before it transacts insurance in the state.`,
      questions: [
        question(
          'c1q09',
          'A stock insurance company traditionally issues which kind of policy?',
          [
            {
              text: 'A participating policy that pays nontaxable dividends to policyowners.',
              why: 'Participating policies and policyowner dividends describe a mutual company, not a stock company.',
            },
            {
              text: 'A nonparticipating policy that does not pay dividends to policyowners.',
              why: 'Stock companies traditionally issue nonparticipating policies. Taxable dividends, if any, go to stockholders and are not guaranteed.',
              correct: true,
            },
            {
              text: 'A fraternal certificate sold only to members of a lodge.',
              why: 'Fraternal benefit societies sell to their own members. They are not stock companies.',
            },
            {
              text: 'A reciprocal subscription managed by an attorney-in-fact.',
              why: 'A reciprocal is an unincorporated exchange among subscribers, not a stock company.',
            },
          ],
        ),
        question(
          'c1q10',
          'An insurer chartered in California, writing business in Utah, is which kind of insurer in Utah?',
          [
            {
              text: 'Domestic, because it conducts business in Utah.',
              why: 'Domestic means incorporated in this state. Domicile is the place of incorporation, not where business is conducted.',
            },
            {
              text: 'Alien, because its home office is outside Utah.',
              why: 'Alien means incorporated outside the United States. California is another state.',
            },
            {
              text: 'Foreign, because it is incorporated in another state.',
              why: 'A foreign insurer is incorporated in another state, the District of Columbia, or a U.S. territory. The California company is foreign in Utah.',
              correct: true,
            },
            {
              text: 'Nonadmitted, because a foreign insurer cannot hold a Certificate of Authority.',
              why: 'Foreign describes domicile, not authority. A foreign insurer can be admitted once it has a Certificate of Authority.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c1-producers',
      title: 'Agents and the authority they have',
      body: `An agent, or producer, is licensed to sell, solicit, or negotiate insurance on behalf of the principal. The principal is the insurer. Under the law of agency, the acts of the producer within the scope of the producer's authority are the acts of the insurer.

Four rules follow from that relationship.

• An agent represents the insurer, not the insured.
• Any knowledge of the agent is presumed to be knowledge of the insurer.
• If the agent is working within the contract, the insurer is fully responsible.
• Payment to the agent is payment to the insurer.

The agent completes applications accurately, submits them for underwriting, and delivers the policy.

Express authority is the authority the principal intends to grant. It is written in the agent's contract.

Implied authority is not written. The agent is assumed to have it in order to transact business. Implied authority is incidental to express authority, because the contract cannot spell out every detail.

Apparent authority, also called perceived authority, is the appearance of authority created by the principal's actions, words, or deeds. If an agent uses the insurer's stationery, an applicant may believe the agent is authorized to transact insurance for that insurer.

Agents must treat applicants and insureds ethically. The agent handles funds of both the insured and the insurer, so the agent is a fiduciary. A fiduciary is a person in a position of trust. It is illegal to commingle premiums collected from applicants with the producer's personal funds.

Market conduct is the code of ethics for how companies and producers do business. It covers conflicts of interest, asking for a gift or a loan as a condition of completing business, and supplying confidential information. Professionalism means placing the public's interest above one's own. A failure of market conduct can bring a penalty.`,
      questions: [
        question(
          'c1q13',
          'Authority that is written in the agent’s contract with the insurer is called what?',
          [
            {
              text: 'Apparent authority',
              why: 'Apparent authority is the appearance of authority created by the principal’s actions, such as letting the agent use company stationery. It is not the written grant.',
            },
            {
              text: 'Implied authority',
              why: 'Implied authority is assumed so the agent can transact business. It is not written into the contract.',
            },
            {
              text: 'Express authority',
              why: 'Express authority is the authority the principal intends to grant by means of the agent’s contract. It is the authority written in the contract.',
              correct: true,
            },
            {
              text: 'Fiduciary authority',
              why: 'Fiduciary describes the producer’s position of trust when handling premium. It is not one of the three kinds of producer authority.',
            },
          ],
        ),
        question(
          'c1q14',
          'Which act violates a producer’s fiduciary duty?',
          [
            {
              text: 'Depositing a premium in a separate account and forwarding it to the insurer.',
              why: 'Keeping premium apart from personal funds and remitting it is what a fiduciary is supposed to do.',
            },
            {
              text: 'Mixing premiums collected from applicants with the producer’s personal funds.',
              why: 'Commingling premium with personal funds is illegal. A fiduciary is in a position of trust with the funds of the insured and the insurer.',
              correct: true,
            },
            {
              text: 'Delivering the policy to the policyowner.',
              why: 'Delivery is one of the producer’s duties. It is not a breach of trust.',
            },
            {
              text: 'Completing the application and submitting it to underwriting.',
              why: 'Accurate completion and submission are the agent’s responsibilities to the insurer.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c1-market',
      title: 'How policies are sold and shared',
      body: `Insurers market through agents, or they sell directly to customers.

• Independent agency system, also called the American agency system. One agent represents several companies. The agent is nonexclusive, earns commissions on personal sales, and may place renewals with any company.
• Exclusive agency system, also called captive agents. One agent represents one company. Renewals can be placed only with the appointing insurer.
• General agency system. A general agent is an entrepreneur who represents one company. The general agent is paid by compensation and commissions and appoints subagents.
• Managerial system. A branch manager supervises agents and is salaried. The agents may be employees or independent contractors.
• Direct response. There are no agents. The company advertises through mail, the internet, television, or other mass marketing, and consumers apply directly.

Financial strength is judged from claims experience, investment earnings, reserves, and management. Independent rating services that publish guides include AM Best, Fitch, Standard & Poor's, Moody's, and Weiss.

Reinsurance is a contract under which one insurer indemnifies another insurer for part or all of its liabilities. The purpose is to protect against catastrophic losses. The originating company is the ceding insurer. The company that takes the risk is the assuming insurer, also called the reinsurer.

Facultative reinsurance covers a specific policy. The reinsurer underwrites each application separately.

A treaty, also called automatic reinsurance, is a blanket arrangement. The reinsurer must accept all risks ceded to it. Treaties are usually negotiated for a year or longer.`,
      questions: [
        question(
          'c1q11',
          'Which rating services does the course name as guides to an insurer’s financial integrity?',
          [
            {
              text: 'The state guaranty association and the Insurance Department.',
              why: 'A guaranty association is a safety net for policyowners of insolvent insurers. It is not a rating service. The named services are private publishers.',
            },
            {
              text: 'AM Best, Fitch, Standard & Poor’s, Moody’s, and Weiss.',
              why: 'Those are the independent rating services listed in the course for financial strength and stability.',
              correct: true,
            },
            {
              text: 'FINRA, the SEC, and the Medical Information Bureau.',
              why: 'FINRA and the SEC regulate variable products as securities. The MIB is an underwriting information exchange, not a financial-strength rater.',
            },
            {
              text: 'Lloyd’s of London and the attorney-in-fact.',
              why: 'Lloyd’s is a marketplace for underwriters. An attorney-in-fact manages a reciprocal. Neither is the rating list in the course.',
            },
          ],
        ),
        question(
          'c1q12',
          'In a reinsurance treaty, what is the reinsurer bound to do?',
          [
            {
              text: 'Underwrite each ceded application separately and reject any it does not want.',
              why: 'Case-by-case underwriting is facultative reinsurance, not a treaty.',
            },
            {
              text: 'Accept all risks ceded under the automatic agreement.',
              why: 'Automatic, or treaty, reinsurance is a predetermined blanket arrangement. The reinsurer is bound to accept the risks ceded to it.',
              correct: true,
            },
            {
              text: 'Replace the ceding insurer as the company named on the consumer’s policy.',
              why: 'The ceding insurer remains the insurer on the policy. Reinsurance indemnifies that insurer for part or all of its liability.',
            },
            {
              text: 'Issue a Certificate of Authority to the ceding company.',
              why: 'A Certificate of Authority comes from the state department of insurance, not from a reinsurer.',
            },
          ],
        ),
      ],
    },

  ],
}

for (const section of chapter1.sections) {
  section.questions.push(...(chapter1Extra[section.id] ?? []))
}
