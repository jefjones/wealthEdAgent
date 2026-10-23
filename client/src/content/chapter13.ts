import { question } from './build.ts'
import type { Chapter } from './types.ts'
import { chapter13Extra } from './extra/chapter13.ts'

/**
 * Wording follows the course OCR in content/source/chapter-13-ocr.txt.
 * The source pages have no practice questions. Questions are written from that text,
 * four options each, with a reason for the right answer and for each wrong one.
 */
export const chapter13: Chapter = {
  id: 'ch-medicare',
  number: 13,
  title: 'Medicare and Long-Term Care',
  summary:
    'How Medicare Parts A through D pay, how Medigap fills the gaps, and how long-term care policies and the Utah rules work.',
  sections: [
    {
      id: 'c13-parts',
      title: 'Who Medicare covers',
      body: `Medicare is a federal medical expense insurance program for people age 65 and older, even if the person continues to work. Benefits are also available, regardless of age, to anyone who has been entitled to Social Security disability income benefits for 2 years, or who has permanent kidney failure (end-stage renal disease).

Persons age 65 or older who are recent green-card holders or new immigrants and who never worked in the United States may not immediately qualify. If they do not qualify for free Medicare, they can still buy it when they are 65 or older and either have recently become a U.S. citizen by naturalization without enough quarters for Social Security coverage, or are lawfully admitted aliens who have constantly lived in the United States for 5 years or longer and do not qualify for Social Security benefits.

Medicare is administered by the Center for Medicare and Medicaid Services, a division of the United States Department of Health and Human Services. It has four parts:
• Part A, hospital insurance, is financed through a portion of the payroll tax (FICA).
• Part B, medical insurance, is financed by monthly premiums paid by insureds and by general revenues of the federal government.
• Part C, Medicare Advantage, lets people receive all of their health care services through available provider organizations.
• Part D is prescription drug coverage.

Original Medicare means Part A and Part B only. It covers care from any doctor, provider, hospital, or facility that accepts Medicare patients. It usually does not cover prescription drugs. The patient does not have to choose a primary care doctor and does not need a referral to see a specialist, as long as the specialist is enrolled in Medicare.

Terms used with these policies:
• Attained age — the insured’s age when the policy is issued or renewed.
• Benefit period — a period of time during which benefits are paid.
• Cost-sharing — sharing of expenses between the insured and the insurer through deductibles, copays, and coinsurance.
• Enrollee — a person enrolled in a health plan, an insured. The term does not include dependents of the insured.
• HMO — a prepaid medical service plan in which specified providers contract with the organization, with a focus on preventive care.
• Network provider — a provider who contracts with other providers to serve the network’s subscribers.
• Nonforfeiture benefit — a cash or insurance benefit received by a policyholder who no longer wishes to pay premiums after paying for at least the minimum period.
• Outline of coverage — a document required in all health insurance policies that gives the applicant a full coverage disclosure.`,
      questions: [
        question(
          'c13q01',
          'Who can receive Medicare before age 65?',
          [
            {
              text: 'A person who has been entitled to Social Security disability income benefits for 2 years, or who has permanent kidney failure.',
              why: 'Medicare also covers people age 65 and older even if they keep working. A person with ALS qualifies for Part A the month disability benefits begin. Someone who is 65, a recent citizen or a green-card holder of 5 years, and not eligible for free Medicare may buy it.',
              correct: true,
            },
            {
              text: 'Any dependent of a worker, with no disability and no kidney failure.',
              why: 'An enrollee is the insured. The term does not include dependents. Disability benefits must have lasted 2 years, or the person must have end-stage renal disease.',
            },
            {
              text: 'Only people who have lived in the United States for 5 years, regardless of age or work history.',
              why: 'The 5-year residence rule is for lawfully admitted aliens age 65 or older who do not qualify for Social Security and want to buy Medicare.',
            },
            {
              text: 'Anyone enrolled in an employer plan, because Original Medicare includes Part D.',
              why: 'Original Medicare is Part A and Part B only. It usually does not cover prescription drugs. Part D is the drug benefit.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c13-parta',
      title: 'How you get Part A',
      body: `A person is eligible for Medicare Part A, hospital coverage, by qualifying in one of these ways:
• A citizen or legal resident of the United States, age 65 or over, who is qualified for Social Security or Railroad Retirement benefits.
• Age 65 or over and entitled to monthly Social Security benefits based on the spouse’s work record, if the spouse is at least 62.
• Younger than 65, but entitled to Social Security disability benefits for 24 months.
• End-stage renal disease, meaning permanent kidney failure that requires dialysis or a transplant.
• ALS (Lou Gehrig’s disease). The person automatically qualifies for Part A the month disability benefits begin.

People who are not receiving those benefits need to sign up for Part A, even if they are eligible for premium-free Part A. Monthly Part A premiums are required when a beneficiary is not fully insured under Social Security, meaning the person has not earned 40 quarters of coverage, the equivalent of 10 years of work. If the beneficiary paid Medicare taxes for fewer than 30 quarters, the standard Part A premium is $506. If Medicare taxes were paid for 30 to 39 quarters, the standard Part A premium is $278.

There are three times to sign up:
• Initial enrollment period: when the person first becomes eligible, starting 3 months before turning 65 and ending 3 months after the 65th birthday.
• General enrollment period: between January 1 and March 31 each year.
• Special enrollment period: at any time during the year if the person or the person’s spouse is still employed and covered under a group health plan.

People who are not eligible for premium-free Part A can buy it for a monthly premium. If they fail to sign up when first eligible, the monthly premium may go up 10%, unless the person becomes eligible for a special enrollment period.`,
      questions: [
        question(
          'c13q02',
          'What is the standard Part A premium when the person is not fully insured?',
          [
            {
              text: '$506 a month if Medicare taxes were paid for fewer than 30 quarters, and $278 if they were paid for 30 to 39 quarters.',
              why: 'Premium-free Part A requires 40 quarters of coverage, the equivalent of 10 years of work. Missing the first enrollment can raise the monthly premium 10%, unless a special enrollment period applies.',
              correct: true,
            },
            {
              text: '$278 for fewer than 30 quarters, and no premium after 30 quarters.',
              why: 'Fewer than 30 quarters is the $506 premium. Thirty to 39 quarters is $278. Forty quarters is the fully insured amount that brings premium-free Part A.',
            },
            {
              text: 'Part A is always free at age 65, and the $506 figure is the Part B deductible.',
              why: 'Part A is premium-free only when the person is fully insured. The course states the $506 and $278 premiums for people who paid Medicare taxes for fewer quarters.',
            },
            {
              text: 'A flat 1% of income for every month enrollment was delayed.',
              why: 'The 1% per month of delayed enrollment is the Part D penalty. The Part A late penalty described here is a 10% increase in the monthly premium.',
            },
          ],
        ),
        question(
          'c13q03',
          'When is the initial enrollment period for Part A?',
          [
            {
              text: 'It starts 3 months before the month the person turns 65 and ends 3 months after that birthday.',
              why: 'The general enrollment period is January 1 through March 31. A special enrollment period is available at any time during the year while the person or spouse is still employed and covered by a group health plan.',
              correct: true,
            },
            {
              text: 'It is a 6-month period that starts when the person first signs up for Part B.',
              why: 'Six months is the Medigap open enrollment period after the person first signs up for Medicare Part B.',
            },
            {
              text: 'It is only the month of the 65th birthday.',
              why: 'The initial period runs from 3 months before the 65th birthday through 3 months after it.',
            },
            {
              text: 'It opens every year from January 1 through March 31, and there is no birthday window.',
              why: 'January 1 through March 31 is the general enrollment period. The birthday window is the initial enrollment period.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c13-hospital',
      title: 'What Part A pays for a hospital stay',
      body: `Part A helps pay for inpatient hospital care, inpatient care in a skilled nursing facility, home health care, and hospice care.

Inpatient hospital insurance helps pay for up to 90 days in a participating hospital in any benefit period, subject to a deductible. The first 60 days are covered at 100% of approved charges after the deductible is met. The next 30 days are paid with a daily copayment. Every Part A insured has a lifetime reserve of 60 days. Those days have a copayment twice that of days 61 through 90, and they are nonrenewable. After the lifetime reserve days are used, Medicare pays nothing. Sixty days of non-use of the inpatient hospital benefit starts a new benefit period and a new deductible.

Covered hospital services include a semi-private room, meals, regular nursing services, operating and recovery room costs, hospital costs for anesthesia, intensive care and coronary care, drugs, lab tests, X-rays, medical supplies, appliances, rehabilitation services, and preparatory services related to kidney transplant surgery. Blood is covered except for the first 3 pints. Part A does not include private-duty nursing, a television, or a telephone in the room, or a private room unless it is medically necessary. Inpatient mental health care in a psychiatric facility is limited to 190 days in a lifetime.

Skilled nursing facility care is covered for up to 100 days in each benefit period, following a 3-day inpatient hospital stay for a related illness. The doctor must certify that daily skilled care is necessary. Medicare pays 100% of the approved amount for the first 20 days. Days 21 through 100 are paid except for a daily deductible. Beyond 100 days, Medicare pays nothing.

For a person confined to the home and meeting the other conditions, Part A can pay the full approved cost of home health visits from a participating home health agency. There is no limit on the number of covered visits. Covered services include part-time skilled nursing care, physical therapy, and speech therapy, and also part-time home health aides, occupational therapy, medical social services, and medical supplies and equipment. For durable medical equipment, Medicare pays 80% of the approved amount, and the person pays 20%.

Hospice care can be covered for a terminally ill insured if a Medicare-certified hospice provides it, for as long as the doctor certifies the need. Covered services include doctor and nursing services, medical appliances, supplies including outpatient drugs for pain relief, home health aide and homemaker services, therapies, medical social services, short-term inpatient care including respite care, and counseling. There is limited cost sharing for outpatient drugs and inpatient respite care.

If 3 pints of blood are paid for or replaced under one part of Medicare during the calendar year, they do not have to be paid for or replaced under the other part.`,
      questions: [
        question(
          'c13q04',
          'How does Part A pay a hospital stay, and when does a new benefit period start?',
          [
            {
              text: 'After the deductible, the first 60 days are covered in full and days 61 through 90 have a daily copayment. A nonrenewable lifetime reserve of 60 days has a copayment twice that amount. Sixty days without using the inpatient benefit starts a new benefit period and a new deductible.',
              why: 'Inpatient psychiatric care in a psychiatric facility is limited to 190 days in a lifetime. The first 3 pints of blood are not covered. Private-duty nursing, a television, a telephone, and a private room that is not medically necessary are not included.',
              correct: true,
            },
            {
              text: 'Medicare pays 80% from day 1, and the lifetime reserve renews every benefit period.',
              why: 'The 80% payment is Part B after the annual deductible. The hospital lifetime reserve days do not renew.',
            },
            {
              text: 'All 90 days are free, and a new deductible is due every 30 days whether or not the person was in the hospital.',
              why: 'The deductible applies, days 61 through 90 have a daily copayment, and a new benefit period requires 60 days of non-use.',
            },
            {
              text: 'Hospital coverage stops at 20 days, and days 21 through 100 are a skilled nursing benefit only.',
              why: 'Twenty days at 100%, then a daily deductible through day 100, is the skilled nursing facility benefit. The hospital benefit is 90 days plus 60 lifetime reserve days.',
            },
          ],
        ),
        question(
          'c13q05',
          'When does Part A help pay for a skilled nursing facility?',
          [
            {
              text: 'For up to 100 days in a benefit period after a 3-day inpatient hospital stay for a related illness, if the doctor certifies that daily skilled care is necessary. The first 20 days are paid in full. Days 21 through 100 have a daily deductible.',
              why: 'Home health visits have no visit limit when the conditions are met, and hospice is for a terminally ill person in a Medicare-certified hospice. Beyond 100 skilled nursing days, Part A pays nothing.',
              correct: true,
            },
            {
              text: 'For unlimited custodial care at home, with no hospital stay required.',
              why: 'Custodial care received in the home is a Part B exclusion. Skilled nursing facility care follows a related 3-day inpatient stay and is limited to 100 days.',
            },
            {
              text: 'For 190 days in a lifetime, with the patient paying the first 60 days.',
              why: 'One hundred ninety days is the lifetime limit on inpatient mental health care in a psychiatric facility. The first 60 hospital days are covered after the deductible, not left unpaid.',
            },
            {
              text: 'Only for the first 3 days, and only if the stay is for hospice respite care.',
              why: 'The 3 days are the prior hospital stay that must come before the skilled nursing benefit. Hospice respite care is a separate hospice benefit.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c13-partb',
      title: 'What Part B pays',
      body: `Part B pays for doctors’ services and a variety of other medical services and supplies that hospital insurance does not cover. Most services needed by people with permanent kidney failure are covered only by medical insurance. Part B is optional and is offered to everyone who enrolls in Part A. It is funded by monthly premiums and general federal revenues. Most people pay the standard monthly premium. If modified adjusted gross income on the IRS return is above a certain amount, the premium may be higher.

When a person becomes eligible for Part A, that person is told they will get Part B and have to pay for it unless they decline it. Someone who declines and later wants Part B must wait until the next general enrollment period, January 1 through March 31.

After the annual medical insurance deductible is met, Part B generally pays 80% of the approved charges for the rest of the year. There is no maximum out-of-pocket limit on the 20% coinsurance. Once the deductible amount for the year is reached, it does not apply to other covered services received for the rest of the year.

Part B covers doctor services anywhere in the United States, including surgical services, diagnostic tests and X-rays that are part of the treatment, medical supplies furnished in a doctor’s office, and the services of the office nurse. It covers outpatient hospital services for diagnosis and treatment, such as an emergency room, outpatient clinic, or a hospital. Clinical laboratory services are generally paid at 100% of the approved amount. Outpatient hospital treatment is paid based on hospital cost, and the person pays 20% of the billed amount after the deductible.

Home health services are covered when a doctor recommends them and the person is eligible, on a part-time basis with limits on hours per day and days per week. Services Medicare does not fully cover may be covered by Medicaid. Other covered items, under limits, include ambulance transportation, home dialysis equipment and supplies, periodic support services, independent laboratory tests, oral surgery, outpatient physical therapy and speech pathology, and X-rays and radiation treatments.

Part B drug coverage is limited to medicines administered in a hospital outpatient department under certain circumstances, such as injected drugs at a doctor’s office, some oral cancer drugs, or drugs that require durable medical equipment such as a nebulizer or an infusion pump. Otherwise the person pays 100% for most prescription drugs unless Part D covers them.

Outpatient treatment of an approved mental condition, such as depression or anxiety, is covered in a doctor’s office, another provider’s office, or a hospital outpatient department. The enrollee generally pays 20% of the Medicare-approved amount, and the Part B deductible applies. Inpatient mental health care is covered under Part A.

Besides a Welcome to Medicare preventive visit in the first 12 months, Part B covers an annual wellness visit to develop or update a plan for disease prevention. There is no out-of-pocket cost if the doctor or other qualified provider accepts assignment. Extra tests or services that are not part of the preventive benefit can require coinsurance, and the Part B deductible may apply. A Pap smear to screen for cervical cancer is covered once every 2 years.

Part B does not cover private-duty nursing, skilled nursing home care costs over 100 days per benefit period, intermediate nursing home care, physician charges above Medicare’s approved amount, most outpatient prescription drugs, care received outside the United States, custodial care received in the home, dental care except dental expenses resulting from an accident, cosmetic surgery, eyeglasses, hearing aids, orthopedic shoes, acupuncture, or expenses from a war or an act of war.

Claims terms:
• Actual charge — the amount a physician or supplier bills.
• Approved amount — the amount Medicare determines to be reasonable for a service covered under Part B.
• Assignment — the physician or supplier agrees to accept the Medicare-approved amount as full payment.
• Excess charge — the difference between the Medicare-approved amount and the actual charge.
• Limiting charge — the maximum a physician may charge a Medicare beneficiary for a covered service if the physician does not accept assignment.
• Participating doctors and suppliers agree in advance to accept assignment on all Medicare claims. Nonparticipating doctors or suppliers may choose whether to accept assignment on each claim.
• Carriers process claims submitted by doctors and suppliers. Intermediaries process inpatient and outpatient claims from hospitals, skilled nursing facilities, home health agencies, hospices, and certain other providers.
• Peer review organizations are groups of practicing doctors and other professionals paid by the government to review care given to Medicare patients.
• Durable medical equipment includes oxygen equipment, wheelchairs, and other medically necessary equipment a doctor prescribes for use in the home.`,
      questions: [
        question(
          'c13q06',
          'After the Part B deductible, how much does medical insurance pay, and which care is excluded?',
          [
            {
              text: 'It generally pays 80% of approved charges, and there is no maximum out-of-pocket limit on the 20% coinsurance. Exclusions include care outside the United States, most outpatient prescription drugs, custodial care at home, and dental care except treatment resulting from an accident.',
              why: 'Part B is optional. A person who declines it and wants it later must wait for the next general enrollment period, January 1 through March 31. Clinical laboratory services are generally paid at 100%. The annual wellness visit has no out-of-pocket cost if the provider accepts assignment.',
              correct: true,
            },
            {
              text: 'It pays 100% of actual charges with no deductible, including eyeglasses, hearing aids, and care outside the United States.',
              why: 'Payment is 80% of the approved amount after the deductible, not 100% of the actual charge. Eyeglasses, hearing aids, and care outside the United States are exclusions.',
            },
            {
              text: 'It pays the first 60 days in full and then stops, the same as hospital insurance.',
              why: 'The 60-day full-payment period is Part A inpatient hospital care. Part B is an annual deductible and then 80% for the rest of the year.',
            },
            {
              text: 'It covers all outpatient drugs at 80%, and the deductible applies again to every new service.',
              why: 'Most outpatient prescription drugs are excluded unless they are the limited Part B items, such as injected drugs or drugs used with durable medical equipment. The deductible, once met, does not apply to other covered services for the rest of the year.',
            },
          ],
        ),
        question(
          'c13q07',
          'What is the limiting charge?',
          [
            {
              text: 'The maximum a physician may charge a Medicare beneficiary for a covered service if the physician does not accept assignment.',
              why: 'Assignment means the physician or supplier accepts the Medicare-approved amount as full payment. The excess charge is the difference between the approved amount and the actual charge. Participating doctors agree in advance to accept assignment on all claims.',
              correct: true,
            },
            {
              text: 'The Part A deductible that starts a new hospital benefit period.',
              why: 'A new Part A benefit period and a new deductible follow 60 days of non-use. The limiting charge is a Part B physician-charge limit.',
            },
            {
              text: 'The 20% coinsurance on durable medical equipment.',
              why: 'Home health durable medical equipment is paid at 80%, so the person pays 20%. That percentage is not the limiting charge.',
            },
            {
              text: 'The most a carrier may pay a peer review organization per claim.',
              why: 'Carriers process doctor and supplier claims. Peer review organizations review the care given to Medicare patients. Neither definition is the limiting charge.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c13-advantage',
      title: 'Medicare Advantage',
      body: `The Medicare Modernization Act of 2003 changed the name of Part C from Medicare+Choice to Medicare Advantage. These plans must cover all services covered under Original Medicare except hospice care and some care in qualifying clinical research studies. They may have lower out-of-pocket costs than Original Medicare, and they may offer extra coverage such as vision, hearing, dental, and other health and wellness programs.

To be eligible, the beneficiary must also be enrolled in Medicare Parts A and B. Medicare Advantage is Medicare provided by an approved HMO or PPO. Many HMOs and PPOs do not charge premiums beyond what Medicare pays. There may be no claim forms, almost any medical problem may be covered for a set fee so costs can be budgeted, and the plan may pay for services that Medicare or a Medicare supplement usually does not cover, such as prescriptions, eye exams, hearing aids, or dental care.

Most Medicare HMOs require that medical services be received through the plan, except in emergencies. A few allow more freedom through point-of-service plans.

A Medicare private fee-for-service plan is a Medicare Advantage plan offered by a private insurance company. Medicare pays the company a set amount every month to provide the coverage. The company decides how much enrollees pay for the services they get.

Special Needs Plans provide more focused care for specific groups. That includes people who have both Medicare and Medicaid, people who live in a nursing home, and people who have certain chronic medical conditions.`,
      questions: [
        question(
          'c13q08',
          'What must be true of a Medicare Advantage plan?',
          [
            {
              text: 'The person must be enrolled in Parts A and B. The plan must cover Original Medicare services except hospice care and some care in qualifying clinical research studies, and it may add benefits such as vision, hearing, or dental care.',
              why: 'Most Medicare HMOs require care through the plan except in emergencies. A private fee-for-service plan is paid a set monthly amount by Medicare, and the company sets what enrollees pay. Special Needs Plans focus on people with both Medicare and Medicaid, nursing-home residents, or certain chronic conditions.',
              correct: true,
            },
            {
              text: 'It replaces Part A only, and it cannot cover anything Original Medicare excludes.',
              why: 'Enrollment in both Part A and Part B is required. The plan may cover extras such as vision, hearing, dental, and wellness programs.',
            },
            {
              text: 'It is sold by Social Security and may be used to pay a Medigap premium.',
              why: 'Medicare Advantage is provided by an approved HMO or PPO, or by a private fee-for-service company. A Medicare supplement cannot be used to pay Medicare Advantage copayments, deductibles, or premiums.',
            },
            {
              text: 'Hospice must be provided by the Advantage plan, and emergencies must be treated in network.',
              why: 'Hospice is an exception to the services the Advantage plan must cover. Emergencies are the usual exception to the rule that care comes through the HMO.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c13-partd',
      title: 'Part D prescription drugs',
      body: `The Medicare Prescription Drug, Improvement, and Modernization Act of 2003, passed in November 2003, added optional Part D coverage. Private prescription drug plans contract with Medicare. To receive benefits, the person must sign up with a plan offered in the area and must be enrolled in Part A, or in Parts A and B. Where no private plan is offered, the government offers a standard plan. Medicaid recipients are enrolled automatically.

If beneficiaries do not enroll when first eligible, they must pay a 1% penalty for each month they delayed enrollment. They may choose a stand-alone plan on a fee-for-service basis, or an integrated plan that groups coverages together, including PPOs and HMOs, known as Medicare Advantage.

Private plans must meet Medicare standards and may still personalize the plan. They must cover drugs for certain classes, but they do not have to cover every drug in each class.

The standard plan has a monthly premium, which varies by plan, and a deductible. After the deductible, the plan covers prescription drug costs until a benefit limit is reached. Once the beneficiary and the plan spend $4,660 combined on drugs, including the deductible, the beneficiary generally pays no more than 25% of the cost until out-of-pocket spending is $7,400 for 2023. Catastrophic coverage then begins automatically and covers 95% of prescription drug costs. In most cases the beneficiary pays no more than 5% of the cost of covered drugs for the rest of the year. Additional assistance is available for people with low income, and there is no gap in coverage for those beneficiaries.

A formulary is the list of prescription drugs the plan covers, also called a drug list. Each plan files its own formulary annually. Insureds must be notified when the formulary changes. Drugs are placed in tiers, and a drug in a lower tier costs less than a drug in a higher tier. A formulary must include at least 2 drugs in each treatment category. It is not required to include all drugs.`,
      questions: [
        question(
          'c13q09',
          'Under the 2023 standard drug benefit, what happens after the beneficiary and the plan have spent $4,660 combined, and what is the late-enrollment penalty?',
          [
            {
              text: 'The beneficiary generally pays no more than 25% until out-of-pocket spending reaches $7,400. Catastrophic coverage then pays 95%, and the beneficiary pays no more than 5% for the rest of the year. The penalty is 1% for each month enrollment was delayed.',
              why: 'The person must be enrolled in Part A, or in Parts A and B, and must join a plan in the area. A formulary must include at least two drugs in each treatment category, is filed annually, and uses tiers. Low-income beneficiaries can receive extra help with no gap in coverage.',
              correct: true,
            },
            {
              text: 'Medicare pays 80% after $4,660, and the penalty is a one-time 10% increase.',
              why: 'Eighty percent is the Part B coinsurance pattern. The Part A late premium increase described in the course is 10%. The Part D penalty is 1% per delayed month, and catastrophic coverage is 95%.',
            },
            {
              text: 'Coverage stops at $7,400, and the person must pay 100% after that.',
              why: 'Reaching the out-of-pocket amount starts catastrophic coverage. The plan covers 95%, and the beneficiary pays no more than 5% for the rest of the year.',
            },
            {
              text: 'There is no deductible or premium, and every drug in every class must be covered.',
              why: 'The standard plan has a premium and a deductible. Plans must cover drugs for certain classes and at least two drugs in each treatment category. They do not have to cover every drug.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c13-primary',
      title: 'Which plan pays first',
      body: `Federal law extends primary coverage under the employer’s plan to active older employees regardless of age. Employer plans usually remain primary, and Medicare is secondary.

The Omnibus Budget Reconciliation Act of 1990 requires large group health plans of 100 employees or more to provide primary coverage for disabled individuals under age 65 who are not retired.

For end-stage renal disease, that act, as amended by the Balanced Budget Act of 1997, requires the employer health plan to provide primary coverage for 30 months before Medicare becomes primary.

An employee who is still working at 65 must be allowed to stay on the group plan and defer Medicare until retirement. The employee may reject the company plan and elect Medicare, but the company can offer no incentives for switching to Medicare. If the employee stays on the group plan and also signs up for Medicare, Medicare is primary when the group has fewer than 20 employees. In groups of 20 or more, the group coverage is primary over Medicare.`,
      questions: [
        question(
          'c13q10',
          'A 66-year-old employee stays on the employer plan and also has Medicare. Which plan is primary?',
          [
            {
              text: 'The group plan is primary if the employer has 20 or more employees. Medicare is primary if the employer has fewer than 20.',
              why: 'The employer may not offer incentives to switch to Medicare. A large group of 100 or more must be primary for a disabled person under 65 who is not retired. For end-stage renal disease, the employer plan is primary for 30 months.',
              correct: true,
            },
            {
              text: 'Medicare is always primary at age 65, and the group plan stops.',
              why: 'Active older employees keep the employer plan as primary coverage. In a group of 20 or more, that plan pays before Medicare.',
            },
            {
              text: 'The group plan is primary for 30 months at every age, then Medicare is primary.',
              why: 'The 30-month period is the end-stage renal disease rule, not the rule for a working employee age 65 or older.',
            },
            {
              text: 'A group of fewer than 20 is primary, and a group of 20 or more is secondary.',
              why: 'The sizes run the other way. Fewer than 20 means Medicare is primary. Twenty or more means the group plan is primary.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c13-medigap',
      title: 'Medicare supplement plans',
      body: `Medicare supplement plans, called Medigap, are issued by private insurers to fill some of the gaps in Medicare: deductibles, copayments, and benefit periods. They are not run through Social Security. They are sold and serviced by private insurers and HMOs. They must meet set requirements and be approved by the state department of insurance.

The Omnibus Budget Reconciliation Act of 1990 authorized the NAIC to develop a standardized model. The purpose was to eliminate questionable marketing practices, give consumers protection, and standardize that protection. During open enrollment, a supplement may not be priced in a discriminatory way or denied because of health status, claims experience, receipt of health care, or medical condition. Open enrollment is the 6-month period that guarantees the right to buy Medigap once the person first signs up for Medicare Part B. The applicant generally must have both Part A and Part B.

A Medicare supplement cannot be used to pay Medicare Advantage copayments, deductibles, or premiums. Insurers may not sell a supplement to someone already enrolled in Medicaid.

Standard plans are lettered A through N. The core benefits in Plan A must be in all plans. Any insurer that markets Medigap must offer Plan A. The other plans are optional. During open enrollment, coverage is guaranteed issue. The company must sell the policy, cover all pre-existing conditions incurred more than 6 months from the effective date, and not charge more because of past or present health problems.

Plan A, the core benefits, covers:
• Part A coinsurance or copayment, but not the Part A deductible.
• Part A hospital costs for up to an additional 365 days after Medicare benefits are used up.
• Part A hospice care coinsurance or copayment.
• Part B coinsurance or copayment.
• The first 3 pints of blood, the blood deductible for Parts A and B.

Insurers may not change the benefits in the standard plans or change a plan’s letter.
• Plan B adds the Medicare Part A deductible.
• Plan D adds the Part A deductible, skilled nursing facility coinsurance, and the foreign travel benefit.
• Plan G adds the Part A deductible, skilled nursing facility coinsurance, 100% of Medicare Part B excess charges, and the foreign travel benefit. This plan must pay for services of activities of daily living that Medicare does not cover.
• Plans C, E, F, H, and J are no longer available. Policies already bought stay in force.
• Plans K and L have lower premiums and higher out-of-pocket costs. They cover hospital copayments for days 61 through 90, lifetime reserve days 91 through 150, and an additional 365 hospital days after Medicare benefits are used. Plan K pays 50% of the first 3 pints of blood, 50% of Part B coinsurance, and 50% of Part A hospice cost sharing and respite care. Plan L pays 75% of those amounts. Plan K includes 50% of the Part A deductible and 50% of skilled nursing facility coinsurance. Plan L includes 75% of each.
• Plans M and N provide benefits similar to Plan D, but the copays and deductibles might differ.`,
      questions: [
        question(
          'c13q11',
          'When does Medigap open enrollment guarantee the right to buy a supplement?',
          [
            {
              text: 'For 6 months after the person first signs up for Medicare Part B. The applicant generally needs both Part A and Part B, and the insurer cannot charge more because of health problems.',
              why: 'The policy must cover pre-existing conditions incurred more than 6 months from the effective date. A supplement cannot pay Medicare Advantage copayments, deductibles, or premiums, and it cannot be sold to someone enrolled in Medicaid.',
              correct: true,
            },
            {
              text: 'For 3 months before and 3 months after the 65th birthday, whether or not the person has Part B.',
              why: 'That window is the initial enrollment period for Medicare Part A. Medigap open enrollment is 6 months and starts when the person first signs up for Part B.',
            },
            {
              text: 'At any time after a 30-month waiting period, and only if the person has Medicaid.',
              why: 'Thirty months is how long an employer plan is primary for end-stage renal disease. Insurers are prohibited from selling a supplement to someone already enrolled in Medicaid.',
            },
            {
              text: 'Only during January, and the insurer may decline the applicant for claims history.',
              why: 'Open enrollment forbids denial, or discriminatory pricing, based on health status, claims experience, receipt of care, or medical condition.',
            },
          ],
        ),
        question(
          'c13q12',
          'Which benefits are in every Medigap plan, and what does Plan G add?',
          [
            {
              text: 'Plan A’s core benefits are in every plan: Part A coinsurance but not the Part A deductible, 365 extra hospital days, hospice coinsurance, Part B coinsurance, and the first 3 pints of blood. Plan G adds the Part A deductible, skilled nursing coinsurance, 100% of Part B excess charges, and foreign travel.',
              why: 'Any insurer marketing Medigap must offer Plan A. Plan B adds only the Part A deductible. Plans C, E, F, H, and J are no longer sold to new buyers. Plans K and L pay 50% and 75% of several cost-sharing amounts.',
              correct: true,
            },
            {
              text: 'Every plan pays the Part A deductible and 100% of Part B excess charges. Plan G pays only the core benefits.',
              why: 'The Part A deductible is not a core benefit. Plan A is the core plan. Plan G is the plan that adds the deductible, skilled nursing coinsurance, all Part B excess charges, and foreign travel.',
            },
            {
              text: 'Plan K is the core plan and pays 100% of Part B coinsurance. Plan G is no longer available.',
              why: 'Plan A is the core plan. Plan K pays 50% of Part B coinsurance. Plans C, E, F, H, and J are the ones no longer available. Plan G is still described as an available plan.',
            },
            {
              text: 'Core benefits include the Part D deductible and Medicare Advantage premiums.',
              why: 'Part D is the drug benefit, not a Medigap core benefit. A supplement cannot be used to pay Medicare Advantage premiums.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c13-select',
      title: 'Medicare SELECT',
      body: `A Medicare SELECT policy is a Medicare supplement with restricted network provisions. Payment of benefits, in whole or in part, depends on using network providers. SELECT plans negotiate lower rates with a network of doctors, hospitals, and specialists. It operates like an HMO. Members pay lower premiums.

Each policy must be approved by the head of the state’s department of insurance. Issuers may not sell a new Medicare SELECT policy to someone whose primary residence is outside the issuer’s service area.

Every Medicare SELECT policy must:
• Pay full coverage under the policy for covered services that are not available through network providers.
• Not restrict payment for covered services from non-network providers when the symptoms require emergency care and it is not reasonable to obtain the services through a network provider.
• Give each applicant a full and fair written disclosure of the provisions, restrictions, and limitations.
• On request, offer a Medicare supplement from the same issuer with comparable benefits and no restricted network. That policy must be available without evidence of insurability if the SELECT policy has been in force for 6 months.
• Continue coverage if Medicare SELECT policies are discontinued because the program fails.

The issuer must file proposed changes to its plan of operation with the Commissioner before using them. Changes to the list of network providers must be filed with the Commissioner within 30 days.`,
      questions: [
        question(
          'c13q14',
          'What can a Medicare SELECT insured buy after the policy has been in force for 6 months?',
          [
            {
              text: 'A Medicare supplement from the same issuer with comparable benefits and no restricted network, without evidence of insurability.',
              why: 'Emergencies that cannot reasonably be treated in network must still be paid. Covered services that the network does not offer are paid in full under the policy. A new SELECT policy cannot be sold to someone who lives outside the service area. Network-list changes are filed with the Commissioner within 30 days.',
              correct: true,
            },
            {
              text: 'A second SELECT policy outside the service area, if the insured passes medical underwriting.',
              why: 'New SELECT policies are not sold to people whose primary residence is outside the service area. The 6-month right is a comparable supplement without a network and without evidence of insurability.',
            },
            {
              text: 'Medicare Advantage coverage that pays the SELECT premium.',
              why: 'A Medicare supplement cannot be used to pay Medicare Advantage copayments, deductibles, or premiums. SELECT is itself a supplement with a network.',
            },
            {
              text: 'Nothing. After 6 months the network restriction cannot be dropped.',
              why: 'The issuer must make the non-network supplement available without evidence of insurability once the SELECT policy has been in force for 6 months.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c13-gaprules',
      title: 'Utah rules for Medicare supplements',
      body: `Marketing rules require every company to have procedures so agents’ policy comparisons are fair and accurate, guidelines so excessive insurance is not sold or issued, and a formula for whether a replacement contains benefits that are clearly and substantially greater than the policy being replaced. The first page must contain this notice: “Notice to buyer: This policy may not cover all of your medical expenses.”

The company must make a reasonable effort to learn whether the applicant already has accident and sickness insurance and the type and amounts owned. Twisting, high-pressure tactics, and misleading advertising may not be used. The words Medicare Supplement, Medigap, Medicare Wrap-Around, and similar words may not be used unless the policy fully complies with the law. Any Medicare supplement advertisement intended for use in this state, in writing, radio, electronic, or television form, must be given to the Insurance Commissioner for review or approval.

An agent must make a reasonable effort to determine that a recommended purchase or replacement is appropriate. The application must include this signed statement: “I have reviewed the current health insurance coverage of the applicant and found that additional coverage of the type and amount applied for is appropriate for the applicant’s needs.” Selling a person more than one Medicare supplement policy is prohibited.

Every policy has a 30-day free-look period. The insured may return it for a full refund for any reason. The right-to-return notice must be prominent on the first page of the policy or certificate, or attached to it. The application must ask whether the applicant has another Medicare supplement or is replacing any other accident and health policy, must ask whether the applicant is eligible for Medicaid, and must say that counseling services may be available. If a replacement is involved, the Notice Regarding Replacement must be given before the policy is issued or delivered. It must tell the applicant about the 30-day free look. The company keeps a copy signed by the applicant and the agent.

If one supplement replaces another, the new company must waive pre-existing condition limits, waiting periods, elimination periods, and probationary periods to the extent those periods were already met. If the replaced policy has been in effect for 6 months or more, the new policy may not impose any of those time requirements for benefits similar to the original policy. Any pre-existing limitation must appear in a separate paragraph labeled Pre-existing Condition Limitations. Usually the policy must cover pre-existing conditions incurred more than 6 months from the effective date.

The policyholder must be told of the 30-day return right. No later than 30 days before Medicare benefit changes take effect, the issuer must notify policyholders of modifications to their supplement. An outline of coverage must be given at application. Except for direct-response policies, the company must get a receipt. Issuers of hospital or medical expense policies, on an expense-incurred or indemnity basis, for people eligible for Medicare must give applicants the Guide to Health Insurance for People with Medicare. Almost all insurers deliver it at application. A direct-response insurer may supply it on request, but no later than policy delivery.

Compensation includes monetary and nonmonetary pay for sale or renewal, including bonuses, gifts, prizes, awards, and finder’s fees. First-year commission may not be more than 200% of the renewal commission for servicing the policy in the second year. Commissions in renewal years must equal the second-year commission and must be paid for at least 5 renewal years. On a replacement, the agent may not receive more than the renewal compensation payable by the replacing company unless the new benefits are clearly and substantially greater.

Policies effective on or after June 1, 2010, cannot reduce, restrict, or duplicate Medicare benefits. They cannot exclude or limit a pre-existing condition loss if it occurred more than 6 months before the effective date. Losses from sickness must be treated like losses from an accident. The policy must be guaranteed renewable.`,
      questions: [
        question(
          'c13q13',
          'What free-look and replacement rules apply to a Medicare supplement?',
          [
            {
              text: 'The insured has 30 days to return the policy for a full refund. A replacement must waive pre-existing, waiting, elimination, and probationary periods already satisfied. If the old policy was in force at least 6 months, similar benefits in the new policy cannot have those time limits.',
              why: 'The first page must say the policy may not cover all medical expenses. The agent must sign that the added coverage is appropriate. More than one Medicare supplement for the same insured is prohibited. The first-year commission may not exceed 200% of the second-year renewal commission, and that renewal amount continues for at least 5 renewal years.',
              correct: true,
            },
            {
              text: 'The free look is 10 days, and a replacement may impose a new 12-month pre-existing limit even if the old policy met it.',
              why: 'The free look is 30 days. Time periods already met under the replaced policy must be waived, and a policy in force 6 months or more leaves no such time requirement on similar benefits.',
            },
            {
              text: 'The buyer must keep the policy for 6 months, and the commission in year one may be any amount the insurer sets.',
              why: 'Six months is the open-enrollment and pre-existing measuring period, not a minimum time the buyer must keep the policy. First-year commission is capped at 200% of the second-year renewal commission.',
            },
            {
              text: 'A supplement may duplicate Medicare benefits if it is guaranteed renewable.',
              why: 'Policies effective on or after June 1, 2010, cannot reduce, restrict, or duplicate Medicare benefits. They must be guaranteed renewable, and sickness must be treated like accident.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c13-mippa',
      title: 'Rules for selling to people on Medicare',
      body: `The Medicare Improvements for Patients and Providers Act of 2008 amended the Social Security Act to extend expiring Medicare provisions, improve access to preventive and mental health services, enhance low-income benefit programs, and maintain access to care in rural areas.

Among its changes, it authorizes grants to increase mental health and other care for veterans of Operation Iraqi Freedom and Operation Enduring Freedom who live in rural areas. It provides incentive payments for electronic prescriptions, allows expansion of the Medicare Medical Home Demonstration Project when quality and spending conditions are met, directs programs to increase awareness of and screening for chronic kidney disease, and extends Medicare coverage to kidney-disease patient education. It revises requirements for certain non-employer Medicare Advantage private fee-for-service plans and for special-needs plans, and it limits out-of-pocket costs for dual eligibles and beneficiaries in a specialized Medicare Advantage plan for special-needs individuals.

Part D changes require prompt payment of clean claims by prescription drug plans and Medicare Advantage drug plans, with interest on late claims. A pharmacy located in, or contracting with, a long-term care facility has between 30 and 90 days to submit claims. The Secretary must identify medications for which restricted access would have major consequences and for which there is a significant clinical need for access to multiple drugs in a class.

The act also eliminates copayments for Medicare psychiatric services for a person who is not a hospital inpatient when the expenses are incurred. It prohibits certain Medicare Advantage and prescription-drug sales activities: gifts or prizes as enrollment inducements, unsolicited direct contact, cross-selling of nonhealth products such as annuities and life insurance during a Medicare Advantage sales presentation, and meals for prospective enrollees. It eliminates Medicare Part D late-enrollment penalties.`,
      questions: [
        question(
          'c13q16',
          'Which sales practice does the 2008 Medicare Improvements for Patients and Providers Act prohibit?',
          [
            {
              text: 'Gifts or prizes as an enrollment inducement, unsolicited direct contact, cross-selling nonhealth products such as annuities or life insurance during a Medicare Advantage presentation, and meals for prospective enrollees.',
              why: 'The act also eliminates copayments for outpatient Medicare psychiatric services and eliminates Part D late-enrollment penalties. A long-term care pharmacy has 30 to 90 days to submit drug-plan claims.',
              correct: true,
            },
            {
              text: 'Any written comparison of two Medicare supplement policies.',
              why: 'Supplement marketing rules require comparisons to be fair and accurate. They do not ban the comparison itself. The MIPPA bans listed here are gifts, unsolicited contact, cross-selling, and meals.',
            },
            {
              text: 'Electronic prescribing and kidney-disease screening.',
              why: 'The act provides incentive payments for electronic prescriptions and directs programs to increase screening for chronic kidney disease.',
            },
            {
              text: 'Coverage of hospice respite care under Part A.',
              why: 'Hospice, including respite care, is a Part A benefit. MIPPA’s sales limits apply to Medicare Advantage and prescription drug plans.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c13-medicaid',
      title: 'Medicaid',
      body: `Medicaid is a federal and state program for people whose income and resources are not enough to pay for necessary medical care. States design and administer it, typically through the state’s Department of Public Welfare, under broad federal guidelines.

A person must meet income and other eligibility requirements. After low income and low assets are established, other qualifiers can include blindness, disability, pregnancy, age over 65, or caring for children who receive welfare benefits. For many groups, income is measured as a percentage of the federal poverty level. After the Affordable Care Act, states rely primarily on data from sources such as the Social Security Administration and the Departments of Homeland Security and Labor, rather than paper from families. Individuals also must meet federal and state rules on residency, immigration status, and documentation of U.S. citizenship.

States must provide at least physician services, inpatient and outpatient hospital care, skilled nursing home services, laboratory and X-ray services, home health care, rural health clinic services, periodic screening, diagnosis, and treatment, and family planning services. Medicaid also pays for prescription drugs, dental services, private-duty nursing, eyeglasses, check-ups, and medical supplies and equipment.`,
      questions: [
        question(
          'c13q15',
          'How is Medicaid eligibility and coverage set up?',
          [
            {
              text: 'It is a federal and state program for people whose income and resources cannot meet necessary medical care. States administer it. Mandated services include physician care, hospital care, skilled nursing, lab and X-ray, home health, and family planning.',
              why: 'Other qualifiers include blindness, disability, pregnancy, age over 65, or caring for children receiving welfare benefits. Medicaid also pays for prescription drugs, dental care, private-duty nursing, eyeglasses, check-ups, and supplies. A Medicare supplement may not be sold to someone already enrolled in Medicaid.',
              correct: true,
            },
            {
              text: 'It is federal only, and it replaces Medicare for every person at age 65.',
              why: 'States design and administer Medicaid. Medicare is the federal program for people 65 and older and for certain disabled people. Medicaid is for people whose income and resources are insufficient.',
            },
            {
              text: 'It covers only prescription drugs, and private-duty nursing is excluded.',
              why: 'Prescription drugs are among the services Medicaid pays. Private-duty nursing is also listed. The mandated list includes hospital, physician, skilled nursing, and home health care.',
            },
            {
              text: 'Eligibility ignores income and depends only on a 40-quarter work history.',
              why: 'Forty quarters is the Social Security measure for premium-free Medicare Part A. Medicaid looks at income, resources, and other qualifiers such as disability or age.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c13-ltc',
      title: 'What long-term care insurance pays',
      body: `Long-term care policies are marketed as individual policies, group policies, or riders to life insurance. They cover people who can no longer live independently and need help at home or in a nursing home. Policies differ in days of confinement, home health visits, the amount paid for nursing home care, and other terms. They must cover at least 12 consecutive months in a setting other than an acute care unit of a hospital.

Benefits normally require that the insured be unable to perform some activities of daily living: bathing, dressing, toileting, transferring positions (also called mobility), continence, and eating.

Policies usually have an elimination, or waiting, period like disability income policies. It may range from 0 to 365 days. A longer waiting period means a lower premium. The insured can usually choose the period. The benefit period, after the elimination period, is usually 2 to 5 years. A few policies offer lifetime coverage. A longer benefit period means a higher premium.

The benefit is usually a fixed dollar amount per day, regardless of the actual cost of care. If the policy pays $100 a day and the facility charges $90, the insurer pays the full $100. Some policies pay the actual charge. Most policies are guaranteed renewable, but the insurer may increase the premiums.

An individual policy must show a renewability provision on the first page. Renewal may not be less favorable than guaranteed renewable or noncancellable. The insurer may not cancel, nonrenew, or otherwise terminate coverage solely because of the insured’s age or deterioration in mental or physical health.

Every policy must offer the option to buy coverage that raises benefits for reasonably anticipated increases in the cost of the covered services.

Policies may exclude pre-existing conditions or diseases, mental and nervous disorders or disease except organic cognitive disorders such as Alzheimer’s disease, senile dementia, and Parkinson’s disease, alcoholism and drug addiction, illness caused by war, criminal activity, or attempted suicide, and treatment payable by the government, Medicare, workers compensation, or similar coverage.

Long-term care generally covers three levels, and it may also cover home health care, adult day care, hospice, or respite care, which can be received at home.
• Skilled care is daily nursing and rehabilitative care that only medical personnel can provide, under a physician’s direction. It is almost always given in an institution. Changing a sterile dressing and physical therapy in a skilled nursing facility are examples. Care that nonprofessional staff can give is not skilled care.
• Intermediate care is occasional nursing or rehabilitative care for stable conditions that need daily medical assistance less often than skilled care. A physician orders it, and skilled personnel deliver or monitor it. Giving medication or changing a bandage can qualify. It may be given in a nursing home, an intermediate-care unit, or the patient’s home.
• Custodial care meets personal needs such as eating, dressing, or bathing. Nonmedical personnel, including relatives or home health workers, can provide it, in an institution or at home. It is help with activities of daily living, not hospital or surgical care.
• Home health care is skilled nursing or other professional service in the home, including visits by registered nurses, licensed practical nurses, licensed vocational nurses, or community organizations such as hospice. It can include physical, occupational, and speech therapy, and medical services by a social worker.
• Adult day care is for functionally impaired adults for less than 24 hours. A recreation center or community center may provide it, including transportation, health and social activities, and usually meals.
• Respite care relieves the family caregiver, for example someone staying in the home while the caregiver rests or goes out. Adult day care centers also provide this relief.

The Community Living Assistance Services and Support (CLASS) Act is a voluntary insurance program proposed by Congress for people and families with limited resources who need nonmedical services in communities across the United States. Services would be paid through a monthly payroll deduction. A person must be 18 or older and must have paid monthly premiums for at least 5 years. Working adults may opt out.

A policy is a qualified long-term care contract only if the only protection is coverage of qualified long-term care services, it does not pay expenses reimbursable under Title XVIII of the Social Security Act, it is guaranteed renewable, premium refunds and dividends are used to reduce future premiums or to increase future benefits to offset inflation, and it meets the consumer-protection provisions on model regulation and model act provisions, disclosure, and nonforfeitability. Only products that meet the qualified definition may be marketed as partnership long-term care plans.`,
      questions: [
        question(
          'c13q17',
          'What triggers long-term care benefits, and how is a fixed daily benefit paid?',
          [
            {
              text: 'The insured normally must be unable to perform some activities of daily living, such as bathing, dressing, toileting, transferring, continence, and eating. A policy that pays $100 a day pays $100 even if the facility charges $90.',
              why: 'Coverage must last at least 12 consecutive months outside an acute care unit of a hospital. The elimination period can run from 0 to 365 days. A longer wait lowers the premium. The benefit period is usually 2 to 5 years, and a longer period raises the premium. The insurer may not cancel solely for age or a decline in health.',
              correct: true,
            },
            {
              text: 'Benefits require a 3-day hospital stay, and the insurer pays only the facility’s actual $90 charge.',
              why: 'A prior hospitalization cannot be used to condition long-term care benefits. The fixed daily example pays the full $100, not the lower actual charge. Some other policies do pay the actual charge.',
            },
            {
              text: 'The insured must be unable to work at his or her own occupation for 24 months.',
              why: 'Twenty-four months of Social Security disability benefits is a Medicare eligibility rule. Long-term care uses activities of daily living.',
            },
            {
              text: 'Only skilled care in a hospital is covered, for a lifetime benefit with no waiting period.',
              why: 'Policies must cover at least 12 consecutive months outside an acute hospital unit, and they generally cover skilled, intermediate, and custodial care. A skilled-only benefit is prohibited. The elimination period may be as long as 365 days.',
            },
          ],
        ),
        question(
          'c13q18',
          'Which condition may a long-term care policy exclude, and what makes a contract qualified?',
          [
            {
              text: 'Alcoholism and drug addiction may be excluded. Alzheimer’s disease, senile dementia, and Parkinson’s disease may not be excluded as mental or nervous disorders. A qualified contract covers only qualified long-term care services, is guaranteed renewable, and does not pay expenses reimbursable under Title XVIII of the Social Security Act.',
              why: 'War, crime, attempted suicide, and treatment payable by government, Medicare, or workers compensation may also be excluded. Refunds and dividends on a qualified contract must reduce future premiums or increase future benefits. Only qualified products may be marketed as partnership plans. The proposed CLASS program requires age 18 and at least 5 years of monthly premiums.',
              correct: true,
            },
            {
              text: 'Alzheimer’s disease may be excluded, and a qualified plan may reimburse Medicare-covered hospital bills.',
              why: 'Organic cognitive disorders, including Alzheimer’s, are the exception to the mental-and-nervous exclusion. A qualified contract does not pay expenses reimbursable under Title XVIII.',
            },
            {
              text: 'Custodial care must be excluded, and skilled care is the only level allowed.',
              why: 'Custodial care is one of the three usual levels, along with skilled and intermediate care. A policy may not provide skilled nursing care only.',
            },
            {
              text: 'Any policy with a 30-day free look is a qualified partnership plan, even if it pays Medicare expenses.',
              why: 'The 30-day free look is a Utah return right. Partnership marketing is limited to products that meet the qualified-contract definition, including the ban on paying Title XVIII expenses.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c13-ltcrules',
      title: 'Utah rules for long-term care',
      body: `Every company must have marketing procedures so policy comparisons are fair and accurate, and guidelines so excessive insurance is not sold. Prohibited acts are twisting, high-pressure tactics, cold-lead advertising, and misrepresentation. Twisting is knowingly making a misleading representation or an incomplete or fraudulent comparison to induce a person to lapse, forfeit, surrender, terminate, retain, pledge, assign, borrow on, or convert a policy, or to take a policy with another insurer. High-pressure tactics use force, fright, threat, or undue pressure. Cold-lead advertising fails to disclose conspicuously that the purpose is solicitation and that an agent or company will make contact.

The insurer must give the Commissioner, on request, a copy of any long-term care advertisement intended for use in Utah, whether written, radio, or television. Advertisements must be kept at least 3 years from the date first used.

A Shopper’s Guide in the NAIC format must be given before the application is completed when a producer solicits, or together with the application for a direct-response solicitation. The outline of coverage follows the standard format, including the company, the policy number, and important features. It is a separate document, in type no smaller than 10 point, delivered before the application or enrollment form, and it cannot contain advertising.

Insurers must use suitability standards and train agents to use them. The applicant is given the Long-Term Care Insurance Personal Worksheet, including premium information, policy type, rate-increase history, and questions on income, savings, and investments. A copy is filed with the Commissioner.

Individual policyholders, and group certificate holders who contribute to the cost, may return the policy within 30 days of delivery for a premium refund if they are not satisfied for any reason. The renewability provision must be on the first page and may not be less favorable than guaranteed renewable or noncancellable. Coverage may not be ended solely for age or a decline in mental or physical health.

Group long-term care issued in this state must give a basis for continuation or conversion. The insurer must provide that continuation or converted policy unless termination was for failure to pay a required premium and the coverage is replaced no later than 31 days after termination by group coverage that is effective the day after termination, provides identical or greater benefits, and calculates the premium consistently.

Inflation protection must be offered at purchase. The terms may not be less favorable than one of these: benefit increases compounding annually at a rate of at least 5%; a periodic increase without evidence of insurability or health status if the insured did not decline the option for the previous period; or coverage of a specified percentage of actual charges that is not subject to a maximum indemnity. The outline must include a graphic comparing increasing and level benefits for at least 20 years, and any expected premium increase for automatic or optional benefit increases.

A pre-existing condition is one for which medical advice or treatment was recommended by, or received from, a health care provider within 6 months before the effective date. That definition does not stop the insurer from asking for a complete health history. Any pre-existing limitation must be a separate paragraph labeled Pre-existing Condition Limitations.

Policies must disclose renewability. Riders and endorsements must be disclosed. If the policy uses usual and customary or reasonable and customary, the meaning must be disclosed. Other limits on eligibility must be disclosed. A life policy that accelerates benefits for long-term care must say that the accelerated benefits may be taxable and that the insured should ask a personal tax advisor. That statement must be prominent on the first page of the policy or rider and on related documents.

An individual policy cannot be issued until the insurer has a written designation of at least one person, besides the applicant, to receive notice of lapse or termination for nonpayment, or a signed and dated waiver of that designation. This is the secondary-addressee provision. At least once every 2 years the insurer must tell the insured of the right to change that person. If premiums are paid through a payroll or pension plan, these requirements wait until 60 days after the insured leaves that payment method. The policy cannot lapse for nonpayment unless the insurer gives 30 days’ written notice.

A policy may not be canceled or nonrenewed for age or deterioration of mental or physical health. It may not start a new waiting period when existing coverage is converted or replaced by another form in the same company, except for an increase in benefits the insured voluntarily selects. It may not cover skilled nursing care only, or provide significantly more coverage for skilled care in a facility than for lower levels of care. Eligibility may not require a prior hospitalization, require a higher level of institutional care before institutional benefits, or require prior institutionalization, except for waiver of premium, post-confinement, post-acute care, or recuperative benefits.

If a policy replaces another, the new company must waive pre-existing, waiting, and probationary periods for similar benefits to the extent those exclusions were already satisfied.

Applicants must receive a disclosure of potential rate increases at application or enrollment, or when the approved policy is delivered. If the premium can increase, the insurer must say so, explain the options if a revision occurs, show the rates in effect until an increase is requested, explain when adjustments take effect, and give the premium-increase history on that form or a similar form for the past 10 years. The applicant signs an acknowledgment. The insurer must notify the policyowner at least 45 days before a premium increase.`,
      questions: [
        question(
          'c13q19',
          'What inflation protection and pre-existing condition rules apply to Utah long-term care?',
          [
            {
              text: 'The insurer must offer inflation protection at purchase, no less favorable than 5% compound annual increases, a periodic increase without evidence of insurability if the prior option was not declined, or a percentage of actual charges with no maximum indemnity. A pre-existing condition is advice or treatment recommended or received within 6 months before the effective date.',
              why: 'The outline includes a graphic of at least 20 years. The Shopper’s Guide is given before a producer completes the application. The outline is a separate document in at least 10-point type and is delivered before the application. Advertisements are kept for 3 years.',
              correct: true,
            },
            {
              text: 'Inflation protection is optional for the insurer, and the look-back is 12 months.',
              why: 'The insurer cannot offer long-term care unless inflation protection is offered at purchase. The pre-existing look-back in this section is 6 months.',
            },
            {
              text: 'Benefits must increase 10% a year, and Alzheimer’s treatment received 6 months earlier must be excluded.',
              why: 'The compound rate named in the rule is not less than 5%. Alzheimer’s is an organic cognitive disorder that may not be excluded as a mental or nervous disorder.',
            },
            {
              text: 'A pre-existing condition can be used only if it was treated more than 6 months before the effective date.',
              why: 'The definition runs the other way. It is a condition for which advice or treatment was recommended or received within the 6 months before the effective date.',
            },
          ],
        ),
        question(
          'c13q20',
          'How can an individual long-term care policy lapse, and what can it not require before benefits?',
          [
            {
              text: 'It cannot lapse for nonpayment unless the insurer gives 30 days’ written notice. The applicant must name a secondary addressee or sign a waiver. The policy cannot require a prior hospitalization, and it cannot cover skilled care only.',
              why: 'The insurer reminds the insured at least every 2 years of the right to change the secondary addressee. A premium increase requires at least 45 days’ notice. A replacement must waive pre-existing, waiting, and probationary time already satisfied for similar benefits. Group coverage must offer continuation or conversion unless nonpayment is paired with a qualifying replacement within 31 days.',
              correct: true,
            },
            {
              text: 'The policy lapses on the premium due date with no notice, and benefits can require a prior hospital stay.',
              why: 'Thirty days’ written notice is required before lapse for nonpayment. A prior hospitalization requirement is prohibited, except that waiver of premium, post-confinement, post-acute care, or recuperative benefits may use a prior-institutionalization rule.',
            },
            {
              text: 'Notice of lapse goes only to the insured, and a new waiting period starts whenever the same company replaces the policy.',
              why: 'Someone besides the applicant is designated to receive lapse notices, unless the applicant waives that in writing. A new waiting period is not allowed when the same company converts or replaces the coverage, except for a benefit increase the insured voluntarily selects.',
            },
            {
              text: 'The free look is 10 days, and the insurer may cancel the policy because the insured’s health declined.',
              why: 'The free look is 30 days for individual policyholders and for group certificate holders who pay toward the coverage. Cancellation solely for age or a decline in mental or physical health is prohibited.',
            },
          ],
        ),
      ],
    },

  ],
}

for (const section of chapter13.sections) {
  section.questions.push(...(chapter13Extra[section.id] ?? []))
}
