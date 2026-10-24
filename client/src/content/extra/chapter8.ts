import { question } from '../build.ts'
import type { Question } from '../types.ts'

export const chapter8Extra: Record<string, Question[]> = {
'c8-perils': [
    question(
      'c8q19',
      'What is comprehensive coverage?',
      [
        {
          text: 'The portion of the loss the insured pays before the insurer pays a claim.',
          why: 'That portion of the loss is the deductible. Comprehensive coverage is health insurance that covers most types of medical expenses.',
        },
        {
          text: 'Time that must pass after a loss before the insurer starts paying benefits.',
          why: 'That time is a waiting period. Comprehensive coverage is health insurance that covers most types of medical expenses.',
        },
        {
          text: 'Health insurance that covers most types of medical expenses.',
          why: 'Comprehensive coverage is health insurance that covers most types of medical expenses.',
          correct: true,
        },
        {
          text: 'An addition that adds, modifies, or deletes policy provisions.',
          why: 'Additions that add, modify, or delete policy provisions are riders. Comprehensive coverage is health insurance that covers most types of medical expenses.',
        },
      ],
    ),
    question(
      'c8q20',
      'Who is an enrollee?',
      [
        {
          text: 'Someone relying on the insured for support.',
          why: 'Someone relying on the insured for support is a dependent. An enrollee is a person enrolled in a health plan, an insured, and dependents of the insured are not included.',
        },
        {
          text: 'A person who is unable to meet financial obligations.',
          why: 'Unable to meet financial obligations means insolvent. An enrollee is a person enrolled in a health plan, an insured.',
        },
        {
          text: 'Every dependent of the insured, because dependents are included in that term.',
          why: 'Dependents of the insured are not included in the term enrollee. An enrollee is a person enrolled in a health plan, an insured.',
        },
        {
          text: 'A person enrolled in a health plan, an insured.',
          why: 'An enrollee is a person enrolled in a health plan, an insured. Dependents of the insured are not included.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q21',
      'What is a copayment?',
      [
        {
          text: 'The specified amount the insured pays for services up front, with the provider paying the rest.',
          why: 'A copayment is the specified amount the insured pays for services up front, and the provider pays the rest.',
          correct: true,
        },
        {
          text: 'The portion of the loss the insured pays before the insurer pays a claim.',
          why: 'That portion of the loss is the deductible. A copayment is the specified amount the insured pays up front, and the provider pays the rest.',
        },
        {
          text: 'An attempt to persuade a person to buy a policy, orally or in writing.',
          why: 'That attempt is solicitation. A copayment is the specified amount the insured pays for services up front, and the provider pays the rest.',
        },
        {
          text: 'A condition for which the insured was treated during a specific period before applying.',
          why: 'That condition is a pre-existing condition. A copayment is the specified amount the insured pays for services up front, and the provider pays the rest.',
        },
      ],
    ),
    question(
      'c8q22',
      'What is a deductible?',
      [
        {
          text: 'The amount the provider pays after the insured pays a specified amount up front.',
          why: 'The up-front amount, with the provider paying the rest, is a copayment. A deductible is the portion of the loss the insured pays before the insurer pays a claim.',
        },
        {
          text: 'The portion of the loss the insured pays before the insurer pays a claim.',
          why: 'A deductible is the portion of the loss the insured pays before the insurer pays a claim.',
          correct: true,
        },
        {
          text: 'Health insurance that covers most types of medical expenses.',
          why: 'Health insurance that covers most types of medical expenses is comprehensive coverage. A deductible is the portion of the loss the insured pays before the insurer pays a claim.',
        },
        {
          text: 'Time that must pass after a loss before benefits start.',
          why: 'Time that must pass after a loss before the insurer starts paying benefits is a waiting period. A deductible is the portion of the loss the insured pays before the insurer pays a claim.',
        },
      ],
    ),
    question(
      'c8q23',
      'What is a pre-existing condition?',
      [
        {
          text: 'An unforeseen and unintended injury that resulted from an accident rather than a sickness.',
          why: 'That injury is accidental bodily injury. A pre-existing condition is a condition for which the insured received diagnosis, advice, care, or treatment during a specific period before applying.',
        },
        {
          text: 'An illness that first manifests itself while the policy is in force.',
          why: 'An illness that first manifests itself while the policy is in force is sickness. A pre-existing condition is a condition for which the insured received diagnosis, advice, care, or treatment during a specific period before applying.',
        },
        {
          text: 'A condition for which the insured received diagnosis, advice, care, or treatment during a specific period before applying.',
          why: 'Pre-existing conditions are conditions for which the insured received diagnosis, advice, care, or treatment during a specific period before applying.',
          correct: true,
        },
        {
          text: 'Health care a prudent professional would provide to prevent, diagnose, or treat an illness.',
          why: 'Services a prudent health care professional would provide to prevent, diagnose, or treat an illness, injury, or disease are medical necessity. A pre-existing condition relates to diagnosis, advice, care, or treatment during a specific period before applying.',
        },
      ],
    ),
    question(
      'c8q24',
      'What is a waiting period?',
      [
        {
          text: 'The specific period before application during which a condition was diagnosed or treated.',
          why: 'Diagnosis, advice, care, or treatment during a specific period before applying describes a pre-existing condition. A waiting period is time that must pass after a loss before the insurer starts paying benefits.',
        },
        {
          text: 'An attempt to persuade a person to buy a policy, orally or in writing.',
          why: 'That attempt is solicitation. A waiting period is time that must pass after a loss before the insurer starts paying benefits.',
        },
        {
          text: 'The portion of a loss the insured pays before the insurer pays a claim.',
          why: 'That portion is the deductible. A waiting period is time that must pass after a loss before the insurer starts paying benefits.',
        },
        {
          text: 'Time that must pass after a loss before the insurer starts paying benefits.',
          why: 'A waiting period is time that must pass after a loss before the insurer starts paying benefits.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q25',
      'Which statement about accident and sickness as health perils is correct?',
      [
        {
          text: 'The two major perils are accident and sickness. A policy may cover both, or accident only, and most health claims result from sickness rather than accidental injury.',
          why: 'Two major perils are accident and sickness, and a policy may cover both or accident only. Most health claims result from sickness rather than accidental injury.',
          correct: true,
        },
        {
          text: 'Accident is the only major peril, a policy must always cover sickness with accident, and most claims result from accidental injury.',
          why: 'A policy may cover both accident and sickness, or accident only. Most health claims result from sickness rather than accidental injury.',
        },
        {
          text: 'A policy may cover sickness only, and an accidental injury must be caused by a sickness.',
          why: 'A policy may cover both, or accident only. Accidental bodily injury is an unforeseen and unintended injury that resulted from an accident rather than a sickness.',
        },
        {
          text: 'Neither accident nor sickness is a major peril, and benefits are limited to dental injury.',
          why: 'The two major perils are accident and sickness. Dental expense insurance is separate coverage for dental disease and injury to the teeth.',
        },
      ],
    ),
    question(
      'c8q26',
      'What is accidental bodily injury?',
      [
        {
          text: 'An illness that first manifests itself while the policy is in force.',
          why: 'An illness that first manifests itself while the policy is in force is sickness. Accidental bodily injury is an unforeseen and unintended injury that resulted from an accident rather than a sickness.',
        },
        {
          text: 'An unforeseen and unintended injury that resulted from an accident rather than a sickness.',
          why: 'Accidental bodily injury is an unforeseen and unintended injury that resulted from an accident rather than a sickness.',
          correct: true,
        },
        {
          text: 'A condition so severe that, without quick and proper treatment, it could cause serious bodily harm or death.',
          why: 'That severity describes an emergency medical condition. Accidental bodily injury is an unforeseen and unintended injury that resulted from an accident rather than a sickness.',
        },
        {
          text: 'Diagnostic and preventive care such as cleaning and fluoride.',
          why: 'Cleaning and fluoride are examples of diagnostic and preventive dental care. Accidental bodily injury is an unforeseen and unintended injury that resulted from an accident rather than a sickness.',
        },
      ],
    ),
    question(
      'c8q27',
      'Which statement about health underwriting and replacement is correct?',
      [
        {
          text: 'Underwriting ignores health conditions and genetic information, and replacement forbids comparing the old and new coverage.',
          why: 'Underwriting is especially exposed to unfair discrimination because of health conditions and genetic information. Replacement requires a comparison of the old and new coverage.',
        },
        {
          text: 'The producer has no responsibility for errors, and replacement compares only commissions.',
          why: 'Health insurance covers principal types of losses and benefits, common exclusions, and the producer’s responsibility for errors. Replacement requires a comparison of the old and new coverage.',
        },
        {
          text: 'Underwriting is especially exposed to unfair discrimination because of health conditions and genetic information, and replacement requires a comparison of the old and new coverage.',
          why: 'Underwriting is especially exposed to unfair discrimination because of health conditions and genetic information. Replacement requires a comparison of the old and new coverage.',
          correct: true,
        },
        {
          text: 'Genetic information removes unfair discrimination, and the old policy is dropped before any comparison.',
          why: 'Health conditions and genetic information are why underwriting is especially exposed to unfair discrimination. Replacement requires a comparison of the old and new coverage.',
        },
      ],
    ),
    question(
      'c8q28',
      'What is an emergency medical condition?',
      [
        {
          text: 'Any illness that first manifests itself while the policy is in force.',
          why: 'An illness that first manifests itself while the policy is in force is sickness. An emergency medical condition is so severe in pain or symptoms that, without quick and proper treatment, it could cause serious bodily harm or death.',
        },
        {
          text: 'Services a prudent health care professional would provide to prevent, diagnose, or treat an illness, injury, or disease.',
          why: 'Those services are medical necessity. An emergency medical condition is so severe in pain or symptoms that, without quick and proper treatment, it could cause serious bodily harm or death.',
        },
        {
          text: 'Care delivered in an acute care unit of a hospital.',
          why: 'Long-term care policies do not pay for care in an acute care unit of a hospital. An emergency medical condition is defined by pain or symptoms severe enough that, without quick and proper treatment, serious bodily harm or death could result.',
        },
        {
          text: 'A condition so severe in pain or symptoms that, without quick and proper treatment, it could cause serious bodily harm or death.',
          why: 'An emergency medical condition is so severe in pain or symptoms that, without quick and proper treatment, it could cause serious bodily harm or death.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q29',
      'What does medical necessity mean?',
      [
        {
          text: 'Health care services that a prudent health care professional would provide to prevent, diagnose, or treat an illness, injury, or disease.',
          why: 'Medical necessity means health care services that a prudent health care professional would provide to prevent, diagnose, or treat an illness, injury, or disease.',
          correct: true,
        },
        {
          text: 'Any service the insured requests, whether or not a prudent professional would provide it.',
          why: 'Medical necessity means services a prudent health care professional would provide to prevent, diagnose, or treat an illness, injury, or disease.',
        },
        {
          text: 'Only care in an acute care unit of a hospital.',
          why: 'Long-term care pays for medically necessary services in a nursing home or in the insured’s home, and not for care in an acute care unit of a hospital. Medical necessity is the prudent-professional standard for prevention, diagnosis, or treatment.',
        },
        {
          text: 'The specified amount the insured pays up front for a service.',
          why: 'That up-front amount is a copayment. Medical necessity means services a prudent health care professional would provide to prevent, diagnose, or treat an illness, injury, or disease.',
        },
      ],
    ),
    question(
      'c8q30',
      'How may disability income benefits be based and limited?',
      [
        {
          text: 'They reimburse the full hospital bill and are not tied to past earnings.',
          why: 'A medical expense contract covers expenses such as a physician or hospital bill. Disability income benefits may be based on past earnings and limited to a percentage of that income.',
        },
        {
          text: 'They may be based on past earnings and limited to a percentage of that income, and they are paid weekly or monthly.',
          why: 'Loss of income from accident or sickness is covered by disability income policies, a valued contract or stated amount. Benefits are paid weekly or monthly and may be based on past earnings and limited to a percentage of that income.',
          correct: true,
        },
        {
          text: 'They pay only for care in an acute care unit of a hospital.',
          why: 'Long-term care policies do not pay for care in an acute care unit of a hospital. Disability income pays weekly or monthly benefits that may be based on past earnings and limited to a percentage of that income.',
        },
        {
          text: 'They replace future earnings with no percentage limit.',
          why: 'Disability income benefits may be based on past earnings and limited to a percentage of that income. They are paid weekly or monthly for loss of income from accident or sickness.',
        },
      ],
    ),
    question(
      'c8q31',
      'When is a medical expense payment called reimbursement?',
      [
        {
          text: 'When the insurer pays the provider and the insured pays nothing.',
          why: 'Reimbursement means the insurer pays the insured, and the insured pays the provider. A medical expense contract covers expenses such as a physician or hospital bill.',
        },
        {
          text: 'When the benefit stops at the amount shown on a list.',
          why: 'A scheduled benefit pays only up to the amount on a list. Reimbursement means the insurer pays the insured, and the insured pays the provider.',
        },
        {
          text: 'When the insurer pays the insured, and the insured pays the provider.',
          why: 'If the insurer pays the insured, and the insured pays the provider, that is reimbursement. A medical expense contract covers expenses from an accident or sickness, such as a physician or hospital bill.',
          correct: true,
        },
        {
          text: 'When the insured pays a specified amount up front and the provider pays the rest.',
          why: 'That up-front payment is a copayment. Reimbursement means the insurer pays the insured, and the insured pays the provider.',
        },
      ],
    ),
    question(
      'c8q32',
      'What does a scheduled benefit pay?',
      [
        {
          text: 'The entire physician or hospital bill with no listed limit.',
          why: 'A medical expense contract can cover a physician or hospital bill. A scheduled benefit pays only up to the amount on a list.',
        },
        {
          text: 'A weekly income benefit equal to past earnings with no percentage limit.',
          why: 'Disability income pays weekly or monthly benefits that may be limited to a percentage of past earnings. A scheduled benefit pays only up to the amount on a list.',
        },
        {
          text: 'The full medical bill whenever the person is also a dependent on a spouse’s group plan.',
          why: 'If someone is also a dependent on a spouse’s group plan, payment of medical expenses is coordinated. A scheduled benefit pays only up to the amount on a list.',
        },
        {
          text: 'Only up to the amount on a list.',
          why: 'A scheduled benefit pays only up to the amount on a list.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q33',
      'Which dental benefit is usually missing from medical expense plans?',
      [
        {
          text: 'Diagnostic and preventive care, such as cleaning and fluoride.',
          why: 'Dental expense insurance covers treatment, care, and prevention of dental disease and injury to the teeth. Diagnostic and preventive care, such as cleaning and fluoride, is usually missing from medical expense plans, and some dental plans require periodic exams as a condition of continued coverage.',
          correct: true,
        },
        {
          text: 'A physician or hospital bill from an accident or sickness.',
          why: 'A physician or hospital bill is the kind of expense a medical expense contract covers. Diagnostic and preventive dental care, such as cleaning and fluoride, is usually missing from medical expense plans.',
        },
        {
          text: 'The portion of a loss the insured pays before the insurer pays a claim.',
          why: 'That portion is a deductible. The dental feature usually missing from medical expense plans is diagnostic and preventive care, such as cleaning and fluoride.',
        },
        {
          text: 'Care in an acute care unit of a hospital.',
          why: 'Long-term care policies do not pay for an acute care unit of a hospital. Diagnostic and preventive dental care, such as cleaning and fluoride, is the feature usually missing from medical expense plans.',
        },
      ],
    ),
    question(
      'c8q34',
      'Where do long-term care policies pay for medically necessary services?',
      [
        {
          text: 'In an acute care unit of a hospital, and not in a nursing home.',
          why: 'Long-term care policies pay for medically necessary services in a nursing home or in the insured’s home. They do not pay for care in an acute care unit of a hospital.',
        },
        {
          text: 'In a nursing home or in the insured’s home, but not in an acute care unit of a hospital.',
          why: 'Long-term care policies pay for medically necessary services in a nursing home or in the insured’s home, but not for care in an acute care unit of a hospital.',
          correct: true,
        },
        {
          text: 'Only for cleaning and fluoride in a dental setting.',
          why: 'Cleaning and fluoride are diagnostic and preventive dental care. Long-term care pays for medically necessary services in a nursing home or in the insured’s home, and not in an acute care unit of a hospital.',
        },
        {
          text: 'As a weekly income benefit based on past earnings.',
          why: 'Weekly or monthly benefits that may be based on past earnings are disability income benefits. Long-term care pays for medically necessary services in a nursing home or in the insured’s home.',
        },
      ],
    ),
  ],
  'c8-classes': [
    question(
      'c8q35',
      'What kinds of protection does the term health insurance cover?',
      [
        {
          text: 'Only loss of income, leaving health care expenses to life insurance.',
          why: 'Health insurance is a generic term for related contracts. One type covers health care expenses, and the other pays for loss of income.',
        },
        {
          text: 'Only the specific diseases named in a limited policy.',
          why: 'Limited policies cover only specific accidents or diseases. As a generic term, health insurance includes contracts for health care expenses and for loss of income.',
        },
        {
          text: 'One type covers health care expenses, and the other pays for loss of income.',
          why: 'Health insurance is a generic term for related contracts that protect against different risks. One type covers health care expenses, and the other pays for loss of income.',
          correct: true,
        },
        {
          text: 'Only Medicare benefits for people over 65.',
          why: 'Medicare and Medicaid cover some disabled people and people over 65. Health insurance also includes contracts for health care expenses and contracts that pay for loss of income.',
        },
      ],
    ),
    question(
      'c8q36',
      'Which policy pays periodically when the insured cannot work because of sickness or injury?',
      [
        {
          text: 'A fully insured plan that assumes the risk of medical expenses.',
          why: 'A fully insured plan is administered and guaranteed by an insurer, which assumes medical-expense risk in return for the premium. Disability income insurance pays periodically when the insured cannot work because of sickness or injury.',
        },
        {
          text: 'A limited policy that covers only a specific disease.',
          why: 'Limited policies cover only specific accidents or diseases. Disability income insurance pays periodically when the insured cannot work because of sickness or injury.',
        },
        {
          text: 'A comprehensive plan that pays income while the insured is working.',
          why: 'A comprehensive plan covers sickness or accidents that are not specifically excluded. Disability income insurance pays periodically when the insured cannot work because of sickness or injury.',
        },
        {
          text: 'Disability income insurance.',
          why: 'The policy that pays periodically when the insured cannot work because of sickness or injury is disability income insurance.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q37',
      'How is most health insurance written?',
      [
        {
          text: 'On a group basis through an employer.',
          why: 'Most health insurance is written on a group basis through an employer. Individual coverage for a family is medically underwritten.',
          correct: true,
        },
        {
          text: 'As medically underwritten individual coverage for a family.',
          why: 'Individual coverage for a family is medically underwritten, while most health insurance is written on a group basis through an employer.',
        },
        {
          text: 'As franchise coverage, because franchise insurance is the usual group contract.',
          why: 'Franchise insurance covers small groups too small for true group insurance, and it is not group insurance. Most health insurance is written on a group basis through an employer.',
        },
        {
          text: 'As self-insurance with no employer group.',
          why: 'A business that handles its own risks is self-insuring. Most health insurance is written on a group basis through an employer.',
        },
      ],
    ),
    question(
      'c8q38',
      'How is individual coverage for a family underwritten?',
      [
        {
          text: 'It is issued without medical underwriting because a family is a true group.',
          why: 'Most health insurance is written on a group basis through an employer. Individual coverage for a family is medically underwritten.',
        },
        {
          text: 'It is medically underwritten.',
          why: 'Individual coverage for a family is medically underwritten.',
          correct: true,
        },
        {
          text: 'Medical history is skipped, and the family is reviewed only every anniversary.',
          why: 'A group is re-evaluated every anniversary. Individual coverage for a family is medically underwritten.',
        },
        {
          text: 'The family is self-insured, so the insurer does not underwrite it.',
          why: 'Self-insurance means a business handles its own risks. Individual coverage for a family is medically underwritten.',
        },
      ],
    ),
    question(
      'c8q39',
      'How do health claims compare with a life insurance death claim?',
      [
        {
          text: 'Health insurance produces one death claim and no further claims.',
          why: 'In life insurance there is one death claim. Multiple health claims are the rule.',
        },
        {
          text: 'Health insurance allows fewer claims than life insurance.',
          why: 'Multiple health claims are the rule. Life insurance has one death claim.',
        },
        {
          text: 'Multiple health claims are the rule, while life insurance has one death claim.',
          why: 'Unlike life insurance, where there is one death claim, multiple health claims are the rule.',
          correct: true,
        },
        {
          text: 'Health and life insurance each pay only one claim.',
          why: 'Life insurance has one death claim. Multiple health claims are the rule.',
        },
      ],
    ),
    question(
      'c8q40',
      'What are the three most important underwriting factors?',
      [
        {
          text: 'Premium mode, policy size, and whether the insurer is private.',
          why: 'The three most important underwriting factors are the physical condition of the applicant and other insureds, moral and morale hazards, and occupation.',
        },
        {
          text: 'Association size, years active, and how often the group meets.',
          why: 'Association groups normally must have at least 100 members, have been active for at least 2 years, have a constitution and by-laws, and hold meetings at least annually. The three most important underwriting factors are physical condition, moral and morale hazards, and occupation.',
        },
        {
          text: 'Medicare eligibility, Medicaid structure, and Social Security disability status.',
          why: 'Medicare and Medicaid cover some disabled people and people over 65, Medicaid is both federal and state, and Social Security offers disability protection. The three most important underwriting factors are physical condition, moral and morale hazards, and occupation.',
        },
        {
          text: 'Physical condition of the applicant and other insureds, moral and morale hazards, and occupation.',
          why: 'The three most important underwriting factors are the physical condition of the applicant and other insureds, moral and morale hazards, and occupation.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q41',
      'When does the right to continue a policy matter especially?',
      [
        {
          text: 'If the person has become uninsurable.',
          why: 'The right to continue a policy matters especially if the person has become uninsurable.',
          correct: true,
        },
        {
          text: 'Only on the group anniversary, and only if the person remains insurable.',
          why: 'The group is re-evaluated every anniversary. The right to continue a policy matters especially if the person has become uninsurable.',
        },
        {
          text: 'When the person is over 65 and covered by Medicare.',
          why: 'Medicare and Medicaid cover some disabled people and people over 65. The right to continue a policy matters especially if the person has become uninsurable.',
        },
        {
          text: 'When the employer self-insures and continuation rights end.',
          why: 'A company that self-insures must have a formal program for identifying, evaluating, and funding its losses. The right to continue a policy matters especially if the person has become uninsurable.',
        },
      ],
    ),
    question(
      'c8q42',
      'What is true of the NAIC model law and individual health policies?',
      [
        {
          text: 'No state has adopted the model law, so individual health policies are identical.',
          why: 'Nearly all states have adopted the NAIC model law for uniform mandatory provisions, but individual health policies still vary more than other policies.',
        },
        {
          text: 'Nearly all states have adopted it for uniform mandatory provisions, but individual health policies still vary more than other policies.',
          why: 'Nearly all states have adopted the NAIC model law for uniform mandatory provisions, but individual health policies still vary more than other policies.',
          correct: true,
        },
        {
          text: 'Adoption made individual health policies vary less than other policies.',
          why: 'Nearly all states have adopted the NAIC model law for uniform mandatory provisions, but individual health policies still vary more than other policies.',
        },
        {
          text: 'The model law applies only to self-insured plans and removed variation from individual policies.',
          why: 'Self-insurance is a business handling its own risks. Nearly all states have adopted the NAIC model law for uniform mandatory provisions, but individual health policies still vary more than other policies.',
        },
      ],
    ),
    question(
      'c8q43',
      'What does the group underwriter do about adverse selection by people eligible for coverage?',
      [
        {
          text: 'Rejects nearly every application, even when the group meets the eligible-group definition.',
          why: 'Few group applications are rejected if the applicant meets the statutory definition of an eligible group. The underwriter draws the contract to prevent adverse selection by people eligible for coverage.',
        },
        {
          text: 'Issues an individual policy to each person and does not draw a group contract.',
          why: 'Individual policies and individual underwriting describe franchise insurance, which is not group insurance. The group underwriter draws the contract to prevent adverse selection by people eligible for coverage.',
        },
        {
          text: 'Draws the contract to prevent adverse selection by people eligible for coverage.',
          why: 'Group underwriting still evaluates hazard and assigns a class and rate, but the techniques differ. The underwriter decides whether and on what basis the group may be insured, and draws the contract to prevent adverse selection by people eligible for coverage.',
          correct: true,
        },
        {
          text: 'Freezes coverage and requirements so they cannot be adjusted later.',
          why: 'Coverage and requirements can be adjusted, and the group is re-evaluated every anniversary. The contract is drawn to prevent adverse selection by people eligible for coverage.',
        },
      ],
    ),
    question(
      'c8q44',
      'When are few group applications rejected?',
      [
        {
          text: 'When each person submits medical history on a franchise basis.',
          why: 'Under franchise insurance, each person is underwritten and submits an application and medical history. Few group applications are rejected if the applicant meets the statutory definition of an eligible group.',
        },
        {
          text: 'When a business self-insures without a formal program for losses.',
          why: 'A company that self-insures must have a formal program for identifying, evaluating, and funding its losses. Few group applications are rejected if the applicant meets the statutory definition of an eligible group.',
        },
        {
          text: 'When individual family coverage is medically underwritten.',
          why: 'Individual coverage for a family is medically underwritten. Few group applications are rejected if the applicant meets the statutory definition of an eligible group.',
        },
        {
          text: 'If the applicant meets the statutory definition of an eligible group.',
          why: 'Few group applications are rejected if the applicant meets the statutory definition of an eligible group. Coverage and requirements can be adjusted, and the group is re-evaluated every anniversary.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q45',
      'How often is the group re-evaluated?',
      [
        {
          text: 'Every anniversary.',
          why: 'The group is re-evaluated every anniversary. Coverage and requirements can be adjusted.',
          correct: true,
        },
        {
          text: 'Only when a member has become uninsurable.',
          why: 'The right to continue a policy matters especially if the person has become uninsurable. The group is re-evaluated every anniversary.',
        },
        {
          text: 'Once, when the contract is drawn, and not again.',
          why: 'The underwriter draws the contract to prevent adverse selection, and the group is re-evaluated every anniversary.',
        },
        {
          text: 'Only when an association holds its required meeting, not on each anniversary.',
          why: 'Association groups hold meetings at least annually. An insured group is re-evaluated every anniversary.',
        },
      ],
    ),
    question(
      'c8q46',
      'How do franchise premiums generally compare with individual and group premiums?',
      [
        {
          text: 'They are higher than both an individual policy and group coverage.',
          why: 'Franchise premiums are generally less than for an individual policy and more than for group coverage.',
        },
        {
          text: 'They are generally less than for an individual policy and more than for group coverage.',
          why: 'Franchise insurance covers small groups too small for true group insurance, and it is not group insurance. Premiums are generally less than for an individual policy and more than for group coverage.',
          correct: true,
        },
        {
          text: 'They match group premiums because franchise insurance is group insurance.',
          why: 'Franchise insurance is not group insurance. Premiums are generally less than for an individual policy and more than for group coverage.',
        },
        {
          text: 'They are less than group coverage and more than an individual policy.',
          why: 'The comparison runs the other way. Premiums are generally less than for an individual policy and more than for group coverage.',
        },
      ],
    ),
    question(
      'c8q47',
      'Which statement about sources of health coverage is correct?',
      [
        {
          text: 'Social Security provides the large share of individual and group health insurance, and private insurers cover only people over 65.',
          why: 'Private insurers provide a large share of individual and group health insurance. Medicare and Medicaid cover some disabled people and people over 65, and Social Security also offers disability protection.',
        },
        {
          text: 'Medicaid provides the large share of individual and group coverage, and it is only a federal program.',
          why: 'Private insurers provide a large share of individual and group health insurance. Medicaid is both federal and state.',
        },
        {
          text: 'Private insurers provide a large share of individual and group health insurance. Medicare and Medicaid cover some disabled people and people over 65, Medicaid is both federal and state, and Social Security also offers disability protection.',
          why: 'Private insurers provide a large share of individual and group health insurance. Medicare and Medicaid cover some disabled people and people over 65, Medicaid is both federal and state, and Social Security also offers disability protection.',
          correct: true,
        },
        {
          text: 'Self-insured employers provide Medicare, and private insurers cover only loss of income.',
          why: 'Self-insurance means a business handles its own risks. Private insurers provide a large share of individual and group health insurance, and Medicare and Medicaid cover some disabled people and people over 65.',
        },
      ],
    ),
    question(
      'c8q48',
      'What do limited policies cover, and what does a comprehensive plan cover?',
      [
        {
          text: 'A limited policy covers every sickness, and a comprehensive plan covers only a specific accident.',
          why: 'Limited policies cover only specific accidents or diseases. A comprehensive plan covers sickness or accidents that are not specifically excluded.',
        },
        {
          text: 'Both cover only specific diseases.',
          why: 'Limited policies cover only specific accidents or diseases. A comprehensive plan covers sickness or accidents that are not specifically excluded.',
        },
        {
          text: 'A comprehensive plan covers only excluded care, and a limited policy covers everything else.',
          why: 'A comprehensive plan covers sickness or accidents that are not specifically excluded. Limited policies cover only specific accidents or diseases.',
        },
        {
          text: 'Limited policies cover only specific accidents or diseases. A comprehensive plan covers sickness or accidents that are not specifically excluded.',
          why: 'Limited policies cover only specific accidents or diseases. A comprehensive plan covers sickness or accidents that are not specifically excluded.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q49',
      'Which statement about fully insured plans and self-insurance is correct?',
      [
        {
          text: 'A fully insured plan is administered and guaranteed by an insurer, which assumes the medical-expense risk in return for the premium. A self-insuring company must have a formal program for identifying, evaluating, and funding its losses.',
          why: 'In return for the premium, the insurer assumes the risk of medical expenses that may or may not occur. A business that handles its own risks, using the law of large numbers and predictions of future losses, is self-insuring and must have a formal program for identifying, evaluating, and funding its losses.',
          correct: true,
        },
        {
          text: 'Fully insured means the employer handles its own risks, and self-insurance means an insurer guarantees the plan.',
          why: 'A fully insured plan is administered and guaranteed by an insurer. A business that handles its own risks is self-insuring and must have a formal program for funding its losses.',
        },
        {
          text: 'Self-insurance needs no funding program because future losses cannot be predicted.',
          why: 'Self-insuring uses the law of large numbers and predictions of future losses. A company that self-insures must have a formal program for identifying, evaluating, and funding its losses.',
        },
        {
          text: 'On a fully insured plan the insurer keeps the premium and does not assume medical-expense risk.',
          why: 'In return for the premium, the insurer on a fully insured plan assumes the risk of medical expenses that may or may not occur.',
        },
      ],
    ),
    question(
      'c8q50',
      'Under the Commissioner’s rules, who can be included as an employee of a single-employer group?',
      [
        {
          text: 'Only current workers. Owners, partners, retired employees, former employees, and directors are left out.',
          why: 'A single-employer group is formed by one employer for its employees. An employee can include the owner running the business, partners, retired employees, former employees, or directors of a corporation.',
        },
        {
          text: 'The owner running the business, partners, retired employees, former employees, or directors of a corporation.',
          why: 'A single-employer group is formed by one employer for its employees. An employee can include the owner running the business, partners, retired employees, former employees, or directors of a corporation.',
          correct: true,
        },
        {
          text: 'Only alumni or professional-association members who meet the 100-member and 2-year tests.',
          why: 'An association group, such as an alumni group or a professional group, normally must have at least 100 members, have been active for at least 2 years, have a constitution and by-laws, and hold meetings at least annually. A single-employer employee can include the owner, partners, retired or former employees, or directors of a corporation.',
        },
        {
          text: 'Any person over 65, whether or not that person works for the employer.',
          why: 'Medicare and Medicaid cover some disabled people and people over 65. A single-employer employee can include the owner running the business, partners, retired employees, former employees, or directors of a corporation.',
        },
      ],
    ),
  ],
  'c8-limited': [
    question(
      'c8q51',
      'What must a limited health contract specify?',
      [
        {
          text: 'Only the insured’s occupation, with the perils and amounts left unstated.',
          why: 'The contract must specify the type of accident or sickness, the limited perils, and the amounts. Limited health policies cover specific accidents or sickness.',
        },
        {
          text: 'That every sickness and every accident is covered, with no stated amounts.',
          why: 'Limited health policies cover specific accidents or sickness. The contract must specify the type of accident or sickness, the limited perils, and the amounts.',
        },
        {
          text: 'The type of accident or sickness, the limited perils, and the amounts.',
          why: 'The contract must specify the type of accident or sickness, the limited perils, and the amounts. Benefits may be paid as reimbursement or as indemnity.',
          correct: true,
        },
        {
          text: 'That benefits are paid only as reimbursement and never as indemnity.',
          why: 'Benefits may be paid as reimbursement or as indemnity. The contract must still specify the type of accident or sickness, the limited perils, and the amounts.',
        },
      ],
    ),
    question(
      'c8q52',
      'What must the first page of a limited policy plainly state?',
      [
        {
          text: 'That the policy pays for sickness on the same terms as accident.',
          why: 'Accident-only policies do not pay for sickness. By law, the first page must plainly state “THIS IS A LIMITED POLICY.”',
        },
        {
          text: 'That no peril is limited and no amount needs to be stated.',
          why: 'The contract must specify the limited perils and the amounts. The first page must plainly state “THIS IS A LIMITED POLICY.”',
        },
        {
          text: 'That the principal sum is paid for sickness.',
          why: 'The principal sum is paid for accidental death. The first page must plainly state “THIS IS A LIMITED POLICY.”',
        },
        {
          text: '“THIS IS A LIMITED POLICY.”',
          why: 'By law, the first page must plainly state “THIS IS A LIMITED POLICY.”',
          correct: true,
        },
      ],
    ),
    question(
      'c8q53',
      'What do accident-only policies cover?',
      [
        {
          text: 'Death, dismemberment, disability, or hospital and medical care resulting from an accident. They do not pay for sickness.',
          why: 'Accident-only policies cover death, dismemberment, disability, or hospital and medical care resulting from an accident. They do not pay for sickness.',
          correct: true,
        },
        {
          text: 'Sickness only, with accidental death excluded.',
          why: 'Accident-only policies do not pay for sickness. They cover death, dismemberment, disability, or hospital and medical care resulting from an accident.',
        },
        {
          text: 'Any sickness that begins after the policy is issued.',
          why: 'Accident-only policies do not pay for sickness. They cover death, dismemberment, disability, or hospital and medical care resulting from an accident.',
        },
        {
          text: 'Only the 50% benefit for one hand, with hospital care excluded.',
          why: 'Accident-only policies cover death, dismemberment, disability, or hospital and medical care resulting from an accident. A 50% payment for one hand or one foot is an accidental death and dismemberment benefit, not the whole accident-only policy.',
        },
      ],
    ),
    question(
      'c8q54',
      'How may accidental death and dismemberment be issued, and where is it most often found?',
      [
        {
          text: 'Only as a rider, and it is never part of group life or group health plans.',
          why: 'It can be a rider or a separate policy, and it is most often part of group life and group health plans.',
        },
        {
          text: 'As a rider or a separate policy, most often as part of group life and group health plans.',
          why: 'Accidental death and dismemberment can be a rider or a separate policy, and it is most often part of group life and group health plans. It pays only for accidental losses, so it is a pure form of accident insurance.',
          correct: true,
        },
        {
          text: 'Only as a separate policy, and it pays for sickness as well as accident.',
          why: 'It can be a rider or a separate policy. It pays only for accidental losses and is a pure form of accident insurance.',
        },
        {
          text: 'As a sickness benefit, and it is excluded from group life and group health plans.',
          why: 'It is most often part of group life and group health plans. It pays a lump sum if the insured dies from an accident as the policy defines it, or for loss of certain body parts caused by an accident.',
        },
      ],
    ),
    question(
      'c8q55',
      'What is usually paid for loss of sight in both eyes or of two or more limbs, and what may be paid for one hand or one foot?',
      [
        {
          text: '50% of the principal sum for both eyes or two or more limbs, and the full principal sum for one hand or one foot.',
          why: 'The policy usually pays the full principal sum for loss of sight in both eyes or of two or more limbs, and it may pay 50% for the loss of one hand or one foot.',
        },
        {
          text: 'No benefit for two limbs, and double indemnity for one hand.',
          why: 'Some policies pay double or triple indemnity for accidental death. The full principal sum is usually paid for both eyes or two or more limbs, and 50% may be paid for one hand or one foot.',
        },
        {
          text: 'The full principal sum for loss of sight in both eyes or of two or more limbs, and it may pay 50% for the loss of one hand or one foot.',
          why: 'The policy usually pays the full principal sum for loss of sight in both eyes or of two or more limbs, and it may pay 50% for the loss of one hand or one foot. Loss of sight or dismemberment pays a percentage of the principal sum, the capital sum, which varies with the severity of the injury.',
          correct: true,
        },
        {
          text: 'The principal sum for sickness, and 50% if death occurs after 90 days.',
          why: 'The principal sum is paid for accidental death, and most policies pay that benefit if the death occurs within 90 days. Dismemberment pays a percentage of the principal sum that varies with the severity of the injury.',
        },
      ],
    ),
    question(
      'c8q56',
      'Which statement about the principal sum is correct?',
      [
        {
          text: 'The principal sum is paid for sickness and is usually less than the face amount.',
          why: 'The principal sum is paid for accidental death, and that amount is usually equal to the face amount.',
        },
        {
          text: 'The principal sum is paid for loss of one hand and is usually triple the face amount.',
          why: 'Some policies pay triple indemnity for accidental death. The principal sum is paid for accidental death and is usually equal to the face amount, while loss of one hand may pay 50%.',
        },
        {
          text: 'The principal sum is paid only for dismemberment and is not tied to the face amount.',
          why: 'The principal sum is paid for accidental death and is usually equal to the face amount. Loss of sight or dismemberment pays a percentage of that principal sum, the capital sum.',
        },
        {
          text: 'It is paid for accidental death and is usually equal to the face amount.',
          why: 'The principal sum is paid for accidental death, and that amount is usually equal to the face amount. Some policies pay double or triple indemnity for accidental death.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q57',
      'When do most policies pay the accidental death benefit?',
      [
        {
          text: 'If the death is caused by the accident and occurs within 90 days.',
          why: 'Most policies pay the accidental death benefit if the death is caused by the accident and occurs within 90 days.',
          correct: true,
        },
        {
          text: 'If the death is caused by sickness and occurs within 90 days.',
          why: 'The benefit responds to accidental death. Most policies pay if the death is caused by the accident and occurs within 90 days.',
        },
        {
          text: 'Only if the death occurs after 90 days.',
          why: 'Most policies pay the accidental death benefit if the death is caused by the accident and occurs within 90 days.',
        },
        {
          text: 'Only when indemnity is tripled, and only for sickness.',
          why: 'Some policies pay double or triple indemnity for accidental death. Most policies pay the accidental death benefit if the death is caused by the accident and occurs within 90 days.',
        },
      ],
    ),
  ],
  'c8-specialty': [
    question(
      'c8q58',
      'When does a travel accident policy pay for a fare-paying passenger on a common carrier?',
      [
        {
          text: 'For a death or injury that occurs after travel has ended.',
          why: 'A travel accident policy covers death or injury to a fare-paying passenger on a common carrier. Benefits are paid only if the loss occurs during the time of travel.',
        },
        {
          text: 'Only if the loss occurs during the time of travel.',
          why: 'A travel accident policy covers death or injury to a fare-paying passenger on a common carrier. Benefits are paid only if the loss occurs during the time of travel.',
          correct: true,
        },
        {
          text: 'For sickness of a person who did not pay a fare.',
          why: 'Coverage is for death or injury to a fare-paying passenger on a common carrier, and benefits are paid only if the loss occurs during the time of travel.',
        },
        {
          text: 'For any injury to a person who is not on a common carrier.',
          why: 'The policy covers a fare-paying passenger on a common carrier, and benefits are paid only if the loss occurs during the time of travel.',
        },
      ],
    ),
    question(
      'c8q59',
      'How does a dread disease, or limited risk, policy usually pay?',
      [
        {
          text: 'As full reimbursement of every expense from any illness.',
          why: 'A dread disease policy pays a variety of benefits for a specific disease, such as cancer or heart disease. Benefits are usually a scheduled, fixed-dollar indemnity for specified events or procedures.',
        },
        {
          text: 'As loan payments to a creditor until the borrower returns to work.',
          why: 'Loan payments until the borrower can return to work describe credit disability. Dread disease benefits are usually a scheduled, fixed-dollar indemnity for specified events or procedures, such as hospital confinement or chemotherapy.',
        },
        {
          text: 'As a scheduled, fixed-dollar indemnity for specified events or procedures, such as hospital confinement or chemotherapy.',
          why: 'A dread disease, or limited risk, policy pays a variety of benefits for a specific disease, such as cancer or heart disease. Benefits are usually a scheduled, fixed-dollar indemnity for specified events or procedures.',
          correct: true,
        },
        {
          text: 'As a payment for any disease, based on the size of the hospital bill.',
          why: 'Hospital indemnity depends on days confined and is unrelated to the medical expense. A dread disease benefit is usually a scheduled, fixed-dollar indemnity for a specific disease and specified events.',
        },
      ],
    ),
    question(
      'c8q60',
      'What controls the payment under a hospital indemnity policy?',
      [
        {
          text: 'The size of the medical expense incurred.',
          why: 'Payment is unrelated to the medical expense incurred. It depends only on the number of days the insured is confined to a hospital.',
        },
        {
          text: 'A drug copayment such as $10 and a 30-day supply.',
          why: 'A copayment such as $10 and a quantity limit such as a 30-day supply describe prescription drug coverage. Hospital indemnity depends only on the number of days confined.',
        },
        {
          text: 'Whether the loss occurs during travel on a common carrier.',
          why: 'Travel accident benefits are paid only during the time of travel. Hospital indemnity depends only on the number of days the insured is confined.',
        },
        {
          text: 'Only the number of days confined, paid as a specific daily, weekly, or monthly amount.',
          why: 'A hospital indemnity, or hospital income, policy pays a specific amount daily, weekly, or monthly while the insured is confined to a hospital. Payment is unrelated to the medical expense incurred, depends only on the number of days confined, and can also be called a hospital fixed-rate policy.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q61',
      'Who is issued credit disability coverage, and what is paid during disability?',
      [
        {
          text: 'It is issued only to a person in debt to a specific creditor, and payments are made on the loan until the borrower can return to work.',
          why: 'Credit disability is issued only to a person in debt to a specific creditor. If the borrower is disabled, payments are made on the loan until the borrower can return to work.',
          correct: true,
        },
        {
          text: 'It is issued to any hospital patient, and it pays the hospital bill.',
          why: 'Hospital indemnity depends on days of confinement and is unrelated to the medical expense. Credit disability is issued only to a debtor of a specific creditor and pays the loan until the borrower can return to work.',
        },
        {
          text: 'It is issued to a sports team for any activity the team chooses.',
          why: 'Sports teams are an example of people a blanket policy may cover during a particular activity. Credit disability is issued only to a person in debt to a specific creditor.',
        },
        {
          text: 'It is issued to every fare-paying passenger, and payments end when travel ends.',
          why: 'A travel accident policy covers a fare-paying passenger during the time of travel. Credit disability pays the loan of a disabled borrower until that borrower can return to work.',
        },
      ],
    ),
    question(
      'c8q62',
      'How are people covered under a blanket policy?',
      [
        {
          text: 'Each person is named on an application and receives a certificate of insurance.',
          why: 'Unlike group health insurance, individuals under a blanket policy are covered automatically and do not receive a certificate of insurance. Names often are not known because people come and go.',
        },
        {
          text: 'They are covered automatically and do not receive a certificate of insurance.',
          why: 'Unlike group health insurance, individuals are covered automatically and do not receive a certificate of insurance. Names often are not known because people come and go.',
          correct: true,
        },
        {
          text: 'Coverage applies at all times, even when the person is outside the covered activity.',
          why: 'A blanket policy covers members of a particular group while they participate in a particular activity, such as students, campers, passengers on a common carrier, or sports teams.',
        },
        {
          text: 'Names must be listed in advance because membership cannot change.',
          why: 'Names often are not known because people come and go. Individuals are covered automatically and do not receive a certificate of insurance.',
        },
      ],
    ),
    question(
      'c8q63',
      'On what basis are blanket policies commonly written and paid?',
      [
        {
          text: 'On a sickness-only basis.',
          why: 'Blanket policies are commonly written and pay on an accident-only basis.',
        },
        {
          text: 'On a basis that pays every sickness the group chooses to include.',
          why: 'Blanket policies are commonly written and pay on an accident-only basis.',
        },
        {
          text: 'On an accident-only basis.',
          why: 'Blanket policies are commonly written and pay on an accident-only basis.',
          correct: true,
        },
        {
          text: 'On a credit-disability basis for every member of the group.',
          why: 'Credit disability is issued only to a person in debt to a specific creditor. Blanket policies commonly pay on an accident-only basis.',
        },
      ],
    ),
    question(
      'c8q64',
      'How does an optional group prescription drug benefit usually share the cost?',
      [
        {
          text: 'The insurer pays a $10 copayment, and the insured pays the balance with no quantity limit.',
          why: 'The insured pays a copayment, such as $10, and the insurer pays the balance. Quantities are limited, such as a 30-day supply.',
        },
        {
          text: 'The insured pays the full cost, and the insurer pays nothing.',
          why: 'The insured pays a copayment, such as $10, and the insurer pays the balance. Quantities are limited, such as a 30-day supply.',
        },
        {
          text: 'The plan pays any quantity and charges no copayment.',
          why: 'Prescription drug coverage is usually an optional group medical benefit. The insured pays a copayment, such as $10, and quantities are limited, such as a 30-day supply.',
        },
        {
          text: 'The insured pays a copayment, such as $10, the insurer pays the balance, and quantities are limited, such as a 30-day supply.',
          why: 'Prescription drug coverage is usually an optional group medical benefit. The insured pays a copayment, such as $10, and the insurer pays the balance, with quantities limited, such as a 30-day supply.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q65',
      'Which vision benefit does the Affordable Care Act make mandatory?',
      [
        {
          text: 'Pediatric vision benefits.',
          why: 'Under the Affordable Care Act, pediatric vision benefits are mandatory. Some employers cover eye examinations and eyeglasses, or hearing aids, on a limited basis.',
          correct: true,
        },
        {
          text: 'Pediatric vision is optional and may be omitted.',
          why: 'Under the Affordable Care Act, pediatric vision benefits are mandatory.',
        },
        {
          text: 'Hearing aids are mandatory, and pediatric vision is excluded.',
          why: 'Some employers cover hearing aids on a limited basis. Pediatric vision benefits are mandatory under the Affordable Care Act.',
        },
        {
          text: 'Adult exams and glasses with no time limit, and pediatric vision is excluded.',
          why: 'Most vision plans restrict benefits to one exam and one pair of glasses in any 12-month period. Pediatric vision benefits are mandatory under the Affordable Care Act.',
        },
      ],
    ),
    question(
      'c8q66',
      'How do most vision plans restrict exams and glasses?',
      [
        {
          text: 'One exam and one pair of glasses in any 3-year period.',
          why: 'Dental x-rays follow the plan’s schedule. Most vision plans allow one exam and one pair of glasses in any 12-month period.',
        },
        {
          text: 'One exam and one pair of glasses in any 12-month period.',
          why: 'Most vision plans restrict benefits to one exam and one pair of glasses in any 12-month period.',
          correct: true,
        },
        {
          text: 'Exams and glasses with no time limit, plus mandatory hearing aids.',
          why: 'Most vision plans restrict benefits to one exam and one pair of glasses in any 12-month period. Some employers cover hearing aids on a limited basis.',
        },
        {
          text: 'One exam during a 12-month period, with glasses excluded.',
          why: 'Most vision plans cover one exam and one pair of glasses in any 12-month period.',
        },
      ],
    ),
    question(
      'c8q67',
      'Why is routine and preventive dental maintenance written without a deductible and copayment?',
      [
        {
          text: 'So that care can use the orthodontic deductible.',
          why: 'Orthodontic care, if included, has its own maximum and its own deductible. The absence of a deductible and copayment on routine and preventive care is meant to encourage prevention.',
        },
        {
          text: 'Because preventive care has no annual maximum.',
          why: 'Routine and preventive maintenance is covered up to an annual maximum without a deductible or copayment. Leaving out the deductible and copayment is meant to encourage prevention.',
        },
        {
          text: 'The absence of a deductible and copayment is meant to encourage prevention.',
          why: 'Routine and preventive maintenance is covered up to an annual maximum without a deductible or copayment. That absence is meant to encourage prevention.',
          correct: true,
        },
        {
          text: 'Because exams and cleaning are covered only once every 3 years.',
          why: 'Exams and cleaning are usually included twice a year, about every 6 months. X-rays follow the plan’s schedule. Preventive care omits the deductible and copayment to encourage prevention.',
        },
      ],
    ),
    question(
      'c8q68',
      'How often does routine dental coverage usually include exams, cleaning, and a full-mouth x-ray?',
      [
        {
          text: 'Exams and cleaning once every 3 years, and x-rays once a year.',
          why: 'Exams and cleaning are usually included twice a year, about every 6 months. X-rays follow the plan’s schedule.',
        },
        {
          text: 'Exams, cleaning, and x-rays with no frequency limit.',
          why: 'Exams and cleaning are usually included twice a year, about every 6 months. X-rays follow the plan’s schedule.',
        },
        {
          text: 'X-rays once a year, with exams and cleaning excluded.',
          why: 'Routine coverage usually includes an exam and a cleaning twice a year, about every 6 months. X-rays follow the plan’s schedule.',
        },
        {
          text: 'An exam and a cleaning twice a year, about every 6 months. X-rays follow the plan’s schedule.',
          why: 'Routine and preventive maintenance usually includes an exam and a cleaning twice a year, about every 6 months. X-rays follow the plan’s schedule. That care is covered up to an annual maximum without a deductible or copayment.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q69',
      'What cost sharing applies to routine and major restorative dental care?',
      [
        {
          text: 'Coverage up to a specific maximum, subject to an annual deductible per insured family member and coinsurance.',
          why: 'Routine and major restorative care, including cavities, oral surgery, bridges, and dentures, is covered up to a specific maximum, subject to an annual deductible per insured family member and coinsurance.',
          correct: true,
        },
        {
          text: 'Coverage up to an annual maximum with no deductible and no copayment.',
          why: 'The absence of a deductible and copayment applies to routine and preventive maintenance, to encourage prevention. Restorative care is subject to an annual deductible per insured family member and coinsurance, up to a specific maximum.',
        },
        {
          text: 'No maximum and no deductible for bridges, dentures, and oral surgery.',
          why: 'Restorative care, including cavities, oral surgery, bridges, and dentures, is covered up to a specific maximum and is subject to an annual deductible per insured family member and coinsurance.',
        },
        {
          text: 'One restorative service and one appliance in any 12-month period.',
          why: 'One exam and one pair of glasses in any 12-month period is a vision-plan limit. Restorative dental care has a specific maximum, an annual deductible per insured family member, and coinsurance.',
        },
      ],
    ),
    question(
      'c8q70',
      'If orthodontic care is included, which maximum and deductible does it use?',
      [
        {
          text: 'The restorative maximum and the annual deductible charged per family member for bridges and dentures.',
          why: 'Routine and major restorative care has a specific maximum, an annual deductible per insured family member, and coinsurance. Orthodontic care, if included, has its own maximum and its own deductible.',
        },
        {
          text: 'Its own maximum and its own deductible.',
          why: 'Orthodontic care, if included, has its own maximum and its own deductible.',
          correct: true,
        },
        {
          text: 'No maximum and no deductible, because orthodontics is treated as preventive care.',
          why: 'The absence of a deductible and copayment applies to routine and preventive maintenance, to encourage prevention. Orthodontic care, if included, has its own maximum and its own deductible.',
        },
        {
          text: 'One exam and one appliance in any 12-month period.',
          why: 'That 12-month limit is how most vision plans restrict an exam and one pair of glasses. Orthodontic care, if included, has its own maximum and its own deductible.',
        },
      ],
    ),
  ],
  'c8-exclusions': [
    question(
      'c8q71',
      'Which war-related loss is typically excluded from individual and group medical expense policies?',
      [
        {
          text: 'Treatment required to correct a condition caused by an accident.',
          why: 'Treatment required to correct a condition from an accident or a birth defect, or treatment that is medically necessary, may be covered even though elective cosmetic surgery is excluded. War or act of war injuries or sicknesses are typical exclusions, and active military duty may also be excluded.',
        },
        {
          text: 'Medically necessary treatment that is not elective cosmetic surgery.',
          why: 'Treatment that is medically necessary may be covered. War or act of war injuries or sicknesses are typically excluded, and active military duty may also be excluded.',
        },
        {
          text: 'War or act of war injuries or sicknesses. Active military duty may also be excluded.',
          why: 'Individual and group medical expense policies typically do not cover war or act of war injuries or sicknesses. Active military duty may also be excluded.',
          correct: true,
        },
        {
          text: 'Care for a birth defect, which is excluded in every case.',
          why: 'Treatment required to correct a condition from a birth defect may be covered. War or act of war injuries or sicknesses are typically excluded, and active military duty may also be excluded.',
        },
      ],
    ),
    question(
      'c8q72',
      'How are injuries from drug or alcohol intoxication typically treated?',
      [
        {
          text: 'They are covered even when no physician administered the drug.',
          why: 'Injuries resulting from drug or alcohol intoxication are typically excluded unless the drug was administered by a physician.',
        },
        {
          text: 'They are covered only when the insured was committing an illegal act.',
          why: 'Injuries while committing an illegal act are a separate typical exclusion. Intoxication injuries are excluded unless the drug was administered by a physician.',
        },
        {
          text: 'They are excluded only when a physician administered the drug.',
          why: 'The intoxication exclusion applies unless the drug was administered by a physician. A physician-administered drug is the situation the exclusion does not reach.',
        },
        {
          text: 'They are excluded unless the drug was administered by a physician.',
          why: 'Injuries resulting from drug or alcohol intoxication are typically excluded unless the drug was administered by a physician.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q73',
      'Which expenses are typically excluded because another program may apply?',
      [
        {
          text: 'Conditions covered by workers compensation, and expenses paid or eligible for payment under Medicare or another federal, state, or local medical expense program.',
          why: 'Policies typically exclude conditions covered by workers compensation when they are covered under workers compensation laws or other legislation. They also exclude expenses paid or eligible for payment under Medicare or another federal, state, or local medical expense program.',
          correct: true,
        },
        {
          text: 'Every illness, whether or not workers compensation or Medicare applies.',
          why: 'The other-program exclusions are conditions covered by workers compensation and expenses paid or eligible under Medicare or another federal, state, or local medical expense program.',
        },
        {
          text: 'War injuries only. Conditions covered by workers compensation stay covered.',
          why: 'War or act of war injuries or sicknesses are a separate exclusion. Conditions covered by workers compensation are also typically excluded, as are expenses eligible under Medicare or another government medical expense program.',
        },
        {
          text: 'Elective cosmetic surgery that is medically necessary to correct a birth defect.',
          why: 'Elective cosmetic surgery is excluded, but treatment required for a birth defect, or treatment that is medically necessary, may be covered. Workers compensation conditions and Medicare or other government medical expenses are the other-program exclusions.',
        },
      ],
    ),
    question(
      'c8q74',
      'Which of these is a typical medical expense exclusion?',
      [
        {
          text: 'Treatment required to correct a birth defect.',
          why: 'Treatment required to correct a condition from an accident or a birth defect may be covered. Intentionally self-inflicted injuries, experimental or investigative procedures, and injuries while committing an illegal act are typical exclusions.',
        },
        {
          text: 'Intentionally self-inflicted injuries, experimental or investigative procedures, and injuries while committing an illegal act.',
          why: 'Individual and group medical expense policies typically do not cover intentionally self-inflicted injuries, experimental or investigative procedures, or injuries while committing an illegal act.',
          correct: true,
        },
        {
          text: 'A drug that a physician administered.',
          why: 'An intoxication injury is excluded unless the drug was administered by a physician. Self-inflicted injuries, experimental or investigative procedures, and injuries during an illegal act are typical exclusions.',
        },
        {
          text: 'An accidental injury that the insured did not inflict intentionally.',
          why: 'Intentionally self-inflicted injuries are a typical exclusion. Experimental or investigative procedures and injuries while committing an illegal act are excluded as well.',
        },
      ],
    ),
  ],
  'c8-marketing': [
    question(
      'c8q75',
      'How may an advertisement present a limitation, exception, or reduction?',
      [
        {
          text: 'It may be worded as a positive feature if the headline is prominent.',
          why: 'Advertising must be accurate and must not misrepresent the facts. A limitation, exception, or reduction may not be worded as a positive feature.',
        },
        {
          text: 'Calling a waiting period a benefit-builder is acceptable.',
          why: 'Calling a waiting period a benefit-builder is an example of wording a limitation as a positive feature, which is not allowed.',
        },
        {
          text: 'It may not be worded as a positive feature.',
          why: 'A limitation, exception, or reduction may not be worded as a positive feature. Calling a waiting period a benefit-builder is an example of what the rule forbids.',
          correct: true,
        },
        {
          text: 'It may be left out when the policy covers only one disease.',
          why: 'An advertisement for a policy that covers only one disease, or a list of specified diseases, cannot imply broader coverage and must state the limited nature of the policy. A limitation may not be worded as a positive feature.',
        },
      ],
    ),
    question(
      'c8q76',
      'What must an advertisement do when a policy covers only one disease or a list of specified diseases?',
      [
        {
          text: 'It may imply broader coverage if the premium is described with words such as minimum.',
          why: 'The advertisement cannot imply broader coverage. It must prominently state the limited nature of the policy.',
        },
        {
          text: 'It must avoid any statement that the policy is limited.',
          why: 'The advertisement must prominently state the limited nature of the policy, in words such as “THIS IS A LIMITED POLICY,” “THIS IS A CANCER-ONLY POLICY,” or “THIS IS AN AUTOMOBILE ACCIDENT-ONLY POLICY.”',
        },
        {
          text: 'It must describe the benefit with words such as full, complete, and unlimited.',
          why: 'The words “all,” “full,” “complete,” “unlimited,” or similar words may not be used in a way that exaggerates a benefit. A specified-disease advertisement must prominently state the limited nature of the policy.',
        },
        {
          text: 'It must prominently state the limited nature of the policy.',
          why: 'An advertisement for only one disease, or a list of specified diseases, cannot imply broader coverage. It must prominently state the limited nature of the policy, in words such as “THIS IS A LIMITED POLICY,” “THIS IS A CANCER-ONLY POLICY,” or “THIS IS AN AUTOMOBILE ACCIDENT-ONLY POLICY.”',
          correct: true,
        },
      ],
    ),
    question(
      'c8q77',
      'Unless the words are true, which words may not describe an exception or reduction?',
      [
        {
          text: '“Only,” “just,” “merely,” “minimum,” or similar words.',
          why: 'Unless the words are true, advertisements may not use “only,” “just,” “merely,” “minimum,” or similar words to describe exceptions or reductions.',
          correct: true,
        },
        {
          text: 'The words life insurance or annuity in the title.',
          why: 'A life insurance advertisement needs the words life insurance or annuity, or other clear language, in the title. Unless they are true, “only,” “just,” “merely,” “minimum,” or similar words may not describe exceptions or reductions.',
        },
        {
          text: 'The name of the insurer.',
          why: 'The insurer must be clearly identified. Unless they are true, “only,” “just,” “merely,” “minimum,” or similar words may not describe exceptions or reductions.',
        },
        {
          text: 'A statement of the source of statistics.',
          why: 'The source of any statistics must be given. The words barred for exceptions or reductions, unless true, are “only,” “just,” “merely,” “minimum,” or similar words.',
        },
      ],
    ),
    question(
      'c8q78',
      'Which words may not describe a benefit that is conditional on hospital confinement?',
      [
        {
          text: '“THIS IS A LIMITED POLICY.”',
          why: 'That phrase is a way to state the limited nature of a policy. “Extra pay,” “extra cash,” “extra income,” or similar words may not be used for a benefit conditional on hospital confinement.',
        },
        {
          text: '“Extra pay,” “extra cash,” “extra income,” or similar words.',
          why: 'Advertisements may not use “extra pay,” “extra cash,” “extra income,” or similar words for a benefit that is conditional on hospital confinement.',
          correct: true,
        },
        {
          text: '“THIS IS A CANCER-ONLY POLICY.”',
          why: 'That phrase prominently states a limited policy. The phrases barred for a benefit conditional on hospital confinement are “extra pay,” “extra cash,” “extra income,” or similar words.',
        },
        {
          text: '“THIS IS AN AUTOMOBILE ACCIDENT-ONLY POLICY.”',
          why: 'That phrase states the limited nature of a policy. “Extra pay,” “extra cash,” and “extra income” may not describe a benefit conditional on hospital confinement.',
        },
      ],
    ),
    question(
      'c8q79',
      'How may the words “all,” “full,” “complete,” and “unlimited” not be used?',
      [
        {
          text: 'They may not appear when an advertisement states that a policy is limited.',
          why: 'A limited policy must be prominently described as limited. “All,” “full,” “complete,” “unlimited,” or similar words may not be used in a way that exaggerates a benefit.',
        },
        {
          text: 'They may not be used to identify the insurer.',
          why: 'The insurer must be clearly identified. Those words may not be used in a way that exaggerates a benefit.',
        },
        {
          text: 'They may not be used in a way that exaggerates a benefit.',
          why: 'Advertisements may not use “all,” “full,” “complete,” “unlimited,” or similar words in a way that exaggerates a benefit.',
          correct: true,
        },
        {
          text: 'They are required in every advertisement so the benefit sounds complete.',
          why: 'Using “all,” “full,” “complete,” “unlimited,” or similar words to exaggerate a benefit is prohibited. Advertising must be accurate and must not misrepresent the facts.',
        },
      ],
    ),
    question(
      'c8q80',
      'What must a life insurance advertisement in this state show about the insurer and the title?',
      [
        {
          text: 'The word “nonmedical,” with no statement about health questions.',
          why: 'If an ad uses “nonmedical” or “no medical examination required,” it needs a clear statement that issue may depend on health questions. The insurer must be clearly identified, and the title needs life insurance, annuity, or other clear language.',
        },
        {
          text: 'A claim that the policies are guaranteed by the Insurance Guaranty Association.',
          why: 'It is an unfair trade practice to say that an insurer’s policies are guaranteed by the existence of the Insurance Guaranty Association. The insurer must be clearly identified, and the title needs life insurance, annuity, or other clear language.',
        },
        {
          text: 'The words “extra cash” in place of life insurance or annuity.',
          why: '“Extra cash” is not the required title language. The title needs the words life insurance or annuity or other clear language, and the insurer must be clearly identified.',
        },
        {
          text: 'The insurer must be clearly identified, and the title must use the words life insurance or annuity or other clear language.',
          why: 'Disclosure rules require the insurer to be clearly identified, the words life insurance or annuity or other clear language in the title, and the source of any statistics.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q81',
      'What must be stated if an advertisement uses “nonmedical” or “no medical examination required”?',
      [
        {
          text: 'A clear statement that issue may depend on health questions.',
          why: 'If the ad uses “nonmedical” or “no medical examination required,” there must be a clear statement that issue may depend on health questions.',
          correct: true,
        },
        {
          text: 'A promise that issue cannot depend on health.',
          why: 'The required statement is that issue may depend on health questions when the ad says “nonmedical” or “no medical examination required.”',
        },
        {
          text: 'Only the amount of noncommission compensation.',
          why: 'Noncommission compensation has its own disclosure rules. A “nonmedical” advertisement must clearly state that issue may depend on health questions.',
        },
        {
          text: 'That advertising files may be discarded as soon as the ad is used.',
          why: 'Insurers must keep advertising files for 3 years after use. The nonmedical wording also requires a clear statement that issue may depend on health questions.',
        },
      ],
    ),
    question(
      'c8q82',
      'What standard applies to a testimonial, and what must a paid endorsement do?',
      [
        {
          text: 'A testimonial may be paraphrased, and a paid endorsement stays hidden.',
          why: 'Testimonials must be genuine, accurately reproduced, and the author’s current opinion. A paid endorsement must say so.',
        },
        {
          text: 'The testimonial must be genuine, accurately reproduced, and the author’s current opinion, and a paid endorsement must say so.',
          why: 'Testimonials must be genuine, accurately reproduced, and the author’s current opinion. A paid endorsement must say so.',
          correct: true,
        },
        {
          text: 'An outdated opinion may be used if payment for it is undisclosed.',
          why: 'The testimonial must be the author’s current opinion and must be accurately reproduced. A paid endorsement must say so.',
        },
        {
          text: 'Testimonials are forbidden even when they are the author’s current opinion.',
          why: 'Testimonials are permitted when they are genuine, accurately reproduced, and the author’s current opinion. A paid endorsement must say so.',
        },
      ],
    ),
    question(
      'c8q83',
      'How long must insurers keep advertising files?',
      [
        {
          text: 'Only until the advertisement is used, and not after that use.',
          why: 'Insurers must keep advertising files for 3 years after use.',
        },
        {
          text: 'Only while a sales presentation is happening.',
          why: 'Sales presentations must be accurate and complete, and insurers must keep advertising files for 3 years after use.',
        },
        {
          text: 'For 3 years after use.',
          why: 'Insurers must keep advertising files for 3 years after use.',
          correct: true,
        },
        {
          text: 'For as long as the insurer chooses, with no period tied to use.',
          why: 'Insurers must keep advertising files for 3 years after use.',
        },
      ],
    ),
    question(
      'c8q84',
      'What statement about the Insurance Guaranty Association is an unfair trade practice?',
      [
        {
          text: 'Clearly identifying the insurer in the advertisement.',
          why: 'The insurer must be clearly identified. It is an unfair trade practice to say that an insurer’s policies are guaranteed by the existence of the Insurance Guaranty Association.',
        },
        {
          text: 'Stating the source of statistics.',
          why: 'The source of any statistics is required. Saying that an insurer’s policies are guaranteed by the existence of the Insurance Guaranty Association is an unfair trade practice.',
        },
        {
          text: 'Disclosing that an endorsement was paid.',
          why: 'A paid endorsement must say so. It is an unfair trade practice to say that an insurer’s policies are guaranteed by the existence of the Insurance Guaranty Association.',
        },
        {
          text: 'Saying that an insurer’s policies are guaranteed by the existence of the Insurance Guaranty Association.',
          why: 'It is an unfair trade practice to say that an insurer’s policies are guaranteed by the existence of the Insurance Guaranty Association.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q85',
      'Which items are sales materials for accident and health insurance?',
      [
        {
          text: 'Promotional materials, applications, replacement forms, an outline of coverage, and any other form used in soliciting or selling.',
          why: 'Sales materials include promotional materials, applications, replacement forms, an outline of coverage, and any other form used in soliciting or selling accident and health insurance. Sales presentations must be accurate and complete.',
          correct: true,
        },
        {
          text: 'Only the policy jacket after issue, excluding applications and replacement forms.',
          why: 'Applications and replacement forms are sales materials, along with promotional materials, an outline of coverage, and any other form used in soliciting or selling.',
        },
        {
          text: 'Only advertisements, excluding the outline of coverage.',
          why: 'An outline of coverage is a sales material, together with promotional materials, applications, replacement forms, and any other form used in soliciting or selling.',
        },
        {
          text: 'Notes that are never used in soliciting or selling.',
          why: 'Sales materials are forms used in soliciting or selling accident and health insurance, including promotional materials, applications, replacement forms, and an outline of coverage.',
        },
      ],
    ),
    question(
      'c8q86',
      'When must an outline of coverage be delivered?',
      [
        {
          text: 'Only when a claim is filed.',
          why: 'An outline of coverage must be delivered at application or when the policy is delivered. Its purpose is full and fair disclosure.',
        },
        {
          text: 'At application or when the policy is delivered.',
          why: 'An outline of coverage must be delivered at application or when the policy is delivered. Its purpose is full and fair disclosure.',
          correct: true,
        },
        {
          text: 'For 3 years after an advertisement is used, and not at application.',
          why: 'Keeping advertising files for 3 years after use is the file rule. The outline of coverage must be delivered at application or when the policy is delivered.',
        },
        {
          text: 'Only after noncommission compensation is collected.',
          why: 'Noncommission compensation requires a disclosure given before the service is performed. The outline of coverage is delivered at application or when the policy is delivered.',
        },
      ],
    ),
    question(
      'c8q87',
      'Why do direct response sales not require an outline of coverage at application?',
      [
        {
          text: 'Because direct response policies need no disclosure at any time.',
          why: 'The purpose of the outline is full and fair disclosure. Direct response sales do not require it at application because the insurer has no opportunity to provide it then.',
        },
        {
          text: 'Because the outline is required only for life insurance advertisements.',
          why: 'The outline of coverage is an accident and health sales material. Direct response sales omit it at application because the insurer has no opportunity to provide it then.',
        },
        {
          text: 'Because the insurer has no opportunity to provide it then.',
          why: 'Direct response sales do not require the outline of coverage at application, because the insurer has no opportunity to provide it then. Its purpose remains full and fair disclosure.',
          correct: true,
        },
        {
          text: 'Because sales presentations need not be accurate or complete.',
          why: 'Sales presentations must be accurate and complete. Direct response sales skip the outline at application because the insurer has no opportunity to provide it then.',
        },
      ],
    ),
    question(
      'c8q88',
      'When may a licensee receive noncommission compensation from an insured or purchaser?',
      [
        {
          text: 'At any time, with no written disclosure.',
          why: 'A separate written disclosure must include the insured’s signature, specify the amount or extent, and be given before the service is performed.',
        },
        {
          text: 'After the service is performed, if the amount is never specified.',
          why: 'The disclosure must specify the amount or extent and be given before the service is performed. The compensation must also be limited to reasonable expenses and applied uniformly.',
        },
        {
          text: 'Only from the insurer, and never from the insured or purchaser.',
          why: 'A licensee may receive noncommission compensation from an insured or purchaser when the written disclosure, signature, amount, and timing rules are met. The compensation must be limited to reasonable expenses and applied uniformly.',
        },
        {
          text: 'Only when a separate written disclosure includes the insured’s signature, specifies the amount or extent, and is given before the service is performed.',
          why: 'Those conditions are required, and the compensation must be limited to reasonable expenses and applied uniformly. A producer acting for the insured must have agreed on the noncommission compensation and must disclose any other compensation that accrues from the transaction.',
          correct: true,
        },
      ],
    ),
  ],
  'c8-field': [
    question(
      'c8q89',
      'Where does field underwriting matter more, and what is its purpose?',
      [
        {
          text: 'It matters more in health insurance than in life insurance, and its purpose is to minimize adverse selection.',
          why: 'Field underwriting matters more in health insurance than in life insurance. Its purpose is to minimize adverse selection.',
          correct: true,
        },
        {
          text: 'It matters more in life insurance than in health insurance, and its purpose is to increase adverse selection.',
          why: 'Field underwriting matters more in health insurance than in life insurance, and its purpose is to minimize adverse selection.',
        },
        {
          text: 'It matters equally in both lines, and its purpose is to accept every applicant.',
          why: 'Field underwriting matters more in health insurance than in life insurance. Its purpose is to minimize adverse selection.',
        },
        {
          text: 'It replaces the application, so answers need not be recorded.',
          why: 'The agent must ask questions clearly and record the answers accurately. Field underwriting matters more in health insurance than in life insurance, and its purpose is to minimize adverse selection.',
        },
      ],
    ),
    question(
      'c8q90',
      'How does this section describe adverse selection?',
      [
        {
          text: 'The people least likely to have claims are the people most likely to seek insurance.',
          why: 'Adverse selection means the people most likely to have claims are the people most likely to seek insurance.',
        },
        {
          text: 'The people most likely to have claims are the people most likely to seek insurance.',
          why: 'Field underwriting aims to minimize adverse selection, which means the people most likely to have claims are the people most likely to seek insurance.',
          correct: true,
        },
        {
          text: 'Adverse selection is avoided because the home-office underwriter meets every applicant.',
          why: 'The agent, not the home-office underwriter, meets the applicant. Adverse selection means the people most likely to have claims are the people most likely to seek insurance.',
        },
        {
          text: 'Adverse selection means malingering after a claim is paid.',
          why: 'Moral hazard matters because of malingering. Adverse selection means the people most likely to have claims are the people most likely to seek insurance.',
        },
      ],
    ),
    question(
      'c8q91',
      'Why does moral hazard matter in health field underwriting, and who meets the applicant?',
      [
        {
          text: 'Moral hazard matters because of investment risk, and the home-office underwriter meets the applicant.',
          why: 'Moral hazard matters because of malingering, and the agent, not the home-office underwriter, meets the applicant.',
        },
        {
          text: 'Moral hazard does not matter, and no one meets the applicant.',
          why: 'Moral hazard matters because of malingering. The agent, not the home-office underwriter, meets the applicant.',
        },
        {
          text: 'Moral hazard matters because of malingering, and the agent, not the home-office underwriter, meets the applicant.',
          why: 'Moral hazard matters because of malingering, and the agent, not the home-office underwriter, meets the applicant.',
          correct: true,
        },
        {
          text: 'Moral hazard matters because the waiver asks every health question, and a regulator meets the applicant.',
          why: 'The waiver cannot include health-status questions other than pregnancy. Moral hazard matters because of malingering, and the agent meets the applicant.',
        },
      ],
    ),
    question(
      'c8q92',
      'What must the agent do when questioning an applicant and screening the risk?',
      [
        {
          text: 'Ask questions vaguely and leave the answers blank.',
          why: 'The agent must ask questions clearly and record the answers accurately, and must gather credible information that helps screen marginal or unacceptable risks.',
        },
        {
          text: 'Gather only information that makes a marginal risk look acceptable.',
          why: 'The agent must gather credible information that helps screen marginal or unacceptable risks, and must record the answers accurately.',
        },
        {
          text: 'Skip screening of unacceptable risks.',
          why: 'Credible information helps screen marginal or unacceptable risks. Questions must be asked clearly and the answers recorded accurately.',
        },
        {
          text: 'Ask questions clearly, record the answers accurately, and gather credible information that helps screen marginal or unacceptable risks.',
          why: 'The agent must ask questions clearly and record the answers accurately, and must gather credible information that helps screen marginal or unacceptable risks.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q93',
      'What may an insurer combine when offering a health benefit plan to an individual or small employer?',
      [
        {
          text: 'The uniform application and the uniform waiver form.',
          why: 'When an insurer offers a health benefit plan to an individual or small employer, it may combine the uniform application and the uniform waiver form.',
          correct: true,
        },
        {
          text: 'A credit-report notice and a statement of continued good health, in place of the application.',
          why: 'The credit-report notice and a statement of continued good health serve other steps. The forms that may be combined are the uniform application and the uniform waiver form.',
        },
        {
          text: 'The insurer’s logo and address on a universal Utah application.',
          why: 'If a universal Utah application is used, it must not carry an insurer’s logo or address. The insurer may combine the uniform application and the uniform waiver form.',
        },
        {
          text: 'Health-status questions other than pregnancy on the waiver.',
          why: 'The waiver cannot include health-status questions other than pregnancy. The insurer may combine the uniform application and the uniform waiver form.',
        },
      ],
    ),
    question(
      'c8q94',
      'What does the uniform waiver do, and which health-status question may it include?',
      [
        {
          text: 'It hides who is buying and may ask any health-status question.',
          why: 'The waiver identifies the employee purchasing the plan and verifies the employee’s insurance. It cannot include health-status questions other than pregnancy.',
        },
        {
          text: 'It identifies the employee purchasing the plan, verifies the employee’s insurance, and cannot include health-status questions other than pregnancy.',
          why: 'The waiver identifies the employee purchasing the plan, verifies the employee’s insurance, and cannot include health-status questions other than pregnancy.',
          correct: true,
        },
        {
          text: 'It replaces the policy and may ask about conditions other than pregnancy.',
          why: 'The waiver cannot include health-status questions other than pregnancy. It identifies the employee purchasing the plan and verifies the employee’s insurance.',
        },
        {
          text: 'It is the credit-report notice and may list every past diagnosis.',
          why: 'A credit-report notice says a credit report will be ordered about past history and any other health insurance applied for. The waiver identifies the employee, verifies insurance, and cannot include health-status questions other than pregnancy.',
        },
      ],
    ),
    question(
      'c8q95',
      'When does a written authorization permit disclosure of personal or privileged information?',
      [
        {
          text: 'If the authorization was signed more than 12 months ago.',
          why: 'A written authorization must be dated and signed within the past 12 months.',
        },
        {
          text: 'If the authorization is oral and undated.',
          why: 'The authorization must be written, dated, and signed within the past 12 months.',
        },
        {
          text: 'If it is dated and signed within the past 12 months.',
          why: 'Personal or privileged information may be disclosed under a written authorization dated and signed within the past 12 months.',
          correct: true,
        },
        {
          text: 'A written authorization never permits disclosure.',
          why: 'A written authorization dated and signed within the past 12 months is one permitted basis for disclosure.',
        },
      ],
    ),
    question(
      'c8q96',
      'Which disclosure to a regulator, law enforcement, or an affiliate is permitted?',
      [
        {
          text: 'Disclosure to a neighbor, or to an affiliate for marketing with further sharing.',
          why: 'Disclosure to an insurance regulator or law enforcement agency is permitted as the law requires. Disclosure to an affiliate is permitted for an audit, with no further disclosure.',
        },
        {
          text: 'Disclosure to the public in an advertisement.',
          why: 'Permitted paths include an insurance regulator or law enforcement agency as the law requires, and an affiliate for an audit with no further disclosure.',
        },
        {
          text: 'Disclosure to an affiliate for any purpose, followed by further disclosure.',
          why: 'Affiliate disclosure is for an audit, with no further disclosure. A regulator or law enforcement agency may receive information as the law requires.',
        },
        {
          text: 'Disclosure to an insurance regulator or law enforcement agency as the law requires, and disclosure to an affiliate for an audit with no further disclosure.',
          why: 'Those are permitted disclosures of personal or privileged information. Affiliate use is limited to an audit, with no further disclosure.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q97',
      'Which situations are the most common errors and omissions problems?',
      [
        {
          text: 'The sales interview and policy delivery, including inadequate coverage or failure to maintain and service coverage.',
          why: 'The sales interview and policy delivery are the most common errors and omissions situations, including inadequate coverage or failure to maintain and service coverage. Misunderstanding or misrepresentation during the sale can lead to legal action, so agents should document interviews, calls, and requests.',
          correct: true,
        },
        {
          text: 'Only ordering a credit report, and interview notes should be discarded.',
          why: 'Agents should document interviews, calls, and requests. The most common errors and omissions situations are the sales interview and policy delivery.',
        },
        {
          text: 'Only the pregnancy question on the waiver, so other documentation is unnecessary.',
          why: 'Misunderstanding or misrepresentation during the sale can lead to legal action. The most common errors and omissions situations are the sales interview and policy delivery.',
        },
        {
          text: 'Conditional receipts only, because a sales interview cannot lead to legal action.',
          why: 'Misunderstanding or misrepresentation during the sale can lead to legal action. The sales interview and policy delivery are the most common errors and omissions situations.',
        },
      ],
    ),
    question(
      'c8q98',
      'For what purpose may information be disclosed to a group policyholder?',
      [
        {
          text: 'To advertise new products to employees.',
          why: 'Disclosure to a group policyholder is permitted to report claims experience.',
        },
        {
          text: 'To report claims experience.',
          why: 'Personal or privileged information may be disclosed to a group policyholder to report claims experience.',
          correct: true,
        },
        {
          text: 'To alter a universal Utah application.',
          why: 'A universal Utah application, if used, must not be altered. Disclosure to a group policyholder is to report claims experience.',
        },
        {
          text: 'To skip the notice of information practices.',
          why: 'The notice of information practices has its own timing rules. Disclosure to a group policyholder is to report claims experience.',
        },
      ],
    ),
    question(
      'c8q99',
      'Who else may receive personal or privileged information for coordination of benefits or a legal interest in the policy?',
      [
        {
          text: 'Only the agent, for personal use unrelated to the policy.',
          why: 'A permitted disclosure may go to an insurer or self-insured plan for coordination of benefits, or to a lien holder, mortgagee, assignee, or other person with a legal or beneficial interest in the policy.',
        },
        {
          text: 'Any marketer who asks for the file.',
          why: 'The listed recipients are an insurer or self-insured plan for coordination of benefits, and a lien holder, mortgagee, assignee, or other person with a legal or beneficial interest in the policy.',
        },
        {
          text: 'An insurer or self-insured plan for coordination of benefits, or a lien holder, mortgagee, assignee, or other person with a legal or beneficial interest in the policy.',
          why: 'Those disclosures of personal or privileged information are permitted.',
          correct: true,
        },
        {
          text: 'The public, once the policy has been delivered.',
          why: 'Delivery does not open the information to the public. Permitted recipients include an insurer or self-insured plan for coordination of benefits and a person with a legal or beneficial interest, such as a lien holder, mortgagee, or assignee.',
        },
      ],
    ),
    question(
      'c8q100',
      'What is the application, and what happens to it if the policy is issued?',
      [
        {
          text: 'It is an advertisement, and it is discarded when the policy is issued.',
          why: 'The application is the applicant’s written request that the company issue a policy based on the information in it. If the policy is issued, a copy is attached and becomes part of the entire contract.',
        },
        {
          text: 'It stays only in the agent’s file and never becomes part of the contract.',
          why: 'If the policy is issued, a copy of the application is attached and becomes part of the entire contract.',
        },
        {
          text: 'It is the credit report on past history.',
          why: 'A separate notice says a credit report will be ordered about past history and any other health insurance applied for. The application is the applicant’s written request, and a copy becomes part of the entire contract if the policy is issued.',
        },
        {
          text: 'It is the applicant’s written request that the company issue a policy based on the information in it. If the policy is issued, a copy is attached and becomes part of the entire contract.',
          why: 'The application is that written request. If the policy is issued, a copy is attached and becomes part of the entire contract.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q101',
      'What must the applicant be told about a credit report, and what must the agent do with that notice?',
      [
        {
          text: 'The notice must say a credit report will be ordered about past history and any other health insurance applied for, and the agent must leave that notice with the applicant.',
          why: 'A notice to the applicant must tell the applicant that a credit report will be ordered about past history and any other health insurance applied for. The agent must leave that notice with the applicant.',
          correct: true,
        },
        {
          text: 'The notice must promise that no credit report will be ordered, and the agent keeps it.',
          why: 'The notice says a credit report will be ordered about past history and any other health insurance applied for, and the agent must leave that notice with the applicant.',
        },
        {
          text: 'The notice replaces the notice of information practices at renewal.',
          why: 'On renewal, the notice of information practices is provided at renewal or annually. The credit-report notice is left with the applicant and describes a report on past history and other health insurance applied for.',
        },
        {
          text: 'The notice is required only for public-record information, and the agent may mail it later.',
          why: 'The agent must leave the credit-report notice with the applicant. A notice of information practices follows separate timing when information comes from the applicant, public records, or another source.',
        },
      ],
    ),
    question(
      'c8q102',
      'When is a notice of information practices required?',
      [
        {
          text: 'Only when the applicant refuses to sign.',
          why: 'A notice of information practices is required when personal information is first collected from a source other than the applicant or public records, or at delivery if it is collected from the applicant or public records.',
        },
        {
          text: 'When personal information is first collected from a source other than the applicant or public records, or at delivery if it is collected from the applicant or public records.',
          why: 'That is when a notice of information practices is required. On renewal, the notice is provided at renewal or annually.',
          correct: true,
        },
        {
          text: 'Only after a claim is denied.',
          why: 'The notice is tied to collection of personal information, either at first collection from another source or at delivery if it comes from the applicant or public records.',
        },
        {
          text: 'Never, if a credit report will be ordered.',
          why: 'The credit-report notice is separate. A notice of information practices is required when personal information is first collected from another source, or at delivery if it is collected from the applicant or public records.',
        },
      ],
    ),
    question(
      'c8q103',
      'When is the notice of information practices provided on renewal?',
      [
        {
          text: 'Only with the original application, and never again.',
          why: 'On renewal, the notice of information practices is provided at renewal or annually.',
        },
        {
          text: 'Every 12 months measured from a disclosure authorization, whether or not the policy renews.',
          why: 'A written authorization for disclosure must be dated and signed within the past 12 months. On renewal, the notice of information practices is provided at renewal or annually.',
        },
        {
          text: 'At renewal or annually.',
          why: 'On renewal, the notice of information practices is provided at renewal or annually.',
          correct: true,
        },
        {
          text: 'Only at the first in-person delivery, and not on renewal.',
          why: 'The agent should deliver the policy in person whenever possible, and the free-look begins once the policy is delivered. On renewal, the notice is provided at renewal or annually.',
        },
      ],
    ),
    question(
      'c8q104',
      'Whose signatures does every health application require?',
      [
        {
          text: 'Only the agent.',
          why: 'Every health application requires the signatures of the proposed insured, the policyowner if different, and the agent. Most companies require ink.',
        },
        {
          text: 'Only the proposed insured.',
          why: 'The proposed insured, the policyowner if different, and the agent must sign. Most companies require ink.',
        },
        {
          text: 'The home-office underwriter and a regulator.',
          why: 'The agent, not the home-office underwriter, meets the applicant. The required signatures are the proposed insured, the policyowner if different, and the agent.',
        },
        {
          text: 'The proposed insured, the policyowner if different, and the agent.',
          why: 'Every health application requires those signatures, and most companies require ink. The application is often the main source of underwriting information, so the agent must make it complete, correct, and to the best of the applicant’s knowledge.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q105',
      'When is an insurability conditional receipt generally given, and when does coverage become effective?',
      [
        {
          text: 'It is generally given when the initial premium is paid with the application, and coverage becomes effective as of the date of the receipt if the application is approved.',
          why: 'Under an insurability conditional receipt, coverage becomes effective as of the date of the receipt if the application is approved. The receipt is generally given when the initial premium is paid with the application.',
          correct: true,
        },
        {
          text: 'It is given at delivery, and coverage is effective even if the application is declined.',
          why: 'Coverage becomes effective as of the date of the receipt if the application is approved. The receipt is generally given when the initial premium is paid with the application.',
        },
        {
          text: 'It is given only on renewal, and coverage starts whether or not the application is approved.',
          why: 'On renewal, the notice of information practices is provided at renewal or annually. The conditional receipt is generally given with the initial premium, and coverage dates from the receipt if the application is approved.',
        },
        {
          text: 'The receipt replaces the required signatures on the application.',
          why: 'Every health application still requires the signatures of the proposed insured, the policyowner if different, and the agent. The receipt is generally given when the initial premium is paid with the application.',
        },
      ],
    ),
    question(
      'c8q106',
      'If starting the application over is not practical, how is a wrong answer corrected?',
      [
        {
          text: 'Erase the answer and leave the change unsigned.',
          why: 'The best way to correct an application is to start over. If that is not practical, draw a line through the wrong answer, insert the right one, and have the applicant initial the correction.',
        },
        {
          text: 'Draw a line through the wrong answer, insert the right one, and have the applicant initial the correction.',
          why: 'If starting over is not practical, draw a line through the wrong answer, insert the right one, and have the applicant initial the correction. The best way to correct an application is to start over.',
          correct: true,
        },
        {
          text: 'The agent initials the change and does not show the applicant.',
          why: 'The applicant initials the correction after a line is drawn through the wrong answer and the right one is inserted. Starting over is the best correction when it is practical.',
        },
        {
          text: 'Cover the original answer so it cannot be read, with no initial.',
          why: 'The correction is a line through the wrong answer, the right answer inserted, and the applicant’s initial. Starting over is the best way when it is practical.',
        },
      ],
    ),
    question(
      'c8q107',
      'What should happen when the policy is delivered?',
      [
        {
          text: 'The agent should avoid an in-person delivery, and the free-look begins when the application is signed.',
          why: 'The agent should deliver the policy in person whenever possible. The free-look period begins once the policy is delivered.',
        },
        {
          text: 'If the first premium is collected at delivery, no statement of health is required.',
          why: 'If the first premium is collected at delivery, most companies require a signed statement of continued good health. At delivery the agent should also review the insured’s original goals and the policy.',
        },
        {
          text: 'The agent should deliver the policy in person whenever possible, the free-look begins once the policy is delivered, and the agent should review the insured’s original goals and the policy.',
          why: 'The agent should deliver the policy in person whenever possible, and the free-look period begins once the policy is delivered. At delivery the agent should review the insured’s original goals and the policy, and if the first premium is collected at delivery most companies require a signed statement of continued good health.',
          correct: true,
        },
        {
          text: 'Delivery ends any review of the insured’s goals or the policy.',
          why: 'At delivery the agent should review the insured’s original goals and the policy. In-person delivery should be used whenever possible, and the free-look period begins once the policy is delivered.',
        },
      ],
    ),
    question(
      'c8q108',
      'What rules apply if an insurer uses a universal Utah individual or small-employer health application?',
      [
        {
          text: 'Use is mandatory, and the form must show the insurer’s logo and address.',
          why: 'Use is voluntary. If the form is used, it must not be altered or carry an insurer’s logo or address, so one application can be sent to several insurers.',
        },
        {
          text: 'Insurers may not accept the Utah Individual Health Insurance Application or the Utah Small Employer Health Insurance Application.',
          why: 'Utah lets accident and health insurers accept those applications, and use is voluntary. If the form is used, it must not be altered or carry an insurer’s logo or address.',
        },
        {
          text: 'The form should be altered and limited to one insurer.',
          why: 'If the form is used, it must not be altered or carry an insurer’s logo or address, so one application can be sent to several insurers. Use is voluntary.',
        },
        {
          text: 'Use is voluntary, and if the form is used it must not be altered or carry an insurer’s logo or address.',
          why: 'Utah lets accident and health insurers accept the universal Utah Individual Health Insurance Application and the Utah Small Employer Health Insurance Application. Use is voluntary, and if the form is used it must not be altered or carry an insurer’s logo or address, so one application can be sent to several insurers.',
          correct: true,
        },
      ],
    ),
  ],
'c8-sources': [
    question(
      'c8q109',
      'By law, underwriting selection criteria must be based only on which of the following?',
      [
        {
          text: 'Sound actuarial principles or expected experience.',
          why: 'By law, selection criteria must be based only on sound actuarial principles or expected experience. The underwriter selects risks that are acceptable to the company.',
          correct: true,
        },
        {
          text: 'Blindness or deafness.',
          why: 'The underwriter cannot decline a risk based on blindness or deafness. Selection criteria must be based only on sound actuarial principles or expected experience.',
        },
        {
          text: 'Marital status.',
          why: 'Marital status cannot be used to decline a risk. Selection criteria must be based only on sound actuarial principles or expected experience.',
        },
        {
          text: 'Sexual orientation.',
          why: 'The underwriter cannot decline a risk based on sexual orientation. Selection criteria must be based only on sound actuarial principles or expected experience.',
        },
      ],
    ),
    question(
      'c8q110',
      'The underwriter cannot decline a risk based on which of the following?',
      [
        {
          text: 'Occupation.',
          why: 'Occupation is a prime underwriting consideration. The underwriter cannot decline a risk based on blindness or deafness, genetic characteristics, marital status, or sexual orientation.',
        },
        {
          text: 'Genetic characteristics.',
          why: 'The underwriter cannot decline a risk based on blindness or deafness, genetic characteristics, marital status, or sexual orientation.',
          correct: true,
        },
        {
          text: 'Physical condition.',
          why: 'Physical condition is a prime consideration, along with age, gender, occupation, avocations, moral and morale hazards, and financial status. Genetic characteristics cannot be used to decline a risk.',
        },
        {
          text: 'Financial status.',
          why: 'Financial status is a prime underwriting consideration. A decline cannot be based on genetic characteristics, blindness or deafness, marital status, or sexual orientation.',
        },
      ],
    ),
    question(
      'c8q111',
      'Which of the following is a prime underwriting consideration?',
      [
        {
          text: 'Marital status.',
          why: 'Marital status cannot be used to decline a risk. Prime considerations are age, gender, occupation, physical condition, avocations, moral and morale hazards, and financial status.',
        },
        {
          text: 'Sexual orientation.',
          why: 'Sexual orientation cannot be used to decline a risk. Moral and morale hazards are prime considerations, along with age, gender, occupation, physical condition, avocations, and financial status.',
        },
        {
          text: 'Moral and morale hazards.',
          why: 'Prime considerations are age, gender, occupation, physical condition, avocations, moral and morale hazards, and financial status.',
          correct: true,
        },
        {
          text: 'Genetic characteristics.',
          why: 'The underwriter cannot decline a risk based on genetic characteristics. Moral and morale hazards are prime considerations.',
        },
      ],
    ),
    question(
      'c8q112',
      'Who completes the agent’s report?',
      [
        {
          text: 'The attending physician.',
          why: 'An attending physician’s statement explains the medical history. Only the agent completes the agent’s report.',
        },
        {
          text: 'The Medical Information Bureau.',
          why: 'The Medical Information Bureau keeps confidential medical impairment information for member insurers. Only the agent completes the agent’s report.',
        },
        {
          text: 'The applicant.',
          why: 'The applicant does not complete the agent’s report. Only the agent completes it.',
        },
        {
          text: 'Only the agent.',
          why: 'Only the agent completes the agent’s report. It asks how long the agent has known the applicant, estimates income and net worth, and asks whether the agent knows any reason the contract should not be issued.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q113',
      'Which estimate does the agent’s report ask the agent to give?',
      [
        {
          text: 'The applicant’s income and net worth.',
          why: 'The agent’s report estimates income and net worth. It also asks how long the agent has known the applicant and whether the agent knows any reason the contract should not be issued.',
          correct: true,
        },
        {
          text: 'The prognosis after a treated condition.',
          why: 'Recovery and prognosis come from an attending physician’s statement. The agent’s report estimates income and net worth.',
        },
        {
          text: 'Coded information from other members’ applications.',
          why: 'Coded information from other members’ applications comes through the Medical Information Bureau. The agent’s report estimates income and net worth.',
        },
        {
          text: 'Whether neighbors will describe the applicant’s mode of living.',
          why: 'Interviews about mode of living belong to an investigative consumer report. The agent’s report estimates income and net worth.',
        },
      ],
    ),
    question(
      'c8q114',
      'What is true of the agent’s statement?',
      [
        {
          text: 'It is the best source for the applicant’s medical history.',
          why: 'An attending physician’s statement is the best source for the applicant’s medical history. The agent’s statement does not become part of the entire contract.',
        },
        {
          text: 'It does not become part of the entire contract.',
          why: 'The agent’s statement does not become part of the entire contract. Only the agent completes the agent’s report.',
          correct: true,
        },
        {
          text: 'It is the coded file that other member insurers receive.',
          why: 'Members can receive coded information from other members’ applications through the Medical Information Bureau. The agent’s statement does not become part of the entire contract.',
        },
        {
          text: 'The attending physician must complete it.',
          why: 'Only the agent completes the agent’s report. The agent’s statement does not become part of the entire contract.',
        },
      ],
    ),
    question(
      'c8q115',
      'Which source is the best one for the applicant’s medical history?',
      [
        {
          text: 'The agent’s report.',
          why: 'The agent’s report estimates income and net worth, and the agent’s statement does not become part of the entire contract. An attending physician’s statement is the best source for medical history.',
        },
        {
          text: 'An investigative consumer report.',
          why: 'An investigative consumer report covers character, general reputation, personal habits, and mode of living. An attending physician’s statement is the best source for medical history.',
        },
        {
          text: 'An attending physician’s statement.',
          why: 'An attending physician’s statement is the best source for the applicant’s medical history. The doctor can explain what was treated, the treatment, how long it lasted, the recovery, and the prognosis.',
          correct: true,
        },
        {
          text: 'The Medical Information Bureau.',
          why: 'The Medical Information Bureau keeps confidential medical impairment information, and that information cannot by itself be used to decline a risk. An attending physician’s statement is the best source for medical history.',
        },
      ],
    ),
    question(
      'c8q116',
      'What can the doctor explain on an attending physician’s statement?',
      [
        {
          text: 'How long the agent has known the applicant.',
          why: 'How long the agent has known the applicant is asked on the agent’s report. The doctor explains what was treated, the treatment, how long it lasted, the recovery, and the prognosis.',
        },
        {
          text: 'Character, general reputation, personal habits, and mode of living.',
          why: 'Those subjects belong to an investigative consumer report. The attending physician explains the treatment, how long it lasted, the recovery, and the prognosis.',
        },
        {
          text: 'Coded data drawn from other members’ applications.',
          why: 'Members can receive coded information from other members’ applications. The doctor explains what was treated, the treatment, how long it lasted, the recovery, and the prognosis.',
        },
        {
          text: 'What was treated, the treatment, how long it lasted, the recovery, and the prognosis.',
          why: 'The doctor can explain what was treated, the treatment, how long it lasted, the recovery, and the prognosis. That detail is why an attending physician’s statement is the best source for medical history.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q117',
      'An investigative consumer report covers which subjects?',
      [
        {
          text: 'Character, general reputation, personal habits, and mode of living.',
          why: 'An investigative consumer report covers character, general reputation, personal habits, and mode of living, for example through interviews with associates, friends, and neighbors.',
          correct: true,
        },
        {
          text: 'Confidential medical impairment codes.',
          why: 'Confidential medical impairment information is kept by the Medical Information Bureau. An investigative consumer report covers character, reputation, personal habits, and mode of living.',
        },
        {
          text: 'The treatment, recovery, and prognosis of a past illness.',
          why: 'Treatment, recovery, and prognosis come from an attending physician’s statement. An investigative consumer report covers character, reputation, personal habits, and mode of living.',
        },
        {
          text: 'Whether the applicant is preferred, standard, or substandard.',
          why: 'Preferred, standard, and substandard are classes of accepted applicants. An investigative consumer report covers character, reputation, personal habits, and mode of living.',
        },
      ],
    ),
    question(
      'c8q118',
      'An investigative consumer report may not be done unless which step happens?',
      [
        {
          text: 'The Medical Information Bureau has already declined the risk.',
          why: 'MIB information cannot by itself be used to decline a risk. An investigative consumer report may not be done unless the applicant is clearly and accurately informed in writing.',
        },
        {
          text: 'The applicant is clearly and accurately informed in writing.',
          why: 'An investigative consumer report may not be done unless the applicant is clearly and accurately informed in writing.',
          correct: true,
        },
        {
          text: 'The applicant pays for a medical exam.',
          why: 'If the insurer requests a medical exam, the insurer pays for it. A consumer report requires that the applicant be clearly and accurately informed in writing.',
        },
        {
          text: 'The risk has already been classed as substandard.',
          why: 'Substandard describes an increased risk of loss that may be insured at an increased premium. A consumer report may not be done unless the applicant is clearly and accurately informed in writing.',
        },
      ],
    ),
    question(
      'c8q119',
      'How does the applicant usually receive written notice of an investigative consumer report?',
      [
        {
          text: 'The state Department of Health mails it with a positive HIV result.',
          why: 'A positive HIV result and the applicant’s identity go to the state Department of Health when no physician was named. The consumer-report notice is usually part of the application, and the agent gives it to the applicant.',
        },
        {
          text: 'Other member insurers send it as coded medical information.',
          why: 'MIB members can receive coded information from other members’ applications. The consumer-report notice is usually part of the application, and the agent gives it to the applicant.',
        },
        {
          text: 'It is usually part of the application, and the agent gives it to the applicant.',
          why: 'That notice is usually part of the application, and the agent gives it to the applicant. The report may not be done unless the applicant is clearly and accurately informed in writing.',
          correct: true,
        },
        {
          text: 'The attending physician attaches it to the prognosis.',
          why: 'The attending physician explains treatment, recovery, and prognosis. The consumer-report notice is usually part of the application, and the agent gives it to the applicant.',
        },
      ],
    ),
    question(
      'c8q120',
      'Which description fits the Medical Information Bureau?',
      [
        {
          text: 'The physician who explains the prognosis.',
          why: 'An attending physician’s statement is the best source for medical history. The Medical Information Bureau is a nonprofit membership corporation owned by member insurers.',
        },
        {
          text: 'The agent who estimates income and net worth.',
          why: 'Only the agent completes the agent’s report, including the estimate of income and net worth. The Medical Information Bureau is a nonprofit membership corporation owned by member insurers.',
        },
        {
          text: 'The office that performs the medical exam.',
          why: 'Medical exams, when required, are done by physicians or paramedics at the insurer’s expense. The Medical Information Bureau is a nonprofit membership corporation owned by member insurers.',
        },
        {
          text: 'A nonprofit membership corporation owned by member insurers.',
          why: 'The Medical Information Bureau is a nonprofit membership corporation owned by member insurers. It receives adverse medical information and keeps confidential medical impairment information.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q121',
      'What can a member insurer receive from the Medical Information Bureau?',
      [
        {
          text: 'Coded information from other members’ applications.',
          why: 'Members can receive coded information from other members’ applications. MIB information cannot by itself be used to decline a risk, but it can give the underwriter additional information.',
          correct: true,
        },
        {
          text: 'Power to decline a risk using MIB information alone.',
          why: 'MIB information cannot by itself be used to decline a risk. It can give the underwriter additional information, including coded information from other members’ applications.',
        },
        {
          text: 'The written consumer-report notice that the agent hands to the applicant.',
          why: 'The agent gives the consumer-report notice, which is usually part of the application. MIB members can receive coded information from other members’ applications.',
        },
        {
          text: 'A replacement for the attending physician’s statement as the best medical history.',
          why: 'An attending physician’s statement is the best source for medical history. MIB members receive coded information from other members’ applications.',
        },
      ],
    ),
    question(
      'c8q122',
      'When a medical exam is required, who performs it and who pays?',
      [
        {
          text: 'Associates, friends, and neighbors perform it, and the applicant pays.',
          why: 'Interviews with associates, friends, and neighbors are used for an investigative consumer report. Required exams are done by physicians or paramedics at the insurer’s expense.',
        },
        {
          text: 'Physicians or paramedics perform it, and the insurer pays.',
          why: 'Medical exams, when required, are done by physicians or paramedics at the insurer’s expense. If the insurer requests an exam, the insurer pays for it.',
          correct: true,
        },
        {
          text: 'The Medical Information Bureau performs it and sends coded results to other members.',
          why: 'The Medical Information Bureau receives adverse medical information and keeps confidential medical impairment information. Exams are done by physicians or paramedics at the insurer’s expense.',
        },
        {
          text: 'The agent performs it, and the agent’s statement becomes part of the entire contract.',
          why: 'Only the agent completes the agent’s report, and the agent’s statement does not become part of the entire contract. Exams are done by physicians or paramedics at the insurer’s expense.',
        },
      ],
    ),
    question(
      'c8q123',
      'Which statement about medical exams in health insurance is correct?',
      [
        {
          text: 'Health insurance always requires an exam, and the applicant pays for it.',
          why: 'Health insurance usually does not require an exam. If the insurer requests an exam, the insurer pays for it.',
        },
        {
          text: 'Exams are more common in health underwriting than in life underwriting.',
          why: 'Exams are more common in life underwriting. Health insurance usually does not require an exam.',
        },
        {
          text: 'Health insurance usually does not require an exam, so the agent’s recording of medical information is more important.',
          why: 'Health insurance usually does not require an exam, which makes the agent’s recording of medical information more important. Exams are more common in life underwriting.',
          correct: true,
        },
        {
          text: 'An exam is required only after MIB information alone has declined the risk.',
          why: 'MIB information cannot by itself be used to decline a risk. Health insurance usually does not require an exam.',
        },
      ],
    ),
    question(
      'c8q124',
      'Insurers commonly require an HIV test in which situation?',
      [
        {
          text: 'For every nonsmoker who will be rated as a preferred risk.',
          why: 'Nonsmokers are an example of preferred risks, who have a reduced risk of loss and a reduced rate. An HIV test is commonly required for a large amount of coverage or for increased benefits.',
        },
        {
          text: 'When the underwriter wants to decline the risk for marital status.',
          why: 'The underwriter cannot decline a risk based on marital status. An HIV test is commonly required for a large amount of coverage or for increased benefits.',
        },
        {
          text: 'On every health application, because an exam is always required.',
          why: 'Health insurance usually does not require an exam. An HIV test is commonly required for a large amount of coverage or for increased benefits.',
        },
        {
          text: 'For a large amount of coverage or for increased benefits.',
          why: 'Insurers commonly require an HIV test for a large amount of coverage or for increased benefits. Insurers may ask whether the proposed insured has tested positive on an AIDS-related test.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q125',
      'Before an HIV test, which step must the insurer take?',
      [
        {
          text: 'Disclose the test and get written consent on the approved form.',
          why: 'The insurer must disclose the test and get written consent on the approved form. It must also keep written confidentiality procedures and use the protocol of the U.S. Department of Health and Human Services.',
          correct: true,
        },
        {
          text: 'Decline the risk if the applicant is blind or deaf.',
          why: 'The underwriter cannot decline a risk based on blindness or deafness. An HIV test requires disclosure and written consent on the approved form.',
        },
        {
          text: 'Send the applicant’s identity to the state Department of Health before any test is run.',
          why: 'A positive result and the applicant’s identity go to the state Department of Health if the applicant has not named a physician. Before the test, the insurer must disclose it and get written consent on the approved form.',
        },
        {
          text: 'Collect genetic information for underwriting before enrollment.',
          why: 'The Genetic Information Nondiscrimination Act of 2008 prohibits collecting genetic information for underwriting or other purposes before enrollment. An HIV test requires disclosure and written consent on the approved form.',
        },
      ],
    ),
    question(
      'c8q126',
      'The applicant has not named a physician. After a positive HIV result, what must be sent to the state Department of Health?',
      [
        {
          text: 'Only the agent’s estimate of net worth, with the result left out.',
          why: 'The agent’s report estimates income and net worth. If the applicant has not named a physician, the insurer sends a positive result and the applicant’s identity to the state Department of Health.',
        },
        {
          text: 'The positive result and the applicant’s identity.',
          why: 'If the applicant has not named a physician, the insurer sends a positive result and the applicant’s identity to the state Department of Health. Results are disclosed only as the applicant authorizes in writing.',
          correct: true,
        },
        {
          text: 'Interview notes about character and mode of living.',
          why: 'Character and mode of living are subjects of an investigative consumer report. A positive HIV result and the applicant’s identity go to the state Department of Health when no physician was named.',
        },
        {
          text: 'A decline based on sexual orientation.',
          why: 'The underwriter cannot decline a risk based on sexual orientation, and investigating sexual orientation as part of underwriting is unfair discrimination. The state Department of Health receives a positive result and the applicant’s identity when no physician was named.',
        },
      ],
    ),
    question(
      'c8q127',
      'Which detail must the HIV report include?',
      [
        {
          text: 'The applicant’s marital status.',
          why: 'The underwriter cannot decline a risk based on marital status. The HIV report must include the reporting company’s name and address.',
        },
        {
          text: 'The applicant’s sexual orientation.',
          why: 'Investigating sexual orientation as part of underwriting is unfair discrimination. The HIV report must include the reporting company’s name and address.',
        },
        {
          text: 'The reporting company’s name and address.',
          why: 'The report must include the reporting company’s name and address. Results are disclosed only as the applicant authorizes in writing.',
          correct: true,
        },
        {
          text: 'The agent’s statement, because that statement becomes the entire contract.',
          why: 'The agent’s statement does not become part of the entire contract. The HIV report must include the reporting company’s name and address.',
        },
      ],
    ),
    question(
      'c8q128',
      'Unfair discrimination between individuals of the same class and equal life expectancy is forbidden in which of the following?',
      [
        {
          text: 'Favoring good risks and disfavoring poor risks to avoid adverse selection.',
          why: 'Companies may discriminate in favor of good risks and against poor risks to avoid adverse selection. They cannot unfairly discriminate between individuals of the same class and equal life expectancy in rates, benefits, or terms.',
        },
        {
          text: 'Using occupation and physical condition as prime considerations.',
          why: 'Occupation and physical condition are prime considerations. Unfair discrimination between individuals of the same class and equal life expectancy is forbidden in rates, benefits, or terms.',
        },
        {
          text: 'Giving a nonsmoker a reduced rate as a preferred risk.',
          why: 'A nonsmoker is an example of a preferred risk, with a reduced risk of loss and a reduced rate. Unfair discrimination in rates, benefits, or terms is forbidden between individuals of the same class and equal life expectancy.',
        },
        {
          text: 'Rates, benefits, or terms.',
          why: 'They cannot unfairly discriminate between individuals of the same class and equal life expectancy in rates, benefits, or terms. Unfair discrimination includes rates or benefits based solely on age or gender, physical or mental impairment, blindness or partial blindness, or genetic characteristics or genetic testing, and investigating sexual orientation as part of underwriting.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q129',
      'What limit does the Genetic Information Nondiscrimination Act of 2008 place on a group or individual health plan?',
      [
        {
          text: 'It prevents denial, conditioning, or discrimination in the price based on genetic information.',
          why: 'The Genetic Information Nondiscrimination Act of 2008 prevents denial, conditioning, or discrimination in the price of a group or individual health plan based on genetic information. It limits requests for genetic testing and prohibits collecting genetic information for underwriting or other purposes before enrollment.',
          correct: true,
        },
        {
          text: 'It requires the plan to decline a risk because of genetic characteristics.',
          why: 'The underwriter cannot decline a risk based on genetic characteristics. The Act prevents denial, conditioning, or price discrimination based on genetic information.',
        },
        {
          text: 'It requires genetic testing of every applicant before enrollment.',
          why: 'The Act limits requests for genetic testing and prohibits collecting genetic information for underwriting or other purposes before enrollment. It does not require genetic testing before enrollment.',
        },
        {
          text: 'It bars age and gender as prime underwriting considerations.',
          why: 'Age and gender are prime underwriting considerations. The Act addresses genetic information, including price discrimination and collecting that information before enrollment.',
        },
      ],
    ),
    question(
      'c8q130',
      'Which description fits a preferred risk?',
      [
        {
          text: 'An average exposure insured at standard rates.',
          why: 'Standard risks are average exposures at standard rates. Preferred risks have a reduced risk of loss and a reduced rate.',
        },
        {
          text: 'A reduced risk of loss, insured at a reduced rate, such as a nonsmoker.',
          why: 'Accepted applicants are preferred, standard, or substandard. Preferred risks have a reduced risk of loss and a reduced rate, and nonsmokers are an example.',
          correct: true,
        },
        {
          text: 'An increased risk of loss that may be insured at an increased premium.',
          why: 'Substandard risks have an increased risk of loss and may be insured at an increased premium, for example because of a poor health history or a dangerous vocation or avocation. Preferred risks have a reduced risk and a reduced rate.',
        },
        {
          text: 'A risk that must be declined because of a dangerous avocation.',
          why: 'A dangerous vocation or avocation is an example of a substandard risk that may be insured at an increased premium. Preferred risks receive a reduced rate because the risk of loss is reduced.',
        },
      ],
    ),
  ],
  'c8-replace': [
    question(
      'c8q131',
      'Which items in the current policy and the proposed policy must the agent compare in a replacement?',
      [
        {
          text: 'Only the premium charged when the insured was age 25.',
          why: 'In the course example, Robert applies at 25, but the new policy is judged on factors at the time of replacement. The agent must compare benefits, limitations, and exclusions in the current policy and the proposed policy.',
        },
        {
          text: 'Whether the first policy was overpriced, and nothing else.',
          why: 'Even if the first policy was overpriced, replacement underwriting can change the premium and the benefits. The agent must compare benefits, limitations, and exclusions.',
        },
        {
          text: 'Benefits, limitations, and exclusions.',
          why: 'The agent must compare benefits, limitations, and exclusions in the current policy and the proposed policy.',
          correct: true,
        },
        {
          text: 'The factors from the original policy, ignoring age and health at replacement.',
          why: 'The new policy is judged on age, health, and other factors at the time of replacement, not on the factors from the original policy. The agent must compare benefits, limitations, and exclusions.',
        },
      ],
    ),
    question(
      'c8q132',
      'Which action is forbidden when an agent replaces a health policy?',
      [
        {
          text: 'Comparing benefits, limitations, and exclusions of the current and proposed policies.',
          why: 'The agent must compare benefits, limitations, and exclusions. The forbidden step is letting the current policy be cancelled before the new policy is issued.',
        },
        {
          text: 'Giving the applicant a state-specific notice of replacement.',
          why: 'The agent must give the applicant a state-specific notice of replacement. The agent must not let the current policy be cancelled before the new policy is issued.',
        },
        {
          text: 'Judging the new policy on age and health at the time of replacement.',
          why: 'The new policy is judged on age, health, and other factors at the time of replacement. The agent must not let the current policy be cancelled before the new policy is issued.',
        },
        {
          text: 'Letting the current policy be cancelled before the new policy is issued.',
          why: 'The agent must not let the current policy be cancelled before the new policy is issued. The agent also must not mislead the insured or provide coverage to the insured’s detriment.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q133',
      'In the course example, Robert applies at 25 as a nonsmoker with no health problems. Which facts describe the application he makes later?',
      [
        {
          text: 'He applies at 45 after a heart attack and 15 years of smoking.',
          why: 'Robert applies at 25 as a nonsmoker with no health problems. At 45 he applies again after a heart attack and 15 years of smoking.',
          correct: true,
        },
        {
          text: 'He applies again at 25, still with no health problems and no smoking history.',
          why: 'The later application is at 45, after a heart attack and 15 years of smoking. The application at 25 was the nonsmoker application with no health problems.',
        },
        {
          text: 'He applies at 45 as a nonsmoker who has not had a heart attack.',
          why: 'At 45 he applies again after a heart attack and 15 years of smoking. The nonsmoker application with no health problems was at 25.',
        },
        {
          text: 'He applies at 25 after a heart attack and 15 years of smoking, and the healthy application is the one at 45.',
          why: 'The healthy nonsmoker application is at 25. At 45 he applies again after a heart attack and 15 years of smoking.',
        },
      ],
    ),
    question(
      'c8q134',
      'Robert’s first policy was overpriced. The replacement policy is judged on which factors?',
      [
        {
          text: 'The age and health from the original policy at 25.',
          why: 'The new policy is not judged on the factors from the original policy. It is judged on age, health, and other factors at the time of replacement.',
        },
        {
          text: 'His age, health, and other factors at the time of replacement.',
          why: 'Even if the first policy was overpriced, the new policy is judged on his age, health, and other factors at the time of replacement, not on the factors from the original policy. Replacement underwriting can change the premium and the benefits.',
          correct: true,
        },
        {
          text: 'Only the nonsmoker status from the first application, ignoring the later heart attack.',
          why: 'At 45 he applies after a heart attack and 15 years of smoking. Those current factors, not the original nonsmoker status alone, are used to judge the new policy.',
        },
        {
          text: 'A rule that replacement cannot change the premium or the benefits.',
          why: 'Replacement underwriting can change the premium and the benefits. The new policy is judged on age, health, and other factors at the time of replacement.',
        },
      ],
    ),
    question(
      'c8q135',
      'Which notice must the agent give the applicant during a replacement?',
      [
        {
          text: 'A notice that the current policy should be cancelled before the new policy is issued.',
          why: 'The agent must not let the current policy be cancelled before the new policy is issued. The required notice is a state-specific notice of replacement.',
        },
        {
          text: 'A notice that the new premium must match the premium from age 25.',
          why: 'The new policy is judged on factors at the time of replacement, and replacement underwriting can change the premium and the benefits. The agent must give a state-specific notice of replacement.',
        },
        {
          text: 'A state-specific notice of replacement.',
          why: 'The agent must give the applicant a state-specific notice of replacement. Misrepresentation during replacement can expose the agent or broker to errors and omissions liability, and the license may be suspended or revoked.',
          correct: true,
        },
        {
          text: 'A waiver stating that misrepresentation cannot affect the license.',
          why: 'Misrepresentation during replacement can expose the agent or broker to errors and omissions liability, and the license may be suspended or revoked. The agent must give a state-specific notice of replacement.',
        },
      ],
    ),
  ],
  'c8-contract': [
    question(
      'c8q136',
      'Which documents make up the entire contract?',
      [
        {
          text: 'The health policy only, with the signed application kept outside the contract.',
          why: 'The entire contract includes a copy of the signed application, not the policy alone. It is the health policy, that copy, and attached riders and amendments.',
        },
        {
          text: 'Spoken changes by the agent, together with the grace-period premium.',
          why: 'Only an executive officer, not an agent, can make changes, and a change needs the express written agreement of both parties. The entire contract is the health policy, a copy of the signed application, and attached riders and amendments.',
        },
        {
          text: 'The beneficiary designation and a reinstatement application only.',
          why: 'Beneficiary changes and reinstatement are separate provisions. The entire contract is the health policy, a copy of the signed application, and attached riders and amendments.',
        },
        {
          text: 'The health policy, a copy of the signed application, and attached riders and amendments.',
          why: 'The entire contract is the health policy, a copy of the signed application, and attached riders and amendments.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q137',
      'Who can make changes to the health contract?',
      [
        {
          text: 'Only an executive officer of the company, not an agent.',
          why: 'Only an executive officer of the company, not an agent, can make changes. No change is effective without the express written agreement of both parties, and the change must be made part of the contract.',
          correct: true,
        },
        {
          text: 'Any agent who delivers the policy.',
          why: 'An agent cannot make changes. Only an executive officer of the company can make changes.',
        },
        {
          text: 'The beneficiary, whenever the designation is revocable.',
          why: 'The policyowner may change the beneficiary by written request, and consent is not required unless the designation is irrevocable. Contract changes themselves can be made only by an executive officer.',
        },
        {
          text: 'The spouse, by a spoken request after a divorce.',
          why: 'After divorce or annulment, the spouse completes an application and pays the premium for an individual policy. Changes to the contract can be made only by an executive officer, not by a spoken request.',
        },
      ],
    ),
    question(
      'c8q138',
      'When is a change to the health contract effective?',
      [
        {
          text: 'When the agent agrees, even if the change is never added to the contract.',
          why: 'An agent cannot make changes. No change is effective without the express written agreement of both parties, and the change must be made part of the contract.',
        },
        {
          text: 'Only with the express written agreement of both parties, and the change must be made part of the contract.',
          why: 'No change is effective without the express written agreement of both parties, and the change must be made part of the contract. Only an executive officer of the company, not an agent, can make changes.',
          correct: true,
        },
        {
          text: 'Automatically on the premium due date, with no written agreement.',
          why: 'The grace period runs after the premium due date, but that does not amend the contract. A change needs the express written agreement of both parties and must be made part of the contract.',
        },
        {
          text: 'After the 10-day sickness wait that follows reinstatement.',
          why: 'Sickness is covered only after 10 days following reinstatement. A contract change is effective only with the express written agreement of both parties and must be made part of the contract.',
        },
      ],
    ),
    question(
      'c8q139',
      'What minimum grace period applies to the premium mode?',
      [
        {
          text: '10 days for every premium mode.',
          why: 'The 10-day period is the wait before sickness is covered after reinstatement. The grace period cannot be less than 15 days for weekly or monthly pay policies, and 30 days for all other modes.',
        },
        {
          text: '45 days for weekly or monthly pay policies.',
          why: '45 days is the time after a conditional receipt in which the company may refuse a reinstatement application. The grace period cannot be less than 15 days for weekly or monthly pay policies, and 30 days for all other modes.',
        },
        {
          text: '15 days for weekly or monthly pay policies, and 30 days for all other modes.',
          why: 'The grace period cannot be less than 15 days for weekly or monthly pay policies, and 30 days for all other modes. Coverage continues during the grace period.',
          correct: true,
        },
        {
          text: '30 days for weekly policies and 15 days for all other modes.',
          why: 'The minimums run the other way: not less than 15 days for weekly or monthly pay policies, and 30 days for all other modes.',
        },
      ],
    ),
    question(
      'c8q140',
      'If the premium is unpaid at the end of the grace period, what is the policy status?',
      [
        {
          text: 'It stays in force because coverage during the grace period never ends.',
          why: 'Coverage continues during the grace period, but that continuation ends when the grace period ends unpaid. If the premium is unpaid at the end of the grace period, the policy lapses.',
        },
        {
          text: 'It is reinstated automatically with no premium and no application.',
          why: 'Reinstatement is automatic if the company or an authorized representative accepts the premium and does not require a reinstatement application. An unpaid premium at the end of the grace period means the policy lapses.',
        },
        {
          text: 'Accidents and sickness are both covered immediately.',
          why: 'Immediate accident coverage and a 10-day sickness wait apply after reinstatement, not while an unpaid grace period is ending. The policy lapses if the premium is unpaid at the end of the grace period.',
        },
        {
          text: 'The policy lapses.',
          why: 'If the premium is unpaid at the end of the grace period, the policy lapses.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q141',
      'What happens to coverage during the grace period?',
      [
        {
          text: 'Coverage continues.',
          why: 'Coverage continues during the grace period. The grace period is the time after the premium due date during which the premium may still be paid before the policy lapses.',
          correct: true,
        },
        {
          text: 'Coverage stops on the premium due date.',
          why: 'The grace period begins after the premium due date so the premium may still be paid. Coverage continues during the grace period.',
        },
        {
          text: 'Only accidents are covered, and sickness waits 10 days.',
          why: 'Accidents are covered immediately and sickness waits 10 days after reinstatement. During the grace period, coverage continues.',
        },
        {
          text: 'The policy is treated as lapsed from the due date.',
          why: 'The policy lapses if the premium is unpaid at the end of the grace period, not on the due date itself. Coverage continues during the grace period.',
        },
      ],
    ),
    question(
      'c8q142',
      'After a divorce or annulment, how do waiting or probationary periods already satisfied apply to the spouse’s new policy?',
      [
        {
          text: 'They start over because the spouse must pass a medical exam.',
          why: 'The spouse has a right to an individual health policy without a medical exam, by completing an application and paying the premium. Waiting or probationary periods already satisfied count toward the new policy.',
        },
        {
          text: 'They count toward the new policy.',
          why: 'Waiting or probationary periods already satisfied count toward the new policy. When the insurer receives actual notice, it must promptly notify the spouse in writing of the right to an individual health policy without a medical exam, with coverage most nearly similar to the terminated coverage.',
          correct: true,
        },
        {
          text: 'They are replaced by the 10-day sickness wait used after reinstatement.',
          why: 'The 10-day sickness wait applies after reinstatement. On the spouse’s new policy, waiting or probationary periods already satisfied count toward that policy.',
        },
        {
          text: 'They extend the grace period from 15 days to 45 days.',
          why: 'Grace periods and the 45-day reinstatement period are separate from the spouse’s new policy. Waiting or probationary periods already satisfied count toward the new policy.',
        },
      ],
    ),
    question(
      'c8q143',
      'When is reinstatement automatic?',
      [
        {
          text: 'When the company refuses the application within 45 days after a conditional receipt.',
          why: 'If an application is required and a conditional receipt is issued, coverage is automatically reinstated if the company does not refuse it within 45 days after the conditional receipt was issued. Refusal is not itself automatic reinstatement.',
        },
        {
          text: 'When sickness is covered immediately and accidents wait 10 days.',
          why: 'After reinstatement, accidents are covered immediately and sickness is covered only after 10 days. Reinstatement is automatic if the premium is accepted and no reinstatement application is required.',
        },
        {
          text: 'When the company or an authorized representative accepts the premium and does not require a reinstatement application.',
          why: 'Reinstatement is automatic if the company or an authorized representative accepts the premium and does not require a reinstatement application.',
          correct: true,
        },
        {
          text: 'When an agent changes the contract without an executive officer.',
          why: 'Only an executive officer, not an agent, can make changes. Reinstatement is automatic if the premium is accepted and no reinstatement application is required.',
        },
      ],
    ),
    question(
      'c8q144',
      'After a policy is reinstated, how soon are accidents and sickness covered?',
      [
        {
          text: 'Both wait 45 days after the conditional receipt.',
          why: 'The 45-day period is the time the company has to refuse reinstatement after a conditional receipt. After reinstatement, accidents are covered immediately and sickness is covered only after 10 days.',
        },
        {
          text: 'Sickness is covered immediately, and accidents are covered only after 10 days.',
          why: 'The waits are reversed from the contract rule. Accidents are covered immediately after reinstatement, and sickness is covered only after 10 days.',
        },
        {
          text: 'Both wait until a new 30-day grace period ends.',
          why: '30 days is the minimum grace period for modes other than weekly or monthly. After reinstatement, accidents are covered immediately and sickness is covered only after 10 days.',
        },
        {
          text: 'Accidents are covered immediately, and sickness is covered only after 10 days.',
          why: 'Accidents are covered immediately after reinstatement. Sickness is covered only after 10 days, which protects the insurer from adverse selection.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q145',
      'How may the policyowner change the beneficiary?',
      [
        {
          text: 'At any time by a written request, and the beneficiary’s consent is not required unless the designation is irrevocable.',
          why: 'The policyowner may change the beneficiary at any time by a written request. The beneficiary’s consent is not required, unless the designation is irrevocable.',
          correct: true,
        },
        {
          text: 'Only during the grace period, and consent is always required.',
          why: 'The grace period is time to pay the premium, not the limit on beneficiary changes. The policyowner may change the beneficiary at any time by written request, and consent is required only if the designation is irrevocable.',
        },
        {
          text: 'Only an agent may make the change, and only by spoken agreement.',
          why: 'An agent cannot make contract changes, and a beneficiary change must be a written request by the policyowner. Consent is not required unless the designation is irrevocable.',
        },
        {
          text: 'Only after divorce, and only if the spouse passes a medical exam.',
          why: 'After divorce or annulment, the spouse may obtain an individual policy without a medical exam. The policyowner may change the beneficiary at any time by written request, without consent unless the designation is irrevocable.',
        },
      ],
    ),
  ],
  'c8-claims': [
    question(
      'c8q146',
      'Notice of claim must be given within what time after the loss?',
      [
        {
          text: 'Usually 15 days, the same period allowed for the company to supply claim forms.',
          why: 'Claim forms are supplied within a specified number of days, usually 15, after notice. Notice of claim itself is required within 20 days of the loss, or as soon as reasonably possible.',
        },
        {
          text: '20 days, or as soon as reasonably possible.',
          why: 'Notice of claim is required within 20 days of the loss, or as soon as reasonably possible. Notice to the agent equals notice to the insurer.',
          correct: true,
        },
        {
          text: '90 days, after which proof of loss is never accepted.',
          why: 'Proof of loss is due within 90 days of the loss, or as soon as reasonably possible, but not later than one year. Notice of claim is required within 20 days of the loss, or as soon as reasonably possible.',
        },
        {
          text: 'One year, and legal incompetence does not affect that deadline.',
          why: 'The one-year outer limit applies to proof of loss, and it does not apply if the claimant is not legally competent to comply. Notice of claim is required within 20 days of the loss, or as soon as reasonably possible.',
        },
      ],
    ),
    question(
      'c8q147',
      'While a claim is pending, which right does the insurer have?',
      [
        {
          text: 'It may examine the insured only if the insured pays the cost.',
          why: 'The insurer may examine the insured at its own expense. The exam may be as often as reasonably necessary while a claim is pending.',
        },
        {
          text: 'It may perform an autopsy even when state law forbids an autopsy.',
          why: 'The insurer may conduct an autopsy if state law does not forbid it. It may also examine the insured at its own expense as often as reasonably necessary while a claim is pending.',
        },
        {
          text: 'It may examine the insured, at its own expense, as often as reasonably necessary, and it may conduct an autopsy if state law does not forbid it.',
          why: 'The insurer may examine the insured, at its own expense, as often as reasonably necessary while a claim is pending, and may conduct an autopsy if state law does not forbid it.',
          correct: true,
        },
        {
          text: 'It may use a nonfraudulent misstatement to deny the claim after the policy has been in force for 2 years.',
          why: 'No statement or misstatement made in the application at issue, except a fraudulent misstatement, will be used to deny a claim after the policy has been in force for 2 years. Fraud may be used to deny a claim at any time.',
        },
      ],
    ),
    question(
      'c8q148',
      'After notice of claim, how soon must the company supply claim forms?',
      [
        {
          text: 'Within 20 days, or the claim is denied for late notice.',
          why: '20 days is the notice-of-claim period, or as soon as reasonably possible. After notice, the company must supply claim forms within a specified number of days, usually 15.',
        },
        {
          text: 'Within 90 days, and only if the claimant is legally competent.',
          why: 'Proof of loss is due within 90 days, or as soon as reasonably possible, but not later than one year, and legal competence affects that one-year limit. Claim forms are due within a specified number of days, usually 15.',
        },
        {
          text: 'Within 60 days, the only payment period a policy may state.',
          why: 'Claims are paid immediately upon written proof of loss, and policies often state 60, 45, or 30 days. Claim forms must be supplied within a specified number of days, usually 15.',
        },
        {
          text: 'Within a specified number of days, usually 15.',
          why: 'After notice, the company must supply claim forms within a specified number of days, usually 15. If forms are not furnished, the claimant complies by sending written proof of the occurrence, nature, and extent of the loss.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q149',
      'If claim forms are not furnished, how can the claimant comply?',
      [
        {
          text: 'By sending written proof of the occurrence, nature, and extent of the loss.',
          why: 'If forms are not furnished, the claimant complies by sending written proof of the occurrence, nature, and extent of the loss.',
          correct: true,
        },
        {
          text: 'By waiting 2 years and then sending no proof.',
          why: 'The time limit on certain defenses runs after the policy has been in force for 2 years, and it does not erase the duty to prove the loss. If forms are not furnished, the claimant sends written proof of the occurrence, nature, and extent of the loss.',
        },
        {
          text: 'By giving oral notice to a relative under a facility of payment clause.',
          why: 'A facility of payment clause lets the insurer pay up to a stated limit to a relative or other person equitably entitled to urgent claim funds. If forms are not furnished, compliance is written proof of the occurrence, nature, and extent of the loss.',
        },
        {
          text: 'By having the estate paid while the insured is still living.',
          why: 'Benefits are payable to the insured while the insured is living. If forms are not furnished, the claimant sends written proof of the occurrence, nature, and extent of the loss.',
        },
      ],
    ),
    question(
      'c8q150',
      'The one-year outer limit for proof of loss does not apply to which claimant?',
      [
        {
          text: 'A claimant who gave notice to the agent instead of to the insurer.',
          why: 'Notice to the agent equals notice to the insurer. The one-year limit does not apply if the claimant is not legally competent to comply.',
        },
        {
          text: 'A claimant who is not legally competent to comply.',
          why: 'Proof of loss is due within 90 days of the loss, or as soon as reasonably possible, but not later than one year. The one-year limit does not apply if the claimant is not legally competent to comply.',
          correct: true,
        },
        {
          text: 'A claimant who is receiving disability income each month.',
          why: 'Disability income benefits must be paid at least monthly. The one-year proof-of-loss limit does not apply if the claimant is not legally competent to comply.',
        },
        {
          text: 'A claimant whose policy has been in force for fewer than 20 days.',
          why: 'Notice of claim is required within 20 days of the loss, or as soon as reasonably possible. The one-year limit on proof of loss does not apply if the claimant is not legally competent to comply.',
        },
      ],
    ),
    question(
      'c8q151',
      'When are claims paid once written proof of loss is in?',
      [
        {
          text: 'No sooner than one year after the loss.',
          why: 'One year is the outer limit for submitting proof of loss, not a waiting period for payment. Claims are paid immediately upon written proof of loss.',
        },
        {
          text: 'Before notice of claim is given.',
          why: 'Notice of claim comes first, within 20 days of the loss or as soon as reasonably possible. Claims are paid immediately upon written proof of loss.',
        },
        {
          text: 'Immediately, and policies often state 60, 45, or 30 days.',
          why: 'Claims are paid immediately upon written proof of loss. Policies often state 60, 45, or 30 days.',
          correct: true,
        },
        {
          text: 'Only after an autopsy, and only in a state that forbids an autopsy.',
          why: 'The insurer may conduct an autopsy if state law does not forbid it. Claims are paid immediately upon written proof of loss, and policies often state 60, 45, or 30 days.',
        },
      ],
    ),
    question(
      'c8q152',
      'How often must disability income benefits be paid?',
      [
        {
          text: 'Once, 90 days after the loss.',
          why: 'Proof of loss is due within 90 days of the loss, or as soon as reasonably possible. Disability income benefits must be paid at least monthly.',
        },
        {
          text: 'No more often than once each year.',
          why: 'One year is the outer limit for proof of loss, aside from legal incompetence. Disability income benefits must be paid at least monthly.',
        },
        {
          text: 'Only after the insured has died.',
          why: 'Benefits are payable to the insured while the insured is living. Disability income benefits must be paid at least monthly.',
        },
        {
          text: 'At least monthly.',
          why: 'Disability income benefits must be paid at least monthly.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q153',
      'While the insured is living, to whom are benefits payable?',
      [
        {
          text: 'The insured.',
          why: 'Benefits are payable to the insured while the insured is living. If the insured is dead, pending claims are paid to the beneficiary, or to the estate if there is no beneficiary, unless benefits were assigned to a hospital or doctor.',
          correct: true,
        },
        {
          text: 'The estate.',
          why: 'The estate is paid if the insured is dead and there is no beneficiary, unless benefits were assigned to a hospital or doctor. While the insured is living, benefits are payable to the insured.',
        },
        {
          text: 'A relative, for the full claim, with no stated limit.',
          why: 'A facility of payment clause lets the insurer pay up to a stated limit to a relative or other person equitably entitled to urgent claim funds. While the insured is living, benefits are payable to the insured.',
        },
        {
          text: 'The beneficiary, because payment always waits until death.',
          why: 'The beneficiary is paid pending claims if the insured is dead. While the insured is living, benefits are payable to the insured.',
        },
      ],
    ),
    question(
      'c8q154',
      'What does a facility of payment clause let the insurer do?',
      [
        {
          text: 'Pay the full benefit to the estate while the insured is living.',
          why: 'While the insured is living, benefits are payable to the insured. A facility of payment clause lets the insurer pay up to a stated limit to a relative or other person equitably entitled to urgent claim funds.',
        },
        {
          text: 'Pay up to a stated limit to a relative or other person equitably entitled to urgent claim funds.',
          why: 'A facility of payment clause lets the insurer pay up to a stated limit to a relative or other person equitably entitled to urgent claim funds. If the insured is dead and there is no beneficiary, pending claims are paid to the estate unless benefits were assigned to a hospital or doctor.',
          correct: true,
        },
        {
          text: 'Conduct an autopsy in a state that forbids an autopsy.',
          why: 'An autopsy is allowed if state law does not forbid it. A facility of payment clause pays up to a stated limit to a relative or other person equitably entitled to urgent claim funds.',
        },
        {
          text: 'Deny a claim for a condition that was not specifically excluded when the loss begins more than 2 years after issue.',
          why: 'A claim for loss or disability that begins more than 2 years after issue may not be reduced or denied because a disease or physical condition, not specifically excluded, existed before the effective date. A facility of payment clause is a limited payment to someone equitably entitled to urgent funds.',
        },
      ],
    ),
    question(
      'c8q155',
      'A disease or physical condition existed before the effective date and was not specifically excluded. Which claim rule applies?',
      [
        {
          text: 'Any misstatement in the application, including a nonfraudulent one, can deny the claim after 2 years.',
          why: 'No statement or misstatement made in the application at issue, except a fraudulent misstatement, will be used to deny a claim after the policy has been in force for 2 years. Fraud may be used to deny a claim at any time.',
        },
        {
          text: 'The claim must be denied if notice arrived within 20 days of the loss.',
          why: 'Notice within 20 days, or as soon as reasonably possible, satisfies the notice rule. A claim for loss or disability beginning more than 2 years after issue may not be reduced or denied for a disease or physical condition that was not specifically excluded.',
        },
        {
          text: 'A claim for loss or disability that begins more than 2 years after issue may not be reduced or denied because of that condition.',
          why: 'The time limit on certain defenses is similar to life insurance incontestability. A claim for loss or disability that begins more than 2 years after issue may not be reduced or denied because a disease or physical condition, not specifically excluded, existed before the effective date.',
          correct: true,
        },
        {
          text: 'Disability income must be paid as one sum instead of at least monthly.',
          why: 'Disability income benefits must be paid at least monthly. The pre-existing condition rule bars reducing or denying a claim that begins more than 2 years after issue when the condition was not specifically excluded.',
        },
      ],
    ),
  ],
  'c8-adjustments': [
    question(
      'c8q156',
      'After proof of loss, when may the insured bring legal action against the company?',
      [
        {
          text: 'During the first 10 days after delivery of the policy.',
          why: 'The free look commonly gives 10 days from delivery to return the policy for a full refund. Legal action must wait 60 days, but not later than 3 years in most states, after proof of loss.',
        },
        {
          text: 'Within 30 days, using the free-look period that applies to certain replacement policies.',
          why: 'Replacement policies whose required free-look period is 30 days are outside the 10-day free look. Legal action must wait 60 days, but not later than 3 years in most states, after proof of loss.',
        },
        {
          text: 'Immediately, with no waiting period after proof of loss.',
          why: 'The insured must wait before suing. The wait is 60 days, but not later than 3 years in most states, after proof of loss.',
        },
        {
          text: 'After waiting 60 days, but not later than 3 years in most states.',
          why: 'The insured must wait 60 days, but not later than 3 years in most states, after proof of loss before bringing legal action against the company.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q157',
      'The age on the application was wrong. How are benefits adjusted?',
      [
        {
          text: 'To what the premium paid would have purchased at the correct age.',
          why: 'If the age on the application was wrong, benefits are adjusted to what the premium paid would have purchased at the correct age.',
          correct: true,
        },
        {
          text: 'By a full refund under the free look, even after 10 days from delivery.',
          why: 'The free look commonly gives 10 days from delivery to return the policy for a full refund. A wrong age adjusts benefits to what the premium paid would have purchased at the correct age.',
        },
        {
          text: 'By denying liability because the named occupation was legal.',
          why: 'Liability is denied for injury while committing an illegal act or while engaged in an illegal occupation. A wrong age adjusts benefits to what the premium paid would have purchased at the correct age.',
        },
        {
          text: 'By adding past-due premiums on top of the full benefit.',
          why: 'On payment of a claim, past-due premiums are deducted and the policyholder is paid the net amount. A wrong age adjusts benefits to what the premium paid would have purchased at the correct age.',
        },
      ],
    ),
    question(
      'c8q158',
      'Which change lets the insured apply for a rate reduction?',
      [
        {
          text: 'A move to a more hazardous occupation.',
          why: 'If the insured changes to a more hazardous occupation, benefits are reduced to what the premiums paid would have purchased for that occupation. A less hazardous change lets the insured apply for a rate reduction.',
        },
        {
          text: 'A move to a less hazardous occupation.',
          why: 'Occupation is especially important for disability income. If the change is to a less hazardous occupation, the insured may apply for a rate reduction.',
          correct: true,
        },
        {
          text: 'An injury while committing an illegal act.',
          why: 'Liability is denied if the insured is injured while committing an illegal act or while engaged in an illegal occupation. A rate reduction may be requested after a change to a less hazardous occupation.',
        },
        {
          text: 'Discovery that the age on the application was wrong.',
          why: 'A wrong age adjusts benefits to what the premium paid would have purchased at the correct age. A rate reduction may be requested when the occupation becomes less hazardous.',
        },
      ],
    ),
    question(
      'c8q159',
      'Liability is denied if the insured is injured in which situation?',
      [
        {
          text: 'While changing to a less hazardous occupation.',
          why: 'A change to a less hazardous occupation lets the insured apply for a rate reduction. Liability is denied for injury while committing an illegal act or while engaged in an illegal occupation.',
        },
        {
          text: 'While the age stated on the application is accurate.',
          why: 'An accurate age does not trigger a benefit adjustment or a denial. Liability is denied for injury while committing an illegal act or while engaged in an illegal occupation.',
        },
        {
          text: 'While committing an illegal act or while engaged in an illegal occupation.',
          why: 'Liability is denied if the insured is injured while committing an illegal act or while engaged in an illegal occupation.',
          correct: true,
        },
        {
          text: 'While past-due premiums are deducted from a lawful claim.',
          why: 'Past-due premiums are deducted and the policyholder is paid the net amount. That deduction is not a denial for an illegal act or an illegal occupation.',
        },
      ],
    ),
    question(
      'c8q160',
      'On payment of a claim, what happens to past-due premiums?',
      [
        {
          text: 'They are added to the benefit.',
          why: 'Past-due premiums are deducted, not added. The policyholder is paid the net amount.',
        },
        {
          text: 'They lengthen the free look from 10 days to 30 days.',
          why: 'The common free look is 10 days, and 30 days is the required free-look period for certain replacement policies. Past-due premiums are deducted from the claim, and the policyholder is paid the net amount.',
        },
        {
          text: 'They are waived because the insuring clause is on the first page.',
          why: 'The insuring clause is usually on the first page and identifies the insured, the company, and the kind of loss covered. Past-due premiums are still deducted, and the policyholder is paid the net amount.',
        },
        {
          text: 'They are deducted, and the policyholder is paid the net amount.',
          why: 'On payment of a claim, past-due premiums are deducted and the policyholder is paid the net amount.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q161',
      'On the policy’s effective date, a provision conflicts with the statutes of the state where the insured resides on that date. What happens to that provision?',
      [
        {
          text: 'It is automatically amended to the minimum the statutes require.',
          why: 'Any provision that conflicts, on the policy’s effective date, with the statutes of the state where the insured resides on that date is automatically amended to the minimum the statutes require. This conformity provision is optional, but most states require it in every health contract.',
          correct: true,
        },
        {
          text: 'It voids the policy back to the day of delivery.',
          why: 'The free look deals with returning a policy after delivery. A conflicting provision is automatically amended to the minimum the statutes require.',
        },
        {
          text: 'It stays as written because a conformity provision is forbidden in a health contract.',
          why: 'The conformity provision is optional, but most states require it in every health contract. A conflicting provision is automatically amended to the minimum the statutes require.',
        },
        {
          text: 'It is amended only if the insured later changes occupation.',
          why: 'Occupation changes affect disability benefits or a rate-reduction request. A provision that conflicts with the statutes of the state of residence on the effective date is automatically amended to the statutory minimum.',
        },
      ],
    ),
    question(
      'c8q162',
      'Which description fits the insuring clause?',
      [
        {
          text: 'It sets the common 10-day free look and applies that period to group policies.',
          why: 'The free look commonly gives 10 days from delivery, and that 10-day period does not apply to group policies. The insuring clause is usually on the first page, identifies the insured and the company, and states what kind of loss is covered.',
        },
        {
          text: 'It is usually on the first page, identifies the insured and the company, and states what kind of loss is covered.',
          why: 'The insuring clause is usually on the first page. It identifies the insured and the company and states what kind of loss is covered.',
          correct: true,
        },
        {
          text: 'It deducts past-due premiums and pays the net amount.',
          why: 'Deducting past-due premiums happens on payment of a claim. The insuring clause identifies the insured and the company and states what kind of loss is covered.',
        },
        {
          text: 'It is the 60-day wait after proof of loss before legal action.',
          why: 'The insured must wait 60 days, but not later than 3 years in most states, after proof of loss before legal action. The insuring clause identifies who is covered and what kind of loss is covered.',
        },
      ],
    ),
    question(
      'c8q163',
      'The consideration clause says both parties must give valuable consideration. What is the applicant’s consideration?',
      [
        {
          text: 'The promise to pay according to the contract.',
          why: 'The promise to pay according to the contract is the insurer’s consideration. The applicant’s consideration is payment of the premium and the statements in the application.',
        },
        {
          text: '10 days from delivery in which to return the policy.',
          why: 'The free look commonly gives 10 days from delivery to return the policy for a full refund. The applicant’s consideration is payment of the premium and the statements in the application.',
        },
        {
          text: 'Payment of the premium and the statements in the application.',
          why: 'The applicant’s consideration is payment of the premium and the statements in the application. The consideration clause, also usually on the first page, states that both parties must give valuable consideration.',
          correct: true,
        },
        {
          text: 'Written notice of nonrenewal sent to the last known address.',
          why: 'Nonrenewal notice is mailed or delivered to the policyholder’s last known address when the insurer reserves the right to refuse renewal. The applicant’s consideration is payment of the premium and the statements in the application.',
        },
      ],
    ),
    question(
      'c8q164',
      'What consideration does the insurer give?',
      [
        {
          text: 'Payment of the premium and the statements in the application.',
          why: 'Payment of the premium and the statements in the application are the applicant’s consideration. The insurer’s consideration is the promise to pay according to the contract.',
        },
        {
          text: 'A wait of 3 years after proof of loss before any claim may be sent.',
          why: 'Legal action, not the claim itself, must wait 60 days and not later than 3 years in most states after proof of loss. The insurer’s consideration is the promise to pay according to the contract.',
        },
        {
          text: 'A rate reduction whenever the occupation becomes more hazardous.',
          why: 'A more hazardous occupation reduces benefits to what the premiums paid would have purchased for that occupation. The insurer’s consideration is the promise to pay according to the contract.',
        },
        {
          text: 'The promise to pay according to the contract.',
          why: 'The insurer’s consideration is the promise to pay according to the contract. The consideration clause states that both parties must give valuable consideration.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q165',
      'The free look, or right to examine, commonly gives how many days from delivery to return the policy for a full refund?',
      [
        {
          text: '10 days.',
          why: 'The free look, or right to examine, commonly gives the insured 10 days from delivery to return the policy for a full refund. It is mandated for individual policies in most states.',
          correct: true,
        },
        {
          text: '30 days on every individual policy.',
          why: '30 days is the required free-look period for certain replacement policies, which are outside the 10-day free look. The common free look is 10 days from delivery.',
        },
        {
          text: '60 days after proof of loss.',
          why: '60 days is the wait after proof of loss before legal action. The free look commonly gives 10 days from delivery to return the policy for a full refund.',
        },
        {
          text: '3 years in most states.',
          why: '3 years in most states is the outer time for legal action after proof of loss. The free look commonly gives 10 days from delivery.',
        },
      ],
    ),
    question(
      'c8q166',
      'Which policy stands outside the 10-day free look?',
      [
        {
          text: 'An individual policy in a state that mandates the free look.',
          why: 'The free look is mandated for individual policies in most states. The 10-day free look does not apply to a group policy, to a replacement policy whose required free-look period is 30 days, or to another class the Commissioner sets aside. Credit life is life insurance, so it is not an exception on this health list.',
        },
        {
          text: 'A replacement policy whose required free-look period is 30 days.',
          why: 'The 10-day free look does not apply to a group policy, to a replacement policy whose required free-look period is 30 days, or to another class the Commissioner sets aside. Credit life is life insurance, so it is not an exception on this health list.',
          correct: true,
        },
        {
          text: 'A policy whose insuring clause is on the first page.',
          why: 'The insuring clause is usually on the first page of the policy. That placement does not remove the 10-day free look, which is mandated for individual policies in most states.',
        },
        {
          text: 'A policy that states the renewal conditions on the face page.',
          why: 'The face page must state the conditions for renewal. That requirement does not place the policy outside the 10-day free look.',
        },
      ],
    ),
    question(
      'c8q167',
      'The insurer reserves the right to refuse renewal. What must it do?',
      [
        {
          text: 'Continue protection without a cancellation provision, because that absence guarantees renewal.',
          why: 'Coverage is for a specified term, so the lack of a cancellation provision does not guarantee continuing protection. The insurer may still refuse to renew, and it must mail or deliver written notice of nonrenewal to the policyholder’s last known address.',
        },
        {
          text: 'Apply a 10-day free look to a group policy and refund the premium.',
          why: 'The 10-day free look does not apply to group policies. If the insurer reserves the right to refuse renewal, it must mail or deliver written notice of nonrenewal to the policyholder’s last known address.',
        },
        {
          text: 'Mail or deliver written notice of nonrenewal to the policyholder’s last known address.',
          why: 'If the insurer reserves the right to refuse renewal, it must mail or deliver written notice of nonrenewal to the policyholder’s last known address. The face page must state the conditions for renewal, and the insurer may still refuse to renew.',
          correct: true,
        },
        {
          text: 'Reduce the rate because the insured moved to a less hazardous occupation.',
          why: 'A less hazardous occupation lets the insured apply for a rate reduction. Refusal of renewal instead requires written notice of nonrenewal to the policyholder’s last known address.',
        },
      ],
    ),
  ],
  'c8-renew': [
    question(
      'c8q168',
      'Which premium rule applies to a noncancellable policy?',
      [
        {
          text: 'The insurer may raise the premium on each anniversary for one insured person.',
          why: 'A guaranteed renewable premium may be increased on a class basis only, not on an individual policy. On a noncancellable policy, the premium cannot be increased beyond what the policy states.',
        },
        {
          text: 'The insurer may cancel for any reason on a homogeneous class.',
          why: 'Optional renewability lets the insurer cancel for any reason on certain homogeneous classes, not on individuals within a class. A noncancellable policy cannot be cancelled, and the premium cannot be increased beyond what the policy states.',
        },
        {
          text: 'The premium must rise when a short-term health plan reaches the end of its term.',
          why: 'A nonrenewable policy, also called cancellable or term, covers a specified period, and the insured must buy another policy when the term ends. A noncancellable premium cannot be increased beyond what the policy states.',
        },
        {
          text: 'The premium cannot be increased beyond what the policy states.',
          why: 'A noncancellable policy cannot be cancelled, and the premium cannot be increased beyond what the policy states. The insured may renew for the life of the contract, and any stated increase, such as at age 65, must be in the original contract.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q169',
      'The guarantee to renew a noncancellable policy usually applies until which point?',
      [
        {
          text: 'Age 65, when the insured is usually eligible for Medicare.',
          why: 'The insured may renew for the life of the contract. The guarantee to renew usually applies until age 65, when the insured is usually eligible for Medicare.',
          correct: true,
        },
        {
          text: 'The next premium due date, after which the insurer may cancel for any reason.',
          why: 'An optionally renewable insurer can decide not to renew only on a policy anniversary or premium due date, and it may cancel for any reason on certain homogeneous classes. The noncancellable guarantee to renew usually applies until age 65.',
        },
        {
          text: 'The end of a summer camp or athletic event.',
          why: 'Policies for a summer camp or athletic event are nonrenewable period-of-time policies, and coverage ends when the event is over. The noncancellable guarantee to renew usually applies until age 65.',
        },
        {
          text: 'Age 65, with no way for disability income to continue after that age.',
          why: 'Disability income is renewed beyond 65 only if the insured shows continued full-time work. The guarantee to renew usually applies until age 65, when the insured is usually eligible for Medicare.',
        },
      ],
    ),
    question(
      'c8q170',
      'Disability income on a noncancellable policy may be renewed beyond age 65 in which case?',
      [
        {
          text: 'In every case, with no work requirement.',
          why: 'The guarantee to renew usually applies until age 65. Disability income is renewed beyond 65 only if the insured shows continued full-time work.',
        },
        {
          text: 'Only if the insured shows continued full-time work.',
          why: 'Disability income is renewed beyond 65 only if the insured shows continued full-time work.',
          correct: true,
        },
        {
          text: 'Only when the insurer is cancelling the class on a premium due date.',
          why: 'Optional nonrenewal is decided on a policy anniversary or premium due date for a homogeneous class. Disability income on a noncancellable policy is renewed beyond 65 only if the insured shows continued full-time work.',
        },
        {
          text: 'Only if a Medicare supplement policy is cancelled at age 65.',
          why: 'Medicare supplement and long-term care policies must be written as guaranteed renewable, and the company cannot cancel them at the insured’s age 65. Disability income is renewed beyond 65 only with continued full-time work.',
        },
      ],
    ),
    question(
      'c8q171',
      'How may premiums be increased on a guaranteed renewable policy?',
      [
        {
          text: 'On one individual policy because that person submitted claims.',
          why: 'Premiums may be increased on a class basis only, not on an individual policy. A conditionally renewable policy may not be denied renewal because of claims experience.',
        },
        {
          text: 'They cannot be increased for any reason.',
          why: 'A noncancellable premium cannot be increased beyond what the policy states. On a guaranteed renewable policy, the insurer can increase the premium on the policy anniversary, on a class basis only.',
        },
        {
          text: 'On a class basis only, not on an individual policy.',
          why: 'The insured has the unilateral right to renew for the life of the contract. The insurer can increase the premium on the policy anniversary, and premiums may be increased on a class basis only, not on an individual policy.',
          correct: true,
        },
        {
          text: 'By cancelling that insured at age 65.',
          why: 'Guaranteed renewable coverage generally is not renewable beyond age 65, but Medicare supplement and long-term care policies cannot be cancelled at the insured’s age 65. A premium increase is made on a class basis, not by cancelling one insured.',
        },
      ],
    ),
    question(
      'c8q172',
      'How must Medicare supplement and long-term care policies be written?',
      [
        {
          text: 'As nonrenewable term coverage that ends when an event is over.',
          why: 'Travel accident, short-term health, accident-only, school, camp, and athletic policies are nonrenewable, and coverage ends when the event is over. Medicare supplement and long-term care policies must be written as guaranteed renewable.',
        },
        {
          text: 'As optionally renewable coverage that can drop one person inside a class.',
          why: 'Optional renewability cancels on certain homogeneous classes, not on individuals within a class. Medicare supplement and long-term care policies must be guaranteed renewable, and the company cannot cancel them at the insured’s age 65.',
        },
        {
          text: 'As conditionally renewable coverage that ends because the insured is employed.',
          why: 'One conditionally renewable example is that the insured must be employed to collect disability payments. Medicare supplement and long-term care policies must be written as guaranteed renewable.',
        },
        {
          text: 'As guaranteed renewable coverage, and the company cannot cancel them at the insured’s age 65.',
          why: 'Medicare supplement and long-term care policies must be written as guaranteed renewable, and the company cannot cancel them at the insured’s age 65. Other guaranteed renewable coverage generally is not renewable beyond age 65.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q173',
      'A conditionally renewable policy may be terminated at which time?',
      [
        {
          text: 'Only at renewal, for conditions stated in the contract.',
          why: 'A conditionally renewable policy may be terminated only at renewal, for conditions stated in the contract. Premiums may be increased, the company may not deny renewal because of claims experience, and one example is that the insured must be employed to collect disability payments.',
          correct: true,
        },
        {
          text: 'At any time, for any reason, including one individual inside a class.',
          why: 'Optional renewability allows cancellation for any reason on certain homogeneous classes, not on individuals within a class, and only on a policy anniversary or premium due date. Conditional termination is only at renewal for conditions stated in the contract.',
        },
        {
          text: 'Never, because the premium is forbidden to change.',
          why: 'Premiums on a conditionally renewable policy may be increased. Termination is allowed only at renewal, for conditions stated in the contract.',
        },
        {
          text: 'When a travel accident ends, because the coverage is only a period of time.',
          why: 'A travel accident policy is a nonrenewable period-of-time policy, and coverage ends when the event is over. A conditionally renewable policy is terminated only at renewal for stated conditions.',
        },
      ],
    ),
    question(
      'c8q174',
      'Optional renewability lets the insurer cancel in which way?',
      [
        {
          text: 'Only for a condition written in the contract, such as a requirement to be employed.',
          why: 'A conditionally renewable policy may be terminated only at renewal for conditions stated in the contract, such as employment in order to collect disability payments. Optional renewability lets the insurer cancel for any reason on certain homogeneous classes, not on individuals within a class.',
        },
        {
          text: 'For any reason, on certain homogeneous classes, not on individuals within a class.',
          why: 'Optional renewability is similar to conditional renewability, except the insurer may cancel for any reason, on certain homogeneous classes, not on individuals within a class.',
          correct: true,
        },
        {
          text: 'It cannot cancel, and it cannot increase the premium.',
          why: 'A noncancellable policy cannot be cancelled, and its premium cannot be increased beyond what the policy states. Under optional renewability the insurer may cancel for any reason on certain homogeneous classes, and if it renews it may increase the premium.',
        },
        {
          text: 'By treating the policy as cancellable term that ends in the middle of a covered trip.',
          why: 'Cancellable or term is another name for a nonrenewable policy, which covers a specified period. Optional renewability instead lets the insurer cancel for any reason on certain homogeneous classes, not on individuals within a class.',
        },
      ],
    ),
    question(
      'c8q175',
      'An optionally renewable insurer may decide not to renew only on which date?',
      [
        {
          text: 'Any day the insurer chooses, including the day after a claim.',
          why: 'The company may not deny renewal of a conditionally renewable policy because of claims experience. An optionally renewable insurer can decide not to renew only on a policy anniversary or premium due date.',
        },
        {
          text: 'The insured’s age 65, and only for a Medicare supplement policy.',
          why: 'The company cannot cancel a Medicare supplement or long-term care policy at the insured’s age 65. An optionally renewable insurer can decide not to renew only on a policy anniversary or premium due date.',
        },
        {
          text: 'A policy anniversary or premium due date.',
          why: 'The insurer can decide not to renew only on a policy anniversary or premium due date. If it renews, it may also increase the premium.',
          correct: true,
        },
        {
          text: 'The day full-time work stops, even before age 65.',
          why: 'Continued full-time work is what lets noncancellable disability income renew beyond age 65. Optional nonrenewal can be decided only on a policy anniversary or premium due date.',
        },
      ],
    ),
    question(
      'c8q176',
      'A nonrenewable policy is also called by which names?',
      [
        {
          text: 'Noncancellable.',
          why: 'A noncancellable policy cannot be cancelled, and the premium cannot be increased beyond what the policy states. A nonrenewable policy is also called cancellable or term.',
        },
        {
          text: 'Guaranteed renewable.',
          why: 'Guaranteed renewable coverage gives the insured a unilateral right to renew, with class-basis premium increases. A nonrenewable policy is also called cancellable or term.',
        },
        {
          text: 'Conditionally renewable.',
          why: 'A conditionally renewable policy may be terminated only at renewal for conditions stated in the contract. A nonrenewable policy is also called cancellable or term.',
        },
        {
          text: 'Cancellable or term.',
          why: 'A nonrenewable policy, also called cancellable or term, covers a specified period and is not renewable. When the term ends, the insured must buy another policy.',
          correct: true,
        },
      ],
    ),
    question(
      'c8q177',
      'Which coverage is a nonrenewable period-of-time policy?',
      [
        {
          text: 'A travel accident policy.',
          why: 'Examples are travel accident policies, short-term health plans, and accident-only policies, and policies for a school function, summer camp, or athletic event. When the event is over, coverage ends, and when the term ends the insured must buy another policy.',
          correct: true,
        },
        {
          text: 'Noncancellable disability income that can continue past age 65 with full-time work.',
          why: 'Disability income on a noncancellable policy is renewed beyond 65 only if the insured shows continued full-time work. A travel accident policy is an example of nonrenewable period-of-time coverage.',
        },
        {
          text: 'A Medicare supplement policy that must be guaranteed renewable.',
          why: 'Medicare supplement and long-term care policies must be written as guaranteed renewable, and the company cannot cancel them at the insured’s age 65. A travel accident policy is nonrenewable period-of-time coverage.',
        },
        {
          text: 'A guaranteed renewable policy that gives the insured a unilateral right to renew for the life of the contract.',
          why: 'On guaranteed renewable coverage, the insured has the unilateral right to renew for the life of the contract. A nonrenewable policy covers a specified period, such as a travel accident policy, and is not renewable.',
        },
      ],
    ),
  ],
}
