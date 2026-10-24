import { question } from '../build.ts'
import type { Question } from '../types.ts'

export const chapter13Extra: Record<string, Question[]> = {
'c13-parts': [
    question(
      'c13q21',
      'What is Medicare?',
      [
        {
          text: 'A federal medical expense insurance program for people age 65 and older, even if the person continues to work.',
          why: 'Medicare is a federal medical expense insurance program for people age 65 and older, even if the person continues to work.',
          correct: true,
        },
        {
          text: 'A program that ends once a person age 65 or older continues to work.',
          why: 'Coverage at age 65 and older continues even if the person keeps working. Working does not end Medicare.',
        },
        {
          text: 'Hospital insurance financed through a portion of the payroll tax (FICA).',
          why: 'That financing describes Part A. Medicare is the federal medical expense program for people age 65 and older, even if the person continues to work.',
        },
        {
          text: 'Prescription drug coverage.',
          why: 'Prescription drug coverage is Part D. Medicare is the federal medical expense insurance program for people age 65 and older.',
        },
      ],
    ),
    question(
      'c13q22',
      'What may be true of a person age 65 or older who is a recent green-card holder or a new immigrant and who never worked in the United States?',
      [
        {
          text: 'The person immediately receives free Medicare because age 65 is enough.',
          why: 'Recent green-card holders or new immigrants age 65 or older who never worked in the United States may not immediately qualify. Age alone does not remove that limit.',
        },
        {
          text: 'The person may not immediately qualify.',
          why: 'Persons age 65 or older who are recent green-card holders or new immigrants and who never worked in the United States may not immediately qualify.',
          correct: true,
        },
        {
          text: 'The person may buy Medicare only by using Part D prescription drug coverage.',
          why: 'Part D is prescription drug coverage. It is not the rule that decides whether these recent green-card holders or new immigrants immediately qualify.',
        },
        {
          text: 'The person is an enrollee, a term that includes dependents of the insured.',
          why: 'An enrollee is a person enrolled in a health plan, an insured, and the term does not include dependents. That term does not grant immediate qualification.',
        },
      ],
    ),
    question(
      'c13q23',
      'A person does not qualify for free Medicare. When can that person still buy it?',
      [
        {
          text: 'After constantly living in the United States for fewer than 5 years.',
          why: 'A lawfully admitted alien must have constantly lived in the United States for 5 years or longer and must not qualify for Social Security benefits. Fewer than 5 years does not meet that test.',
        },
        {
          text: 'At any age after 2 years of Social Security disability income benefits or permanent kidney failure, with no further citizenship or residency test.',
          why: 'Disability income benefits for 2 years, or permanent kidney failure, can make benefits available regardless of age. Buying Medicare when free coverage is unavailable is a different rule and requires age 65 or older plus naturalization or the 5-year residence test.',
        },
        {
          text: 'At age 65 or older after recent naturalization without enough Social Security quarters, or as a lawfully admitted alien with 5 years of constant U.S. residence who does not qualify for Social Security benefits.',
          why: 'Someone who does not qualify for free Medicare can still buy it at age 65 or older in either of those situations: recent naturalization without enough quarters, or 5 years or longer as a lawfully admitted alien who does not qualify for Social Security benefits.',
          correct: true,
        },
        {
          text: 'Only by receiving all health care services through available provider organizations.',
          why: 'Receiving all health care services through available provider organizations describes Part C, Medicare Advantage. It is not the path for buying Medicare when free coverage is unavailable.',
        },
      ],
    ),
    question(
      'c13q24',
      'Which agency administers Medicare?',
      [
        {
          text: 'Original Medicare, meaning Part A and Part B only.',
          why: 'Original Medicare means Part A and Part B only. Medicare is administered by the Centers for Medicare & Medicaid Services (CMS), which is part of the United States Department of Health and Human Services.',
        },
        {
          text: 'A network provider that contracts with other providers to serve the network’s subscribers.',
          why: 'A network provider contracts with other providers to serve the network’s subscribers. That role is not administration of Medicare.',
        },
        {
          text: 'An HMO focused on preventive care.',
          why: 'An HMO is a prepaid medical service plan in which specified providers contract with the organization, with a focus on preventive care. It does not administer Medicare.',
        },
        {
          text: 'The Centers for Medicare & Medicaid Services (CMS), which is part of the United States Department of Health and Human Services.',
          why: 'Medicare is administered by the Centers for Medicare & Medicaid Services (CMS), which is part of the United States Department of Health and Human Services.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q25',
      'How is Part A, hospital insurance, financed?',
      [
        {
          text: 'Through a portion of the payroll tax (FICA).',
          why: 'Part A, hospital insurance, is financed through a portion of the payroll tax (FICA).',
          correct: true,
        },
        {
          text: 'By monthly premiums paid by insureds and by general revenues of the federal government.',
          why: 'Those sources finance Part B, medical insurance. Part A is financed through a portion of the payroll tax (FICA).',
        },
        {
          text: 'As prescription drug coverage.',
          why: 'Prescription drug coverage is Part D. Part A is hospital insurance financed through a portion of the payroll tax (FICA).',
        },
        {
          text: 'By a nonforfeiture benefit paid after premiums stop.',
          why: 'A nonforfeiture benefit is a cash or insurance benefit received by a policyholder who no longer wishes to pay premiums after paying for at least the minimum period. It does not finance Part A.',
        },
      ],
    ),
    question(
      'c13q26',
      'How is Part B, medical insurance, financed?',
      [
        {
          text: 'Through a portion of the payroll tax (FICA).',
          why: 'A portion of the payroll tax (FICA) finances Part A. Part B is financed by monthly premiums paid by insureds and by general revenues of the federal government.',
        },
        {
          text: 'By monthly premiums paid by insureds and by general revenues of the federal government.',
          why: 'Part B, medical insurance, is financed by monthly premiums paid by insureds and by general revenues of the federal government.',
          correct: true,
        },
        {
          text: 'By routing all health care services through available provider organizations.',
          why: 'That describes Part C, Medicare Advantage. Part B is financed by monthly premiums and general revenues of the federal government.',
        },
        {
          text: 'By the outline of coverage given to the applicant.',
          why: 'An outline of coverage is a document required in all health insurance policies that gives the applicant a full coverage disclosure. It does not finance Part B.',
        },
      ],
    ),
    question(
      'c13q27',
      'What does Part C, Medicare Advantage, let people do?',
      [
        {
          text: 'Finance hospital insurance through a portion of the payroll tax (FICA).',
          why: 'Payroll-tax financing belongs to Part A. Part C lets people receive all of their health care services through available provider organizations.',
        },
        {
          text: 'Treat prescription drug coverage as the whole program.',
          why: 'Prescription drug coverage is Part D. Part C lets people receive all of their health care services through available provider organizations.',
        },
        {
          text: 'Receive all of their health care services through available provider organizations.',
          why: 'Part C, Medicare Advantage, lets people receive all of their health care services through available provider organizations.',
          correct: true,
        },
        {
          text: 'Define Original Medicare as Part A and Part B only.',
          why: 'Original Medicare means Part A and Part B only. Part C is the Medicare Advantage way to receive services through available provider organizations.',
        },
      ],
    ),
    question(
      'c13q28',
      'What does Original Medicare mean?',
      [
        {
          text: 'Part C and Part D.',
          why: 'Part C is Medicare Advantage, and Part D is prescription drug coverage. Original Medicare means Part A and Part B only.',
        },
        {
          text: 'All four parts of Medicare.',
          why: 'Medicare has four parts, but Original Medicare means Part A and Part B only.',
        },
        {
          text: 'Part A only.',
          why: 'Part A is hospital insurance. Original Medicare means Part A and Part B only.',
        },
        {
          text: 'Part A and Part B only.',
          why: 'Original Medicare means Part A and Part B only.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q29',
      'From whom may a patient receive care under Original Medicare?',
      [
        {
          text: 'Any doctor, provider, hospital, or facility that accepts Medicare patients.',
          why: 'Original Medicare covers care from any doctor, provider, hospital, or facility that accepts Medicare patients.',
          correct: true,
        },
        {
          text: 'Only a primary care doctor the patient must choose.',
          why: 'The patient does not have to choose a primary care doctor. Care may come from any doctor, provider, hospital, or facility that accepts Medicare patients.',
        },
        {
          text: 'Only a specialist, and only after a referral.',
          why: 'The patient does not need a referral to see a specialist enrolled in Medicare. Original Medicare is not limited to referred specialists.',
        },
        {
          text: 'Only a network provider who contracts with other providers.',
          why: 'A network provider contracts with other providers to serve the network’s subscribers. Original Medicare covers any accepting doctor, provider, hospital, or facility.',
        },
      ],
    ),
    question(
      'c13q30',
      'What is usually true of prescription drugs under Original Medicare?',
      [
        {
          text: 'Original Medicare is prescription drug coverage.',
          why: 'Prescription drug coverage is Part D. Original Medicare means Part A and Part B only, and it usually does not cover prescription drugs.',
        },
        {
          text: 'It usually does not cover prescription drugs.',
          why: 'Original Medicare usually does not cover prescription drugs.',
          correct: true,
        },
        {
          text: 'Drugs are the benefit financed through a portion of the payroll tax (FICA).',
          why: 'A portion of the payroll tax (FICA) finances Part A, hospital insurance. Original Medicare usually does not cover prescription drugs.',
        },
        {
          text: 'Drugs are covered only after the patient chooses a primary care doctor.',
          why: 'The patient does not have to choose a primary care doctor. Original Medicare usually does not cover prescription drugs.',
        },
      ],
    ),
    question(
      'c13q31',
      'What must a patient under Original Medicare do before seeing a specialist?',
      [
        {
          text: 'Choose a primary care doctor first.',
          why: 'The patient does not have to choose a primary care doctor. No referral is required when the specialist is enrolled in Medicare.',
        },
        {
          text: 'Obtain a referral.',
          why: 'The patient does not need a referral to see a specialist, as long as the specialist is enrolled in Medicare.',
        },
        {
          text: 'No primary-care choice and no referral, if the specialist is enrolled in Medicare.',
          why: 'The patient does not have to choose a primary care doctor and does not need a referral to see a specialist, as long as the specialist is enrolled in Medicare.',
          correct: true,
        },
        {
          text: 'Use only an HMO network provider.',
          why: 'An HMO is a prepaid plan with specified providers and a focus on preventive care. Original Medicare does not require that path for a specialist enrolled in Medicare.',
        },
      ],
    ),
    question(
      'c13q32',
      'What is Part D?',
      [
        {
          text: 'Hospital insurance financed through a portion of the payroll tax (FICA).',
          why: 'That is Part A. Part D is prescription drug coverage.',
        },
        {
          text: 'Medical insurance financed by monthly premiums and general revenues of the federal government.',
          why: 'That is Part B. Part D is prescription drug coverage.',
        },
        {
          text: 'Medicare Advantage through available provider organizations.',
          why: 'That is Part C. Part D is prescription drug coverage.',
        },
        {
          text: 'Prescription drug coverage.',
          why: 'Part D is prescription drug coverage.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q33',
      'What is an enrollee?',
      [
        {
          text: 'A person enrolled in a health plan, an insured, not including dependents of the insured.',
          why: 'An enrollee is a person enrolled in a health plan, an insured. The term does not include dependents of the insured.',
          correct: true,
        },
        {
          text: 'The insured’s age when the policy is issued or renewed.',
          why: 'That is attained age. An enrollee is the person enrolled in the health plan, and dependents of the insured are not included.',
        },
        {
          text: 'A period of time during which benefits are paid.',
          why: 'That is a benefit period. An enrollee is a person enrolled in a health plan, an insured, and the term does not include dependents.',
        },
        {
          text: 'Sharing of expenses through deductibles, copays, and coinsurance.',
          why: 'That is cost-sharing, the sharing of expenses between the insured and the insurer. An enrollee is the enrolled person, not that sharing of expenses.',
        },
      ],
    ),
  ],
  'c13-parta': [
    question(
      'c13q34',
      'Who can qualify for Part A at age 65 or over based on a spouse’s work record?',
      [
        {
          text: 'A citizen or legal resident qualified for Social Security or Railroad Retirement benefits on that person’s own record.',
          why: 'A citizen or legal resident age 65 or over who is qualified for Social Security or Railroad Retirement benefits has a separate path. The spouse path uses monthly Social Security benefits based on the spouse’s work record if the spouse is at least 62.',
        },
        {
          text: 'A person entitled to monthly Social Security benefits based on the spouse’s work record, if the spouse is at least 62.',
          why: 'A person age 65 or over can qualify when entitled to monthly Social Security benefits based on the spouse’s work record, if the spouse is at least 62.',
          correct: true,
        },
        {
          text: 'A person younger than 65 who has Social Security disability benefits for 24 months.',
          why: 'Entitlement to Social Security disability benefits for 24 months is the disability path for someone younger than 65. It is not the spouse’s work-record path.',
        },
        {
          text: 'A person with permanent kidney failure that requires dialysis or a transplant.',
          why: 'Permanent kidney failure that requires dialysis or a transplant is end-stage renal disease eligibility. It is not qualification through a spouse’s work record.',
        },
      ],
    ),
    question(
      'c13q35',
      'How long must a person younger than 65 be entitled to Social Security disability benefits to qualify for Part A?',
      [
        {
          text: 'Qualification is automatic in the month disability benefits begin.',
          why: 'Automatic qualification in the month disability benefits begin is the rule for ALS. Disability qualification for a person younger than 65 requires 24 months of Social Security disability benefits.',
        },
        {
          text: 'The person must be age 65 or over and the spouse must be at least 62.',
          why: 'Age 65 or over and a spouse at least 62 belong to the spouse’s work-record path. The disability path requires 24 months of Social Security disability benefits.',
        },
        {
          text: 'For 24 months.',
          why: 'A person younger than 65 can qualify for Part A by being entitled to Social Security disability benefits for 24 months.',
          correct: true,
        },
        {
          text: 'The person must have 40 quarters of coverage, the equivalent of 10 years of work.',
          why: '40 quarters of coverage, the equivalent of 10 years of work, is the fully insured measure used for Part A premiums. Disability eligibility uses 24 months of benefits.',
        },
      ],
    ),
    question(
      'c13q36',
      'When does a person with ALS (Lou Gehrig’s disease) qualify for Part A?',
      [
        {
          text: 'After 24 months of Social Security disability benefits.',
          why: 'A person younger than 65 who uses the disability path needs 24 months of Social Security disability benefits. ALS qualification is automatic the month disability benefits begin.',
        },
        {
          text: 'Only after earning 40 quarters of coverage.',
          why: '40 quarters of coverage is the fully insured measure for Part A premiums. A person with ALS automatically qualifies for Part A the month disability benefits begin.',
        },
        {
          text: 'Only between January 1 and March 31.',
          why: 'January 1 through March 31 is the general enrollment period. ALS qualification is automatic the month disability benefits begin.',
        },
        {
          text: 'The person automatically qualifies for Part A the month disability benefits begin.',
          why: 'For ALS (Lou Gehrig’s disease), the person automatically qualifies for Part A the month disability benefits begin.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q37',
      'Which citizen or legal resident is eligible for Part A at age 65 or over?',
      [
        {
          text: 'A citizen or legal resident of the United States, age 65 or over, who is qualified for Social Security or Railroad Retirement benefits.',
          why: 'A citizen or legal resident of the United States, age 65 or over, who is qualified for Social Security or Railroad Retirement benefits is eligible for Part A.',
          correct: true,
        },
        {
          text: 'Anyone who paid Medicare taxes for fewer than 30 quarters and owes the $565 premium.',
          why: 'The standard Part A premium is $565 when Medicare taxes were paid for fewer than 30 quarters. That premium is not the citizen or legal-resident eligibility path.',
        },
        {
          text: 'A person whose spouse is younger than 62 and who is not qualified for Social Security or Railroad Retirement benefits.',
          why: 'The spouse path requires the spouse to be at least 62. This citizen path requires qualification for Social Security or Railroad Retirement benefits at age 65 or over.',
        },
        {
          text: 'A person who may sign up only between January 1 and March 31 even though already qualified for Social Security.',
          why: 'January 1 through March 31 is the general enrollment period. Eligibility here rests on being a citizen or legal resident age 65 or over who is qualified for Social Security or Railroad Retirement benefits.',
        },
      ],
    ),
    question(
      'c13q38',
      'When is a beneficiary not fully insured under Social Security, so that monthly Part A premiums are required?',
      [
        {
          text: 'When the person is age 65 or over and qualified for Social Security or Railroad Retirement benefits.',
          why: 'That qualification is an eligibility path for a citizen or legal resident. Monthly premiums are required when the person has not earned 40 quarters of coverage.',
        },
        {
          text: 'When the person has not earned 40 quarters of coverage, the equivalent of 10 years of work.',
          why: 'Not fully insured means the person has not earned 40 quarters of coverage, the equivalent of 10 years of work. Monthly Part A premiums are then required.',
          correct: true,
        },
        {
          text: 'When the person has end-stage renal disease requiring dialysis or a transplant.',
          why: 'End-stage renal disease is its own eligibility path. Not fully insured means fewer than the 40 quarters of coverage that equal 10 years of work.',
        },
        {
          text: 'When the person or the person’s spouse is still employed and covered under a group health plan.',
          why: 'That employment and group coverage opens a special enrollment period. Premiums are required when 40 quarters of coverage, the equivalent of 10 years of work, have not been earned.',
        },
      ],
    ),
    question(
      'c13q39',
      'Which Part A signup period runs between January 1 and March 31 each year?',
      [
        {
          text: 'The initial enrollment period, from 3 months before turning 65 through 3 months after the 65th birthday.',
          why: 'The initial enrollment period starts 3 months before turning 65 and ends 3 months after the 65th birthday. The January 1 to March 31 period is general enrollment.',
        },
        {
          text: 'The special enrollment period while the person or spouse is employed and covered under a group health plan.',
          why: 'A special enrollment period is available at any time during the year in that employment situation. It is not limited to January 1 through March 31.',
        },
        {
          text: 'The general enrollment period.',
          why: 'The general enrollment period is between January 1 and March 31 each year.',
          correct: true,
        },
        {
          text: 'The month disability benefits begin for a person with ALS.',
          why: 'A person with ALS automatically qualifies for Part A the month disability benefits begin. That month is not the general enrollment period.',
        },
      ],
    ),
    question(
      'c13q40',
      'When may a person use a special enrollment period for Part A?',
      [
        {
          text: 'Only between January 1 and March 31 each year.',
          why: 'That window is the general enrollment period. A special enrollment period can be used at any time during the year in the employment and group-plan situation.',
        },
        {
          text: 'Only from 3 months before turning 65 through 3 months after the 65th birthday.',
          why: 'That window is the initial enrollment period. The special enrollment period is not limited to those months around the 65th birthday.',
        },
        {
          text: 'Only after Medicare taxes were paid for 30 to 39 quarters.',
          why: 'Medicare taxes paid for 30 to 39 quarters set the standard Part A premium at $311. They do not open the special enrollment period.',
        },
        {
          text: 'At any time during the year if the person or the person’s spouse is still employed and covered under a group health plan.',
          why: 'The special enrollment period is at any time during the year if the person or the person’s spouse is still employed and covered under a group health plan.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q41',
      'What does end-stage renal disease mean for Part A eligibility?',
      [
        {
          text: 'Permanent kidney failure that requires dialysis or a transplant.',
          why: 'End-stage renal disease means permanent kidney failure that requires dialysis or a transplant.',
          correct: true,
        },
        {
          text: 'ALS (Lou Gehrig’s disease), with coverage starting the month disability benefits begin.',
          why: 'ALS is a separate path, and the person automatically qualifies the month disability benefits begin. End-stage renal disease is permanent kidney failure that requires dialysis or a transplant.',
        },
        {
          text: 'Entitlement to Social Security disability benefits for 24 months.',
          why: 'The disability path for a person younger than 65 requires 24 months of Social Security disability benefits. That is not the end-stage renal disease definition.',
        },
        {
          text: 'Failure to earn 40 quarters of coverage.',
          why: 'Not earning 40 quarters of coverage, the equivalent of 10 years of work, means the person is not fully insured and monthly premiums are required. It is not end-stage renal disease.',
        },
      ],
    ),
    question(
      'c13q42',
      'A person who is not eligible for premium-free Part A fails to sign up when first eligible. What may happen to the monthly premium?',
      [
        {
          text: 'The premium disappears, and the person can no longer buy Part A.',
          why: 'People who are not eligible for premium-free Part A can buy it for a monthly premium. People not receiving the qualifying benefits also need to sign up, even if they are eligible for premium-free Part A.',
        },
        {
          text: 'The monthly premium may go up 10%, unless the person becomes eligible for a special enrollment period.',
          why: 'If a person who is not eligible for premium-free Part A fails to sign up when first eligible, the monthly premium may go up 10%, unless the person becomes eligible for a special enrollment period.',
          correct: true,
        },
        {
          text: 'The premium becomes $565 because Medicare taxes were paid for 30 to 39 quarters.',
          why: 'The $565 standard premium applies to fewer than 30 quarters, and $311 applies to 30 to 39 quarters. A late signup may instead raise the monthly premium 10% unless a special enrollment period applies.',
        },
        {
          text: 'The premium becomes $311 because Medicare taxes were paid for fewer than 30 quarters.',
          why: 'Fewer than 30 quarters produces the $565 standard premium, and 30 to 39 quarters produces $311. A late signup may instead raise the monthly premium 10% unless a special enrollment period applies.',
        },
      ],
    ),
  ],
  'c13-hospital': [
    question(
      'c13q43',
      'Which kinds of care does Part A help pay for?',
      [
        {
          text: 'Private-duty nursing, a television, and a telephone in the room.',
          why: 'Part A does not include private-duty nursing, a television, or a telephone in the room. It helps pay for inpatient hospital care, skilled nursing facility care, home health care, and hospice care.',
        },
        {
          text: 'Only days after the lifetime reserve is used, when Medicare pays nothing.',
          why: 'After the lifetime reserve days are used, Medicare pays nothing. Part A helps pay for inpatient hospital care, inpatient skilled nursing facility care, home health care, and hospice care.',
        },
        {
          text: 'Inpatient hospital care, inpatient skilled nursing facility care, home health care, and hospice care.',
          why: 'Part A helps pay for inpatient hospital care, inpatient care in a skilled nursing facility, home health care, and hospice care.',
          correct: true,
        },
        {
          text: 'Only the first 3 pints of blood.',
          why: 'Blood is covered except for the first 3 pints. The Part A benefits are inpatient hospital care, skilled nursing facility care, home health care, and hospice care.',
        },
      ],
    ),
    question(
      'c13q44',
      'Which of these is a covered inpatient hospital service under Part A?',
      [
        {
          text: 'A private room that is not medically necessary.',
          why: 'Part A does not include a private room unless it is medically necessary. Covered services include a semi-private room, meals, and regular nursing services.',
        },
        {
          text: 'Private-duty nursing.',
          why: 'Private-duty nursing is not included. Covered hospital services include regular nursing services, a semi-private room, and meals.',
        },
        {
          text: 'A television or a telephone in the room.',
          why: 'A television or a telephone in the room is not included. A semi-private room, meals, and regular nursing services are covered.',
        },
        {
          text: 'A semi-private room, meals, and regular nursing services.',
          why: 'Covered hospital services include a semi-private room, meals, regular nursing services, operating and recovery room costs, hospital costs for anesthesia, intensive care and coronary care, drugs, lab tests, X-rays, medical supplies, appliances, rehabilitation services, and preparatory services related to kidney transplant surgery.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q45',
      'How does Part A cover blood during inpatient hospital care?',
      [
        {
          text: 'Blood is covered except for the first 3 pints.',
          why: 'Blood is covered except for the first 3 pints.',
          correct: true,
        },
        {
          text: 'Only the first 3 pints are covered.',
          why: 'The first 3 pints are the pints left out. Blood is covered except for the first 3 pints.',
        },
        {
          text: 'Blood is excluded in the same way as private-duty nursing.',
          why: 'Private-duty nursing is not included, but blood is covered except for the first 3 pints.',
        },
        {
          text: 'Blood is covered only when a private room is medically necessary.',
          why: 'A private room is included only when medically necessary. Blood follows a different rule and is covered except for the first 3 pints.',
        },
      ],
    ),
    question(
      'c13q46',
      'Which of these does Part A leave out of inpatient hospital coverage?',
      [
        {
          text: 'Intensive care and coronary care.',
          why: 'Intensive care and coronary care are covered hospital services. Part A does not include private-duty nursing, a television, or a telephone in the room.',
        },
        {
          text: 'Private-duty nursing, a television, or a telephone in the room.',
          why: 'Part A does not include private-duty nursing, a television, or a telephone in the room, or a private room unless it is medically necessary.',
          correct: true,
        },
        {
          text: 'Drugs, lab tests, and X-rays.',
          why: 'Drugs, lab tests, and X-rays are covered hospital services. Private-duty nursing, a television, and a telephone in the room are not included.',
        },
        {
          text: 'Preparatory services related to kidney transplant surgery.',
          why: 'Preparatory services related to kidney transplant surgery are covered. Private-duty nursing, a television, and a telephone in the room are not.',
        },
      ],
    ),
    question(
      'c13q47',
      'What limit applies to inpatient mental health care in a psychiatric facility under Part A?',
      [
        {
          text: 'Up to 90 days in any benefit period.',
          why: 'Inpatient hospital insurance helps pay for up to 90 days in a participating hospital in any benefit period. Psychiatric inpatient mental health care is limited to 190 days in a lifetime.',
        },
        {
          text: 'Up to 100 days in each benefit period.',
          why: 'Skilled nursing facility care is covered for up to 100 days in each benefit period. Inpatient mental health care in a psychiatric facility is limited to 190 days in a lifetime.',
        },
        {
          text: '190 days in a lifetime.',
          why: 'Inpatient mental health care in a psychiatric facility is limited to 190 days in a lifetime.',
          correct: true,
        },
        {
          text: 'A nonrenewable lifetime reserve of 60 days.',
          why: 'Every Part A insured has a lifetime reserve of 60 days, and those days are nonrenewable. The psychiatric facility limit is 190 days in a lifetime.',
        },
      ],
    ),
    question(
      'c13q48',
      'How does Medicare pay the first 20 days of covered skilled nursing facility care?',
      [
        {
          text: 'It pays nothing until day 21.',
          why: 'Days 21 through 100 are paid except for a daily deductible. Medicare pays 100% of the approved amount for the first 20 days.',
        },
        {
          text: 'It pays those days except for a daily deductible.',
          why: 'The daily deductible applies to days 21 through 100. The first 20 days are paid at 100% of the approved amount.',
        },
        {
          text: 'It pays 80% of the approved amount, and the person pays 20%.',
          why: 'The 80% and 20% split applies to durable medical equipment. Medicare pays 100% of the approved amount for the first 20 days of skilled nursing facility care.',
        },
        {
          text: 'It pays 100% of the approved amount.',
          why: 'Medicare pays 100% of the approved amount for the first 20 days of skilled nursing facility care.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q49',
      'How are skilled nursing facility days 21 through 100 paid, and what happens beyond 100 days?',
      [
        {
          text: 'Days 21 through 100 are paid except for a daily deductible, and beyond 100 days Medicare pays nothing.',
          why: 'Days 21 through 100 are paid except for a daily deductible. Beyond 100 days, Medicare pays nothing.',
          correct: true,
        },
        {
          text: 'Days 21 through 100 are paid at 100% of the approved amount, and coverage has no end.',
          why: 'The first 20 days are paid at 100% of the approved amount. Days 21 through 100 have a daily deductible, and beyond 100 days Medicare pays nothing.',
        },
        {
          text: 'The first 20 days take the daily deductible, and days 21 through 100 cost the person nothing.',
          why: 'That reverses the rule. Medicare pays 100% for the first 20 days, and days 21 through 100 are paid except for a daily deductible.',
        },
        {
          text: 'Medicare pays 80% for days 21 through 100, and the person pays 20%.',
          why: 'Medicare pays 80% and the person pays 20% for durable medical equipment. Skilled nursing facility days 21 through 100 are paid except for a daily deductible.',
        },
      ],
    ),
    question(
      'c13q50',
      'What does Part A pay for home health visits when the person is confined to the home and meets the other conditions?',
      [
        {
          text: '80% of the approved amount, the share used for durable medical equipment.',
          why: 'Medicare pays 80% of the approved amount for durable medical equipment, and the person pays 20%. Home health visits are paid at the full approved cost, with no limit on the number of covered visits.',
        },
        {
          text: 'The full approved cost from a participating home health agency, with no limit on the number of covered visits.',
          why: 'Part A can pay the full approved cost of home health visits from a participating home health agency. There is no limit on the number of covered visits.',
          correct: true,
        },
        {
          text: 'The first 20 days at 100%, then a daily deductible on days 21 through 100.',
          why: 'The first 20 days at 100% and a daily deductible on days 21 through 100 describe skilled nursing facility care. Home health visits have no visit limit and are paid at the full approved cost.',
        },
        {
          text: 'Nothing, because home health care is outside Part A.',
          why: 'Part A helps pay for home health care. When the person is confined to the home and meets the other conditions, it can pay the full approved cost of visits with no limit on the number covered.',
        },
      ],
    ),
    question(
      'c13q51',
      'Which services can Part A cover as home health care?',
      [
        {
          text: 'Private-duty nursing and a television in the room.',
          why: 'Private-duty nursing and a television in the room are not inpatient hospital benefits. Home health services include part-time skilled nursing care, physical therapy, and speech therapy.',
        },
        {
          text: 'Inpatient respite care only.',
          why: 'Short-term inpatient care, including respite care, is a hospice service. Home health coverage includes part-time skilled nursing care, physical therapy, and speech therapy.',
        },
        {
          text: 'Part-time skilled nursing care, physical therapy, and speech therapy.',
          why: 'Covered home health services include part-time skilled nursing care, physical therapy, and speech therapy, and also part-time home health aides, occupational therapy, medical social services, and medical supplies and equipment.',
          correct: true,
        },
        {
          text: 'Durable medical equipment paid at 100%, with the person paying nothing.',
          why: 'For durable medical equipment, Medicare pays 80% of the approved amount and the person pays 20%. Part-time skilled nursing care, physical therapy, and speech therapy are the home health services asked about here.',
        },
      ],
    ),
    question(
      'c13q52',
      'How does Medicare pay for durable medical equipment under Part A home health coverage?',
      [
        {
          text: 'It pays the full approved cost, and the person pays nothing.',
          why: 'The full approved cost applies to covered home health visits. For durable medical equipment, Medicare pays 80% of the approved amount and the person pays 20%.',
        },
        {
          text: 'It pays 100% of the approved amount for the first 20 days only.',
          why: 'Medicare pays 100% of the approved amount for the first 20 days of skilled nursing facility care. Durable medical equipment is paid at 80%, and the person pays 20%.',
        },
        {
          text: 'It pays nothing, just as it excludes a television in the room.',
          why: 'A television in the room is not a covered hospital item. Durable medical equipment is covered, with Medicare paying 80% of the approved amount and the person paying 20%.',
        },
        {
          text: 'Medicare pays 80% of the approved amount, and the person pays 20%.',
          why: 'For durable medical equipment, Medicare pays 80% of the approved amount, and the person pays 20%.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q53',
      'How long can Part A cover hospice care for a terminally ill insured?',
      [
        {
          text: 'For as long as the doctor certifies the need, when a Medicare-certified hospice provides the care.',
          why: 'Hospice care can be covered for a terminally ill insured if a Medicare-certified hospice provides it, for as long as the doctor certifies the need.',
          correct: true,
        },
        {
          text: 'Only for the first 60 days after the deductible in a benefit period.',
          why: 'The first 60 days at 100% of approved charges after the deductible is an inpatient hospital payment rule. Hospice care can continue for as long as the doctor certifies the need.',
        },
        {
          text: 'Only after a 3-day inpatient hospital stay for a related illness.',
          why: 'Skilled nursing facility care follows a 3-day inpatient hospital stay for a related illness, and the doctor must certify that daily skilled care is necessary. Hospice care depends on a Medicare-certified hospice and certification of need.',
        },
        {
          text: 'Only for 190 days in a lifetime.',
          why: 'The 190-day lifetime limit applies to inpatient mental health care in a psychiatric facility. Hospice care can last for as long as the doctor certifies the need.',
        },
      ],
    ),
    question(
      'c13q54',
      'Which of these can hospice coverage include?',
      [
        {
          text: 'A television and a telephone in the room.',
          why: 'A television and a telephone in the room are not covered hospital items. Hospice services include doctor and nursing services and supplies, including outpatient drugs for pain relief.',
        },
        {
          text: 'Doctor and nursing services, and supplies including outpatient drugs for pain relief.',
          why: 'Covered hospice services include doctor and nursing services, medical appliances, supplies including outpatient drugs for pain relief, home health aide and homemaker services, therapies, medical social services, short-term inpatient care including respite care, and counseling.',
          correct: true,
        },
        {
          text: 'Private-duty nursing excluded from the hospital benefit.',
          why: 'Private-duty nursing is not an inpatient hospital benefit. Hospice coverage includes doctor and nursing services and supplies, including outpatient drugs for pain relief.',
        },
        {
          text: 'Only the first 3 pints of blood.',
          why: 'Hospital blood is covered except for the first 3 pints. Hospice coverage includes doctor and nursing services and pain-relief supplies, not only those pints.',
        },
      ],
    ),
    question(
      'c13q55',
      'What cost sharing applies to hospice outpatient drugs and inpatient respite care?',
      [
        {
          text: 'The person pays 20%, and Medicare pays 80%.',
          why: 'The person pays 20% and Medicare pays 80% for durable medical equipment. Hospice outpatient drugs and inpatient respite care have limited cost sharing.',
        },
        {
          text: 'No hospice service has any cost sharing.',
          why: 'There is limited cost sharing for outpatient drugs and inpatient respite care. The section does not say every hospice service is free of cost sharing.',
        },
        {
          text: 'Limited cost sharing for outpatient drugs and inpatient respite care.',
          why: 'There is limited cost sharing for outpatient drugs and inpatient respite care.',
          correct: true,
        },
        {
          text: 'Medicare pays nothing once a daily skilled nursing deductible begins.',
          why: 'A daily deductible applies to skilled nursing facility days 21 through 100. Hospice outpatient drugs and inpatient respite care have limited cost sharing.',
        },
      ],
    ),
    question(
      'c13q56',
      'If 3 pints of blood are paid for or replaced under one part of Medicare during the calendar year, what is required under the other part?',
      [
        {
          text: 'Those same 3 pints must be paid for again under the other part.',
          why: 'Pints paid for or replaced under one part during the calendar year do not have to be paid for or replaced under the other part.',
        },
        {
          text: 'The person must replace another 3 pints before either part will pay.',
          why: 'The rule does not add another 3 pints. Pints already paid for or replaced under one part do not have to be paid for or replaced under the other part.',
        },
        {
          text: 'Blood coverage ends for the rest of the lifetime, as with the 190-day psychiatric limit.',
          why: 'The 190-day lifetime limit applies to inpatient mental health care in a psychiatric facility. The blood rule is a calendar-year rule that avoids a second payment or replacement under the other part.',
        },
        {
          text: 'They do not have to be paid for or replaced under the other part.',
          why: 'If 3 pints of blood are paid for or replaced under one part of Medicare during the calendar year, they do not have to be paid for or replaced under the other part.',
          correct: true,
        },
      ],
    ),
  ],
  'c13-partb': [
    question(
      'c13q57',
      'What does Part B pay for?',
      [
        {
          text: 'Doctors’ services and other medical services and supplies that hospital insurance does not cover.',
          why: 'Part B pays for doctors’ services and a variety of other medical services and supplies that hospital insurance does not cover.',
          correct: true,
        },
        {
          text: 'Only services that hospital insurance already covers in full.',
          why: 'Part B pays for doctors’ services and other medical services and supplies that hospital insurance does not cover. It is not a repeat of hospital insurance.',
        },
        {
          text: 'Most prescription drugs, which the person otherwise pays in full unless Part D covers them.',
          why: 'Unless Part D covers them, the person pays 100% for most prescription drugs. Part B itself pays for doctors’ services and supplies that hospital insurance does not cover.',
        },
        {
          text: 'Care received outside the United States.',
          why: 'Part B does not cover care received outside the United States. It pays for doctors’ services and other medical services and supplies that hospital insurance does not cover.',
        },
      ],
    ),
    question(
      'c13q58',
      'Which coverage pays for most services needed by people with permanent kidney failure?',
      [
        {
          text: 'Hospital insurance, because medical insurance excludes kidney failure.',
          why: 'Most services needed by people with permanent kidney failure are covered only by medical insurance. They are not left to hospital insurance.',
        },
        {
          text: 'Medical insurance.',
          why: 'Most services needed by people with permanent kidney failure are covered only by medical insurance.',
          correct: true,
        },
        {
          text: 'A Part D plan, because kidney failure care is a prescription drug benefit.',
          why: 'Part D is the coverage that can pay prescription drugs Part B does not pay. Permanent kidney failure services are covered only by medical insurance.',
        },
        {
          text: 'Medicaid, for services Medicare already fully covers.',
          why: 'Services Medicare does not fully cover may be covered by Medicaid. Most permanent kidney failure services are covered only by medical insurance.',
        },
      ],
    ),
    question(
      'c13q59',
      'Who is offered Part B, and is enrollment required?',
      [
        {
          text: 'It is required for everyone and cannot be declined.',
          why: 'Part B is optional. A person who becomes eligible for Part A will get Part B and have to pay for it unless the person declines it.',
        },
        {
          text: 'It is offered only to people who were denied Part A.',
          why: 'Part B is offered to everyone who enrolls in Part A. It is not limited to people denied Part A.',
        },
        {
          text: 'It is optional and is offered to everyone who enrolls in Part A.',
          why: 'Part B is optional and is offered to everyone who enrolls in Part A.',
          correct: true,
        },
        {
          text: 'It is offered only when modified adjusted gross income is above a certain amount.',
          why: 'Income above a certain amount may raise the premium. Part B is still optional and is offered to everyone who enrolls in Part A.',
        },
      ],
    ),
    question(
      'c13q60',
      'How is Part B funded?',
      [
        {
          text: 'Only by a charge imposed on people who decline coverage.',
          why: 'Someone who declines Part B and later wants it must wait for the next general enrollment period. Funding is by monthly premiums and general federal revenues.',
        },
        {
          text: 'Only by general federal revenues, with no monthly premiums.',
          why: 'Part B is funded by monthly premiums and general federal revenues. Premiums are part of that funding.',
        },
        {
          text: 'By the annual medical insurance deductible alone.',
          why: 'The annual deductible is met before payment of approved charges. Funding of Part B is by monthly premiums and general federal revenues.',
        },
        {
          text: 'By monthly premiums and general federal revenues.',
          why: 'Part B is funded by monthly premiums and general federal revenues.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q61',
      'When may a person’s Part B premium be higher than the standard monthly premium?',
      [
        {
          text: 'When modified adjusted gross income on the IRS return is above a certain amount.',
          why: 'Most people pay the standard monthly premium. If modified adjusted gross income on the IRS return is above a certain amount, the premium may be higher.',
          correct: true,
        },
        {
          text: 'Whenever the person enrolls in Part A and accepts Part B.',
          why: 'Most people pay the standard monthly premium. A higher premium may apply when modified adjusted gross income is above a certain amount.',
        },
        {
          text: 'When clinical laboratory services are paid at 100% of the approved amount.',
          why: 'Clinical laboratory services are generally paid at 100% of the approved amount. That payment rule does not raise the monthly premium.',
        },
        {
          text: 'When the person declines Part B and waits for January 1 through March 31.',
          why: 'Declining Part B means the person must wait for the next general enrollment period, January 1 through March 31. The higher premium is tied to modified adjusted gross income above a certain amount.',
        },
      ],
    ),
    question(
      'c13q62',
      'What is a person told about Part B when the person becomes eligible for Part A?',
      [
        {
          text: 'Part B is closed, and the person must use only hospital insurance.',
          why: 'Part B is offered to everyone who enrolls in Part A. The person is told they will get Part B and have to pay for it unless they decline it.',
        },
        {
          text: 'The person will get Part B and have to pay for it unless the person declines it.',
          why: 'When a person becomes eligible for Part A, that person is told they will get Part B and have to pay for it unless they decline it.',
          correct: true,
        },
        {
          text: 'Part B can start only during January 1 through March 31, even if the person wants it immediately.',
          why: 'The January 1 through March 31 wait applies to someone who declines Part B and later wants it. A person becoming eligible for Part A is told they will get Part B unless they decline it.',
        },
        {
          text: 'The premium is waived for everyone who enrolls in Part A.',
          why: 'Most people pay the standard monthly premium, and the person has to pay for Part B unless they decline it. Enrollment in Part A does not waive that premium.',
        },
      ],
    ),
    question(
      'c13q63',
      'A person declines Part B and later wants it. When can that person enroll?',
      [
        {
          text: 'Immediately, on any day of the year.',
          why: 'Someone who declines Part B and later wants it must wait until the next general enrollment period. Enrollment is not immediate on any day.',
        },
        {
          text: 'Only during the first 12 months, as the Welcome to Medicare preventive visit.',
          why: 'The Welcome to Medicare preventive visit is a benefit in the first 12 months. It is not the enrollment window after a person declines Part B.',
        },
        {
          text: 'The person must wait until the next general enrollment period, January 1 through March 31.',
          why: 'Someone who declines Part B and later wants it must wait until the next general enrollment period, January 1 through March 31.',
          correct: true,
        },
        {
          text: 'Only once every 2 years, on the Pap smear schedule.',
          why: 'A Pap smear to screen for cervical cancer is covered once every 2 years. That schedule is not the Part B enrollment window after a decline.',
        },
      ],
    ),
    question(
      'c13q64',
      'Once the Part B deductible for the year is reached, how does it apply to later covered services that year?',
      [
        {
          text: 'It must be met again for every later service in that year.',
          why: 'Once the deductible amount for the year is reached, it does not apply to other covered services received for the rest of the year.',
        },
        {
          text: 'It is replaced by a maximum out-of-pocket limit on the 20% coinsurance.',
          why: 'There is no maximum out-of-pocket limit on the 20% coinsurance. Once the deductible for the year is reached, it does not apply to other covered services for the rest of the year.',
        },
        {
          text: 'It keeps applying, but only to clinical laboratory services.',
          why: 'Clinical laboratory services are generally paid at 100% of the approved amount. The met deductible does not apply to other covered services for the rest of the year.',
        },
        {
          text: 'It does not apply to other covered services received for the rest of the year.',
          why: 'Once the deductible amount for the year is reached, it does not apply to other covered services received for the rest of the year.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q65',
      'Where does Part B cover doctor services, and what office items are included?',
      [
        {
          text: 'Anywhere in the United States, including surgery, tests and X-rays that are part of treatment, office medical supplies, and the office nurse.',
          why: 'Part B covers doctor services anywhere in the United States, including surgical services, diagnostic tests and X-rays that are part of the treatment, medical supplies furnished in a doctor’s office, and the services of the office nurse.',
          correct: true,
        },
        {
          text: 'Only ambulance transportation, home dialysis equipment, and oral surgery.',
          why: 'Ambulance transportation, home dialysis equipment and supplies, periodic support services, independent laboratory tests, oral surgery, outpatient physical therapy and speech pathology, and X-rays and radiation treatments are other covered items, under limits. Doctor services are covered anywhere in the United States.',
        },
        {
          text: 'Dental care of every kind, and cosmetic surgery.',
          why: 'Part B does not cover cosmetic surgery, and it does not cover dental care except dental expenses resulting from an accident. Doctor services are covered anywhere in the United States.',
        },
        {
          text: 'Skilled nursing home care costs over 100 days per benefit period.',
          why: 'Part B does not cover skilled nursing home care costs over 100 days per benefit period or intermediate nursing home care. It covers doctor services anywhere in the United States.',
        },
      ],
    ),
    question(
      'c13q66',
      'Which outpatient hospital services does Part B cover for diagnosis and treatment?',
      [
        {
          text: 'Eyeglasses, hearing aids, and orthopedic shoes.',
          why: 'Part B does not cover eyeglasses, hearing aids, orthopedic shoes, acupuncture, or expenses from a war or an act of war. Outpatient hospital services include an emergency room or an outpatient clinic.',
        },
        {
          text: 'Services such as an emergency room, an outpatient clinic, or a hospital.',
          why: 'Part B covers outpatient hospital services for diagnosis and treatment, such as an emergency room, outpatient clinic, or a hospital.',
          correct: true,
        },
        {
          text: 'Private-duty nursing and custodial care received in the home.',
          why: 'Part B does not cover private-duty nursing or custodial care received in the home. Outpatient hospital services include an emergency room, an outpatient clinic, or a hospital.',
        },
        {
          text: 'Care received outside the United States.',
          why: 'Part B does not cover care received outside the United States. Outpatient hospital services for diagnosis and treatment include an emergency room, an outpatient clinic, or a hospital.',
        },
      ],
    ),
    question(
      'c13q67',
      'How are clinical laboratory services generally paid under Part B?',
      [
        {
          text: 'The person pays 20% of the billed amount after the deductible.',
          why: 'The person pays 20% of the billed amount after the deductible for outpatient hospital treatment. Clinical laboratory services are generally paid at 100% of the approved amount.',
        },
        {
          text: 'The person pays 100% unless Part D covers the laboratory work.',
          why: 'The person pays 100% for most prescription drugs unless Part D covers them. Clinical laboratory services are generally paid at 100% of the approved amount.',
        },
        {
          text: 'They are generally paid at 100% of the approved amount.',
          why: 'Clinical laboratory services are generally paid at 100% of the approved amount.',
          correct: true,
        },
        {
          text: 'They are excluded, along with independent laboratory tests.',
          why: 'Independent laboratory tests are among the other items covered under limits. Clinical laboratory services are generally paid at 100% of the approved amount.',
        },
      ],
    ),
    question(
      'c13q68',
      'After the deductible, what does the person pay for outpatient hospital treatment under Part B?',
      [
        {
          text: 'Nothing, because that treatment is paid at 100% of the approved amount.',
          why: 'Payment at 100% of the approved amount is the general rule for clinical laboratory services. For outpatient hospital treatment, the person pays 20% of the billed amount after the deductible.',
        },
        {
          text: 'The full billed amount, because Part B excludes outpatient hospital care.',
          why: 'Part B covers outpatient hospital services for diagnosis and treatment. The person pays 20% of the billed amount after the deductible, and payment is based on hospital cost.',
        },
        {
          text: 'The same 100% drug charge that applies when Part D does not cover a medicine.',
          why: 'The person pays 100% for most prescription drugs unless Part D covers them. Outpatient hospital treatment is different: the person pays 20% of the billed amount after the deductible.',
        },
        {
          text: '20% of the billed amount, with payment based on hospital cost.',
          why: 'Outpatient hospital treatment is paid based on hospital cost, and the person pays 20% of the billed amount after the deductible.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q69',
      'When does Part B cover home health services, and on what schedule?',
      [
        {
          text: 'When a doctor recommends them and the person is eligible, part time, with limits on hours per day and days per week.',
          why: 'Home health services are covered when a doctor recommends them and the person is eligible, on a part-time basis with limits on hours per day and days per week. Services Medicare does not fully cover may be covered by Medicaid.',
          correct: true,
        },
        {
          text: 'As full-time private-duty nursing with no limit on hours or days.',
          why: 'Part B does not cover private-duty nursing. Home health services are part time, with limits on hours per day and days per week, when a doctor recommends them and the person is eligible.',
        },
        {
          text: 'Only as custodial care received in the home.',
          why: 'Part B does not cover custodial care received in the home. Home health services require a doctor’s recommendation and eligibility, on a part-time basis with limits on hours and days.',
        },
        {
          text: 'Only when the care is received outside the United States.',
          why: 'Part B does not cover care received outside the United States. Home health services are covered in the part-time situation when a doctor recommends them and the person is eligible.',
        },
      ],
    ),
    question(
      'c13q70',
      'What is the limit on Part B coverage of medicines?',
      [
        {
          text: 'Part B covers most outpatient prescription drugs in full.',
          why: 'Otherwise the person pays 100% for most prescription drugs unless Part D covers them. Part B drug coverage is limited to stated circumstances.',
        },
        {
          text: 'Medicines given in a hospital outpatient department in limited cases, such as injected drugs, some oral cancer drugs, or drugs that need a nebulizer or an infusion pump.',
          why: 'Part B drug coverage is limited to medicines administered in a hospital outpatient department under certain circumstances, such as injected drugs at a doctor’s office, some oral cancer drugs, or drugs that require durable medical equipment such as a nebulizer or an infusion pump.',
          correct: true,
        },
        {
          text: 'Every drug Part D covers, with no further limit.',
          why: 'Part D is what covers most prescription drugs that fall outside Part B. Part B drug coverage stays limited to the stated outpatient circumstances.',
        },
        {
          text: 'Eyeglasses, hearing aids, and acupuncture.',
          why: 'Part B does not cover eyeglasses, hearing aids, or acupuncture. Its drug coverage is limited to the stated medicines, such as injected drugs, some oral cancer drugs, and certain drugs used with durable medical equipment.',
        },
      ],
    ),
    question(
      'c13q71',
      'If a medicine is outside the limited Part B drug coverage, what does the person generally pay?',
      [
        {
          text: 'Nothing, because clinical laboratory services are paid at 100% of the approved amount.',
          why: 'Clinical laboratory services are generally paid at 100% of the approved amount. That rule is not the rule for most prescription drugs.',
        },
        {
          text: '20% of the billed amount after the deductible, the outpatient hospital share.',
          why: 'The person pays 20% of the billed amount after the deductible for outpatient hospital treatment. For most prescription drugs outside Part B drug coverage, the person pays 100% unless Part D covers them.',
        },
        {
          text: '100% for most prescription drugs, unless Part D covers them.',
          why: 'Otherwise the person pays 100% for most prescription drugs unless Part D covers them.',
          correct: true,
        },
        {
          text: 'Nothing during the first 12 months, because the Welcome to Medicare visit includes all medicines.',
          why: 'The Welcome to Medicare preventive visit is in the first 12 months. It does not make the person pay nothing for most prescription drugs.',
        },
      ],
    ),
    question(
      'c13q72',
      'Where is outpatient treatment of an approved mental condition, such as depression or anxiety, covered?',
      [
        {
          text: 'Only as inpatient mental health care under Part A.',
          why: 'Inpatient mental health care is covered under Part A. Outpatient treatment is covered in a doctor’s office, another provider’s office, or a hospital outpatient department.',
        },
        {
          text: 'Only as skilled nursing home care after 100 days in a benefit period.',
          why: 'Part B does not cover skilled nursing home care costs over 100 days per benefit period. Outpatient mental health treatment is covered in a doctor’s office, another provider’s office, or a hospital outpatient department.',
        },
        {
          text: 'Only outside the United States.',
          why: 'Part B does not cover care received outside the United States. Outpatient treatment of an approved mental condition is covered in the stated offices or a hospital outpatient department.',
        },
        {
          text: 'In a doctor’s office, another provider’s office, or a hospital outpatient department.',
          why: 'Outpatient treatment of an approved mental condition is covered in a doctor’s office, another provider’s office, or a hospital outpatient department. The enrollee generally pays 20% of the Medicare-approved amount, and the Part B deductible applies.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q73',
      'What preventive visit does Part B cover in the first 12 months?',
      [
        {
          text: 'A Welcome to Medicare preventive visit.',
          why: 'Besides a Welcome to Medicare preventive visit in the first 12 months, Part B covers an annual wellness visit.',
          correct: true,
        },
        {
          text: 'A Pap smear every month during those 12 months.',
          why: 'A Pap smear to screen for cervical cancer is covered once every 2 years. The first 12 months include a Welcome to Medicare preventive visit.',
        },
        {
          text: 'Only an annual wellness visit, with no Welcome to Medicare preventive visit.',
          why: 'Part B covers both a Welcome to Medicare preventive visit in the first 12 months and an annual wellness visit. The Welcome to Medicare visit is the one tied to those first 12 months.',
        },
        {
          text: 'A visit that adds eyeglasses, hearing aids, and cosmetic surgery.',
          why: 'Part B does not cover eyeglasses, hearing aids, or cosmetic surgery. The preventive visit in the first 12 months is the Welcome to Medicare preventive visit.',
        },
      ],
    ),
    question(
      'c13q74',
      'What is the annual wellness visit, and when is there no out-of-pocket cost?',
      [
        {
          text: 'It replaces the Part B deductible for surgery anywhere in the United States.',
          why: 'Doctor services, including surgical services, are covered anywhere in the United States under the usual Part B rules. The annual wellness visit develops or updates a plan for disease prevention.',
        },
        {
          text: 'It develops or updates a plan for disease prevention, at no out-of-pocket cost if the provider accepts assignment.',
          why: 'Part B covers an annual wellness visit to develop or update a plan for disease prevention. There is no out-of-pocket cost if the doctor or other qualified provider accepts assignment.',
          correct: true,
        },
        {
          text: 'It is the cervical-cancer screening covered once every 2 years.',
          why: 'A Pap smear to screen for cervical cancer is covered once every 2 years. The annual wellness visit develops or updates a prevention plan.',
        },
        {
          text: 'It covers care received outside the United States at no cost.',
          why: 'Part B does not cover care received outside the United States. The annual wellness visit has no out-of-pocket cost when the provider accepts assignment.',
        },
      ],
    ),
    question(
      'c13q75',
      'How often does Part B cover a Pap smear to screen for cervical cancer?',
      [
        {
          text: 'Only in the first 12 months, as the Welcome to Medicare preventive visit.',
          why: 'The Welcome to Medicare preventive visit is in the first 12 months. A Pap smear to screen for cervical cancer is covered once every 2 years.',
        },
        {
          text: 'Once each time the annual deductible is met.',
          why: 'The deductible, once reached, does not apply again to other covered services for the rest of the year. A Pap smear is covered once every 2 years.',
        },
        {
          text: 'Once every 2 years.',
          why: 'A Pap smear to screen for cervical cancer is covered once every 2 years.',
          correct: true,
        },
        {
          text: 'Only when the person pays 100% of the cost.',
          why: 'Paying 100% is the rule for most prescription drugs unless Part D covers them. A Pap smear is covered once every 2 years.',
        },
      ],
    ),
    question(
      'c13q76',
      'In Part B claims terms, what is the approved amount?',
      [
        {
          text: 'The amount a physician or supplier bills.',
          why: 'The amount a physician or supplier bills is the actual charge. The approved amount is the amount Medicare determines to be reasonable for a service covered under Part B.',
        },
        {
          text: 'The difference between the Medicare-approved amount and the actual charge.',
          why: 'That difference is the excess charge. The approved amount is the amount Medicare determines to be reasonable for a service covered under Part B.',
        },
        {
          text: 'The maximum a physician may charge if the physician does not accept assignment.',
          why: 'That maximum is the limiting charge. The approved amount is the amount Medicare determines to be reasonable for a service covered under Part B.',
        },
        {
          text: 'The amount Medicare determines to be reasonable for a service covered under Part B.',
          why: 'The approved amount is the amount Medicare determines to be reasonable for a service covered under Part B.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q77',
      'What is assignment under Part B?',
      [
        {
          text: 'The physician or supplier agrees to accept the Medicare-approved amount as full payment.',
          why: 'Assignment means the physician or supplier agrees to accept the Medicare-approved amount as full payment.',
          correct: true,
        },
        {
          text: 'The amount a physician or supplier bills for a service.',
          why: 'That amount is the actual charge. Assignment is the agreement to accept the Medicare-approved amount as full payment.',
        },
        {
          text: 'A group of practicing doctors paid by the government to review Medicare care.',
          why: 'Those groups are peer review organizations. Assignment is the agreement to accept the Medicare-approved amount as full payment.',
        },
        {
          text: 'Oxygen equipment, wheelchairs, and other equipment a doctor prescribes for use in the home.',
          why: 'That is durable medical equipment. Assignment is the agreement to accept the Medicare-approved amount as full payment.',
        },
      ],
    ),
    question(
      'c13q78',
      'What is an excess charge?',
      [
        {
          text: 'The amount Medicare determines to be reasonable for a covered Part B service.',
          why: 'That is the approved amount. An excess charge is the difference between the Medicare-approved amount and the actual charge.',
        },
        {
          text: 'The difference between the Medicare-approved amount and the actual charge.',
          why: 'An excess charge is the difference between the Medicare-approved amount and the actual charge. Part B does not cover physician charges above Medicare’s approved amount.',
          correct: true,
        },
        {
          text: 'The maximum a physician may charge a beneficiary for a covered service if the physician does not accept assignment.',
          why: 'That maximum is the limiting charge. An excess charge is the difference between the Medicare-approved amount and the actual charge.',
        },
        {
          text: 'An agreement to accept the Medicare-approved amount as full payment.',
          why: 'That agreement is assignment. An excess charge is the difference between the Medicare-approved amount and the actual charge.',
        },
      ],
    ),
    question(
      'c13q79',
      'How do participating doctors and suppliers handle assignment?',
      [
        {
          text: 'They may choose whether to accept assignment on each claim.',
          why: 'Nonparticipating doctors or suppliers may choose whether to accept assignment on each claim. Participating doctors and suppliers agree in advance to accept assignment on all Medicare claims.',
        },
        {
          text: 'They process inpatient and outpatient claims from hospitals and hospices.',
          why: 'Intermediaries process inpatient and outpatient claims from hospitals, skilled nursing facilities, home health agencies, hospices, and certain other providers. Participating doctors and suppliers agree in advance to accept assignment on all Medicare claims.',
        },
        {
          text: 'They agree in advance to accept assignment on all Medicare claims.',
          why: 'Participating doctors and suppliers agree in advance to accept assignment on all Medicare claims.',
          correct: true,
        },
        {
          text: 'They are paid by the government to review care given to Medicare patients.',
          why: 'Peer review organizations are groups of practicing doctors and other professionals paid by the government to review care. Participating doctors and suppliers agree in advance to accept assignment on all Medicare claims.',
        },
      ],
    ),
    question(
      'c13q80',
      'Who processes Part B claims from doctors and suppliers, and who processes facility claims?',
      [
        {
          text: 'Peer review organizations process both kinds of claims.',
          why: 'Peer review organizations review care given to Medicare patients. They are not the claims processors named for doctors, suppliers, and facilities.',
        },
        {
          text: 'Intermediaries process doctor and supplier claims, and carriers process hospital claims.',
          why: 'That swaps the two processors. Carriers process claims submitted by doctors and suppliers, and intermediaries process the facility claims.',
        },
        {
          text: 'Participating doctors process their own claims, and nonparticipating doctors may not submit any.',
          why: 'Participating doctors and suppliers agree in advance to accept assignment on all Medicare claims. Carriers, not the doctors themselves, process claims submitted by doctors and suppliers.',
        },
        {
          text: 'Carriers process doctor and supplier claims. Intermediaries process inpatient and outpatient claims from hospitals, skilled nursing facilities, home health agencies, hospices, and certain other providers.',
          why: 'Carriers process claims submitted by doctors and suppliers. Intermediaries process inpatient and outpatient claims from hospitals, skilled nursing facilities, home health agencies, hospices, and certain other providers.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q81',
      'What are peer review organizations?',
      [
        {
          text: 'Groups of practicing doctors and other professionals paid by the government to review care given to Medicare patients.',
          why: 'Peer review organizations are groups of practicing doctors and other professionals paid by the government to review care given to Medicare patients.',
          correct: true,
        },
        {
          text: 'Carriers that process claims submitted by doctors and suppliers.',
          why: 'Carriers process claims submitted by doctors and suppliers. Peer review organizations review care given to Medicare patients.',
        },
        {
          text: 'The maximum charge allowed when a physician does not accept assignment.',
          why: 'That maximum is the limiting charge. Peer review organizations are groups paid by the government to review care given to Medicare patients.',
        },
        {
          text: 'Oxygen equipment, wheelchairs, and other medically necessary equipment a doctor prescribes for use in the home.',
          why: 'Durable medical equipment includes oxygen equipment, wheelchairs, and other medically necessary equipment a doctor prescribes for use in the home. Peer review organizations review Medicare care.',
        },
      ],
    ),
  ],
  'c13-advantage': [
    question(
      'c13q82',
      'What name change did the Medicare Modernization Act of 2003 make for Part C?',
      [
        {
          text: 'It changed Medicare Advantage to Medicare+Choice.',
          why: 'The change ran the other way. The Medicare Modernization Act of 2003 changed the name of Part C from Medicare+Choice to Medicare Advantage.',
        },
        {
          text: 'It changed the name of Part C from Medicare+Choice to Medicare Advantage.',
          why: 'The Medicare Modernization Act of 2003 changed the name of Part C from Medicare+Choice to Medicare Advantage.',
          correct: true,
        },
        {
          text: 'It renamed Part C as a private fee-for-service plan only.',
          why: 'A Medicare private fee-for-service plan is one kind of Medicare Advantage plan offered by a private insurance company. The 2003 act changed the Part C name from Medicare+Choice to Medicare Advantage.',
        },
        {
          text: 'It renamed Special Needs Plans as Original Medicare.',
          why: 'Special Needs Plans provide more focused care for specific groups. The act changed the name of Part C from Medicare+Choice to Medicare Advantage.',
        },
      ],
    ),
    question(
      'c13q83',
      'Which services covered under Original Medicare may a Medicare Advantage plan leave out?',
      [
        {
          text: 'All hospital and medical services.',
          why: 'These plans must cover all services covered under Original Medicare except hospice care and some care in qualifying clinical research studies.',
        },
        {
          text: 'Vision, hearing, dental, and other health and wellness programs.',
          why: 'Vision, hearing, dental, and other health and wellness programs are examples of extra coverage a plan may offer. The stated exceptions are hospice care and some clinical research care.',
        },
        {
          text: 'Hospice care and some care in qualifying clinical research studies.',
          why: 'Medicare Advantage plans must cover all services covered under Original Medicare except hospice care and some care in qualifying clinical research studies.',
          correct: true,
        },
        {
          text: 'Emergency services received through a Medicare HMO.',
          why: 'Most Medicare HMOs require services to be received through the plan, except in emergencies. The Original Medicare exceptions are hospice care and some clinical research care.',
        },
      ],
    ),
    question(
      'c13q84',
      'How may Medicare Advantage costs and extra benefits compare with Original Medicare?',
      [
        {
          text: 'Out-of-pocket costs must be higher, and extra benefits are forbidden.',
          why: 'Plans may have lower out-of-pocket costs than Original Medicare, and they may offer extra coverage such as vision, hearing, dental, and other health and wellness programs.',
        },
        {
          text: 'The plan must charge premiums beyond what Medicare pays.',
          why: 'Many HMOs and PPOs do not charge premiums beyond what Medicare pays. Plans may also have lower out-of-pocket costs and may offer extra coverage.',
        },
        {
          text: 'Out-of-pocket costs must match Original Medicare, with no added coverage.',
          why: 'Plans may have lower out-of-pocket costs than Original Medicare and may offer extra coverage such as vision, hearing, dental, and other health and wellness programs.',
        },
        {
          text: 'Plans may have lower out-of-pocket costs and may offer extra coverage such as vision, hearing, dental, and other health and wellness programs.',
          why: 'They may have lower out-of-pocket costs than Original Medicare, and they may offer extra coverage such as vision, hearing, dental, and other health and wellness programs.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q85',
      'What other Medicare enrollment does Medicare Advantage eligibility require?',
      [
        {
          text: 'The beneficiary must also be enrolled in Medicare Parts A and B.',
          why: 'To be eligible, the beneficiary must also be enrolled in Medicare Parts A and B.',
          correct: true,
        },
        {
          text: 'The beneficiary must drop Part A and keep only Part B.',
          why: 'Eligibility requires enrollment in Medicare Parts A and B. Dropping Part A does not meet that rule.',
        },
        {
          text: 'The beneficiary must live in a nursing home.',
          why: 'People who live in a nursing home are one group that Special Needs Plans can focus on. Medicare Advantage eligibility itself requires enrollment in Parts A and B.',
        },
        {
          text: 'The beneficiary must have both Medicare and Medicaid.',
          why: 'People who have both Medicare and Medicaid are one Special Needs Plan group. Eligibility for Medicare Advantage requires enrollment in Parts A and B.',
        },
      ],
    ),
    question(
      'c13q86',
      'Who provides Medicare Advantage?',
      [
        {
          text: 'Only a private fee-for-service plan that cannot be an HMO or PPO.',
          why: 'A private fee-for-service plan is one Medicare Advantage plan offered by a private insurance company. Medicare Advantage is Medicare provided by an approved HMO or PPO.',
        },
        {
          text: 'An approved HMO or PPO.',
          why: 'Medicare Advantage is Medicare provided by an approved HMO or PPO.',
          correct: true,
        },
        {
          text: 'Only Special Needs Plans for chronic conditions.',
          why: 'Special Needs Plans are a focused option for specific groups, including certain chronic medical conditions. Medicare Advantage is provided by an approved HMO or PPO.',
        },
        {
          text: 'Only point-of-service plans.',
          why: 'A few Medicare HMOs allow more freedom through point-of-service plans. Medicare Advantage itself is Medicare provided by an approved HMO or PPO.',
        },
      ],
    ),
    question(
      'c13q87',
      'What is often true of premiums, claim forms, and budgeting in many Medicare HMOs and PPOs?',
      [
        {
          text: 'They always charge premiums beyond what Medicare pays and require a claim form for every service.',
          why: 'Many HMOs and PPOs do not charge premiums beyond what Medicare pays, and there may be no claim forms. Almost any medical problem may be covered for a set fee so costs can be budgeted.',
        },
        {
          text: 'They cover only hospice care and qualifying clinical research studies.',
          why: 'Hospice care and some care in qualifying clinical research studies are the Original Medicare services these plans may leave out. They are not the only care the plans cover.',
        },
        {
          text: 'Many charge no premium beyond what Medicare pays, may use no claim forms, and may cover almost any medical problem for a set fee.',
          why: 'Many HMOs and PPOs do not charge premiums beyond what Medicare pays, there may be no claim forms, and almost any medical problem may be covered for a set fee so costs can be budgeted. The plan may also pay for services that Medicare or a Medicare supplement usually does not cover, such as prescriptions, eye exams, hearing aids, or dental care.',
          correct: true,
        },
        {
          text: 'They budget costs by refusing coverage for almost any medical problem.',
          why: 'Almost any medical problem may be covered for a set fee so costs can be budgeted. The plans do not budget by refusing almost any medical problem.',
        },
      ],
    ),
    question(
      'c13q88',
      'How do most Medicare HMOs limit where medical services are received?',
      [
        {
          text: 'Care may come from any provider, including non-emergencies outside the plan.',
          why: 'Most Medicare HMOs require that medical services be received through the plan, except in emergencies. A few allow more freedom through point-of-service plans.',
        },
        {
          text: 'Emergencies must be received outside the plan, and other care is optional.',
          why: 'The exception is emergencies. Most Medicare HMOs require that medical services be received through the plan, except in emergencies.',
        },
        {
          text: 'Every HMO must use a point-of-service option for all care.',
          why: 'A few allow more freedom through point-of-service plans. Most Medicare HMOs require services through the plan, except in emergencies.',
        },
        {
          text: 'Most require that medical services be received through the plan, except in emergencies.',
          why: 'Most Medicare HMOs require that medical services be received through the plan, except in emergencies.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q89',
      'What is a Medicare private fee-for-service plan?',
      [
        {
          text: 'A Medicare Advantage plan from a private insurer. Medicare pays the company a set monthly amount, and the company decides what enrollees pay.',
          why: 'A Medicare private fee-for-service plan is a Medicare Advantage plan offered by a private insurance company. Medicare pays the company a set amount every month to provide the coverage, and the company decides how much enrollees pay for the services they get.',
          correct: true,
        },
        {
          text: 'Focused care for people with Medicare and Medicaid, nursing home residents, or certain chronic conditions.',
          why: 'That describes Special Needs Plans, which provide more focused care for those groups. A private fee-for-service plan is a Medicare Advantage plan offered by a private insurance company.',
        },
        {
          text: 'The point-of-service option a few HMOs use to allow more freedom.',
          why: 'A few Medicare HMOs allow more freedom through point-of-service plans. A private fee-for-service plan is offered by a private insurance company that Medicare pays a set monthly amount.',
        },
        {
          text: 'The name of Part C before the Medicare Modernization Act of 2003.',
          why: 'That former name is Medicare+Choice. A private fee-for-service plan is a Medicare Advantage plan offered by a private insurance company.',
        },
      ],
    ),
  ],
  'c13-partd': [
    question(
      'c13q90',
      'What coverage did the Medicare Prescription Drug, Improvement, and Modernization Act of 2003 add?',
      [
        {
          text: 'A rule that every private plan must cover every drug in each class.',
          why: 'Private plans must cover drugs for certain classes, but they do not have to cover every drug in each class. The act added optional Part D coverage.',
        },
        {
          text: 'Optional Part D coverage, and the act was passed in November 2003.',
          why: 'The Medicare Prescription Drug, Improvement, and Modernization Act of 2003, passed in November 2003, added optional Part D coverage.',
          correct: true,
        },
        {
          text: 'Automatic enrollment of every Medicare beneficiary, not only Medicaid recipients.',
          why: 'Medicaid recipients are enrolled automatically. The act added optional Part D coverage rather than automatic enrollment for every beneficiary.',
        },
        {
          text: 'A ban on stand-alone plans and on Medicare Advantage drug plans.',
          why: 'A beneficiary may choose a stand-alone plan or an integrated plan known as Medicare Advantage. The act added optional Part D coverage.',
        },
      ],
    ),
    question(
      'c13q91',
      'How does a person receive Part D benefits?',
      [
        {
          text: 'By staying on Medicaid only, with no plan signup.',
          why: 'Medicaid recipients are enrolled automatically, but a person receiving benefits must sign up with a plan offered in the area and be enrolled in Part A, or in Parts A and B.',
        },
        {
          text: 'By enrolling in Part B alone, with no drug plan.',
          why: 'The person must sign up with a plan offered in the area and must be enrolled in Part A, or in Parts A and B. Part B alone, with no drug plan, is not the stated path.',
        },
        {
          text: 'By signing up with a plan offered in the area and being enrolled in Part A, or in Parts A and B.',
          why: 'To receive benefits, the person must sign up with a plan offered in the area and must be enrolled in Part A, or in Parts A and B.',
          correct: true,
        },
        {
          text: 'By waiting until catastrophic coverage begins automatically.',
          why: 'Catastrophic coverage begins automatically after the standard benefit reaches that stage. Receiving benefits still requires signup with a plan offered in the area and enrollment in Part A, or in Parts A and B.',
        },
      ],
    ),
    question(
      'c13q92',
      'What happens where no private prescription drug plan is offered, and who is enrolled automatically?',
      [
        {
          text: 'Part D is unavailable, and nobody is enrolled.',
          why: 'Where no private plan is offered, the government offers a standard plan. Medicaid recipients are enrolled automatically.',
        },
        {
          text: 'Only people who personalize a private plan are enrolled automatically.',
          why: 'Private plans may personalize coverage, but automatic enrollment is for Medicaid recipients. Where no private plan is offered, the government offers a standard plan.',
        },
        {
          text: 'The person must join a Medicare Advantage HMO, and Medicaid recipients are excluded.',
          why: 'An integrated plan can include HMOs and is known as Medicare Advantage, but that is a choice. Where no private plan is offered, the government offers a standard plan, and Medicaid recipients are enrolled automatically.',
        },
        {
          text: 'The government offers a standard plan, and Medicaid recipients are enrolled automatically.',
          why: 'Where no private plan is offered, the government offers a standard plan. Medicaid recipients are enrolled automatically.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q93',
      'What plan designs may a beneficiary choose for Part D?',
      [
        {
          text: 'A stand-alone fee-for-service plan, or an integrated plan such as a PPO or HMO, known as Medicare Advantage.',
          why: 'Beneficiaries may choose a stand-alone plan on a fee-for-service basis, or an integrated plan that groups coverages together, including PPOs and HMOs, known as Medicare Advantage.',
          correct: true,
        },
        {
          text: 'Only the government standard plan, even where private plans are offered.',
          why: 'The government offers a standard plan where no private plan is offered. Where private plans exist, the person may choose a stand-alone plan or an integrated Medicare Advantage plan.',
        },
        {
          text: 'Only a plan that includes every drug in each class.',
          why: 'Plans must cover drugs for certain classes, but they do not have to cover every drug in each class. The choice is a stand-alone plan or an integrated Medicare Advantage plan.',
        },
        {
          text: 'Only a plan that has no premium and no deductible.',
          why: 'The standard plan has a monthly premium, which varies by plan, and a deductible. The design choice is stand-alone fee-for-service or an integrated Medicare Advantage plan.',
        },
      ],
    ),
    question(
      'c13q94',
      'What drug-coverage standards apply when a private Part D plan personalizes its coverage?',
      [
        {
          text: 'A personalized plan may ignore Medicare standards.',
          why: 'Private plans must meet Medicare standards and may still personalize the plan. Personalizing does not remove those standards.',
        },
        {
          text: 'The plan must meet Medicare standards, must cover drugs for certain classes, and need not cover every drug in each class.',
          why: 'Private plans must meet Medicare standards and may still personalize the plan. They must cover drugs for certain classes, but they do not have to cover every drug in each class.',
          correct: true,
        },
        {
          text: 'The plan must cover every drug in each class and may not personalize anything.',
          why: 'Plans may personalize and do not have to cover every drug in each class. They still must meet Medicare standards and cover drugs for certain classes.',
        },
        {
          text: 'The plan may cover only drugs placed in the highest tier.',
          why: 'Drugs are placed in tiers, and a lower tier costs less than a higher tier. Plans must still cover drugs for certain classes and meet Medicare standards.',
        },
      ],
    ),
    question(
      'c13q95',
      'What does the standard Part D plan charge, and how far does coverage go after the deductible?',
      [
        {
          text: 'No premium and no deductible, with coverage only after catastrophic coverage begins.',
          why: 'The standard plan has a monthly premium and a deductible, and after the deductible it covers prescription drug costs until a benefit limit is reached. Catastrophic coverage is a later stage.',
        },
        {
          text: 'A premium that is the same for every plan, and no deductible.',
          why: 'The monthly premium varies by plan, and the standard plan has a deductible. Coverage after the deductible runs until a benefit limit is reached.',
        },
        {
          text: 'A monthly premium that varies by plan, and a deductible, then coverage until a benefit limit is reached.',
          why: 'The standard plan has a monthly premium, which varies by plan, and a deductible. After the deductible, the plan covers prescription drug costs until a benefit limit is reached.',
          correct: true,
        },
        {
          text: 'Only a late-enrollment charge, with no premium and no deductible.',
          why: 'The standard plan has a monthly premium, which varies by plan, and a deductible. A penalty for delayed enrollment is separate from those standard charges.',
        },
      ],
    ),
    question(
      'c13q96',
      'What assistance does the standard drug benefit give people with low income?',
      [
        {
          text: 'They pay the full cost, and a gap in coverage remains.',
          why: 'Additional assistance is available for people with low income, and there is no gap in coverage for those beneficiaries.',
        },
        {
          text: 'They are barred from Part D until catastrophic coverage begins.',
          why: 'Catastrophic coverage begins automatically at that later stage for the standard benefit. Low-income beneficiaries have additional assistance and no gap in coverage.',
        },
        {
          text: 'They must pay a premium that cannot vary by plan.',
          why: 'The standard monthly premium varies by plan. Additional assistance is available for people with low income, and there is no gap in coverage for those beneficiaries.',
        },
        {
          text: 'Additional assistance, and no gap in coverage for those beneficiaries.',
          why: 'Additional assistance is available for people with low income, and there is no gap in coverage for those beneficiaries.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q97',
      'What is a formulary?',
      [
        {
          text: 'The list of prescription drugs the plan covers, also called a drug list.',
          why: 'A formulary is the list of prescription drugs the plan covers, also called a drug list.',
          correct: true,
        },
        {
          text: 'The monthly premium that varies by plan.',
          why: 'The standard plan has a monthly premium, which varies by plan. A formulary is the drug list the plan covers.',
        },
        {
          text: 'The integrated plan known as Medicare Advantage.',
          why: 'An integrated plan that groups coverages together, including PPOs and HMOs, is known as Medicare Advantage. A formulary is the plan’s drug list.',
        },
        {
          text: 'Automatic enrollment of Medicaid recipients.',
          why: 'Medicaid recipients are enrolled automatically. A formulary is the list of prescription drugs the plan covers.',
        },
      ],
    ),
    question(
      'c13q98',
      'How often does a plan file its formulary, and what notice is required when it changes?',
      [
        {
          text: 'A formulary is filed once, never changes, and needs no notice.',
          why: 'Each plan files its own formulary annually, and insureds must be notified when the formulary changes.',
        },
        {
          text: 'Each plan files its own formulary annually, and insureds must be notified when it changes.',
          why: 'Each plan files its own formulary annually. Insureds must be notified when the formulary changes.',
          correct: true,
        },
        {
          text: 'The government files one formulary for every private plan, and notice goes only to Medicaid.',
          why: 'Each plan files its own formulary annually. Medicaid recipients are enrolled automatically, which is not the formulary-notice rule.',
        },
        {
          text: 'A plan files a formulary only when a drug moves to a lower tier.',
          why: 'A drug in a lower tier costs less than a drug in a higher tier, but filing is annual. Insureds must be notified when the formulary changes.',
        },
      ],
    ),
    question(
      'c13q99',
      'How do formulary tiers work, and how many drugs must each treatment category include?',
      [
        {
          text: 'A higher tier costs less than a lower tier, and every drug must be included.',
          why: 'A drug in a lower tier costs less than a drug in a higher tier. A formulary must include at least 2 drugs in each treatment category, and it is not required to include all drugs.',
        },
        {
          text: 'Tiers are optional, and the formulary must include every drug.',
          why: 'Drugs are placed in tiers, and the formulary is not required to include all drugs. It must include at least 2 drugs in each treatment category.',
        },
        {
          text: 'A lower tier costs less than a higher tier, and the formulary must include at least 2 drugs in each treatment category.',
          why: 'A drug in a lower tier costs less than a drug in a higher tier, and a formulary must include at least 2 drugs in each treatment category. It is not required to include all drugs.',
          correct: true,
        },
        {
          text: 'A treatment category may include fewer than 2 drugs, and all tiers cost the same.',
          why: 'A formulary must include at least 2 drugs in each treatment category, and a lower tier costs less than a higher tier. Fewer than 2 drugs, at the same tier cost, does not match those rules.',
        },
      ],
    ),
  ],
  'c13-primary': [
    question(
      'c13q100',
      'What does the Omnibus Budget Reconciliation Act of 1990 require of large group health plans for disabled individuals?',
      [
        {
          text: 'Medicare is primary at once for every disabled person, with no employer primary coverage.',
          why: 'Large group health plans of 100 employees or more must provide primary coverage for disabled individuals under age 65 who are not retired. Medicare is not primary at once for every disabled person.',
        },
        {
          text: 'The employer plan is primary for end-stage renal disease for 30 months only when the group has fewer than 20 employees.',
          why: 'The end-stage renal disease rule requires employer primary coverage for 30 months before Medicare becomes primary. The disability rule is for large group health plans of 100 employees or more.',
        },
        {
          text: 'Only groups of fewer than 20 employees must cover disabled workers under age 65.',
          why: 'Fewer than 20 employees is the group size at which Medicare is primary for an employee who stays on the group plan and also has Medicare. Disability primary coverage is required of large plans of 100 employees or more.',
        },
        {
          text: 'Large group health plans of 100 employees or more must provide primary coverage for disabled individuals under age 65 who are not retired.',
          why: 'The Omnibus Budget Reconciliation Act of 1990 requires large group health plans of 100 employees or more to provide primary coverage for disabled individuals under age 65 who are not retired.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q101',
      'For end-stage renal disease, how long must the employer health plan remain primary before Medicare becomes primary?',
      [
        {
          text: '30 months, under the 1990 act as amended by the Balanced Budget Act of 1997.',
          why: 'For end-stage renal disease, the Omnibus Budget Reconciliation Act of 1990, as amended by the Balanced Budget Act of 1997, requires the employer health plan to provide primary coverage for 30 months before Medicare becomes primary.',
          correct: true,
        },
        {
          text: 'Until the employee turns 65 and retires.',
          why: 'An employee still working at 65 must be allowed to stay on the group plan and defer Medicare until retirement. The end-stage renal disease primary period is 30 months.',
        },
        {
          text: 'Only while a plan of 100 or more employees covers a disabled person who is not retired.',
          why: 'Plans of 100 employees or more must provide primary coverage for disabled individuals under age 65 who are not retired. End-stage renal disease uses a 30-month employer primary period.',
        },
        {
          text: 'For as long as the employee rejects the company plan.',
          why: 'The employee may reject the company plan and elect Medicare, but the company can offer no incentives for switching. The end-stage renal disease period of employer primary coverage is 30 months.',
        },
      ],
    ),
    question(
      'c13q102',
      'What must an employee who is still working at 65 be allowed to do about the group plan and Medicare?',
      [
        {
          text: 'Leave the group plan and take Medicare at 65, with no right to stay.',
          why: 'An employee who is still working at 65 must be allowed to stay on the group plan and defer Medicare until retirement. Leaving at 65 is not required.',
        },
        {
          text: 'Stay on the group plan and defer Medicare until retirement.',
          why: 'An employee who is still working at 65 must be allowed to stay on the group plan and defer Medicare until retirement.',
          correct: true,
        },
        {
          text: 'Drop both the group plan and Medicare.',
          why: 'The employee must be allowed to stay on the group plan and defer Medicare until retirement. The employee may also reject the company plan and elect Medicare.',
        },
        {
          text: 'Accept a company incentive to switch to Medicare.',
          why: 'The company can offer no incentives for switching to Medicare. The employee must be allowed to stay on the group plan and defer Medicare until retirement.',
        },
      ],
    ),
    question(
      'c13q103',
      'May an employee reject the company plan and elect Medicare, and may the company pay the employee to switch?',
      [
        {
          text: 'The employee may not reject the company plan.',
          why: 'The employee may reject the company plan and elect Medicare. The company can offer no incentives for switching to Medicare.',
        },
        {
          text: 'The employee may reject the company plan, and the company may offer incentives to switch.',
          why: 'The employee may reject the company plan and elect Medicare, but the company can offer no incentives for switching to Medicare.',
        },
        {
          text: 'The employee may reject the company plan and elect Medicare, but the company can offer no incentives for switching.',
          why: 'The employee may reject the company plan and elect Medicare, but the company can offer no incentives for switching to Medicare.',
          correct: true,
        },
        {
          text: 'The company must offer incentives, and the employee may not elect Medicare.',
          why: 'The company can offer no incentives for switching to Medicare, and the employee may reject the company plan and elect Medicare.',
        },
      ],
    ),
    question(
      'c13q104',
      'How does federal law treat primary coverage under the employer plan for active older employees?',
      [
        {
          text: 'Primary coverage under the employer plan ends at a fixed age.',
          why: 'Federal law extends primary coverage under the employer’s plan to active older employees regardless of age. It does not cut that coverage off at a fixed age.',
        },
        {
          text: 'Medicare is primary for every active employee, and the employer plan is never primary.',
          why: 'Employer plans usually remain primary, and Medicare is secondary. Federal law extends primary coverage under the employer’s plan to active older employees regardless of age.',
        },
        {
          text: 'Age is ignored only for disabled people under age 65 in plans of 100 or more.',
          why: 'The disability rule requires large group health plans of 100 employees or more to cover disabled individuals under age 65 who are not retired. Active older employees have primary employer coverage regardless of age.',
        },
        {
          text: 'It extends primary coverage under the employer’s plan to active older employees regardless of age.',
          why: 'Federal law extends primary coverage under the employer’s plan to active older employees regardless of age. Employer plans usually remain primary, and Medicare is secondary.',
          correct: true,
        },
      ],
    ),
  ],
  'c13-medigap': [
    question(
      'c13q105',
      'What gaps do Medicare supplement plans fill, and who issues them?',
      [
        {
          text: 'Private insurers issue them to fill deductibles, copayments, and benefit periods.',
          why: 'Medicare supplement plans, called Medigap, are issued by private insurers to fill some of the gaps in Medicare: deductibles, copayments, and benefit periods.',
          correct: true,
        },
        {
          text: 'Social Security issues them to replace Medicare.',
          why: 'Medigap plans are not run through Social Security. Private insurers issue them to fill deductibles, copayments, and benefit periods.',
        },
        {
          text: 'They are issued to pay Medicare Advantage copayments, deductibles, and premiums.',
          why: 'A Medicare supplement cannot be used to pay Medicare Advantage copayments, deductibles, or premiums. Medigap fills some gaps in Medicare: deductibles, copayments, and benefit periods.',
        },
        {
          text: 'They are sold only to people already enrolled in Medicaid.',
          why: 'Insurers may not sell a supplement to someone already enrolled in Medicaid. Private insurers issue Medigap to fill deductibles, copayments, and benefit periods.',
        },
      ],
    ),
    question(
      'c13q106',
      'Who sells and services Medigap, and what approval must it have?',
      [
        {
          text: 'Social Security sells it, and no state approval is required.',
          why: 'Medigap plans are not run through Social Security. They are sold and serviced by private insurers and HMOs and must be approved by the state department of insurance.',
        },
        {
          text: 'Private insurers and HMOs sell and service it, and the state department of insurance must approve it.',
          why: 'Medigap plans are sold and serviced by private insurers and HMOs. They must meet set requirements and be approved by the state department of insurance.',
          correct: true,
        },
        {
          text: 'Only HMOs sell it, and Medicaid enrolls the buyers.',
          why: 'Private insurers and HMOs sell and service these plans. Insurers may not sell a supplement to someone already enrolled in Medicaid.',
        },
        {
          text: 'Medicare Advantage plans sell it to pay their own premiums.',
          why: 'A Medicare supplement cannot be used to pay Medicare Advantage premiums. Private insurers and HMOs sell and service Medigap, with state department of insurance approval.',
        },
      ],
    ),
    question(
      'c13q107',
      'What did the Omnibus Budget Reconciliation Act of 1990 authorize the NAIC to develop, and why?',
      [
        {
          text: 'A ban on every Medicare supplement.',
          why: 'The act authorized the NAIC to develop a standardized model. The purpose was to eliminate questionable marketing practices, give consumers protection, and standardize that protection.',
        },
        {
          text: 'Permission for insurers to change a plan’s letter.',
          why: 'Insurers may not change the benefits in the standard plans or change a plan’s letter. The NAIC work was a standardized model to eliminate questionable marketing practices and standardize protection.',
        },
        {
          text: 'A standardized model, to stop questionable marketing, protect consumers, and standardize that protection.',
          why: 'The Omnibus Budget Reconciliation Act of 1990 authorized the NAIC to develop a standardized model. The purpose was to eliminate questionable marketing practices, give consumers protection, and standardize that protection.',
          correct: true,
        },
        {
          text: 'Replacement of Medigap letters A through N by Medicare Advantage.',
          why: 'Standard plans are lettered A through N. The NAIC model was meant to standardize supplement protection, not to replace those letters with Medicare Advantage.',
        },
      ],
    ),
    question(
      'c13q108',
      'During open enrollment, may a supplement be priced in a discriminatory way or denied for health reasons?',
      [
        {
          text: 'Yes. It may be denied for health status.',
          why: 'During open enrollment, a supplement may not be priced in a discriminatory way or denied because of health status, claims experience, receipt of health care, or medical condition.',
        },
        {
          text: 'Yes. It may be denied for claims experience.',
          why: 'Claims experience is one of the reasons that cannot be used. During open enrollment, a supplement may not be denied because of health status, claims experience, receipt of health care, or medical condition.',
        },
        {
          text: 'Yes. It may be priced differently because of a medical condition.',
          why: 'A medical condition cannot be used that way. During open enrollment, a supplement may not be priced in a discriminatory way or denied for health status, claims experience, receipt of health care, or medical condition.',
        },
        {
          text: 'No. It may not be priced in a discriminatory way or denied for health status, claims experience, receipt of health care, or medical condition.',
          why: 'During open enrollment, a supplement may not be priced in a discriminatory way or denied because of health status, claims experience, receipt of health care, or medical condition.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q109',
      'What must a Medigap applicant generally have?',
      [
        {
          text: 'Both Part A and Part B.',
          why: 'The applicant generally must have both Part A and Part B.',
          correct: true,
        },
        {
          text: 'Medicare Advantage only, with no Part A or Part B.',
          why: 'A Medicare supplement cannot be used to pay Medicare Advantage copayments, deductibles, or premiums. The applicant generally must have both Part A and Part B.',
        },
        {
          text: 'Medicaid enrollment.',
          why: 'Insurers may not sell a supplement to someone already enrolled in Medicaid. The applicant generally must have both Part A and Part B.',
        },
        {
          text: 'Plan G only, without Part B.',
          why: 'The applicant generally must have both Part A and Part B. Plan G is one standard plan, not a substitute for those parts.',
        },
      ],
    ),
    question(
      'c13q110',
      'Can a Medicare supplement pay Medicare Advantage cost sharing, or be sold to someone on Medicaid?',
      [
        {
          text: 'Yes. It pays Medicare Advantage premiums and is required for people on Medicaid.',
          why: 'A Medicare supplement cannot be used to pay Medicare Advantage copayments, deductibles, or premiums. Insurers may not sell a supplement to someone already enrolled in Medicaid.',
        },
        {
          text: 'No. It cannot pay Medicare Advantage copayments, deductibles, or premiums, and it cannot be sold to someone already on Medicaid.',
          why: 'A Medicare supplement cannot be used to pay Medicare Advantage copayments, deductibles, or premiums. Insurers may not sell a supplement to someone already enrolled in Medicaid.',
          correct: true,
        },
        {
          text: 'It can pay Medicare Advantage deductibles, but an HMO cannot sell it.',
          why: 'It cannot be used to pay Medicare Advantage deductibles. Medigap is sold and serviced by private insurers and HMOs.',
        },
        {
          text: 'It can be sold to a person on Medicaid if the state department of insurance has not approved it.',
          why: 'Insurers may not sell a supplement to someone already enrolled in Medicaid. The plans must meet set requirements and be approved by the state department of insurance.',
        },
      ],
    ),
    question(
      'c13q111',
      'How are standard Medigap plans identified, and which plan must an insurer offer?',
      [
        {
          text: 'Plans are optional letters, and Plan A need not be offered.',
          why: 'Standard plans are lettered A through N. Any insurer that markets Medigap must offer Plan A, and the other plans are optional.',
        },
        {
          text: 'Plans run from A through N, and every letter is mandatory.',
          why: 'Standard plans are lettered A through N, but the other plans are optional. Any insurer that markets Medigap must offer Plan A.',
        },
        {
          text: 'Standard plans are lettered A through N. An insurer that markets Medigap must offer Plan A, and the other plans are optional.',
          why: 'Standard plans are lettered A through N, and the core benefits in Plan A must be in all plans. Any insurer that markets Medigap must offer Plan A, and the other plans are optional.',
          correct: true,
        },
        {
          text: 'The insurer may change a plan’s letter as long as Plan A is dropped.',
          why: 'Insurers may not change a plan’s letter. Any insurer that markets Medigap must offer Plan A, and the other plans are optional.',
        },
      ],
    ),
    question(
      'c13q112',
      'What must the company do under guaranteed issue during open enrollment?',
      [
        {
          text: 'Deny every pre-existing condition and charge more for past health problems.',
          why: 'The company must cover all pre-existing conditions incurred more than 6 months from the effective date and must not charge more because of past or present health problems.',
        },
        {
          text: 'Sell the policy only if the person is already on Medicaid.',
          why: 'Insurers may not sell a supplement to someone already enrolled in Medicaid. Guaranteed issue means the company must sell the policy.',
        },
        {
          text: 'Cover only conditions incurred within 6 months of the effective date.',
          why: 'The company must cover all pre-existing conditions incurred more than 6 months from the effective date, not only conditions inside that period.',
        },
        {
          text: 'Sell the policy, cover pre-existing conditions incurred more than 6 months from the effective date, and not charge more for past or present health problems.',
          why: 'During open enrollment, coverage is guaranteed issue. The company must sell the policy, cover all pre-existing conditions incurred more than 6 months from the effective date, and not charge more because of past or present health problems.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q113',
      'What may insurers change in the standard Medigap plans?',
      [
        {
          text: 'Neither the benefits nor a plan’s letter.',
          why: 'Insurers may not change the benefits in the standard plans or change a plan’s letter.',
          correct: true,
        },
        {
          text: 'The benefits, if the letter stays the same.',
          why: 'Insurers may not change the benefits in the standard plans. They also may not change a plan’s letter.',
        },
        {
          text: 'A plan’s letter, if the benefits stay the same.',
          why: 'Insurers may not change a plan’s letter. They also may not change the benefits in the standard plans.',
        },
        {
          text: 'Plan A’s letter, if the core benefits are removed from the other plans.',
          why: 'The core benefits in Plan A must be in all plans, and insurers may not change a plan’s letter or the benefits in the standard plans.',
        },
      ],
    ),
    question(
      'c13q114',
      'What does Plan B add?',
      [
        {
          text: 'Skilled nursing facility coinsurance and the foreign travel benefit, without the Part A deductible.',
          why: 'Plan D adds the Part A deductible, skilled nursing facility coinsurance, and the foreign travel benefit. Plan B adds the Medicare Part A deductible.',
        },
        {
          text: 'The Medicare Part A deductible.',
          why: 'Plan B adds the Medicare Part A deductible.',
          correct: true,
        },
        {
          text: 'The Part A deductible, skilled nursing facility coinsurance, 100% of Medicare Part B excess charges, and the foreign travel benefit.',
          why: 'Those items are part of what Plan G adds. Medigap does not cover custodial help with activities of daily living, and Plan G does not cover the Part B deductible. Plan B adds the Medicare Part A deductible.',
        },
        {
          text: '50% of the Part A deductible and 50% of skilled nursing facility coinsurance.',
          why: 'Plan K includes 50% of the Part A deductible and 50% of skilled nursing facility coinsurance. Plan B adds the Medicare Part A deductible.',
        },
      ],
    ),
    question(
      'c13q115',
      'What does Plan D add?',
      [
        {
          text: 'Only the Medicare Part A deductible.',
          why: 'Plan B adds the Medicare Part A deductible. Plan D adds the Part A deductible, skilled nursing facility coinsurance, and the foreign travel benefit.',
        },
        {
          text: 'Lower premiums and higher out-of-pocket costs, like Plans K and L.',
          why: 'Plans K and L have lower premiums and higher out-of-pocket costs. Plan D adds the Part A deductible, skilled nursing facility coinsurance, and the foreign travel benefit.',
        },
        {
          text: 'The Part A deductible, skilled nursing facility coinsurance, and the foreign travel benefit.',
          why: 'Plan D adds the Part A deductible, skilled nursing facility coinsurance, and the foreign travel benefit.',
          correct: true,
        },
        {
          text: 'Benefits that are no longer available to new buyers, like Plans C, E, F, H, and J.',
          why: 'Plans C, E, F, H, and J are no longer available, and policies already bought stay in force. Plan D adds the Part A deductible, skilled nursing facility coinsurance, and the foreign travel benefit.',
        },
      ],
    ),
    question(
      'c13q116',
      'What is the status of Plans C, E, F, H, and J?',
      [
        {
          text: 'They are the only plans an insurer must offer.',
          why: 'Any insurer that markets Medigap must offer Plan A. Plans C, E, F, H, and J are no longer available, though policies already bought stay in force.',
        },
        {
          text: 'They replaced Plan A as the core benefits.',
          why: 'The core benefits in Plan A must be in all plans. Plans C, E, F, H, and J are no longer available, and policies already bought stay in force.',
        },
        {
          text: 'They add only the foreign travel benefit.',
          why: 'Plan D adds the foreign travel benefit together with the Part A deductible and skilled nursing facility coinsurance. Plans C, E, F, H, and J are no longer available.',
        },
        {
          text: 'They are no longer available, and policies already bought stay in force.',
          why: 'Plans C, E, F, H, and J are no longer available. Policies already bought stay in force.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q117',
      'How do Plans K and L compare on cost, and which hospital days do they cover?',
      [
        {
          text: 'Lower premiums and higher out-of-pocket costs, covering hospital days 61 through 90, lifetime reserve days 91 through 150, and an additional 365 hospital days.',
          why: 'Plans K and L have lower premiums and higher out-of-pocket costs. They cover hospital copayments for days 61 through 90, lifetime reserve days 91 through 150, and an additional 365 hospital days after Medicare benefits are used.',
          correct: true,
        },
        {
          text: 'Higher premiums and lower out-of-pocket costs, covering only the Part A deductible.',
          why: 'Plans K and L have lower premiums and higher out-of-pocket costs. Plan B is the plan that adds the Medicare Part A deductible.',
        },
        {
          text: 'They are no longer available to new buyers.',
          why: 'Plans C, E, F, H, and J are no longer available. Plans K and L remain described as lower-premium, higher out-of-pocket plans with stated hospital-day coverage.',
        },
        {
          text: 'Benefits similar to Plan D, with copays and deductibles that might differ.',
          why: 'Plans M and N provide benefits similar to Plan D, but the copays and deductibles might differ. Plans K and L have lower premiums and higher out-of-pocket costs.',
        },
      ],
    ),
    question(
      'c13q118',
      'How do Plan K and Plan L pay the first 3 pints of blood, Part B coinsurance, and Part A hospice cost sharing and respite care?',
      [
        {
          text: 'Plan K pays 75% of those amounts, and Plan L pays 50%.',
          why: 'That reverses the shares. Plan K pays 50% of those amounts, and Plan L pays 75%.',
        },
        {
          text: 'Plan K pays 50% of those amounts, and Plan L pays 75%.',
          why: 'Plan K pays 50% of the first 3 pints of blood, 50% of Part B coinsurance, and 50% of Part A hospice cost sharing and respite care. Plan L pays 75% of those amounts.',
          correct: true,
        },
        {
          text: 'Both plans pay 100% of those amounts.',
          why: '100% of Medicare Part B excess charges is part of what Plan G adds. Plan K pays 50% of the named blood, coinsurance, and hospice amounts, and Plan L pays 75%.',
        },
        {
          text: 'Neither plan pays any share of those amounts.',
          why: 'Plan K pays 50% of those amounts, and Plan L pays 75% of those amounts. The core benefits also include the first 3 pints of blood.',
        },
      ],
    ),
    question(
      'c13q119',
      'What do Plans M and N provide compared with Plan D?',
      [
        {
          text: 'They are no longer available, though policies already bought stay in force.',
          why: 'Plans C, E, F, H, and J are no longer available, and policies already bought stay in force. Plans M and N provide benefits similar to Plan D, but the copays and deductibles might differ.',
        },
        {
          text: 'They are the core benefits that must be offered as Plan A.',
          why: 'The core benefits in Plan A must be in all plans, and any insurer that markets Medigap must offer Plan A. Plans M and N provide benefits similar to Plan D.',
        },
        {
          text: 'Benefits similar to Plan D, but the copays and deductibles might differ.',
          why: 'Plans M and N provide benefits similar to Plan D, but the copays and deductibles might differ.',
          correct: true,
        },
        {
          text: '50% of the Part A deductible and 50% of skilled nursing facility coinsurance, which is Plan L’s share.',
          why: 'Plan K includes 50% of the Part A deductible and 50% of skilled nursing facility coinsurance, and Plan L includes 75% of each. Plans M and N are similar to Plan D, with copays and deductibles that might differ.',
        },
      ],
    ),
  ],
'c13-gaprules': [
    question(
      'c13q120',
      'What must a company’s marketing procedures make agents’ Medicare supplement policy comparisons?',
      [
        {
          text: 'Clearly and substantially greater than the policy being replaced.',
          why: 'A separate formula judges whether a replacement contains benefits that are clearly and substantially greater. The procedures themselves must make the comparisons fair and accurate.',
        },
        {
          text: 'Free of any review by the Insurance Commissioner.',
          why: 'Advertisements intended for use in this state must be given to the Insurance Commissioner for review or approval. Marketing procedures address fair and accurate policy comparisons.',
        },
        {
          text: 'Limited to radio and television, with printed comparisons left unchecked.',
          why: 'The comparison procedures are not limited to a broadcast form. They must make agents’ policy comparisons fair and accurate.',
        },
        {
          text: 'Fair and accurate.',
          why: 'Marketing rules require every company to have procedures so agents’ policy comparisons are fair and accurate.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q121',
      'What must company guidelines keep from being sold or issued?',
      [
        {
          text: 'Excessive insurance.',
          why: 'Guidelines are required so excessive insurance is not sold or issued.',
          correct: true,
        },
        {
          text: 'A replacement whose benefits are clearly and substantially greater.',
          why: 'A formula is used to tell whether replacement benefits are clearly and substantially greater. The guidelines target excessive insurance.',
        },
        {
          text: 'The words Medicare Supplement on a policy that fully complies with the law.',
          why: 'Those words may be used when the policy fully complies with the law. Guidelines address excessive insurance, not compliant wording.',
        },
        {
          text: 'A receipt on every direct-response policy.',
          why: 'Except for direct-response policies, the company must get a receipt. The guidelines are about not selling or issuing excessive insurance.',
        },
      ],
    ),
    question(
      'c13q122',
      'What must the company’s formula determine about a replacement Medicare supplement?',
      [
        {
          text: 'Whether the first page omits the buyer notice about medical expenses.',
          why: 'The first page must contain a notice that the policy may not cover all of the buyer’s medical expenses. The formula judges replacement benefits.',
        },
        {
          text: 'Whether its benefits are clearly and substantially greater than the policy being replaced.',
          why: 'The company must have a formula for whether a replacement contains benefits that are clearly and substantially greater than the policy being replaced.',
          correct: true,
        },
        {
          text: 'Whether the applicant already owns accident and sickness insurance.',
          why: 'The company must make a reasonable effort to learn about existing accident and sickness insurance. That inquiry is not the replacement-benefit formula.',
        },
        {
          text: 'Whether first-year commission exceeds the second-year renewal commission.',
          why: 'First-year commission may not be more than 200% of the second-year renewal commission. The formula is about whether replacement benefits are clearly and substantially greater.',
        },
      ],
    ),
    question(
      'c13q123',
      'What notice must the first page of the policy contain for the buyer?',
      [
        {
          text: 'A promise that every medical expense will be paid in full.',
          why: 'The required notice says the policy may not cover all of the buyer’s medical expenses. It is not a promise of full payment.',
        },
        {
          text: 'The signed statement that additional coverage is appropriate for the applicant’s needs.',
          why: 'That signed statement belongs on the application. The first page must notice the buyer that the policy may not cover all medical expenses.',
        },
        {
          text: 'A notice that the policy may not cover all of the buyer’s medical expenses.',
          why: 'The first page must contain this notice: the policy may not cover all of the buyer’s medical expenses.',
          correct: true,
        },
        {
          text: 'The Guide to Health Insurance for People with Medicare, printed in place of any buyer notice.',
          why: 'That guide is a separate document for applicants. The first-page notice warns that the policy may not cover all medical expenses.',
        },
      ],
    ),
    question(
      'c13q124',
      'What must the company make a reasonable effort to learn about coverage the applicant already has?',
      [
        {
          text: 'Whether a replacement has benefits that are clearly and substantially greater.',
          why: 'That comparison is the job of the replacement formula. The company must also learn whether accident and sickness insurance is already owned.',
        },
        {
          text: 'Only whether the applicant is eligible for Medicaid.',
          why: 'The application must ask about Medicaid eligibility. The company’s reasonable effort is to learn about existing accident and sickness insurance, including type and amounts.',
        },
        {
          text: 'Whether counseling services have already been used.',
          why: 'The application must say that counseling services may be available. The required effort is to learn the accident and sickness coverage already owned.',
        },
        {
          text: 'Whether the applicant already has accident and sickness insurance, and the type and amounts owned.',
          why: 'The company must make a reasonable effort to learn whether the applicant already has accident and sickness insurance and the type and amounts owned.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q125',
      'Which marketing practices may not be used for Medicare supplements?',
      [
        {
          text: 'Twisting, high-pressure tactics, and misleading advertising.',
          why: 'Twisting, high-pressure tactics, and misleading advertising may not be used.',
          correct: true,
        },
        {
          text: 'Giving an advertisement to the Insurance Commissioner for review or approval.',
          why: 'An advertisement intended for use in this state must be given to the Insurance Commissioner. The barred practices are twisting, high-pressure tactics, and misleading advertising.',
        },
        {
          text: 'Asking whether the applicant is replacing another accident and health policy.',
          why: 'The application must ask about replacement. Twisting, high-pressure tactics, and misleading advertising are what may not be used.',
        },
        {
          text: 'Using Medicare Supplement or Medigap on a policy that fully complies with the law.',
          why: 'Those words may be used when the policy fully complies. Twisting, high-pressure tactics, and misleading advertising may not be used.',
        },
      ],
    ),
    question(
      'c13q126',
      'When may Medicare Supplement, Medigap, Medicare Wrap-Around, and similar words be used?',
      [
        {
          text: 'Whenever the first page warns that some expenses may be uncovered.',
          why: 'That buyer notice is required on the first page, but the names may be used only when the policy fully complies with the law.',
        },
        {
          text: 'Only when the policy fully complies with the law.',
          why: 'Medicare Supplement, Medigap, Medicare Wrap-Around, and similar words may not be used unless the policy fully complies with the law.',
          correct: true,
        },
        {
          text: 'Only on a second Medicare supplement sold to the same person.',
          why: 'Selling a person more than one Medicare supplement policy is prohibited. The words may be used when the policy fully complies with the law.',
        },
        {
          text: 'Only after the Insurance Commissioner issues the policy.',
          why: 'Advertisements go to the Insurance Commissioner for review or approval. The protected words may be used when the policy fully complies with the law.',
        },
      ],
    ),
    question(
      'c13q127',
      'What must happen to a Medicare supplement advertisement intended for use in this state?',
      [
        {
          text: 'It must be kept only by the agent and never shown to the regulator.',
          why: 'The advertisement must be given to the Insurance Commissioner for review or approval. It is not kept away from the regulator.',
        },
        {
          text: 'It must be read to the applicant during the 30-day free look and then destroyed.',
          why: 'The free-look period lets the insured return the policy. An advertisement in writing, radio, electronic, or television form must be given to the Insurance Commissioner.',
        },
        {
          text: 'It must be given to the Insurance Commissioner for review or approval.',
          why: 'Any Medicare supplement advertisement intended for use in this state, in writing, radio, electronic, or television form, must be given to the Insurance Commissioner for review or approval.',
          correct: true,
        },
        {
          text: 'It must replace the signed statement on the application.',
          why: 'The application must include a signed appropriateness statement. Advertisements must be given to the Insurance Commissioner for review or approval.',
        },
      ],
    ),
    question(
      'c13q128',
      'What appropriateness duty does the agent have, and what signed statement must the application include?',
      [
        {
          text: 'The agent may recommend any replacement, and the applicant alone signs that Medicaid will pay the premium.',
          why: 'The agent must determine that a recommended purchase or replacement is appropriate. The signed statement says the agent reviewed current coverage and found the additional coverage appropriate.',
        },
        {
          text: 'The agent compares only commissions, and the application states that counseling services are required.',
          why: 'The application must say counseling services may be available, not that they are required. The agent must find the purchase or replacement appropriate, and the application must say so in a signed statement.',
        },
        {
          text: 'The agent skips the review when a Notice Regarding Replacement is used.',
          why: 'The Notice Regarding Replacement is an added replacement disclosure. The agent must still determine appropriateness, and the application must include the signed review statement.',
        },
        {
          text: 'The agent must find the purchase or replacement appropriate, and the application must say the reviewed coverage fits the applicant’s needs.',
          why: 'An agent must make a reasonable effort to determine that a recommended purchase or replacement is appropriate. The application must include a signed statement that current coverage was reviewed and that the additional coverage is appropriate for the applicant’s needs.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q129',
      'What sales result is prohibited for one person’s Medicare supplement coverage?',
      [
        {
          text: 'Selling that person more than one Medicare supplement policy.',
          why: 'Selling a person more than one Medicare supplement policy is prohibited.',
          correct: true,
        },
        {
          text: 'Replacing one supplement when the new benefits are clearly and substantially greater.',
          why: 'A formula looks at whether replacement benefits are clearly and substantially greater. The prohibition is selling one person more than one Medicare supplement policy.',
        },
        {
          text: 'Issuing a policy that uses Medigap only because it fully complies with the law.',
          why: 'Medigap may be used when the policy fully complies with the law. Selling more than one Medicare supplement to a person is what is prohibited.',
        },
        {
          text: 'Returning the premium during the 30-day free-look period.',
          why: 'The insured may return the policy during the 30-day free look for a full refund. Selling more than one Medicare supplement policy is prohibited.',
        },
      ],
    ),
    question(
      'c13q130',
      'How long is the free-look period, and what refund may the insured receive?',
      [
        {
          text: '6 months, with a refund only when a pre-existing condition is covered.',
          why: 'Six months is used for replacement time limits and for how pre-existing conditions are handled. Every policy has a 30-day free look with a full refund for any reason.',
        },
        {
          text: '30 days, with a full refund for any reason.',
          why: 'Every policy has a 30-day free-look period. The insured may return it for a full refund for any reason, and the policyholder must be told of that return right.',
          correct: true,
        },
        {
          text: 'Until 5 renewal years have been paid, with no refund of commission.',
          why: 'Commissions in renewal years must be paid for at least 5 renewal years. The free look is 30 days, with a full refund for any reason.',
        },
        {
          text: 'From the application date until Medicare benefit changes take effect.',
          why: 'The issuer must notify policyholders no later than 30 days before Medicare benefit changes take effect. The free look is a 30-day return right with a full refund.',
        },
      ],
    ),
    question(
      'c13q131',
      'Where must the right-to-return notice be placed?',
      [
        {
          text: 'Only in the outline of coverage given at application.',
          why: 'An outline of coverage must be given at application. The right-to-return notice must be prominent on the first page of the policy or certificate, or attached to it.',
        },
        {
          text: 'In the Notice Regarding Replacement kept solely by the agent.',
          why: 'The company keeps a copy of the Notice Regarding Replacement signed by the applicant and the agent. The right-to-return notice must be prominent on the first page or attached.',
        },
        {
          text: 'Prominent on the first page of the policy or certificate, or attached to it.',
          why: 'The right-to-return notice must be prominent on the first page of the policy or certificate, or attached to it.',
          correct: true,
        },
        {
          text: 'On the renewal-commission schedule for the second year.',
          why: 'Renewal commission rules are separate from the return notice. The notice must be prominent on the first page of the policy or certificate, or attached to it.',
        },
      ],
    ),
    question(
      'c13q132',
      'What must the application ask or state about other coverage, Medicaid, and counseling?',
      [
        {
          text: 'Only the agent’s first-year commission compared with renewal commission.',
          why: 'Commission limits are not application questions. The application must ask about another Medicare supplement or other accident and health replacement, ask about Medicaid eligibility, and say that counseling services may be available.',
        },
        {
          text: 'That the applicant will accept any pre-existing limit without a labeled paragraph.',
          why: 'A pre-existing limitation must appear in a separate paragraph labeled Pre-existing Condition Limitations. The application questions concern other coverage, Medicaid, and counseling.',
        },
        {
          text: 'That the policy duplicates Medicare and that counseling is forbidden.',
          why: 'Policies effective on or after June 1, 2010, cannot duplicate Medicare benefits. The application must ask about other coverage and Medicaid and say counseling services may be available.',
        },
        {
          text: 'Whether another supplement or other accident and health policy is being replaced, whether the applicant is Medicaid-eligible, and that counseling services may be available.',
          why: 'The application must ask whether the applicant has another Medicare supplement or is replacing any other accident and health policy, must ask whether the applicant is eligible for Medicaid, and must say that counseling services may be available.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q133',
      'When must the Notice Regarding Replacement be given, and what free-look fact must it include?',
      [
        {
          text: 'Before the policy is issued or delivered, and it must tell the applicant about the 30-day free look.',
          why: 'If a replacement is involved, the Notice Regarding Replacement must be given before the policy is issued or delivered, and it must tell the applicant about the 30-day free look. The company keeps a copy signed by the applicant and the agent.',
          correct: true,
        },
        {
          text: 'No later than 30 days before Medicare changes the supplement’s benefits.',
          why: 'That 30-day notice is the issuer’s notice of modifications when Medicare benefit changes take effect. The Notice Regarding Replacement is given before issue or delivery and describes the 30-day free look.',
        },
        {
          text: 'At the start of the second renewal year, with no mention of the free look.',
          why: 'Renewal commission is paid for servicing the policy in the second year. The replacement notice comes before issue or delivery and must tell the applicant about the 30-day free look.',
        },
        {
          text: 'Only after the replaced policy has been in effect for 6 months.',
          why: 'The 6-month fact limits time requirements on similar benefits after replacement. The Notice Regarding Replacement is given before the policy is issued or delivered.',
        },
      ],
    ),
    question(
      'c13q134',
      'When one supplement replaces another, which time limits must the new company waive to the extent already met?',
      [
        {
          text: 'Only the 30-day free-look period.',
          why: 'The free look remains a 30-day return right. On replacement, the new company must waive pre-existing condition limits, waiting periods, elimination periods, and probationary periods to the extent already met.',
        },
        {
          text: 'Pre-existing condition limits, waiting periods, elimination periods, and probationary periods.',
          why: 'If one supplement replaces another, the new company must waive pre-existing condition limits, waiting periods, elimination periods, and probationary periods to the extent those periods were already met.',
          correct: true,
        },
        {
          text: 'The requirement to give the Guide to Health Insurance for People with Medicare.',
          why: 'Issuers must still give that guide to applicants. The waived items are pre-existing condition limits, waiting periods, elimination periods, and probationary periods already met.',
        },
        {
          text: 'Renewal commissions after 5 renewal years.',
          why: 'Commissions in renewal years must equal the second-year commission and be paid for at least 5 renewal years. Replacement waiver covers the listed time limits to the extent already met.',
        },
      ],
    ),
    question(
      'c13q135',
      'If the replaced policy has been in effect for 6 months or more, what time requirements may the new policy impose for similar benefits?',
      [
        {
          text: 'A new probationary period of 30 days.',
          why: 'Thirty days is the free-look length and a notice period in this section. If the replaced policy has been in effect for 6 months or more, the new policy may not impose those time requirements for similar benefits.',
        },
        {
          text: 'Waiting and elimination periods even when they were already met.',
          why: 'Those periods are waived to the extent already met. After 6 months in effect, the new policy may not impose any of those time requirements for benefits similar to the original policy.',
        },
        {
          text: 'None of those time requirements.',
          why: 'If the replaced policy has been in effect for 6 months or more, the new policy may not impose any of those time requirements for benefits similar to the original policy.',
          correct: true,
        },
        {
          text: 'A pre-existing limit measured from the second renewal year.',
          why: 'The second year is a commission measuring point. After 6 months in force, similar benefits may not be given any of those time requirements.',
        },
      ],
    ),
    question(
      'c13q136',
      'How must a pre-existing limitation be presented, and which pre-existing conditions must the policy usually cover?',
      [
        {
          text: 'Inside the buyer notice on the first page, and only conditions from the first 30 days.',
          why: 'The first-page buyer notice is about uncovered medical expenses, and 30 days is the free look. A pre-existing limitation needs its own labeled paragraph, and the policy usually must cover conditions incurred more than 6 months from the effective date.',
        },
        {
          text: 'Only in the Notice Regarding Replacement, with no coverage after 6 months.',
          why: 'The replacement notice tells the applicant about the 30-day free look. The limitation must be a separate paragraph labeled Pre-existing Condition Limitations, and coverage usually applies to conditions incurred more than 6 months from the effective date.',
        },
        {
          text: 'In the commission agreement, covering losses only if they are from an accident.',
          why: 'Losses from sickness must be treated like losses from an accident on policies effective on or after June 1, 2010. The pre-existing limitation has its own labeled paragraph.',
        },
        {
          text: 'In a separate paragraph labeled Pre-existing Condition Limitations, usually covering conditions incurred more than 6 months from the effective date.',
          why: 'Any pre-existing limitation must appear in a separate paragraph labeled Pre-existing Condition Limitations. Usually the policy must cover pre-existing conditions incurred more than 6 months from the effective date.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q137',
      'How soon before Medicare benefit changes take effect must the issuer notify policyholders of modifications to their supplement?',
      [
        {
          text: 'No later than 30 days before the changes take effect.',
          why: 'No later than 30 days before Medicare benefit changes take effect, the issuer must notify policyholders of modifications to their supplement.',
          correct: true,
        },
        {
          text: 'Only during the 30-day free look after delivery.',
          why: 'The 30-day free look is the insured’s return period. The modification notice must go out no later than 30 days before the Medicare benefit changes take effect.',
        },
        {
          text: 'After the replaced policy has been in effect for 6 months.',
          why: 'The 6-month rule limits time requirements on similar replacement benefits. Medicare-related modifications must be noticed no later than 30 days before they take effect.',
        },
        {
          text: 'At the beginning of the fifth renewal year.',
          why: 'Renewal commissions must be paid for at least 5 renewal years. The modification notice is due no later than 30 days before Medicare benefit changes take effect.',
        },
      ],
    ),
    question(
      'c13q138',
      'When is the Guide to Health Insurance for People with Medicare given, and what receipt rule applies?',
      [
        {
          text: 'The guide is optional for hospital and medical expense policies, and no receipt is ever required.',
          why: 'Issuers of those policies for people eligible for Medicare must give applicants the guide. Except for direct-response policies, the company must get a receipt, and an outline of coverage must be given at application.',
        },
        {
          text: 'Almost all insurers deliver the guide at application, while a direct-response insurer may supply it on request no later than policy delivery.',
          why: 'Almost all insurers deliver the guide at application. A direct-response insurer may supply it on request, but no later than policy delivery. An outline of coverage must be given at application, and except for direct-response policies the company must get a receipt.',
          correct: true,
        },
        {
          text: 'The guide replaces the outline of coverage and is due 6 months after the effective date.',
          why: 'The outline is still given at application. The guide is delivered at application by almost all insurers, or on request no later than delivery for a direct-response insurer.',
        },
        {
          text: 'Only the Insurance Commissioner may hand out the guide, and only with an advertisement.',
          why: 'Advertisements go to the Insurance Commissioner for review or approval. The insurer gives applicants the guide, usually at application.',
        },
      ],
    ),
    question(
      'c13q139',
      'How are first-year and renewal commissions limited?',
      [
        {
          text: 'First-year commission may exceed any multiple of renewal pay if the policy is guaranteed renewable.',
          why: 'Guaranteed renewability is a policy feature for contracts effective on or after June 1, 2010. First-year commission may not be more than 200% of the second-year renewal commission.',
        },
        {
          text: 'Renewal commissions must stop after the second year.',
          why: 'Commissions in renewal years must equal the second-year commission and must be paid for at least 5 renewal years. They do not stop after the second year.',
        },
        {
          text: 'First-year commission may not be more than 200% of the second-year renewal commission, and renewal commissions must equal that amount for at least 5 renewal years.',
          why: 'Compensation includes monetary and nonmonetary pay for sale or renewal, including bonuses, gifts, prizes, awards, and finder’s fees. On a replacement, the agent may not receive more than the replacing company’s renewal compensation unless the new benefits are clearly and substantially greater.',
          correct: true,
        },
        {
          text: 'On every replacement, first-year commission is paid again even if the new benefits are not greater.',
          why: 'On a replacement, the agent may not receive more than the renewal compensation payable by the replacing company unless the new benefits are clearly and substantially greater.',
        },
      ],
    ),
    question(
      'c13q140',
      'What rules apply to Medicare supplement policies effective on or after June 1, 2010?',
      [
        {
          text: 'They may reduce or duplicate Medicare benefits when the loss is from sickness.',
          why: 'Losses from sickness must be treated like losses from an accident. These policies cannot reduce, restrict, or duplicate Medicare benefits.',
        },
        {
          text: 'They may exclude a pre-existing condition loss that occurred more than 6 months before the effective date.',
          why: 'They cannot exclude or limit a pre-existing condition loss if it occurred more than 6 months before the effective date.',
        },
        {
          text: 'They may be cancelled when the insured’s health changes, if renewal commission is still paid.',
          why: 'The policy must be guaranteed renewable. Commission rules do not create a right to cancel for a change in health.',
        },
        {
          text: 'They cannot reduce, restrict, or duplicate Medicare benefits, cannot limit a pre-existing loss from more than 6 months before the effective date, must treat sickness like an accident, and must be guaranteed renewable.',
          why: 'Policies effective on or after June 1, 2010, cannot reduce, restrict, or duplicate Medicare benefits, cannot exclude or limit that older pre-existing loss, must treat sickness like an accident, and must be guaranteed renewable.',
          correct: true,
        },
      ],
    ),
  ],
  'c13-select': [
    question(
      'c13q141',
      'What kind of Medicare supplement is a Medicare SELECT policy?',
      [
        {
          text: 'A Medicare supplement with restricted network provisions.',
          why: 'A Medicare SELECT policy is a Medicare supplement with restricted network provisions. Payment of benefits, in whole or in part, depends on using network providers.',
          correct: true,
        },
        {
          text: 'A supplement that pays the same whether or not network providers are used.',
          why: 'Payment of benefits, in whole or in part, depends on using network providers. SELECT is a Medicare supplement with restricted network provisions.',
        },
        {
          text: 'A policy that can be sold only outside the issuer’s service area.',
          why: 'Issuers may not sell a new Medicare SELECT policy to someone whose primary residence is outside the issuer’s service area. The policy is a network-restricted supplement.',
        },
        {
          text: 'An unrestricted plan that must charge higher premiums than other supplements.',
          why: 'SELECT plans operate like an HMO, and members pay lower premiums. The defining feature is restricted network provisions.',
        },
      ],
    ),
    question(
      'c13q142',
      'How does a Medicare SELECT plan operate, and what do members pay?',
      [
        {
          text: 'Like an indemnity plan with no network, and members pay higher premiums.',
          why: 'SELECT plans negotiate lower rates with a network of doctors, hospitals, and specialists. The plan operates like an HMO, and members pay lower premiums.',
        },
        {
          text: 'Like an HMO, and members pay lower premiums.',
          why: 'It operates like an HMO, and members pay lower premiums. SELECT plans negotiate lower rates with a network of doctors, hospitals, and specialists.',
          correct: true,
        },
        {
          text: 'Like a failed program that must stop coverage.',
          why: 'Coverage must continue if Medicare SELECT policies are discontinued because the program fails. While the plan operates, it works like an HMO with lower premiums.',
        },
        {
          text: 'Only through the head of the state’s department of insurance, with no premium difference.',
          why: 'Each policy must be approved by that official. The operating comparison is an HMO, and members pay lower premiums.',
        },
      ],
    ),
    question(
      'c13q143',
      'Who must approve each Medicare SELECT policy?',
      [
        {
          text: 'Each network hospital that negotiated a lower rate.',
          why: 'SELECT plans negotiate lower rates with doctors, hospitals, and specialists. Approval of each policy belongs to the head of the state’s department of insurance.',
        },
        {
          text: 'The applicant, after a full and fair written disclosure.',
          why: 'Each applicant must receive that disclosure. Each policy must still be approved by the head of the state’s department of insurance.',
        },
        {
          text: 'The head of the state’s department of insurance.',
          why: 'Each policy must be approved by the head of the state’s department of insurance.',
          correct: true,
        },
        {
          text: 'The Commissioner, but only after the policy has already been used.',
          why: 'Proposed changes to the plan of operation are filed with the Commissioner before they are used. Policy approval itself is by the head of the state’s department of insurance.',
        },
      ],
    ),
    question(
      'c13q144',
      'To whom may an issuer not sell a new Medicare SELECT policy?',
      [
        {
          text: 'A person who uses network providers for every covered service.',
          why: 'Payment depends on using network providers, which is how SELECT works. The sale ban is for someone whose primary residence is outside the issuer’s service area.',
        },
        {
          text: 'A member who has had the policy in force long enough to request another supplement.',
          why: 'On request, a comparable supplement with no restricted network must be offered, without evidence of insurability if the SELECT policy has been in force for 6 months. The prohibited new sale is outside the service area.',
        },
        {
          text: 'A person who needs emergency care from a non-network provider.',
          why: 'Emergency non-network services must not have payment restricted when a network provider is not reasonable. The residence limit is the issuer’s service area.',
        },
        {
          text: 'Someone whose primary residence is outside the issuer’s service area.',
          why: 'Issuers may not sell a new Medicare SELECT policy to someone whose primary residence is outside the issuer’s service area.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q145',
      'What must the policy pay for covered services that are not available through network providers?',
      [
        {
          text: 'Full coverage under the policy.',
          why: 'Every Medicare SELECT policy must pay full coverage under the policy for covered services that are not available through network providers. Each applicant must also get a full and fair written disclosure of the provisions, restrictions, and limitations.',
          correct: true,
        },
        {
          text: 'Nothing, because benefits are paid only inside the network.',
          why: 'Payment can depend on network use, but covered services that are not available through network providers must be paid at full coverage under the policy.',
        },
        {
          text: 'Half of the negotiated network rate, and only for specialists.',
          why: 'The section does not split payment that way. Unavailable network services must receive full coverage under the policy.',
        },
        {
          text: 'Coverage only if the program has failed and policies are discontinued.',
          why: 'If policies are discontinued because the program fails, coverage must continue. Full payment is also required when covered services are not available through network providers.',
        },
      ],
    ),
    question(
      'c13q146',
      'When must the policy leave payment unrestricted for covered services from non-network providers?',
      [
        {
          text: 'Whenever the insured prefers a non-network provider for routine care.',
          why: 'Ordinary network limits can still apply. Payment is not restricted when the symptoms require emergency care and it is not reasonable to obtain the services through a network provider.',
        },
        {
          text: 'When the symptoms require emergency care and it is not reasonable to use a network provider.',
          why: 'The policy must not restrict payment for covered services from non-network providers in that emergency situation. Coverage must also continue if SELECT policies are discontinued because the program fails.',
          correct: true,
        },
        {
          text: 'Only after the Commissioner approves a change to the provider list.',
          why: 'Network-provider list changes must be filed with the Commissioner within 30 days. The emergency rule turns on symptoms and whether network care is reasonable.',
        },
        {
          text: 'Only when the insured shows evidence of insurability.',
          why: 'If the SELECT policy has been in force for 6 months, the same issuer must, on request, offer comparable benefits with no restricted network without evidence of insurability. Emergency non-network payment is a separate duty.',
        },
      ],
    ),
    question(
      'c13q147',
      'What Medicare SELECT filings must be made with the Commissioner?',
      [
        {
          text: 'The lower premium schedule, filed after members have already paid it.',
          why: 'Lower premiums are a feature of the plan. Proposed changes to the plan of operation must be filed before they are used, and network-provider list changes must be filed within 30 days.',
        },
        {
          text: 'A new service-area map filed only when a primary residence is inside the area.',
          why: 'The service-area rule limits new sales outside that area. The filings are plan-of-operation changes before use and network-list changes within 30 days.',
        },
        {
          text: 'Proposed plan-of-operation changes before they are used, and network-provider list changes within 30 days.',
          why: 'The issuer must file proposed changes to its plan of operation with the Commissioner before using them. Changes to the list of network providers must be filed with the Commissioner within 30 days.',
          correct: true,
        },
        {
          text: 'Evidence of insurability for every insured who has been covered for 6 months.',
          why: 'After 6 months in force, the on-request supplement with comparable benefits and no restricted network must be available without evidence of insurability. That is not the Commissioner filing rule.',
        },
      ],
    ),
  ],
  'c13-medicaid': [
    question(
      'c13q148',
      'What is Medicaid?',
      [
        {
          text: 'A state-only pension for people who already can pay for medical care.',
          why: 'Medicaid is a federal and state program, and it serves people whose income and resources are not enough to pay for necessary medical care.',
        },
        {
          text: 'A program run only by the Social Security Administration with no state role.',
          why: 'States design and administer Medicaid. After the Affordable Care Act they rely on data from sources such as the Social Security Administration, but the program is federal and state.',
        },
        {
          text: 'Coverage limited to family planning for people over a stated asset test.',
          why: 'Family planning is one service states must provide. Medicaid itself is the federal and state program for people who cannot pay for necessary medical care.',
        },
        {
          text: 'A federal and state program for people whose income and resources are not enough to pay for necessary medical care.',
          why: 'Medicaid is a federal and state program for people whose income and resources are not enough to pay for necessary medical care.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q149',
      'Who designs and administers Medicaid, and under what kind of guidelines?',
      [
        {
          text: 'The states, typically through the state’s Medicaid agency, under broad federal guidelines. In Utah, that agency is the Utah Department of Health and Human Services.',
          why: 'States design and administer Medicaid, typically through the state’s Medicaid agency, under broad federal guidelines. In Utah, that agency is the Utah Department of Health and Human Services.',
          correct: true,
        },
        {
          text: 'Families, using paper they submit in place of agency data.',
          why: 'After the Affordable Care Act, states rely primarily on agency data rather than paper from families. Design and administration belong to the states.',
        },
        {
          text: 'The Departments of Homeland Security and Labor, with no state welfare department.',
          why: 'Those departments are examples of data sources. States design and administer the program, typically through the state’s Medicaid agency. In Utah, that agency is the Utah Department of Health and Human Services.',
        },
        {
          text: 'The federal government alone, with states barred from setting eligibility.',
          why: 'A person must meet income and other eligibility requirements, and states design and administer the program under broad federal guidelines.',
        },
      ],
    ),
    question(
      'c13q150',
      'After low income and low assets are established, which other qualifiers can be used?',
      [
        {
          text: 'Only residency, with blindness and pregnancy excluded.',
          why: 'Residency, immigration status, and documentation of U.S. citizenship are additional rules. Other qualifiers can include blindness, disability, pregnancy, age over 65, or caring for children who receive welfare benefits.',
        },
        {
          text: 'Blindness, disability, pregnancy, age over 65, or caring for children who receive welfare benefits.',
          why: 'After low income and low assets are established, other qualifiers can include blindness, disability, pregnancy, age over 65, or caring for children who receive welfare benefits.',
          correct: true,
        },
        {
          text: 'A percentage of the federal poverty level as a medical diagnosis.',
          why: 'For many groups, income is measured as a percentage of the federal poverty level. That measurement is not itself the list of other qualifiers.',
        },
        {
          text: 'Private-duty nursing and eyeglasses, regardless of income.',
          why: 'Those are items Medicaid also pays for. Qualifiers after low income and low assets include blindness, disability, pregnancy, age over 65, or caring for children on welfare.',
        },
      ],
    ),
    question(
      'c13q151',
      'How is income measured for many Medicaid groups?',
      [
        {
          text: 'As paper totals the family chooses to send.',
          why: 'After the Affordable Care Act, states rely primarily on data from agencies rather than paper from families. For many groups, income is a percentage of the federal poverty level.',
        },
        {
          text: 'Only by whether the person is age over 65.',
          why: 'Age over 65 can be a qualifier after low income and low assets are established. Income for many groups is measured as a percentage of the federal poverty level.',
        },
        {
          text: 'As a percentage of the federal poverty level.',
          why: 'For many groups, income is measured as a percentage of the federal poverty level.',
          correct: true,
        },
        {
          text: 'As the price of physician services in a rural health clinic.',
          why: 'Physician services and rural health clinic services are care the state must provide. Income measurement for many groups uses the federal poverty level.',
        },
      ],
    ),
    question(
      'c13q152',
      'After the Affordable Care Act, what do states primarily use instead of paper from families?',
      [
        {
          text: 'An in-person asset interview with no outside data.',
          why: 'States rely primarily on data from sources such as the Social Security Administration and the Departments of Homeland Security and Labor, rather than paper from families.',
        },
        {
          text: 'Documentation of U.S. citizenship as a substitute for all income data.',
          why: 'Individuals must meet documentation rules for U.S. citizenship, but income verification after the Affordable Care Act relies primarily on agency data rather than paper from families.',
        },
        {
          text: 'Only the Utah Department of Health and Human Services case notes.',
          why: 'In Utah, the Medicaid agency is the Utah Department of Health and Human Services. The data sources named for this change include the Social Security Administration and the Departments of Homeland Security and Labor, not only that agency’s case notes.',
        },
        {
          text: 'Data from sources such as the Social Security Administration and the Departments of Homeland Security and Labor.',
          why: 'After the Affordable Care Act, states rely primarily on data from sources such as the Social Security Administration and the Departments of Homeland Security and Labor, rather than paper from families.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q153',
      'Which federal and state rules must individuals also meet?',
      [
        {
          text: 'Rules on residency, immigration status, and documentation of U.S. citizenship.',
          why: 'Individuals also must meet federal and state rules on residency, immigration status, and documentation of U.S. citizenship.',
          correct: true,
        },
        {
          text: 'A rule that low assets alone remove every other requirement.',
          why: 'Low income and low assets come first, and other qualifiers can still apply. Individuals also must meet residency, immigration, and citizenship-documentation rules.',
        },
        {
          text: 'A requirement to decline physician services and hospital care.',
          why: 'States must provide at least those services. The added individual rules are residency, immigration status, and documentation of U.S. citizenship.',
        },
        {
          text: 'Exclusive use of paper from families after the Affordable Care Act.',
          why: 'States rely primarily on agency data rather than paper from families. Individuals must still meet residency, immigration, and citizenship-documentation rules.',
        },
      ],
    ),
    question(
      'c13q154',
      'Which care must a state Medicaid program provide at least?',
      [
        {
          text: 'Only prescription drugs, dental services, eyeglasses, and check-ups.',
          why: 'Medicaid also pays for prescription drugs, dental services, private-duty nursing, eyeglasses, check-ups, and medical supplies and equipment. The minimum list is broader and includes physician, hospital, skilled nursing, lab and X-ray, home health, rural health clinic, screening, and family planning services.',
        },
        {
          text: 'Physician services, inpatient and outpatient hospital care, skilled nursing home services, laboratory and X-ray services, home health care, rural health clinic services, periodic screening, diagnosis, and treatment, and family planning services.',
          why: 'States must provide at least that list. Medicaid also pays for prescription drugs, dental services, private-duty nursing, eyeglasses, check-ups, and medical supplies and equipment.',
          correct: true,
        },
        {
          text: 'Only care for blindness, pregnancy, or age over 65.',
          why: 'Those are eligibility qualifiers after low income and low assets are established. The minimum services are the physician, hospital, nursing, lab, home health, clinic, screening, and family planning list.',
        },
        {
          text: 'Private-duty nursing and medical equipment, with hospital care excluded.',
          why: 'Private-duty nursing and medical supplies and equipment are items Medicaid also pays for. Inpatient and outpatient hospital care is part of what states must provide at least.',
        },
      ],
    ),
  ],
  'c13-mippa': [
    question(
      'c13q155',
      'What did the Medicare Improvements for Patients and Providers Act of 2008 amend the Social Security Act to do?',
      [
        {
          text: 'End preventive services and reduce care in rural areas.',
          why: 'The amendment improves access to preventive and mental health services and maintains access to care in rural areas. It does not end those efforts.',
        },
        {
          text: 'Replace Medicare with a veteran grant program only.',
          why: 'The act authorizes certain veteran grants, but the Social Security Act amendment extends expiring Medicare provisions, improves preventive and mental health access, enhances low-income benefit programs, and maintains rural access.',
        },
        {
          text: 'Extend expiring Medicare provisions, improve preventive and mental health access, enhance low-income benefit programs, and maintain rural access to care.',
          why: 'The 2008 act amended the Social Security Act to extend expiring Medicare provisions, improve access to preventive and mental health services, enhance low-income benefit programs, and maintain access to care in rural areas.',
          correct: true,
        },
        {
          text: 'Limit the act to electronic prescriptions and nothing else.',
          why: 'Incentive payments for electronic prescriptions are one change. The amendment also extends expiring provisions, improves access, enhances low-income programs, and maintains rural access.',
        },
      ],
    ),
    question(
      'c13q156',
      'Which veterans may receive the act’s grants for more mental health and other care?',
      [
        {
          text: 'Veterans of any conflict who live in cities and already have full local care.',
          why: 'The grants increase mental health and other care for veterans of Operation Iraqi Freedom and Operation Enduring Freedom who live in rural areas.',
        },
        {
          text: 'Dual eligibles in a specialized Medicare Advantage plan, whether or not they are veterans.',
          why: 'The act limits out-of-pocket costs for dual eligibles and beneficiaries in that kind of plan. The grants are for named veterans living in rural areas.',
        },
        {
          text: 'Kidney-disease patients who need education services.',
          why: 'The act extends Medicare coverage to kidney-disease patient education. The grants are for veterans of Operation Iraqi Freedom and Operation Enduring Freedom in rural areas.',
        },
        {
          text: 'Veterans of Operation Iraqi Freedom and Operation Enduring Freedom who live in rural areas.',
          why: 'The act authorizes grants to increase mental health and other care for those veterans who live in rural areas.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q157',
      'What does the act provide for electronic prescriptions?',
      [
        {
          text: 'Incentive payments.',
          why: 'The act provides incentive payments for electronic prescriptions.',
          correct: true,
        },
        {
          text: 'A ban on electronic prescriptions in rural areas.',
          why: 'Rural access is something the act works to maintain, and electronic prescriptions are supported with incentive payments.',
        },
        {
          text: 'Interest on late pharmacy claims in place of any prescribing incentive.',
          why: 'Part D changes put interest on late claims. Electronic prescriptions are addressed with incentive payments.',
        },
        {
          text: 'Expansion of the Medicare Medical Home Demonstration Project.',
          why: 'That project may be expanded when quality and spending conditions are met. Electronic prescriptions are tied to incentive payments.',
        },
      ],
    ),
    question(
      'c13q158',
      'When may the Medicare Medical Home Demonstration Project be expanded?',
      [
        {
          text: 'Whenever a pharmacy in a long-term care facility asks for more time.',
          why: 'That pharmacy has between 30 and 90 days to submit claims. The demonstration may be expanded when quality and spending conditions are met.',
        },
        {
          text: 'When quality and spending conditions are met.',
          why: 'The act allows expansion of the Medicare Medical Home Demonstration Project when quality and spending conditions are met.',
          correct: true,
        },
        {
          text: 'Only after copayments for inpatient hospital psychiatric care are increased.',
          why: 'The act eliminates copayments for Medicare psychiatric services for a person who is not a hospital inpatient when the expenses are incurred. Expansion of the demonstration depends on quality and spending conditions.',
        },
        {
          text: 'As soon as any special-needs plan is revised, with no quality condition.',
          why: 'The act revises requirements for special-needs plans. The demonstration expansion is allowed when quality and spending conditions are met.',
        },
      ],
    ),
    question(
      'c13q159',
      'What does the act direct for chronic kidney disease, and what education does it cover?',
      [
        {
          text: 'Grants for rural veterans in place of any kidney-disease screening.',
          why: 'Veteran grants are a separate change. The act directs programs to increase awareness of and screening for chronic kidney disease and extends Medicare coverage to kidney-disease patient education.',
        },
        {
          text: 'Incentive payments for electronic prescriptions used only in kidney clinics.',
          why: 'Electronic-prescription incentives are not limited to kidney clinics in this section. Kidney disease is addressed through awareness, screening, and patient-education coverage.',
        },
        {
          text: 'Programs to increase awareness and screening, plus Medicare coverage of kidney-disease patient education.',
          why: 'The act directs programs to increase awareness of and screening for chronic kidney disease, and it extends Medicare coverage to kidney-disease patient education.',
          correct: true,
        },
        {
          text: 'A requirement that kidney-disease education stay outside Medicare.',
          why: 'The act extends Medicare coverage to kidney-disease patient education. It also directs awareness and screening programs for chronic kidney disease.',
        },
      ],
    ),
    question(
      'c13q160',
      'Which Medicare Advantage requirements does the act revise?',
      [
        {
          text: 'Requirements for employer plans only, leaving private fee-for-service plans unchanged.',
          why: 'The revision covers certain non-employer Medicare Advantage private fee-for-service plans and special-needs plans.',
        },
        {
          text: 'Only the rules for veteran grants in rural areas.',
          why: 'Those grants are a separate authorization. The revised requirements are for certain non-employer Medicare Advantage private fee-for-service plans and for special-needs plans.',
        },
        {
          text: 'Prompt-payment rules for every Part D clean claim, instead of plan requirements.',
          why: 'Prompt payment of clean claims is a Part D change. The plan revision is for certain non-employer private fee-for-service plans and special-needs plans.',
        },
        {
          text: 'Requirements for certain non-employer Medicare Advantage private fee-for-service plans and for special-needs plans.',
          why: 'The act revises requirements for certain non-employer Medicare Advantage private fee-for-service plans and for special-needs plans.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q161',
      'Whose out-of-pocket costs does the act limit?',
      [
        {
          text: 'Dual eligibles and beneficiaries in a specialized Medicare Advantage plan for special-needs individuals.',
          why: 'The act limits out-of-pocket costs for dual eligibles and beneficiaries in a specialized Medicare Advantage plan for special-needs individuals.',
          correct: true,
        },
        {
          text: 'Every veteran of Operation Iraqi Freedom, wherever that veteran lives.',
          why: 'Grants target those veterans, and veterans of Operation Enduring Freedom, who live in rural areas. The out-of-pocket limit names dual eligibles and beneficiaries in a specialized special-needs Medicare Advantage plan.',
        },
        {
          text: 'Pharmacies that submit claims between 30 and 90 days.',
          why: 'That window is how long a pharmacy located in, or contracting with, a long-term care facility has to submit claims. The cost limit is for dual eligibles and the named beneficiaries.',
        },
        {
          text: 'Hospital inpatients who still owe psychiatric copayments.',
          why: 'The eliminated psychiatric copayments are for a person who is not a hospital inpatient when the expenses are incurred. Out-of-pocket limits in this sentence apply to dual eligibles and specialized-plan beneficiaries.',
        },
      ],
    ),
    question(
      'c13q162',
      'How long does a pharmacy located in, or contracting with, a long-term care facility have to submit claims?',
      [
        {
          text: 'Until quality and spending conditions for the medical-home project are met.',
          why: 'Those conditions govern expansion of the Medicare Medical Home Demonstration Project. The pharmacy has between 30 and 90 days to submit claims.',
        },
        {
          text: 'Between 30 and 90 days.',
          why: 'A pharmacy located in, or contracting with, a long-term care facility has between 30 and 90 days to submit claims. Part D changes also require prompt payment of clean claims by prescription drug plans and Medicare Advantage drug plans, with interest on late claims.',
          correct: true,
        },
        {
          text: 'One day, with no interest if the plan pays late.',
          why: 'The section requires interest on late claims and gives that pharmacy between 30 and 90 days to submit claims.',
        },
        {
          text: 'Only after the Secretary removes every drug from the class.',
          why: 'The Secretary must identify medications for which restricted access would have major consequences and for which multiple drugs in a class are clinically needed. The pharmacy timing is between 30 and 90 days.',
        },
      ],
    ),
    question(
      'c13q163',
      'Which medications must the Secretary identify?',
      [
        {
          text: 'Drugs for which restricted access would have no clinical effect.',
          why: 'The Secretary must identify medications for which restricted access would have major consequences and for which there is a significant clinical need for access to multiple drugs in a class.',
        },
        {
          text: 'Only drugs used as enrollment gifts.',
          why: 'Gifts or prizes as enrollment inducements are a prohibited sales activity. The Secretary’s identification duty is about restricted access with major consequences and a significant clinical need for multiple drugs in a class.',
        },
        {
          text: 'Medications for which restricted access would have major consequences and for which multiple drugs in a class are clinically needed.',
          why: 'The Secretary must identify medications for which restricted access would have major consequences and for which there is a significant clinical need for access to multiple drugs in a class.',
          correct: true,
        },
        {
          text: 'Every prescription that a long-term care pharmacy submits after 90 days.',
          why: 'The pharmacy window is between 30 and 90 days to submit claims. The Secretary’s list is about restricted access and the clinical need for multiple drugs in a class.',
        },
      ],
    ),
    question(
      'c13q164',
      'Which enrollee charges does the act eliminate?',
      [
        {
          text: 'Out-of-pocket costs for every Medicare Advantage enrollee.',
          why: 'The out-of-pocket limit applies to dual eligibles and beneficiaries in a specialized Medicare Advantage plan for special-needs individuals. The act eliminates copayments for non-inpatient Medicare psychiatric services. It did not eliminate the Part D late-enrollment penalty.',
        },
        {
          text: 'Interest on late Part D claims, and the Part D late-enrollment penalty.',
          why: 'Part D changes require interest on late claims. The act did not eliminate the late-enrollment penalty. It changed the low-income subsidy, also called Extra Help.',
        },
        {
          text: 'Copayments for psychiatric services while the person is a hospital inpatient.',
          why: 'The eliminated copayments are for Medicare psychiatric services for a person who is not a hospital inpatient when the expenses are incurred.',
        },
        {
          text: 'Copayments for Medicare psychiatric services for a person who is not a hospital inpatient when the expenses are incurred.',
          why: 'The act eliminates those psychiatric copayments. It did not eliminate the Part D late-enrollment penalty. That penalty remains 1% of the national base beneficiary premium for each uncovered month. The act changed the Part D low-income subsidy, also called Extra Help.',
          correct: true,
        },
      ],
    ),
  ],
  'c13-ltc': [
    question(
      'c13q165',
      'How are long-term care policies marketed?',
      [
        {
          text: 'As individual policies, group policies, or riders to life insurance.',
          why: 'Long-term care policies are marketed as individual policies, group policies, or riders to life insurance.',
          correct: true,
        },
        {
          text: 'Only as hospital acute-care policies.',
          why: 'The policy must cover a setting other than an acute care unit of a hospital. Marketing forms are individual policies, group policies, or riders to life insurance.',
        },
        {
          text: 'Only as partnership plans, whether or not they are qualified.',
          why: 'Only products that meet the qualified definition may be marketed as partnership long-term care plans. The policies themselves are marketed as individual policies, group policies, or life riders.',
        },
        {
          text: 'Only through the CLASS Act payroll deduction.',
          why: 'The CLASS Act is a separate voluntary program proposed by Congress, with services paid through a monthly payroll deduction. Long-term care policies are marketed as individual policies, group policies, or riders to life insurance.',
        },
      ],
    ),
    question(
      'c13q166',
      'Whom do long-term care policies cover?',
      [
        {
          text: 'People who need only acute care in a hospital unit.',
          why: 'Coverage must be in a setting other than an acute care unit of a hospital. The policies cover people who can no longer live independently and need help at home or in a nursing home.',
        },
        {
          text: 'People who can no longer live independently and need help at home or in a nursing home.',
          why: 'They cover people who can no longer live independently and need help at home or in a nursing home.',
          correct: true,
        },
        {
          text: 'Only working adults who opt out of coverage.',
          why: 'Working adults may opt out of the CLASS Act program. Long-term care policies cover people who can no longer live independently and need help at home or in a nursing home.',
        },
        {
          text: 'Only insureds who can perform every activity of daily living.',
          why: 'Benefits normally require that the insured be unable to perform some activities of daily living. The covered person is someone who can no longer live independently.',
        },
      ],
    ),
    question(
      'c13q167',
      'In which terms do long-term care policies differ?',
      [
        {
          text: 'They are identical in confinement, home health visits, and nursing home pay.',
          why: 'Policies differ in days of confinement, home health visits, the amount paid for nursing home care, and other terms.',
        },
        {
          text: 'Only in whether they are guaranteed renewable.',
          why: 'Most policies are guaranteed renewable, but they also differ in days of confinement, home health visits, the amount paid for nursing home care, and other terms.',
        },
        {
          text: 'Days of confinement, home health visits, the amount paid for nursing home care, and other terms.',
          why: 'Policies differ in days of confinement, home health visits, the amount paid for nursing home care, and other terms.',
          correct: true,
        },
        {
          text: 'Only in the CLASS Act opt-out age.',
          why: 'A CLASS Act participant must be 18 or older. Policy differences named here are days of confinement, home health visits, nursing home pay, and other terms.',
        },
      ],
    ),
    question(
      'c13q168',
      'What minimum time must a long-term care policy cover outside an acute care unit of a hospital?',
      [
        {
          text: 'A benefit period of 2 to 5 years in the acute care unit.',
          why: 'The benefit period is usually 2 to 5 years after the elimination period. The minimum is at least 12 consecutive months in a setting other than an acute care unit of a hospital.',
        },
        {
          text: 'Less than 24 hours in a recreation center.',
          why: 'Adult day care is for functionally impaired adults for less than 24 hours. The policy minimum is at least 12 consecutive months outside an acute care unit of a hospital.',
        },
        {
          text: 'An elimination period of 0 to 365 days and nothing further.',
          why: 'The elimination period may range from 0 to 365 days. The policy must still cover at least 12 consecutive months in a setting other than an acute care unit.',
        },
        {
          text: 'At least 12 consecutive months in a setting other than an acute care unit of a hospital.',
          why: 'They must cover at least 12 consecutive months in a setting other than an acute care unit of a hospital.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q169',
      'Which activities of daily living are named for the usual benefit requirement?',
      [
        {
          text: 'Bathing, dressing, toileting, transferring positions (also called mobility), continence, and eating.',
          why: 'Benefits normally require that the insured be unable to perform some of these activities of daily living: bathing, dressing, toileting, transferring positions (also called mobility), continence, and eating.',
          correct: true,
        },
        {
          text: 'Only hospital surgery and sterile dressing changes.',
          why: 'Changing a sterile dressing is an example of skilled care. The usual benefit requirement uses activities of daily living such as bathing, dressing, toileting, transferring, continence, and eating.',
        },
        {
          text: 'Driving, shopping, and managing the elimination period.',
          why: 'The elimination period is a waiting period the insured can usually choose. The named activities are bathing, dressing, toileting, transferring positions, continence, and eating.',
        },
        {
          text: 'Speech therapy, occupational therapy, and payroll deduction.',
          why: 'Therapies can be part of home health care, and payroll deduction is the CLASS Act payment method. The activities of daily living list is bathing, dressing, toileting, transferring, continence, and eating.',
        },
      ],
    ),
    question(
      'c13q170',
      'What range may the elimination, or waiting, period take, and what does a longer period do to the premium?',
      [
        {
          text: 'Usually 2 to 5 years, and a longer period raises the premium.',
          why: 'The benefit period after the elimination period is usually 2 to 5 years, and a longer benefit period means a higher premium. The elimination period may range from 0 to 365 days, and a longer waiting period means a lower premium.',
        },
        {
          text: 'From 0 to 365 days, and a longer waiting period means a lower premium.',
          why: 'The elimination period may range from 0 to 365 days. A longer waiting period means a lower premium, and the insured can usually choose the period. It works like the waiting period in disability income policies.',
          correct: true,
        },
        {
          text: 'At least 12 consecutive months, with no effect on premium.',
          why: 'At least 12 consecutive months is the minimum coverage outside an acute care unit. The elimination period ranges from 0 to 365 days, and a longer wait lowers the premium.',
        },
        {
          text: 'Less than 24 hours, and a longer wait raises the premium.',
          why: 'Less than 24 hours describes adult day care. A longer elimination period means a lower premium, and the range is 0 to 365 days.',
        },
      ],
    ),
    question(
      'c13q171',
      'After the elimination period, how long is the benefit period usually, and what does a longer benefit period do to the premium?',
      [
        {
          text: 'From 0 to 365 days, with a lower premium if the period is longer.',
          why: 'That range and premium result describe the elimination period. The benefit period is usually 2 to 5 years, and a longer benefit period means a higher premium.',
        },
        {
          text: 'At least 12 consecutive months, with the premium fixed.',
          why: 'Twelve consecutive months is the minimum stay outside an acute care unit. The benefit period is usually 2 to 5 years, and a longer one means a higher premium.',
        },
        {
          text: 'Usually 2 to 5 years, and a longer benefit period means a higher premium.',
          why: 'The benefit period, after the elimination period, is usually 2 to 5 years. A few policies offer lifetime coverage. A longer benefit period means a higher premium.',
          correct: true,
        },
        {
          text: 'At least 5 years of CLASS Act premiums, with lifetime coverage required on every policy.',
          why: 'At least 5 years of monthly premiums is a CLASS Act condition, and only a few long-term care policies offer lifetime coverage. The usual benefit period is 2 to 5 years.',
        },
      ],
    ),
    question(
      'c13q172',
      'When the policy pays $100 a day and the facility charges $90, what does the insurer pay under the usual fixed daily benefit?',
      [
        {
          text: 'The actual charge of $90 only.',
          why: 'Some policies pay the actual charge. Under the usual fixed daily benefit, if the policy pays $100 a day and the facility charges $90, the insurer pays the full $100.',
        },
        {
          text: 'Nothing, because the charge is below the daily benefit.',
          why: 'The benefit is usually a fixed dollar amount per day, regardless of the actual cost of care. The insurer pays the full $100 in this example.',
        },
        {
          text: 'The difference between $100 and $90.',
          why: 'The insurer does not pay only the gap. If the policy pays $100 a day and the facility charges $90, the insurer pays the full $100.',
        },
        {
          text: 'The full $100.',
          why: 'The benefit is usually a fixed dollar amount per day, regardless of the actual cost of care. If the policy pays $100 a day and the facility charges $90, the insurer pays the full $100.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q173',
      'What may the insurer do about premiums on most long-term care policies?',
      [
        {
          text: 'Increase the premiums even though most policies are guaranteed renewable.',
          why: 'Most policies are guaranteed renewable, but the insurer may increase the premiums. An individual policy must also show a renewability provision on the first page, and renewal may not be less favorable than guaranteed renewable or noncancellable.',
          correct: true,
        },
        {
          text: 'Cancel coverage solely because the insured’s age has increased.',
          why: 'The insurer may not cancel, nonrenew, or otherwise terminate coverage solely because of the insured’s age or deterioration in mental or physical health.',
        },
        {
          text: 'Omit any renewability provision from an individual policy.',
          why: 'An individual policy must show a renewability provision on the first page. Most policies are guaranteed renewable, but the insurer may increase the premiums.',
        },
        {
          text: 'Make renewal less favorable than guaranteed renewable or noncancellable.',
          why: 'Renewal may not be less favorable than guaranteed renewable or noncancellable. Premiums on most policies may still be increased.',
        },
      ],
    ),
    question(
      'c13q174',
      'For what reason alone is the insurer barred from cancelling, nonrenewing, or otherwise terminating coverage?',
      [
        {
          text: 'The insured’s choice of a longer elimination period.',
          why: 'The insured can usually choose the elimination period. Termination is barred when it is solely because of age or deterioration in mental or physical health.',
        },
        {
          text: 'The insured’s age or deterioration in mental or physical health.',
          why: 'The insurer may not cancel, nonrenew, or otherwise terminate coverage solely because of the insured’s age or deterioration in mental or physical health.',
          correct: true,
        },
        {
          text: 'A request to buy coverage that raises benefits as costs rise.',
          why: 'Every policy must offer that increase option. The termination bar is age or deterioration in mental or physical health.',
        },
        {
          text: 'Payment of a fixed $100 daily benefit.',
          why: 'A fixed $100 daily benefit is a payment example. Termination solely for age or deterioration in mental or physical health is what is barred.',
        },
      ],
    ),
    question(
      'c13q175',
      'What option about rising service costs must every long-term care policy offer?',
      [
        {
          text: 'A shorter benefit period in place of any benefit increase.',
          why: 'A longer benefit period means a higher premium, but the required offer is coverage that raises benefits for reasonably anticipated increases in the cost of the covered services.',
        },
        {
          text: 'Lifetime coverage on every policy at the original premium.',
          why: 'Only a few policies offer lifetime coverage, and a longer benefit period means a higher premium. The required offer is an option to raise benefits as covered-service costs rise.',
        },
        {
          text: 'The option to buy coverage that raises benefits for reasonably anticipated increases in the cost of the covered services.',
          why: 'Every policy must offer the option to buy coverage that raises benefits for reasonably anticipated increases in the cost of the covered services.',
          correct: true,
        },
        {
          text: 'A CLASS Act payroll deduction instead of a benefit increase.',
          why: 'CLASS Act services would be paid through a monthly payroll deduction. The policy option is coverage that raises benefits as the cost of covered services rises.',
        },
      ],
    ),
    question(
      'c13q176',
      'Which mental or nervous conditions are excepted from the exclusion for mental and nervous disorders?',
      [
        {
          text: 'Alcoholism and drug addiction.',
          why: 'Alcoholism and drug addiction may be excluded. The exception is organic cognitive disorders such as Alzheimer’s disease, senile dementia, and Parkinson’s disease.',
        },
        {
          text: 'Illness caused by war, criminal activity, or attempted suicide.',
          why: 'Those causes may be excluded. Organic cognitive disorders such as Alzheimer’s disease, senile dementia, and Parkinson’s disease are the mental-and-nervous exception.',
        },
        {
          text: 'Every mental and nervous disorder, with no organic-disease exception.',
          why: 'Policies may exclude mental and nervous disorders or disease except organic cognitive disorders such as Alzheimer’s disease, senile dementia, and Parkinson’s disease.',
        },
        {
          text: 'Organic cognitive disorders such as Alzheimer’s disease, senile dementia, and Parkinson’s disease.',
          why: 'Policies may exclude mental and nervous disorders or disease except organic cognitive disorders such as Alzheimer’s disease, senile dementia, and Parkinson’s disease.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q177',
      'Which of these may a long-term care policy exclude?',
      [
        {
          text: 'Alcoholism and drug addiction, and illness caused by war, criminal activity, or attempted suicide.',
          why: 'Policies may exclude alcoholism and drug addiction, and illness caused by war, criminal activity, or attempted suicide. They may also exclude pre-existing conditions or diseases.',
          correct: true,
        },
        {
          text: 'Organic cognitive disorders such as Alzheimer’s disease.',
          why: 'Alzheimer’s disease is named among organic cognitive disorders that are excepted from the mental and nervous exclusion.',
        },
        {
          text: 'Help with bathing when the care is custodial.',
          why: 'Custodial care meets personal needs such as eating, dressing, or bathing. Alcoholism, drug addiction, war, criminal activity, and attempted suicide are among the permitted exclusions.',
        },
        {
          text: 'Qualified long-term care services that are the contract’s only protection.',
          why: 'A qualified contract’s only protection is coverage of qualified long-term care services. The exclusion list includes alcoholism, drug addiction, war, criminal activity, and attempted suicide.',
        },
      ],
    ),
    question(
      'c13q178',
      'Which outside payments may a long-term care policy exclude?',
      [
        {
          text: 'Benefits the policy itself pays as a fixed amount per day.',
          why: 'A fixed dollar amount per day is the usual policy benefit. The exclusion is treatment payable by the government, Medicare, workers compensation, or similar coverage.',
        },
        {
          text: 'Treatment payable by the government, Medicare, workers compensation, or similar coverage.',
          why: 'Policies may exclude treatment payable by the government, Medicare, workers compensation, or similar coverage.',
          correct: true,
        },
        {
          text: 'Home health visits by a registered nurse that no other program pays.',
          why: 'Home health care includes visits by registered nurses. The permitted payment exclusion is treatment payable by the government, Medicare, workers compensation, or similar coverage.',
        },
        {
          text: 'Custodial help with activities of daily living that no government program covers.',
          why: 'Custodial care is help with activities of daily living. The exclusion here is treatment payable by the government, Medicare, workers compensation, or similar coverage.',
        },
      ],
    ),
    question(
      'c13q179',
      'What is skilled care?',
      [
        {
          text: 'Help with eating, dressing, or bathing given by relatives.',
          why: 'That is custodial care, which nonmedical personnel can provide. Skilled care is daily nursing and rehabilitative care that only medical personnel can provide, under a physician’s direction.',
        },
        {
          text: 'Occasional care for stable conditions, given less often than daily skilled care.',
          why: 'That describes intermediate care. Skilled care is daily nursing and rehabilitative care that only medical personnel can provide, under a physician’s direction.',
        },
        {
          text: 'Daily nursing and rehabilitative care that only medical personnel can provide, under a physician’s direction.',
          why: 'Skilled care is daily nursing and rehabilitative care that only medical personnel can provide, under a physician’s direction. It is almost always given in an institution. Long-term care generally covers three levels.',
          correct: true,
        },
        {
          text: 'Care for functionally impaired adults for less than 24 hours at a community center.',
          why: 'That is adult day care. Skilled care is daily nursing and rehabilitative care that only medical personnel can provide, under a physician’s direction.',
        },
      ],
    ),
    question(
      'c13q180',
      'Which examples count as skilled care, and what does not?',
      [
        {
          text: 'Giving medication at home, which is always skilled care.',
          why: 'Giving medication or changing a bandage can qualify as intermediate care. Skilled examples are changing a sterile dressing and physical therapy in a skilled nursing facility.',
        },
        {
          text: 'Care that nonprofessional staff can give.',
          why: 'Care that nonprofessional staff can give is not skilled care. Changing a sterile dressing and physical therapy in a skilled nursing facility are skilled examples.',
        },
        {
          text: 'Someone staying in the home so a family caregiver can rest.',
          why: 'That is respite care. Skilled examples are changing a sterile dressing and physical therapy in a skilled nursing facility, and nonprofessional care is not skilled care.',
        },
        {
          text: 'Changing a sterile dressing and physical therapy in a skilled nursing facility, while care nonprofessional staff can give is not skilled care.',
          why: 'Changing a sterile dressing and physical therapy in a skilled nursing facility are examples of skilled care. Care that nonprofessional staff can give is not skilled care.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q181',
      'What is intermediate care?',
      [
        {
          text: 'Occasional nursing or rehabilitative care for stable conditions that need daily medical assistance less often than skilled care.',
          why: 'Intermediate care is occasional nursing or rehabilitative care for stable conditions that need daily medical assistance less often than skilled care. A physician orders it, and skilled personnel deliver or monitor it.',
          correct: true,
        },
        {
          text: 'Daily care that only medical personnel can provide under a physician’s direction.',
          why: 'That is skilled care, almost always given in an institution. Intermediate care is occasional and is needed less often than skilled care.',
        },
        {
          text: 'Personal help such as eating or bathing from nonmedical personnel.',
          why: 'That is custodial care. Intermediate care is occasional nursing or rehabilitative care for stable conditions.',
        },
        {
          text: 'Professional service in the home limited to speech therapy.',
          why: 'Home health care can include speech therapy along with other professional services. Intermediate care is occasional nursing or rehabilitative care for stable conditions.',
        },
      ],
    ),
    question(
      'c13q182',
      'Where may intermediate care be given, and which tasks can qualify?',
      [
        {
          text: 'Only in an acute care unit of a hospital, and only sterile dressing changes.',
          why: 'A sterile dressing change is a skilled-care example, and the policy setting is other than an acute care unit. Intermediate care may be given in a nursing home, an intermediate-care unit, or the patient’s home, and giving medication or changing a bandage can qualify.',
        },
        {
          text: 'In a nursing home, an intermediate-care unit, or the patient’s home, and giving medication or changing a bandage can qualify.',
          why: 'Intermediate care may be given in a nursing home, an intermediate-care unit, or the patient’s home. Giving medication or changing a bandage can qualify.',
          correct: true,
        },
        {
          text: 'Only at a recreation center for less than 24 hours.',
          why: 'A recreation center may provide adult day care for less than 24 hours. Intermediate care locations include a nursing home, an intermediate-care unit, or the patient’s home.',
        },
        {
          text: 'Only where nonprofessional relatives provide bathing.',
          why: 'Relatives can provide custodial care such as bathing. Intermediate care is ordered by a physician and delivered or monitored by skilled personnel.',
        },
      ],
    ),
    question(
      'c13q183',
      'What does custodial care provide, and who can give it?',
      [
        {
          text: 'Daily nursing under a physician’s direction, given only by medical personnel.',
          why: 'That is skilled care. Custodial care meets personal needs such as eating, dressing, or bathing and can be given by nonmedical personnel.',
        },
        {
          text: 'Occasional skilled monitoring of stable medical conditions.',
          why: 'Skilled personnel deliver or monitor intermediate care. Custodial care is help with activities of daily living from nonmedical personnel, including relatives or home health workers.',
        },
        {
          text: 'Help with personal needs such as eating, dressing, or bathing, from nonmedical personnel, in an institution or at home.',
          why: 'Custodial care meets personal needs such as eating, dressing, or bathing. Nonmedical personnel, including relatives or home health workers, can provide it, in an institution or at home. It is help with activities of daily living, not hospital or surgical care.',
          correct: true,
        },
        {
          text: 'Physical therapy in a skilled nursing facility only.',
          why: 'Physical therapy in a skilled nursing facility is a skilled-care example. Custodial care is nonmedical help with personal needs, in an institution or at home.',
        },
      ],
    ),
    question(
      'c13q184',
      'What can home health care include?',
      [
        {
          text: 'Only custodial bathing by relatives, with no professional visits.',
          why: 'Relatives can give custodial care. Home health care is skilled nursing or other professional service in the home, including nursing visits, hospice, therapies, and medical services by a social worker.',
        },
        {
          text: 'Adult day care at a community center for a full day and night.',
          why: 'Adult day care is for less than 24 hours. Home health care is professional service in the home, including registered nurses, licensed practical nurses, licensed vocational nurses, hospice, therapies, and a social worker.',
        },
        {
          text: 'Hospital surgical care in an acute care unit.',
          why: 'Custodial care is distinguished from hospital or surgical care, and the policy setting is other than an acute care unit. Home health care is service in the home.',
        },
        {
          text: 'Skilled nursing or other professional service in the home, including nursing visits, hospice, physical, occupational, and speech therapy, and medical services by a social worker.',
          why: 'Home health care includes visits by registered nurses, licensed practical nurses, licensed vocational nurses, or community organizations such as hospice, and it can include those therapies and social-worker services. Long-term care may also cover home health care, adult day care, hospice, or respite care.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q185',
      'What is adult day care?',
      [
        {
          text: 'Care for functionally impaired adults for less than 24 hours, which a recreation or community center may provide.',
          why: 'Adult day care is for functionally impaired adults for less than 24 hours. A recreation center or community center may provide it, including transportation, health and social activities, and usually meals.',
          correct: true,
        },
        {
          text: 'Daily institutional nursing that only medical personnel can provide.',
          why: 'That is skilled care, almost always given in an institution. Adult day care is for functionally impaired adults for less than 24 hours.',
        },
        {
          text: 'A monthly payroll deduction for people 18 or older.',
          why: 'That describes CLASS Act funding and eligibility. Adult day care is care for functionally impaired adults for less than 24 hours.',
        },
        {
          text: 'Coverage of at least 12 consecutive months in a nursing home.',
          why: 'At least 12 consecutive months is the minimum policy period outside an acute care unit. Adult day care lasts less than 24 hours.',
        },
      ],
    ),
    question(
      'c13q186',
      'What is respite care for?',
      [
        {
          text: 'Replacing skilled nursing in a facility with physical therapy only.',
          why: 'Physical therapy in a skilled nursing facility is a skilled-care example. Respite care relieves the family caregiver.',
        },
        {
          text: 'Relieving the family caregiver, such as someone staying in the home while the caregiver rests or goes out.',
          why: 'Respite care relieves the family caregiver, for example someone staying in the home while the caregiver rests or goes out. Adult day care centers also provide this relief.',
          correct: true,
        },
        {
          text: 'Paying expenses that Title XVIII of the Social Security Act already reimburses.',
          why: 'A qualified long-term care contract does not pay expenses reimbursable under Title XVIII. Respite care relieves the family caregiver.',
        },
        {
          text: 'Letting working adults opt out of a voluntary payroll program.',
          why: 'Working adults may opt out of the CLASS Act. Respite care is relief for the family caregiver.',
        },
      ],
    ),
    question(
      'c13q187',
      'Who can take part in the CLASS Act program, and how would services be paid?',
      [
        {
          text: 'Any child, with a single premium and no payroll deduction.',
          why: 'A person must be 18 or older and must have paid monthly premiums for at least 5 years. Services would be paid through a monthly payroll deduction.',
        },
        {
          text: 'Only people in nursing homes, paid by a fixed $100 daily benefit.',
          why: 'The $100 figure is a long-term care daily-benefit example. The CLASS Act is for people and families with limited resources who need nonmedical services, paid through a monthly payroll deduction.',
        },
        {
          text: 'A person 18 or older who has paid monthly premiums for at least 5 years, with services paid through a monthly payroll deduction.',
          why: 'The CLASS Act is a voluntary insurance program proposed by Congress for people and families with limited resources who need nonmedical services in communities across the United States. Working adults may opt out.',
          correct: true,
        },
        {
          text: 'Only products marketed as partnership plans, with dividends required as cash.',
          why: 'Only products that meet the qualified definition may be marketed as partnership plans, and qualified refunds and dividends are not described as cash to the owner. CLASS Act participation requires age 18 or older and at least 5 years of monthly premiums.',
        },
      ],
    ),
    question(
      'c13q188',
      'Which products may be marketed as partnership long-term care plans?',
      [
        {
          text: 'Any individual policy, group policy, or life insurance rider.',
          why: 'Those are the ways long-term care policies are marketed. Only products that meet the qualified definition may be marketed as partnership long-term care plans.',
        },
        {
          text: 'The CLASS Act program, even if monthly premiums were not paid.',
          why: 'CLASS Act participation requires monthly premiums for at least 5 years. Partnership marketing is limited to products that meet the qualified definition.',
        },
        {
          text: 'Policies that pay expenses reimbursable under Title XVIII of the Social Security Act.',
          why: 'A qualified contract does not pay expenses reimbursable under Title XVIII of the Social Security Act. Only products that meet the qualified definition may be marketed as partnership plans.',
        },
        {
          text: 'Only products that meet the qualified long-term care definition.',
          why: 'Only products that meet the qualified definition may be marketed as partnership long-term care plans. A qualified contract’s only protection is coverage of qualified long-term care services, it does not pay Title XVIII expenses, it is guaranteed renewable, it uses premium refunds and dividends to reduce future premiums or increase future benefits to offset inflation, and it meets the consumer-protection provisions on model regulation and model act provisions, disclosure, and nonforfeitability.',
          correct: true,
        },
      ],
    ),
  ],
  'c13-ltcrules': [
    question(
      'c13q189',
      'What must every company’s long-term care marketing procedures and guidelines accomplish?',
      [
        {
          text: 'Fair and accurate policy comparisons, and a stop to selling excessive insurance.',
          why: 'Every company must have marketing procedures so policy comparisons are fair and accurate, and guidelines so excessive insurance is not sold.',
          correct: true,
        },
        {
          text: 'Permission to use twisting if the comparison is incomplete.',
          why: 'Twisting is a prohibited act. It includes a misleading representation or an incomplete or fraudulent comparison. Procedures must make comparisons fair and accurate.',
        },
        {
          text: 'Cold-lead advertising that hides the solicitation purpose.',
          why: 'Cold-lead advertising is prohibited. It fails to disclose conspicuously that the purpose is solicitation and that contact will be made.',
        },
        {
          text: 'High-pressure tactics so excessive insurance can be sold.',
          why: 'High-pressure tactics are prohibited, and guidelines must keep excessive insurance from being sold. Comparisons must be fair and accurate.',
        },
      ],
    ),
    question(
      'c13q190',
      'Which acts are prohibited in long-term care marketing?',
      [
        {
          text: 'Giving the Commissioner a copy of an advertisement on request.',
          why: 'The insurer must give the Commissioner, on request, a copy of any long-term care advertisement intended for use in Utah. Prohibited acts are twisting, high-pressure tactics, cold-lead advertising, and misrepresentation.',
        },
        {
          text: 'Twisting, high-pressure tactics, cold-lead advertising, and misrepresentation.',
          why: 'Prohibited acts are twisting, high-pressure tactics, cold-lead advertising, and misrepresentation.',
          correct: true,
        },
        {
          text: 'Training agents to use suitability standards.',
          why: 'Insurers must use suitability standards and train agents to use them. That training is not a prohibited act.',
        },
        {
          text: 'Delivering a Shopper’s Guide in the NAIC format.',
          why: 'A Shopper’s Guide in the NAIC format must be given in the situations the rule names. The prohibited acts are twisting, high-pressure tactics, cold-lead advertising, and misrepresentation.',
        },
      ],
    ),
    question(
      'c13q191',
      'What is twisting?',
      [
        {
          text: 'Using force, fright, threat, or undue pressure.',
          why: 'Those methods are high-pressure tactics. Twisting is knowingly making a misleading representation or an incomplete or fraudulent comparison to induce a person to lapse, forfeit, surrender, terminate, retain, pledge, assign, borrow on, or convert a policy, or to take a policy with another insurer.',
        },
        {
          text: 'Failing to disclose that an advertisement is a solicitation.',
          why: 'That failure is cold-lead advertising. Twisting is a knowing misleading representation or an incomplete or fraudulent comparison used to induce the listed policy actions or a move to another insurer.',
        },
        {
          text: 'Knowingly making a misleading representation or an incomplete or fraudulent comparison to induce a lapse, forfeiture, surrender, termination, retention, pledge, assignment, loan, or conversion, or a policy with another insurer.',
          why: 'Twisting is knowingly making a misleading representation or an incomplete or fraudulent comparison to induce a person to lapse, forfeit, surrender, terminate, retain, pledge, assign, borrow on, or convert a policy, or to take a policy with another insurer.',
          correct: true,
        },
        {
          text: 'Filing a fair and accurate comparison with the Commissioner.',
          why: 'Marketing procedures must make policy comparisons fair and accurate. Twisting is a knowing misleading or incomplete or fraudulent comparison used to induce those policy actions.',
        },
      ],
    ),
    question(
      'c13q192',
      'What do high-pressure tactics use?',
      [
        {
          text: 'An incomplete comparison that induces a person to convert a policy.',
          why: 'That comparison can be twisting. High-pressure tactics use force, fright, threat, or undue pressure.',
        },
        {
          text: 'A hidden statement that an agent will make contact.',
          why: 'Hiding the solicitation purpose and the coming contact is cold-lead advertising. High-pressure tactics use force, fright, threat, or undue pressure.',
        },
        {
          text: 'A suitability worksheet filed with the Commissioner.',
          why: 'The Long-Term Care Insurance Personal Worksheet is given to the applicant, and a copy is filed with the Commissioner. High-pressure tactics use force, fright, threat, or undue pressure.',
        },
        {
          text: 'Force, fright, threat, or undue pressure.',
          why: 'High-pressure tactics use force, fright, threat, or undue pressure.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q193',
      'What does cold-lead advertising fail to disclose conspicuously?',
      [
        {
          text: 'That the purpose is solicitation and that an agent or company will make contact.',
          why: 'Cold-lead advertising fails to disclose conspicuously that the purpose is solicitation and that an agent or company will make contact.',
          correct: true,
        },
        {
          text: 'The premium-increase history for the past 10 years.',
          why: 'That history is part of rate-increase disclosure when the premium can increase. Cold-lead advertising fails to disclose the solicitation purpose and that contact will be made.',
        },
        {
          text: 'That renewal may be less favorable than guaranteed renewable.',
          why: 'The renewability provision may not be less favorable than guaranteed renewable or noncancellable. Cold-lead advertising is about hiding solicitation and the coming contact.',
        },
        {
          text: 'A pre-existing condition limitation labeled in its own paragraph.',
          why: 'Any pre-existing limitation must be a separate paragraph labeled Pre-existing Condition Limitations. Cold-lead advertising fails to disclose solicitation and contact conspicuously.',
        },
      ],
    ),
    question(
      'c13q194',
      'What advertisement duty does the insurer have toward the Commissioner, and how long are advertisements kept?',
      [
        {
          text: 'Every ad must be pre-approved, and copies may be discarded the day they are first used.',
          why: 'The insurer must give the Commissioner, on request, a copy of any long-term care advertisement intended for use in Utah. Advertisements must be kept at least 3 years from the date first used.',
        },
        {
          text: 'On request, a copy of any Utah long-term care advertisement, whether written, radio, or television, and the ads must be kept at least 3 years from first use.',
          why: 'The insurer must give the Commissioner, on request, a copy of any long-term care advertisement intended for use in Utah, whether written, radio, or television. Advertisements must be kept at least 3 years from the date first used.',
          correct: true,
        },
        {
          text: 'Ads are given to the applicant instead of the Commissioner and kept for 30 days.',
          why: 'Thirty days is the return period and the written notice before a lapse for nonpayment. Advertisement copies go to the Commissioner on request and are kept at least 3 years.',
        },
        {
          text: 'Only television ads are covered, and they are kept for 20 years.',
          why: 'The rule covers written, radio, or television advertisements. A 20-year graphic is an inflation-protection outline requirement. Ads are kept at least 3 years.',
        },
      ],
    ),
    question(
      'c13q195',
      'When must a Shopper’s Guide in the NAIC format be given?',
      [
        {
          text: 'After the policy has been in force for 2 years.',
          why: 'At least once every 2 years the insurer must tell the insured of the right to change the secondary addressee. The Shopper’s Guide is given before a producer finishes the application, or with the application in a direct-response solicitation.',
        },
        {
          text: 'At least 45 days before a premium increase.',
          why: 'The insurer must notify the policyowner at least 45 days before a premium increase. The Shopper’s Guide timing is tied to the application.',
        },
        {
          text: 'Before the application is completed when a producer solicits, or together with the application for a direct-response solicitation.',
          why: 'A Shopper’s Guide in the NAIC format must be given before the application is completed when a producer solicits, or together with the application for a direct-response solicitation.',
          correct: true,
        },
        {
          text: 'Within 60 days after the insured leaves a pension payment plan.',
          why: 'Secondary-addressee requirements wait until 60 days after the insured leaves payroll or pension payment. The Shopper’s Guide is an application disclosure.',
        },
      ],
    ),
    question(
      'c13q196',
      'What format, type size, and timing rules apply to the outline of coverage?',
      [
        {
          text: 'It may be printed inside an advertisement in any type size and delivered after enrollment.',
          why: 'The outline cannot contain advertising. It is a separate document, in type no smaller than 10 point, delivered before the application or enrollment form.',
        },
        {
          text: 'It may omit the company and the policy number if the Shopper’s Guide was given.',
          why: 'The outline follows the standard format, including the company, the policy number, and important features. The Shopper’s Guide does not replace those items.',
        },
        {
          text: 'It is kept at least 3 years and filed as the personal worksheet.',
          why: 'Advertisements are kept at least 3 years, and the personal worksheet is a different document. The outline is a separate document in type no smaller than 10 point.',
        },
        {
          text: 'A separate standard-format document, including the company, policy number, and important features, in type no smaller than 10 point, delivered before the application or enrollment form, with no advertising.',
          why: 'The outline of coverage follows the standard format, including the company, the policy number, and important features. It is a separate document, in type no smaller than 10 point, delivered before the application or enrollment form, and it cannot contain advertising.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q197',
      'What must insurers do with suitability standards?',
      [
        {
          text: 'Use them and train agents to use them.',
          why: 'Insurers must use suitability standards and train agents to use them.',
          correct: true,
        },
        {
          text: 'Replace them with high-pressure tactics.',
          why: 'High-pressure tactics are prohibited. Insurers must use suitability standards and train agents to use them.',
        },
        {
          text: 'Apply them only after a policy lapses for nonpayment.',
          why: 'A lapse for nonpayment requires 30 days’ written notice. Suitability standards must be used, and agents must be trained to use them.',
        },
        {
          text: 'Ignore them when the outline of coverage is delivered.',
          why: 'The outline is a required separate document. Suitability standards must still be used, and agents must be trained to use them.',
        },
      ],
    ),
    question(
      'c13q198',
      'What does the Long-Term Care Insurance Personal Worksheet include, and where does a copy go?',
      [
        {
          text: 'Only a graphic of benefits for at least 20 years, kept by the agent.',
          why: 'That graphic belongs in the outline for inflation protection. The worksheet includes premium information, policy type, rate-increase history, and questions on income, savings, and investments, and a copy is filed with the Commissioner.',
        },
        {
          text: 'Premium information, policy type, rate-increase history, and questions on income, savings, and investments, with a copy filed with the Commissioner.',
          why: 'The applicant is given the Long-Term Care Insurance Personal Worksheet with those items. A copy is filed with the Commissioner.',
          correct: true,
        },
        {
          text: 'A designation of a secondary addressee and nothing about income.',
          why: 'The secondary-addressee designation is a separate issuance requirement. The worksheet includes premium information, policy type, rate-increase history, and questions on income, savings, and investments.',
        },
        {
          text: 'The NAIC Shopper’s Guide and no rate-increase history.',
          why: 'The Shopper’s Guide is its own required document. The worksheet includes rate-increase history along with premium information, policy type, and questions on income, savings, and investments.',
        },
      ],
    ),
    question(
      'c13q199',
      'Who may return a long-term care policy within 30 days of delivery for a premium refund?',
      [
        {
          text: 'Only group certificate holders who pay nothing toward the cost.',
          why: 'Group certificate holders are included when they contribute to the cost. Individual policyholders may also return the policy within 30 days of delivery if they are not satisfied for any reason.',
        },
        {
          text: 'Any applicant before the application is completed.',
          why: 'The Shopper’s Guide timing is before the application is completed. The 30-day return belongs to individual policyholders and group certificate holders who contribute to the cost.',
        },
        {
          text: 'Individual policyholders, and group certificate holders who contribute to the cost, if they are not satisfied for any reason.',
          why: 'Those holders may return the policy within 30 days of delivery for a premium refund if they are not satisfied for any reason.',
          correct: true,
        },
        {
          text: 'Only the secondary addressee, and only after 60 days.',
          why: 'Sixty days is the wait after the insured leaves payroll or pension payment before secondary-addressee requirements apply. The 30-day return is for individual policyholders and contributing group certificate holders.',
        },
      ],
    ),
    question(
      'c13q200',
      'What renewability provision is required, and when may coverage not be ended?',
      [
        {
          text: 'Renewal may be cancelled for a decline in mental health if the first page is silent.',
          why: 'The renewability provision must be on the first page. Coverage may not be ended solely for age or a decline in mental or physical health, and renewal may not be less favorable than guaranteed renewable or noncancellable.',
        },
        {
          text: 'The provision may be less favorable than noncancellable if premiums are refunded within 30 days.',
          why: 'The 30-day return is a separate satisfaction right. Renewability may not be less favorable than guaranteed renewable or noncancellable.',
        },
        {
          text: 'Coverage may be ended solely for age if the policy is guaranteed renewable.',
          why: 'Coverage may not be ended solely for age or a decline in mental or physical health. The renewability provision must be on the first page and may not be less favorable than guaranteed renewable or noncancellable.',
        },
        {
          text: 'It must be on the first page and no less favorable than guaranteed renewable or noncancellable, and coverage may not be ended solely for age or a decline in mental or physical health.',
          why: 'The renewability provision must be on the first page and may not be less favorable than guaranteed renewable or noncancellable. Coverage may not be ended solely for age or a decline in mental or physical health.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q201',
      'What must group long-term care issued in this state give?',
      [
        {
          text: 'A basis for continuation or conversion.',
          why: 'Group long-term care issued in this state must give a basis for continuation or conversion.',
          correct: true,
        },
        {
          text: 'A new waiting period on every conversion in the same company.',
          why: 'A policy may not start a new waiting period when existing coverage is converted or replaced by another form in the same company, except for a voluntary benefit increase. Group coverage must give a basis for continuation or conversion.',
        },
        {
          text: 'Skilled nursing care only, with no lower level of care.',
          why: 'A policy may not cover skilled nursing care only. Group long-term care issued in this state must give a basis for continuation or conversion.',
        },
        {
          text: 'Inflation protection only after the group policy terminates.',
          why: 'Inflation protection must be offered at purchase. Group long-term care must give a basis for continuation or conversion.',
        },
      ],
    ),
    question(
      'c13q202',
      'When is the insurer excused from providing continuation or a converted policy after group coverage ends for nonpayment?',
      [
        {
          text: 'Whenever the group policy ends, even if nothing replaces it.',
          why: 'The insurer must provide continuation or a converted policy unless the stated replacement conditions are met. Nonpayment alone is not enough.',
        },
        {
          text: 'When replacement group coverage arrives no later than 31 days after termination, is effective the day after termination, provides identical or greater benefits, and calculates the premium consistently.',
          why: 'The insurer must provide continuation or the converted policy unless termination was for failure to pay a required premium and the coverage is replaced no later than 31 days after termination by group coverage that meets those effective-date, benefit, and premium conditions.',
          correct: true,
        },
        {
          text: 'When the replacement starts 45 days later with smaller benefits.',
          why: 'Forty-five days is the notice period before a premium increase. The replacement must be no later than 31 days after termination, effective the day after termination, with identical or greater benefits.',
        },
        {
          text: 'When the insured returns an individual policy within 30 days of delivery.',
          why: 'That 30-day return is for individual policyholders and contributing certificate holders. The group exception uses a replacement no later than 31 days after termination with identical or greater benefits.',
        },
      ],
    ),
    question(
      'c13q203',
      'When must inflation protection be offered?',
      [
        {
          text: 'Only after the insured declines it for a previous period.',
          why: 'One permitted form is a periodic increase without evidence of insurability if the insured did not decline the option for the previous period. The offer itself must be made at purchase.',
        },
        {
          text: 'At least 20 years after issue.',
          why: 'The outline must include a graphic comparing benefits for at least 20 years. Inflation protection must be offered at purchase.',
        },
        {
          text: 'At purchase.',
          why: 'Inflation protection must be offered at purchase. The terms may not be less favorable than the compounding, periodic-increase, or actual-charge options the rule describes.',
          correct: true,
        },
        {
          text: 'Only when a premium increase has already been in effect for 10 years.',
          why: 'The past 10 years of premium-increase history is a rate disclosure. Inflation protection must be offered at purchase.',
        },
      ],
    ),
    question(
      'c13q204',
      'Which terms are not less favorable than the required inflation-protection standard?',
      [
        {
          text: 'A one-time benefit increase that always requires evidence of insurability.',
          why: 'A permitted periodic increase is without evidence of insurability or health status if the insured did not decline the option for the previous period. Annual compounding of at least 5% and a percentage of actual charges with no maximum indemnity are the other stated forms.',
        },
        {
          text: 'Level benefits with a maximum indemnity and no increase option.',
          why: 'The outline graphic compares increasing and level benefits, but level benefits alone are not the protection standard. One allowed form covers a specified percentage of actual charges that is not subject to a maximum indemnity.',
        },
        {
          text: 'Benefit increases that compound only if the insured shows a decline in health.',
          why: 'Coverage may not be ended for a decline in mental or physical health. Inflation terms include compounding annually at a rate of at least 5%, not a health decline.',
        },
        {
          text: 'Annual compounding of at least 5%, a periodic increase without evidence of insurability if the prior option was not declined, or a specified percentage of actual charges with no maximum indemnity.',
          why: 'The terms may not be less favorable than benefit increases compounding annually at a rate of at least 5%, that periodic increase, or coverage of a specified percentage of actual charges that is not subject to a maximum indemnity.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q205',
      'What inflation comparison must the outline include?',
      [
        {
          text: 'A graphic comparing increasing and level benefits for at least 20 years, and any expected premium increase for automatic or optional benefit increases.',
          why: 'The outline must include a graphic comparing increasing and level benefits for at least 20 years, and any expected premium increase for automatic or optional benefit increases.',
          correct: true,
        },
        {
          text: 'A graphic for at least 3 years of advertisements.',
          why: 'Advertisements must be kept at least 3 years from the date first used. The inflation graphic compares increasing and level benefits for at least 20 years.',
        },
        {
          text: 'Only the premium-increase history for the past 10 years, with no benefit graphic.',
          why: 'The past 10 years of history is given when the premium can increase. The outline graphic compares increasing and level benefits for at least 20 years.',
        },
        {
          text: 'A comparison that stops at 2 years and hides expected premium increases.',
          why: 'Every 2 years is how often the insurer must mention the right to change the secondary addressee. The graphic covers at least 20 years and includes any expected premium increase for benefit increases.',
        },
      ],
    ),
    question(
      'c13q206',
      'How does this section define a pre-existing condition?',
      [
        {
          text: 'Any condition treated more than 6 months after the effective date.',
          why: 'The definition looks backward: medical advice or treatment recommended by, or received from, a health care provider within 6 months before the effective date.',
        },
        {
          text: 'A condition for which a health care provider recommended or gave medical advice or treatment within 6 months before the effective date.',
          why: 'A pre-existing condition is one for which medical advice or treatment was recommended by, or received from, a health care provider within 6 months before the effective date.',
          correct: true,
        },
        {
          text: 'Only a condition listed on the secondary-addressee waiver.',
          why: 'The secondary-addressee rule is a written designation or a signed and dated waiver for lapse notices. The pre-existing definition uses advice or treatment within 6 months before the effective date.',
        },
        {
          text: 'A condition that first appears during the 30-day return period.',
          why: 'Thirty days of delivery is the return period for a premium refund. A pre-existing condition is tied to advice or treatment within 6 months before the effective date.',
        },
      ],
    ),
    question(
      'c13q207',
      'What may the insurer still request, and how must a pre-existing limitation be shown?',
      [
        {
          text: 'No health history, and the limitation may be left unlabeled.',
          why: 'The definition does not stop the insurer from asking for a complete health history. Any pre-existing limitation must be a separate paragraph labeled Pre-existing Condition Limitations.',
        },
        {
          text: 'Only the Shopper’s Guide, which replaces the limitation paragraph.',
          why: 'The Shopper’s Guide is an application document in the NAIC format. The insurer may still ask for a complete health history, and the limitation needs its labeled paragraph.',
        },
        {
          text: 'A complete health history, with the limitation in a separate paragraph labeled Pre-existing Condition Limitations.',
          why: 'That definition does not stop the insurer from asking for a complete health history. Any pre-existing limitation must be a separate paragraph labeled Pre-existing Condition Limitations.',
          correct: true,
        },
        {
          text: 'Evidence of insurability before every inflation increase that was not declined.',
          why: 'A periodic inflation increase can be offered without evidence of insurability or health status if the insured did not decline the option for the previous period. Health history and the labeled pre-existing paragraph are separate rules.',
        },
      ],
    ),
    question(
      'c13q208',
      'Which policy terms must be disclosed?',
      [
        {
          text: 'Only the secondary addressee’s street address.',
          why: 'The secondary-addressee provision is a designation for lapse notices. Policies must disclose renewability, riders and endorsements, the meaning of usual and customary or reasonable and customary if used, and other limits on eligibility.',
        },
        {
          text: 'Twisting examples, but not renewability.',
          why: 'Twisting is prohibited. Policies must disclose renewability. Riders, endorsements, customary-charge meanings, and other eligibility limits must also be disclosed.',
        },
        {
          text: 'The 31-day group replacement rule in place of rider disclosure.',
          why: 'The 31-day rule is about replacement group coverage after termination. Riders and endorsements must be disclosed, along with renewability and other stated items.',
        },
        {
          text: 'Renewability, riders and endorsements, the meaning of usual and customary or reasonable and customary if those words are used, and other limits on eligibility.',
          why: 'Policies must disclose renewability. Riders and endorsements must be disclosed. If the policy uses usual and customary or reasonable and customary, the meaning must be disclosed, and other limits on eligibility must be disclosed.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q209',
      'What must a life policy that accelerates benefits for long-term care say, and where?',
      [
        {
          text: 'That the accelerated benefits may be taxable and that the insured should ask a personal tax advisor, prominently on the first page of the policy or rider and on related documents.',
          why: 'A life policy that accelerates benefits for long-term care must say that the accelerated benefits may be taxable and that the insured should ask a personal tax advisor. That statement must be prominent on the first page of the policy or rider and on related documents.',
          correct: true,
        },
        {
          text: 'That accelerated benefits are never taxable, printed only on the worksheet.',
          why: 'The required statement is that the accelerated benefits may be taxable and that the insured should ask a personal tax advisor. It must be prominent on the first page of the policy or rider and on related documents.',
        },
        {
          text: 'That the Commissioner will calculate the tax, in type smaller than 10 point.',
          why: 'Type no smaller than 10 point is an outline-of-coverage rule. The tax statement tells the insured to ask a personal tax advisor and must be prominent on the first page.',
        },
        {
          text: 'That inflation increases of at least 5% are tax-free.',
          why: 'At least 5% is one inflation-protection compounding rate. The accelerated-benefit statement is about possible taxation and asking a personal tax advisor.',
        },
      ],
    ),
    question(
      'c13q210',
      'What must the insurer have before an individual long-term care policy can be issued?',
      [
        {
          text: 'Only the applicant’s promise to watch for a lapse without naming anyone else.',
          why: 'The insurer needs a written designation of at least one person, besides the applicant, to receive notice of lapse or termination for nonpayment, or a signed and dated waiver of that designation.',
        },
        {
          text: 'A written designation of at least one person besides the applicant to get nonpayment lapse notices, or a signed and dated waiver of that designation.',
          why: 'An individual policy cannot be issued until the insurer has that designation or waiver. This is the secondary-addressee provision.',
          correct: true,
        },
        {
          text: 'A 20-year benefit graphic signed by a tax advisor.',
          why: 'The 20-year graphic is an outline requirement, and the tax advisor statement belongs on an accelerating life policy. Issuance requires the secondary-addressee designation or a signed and dated waiver.',
        },
        {
          text: 'Proof that premiums were paid through a pension plan for 60 days.',
          why: 'If premiums are paid through a payroll or pension plan, the secondary-addressee requirements wait until 60 days after the insured leaves that method. Issuance still needs the designation or waiver when the rule applies.',
        },
      ],
    ),
    question(
      'c13q211',
      'How often must the insurer tell the insured of the right to change the secondary addressee?',
      [
        {
          text: 'At least once every 6 months.',
          why: 'Six months is the pre-existing lookback. The insurer must tell the insured of the right to change that person at least once every 2 years.',
        },
        {
          text: 'Only within 30 days of delivery.',
          why: 'Thirty days of delivery is the premium-refund return period. The right to change the secondary addressee must be mentioned at least once every 2 years.',
        },
        {
          text: 'At least once every 2 years.',
          why: 'At least once every 2 years the insurer must tell the insured of the right to change that person.',
          correct: true,
        },
        {
          text: 'At least 45 days before every premium increase, and at no other time.',
          why: 'At least 45 days is the notice before a premium increase. The secondary-addressee reminder is at least once every 2 years.',
        },
      ],
    ),
    question(
      'c13q212',
      'If premiums are paid through a payroll or pension plan, when do the secondary-addressee requirements start?',
      [
        {
          text: 'On the first day of payroll deduction.',
          why: 'While premiums are paid that way, the requirements wait. They start 60 days after the insured leaves that payment method.',
        },
        {
          text: '31 days after the group policy terminates for nonpayment.',
          why: 'No later than 31 days is the replacement window in the group continuation exception. Payroll or pension secondary-addressee requirements wait until 60 days after the insured leaves that payment method.',
        },
        {
          text: 'At least 3 years after the first advertisement.',
          why: 'Advertisements must be kept at least 3 years from the date first used. The secondary-addressee wait is 60 days after the insured leaves payroll or pension payment.',
        },
        {
          text: '60 days after the insured leaves that payment method.',
          why: 'If premiums are paid through a payroll or pension plan, these requirements wait until 60 days after the insured leaves that payment method.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q213',
      'What notice is required before a policy can lapse for nonpayment?',
      [
        {
          text: '30 days’ written notice.',
          why: 'The policy cannot lapse for nonpayment unless the insurer gives 30 days’ written notice.',
          correct: true,
        },
        {
          text: 'Notice at least 45 days before a premium increase.',
          why: 'That 45-day notice is for a premium increase. A lapse for nonpayment requires 30 days’ written notice.',
        },
        {
          text: 'A reminder every 2 years, with no separate lapse notice.',
          why: 'Every 2 years is the reminder about changing the secondary addressee. Nonpayment lapse still requires 30 days’ written notice.',
        },
        {
          text: 'Notice no later than 31 days after termination.',
          why: 'No later than 31 days after termination is a group replacement deadline. The lapse notice is 30 days’ written notice before the policy can lapse for nonpayment.',
        },
      ],
    ),
    question(
      'c13q214',
      'When may a new waiting period start after coverage is converted or replaced by another form in the same company?',
      [
        {
          text: 'Whenever the company changes the policy form.',
          why: 'The policy may not start a new waiting period on that conversion or replacement, except for an increase in benefits the insured voluntarily selects.',
        },
        {
          text: 'Only for an increase in benefits the insured voluntarily selects.',
          why: 'It may not start a new waiting period when existing coverage is converted or replaced by another form in the same company, except for an increase in benefits the insured voluntarily selects.',
          correct: true,
        },
        {
          text: 'Whenever the insured’s age or health has deteriorated.',
          why: 'A policy may not be canceled or nonrenewed for age or deterioration of mental or physical health. A new waiting period on same-company replacement is limited to a voluntary benefit increase.',
        },
        {
          text: 'When prior hospitalization is added as a new eligibility rule.',
          why: 'Eligibility may not require a prior hospitalization, except for specified benefits such as waiver of premium. A new waiting period is allowed only for a voluntary benefit increase.',
        },
      ],
    ),
    question(
      'c13q215',
      'What skilled-care imbalance is a policy forbidden to use?',
      [
        {
          text: 'Covering lower levels of care on the same terms as skilled care.',
          why: 'The prohibition is covering skilled nursing care only, or providing significantly more coverage for skilled care in a facility than for lower levels of care.',
        },
        {
          text: 'Offering inflation protection at purchase.',
          why: 'Inflation protection must be offered at purchase. The forbidden design is skilled nursing care only, or significantly more facility skilled care than lower levels of care.',
        },
        {
          text: 'Covering skilled nursing care only, or giving significantly more coverage for skilled care in a facility than for lower levels of care.',
          why: 'The policy may not cover skilled nursing care only, or provide significantly more coverage for skilled care in a facility than for lower levels of care.',
          correct: true,
        },
        {
          text: 'Waiving a waiting period that was already satisfied on similar benefits.',
          why: 'If a policy replaces another, the new company must waive pre-existing, waiting, and probationary periods for similar benefits to the extent already satisfied. The skilled-care ban is a different limit.',
        },
      ],
    ),
    question(
      'c13q216',
      'Which prior-stay conditions may eligibility not require?',
      [
        {
          text: 'A signed acknowledgment of a possible premium increase.',
          why: 'The applicant signs an acknowledgment when potential rate increases are disclosed. Eligibility may not require a prior hospitalization, a higher institutional level before institutional benefits, or prior institutionalization, with stated exceptions.',
        },
        {
          text: 'Waiver of premium after confinement, which the rule forbids in every case.',
          why: 'Waiver of premium, post-confinement, post-acute care, and recuperative benefits are the exceptions. Eligibility otherwise may not require prior hospitalization, a higher level of institutional care first, or prior institutionalization.',
        },
        {
          text: 'A secondary addressee before any home care is covered.',
          why: 'The secondary addressee receives notice of lapse or termination for nonpayment. The eligibility ban concerns prior hospitalization and prior institutionalization, with listed exceptions.',
        },
        {
          text: 'A prior hospitalization, a higher level of institutional care before institutional benefits, or prior institutionalization, except for waiver of premium, post-confinement, post-acute care, or recuperative benefits.',
          why: 'Eligibility may not require a prior hospitalization, a higher level of institutional care before institutional benefits, or prior institutionalization, except for those listed benefits.',
          correct: true,
        },
      ],
    ),
    question(
      'c13q217',
      'What must applicants and policyowners receive about premium increases?',
      [
        {
          text: 'Disclosure of potential rate increases, the explanations and past 10 years of history when premiums can rise, a signed acknowledgment, and notice at least 45 days before an increase.',
          why: 'Applicants must receive that disclosure at application or enrollment, or when the approved policy is delivered. If the premium can increase, the insurer must say so, explain the options if a revision occurs, show the rates in effect until an increase is requested, explain when adjustments take effect, and give the premium-increase history for the past 10 years. The insurer must notify the policyowner at least 45 days before a premium increase.',
          correct: true,
        },
        {
          text: 'Notice 30 days after the increase, with no history and no acknowledgment.',
          why: 'Thirty days’ written notice is the rule before a lapse for nonpayment. A premium increase requires notice at least 45 days before, and the applicant signs an acknowledgment of the rate disclosure, including history for the past 10 years when premiums can rise.',
        },
        {
          text: 'A graphic for at least 20 years in place of any rate-increase disclosure.',
          why: 'The 20-year graphic compares increasing and level benefits in the outline. Potential rate increases are a separate disclosure, with history for the past 10 years and at least 45 days’ notice before an increase.',
        },
        {
          text: 'Silence about increases until 60 days after the insured leaves payroll payment.',
          why: 'Sixty days is when secondary-addressee requirements begin after payroll or pension payment ends. Rate-increase disclosure is given at application, enrollment, or delivery, and the increase notice is at least 45 days before.',
        },
      ],
    ),
  ],
}
