import { question } from './build.ts'
import type { Chapter } from './types.ts'
import { chapter13Extra } from './extra/chapter13.ts'

/**
 * Section text is the current study wording.
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
      body: `Medicare is the federal program that pays medical expenses for people age 65 and older. Working past 65 does not take that eligibility away. Two groups can qualify at any age. One is a person who has been entitled to Social Security disability income benefits for 2 years. The other is a person with permanent kidney failure, called end-stage renal disease.

A recent green-card holder or a new immigrant who is 65 or older, and who never worked in the United States, may not qualify immediately. Buying Medicare is still allowed at 65 or older when free Medicare is not available, in either of two situations. The person has just become a U.S. citizen by naturalization and does not have enough quarters for Social Security coverage. Or the person is a lawfully admitted alien who has lived in the United States constantly for 5 years or longer and does not qualify for Social Security benefits.

Medicare is run by the Centers for Medicare & Medicaid Services (CMS), which is part of the United States Department of Health and Human Services. Coverage is split into four parts.

• Part A is hospital insurance. A portion of the payroll tax, FICA, finances it.
• Part B is medical insurance. Insureds pay monthly premiums, and general revenues of the federal government pay the rest.
• Part C is Medicare Advantage. People receive all of their health care services through available provider organizations.
• Part D is prescription drug coverage.

Original Medicare is only Part A plus Part B. Care is covered from any doctor, provider, hospital, or facility that accepts Medicare patients. Prescription drugs are usually not included. The patient does not pick a primary care doctor, and a referral is not required to see a specialist, as long as that specialist is enrolled in Medicare.

These words come up with these policies.

• Attained age. How old the insured is when the policy is issued or renewed.
• Benefit period. The stretch of time during which benefits are paid.
• Cost-sharing. The insured and the insurer divide expenses through deductibles, copays, and coinsurance.
• Enrollee. A person enrolled in a health plan. That person is an insured. Dependents of the insured are not included in this word.
• HMO. A prepaid medical service plan. Specified providers contract with the organization, and the focus is preventive care.
• Network provider. A provider who contracts with other providers to serve the network's subscribers.
• Nonforfeiture benefit. Cash or insurance that a policyholder receives after deciding to stop paying premiums, once the minimum period has been paid.
• Outline of coverage. A document every health insurance policy must include so the applicant gets a full disclosure of the coverage.`,
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
      body: `Hospital coverage under Medicare Part A is available in any one of these situations.

• The person is a U.S. citizen or legal resident, age 65 or over, and qualified for Social Security or Railroad Retirement benefits.
• The person is age 65 or over and entitled to monthly Social Security benefits based on a spouse's work record, and that spouse is at least 62.
• The person is younger than 65 and has been entitled to Social Security disability benefits for 24 months.
• The person has end-stage renal disease: permanent kidney failure that requires dialysis or a transplant.
• The person has ALS, Lou Gehrig's disease. Part A starts automatically in the month disability benefits begin.

Someone who is not already receiving those benefits still has to sign up for Part A, even when premium-free Part A is available. A monthly premium is charged when the beneficiary is not fully insured under Social Security. Fully insured means 40 quarters of coverage, which is 10 years of work. In 2026, fewer than 30 quarters of Medicare taxes produces a Part A premium of $565 a month. From 30 to 39 quarters, the 2026 premium is $311 a month (CMS).

Signup happens in one of three windows.

• Initial enrollment period. It opens when the person first becomes eligible: 3 months before the 65th birthday, and it closes 3 months after that birthday.
• General enrollment period. January 1 through March 31 of each year.
• Special enrollment period. Any time of year, if the person or the person's spouse is still employed and covered by a group health plan.

A person who does not qualify for premium-free Part A can buy it. Missing the first chance to sign up can raise the monthly premium by 10%, unless a special enrollment period later applies.`,
      questions: [
        question(
          'c13q02',
          'What is the standard Part A premium when the person is not fully insured?',
          [
            {
              text: '$565 a month if Medicare taxes were paid for fewer than 30 quarters, and $311 if they were paid for 30 to 39 quarters.',
              why: 'In 2026, fewer than 30 quarters produces a Part A premium of $565 a month, and 30 to 39 quarters produces $311 a month. Premium-free Part A requires 40 quarters of coverage, the equivalent of 10 years of work. A late signup may raise the monthly premium 10%, unless a special enrollment period applies.',
              correct: true,
            },
            {
              text: '$311 for fewer than 30 quarters, and no premium after 30 quarters.',
              why: 'Fewer than 30 quarters is the $565 premium. Thirty to 39 quarters is $311. Forty quarters is the fully insured amount that brings premium-free Part A.',
            },
            {
              text: 'Part A is always free at age 65, and the $565 figure is the Part B deductible.',
              why: 'Part A is premium-free only when the person is fully insured. The course states the $565 and $311 premiums for people who paid Medicare taxes for fewer quarters.',
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
      body: `Part A helps with four settings: an inpatient hospital stay, inpatient care in a skilled nursing facility, home health care, and hospice.

Hospital inpatient care can run as long as 90 days in a participating hospital during one benefit period. In 2026 the Part A deductible is $1,736 per benefit period (CMS). Once that deductible is met, the first 60 days are covered at 100% of approved charges. The next 30 days, days 61 through 90, are paid with a daily copayment. In 2026 that copayment is $434 a day. On top of those 90 days, every Part A insured has a lifetime reserve of 60 days. A reserve day costs twice the days 61 through 90 copayment. In 2026 that is $868 a day, and those reserve days never renew. When the reserve is used up, Medicare pays nothing. If the inpatient hospital benefit goes unused for 60 days, a new benefit period begins and a new deductible is due.

The hospital benefit includes a semi-private room, meals, regular nursing services, operating and recovery room costs, hospital costs for anesthesia, intensive care and coronary care, drugs, lab tests, X-rays, medical supplies, appliances, rehabilitation services, and preparatory services related to kidney transplant surgery. Blood is covered except for the first 3 pints. Left out are private-duty nursing, a television, a telephone in the room, and a private room unless the private room is medically necessary. Inpatient mental health care in a psychiatric facility stops at 190 days in a lifetime.

A skilled nursing facility can be covered for up to 100 days in each benefit period. The stay has to follow a 3-day inpatient hospital stay for a related illness, and the doctor must certify that daily skilled care is necessary. The first 20 days are paid at 100% of the approved amount. Days 21 through 100 are paid except for a daily coinsurance. In 2026 that coinsurance is $217 a day (CMS). Past day 100, Medicare pays nothing.

Home health visits can be paid at the full approved cost when the person is confined to the home, meets the other conditions, and uses a participating home health agency. Covered visits are not capped. The list includes part-time skilled nursing care, physical therapy, and speech therapy, plus part-time home health aides, occupational therapy, medical social services, and medical supplies and equipment. Durable medical equipment is split: Medicare pays 80% of the approved amount, and the person pays 20%.

Hospice is available to a terminally ill insured when a Medicare-certified hospice provides it, and it lasts as long as the doctor certifies the need. Covered services are doctor and nursing services, medical appliances, supplies including outpatient drugs for pain relief, home health aide and homemaker services, therapies, medical social services, short-term inpatient care including respite care, and counseling. Outpatient drugs and inpatient respite care carry limited cost sharing.

Blood is counted across parts. If 3 pints are paid for or replaced under one part of Medicare during the calendar year, they do not have to be paid for or replaced again under the other part.`,
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
      body: `Part B pays doctors and the other medical services and supplies that hospital insurance leaves out. Most care for permanent kidney failure is covered only by this medical insurance. Part B is optional. Everyone who enrolls in Part A is offered it. Monthly premiums and general federal revenues pay for it. Most people pay the standard monthly premium. In 2026 that standard premium is $202.90 a month, and the annual Part B deductible is $283 (CMS). A higher premium can apply when modified adjusted gross income on the IRS return is above a certain amount.

At the moment Part A eligibility begins, the person is told that Part B will start and must be paid for unless it is declined. Declining and later changing that decision means waiting for the next general enrollment period, January 1 through March 31.

After the annual medical insurance deductible is met, Part B generally pays 80% of approved charges for the rest of the year. The remaining 20% coinsurance has no maximum out-of-pocket limit. The deductible is once a year. After it is reached, it does not apply to other covered services received during the rest of that year.

Doctor services are covered anywhere in the United States. That includes surgical services, diagnostic tests and X-rays that are part of the treatment, medical supplies furnished in a doctor's office, and the office nurse. Outpatient hospital services for diagnosis and treatment are covered too, such as an emergency room or an outpatient clinic. Clinical laboratory services are generally paid at 100% of the approved amount. Outpatient hospital treatment is paid from hospital cost, and the person pays 20% of the billed amount after the deductible.

Home health services under Part B require a doctor's recommendation and eligibility. They are part-time, with limits on hours per day and days per week. Medicaid may cover services Medicare does not fully cover. Other items are covered within limits: ambulance transportation, home dialysis equipment and supplies, periodic support services, independent laboratory tests, oral surgery, outpatient physical therapy and speech pathology, and X-rays and radiation treatments.

Drugs under Part B are narrow. Coverage is limited to medicines given in a hospital outpatient department in certain circumstances, such as injected drugs at a doctor's office, some oral cancer drugs, or drugs that need durable medical equipment such as a nebulizer or an infusion pump. Most other prescription drugs are paid 100% by the person unless Part D covers them.

Outpatient treatment of an approved mental condition, such as depression or anxiety, can be given in a doctor's office, another provider's office, or a hospital outpatient department. The enrollee generally pays 20% of the Medicare-approved amount, and the Part B deductible applies. Inpatient mental health care is a Part A benefit.

Prevention has two visits. A Welcome to Medicare preventive visit is available in the first 12 months. After that, an annual wellness visit develops or updates a plan for disease prevention. That wellness visit has no out-of-pocket cost when the doctor or other qualified provider accepts assignment. Extra tests or services outside the preventive benefit can require coinsurance, and the Part B deductible may apply. A Pap smear to screen for cervical cancer is covered once every 2 years.

Part B excludes private-duty nursing, skilled nursing home care costs over 100 days per benefit period, intermediate nursing home care, physician charges above Medicare's approved amount, most outpatient prescription drugs, care received outside the United States, custodial care received in the home, dental care except dental expenses resulting from an accident, cosmetic surgery, eyeglasses, hearing aids, orthopedic shoes, acupuncture, and expenses from a war or an act of war.

Claims use these words.

• Actual charge. What a physician or supplier bills.
• Approved amount. What Medicare decides is reasonable for a service covered under Part B.
• Assignment. The physician or supplier agrees to take the Medicare-approved amount as full payment.
• Excess charge. The gap between the Medicare-approved amount and the actual charge.
• Limiting charge. The most a physician may bill a Medicare beneficiary for a covered service when the physician does not accept assignment.
• Participating doctors and suppliers agree in advance to accept assignment on all Medicare claims. Nonparticipating doctors or suppliers may decide, claim by claim, whether to accept assignment.
• Carriers process claims from doctors and suppliers. Intermediaries process inpatient and outpatient claims from hospitals, skilled nursing facilities, home health agencies, hospices, and certain other providers.
• Peer review organizations are groups of practicing doctors and other professionals. The government pays them to review care given to Medicare patients.
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
      body: `Part C was renamed by the Medicare Modernization Act of 2003. The old name, Medicare+Choice, became Medicare Advantage. An Advantage plan has to cover every service Original Medicare covers, with two exceptions: hospice care, and some care in qualifying clinical research studies. Out-of-pocket costs may be lower than under Original Medicare. Extra benefits may include vision, hearing, dental, and other health and wellness programs.

Eligibility requires enrollment in both Part A and Part B. The coverage is Medicare delivered by an approved HMO or PPO. Many of those plans charge no premium beyond what Medicare pays. Claim forms may be absent. Almost any medical problem may be covered for a set fee, which makes costs easier to budget. The plan may pay for care that Medicare or a Medicare supplement usually leaves out, such as prescriptions, eye exams, hearing aids, or dental care.

Most Medicare HMOs require care through the plan, except in an emergency. A few plans allow more freedom through a point-of-service option.

A Medicare private fee-for-service plan is an Advantage plan from a private insurance company. Medicare pays that company a set amount each month. The company, not Medicare, decides what enrollees pay for the services they receive.

Special Needs Plans focus on particular groups: people who have both Medicare and Medicaid, people who live in a nursing home, and people with certain chronic medical conditions.`,
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
      body: `Optional prescription drug coverage, Part D, was added by the Medicare Prescription Drug, Improvement, and Modernization Act of 2003. The act passed in November 2003. Private drug plans contract with Medicare. Benefits require signing up with a plan offered in the person's area, and the person must be enrolled in Part A, or in Parts A and B. If no private plan is offered in the area, the government offers a standard plan. People on Medicaid are enrolled automatically.

Delay has a price. A beneficiary who does not enroll when first eligible, and who goes without creditable drug coverage, pays a late-enrollment penalty of 1% of the national base beneficiary premium for each full uncovered month. The penalty is added to the premium for as long as the person has Part D. The person may choose a stand-alone plan on a fee-for-service basis, or an integrated plan that groups coverages together. Those integrated plans include PPOs and HMOs and are known as Medicare Advantage.

A private plan must meet Medicare standards. It may still shape the benefit its own way. Drugs in certain classes must be covered. Every drug in a class does not have to be covered.

In 2026 the standard benefit has no coverage gap. The deductible cannot be more than $615. After the deductible, the enrollee generally pays 25% of the cost of covered drugs until out-of-pocket spending on covered Part D drugs reaches $2,100. Catastrophic coverage then begins, and the enrollee pays nothing for covered Part D drugs for the rest of the year. People with low income may qualify for Extra Help, which can lower premiums and cost sharing (CMS, Final CY 2026 Part D Redesign Program Instructions; Medicare.gov, 2026).

A formulary, also called a drug list, is the list of prescription drugs the plan covers. Each plan files its formulary once a year. Insureds must be told when the list changes. Drugs sit in tiers. A drug in a lower tier costs less than a drug in a higher tier. Each treatment category must contain at least 2 drugs. The formulary does not have to include every drug.`,
      questions: [
        question(
          'c13q09',
          'Under the 2026 standard drug benefit, what does the enrollee pay after the deductible, and what is the late-enrollment penalty?',
          [
            {
              text: 'The deductible cannot be more than $615. After it, the enrollee generally pays 25% until out-of-pocket spending reaches $2,100. Catastrophic coverage then begins and the enrollee pays nothing. There is no coverage gap. The penalty is 1% of the national base beneficiary premium for each full uncovered month, for as long as the person has Part D.',
              why: 'The person must be enrolled in Part A, or in Parts A and B, and must join a plan in the area. A formulary must include at least two drugs in each treatment category, is filed annually, and uses tiers. In 2026 there is no coverage gap. Low-income beneficiaries can receive Extra Help.',
              correct: true,
            },
            {
              text: 'Medicare pays 80% after a combined $4,660, and the penalty is a one-time 10% increase.',
              why: 'Eighty percent is the Part B coinsurance pattern. The 2026 Part D benefit has no coverage gap. After the deductible the enrollee pays 25% until out-of-pocket spending reaches $2,100, then nothing. The penalty is 1% of the national base beneficiary premium per uncovered month, not a one-time 10%.',
            },
            {
              text: 'Coverage stops at $2,100, and the person must pay 100% after that.',
              why: 'Reaching $2,100 in out-of-pocket spending starts catastrophic coverage. The enrollee pays nothing for covered drugs for the rest of the year.',
            },
            {
              text: 'There is no deductible or premium, and every drug in every class must be covered.',
              why: 'The standard plan has a premium, and the 2026 deductible cannot be more than $615. Plans must cover drugs for certain classes and at least two drugs in each treatment category. They do not have to cover every drug.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c13-primary',
      title: 'Which plan pays first',
      body: `Federal law makes the employer's plan primary for active older employees no matter how old they are. In the usual case the employer plan pays first and Medicare pays second.

Large groups are treated separately for disability. The Omnibus Budget Reconciliation Act of 1990 requires a large group health plan, one with 100 employees or more, to provide primary coverage for a disabled person under age 65 who is not retired.

End-stage renal disease has its own clock. That same act, as amended by the Balanced Budget Act of 1997, requires the employer health plan to stay primary for 30 months. Medicare becomes primary after those 30 months.

A person still working at 65 must be allowed to remain on the group plan and put off Medicare until retirement. The employee may turn down the company plan and take Medicare instead. The company cannot offer an incentive to make that switch. If the employee keeps the group plan and also enrolls in Medicare, which plan pays first depends on the size of the group. Fewer than 20 employees means Medicare is primary. A group of 20 or more means the group coverage is primary over Medicare.`,
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
      body: `A Medicare supplement, called Medigap, is a private policy that fills some of what Medicare does not pay: deductibles, copayments, and benefit periods. Social Security does not run these policies. Private insurers and HMOs sell and service them. The policy has to meet set requirements and be approved by the state department of insurance.

A standardized model came from the NAIC under authority in the Omnibus Budget Reconciliation Act of 1990. The aim was to stop questionable marketing, protect consumers, and make that protection the same from policy to policy. During open enrollment the company may not price a supplement in a discriminatory way, and it may not deny one because of health status, claims experience, receipt of health care, or medical condition. Open enrollment is a 6-month period. It guarantees the right to buy Medigap once the person first signs up for Medicare Part B. The applicant generally must already have both Part A and Part B.

Medigap cannot be used to pay a Medicare Advantage copayment, deductible, or premium. A company may not sell a supplement to someone who is already on Medicaid.

The standard plans use the letters A through N. Plan A's core benefits have to appear in every plan. Any insurer that markets Medigap must offer Plan A. The other letters are optional. Open enrollment is guaranteed issue. The company must sell the policy, it must cover pre-existing conditions incurred more than 6 months from the effective date, and it must not charge more because of past or present health problems.

Plan A, the core, pays Part A coinsurance or copayment. It does not pay the Part A deductible. It pays Part A hospital costs for up to an additional 365 days after Medicare benefits are used up. It pays Part A hospice care coinsurance or copayment, Part B coinsurance or copayment, and the first 3 pints of blood. Those 3 pints are the blood deductible for Parts A and B.

An insurer may not change what a standard plan pays, and it may not change a plan's letter.

• Plan B adds the Medicare Part A deductible.
• Plan D adds the Part A deductible, skilled nursing facility coinsurance, and the foreign travel benefit.
• Plan G covers Part A coinsurance and hospital costs, including up to an additional 365 days after Medicare benefits are used up, Part B coinsurance or copayment, the first 3 pints of blood, Part A hospice coinsurance or copayment, skilled nursing facility coinsurance, the Part A deductible, Part B excess charges, and foreign travel emergency care up to the plan limits. It does not cover the Part B deductible. Medigap does not cover custodial help with activities of daily living.
• Plans C, E, F, H, and J are no longer available. A policy someone already bought stays in force.
• Plans K and L cost less in premium and more out of pocket. They cover hospital copayments for days 61 through 90, lifetime reserve days 91 through 150, and an additional 365 hospital days after Medicare benefits are used. Plan K pays 50% of the first 3 pints of blood, 50% of Part B coinsurance, and 50% of Part A hospice cost sharing and respite care. Plan L pays 75% of those amounts. Plan K also includes 50% of the Part A deductible and 50% of skilled nursing facility coinsurance. Plan L includes 75% of each of those.
• Plans M and N are similar to Plan D. Their copays and deductibles might differ.`,
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
      body: `Medicare SELECT is a Medicare supplement that limits the network. Benefits, in whole or in part, are paid only when network providers are used. The plan negotiates lower rates with doctors, hospitals, and specialists. It works like an HMO, and the premium is lower.

The head of the state's department of insurance must approve each policy. A new SELECT policy cannot be sold to someone whose primary residence is outside the issuer's service area.

The policy has to do five things. It pays full coverage for a covered service that the network cannot provide. It does not restrict payment for a non-network provider when symptoms require emergency care and it is not reasonable to get that care through the network. It gives every applicant a full and fair written disclosure of the provisions, restrictions, and limitations. On request, the same issuer must offer a Medicare supplement with comparable benefits and no restricted network. That unrestricted policy must be available without evidence of insurability once the SELECT policy has been in force for 6 months. If the SELECT program fails and the policies are discontinued, coverage must continue.

Proposed changes to the plan of operation are filed with the Commissioner before they are used. A change to the list of network providers is filed with the Commissioner within 30 days.`,
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
      body: `Every company needs marketing procedures that keep agents' policy comparisons fair and accurate, guidelines that stop excessive insurance from being sold or issued, and a formula that decides whether a replacement's benefits are clearly and substantially greater than the benefits being replaced. The first page must contain this notice: "Notice to buyer: This policy may not cover all of your medical expenses."

The company has to make a reasonable effort to find out whether the applicant already owns accident and sickness insurance, and what types and amounts. Twisting, high-pressure tactics, and misleading advertising are not allowed. The words Medicare Supplement, Medigap, Medicare Wrap-Around, and similar words are reserved for a policy that fully complies with the law. Any Medicare supplement advertisement meant for use in this state, whether it is in writing, on radio, electronic, or on television, goes to the Insurance Commissioner for review or approval.

The agent must make a reasonable effort to decide that a recommended purchase or replacement fits the applicant. The application includes this signed statement: "I have reviewed the current health insurance coverage of the applicant and found that additional coverage of the type and amount applied for is appropriate for the applicant's needs." Selling someone more than one Medicare supplement policy is prohibited.

Each policy has a 30-day free look. The insured can return it for a full refund for any reason. The right-to-return notice has to be prominent on the first page of the policy or certificate, or attached to it. The application asks whether the applicant already has another Medicare supplement or is replacing any other accident and health policy. It asks whether the applicant is eligible for Medicaid. It says that counseling services may be available. When a replacement is involved, the Notice Regarding Replacement is given before the policy is issued or delivered. That notice tells the applicant about the 30-day free look. The company keeps a copy signed by both the applicant and the agent.

Replacement changes the time limits. The new company waives pre-existing condition limits, waiting periods, elimination periods, and probationary periods to the extent the applicant already satisfied them. If the policy being replaced has been in effect for 6 months or more, the new policy may not impose any of those time requirements on benefits that are similar to the original policy. A pre-existing limitation has to sit in its own paragraph labeled Pre-existing Condition Limitations. Usually the policy must cover a pre-existing condition incurred more than 6 months from the effective date.

The policyholder is told about the 30-day return right. When Medicare benefits change, the issuer notifies policyholders of the resulting changes to the supplement no later than 30 days before those Medicare changes take effect. An outline of coverage is delivered at application. Except on a direct-response policy, the company gets a receipt. An issuer of a hospital or medical expense policy, whether the policy pays expenses as incurred or pays an indemnity, must give the Guide to Health Insurance for People with Medicare to an applicant who is eligible for Medicare. Almost all insurers hand that guide over at application. A direct-response insurer may supply it when asked, but no later than policy delivery.

Pay for selling or renewing a supplement counts as compensation, whether the pay is money or not. Bonuses, gifts, prizes, awards, and finder's fees are included. First-year commission may not exceed 200% of the renewal commission paid for servicing the policy in the second year. Renewal-year commissions must equal that second-year commission, and they must be paid for at least 5 renewal years. On a replacement, the agent may not be paid more than the renewal compensation of the replacing company, unless the new benefits are clearly and substantially greater.

A policy that takes effect on or after June 1, 2010, cannot reduce, restrict, or duplicate Medicare benefits. It cannot exclude or limit a loss from a pre-existing condition if that loss occurred more than 6 months before the effective date. A loss from sickness must be treated the same as a loss from an accident. The policy must be guaranteed renewable.`,
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
      body: `The Medicare Improvements for Patients and Providers Act of 2008 changed the Social Security Act. It extended Medicare provisions that were about to expire, widened access to preventive care and mental health care, strengthened benefits for people with low income, and kept care available in rural areas.

The act funds several specific efforts. It authorizes grants so veterans of Operation Iraqi Freedom and Operation Enduring Freedom who live in rural areas can get more mental health care and other care. It pays incentives for electronic prescriptions. It allows the Medicare Medical Home Demonstration Project to expand when quality and spending conditions are met. It directs programs that raise awareness of chronic kidney disease and screen for it, and it extends Medicare coverage to education for kidney-disease patients. It revises the rules for certain non-employer Medicare Advantage private fee-for-service plans and for special-needs plans. It limits out-of-pocket costs for dual eligibles and for beneficiaries in a specialized Medicare Advantage plan for special-needs individuals.

Part D claims have a payment rule. Prescription drug plans and Medicare Advantage drug plans must pay clean claims promptly, and interest is owed on a late claim. A pharmacy located in a long-term care facility, or contracting with one, has between 30 and 90 days to submit claims. The Secretary must identify medications for which restricted access would have major consequences, and for which there is a significant clinical need for access to multiple drugs in a class.

Two consumer rules sit alongside those payment rules. Copayments are eliminated for Medicare psychiatric services when the person is not a hospital inpatient at the time the expenses are incurred. Certain sales tactics are prohibited for Medicare Advantage and for prescription-drug plans: gifts or prizes used to induce enrollment, unsolicited direct contact, cross-selling nonhealth products such as annuities and life insurance during a Medicare Advantage sales presentation, and meals for prospective enrollees. The act changed the rules for the Part D low-income subsidy, also called Extra Help. It did not eliminate the Part D late-enrollment penalty. That penalty remains 1% of the national base beneficiary premium for each month without creditable coverage, and it lasts as long as the person has Part D.`,
      questions: [
        question(
          'c13q16',
          'Which sales practice does the 2008 Medicare Improvements for Patients and Providers Act prohibit?',
          [
            {
              text: 'Gifts or prizes as an enrollment inducement, unsolicited direct contact, cross-selling nonhealth products such as annuities or life insurance during a Medicare Advantage presentation, and meals for prospective enrollees.',
              why: 'The act also eliminates copayments for outpatient Medicare psychiatric services. It changed the Part D low-income subsidy, also called Extra Help. It did not eliminate the Part D late-enrollment penalty. A long-term care pharmacy has 30 to 90 days to submit drug-plan claims.',
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
      body: `Medicaid is paid for by the federal government and the state. It serves people whose income and resources are not enough for necessary medical care. Each state designs and runs its own program through that state's Medicaid agency, inside broad federal guidelines. In Utah, that agency is the Utah Department of Health and Human Services.

Income and other eligibility rules both apply. Once low income and low assets are shown, other qualifiers can include blindness, disability, pregnancy, age over 65, or caring for children who receive welfare benefits. For many groups, income is measured as a percentage of the federal poverty level. After the Affordable Care Act, states look first at data from sources such as the Social Security Administration and the Departments of Homeland Security and Labor, rather than at paper collected from families. The person must also meet federal and state rules on residency, immigration status, and documentation of U.S. citizenship.

A state must provide at least these services: physician services, inpatient and outpatient hospital care, skilled nursing home services, laboratory and X-ray services, home health care, rural health clinic services, periodic screening, diagnosis, and treatment, and family planning services. Medicaid also pays for prescription drugs, dental services, private-duty nursing, eyeglasses, check-ups, and medical supplies and equipment.`,
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
      body: `Long-term care insurance is sold three ways: as an individual policy, as a group policy, or as a rider on a life insurance policy. It is for a person who can no longer live independently and needs help at home or in a nursing home. Policies differ in days of confinement, the number of home health visits, how much is paid for nursing home care, and other terms. The minimum is 12 consecutive months of care in a setting other than an acute care unit of a hospital.

Payment normally depends on the insured being unable to perform some activities of daily living. Those activities are bathing, dressing, toileting, transferring positions (also called mobility), continence, and eating.

An elimination period, also called a waiting period, works the way it does on disability income insurance. The range is 0 to 365 days. A longer wait means a lower premium, and the insured can usually choose the length. After that wait, the benefit period is usually 2 to 5 years. A few policies pay for life. A longer benefit period means a higher premium.

The daily benefit is usually a fixed dollar amount, not the bill. A policy that pays $210 a day still pays the full $210 when the memory-care wing charges $185. Some policies instead pay the actual charge. Most policies are guaranteed renewable. The insurer may still raise the premium.

On an individual policy, the renewability provision is printed on the first page. Renewal may not be less favorable than guaranteed renewable or noncancellable. The insurer may not cancel, refuse to renew, or otherwise end coverage only because the insured got older or because mental or physical health got worse.

Every policy must offer a way to buy coverage that increases benefits for increases in the cost of the covered services that can reasonably be expected.

Exclusions may include a pre-existing condition or disease, a mental or nervous disorder or disease, alcoholism and drug addiction, illness caused by war, criminal activity, or attempted suicide, and treatment that is payable by the government, Medicare, workers compensation, or similar coverage. The mental and nervous exclusion does not apply to an organic cognitive disorder such as Alzheimer's disease, senile dementia, or Parkinson's disease.

Care is usually described in three levels, and a policy may also cover home health care, adult day care, hospice, or respite care. Respite care can be received at home.

• Skilled care is daily nursing and rehabilitative care that only medical personnel can give, and a physician directs it. It is almost always provided in an institution. Changing a sterile dressing, and physical therapy in a skilled nursing facility, are examples. Care that nonprofessional staff can give is not skilled care.
• Intermediate care is occasional nursing or rehabilitative care. The condition is stable, and it needs daily medical assistance less often than skilled care. A physician orders it. Skilled personnel deliver it or monitor it. Giving medication or changing a bandage can qualify. The setting can be a nursing home, an intermediate-care unit, or the patient's home.
• Custodial care meets personal needs such as eating, dressing, or bathing. Nonmedical personnel can provide it, including relatives or home health workers, in an institution or at home. It is help with activities of daily living. It is not hospital or surgical care.
• Home health care is skilled nursing or another professional service in the home. Visitors can include registered nurses, licensed practical nurses, licensed vocational nurses, or a community organization such as hospice. Physical, occupational, and speech therapy can be included, as can medical services by a social worker.
• Adult day care is for a functionally impaired adult, for less than 24 hours. A recreation center or a community center may provide it, including transportation, health and social activities, and usually meals.
• Respite care gives the family caregiver a break. Someone might stay in the home while the caregiver rests or goes out. Adult day care centers provide this relief as well.

The Community Living Assistance Services and Support (CLASS) Act is a voluntary program Congress proposed for people and families with limited resources who need nonmedical services in communities across the United States. A monthly payroll deduction would pay for the services. The person must be 18 or older and must have paid monthly premiums for at least 5 years. A working adult may opt out.

A contract is a qualified long-term care contract only when all of the following are true. The only protection is coverage of qualified long-term care services. It does not pay expenses that are reimbursable under Title XVIII of the Social Security Act. It is guaranteed renewable. Premium refunds and dividends are used to reduce future premiums or to increase future benefits so inflation is offset. It meets the consumer-protection provisions on model regulation and model act provisions, disclosure, and nonforfeitability. Only a product that meets that qualified definition may be marketed as a partnership long-term care plan.`,
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
      body: `Each company must keep marketing procedures that make policy comparisons fair and accurate, and guidelines that keep excessive insurance from being sold. Four acts are prohibited: twisting, high-pressure tactics, cold-lead advertising, and misrepresentation.

Twisting is a knowing act. The producer makes a misleading representation, or an incomplete or fraudulent comparison, in order to induce a person to lapse, forfeit, surrender, terminate, retain, pledge, assign, borrow on, or convert a policy, or to take a policy with another insurer. High-pressure tactics use force, fright, threat, or undue pressure. Cold-lead advertising fails to disclose, conspicuously, that the purpose is solicitation and that an agent or a company will make contact.

Any long-term care advertisement intended for Utah, whether written, radio, or television, must be given to the Commissioner when the Commissioner asks for it. The insurer keeps each advertisement at least 3 years from the date it was first used.

A Shopper's Guide in the NAIC format is delivered before the application is completed when a producer solicits the sale. On a direct-response solicitation, the guide goes out together with the application. The outline of coverage uses the standard format. It names the company, the policy number, and the important features. It is a separate document. Type is no smaller than 10 point. It is delivered before the application or the enrollment form, and it cannot contain advertising.

Suitability standards are required, and agents are trained to use them. The applicant receives the Long-Term Care Insurance Personal Worksheet. That worksheet covers the premium, the type of policy, the history of rate increases, and questions about income, savings, and investments. A copy is filed with the Commissioner.

An individual policyholder, and a group certificate holder who pays toward the cost, may return the policy within 30 days of delivery and get the premium back if not satisfied for any reason. Renewability is stated on the first page, and it may not be less favorable than guaranteed renewable or noncancellable. Coverage may not be ended only because of age or because mental or physical health declined.

Group long-term care issued in this state must provide a basis for continuation or conversion. The insurer provides that continuation, or the converted policy, unless both of these are true: termination was for failure to pay a required premium, and the coverage is replaced no later than 31 days after termination. The replacement group coverage must take effect the day after termination, provide benefits that are identical or greater, and calculate the premium in a consistent way.

Inflation protection is offered when the policy is bought. The offer may not be less favorable than one of three designs. Benefits may increase by compounding annually at a rate of at least 5%. Benefits may increase periodically with no evidence of insurability or health status, if the insured did not decline the option for the previous period. Or the policy may cover a specified percentage of actual charges and not be subject to a maximum indemnity. The outline includes a graphic that compares increasing benefits with level benefits over at least 20 years, and it shows any expected premium increase tied to an automatic or optional benefit increase.

A pre-existing condition is one for which a health care provider recommended, or the insured received, medical advice or treatment within 6 months before the effective date. Using that definition does not stop the insurer from asking for a complete health history. Any limit on a pre-existing condition is a separate paragraph labeled Pre-existing Condition Limitations.

The policy discloses whether it is renewable. Riders and endorsements are disclosed. If the policy uses the words usual and customary, or reasonable and customary, the meaning of those words is disclosed. Any other limit on eligibility is disclosed. A life policy that accelerates benefits for long-term care must say that those accelerated benefits may be taxable and that the insured should ask a personal tax advisor. That statement is prominent on the first page of the policy or the rider and on related documents.

An individual policy cannot be issued until one of two things is on file. The insurer has a written designation of at least one person, other than the applicant, who will receive notice of lapse or termination for nonpayment. Or the applicant has signed and dated a waiver of that designation. This is the secondary-addressee provision. At least once every 2 years, the insurer tells the insured about the right to change that person. If premiums are paid through a payroll or pension plan, these requirements wait until 60 days after the insured leaves that payment method. The policy cannot lapse for nonpayment unless the insurer has given 30 days' written notice.

Several contract limits follow. The policy may not be canceled or nonrenewed because of age or because mental or physical health deteriorated. It may not start a new waiting period when existing coverage is converted, or replaced by another form in the same company, except for a benefit increase the insured chooses voluntarily. It may not cover skilled nursing care only, and it may not provide significantly more coverage for skilled care in a facility than it provides for lower levels of care. Eligibility may not require a prior hospitalization, a higher level of institutional care before institutional benefits begin, or prior institutionalization. Those prior-stay requirements are allowed only for waiver of premium, post-confinement, post-acute care, or recuperative benefits.

On a replacement, the new company waives pre-existing, waiting, and probationary periods for similar benefits, to the extent the insured had already satisfied those exclusions.

A disclosure of potential rate increases is given at application or enrollment, or when the approved policy is delivered. If the premium can go up, the insurer says so, explains the options if a revision happens, shows the rates that stay in effect until an increase is requested, explains when an adjustment takes effect, and gives the premium-increase history for that form, or a similar form, for the past 10 years. The applicant signs an acknowledgment. The insurer notifies the policyowner at least 45 days before a premium increase.`,
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
