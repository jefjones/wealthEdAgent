import { question } from './build.ts'
import type { Chapter } from './types.ts'
import { chapter8Extra } from './extra/chapter8.ts'

/**
 * Section text is the current study wording.
 * The source pages have no practice questions. Questions are written from that text,
 * four options each, with a reason for the right answer and for each wrong one.
 */
export const chapter8: Chapter = {
  id: 'ch-health',
  number: 8,
  title: 'Kinds of Health Insurance',
  summary:
    'Classes of health coverage, limited policies, field and company underwriting, and the required provisions that run a health contract.',
  sections: [
    {
      id: 'c8-perils',
      title: 'Accidents, sickness, and the benefits paid',
      body: `Health insurance covers the main kinds of loss and the benefits that pay for them, the common exclusions, and the producer's responsibility for mistakes. Underwriting is especially exposed to unfair discrimination because of health conditions and genetic information. A replacement requires a comparison of the old coverage and the new coverage.

These words are used in this chapter.

• Comprehensive coverage. Health insurance that covers most types of medical expenses.
• Copayment. The insured pays a specified amount for a service up front, and the plan pays the rest.
• Deductible. The portion of the loss the insured pays before the insurer pays a claim.
• Dependent. Someone who relies on the insured for support.
• Enrollee. A person enrolled in a health plan. That person is an insured. Dependents of the insured are not included in this word.
• Insolvent. Unable to meet financial obligations.
• Pre-existing condition. A condition for which the insured received a diagnosis, advice, care, or treatment during a specific period before applying.
• Rider. An addition that adds, modifies, or deletes a policy provision.
• Solicitation. An attempt to persuade a person to buy a policy, spoken or in writing.
• Waiting period. Time that must pass after a loss before the insurer starts paying benefits.

Two major perils are accident and sickness. A policy may cover both, or it may cover accident only. Accidental bodily injury is an unforeseen and unintended injury that resulted from an accident rather than from a sickness. Sickness is an illness that first manifests itself while the policy is in force. Most health claims result from sickness rather than from accidental injury. An emergency medical condition is so severe in pain or symptoms that, without quick and proper treatment, it could cause serious bodily harm or death. Medical necessity means health care that a prudent health care professional would provide to prevent, diagnose, or treat an illness, injury, or disease.

Loss of income from an accident or a sickness is covered by disability income policies. Disability income is a valued contract, also called a stated-amount contract. It pays weekly or monthly benefits. The benefits may be based on past earnings and limited to a percentage of that income.

A medical expense contract covers expenses from an accident or a sickness, such as a physician's bill or a hospital bill. If the insurer pays the insured and the insured pays the provider, that is reimbursement. A scheduled benefit pays only up to the amount on a list. If someone is also a dependent on a spouse's group plan, payment of the medical expenses is coordinated.

Dental expense insurance covers treatment, care, and prevention of dental disease and of injury to the teeth. Diagnostic and preventive care, such as cleaning and fluoride, is a feature usually missing from medical expense plans. Some dental plans require periodic exams as a condition of continued coverage.

A long-term care policy pays for medically necessary services in a nursing home or in the insured's home. It does not pay for care in an acute care unit of a hospital.`,
      questions: [
        question(
          'c8q01',
          'How does the course define sickness under a health policy?',
          [
            {
              text: 'An illness that first manifests itself while the policy is in force. Most health claims come from sickness, not accidental injury.',
              why: 'Accidental bodily injury is an unforeseen and unintended injury from an accident rather than a sickness. Medical necessity is care a prudent professional would provide to prevent, diagnose, or treat an illness, injury, or disease.',
              correct: true,
            },
            {
              text: 'Any illness the insured had before applying, whether or not it has manifested.',
              why: 'A condition diagnosed, treated, or advised on before application is a pre-existing condition. Sickness is an illness that first manifests while the policy is in force.',
            },
            {
              text: 'Only an unforeseen injury. Sickness claims are the exception.',
              why: 'An unforeseen injury is accidental bodily injury. The majority of health claims result from sickness.',
            },
            {
              text: 'Care in an acute care unit of a hospital, which long-term care policies also cover.',
              why: 'Long-term care covers medically necessary nursing-home or home health care. It does not cover care in an acute care unit of a hospital.',
            },
          ],
        ),
        question(
          'c8q02',
          'What kind of contract is disability income insurance?',
          [
            {
              text: 'A valued contract, or stated amount, that pays weekly or monthly benefits for injury or sickness.',
              why: 'Benefits may be based on past earnings and limited to a percentage of income. A medical expense benefit paid to the insured, who then pays the provider, is reimbursement. A scheduled benefit pays only up to a listed amount.',
              correct: true,
            },
            {
              text: 'A reimbursement contract that pays the hospital whatever it bills.',
              why: 'Reimbursement is a medical expense payment method. Disability income pays a stated weekly or monthly amount.',
            },
            {
              text: 'A policy that pays only for acute hospital care.',
              why: 'Long-term care excludes the acute care unit of a hospital. Disability income replaces income when the insured cannot work.',
            },
            {
              text: 'A contract that pays the principal sum for loss of a limb.',
              why: 'A percentage of the principal sum for dismemberment is accidental death and dismemberment coverage, not disability income.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c8-classes',
      title: 'The main kinds of health policies',
      body: `Health insurance is a general name for related contracts that protect against different risks. One type covers health care expenses. The other pays for loss of income. The policy that pays periodically when the insured cannot work because of sickness or injury is disability income insurance.

Most health insurance is written on a group basis through an employer. Individual coverage for a family is medically underwritten. Unlike life insurance, where there is one death claim, multiple health claims are the rule. The three most important underwriting factors are the physical condition of the applicant and the other insureds, moral and morale hazards, and occupation. The right to continue a policy matters especially if the person has become uninsurable. Nearly all states have adopted the NAIC model law for uniform mandatory provisions, but individual health policies still vary more than other policies.

Group underwriting still evaluates the hazard and assigns a class and a rate, but the techniques differ. The underwriter decides whether the group may be insured and on what basis, and writes the contract to prevent adverse selection by people who are eligible for coverage. Few group applications are rejected if the applicant meets the statutory definition of an eligible group. Coverage and requirements can be adjusted, and the group is re-evaluated every anniversary.

Franchise insurance covers small groups that are too small for true group insurance. It is not group insurance. Individual policies are issued. Each person is underwritten, and each person submits an application and a medical history. Premiums are generally less than for an individual policy and more than for group coverage.

Private insurers provide a large share of individual and group health insurance. Medicare and Medicaid cover some disabled people and people over 65. Medicaid is both federal and state. Social Security also offers disability protection.

A limited policy covers only specific accidents or diseases. A comprehensive plan covers sickness or accidents that are not specifically excluded.

A fully insured plan is administered and guaranteed by an insurer. In return for the premium, the insurer assumes the risk of medical expenses that may or may not occur. A business that handles its own risks, using the law of large numbers and predictions of future losses, is self-insuring. A company that self-insures must have a formal program for identifying, evaluating, and funding its losses.

The Commissioner's rules standardize group terms. A single-employer group is formed by one employer for its employees. An employee can include the owner who runs the business, a partner, a retired employee, a former employee, or a director of a corporation. An association group, such as an alumni group or a professional group, can buy coverage for its members. An association group normally must have at least 100 members, have been active for at least 2 years, have a constitution and by-laws, and hold meetings at least annually.`,
      questions: [
        question(
          'c8q03',
          'How does franchise health insurance differ from true group insurance?',
          [
            {
              text: 'Individual policies are issued and each person is underwritten. Premiums are usually less than individual coverage and more than group coverage.',
              why: 'Franchise insurance is for groups too small to qualify as a true group. It is not group insurance. The three main individual underwriting factors are physical condition, moral and morale hazards, and occupation.',
              correct: true,
            },
            {
              text: 'One master contract is issued, and no one submits medical history.',
              why: 'A true group uses group underwriting and is re-evaluated on the anniversary. Franchise coverage issues an individual policy to each participant, who submits an application and medical history.',
            },
            {
              text: 'It is government coverage for people over 65.',
              why: 'Medicare and Medicaid are the government programs described for some disabled people and people over 65. Franchise insurance is private coverage for a small group.',
            },
            {
              text: 'The employer funds its own losses with no insurer and no policies.',
              why: 'That describes self-insurance. Franchise insurance is issued by an insurer as individual policies.',
            },
          ],
        ),
        question(
          'c8q04',
          'What must an association group normally have in order to buy group health insurance?',
          [
            {
              text: 'At least 100 members, two years of activity, a constitution and by-laws, and meetings at least annually.',
              why: 'A single-employer group is one employer covering employees, who can include the owner, partners, retired or former employees, and corporate directors. An association is a different kind of group, such as an alumni or professional group.',
              correct: true,
            },
            {
              text: 'One employer, and coverage only for current full-time employees.',
              why: 'One employer forms a single-employer group. That group can include owners, partners, retired employees, former employees, and directors.',
            },
            {
              text: 'Fewer than 10 people, because small groups must use franchise insurance.',
              why: 'Franchise insurance is for groups too small for true group coverage. An association group normally needs at least 100 members.',
            },
            {
              text: 'A federal charter and coverage only for people over 65.',
              why: 'Coverage for some people over 65 is Medicare. Association group rules are membership, age of the association, by-laws, and annual meetings.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c8-limited',
      title: 'Policies that cover only some costs',
      body: `A limited health policy covers specific accidents or a specific sickness. The contract must specify the type of accident or sickness, the limited perils, and the amounts. Benefits may be paid as reimbursement or as indemnity. By law, the first page must plainly state "THIS IS A LIMITED POLICY."

An accident-only policy covers death, dismemberment, disability, or hospital and medical care that results from an accident. It does not pay for sickness.

Accidental death and dismemberment can be a rider or a separate policy. It is most often part of group life and group health plans. It pays a lump sum if the insured dies from an accident as the policy defines it, or for the loss of certain body parts caused by an accident. It pays only for accidental losses, so it is a pure form of accident insurance. The principal sum is paid for accidental death. That amount is usually equal to the face amount. Loss of sight or dismemberment pays a percentage of the principal sum. That percentage is the capital sum, and it varies with the severity of the injury. The policy usually pays the full principal sum for loss of sight in both eyes or for loss of two or more limbs. It may pay 50% for the loss of one hand or one foot. Some policies pay double or triple indemnity for accidental death. Most policies pay the accidental death benefit if the death is caused by the accident and occurs within 90 days.`,
      questions: [
        question(
          'c8q05',
          'Under accidental death and dismemberment coverage, what is the capital sum?',
          [
            {
              text: 'A percentage of the principal sum, paid for loss of sight or accidental dismemberment. The principal sum is paid for accidental death.',
              why: 'The full principal sum is usually paid for sight in both eyes or two or more limbs. One hand or one foot may pay 50%. Death caused by the accident must usually occur within 90 days. Some policies pay double or triple indemnity.',
              correct: true,
            },
            {
              text: 'The daily hospital benefit, paid without regard to the medical bill.',
              why: 'A specific amount based only on days confined is a hospital indemnity, or fixed-rate, policy.',
            },
            {
              text: 'The benefit for sickness that first appears while the policy is in force.',
              why: 'AD&D pays only for accidental losses. It does not pay for sickness.',
            },
            {
              text: 'The certificate issued to each person covered by a blanket policy.',
              why: 'People covered by a blanket policy are covered automatically and do not receive a certificate of insurance.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c8-specialty',
      title: 'Other limited health policies',
      body: `A travel accident policy covers death or injury to a fare-paying passenger on a common carrier. Benefits are paid only if the loss occurs during the time of travel.

A dread disease policy, also called a limited risk policy, pays a variety of benefits for one specific disease, such as cancer or heart disease. The benefits are usually a scheduled, fixed-dollar indemnity for specified events or procedures, such as hospital confinement or chemotherapy.

A hospital indemnity policy, also called a hospital income policy, pays a specific amount daily, weekly, or monthly while the insured is confined to a hospital. The payment is unrelated to the medical expense incurred. It depends only on the number of days the person is confined. It can also be called a hospital fixed-rate policy.

Credit disability is issued only to a person who is in debt to a specific creditor. If the borrower is disabled, payments are made on the loan until the borrower can return to work.

A blanket policy covers members of a particular group while they take part in a particular activity. Students, campers, passengers on a common carrier, and sports teams are examples. The names often are not known, because people come and go. Unlike group health insurance, the individuals are covered automatically and do not receive a certificate of insurance. Blanket policies are commonly written, and they pay, on an accident-only basis.

Prescription coverage is usually an optional group medical benefit. The insured pays a copayment, such as $15, and the insurer pays the balance. The quantity is limited, such as a 30-day supply.

Some employers cover eye examinations and eyeglasses, or hearing aids, on a limited basis. Under the Affordable Care Act, pediatric vision benefits are mandatory. Most vision plans restrict benefits to one exam and one pair of glasses in any 12-month period.

Dental plans treat classes of expenses differently. Routine and preventive maintenance is covered up to an annual maximum, without a deductible or a copayment. That usually includes an exam and a cleaning twice a year, about every 6 months. X-rays follow the plan's schedule. The absence of a deductible and a copayment is meant to encourage prevention. Routine and major restorative care, including cavities, oral surgery, bridges, and dentures, is covered up to a specific maximum, subject to an annual deductible for each insured family member and to coinsurance. Orthodontic care, if it is included, has its own maximum and its own deductible.`,
      questions: [
        question(
          'c8q06',
          'How do routine and preventive dental benefits usually differ from restorative care?',
          [
            {
              text: 'Preventive care is covered up to an annual maximum without a deductible or copayment. Restorative care has a deductible and coinsurance.',
              why: 'Preventive care usually includes an exam and a cleaning twice a year, about every 6 months. X-rays follow the plan’s schedule. Orthodontics, if covered, has a separate maximum and deductible. Pediatric vision benefits are mandatory under the Affordable Care Act.',
              correct: true,
            },
            {
              text: 'Both classes always share one deductible, and prevention is excluded.',
              why: 'Diagnostic and preventive care is a feature of dental plans, and it is typically paid without a deductible or copayment so people will use it.',
            },
            {
              text: 'Preventive care pays a capital sum. Restorative care pays a principal sum.',
              why: 'Principal and capital sums are accidental death and dismemberment benefits, not dental classes.',
            },
            {
              text: 'Restorative care is paid only while the insured is a fare-paying passenger.',
              why: 'Coverage limited to travel on a common carrier is a travel accident policy.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c8-exclusions',
      title: 'Losses a health policy will not pay',
      body: `Individual and group medical expense policies typically do not cover these losses.

• War, or an act of war, and the injuries or sicknesses that result. Active military duty may also be excluded.
• Intentionally self-inflicted injuries.
• Elective cosmetic surgery. Treatment required to correct a condition that resulted from an accident or a birth defect, or treatment that is medically necessary, may be covered.
• Experimental or investigative procedures.
• Conditions covered by workers compensation, if they are covered under workers compensation laws or other legislation.
• Expenses that are paid, or eligible to be paid, under Medicare or another federal, state, or local medical expense program.
• Injuries suffered while committing an illegal act.
• Injuries that result from drug or alcohol intoxication, unless a physician administered the drug.`,
      questions: [
        question(
          'c8q07',
          'Which expense may a medical policy cover even though cosmetic treatment is listed as an exclusion?',
          [
            {
              text: 'Treatment required to correct a condition caused by an accident or a birth defect, or treatment that is medically necessary.',
              why: 'Elective cosmetic surgery is a typical exclusion. War, intentional self-inflicted injury, experimental procedures, workers compensation, government medical programs, illegal acts, and intoxication are also typical exclusions. Intoxication is not excluded when a physician administered the drug.',
              correct: true,
            },
            {
              text: 'Surgery the insured chooses only to change appearance.',
              why: 'Elective cosmetic surgery is excluded. The exception is treatment for an accident, a birth defect, or medical necessity.',
            },
            {
              text: 'An injury suffered while committing an illegal act.',
              why: 'Participation in criminal activity is an exclusion. The insurer does not pay the expense of that injury.',
            },
            {
              text: 'A condition already being paid under workers compensation.',
              why: 'Conditions covered by workers compensation laws or other legislation are excluded from the medical policy.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c8-marketing',
      title: 'How health policies are advertised',
      body: `Advertising must be accurate and must not misrepresent the facts. A limitation, an exception, or a reduction may not be worded as if it were a positive feature. Calling a waiting period a "benefit-builder" is an example of that mistake. An advertisement for a policy that covers only one disease, or a list of specified diseases, cannot imply broader coverage. It must prominently state the limited nature of the policy, in words such as "THIS IS A LIMITED POLICY," "THIS IS A CANCER-ONLY POLICY," or "THIS IS AN AUTOMOBILE ACCIDENT-ONLY POLICY."

Unless the words are true, an advertisement may not use "only," "just," "merely," "minimum," or similar words to describe an exception or a reduction. It may not use "extra pay," "extra cash," "extra income," or similar words for a benefit that is conditional on hospital confinement. It may not use "all," "full," "complete," "unlimited," or similar words in a way that exaggerates a benefit.

Disclosure rules for advertisements of life insurance products in this state require the insurer to be clearly identified. The title must use the words life insurance or annuity, or other clear language. Any statistic must name its source. If the ad uses "nonmedical" or "no medical examination required," it must clearly say that issue may depend on health questions. A testimonial must be genuine, accurately reproduced, and the author's current opinion. A paid endorsement must say that it was paid. Insurers must keep advertising files for 3 years after use. It is an unfair trade practice to say that an insurer's policies are guaranteed by the existence of the Insurance Guaranty Association.

A sales presentation must be accurate and complete. Sales materials include promotional materials, applications, replacement forms, an outline of coverage, and any other form used to solicit or sell accident and health insurance. An outline of coverage must be delivered at the time of application or when the policy is delivered. A direct-response sale does not require the outline at application, because the insurer has no opportunity to provide it then. The purpose of the outline is full and fair disclosure.

A licensee may receive compensation that is not a commission from an insured or a purchaser only if a separate written disclosure includes the insured's signature, states the amount or the extent, and is given before the service is performed. The compensation must be limited to reasonable expenses and applied uniformly. A producer who is acting for the insured must have agreed on that noncommission compensation and must disclose any other compensation that accrues from the transaction.`,
      questions: [
        question(
          'c8q08',
          'Which advertising practice does the course allow?',
          [
            {
              text: 'A limited-disease advertisement that prominently says the policy’s benefits are limited, such as “THIS IS A CANCER-ONLY POLICY.”',
              why: 'Limitations cannot be worded as benefits. Calling a waiting period a benefit-builder is not allowed. Advertising files are kept for 3 years. Saying policies are guaranteed by the Insurance Guaranty Association is an unfair trade practice.',
              correct: true,
            },
            {
              text: 'Describing a waiting period as a benefit-builder.',
              why: 'A limitation or exception must describe the negative feature. It may not be worded in a positive manner.',
            },
            {
              text: 'Using “complete” and “unlimited” to describe a benefit that has caps.',
              why: '“All,” “full,” “complete,” “unlimited,” and similar words are prohibited when they exaggerate a benefit, unless they are true.',
            },
            {
              text: 'Stating that the Insurance Guaranty Association guarantees the policy.',
              why: 'It is an unfair trade practice to make any statement that an insurer’s policies are guaranteed by the existence of the Insurance Guaranty Association.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c8-field',
      title: 'The application and field underwriting',
      body: `Field underwriting matters more in health insurance than in life insurance. Its purpose is to minimize adverse selection. The people most likely to have claims are the people most likely to seek insurance. Moral hazard matters because of malingering, and the agent, not the home-office underwriter, is the person who meets the applicant. The agent must ask the questions clearly, record the answers accurately, and gather credible information that helps screen a marginal or unacceptable risk.

When an insurer offers a health benefit plan to an individual or a small employer, it may combine the uniform application and the uniform waiver form. The waiver identifies the employee who is buying the plan, verifies the employee's insurance, and cannot include a health-status question other than pregnancy.

An insurer or an agent cannot disclose personal or privileged information about an individual unless one of these applies.

• A written authorization that was dated and signed within the past 12 months.
• A disclosure to an insurance regulator or a law enforcement agency, as the law requires.
• A disclosure to an affiliate for an audit, with no further disclosure.
• A disclosure to a group policyholder to report claims experience.
• A disclosure to an insurer or a self-insured plan for coordination of benefits.
• A disclosure to a lienholder, a mortgagee, an assignee, or another person who has a legal or beneficial interest in the policy.

The application is the applicant's written request that the company issue a policy based on the information in it. If the policy is issued, a copy is attached and becomes part of the entire contract. A notice to the applicant must say that a credit report will be ordered about past history and about any other health insurance the person has applied for. The agent must leave that notice with the applicant. A notice of information practices is required when personal information is first collected from a source other than the applicant or public records. If the information is collected from the applicant or from public records, the notice is given at delivery. On a renewal, the notice is provided at renewal or once a year.

The application is often the main source of underwriting information, so the agent must make it complete, correct, and true to the best of the applicant's knowledge. Every health application requires the signatures of the proposed insured, the policyowner if that is a different person, and the agent. Most companies require ink. The best way to correct an application is to start over. If that is not practical, draw a line through the wrong answer, insert the right one, and have the applicant initial the correction.

Under an insurability conditional receipt, coverage becomes effective as of the date of the receipt if the application is approved. The receipt is generally given when the initial premium is paid with the application. The agent should deliver the policy in person whenever possible. The free-look period begins once the policy is delivered. At delivery, the agent should review the insured's original goals and the policy. If the first premium is collected at delivery, most companies require a signed statement of continued good health.

Utah lets accident and health insurers accept the universal Utah Individual Health Insurance Application and the Utah Small Employer Health Insurance Application. Use is voluntary. If the form is used, it must not be altered, and it must not carry an insurer's logo or address, so one application can be sent to several insurers.

A misunderstanding or a misrepresentation during the sale can lead to legal action. Agents should document interviews, calls, and requests. The sales interview and the policy delivery are the most common errors-and-omissions situations, including inadequate coverage and a failure to maintain and service the coverage.`,
      questions: [
        question(
          'c8q09',
          'What is the best way to correct a wrong answer on a health application?',
          [
            {
              text: 'Start over with a fresh application. If that is not practical, line out the error, insert the correction, and have the applicant initial it.',
              why: 'The application, once the policy is issued, is part of the entire contract. The proposed insured, the policyowner if different, and the agent must sign it.',
              correct: true,
            },
            {
              text: 'The agent initials the change. The applicant does not have to.',
              why: 'If the application is corrected instead of rewritten, the applicant must initial the correct answer.',
            },
            {
              text: 'White out the answer so the form looks untouched.',
              why: 'The course allows a fresh application, or a line through the wrong answer with the correction inserted and initialed. It does not describe covering the original answer.',
            },
            {
              text: 'Leave the error. The home office will correct it after issue without telling the applicant.',
              why: 'The agent must make the application complete and correct, to the best of the applicant’s knowledge, before it is submitted.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c8-sources',
      title: 'How the company investigates the risk',
      body: `The underwriter selects risks that are acceptable to the company. By law, the selection criteria must be based only on sound actuarial principles or on expected experience. The underwriter cannot decline a risk based on blindness or deafness, genetic characteristics, marital status, or sexual orientation. The prime considerations are age, gender, occupation, physical condition, avocations, moral and morale hazards, and financial status.

An accurate application is imperative. Only the agent completes the agent's report. It asks how long the agent has known the applicant, estimates income and net worth, and asks whether the agent knows any reason the contract should not be issued. The agent's statement does not become part of the entire contract.

An attending physician's statement is the best source for the applicant's medical history. The doctor can explain what was treated, the treatment, how long it lasted, the recovery, and the prognosis.

An investigative consumer report covers character, general reputation, personal habits, and mode of living, for example through interviews with associates, friends, and neighbors. It may not be done unless the applicant is clearly and accurately told about it in writing. That notice is usually part of the application, and the agent gives it to the applicant.

The Medical Information Bureau is a nonprofit membership corporation owned by member insurers. It receives adverse medical information and keeps confidential medical impairment information. A member can receive coded information from other members' applications. MIB information cannot by itself be used to decline a risk, but it can give the underwriter additional information.

A medical exam, when one is required, is done by a physician or a paramedic at the insurer's expense. Health insurance usually does not require an exam, which makes the agent's recording of medical information more important. Exams are more common in life underwriting. If the insurer requests an exam, the insurer pays for it.

Insurers commonly require an HIV test when the amount of coverage is large or when benefits are being increased. The insurer must disclose the test and get written consent on the approved form. It must keep written confidentiality procedures. It must use the protocol of the U.S. Department of Health and Human Services. It may disclose the results only as the applicant authorizes in writing. If the applicant has not named a physician, the insurer sends a positive result and the applicant's identity to the state Department of Health. The report must include the reporting company's name and address. Requiring an HIV test is not unfair discrimination if everyone in the same class is tested, coverage is not denied on the testing alone when no other Insurance Code condition applies, and the tests are approved by the FDA and comply with state and federal law. An insurer may ask whether the proposed insured has tested positive on an AIDS-related test.

A company may discriminate in favor of good risks and against poor risks in order to avoid adverse selection. It cannot unfairly discriminate between individuals of the same class and equal life expectancy in the rates, the benefits, or the terms. Unfair discrimination includes rates or benefits based solely on age or gender, on a physical or mental impairment, on blindness or partial blindness, or on genetic characteristics or genetic testing. Investigating sexual orientation as part of underwriting is also unfair discrimination.

The Genetic Information Nondiscrimination Act of 2008 prevents a denial, a condition, or discrimination in the price of a group or individual health plan based on genetic information. It limits requests for genetic testing. It prohibits collecting genetic information for underwriting, or for other purposes, before enrollment.

An accepted applicant is preferred, standard, or substandard. A preferred risk has a reduced risk of loss and pays a reduced rate. A nonsmoker is an example. A standard risk is an average exposure and pays a standard rate. A substandard risk has an increased risk of loss and may be insured at an increased premium, for example because of a poor health history or a dangerous vocation or avocation.`,
      questions: [
        question(
          'c8q10',
          'How may an underwriter use a Medical Information Bureau report?',
          [
            {
              text: 'As additional information. The report cannot be the sole reason to decline the risk.',
              why: 'The MIB is a nonprofit owned by member insurers and keeps confidential impairment information. An attending physician’s statement is the best source for medical history. The agent’s report does not become part of the entire contract.',
              correct: true,
            },
            {
              text: 'As the only document needed to decline an applicant.',
              why: 'MIB information cannot be used in and of itself to decline a risk.',
            },
            {
              text: 'It becomes part of the entire contract, like the application.',
              why: 'A copy of the application is attached and becomes part of the entire contract. The agent’s statement does not. An MIB report is underwriting information, not the contract.',
            },
            {
              text: 'To decline a risk solely because the applicant is blind or has a genetic characteristic.',
              why: 'The underwriter cannot decline a risk based on blindness or deafness, genetic characteristics, marital status, or sexual orientation. Criteria must rest on sound actuarial principles or expected experience.',
            },
          ],
        ),
        question(
          'c8q11',
          'When is requiring an HIV test not unfair discrimination?',
          [
            {
              text: 'When everyone in the same class is tested, coverage is not denied on the test alone, and the test is FDA approved.',
              why: 'The insurer must disclose the test, get written consent, protect confidentiality, and follow the federal health department protocol. A positive result goes to a named physician or, if none is named, to the state Department of Health.',
              correct: true,
            },
            {
              text: 'When only applicants with a genetic marker are tested.',
              why: 'Testing must be required of all individuals in the same class. GINA also bars using genetic information to deny or price individual or group health coverage.',
            },
            {
              text: 'When a positive test, by itself, is used to deny coverage.',
              why: 'The proposed insured may not be denied coverage on the basis of the testing alone, if no other Insurance Code condition applies.',
            },
            {
              text: 'When the insurer gives the result to the agent before the applicant consents.',
              why: 'The insurer must obtain written consent on the approved form before testing, and it must disclose results only as the applicant authorizes in writing.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c8-replace',
      title: 'Replacing a health policy',
      body: `An agent who replaces a health policy must not mislead the insured and must not provide coverage to the insured's detriment. The agent must compare the benefits, limitations, and exclusions in the current policy and in the proposed policy. The agent must not let the current policy be cancelled before the new policy is issued.

Replacement underwriting can change the premium and the benefits. Aisha applies at age 28 as a nonsmoker with no health problems. At age 52 she applies again after a stroke and 12 years of smoking. Even if the first policy was overpriced, the new policy is judged on her age, her health, and the other factors at the time of the replacement. It is not judged on the factors from the original policy.

The agent must give the applicant a notice of replacement that is specific to the state. A misrepresentation during a replacement can expose the agent or the broker to errors-and-omissions liability, and the license may be suspended or revoked.`,
      questions: [
        question(
          'c8q12',
          'What must an agent do when replacing an accident and health policy?',
          [
            {
              text: 'Compare benefits, limitations, and exclusions, give a state-specific notice of replacement, and keep the current policy in force until the new policy is issued.',
              why: 'The new policy is underwritten on the insured’s current age, health, and other factors. Misrepresentation can bring errors and omissions liability and suspension or revocation of the license.',
              correct: true,
            },
            {
              text: 'Cancel the existing policy as soon as the application is signed, so the insured is not paying two premiums.',
              why: 'The agent must make sure the current policy is not cancelled before the new policy is issued.',
            },
            {
              text: 'Promise that the new premium will match the premium from the original issue age.',
              why: 'Robert’s example shows that a replacement is judged on current factors, not on the factors from the original policy, even if the first policy was overpriced.',
            },
            {
              text: 'Skip the comparison if the new policy is from the same insurer.',
              why: 'The agent must carefully compare the current policy and the proposed replacement. The notice of replacement is still required.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c8-contract',
      title: 'The contract, the grace period, and beneficiaries',
      body: `The entire contract is the health policy, a copy of the signed application, and the attached riders and amendments. No change is effective without the express written agreement of both parties, and the change must be made part of the contract. Only an executive officer of the company, not an agent, can make a change.

The grace period is the time after the premium due date during which the premium may still be paid before the policy lapses. It cannot be shorter than 15 days for a policy paid weekly or monthly, and 30 days for every other mode. Coverage continues during the grace period.

If the premium is unpaid at the end of the grace period, the policy lapses. Reinstatement is automatic if the company, or an authorized representative, accepts the premium and does not require a reinstatement application. If an application is required and a conditional receipt is issued, the company may approve or disapprove it. Coverage is automatically reinstated if the company does not refuse it within 45 days after the conditional receipt was issued. Accidents are covered immediately after reinstatement. Sickness is covered only after 10 days. That 10-day wait protects the insurer from adverse selection.

The policyowner may change the beneficiary at any time by a written request. The beneficiary's consent is not required, unless the designation is irrevocable.

If a married couple divorces or has an annulment, the spouse has a right to an individual health policy without a medical exam, by completing an application and paying the premium. When the insurer receives actual notice, it must promptly notify the spouse in writing of that right. The new policy's coverage is the coverage most nearly similar to the coverage that ended. A waiting period or a probationary period that was already satisfied counts toward the new policy.`,
      questions: [
        question(
          'c8q13',
          'A lapsed health policy requires a reinstatement application, and the insurer does not refuse it. When is coverage back in force?',
          [
            {
              text: 'Automatically after 45 days from the conditional receipt. Accidents are covered immediately, and sickness after 10 days.',
              why: 'If no reinstatement application is required and the premium is accepted, reinstatement is automatic. The grace period is at least 15 days for weekly or monthly modes and 30 days for other modes. Only an executive officer can change the policy.',
              correct: true,
            },
            {
              text: 'Immediately for both accident and sickness, on the day the premium is mailed.',
              why: 'Sickness is covered only after 10 days. That delay protects the insurer from adverse selection. Accidents are covered immediately following reinstatement.',
            },
            {
              text: 'After 10 days for accidents and 45 days for sickness.',
              why: 'The 45 days is how long the insurer has to refuse the application. The 10 days is the sickness waiting period after reinstatement, not an accident waiting period.',
            },
            {
              text: 'Only if the beneficiary consents, because every beneficiary designation is irrevocable.',
              why: 'Beneficiary consent is required only when the designation is irrevocable. The owner may otherwise change the beneficiary by a written request.',
            },
          ],
        ),
        question(
          'c8q14',
          'After a divorce, what health coverage right does the insured’s spouse have?',
          [
            {
              text: 'An individual policy without a medical exam, with coverage most nearly similar to the terminated coverage. Waiting periods already satisfied carry over.',
              why: 'The spouse completes an application and pays the premium. Once the insurer has actual notice of the divorce or annulment, it must promptly give written notice of this right.',
              correct: true,
            },
            {
              text: 'The spouse stays on the original policy automatically, with no notice and no premium.',
              why: 'The spouse must apply and pay. The insurer’s duty is to give prompt written notice after it receives actual notice of the divorce or annulment.',
            },
            {
              text: 'A new policy only after a medical exam and a new 10-day sickness waiting period that ignores time already served.',
              why: 'No medical exam is required. Waiting or probationary periods already satisfied count toward the new policy.',
            },
            {
              text: 'Only a credit disability policy issued to the former spouse’s creditor.',
              why: 'Credit disability is issued to a borrower and pays the creditor during disability. It is not the divorce continuation right.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c8-claims',
      title: 'Claims and the time limit on certain defenses',
      body: `Notice of a claim is required within 20 days of the loss, or as soon as reasonably possible. Notice to the agent equals notice to the insurer. After notice, the company must supply claim forms within a specified number of days, usually 15. If the forms are not furnished, the claimant complies by sending written proof of the occurrence, the nature, and the extent of the loss.

Proof of loss is due within 90 days of the loss, or as soon as reasonably possible, but not later than one year. The one-year limit does not apply if the claimant is not legally competent to comply. Claims are paid immediately upon written proof of loss. Policies often state 60 days, 45 days, or 30 days. Disability income benefits must be paid at least monthly.

Benefits are payable to the insured while the insured is living. If the insured is dead, a pending claim is paid to the beneficiary. If there is no beneficiary, it is paid to the estate, unless the benefits were assigned to a hospital or a doctor. A facility-of-payment clause lets the insurer pay up to a stated limit to a relative or another person who is equitably entitled to urgent claim funds.

The insurer may examine the insured, at its own expense, as often as reasonably necessary while a claim is pending. It may conduct an autopsy if state law does not forbid it.

The time limit on certain defenses is similar to the incontestability clause in life insurance. No statement or misstatement made in the application at issue, except a fraudulent misstatement, will be used to deny a claim after the policy has been in force for 2 years. Fraud may be used to deny a claim at any time. A claim for a loss or a disability that begins more than 2 years after issue may not be reduced or denied because a disease or a physical condition existed before the effective date, unless that condition was specifically excluded.`,
      questions: [
        question(
          'c8q15',
          'How soon must proof of loss be submitted?',
          [
            {
              text: 'Within 90 days, or as soon as reasonably possible, but not later than one year, unless the claimant is not legally competent.',
              why: 'Notice of claim is due within 20 days, and notice to the agent is notice to the insurer. Claim forms are usually due from the company within 15 days. Disability income is paid at least monthly.',
              correct: true,
            },
            {
              text: 'Within 20 days, or the claim is denied even if notice was impossible.',
              why: 'Twenty days is the notice-of-claim period, and notice may be given as soon as reasonably possible. Proof of loss is the 90-day requirement.',
            },
            {
              text: 'Within 15 days after the insurer fails to send forms.',
              why: 'Fifteen days is the usual time for the company to supply claim forms. If it does not, the claimant may submit written proof of the occurrence, nature, and extent of the loss.',
            },
            {
              text: 'Only after a 2-year waiting period.',
              why: 'Two years is the time limit on certain defenses, not the deadline for proof of loss.',
            },
          ],
        ),
        question(
          'c8q16',
          'After a health policy has been in force for 2 years, which misstatement can still be used to deny a claim?',
          [
            {
              text: 'A fraudulent misstatement. Other statements in the application cannot be used to deny a claim after 2 years.',
              why: 'A loss or disability that starts after 2 years also cannot be denied because a disease or condition that was not specifically excluded existed before the effective date.',
              correct: true,
            },
            {
              text: 'Any misstatement, because health policies never become incontestable.',
              why: 'The time limit on certain defenses bars the use of nonfraudulent application statements after 2 years. It is similar to the life insurance incontestability provision.',
            },
            {
              text: 'A nonfraudulent mistake about a hobby, but not fraud.',
              why: 'Fraud is the exception that can be used at any time. Ordinary misstatements cannot be used to deny a claim after 2 years.',
            },
            {
              text: 'A pre-existing condition that was not excluded, if the disability began in the third year.',
              why: 'A claim for disability commencing after 2 years from issue may not be reduced or denied on the ground that a nonexcluded condition existed before the effective date.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c8-adjustments',
      title: 'Age, job, and other policy rules',
      body: `The insured must wait 60 days after proof of loss, but not later than 3 years in most states, before bringing a legal action against the company.

If the age on the application was wrong, the benefits are adjusted to what the premium paid would have purchased at the correct age.

Occupation is especially important for disability income. If the insured changes to a more hazardous occupation, the benefits are reduced to what the premiums paid would have purchased for that occupation. If the change is to a less hazardous occupation, the insured may apply for a rate reduction.

Liability is denied if the insured is injured while committing an illegal act or while working in an illegal occupation.

When a claim is paid, past-due premiums are deducted and the policyholder is paid the net amount.

Any provision that conflicts, on the policy's effective date, with the statutes of the state where the insured lives on that date is automatically amended to the minimum those statutes require. This conformity provision is optional, but most states require it in every health contract.

The insuring clause is usually on the first page. It identifies the insured and the company and states what kind of loss is covered. The consideration clause is also usually on the first page. It states that both parties must give valuable consideration. The applicant's consideration is payment of the premium and the statements in the application. The insurer's consideration is the promise to pay according to the contract.

The free look, also called the right to examine, commonly gives the insured 10 days from delivery to return the policy for a full refund. It is required for individual policies in most states. The 10-day free look does not apply to a group policy, to a replacement policy whose required free-look period is 30 days, or to another class the Commissioner sets aside. Credit life is life insurance, so it is not an exception on this health list. The life free-look exceptions are in the life provisions.

The face page must state the conditions for renewal. If the insurer reserves the right to refuse renewal, it must mail or deliver written notice of nonrenewal to the policyholder's last known address. Coverage is for a specified term, so the lack of a cancellation provision does not guarantee continuing protection. The insurer may still refuse to renew.`,
      questions: [
        question(
          'c8q17',
          'The insured changes to a more hazardous occupation. What happens at claim time?',
          [
            {
              text: 'Benefits are reduced to the amount the premiums paid would have purchased for the more hazardous occupation.',
              why: 'A change to a less hazardous occupation lets the insured apply for a rate reduction. A misstatement of age adjusts benefits to what the premium would have purchased at the correct age. Legal action must wait 60 days after proof of loss and, in most states, must be brought within 3 years.',
              correct: true,
            },
            {
              text: 'The policy is void from the start, and no benefit is paid.',
              why: 'A change of occupation adjusts the benefit or the rate. It does not void the policy. Liability is denied if the insured is injured while committing an illegal act or working in an illegal occupation.',
            },
            {
              text: 'Benefits increase, because the new risk is greater.',
              why: 'A more hazardous occupation reduces benefits to what the premium would have bought for that occupation. It does not increase them.',
            },
            {
              text: 'The insurer must refund all premiums and cancel back to the issue date.',
              why: 'The provision adjusts benefits. Past-due premiums, if any, are deducted from a claim. The policy is not rescinded solely because the occupation changed.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c8-renew',
      title: 'Whether you can renew the policy',
      body: `A noncancellable policy cannot be cancelled, and the premium cannot be increased beyond what the policy states. The policy may state an increase at a certain year, such as age 65, but that increase must be in the original contract. The insured may renew for the life of the contract. The guarantee to renew usually applies until age 65, when the insured is usually eligible for Medicare. Disability income is renewed beyond age 65 only if the insured shows continued full-time work.

Guaranteed renewable coverage is similar, except the insurer can increase the premium on the policy anniversary. The insured has the unilateral right to renew for the life of the contract. Premiums may be increased on a class basis only, not on one individual policy. Coverage generally is not renewable beyond age 65. A Medicare supplement policy and a long-term care policy must be written as guaranteed renewable, and the company cannot cancel them when the insured turns 65.

A conditionally renewable policy may be terminated only at renewal, for conditions stated in the contract. One example is that the insured must be employed in order to collect disability payments. The premium may be increased. The company may not deny renewal because of claims experience.

Optional renewability is similar, except the insurer may cancel for any reason, on certain homogeneous classes, not on individuals inside a class. The insurer can decide not to renew only on a policy anniversary or a premium due date. If it renews the policy, it may also increase the premium.

A nonrenewable policy is also called a cancellable policy or a term policy. It covers a specified period and is not renewable. When the term ends, the insured must buy another policy. These are period-of-time policies. Travel accident policies, short-term health plans, and accident-only policies are examples, as are policies written for a school function, a summer camp, or an athletic event. When the event is over, the coverage ends.`,
      questions: [
        question(
          'c8q18',
          'How does a guaranteed renewable health policy differ from a noncancellable policy?',
          [
            {
              text: 'The insurer may raise the premium on the anniversary, but only for a class, not for one person. The insured keeps the right to renew.',
              why: 'A noncancellable policy cannot be cancelled, and the premium cannot rise above what the policy states. Medicare supplement and long-term care policies must be guaranteed renewable and cannot be cancelled at age 65.',
              correct: true,
            },
            {
              text: 'The insurer may refuse to renew one insured because of that person’s claims, at any time.',
              why: 'A conditionally renewable policy cannot be denied renewal because of claims experience, and termination is only at renewal for stated conditions. Optional renewability can refuse a class, not one individual, and only on a renewal date.',
            },
            {
              text: 'The premium is frozen, and the company may still cancel the policy at will.',
              why: 'A frozen premium with a renewal right describes noncancellable coverage. Guaranteed renewable coverage allows a class premium increase and does not let the company cancel at will.',
            },
            {
              text: 'Coverage ends when a trip or camp ends, and it cannot be renewed.',
              why: 'Travel, short-term, accident-only, school, camp, and athletic-event policies are nonrenewable term health policies. They are not guaranteed renewable.',
            },
          ],
        ),
      ],
    },

  ],
}

for (const section of chapter8.sections) {
  section.questions.push(...(chapter8Extra[section.id] ?? []))
}
