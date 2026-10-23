import { question } from './build.ts'
import type { Chapter } from './types.ts'
import { chapter9Extra } from './extra/chapter9.ts'

/**
 * Wording follows the course OCR in content/source/chapter-9-ocr.txt.
 * The source pages have no practice questions. Questions are written from that text,
 * four options each, with a reason for the right answer and for each wrong one.
 */
export const chapter9: Chapter = {
  id: 'ch-disability',
  number: 12,
  title: 'Disability Insurance: Pay When You Can’t Work',
  summary:
    'How a person qualifies for disability benefits, how individual and group plans pay, and what Social Security disability adds.',
  sections: [
    {
      id: 'c9-qualify',
      title: 'What disability income insurance does',
      body: `Disability income insurance replaces lost income. The key is which injuries qualify, how much is paid, and how long payments last. There is a 30% chance that a 25-year-old will be disabled for more than 90 days before age 65. A premature death before 65 is far less likely. For most people, employment income stops after a brief time away from work, and savings then have to cover food, rent, and utilities. Coverage may be bought individually or through an employer.

Benefits are limited to a percentage of earned income so the claimant has a financial incentive to return to work. Earned income is salary, wages, or commissions, not investment income, unemployment benefits, or similar sources. A person becomes eligible when the sickness or injury meets the company’s definition of disability. That definition varies, and the applicant and the producer need to know the benefit trigger.

An own-occupation policy pays when the insured cannot perform any duties of the insured’s own occupation because of sickness or accident. That definition is usually limited to the first 24 months after a loss. The insured can receive benefits even if income could be earned in a different occupation. After 24 months, if the insured still cannot perform the duties of the insured’s own occupation, disability narrows to the inability to perform any occupation for which the insured is reasonably suited by education, training, or experience. That sharply reduces the insurer’s liability, because a claimant can often find some work. Own occupation is generally used for highly trained occupations such as surgeons and trial attorneys.

An any-occupation provision pays only when the insured cannot perform any duties of an occupation for which the insured is suited by education, training, or experience. Own occupation is the more liberal definition and the better benefit. Some companies still combine both definitions. From an underwriting standpoint, any occupation is easier for the company to justify.

Terms used in this chapter:
• Benefit period — the time during which benefits are paid.
• Capital sum — a portion of the principal sum, paid for accidental dismemberment or loss of sight in one eye.
• Overinsurance — insurance that exceeds the actual value of the person or property, or more insurance than the insured can afford.
• Principal sum — the amount paid for an accidental death under a health policy.
• Tax deductible — a qualified expense that may reduce income subject to taxation.
• Total disability — inability to perform any occupation for which the person is reasonably suited by education, training, or experience.
• Waiver — relinquishment of a right or interest.`,
      questions: [
        question(
          'c9q01',
          'How does an own-occupation definition usually change after 24 months?',
          [
            {
              text: 'It narrows to any occupation for which the insured is reasonably suited by education, training, or experience.',
              why: 'Own occupation is the more liberal definition and is generally used for highly skilled work such as surgery or trial work. Any occupation is easier for the insurer to justify when it issues the policy.',
              correct: true,
            },
            {
              text: 'It becomes more liberal and pays even if the insured can still do the original job.',
              why: 'The change after 24 months reduces the insurer’s liability. It does not make qualification easier.',
            },
            {
              text: 'Benefits stop, even if the insured cannot work at all.',
              why: 'Benefits can continue under the narrower any-occupation test. They do not automatically end at 24 months.',
            },
            {
              text: 'The insured must be unable to perform every job that exists, with no regard to training.',
              why: 'Any occupation means work the insured is reasonably suited for by education, training, or experience, not every job in the economy.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c9-income',
      title: 'Total disability and replacing income',
      body: `Income replacement contracts replace a percentage of income lost because of a covered accident or sickness, without first requiring total disability. Premiums are lower than traditional disability policies because the contract counts other income, including part-time work, other disability policies, and workers compensation. In the course example, an ophthalmologist has a detached retina, returns to seeing patients, and can no longer perform surgery. Income falls 60%. A traditional disability policy would pay nothing because the doctor was never fully disabled. A loss-of-income policy pays because income fell from a qualified accident or illness. These contracts are typically written on an any-occupation definition. Insurers use them to limit overinsurance and malingering that come with a traditional noncancellable own-occupation-to-age-65 policy.

Total disability is defined differently from policy to policy. A strict version, similar to Social Security, uses any occupation: the insured cannot perform any occupation for which the insured is reasonably suited by education, training, or experience. A more liberal version is the inability to perform the duties of one’s own occupation. The liberal definition makes it easier to qualify.

In Utah, a person is totally disabled if the person is not employed in a job for which the person is qualified through education, training, or experience, and is unable to perform all the material duties of the person’s regular occupation.

Presumptive disability, found in most disability income policies, names conditions that automatically qualify the insured for full benefits, regardless of ability to work. The benefit covers dismemberment, meaning loss of use of any two limbs, total and permanent blindness, or loss of speech or hearing. Some policies require actual severance of the limbs rather than loss of use.`,
      questions: [
        question(
          'c9q02',
          'The ophthalmologist can still see patients but can no longer perform surgery, and income falls 60%. Which policy pays?',
          [
            {
              text: 'An income replacement, or loss-of-income, policy. A traditional disability policy would not pay, because the doctor was never fully disabled.',
              why: 'Income replacement does not require a period of total disability. Premiums are lower because other income, including part-time work, other disability policies, and workers compensation, is taken into account.',
              correct: true,
            },
            {
              text: 'Only a traditional own-occupation policy, because surgery is the doctor’s occupation.',
              why: 'The example says a traditional disability policy would not pay, because the doctor was never fully disabled. The loss-of-income policy pays for the reduced income.',
            },
            {
              text: 'Neither. A 60% loss is below the percentage a disability policy will replace.',
              why: 'The 60% figure is the doctor’s loss of income, not a minimum loss the policy requires before it pays.',
            },
            {
              text: 'Social Security only, because private disability never pays a partial loss.',
              why: 'The example is about a private loss-of-income policy. Social Security uses a strict definition and a five-month waiting period.',
            },
          ],
        ),
        question(
          'c9q03',
          'Which condition triggers presumptive disability benefits?',
          [
            {
              text: 'Loss of use of any two limbs, total and permanent blindness, or loss of speech or hearing.',
              why: 'The insured qualifies for full benefits regardless of ability to work. Some policies require actual severance of the limbs rather than loss of use. In Utah, total disability also requires that the person not be employed in a job the person is qualified for and be unable to perform all material duties of the regular occupation.',
              correct: true,
            },
            {
              text: 'Any sickness that lasts 10 days.',
              why: 'Ten to 30 days is a probationary period for sickness at the start of some policies. It is not presumptive disability.',
            },
            {
              text: 'Loss of sight in one eye only.',
              why: 'Loss of sight in one eye is a capital-sum accidental dismemberment benefit, not the presumptive total-disability trigger. Presumptive blindness is total and permanent.',
            },
            {
              text: 'A 60% drop in income while the insured still does the same job.',
              why: 'A percentage loss of income without total disability is what an income replacement contract covers. Presumptive disability is a listed physical condition.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c9-partial',
      title: 'Partial and residual disability',
      body: `Partial disability is often the inability to perform one or more of the regular duties of one’s own occupation, or the inability to work full time, which reduces income. The benefit covers a partial loss of income when the insured can report to work but cannot perform all the regular duties. It is typically 50% of the total disability benefit and is limited to a period stated in the policy. Partial benefits are paid as a flat amount or a residual amount.

Residual disability pays for loss of income when a person returns to work after a total disability but still cannot work as long, or at the same level, as before. Many companies have replaced partial disability with residual disability. If the person can work only part time or in a lower-paying position, residual disability makes up the difference between present earnings and earnings before the disability.

Disability income policies generally do not cover losses from war, military service, intentionally self-inflicted injuries, overseas residence, or injuries suffered while committing or attempting a felony.`,
      questions: [
        question(
          'c9q09',
          'How does residual disability differ from partial disability?',
          [
            {
              text: 'Residual disability makes up the difference in earnings after the insured returns to work following a total disability. Partial disability is often 50% of the total benefit.',
              why: 'Partial disability is the inability to perform one or more regular duties, or to work full time, with a resulting loss of income. Many companies have replaced partial disability with residual disability. War, military service, intentional self-inflicted injury, overseas residence, and felony injuries are generally excluded.',
              correct: true,
            },
            {
              text: 'Residual disability pays only if the insured never returns to work. Partial disability pays the full principal sum.',
              why: 'Residual disability applies when the person has returned to work but cannot work as long or at the same level. The principal sum is an accidental death benefit.',
            },
            {
              text: 'They are the same benefit, and both pay 100% of prior earnings for life.',
              why: 'Partial disability is typically 50% of the total disability benefit for a limited time. Residual disability pays the earnings difference, not a lifetime full replacement.',
            },
            {
              text: 'Residual disability is available only for a felony injury.',
              why: 'Injuries while committing or attempting a felony are a typical exclusion, not a covered residual benefit.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c9-periods',
      title: 'The waiting period and the benefit period',
      body: `An individual disability income policy is applied for and paid for by the individual, not through the employer. Premiums are paid with after-tax dollars, and benefits are not income taxable. A total disability plan protects the family or the individual against the economic loss of the wage earner’s total disability.

Benefits are most often paid monthly, sometimes weekly. The amount is stated in the policy and is usually limited to a percentage of income at application, to prevent overinsurance.

The elimination period is a waiting period from the onset of disability until benefits begin. It is a deductible measured in days rather than dollars. It removes coverage for short disabilities. Most policies use 30 to 180 days. A longer elimination period means a lower premium, just as a higher medical deductible lowers a medical premium. Benefits are paid in arrears. If the insured selects 90 days, the insured is eligible on the 91st day, but payments do not begin until the 121st day. The insured has to decide how long to go without payments.

The benefit period is how long monthly payments last for each disability after the elimination period is satisfied. Most policies offer 1 year, 2 years, 5 years, and to age 65. Some offer lifetime benefits. A longer benefit period means a higher premium.

A probationary period is an extra waiting period, often 10 to 30 days from issue, during which illness-related disabilities are not paid. It applies only to sickness, not to accident or injury. It reduces adverse selection by people who would buy a policy just after developing a condition that needs immediate care.`,
      questions: [
        question(
          'c9q04',
          'The insured selects a 90-day elimination period. When do benefit payments begin?',
          [
            {
              text: 'The insured is eligible on the 91st day, and payments begin on the 121st day because benefits are paid in arrears.',
              why: 'The elimination period is a deductible measured in days. A longer elimination period lowers the premium. A longer benefit period raises it. Most benefit-period choices are 1 year, 2 years, 5 years, and to age 65.',
              correct: true,
            },
            {
              text: 'Payments begin on the 91st day, including benefits for the first 90 days.',
              why: 'Eligibility starts on the 91st day. The first check waits until the 121st day. The elimination period is not paid retroactively in this explanation.',
            },
            {
              text: 'Payments begin on day 30 for sickness and day 90 for injury.',
              why: 'A 10- to 30-day probationary period at issue applies to sickness only. It is in addition to the elimination period, not a substitute for the 90-day example.',
            },
            {
              text: 'Payments begin immediately, because individual disability premiums were paid with after-tax dollars.',
              why: 'After-tax premiums are why individual disability benefits are not income taxable. They do not erase the elimination period.',
            },
          ],
        ),
        question(
          'c9q05',
          'What does a probationary period exclude?',
          [
            {
              text: 'Illness-related disabilities during a waiting period, often 10 to 30 days from issue. Accidents and injuries are not excluded by it.',
              why: 'The probationary period is in addition to the elimination period. Its purpose is to reduce adverse selection against the insurer.',
              correct: true,
            },
            {
              text: 'All disabilities, including accidents, for the first two years.',
              why: 'Two years is a common group long-term benefit threshold, not the probationary period. The probationary period is short and applies to sickness only.',
            },
            {
              text: 'Only injuries that happen at work.',
              why: 'Work injuries are an occupational-coverage question. The probationary period is about sickness shortly after issue.',
            },
            {
              text: 'Recurrences of the same disability within 3 to 6 months.',
              why: 'A recurrence within the stated period, usually 3 to 6 months, is treated as a continuation so a new elimination period is not imposed. That is recurrent disability, not the probationary period.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c9-features',
      title: 'Injury, sickness, and waiver of premium',
      body: `Injury uses either accidental bodily injury or accidental means. Accidental bodily injury means the damage to the body is unexpected and unintended. Accidental means requires that the cause of the accident be unexpected and unintended. Accidental bodily injury is the broader coverage.

Sickness or illness is a sickness or disease contracted after the policy has been in force at least 30 days, or a sickness or disease that first manifests itself after the policy is in force. Companies often allow different benefit periods. An insured might take 5 years for sickness and to age 65 for accident.

Recurrent disability sets a period, usually 3 to 6 months, during which a recurrence of an injury or illness is a continuation of the prior disability. The insured does not have to satisfy another elimination period.

Waiver of premium is usually included. Once the insured qualifies for benefits, premiums may be discontinued. Premiums paid during the elimination period are usually refunded once benefits begin.`,
      questions: [
        question(
          'c9q06',
          'Which injury definition gives broader coverage?',
          [
            {
              text: 'Accidental bodily injury, because the damage to the body must be unexpected and unintended.',
              why: 'Accidental means requires the cause of the accident to be unexpected and unintended, which is narrower. A recurrence within 3 to 6 months continues the prior disability so a new elimination period is not required. Waiver of premium usually refunds premiums paid during the elimination period once benefits start.',
              correct: true,
            },
            {
              text: 'Accidental means, because only the result of the accident has to be unintended.',
              why: 'Accidental means looks at the cause. Accidental bodily injury looks at the damage to the body and is the broader of the two.',
            },
            {
              text: 'They are the same. Both pay only if the insured intended the act but not the injury.',
              why: 'The course treats them as different. Bodily injury is broader than accidental means.',
            },
            {
              text: 'Neither. Disability policies pay sickness only after a 24-month own-occupation period.',
              why: 'Twenty-four months is how long an own-occupation definition usually lasts. It is not a rule that injury is uncovered.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c9-riders',
      title: 'Extra benefits and refund riders',
      body: `An accidental death and dismemberment rider pays for accidental losses only. It is a pure form of accident insurance. The principal sum is paid for accidental death or loss of both hands, both feet, or both eyes. That amount is usually equal to the face amount. Loss of one hand, one foot, or sight in one eye pays a percentage of the principal sum, the capital sum, which varies with the severity of the injury. The full principal sum is usually paid for sight in both eyes or two or more limbs. One hand or one foot may pay 50%. Some policies pay double or triple indemnity for accidental death. Most pay if the death is caused by the accident and occurs within a stated time, such as 60 to 90 days.

The rehabilitation benefit covers part of the cost of a formal retraining program so a totally disabled insured can return to the old occupation or another one. It usually offers a specified sum, several times the monthly indemnity, for costs other insurance does not pay.

The medical reimbursement benefit for a nondisabling injury pays medical expenses from an accidental bodily injury when the insured is not disabled.

The return of premium rider refunds a percentage of premiums at stated times. At the end of the tenth year, the company may refund 80% of the excess of premiums paid over claims. The cash surrender rider creates a cash value of around 70% of the premiums paid in excess of claims. That value is often available only when the contract ends.

A cost of living adjustment rider protects benefits from inflation. Once claim payments have begun, the monthly benefit increases automatically. The first increase is generally at the end of one year, then annually for as long as the insured remains on claim. Some riders use compound interest and some use simple interest.

The guaranteed insurability rider, also called the future increase option, lets the insured raise the benefit to a predetermined amount at certain times or events without proof of insurability. The usual ages are 25, 28, 31, 34, 37, and 40. An increase may also be taken at marriage or the birth of a child. The insured must still qualify from an income standpoint, so the increase does not create overinsurance.

The relation of earnings to insurance provision limits benefits to the insured’s average income over the last 24 months. If the total monthly loss-of-time benefits promised under all valid coverages exceed the insured’s monthly earnings at the time of disability, or the average monthly earnings for the previous 2 years, whichever is greater, the insurer pays only a proportionate amount. If necessary, benefits are reduced pro rata.`,
      questions: [
        question(
          'c9q07',
          'Under a disability policy’s accidental death and dismemberment rider, what does the capital sum pay?',
          [
            {
              text: 'A percentage of the principal sum for loss of one hand, one foot, or sight in one eye.',
              why: 'The principal sum is paid for accidental death or loss of both hands, both feet, or both eyes. Death must usually occur within 60 to 90 days. Some policies pay double or triple the face amount for accidental death.',
              correct: true,
            },
            {
              text: 'The full face amount for any injury, including sickness.',
              why: 'The rider pays accidental losses only. Sickness is not an accidental death or dismemberment loss.',
            },
            {
              text: 'Medical bills when the insured is not disabled.',
              why: 'Medical expenses for an accidental bodily injury when the insured is not disabled are the nondisabling-injury medical reimbursement benefit.',
            },
            {
              text: '80% of premiums paid over claims, at the end of 10 years.',
              why: 'That is an example of the return of premium rider. A cash surrender rider is about 70% of premiums paid in excess of claims, often only at termination.',
            },
          ],
        ),
        question(
          'c9q08',
          'When may the future increase option be used?',
          [
            {
              text: 'At stated ages, usually 25, 28, 31, 34, 37, and 40, or at marriage or the birth of a child, without proof of insurability, if income supports the increase.',
              why: 'The rider is also called guaranteed insurability. A cost of living rider is different: it raises the monthly benefit automatically after claim payments begin, often first at the end of one year. Relation of earnings can cut benefits pro rata if all loss-of-time coverage exceeds the greater of current monthly earnings or the average of the previous two years.',
              correct: true,
            },
            {
              text: 'Any time the insured becomes disabled, with no income test.',
              why: 'The increase dates are set ages and family events, and the insured must qualify from an income standpoint to prevent overinsurance.',
            },
            {
              text: 'Only after the insured has been on claim for one year.',
              why: 'An increase at the end of one year on claim describes a cost of living adjustment, not the future increase option.',
            },
            {
              text: 'Only if the insured submits new medical evidence.',
              why: 'The point of the rider is an increase without proof of insurability.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c9-coord',
      title: 'Coordinating with Social Security',
      body: `To avoid overinsurance, insurers coordinate with Social Security. An additional monthly benefit rider pays about what Social Security would pay, but only for one year. The expectation is that Social Security will start at the end of that year.

A social insurance supplement is a rider, not a separate plan. It pays about what Social Security would pay, and if Social Security does pay, the supplement is reduced dollar for dollar. It is used in three situations: the insured is eligible for Social Security but benefits have not started, usually after a 5-month wait with payment beginning in the 6th month; Social Security has denied the claim, which happens to roughly 75% of applicants because of its strict total-disability definition; or Social Security pays less than the rider, in which case only the difference is paid. The rider can also supplement or replace workers compensation and other social insurance.

Occupational coverage pays for illness, injury, or disability from accidents or sicknesses on or off the job. Nonoccupational coverage pays only for accidents or sicknesses off the job. Many individual policies are written either way. Most group plans are nonoccupational only, because the job is assumed to be covered by workers compensation.`,
      questions: [
        question(
          'c9q10',
          'Social Security pays less than the social insurance supplement rider. What does the rider pay?',
          [
            {
              text: 'Only the difference. If Social Security pays the full amount, the rider is reduced dollar for dollar.',
              why: 'The rider also pays during the usual 5-month Social Security wait, with Social Security benefits beginning in the 6th month, and it pays if Social Security denies the claim. About 75% of applicants are denied. An additional monthly benefit rider lasts about one year.',
              correct: true,
            },
            {
              text: 'The full rider amount on top of the Social Security check.',
              why: 'The supplement is reduced dollar for dollar by the Social Security payment. It is not stacked on top.',
            },
            {
              text: 'Nothing, unless the disability happened at work.',
              why: 'Work-only limits describe occupational versus nonoccupational coverage. The supplement is tied to Social Security and can also relate to workers compensation.',
            },
            {
              text: 'A lifetime benefit equal to the worker’s primary insurance amount, with no offset.',
              why: 'The primary insurance amount is how Social Security calculates its own benefit. The supplement is a rider that offsets Social Security, and the additional monthly benefit is only about one year.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c9-underwrite',
      title: 'How an individual policy is underwritten',
      body: `Occupation is critical. The more hazardous the occupation, the higher the premium. Attorneys and doctors pay the lowest premiums and receive the better definitions of disability. Construction workers pay more and receive poorer definitions because the risk of disability is greater.

Disability income policies are valued, or stated-amount, contracts. The benefit the company will issue is based on net earned income. Most companies set a maximum percentage, such as 65% for higher incomes or 85% for lower incomes, to prevent malingering and overuse. Others use a flat amount. Two principles apply: the benefit must be large enough to let the insured keep a lifestyle similar to the one before disability, and it may not exceed what the insured earned before disability.

If the risk is too great, the applicant can be declined. If the risk is more than standard but not a decline, the underwriter can rate up the policy, which increases the premium, or add an exclusion rider. A loss related to that exclusion is not covered.`,
      questions: [
        question(
          'c9q11',
          'How do insurers commonly limit the disability benefit they will issue?',
          [
            {
              text: 'A percentage of earned income, such as 65% for higher incomes or 85% for lower incomes, and never more than earnings before disability.',
              why: 'The benefit should still be large enough to maintain a similar lifestyle. A more hazardous occupation pays a higher premium and gets a poorer definition. A risk that is not standard and not a decline can be rated up or issued with an exclusion rider.',
              correct: true,
            },
            {
              text: '100% of gross income, including investments, so the insured has no reason to return to work.',
              why: 'Benefits are tied to earned income, not investments, and they are capped below full earnings so the insured has a financial incentive to return to work.',
            },
            {
              text: 'The same percentage and the same definition for every occupation.',
              why: 'Professionals such as attorneys and doctors pay less and receive better definitions. More hazardous jobs pay more and receive poorer definitions.',
            },
            {
              text: 'A flat principal sum paid once, with no monthly benefit.',
              why: 'A principal sum is the accidental death amount. Disability income is a monthly or weekly stated amount based on earned income.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c9-group',
      title: 'Disability coverage from an employer',
      body: `Employers also offer disability income in group benefit packages. Benefit payments that come from employee contributions are not taxable. Benefit payments that come from employer contributions are taxable to the employee. The premium is deductible for the employer.

Group plans usually set benefits as a percentage of the worker’s income. Individual policies usually specify a flat amount. Short-term group plans usually pay for a maximum of 13 to 52 weeks, with 26 weeks the most common, at 50% to 100% of income. Individual short-term plans run from 6 months to 2 years. Short-term plans are not renewable. Group long-term plans pay for more than 2 years, and the monthly benefit is usually limited to 60% of income. Group plans usually require 30 to 90 days of work before the employee is eligible. Group benefits are usually supplemental to workers compensation. Some group plans cover only nonoccupational disabilities.

Short-term disability from an employer can have an elimination period as short as 0 days. The benefit period is not longer than 2 years, and it may be 6 months or 1 year. Group long-term disability is often reserved for management. Its elimination period usually matches the short-term plan’s benefit period. The benefit period may run to age 65. Lower-wage employees are usually limited to 66⅔% of monthly wage. Higher-wage employees are usually limited to 50%.`,
      questions: [
        question(
          'c9q12',
          'How are group disability benefits taxed?',
          [
            {
              text: 'Benefits from employee contributions are not taxable. Benefits from employer contributions are taxable to the employee. The employer may deduct the premium.',
              why: 'Individual disability premiums are paid with after-tax dollars, and those benefits are not income taxable. Group plans usually state a percentage of income. Individual policies usually state a flat amount.',
              correct: true,
            },
            {
              text: 'All group disability benefits are tax free, and the employer cannot deduct the premium.',
              why: 'Only the portion attributed to employee contributions is not taxable. Employer-paid benefits are taxable to the employee, and the premium is deductible for the employer.',
            },
            {
              text: 'Benefits are taxable only if the employee has been disabled for more than 2 years.',
              why: 'More than 2 years describes a group long-term maximum benefit period. Taxation follows who paid the premium, not the length of the claim.',
            },
            {
              text: 'The employee deducts the premium, and every benefit is taxed as earned income.',
              why: 'The premium deduction described here belongs to the employer. Employee-paid benefits are not taxable.',
            },
          ],
        ),
        question(
          'c9q13',
          'How long do short-term group disability plans usually pay?',
          [
            {
              text: '13 to 52 weeks, with 26 weeks the most common, at 50% to 100% of income. They are not renewable.',
              why: 'Individual short-term plans run 6 months to 2 years. Group long-term plans exceed 2 years and are usually limited to 60% of income. Eligibility often requires 30 to 90 days of work. Lower-wage long-term benefits are usually capped at 66⅔% of monthly wage, and higher-wage benefits at 50%.',
              correct: true,
            },
            {
              text: 'To age 65 for every employee, at 100% of income.',
              why: 'A benefit period to age 65 is a long-term design, often for management, and the percentage is limited. It is not the usual short-term group plan.',
            },
            {
              text: 'One year, matching the additional monthly Social Security rider.',
              why: 'One year is the additional monthly benefit rider that stands in for Social Security. Short-term group disability is measured in weeks, commonly 26.',
            },
            {
              text: 'A single lump sum after a one- or two-year elimination period.',
              why: 'A long elimination period and a lump sum describe a disability buy-sell policy, not short-term group disability.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c9-business',
      title: 'Disability coverage a business buys',
      body: `A business buys disability insurance on key employees to protect itself when that employee becomes disabled. Key person disability is bought by the employer on the life of a key employee. The economic value is the potential loss of business income plus the cost of hiring and training a replacement. The business owns the contract, pays the premium, and is the beneficiary. The key person is the insured and must consent in writing.

A buy-sell agreement is a legal agreement prepared by an attorney. It states how the business will pass between owners when one owner dies or becomes disabled. The business often buys insurance to fund the buyout. Policies that fund a disability buy-sell generally have a very long elimination period, possibly one or two years, and they pay a large lump sum to buy out the business rather than monthly benefits.`,
      questions: [
        question(
          'c9q14',
          'Who owns a key person disability policy, and who receives the benefit?',
          [
            {
              text: 'The business owns the policy, pays the premium, and is the beneficiary. The key person must consent in writing.',
              why: 'The benefit reflects lost business income and the cost of hiring and training a replacement. A disability buy-sell policy is different: a long elimination period, possibly one or two years, and a lump sum to buy out an owner under an agreement an attorney prepares.',
              correct: true,
            },
            {
              text: 'The key person owns the policy and names a family beneficiary.',
              why: 'The business is the owner and the beneficiary. The key person is the insured and must consent.',
            },
            {
              text: 'The insurer owns the policy until the key person has been disabled for 30 days.',
              why: 'Thirty to 90 days is a typical group eligibility waiting period. It is not how a key person contract is owned.',
            },
            {
              text: 'The attorney who drafts the buy-sell agreement is the beneficiary.',
              why: 'The attorney prepares the buy-sell agreement. The business, not the attorney, is the beneficiary of the key person policy.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c9-social',
      title: 'Social Security disability',
      body: `Social Security, also called Old Age Survivors Disability Insurance, is a federal program enacted in 1935. It protects eligible workers and their dependents against financial loss from old age, disability, or death. With few exceptions, almost everyone is covered. It matters when measuring a person’s need for life insurance.

The Quarter of Coverage system decides whether a worker qualifies. The type and amount of benefits depend on credits earned. A worker in covered employment, or a self-employed person, may earn up to 4 credits for each year of work. Fully insured means 40 quarters of coverage, the equivalent of 10 years of work. That status brings Social Security retirement, premium-free Medicare Part A, and survivor benefits. A person entitled to premium-free Part A is automatically eligible for Part B but must pay a monthly premium.

Currently insured, or partially insured, status requires 6 credits during the 13-quarter period ending with the quarter in which the person dies, becomes entitled to disability benefits, or becomes entitled to old-age benefits. For younger workers, the quarters required for benefits differ by age under a Social Security table.

Social Security disability is the inability to engage in any substantially gainful activity because of a medically determinable physical or mental impairment that has lasted, or is expected to last, 12 months, or to result in an early death. That definition is stricter than most definitions sold by insurance companies.

The waiting period is 5 months. Benefits begin at the start of the 6th month and are not retroactive to the start of the disability. The amount is based on the worker’s Primary Insurance Amount, calculated from Average Indexed Monthly Earnings over the highest 35 years. The lowest 5 years of income may be dropped. If the person returns to work making more than $1,050 a month, disability benefits continue for 3 months. That is an incentive to return to work.`,
      questions: [
        question(
          'c9q15',
          'How does Social Security define disability, and when do benefits start?',
          [
            {
              text: 'The person cannot engage in any substantially gainful activity because of an impairment that has lasted or is expected to last 12 months, or to result in death. Benefits start at the beginning of the 6th month and are not retroactive.',
              why: 'The waiting period is 5 months. The definition is stricter than most insurer definitions. About 75% of applicants are denied. Fully insured status is 40 quarters. Currently insured status is 6 credits in the 13-quarter period ending with death, disability entitlement, or old-age entitlement.',
              correct: true,
            },
            {
              text: 'The person cannot do their own job for 90 days. Benefits start on the 91st day and pay the first 90 days.',
              why: 'A 90-day elimination period, with eligibility on day 91 and payment on day 121, is a private disability policy feature. Social Security uses five months and does not pay retroactively.',
            },
            {
              text: 'Any illness that first appears while the person is employed. Benefits start immediately.',
              why: 'Social Security requires a severe impairment expected to last 12 months or to result in death, plus insured status, and it imposes a five-month wait.',
            },
            {
              text: 'Loss of use of two limbs only. Benefits are a capital sum.',
              why: 'Presumptive disability in a private policy can be two limbs, blindness, or loss of speech or hearing. Social Security uses substantially gainful activity and pays an income benefit based on the primary insurance amount.',
            },
          ],
        ),
        question(
          'c9q16',
          'A worker returns to work earning more than $1,050 a month. What happens to Social Security disability benefits?',
          [
            {
              text: 'They continue for 3 months. That continuation is an incentive to return to work.',
              why: 'The benefit amount comes from the primary insurance amount, based on average indexed monthly earnings over the highest 35 years. The lowest 5 years may be deleted. A person with premium-free Medicare Part A is eligible for Part B but pays the Part B premium.',
              correct: true,
            },
            {
              text: 'They stop on the first day of work, and any benefits already paid must be returned.',
              why: 'Benefits continue for 3 months when earnings exceed $1,050 a month. The course does not describe a repayment of benefits already paid.',
            },
            {
              text: 'They double for 3 months, then convert to a private residual benefit.',
              why: 'The 3-month period continues the existing Social Security benefit. It does not double it or convert it into a private residual disability benefit.',
            },
            {
              text: 'They are replaced immediately by a key person disability benefit.',
              why: 'Key person disability is a business-owned policy. It is not what Social Security pays a worker who returns to work.',
            },
          ],
        ),
      ],
    },

  ],
}

for (const section of chapter9.sections) {
  section.questions.push(...(chapter9Extra[section.id] ?? []))
}
