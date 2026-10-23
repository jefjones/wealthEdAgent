import { question } from '../build.ts'
import type { Question } from '../types.ts'

export const chapter9Extra: Record<string, Question[]> = {
  'c9-qualify': [
    question(
      'c9q17',
      'What does disability income insurance replace?',
      [
        {
          text: 'Lost income.',
          why: 'Disability income insurance replaces lost income. The key is which injuries qualify, how much is paid, and how long payments last.',
          correct: true,
        },
        {
          text: 'Investment income and unemployment benefits.',
          why: 'Investment income, unemployment benefits, and similar sources are not earned income. The coverage replaces lost income.',
        },
        {
          text: 'Household savings set aside for food, rent, and utilities.',
          why: 'For most people, employment income stops after a brief time away from work, and savings then have to cover food, rent, and utilities. Those savings are not what the policy replaces.',
        },
        {
          text: 'The principal sum paid for an accidental death.',
          why: 'The principal sum is the amount paid for an accidental death under a health policy. Disability income insurance replaces lost income.',
        },
      ],
    ),
    question(
      'c9q18',
      'What chance does a 25-year-old have of being disabled for more than 90 days before age 65?',
      [
        {
          text: 'A chance far below the chance of a premature death before age 65.',
          why: 'A premature death before 65 is far less likely than a long disability. The stated chance of disability for a 25-year-old is 30%.',
        },
        {
          text: 'A 30% chance.',
          why: 'There is a 30% chance that a 25-year-old will be disabled for more than 90 days before age 65.',
          correct: true,
        },
        {
          text: 'A 30% chance of death before age 65.',
          why: 'The 30% figure is the chance of a disability lasting more than 90 days. A premature death before 65 is far less likely.',
        },
        {
          text: 'A certainty once 24 months have passed after a loss.',
          why: 'Twenty-four months is the usual limit on an own-occupation definition. It is not the chance that a 25-year-old is disabled before age 65.',
        },
      ],
    ),
    question(
      'c9q19',
      'How does a premature death before age 65 compare with a disability of more than 90 days before that age?',
      [
        {
          text: 'It is the loss disability income insurance is written to replace.',
          why: 'Disability income insurance replaces lost income from disability. Premature death before 65 is a different event, and it is far less likely.',
        },
        {
          text: 'It is more likely than that disability.',
          why: 'A premature death before 65 is far less likely, not more likely, than a disability of more than 90 days before age 65.',
        },
        {
          text: 'It is far less likely.',
          why: 'A premature death before 65 is far less likely than the 30% chance that a 25-year-old will be disabled for more than 90 days before age 65.',
          correct: true,
        },
        {
          text: 'It carries the same 30% chance.',
          why: 'The 30% figure belongs to the disability lasting more than 90 days. Premature death before 65 is far less likely.',
        },
      ],
    ),
    question(
      'c9q20',
      'Why are disability benefits limited to a percentage of earned income?',
      [
        {
          text: 'So the benefit can add investment income on top of wages.',
          why: 'Investment income is not earned income. The percentage limit exists so the claimant has a financial incentive to return to work.',
        },
        {
          text: 'So the policy can pay the principal sum at death.',
          why: 'The principal sum is an accidental-death amount under a health policy. The percentage limit is an incentive to return to work.',
        },
        {
          text: 'So the coverage can be bought only through an employer.',
          why: 'Coverage may be bought individually or through an employer. Benefits are limited to a percentage of earned income to encourage a return to work.',
        },
        {
          text: 'So the claimant has a financial incentive to return to work.',
          why: 'Benefits are limited to a percentage of earned income so the claimant has a financial incentive to return to work.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q21',
      'Which sources count as earned income when disability benefits are limited?',
      [
        {
          text: 'Salary, wages, or commissions.',
          why: 'Earned income is salary, wages, or commissions, not investment income, unemployment benefits, or similar sources.',
          correct: true,
        },
        {
          text: 'Investment income.',
          why: 'Investment income is excluded from earned income. Earned income is salary, wages, or commissions.',
        },
        {
          text: 'Unemployment benefits.',
          why: 'Unemployment benefits are not earned income. The limit uses salary, wages, or commissions.',
        },
        {
          text: 'Other unearned sources similar to investment income.',
          why: 'Similar sources are listed with investment income and unemployment benefits as items that are not earned income.',
        },
      ],
    ),
    question(
      'c9q22',
      'When does a person become eligible for disability benefits?',
      [
        {
          text: 'As soon as employment income stops for any reason.',
          why: 'Employment income often stops after a brief absence, but eligibility starts when the sickness or injury meets the company definition of disability.',
        },
        {
          text: 'When the sickness or injury meets the company definition of disability.',
          why: 'A person becomes eligible when the sickness or injury meets the company definition of disability. Definitions vary, so the applicant and the producer need to know the benefit trigger.',
          correct: true,
        },
        {
          text: 'Only after a premature death before age 65.',
          why: 'Premature death before 65 is far less likely than a long disability, and it is not the eligibility test. The test is the company definition of disability.',
        },
        {
          text: 'When savings can no longer pay for food, rent, and utilities.',
          why: 'Savings may have to cover those costs after income stops. Eligibility still depends on the sickness or injury meeting the company definition of disability.',
        },
      ],
    ),
    question(
      'c9q23',
      'An own-occupation policy pays when sickness or accident keeps the insured from performing which duties?',
      [
        {
          text: 'Any occupation suited to the insured by education, training, or experience.',
          why: 'That is an any-occupation test. Own occupation pays when the insured cannot perform any duties of the insured’s own occupation.',
        },
        {
          text: 'Only the duties of a surgeon or a trial attorney.',
          why: 'Those are examples of highly trained occupations that often use own occupation. The trigger is any duties of the insured’s own occupation.',
        },
        {
          text: 'Any duties of the insured’s own occupation.',
          why: 'An own-occupation policy pays when the insured cannot perform any duties of the insured’s own occupation because of sickness or accident.',
          correct: true,
        },
        {
          text: 'Duties of some other occupation that could still pay the insured.',
          why: 'Own occupation can pay even if another occupation could produce income. The duties that matter are the duties of the insured’s own occupation.',
        },
      ],
    ),
    question(
      'c9q24',
      'Own occupation usually remains the paying definition for how many months after a loss?',
      [
        {
          text: 'The whole span until age 65.',
          why: 'Age 65 is the end point in the chance-of-disability statistic. Own occupation is usually limited to the first 24 months after a loss.',
        },
        {
          text: 'The first 90 days only.',
          why: 'More than 90 days is the disability length in the 30% statistic. The own-occupation definition usually runs for the first 24 months after a loss.',
        },
        {
          text: 'Any length the insured picks when the claim is filed.',
          why: 'The usual limit is part of the definition. It is the first 24 months after a loss, not a period chosen at claim time.',
        },
        {
          text: 'The first 24 months.',
          why: 'An own-occupation definition is usually limited to the first 24 months after a loss.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q25',
      'May own-occupation benefits be paid if the insured could earn income in a different occupation?',
      [
        {
          text: 'Yes. Benefits can be paid even if a different occupation could produce income.',
          why: 'The insured can receive benefits even if income could be earned in a different occupation.',
          correct: true,
        },
        {
          text: 'No. Payment stops as soon as any other occupation is possible.',
          why: 'That reading confuses own occupation with a stricter any-occupation test. Own occupation can pay even if another occupation could produce income.',
        },
        {
          text: 'No. Every other suitable occupation must be ruled out first.',
          why: 'Ruling out occupations suited by education, training, or experience is the any-occupation rule. Own occupation does not require that.',
        },
        {
          text: 'Yes, but only if the other occupation is surgery or trial practice.',
          why: 'Surgeons and trial attorneys are examples of people who often have own occupation. The benefit is not limited to income from those two fields.',
        },
      ],
    ),
    question(
      'c9q26',
      'Own occupation is generally used for which occupations?',
      [
        {
          text: 'Occupations an underwriter finds easy to justify.',
          why: 'Any occupation is easier for the company to justify. Own occupation is generally used for highly trained occupations such as surgeons and trial attorneys.',
        },
        {
          text: 'Highly trained occupations such as surgeons and trial attorneys.',
          why: 'Own occupation is generally used for highly trained occupations such as surgeons and trial attorneys.',
          correct: true,
        },
        {
          text: 'Work that is paid as investment income.',
          why: 'Investment income is not earned income. Own occupation is aimed at highly trained occupations such as surgeons and trial attorneys.',
        },
        {
          text: 'Jobs a person can still perform after a brief absence.',
          why: 'A brief absence is when wages often stop. Own occupation is generally reserved for highly trained occupations such as surgeons and trial attorneys.',
        },
      ],
    ),
    question(
      'c9q27',
      'An any-occupation provision pays only when the insured cannot perform duties of an occupation suited by what?',
      [
        {
          text: 'The job title the insured holds on the date of loss.',
          why: 'The insured’s own occupation is the own-occupation measure. Any occupation looks at work suited by education, training, or experience.',
        },
        {
          text: 'Whether an employer or the individual paid the premium.',
          why: 'Coverage may be bought individually or through an employer. The any-occupation test is education, training, or experience.',
        },
        {
          text: 'Education, training, or experience.',
          why: 'An any-occupation provision pays only when the insured cannot perform any duties of an occupation for which the insured is suited by education, training, or experience. That is also the chapter meaning of total disability.',
          correct: true,
        },
        {
          text: 'A second occupation that still produces commissions.',
          why: 'Commissions can be earned income, but they are not the any-occupation test. The test is education, training, or experience.',
        },
      ],
    ),
    question(
      'c9q28',
      'Which definition does the text call the more liberal one and the better benefit?',
      [
        {
          text: 'Any occupation, because underwriting can justify it more easily.',
          why: 'Any occupation is easier for the company to justify, but it is not the more liberal benefit. Own occupation is the more liberal definition and the better benefit.',
        },
        {
          text: 'A combined definition that every insurer is required to use.',
          why: 'Some companies still combine both definitions. That is not required of every company, and own occupation is the more liberal benefit.',
        },
        {
          text: 'A total-disability test based on investment income.',
          why: 'Investment income is outside earned income. Own occupation is the more liberal definition and the better benefit.',
        },
        {
          text: 'Own occupation.',
          why: 'Own occupation is the more liberal definition and the better benefit. Some companies still combine both definitions.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q29',
      'From an underwriting standpoint, which definition is easier for the company to justify?',
      [
        {
          text: 'Any occupation.',
          why: 'From an underwriting standpoint, any occupation is easier for the company to justify.',
          correct: true,
        },
        {
          text: 'Own occupation for every applicant.',
          why: 'Own occupation is the better benefit for the insured. It is not the definition the company finds easier to justify.',
        },
        {
          text: 'Replacing investment income as well as wages.',
          why: 'Investment income is not part of earned income. The underwriting contrast is that any occupation is easier to justify than own occupation.',
        },
        {
          text: 'Waiver of every right in the contract.',
          why: 'Waiver means relinquishment of a right or interest, not the definition that is easier to justify. Any occupation is easier to justify.',
        },
      ],
    ),
    question(
      'c9q30',
      'The chapter glossary uses benefit period for which interval?',
      [
        {
          text: 'The percentage of earned income that the policy pays.',
          why: 'A percentage of earned income is how the benefit is limited. The benefit period is the time during which benefits are paid.',
        },
        {
          text: 'The time during which benefits are paid.',
          why: 'The benefit period is the time during which benefits are paid.',
          correct: true,
        },
        {
          text: 'The first 24 months after a loss.',
          why: 'The first 24 months is the usual limit on an own-occupation definition. The benefit period is the time during which benefits are paid.',
        },
        {
          text: 'A qualified expense that may reduce taxable income.',
          why: 'That is the meaning of tax deductible. The benefit period is the time during which benefits are paid.',
        },
      ],
    ),
    question(
      'c9q31',
      'What is a capital sum?',
      [
        {
          text: 'The full amount paid for an accidental death.',
          why: 'The amount paid for an accidental death under a health policy is the principal sum. A capital sum is only a portion of that sum.',
        },
        {
          text: 'Coverage beyond the actual value of the person or property.',
          why: 'That is overinsurance. A capital sum is a portion of the principal sum, paid for accidental dismemberment or loss of sight in one eye.',
        },
        {
          text: 'A portion of the principal sum, paid for accidental dismemberment or loss of sight in one eye.',
          why: 'A capital sum is a portion of the principal sum, paid for accidental dismemberment or loss of sight in one eye.',
          correct: true,
        },
        {
          text: 'Giving up a right or interest.',
          why: 'That is a waiver. A capital sum is a portion of the principal sum, paid for accidental dismemberment or loss of sight in one eye.',
        },
      ],
    ),
    question(
      'c9q32',
      'What is overinsurance?',
      [
        {
          text: 'Relinquishment of a right or interest.',
          why: 'That is a waiver. Overinsurance is insurance that exceeds the actual value of the person or property, or more insurance than the insured can afford.',
        },
        {
          text: 'The amount paid for accidental death under a health policy.',
          why: 'That is the principal sum. Overinsurance means coverage beyond actual value, or more insurance than the insured can afford.',
        },
        {
          text: 'Inability to perform any suitable occupation.',
          why: 'That is the chapter meaning of total disability. Overinsurance is insurance that exceeds actual value, or more than the insured can afford.',
        },
        {
          text: 'Insurance that exceeds the actual value of the person or property, or more insurance than the insured can afford.',
          why: 'Overinsurance is insurance that exceeds the actual value of the person or property, or more insurance than the insured can afford.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q33',
      'Which amount does this chapter call the principal sum?',
      [
        {
          text: 'The amount paid for an accidental death under a health policy.',
          why: 'The principal sum is the amount paid for an accidental death under a health policy.',
          correct: true,
        },
        {
          text: 'A portion of the death amount paid for loss of sight in one eye.',
          why: 'A portion of the principal sum paid for dismemberment or loss of sight in one eye is the capital sum, not the principal sum itself.',
        },
        {
          text: 'The time during which disability benefits are paid.',
          why: 'That is the benefit period. The principal sum is the amount paid for an accidental death under a health policy.',
        },
        {
          text: 'A qualified expense that may reduce income subject to taxation.',
          why: 'That is the meaning of tax deductible. The principal sum is the accidental-death amount under a health policy.',
        },
      ],
    ),
  ],
  'c9-income': [
    question(
      'c9q34',
      'What do income replacement contracts pay for a covered accident or sickness without first requiring total disability?',
      [
        {
          text: 'Full presumptive benefits, whether or not income fell.',
          why: 'Presumptive disability can pay full benefits for named conditions. Income replacement instead replaces a percentage of income lost and does not first require total disability.',
        },
        {
          text: 'A percentage of the income lost.',
          why: 'Income replacement contracts replace a percentage of income lost because of a covered accident or sickness, without first requiring total disability.',
          correct: true,
        },
        {
          text: 'Nothing unless the insured cannot work in any occupation.',
          why: 'Requiring total disability first is what these contracts do not do. They replace a percentage of lost income from a covered accident or sickness.',
        },
        {
          text: 'Only workers compensation, and only while the insured is fully disabled.',
          why: 'Workers compensation is one kind of other income the contract counts. The benefit itself is a percentage of income lost, without a total-disability requirement first.',
        },
      ],
    ),
    question(
      'c9q35',
      'Why are premiums for income replacement contracts lower than premiums for traditional disability policies?',
      [
        {
          text: 'The insurer ignores part-time work and other disability policies.',
          why: 'The contract does the opposite. It counts other income, including part-time work, other disability policies, and workers compensation, and that is why the premium is lower.',
        },
        {
          text: 'The policy pays only after the insured is totally disabled.',
          why: 'Income replacement does not first require total disability. Premiums are lower because the contract counts other income.',
        },
        {
          text: 'The contract counts other income, including part-time work, other disability policies, and workers compensation.',
          why: 'Premiums are lower than traditional disability policies because the contract counts other income, including part-time work, other disability policies, and workers compensation.',
          correct: true,
        },
        {
          text: 'Benefits continue even when income does not fall.',
          why: 'The contract replaces income that was lost. The lower premium comes from counting other income, not from paying when income is unchanged.',
        },
      ],
    ),
    question(
      'c9q36',
      'Presumptive disability qualifies the insured for full benefits regardless of which fact?',
      [
        {
          text: 'Whether the insured bought the policy individually.',
          why: 'How the policy was purchased is not the presumptive test. Presumptive disability pays full benefits regardless of ability to work.',
        },
        {
          text: 'Whether premiums were lower than a traditional policy.',
          why: 'Lower premiums describe income replacement contracts. Presumptive disability pays full benefits regardless of ability to work.',
        },
        {
          text: 'Whether the insured can still earn commissions.',
          why: 'Other income matters in an income replacement contract. Presumptive disability pays full benefits regardless of ability to work.',
        },
        {
          text: 'The insured’s ability to work.',
          why: 'Presumptive disability, found in most disability income policies, names conditions that automatically qualify the insured for full benefits, regardless of ability to work.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q37',
      'Why would a traditional disability policy pay the ophthalmologist nothing after a detached retina?',
      [
        {
          text: 'The doctor was never fully disabled.',
          why: 'The ophthalmologist returns to seeing patients and can no longer perform surgery. A traditional disability policy pays nothing because the doctor was never fully disabled.',
          correct: true,
        },
        {
          text: 'Income rose instead of falling.',
          why: 'In the example, income falls 60%. The traditional policy pays nothing because the doctor was never fully disabled.',
        },
        {
          text: 'A detached retina is not a qualified illness.',
          why: 'The detached retina is the qualified accident or illness in the example. The traditional policy pays nothing because the doctor was never fully disabled.',
        },
        {
          text: 'The contract counts workers compensation and therefore pays zero.',
          why: 'Counting other income is a feature of income replacement pricing. The traditional policy pays nothing because the doctor was never fully disabled.',
        },
      ],
    ),
    question(
      'c9q38',
      'Why does a loss-of-income policy pay in the ophthalmologist example?',
      [
        {
          text: 'The doctor lost the use of two limbs.',
          why: 'Loss of use of any two limbs is a presumptive-disability idea. The loss-of-income policy pays because income fell from a qualified accident or illness.',
        },
        {
          text: 'Income fell from a qualified accident or illness.',
          why: 'Income falls 60% after the detached retina. A loss-of-income policy pays because income fell from a qualified accident or illness.',
          correct: true,
        },
        {
          text: 'The doctor can no longer see patients at all.',
          why: 'The doctor returns to seeing patients and can no longer perform surgery. Payment follows the drop in income from a qualified accident or illness.',
        },
        {
          text: 'The policy uses a noncancellable own-occupation benefit to age 65.',
          why: 'Insurers use income replacement to limit the overinsurance and malingering of that traditional policy. This example pays because income fell from a qualified accident or illness.',
        },
      ],
    ),
    question(
      'c9q39',
      'Income replacement contracts are typically written on which definition?',
      [
        {
          text: 'A presumptive definition that ignores the ability to work.',
          why: 'Presumptive disability is a separate benefit for named conditions. Income replacement contracts are typically written on an any-occupation definition.',
        },
        {
          text: 'Own occupation continuing to age 65.',
          why: 'A traditional noncancellable own-occupation-to-age-65 policy is the arrangement these contracts are used to limit. They are typically written on an any-occupation definition.',
        },
        {
          text: 'An any-occupation definition.',
          why: 'Income replacement contracts are typically written on an any-occupation definition.',
          correct: true,
        },
        {
          text: 'Total and permanent blindness only.',
          why: 'Total and permanent blindness is one presumptive condition. These contracts are typically written on an any-occupation definition.',
        },
      ],
    ),
    question(
      'c9q40',
      'Insurers use income replacement contracts to limit which problems of a traditional noncancellable own-occupation-to-age-65 policy?',
      [
        {
          text: 'The lower premium that comes from counting part-time work.',
          why: 'The lower premium is a feature of the income replacement contract itself. The problems being limited are overinsurance and malingering.',
        },
        {
          text: 'Presumptive payment for loss of speech or hearing.',
          why: 'Loss of speech or hearing is a presumptive condition. Income replacement is used to limit overinsurance and malingering.',
        },
        {
          text: 'A strict Social Security style of total disability.',
          why: 'A strict any-occupation definition is one way to define total disability. The contracts are used to limit overinsurance and malingering from a traditional own-occupation-to-age-65 policy.',
        },
        {
          text: 'Overinsurance and malingering.',
          why: 'Insurers use income replacement contracts to limit overinsurance and malingering that come with a traditional noncancellable own-occupation-to-age-65 policy.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q41',
      'A strict total disability definition, similar to Social Security, says the insured cannot perform which work?',
      [
        {
          text: 'Any occupation for which the insured is reasonably suited by education, training, or experience.',
          why: 'A strict version, similar to Social Security, uses any occupation: the insured cannot perform any occupation for which the insured is reasonably suited by education, training, or experience.',
          correct: true,
        },
        {
          text: 'Only the duties of the insured’s own occupation.',
          why: 'Inability to perform the duties of one’s own occupation is the more liberal version. The strict version uses any suitable occupation.',
        },
        {
          text: 'Surgery, even if the insured can still see patients.',
          why: 'That is the ophthalmologist example, not the strict definition. The strict version follows any occupation suited by education, training, or experience.',
        },
        {
          text: 'No work at all, including work the insured was never trained to do.',
          why: 'The strict test is not every imaginable job. It is any occupation for which the insured is reasonably suited by education, training, or experience.',
        },
      ],
    ),
    question(
      'c9q42',
      'Which version of total disability makes it easier for the insured to qualify?',
      [
        {
          text: 'The strict version that follows any suitable occupation.',
          why: 'The strict version, similar to Social Security, is harder. The liberal version, inability to perform one’s own occupation, makes it easier to qualify.',
        },
        {
          text: 'The liberal version: inability to perform the duties of one’s own occupation.',
          why: 'Total disability is defined differently from policy to policy. The liberal definition makes it easier to qualify.',
          correct: true,
        },
        {
          text: 'A definition that requires loss of use of any two limbs.',
          why: 'Loss of use of any two limbs is presumptive disability. The liberal total-disability version is inability to perform one’s own occupation.',
        },
        {
          text: 'A definition that pays only when income does not fall.',
          why: 'Income replacement pays when income is lost. The version that makes total disability easier to prove is one’s own occupation.',
        },
      ],
    ),
    question(
      'c9q43',
      'Under the Utah rule in this section, when is a person totally disabled?',
      [
        {
          text: 'When the person can still perform every material duty of the regular occupation.',
          why: 'Utah requires the opposite on that point. The person must be unable to perform all the material duties of the regular occupation, and must not be employed in a job the person is qualified for.',
        },
        {
          text: 'When income falls 60%, even if the person still performs every duty.',
          why: 'A 60% income drop is the ophthalmologist example for loss-of-income coverage. Utah total disability requires unemployment in a qualified job and inability to perform all material duties of the regular occupation.',
        },
        {
          text: 'When the person is not employed in a job for which the person is qualified through education, training, or experience, and cannot perform all the material duties of the regular occupation.',
          why: 'In Utah, a person is totally disabled if the person is not employed in a job for which the person is qualified through education, training, or experience, and is unable to perform all the material duties of the person’s regular occupation.',
          correct: true,
        },
        {
          text: 'When the person has a presumptive condition but is still working full time in the regular occupation.',
          why: 'Presumptive disability can pay regardless of ability to work. The Utah total-disability rule requires both that the person is not employed in a qualified job and that all material duties of the regular occupation cannot be performed.',
        },
      ],
    ),
    question(
      'c9q44',
      'In presumptive disability, what does dismemberment mean?',
      [
        {
          text: 'Loss of income of 60% while the insured still sees patients.',
          why: 'That is the ophthalmologist income-replacement example. Dismemberment means loss of use of any two limbs.',
        },
        {
          text: 'Inability to perform one’s own occupation.',
          why: 'That is a liberal total-disability definition. Dismemberment in this benefit means loss of use of any two limbs.',
        },
        {
          text: 'A detached retina that ends a surgical practice.',
          why: 'A detached retina is the course example for loss of income. Dismemberment means loss of use of any two limbs.',
        },
        {
          text: 'Loss of use of any two limbs.',
          why: 'Dismemberment means loss of use of any two limbs. The presumptive benefit also covers total and permanent blindness or loss of speech or hearing.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q45',
      'Some presumptive disability policies require which limb standard instead of loss of use?',
      [
        {
          text: 'Actual severance of the limbs.',
          why: 'Some policies require actual severance of the limbs rather than loss of use.',
          correct: true,
        },
        {
          text: 'Loss of use of one limb only.',
          why: 'The stated dismemberment standard is loss of use of any two limbs. Some policies go further and require actual severance rather than loss of use.',
        },
        {
          text: 'Total and permanent blindness in place of any limb loss.',
          why: 'Total and permanent blindness is its own presumptive condition. The alternative limb standard is actual severance rather than loss of use.',
        },
        {
          text: 'A return to part-time work within the same occupation.',
          why: 'Part-time work is other income that an income replacement contract may count. The limb alternative is actual severance rather than loss of use.',
        },
      ],
    ),
  ],
  'c9-periods': [
    question(
      'c9q46',
      'Who applies for and pays for an individual disability income policy?',
      [
        {
          text: 'The employer, through a group plan.',
          why: 'An individual policy is not bought through the employer. The individual applies for it and pays for it.',
        },
        {
          text: 'The individual, not the employer.',
          why: 'An individual disability income policy is applied for and paid for by the individual, not through the employer.',
          correct: true,
        },
        {
          text: 'The insurer, by waiving the premium from the date of issue.',
          why: 'The individual pays the premium. The policy is applied for and paid for by the individual, not through the employer.',
        },
        {
          text: 'The family the total disability plan protects.',
          why: 'The plan protects the family or the individual against economic loss. The individual still applies for the policy and pays for it.',
        },
      ],
    ),
    question(
      'c9q47',
      'How are premiums and benefits treated for income tax on an individual disability income policy?',
      [
        {
          text: 'Premiums are deducted, and benefits are taxed as income.',
          why: 'The treatment is the reverse. Premiums are paid with after-tax dollars, and benefits are not income taxable.',
        },
        {
          text: 'Both premiums and benefits are free of income tax.',
          why: 'Benefits are not income taxable, but premiums are paid with after-tax dollars. They are not described as a deduction.',
        },
        {
          text: 'Premiums are paid with after-tax dollars, and benefits are not income taxable.',
          why: 'Premiums are paid with after-tax dollars, and benefits are not income taxable.',
          correct: true,
        },
        {
          text: 'Benefits are taxed, and the elimination period is the deduction.',
          why: 'The elimination period is a time deductible, not a tax deduction. Benefits are not income taxable, and premiums are paid with after-tax dollars.',
        },
      ],
    ),
    question(
      'c9q48',
      'What does a total disability plan protect the family or the individual against?',
      [
        {
          text: 'The income tax on benefits.',
          why: 'Benefits are not income taxable. The plan protects against the economic loss of the wage earner’s total disability.',
        },
        {
          text: 'A short disability that ends inside the elimination period.',
          why: 'The elimination period removes coverage for short disabilities. The plan protects against the economic loss of the wage earner’s total disability.',
        },
        {
          text: 'Illness that begins during a probationary period.',
          why: 'A probationary period keeps illness-related disabilities from being paid for a short time after issue. The plan protects against the economic loss of total disability.',
        },
        {
          text: 'The economic loss of the wage earner’s total disability.',
          why: 'A total disability plan protects the family or the individual against the economic loss of the wage earner’s total disability.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q49',
      'Why is the benefit, which is stated in the policy, usually limited to a percentage of income at application?',
      [
        {
          text: 'To prevent overinsurance.',
          why: 'The amount is stated in the policy and is usually limited to a percentage of income at application, to prevent overinsurance. Benefits are most often paid monthly, sometimes weekly.',
          correct: true,
        },
        {
          text: 'To make benefits income taxable.',
          why: 'Benefits are not income taxable. The percentage limit at application is there to prevent overinsurance.',
        },
        {
          text: 'To lengthen the benefit period to age 65.',
          why: 'To age 65 is one benefit-period choice. The percentage-of-income limit is meant to prevent overinsurance.',
        },
        {
          text: 'To require the employer to pay the premium.',
          why: 'The individual applies for and pays for an individual policy. The income percentage limit prevents overinsurance.',
        },
      ],
    ),
    question(
      'c9q50',
      'The elimination period is a deductible measured in what?',
      [
        {
          text: 'Dollars of medical expense.',
          why: 'A higher medical deductible is only the comparison used for premiums. The elimination period is a deductible measured in days rather than dollars.',
        },
        {
          text: 'Days rather than dollars.',
          why: 'The elimination period is a waiting period from the onset of disability until benefits begin. It is a deductible measured in days rather than dollars, and it removes coverage for short disabilities.',
          correct: true,
        },
        {
          text: 'Years of the benefit period.',
          why: 'The benefit period is how long payments last after the elimination period. The elimination period itself is measured in days rather than dollars.',
        },
        {
          text: 'After-tax premium dollars.',
          why: 'After-tax dollars describe how the premium is paid. The elimination period is a deductible measured in days rather than dollars.',
        },
      ],
    ),
    question(
      'c9q51',
      'What elimination period do most disability income policies use?',
      [
        {
          text: '10 to 30 days from the issue date.',
          why: 'Ten to 30 days from issue is a common probationary period for sickness. Most policies use an elimination period of 30 to 180 days.',
        },
        {
          text: '1 year, 2 years, 5 years, or to age 65.',
          why: 'Those are benefit-period choices. Most policies use an elimination period of 30 to 180 days.',
        },
        {
          text: '30 to 180 days.',
          why: 'Most policies use an elimination period of 30 to 180 days.',
          correct: true,
        },
        {
          text: 'Exactly 90 days in every policy.',
          why: 'Ninety days is an example the insured might select, not the range most policies use. Most policies use 30 to 180 days.',
        },
      ],
    ),
    question(
      'c9q52',
      'What does a longer elimination period do to the premium?',
      [
        {
          text: 'It raises the premium, like a longer benefit period.',
          why: 'A longer benefit period means a higher premium. A longer elimination period means a lower premium.',
        },
        {
          text: 'It leaves the premium unchanged.',
          why: 'The elimination period is priced like a deductible. A longer elimination period means a lower premium.',
        },
        {
          text: 'It makes benefits income taxable.',
          why: 'Tax treatment does not turn on the elimination period. A longer elimination period means a lower premium.',
        },
        {
          text: 'It lowers the premium, just as a higher medical deductible lowers a medical premium.',
          why: 'A longer elimination period means a lower premium, just as a higher medical deductible lowers a medical premium.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q53',
      'When the elimination period is 90 days, eligibility begins on which day?',
      [
        {
          text: 'The 91st day.',
          why: 'If the insured selects 90 days, the insured is eligible on the 91st day. Benefits are paid in arrears, so payments do not begin until the 121st day.',
          correct: true,
        },
        {
          text: 'The 121st day.',
          why: 'The 121st day is when payments begin, because benefits are paid in arrears. Eligibility is the 91st day.',
        },
        {
          text: 'The 90th day.',
          why: 'The 90 days are the waiting period. Eligibility is the 91st day, and the insured has to decide how long to go without payments.',
        },
        {
          text: 'The 30th day.',
          why: 'Thirty days is the low end of the usual 30-to-180-day range, not the eligibility day after a 90-day choice. Eligibility is the 91st day.',
        },
      ],
    ),
    question(
      'c9q54',
      'After the elimination period is satisfied, most policies let monthly payments continue for which choices?',
      [
        {
          text: '30 to 180 days.',
          why: 'That range is the usual elimination period. The benefit period is how long monthly payments last after that waiting period is satisfied.',
        },
        {
          text: '1 year, 2 years, 5 years, and to age 65.',
          why: 'Most policies offer 1 year, 2 years, 5 years, and to age 65. Some offer lifetime benefits, and a longer benefit period means a higher premium.',
          correct: true,
        },
        {
          text: '10 to 30 days from issue.',
          why: 'That is a common probationary period for sickness. Benefit periods are much longer: 1 year, 2 years, 5 years, and to age 65.',
        },
        {
          text: 'Only a lifetime period, with no shorter choice.',
          why: 'Some policies offer lifetime benefits, but most offer 1 year, 2 years, 5 years, and to age 65.',
        },
      ],
    ),
    question(
      'c9q55',
      'Which buying problem is a probationary period written to reduce?',
      [
        {
          text: 'To lower the premium when the insured picks a longer benefit period.',
          why: 'A longer benefit period raises the premium. A probationary period reduces adverse selection by people who would buy just after a condition needs immediate care.',
        },
        {
          text: 'To measure the elimination deductible in dollars.',
          why: 'The elimination period is measured in days rather than dollars. The probationary period reduces adverse selection.',
        },
        {
          text: 'To reduce adverse selection by people who would buy a policy just after developing a condition that needs immediate care.',
          why: 'A probationary period is an extra waiting period, often 10 to 30 days from issue, during which illness-related disabilities are not paid. It applies only to sickness, not to accident or injury, and it reduces that adverse selection.',
          correct: true,
        },
        {
          text: 'To make individual benefits income taxable.',
          why: 'Benefits are not income taxable. The probationary period is there to reduce adverse selection.',
        },
      ],
    ),
  ],
  'c9-features': [
    question(
      'c9q56',
      'Accidental bodily injury describes which kind of harm?',
      [
        {
          text: 'The cause of the accident was unexpected and unintended.',
          why: 'A cause that is unexpected and unintended is accidental means. Accidental bodily injury means the damage to the body is unexpected and unintended.',
        },
        {
          text: 'A sickness that first manifests itself after issue.',
          why: 'That is one way the policy defines sickness. Accidental bodily injury means the damage to the body is unexpected and unintended.',
        },
        {
          text: 'A recurrence within 3 to 6 months of a prior disability.',
          why: 'That is recurrent disability. Accidental bodily injury means the damage to the body is unexpected and unintended.',
        },
        {
          text: 'The damage to the body is unexpected and unintended.',
          why: 'Accidental bodily injury means the damage to the body is unexpected and unintended. It is the broader injury coverage.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q57',
      'Accidental means judges which part of an accident?',
      [
        {
          text: 'The cause of the accident must be unexpected and unintended.',
          why: 'Accidental means requires that the cause of the accident be unexpected and unintended. Accidental bodily injury instead looks at whether the damage to the body was unexpected and unintended.',
          correct: true,
        },
        {
          text: 'Only the damage to the body must be unexpected.',
          why: 'Damage that is unexpected and unintended is accidental bodily injury. Accidental means looks at the cause of the accident.',
        },
        {
          text: 'The sickness must have been contracted after 30 days.',
          why: 'A 30-day requirement belongs to sickness, not to accidental means. Accidental means requires an unexpected and unintended cause.',
        },
        {
          text: 'Premiums paid during the elimination period must be refunded.',
          why: 'That refund is a waiver-of-premium result. Accidental means requires that the cause of the accident be unexpected and unintended.',
        },
      ],
    ),
    question(
      'c9q58',
      'Which sickness can meet the policy definition of sickness or illness?',
      [
        {
          text: 'Any disease the insured had before the policy was issued.',
          why: 'The definition looks forward from issue. It is a sickness contracted after the policy has been in force at least 30 days, or one that first manifests itself after the policy is in force.',
        },
        {
          text: 'A sickness contracted after the policy has been in force at least 30 days, or one that first manifests itself after the policy is in force.',
          why: 'Sickness or illness is a sickness or disease contracted after the policy has been in force at least 30 days, or a sickness or disease that first manifests itself after the policy is in force.',
          correct: true,
        },
        {
          text: 'Only an injury whose cause was unexpected.',
          why: 'An unexpected cause is accidental means. Sickness is a disease contracted after at least 30 days in force, or one that first manifests after the policy is in force.',
        },
        {
          text: 'A condition that returns within 3 to 6 months and is treated as a new claim.',
          why: 'A return inside the recurrent-disability period is a continuation, not a new sickness definition. The sickness definition uses the 30-day and first-manifest rules.',
        },
      ],
    ),
    question(
      'c9q59',
      'Companies often allow different benefit periods for sickness and accident. Which pairing is the example?',
      [
        {
          text: '30 days for sickness and 3 to 6 months for accident.',
          why: 'Thirty days is part of the sickness definition, and 3 to 6 months is the usual recurrent-disability window. The example benefit periods are 5 years for sickness and to age 65 for accident.',
        },
        {
          text: 'To age 65 for sickness and 5 years for accident.',
          why: 'That swaps the example. An insured might take 5 years for sickness and to age 65 for accident.',
        },
        {
          text: '5 years for sickness and to age 65 for accident.',
          why: 'Companies often allow different benefit periods. An insured might take 5 years for sickness and to age 65 for accident.',
          correct: true,
        },
        {
          text: 'The same period for both, with premiums refunded either way.',
          why: 'The refund point belongs to waiver of premium. The example of different periods is 5 years for sickness and to age 65 for accident.',
        },
      ],
    ),
    question(
      'c9q60',
      'If a disability returns during the recurrent-disability period, how is that return treated?',
      [
        {
          text: 'As a new disability that needs a new elimination period.',
          why: 'The insured does not have to satisfy another elimination period. A recurrence inside the stated period is a continuation of the prior disability.',
        },
        {
          text: 'As a sickness that must be in force for 30 days.',
          why: 'The 30-day rule defines sickness at the start of coverage. A recurrence in the stated period continues the prior disability.',
        },
        {
          text: 'As an accidental-means claim, whatever the cause.',
          why: 'Accidental means is an injury definition. Recurrent disability treats the return as a continuation of the prior disability.',
        },
        {
          text: 'As a continuation of the prior disability.',
          why: 'Recurrent disability sets a period, usually 3 to 6 months, during which a recurrence is a continuation of the prior disability. The insured does not satisfy another elimination period.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q61',
      'Once benefits begin, what usually happens to premiums paid during the elimination period?',
      [
        {
          text: 'They are usually refunded.',
          why: 'Waiver of premium is usually included. Once the insured qualifies for benefits, premiums may be discontinued, and premiums paid during the elimination period are usually refunded once benefits begin.',
          correct: true,
        },
        {
          text: 'They are kept, and future premiums must still be paid.',
          why: 'Once the insured qualifies, premiums may be discontinued. Premiums paid during the elimination period are usually refunded once benefits begin.',
        },
        {
          text: 'They extend the sickness benefit period to age 65.',
          why: 'To age 65 can be the accident benefit period in the example, not the treatment of elimination-period premiums. Those premiums are usually refunded.',
        },
        {
          text: 'They convert the claim into accidental means.',
          why: 'Accidental means is an injury definition. Waiver of premium usually refunds premiums paid during the elimination period once benefits begin.',
        },
      ],
    ),
  ],
  'c9-riders': [
    question(
      'c9q62',
      'An accidental death and dismemberment rider pays for which losses?',
      [
        {
          text: 'Sickness and accident losses of every kind.',
          why: 'The rider does not pay for sickness. It pays for accidental losses only and is a pure form of accident insurance.',
        },
        {
          text: 'Accidental losses only.',
          why: 'An accidental death and dismemberment rider pays for accidental losses only. It is a pure form of accident insurance.',
          correct: true,
        },
        {
          text: 'Retraining costs after a total disability from illness.',
          why: 'Retraining is the rehabilitation benefit. This rider pays for accidental losses only.',
        },
        {
          text: 'Medical bills from a nondisabling sickness.',
          why: 'The medical reimbursement benefit pays expenses from an accidental bodily injury when the insured is not disabled. The accidental death rider pays for accidental losses only.',
        },
      ],
    ),
    question(
      'c9q63',
      'The principal sum is paid for accidental death or for which other losses?',
      [
        {
          text: 'Loss of one hand or sight in one eye.',
          why: 'One hand, one foot, or sight in one eye pays a percentage of the principal sum. The principal sum itself is paid for accidental death or loss of both hands, both feet, or both eyes.',
        },
        {
          text: 'A nondisabling injury that only needs medical care.',
          why: 'Medical expenses for a nondisabling injury are a different benefit. The principal sum is paid for accidental death or loss of both hands, both feet, or both eyes.',
        },
        {
          text: 'Loss of both hands, both feet, or both eyes.',
          why: 'The principal sum is paid for accidental death or loss of both hands, both feet, or both eyes. That amount is usually equal to the face amount.',
          correct: true,
        },
        {
          text: 'The cost of a formal retraining program.',
          why: 'Retraining is the rehabilitation benefit. The principal sum is paid for accidental death or loss of both hands, both feet, or both eyes.',
        },
      ],
    ),
    question(
      'c9q64',
      'The principal sum is usually equal to what?',
      [
        {
          text: '50% of the face amount.',
          why: 'Fifty percent is what one hand or one foot may pay. The principal sum is usually equal to the face amount.',
        },
        {
          text: '80% of premiums paid over claims.',
          why: 'Eighty percent of the excess of premiums over claims is a return-of-premium figure at the tenth year. The principal sum is usually equal to the face amount.',
        },
        {
          text: 'Several times the monthly indemnity.',
          why: 'Several times the monthly indemnity is the usual rehabilitation sum. The principal sum is usually equal to the face amount.',
        },
        {
          text: 'The face amount.',
          why: 'The principal sum is usually equal to the face amount.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q65',
      'Loss of one hand or one foot may pay what share of the principal sum?',
      [
        {
          text: '50%.',
          why: 'One hand or one foot may pay 50%. Loss of one hand, one foot, or sight in one eye pays a percentage of the principal sum, the capital sum, which varies with the severity of the injury.',
          correct: true,
        },
        {
          text: 'The full principal sum in every case.',
          why: 'The full principal sum is usually paid for sight in both eyes or two or more limbs. One hand or one foot may pay 50%.',
        },
        {
          text: 'Double or triple the face amount.',
          why: 'Double or triple indemnity is an accidental-death feature of some policies. One hand or one foot may pay 50%.',
        },
        {
          text: '70% of premiums paid in excess of claims.',
          why: 'About 70% is the cash-surrender value figure. One hand or one foot may pay 50% of the principal sum.',
        },
      ],
    ),
    question(
      'c9q66',
      'Some policies pay which extra accidental-death benefit?',
      [
        {
          text: 'A capital percentage for sight in both eyes.',
          why: 'Sight in both eyes usually pays the full principal sum, not a partial capital sum. Some policies pay double or triple indemnity for accidental death.',
        },
        {
          text: 'Double or triple indemnity.',
          why: 'Some policies pay double or triple indemnity for accidental death.',
          correct: true,
        },
        {
          text: '80% of the excess premium at the tenth year.',
          why: 'That is a return-of-premium refund. The accidental-death extra in some policies is double or triple indemnity.',
        },
        {
          text: 'A rehabilitation sum of several monthly indemnities.',
          why: 'That sum belongs to the rehabilitation benefit. Some accidental-death policies pay double or triple indemnity.',
        },
      ],
    ),
    question(
      'c9q67',
      'Most of these policies pay an accidental-death benefit if the death is caused by the accident and occurs within what time?',
      [
        {
          text: 'The first 24 months after the policy is issued.',
          why: 'Twenty-four months is the earnings period in the relation-of-earnings provision. Most policies pay if the death occurs within a stated time such as 60 to 90 days.',
        },
        {
          text: 'One year after claim payments start.',
          why: 'The end of one year is the usual first cost-of-living increase. Accidental death is usually paid if it occurs within a stated time such as 60 to 90 days.',
        },
        {
          text: 'A stated time such as 60 to 90 days.',
          why: 'Most policies pay if the death is caused by the accident and occurs within a stated time, such as 60 to 90 days.',
          correct: true,
        },
        {
          text: 'The tenth policy year.',
          why: 'The tenth year is a return-of-premium date. Accidental death is usually paid if it occurs within a stated time such as 60 to 90 days.',
        },
      ],
    ),
    question(
      'c9q68',
      'The rehabilitation benefit pays part of the cost of which program?',
      [
        {
          text: 'Medical care for an injury that never disables the insured.',
          why: 'Medical expenses when the insured is not disabled are the medical reimbursement benefit. Rehabilitation covers part of a formal retraining program.',
        },
        {
          text: 'A cash value paid only when the contract ends.',
          why: 'A cash value available when the contract ends describes the cash surrender rider. Rehabilitation pays toward a formal retraining program.',
        },
        {
          text: 'An automatic inflation increase after one year on claim.',
          why: 'An increase at the end of one year is the cost of living adjustment. Rehabilitation covers part of a formal retraining program.',
        },
        {
          text: 'A formal retraining program so a totally disabled insured can return to the old occupation or another one.',
          why: 'The rehabilitation benefit covers part of the cost of a formal retraining program so a totally disabled insured can return to the old occupation or another one.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q69',
      'For bills other insurance does not pay, the usual rehabilitation sum is what size?',
      [
        {
          text: 'Several times the monthly indemnity, for costs other insurance does not pay.',
          why: 'It usually offers a specified sum, several times the monthly indemnity, for costs other insurance does not pay.',
          correct: true,
        },
        {
          text: '50% of the principal sum for every retraining bill.',
          why: 'Fifty percent is a possible payment for one hand or one foot. Rehabilitation usually offers several times the monthly indemnity.',
        },
        {
          text: 'The face amount, paid as a lump sum at death.',
          why: 'The face amount is the usual principal sum for accidental death. Rehabilitation usually offers several times the monthly indemnity.',
        },
        {
          text: '80% of premiums, whether or not other insurance paid the bill.',
          why: 'Eighty percent relates to a return of excess premium, not to retraining bills. Rehabilitation pays costs other insurance does not pay, usually several times the monthly indemnity.',
        },
      ],
    ),
    question(
      'c9q70',
      'The medical reimbursement benefit for a nondisabling injury pays medical expenses in which situation?',
      [
        {
          text: 'When sickness disables the insured and retraining is required.',
          why: 'Retraining after total disability is the rehabilitation benefit. This medical benefit pays accidental bodily injury expenses when the insured is not disabled.',
        },
        {
          text: 'When an accidental bodily injury occurs and the insured is not disabled.',
          why: 'The medical reimbursement benefit for a nondisabling injury pays medical expenses from an accidental bodily injury when the insured is not disabled.',
          correct: true,
        },
        {
          text: 'When accidental death occurs within 60 to 90 days.',
          why: 'That time limit is for accidental-death payment. The medical benefit pays expenses of an accidental bodily injury when the insured is not disabled.',
        },
        {
          text: 'When the insured raises the benefit without proof of insurability.',
          why: 'That is guaranteed insurability. The medical benefit pays expenses from an accidental bodily injury when the insured is not disabled.',
        },
      ],
    ),
    question(
      'c9q71',
      'At the end of the tenth year, a return of premium rider may refund what portion of the excess of premiums paid over claims?',
      [
        {
          text: '50% of the principal sum.',
          why: 'Fifty percent may be paid for loss of one hand or one foot. At the end of the tenth year the company may refund 80% of the excess of premiums paid over claims.',
        },
        {
          text: 'About 70% of all premiums, including premiums matched by claims.',
          why: 'About 70% of premiums paid in excess of claims is the cash-surrender figure, and it is not the tenth-year refund. The return of premium may be 80% of the excess of premiums over claims.',
        },
        {
          text: '80%.',
          why: 'At the end of the tenth year, the company may refund 80% of the excess of premiums paid over claims. The rider refunds a percentage of premiums at stated times.',
          correct: true,
        },
        {
          text: 'Double or triple the claims paid in that year.',
          why: 'Double or triple indemnity is an accidental-death benefit. The tenth-year return may be 80% of the excess of premiums paid over claims.',
        },
      ],
    ),
    question(
      'c9q72',
      'A cash surrender rider creates a cash value of around what share of premiums paid in excess of claims?',
      [
        {
          text: '80% at the end of year one.',
          why: 'Eighty percent at the end of the tenth year is the return-of-premium example. The cash surrender value is around 70% of premiums paid in excess of claims.',
        },
        {
          text: '50% of the face amount.',
          why: 'Fifty percent may apply to loss of one hand or one foot. The cash value is around 70% of premiums paid in excess of claims.',
        },
        {
          text: 'The full face amount on the date of issue.',
          why: 'The face amount is the usual size of the principal sum. The cash surrender rider creates a value of around 70% of premiums paid in excess of claims.',
        },
        {
          text: 'Around 70%.',
          why: 'The cash surrender rider creates a cash value of around 70% of the premiums paid in excess of claims. That value is often available only when the contract ends.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q73',
      'What does a cost of living adjustment rider protect benefits against?',
      [
        {
          text: 'Inflation.',
          why: 'A cost of living adjustment rider protects benefits from inflation. Once claim payments have begun, the monthly benefit increases automatically.',
          correct: true,
        },
        {
          text: 'A new proof of insurability at every birthday.',
          why: 'Guaranteed insurability raises the benefit without proof of insurability. The cost of living rider protects benefits from inflation.',
        },
        {
          text: 'Overinsurance caused by a future increase.',
          why: 'The income qualification on a future increase is what keeps that increase from creating overinsurance. The cost of living rider protects against inflation.',
        },
        {
          text: 'Accidental death that occurs after 90 days.',
          why: 'Sixty to 90 days is a common accidental-death time limit. The cost of living rider protects benefits from inflation.',
        },
      ],
    ),
    question(
      'c9q74',
      'When is the first cost of living increase generally made?',
      [
        {
          text: 'On the day claim payments begin.',
          why: 'The monthly benefit increases after payments have begun, but the first increase is generally at the end of one year, then annually while the insured remains on claim.',
        },
        {
          text: 'At the end of one year, then annually while the insured remains on claim.',
          why: 'The first increase is generally at the end of one year, then annually for as long as the insured remains on claim. Some riders use compound interest and some use simple interest.',
          correct: true,
        },
        {
          text: 'At the end of the tenth year, whether or not a claim is open.',
          why: 'The tenth year is a return-of-premium point. Cost of living increases start at the end of one year of claim and continue annually while the insured is on claim.',
        },
        {
          text: 'Only at ages 25, 28, 31, 34, 37, and 40.',
          why: 'Those are usual ages for a future increase option. The first cost of living increase is generally at the end of one year on claim.',
        },
      ],
    ),
    question(
      'c9q75',
      'The guaranteed insurability rider lets the insured raise the benefit to a predetermined amount without what?',
      [
        {
          text: 'Any later check of income.',
          why: 'The insured must still qualify from an income standpoint so the increase does not create overinsurance. What is waived is proof of insurability.',
        },
        {
          text: 'Payment of the new premium.',
          why: 'The rider does not say the new benefit is free. It lets the insured raise the benefit to a predetermined amount without proof of insurability.',
        },
        {
          text: 'Proof of insurability.',
          why: 'The guaranteed insurability rider, also called the future increase option, lets the insured raise the benefit to a predetermined amount at certain times or events without proof of insurability. The usual ages are 25, 28, 31, 34, 37, and 40, and an increase may also be taken at marriage or the birth of a child.',
          correct: true,
        },
        {
          text: 'A cost of living increase.',
          why: 'A cost of living increase is a separate rider that adjusts a benefit already in claim. Guaranteed insurability removes the need for proof of insurability.',
        },
      ],
    ),
    question(
      'c9q76',
      'Why must the insured still qualify from an income standpoint before a future increase?',
      [
        {
          text: 'So the insurer can charge double or triple indemnity.',
          why: 'Double or triple indemnity is an accidental-death feature. The income check keeps the increase from creating overinsurance.',
        },
        {
          text: 'So the cash value can reach 70% of premiums.',
          why: 'Seventy percent is the cash-surrender description. The income qualification stops the increase from creating overinsurance.',
        },
        {
          text: 'So claim payments can increase for inflation.',
          why: 'Inflation protection is the cost of living rider. The income rule on a future increase exists so the increase does not create overinsurance.',
        },
        {
          text: 'So the increase does not create overinsurance.',
          why: 'The insured must still qualify from an income standpoint, so the increase does not create overinsurance.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q77',
      'Under the relation of earnings to insurance provision, promised loss-of-time benefits are measured against which earnings figure?',
      [
        {
          text: 'The greater of monthly earnings at disability and average monthly earnings for the previous 2 years.',
          why: 'If total monthly loss-of-time benefits under all valid coverages exceed monthly earnings at the time of disability, or average monthly earnings for the previous 2 years, whichever is greater, the insurer pays only a proportionate amount. The provision limits benefits by reference to average income over the last 24 months.',
          correct: true,
        },
        {
          text: 'Whichever of those two earnings figures is smaller.',
          why: 'The comparison uses whichever is greater, not whichever is smaller. Benefits above that greater figure are paid only in a proportionate amount.',
        },
        {
          text: 'The face amount of the accidental death benefit.',
          why: 'The face amount is the usual principal sum. This provision compares loss-of-time benefits with earnings, using the greater of current monthly earnings and the prior 2-year average.',
        },
        {
          text: 'The excess of premiums paid over claims, refunded at the end of the tenth year.',
          why: 'At the end of the tenth year, a return-of-premium rider may refund a percentage of the excess of premiums paid over claims. The relation-of-earnings provision instead uses the greater of current monthly earnings and average monthly earnings for the previous 2 years.',
        },
      ],
    ),
    question(
      'c9q78',
      'If the relation of earnings to insurance provision has to cut the benefit, how is the cut made?',
      [
        {
          text: 'The entire benefit is denied.',
          why: 'The insurer does not drop the benefit to zero. It pays only a proportionate amount, and benefits are reduced pro rata if necessary.',
        },
        {
          text: 'Benefits are reduced pro rata.',
          why: 'If necessary, benefits are reduced pro rata. The insurer pays only a proportionate amount.',
          correct: true,
        },
        {
          text: 'The benefit doubles for accidental disability.',
          why: 'Double indemnity is an accidental-death option on some policies. A relation-of-earnings cut is a pro rata reduction.',
        },
        {
          text: 'The insured forfeits the cash surrender value.',
          why: 'The cash surrender rider is a separate value, often available when the contract ends. This provision reduces benefits pro rata.',
        },
      ],
    ),
  ],
  'c9-partial': [
    question(
      'c9q79',
      'Partial disability is often the inability to perform one or more regular duties of one’s own occupation, or the inability to do what?',
      [
        {
          text: 'Return to any work after a total disability.',
          why: 'Returning after a total disability and still being unable to work as before is residual disability. Partial disability is often one or more missed duties, or the inability to work full time, which reduces income.',
        },
        {
          text: 'Commit a felony without losing coverage.',
          why: 'Injuries suffered while committing or attempting a felony are generally not covered. Partial disability is about missed duties or the inability to work full time.',
        },
        {
          text: 'Work full time, which reduces income.',
          why: 'Partial disability is often the inability to perform one or more of the regular duties of one’s own occupation, or the inability to work full time, which reduces income.',
          correct: true,
        },
        {
          text: 'Replace partial disability with residual disability.',
          why: 'Many companies have replaced partial disability with residual disability. That business practice is not the definition of partial disability.',
        },
      ],
    ),
    question(
      'c9q80',
      'A partial disability benefit is typically what share of the total disability benefit?',
      [
        {
          text: 'The full total-disability benefit for as long as the insured wants.',
          why: 'Partial disability is not the full benefit for an open-ended time. It is typically 50% of the total disability benefit and is limited to a period stated in the policy.',
        },
        {
          text: 'The difference between present earnings and earnings before disability.',
          why: 'Making up that difference is how residual disability pays when work is part time or lower paid. Partial disability is typically 50% of the total disability benefit.',
        },
        {
          text: 'A benefit that continues during war or military service.',
          why: 'Losses from war and military service are generally not covered. The partial benefit is typically 50% of the total disability benefit.',
        },
        {
          text: '50%, for a period stated in the policy.',
          why: 'The partial benefit is typically 50% of the total disability benefit and is limited to a period stated in the policy. It covers a partial loss of income when the insured can report to work but cannot perform all the regular duties.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q81',
      'Partial disability benefits may be paid in which ways?',
      [
        {
          text: 'As a flat amount or a residual amount.',
          why: 'Partial benefits are paid as a flat amount or a residual amount.',
          correct: true,
        },
        {
          text: 'Only as a felony exclusion.',
          why: 'A felony injury is generally excluded. Partial benefits are paid as a flat amount or a residual amount.',
        },
        {
          text: 'Only after the company replaces the benefit with residual disability.',
          why: 'Many companies have moved from partial to residual disability, but the partial benefit itself may be a flat amount or a residual amount.',
        },
        {
          text: 'Only while the insured lives overseas.',
          why: 'Overseas residence is generally not covered. Partial benefits are paid as a flat amount or a residual amount.',
        },
      ],
    ),
    question(
      'c9q82',
      'Residual disability pays for lost income when a person returns to work after a total disability but still cannot do what?',
      [
        {
          text: 'Perform one duty, while working the same hours at the same pay.',
          why: 'Missing one or more duties, or being unable to work full time, is the partial-disability idea. Residual disability applies when the person still cannot work as long, or at the same level, as before.',
        },
        {
          text: 'Work as long, or at the same level, as before.',
          why: 'Residual disability pays for loss of income when a person returns to work after a total disability but still cannot work as long, or at the same level, as before.',
          correct: true,
        },
        {
          text: 'Avoid an intentionally self-inflicted injury.',
          why: 'Intentionally self-inflicted injuries are generally not covered. Residual disability addresses the inability to work as long, or at the same level, as before.',
        },
        {
          text: 'Collect 50% for a period that the policy does not state.',
          why: 'Fifty percent for a stated period is the typical partial benefit. Residual disability is about being unable to work as long, or at the same level, as before.',
        },
      ],
    ),
    question(
      'c9q83',
      'Many companies have replaced partial disability with which benefit?',
      [
        {
          text: 'A flat 50% benefit with no residual choice.',
          why: 'A flat amount is one way partial benefits may be paid. Many companies have replaced partial disability with residual disability.',
        },
        {
          text: 'Coverage for war and military service.',
          why: 'War and military service are generally excluded. Many companies have replaced partial disability with residual disability.',
        },
        {
          text: 'Residual disability.',
          why: 'Many companies have replaced partial disability with residual disability.',
          correct: true,
        },
        {
          text: 'An exclusion for overseas residence only.',
          why: 'Overseas residence is one general exclusion, not a replacement for partial disability. Many companies have replaced partial disability with residual disability.',
        },
      ],
    ),
    question(
      'c9q84',
      'If the person can work only part time or in a lower-paying position, what does residual disability make up?',
      [
        {
          text: '50% of the total disability benefit for a period the policy leaves blank.',
          why: 'Fifty percent for a stated period is the typical partial benefit. Residual disability makes up the difference between present earnings and earnings before the disability.',
        },
        {
          text: 'Lost income from a felony, war, or military service.',
          why: 'Those losses are generally not covered. Residual disability makes up the earnings difference when work is part time or lower paid.',
        },
        {
          text: 'The full pre-disability earnings, with no credit for present pay.',
          why: 'Residual disability does not ignore present earnings. It makes up the difference between present earnings and earnings before the disability.',
        },
        {
          text: 'The difference between present earnings and earnings before the disability.',
          why: 'If the person can work only part time or in a lower-paying position, residual disability makes up the difference between present earnings and earnings before the disability.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q85',
      'Disability income policies generally do not cover which loss?',
      [
        {
          text: 'An injury suffered while committing or attempting a felony.',
          why: 'Disability income policies generally do not cover losses from war, military service, intentionally self-inflicted injuries, overseas residence, or injuries suffered while committing or attempting a felony.',
          correct: true,
        },
        {
          text: 'A partial loss of income when the insured cannot perform all regular duties.',
          why: 'That partial loss is what the partial disability benefit covers. A felony injury is generally not covered.',
        },
        {
          text: 'Income lost because the insured can work only part time after a total disability.',
          why: 'Part-time work after total disability is a residual-disability situation. A felony injury is generally not covered.',
        },
        {
          text: 'The inability to work full time when that inability reduces income.',
          why: 'Inability to work full time, with a reduction in income, is a partial-disability description. A felony injury is generally not covered.',
        },
      ],
    ),
  ],
  'c9-coord': [
    question(
      'c9q86',
      'How long does an additional monthly benefit rider pay about what Social Security would pay?',
      [
        {
          text: 'For as long as workers compensation continues.',
          why: 'Workers compensation is a benefit a social insurance supplement can supplement or replace. The additional monthly benefit pays for only one year.',
        },
        {
          text: 'Only for one year.',
          why: 'An additional monthly benefit rider pays about what Social Security would pay, but only for one year. Insurers coordinate with Social Security to avoid overinsurance, expecting Social Security to start at the end of that year.',
          correct: true,
        },
        {
          text: 'Until a 5-month Social Security wait has ended.',
          why: 'A 5-month wait, with payment in the 6th month, describes one social-insurance-supplement situation. The additional monthly benefit runs for one year.',
        },
        {
          text: 'Only during the months Social Security already pays in full.',
          why: 'The expectation is that Social Security will start at the end of the year. The rider pays about what Social Security would pay for one year.',
        },
      ],
    ),
    question(
      'c9q87',
      'A social insurance supplement is which kind of benefit?',
      [
        {
          text: 'A separate plan that replaces the disability policy.',
          why: 'The supplement is not a separate plan. It is a rider, and it pays about what Social Security would pay.',
        },
        {
          text: 'An additional monthly benefit that always stops after one year.',
          why: 'The one-year limit describes the additional monthly benefit rider. A social insurance supplement is a rider, not a separate plan.',
        },
        {
          text: 'A rider, not a separate plan.',
          why: 'A social insurance supplement is a rider, not a separate plan. It pays about what Social Security would pay.',
          correct: true,
        },
        {
          text: 'Occupational coverage that pays only on the job.',
          why: 'Occupational coverage pays on or off the job. A social insurance supplement is a rider, not a separate plan.',
        },
      ],
    ),
    question(
      'c9q88',
      'When Social Security pays, the supplement is reduced on what basis?',
      [
        {
          text: 'It stays the same for one full year.',
          why: 'A one-year payment describes the additional monthly benefit. If Social Security pays, the supplement is reduced dollar for dollar.',
        },
        {
          text: 'It is replaced by workers compensation and cannot be reduced.',
          why: 'The rider can supplement or replace workers compensation, but a Social Security payment reduces the supplement dollar for dollar.',
        },
        {
          text: 'It stays in full because the claim was denied.',
          why: 'A denial is a different situation, and it is common because of a strict definition. If Social Security does pay, the supplement is reduced dollar for dollar.',
        },
        {
          text: 'It is reduced dollar for dollar.',
          why: 'If Social Security does pay, the supplement is reduced dollar for dollar.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q89',
      'When the insured is eligible for Social Security but benefits have not started, when does that payment usually begin?',
      [
        {
          text: 'In the 6th month, after a 5-month wait.',
          why: 'One use of the supplement is that the insured is eligible for Social Security but benefits have not started, usually after a 5-month wait with payment beginning in the 6th month.',
          correct: true,
        },
        {
          text: 'At the end of one year of additional monthly benefits.',
          why: 'The additional monthly benefit is expected to bridge one year. The not-yet-started Social Security case usually waits 5 months, with payment in the 6th month.',
        },
        {
          text: 'On the day a group plan denies an on-the-job injury.',
          why: 'Group plans are often nonoccupational because workers compensation is assumed to cover the job. The Social Security start described here is the 6th month after a 5-month wait.',
        },
        {
          text: 'Only after about 75% of applicants have been paid.',
          why: 'About 75% of applicants are denied, not paid. When benefits simply have not started, payment usually begins in the 6th month after a 5-month wait.',
        },
      ],
    ),
    question(
      'c9q90',
      'Social Security denies the disability claim for roughly what share of applicants?',
      [
        {
          text: 'A share small enough that the supplement is rarely used.',
          why: 'Denial is common. It happens to roughly 75% of applicants because of the strict total-disability definition.',
        },
        {
          text: 'Roughly 75%, because of the strict total-disability definition.',
          why: 'Social Security denies the claim for roughly 75% of applicants because of its strict total-disability definition.',
          correct: true,
        },
        {
          text: 'Roughly 75% of people who already receive workers compensation.',
          why: 'The 75% figure is the share of Social Security applicants who are denied, not a workers compensation statistic. The reason is the strict total-disability definition.',
        },
        {
          text: 'Everyone who has finished a 5-month wait.',
          why: 'The 5-month wait is the usual delay before payment begins in the 6th month. Denial hits roughly 75% of applicants because the definition is strict.',
        },
      ],
    ),
    question(
      'c9q91',
      'Besides Social Security, the social insurance supplement can supplement or replace which benefits?',
      [
        {
          text: 'Only the one-year additional monthly benefit.',
          why: 'The additional monthly benefit is a different rider and lasts one year. The social insurance supplement can also supplement or replace workers compensation and other social insurance.',
        },
        {
          text: 'Occupational coverage for accidents on the job only.',
          why: 'Occupational coverage pays both on and off the job. The supplement can also supplement or replace workers compensation and other social insurance.',
        },
        {
          text: 'Workers compensation and other social insurance.',
          why: 'The rider can also supplement or replace workers compensation and other social insurance.',
          correct: true,
        },
        {
          text: 'A separate plan that is not a rider.',
          why: 'The supplement is a rider, not a separate plan. It can also supplement or replace workers compensation and other social insurance.',
        },
      ],
    ),
    question(
      'c9q92',
      'Nonoccupational coverage pays only for accidents or sicknesses that occur where?',
      [
        {
          text: 'On the job and off the job.',
          why: 'On or off the job is occupational coverage. Nonoccupational coverage pays only for accidents or sicknesses off the job.',
        },
        {
          text: 'Only during a 5-month Social Security wait.',
          why: 'The 5-month wait is a Social Security timing rule. Nonoccupational coverage pays only for accidents or sicknesses off the job.',
        },
        {
          text: 'Only when workers compensation has already paid in full.',
          why: 'Workers compensation is why many group plans are nonoccupational, but the coverage definition is payment for accidents or sicknesses off the job.',
        },
        {
          text: 'Off the job.',
          why: 'Nonoccupational coverage pays only for accidents or sicknesses off the job. Occupational coverage pays for illness, injury, or disability on or off the job.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q93',
      'Why are most group plans nonoccupational only?',
      [
        {
          text: 'The job is assumed to be covered by workers compensation.',
          why: 'Most group plans are nonoccupational only because the job is assumed to be covered by workers compensation. Many individual policies are written either way.',
          correct: true,
        },
        {
          text: 'Individual policies cannot be written as occupational coverage.',
          why: 'Many individual policies are written either as occupational or nonoccupational coverage. Most group plans are nonoccupational because workers compensation is assumed to cover the job.',
        },
        {
          text: 'Social Security denies roughly 75% of on-the-job claims.',
          why: 'The 75% denial rate comes from Social Security’s strict total-disability definition, not from a special on-the-job rule. Group plans are nonoccupational because workers compensation is assumed to cover the job.',
        },
        {
          text: 'An additional monthly benefit already pays the on-the-job loss for one year.',
          why: 'The additional monthly benefit pays about what Social Security would pay for one year. Group plans are nonoccupational because the job is assumed to be covered by workers compensation.',
        },
      ],
    ),
  ],
  'c9-underwrite': [
    question(
      'c9q94',
      'What happens to the disability premium as the occupation becomes more hazardous?',
      [
        {
          text: 'The premium falls, and the definition of disability improves.',
          why: 'A more hazardous occupation does the opposite. The premium is higher, and the definition of disability is poorer.',
        },
        {
          text: 'The premium is higher.',
          why: 'Occupation is critical. The more hazardous the occupation, the higher the premium.',
          correct: true,
        },
        {
          text: 'The premium matches the premium charged to attorneys and doctors.',
          why: 'Attorneys and doctors pay the lowest premiums and receive the better definitions. A more hazardous occupation pays a higher premium.',
        },
        {
          text: 'The policy must be declined, with no other choice.',
          why: 'A decline is for a risk that is too great. A more hazardous occupation is first reflected in a higher premium.',
        },
      ],
    ),
    question(
      'c9q95',
      'Which occupations pay the lowest disability premiums and receive the better definitions of disability?',
      [
        {
          text: 'Construction workers.',
          why: 'Construction workers pay more and receive poorer definitions because the risk of disability is greater. Attorneys and doctors pay the lowest premiums and receive the better definitions.',
        },
        {
          text: 'Every applicant who is rated up.',
          why: 'Rating up increases the premium for a risk that is more than standard. Attorneys and doctors pay the lowest premiums and receive the better definitions.',
        },
        {
          text: 'Attorneys and doctors.',
          why: 'Attorneys and doctors pay the lowest premiums and receive the better definitions of disability. Construction workers pay more and receive poorer definitions because the risk is greater.',
          correct: true,
        },
        {
          text: 'Applicants who are declined.',
          why: 'A declined applicant does not receive the policy. Attorneys and doctors pay the lowest premiums and receive the better definitions.',
        },
      ],
    ),
    question(
      'c9q96',
      'Disability income policies are which kind of contract?',
      [
        {
          text: 'Contracts that reimburse every dollar of medical expense.',
          why: 'These policies are not described as medical reimbursement contracts. They are valued, or stated-amount, contracts.',
        },
        {
          text: 'Contracts that pay only construction workers.',
          why: 'Construction workers are a higher-premium occupation, not the contract type. Disability income policies are valued, or stated-amount, contracts.',
        },
        {
          text: 'Contracts that ignore net earned income.',
          why: 'The benefit the company will issue is based on net earned income. The contract form is a valued, or stated-amount, contract.',
        },
        {
          text: 'Valued, or stated-amount, contracts.',
          why: 'Disability income policies are valued, or stated-amount, contracts.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q97',
      'The disability benefit a company will issue is based on which income figure?',
      [
        {
          text: 'Net earned income.',
          why: 'The benefit the company will issue is based on net earned income.',
          correct: true,
        },
        {
          text: 'The premium class for attorneys and doctors.',
          why: 'Attorneys and doctors describe an occupation class with low premiums and better definitions. The issued benefit is based on net earned income.',
        },
        {
          text: 'The extra premium from rating up the policy.',
          why: 'Rating up increases the premium. The benefit amount the company will issue is based on net earned income.',
        },
        {
          text: 'Losses that an exclusion rider removes.',
          why: 'An exclusion rider means a related loss is not covered. The benefit the company will issue is based on net earned income.',
        },
      ],
    ),
    question(
      'c9q98',
      'Companies that cap benefits at 65% of higher incomes or 85% of lower incomes are trying to prevent what?',
      [
        {
          text: 'A benefit large enough to support a lifestyle similar to life before disability.',
          why: 'A similar lifestyle is one of the two principles the benefit should meet. The percentage cap, such as 65% or 85%, is there to prevent malingering and overuse.',
        },
        {
          text: 'Malingering and overuse.',
          why: 'Most companies set a maximum percentage, such as 65% for higher incomes or 85% for lower incomes, to prevent malingering and overuse. Others use a flat amount.',
          correct: true,
        },
        {
          text: 'Payment of any benefit based on net earned income.',
          why: 'The issued benefit is based on net earned income. The 65% and 85% caps are meant to prevent malingering and overuse.',
        },
        {
          text: 'Use of a flat amount instead of a percentage.',
          why: 'Some companies do use a flat amount. The stated percentages are used to prevent malingering and overuse.',
        },
      ],
    ),
    question(
      'c9q99',
      'If the risk is more than standard but is not a decline, what may the underwriter do?',
      [
        {
          text: 'Ignore occupation and charge the attorney rate.',
          why: 'Occupation still drives premium and the disability definition. For a more-than-standard risk that is not a decline, the underwriter can rate up the policy or add an exclusion rider.',
        },
        {
          text: 'Issue more than the insured earned before disability.',
          why: 'The benefit may not exceed what the insured earned before disability. A more-than-standard risk can be rated up or given an exclusion rider.',
        },
        {
          text: 'Rate up the policy, which increases the premium, or add an exclusion rider.',
          why: 'If the risk is more than standard but not a decline, the underwriter can rate up the policy, which increases the premium, or add an exclusion rider. A loss related to that exclusion is not covered, and a risk that is too great can be declined.',
          correct: true,
        },
        {
          text: 'Drop the benefit below any amount that would support a similar lifestyle.',
          why: 'One principle is that the benefit must be large enough for a lifestyle similar to the one before disability. Rating up or an exclusion rider is the response to a more-than-standard risk.',
        },
      ],
    ),
  ],
  'c9-group': [
    question(
      'c9q100',
      'Who may deduct the premium for employer-provided group disability coverage?',
      [
        {
          text: 'The employee, on benefits that came from the employee’s own contributions.',
          why: 'Benefit payments that come from employee contributions are not taxable, but that is not a premium deduction. The premium is deductible for the employer.',
        },
        {
          text: 'Social Security, because group benefits are supplemental.',
          why: 'Group benefits are usually supplemental to workers compensation. The premium deduction belongs to the employer.',
        },
        {
          text: 'Only a management employee on a long-term plan.',
          why: 'Group long-term disability is often reserved for management. The premium is deductible for the employer.',
        },
        {
          text: 'The employer.',
          why: 'The premium is deductible for the employer. Benefit payments that come from employer contributions are taxable to the employee, and benefit payments that come from employee contributions are not taxable.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q101',
      'Group plans usually set benefits as a percentage of the worker’s income. What do individual policies usually specify?',
      [
        {
          text: 'A flat amount.',
          why: 'Group plans usually set benefits as a percentage of the worker’s income. Individual policies usually specify a flat amount.',
          correct: true,
        },
        {
          text: '50% to 100% of income for every individual policy.',
          why: 'Fifty percent to 100% of income is the usual range for short-term group plans. Individual policies usually specify a flat amount.',
        },
        {
          text: '60% of income for the first 30 days only.',
          why: 'Sixty percent is the usual monthly limit on group long-term benefits, and 30 to 90 days is a work requirement. Individual policies usually specify a flat amount.',
        },
        {
          text: '66⅔% of monthly wage for every higher-wage employee.',
          why: 'Lower-wage employees are usually limited to 66⅔% of monthly wage, and higher-wage employees are usually limited to 50%. Individual policies usually specify a flat amount.',
        },
      ],
    ),
    question(
      'c9q102',
      'Short-term group disability benefits are usually what share of income?',
      [
        {
          text: 'A flat dollar amount chosen like an individual policy.',
          why: 'A flat amount is what individual policies usually specify. Short-term group plans usually pay 50% to 100% of income.',
        },
        {
          text: '50% to 100% of income.',
          why: 'Short-term group plans usually pay 50% to 100% of income. They usually pay for a maximum of 13 to 52 weeks, with 26 weeks the most common.',
          correct: true,
        },
        {
          text: '60% of income for more than 2 years.',
          why: 'More than 2 years, usually limited to 60% of income, describes group long-term plans. Short-term group benefits are usually 50% to 100% of income.',
        },
        {
          text: '66⅔% for higher-wage employees and 50% for lower-wage employees.',
          why: 'That swaps the wage bands: lower-wage employees are usually limited to 66⅔%, and higher-wage employees to 50%. Short-term group benefits are usually 50% to 100% of income.',
        },
      ],
    ),
    question(
      'c9q103',
      'Short-term coverage bought by the individual, rather than issued as the group plan, runs for which span?',
      [
        {
          text: '13 to 52 weeks, with 26 weeks the most common.',
          why: 'That duration is the usual maximum for short-term group plans. Individual short-term plans run from 6 months to 2 years.',
        },
        {
          text: 'More than 2 years, often to age 65.',
          why: 'More than 2 years is group long-term coverage, and a benefit period to age 65 is a long-term feature. Individual short-term plans run from 6 months to 2 years.',
        },
        {
          text: 'From 6 months to 2 years.',
          why: 'Individual short-term plans run from 6 months to 2 years. Short-term plans are not renewable.',
          correct: true,
        },
        {
          text: '30 to 90 days of work, and then they stop.',
          why: 'Thirty to 90 days is how long group plans usually require the employee to have worked before eligibility. Individual short-term plans run from 6 months to 2 years.',
        },
      ],
    ),
    question(
      'c9q104',
      'An employer short-term disability plan can set the elimination period as short as how many days?',
      [
        {
          text: '30 days, with no shorter choice.',
          why: 'Thirty days is the low end of the usual 30-to-90-day work requirement for eligibility. The elimination period can be as short as 0 days.',
        },
        {
          text: '90 days, matching the longest work requirement.',
          why: 'Ninety days is the high end of the usual eligibility work period. The elimination period can be as short as 0 days.',
        },
        {
          text: '6 months.',
          why: 'Six months is one possible short-term benefit period, not the shortest elimination period. The elimination period can be as short as 0 days.',
        },
        {
          text: '0 days.',
          why: 'Short-term disability from an employer can have an elimination period as short as 0 days. The benefit period is not longer than 2 years, and it may be 6 months or 1 year.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q105',
      'Group long-term plans usually limit the monthly benefit to what share of income?',
      [
        {
          text: '60% of income.',
          why: 'Group long-term plans pay for more than 2 years, and the monthly benefit is usually limited to 60% of income.',
          correct: true,
        },
        {
          text: '50% to 100% of income for more than 2 years.',
          why: 'Fifty percent to 100% is the short-term group range. Group long-term benefits are usually limited to 60% of income.',
        },
        {
          text: '66⅔% of income for every employee.',
          why: '66⅔% is the usual limit for lower-wage employees, not the general group long-term limit. That general limit is usually 60% of income.',
        },
        {
          text: 'A flat amount equal to the individual policy.',
          why: 'Individual policies usually specify a flat amount. Group long-term benefits are usually limited to 60% of income.',
        },
      ],
    ),
    question(
      'c9q106',
      'Group plans usually require how much work before the employee is eligible?',
      [
        {
          text: 'No work at all, because the elimination period can be 0 days.',
          why: 'A 0-day elimination period is a short-term benefit waiting rule. Eligibility usually requires 30 to 90 days of work.',
        },
        {
          text: '30 to 90 days of work.',
          why: 'Group plans usually require 30 to 90 days of work before the employee is eligible. Group benefits are usually supplemental to workers compensation, and some group plans cover only nonoccupational disabilities.',
          correct: true,
        },
        {
          text: '6 months to 2 years of work.',
          why: 'Six months to 2 years is how long individual short-term plans run. Group eligibility usually requires 30 to 90 days of work.',
        },
        {
          text: 'More than 2 years, the same as the long-term benefit period.',
          why: 'More than 2 years is how long group long-term plans pay. The work requirement for eligibility is usually 30 to 90 days.',
        },
      ],
    ),
    question(
      'c9q107',
      'Group long-term disability is often reserved for which employees?',
      [
        {
          text: 'Every employee after 0 days.',
          why: 'A 0-day elimination period can apply to employer short-term disability. Group long-term disability is often reserved for management.',
        },
        {
          text: 'Lower-wage employees only.',
          why: 'Lower-wage employees have a benefit limit, usually 66⅔% of monthly wage. Group long-term disability is often reserved for management.',
        },
        {
          text: 'Management.',
          why: 'Group long-term disability is often reserved for management. Its elimination period usually matches the short-term plan’s benefit period, and the benefit period may run to age 65.',
          correct: true,
        },
        {
          text: 'Only employees whose benefits are paid as a flat amount.',
          why: 'A flat amount is what individual policies usually specify. Group long-term disability is often reserved for management.',
        },
      ],
    ),
    question(
      'c9q108',
      'Lower-wage employees on group long-term disability are usually limited to what share of monthly wage?',
      [
        {
          text: '50% of monthly wage.',
          why: 'Higher-wage employees are usually limited to 50%. Lower-wage employees are usually limited to 66⅔% of monthly wage.',
        },
        {
          text: '60% of income, with no wage distinction.',
          why: 'Sixty percent is the usual overall limit on the group long-term monthly benefit. Lower-wage employees are usually limited to 66⅔% of monthly wage.',
        },
        {
          text: '100% of monthly wage for the first 26 weeks.',
          why: 'Up to 100% of income, and 26 weeks as the most common maximum, describe short-term group plans. Lower-wage long-term benefits are usually limited to 66⅔%.',
        },
        {
          text: '66⅔% of monthly wage.',
          why: 'Lower-wage employees are usually limited to 66⅔% of monthly wage. Higher-wage employees are usually limited to 50%.',
          correct: true,
        },
      ],
    ),
  ],
  'c9-business': [
    question(
      'c9q109',
      'Why does a business buy disability insurance on a key employee?',
      [
        {
          text: 'To protect itself when that employee becomes disabled.',
          why: 'A business buys disability insurance on key employees to protect itself when that employee becomes disabled.',
          correct: true,
        },
        {
          text: 'To pay the key employee a monthly income for life.',
          why: 'Key person coverage protects the business. Policies that fund a disability buy-sell pay a lump sum to buy out the business rather than monthly benefits.',
        },
        {
          text: 'To transfer the business when any employee asks for a transfer.',
          why: 'A buy-sell agreement states how the business will pass when an owner dies or becomes disabled. Key person coverage protects the business when a key employee becomes disabled.',
        },
        {
          text: 'To satisfy a one-year elimination period on every key employee.',
          why: 'A very long elimination period, possibly one or two years, belongs to policies that fund a disability buy-sell. Key person insurance protects the business when the key employee becomes disabled.',
        },
      ],
    ),
    question(
      'c9q110',
      'What does the business treat as the economic value of key person disability coverage?',
      [
        {
          text: 'Only the premium the key employee pays personally.',
          why: 'The business buys the coverage. The economic value is the potential loss of business income plus the cost of hiring and training a replacement.',
        },
        {
          text: 'The potential loss of business income plus the cost of hiring and training a replacement.',
          why: 'The economic value is the potential loss of business income plus the cost of hiring and training a replacement. The employer buys the coverage on the life of a key employee.',
          correct: true,
        },
        {
          text: 'A large lump sum used to buy out an owner.',
          why: 'A large lump sum is how a disability buy-sell is funded. Key person value is lost business income plus the cost of hiring and training a replacement.',
        },
        {
          text: 'The legal fee for an agreement prepared by an attorney.',
          why: 'An attorney prepares the buy-sell agreement. Key person economic value is lost business income plus hiring and training costs.',
        },
      ],
    ),
    question(
      'c9q111',
      'Because the key person is the insured, what must that person do?',
      [
        {
          text: 'Prepare the buy-sell agreement without an attorney.',
          why: 'A buy-sell agreement is a legal agreement prepared by an attorney. The key person must consent in writing.',
        },
        {
          text: 'Accept monthly benefits instead of a lump-sum buyout.',
          why: 'Monthly benefits versus a lump sum is the disability buy-sell payment contrast. The key person must consent in writing.',
        },
        {
          text: 'Consent in writing.',
          why: 'The key person is the insured and must consent in writing. The business owns the contract, pays the premium, and is the beneficiary.',
          correct: true,
        },
        {
          text: 'Wait one or two years before the business may apply.',
          why: 'One or two years is a possible elimination period on a disability buy-sell policy. The key person must consent in writing.',
        },
      ],
    ),
    question(
      'c9q112',
      'A buy-sell agreement states how the business will pass between owners in which events?',
      [
        {
          text: 'When a key employee refuses to consent in writing.',
          why: 'Written consent is required because the key person is the insured. The buy-sell agreement covers the death or disability of an owner.',
        },
        {
          text: 'When the business hires and trains a replacement.',
          why: 'Hiring and training costs are part of key person economic value. The agreement states how the business passes when an owner dies or becomes disabled.',
        },
        {
          text: 'Only when the business stops paying the premium.',
          why: 'The business pays the premium on key person coverage. A buy-sell agreement addresses death or disability of an owner.',
        },
        {
          text: 'When one owner dies or becomes disabled.',
          why: 'A buy-sell agreement is a legal agreement prepared by an attorney, and it states how the business will pass between owners when one owner dies or becomes disabled. The business often buys insurance to fund the buyout.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q113',
      'Policies that fund a disability buy-sell generally pay the buyout in what form?',
      [
        {
          text: 'A large lump sum, rather than monthly benefits.',
          why: 'These policies pay a large lump sum to buy out the business rather than monthly benefits. They generally have a very long elimination period, possibly one or two years.',
          correct: true,
        },
        {
          text: 'Monthly income equal to the cost of training a replacement.',
          why: 'Training costs are part of key person economic value. A disability buy-sell pays a large lump sum rather than monthly benefits.',
        },
        {
          text: 'Weekly benefits starting the day the owner becomes disabled.',
          why: 'The elimination period is very long, possibly one or two years, and the payment is a large lump sum rather than monthly benefits.',
        },
        {
          text: 'A refund of the attorney fee that prepared the agreement.',
          why: 'An attorney prepares the agreement. The insurance pays a large lump sum to buy out the business rather than monthly benefits.',
        },
      ],
    ),
  ],
  'c9-social': [
    question(
      'c9q114',
      'Social Security, also called Old Age Survivors Disability Insurance, is what kind of program, enacted when?',
      [
        {
          text: 'A state program enacted when Medicare Part B began.',
          why: 'Part B is a premium the person may have to pay. Social Security is a federal program enacted in 1935.',
        },
        {
          text: 'A federal program enacted in 1935.',
          why: 'Social Security, also called Old Age Survivors Disability Insurance, is a federal program enacted in 1935.',
          correct: true,
        },
        {
          text: 'A private plan that requires 40 quarters before anyone is covered.',
          why: 'Forty quarters is fully insured status, not the date or nature of the program. Social Security is a federal program enacted in 1935.',
        },
        {
          text: 'A federal program enacted after a worker earns 4 credits.',
          why: 'Up to 4 credits may be earned for each year of work. The program itself is a federal program enacted in 1935.',
        },
      ],
    ),
    question(
      'c9q115',
      'Social Security protects eligible workers and their dependents against financial loss from which events?',
      [
        {
          text: 'Only a disability that insurance companies already cover more strictly.',
          why: 'The Social Security definition is stricter than most definitions sold by insurance companies, but the program protects against more than disability. It covers financial loss from old age, disability, or death.',
        },
        {
          text: 'Only old-age losses of workers who are currently insured.',
          why: 'Currently insured status is one qualification path. The program protects against financial loss from old age, disability, or death.',
        },
        {
          text: 'Old age, disability, or death.',
          why: 'Social Security protects eligible workers and their dependents against financial loss from old age, disability, or death. With few exceptions, almost everyone is covered, and it matters when measuring a person’s need for life insurance.',
          correct: true,
        },
        {
          text: 'Premiums for Medicare Part B only.',
          why: 'A person entitled to premium-free Part A must pay a monthly premium for Part B. The protection is against financial loss from old age, disability, or death.',
        },
      ],
    ),
    question(
      'c9q116',
      'The Quarter of Coverage system is used to decide what?',
      [
        {
          text: 'The monthly premium for Medicare Part B.',
          why: 'Part B requires a monthly premium. The Quarter of Coverage system decides whether a worker qualifies.',
        },
        {
          text: 'Whether disability benefits are retroactive.',
          why: 'Benefits are not retroactive to the start of the disability. The Quarter of Coverage system decides whether a worker qualifies.',
        },
        {
          text: 'Which 5 years of income are dropped from the earnings average.',
          why: 'The lowest 5 years of income may be dropped when Average Indexed Monthly Earnings are calculated. Quarters of coverage decide whether a worker qualifies.',
        },
        {
          text: 'Whether a worker qualifies.',
          why: 'The Quarter of Coverage system decides whether a worker qualifies. The type and amount of benefits depend on credits earned.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q117',
      'How many credits may a worker in covered employment, or a self-employed person, earn for each year of work?',
      [
        {
          text: 'Up to 4 credits.',
          why: 'A worker in covered employment, or a self-employed person, may earn up to 4 credits for each year of work.',
          correct: true,
        },
        {
          text: 'Up to 40 credits.',
          why: 'Forty quarters of coverage is fully insured status, the equivalent of 10 years of work. The yearly maximum is 4 credits.',
        },
        {
          text: '6 credits, and only in a 13-quarter period.',
          why: 'Six credits during a 13-quarter period is currently insured status. The yearly maximum for a worker or self-employed person is 4 credits.',
        },
        {
          text: 'One credit for each of the highest 35 years.',
          why: 'The highest 35 years are used for Average Indexed Monthly Earnings. A worker may earn up to 4 credits for each year of work.',
        },
      ],
    ),
    question(
      'c9q118',
      'Fully insured status means how much covered work?',
      [
        {
          text: '6 credits during the 13-quarter period before death or disability.',
          why: 'That is currently insured, or partially insured, status. Fully insured means 40 quarters of coverage, the equivalent of 10 years of work.',
        },
        {
          text: '40 quarters of coverage, the equivalent of 10 years of work.',
          why: 'Fully insured means 40 quarters of coverage, the equivalent of 10 years of work.',
          correct: true,
        },
        {
          text: '4 credits in total, no matter how many years were worked.',
          why: 'Four credits is the maximum for each year, not the fully insured total. Fully insured status is 40 quarters, the equivalent of 10 years.',
        },
        {
          text: 'The highest 35 years of indexed earnings.',
          why: 'The highest 35 years are used to calculate Average Indexed Monthly Earnings. Fully insured status is 40 quarters, the equivalent of 10 years of work.',
        },
      ],
    ),
    question(
      'c9q119',
      'Fully insured status brings which benefits?',
      [
        {
          text: 'Disability benefits that are retroactive to the first day of disability.',
          why: 'Disability benefits are not retroactive to the start of the disability. Fully insured status brings retirement, premium-free Medicare Part A, and survivor benefits.',
        },
        {
          text: 'Part B with no monthly premium.',
          why: 'A person entitled to premium-free Part A is automatically eligible for Part B but must pay a monthly premium. Fully insured status brings retirement, premium-free Part A, and survivor benefits.',
        },
        {
          text: 'Social Security retirement, premium-free Medicare Part A, and survivor benefits.',
          why: 'Fully insured status brings Social Security retirement, premium-free Medicare Part A, and survivor benefits.',
          correct: true,
        },
        {
          text: 'Currently insured status with only 6 credits.',
          why: 'Six credits in a 13-quarter period is currently insured status, which is separate from fully insured status. Fully insured status brings retirement, premium-free Part A, and survivor benefits.',
        },
      ],
    ),
    question(
      'c9q120',
      'A person entitled to premium-free Medicare Part A is automatically eligible for Part B, but what must that person do?',
      [
        {
          text: 'Earn 40 more quarters before Part B can start.',
          why: 'Forty quarters is fully insured status, which already brings premium-free Part A. Part B eligibility is automatic, but the person must pay a monthly premium.',
        },
        {
          text: 'Drop the lowest 5 years of income before enrolling.',
          why: 'Dropping the lowest 5 years is part of the earnings calculation. For Part B, the person must pay a monthly premium.',
        },
        {
          text: 'Wait 12 months, the same period used in the disability definition.',
          why: 'Twelve months is the duration in the disability definition. Part B requires a monthly premium even though eligibility is automatic.',
        },
        {
          text: 'Pay a monthly premium.',
          why: 'A person entitled to premium-free Part A is automatically eligible for Part B but must pay a monthly premium.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q121',
      'Currently insured, or partially insured, status requires which credits?',
      [
        {
          text: '6 credits during the 13-quarter period ending with death, disability entitlement, or old-age entitlement.',
          why: 'Currently insured status requires 6 credits during the 13-quarter period ending with the quarter in which the person dies, becomes entitled to disability benefits, or becomes entitled to old-age benefits. For younger workers, the quarters required for benefits differ by age under a Social Security table.',
          correct: true,
        },
        {
          text: '40 quarters, with no shorter period for any worker.',
          why: 'Forty quarters is fully insured status. Currently insured status is 6 credits in a 13-quarter period, and younger workers can have a different quarter requirement by age.',
        },
        {
          text: '4 credits in the highest 35 years.',
          why: 'Four credits is the yearly maximum, and 35 years is the earnings average. Currently insured status is 6 credits during a 13-quarter period.',
        },
        {
          text: '10 years of credits ending in the 6th month of disability.',
          why: 'Ten years is the fully insured equivalent of 40 quarters, and the 6th month is when disability benefits begin. Currently insured status is 6 credits in a 13-quarter period.',
        },
      ],
    ),
    question(
      'c9q122',
      'Are Social Security disability benefits retroactive to the start of the disability?',
      [
        {
          text: 'Yes. They are paid back to the first day of disability.',
          why: 'Benefits are not retroactive to the start of the disability. The waiting period is 5 months, and benefits begin at the start of the 6th month.',
        },
        {
          text: 'No. They are not retroactive to the start of the disability.',
          why: 'Benefits begin at the start of the 6th month and are not retroactive to the start of the disability. The waiting period is 5 months.',
          correct: true,
        },
        {
          text: 'Yes, but only for a worker with 40 quarters.',
          why: 'Forty quarters is fully insured status. Disability benefits are not retroactive to the start of the disability for that worker either.',
        },
        {
          text: 'Yes, for the lowest 5 years of earnings.',
          why: 'The lowest 5 years of income may be dropped from the earnings average. That drop is not a retroactive disability payment.',
        },
      ],
    ),
    question(
      'c9q123',
      'How does the Social Security disability definition compare with definitions most insurance companies sell?',
      [
        {
          text: 'It is easier, because any suitable job still counts as work.',
          why: 'The Social Security definition is stricter than most definitions sold by insurance companies. It requires inability to engage in any substantially gainful activity.',
        },
        {
          text: 'It matches a 40-quarter retirement test.',
          why: 'Forty quarters is fully insured status for retirement, premium-free Part A, and survivor benefits. The disability definition is stricter than most definitions insurers sell.',
        },
        {
          text: 'It is stricter.',
          why: 'The definition is stricter than most definitions sold by insurance companies. It is the inability to engage in any substantially gainful activity because of a medically determinable physical or mental impairment that has lasted, or is expected to last, 12 months, or to result in an early death.',
          correct: true,
        },
        {
          text: 'It ignores impairments that are expected to end in death.',
          why: 'An impairment expected to result in an early death can meet the definition. The standard is stricter than most definitions sold by insurance companies.',
        },
      ],
    ),
    question(
      'c9q124',
      'The disability benefit is based on the Primary Insurance Amount, which is calculated from Average Indexed Monthly Earnings over which years?',
      [
        {
          text: 'The lowest 5 years only.',
          why: 'The lowest 5 years of income may be dropped. The average uses the highest 35 years.',
        },
        {
          text: 'The most recent 10 years, equal to 40 quarters.',
          why: 'Ten years and 40 quarters describe fully insured status. The Primary Insurance Amount uses Average Indexed Monthly Earnings over the highest 35 years.',
        },
        {
          text: 'A 13-quarter period with 6 credits.',
          why: 'That period is currently insured status. The benefit amount uses the highest 35 years of Average Indexed Monthly Earnings.',
        },
        {
          text: 'The highest 35 years.',
          why: 'The amount is based on the worker’s Primary Insurance Amount, calculated from Average Indexed Monthly Earnings over the highest 35 years. The lowest 5 years of income may be dropped.',
          correct: true,
        },
      ],
    ),
    question(
      'c9q125',
      'Benefits that continue for 3 months after a return to work earning more than $1,050 a month are intended as what?',
      [
        {
          text: 'An incentive to return to work.',
          why: 'If the person returns to work making more than $1,050 a month, disability benefits continue for 3 months. That is an incentive to return to work.',
          correct: true,
        },
        {
          text: 'A retroactive payment to the first day of disability.',
          why: 'Benefits are not retroactive to the start of the disability. The 3-month continuation after earnings above $1,050 a month is an incentive to return to work.',
        },
        {
          text: 'A substitute for the 5-month waiting period.',
          why: 'The waiting period is 5 months, and benefits begin at the start of the 6th month. The 3-month continuation is an incentive to return to work.',
        },
        {
          text: 'A way to drop the lowest 5 years of earnings.',
          why: 'The lowest 5 years may be dropped from Average Indexed Monthly Earnings. Continuing benefits for 3 months above $1,050 a month is an incentive to return to work.',
        },
      ],
    ),
  ],
}
