import { question } from '../build.ts'
import type { Question } from '../types.ts'

export const chapter10Extra: Record<string, Question[]> = {
'c10-concepts': [
    question(
      'c10q20',
      'What does first-dollar coverage mean on an early basic medical plan?',
      [
        {
          text: 'Benefits that start only after the insured pays a deductible.',
          why: 'Early basic plans used first-dollar coverage, meaning no deductible, and they also used low dollar limits.',
        },
        {
          text: 'A predetermined fixed rate paid regardless of the actual expense.',
          why: 'An indemnity plan pays the insured a predetermined fixed rate, regardless of the actual expense. First-dollar coverage means there was no deductible.',
        },
        {
          text: 'Payment of a catastrophic bill and nothing smaller.',
          why: 'Early basic plans did not protect a family against a catastrophic bill. First-dollar coverage means the plan had no deductible.',
        },
        {
          text: 'Coverage with no deductible.',
          why: 'Early basic plans, sold separately as hospital, medical, and surgical coverage, used first-dollar coverage, meaning no deductible, and low dollar limits.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q21',
      'What gap did early basic plans leave for a family?',
      [
        {
          text: 'They did not protect the family against a catastrophic bill.',
          why: 'Early basic plans used first-dollar coverage and low dollar limits. They did not protect a family against a catastrophic bill.',
          correct: true,
        },
        {
          text: 'They left small claims unpaid because a deductible applied first.',
          why: 'Those plans used first-dollar coverage, meaning no deductible. The unprotected exposure was a catastrophic bill.',
        },
        {
          text: 'They covered only preventive care, routine physicals, and hospitalization.',
          why: 'That list is typical of comprehensive care. Early basic plans had low dollar limits and left catastrophic bills unprotected.',
        },
        {
          text: 'They paid providers a regular amount and nothing more when care was given.',
          why: 'Prepaid plans pay providers regularly whether or not they treat the person, and they receive no extra payment when they do. Early basic plans left catastrophic bills unprotected.',
        },
      ],
    ),
    question(
      'c10q22',
      'What amount does a fee-for-service plan pay for each service?',
      [
        {
          text: 'A regular payment whether or not the person is treated, with no extra payment for care.',
          why: 'Prepaid plans provide medical and hospital benefits as services rather than dollars and pay providers that way. Fee-for-service plans pay billed charges for each service.',
        },
        {
          text: 'The billed charges for each service.',
          why: 'Fee-for-service plans pay providers for their billed charges for each service.',
          correct: true,
        },
        {
          text: 'A set amount for each enrolled person per period, whether or not that person seeks care.',
          why: 'That payment is capitation. Fee-for-service payment is the provider’s billed charge for each service.',
        },
        {
          text: 'A predetermined fixed rate, regardless of the actual expense.',
          why: 'An indemnity plan pays a predetermined fixed rate, regardless of the actual expense. Fee-for-service payment follows the billed charges for each service.',
        },
      ],
    ),
    question(
      'c10q23',
      'What does specified coverage limit the policy to?',
      [
        {
          text: 'Most medical expenses, including preventive care and hospitalization.',
          why: 'Comprehensive care covers most medical expenses, typically including preventive care and hospitalization. Specified coverage is limited to one illness or one narrow set of benefits.',
        },
        {
          text: 'Most any qualified physician the insured chooses.',
          why: 'A traditional reimbursement plan lets the insured use most any qualified physician. Specified coverage limits the policy to one illness or one narrow set of benefits.',
        },
        {
          text: 'One illness or one narrow set of benefits.',
          why: 'Specified coverage limits the policy to one illness or one narrow set of benefits, such as a cancer policy, prescription drugs, or dental care. These policies are often written alone or alongside a traditional fee-for-service major medical policy.',
          correct: true,
        },
        {
          text: 'Physicians and care centers on a managed-care list.',
          why: 'Managed care limits benefits to physicians and care centers on a list. Specified coverage limits the policy to one illness or one narrow set of benefits.',
        },
      ],
    ),
    question(
      'c10q24',
      'Which services are typical of comprehensive care?',
      [
        {
          text: 'A cancer policy, prescription drugs, or dental care alone.',
          why: 'A cancer policy, prescription drugs, or dental care is specified coverage. Comprehensive care covers most medical expenses, and HMOs are an example.',
        },
        {
          text: 'Hospital, medical, and surgical benefits sold separately with low dollar limits.',
          why: 'Those were early basic plans. Comprehensive care covers most medical expenses, typically preventive care, routine physicals, immunizations, outpatient services, and hospitalization.',
        },
        {
          text: 'Coinsurance and deductibles the insured pays before the insurer pays.',
          why: 'Those amounts are out-of-pocket expenses. Comprehensive care covers most medical expenses, including preventive care and hospitalization.',
        },
        {
          text: 'Preventive care, routine physicals, immunizations, outpatient services, and hospitalization.',
          why: 'Comprehensive care covers most medical expenses, typically preventive care, routine physicals, immunizations, outpatient services, and hospitalization. HMOs are an example.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q25',
      'What does a benefit schedule state?',
      [
        {
          text: 'Exactly what is covered and for how much.',
          why: 'A benefit schedule states exactly what is covered and for how much.',
          correct: true,
        },
        {
          text: 'The average charge for that procedure in that geographic area.',
          why: 'Usual, reasonable, and customary charges mean the insurer pays an amount based on the average charge for that procedure in that geographic area. A benefit schedule states exactly what is covered and for how much.',
        },
        {
          text: 'That the insurer repays whatever amount a party has spent or lost.',
          why: 'Reimbursement means repaying a party who has spent or lost money. A benefit schedule states exactly what is covered and for how much.',
        },
        {
          text: 'That coverage continues until a higher authority reviews a decision.',
          why: 'An appeal is a request that a higher authority review a decision. A benefit schedule states exactly what is covered and for how much.',
        },
      ],
    ),
    question(
      'c10q26',
      'What is nonrenewal?',
      [
        {
          text: 'Payment of the billed charges for each service a provider performs.',
          why: 'Fee-for-service plans pay billed charges for each service. Nonrenewal is termination at the policy’s expiration date.',
        },
        {
          text: 'Termination at the policy’s expiration date.',
          why: 'Nonrenewal is termination at the policy’s expiration date.',
          correct: true,
        },
        {
          text: 'A request that a higher authority review a decision.',
          why: 'That request is an appeal. Nonrenewal is termination at the policy’s expiration date.',
        },
        {
          text: 'The amount the insured pays out of pocket during the year.',
          why: 'Stop-loss is the amount the insured pays out of pocket during the year. Nonrenewal is termination at the policy’s expiration date.',
        },
      ],
    ),
    question(
      'c10q27',
      'Whom may the insured use under a traditional reimbursement plan?',
      [
        {
          text: 'Only physicians and care centers on a list.',
          why: 'Managed care limits benefits to physicians and care centers on a list. A traditional reimbursement plan lets the insured use most any qualified physician.',
        },
        {
          text: 'Only the primary care physician in an HMO.',
          why: 'The gatekeeper is the primary care physician in an HMO. Traditional reimbursement lets the insured use most any qualified physician.',
        },
        {
          text: 'Most any qualified physician.',
          why: 'Traditional reimbursement plans let the insured use most any qualified physician.',
          correct: true,
        },
        {
          text: 'Only a physician paid a set amount whether or not the person seeks care.',
          why: 'Capitation is a set amount paid to a physician or group for each enrolled person per period, whether or not that person seeks care. Traditional reimbursement lets the insured use most any qualified physician.',
        },
      ],
    ),
    question(
      'c10q28',
      'How does managed care limit benefits?',
      [
        {
          text: 'It lets the insured use most any qualified physician.',
          why: 'That freedom belongs to a traditional reimbursement plan. Managed care limits benefits to physicians and care centers on a list.',
        },
        {
          text: 'It treats the insured’s coinsurance and deductibles as the benefit paid by the insurer.',
          why: 'Out-of-pocket expenses are coinsurance and deductibles the insured pays before the insurer pays its portion. Managed care limits benefits to physicians and care centers on a list.',
        },
        {
          text: 'It ends the policy at the expiration date.',
          why: 'Nonrenewal is termination at the policy’s expiration date. Managed care limits benefits to physicians and care centers on a list.',
        },
        {
          text: 'It limits benefits to physicians and care centers on a list.',
          why: 'Managed care limits benefits to physicians and care centers on a list.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q29',
      'Who is an insured?',
      [
        {
          text: 'A person covered by insurance who usually receives the benefits.',
          why: 'Insureds are people covered by insurance who usually receive the benefits.',
          correct: true,
        },
        {
          text: 'A person who signs up for a prepaid plan such as an HMO.',
          why: 'Subscribers, also called participants or members, sign up for prepaid plans such as HMOs. An insured is a person covered by insurance who usually receives the benefits.',
        },
        {
          text: 'The primary care physician in an HMO.',
          why: 'The gatekeeper is the primary care physician in an HMO. An insured is a person covered by insurance who usually receives the benefits.',
        },
        {
          text: 'A higher authority asked to review a decision.',
          why: 'An appeal is a request that a higher authority review a decision. An insured is a person covered by insurance who usually receives the benefits.',
        },
      ],
    ),
    question(
      'c10q30',
      'On an individual policy, who is the subscriber?',
      [
        {
          text: 'A family dependent who receives benefits under someone else’s contract.',
          why: 'Family dependency is not what makes a person the subscriber on a group policy. On an individual policy, the subscriber is the person in whose name the contract is issued.',
        },
        {
          text: 'The person in whose name the contract is issued.',
          why: 'On an individual policy, the subscriber is the person in whose name the contract is issued.',
          correct: true,
        },
        {
          text: 'A physician who is paid whether or not treatment occurs.',
          why: 'Prepaid providers are paid regularly whether or not they treat the person. The subscriber on an individual policy is the person in whose name the contract is issued.',
        },
        {
          text: 'Students, passengers, or a sports team covered during an activity.',
          why: 'A blanket policy covers members of a group during a particular activity without naming each person. The individual-policy subscriber is the person in whose name the contract is issued.',
        },
      ],
    ),
    question(
      'c10q31',
      'What identifies the subscriber on a group policy?',
      [
        {
          text: 'Family dependency on an employee.',
          why: 'On a group policy, subscriber status is employment or other status other than family dependency. Family dependency does not make the person the subscriber.',
        },
        {
          text: 'Filing a request that a higher authority review a decision.',
          why: 'That request is an appeal. The group subscriber is the person whose employment or other status, other than family dependency, makes that person eligible to enroll.',
        },
        {
          text: 'Employment or other status, other than family dependency, that makes the person eligible to enroll.',
          why: 'On a group policy, the subscriber is the person whose employment or other status, other than family dependency, makes that person eligible to enroll.',
          correct: true,
        },
        {
          text: 'Serving as the primary care physician who controls referrals.',
          why: 'The gatekeeper is the primary care physician in an HMO. A group subscriber is identified by employment or other status, other than family dependency, that makes that person eligible to enroll.',
        },
      ],
    ),
    question(
      'c10q32',
      'Whom does a blanket policy cover?',
      [
        {
          text: 'One named person for one illness, such as cancer.',
          why: 'A cancer policy is an example of specified coverage. A blanket policy covers members of a group during a particular activity, without naming each person.',
        },
        {
          text: 'Only the person in whose name an individual contract is issued.',
          why: 'That person is the subscriber on an individual policy. A blanket policy covers members of a group during a particular activity, without naming each person.',
        },
        {
          text: 'Each enrolled person through a set payment whether or not care is sought.',
          why: 'Capitation pays a physician or group a set amount for each enrolled person per period. A blanket policy covers members of a group, such as students, passengers, or sports teams, during a particular activity.',
        },
        {
          text: 'Members of a group during a particular activity, without naming each person.',
          why: 'A blanket policy covers members of a group during a particular activity, without naming each person, such as students, passengers, or sports teams.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q33',
      'Which statement describes how an indemnity plan pays?',
      [
        {
          text: 'It pays the insured a predetermined fixed rate, regardless of the actual expense.',
          why: 'An indemnity plan pays the insured a predetermined fixed rate, regardless of the actual expense.',
          correct: true,
        },
        {
          text: 'It pays the provider’s billed charges for each service.',
          why: 'Fee-for-service plans pay billed charges for each service. An indemnity plan pays a predetermined fixed rate, regardless of the actual expense.',
        },
        {
          text: 'It pays the average charge for the procedure in that geographic area.',
          why: 'Usual, reasonable, and customary payment is based on the average charge for that procedure in that geographic area. An indemnity plan uses a predetermined fixed rate.',
        },
        {
          text: 'It repays the full amount a party has spent or lost.',
          why: 'Reimbursement means repaying a party who has spent or lost money. An indemnity plan pays a predetermined fixed rate, regardless of the actual expense.',
        },
      ],
    ),
  ],
  'c10-major': [
    question(
      'c10q34',
      'Besides offices and hospitals, where else is care given?',
      [
        {
          text: 'Only in the home office of a stock insurer.',
          why: 'Stock insurers are carriers, along with mutual insurers, Blue Cross and Blue Shield, HMOs, and PPOs. Care is also given in surgicenters, urgent care centers, and skilled nursing facilities.',
        },
        {
          text: 'Surgicenters, urgent care centers, and skilled nursing facilities.',
          why: 'Care is given in offices and hospitals, and also in surgicenters, urgent care centers, and skilled nursing facilities.',
          correct: true,
        },
        {
          text: 'Only at Blue Cross and Blue Shield enrollment counters.',
          why: 'Blue Cross and Blue Shield is one of the carriers. Care is given in offices and hospitals, and also in surgicenters, urgent care centers, and skilled nursing facilities.',
        },
        {
          text: 'Only inside a hospital.',
          why: 'Care is given in offices and hospitals, and also in surgicenters, urgent care centers, and skilled nursing facilities.',
        },
      ],
    ),
    question(
      'c10q35',
      'Which carriers does this section include?',
      [
        {
          text: 'Only stock insurers that sell basic hospital expense policies.',
          why: 'Major medical grew out of basic hospital expense policies, but carriers include stock and mutual insurers, Blue Cross and Blue Shield, HMOs, and PPOs.',
        },
        {
          text: 'Only mutual insurers and skilled nursing facilities.',
          why: 'A mutual insurer is a carrier, and a skilled nursing facility is a place care is given. Carriers also include stock insurers, Blue Cross and Blue Shield, HMOs, and PPOs.',
        },
        {
          text: 'Stock and mutual insurers, Blue Cross and Blue Shield, HMOs, and PPOs.',
          why: 'Carriers include stock and mutual insurers, Blue Cross and Blue Shield, HMOs, and PPOs.',
          correct: true,
        },
        {
          text: 'Only HMOs, with offices and hospitals removed from the list.',
          why: 'HMOs are one kind of carrier. The list also includes stock and mutual insurers, Blue Cross and Blue Shield, and PPOs, and care is still given in offices and hospitals.',
        },
      ],
    ),
    question(
      'c10q36',
      'Why did major medical plans grow out of basic hospital expense policies?',
      [
        {
          text: 'Basic plans already used high maximum limits and coinsurance.',
          why: 'Basic plans had low limits and first-dollar coverage, and they left catastrophic bills unprotected. Major medical grew as treatment became more sophisticated and expensive.',
        },
        {
          text: 'Treatment became simpler and less expensive.',
          why: 'Major medical plans grew out of basic hospital expense policies as treatment became more sophisticated and expensive.',
        },
        {
          text: 'Families needed coverage only for small claims they could absorb.',
          why: 'The major medical policy does not respond to small claims the insured can absorb. It grew because treatment became more sophisticated and expensive.',
        },
        {
          text: 'Treatment became more sophisticated and expensive.',
          why: 'Major medical plans grew out of basic hospital expense policies as treatment became more sophisticated and expensive.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q37',
      'What kind of loss was major medical built to cover?',
      [
        {
          text: 'A catastrophic loss.',
          why: 'Major medical was built for catastrophic loss. It does not respond to small claims the insured can absorb, and it does respond to rare, financially disastrous losses.',
          correct: true,
        },
        {
          text: 'Small claims the insured can absorb.',
          why: 'Deductibles and coinsurance keep major medical affordable because the policy does not respond to small claims the insured can absorb. It was built for catastrophic loss.',
        },
        {
          text: 'Regular dental, vision, or hearing care.',
          why: 'Regular dental, vision, or hearing care is a common exclusion. Major medical was built for catastrophic loss.',
        },
        {
          text: 'Injuries caused by war.',
          why: 'Injuries caused by war are a common exclusion. Major medical was built for catastrophic loss.',
        },
      ],
    ),
    question(
      'c10q38',
      'Which features do major medical contracts use?',
      [
        {
          text: 'Low limits and first-dollar coverage with no deductible.',
          why: 'Basic plans had low limits and first-dollar coverage. Major medical contracts use high maximum limits, blanket coverage, coinsurance, and a deductible.',
        },
        {
          text: 'High maximum limits, blanket coverage, coinsurance, and a deductible.',
          why: 'Major medical contracts use high maximum limits, blanket coverage, coinsurance, and a deductible. The deductible is paid up front.',
          correct: true,
        },
        {
          text: 'Coverage of custodial care and intentionally self-inflicted injuries.',
          why: 'Custodial care and intentionally self-inflicted injuries are common exclusions. The contract uses high maximum limits, blanket coverage, coinsurance, and a deductible.',
        },
        {
          text: 'Benefits limited to care inside the hospital.',
          why: 'Most plans cover eligible expenses in and out of the hospital and have high maximums. The contract features include high maximum limits, blanket coverage, coinsurance, and a deductible.',
        },
      ],
    ),
    question(
      'c10q39',
      'When does coinsurance apply?',
      [
        {
          text: 'On the first dollar, before any deductible is paid.',
          why: 'The deductible is paid up front. Coinsurance, the sharing of cost, applies after the deductible is met and the claim is submitted.',
        },
        {
          text: 'Only after stop-loss is reached and the insurer pays the full eligible expense.',
          why: 'Once stop-loss is reached, the insurer pays 100% of eligible expenses for the rest of the year. Coinsurance applies after the deductible is met and the claim is submitted.',
        },
        {
          text: 'After the deductible is met and the claim is submitted.',
          why: 'Coinsurance, the sharing of cost, applies after the deductible is met and the claim is submitted.',
          correct: true,
        },
        {
          text: 'Only on cosmetic surgery that no birth defect or accident required.',
          why: 'Cosmetic surgery is excluded unless a birth defect or an accident requires it. Coinsurance applies after the deductible is met and the claim is submitted.',
        },
      ],
    ),
    question(
      'c10q40',
      'Where do most major medical plans cover eligible expenses?',
      [
        {
          text: 'Only inside the hospital, and only up to a low limit.',
          why: 'Basic plans had low limits. Most major medical plans cover eligible expenses in and out of the hospital and have high maximums.',
        },
        {
          text: 'Only for injuries covered by workers compensation.',
          why: 'Injuries covered by workers compensation are a common exclusion. Most plans cover eligible expenses in and out of the hospital.',
        },
        {
          text: 'Only for regular vision and hearing care.',
          why: 'Regular dental, vision, or hearing care is a common exclusion. Most plans cover eligible expenses in and out of the hospital and have high maximums.',
        },
        {
          text: 'In and out of the hospital.',
          why: 'Most plans cover eligible expenses in and out of the hospital and have high maximums.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q41',
      'When may cosmetic surgery be covered?',
      [
        {
          text: 'When a birth defect or an accident requires it.',
          why: 'Cosmetic surgery is a common exclusion unless a birth defect or an accident requires it.',
          correct: true,
        },
        {
          text: 'Whenever the insured also wants regular dental care.',
          why: 'Regular dental, vision, or hearing care is a common exclusion. Cosmetic surgery is covered when a birth defect or an accident requires it.',
        },
        {
          text: 'When the insured caused the injury on purpose.',
          why: 'Intentionally self-inflicted injuries are a common exclusion. Cosmetic surgery can be covered when a birth defect or an accident requires it.',
        },
        {
          text: 'When the injury was caused by war.',
          why: 'Injuries caused by war are excluded. Cosmetic surgery is excluded unless a birth defect or an accident requires it.',
        },
      ],
    ),
    question(
      'c10q42',
      'With which factors do major medical premiums vary?',
      [
        {
          text: 'Only the kind of carrier, such as a stock insurer or a mutual insurer.',
          why: 'Stock and mutual insurers are both carriers. Premiums vary with the deductible, the coinsurance percentage, the stop-loss, and the maximum benefit.',
        },
        {
          text: 'The deductible, the coinsurance percentage, the stop-loss, and the maximum benefit.',
          why: 'Premiums vary with the deductible, the coinsurance percentage, the stop-loss, and the maximum benefit.',
          correct: true,
        },
        {
          text: 'Only whether the carrier is Blue Cross and Blue Shield.',
          why: 'Blue Cross and Blue Shield is one carrier among several. Premiums vary with the deductible, the coinsurance percentage, the stop-loss, and the maximum benefit.',
        },
        {
          text: 'Only whether the plan lists custodial care as an exclusion.',
          why: 'Custodial care is a common exclusion. Premiums vary with the deductible, the coinsurance percentage, the stop-loss, and the maximum benefit.',
        },
      ],
    ),
    question(
      'c10q43',
      'What typical annual deductible range does this section give?',
      [
        {
          text: 'The coinsurance shares of 90/10, 80/20, and 70/30.',
          why: 'Those shares describe how expenses are split after the deductible. A typical annual deductible is $100 to $2,500.',
        },
        {
          text: 'An equal 50/50 share of every expense and no dollar deductible.',
          why: 'A 50/50 share is one coinsurance split after the deductible. A typical annual deductible is $100 to $2,500.',
        },
        {
          text: '$100 to $2,500.',
          why: 'A typical annual deductible is $100 to $2,500. The insured pays that portion each year before benefits start, and a higher deductible lowers the premium.',
          correct: true,
        },
        {
          text: '100% of eligible expenses for the rest of the year.',
          why: 'After stop-loss is reached, the insurer pays 100% of eligible expenses for the rest of the year. A typical annual deductible is $100 to $2,500.',
        },
      ],
    ),
    question(
      'c10q44',
      'After the deductible, which coinsurance shares does this section describe?',
      [
        {
          text: 'The insured pays the larger part of a 90/10 share.',
          why: 'The insurer generally pays the larger share. The shares named are 90/10, 80/20, or 70/30, or an equal 50/50 share.',
        },
        {
          text: 'The insurer pays the entire expense, so coinsurance never applies.',
          why: 'After the deductible, the insured and the insurer share expenses. Coinsurance requires the insured to participate in the ongoing cost.',
        },
        {
          text: 'The only permitted share is 50/50.',
          why: 'An equal 50/50 share is allowed, and so are 90/10, 80/20, and 70/30. The insurer generally pays the larger share.',
        },
        {
          text: 'The insurer generally pays the larger share, such as 90/10, 80/20, or 70/30, or the share may be 50/50.',
          why: 'The insured and the insurer share expenses. The insurer generally pays the larger share: 90/10, 80/20, or 70/30, or an equal 50/50 share.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q45',
      'What happens to the premium when the insurer’s coinsurance percentage is smaller?',
      [
        {
          text: 'The premium is lower.',
          why: 'The smaller the insurer’s percentage, the lower the premium. Coinsurance still requires the insured to participate in the ongoing cost.',
          correct: true,
        },
        {
          text: 'The premium rises because the insured stops sharing the cost.',
          why: 'Coinsurance requires the insured to participate in the ongoing cost. The smaller the insurer’s percentage, the lower the premium.',
        },
        {
          text: 'The deductible is cancelled for the rest of the year.',
          why: 'The deductible is paid up front and is separate from the coinsurance percentage. A smaller insurer percentage lowers the premium.',
        },
        {
          text: 'The insurer starts paying 100% before stop-loss is reached.',
          why: 'The insurer pays 100% of eligible expenses for the rest of the year once stop-loss is reached. A smaller insurer percentage lowers the premium.',
        },
      ],
    ),
    question(
      'c10q46',
      'Which expenses count toward stop-loss?',
      [
        {
          text: 'Excluded war injuries and custodial care.',
          why: 'Injuries caused by war and custodial care are common exclusions. Stop-loss counts the insured’s share of coinsurance, and that share may or may not include the deductible.',
        },
        {
          text: 'The insured’s share of coinsurance, which may or may not include the deductible.',
          why: 'The expenses that count are the insured’s share of coinsurance, and they may or may not include the deductible.',
          correct: true,
        },
        {
          text: 'Regular dental, vision, and hearing bills.',
          why: 'Regular dental, vision, or hearing care is a common exclusion. Stop-loss counts the insured’s share of coinsurance, and it may or may not include the deductible.',
        },
        {
          text: 'The insurer’s 100% payment after stop-loss has already been reached.',
          why: 'Once stop-loss is reached, the insurer pays 100% of eligible expenses for the rest of the year. What counts toward stop-loss is the insured’s share of coinsurance, which may or may not include the deductible.',
        },
      ],
    ),
    question(
      'c10q47',
      'If the stop-loss is higher, what happens to the major medical premium?',
      [
        {
          text: 'A higher premium, because the insurer pays 100% of eligible expenses sooner.',
          why: 'Once stop-loss is reached, the insurer pays 100% of eligible expenses for the rest of the year. A higher stop-loss means a lower premium.',
        },
        {
          text: 'No premium change, because only the deductible affects price.',
          why: 'Premiums vary with the deductible, the coinsurance percentage, the stop-loss, and the maximum benefit. A higher stop-loss means a lower premium.',
        },
        {
          text: 'A lower premium.',
          why: 'A higher stop-loss means a lower premium. Stop-loss is the amount the insured pays out of pocket during the year.',
          correct: true,
        },
        {
          text: 'First-dollar coverage with the deductible removed.',
          why: 'Basic plans used first-dollar coverage and low limits. On major medical, a higher stop-loss means a lower premium, and the deductible is still paid up front.',
        },
      ],
    ),
    question(
      'c10q48',
      'How does the price of an impairment rider compare with most riders?',
      [
        {
          text: 'Like most riders, it adds coverage and costs extra.',
          why: 'Most riders add coverage and cost extra. An impairment rider takes coverage away, there is no extra charge, and the premium is not reduced.',
        },
        {
          text: 'It lowers the premium because a pre-existing condition is removed.',
          why: 'The rider removes coverage for a defined pre-existing condition, such as back injuries, but the premium is not reduced. A physician with a prior back injury can still be covered for other disabilities, and there is no extra charge.',
        },
        {
          text: 'The underwriter must add a charge if the exclusion is permanent.',
          why: 'The underwriter decides whether the exclusion lasts for a short time, such as a period with no further treatment, or permanently. There is no extra charge, and the premium is not reduced.',
        },
        {
          text: 'There is no extra charge, and the premium is not reduced.',
          why: 'Most riders add coverage and cost extra. This rider takes coverage away, there is no extra charge, and the premium is not reduced.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q49',
      'What is a small employer’s defined contribution health arrangement?',
      [
        {
          text: 'An employer group plan the employee selects individually, using pre-tax dollars.',
          why: 'The defined contribution plan is an employer group plan the employee selects individually, using pre-tax dollars. The insurer must allow a small employer to enroll and impose no surcharge for that choice.',
          correct: true,
        },
        {
          text: 'A plan that bars a small employer from enrolling.',
          why: 'The insurer must follow the state insurance code and allow a small employer to enroll. The employee selects the employer group plan individually, using pre-tax dollars.',
        },
        {
          text: 'A choice that requires the insurer to add a surcharge.',
          why: 'The insurer must impose no surcharge for that choice. The defined contribution plan is selected individually by the employee, using pre-tax dollars.',
        },
        {
          text: 'An arrangement that blocks a large employer group from enrolling.',
          why: 'The insurer must allow a large employer group to enroll. A small employer may offer the defined contribution arrangement, which the employee selects individually using pre-tax dollars.',
        },
      ],
    ),
  ],
  'c10-hmo': [
    question(
      'c10q50',
      'What did the Health Maintenance Act of 1973 require of an employer with more than 25 employees?',
      [
        {
          text: 'That the employer drop its regular plan and offer only an HMO.',
          why: 'The Act required an HMO as an alternative to the regular plan. The dual-choice requirement has expired and has not been reenacted.',
        },
        {
          text: 'That the employer offer an HMO as an alternative to its regular plan.',
          why: 'The Health Maintenance Act of 1973 supported HMOs and required employers with more than 25 employees to offer an HMO as an alternative to their regular plan.',
          correct: true,
        },
        {
          text: 'That every office visit carry a copayment of $5, $10, or $25.',
          why: 'Those dollar amounts are examples of a copayment. The 1973 Act required employers with more than 25 employees to offer an HMO as an alternative to their regular plan.',
        },
        {
          text: 'That people living inside a county or a city be treated as ineligible.',
          why: 'An HMO serves people who live inside specific boundaries, such as a county or a city. The 1973 rule required an HMO offer from employers with more than 25 employees.',
        },
      ],
    ),
    question(
      'c10q51',
      'What is the current status of the dual-choice requirement?',
      [
        {
          text: 'It still forces every employer with more than 25 employees to offer an HMO.',
          why: 'The Health Maintenance Act of 1973 required that offer. The dual-choice requirement has expired and has not been reenacted.',
        },
        {
          text: 'It was reenacted for employers with more than 25 employees.',
          why: 'The dual-choice requirement has expired and has not been reenacted.',
        },
        {
          text: 'It has expired and has not been reenacted.',
          why: 'The dual-choice requirement has expired and has not been reenacted.',
          correct: true,
        },
        {
          text: 'It now requires the HMO to reimburse a physician’s or hospital’s bill.',
          why: 'An HMO provides benefits as services, not as reimbursement of a physician’s or hospital’s bill. The dual-choice requirement has expired and has not been reenacted.',
        },
      ],
    ),
    question(
      'c10q52',
      'How did HMOs try to cut cost?',
      [
        {
          text: 'By refusing emergency care outside the service area.',
          why: 'Emergency care must be available in or out of the service area. The goal was to cut cost through preventive care, including free annual checkups and free or low-cost immunizations.',
        },
        {
          text: 'By making a deductible part of the usual HMO plan.',
          why: 'HMO plans usually have no deductible. The goal was to cut cost through preventive care.',
        },
        {
          text: 'By paying the physician an extra fee each time the member is treated.',
          why: 'The physician or the HMO is paid regularly whether or not care is provided. Cost cutting was pursued through preventive care.',
        },
        {
          text: 'Through preventive care, including free annual family checkups and free or low-cost immunizations.',
          why: 'The goal was to cut cost through preventive care. HMOs offer free annual checkups for the family, hoping to catch disease early, and free or low-cost immunizations.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q53',
      'How does an HMO provide benefits?',
      [
        {
          text: 'As services, and it both finances and delivers care.',
          why: 'An HMO provides benefits as services, not as reimbursement of a physician’s or hospital’s bill. It both finances and delivers care.',
          correct: true,
        },
        {
          text: 'As reimbursement of a physician’s or hospital’s bill.',
          why: 'An HMO provides benefits as services, not as reimbursement of a physician’s or hospital’s bill.',
        },
        {
          text: 'As a fee paid only in a month when the member sees a physician.',
          why: 'The HMO receives a flat amount each month for each member, whether or not the member sees a physician. Benefits are provided as services, and the HMO both finances and delivers care.',
        },
        {
          text: 'As care from any physician, with no standards and no prenegotiated price.',
          why: 'Care comes from physicians who meet the HMO’s standards and accept a prenegotiated price. The HMO provides benefits as services and both finances and delivers care.',
        },
      ],
    ),
    question(
      'c10q54',
      'Who is eligible to be served by an HMO?',
      [
        {
          text: 'People who live outside the stated boundaries.',
          why: 'People outside those boundaries are not eligible. The HMO serves people who live inside specific boundaries, such as a county or a city.',
        },
        {
          text: 'People who live inside specific boundaries, such as a county or a city.',
          why: 'An HMO serves people who live inside specific boundaries, such as a county or a city. People outside those boundaries are not eligible.',
          correct: true,
        },
        {
          text: 'Only the employer with more than 25 employees, not the people who live in the area.',
          why: 'The 1973 Act addressed employers with more than 25 employees. The HMO serves people who live inside specific boundaries, such as a county or a city.',
        },
        {
          text: 'Only members who have already met an annual deductible.',
          why: 'HMO plans usually have no deductible. Eligibility is for people who live inside specific boundaries.',
        },
      ],
    ),
    question(
      'c10q55',
      'Which amounts are examples of an HMO copayment?',
      [
        {
          text: 'A deductible due before the first office visit.',
          why: 'HMO plans usually have no deductible. A copayment is a specific part of the cost, or a flat dollar amount, such as $5, $10, or $25 per office visit.',
        },
        {
          text: 'The flat monthly amount the HMO receives for each member.',
          why: 'The HMO is capitated and receives a flat amount each month for each member. A copayment example is $5, $10, or $25 per office visit.',
        },
        {
          text: '$5, $10, or $25 per office visit.',
          why: 'A copayment is a specific part of the cost, or a flat dollar amount, such as $5, $10, or $25 per office visit.',
          correct: true,
        },
        {
          text: 'A charge added when the family skips the free annual checkup.',
          why: 'HMOs offer free annual checkups for the family. A copayment example is $5, $10, or $25 per office visit.',
        },
      ],
    ),
    question(
      'c10q56',
      'When does an HMO receive its flat amount for a member?',
      [
        {
          text: 'After a deductible, and only for services the member uses.',
          why: 'HMO plans usually have no deductible. The HMO receives a flat amount each month for each member, whether or not the member sees a physician.',
        },
        {
          text: 'Only when it reimburses the hospital’s billed charges.',
          why: 'Benefits are services, not reimbursement of a physician’s or hospital’s bill. The flat amount is paid each month for each member.',
        },
        {
          text: 'Only in a month when the member sees a physician.',
          why: 'The flat amount is paid whether or not the member sees a physician. The HMO is a prepaid plan.',
        },
        {
          text: 'Each month, whether or not the member sees a physician.',
          why: 'The HMO is capitated: it receives a flat amount each month for each member, whether or not the member sees a physician. It is a prepaid plan.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q57',
      'Why does the primary care physician have an interest in keeping the member healthy?',
      [
        {
          text: 'The physician or the HMO is paid regularly for responsibility for the member, whether or not care is provided.',
          why: 'The member chooses a primary care physician, the gatekeeper. That physician or the HMO is paid regularly whether or not care is provided, so it is in the physician’s interest to keep the member healthy.',
          correct: true,
        },
        {
          text: 'The physician is paid an added fee only when the member becomes ill.',
          why: 'Payment is regular whether or not care is provided. Keeping the member healthy is in the physician’s interest because pay does not depend on illness.',
        },
        {
          text: 'Each specialist referral increases that physician’s pay.',
          why: 'In many HMOs the primary physician bears a financial cost for a referral. Regular payment, whether or not care is provided, is why health of the member matters to the physician.',
        },
        {
          text: 'The monthly amount is withheld until the member is treated.',
          why: 'The physician or the HMO is paid regularly whether or not care is provided. That arrangement, not a withheld payment, makes it in the physician’s interest to keep the member healthy.',
        },
      ],
    ),
    question(
      'c10q58',
      'In many HMOs, what can a specialist referral cost the primary physician?',
      [
        {
          text: 'Nothing. The physician is paid extra for every referral.',
          why: 'The referral system keeps members away from higher-priced specialists unless the visit is necessary. In many HMOs the primary physician bears a financial cost for a referral and may try another treatment first.',
        },
        {
          text: 'A financial cost, so the physician may try another treatment first.',
          why: 'In many HMOs the primary physician bears a financial cost for a referral, so the physician may try another treatment first. HMOs must have a way to handle complaints about delayed referrals or other care and coverage issues.',
          correct: true,
        },
        {
          text: 'Loss of the flat monthly amount, which is then paid to the specialist.',
          why: 'The HMO receives a flat amount each month for each member whether or not the member sees a physician. The referral point is the financial cost the primary physician may bear.',
        },
        {
          text: 'A duty to reimburse the member’s hospital bill in full.',
          why: 'An HMO provides benefits as services, not as reimbursement of a hospital bill. The primary physician may bear a financial cost for the referral and may try another treatment first.',
        },
      ],
    ),
    question(
      'c10q59',
      'If emergency care is given outside the service area, what does the HMO try to do?',
      [
        {
          text: 'Deny the care because emergencies are covered only inside the boundaries.',
          why: 'Emergency care must be available in or out of the service area. If it is given outside the area, the HMO tries to bring the member back so salaried member physicians can provide the care.',
        },
        {
          text: 'Refuse later inpatient hospital care, even inside the service area.',
          why: 'Inpatient hospital care is provided in or out of the service area. Outside emergency care leads the HMO to try to bring the member back so salaried member physicians can provide the care.',
        },
        {
          text: 'Bring the member back so salaried member physicians can provide the care.',
          why: 'If emergency care is given outside the area, the HMO tries to bring the member back so salaried member physicians can provide the care. Emergency care must be available in or out of the service area.',
          correct: true,
        },
        {
          text: 'Limit the member to alcohol or drug rehabilitation for later care.',
          why: 'Treatment of mental, emotional, or nervous disorders, including alcohol or drug rehabilitation, may be limited. Outside emergency care is handled by trying to bring the member back so salaried member physicians can provide the care.',
        },
      ],
    ),
  ],
  'c10-ppo': [
    question(
      'c10q60',
      'How are physicians paid in a preferred provider organization?',
      [
        {
          text: 'By a salary, whether or not they treat a member.',
          why: 'Physicians are paid fees rather than a salary. Members are encouraged, through better benefits, to use physicians who agreed to the fees.',
        },
        {
          text: 'At 90% only when the member uses a physician who is not on the list.',
          why: 'The PPO might pay 90% for a physician on its list and only 70% for a physician who is not. Physicians are paid fees rather than a salary.',
        },
        {
          text: 'By prepaid periodic payments set before the service period.',
          why: 'A limited health plan exchanges services for prepaid periodic payments set before the service period. In a PPO, physicians are paid fees rather than a salary, and care is not prepaid.',
        },
        {
          text: 'Fees rather than a salary.',
          why: 'Physicians are paid fees rather than a salary, and members are encouraged, through better benefits, to use physicians who agreed to the fees.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q61',
      'What might a PPO pay for a listed physician compared with a physician who is not on the list?',
      [
        {
          text: '90% of the cost for a listed physician and only 70% for a physician who is not.',
          why: 'The PPO might pay 90% of the cost of a physician on its list and only 70% if the member uses a physician who is not. A member may still use any physician.',
          correct: true,
        },
        {
          text: '70% for a listed physician and 90% for a physician who is not.',
          why: 'The higher share is for the listed physician. The PPO might pay 90% on its list and only 70% off the list.',
        },
        {
          text: 'The same share either way, because the member must stay with a contracted physician.',
          why: 'A member may use any physician, and subscribers are not required to use contracted physicians or facilities. The PPO might pay 90% on the list and only 70% off the list.',
        },
        {
          text: 'Nothing for a listed physician, because PPO care is prepaid.',
          why: 'Care is not prepaid, and physicians are paid fee-for-service. A listed physician might be paid at 90%, and a physician off the list at 70%.',
        },
      ],
    ),
    question(
      'c10q62',
      'With whom does a PPO contract to provide care at a reduced fee?',
      [
        {
          text: 'Only the member, and only for care that must be obtained in the network.',
          why: 'A member may use any physician, and subscribers are not required to use contracted physicians or facilities. The PPO contracts with employers, insurers, or third parties.',
        },
        {
          text: 'Employers, insurers, or third parties.',
          why: 'A PPO is a group of physicians and hospitals that contract with employers, insurers, or third parties to provide care at a reduced fee.',
          correct: true,
        },
        {
          text: 'Only the state mini-COBRA program.',
          why: 'State mini-COBRA is one path into Utah NetCare. A PPO contracts with employers, insurers, or third parties to provide care at a reduced fee.',
        },
        {
          text: 'Only dentists, optometrists, and podiatrists.',
          why: 'Dentists, optometrists, and podiatrists are among providers a limited health plan may furnish. A PPO is a group of physicians and hospitals contracting with employers, insurers, or third parties.',
        },
      ],
    ),
    question(
      'c10q63',
      'Must subscribers use the PPO’s contracted physicians or facilities?',
      [
        {
          text: 'Yes. Care is prepaid, so only contracted facilities may be used.',
          why: 'Care is not prepaid, and physicians are paid fee-for-service. Subscribers are not required to use contracted physicians or facilities.',
        },
        {
          text: 'Yes. Using anyone else cancels the contract with the employer or insurer.',
          why: 'The PPO contracts with employers, insurers, or third parties, but subscribers are not required to use contracted physicians or facilities.',
        },
        {
          text: 'No. Subscribers are not required to use contracted physicians or facilities.',
          why: 'Care is not prepaid, and physicians are paid fee-for-service. Subscribers are not required to use contracted physicians or facilities.',
          correct: true,
        },
        {
          text: 'No. The PPO pays 70% on the list and 90% off the list.',
          why: 'The PPO might pay 90% for a physician on its list and only 70% for a physician who is not. Subscribers are not required to use contracted physicians or facilities.',
        },
      ],
    ),
    question(
      'c10q64',
      'For what payment does a limited health plan exchange its services?',
      [
        {
          text: 'By a fee billed after each visit, with no amount set in advance.',
          why: 'The services are exchanged for prepaid periodic payments set before the service period. The plan must arrange or provide the services.',
        },
        {
          text: 'By a salary paid to PPO physicians.',
          why: 'PPO physicians are paid fees rather than a salary, and PPO care is not prepaid. A limited health plan uses prepaid periodic payments set before the service period.',
        },
        {
          text: 'By COBRA premiums collected for 12 months.',
          why: 'Utah NetCare can last up to 12 months for people who cannot afford COBRA premiums. A limited health plan uses prepaid periodic payments set before the service period.',
        },
        {
          text: 'By prepaid periodic payments set before the service period.',
          why: 'The services are exchanged for prepaid periodic payments set before the service period, and the plan must arrange or provide the services.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q65',
      'Which of these is outside the definition of a limited health plan?',
      [
        {
          text: 'An HMO.',
          why: 'A limited health plan does not include an HMO, an insurer licensed under the nonprofit health service insurance corporation law, or an individual who contracts only to perform that individual’s own professional services.',
          correct: true,
        },
        {
          text: 'A plan that furnishes services of dentists and optometrists.',
          why: 'A limited health plan may furnish services of dentists, optometrists, and other listed providers, directly or through others. An HMO is not included in the definition.',
        },
        {
          text: 'A plan that furnishes services of podiatrists and physical therapists.',
          why: 'Podiatrists and physical therapists are among the providers a limited health plan may furnish. An HMO is not a limited health plan.',
        },
        {
          text: 'A reasonable combination of psychologists and social workers.',
          why: 'The definition includes psychologists, social workers, family counselors, and reasonable combinations of the listed services. It does not include an HMO.',
        },
      ],
    ),
    question(
      'c10q66',
      'What does open panel mean?',
      [
        {
          text: 'The caregiver treats only members and is an employee of the organization.',
          why: 'That describes a closed panel. Open panel means the caregiver contracts with the health organization but may still treat patients who are not members, and those doctors are not employees.',
        },
        {
          text: 'The caregiver contracts with the health organization but may still treat patients who are not members.',
          why: 'Open panel means the caregiver contracts with the health organization but may still treat patients who are not members. Those doctors are not employees of the organization.',
          correct: true,
        },
        {
          text: 'The caregiver may not treat any patient who is not a member.',
          why: 'A closed-panel caregiver treats only members and may not treat other patients. An open-panel caregiver may still treat patients who are not members.',
        },
        {
          text: 'The caregiver is an employee and may belong to only one organization.',
          why: 'Open-panel doctors are not employees of the organization. Providers may belong to several PPOs at once.',
        },
      ],
    ),
    question(
      'c10q67',
      'Which statement fits a closed panel?',
      [
        {
          text: 'Doctors are not employees and may treat patients who are not members.',
          why: 'That is an open panel. Closed-panel doctors treat only members, may not treat other patients, and are employees of the organization.',
        },
        {
          text: 'Doctors must treat nonmembers and may join only one PPO.',
          why: 'Open-panel caregivers may treat patients who are not members, and providers may belong to several PPOs at once. Closed-panel doctors treat only members and are employees.',
        },
        {
          text: 'Doctors treat only members, may not treat other patients, and are employees of the organization.',
          why: 'Closed panel means the caregiver treats only members and may not treat other patients. Those doctors are employees of the organization.',
          correct: true,
        },
        {
          text: 'Qualifying doctors must treat nonmembers before they can be added to the list.',
          why: 'A qualifying physician or hospital that follows the PPO’s standards and charges the PPO’s fees can be added at any time. Closed-panel doctors treat only members and are employees.',
        },
      ],
    ),
    question(
      'c10q68',
      'When may a physician or hospital be added to a PPO list?',
      [
        {
          text: 'Only at the start of a 12-month NetCare term.',
          why: 'NetCare lasts up to 12 months, which is a separate rule. A qualifying physician or hospital can be added to the PPO list at any time if it follows the PPO’s standards and charges the PPO’s fees.',
        },
        {
          text: 'Only if the provider agrees to join no other PPO.',
          why: 'Providers may belong to several PPOs at once. A provider that qualifies, follows the standards, and charges the fees can be added at any time.',
        },
        {
          text: 'Only after the provider stops charging the PPO’s fees.',
          why: 'The provider must charge the PPO’s fees, follow the PPO’s standards, and qualify. Such a physician or hospital can be added at any time.',
        },
        {
          text: 'At any time, if the provider qualifies, follows the PPO’s standards, and charges the PPO’s fees.',
          why: 'Any physician or hospital that qualifies, follows the PPO’s standards, and charges the PPO’s fees can be added to the list at any time.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q69',
      'May providers belong to more than one PPO?',
      [
        {
          text: 'Yes. Providers may belong to several PPOs at once.',
          why: 'Providers may belong to several PPOs at once. A qualifying provider can also be added to a PPO list at any time.',
          correct: true,
        },
        {
          text: 'No. Each provider may join only one PPO and must be that PPO’s employee.',
          why: 'Closed-panel doctors are employees, but providers may belong to several PPOs at once. Open-panel doctors are not employees.',
        },
        {
          text: 'No. Joining a second PPO makes the panel closed.',
          why: 'Closed panel means the caregiver treats only members and may not treat other patients. Providers may belong to several PPOs at once.',
        },
        {
          text: 'Yes, but only during the 12 months of Utah NetCare.',
          why: 'Providers may belong to several PPOs at once. The 12-month period is the length of NetCare for a Utah resident leaving an employer plan, not a cap on PPO membership.',
        },
      ],
    ),
    question(
      'c10q70',
      'Whom is Utah NetCare meant to cover?',
      [
        {
          text: 'People who want a prepaid limited health plan in addition to an HMO.',
          why: 'A limited health plan does not include an HMO. Utah NetCare is alternative coverage for people who cannot afford COBRA premiums.',
        },
        {
          text: 'People who cannot afford COBRA premiums.',
          why: 'Utah NetCare is alternative coverage for people who cannot afford COBRA premiums.',
          correct: true,
        },
        {
          text: 'Physicians who want to belong to several PPOs.',
          why: 'Providers may belong to several PPOs at once, but that is not who NetCare covers. NetCare is for people who cannot afford COBRA premiums.',
        },
        {
          text: 'Employers that refuse continuation coverage.',
          why: 'NetCare is available to people eligible for federal COBRA or state mini-COBRA continuation, or for conversion after those benefits are exhausted. It is for people who cannot afford COBRA premiums.',
        },
      ],
    ),
    question(
      'c10q71',
      'Who may extend Utah NetCare besides the person leaving the employer plan?',
      [
        {
          text: 'No spouse or dependent may extend coverage.',
          why: 'A spouse or dependent, including a surviving spouse or dependent whose coverage ends at the employee’s death, may extend coverage.',
        },
        {
          text: 'Only a person who cannot qualify for COBRA, mini-COBRA, or conversion.',
          why: 'NetCare is available to people eligible for federal COBRA or state mini-COBRA continuation, or for conversion to an individual plan after those benefits are exhausted. A spouse or dependent may extend coverage.',
        },
        {
          text: 'A spouse or dependent, including a surviving spouse or dependent whose coverage ends at the employee’s death.',
          why: 'A spouse or dependent, including a surviving spouse or dependent whose coverage ends at the employee’s death, may extend coverage. NetCare is also available to people eligible for federal COBRA, state mini-COBRA, or conversion after those benefits are exhausted.',
          correct: true,
        },
        {
          text: 'Only a hospital that charges the PPO’s reduced fee.',
          why: 'A PPO may contract with hospitals to provide care at a reduced fee. Extending NetCare is for a spouse or dependent, including a surviving spouse or dependent whose coverage ends at the employee’s death.',
        },
      ],
    ),
    question(
      'c10q72',
      'How long is Utah NetCare available to a Utah resident leaving an employer plan?',
      [
        {
          text: 'For life, with no need to reapply.',
          why: 'NetCare is an individual or group plan for up to 12 months. After 12 months, members must reapply as individuals.',
        },
        {
          text: 'Only while the person is still on the employer plan.',
          why: 'NetCare is for Utah residents leaving an employer plan. It lasts up to 12 months, and members must then reapply as individuals.',
        },
        {
          text: 'Until a surviving spouse’s coverage ends, with no month limit.',
          why: 'A surviving spouse or dependent whose coverage ends at the employee’s death may extend coverage, but the plan is for up to 12 months. After 12 months, members must reapply as individuals.',
        },
        {
          text: 'For up to 12 months, after which members must reapply as individuals.',
          why: 'NetCare is an individual or group plan for up to 12 months for Utah residents leaving an employer plan. After 12 months, members must reapply as individuals.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q73',
      'Which expenses does the NetCare insured pay?',
      [
        {
          text: 'Some expenses, including diabetes management, adoption benefits, and use of a specialist as a primary care physician.',
          why: 'The insured pays some expenses, including diabetes management, adoption benefits, and use of a specialist as a primary care physician. Rates are lower because NetCare does not meet the minimum coverage other Utah health plans must provide.',
          correct: true,
        },
        {
          text: 'Only the reduced fee of a physician on a PPO list.',
          why: 'A PPO might pay 90% for a listed physician and 70% for one who is not. The NetCare insured pays some expenses, including diabetes management, adoption benefits, and use of a specialist as a primary care physician.',
        },
        {
          text: 'The model letter insurers give to employers.',
          why: 'Insurers required to offer alternative coverage must give employers a model letter explaining it at renewal, or when an employer or employee asks. That letter is not the expense the insured pays.',
        },
        {
          text: 'Diabetes, adoption, and specialist-as-primary-care expenses are waived because NetCare meets every Utah minimum.',
          why: 'Rates are lower because NetCare does not meet the minimum coverage other Utah health plans must provide. The insured pays some expenses, including diabetes management, adoption benefits, and use of a specialist as a primary care physician.',
        },
      ],
    ),
  ],
  'c10-pos': [
    question(
      'c10q74',
      'What does a point-of-service plan combine?',
      [
        {
          text: 'Only a PPO, and the employee must lock into that one plan.',
          why: 'Employees do not have to lock into one plan. A point-of-service plan combines an HMO and a PPO.',
        },
        {
          text: 'An HMO and a PPO.',
          why: 'A point-of-service plan combines an HMO and a PPO. Employees can choose differently each time they need care.',
          correct: true,
        },
        {
          text: 'Only an HMO, with the same choice required at every later visit.',
          why: 'The plan combines an HMO and a PPO, and employees do not have to lock into one plan.',
        },
        {
          text: 'A network the member is never allowed to leave.',
          why: 'The person may visit an in-network provider or an out-of-network physician. The plan combines an HMO and a PPO.',
        },
      ],
    ),
    question(
      'c10q75',
      'Do employees have to lock into one plan?',
      [
        {
          text: 'Yes. The enrollment choice applies to every later visit.',
          why: 'Employees do not have to lock into one plan. They can choose differently each time they need care.',
        },
        {
          text: 'Yes. Every visit must stay on the in-network side.',
          why: 'The person may visit an in-network provider or an out-of-network physician. Employees can choose differently each time they need care.',
        },
        {
          text: 'No. They can choose differently each time they need care.',
          why: 'Employees do not have to lock into one plan. They can choose differently each time they need care.',
          correct: true,
        },
        {
          text: 'No. Every visit must be with a nonmember physician.',
          why: 'If a nonmember physician is used, that physician is paid a fee for service, but the member is not required to use one each time. Employees can choose differently each time they need care.',
        },
      ],
    ),
    question(
      'c10q76',
      'Which providers may the person visit under a point-of-service plan?',
      [
        {
          text: 'Only an in-network provider.',
          why: 'The person may visit an in-network provider or an out-of-network physician. Out-of-network copayments, coinsurance, and deductibles may be substantially higher.',
        },
        {
          text: 'Only an out-of-network physician.',
          why: 'The person may visit an in-network provider or an out-of-network physician. Participants usually have a network controlled by a primary care physician and may seek care outside it at reduced coverage.',
        },
        {
          text: 'Only a nonmember physician.',
          why: 'If a nonmember physician is used, that physician is paid a fee for service and the member pays a higher coinsurance amount or percentage. The person may still visit an in-network provider or an out-of-network physician.',
        },
        {
          text: 'An in-network provider or an out-of-network physician.',
          why: 'In a point-of-service plan the person may visit an in-network provider or an out-of-network physician. Out-of-network copayments, coinsurance, and deductibles may be substantially higher.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q77',
      'What is another name for these plans?',
      [
        {
          text: 'Open-ended HMOs.',
          why: 'These plans are also called open-ended HMOs. In a point-of-service plan the person may visit an in-network provider or an out-of-network physician.',
          correct: true,
        },
        {
          text: 'Plans that lock the employee into a single network.',
          why: 'Employees do not have to lock into one plan. These plans are also called open-ended HMOs.',
        },
        {
          text: 'Plans that allow only in-network providers.',
          why: 'The person may visit an in-network provider or an out-of-network physician. These plans are also called open-ended HMOs.',
        },
        {
          text: 'Plans that keep the same copayment, coinsurance, and deductible out of network.',
          why: 'Out-of-network copayments, coinsurance, and deductibles may be substantially higher. These plans are also called open-ended HMOs.',
        },
      ],
    ),
    question(
      'c10q78',
      'How does care arranged by the primary care physician compare in benefit and cost?',
      [
        {
          text: 'It pays a lower benefit and costs the member more.',
          why: 'Care arranged by the primary care physician pays a higher benefit at a lower cost. Care outside the network is at reduced coverage, and out-of-network cost sharing may be substantially higher.',
        },
        {
          text: 'It pays a higher benefit at a lower cost.',
          why: 'Care arranged by the primary care physician pays a higher benefit at a lower cost. Participants usually have a network controlled by a primary care physician.',
          correct: true,
        },
        {
          text: 'It is billed to a nonmember physician at the same coinsurance used in the network.',
          why: 'If a nonmember physician is used, that physician is paid a fee for service, and the member pays a higher coinsurance amount or percentage. Care the primary physician arranges pays a higher benefit at a lower cost.',
        },
        {
          text: 'It is available only when the person has no contracted network.',
          why: 'Participants usually have a network controlled by a primary care physician. Care that physician arranges pays a higher benefit at a lower cost.',
        },
      ],
    ),
  ],
  'c10-hsa': [
    question(
      'c10q79',
      'Whose qualified health expenses can a health savings account be used to save for?',
      [
        {
          text: 'Only the employer’s own expenses.',
          why: 'Employer contributions are not included in the individual’s taxable income. The account saves for qualified health expenses of the individual, spouse, or dependents.',
        },
        {
          text: 'Only expenses of a person claimed as a dependent on someone else’s return.',
          why: 'A person who can be claimed as a dependent on someone else’s return is not eligible. The account is for qualified health expenses of the individual, spouse, or dependents.',
        },
        {
          text: 'The individual, spouse, or dependents.',
          why: 'A health savings account helps an individual save for qualified health expenses of the individual, spouse, or dependents. A person covered by a high deductible health plan may make a tax-deductible contribution and use it for out-of-pocket medical expenses.',
          correct: true,
        },
        {
          text: 'Nonhealth expenses, with no tax and no penalty.',
          why: 'Money used for a nonhealth expense is taxed, plus a 20% penalty. The account is for qualified health expenses of the individual, spouse, or dependents.',
        },
      ],
    ),
    question(
      'c10q80',
      'How are employer contributions treated in the individual’s taxable income?',
      [
        {
          text: 'They are included in that taxable income.',
          why: 'Employer contributions are not included in the individual’s taxable income.',
        },
        {
          text: 'They are taxed and also charged the 20% penalty for a nonhealth expense.',
          why: 'The 20% penalty applies to money used for a nonhealth expense. Employer contributions are not included in the individual’s taxable income.',
        },
        {
          text: 'They are capped at the 2023 single minimum deductible of $1,500 and then taxed.',
          why: 'In 2023 the qualified plan’s minimum deductible is $1,500 for singles. Employer contributions are not included in the individual’s taxable income.',
        },
        {
          text: 'They are not included in the individual’s taxable income.',
          why: 'Employer contributions are not included in the individual’s taxable income. A person covered by a high deductible health plan may make a tax-deductible contribution for out-of-pocket medical expenses.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q81',
      'Which coverage does not violate the rule against other health insurance?',
      [
        {
          text: 'Specific injury insurance, accident, disability, dental, vision, or long-term care.',
          why: 'The other-coverage rule does not apply to specific injury insurance, accident, disability, dental, vision, or long-term care. The person must still be covered by a high deductible health plan, must not have other health insurance, must not be eligible for Medicare, and cannot be claimed as a dependent on someone else’s return.',
          correct: true,
        },
        {
          text: 'Another health plan that covers the same medical bills.',
          why: 'The person must not have other health insurance. The exception is specific injury insurance, accident, disability, dental, vision, or long-term care.',
        },
        {
          text: 'Medicare, once the person is eligible for it.',
          why: 'The person must not be eligible for Medicare, and the account must be opened before Medicare eligibility age. Medicare is not one of the other-coverage exceptions.',
        },
        {
          text: 'A return on which someone else claims the person as a dependent.',
          why: 'The person cannot be claimed as a dependent on someone else’s return. That rule is separate from the listed exceptions for specific injury, accident, disability, dental, vision, and long-term care coverage.',
        },
      ],
    ),
    question(
      'c10q82',
      'In 2023, what is the qualified plan’s minimum deductible?',
      [
        {
          text: '$3,850 for singles and $7,750 for families.',
          why: 'Those amounts are the contribution limits. In 2023 the minimum deductible is $1,500 for singles and $3,000 for families.',
        },
        {
          text: '$1,500 for singles and $3,000 for families.',
          why: 'In 2023 the qualified plan’s minimum deductible is $1,500 for singles and $3,000 for families.',
          correct: true,
        },
        {
          text: '$1,000 for each covered person and no separate family figure.',
          why: 'Taxpayers age 55 and older may contribute an extra amount, up to $1,000. The 2023 minimum deductible is $1,500 for singles and $3,000 for families.',
        },
        {
          text: 'No minimum, because the contribution limit replaces the deductible.',
          why: 'The account is linked to high deductible insurance. In 2023 the minimum deductible is $1,500 for singles and $3,000 for families.',
        },
      ],
    ),
    question(
      'c10q83',
      'What contribution limit may eligible people or their employers reach, regardless of the plan deductible?',
      [
        {
          text: '$1,500 for singles and $3,000 for families.',
          why: 'Those are the 2023 minimum deductibles. Eligible people, or their employers, may save up to $3,850 for singles and $7,750 for families.',
        },
        {
          text: 'Only an extra $1,000, and only before age 55.',
          why: 'Taxpayers age 55 and older may contribute an extra amount, up to $1,000. The contribution limit is $3,850 for singles and $7,750 for families, regardless of the plan deductible.',
        },
        {
          text: '$3,850 for singles and $7,750 for families.',
          why: 'Eligible people, or their employers, may save up to the contribution limit regardless of the plan deductible: $3,850 for singles and $7,750 for families.',
          correct: true,
        },
        {
          text: 'An unlimited amount, because employer contributions are left out of taxable income.',
          why: 'Employer contributions are not included in the individual’s taxable income, but savings are still capped at $3,850 for singles and $7,750 for families.',
        },
      ],
    ),
    question(
      'c10q84',
      'How is a nonhealth withdrawal treated?',
      [
        {
          text: 'It is tax free at every age because the contribution was deductible.',
          why: 'A person covered by a high deductible health plan may make a tax-deductible contribution, but money used for a nonhealth expense is taxed, plus a 20% penalty. After age 65 the withdrawal is taxed but not penalized.',
        },
        {
          text: 'It draws a 20% penalty after age 65 and is not taxed before that age.',
          why: 'Money used for a nonhealth expense is taxed, plus a 20% penalty. After age 65, a nonhealth withdrawal is taxed but not penalized.',
        },
        {
          text: 'It is penalized only when the account was opened after Medicare eligibility age.',
          why: 'The account must be opened before Medicare eligibility age. A nonhealth expense is taxed plus a 20% penalty, and after age 65 it is taxed but not penalized.',
        },
        {
          text: 'It is taxed plus a 20% penalty, but after age 65 it is taxed and not penalized.',
          why: 'Money used for a nonhealth expense is taxed, plus a 20% penalty. After age 65, a nonhealth withdrawal is taxed but not penalized.',
          correct: true,
        },
      ],
    ),
  ],
  'c10-hra': [
    question(
      'c10q85',
      'What does a health reimbursement account reimburse?',
      [
        {
          text: 'Qualified medical expenses, such as deductibles and coinsurance.',
          why: 'A health reimbursement account is employer money set aside to reimburse employees for qualified medical expenses, such as deductibles and coinsurance.',
          correct: true,
        },
        {
          text: 'Salary the employee gave up to fund the account.',
          why: 'The account is funded with employer dollars, not employee salary reductions. It reimburses qualified medical expenses, such as deductibles and coinsurance.',
        },
        {
          text: 'Any nonmedical bill the employee submits.',
          why: 'The account reimburses qualified medical expenses, such as deductibles and coinsurance. It is not described as paying nonmedical bills.',
        },
        {
          text: 'A statutory cash benefit that is taxable to the employee.',
          why: 'An HRA is not a taxable employee benefit, and there is no statutory contribution limit. It reimburses qualified medical expenses such as deductibles and coinsurance.',
        },
      ],
    ),
    question(
      'c10q86',
      'How may the employer treat the cost of an HRA?',
      [
        {
          text: 'The cost cannot be deducted, because an HRA is a defined benefit plan.',
          why: 'An HRA is a contribution health care plan, not a defined benefit plan. The employer may deduct the cost as a business expense.',
        },
        {
          text: 'The employer may deduct the cost as a business expense.',
          why: 'Employers get the same kind of preferential tax treatment they get for funding an insurance plan, and they may deduct the cost as a business expense. Employer contributions are tax deductible.',
          correct: true,
        },
        {
          text: 'The cost is deductible only if the employee also reduces salary to fund it.',
          why: 'The account is funded with employer dollars, not employee salary reductions. The employer may deduct the cost as a business expense.',
        },
        {
          text: 'The cost is deductible only in early months when the employer advances claims.',
          why: 'Employers do not have to advance claim payments during the early months of the plan year. The employer may still deduct the cost as a business expense.',
        },
      ],
    ),
    question(
      'c10q87',
      'What kind of health plan is an HRA?',
      [
        {
          text: 'A defined benefit plan.',
          why: 'An HRA is a contribution health care plan, not a defined benefit plan.',
        },
        {
          text: 'A taxable employee benefit paid through salary reduction.',
          why: 'It is not a taxable employee benefit, and it is funded with employer dollars, not employee salary reductions. It is a contribution health care plan.',
        },
        {
          text: 'A contribution health care plan, not a defined benefit plan.',
          why: 'An HRA is a contribution health care plan, not a defined benefit plan. It is not a taxable employee benefit.',
          correct: true,
        },
        {
          text: 'An individual account that follows the employee to the next employer.',
          why: 'The account stays with the originating employer and does not follow the employee to a new job. An HRA is a contribution health care plan, not a defined benefit plan.',
        },
      ],
    ),
    question(
      'c10q88',
      'Is an HRA a taxable employee benefit?',
      [
        {
          text: 'Yes. The employee is taxed when the employer contributes.',
          why: 'An HRA is not a taxable employee benefit. Employer contributions are tax deductible to the employer.',
        },
        {
          text: 'Yes, unless unused amounts roll into the next year.',
          why: 'Employees may roll unused balances to the next year. An HRA is not a taxable employee benefit.',
        },
        {
          text: 'Yes, whenever the employer deducts the contribution.',
          why: 'The employer may deduct the cost as a business expense, and employer contributions are tax deductible. The HRA is still not a taxable employee benefit.',
        },
        {
          text: 'No. It is not a taxable employee benefit.',
          why: 'An HRA is not a taxable employee benefit. Employer contributions are tax deductible.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q89',
      'What may employees do with unused HRA balances?',
      [
        {
          text: 'Roll unused balances to the next year.',
          why: 'Employees may roll unused balances to the next year. Former employees, including retirees, may keep access to unused amounts, at the employer’s discretion.',
          correct: true,
        },
        {
          text: 'Carry the balance to a new employer.',
          why: 'Employees may roll unused balances to the next year. The account stays with the originating employer and does not follow the employee to a new job.',
        },
        {
          text: 'Require the employer to advance those amounts during the early months.',
          why: 'Employers do not have to advance claim payments during the early months of the plan year. Employees may roll unused balances to the next year.',
        },
        {
          text: 'Turn the balance into a salary reduction for the next plan year.',
          why: 'The account is funded with employer dollars, not employee salary reductions. Employees may roll unused balances to the next year.',
        },
      ],
    ),
    question(
      'c10q90',
      'Must an employer advance HRA claim payments during the early months of the plan year?',
      [
        {
          text: 'Yes. Advances are required until a balance rolls forward.',
          why: 'Employees may roll unused balances to the next year, but employers do not have to advance claim payments during the early months of the plan year.',
        },
        {
          text: 'No. Employers do not have to advance claim payments during those early months.',
          why: 'Employers do not have to advance claim payments during the early months of the plan year. The account is funded with employer dollars, not employee salary reductions.',
          correct: true,
        },
        {
          text: 'Yes, but only if the HRA is a defined benefit plan.',
          why: 'An HRA is a contribution health care plan, not a defined benefit plan. Employers do not have to advance claim payments during the early months.',
        },
        {
          text: 'No, unless the employee funded the account by a salary reduction.',
          why: 'The account is funded with employer dollars, not employee salary reductions. Employers do not have to advance claim payments during the early months of the plan year.',
        },
      ],
    ),
    question(
      'c10q91',
      'What statutory contribution limit applies to an HRA?',
      [
        {
          text: 'One statutory dollar limit that every employer must use.',
          why: 'There is no statutory contribution limit. HRAs are open to employees of companies of all sizes, but the employer sets eligibility and contribution limits.',
        },
        {
          text: 'A limit equal to the employee’s salary reduction.',
          why: 'Funding is with employer dollars, not employee salary reductions, and there is no statutory contribution limit. The employer may set the limit.',
        },
        {
          text: 'There is no statutory contribution limit.',
          why: 'There is no statutory contribution limit. The employer may set the limit and decide whether unused amounts roll over.',
          correct: true,
        },
        {
          text: 'A statutory limit that applies only to smaller employers.',
          why: 'HRAs are open to employees of companies of all sizes, and there is no statutory contribution limit. Coupling an HRA with a high deductible, usually lower-cost, health plan can reduce the employer’s cost.',
        },
      ],
    ),
  ],
  'c10-cost': [
    question(
      'c10q92',
      'How do managed care plans such as HMOs and PPOs control cost?',
      [
        {
          text: 'By paying hospital bills without regard to how participants use care.',
          why: 'Managed care plans such as HMOs and PPOs control cost by controlling how participants use care. Provisions include controlled access to providers and large-claim management.',
        },
        {
          text: 'By removing preventive care and second surgical opinions.',
          why: 'Preventive care and second surgical opinions are cost-saving and case-management provisions. The plans control cost by controlling how participants use care.',
        },
        {
          text: 'By requiring hospice to cover operations and antibiotics.',
          why: 'Hospice pays for painkillers and special beds, and operations and antibiotics are not paid. Cost control comes from how participants use care.',
        },
        {
          text: 'By controlling how participants use care.',
          why: 'Managed care plans such as HMOs and PPOs control cost by controlling how participants use care. Provisions include controlled access to providers, preventive care, alternatives to hospitalization, second surgical opinions, and preadmission testing.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q93',
      'Which review is named as the third type?',
      [
        {
          text: 'Retrospective review.',
          why: 'Utilization management reviews whether health care services and resources are appropriate and efficiently allocated, including review of claims. Retrospective review is the third type.',
          correct: true,
        },
        {
          text: 'Prospective review, also called precertification.',
          why: 'Prospective review, or precertification, lets the physician submit claim information before treatment. Retrospective review is the third type.',
        },
        {
          text: 'Concurrent review of the hospital stay.',
          why: 'Concurrent review monitors the hospital stay so the patient is released as planned. Retrospective review is the third type.',
        },
        {
          text: 'A second surgical opinion obtained before admission.',
          why: 'A second surgical opinion and preadmission testing are cost-saving provisions. Retrospective review is the third type of utilization review.',
        },
      ],
    ),
    question(
      'c10q94',
      'What does the case manager evaluate on a large ongoing claim?',
      [
        {
          text: 'Only the size of the premium.',
          why: 'Insurers use case managers for large ongoing claims through utilization management. The manager evaluates whether care is appropriate, necessary, and of good quality.',
        },
        {
          text: 'Whether care is appropriate, necessary, and of good quality.',
          why: 'The manager evaluates whether care is appropriate, necessary, and of good quality, and may use prospective and concurrent review. Insurers use case managers for large ongoing claims through utilization management.',
          correct: true,
        },
        {
          text: 'Only whether the patient wants to remain in the hospital.',
          why: 'Concurrent review monitors the hospital stay so the patient is released as planned. The evaluation is whether care is appropriate, necessary, and of good quality.',
        },
        {
          text: 'Whether hospice should attempt a cure.',
          why: 'Hospice handles daily needs and pain relief and does not attempt a cure. The case manager evaluates whether care is appropriate, necessary, and of good quality.',
        },
      ],
    ),
    question(
      'c10q95',
      'What can annual exams, mammograms, and other tests do?',
      [
        {
          text: 'Replace outpatient care with a longer hospital stay.',
          why: 'Because hospital stays are costly, many plans push outpatient services when possible. Annual exams, mammograms, and other tests can find a problem before symptoms appear.',
        },
        {
          text: 'Attempt a cure for a terminally ill patient.',
          why: 'Hospice does not attempt a cure. Annual exams, mammograms, and other tests can find a problem before symptoms appear.',
        },
        {
          text: 'Find a problem before symptoms appear.',
          why: 'Annual exams, mammograms, and other tests can find a problem before symptoms appear. Plans encourage preventive care and a healthier lifestyle.',
          correct: true,
        },
        {
          text: 'Eliminate later review of claims.',
          why: 'Utilization management includes review of claims. Those tests can find a problem before symptoms appear, which is separate from that review.',
        },
      ],
    ),
    question(
      'c10q96',
      'Why do many plans push outpatient services when possible?',
      [
        {
          text: 'Because a home health aide may not work with a family member.',
          why: 'Home health care can include periodic visits and possibly a home health aide working with a family member. Outpatient services are pushed because hospital stays are costly.',
        },
        {
          text: 'Because hospital stays are inexpensive.',
          why: 'Hospital stays are costly, so many plans push outpatient services when possible.',
        },
        {
          text: 'Because retrospective review allows care only in a hospital.',
          why: 'Retrospective review is the third type of utilization management, and it is not described as limiting care to a hospital. Outpatient services are pushed because hospital stays are costly.',
        },
        {
          text: 'Because hospital stays are costly.',
          why: 'Because hospital stays are costly, many plans push outpatient services when possible.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q97',
      'What can home health care include?',
      [
        {
          text: 'Periodic visits and possibly a home health aide working with a family member.',
          why: 'Alternatives to a hospital stay include home health care, with periodic visits and possibly a home health aide working with a family member.',
          correct: true,
        },
        {
          text: 'Operations and antibiotics in place of pain relief.',
          why: 'Hospice pays for painkillers and special beds, not operations and antibiotics. Home health care includes periodic visits and possibly a home health aide working with a family member.',
        },
        {
          text: 'Only a second surgical opinion performed in the hospital.',
          why: 'A second surgical opinion is a separate cost-saving provision. Home health care is an alternative to a hospital stay, with periodic visits and possibly a home health aide working with a family member.',
        },
        {
          text: 'Preadmission testing that keeps the patient in the hospital.',
          why: 'Preadmission testing is a cost-saving provision. Home health care is an alternative to a hospital stay and can include periodic visits and a home health aide working with a family member.',
        },
      ],
    ),
    question(
      'c10q98',
      'What does hospice do for a terminally ill patient?',
      [
        {
          text: 'It attempts a cure with operations and antibiotics.',
          why: 'Hospice does not attempt a cure. Painkillers and special beds are paid for, and operations and antibiotics are not.',
        },
        {
          text: 'It handles daily needs and pain relief and does not attempt a cure.',
          why: 'A terminally ill patient may choose hospice instead of the hospital. Hospice handles daily needs and pain relief and does not attempt a cure.',
          correct: true,
        },
        {
          text: 'It replaces annual exams and mammograms.',
          why: 'Annual exams, mammograms, and other tests can find a problem before symptoms appear. Hospice handles daily needs and pain relief for a terminally ill patient and does not attempt a cure.',
        },
        {
          text: 'It pays for hospital surgery and not for painkillers or special beds.',
          why: 'Painkillers and special beds are paid for, and operations and antibiotics are not. Hospice handles daily needs and pain relief and does not attempt a cure.',
        },
      ],
    ),
    question(
      'c10q99',
      'What does concurrent review monitor?',
      [
        {
          text: 'Claim information the physician submits before treatment.',
          why: 'Submitting claim information before treatment is prospective review, or precertification. Concurrent review monitors the hospital stay so the patient is released as planned.',
        },
        {
          text: 'Whether hospice should use operations and antibiotics.',
          why: 'Hospice pays for painkillers and special beds, and operations and antibiotics are not paid. Concurrent review monitors the hospital stay so the patient is released as planned.',
        },
        {
          text: 'The hospital stay, so the patient is released as planned.',
          why: 'Concurrent review monitors the hospital stay so the patient is released as planned. The case manager may use prospective and concurrent review.',
          correct: true,
        },
        {
          text: 'Only annual exams given before symptoms appear.',
          why: 'Annual exams, mammograms, and other tests can find a problem before symptoms appear. Concurrent review monitors the hospital stay so the patient is released as planned.',
        },
      ],
    ),
    question(
      'c10q100',
      'What is prospective review, or precertification?',
      [
        {
          text: 'Retrospective review, done before treatment to learn the coverage rate.',
          why: 'Retrospective review is the third type. Prospective review lets the physician submit claim information before treatment to learn whether the procedure is covered and at what rate.',
        },
        {
          text: 'Monitoring during the stay so the patient is released as planned.',
          why: 'That monitoring is concurrent review. Prospective review, or precertification, is the submission of claim information before treatment.',
        },
        {
          text: 'A hospice decision about whether to attempt a cure.',
          why: 'Hospice does not attempt a cure. Prospective review lets the physician submit claim information before treatment to learn whether the procedure is covered and at what rate.',
        },
        {
          text: 'The physician submits claim information before treatment to learn whether the procedure is covered and at what rate.',
          why: 'Prospective review, or precertification, lets the physician submit claim information before treatment to learn whether the procedure is covered and at what rate.',
          correct: true,
        },
      ],
    ),
  ],
'c10-dependents': [
    question(
      'c10q101',
      'How long must family coverage cover a newborn from the moment of birth without pre-existing condition limits?',
      [
        {
          text: 'For 30 days.',
          why: 'Family coverage must cover newborns from the moment of birth, without pre-existing condition limits, for 30 days. If a policy covers any family members, it must cover that newborn on the same basis.',
          correct: true,
        },
        {
          text: 'Until the unmarried dependent reaches the 26th birthday.',
          why: 'A policy or HMO contract that covers dependents must cover unmarried dependents up to age 26. The newborn period without pre-existing condition limits is 30 days from the moment of birth.',
        },
        {
          text: 'For 90 days measured from an adoptive placement.',
          why: 'Placement within 90 days of birth is the window for an adoptive indemnity benefit when maternity coverage is in force. Newborn coverage without pre-existing condition limits lasts 30 days.',
        },
        {
          text: 'For the two years after the limiting-age birthday.',
          why: 'The insurer may ask again for proof of a disabled dependent’s incapacity during the two years after the limiting-age birthday. That proof period is not the 30-day newborn rule.',
        },
      ],
    ),
    question(
      'c10q102',
      'What is required if newborn coverage continues beyond 30 days?',
      [
        {
          text: 'The insurer must continue the child at no additional premium until age 26.',
          why: 'Unmarried dependents up to age 26 have their cost included in the premium on the same basis as other dependent coverage. Continuing a newborn beyond 30 days requires an additional premium.',
        },
        {
          text: 'An additional premium is required.',
          why: 'An additional premium is required if newborn coverage continues beyond 30 days. The first 30 days from the moment of birth are the period without pre-existing condition limits.',
          correct: true,
        },
        {
          text: 'The policy must pay a $4,000 adoptive indemnity in place of further coverage.',
          why: 'The $4,000 amount, subject to adjustment, is the adoptive indemnity benefit when maternity coverage is in force and a child is placed within 90 days of birth. It is not the price of continuing a newborn past 30 days.',
        },
        {
          text: 'The policyholder must prove incapacity at least 30 days before the birth.',
          why: 'Proof of incapacity and dependency for a disabled dependent is due at least 30 days before the limiting age. Continued newborn coverage past 30 days requires an additional premium.',
        },
      ],
    ),
    question(
      'c10q103',
      'For an adoption, who counts as a child?',
      [
        {
          text: 'Any unmarried dependent through the 26th birthday.',
          why: 'Unmarried dependents are covered up to age 26. For an adoption, a child is anyone younger than 18.',
        },
        {
          text: 'Only a newborn whose placement occurs within 30 days of birth.',
          why: 'Placement timing changes when coverage starts, but it does not define who a child is. For an adoption, a child is anyone younger than 18.',
        },
        {
          text: 'Anyone younger than 18.',
          why: 'For an adoption, a child is anyone younger than 18. Individual and group health policies issued in Utah must include these benefits.',
          correct: true,
        },
        {
          text: 'Only a child whose impairment may last at least 12 months.',
          why: 'An impairment that may result in death or last at least 12 months is part of the disabled-dependent test. For an adoption, a child is anyone younger than 18.',
        },
      ],
    ),
    question(
      'c10q104',
      'A policy or HMO contract covers dependents. Until what age must it cover unmarried dependents, and may age end that coverage sooner?',
      [
        {
          text: 'Only while the dependent is younger than 18, ending on that birthday.',
          why: 'Younger than 18 is the definition of a child for an adoption. Unmarried dependents must be covered up to age 26, and coverage cannot end because of age before the 26th birthday.',
        },
        {
          text: 'Through age 19 only, with ages 19 through 26 left uncovered.',
          why: 'The cost for unmarried dependents ages 19 through 26 is included in the premium on the same basis as other dependent coverage. Coverage cannot end because of age before the 26th birthday.',
        },
        {
          text: 'Up to age 26 only when the dependent is disabled and chiefly dependent for support.',
          why: 'Disability and chief dependence on the insured are the disabled-dependent test. Ordinary unmarried dependents must be covered up to age 26 without that test.',
        },
        {
          text: 'Up to age 26, and coverage cannot end because of age before the 26th birthday.',
          why: 'A policy or HMO contract that covers dependents must cover all unmarried dependents up to age 26. It cannot end that coverage because of age before the 26th birthday.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q105',
      'How is the cost of unmarried dependents ages 19 through 26 handled?',
      [
        {
          text: 'It is included in the premium on the same basis as other dependent coverage, and the employer may still require the employee to pay all or part of that cost.',
          why: 'The cost for unmarried dependents ages 19 through 26 is included in the premium on the same basis as other dependent coverage. The employer may still require the employee to pay all or part of that cost.',
          correct: true,
        },
        {
          text: 'It is omitted from the premium, and the employer is forbidden to collect any of it from the employee.',
          why: 'The cost is included in the premium on the same basis as other dependent coverage. The employer may still require the employee to pay all or part of that cost.',
        },
        {
          text: 'The employee pays a separate $4,000 indemnity for each year from age 19 through 26.',
          why: 'The $4,000 figure, subject to adjustment, is the adoptive indemnity benefit. Dependent cost for ages 19 through 26 is included in the premium on the same basis as other dependent coverage.',
        },
        {
          text: 'The cost is waived for the first 30 days and the coverage must then stop.',
          why: 'Thirty days is the newborn period without pre-existing condition limits, and an additional premium applies if that coverage continues. Ages 19 through 26 stay in the premium on the same basis as other dependent coverage.',
        },
      ],
    ),
    question(
      'c10q106',
      'What must each group accident and health policy offer for alcohol or drug dependency treatment?',
      [
        {
          text: 'A mandatory $4,000 indemnity and no access to a licensed treatment program.',
          why: 'The $4,000 amount is the adoptive indemnity benefit, subject to adjustment. Each group accident and health policy must offer an optional rider for alcohol or drug dependency treatment in specified licensed or accredited settings.',
        },
        {
          text: 'An optional rider for programs licensed by the Department of Human Services, inpatient hospitals accredited by the Joint Commission, or facilities licensed by the Department of Health.',
          why: 'Each group accident and health policy must offer that optional rider. The listed programs, hospitals, and facilities are the settings the rider may cover.',
          correct: true,
        },
        {
          text: 'Treatment only for a disabled dependent who cannot work because of an impairment lasting at least 12 months.',
          why: 'The 12-month impairment test is part of the disabled-dependent definition. The alcohol or drug benefit is an optional rider every group accident and health policy must offer.',
        },
        {
          text: 'Automatic newborn coverage from the moment of birth, with no rider offered.',
          why: 'Family coverage must cover newborns from the moment of birth for 30 days without pre-existing condition limits. Alcohol or drug dependency treatment is a separate optional rider on each group accident and health policy.',
        },
      ],
    ),
    question(
      'c10q107',
      'For exclusions and limitations, how is reinstated dependent coverage treated?',
      [
        {
          text: 'A new 30-day pre-existing limit starts on the reinstatement date.',
          why: 'Thirty days is the period of newborn coverage without pre-existing condition limits. Reinstated dependent coverage must be treated, for exclusions and limitations, as if it had never stopped.',
        },
        {
          text: 'Exclusions begin again on the 26th birthday.',
          why: 'The 26th birthday is the point before which unmarried dependent coverage cannot end because of age. Reinstated dependent coverage is treated for exclusions and limitations as if it had never stopped.',
        },
        {
          text: 'It is treated as if the coverage had never stopped.',
          why: 'Dependent coverage that is reinstated must be treated, for exclusions and limitations, as if it had never stopped. Reinstatement does not restart those exclusions and limitations.',
          correct: true,
        },
        {
          text: 'Benefits wait 90 days, as though the reinstatement were a new adoptive placement.',
          why: 'Ninety days of birth is the placement window for an adoptive indemnity benefit. Reinstated dependent coverage is treated as if it had never stopped.',
        },
      ],
    ),
    question(
      'c10q108',
      'A court orders a parent who is eligible for family coverage to cover a child. Which enrollment response is required?',
      [
        {
          text: 'Deny enrollment because the child was born out of wedlock.',
          why: 'The insurer may not deny enrollment because the child was born out of wedlock. A court order for a parent who is eligible for family coverage blocks that denial.',
        },
        {
          text: 'Deny enrollment because the child is not claimed as a tax dependent.',
          why: 'The insurer may not deny enrollment because the child is not claimed as a tax dependent. Tax status is not a permitted refusal when the court has ordered coverage.',
        },
        {
          text: 'Deny enrollment because the child does not live with the parent or in the service area.',
          why: 'The insurer may not deny enrollment because the child does not live with the parent or in the service area. Residence does not justify refusal of that court-ordered enrollment.',
        },
        {
          text: 'Do not deny enrollment because the child was born out of wedlock, is not claimed as a tax dependent, or does not live with the parent or in the service area.',
          why: 'If a court orders a parent who is eligible for family coverage to cover a child, the insurer may not deny enrollment for those reasons. Birth status, tax status, and where the child lives are all closed as denial grounds.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q109',
      'May a group policy deny a child solely because the child does not live with the group member, or solely because the child depends on a former spouse?',
      [
        {
          text: 'No. The policy cannot deny the child solely for either reason.',
          why: 'A group policy cannot deny a child solely because the child does not live with the group member, or solely because the child depends on a former spouse rather than the group member. Neither fact by itself is a denial ground.',
          correct: true,
        },
        {
          text: 'Yes. Living apart from the group member always ends eligibility.',
          why: 'A group policy cannot deny a child solely because the child does not live with the group member. Residence apart from the member, standing alone, does not end eligibility.',
        },
        {
          text: 'Yes. Dependence on a former spouse always replaces coverage through the group member.',
          why: 'A group policy cannot deny a child solely because the child depends on a former spouse rather than the group member. That dependence is not a sole basis for denial.',
        },
        {
          text: 'Yes, but only after the child reaches the 26th birthday.',
          why: 'Unmarried dependent coverage cannot end because of age before the 26th birthday. Living apart or dependence on a former spouse is still not a sole denial ground.',
        },
      ],
    ),
    question(
      'c10q110',
      'A child lives away from the group member. On what basis may that child still be excluded?',
      [
        {
          text: 'On a stricter basis than a child who lives with the member.',
          why: 'A child who lives elsewhere may still be excluded on the same basis as a child who lives with the member. Distance alone does not create a stricter exclusion standard.',
        },
        {
          text: 'On the same basis as a child who lives with the member.',
          why: 'A child who lives elsewhere may still be excluded on the same basis as a child who lives with the member. The policy still cannot deny the child solely because the child does not live with the group member.',
          correct: true,
        },
        {
          text: 'Only after a court orders the parent to provide family coverage.',
          why: 'A court order limits certain enrollment denials when a parent eligible for family coverage must cover a child. A child who lives elsewhere may still be excluded on the same basis as a child who lives with the member.',
        },
        {
          text: 'Only if the child is married and has passed the 26th birthday.',
          why: 'The dependent rule covers unmarried dependents up to age 26. A child who lives elsewhere may still be excluded on the same basis as a child who lives with the member.',
        },
      ],
    ),
    question(
      'c10q111',
      'Which child is a disabled dependent?',
      [
        {
          text: 'Any unmarried child under age 26 who is able to work.',
          why: 'Unmarried dependents up to age 26 are a general coverage class. A disabled dependent must be unable to engage in gainful employment because of a qualifying impairment and must be chiefly dependent on the insured for support.',
        },
        {
          text: 'A child whose short impairment has ended and who supports the insured.',
          why: 'The child must be chiefly dependent on the insured for support, not the other way around. The impairment must be one that may result in death or last at least 12 months and that prevents gainful employment.',
        },
        {
          text: 'A child unable to engage in gainful employment because of a physical or mental impairment that may result in death or last at least 12 months, and who is chiefly dependent on the insured for support.',
          why: 'That is the definition of a disabled dependent. Both the employment limit from the impairment and chief dependence on the insured for support are required.',
          correct: true,
        },
        {
          text: 'Any newborn during the first 30 days after birth, with or without an impairment.',
          why: 'Family coverage must cover newborns from the moment of birth for 30 days without pre-existing condition limits. That newborn rule is not the disabled-dependent definition.',
        },
      ],
    ),
    question(
      'c10q112',
      'Can coverage of a disabled dependent end because the child reaches the limiting age?',
      [
        {
          text: 'Yes. It ends on the 26th birthday even if the disability and dependence continue.',
          why: 'Unmarried dependent coverage cannot end because of age before the 26th birthday, and a disabled dependent has a further protection. Coverage of a disabled dependent cannot end because the child reaches the limiting age.',
        },
        {
          text: 'Yes. It ends at age 18 because that is the adoption definition of a child.',
          why: 'For an adoption, a child is anyone younger than 18. Coverage of a disabled dependent cannot end because the child reaches the limiting age.',
        },
        {
          text: 'Yes. It ends 12 months after the limiting-age birthday.',
          why: 'Twelve months is the duration used in the impairment test for a disabled dependent. Coverage cannot end because the child reaches the limiting age.',
        },
        {
          text: 'No. Coverage cannot end because the child reaches the limiting age.',
          why: 'Coverage of a disabled dependent cannot end because the child reaches the limiting age. The policyholder must still give proof of incapacity and dependency at least 30 days before that age.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q113',
      'When must the policyholder first give proof of incapacity and dependency for a disabled dependent?',
      [
        {
          text: 'At least 30 days before the limiting age.',
          why: 'The policyholder must give proof of incapacity and dependency at least 30 days before the limiting age. Later requests by the insurer follow a different schedule after that birthday.',
          correct: true,
        },
        {
          text: 'Within 90 days after an adoptive placement.',
          why: 'Ninety days of birth is the placement window for an adoptive indemnity benefit. Initial proof for a disabled dependent is due at least 30 days before the limiting age.',
        },
        {
          text: 'Once a year beginning at the moment of birth.',
          why: 'After the two years that follow the limiting-age birthday, the insurer may ask for proof no more than once a year. The policyholder’s first proof is due at least 30 days before that age.',
        },
        {
          text: 'Only during the two years after the birthday, with nothing required before that age.',
          why: 'The insurer may ask for proof again during the two years after the limiting-age birthday. The policyholder must give the first proof at least 30 days before that age.',
        },
      ],
    ),
    question(
      'c10q114',
      'After a disabled dependent’s limiting-age birthday, how often may the insurer ask for proof?',
      [
        {
          text: 'At least 30 days before every later birthday for the rest of the child’s life.',
          why: 'The 30-day point is the policyholder’s initial proof, due before the limiting age. After that birthday the insurer may ask during the following two years, and after that no more than once a year.',
        },
        {
          text: 'During the two years after that birthday, and after that no more than once a year.',
          why: 'The insurer may ask for proof again during the two years after the limiting-age birthday. After that, the insurer may ask no more than once a year.',
          correct: true,
        },
        {
          text: 'Only once, and only if the child was placed for adoption within 90 days of birth.',
          why: 'Placement within 90 days of birth relates to the adoptive indemnity benefit. Proof after the limiting-age birthday may be requested during the next two years and then no more than once a year.',
        },
        {
          text: 'Monthly for 12 months, after which coverage must end.',
          why: 'Twelve months belongs to the impairment test, not to a monthly proof schedule. After the two years following the birthday, requests are limited to no more than once a year, and reaching the limiting age does not end the coverage.',
        },
      ],
    ),
    question(
      'c10q115',
      'What dollar amount is the adoptive indemnity benefit, and may that amount be adjusted?',
      [
        {
          text: 'No indemnity unless the placement is 30 days or more after birth.',
          why: 'Thirty days is the newborn coverage period without pre-existing condition limits and the point after which an additional premium is required if coverage continues. The adoptive indemnity is payable when maternity coverage is in force and the child is placed within 90 days of birth.',
        },
        {
          text: 'A two-year income benefit that replaces newborn coverage.',
          why: 'Two years is the period after a disabled dependent’s limiting-age birthday when the insurer may ask for proof again. The adoptive indemnity is a dollar benefit of $4,000, subject to adjustment.',
        },
        {
          text: 'An adoptive indemnity of $4,000, subject to adjustment.',
          why: 'If the insured has maternity coverage on the date of an adoptive placement, the policy must pay an adoptive indemnity benefit when a child is placed for adoption within 90 days of birth. The amount is $4,000, subject to adjustment.',
          correct: true,
        },
        {
          text: 'Whatever share of the premium the employee pays for dependents ages 19 through 26.',
          why: 'The employer may require the employee to pay all or part of the cost for unmarried dependents ages 19 through 26. That cost is not the adoptive indemnity, which is $4,000, subject to adjustment.',
        },
      ],
    ),
  ],
  'c10-hipaa': [
    question(
      'c10q116',
      'When did the legislation that made group coverage portable take effect, and which people did its required benefits affect?',
      [
        {
          text: 'It took effect after December 31, 2014, and it affected only people eligible for Medicare or Medicaid.',
          why: 'After December 31, 2014, the requirement to issue HIPAA certificates of creditable coverage ended. The portability legislation was effective in July 1997 and set required benefits affecting small employers, the self-employed, pregnant women, and the mentally ill.',
        },
        {
          text: 'It applied only to individual policies and removed any duty to make group coverage portable.',
          why: 'HIPAA applies to group health plans of employers with two or more employees and to individual policies sold by insurers. The legislation effective in July 1997 made group coverage portable.',
        },
        {
          text: 'It guaranteed renewability only when association membership ends, and it did not address portability.',
          why: 'The end of association membership is one ground on which a group issuer may discontinue or nonrenew coverage. The legislation effective in July 1997 made group coverage portable and set required benefits for the groups named in that law.',
        },
        {
          text: 'It was effective in July 1997, made group coverage portable, and set required benefits affecting small employers, the self-employed, pregnant women, and the mentally ill.',
          why: 'Legislation effective in July 1997 made group coverage portable and set required benefits affecting small employers, the self-employed, pregnant women, and the mentally ill. That is the portability statute described here.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q117',
      'Which plans does HIPAA apply to?',
      [
        {
          text: 'Group health plans of employers with two or more employees, and individual policies sold by insurers.',
          why: 'HIPAA applies to group health plans of employers with two or more employees and to individual policies sold by insurers. Both of those markets are within its scope.',
          correct: true,
        },
        {
          text: 'Only a person who already has 18 months of continuous creditable coverage.',
          why: 'Eighteen months of continuous creditable coverage is a conversion condition for a person. HIPAA applies to group health plans of employers with two or more employees and to individual policies sold by insurers.',
        },
        {
          text: 'Only individual policies, and only after a break of 63 or more consecutive days.',
          why: 'Before the Affordable Care Act, creditable-coverage credit applied when the break was not 63 or more consecutive days. HIPAA still applies to group plans of employers with two or more employees and to individual policies sold by insurers.',
        },
        {
          text: 'Only group plans that are allowed to refuse special enrollment.',
          why: 'Group plans must allow special enrollment. HIPAA applies to group health plans of employers with two or more employees and to individual policies sold by insurers.',
        },
      ],
    ),
    question(
      'c10q118',
      'What must group plans do about health status and special enrollment?',
      [
        {
          text: 'They may discriminate against employees and dependents based on health, and they may refuse special enrollment.',
          why: 'Group plans may not discriminate against employees and dependents based on health, and they must allow special enrollment. Health discrimination and a refusal of special enrollment both violate those duties.',
        },
        {
          text: 'They may not discriminate against employees and dependents based on health, and they must allow special enrollment.',
          why: 'Group plans may not discriminate against employees and dependents based on health, and they must allow special enrollment. Those are the two group-plan duties stated together.',
          correct: true,
        },
        {
          text: 'They must guarantee renewability of every individual policy and may ignore employees.',
          why: 'Individual policies must guarantee access for qualifying people and guarantee renewability. The group-plan duties are the ban on health discrimination and the duty to allow special enrollment.',
        },
        {
          text: 'They must issue HIPAA certificates after December 31, 2014, and they may use different waiting periods by health status.',
          why: 'The Act eliminated the requirement to issue HIPAA certificates of creditable coverage after December 31, 2014. Waiting periods are allowed if they apply to everyone the same way, and group plans may not discriminate based on health.',
        },
      ],
    ),
    question(
      'c10q119',
      'What must individual policies provide for qualifying people?',
      [
        {
          text: 'A right for the insurer to nonrenew when health status changes.',
          why: 'Group plans may not discriminate based on health, and individual policies must guarantee renewability. A change in health status is not a ground for dropping that renewability.',
        },
        {
          text: 'Access only for people who still have unused COBRA or state continuation.',
          why: 'A person converting to an individual policy must have used up COBRA or state continuation. Individual policies must guarantee access for qualifying people and guarantee renewability.',
        },
        {
          text: 'Guaranteed access for qualifying people and guaranteed renewability.',
          why: 'Individual policies must guarantee access for qualifying people and guarantee renewability. Both guarantees apply to the individual policies HIPAA covers.',
          correct: true,
        },
        {
          text: 'A refusal of anyone who has 18 months of continuous creditable coverage.',
          why: 'Eighteen months of continuous creditable coverage is one conversion requirement, and those people can be guaranteed the right to buy individual coverage. Individual policies must guarantee access for qualifying people and guarantee renewability.',
        },
      ],
    ),
    question(
      'c10q120',
      'May an employer plan set enrollment rules that discriminate on a health factor of an eligible person or dependent?',
      [
        {
          text: 'Yes, when the factor is motorcycling, skiing, or snowmobiling.',
          why: 'Evidence of insurability includes activities such as motorcycling, skiing, or snowmobiling, and that evidence is a health factor. An employer plan cannot set enrollment rules that discriminate on a health factor.',
        },
        {
          text: 'Yes, when the factor is domestic violence or genetic information.',
          why: 'Genetic information and evidence of insurability, including domestic violence, are health factors. Enrollment rules cannot discriminate on those factors.',
        },
        {
          text: 'Yes, when the factor is disability or a mental medical condition.',
          why: 'Disability and physical and mental medical conditions are health factors. An employer plan cannot discriminate on them in enrollment rules.',
        },
        {
          text: 'No. Enrollment rules cannot discriminate on a health factor of an eligible person or dependent.',
          why: 'An employer plan cannot set enrollment rules that discriminate on a health factor of an eligible person or dependent. Health factors include health status, physical and mental medical conditions, claims experience, receipt of health care, medical history, genetic information, disability, and evidence of insurability, including domestic violence and activities such as motorcycling, skiing, or snowmobiling.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q121',
      'When does HIPAA allow a waiting period?',
      [
        {
          text: 'When the waiting period applies to everyone the same way.',
          why: 'Waiting periods are allowed if they apply to everyone the same way. An employer plan still cannot set enrollment rules that discriminate on a health factor.',
          correct: true,
        },
        {
          text: 'When it is longer than 90 days and applies only to people with a medical history.',
          why: 'The Act eliminated waiting periods longer than 90 days. A waiting period is allowed only if it applies to everyone the same way.',
        },
        {
          text: 'When it applies only to someone who sought treatment within a specified period before issue.',
          why: 'Seeking medical advice, diagnosis, or treatment within a specified period before issue is the HIPAA description of a pre-existing condition. A waiting period must apply to everyone the same way.',
        },
        {
          text: 'When the person has a break in coverage of 63 or more consecutive days.',
          why: 'Before the Affordable Care Act, creditable-coverage credit applied when the break was not 63 or more consecutive days. That break rule does not let a waiting period single out some people.',
        },
      ],
    ),
    question(
      'c10q122',
      'How many months of continuous creditable coverage are required for a conversion to an individual policy, and which plan must be the most recent?',
      [
        {
          text: 'Eighteen months of coverage that was most recently an individual policy, with COBRA still unused.',
          why: 'The person must have been covered under a group plan most recently, and COBRA or state continuation must have been used up. Conversion requires 18 months of continuous creditable coverage.',
        },
        {
          text: 'Eighteen months of continuous creditable coverage, with the most recent coverage under a group plan.',
          why: 'To convert from group coverage to an individual policy, a person must have 18 months of continuous creditable coverage and have been covered under a group plan most recently. Further conditions also apply to that conversion.',
          correct: true,
        },
        {
          text: 'Ninety days under any plan, even if the break in coverage was 63 or more consecutive days.',
          why: 'The Act eliminated waiting periods longer than 90 days. Conversion requires 18 months of continuous creditable coverage, most recently under a group plan.',
        },
        {
          text: 'Any coverage obtained after December 31, 2014, with no group plan required.',
          why: 'After December 31, 2014, the Act eliminated the requirement to issue HIPAA certificates of creditable coverage. Conversion still requires 18 months of continuous creditable coverage, most recently under a group plan.',
        },
      ],
    ),
    question(
      'c10q123',
      'What must a converting person have finished with COBRA or state continuation, which public programs must be unavailable, and how soon must the person apply?',
      [
        {
          text: 'The person must still be using COBRA, must be eligible for Medicare, and must apply 90 days before the group plan ends.',
          why: 'The person must have used up COBRA or state continuation, must not be eligible for Medicare or Medicaid, and must apply within 63 days of losing the prior coverage. Medicare eligibility blocks that conversion path.',
        },
        {
          text: 'The person must keep other health insurance and must wait 18 months after the loss before applying.',
          why: 'The person must have no other health insurance. Eighteen months is the required period of continuous creditable coverage, and the application is due within 63 days of losing the prior coverage.',
        },
        {
          text: 'The person must have used up COBRA or state continuation, must not be eligible for Medicare or Medicaid, must have no other health insurance, and must apply within 63 days of losing the prior coverage.',
          why: 'Those are the remaining conversion conditions, together with 18 months of continuous creditable coverage most recently under a group plan. People who meet the requirements are guaranteed the right to buy individual coverage.',
          correct: true,
        },
        {
          text: 'The person must drop coverage for 63 or more consecutive days and then accept a plan that is not guaranteed issue.',
          why: 'Before the Affordable Care Act, credit applied when the break was not 63 or more consecutive days. A new employee who meets the requirements must be offered coverage on a guaranteed-issue basis, and the conversion application must be within 63 days of the loss.',
        },
      ],
    ),
    question(
      'c10q124',
      'If a new employee meets the HIPAA requirements, on what basis must the employer offer coverage?',
      [
        {
          text: 'The employer may underwrite the employee on medical history, motorcycling, or skiing.',
          why: 'Medical history and activities such as motorcycling or skiing are health factors. A new employee who meets the requirements must be offered coverage on a guaranteed-issue basis.',
        },
        {
          text: 'The employer may wait for a HIPAA certificate issued after December 31, 2014.',
          why: 'The Act eliminated the requirement to issue HIPAA certificates of creditable coverage after December 31, 2014. A new employee who meets the requirements must be offered coverage on a guaranteed-issue basis.',
        },
        {
          text: 'The employer may offer coverage only if the employee is eligible for Medicaid.',
          why: 'A person converting to an individual policy must not be eligible for Medicare or Medicaid. A new employee who meets the requirements must be offered coverage on a guaranteed-issue basis.',
        },
        {
          text: 'The employer must offer coverage on a guaranteed-issue basis.',
          why: 'If a new employee meets the requirements, the employer must offer coverage on a guaranteed-issue basis. The offer is not reopened to a health-factor screen.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q125',
      'Under HIPAA, what is a pre-existing condition?',
      [
        {
          text: 'A condition for which the person sought medical advice, diagnosis, or treatment within a specified period before issue.',
          why: 'A pre-existing condition, under HIPAA, is one for which the person sought medical advice, diagnosis, or treatment within a specified period before issue. Creditable coverage can give day-for-day credit against an exclusion for that condition.',
          correct: true,
        },
        {
          text: 'Any health factor, such as skiing, even if the person never sought care.',
          why: 'Skiing can be evidence of insurability and therefore a health factor for enrollment rules. A pre-existing condition requires medical advice, diagnosis, or treatment within a specified period before issue.',
        },
        {
          text: 'A condition that first appears after issue.',
          why: 'The definition looks to advice, diagnosis, or treatment within a specified period before issue. A condition that first appears after issue is not that pre-existing condition.',
        },
        {
          text: 'A break in coverage of 63 or more consecutive days.',
          why: 'Before the Affordable Care Act, a break of 63 or more consecutive days was outside the creditable-coverage credit rule. That break is not the definition of a pre-existing condition.',
        },
      ],
    ),
    question(
      'c10q126',
      'What credit does creditable coverage give against a pre-existing exclusion, and on which moves?',
      [
        {
          text: 'A single block of 18 months, and only for a move from one individual plan to another individual plan.',
          why: 'Eighteen months of continuous creditable coverage is the conversion requirement. Creditable coverage gives day-for-day credit when moving from one group plan to another, or from group coverage to an individual plan.',
        },
        {
          text: 'Day-for-day credit for prior health coverage when moving from one group plan to another, or from group coverage to an individual plan.',
          why: 'Creditable coverage gives day-for-day credit for prior health coverage against a pre-existing exclusion on those moves. The credit follows the prior coverage day for day.',
          correct: true,
        },
        {
          text: 'Credit only for 90 days, and only for coverage issued after December 31, 2014.',
          why: 'The Act eliminated waiting periods longer than 90 days and eliminated the HIPAA certificate requirement after December 31, 2014. The creditable-coverage credit is day-for-day credit on a group-to-group move or a move from group coverage to an individual plan.',
        },
        {
          text: 'No credit when the prior plan was a group plan.',
          why: 'The credit applies when moving from one group plan to another, or from group coverage to an individual plan. Prior group coverage is a source of the credit.',
        },
      ],
    ),
    question(
      'c10q127',
      'Before the Affordable Care Act, when did creditable-coverage credit apply?',
      [
        {
          text: 'Only when the break in coverage was 63 or more consecutive days.',
          why: 'Credit applied when the break in coverage was not 63 or more consecutive days. A break of 63 or more consecutive days fell outside that rule.',
        },
        {
          text: 'Only if the person waited 18 months after the break began before using the credit.',
          why: 'Eighteen months is the continuous creditable coverage required to convert to an individual policy. Before the Act, credit applied when the break was not 63 or more consecutive days.',
        },
        {
          text: 'When the break in coverage was not 63 or more consecutive days.',
          why: 'Before the Affordable Care Act, credit applied when the break in coverage was not 63 or more consecutive days. The credit rule turned on that limit.',
          correct: true,
        },
        {
          text: 'When the break lasted longer than 90 days and the person had no prior group plan.',
          why: 'The Act eliminated waiting periods longer than 90 days. Before the Act, credit applied when the break was not 63 or more consecutive days.',
        },
      ],
    ),
    question(
      'c10q128',
      'What did the Affordable Care Act change about pre-existing exclusions, long waiting periods, and HIPAA certificates?',
      [
        {
          text: 'It required pre-existing exclusions, required waiting periods longer than 90 days, and required certificates starting after December 31, 2014.',
          why: 'The Act prohibited pre-existing condition exclusions, eliminated waiting periods longer than 90 days, and eliminated the requirement to issue HIPAA certificates of creditable coverage after December 31, 2014. It did not create those exclusions, long waits, or a new certificate duty.',
        },
        {
          text: 'It preserved pre-existing exclusions and shortened the 18-month conversion rule to 63 days.',
          why: 'Eighteen months of continuous creditable coverage and the 63-day application window are conversion conditions. The Act prohibited pre-existing condition exclusions, eliminated waiting periods longer than 90 days, and eliminated certificates after December 31, 2014.',
        },
        {
          text: 'It banned special enrollment and let group plans discriminate based on health.',
          why: 'Group plans may not discriminate based on health, and they must allow special enrollment. The Act prohibited pre-existing condition exclusions, eliminated waiting periods longer than 90 days, and eliminated the certificate requirement after December 31, 2014.',
        },
        {
          text: 'It prohibited pre-existing condition exclusions, eliminated waiting periods longer than 90 days, and eliminated the requirement to issue HIPAA certificates of creditable coverage after December 31, 2014.',
          why: 'Those are the three changes named for the Act. Certificate issuance was no longer required after December 31, 2014.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q129',
      'When must a group issuer renew or continue coverage, and for what reasons may it discontinue or nonrenew?',
      [
        {
          text: 'It must renew or continue at the plan sponsor’s option, and it may discontinue or nonrenew for nonpayment, fraud, violation of participation or contribution rules, discontinuation of that particular coverage, or movement outside the service area or the end of association membership.',
          why: 'Renewal or continuation of the group coverage is at the plan sponsor’s option. The listed events are the grounds on which the group issuer may discontinue or nonrenew.',
          correct: true,
        },
        {
          text: 'It renews only for an individual applicant, and it may nonrenew for a disability.',
          why: 'Individual policies must guarantee renewability, while a group issuer renews or continues at the plan sponsor’s option. Disability is a health factor for enrollment rules, not one of the listed nonrenewal grounds.',
        },
        {
          text: 'It may nonrenew because the person sought treatment before issue, and the sponsor’s option does not matter.',
          why: 'Treatment within a specified period before issue defines a pre-existing condition. It is not a listed discontinuation ground, and the issuer must renew or continue at the plan sponsor’s option.',
        },
        {
          text: 'It must nonrenew after a break of 63 or more consecutive days even if the sponsor wants the plan continued.',
          why: 'A break of 63 or more consecutive days was the pre-Act point at which creditable-coverage credit did not apply. The issuer must renew or continue at the plan sponsor’s option, and that break is not a listed nonrenewal ground.',
        },
      ],
    ),
    question(
      'c10q130',
      'What is protected health information?',
      [
        {
          text: 'Only electronic treatment notes, with paper and oral information left out.',
          why: 'Protected health information is all individually identifiable health information a covered entity or its business associate holds or transmits, in electronic, paper, or oral form. Paper and oral forms are included.',
        },
        {
          text: 'All individually identifiable health information a covered entity or its business associate holds or transmits, in electronic, paper, or oral form.',
          why: 'It includes demographic data about past, present, or future physical or mental health or condition, or payment information that could identify the person. A covered entity needs the person’s written authorization to disclose information that is not for treatment, payment, or health care operations.',
          correct: true,
        },
        {
          text: 'A health factor such as skiing, whether or not the information identifies the person.',
          why: 'Skiing is an example of evidence of insurability, which is a health factor for enrollment rules. Protected health information is individually identifiable health information held or transmitted by a covered entity or its business associate.',
        },
        {
          text: 'Only a HIPAA certificate of creditable coverage issued after December 31, 2014.',
          why: 'The Act eliminated the requirement to issue HIPAA certificates of creditable coverage after December 31, 2014. Protected health information is individually identifiable health information in electronic, paper, or oral form.',
        },
      ],
    ),
  ],
  'c10-pool': [
    question(
      'c10q131',
      'What does the Comprehensive Health Insurance Pool Act give to certain residents?',
      [
        {
          text: 'High-cost coverage reserved for people who already have adequate employer insurance.',
          why: 'People eligible for similar employer-group coverage are not eligible for the pool. The Act gives residents who are denied adequate insurance, and who are considered uninsurable, low-cost access to coverage.',
        },
        {
          text: 'Major medical coverage only for people who live outside Utah and are already HIPAA-eligible.',
          why: 'A person who is not HIPAA-eligible may qualify by paying the premium, living in the state, and meeting the health criteria. The Act’s purpose is low-cost access for residents denied adequate insurance who are considered uninsurable.',
        },
        {
          text: 'Low-cost access to coverage for residents who are denied adequate insurance and who are considered uninsurable.',
          why: 'The Comprehensive Health Insurance Pool Act gives those residents low-cost access to coverage. A board of 12 directors runs the pool under a plan the Commissioner approves.',
          correct: true,
        },
        {
          text: 'A permanent federal subsidy that was designed to begin in 2014.',
          why: 'Federal-HIPUtah was a temporary, federally subsidized high-risk pool that was to last until 2014. The Pool Act gives uninsurable residents who are denied adequate insurance low-cost access to coverage.',
        },
      ],
    ),
    question(
      'c10q132',
      'Who runs the pool, and who approves the plan of operation?',
      [
        {
          text: 'Ten directors chosen by the Senate, under a plan the Governor writes without the Commissioner.',
          why: 'The Governor appoints 10 members with Senate consent. A board of 12 directors runs the pool under a plan the Commissioner approves.',
        },
        {
          text: 'The executive director of the Department of Health acting alone.',
          why: 'That executive director is one member of the board. The board also includes the Commissioner and 10 members the Governor appoints with Senate consent.',
        },
        {
          text: 'Each insurer that prints a health benefit plan card, with no approved plan required.',
          why: 'Insurers must issue a health benefit plan card, but the card does not replace the board. A board of 12 directors runs the pool under a plan the Commissioner approves.',
        },
        {
          text: 'A board of 12 directors, including the Commissioner, the executive director of the Department of Health, and 10 members the Governor appoints with Senate consent, under a plan the Commissioner approves.',
          why: 'That board runs the pool. The Commissioner approves the plan under which the board operates.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q133',
      'A person is not HIPAA-eligible. Which combination lets that person qualify for the pool?',
      [
        {
          text: 'By paying the premium, living in the state, and meeting the health criteria.',
          why: 'A person who is not HIPAA-eligible may qualify by paying the premium, living in the state, and meeting the health criteria. Separate bars, including other coverage and a recent termination, can still block eligibility.',
          correct: true,
        },
        {
          text: 'By showing eligibility for Medicare and refusing to pay the premium.',
          why: 'People eligible for Medicare are not eligible for the pool. Qualification for a person who is not HIPAA-eligible requires paying the premium, living in the state, and meeting the health criteria.',
        },
        {
          text: 'By having an employer pay part of the premium while the person lives outside Utah.',
          why: 'People whose employer pays any part of their health premium are not eligible, and the person must live in the state. The qualifying steps are paying the premium, living in the state, and meeting the health criteria.',
        },
        {
          text: 'By first receiving the pool’s maximum lifetime benefit and then applying as an inmate.',
          why: 'People who have received the pool’s maximum lifetime benefit, and inmates, are not eligible. Qualification requires paying the premium, living in the state, and meeting the health criteria.',
        },
      ],
    ),
    question(
      'c10q134',
      'Which public-program status keeps a person out of the pool?',
      [
        {
          text: 'A person who is not HIPAA-eligible, pays the premium, lives in the state, and meets the health criteria.',
          why: 'That person may qualify. People eligible for Medicaid or Medicare do not qualify for the pool.',
        },
        {
          text: 'A person who is eligible for Medicaid or Medicare.',
          why: 'People eligible for Medicaid or Medicare are not eligible. The same ineligible group includes people eligible for a public health plan, people covered by any other health plan, people eligible for similar employer-group coverage, people whose employer pays any part of their health premium, inmates, people who have received the pool’s maximum lifetime benefit, and people who do not qualify because of a health condition.',
          correct: true,
        },
        {
          text: 'A person who applies within 63 days after coverage in another state’s high-risk pool ended because the person moved.',
          why: 'Someone whose coverage in another state’s high-risk pool ended because that person moved may apply within 63 days. That move does not place the person in the ineligible group.',
        },
        {
          text: 'A person whose pool coverage ended involuntarily for a reason other than nonpayment.',
          why: 'People who terminated pool coverage in the last 12 months are not eligible unless the termination was involuntary for a reason other than nonpayment. That exception keeps this person from being barred by the termination rule.',
        },
      ],
    ),
    question(
      'c10q135',
      'A person terminated pool coverage during the last 12 months. When does that termination fail to bar a later application?',
      [
        {
          text: 'When the termination was for nonpayment.',
          why: 'Nonpayment is outside the exception. People who terminated pool coverage in the last 12 months are not eligible unless the termination was involuntary for a reason other than nonpayment.',
        },
        {
          text: 'When the person has already received the pool’s maximum lifetime benefit.',
          why: 'People who have received the pool’s maximum lifetime benefit are not eligible. The 12-month termination bar lifts only for an involuntary termination for a reason other than nonpayment.',
        },
        {
          text: 'When the termination was involuntary for a reason other than nonpayment.',
          why: 'People who terminated pool coverage in the last 12 months are not eligible unless the termination was involuntary for a reason other than nonpayment. That involuntary ending is the exception.',
          correct: true,
        },
        {
          text: 'When the person leaves Utah and waits 63 days.',
          why: 'Someone whose coverage in another state’s high-risk pool ended because that person moved may apply within 63 days. Leaving Utah is not the exception to the bar on people who terminated this pool’s coverage in the last 12 months.',
        },
      ],
    ),
    question(
      'c10q136',
      'Which Utah residency record makes an applicant ineligible?',
      [
        {
          text: 'The person has lived in Utah for at least 12 consecutive months before applying.',
          why: 'Meeting that residency period is not a bar. People who have not lived in Utah for at least 12 consecutive months before applying are not eligible.',
        },
        {
          text: 'The person is a Utah resident on the application date for the temporary federal pool.',
          why: 'Federal-HIPUtah required Utah residency on the application date. For this pool, people who have not lived in Utah for at least 12 consecutive months before applying are not eligible.',
        },
        {
          text: 'The person lives in the state, pays the premium, and meets the health criteria.',
          why: 'Living in the state, paying the premium, and meeting the health criteria are how a person who is not HIPAA-eligible may qualify. The residency bar is a failure to live in Utah for at least 12 consecutive months before applying.',
        },
        {
          text: 'The person has not lived in Utah for at least 12 consecutive months before applying.',
          why: 'People who have not lived in Utah for at least 12 consecutive months before applying are not eligible. That residency rule is separate from the 12-month bar after a pool termination.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q137',
      'Coverage in another state’s high-risk pool ended because the person moved. How soon may that person apply to the Utah pool?',
      [
        {
          text: 'Within 63 days.',
          why: 'Someone whose coverage in another state’s high-risk pool ended because that person moved may apply within 63 days. The window runs from that move-related ending.',
          correct: true,
        },
        {
          text: 'Only after 12 consecutive months in Utah, with no shorter path.',
          why: 'People who have not lived in Utah for at least 12 consecutive months before applying are generally not eligible. A person whose other-state high-risk pool coverage ended because of a move may apply within 63 days.',
        },
        {
          text: 'Within 10 months, matching the pregnancy exclusion.',
          why: 'A pre-existing pregnancy may be excluded for 10 months, but not for a HIPAA-eligible person. The mover’s application window is 63 days.',
        },
        {
          text: 'At any time during the two deductible choices offered for a calendar year.',
          why: 'Deductibles are based on calendar years, and at least two deductible choices must be offered. Those choices do not set the 63-day application window for a person who moved out of another state’s high-risk pool.',
        },
      ],
    ),
    question(
      'c10q138',
      'What coverage does the pool offer, who sets the schedule, and how must at least one plan be delivered?',
      [
        {
          text: 'Indemnity benefits chosen by each enrollee, with managed care forbidden.',
          why: 'The pool offers major medical coverage, and at least one plan must be offered through managed care. The board, not each enrollee, sets the schedule, exclusions, and limits.',
        },
        {
          text: 'Major medical coverage. The board sets the schedule, exclusions, and limits, the Commissioner approves them, and at least one plan must be offered through managed care.',
          why: 'The pool offers major medical coverage. The board sets the schedule, exclusions, and limits, the Commissioner approves them, and at least one plan must be offered through managed care.',
          correct: true,
        },
        {
          text: 'Only the health benefit plan card, with no medical benefits and no managed-care plan.',
          why: 'Insurers must issue a health benefit plan card, but the card is not the benefit itself. The pool offers major medical coverage, and at least one plan must be offered through managed care.',
        },
        {
          text: 'A pre-existing pregnancy benefit that lasts 10 months and replaces major medical coverage.',
          why: 'A pre-existing pregnancy may be excluded for 10 months, but not for a HIPAA-eligible person. The pool offers major medical coverage, with the schedule set by the board and approved by the Commissioner.',
        },
      ],
    ),
    question(
      'c10q139',
      'What must an insurer show on a health benefit plan card?',
      [
        {
          text: 'Only the names of the 12 directors and the Governor’s appointees.',
          why: 'The board of 12 includes the Commissioner, the executive director of the Department of Health, and 10 members the Governor appoints. The card must show the insured’s name, the insurer’s name, contact information, copayments and deductibles, and whether the state regulates the plan.',
        },
        {
          text: 'Whether the person moved from another state’s pool and the length of a pregnancy exclusion.',
          why: 'A mover from another state’s high-risk pool may apply within 63 days, and a pre-existing pregnancy may be excluded for 10 months. The card must show the insured’s name, the insurer’s name, contact information, copayments and deductibles, and whether the state regulates the plan.',
        },
        {
          text: 'The insured’s name, the insurer’s name, contact information, copayments and deductibles, and whether the state regulates the plan.',
          why: 'Insurers must issue a health benefit plan card that shows those items. The card identifies the parties, the cost sharing, and whether the state regulates the plan.',
          correct: true,
        },
        {
          text: 'Only the coinsurance percentages, with no names and no deductibles.',
          why: 'In most cases coinsurance of at least 20% of eligible expenses is required in addition to the deductible. The card still must show the insured’s name, the insurer’s name, contact information, copayments and deductibles, and whether the state regulates the plan.',
        },
      ],
    ),
    question(
      'c10q140',
      'How may the pool treat a pre-existing pregnancy, and does that exclusion reach a HIPAA-eligible person?',
      [
        {
          text: 'It may be excluded for no longer than 6 months, and a HIPAA-eligible person keeps the exclusion.',
          why: 'A pre-existing condition may be excluded for no longer than 6 months. A pre-existing pregnancy may be excluded for 10 months, but not for a HIPAA-eligible person.',
        },
        {
          text: 'It may be excluded for 12 months, including a HIPAA-eligible person.',
          why: 'Twelve months is the period used for a prior pool termination and for Utah residency, not for pregnancy. A pre-existing pregnancy may be excluded for 10 months, but not for a HIPAA-eligible person.',
        },
        {
          text: 'It may be excluded for 63 days, and only a HIPAA-eligible person can be excluded.',
          why: 'Sixty-three days is the application window after an involuntary termination that waives the pre-existing exclusion, and after a move from another state’s high-risk pool. A pre-existing pregnancy may be excluded for 10 months, but not for a HIPAA-eligible person.',
        },
        {
          text: 'It may be excluded for 10 months, but not for a HIPAA-eligible person.',
          why: 'A pre-existing pregnancy may be excluded for 10 months, but not for a HIPAA-eligible person. The HIPAA-eligible person is spared that pregnancy exclusion.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q141',
      'When is the pool’s pre-existing exclusion waived?',
      [
        {
          text: 'If the person applies within 63 days of an involuntary termination of prior coverage.',
          why: 'The pre-existing exclusion is waived if the person applies within 63 days of an involuntary termination of prior coverage. Both the involuntary loss and that application window are required.',
          correct: true,
        },
        {
          text: 'If the person waits 10 months after a voluntary termination for nonpayment.',
          why: 'Ten months is the maximum exclusion for a pre-existing pregnancy. Nonpayment is not the involuntary-termination path, and the waiver requires an application within 63 days of an involuntary termination of prior coverage.',
        },
        {
          text: 'If the person has been without coverage for 6 months and enrolls only in the temporary federal pool.',
          why: 'Federal-HIPUtah served people with pre-existing conditions who had been without coverage for 6 months. This pool’s pre-existing exclusion is waived if the person applies within 63 days of an involuntary termination of prior coverage.',
        },
        {
          text: 'If the person has already received the pool’s maximum lifetime benefit.',
          why: 'People who have received the pool’s maximum lifetime benefit are not eligible. The waiver belongs to a timely application after an involuntary termination of prior coverage.',
        },
      ],
    ),
    question(
      'c10q142',
      'How are pool deductibles structured?',
      [
        {
          text: 'They are one lifetime deductible, and the pool may offer only that choice.',
          why: 'Deductibles are based on calendar years, and at least two deductible choices must be offered. A single lifetime choice does not meet that rule.',
        },
        {
          text: 'They are based on calendar years, and at least two deductible choices must be offered.',
          why: 'Deductibles are based on calendar years, and at least two deductible choices must be offered. Coinsurance rules sit on top of those deductibles.',
          correct: true,
        },
        {
          text: 'They follow the 10-month pregnancy exclusion, and only one choice is allowed.',
          why: 'A pre-existing pregnancy may be excluded for 10 months. Deductibles are separate: they are based on calendar years, and at least two choices must be offered.',
        },
        {
          text: 'They are waived for 63 days after enrollment and then forbidden.',
          why: 'Sixty-three days is the window to apply after an involuntary termination and have the pre-existing exclusion waived. Deductibles are based on calendar years, and at least two choices must be offered.',
        },
      ],
    ),
    question(
      'c10q143',
      'What coinsurance does the pool use in most cases, and what may be charged after the maximum aggregate out-of-pocket amount?',
      [
        {
          text: 'No coinsurance in addition to the deductible, then 20% with no cap after the out-of-pocket amount.',
          why: 'In most cases coinsurance of at least 20% of eligible expenses is required in addition to the deductible. After the maximum aggregate out-of-pocket amount, additional coinsurance of no more than 5% of eligible expenses may be imposed.',
        },
        {
          text: 'At least 5% instead of any deductible, then at least another 20%.',
          why: 'The usual coinsurance of at least 20% is in addition to the deductible. The additional coinsurance after the maximum aggregate out-of-pocket amount is no more than 5% of eligible expenses.',
        },
        {
          text: 'In most cases at least 20% of eligible expenses in addition to the deductible, then additional coinsurance of no more than 5% of eligible expenses.',
          why: 'Those are the two coinsurance steps. The 20% amount is the usual coinsurance beside the deductible, and the later coinsurance cannot exceed 5%.',
          correct: true,
        },
        {
          text: 'Coinsurance equal to the full 10-month pregnancy exclusion and nothing else.',
          why: 'Ten months is the pre-existing pregnancy exclusion, not a coinsurance rate. Usual coinsurance is at least 20% of eligible expenses in addition to the deductible, and later additional coinsurance is no more than 5%.',
        },
      ],
    ),
    question(
      'c10q144',
      'What was Federal-HIPUtah, and which eligibility rules did it use?',
      [
        {
          text: 'A permanent unsubsidized plan for people who had creditable coverage during the prior 6 months.',
          why: 'Federal-HIPUtah was temporary and federally subsidized, for people with pre-existing conditions who had been without coverage for 6 months. Eligibility required no creditable coverage in the prior 6 months.',
        },
        {
          text: 'The 12-director board that replaced the comprehensive pool in 2014.',
          why: 'A board of 12 directors runs the comprehensive pool. Federal-HIPUtah was a temporary subsidized pool that was to last until 2014, when exchanges arrived and pre-existing exclusions ended.',
        },
        {
          text: 'Major medical coverage that excluded a pre-existing pregnancy for 10 months for every HIPAA-eligible person.',
          why: 'The comprehensive pool offers major medical coverage, and a pre-existing pregnancy may be excluded for 10 months but not for a HIPAA-eligible person. Federal-HIPUtah was a separate temporary, federally subsidized pool.',
        },
        {
          text: 'A temporary, federally subsidized high-risk pool for people with pre-existing conditions who had been without coverage for 6 months, intended to last until 2014.',
          why: 'It was to last until 2014, when exchanges arrived and pre-existing exclusions ended. Eligibility required lawful presence or citizenship, Utah residency on the application date, no creditable coverage in the prior 6 months, a pre-existing condition and the state’s underwriting criteria, payment of the premium, and no other bar to eligibility.',
          correct: true,
        },
      ],
    ),
  ],
  'c10-aca': [
    question(
      'c10q145',
      'On what date was the Patient Protection and Affordable Care Act signed, and until when was it to be phased in?',
      [
        {
          text: 'It was signed on March 23, 2010, and was to be phased in until 2018.',
          why: 'The Patient Protection and Affordable Care Act was signed on March 23, 2010, and was to be phased in until 2018. It is federal law, so state rules must conform.',
          correct: true,
        },
        {
          text: 'It was signed in January 2014 and was phased out in October 2013.',
          why: 'As of January 2014 the Act eliminated pre-existing condition exclusions, and Marketplace enrollment began in October 2013. The Act was signed on March 23, 2010, and was to be phased in until 2018.',
        },
        {
          text: 'It was signed on March 23, 2010, and was fully phased in on that same day.',
          why: 'The signing date is March 23, 2010. The Act was to be phased in until 2018, not finished on the signing date.',
        },
        {
          text: 'It was signed when tax credits began in 2014, and the phase-in runs until a child reaches age 26.',
          why: 'Tax credits began in 2014, and child coverage extends to age 26. The Act was signed on March 23, 2010, and was to be phased in until 2018.',
        },
      ],
    ),
    question(
      'c10q146',
      'What market did the Act set up, and how does it hold insurers accountable?',
      [
        {
          text: 'A single public plan that requires denials and keeps pre-existing exclusions after January 2014.',
          why: 'As of January 2014 the Act eliminated pre-existing condition exclusions. It set up a competitive private market and holds insurers accountable by keeping premiums down and preventing denials.',
        },
        {
          text: 'A competitive private market, by keeping premiums down, preventing denials, and eliminating pre-existing condition exclusions as of January 2014.',
          why: 'The Act set up a competitive private market and holds insurers accountable in those ways. It was also meant to reduce the deficit, and it increases preventive, educational, and community-based services.',
          correct: true,
        },
        {
          text: 'A market limited to Medigap and long-term care, with denials required when the insured becomes ill.',
          why: 'Medigap and long-term care are generally exempt, as are retiree-only plans and stand-alone dental. The Act set up a competitive private market and prevents denials.',
        },
        {
          text: 'A market that bans preventive, educational, and community-based services.',
          why: 'The Act increases preventive, educational, and community-based services. It set up a competitive private market and holds insurers accountable by keeping premiums down, preventing denials, and eliminating pre-existing exclusions as of January 2014.',
        },
      ],
    ),
    question(
      'c10q147',
      'May an insurer rescind coverage because the insured becomes ill?',
      [
        {
          text: 'Yes. Illness is treated as fraud, and coverage ends with no notice.',
          why: 'A rescission for fraud or an intentional misrepresentation of a material fact requires at least 30 days’ notice. Insurers cannot rescind coverage because the insured becomes ill.',
        },
        {
          text: 'Yes, but only under retiree-only plans, stand-alone dental, Medigap, and long-term care.',
          why: 'Those products are generally exempt from the Act. Where the Act applies, insurers cannot rescind coverage because the insured becomes ill.',
        },
        {
          text: 'No. Insurers cannot rescind coverage because the insured becomes ill.',
          why: 'Insurers cannot rescind coverage because the insured becomes ill. Rescission for fraud or an intentional misrepresentation of a material fact is a separate case and needs at least 30 days’ notice.',
          correct: true,
        },
        {
          text: 'Yes, if the illness is a pre-existing condition that can still be excluded after January 2014.',
          why: 'As of January 2014 the Act eliminated pre-existing condition exclusions. Illness does not let the insurer rescind coverage.',
        },
      ],
    ),
    question(
      'c10q148',
      'Which products are generally exempt from the Act?',
      [
        {
          text: 'Individual and group plans that cover children until age 26.',
          why: 'The Act extends coverage for adult children on individual and group plans until age 26. Those plans are not the products listed as generally exempt.',
        },
        {
          text: 'Bronze, silver, gold, and platinum Marketplace plans.',
          why: 'Those are the Marketplace metal levels. Retiree-only plans, stand-alone dental, Medigap, and long-term care are generally exempt.',
        },
        {
          text: 'Plans that include the ten essential benefits.',
          why: 'Essential benefits are a coverage requirement, not an exemption. Retiree-only plans, stand-alone dental, Medigap, and long-term care are generally exempt.',
        },
        {
          text: 'Retiree-only plans, stand-alone dental, Medigap, and long-term care.',
          why: 'Those products are generally exempt. Because the law has been contested, agents should check current law before advising.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q149',
      'Which person can obtain Marketplace coverage?',
      [
        {
          text: 'An uninsured person who is a U.S. citizen or national or is lawfully present, who lives in the United States, and who is not incarcerated.',
          why: 'Marketplace coverage is available to an uninsured person who is a U.S. citizen or national or is lawfully present, lives in the United States, and is not incarcerated.',
          correct: true,
        },
        {
          text: 'An incarcerated person who lives outside the United States.',
          why: 'The person must live in the United States and must not be incarcerated. Marketplace coverage also requires the person to be uninsured and a citizen, national, or lawfully present.',
        },
        {
          text: 'A person who already has Medicare and wants a Marketplace dental plan.',
          why: 'A person with Medicare cannot use the Marketplace to buy a health or dental plan. Marketplace coverage is for a qualifying uninsured person who is not incarcerated.',
        },
        {
          text: 'Only a small employer with 25 or fewer workers.',
          why: 'Twenty-five or fewer workers is a size test for the small-employer premium credit. Marketplace coverage is available to a qualifying uninsured individual.',
        },
      ],
    ),
    question(
      'c10q150',
      'Can a person who has Medicare buy a health or dental plan through the Marketplace?',
      [
        {
          text: 'Yes. Medicare recipients use the Marketplace for both health and dental plans.',
          why: 'A person with Medicare cannot use the Marketplace to buy a health or dental plan. The Marketplace is closed to that purchase.',
        },
        {
          text: 'No. A person with Medicare cannot use the Marketplace to buy a health or dental plan.',
          why: 'A person with Medicare cannot use the Marketplace to buy a health or dental plan. The bar covers both a health plan and a dental plan.',
          correct: true,
        },
        {
          text: 'Yes, but only in the enrollment that began in October 2013.',
          why: 'Marketplace enrollment began in October 2013. A person with Medicare still cannot use the Marketplace to buy a health or dental plan.',
        },
        {
          text: 'Yes, if the person is incarcerated and lawfully present.',
          why: 'Marketplace coverage requires that the person not be incarcerated. Medicare itself bars use of the Marketplace to buy a health or dental plan.',
        },
      ],
    ),
    question(
      'c10q151',
      'May a group or individual issuer set eligibility rules based on a health-status factor?',
      [
        {
          text: 'Yes, if the rule uses claims experience, medical history, or genetic information.',
          why: 'Claims experience, medical history, and genetic information are barred factors. A group or individual issuer cannot set eligibility rules based on them.',
        },
        {
          text: 'Yes, for evidence of insurability, including domestic violence, but disability is allowed.',
          why: 'Evidence of insurability, including domestic violence, and disability are both forbidden bases for eligibility rules. A group or individual issuer cannot use them.',
        },
        {
          text: 'No. Eligibility rules cannot be based on health status, physical or mental medical condition, claims experience, receipt of care, medical history, genetic information, evidence of insurability including domestic violence, disability, or any other health-status factor.',
          why: 'A group or individual issuer cannot set eligibility rules based on those factors. The ban applies to both group and individual issuers.',
          correct: true,
        },
        {
          text: 'Yes. Disability and any other health-status factor may be used to decide eligibility.',
          why: 'Disability and any other health-status factor are on the forbidden list. A group or individual issuer cannot set eligibility rules based on them.',
        },
      ],
    ),
    question(
      'c10q152',
      'What place is the location for an individual plan, and what place is the location for a small group?',
      [
        {
          text: 'The employer’s principal place of business for an individual, and the home address for a small group.',
          why: 'That pairing is reversed. For an individual plan, location is the home address, and for a small group it is the employer’s principal place of business.',
        },
        {
          text: 'Health status for an individual plan, and claims experience for a small group.',
          why: 'A group or individual issuer cannot set eligibility rules based on health status or claims experience. Location is the home address for an individual plan and the employer’s principal place of business for a small group.',
        },
        {
          text: 'The October 2013 enrollment date for both an individual and a small group.',
          why: 'Marketplace enrollment began in October 2013, which is not a rating location. Location is the home address for an individual plan and the employer’s principal place of business for a small group.',
        },
        {
          text: 'The home address for an individual plan, and the employer’s principal place of business for a small group.',
          why: 'For an individual plan, location is the home address. For a small group, it is the employer’s principal place of business.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q153',
      'Must every Marketplace plan cover a pregnancy that began before coverage started?',
      [
        {
          text: 'Yes. Every Marketplace plan must cover pregnancy and childbirth even if the pregnancy began before coverage.',
          why: 'Every Marketplace plan must cover pregnancy and childbirth even if the pregnancy began before coverage. The earlier start of the pregnancy does not remove that benefit.',
          correct: true,
        },
        {
          text: 'No. Pregnancy is covered only if it begins after coverage starts.',
          why: 'Every Marketplace plan must cover pregnancy and childbirth even if the pregnancy began before coverage. A later start date is not required.',
        },
        {
          text: 'No. Maternity and newborn care are left out of the essential benefits.',
          why: 'Maternity and newborn care are one of the ten essential benefits. Every Marketplace plan must cover pregnancy and childbirth even if the pregnancy began before coverage.',
        },
        {
          text: 'Yes, but only on a platinum plan, which pays 90% on average.',
          why: 'Platinum plans pay 90% on average, but pregnancy coverage is not limited to that metal level. Every Marketplace plan must cover pregnancy and childbirth even if the pregnancy began before coverage.',
        },
      ],
    ),
    question(
      'c10q154',
      'Must an insurer accept every eligible applicant, and when may enrollment be limited?',
      [
        {
          text: 'The insurer may reject an eligible applicant, and enrollment must remain open all year.',
          why: 'Insurers must accept any eligible applicant. Enrollment may be limited to open or special enrollment.',
        },
        {
          text: 'The insurer must accept any eligible applicant, and enrollment may be limited to open or special enrollment.',
          why: 'Insurers must accept any eligible applicant. Enrollment may be limited to open or special enrollment.',
          correct: true,
        },
        {
          text: 'The insurer must accept every person, including a person who is incarcerated.',
          why: 'Marketplace coverage is not available to a person who is incarcerated. Insurers must accept any eligible applicant, and enrollment may be limited to open or special enrollment.',
        },
        {
          text: 'Acceptance is required only for an employer claiming the small-business premium credit.',
          why: 'The small-employer credit is a separate tax rule. Insurers must accept any eligible applicant, and enrollment may be limited to open or special enrollment.',
        },
      ],
    ),
    question(
      'c10q155',
      'At whose option must coverage be renewed or continued?',
      [
        {
          text: 'Only at the insurer’s option, even if the sponsor and the individual want to keep it.',
          why: 'Coverage must be renewed or continued at the option of the plan sponsor or the individual. The insurer’s wish is not the option the rule uses.',
        },
        {
          text: 'Coverage must be dropped if the insured becomes ill.',
          why: 'Insurers cannot rescind coverage because the insured becomes ill. Coverage must be renewed or continued at the option of the plan sponsor or the individual.',
        },
        {
          text: 'At the option of the plan sponsor or the individual.',
          why: 'Coverage must be renewed or continued at the option of the plan sponsor or the individual. The rule names the plan sponsor and the individual as the persons who hold that option.',
          correct: true,
        },
        {
          text: 'Only during the two consecutive taxable years of the small-employer credit.',
          why: 'The small-employer credit lasts for two consecutive taxable years. Renewal of coverage is at the option of the plan sponsor or the individual and is not tied to that credit period.',
        },
      ],
    ),
    question(
      'c10q156',
      'What notice and appeal rights apply when an insurer rescinds individual or group coverage for fraud or an intentional misrepresentation of a material fact?',
      [
        {
          text: 'The insurer may rescind at once, with no notice and no chance to review the file.',
          why: 'The insurer must give at least 30 days’ notice so the insured can appeal. The person may review the file, present evidence and testimony, and keep coverage in force while the appeal is pending.',
        },
        {
          text: 'Becoming ill allows an immediate rescission, and the insured cannot present testimony.',
          why: 'Insurers cannot rescind coverage because the insured becomes ill. A fraud or intentional-misrepresentation rescission requires at least 30 days’ notice, and the person may present evidence and testimony.',
        },
        {
          text: 'The 30-day notice applies only to an individual plan, and group coverage cannot stay in force during an appeal.',
          why: 'The notice rule applies when an insurer rescinds individual or group coverage. The person may keep coverage in force while the appeal is pending.',
        },
        {
          text: 'The insurer must give at least 30 days’ notice. The person may review the file, present evidence and testimony, and keep coverage in force while the appeal is pending.',
          why: 'That notice applies to a rescission of individual or group coverage for fraud or an intentional misrepresentation of a material fact. During the appeal the person may review the file, present evidence and testimony, and keep coverage in force.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q157',
      'Until what age are children covered, and which facts about the child do not defeat that coverage?',
      [
        {
          text: 'Coverage extends to age 26 on individual and group plans regardless of marital status, residency, financial dependence, or eligibility for the child’s own employer plan.',
          why: 'The Act extends coverage for adult children on individual and group plans until age 26. That coverage applies regardless of marital status, residency, financial dependence, or eligibility for the child’s own employer plan.',
          correct: true,
        },
        {
          text: 'Coverage ends before the 26th birthday if the child is married or lives elsewhere.',
          why: 'Coverage extends to age 26 regardless of marital status and residency. Financial dependence and eligibility for the child’s own employer plan also do not end it.',
        },
        {
          text: 'Coverage to age 26 applies only if the child is financially dependent and has no employer plan.',
          why: 'Financial dependence and eligibility for the child’s own employer plan do not control the age-26 extension. Coverage reaches age 26 regardless of those facts.',
        },
        {
          text: 'Coverage ends when the child can hold self-sustaining work, with no age-26 extension.',
          why: 'Inability to hold self-sustaining work matters for continuation past the 26th birthday, not for cutting off the age-26 period. Coverage extends to age 26 regardless of marital status, residency, financial dependence, or the child’s own employer plan.',
        },
      ],
    ),
    question(
      'c10q158',
      'When may a child’s coverage continue past the 26th birthday?',
      [
        {
          text: 'It must stop on the 26th birthday even if the child cannot work and depends on the policyholder.',
          why: 'Coverage may continue past the 26th birthday when the child cannot hold self-sustaining work because of an intellectual or physical disability and is chiefly dependent on the policyholder for support. The birthday does not force termination in that case.',
        },
        {
          text: 'It may continue if the child cannot hold self-sustaining work because of an intellectual or physical disability and is chiefly dependent on the policyholder for support.',
          why: 'Coverage may continue past the 26th birthday in that situation. Both the disability limit on self-sustaining work and chief dependence on the policyholder are required.',
          correct: true,
        },
        {
          text: 'It continues past the 26th birthday for every child, with no disability or dependence test.',
          why: 'The ordinary extension runs to age 26 regardless of financial dependence. Continuation past the 26th birthday requires an intellectual or physical disability that prevents self-sustaining work and chief dependence on the policyholder.',
        },
        {
          text: 'It continues only when the child is self-supporting and the disability has ended.',
          why: 'The child must be chiefly dependent on the policyholder for support, not self-supporting. The disability must keep the child from holding self-sustaining work.',
        },
      ],
    ),
    question(
      'c10q159',
      'What dollar limits are forbidden on essential benefits and on lifetime benefits?',
      [
        {
          text: 'A dollar limit on essential benefits is allowed if the plan keeps a lifetime dollar limit.',
          why: 'Plans cannot put a dollar limit on essential benefits or a lifetime dollar limit. Keeping one limit does not excuse the other.',
        },
        {
          text: 'Lifetime dollar limits are allowed when essential benefits have no annual dollar cap.',
          why: 'Plans cannot put a lifetime dollar limit, and they also cannot put a dollar limit on essential benefits. Lifetime benefit limits are eliminated.',
        },
        {
          text: 'Plans cannot put a dollar limit on essential benefits or a lifetime dollar limit.',
          why: 'Plans cannot put a dollar limit on essential benefits or a lifetime dollar limit. A group plan’s annual cost sharing cannot exceed the stated limits.',
          correct: true,
        },
        {
          text: 'Dollar limits are forbidden only on plans with high deductibles, not on essential benefits.',
          why: 'Plans with lower premiums and high deductibles still cover essential benefits after the deductible with no copayment or coinsurance. Separately, plans cannot put a dollar limit on essential benefits or a lifetime dollar limit.',
        },
      ],
    ),
    question(
      'c10q160',
      'How must emergency services at an out-of-network provider be covered?',
      [
        {
          text: 'Out-of-network emergency services may be excluded.',
          why: 'Emergency services must be covered even at an out-of-network provider. Exclusion of that out-of-network emergency care is not allowed.',
        },
        {
          text: 'They are covered, but at less than the amount that would have been paid in network.',
          why: 'Emergency services at an out-of-network provider must be covered at the amount that would have been paid in network. A lower out-of-network amount does not meet that rule.',
        },
        {
          text: 'They are covered only at a network provider.',
          why: 'Emergency services must be covered even at an out-of-network provider, at the in-network amount. Network-only emergency coverage does not satisfy the rule.',
        },
        {
          text: 'They must be covered even at an out-of-network provider, at the amount that would have been paid in network.',
          why: 'Emergency services must be covered even at an out-of-network provider, at the amount that would have been paid in network. The out-of-network site does not reduce that payment to a lesser amount.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q161',
      'How must preventive care, including routine checkups, screenings, and counseling, be covered?',
      [
        {
          text: 'It must be covered at 100% with no cost sharing.',
          why: 'Preventive care, including routine checkups, screenings, and counseling, must be covered at 100% with no cost sharing. The insured does not pay cost sharing for that preventive care.',
          correct: true,
        },
        {
          text: 'It is covered at 60%, the bronze plan average.',
          why: 'Bronze plans pay 60% on average, which is a metal-level figure. Preventive care must be covered at 100% with no cost sharing.',
        },
        {
          text: 'Screenings and counseling may be left out if routine checkups are covered.',
          why: 'Preventive care includes routine checkups, screenings, and counseling. All of that preventive care must be covered at 100% with no cost sharing.',
        },
        {
          text: 'The insured must pay 100% of preventive care, and the plan pays nothing.',
          why: 'The plan must cover preventive care at 100% with no cost sharing. The insured does not bear the full cost of those checkups, screenings, and counseling.',
        },
      ],
    ),
    question(
      'c10q162',
      'What do exchanges do with subsidies and with public and private coverage?',
      [
        {
          text: 'They sell only retiree-only and Medigap policies and do not administer subsidies.',
          why: 'Retiree-only plans and Medigap are generally exempt products, not the exchange role. Exchanges administer subsidies and help people enroll in private insurance, Medicaid, and the Children’s Health Insurance Program.',
        },
        {
          text: 'They administer subsidies, help people enroll in private insurance, Medicaid, and the Children’s Health Insurance Program, and let an applicant compare plans, learn about options and tax credits, and enroll.',
          why: 'Exchanges administer subsidies and help people enroll in private insurance, Medicaid, and the Children’s Health Insurance Program. They let an applicant compare plans, learn about options and tax credits, and enroll.',
          correct: true,
        },
        {
          text: 'They replace Medicaid and the Children’s Health Insurance Program and forbid plan comparisons.',
          why: 'Exchanges help people enroll in Medicaid and the Children’s Health Insurance Program rather than replacing them. They also let an applicant compare plans and learn about tax credits.',
        },
        {
          text: 'They enroll people only through the small-employer credit and hide tax credits.',
          why: 'The small-employer credit is a separate federal credit tied to a Small Business Health Options Program. Exchanges administer subsidies, explain tax credits, and help people compare and enroll.',
        },
      ],
    ),
    question(
      'c10q163',
      'Which list is the full set of ten essential benefits?',
      [
        {
          text: 'Only hospitalization, maternity, emergency services, wellness and preventive services, and chronic disease management.',
          why: 'Those services are essential benefits, but they are not the whole set of ten. The full list also includes ambulatory patient services, maternity and newborn care, mental health and substance use disorder services including behavioral health treatment, prescription drugs, rehabilitative and habilitative services and devices, laboratory services, and pediatric services including oral and vision care.',
        },
        {
          text: 'Retiree-only plans, stand-alone dental, Medigap, and long-term care.',
          why: 'Those products are generally exempt. They are not the ten essential benefits plans must include.',
        },
        {
          text: 'Ambulatory patient services, emergency services, hospitalization, maternity and newborn care, mental health and substance use disorder services including behavioral health treatment, prescription drugs, rehabilitative and habilitative services and devices, laboratory services, preventive and wellness services and chronic disease management, and pediatric services including oral and vision care.',
          why: 'All plans must include those ten essential benefits. The list runs from ambulatory patient services through pediatric oral and vision care.',
          correct: true,
        },
        {
          text: 'Adult stand-alone dental in place of pediatric oral and vision care, with mental health and prescription drugs removed.',
          why: 'Stand-alone dental is generally exempt. Pediatric services including oral and vision care, mental health and substance use disorder services, and prescription drugs are essential benefits.',
        },
      ],
    ),
    question(
      'c10q164',
      'On average, what share do bronze, silver, gold, and platinum plans pay?',
      [
        {
          text: 'Bronze 90%, silver 80%, gold 70%, and platinum 60%.',
          why: 'Those percentages are reversed. On average the metal plans pay bronze 60%, silver 70%, gold 80%, and platinum 90%.',
        },
        {
          text: 'Bronze 40%, silver 50%, gold 35%, and platinum 100%.',
          why: 'Forty percent is the average share bronze participants cover, 50% and 35% are small-employer credit rates, and 100% is the preventive-care standard. Metal plans pay bronze 60%, silver 70%, gold 80%, and platinum 90% on average.',
        },
        {
          text: 'Each metal level pays 60%, and participants always pay the other 40%.',
          why: 'The 60% and 40% split describes bronze, not every metal level. Silver pays 70%, gold pays 80%, and platinum pays 90% on average.',
        },
        {
          text: 'Bronze 60%, silver 70%, gold 80%, and platinum 90%.',
          why: 'On average the metal plans pay bronze 60%, silver 70%, gold 80%, and platinum 90%. Those are the four metal payment levels.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q165',
      'Under bronze coverage, what share do participants cover on average, and what may a person with severe disease pay?',
      [
        {
          text: 'Participants cover the other 40% on average, and a person with severe disease may pay much more.',
          why: 'Under bronze, participants cover the other 40% on average. A person with severe disease may pay much more than that average.',
          correct: true,
        },
        {
          text: 'The bronze plan pays 90%, and severe-disease costs are waived.',
          why: 'Platinum, not bronze, pays 90% on average. Under bronze, participants cover the other 40% on average, and a person with severe disease may pay much more.',
        },
        {
          text: 'Participants pay 70%, and the plan pays the other 40%.',
          why: 'Seventy percent is the silver plan’s average payment, not the bronze participant share. Bronze participants cover the other 40% on average.',
        },
        {
          text: 'Participants pay nothing, and severe disease is covered as preventive care at 100%.',
          why: 'Preventive care, not severe disease, is covered at 100% with no cost sharing. Bronze participants cover the other 40% on average, and a person with severe disease may pay much more.',
        },
      ],
    ),
    question(
      'c10q166',
      'What must an insurer offer if it sells adult and family metal coverage?',
      [
        {
          text: 'It may sell adult and family metal coverage and refuse child-only coverage.',
          why: 'Insurers that offer adult and family metal coverage must also offer child-only coverage. Refusing the child-only offering does not meet that duty.',
        },
        {
          text: 'It must also offer child-only coverage.',
          why: 'Insurers that offer adult and family metal coverage must also offer child-only coverage. The child-only offering is required alongside that adult and family metal coverage.',
          correct: true,
        },
        {
          text: 'Child-only coverage replaces the ten essential benefits.',
          why: 'The ten essential benefits remain required. Child-only coverage is an additional offering when the insurer sells adult and family metal coverage.',
        },
        {
          text: 'Child-only coverage is required only for an employer with 25 or fewer workers.',
          why: 'Twenty-five or fewer workers is a test for the small-employer premium credit. Child-only coverage is required of insurers that offer adult and family metal coverage.',
        },
      ],
    ),
    question(
      'c10q167',
      'Which statement matches the Marketplace plan categories and the plans that have lower premiums and high deductibles?',
      [
        {
          text: 'Marketplace plans are platinum only, and lower-premium plans pay all costs before any deductible.',
          why: 'Marketplace plans fall into four metal levels and catastrophic plans, and platinum is the 90% level, not the only category. On the lower-premium, high-deductible plans, the insured usually pays all costs up to the deductible.',
        },
        {
          text: 'Catastrophic plans sit outside the Marketplace, and high deductibles are forbidden.',
          why: 'Marketplace plans fall into four metal levels and catastrophic plans. Plans with lower premiums and high deductibles, often several thousand dollars, are described in this section.',
        },
        {
          text: 'Marketplace plans fall into four metal levels and catastrophic plans. Plans with lower premiums and high deductibles, often several thousand dollars, usually require the insured to pay all costs up to the deductible, and after that essential benefits are covered with no copayment or coinsurance.',
          why: 'Marketplace plans fall into four metal levels and catastrophic plans. The plans with lower premiums and high deductibles, often several thousand dollars, leave the insured paying all costs up to the deductible, and after that essential benefits are covered with no copayment or coinsurance.',
          correct: true,
        },
        {
          text: 'After a high deductible, essential benefits still require copayments and coinsurance.',
          why: 'After the deductible on those lower-premium, high-deductible plans, essential benefits are covered with no copayment or coinsurance. The insured usually pays all costs up to that deductible.',
        },
      ],
    ),
    question(
      'c10q168',
      'When did Marketplace enrollment begin, and when did tax credits begin?',
      [
        {
          text: 'Enrollment began in 2014, and tax credits began in October 2013.',
          why: 'Those dates are reversed. Marketplace enrollment began in October 2013, and tax credits began in 2014.',
        },
        {
          text: 'Both began on March 23, 2010.',
          why: 'March 23, 2010, is the date the Act was signed. Marketplace enrollment began in October 2013, and tax credits began in 2014.',
        },
        {
          text: 'Enrollment begins when a child turns 26, and credits run for two taxable years.',
          why: 'Age 26 is the child-coverage limit, and two consecutive taxable years is the small-employer credit period. Marketplace enrollment began in October 2013, and tax credits began in 2014.',
        },
        {
          text: 'Marketplace enrollment began in October 2013, and tax credits began in 2014.',
          why: 'Marketplace enrollment began in October 2013, and tax credits began in 2014. The credit timing is later than the first enrollment period.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q169',
      'How is an advance credit delivered, and which income figure is that credit based on?',
      [
        {
          text: 'The person can take an advance credit, paid to the insurer, to reduce the monthly premium, and the credit is based on expected annual income.',
          why: 'A qualified person can take an advance credit, paid to the insurer, to reduce the monthly premium. The credit is based on expected annual income.',
          correct: true,
        },
        {
          text: 'The credit is paid to the person only after the year ends and cannot lower the monthly premium.',
          why: 'The advance credit is paid to the insurer to reduce the monthly premium. It is based on expected annual income, not on a payment delayed until after the year ends.',
        },
        {
          text: 'The credit is paid to the employer and is based on average wages under $50,000.',
          why: 'Fewer than $50,000 average wages is a test for the small-employer credit. The individual advance credit is paid to the insurer and is based on expected annual income.',
        },
        {
          text: 'The credit is available only to Medicare recipients and is not paid to the insurer.',
          why: 'Medicare or Medicaid recipients do not qualify for the credit. A qualified person takes an advance credit paid to the insurer, based on expected annual income.',
        },
      ],
    ),
    question(
      'c10q170',
      'What is household income for the premium tax credit?',
      [
        {
          text: 'Only the taxpayer’s wages, leaving out a spouse and dependents.',
          why: 'Household income includes the taxpayer, spouse, and dependents. It is modified adjusted gross income, and wages are only one of the included items.',
        },
        {
          text: 'The modified adjusted gross income of the taxpayer, spouse, and dependents, including wages, salary, foreign income, interest, dividends, and Social Security.',
          why: 'Household income for the credit is the modified adjusted gross income of the taxpayer, spouse, and dependents. It includes wages, salary, foreign income, interest, dividends, and Social Security.',
          correct: true,
        },
        {
          text: 'The employer’s average wage, if that wage is under $50,000.',
          why: 'Fewer than $50,000 average wages per employee is a small-employer credit test. Household income for the individual credit is modified adjusted gross income of the taxpayer, spouse, and dependents.',
        },
        {
          text: 'The premium of a silver plan, rather than income.',
          why: 'A silver plan is what a person must buy to receive cost-sharing reductions. Household income is modified adjusted gross income, not the premium itself.',
        },
      ],
    ),
    question(
      'c10q171',
      'Which income rules decide the premium tax credit and a state’s optional Medicaid extension?',
      [
        {
          text: 'Only people under 138% of the federal poverty level qualify for the credit, and people from 100% to 400% are shut out.',
          why: 'States may extend Medicaid to people under 138% of the federal poverty level. Legal residents and citizens with income from 100% to 400% of that level qualify for the credit.',
        },
        {
          text: 'Medicare and Medicaid recipients qualify for the credit when income is above 400%.',
          why: 'Medicare or Medicaid recipients do not qualify for the credit. The credit band for legal residents and citizens is income from 100% to 400% of the federal poverty level.',
        },
        {
          text: 'Legal residents and citizens with income from 100% to 400% of the federal poverty level qualify, Medicare or Medicaid recipients do not qualify, and states may extend Medicaid to people under 138% of that level.',
          why: 'Legal residents and citizens in the 100% to 400% band qualify for the credit, and Medicare or Medicaid recipients do not. States may extend Medicaid to people under 138% of the federal poverty level.',
          correct: true,
        },
        {
          text: 'The credit stops at 250% of the poverty level, and states cannot use the 138% Medicaid figure.',
          why: 'Income from 100% to 250% of the poverty level is the band for cost-sharing reductions among people eligible for the credit. The credit itself runs from 100% to 400%, and states may extend Medicaid under 138%.',
        },
      ],
    ),
    question(
      'c10q172',
      'Cost-sharing reductions are available inside which federal-poverty-level income band?',
      [
        {
          text: 'Income from 100% to 400% of the poverty level on any metal plan.',
          why: 'Income from 100% to 400% of the federal poverty level is the credit band for legal residents and citizens. Cost-sharing reductions use income from 100% to 250%, and the person must buy a silver plan.',
        },
        {
          text: 'Income under 138% of the poverty level on a bronze plan.',
          why: 'Under 138% is the optional Medicaid extension, and bronze is the 60% metal level. Cost-sharing reductions are for income from 100% to 250%, and the person must buy a silver plan.',
        },
        {
          text: 'Income from 250% to 400% of the poverty level on a platinum plan.',
          why: 'Platinum pays 90% on average, and 400% is the top of the credit band. Cost-sharing reductions apply from 100% to 250% of the poverty level and require a silver plan.',
        },
        {
          text: 'Income from 100% to 250% of the poverty level, and the person must buy a silver plan.',
          why: 'People eligible for the credit with income from 100% to 250% of the poverty level can get cost-sharing reductions. They must buy a silver plan.',
          correct: true,
        },
      ],
    ),
    question(
      'c10q173',
      'What wage level, workforce size, and credit percentages apply to the small-employer premium credit?',
      [
        {
          text: 'Employers with fewer than $50,000 average wages per employee and 25 or fewer workers may receive up to 50% of premiums for a small business and 35% for a small tax-exempt employer.',
          why: 'The federal credit is based on average wages and size. Employers meeting those wage and size tests may receive up to 50% of premiums for a small business and 35% for a small tax-exempt employer.',
          correct: true,
        },
        {
          text: 'Any employer may receive 90% of premiums, with no wage or size test.',
          why: 'Ninety percent is the average platinum payment, not the small-employer credit. The credit requires fewer than $50,000 average wages and 25 or fewer workers, and the rates are up to 50% and 35%.',
        },
        {
          text: 'Employers with 25 or fewer workers receive 35% if they are taxable businesses and 50% if they are tax-exempt.',
          why: 'The percentages are reversed. A small business may receive up to 50% of premiums, and a small tax-exempt employer may receive 35%.',
        },
        {
          text: 'The credit is 100% of premiums for employers of any size.',
          why: 'One hundred percent with no cost sharing is the preventive-care rule, not the employer credit. The employer credit is up to 50% or 35% and depends on wages and size.',
        },
      ],
    ),
    question(
      'c10q174',
      'Where must the small employer’s qualified plan be offered, and how long does the credit last?',
      [
        {
          text: 'Any individual policy qualifies, and the credit lasts until the 2018 phase-in ends.',
          why: 'The Act was to be phased in until 2018, which is not the credit term. The employer must pay premiums for a qualified plan offered through a Small Business Health Options Program, and the credit lasts for two consecutive taxable years.',
        },
        {
          text: 'The employer must pay premiums for employees in a qualified plan offered through a Small Business Health Options Program, and the credit lasts for two consecutive taxable years.',
          why: 'The employer must pay premiums for employees in a qualified plan offered through a Small Business Health Options Program. The credit lasts for two consecutive taxable years.',
          correct: true,
        },
        {
          text: 'The plan must be platinum, and the credit may be taken every year with no two-year limit.',
          why: 'Platinum is the 90% metal level, not a condition of this credit. The credit lasts for two consecutive taxable years and requires a qualified plan offered through a Small Business Health Options Program.',
        },
        {
          text: 'Employees pay the premiums, and the employer may take the credit without a qualified plan.',
          why: 'The employer must pay the premiums for employees in a qualified plan. The plan must be offered through a Small Business Health Options Program, and the credit lasts for two consecutive taxable years.',
        },
      ],
    ),
    question(
      'c10q175',
      'Where was the Utah Health Exchange created, and which agencies share in it?',
      [
        {
          text: 'It was created in the Insurance Department alone, with no role for the Governor’s office.',
          why: 'The Insurance Department is one participant, not the sole home of the exchange. The Utah Health Exchange was created in the Governor’s office, with the Insurance Department, the Department of Health, and the Department of Workforce Services.',
        },
        {
          text: 'It was created by private vendors, with no state department involved.',
          why: 'Private vendors are contracted to run enrollment, comparisons, premium collection, and a call center. The exchange itself was created in the Governor’s office with the Insurance Department, the Department of Health, and the Department of Workforce Services.',
        },
        {
          text: 'It was created in the Governor’s office, with the Insurance Department, the Department of Health, and the Department of Workforce Services.',
          why: 'The Utah Health Exchange was created in the Governor’s office, with the Insurance Department, the Department of Health, and the Department of Workforce Services. Those are the offices named for its creation.',
          correct: true,
        },
        {
          text: 'It was created as a retiree-only plan inside the Department of Workforce Services alone.',
          why: 'Retiree-only plans are generally exempt from the Act and are not this exchange. The exchange was created in the Governor’s office together with the Insurance Department, the Department of Health, and the Department of Workforce Services.',
        },
      ],
    ),
    question(
      'c10q176',
      'How does the Utah Health Exchange help employers and consumers, and what do its private vendors do?',
      [
        {
          text: 'It sells only Medigap, blocks pre-tax employee purchases, and offers no program comparisons.',
          why: 'Medigap is generally exempt and is not the exchange’s product. The exchange gives employers a free or low-cost way for employees to buy coverage with pre-tax dollars and lets consumers compare and enroll.',
        },
        {
          text: 'It replaces Medicaid and forbids links to private insurance sites.',
          why: 'The exchange links to private and government insurance sites and tells consumers which public and private programs they may qualify for. It does not replace those programs or cut off the private-site links.',
        },
        {
          text: 'It denies a free or low-cost pre-tax path and uses no private vendors or call center.',
          why: 'The exchange gives employers a free or low-cost way for employees to buy coverage with pre-tax dollars. It contracts with private vendors to run enrollment and plan comparisons, to collect one policy’s premium from several payers, and to run a call center with unbiased answers.',
        },
        {
          text: 'It links to private and government insurance sites and electronic applications, offers a free or low-cost pre-tax way for employees to buy coverage, tells consumers which public and private programs they may qualify for, lets them compare and enroll, and links to premium assistance. Vendors run enrollment and plan comparisons, collect one policy’s premium from several payers, and run a call center with unbiased answers.',
          why: 'The Utah Health Exchange provides those links, the pre-tax employer path, program information, comparison, enrollment, and premium assistance. It contracts with private vendors for enrollment, plan comparisons, collection of one policy’s premium from several payers, and a call center with unbiased answers.',
          correct: true,
        },
      ],
    ),
  ],
}
