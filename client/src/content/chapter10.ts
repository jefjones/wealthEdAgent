import { question } from './build.ts'
import type { Chapter } from './types.ts'
import { chapter10Extra } from './extra/chapter10.ts'

/**
 * Wording follows the course OCR in content/source/chapter-10-ocr.txt.
 * The source pages have no practice questions. Questions are written from that text,
 * four options each, with a reason for the right answer and for each wrong one.
 */
export const chapter10: Chapter = {
  id: 'ch-medical',
  number: 9,
  title: 'Medical Plans like HMOs and PPOs',
  summary:
    'How basic, major medical, HMO, PPO, and point-of-service plans pay, and the Utah and federal rules that sit on top of them.',
  sections: [
    {
      id: 'c10-concepts',
      title: 'Deductibles, coinsurance, and copays',
      body: `Basic medical expense insurance covers essential medical, hospital, and surgical benefits. Early basic plans, sold separately as hospital, medical, and surgical coverage, used first-dollar coverage, meaning no deductible, and low dollar limits. They did not protect a family against a catastrophic bill. Medical expense coverage can be broad, or it can be written narrowly for only one or two benefits.

Fee-for-service plans pay providers for their billed charges for each service. Prepaid plans provide medical and hospital benefits as services rather than dollars. Providers are paid regularly whether or not they treat the person, and they receive no extra payment when they do.

Specified coverage limits the policy to one illness or one narrow set of benefits, such as a cancer policy, prescription drugs, or dental care. These policies are often written alone or alongside a traditional fee-for-service major medical policy. Comprehensive care covers most medical expenses, typically preventive care, routine physicals, immunizations, outpatient services, and hospitalization. HMOs are an example.

A benefit schedule states exactly what is covered and for how much. Usual, reasonable, and customary charges mean the insurer pays an amount based on the average charge for that procedure in that geographic area.

Traditional reimbursement plans let the insured use most any qualified physician. Managed care limits benefits to physicians and care centers on a list.

Insureds are people covered by insurance who usually receive the benefits. Subscribers, also called participants or members, sign up for prepaid plans such as HMOs. On an individual policy, the subscriber is the person in whose name the contract is issued. On a group policy, the subscriber is the person whose employment or other status, other than family dependency, makes that person eligible to enroll.

Other terms in this chapter:
• Appeal — a request that a higher authority review a decision.
• Blanket policy — covers members of a group during a particular activity, without naming each person, such as students, passengers, or sports teams.
• Capitation — a set amount paid to a physician or group for each enrolled person per period, whether or not that person seeks care.
• Gatekeeper — the primary care physician in an HMO.
• Indemnity plan — pays the insured a predetermined fixed rate, regardless of the actual expense.
• Nonrenewal — termination at the policy’s expiration date.
• Out-of-pocket expenses — coinsurance and deductibles the insured pays before the insurer pays its portion.
• Reimbursement — repaying a party who has spent or lost money.
• Stop-loss — the amount the insured pays out of pocket during the year.
• Subscriber — a person who signs up for a prepaid health plan, such as an HMO.`,
      questions: [
        question(
          'c10q01',
          'How does a prepaid medical plan pay its providers?',
          [
            {
              text: 'Providers are paid regularly whether or not they provide a service, and they receive no extra payment when they do.',
              why: 'Fee-for-service pays the billed charge for each service. A subscriber signs up for a prepaid plan such as an HMO. An insured is a person covered by insurance.',
              correct: true,
            },
            {
              text: 'Providers bill each service, and the plan pays that charge.',
              why: 'Payment for each billed service is fee-for-service, not a prepaid plan.',
            },
            {
              text: 'The plan pays the insured a fixed indemnity, and the provider is not involved.',
              why: 'An indemnity plan pays the insured a predetermined rate regardless of the actual expense. That is not how prepaid provider compensation works.',
            },
            {
              text: 'Providers are paid only after the insured meets a high deductible.',
              why: 'Basic plans were first-dollar coverage, with no deductible and low limits. A deductible is a major medical feature, not the definition of prepaid compensation.',
            },
          ],
        ),
        question(
          'c10q02',
          'What does usual, reasonable, and customary mean?',
          [
            {
              text: 'The insurer pays an amount based on the average charge for that procedure in that geographic area.',
              why: 'A benefit schedule instead lists exactly what is covered and the dollar amount. Specified coverage is limited to one illness or a narrow benefit, such as cancer or dental care. Comprehensive care covers most medical expenses.',
              correct: true,
            },
            {
              text: 'The insurer pays whatever the provider bills, with no geographic comparison.',
              why: 'Paying each billed charge is fee-for-service. Usual, reasonable, and customary uses the average charge in the area.',
            },
            {
              text: 'The insured may use any physician, and the plan must pay the full bill.',
              why: 'Freedom to use most any qualified physician describes a traditional reimbursement plan. Usual, reasonable, and customary is a payment measure, not a provider-choice rule.',
            },
            {
              text: 'Coverage is limited to one disease named in the policy.',
              why: 'A policy limited to one illness is specified coverage. Usual, reasonable, and customary describes how much is paid for a procedure.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c10-major',
      title: 'Major medical plans',
      body: `Carriers include stock and mutual insurers, Blue Cross and Blue Shield, HMOs, and PPOs. Care is given in offices and hospitals, and also in surgicenters, urgent care centers, and skilled nursing facilities.

Major medical plans grew out of basic hospital expense policies as treatment became more sophisticated and expensive. Basic plans had low limits and first-dollar coverage, and they left catastrophic bills unprotected. Major medical was built for catastrophic loss. Deductibles and coinsurance keep it affordable because the policy does not respond to small claims the insured can absorb, and it does respond to rare, financially disastrous losses.

Major medical contracts use high maximum limits, blanket coverage, coinsurance, and a deductible. The deductible is paid up front. Coinsurance, the sharing of cost, applies after the deductible is met and the claim is submitted. Most plans cover eligible expenses in and out of the hospital and have high maximums.

Common exclusions are injuries caused by war, intentionally self-inflicted injuries, regular dental, vision, or hearing care, custodial care, injuries covered by workers compensation, and cosmetic surgery unless a birth defect or an accident requires it.

Premiums vary with the deductible, the coinsurance percentage, the stop-loss, and the maximum benefit. A typical annual deductible is $100 to $2,500. The insured pays that portion each year before benefits start. A higher deductible lowers the premium.

After the deductible, the insured and the insurer share expenses. The insurer generally pays the larger share: 90/10, 80/20, or 70/30, or an equal 50/50 share. The smaller the insurer’s percentage, the lower the premium. Coinsurance requires the insured to participate in the ongoing cost.

Stop-loss is the amount the insured pays out of pocket during the year. Once that amount is reached, the insurer pays 100% of eligible expenses for the rest of the year. The expenses that count are the insured’s share of coinsurance, and they may or may not include the deductible. A higher stop-loss means a lower premium.

An impairment, or exclusion, rider removes coverage for a defined pre-existing condition, such as back injuries. It may be temporary or permanent. It is often the only way a person with an existing impairment can buy coverage at a reasonable cost. In the course example, a physician with a prior back injury can be issued a disability policy that excludes back claims and still covers other disabilities. The underwriter decides whether the exclusion lasts for a short time, such as a period with no further treatment, or permanently. Most riders add coverage and cost extra. This rider takes coverage away. There is no extra charge, and the premium is not reduced.

A small employer may offer a defined benefit health plan or a defined contribution arrangement. The defined contribution plan is an employer group plan the employee selects individually, using pre-tax dollars. The insurer must follow the state insurance code: allow a small employer to enroll, impose no surcharge for that choice, and allow a large employer group to enroll.`,
      questions: [
        question(
          'c10q03',
          'Why were major medical plans designed with deductibles and coinsurance?',
          [
            {
              text: 'So the policy could skip small claims and still cover rare catastrophic losses at an affordable premium.',
              why: 'Basic plans used first-dollar coverage and low limits, and they did not protect against a financially disastrous bill. Major medical uses high maximums, blanket coverage, coinsurance, and a deductible.',
              correct: true,
            },
            {
              text: 'So the plan could pay providers a flat monthly amount whether or not they treat anyone.',
              why: 'A flat amount per enrolled person is capitation, used by HMOs. Major medical is an indemnity-style expense plan.',
            },
            {
              text: 'So cosmetic surgery and workers compensation injuries would be covered in full.',
              why: 'War, intentional self-inflicted injury, routine dental, vision, and hearing care, custodial care, workers compensation injuries, and cosmetic surgery are typical exclusions. Cosmetic surgery may be covered if a birth defect or an accident requires it.',
            },
            {
              text: 'So the insured would pay nothing until a lifetime maximum is reached.',
              why: 'The deductible is paid up front, and coinsurance is shared after that. The insured does not wait until a lifetime maximum before paying.',
            },
          ],
        ),
        question(
          'c10q04',
          'What does a higher annual deductible do to a major medical premium?',
          [
            {
              text: 'It lowers the premium. A typical deductible is $100 to $2,500.',
              why: 'A smaller insurer coinsurance share also lowers the premium. A higher stop-loss lowers the premium. After stop-loss, the insurer pays 100% of eligible expenses for the rest of the year. Stop-loss counts the insured’s coinsurance and may or may not include the deductible.',
              correct: true,
            },
            {
              text: 'It raises the premium, because the insurer takes more risk.',
              why: 'Accepting more risk through a higher deductible is what lets the insurer lower the premium.',
            },
            {
              text: 'It has no effect. Only the stop-loss changes the premium.',
              why: 'Premiums vary with the deductible, the coinsurance percentage, the stop-loss, and the maximum benefit.',
            },
            {
              text: 'It removes coinsurance, so the insurer pays 100% from the first dollar.',
              why: 'Coinsurance applies after the deductible. First-dollar coverage with no deductible describes the older basic plans.',
            },
          ],
        ),
        question(
          'c10q05',
          'What does an impairment rider do?',
          [
            {
              text: 'It removes coverage for a specific pre-existing condition. There is no extra charge, and the premium is not reduced.',
              why: 'The rider may be temporary or permanent. It is often the only way someone with an existing impairment can buy coverage at a reasonable cost. Most other riders add coverage and cost extra.',
              correct: true,
            },
            {
              text: 'It adds coverage for the impairment and increases the premium.',
              why: 'The impairment rider takes something away from standard coverage. It does not add a benefit or an extra charge.',
            },
            {
              text: 'It lowers the premium in proportion to the excluded condition.',
              why: 'The premium is not reduced to reflect the reduction in coverage.',
            },
            {
              text: 'It pays first-dollar benefits for the named condition up to a low limit.',
              why: 'First-dollar, low-limit benefits describe basic medical plans. The impairment rider excludes the condition.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c10-hmo',
      title: 'HMOs',
      body: `The Health Maintenance Act of 1973 supported HMOs and required employers with more than 25 employees to offer an HMO as an alternative to their regular plan. The dual-choice requirement has expired and has not been reenacted. The goal was to cut cost through preventive care. HMOs offer free annual checkups for the family, hoping to catch disease early, and free or low-cost immunizations.

An HMO provides benefits as services, not as reimbursement of a physician’s or hospital’s bill. It both finances and delivers care. It serves people who live inside specific boundaries, such as a county or a city. People outside those boundaries are not eligible. Care comes from physicians who meet the HMO’s standards and accept a prenegotiated price.

A copayment is a specific part of the cost, or a flat dollar amount, such as $5, $10, or $25 per office visit. HMO plans usually have no deductible. The HMO is capitated: it receives a flat amount each month for each member, whether or not the member sees a physician. It is a prepaid plan.

The member chooses a primary care physician, the gatekeeper. That physician or the HMO is paid regularly for responsibility for the member, whether or not care is provided. It is in the physician’s interest to keep the member healthy. A specialist visit requires a referral from the gatekeeper. The referral system keeps members away from higher-priced specialists unless the visit is necessary. In many HMOs the primary physician bears a financial cost for a referral, so the physician may try another treatment first. HMOs must have a way to handle complaints about delayed referrals or other care and coverage issues.

Inpatient hospital care is provided in or out of the service area. Treatment of mental, emotional, or nervous disorders, including alcohol or drug rehabilitation, may be limited. Emergency care must be available in or out of the service area. If emergency care is given outside the area, the HMO tries to bring the member back so salaried member physicians can provide the care.`,
      questions: [
        question(
          'c10q06',
          'How does a member of an HMO see a specialist?',
          [
            {
              text: 'The primary care physician, the gatekeeper, must refer the member.',
              why: 'The HMO pays a flat capitated amount per member whether or not the member seeks care. There is usually no deductible. A copayment is a flat amount such as $5, $10, or $25. Only people who live inside the service area may belong.',
              correct: true,
            },
            {
              text: 'The member may go to any specialist and the HMO pays the full billed charge.',
              why: 'An HMO limits care to physicians who meet its standards and accept its price. A specialist visit goes through the gatekeeper.',
            },
            {
              text: 'The member pays a deductible first, then the HMO reimburses 80% of the specialist’s bill.',
              why: 'HMOs usually have no deductible, and they provide services rather than reimbursing bills. An 80/20 split is major medical coinsurance.',
            },
            {
              text: 'Emergency care outside the service area is not covered, so the member must wait to return.',
              why: 'Emergency care must be provided in or out of the service area. The HMO then tries to bring the member back to salaried member physicians.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c10-ppo',
      title: 'PPOs and other network plans',
      body: `A preferred provider organization is a traditional answer to the HMO. Physicians are paid fees rather than a salary, and members are encouraged, through better benefits, to use physicians who agreed to the fees. A member may use any physician. The PPO might pay 90% of the cost of a physician on its list and only 70% if the member uses a physician who is not.

A PPO is a group of physicians and hospitals that contract with employers, insurers, or third parties to provide care at a reduced fee. It differs from an HMO in two ways. Care is not prepaid. Physicians are paid fee-for-service. Subscribers are not required to use contracted physicians or facilities.

A limited health plan furnishes, directly or through others, services of dentists, optometrists, physical therapists, podiatrists, psychologists, physicians, chiropractic physicians, naturopathic physicians, osteopathic physicians, social workers, family counselors, other providers, or reasonable combinations of those services. The services are exchanged for prepaid periodic payments set before the service period, and the plan must arrange or provide the services. A limited health plan does not include an HMO, an insurer licensed under the nonprofit health service insurance corporation law, or an individual who contracts only to perform that individual’s own professional services.

Open panel means the caregiver contracts with the health organization but may still treat patients who are not members. Those doctors are not employees of the organization. Closed panel means the caregiver treats only members and may not treat other patients. Those doctors are employees of the organization.

Any physician or hospital that qualifies, follows the PPO’s standards, and charges the PPO’s fees can be added to the list at any time. Providers may belong to several PPOs at once.

Utah NetCare is alternative coverage for people who cannot afford COBRA premiums. It is available to people eligible for federal COBRA or state mini-COBRA continuation, or for conversion to an individual plan after those benefits are exhausted. A spouse or dependent, including a surviving spouse or dependent whose coverage ends at the employee’s death, may extend coverage. NetCare is an individual or group plan for up to 12 months for Utah residents leaving an employer plan. After 12 months, members must reapply as individuals. Rates are lower because NetCare does not meet the minimum coverage other Utah health plans must provide. The insured pays some expenses, including diabetes management, adoption benefits, and use of a specialist as a primary care physician.

Insurers required to offer alternative coverage must give employers a model letter explaining it at renewal, or when an employer or employee asks.`,
      questions: [
        question(
          'c10q07',
          'How does a PPO differ from an HMO?',
          [
            {
              text: 'PPO physicians are paid a fee for each service, and subscribers do not have to use the contracted providers.',
              why: 'Using a listed physician might be paid at 90%, and a physician off the list at 70%. An open-panel doctor may still treat nonmembers and is not an employee. A closed-panel doctor treats only members and is an employee.',
              correct: true,
            },
            {
              text: 'PPO care is prepaid, and members must stay inside a county line.',
              why: 'Capitation and a limited service area describe an HMO. A PPO does not provide care on a prepaid basis.',
            },
            {
              text: 'A PPO pays the same percentage whether or not the physician is on the list.',
              why: 'The encouragement to use approved physicians is a higher benefit, such as 90% on the list and 70% off the list.',
            },
            {
              text: 'A PPO is a limited plan that covers only dentists and optometrists.',
              why: 'A limited health plan can cover dentists, optometrists, and a list of other providers in return for a prepaid payment. A PPO is a fee-for-service network of physicians and hospitals. A limited health plan does not include an HMO.',
            },
          ],
        ),
        question(
          'c10q08',
          'Why can Utah NetCare charge lower rates?',
          [
            {
              text: 'It does not meet the minimum coverage other Utah health plans must provide, so the insured pays some expenses such as diabetes management and adoption benefits.',
              why: 'NetCare lasts up to 12 months for residents leaving an employer plan, including people eligible for COBRA, mini-COBRA, or conversion after those benefits end. After 12 months the member must reapply as an individual.',
              correct: true,
            },
            {
              text: 'It is an HMO with no copayments and unlimited specialist visits.',
              why: 'NetCare’s lower price comes from leaving out benefits other Utah plans must cover, including use of a specialist as a primary care physician. It is not described as a no-copay HMO.',
            },
            {
              text: 'The federal government pays the entire premium for 12 months.',
              why: 'NetCare is alternative coverage for people who cannot afford COBRA premiums. The course does not say the federal government pays the premium.',
            },
            {
              text: 'It replaces workers compensation for on-the-job injuries.',
              why: 'Workers compensation injuries are a major medical exclusion. NetCare is continuation-style coverage after employer coverage ends.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c10-pos',
      title: 'Point-of-service plans',
      body: `A point-of-service plan combines an HMO and a PPO. Employees do not have to lock into one plan. They can choose differently each time they need care.

PPO members, like HMO members, have a contracted network, but they do not have to use only in-network providers. In a point-of-service plan the person may visit an in-network provider or an out-of-network physician. Out-of-network copayments, coinsurance, and deductibles may be substantially higher. Participants usually have a network controlled by a primary care physician. They may seek care outside the network at reduced coverage. These plans are also called open-ended HMOs.

Gatekeeping is combined with the ability to self-refer at a higher out-of-pocket cost. Care arranged by the primary care physician pays a higher benefit at a lower cost. Self-referral, without the primary physician arranging the service, is generally more expensive. If a nonmember physician is used, that physician is paid a fee for service, and the member pays a higher coinsurance amount or percentage.`,
      questions: [
        question(
          'c10q09',
          'What happens if a point-of-service member self-refers outside the network?',
          [
            {
              text: 'The member can go, but copayments, coinsurance, and deductibles are higher than for care arranged by the primary care physician.',
              why: 'A point-of-service plan is also called an open-ended HMO. It combines gatekeeping with the freedom to choose differently each time care is needed. A nonmember physician is paid a fee for service.',
              correct: true,
            },
            {
              text: 'The visit is not covered, because the member left the service area.',
              why: 'Out-of-network care is allowed. The cost to the member is higher. Leaving a geographic service area is an HMO eligibility rule.',
            },
            {
              text: 'The plan pays 100% and waives the gatekeeper.',
              why: 'Care arranged through the primary physician produces a higher benefit and a lower cost. Self-referral costs more, not less.',
            },
            {
              text: 'The member must switch permanently to a PPO.',
              why: 'The point of the plan is that the member does not have to lock into one design. A different choice can be made each time care is needed.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c10-hsa',
      title: 'Health savings accounts',
      body: `A health savings account helps an individual save for qualified health expenses of the individual, spouse, or dependents. A person covered by a high deductible health plan may make a tax-deductible contribution and use it for out-of-pocket medical expenses. Employer contributions are not included in the individual’s taxable income.

To be eligible, the person must be covered by a high deductible health plan, must not have other health insurance, must not be eligible for Medicare, and cannot be claimed as a dependent on someone else’s return. The other-coverage rule does not apply to specific injury insurance, accident, disability, dental, vision, or long-term care.

The account is linked to high deductible insurance. In 2023 the qualified plan’s minimum deductible is $1,500 for singles and $3,000 for families. Eligible people, or their employers, may save up to the contribution limit regardless of the plan deductible: $3,850 for singles and $7,750 for families. The account must be opened before Medicare eligibility age. Taxpayers age 55 and older may contribute an extra amount, up to $1,000.

Money used for a nonhealth expense is taxed, plus a 20% penalty. After age 65, a nonhealth withdrawal is taxed but not penalized.`,
      questions: [
        question(
          'c10q10',
          'Which person may contribute to a health savings account?',
          [
            {
              text: 'Someone covered by a high deductible health plan, with no other disqualifying health insurance, who is not eligible for Medicare and is not claimed as a dependent.',
              why: 'Accident, disability, dental, vision, long-term care, and specific injury policies do not spoil eligibility. In 2023 the minimum deductibles are $1,500 and $3,000, and the contribution limits are $3,850 and $7,750. Age 55 and older may add up to $1,000. A nonhealth withdrawal is taxed plus 20% before age 65, and taxed without the penalty after 65.',
              correct: true,
            },
            {
              text: 'Anyone eligible for Medicare who wants to save the penalty.',
              why: 'Medicare eligibility prevents opening or contributing. After age 65 a nonhealth withdrawal is taxed but not penalized. That is not the same as being allowed to contribute while on Medicare.',
            },
            {
              text: 'A person whose only coverage is an employer HRA funded with salary reductions.',
              why: 'An HSA requires a high deductible health plan, and other health insurance generally disqualifies the person. An HRA is funded with employer dollars, not salary reductions.',
            },
            {
              text: 'A dependent child on a parent’s tax return who has a dental-only policy.',
              why: 'A person claimed as a dependent cannot have an HSA. Dental-only coverage is allowed alongside an HSA, but dependency is not.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c10-hra',
      title: 'Health reimbursement accounts',
      body: `A health reimbursement account is employer money set aside to reimburse employees for qualified medical expenses, such as deductibles and coinsurance. Employers get the same kind of preferential tax treatment they get for funding an insurance plan, and they may deduct the cost as a business expense.

An HRA is a contribution health care plan, not a defined benefit plan. It is not a taxable employee benefit. Employer contributions are tax deductible. Employees may roll unused balances to the next year. Employers do not have to advance claim payments during the early months of the plan year. The account is funded with employer dollars, not employee salary reductions. Coupling it with a high deductible, usually lower-cost, health plan can reduce the employer’s cost. It is meant to balance the purchasing power of larger and smaller employers.

HRAs are open to employees of companies of all sizes, but the employer sets eligibility and contribution limits. There is no statutory contribution limit. The employer may set the limit and decide whether unused amounts roll over. Former employees, including retirees, may keep access to unused amounts, at the employer’s discretion. The account stays with the originating employer and does not follow the employee to a new job.`,
      questions: [
        question(
          'c10q11',
          'Who funds a health reimbursement account, and what happens to the balance if the employee changes jobs?',
          [
            {
              text: 'The employer funds it. The account stays with that employer and does not follow the employee.',
              why: 'It is not a taxable employee benefit, employer contributions are deductible, and unused amounts may roll over if the employer allows it. There is no statutory contribution limit. Former employees may keep access only at the employer’s discretion.',
              correct: true,
            },
            {
              text: 'The employee funds it with pre-tax salary reductions, and the account moves to the next employer.',
              why: 'Salary-reduction funding describes a defined contribution health arrangement in which the employee buys a plan with pre-tax dollars. An HRA is employer dollars and stays behind.',
            },
            {
              text: 'The employee deducts contributions, and the balance must be spent by year-end.',
              why: 'The employer deducts the cost. Employees can roll unused balances at year-end, subject to the employer’s rules. An HSA, not an HRA, is the employee tax-deductible contribution.',
            },
            {
              text: 'Medicare funds it for anyone over 65, with a $1,000 catch-up.',
              why: 'The $1,000 additional contribution is the HSA catch-up at age 55. An HRA is an employer plan for companies of any size.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c10-cost',
      title: 'How plans try to control cost',
      body: `Managed care plans such as HMOs and PPOs control cost by controlling how participants use care. Cost-saving and case-management provisions include controlled access to providers, large-claim management, preventive care, alternatives to hospitalization, second surgical opinions, preadmission testing, catastrophic case management, risk sharing, and high-quality care. Insurers use case managers for large ongoing claims through utilization management. The manager evaluates whether care is appropriate, necessary, and of good quality, and may use prospective and concurrent review.

Plans encourage preventive care and a healthier lifestyle. Annual exams, mammograms, and other tests can find a problem before symptoms appear. Because hospital stays are costly, many plans push outpatient services when possible.

Alternatives to a hospital stay include home health care, with periodic visits and possibly a home health aide working with a family member. A terminally ill patient may choose hospice instead of the hospital. Hospice handles daily needs and pain relief and does not attempt a cure. Painkillers and special beds are paid for. Operations and antibiotics are not.

If a policy has maternity benefits, it must cover mother and newborn for at least 48 hours after a normal birth and 96 hours after a caesarean section.

Utilization management reviews whether health care services and resources are appropriate and efficiently allocated, including review of claims. Prospective review, or precertification, lets the physician submit claim information before treatment to learn whether the procedure is covered and at what rate. Concurrent review monitors the hospital stay so the patient is released as planned. Retrospective review is the third type.`,
      questions: [
        question(
          'c10q12',
          'How long must a maternity policy cover the mother and newborn?',
          [
            {
              text: 'At least 48 hours after a normal birth and 96 hours after a caesarean section.',
              why: 'Hospice attends to daily needs and pain relief and does not try to cure. Prospective review happens before treatment. Concurrent review watches the hospital stay. Preventive care is encouraged because early detection can cost less.',
              correct: true,
            },
            {
              text: '24 hours for any delivery, with antibiotics paid only in hospice.',
              why: 'The minimums are 48 and 96 hours. Hospice pays for painkillers and special beds, not for operations or antibiotics.',
            },
            {
              text: 'Until the primary care physician refers the mother to a specialist.',
              why: 'Referral by a gatekeeper is an HMO or point-of-service rule. The maternity minimum is a time limit in the policy.',
            },
            {
              text: 'Coverage is optional and may exclude the newborn.',
              why: 'If the policy provides maternity benefits, it must cover both mother and newborn for those minimum stays.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c10-dependents',
      title: 'Who can be covered as a dependent in Utah',
      body: `Individual and group health policies issued in Utah must include these benefits. For an adoption, a child is anyone younger than 18. If a policy covers any family members, it must cover, on the same basis, a newborn from the moment of birth, and an adopted child from the moment of birth if placement occurs within 30 days of birth, or from the date of placement if placement is 30 days or more after birth.

A policy or HMO contract that covers dependents must cover all unmarried dependents up to age 26 and cannot end that coverage because of age before the 26th birthday. The cost for unmarried dependents ages 19 through 26 is included in the premium on the same basis as other dependent coverage. The employer may still require the employee to pay all or part of that cost. Dependent coverage that is reinstated must be treated, for exclusions and limitations, as if it had never stopped.

If a court orders a parent who is eligible for family coverage to cover a child, the insurer may not deny enrollment because the child was born out of wedlock, is not claimed as a tax dependent, or does not live with the parent or in the service area. A group policy cannot deny a child solely because the child does not live with the group member, or solely because the child depends on a former spouse rather than the group member. A child who lives elsewhere may still be excluded on the same basis as a child who lives with the member.

A disabled dependent is a child unable to engage in gainful employment because of a physical or mental impairment that may result in death or last at least 12 months, and who is chiefly dependent on the insured for support. Coverage of a disabled dependent cannot end because the child reaches the limiting age. The policyholder must give proof of incapacity and dependency at least 30 days before that age. The insurer may ask for proof again during the two years after that birthday, and after that no more than once a year.

If the insured has maternity coverage on the date of an adoptive placement, the policy must pay an adoptive indemnity benefit when a child is placed for adoption within 90 days of birth. If more than one child from the same birth is placed, only one indemnity is required. The amount is $4,000, subject to adjustment.

Family coverage must cover newborns from the moment of birth, without pre-existing condition limits, for 30 days. An additional premium is required if coverage continues beyond 30 days. Newborns adopted within 30 days of birth are covered from birth. If adoption is 30 days or more after birth, coverage starts at placement.

Each group accident and health policy must offer an optional rider for alcohol or drug dependency treatment in programs licensed by the Department of Human Services, inpatient hospitals accredited by the Joint Commission, or facilities licensed by the Department of Health.`,
      questions: [
        question(
          'c10q13',
          'When must a Utah policy that covers family members start benefits for an adopted child?',
          [
            {
              text: 'From birth if placement is within 30 days of birth, and from the date of placement if placement is 30 days or later.',
              why: 'A newborn is covered from the moment of birth. Unmarried dependents must be covered up to age 26. A disabled dependent’s coverage cannot end at the limiting age if proof is given at least 30 days before that birthday.',
              correct: true,
            },
            {
              text: 'Only after the child has lived with the insured for 12 months.',
              why: 'A group policy cannot deny a child solely because the child does not live with the member. Twelve months of Utah residency is a pool-eligibility idea, not the adoption start date.',
            },
            {
              text: 'At age 19, when the dependent premium is allowed to change.',
              why: 'Ages 19 through 26 are still covered, and that cost is included on the same basis as other dependent coverage. The employer may ask the employee to pay all or part of it.',
            },
            {
              text: 'Only if the child is claimed as a dependent on the federal tax return.',
              why: 'A court-ordered enrollment cannot be denied because the child is not a tax dependent, was born out of wedlock, or lives outside the service area.',
            },
          ],
        ),
        question(
          'c10q14',
          'An insured with maternity coverage has twins placed for adoption 60 days after birth. How many adoptive indemnity benefits are required?',
          [
            {
              text: 'One benefit of $4,000, because both children are from the same birth and placement is within 90 days.',
              why: 'The indemnity applies if a child is placed within 90 days of birth and the insured had maternity coverage on the placement date. The $4,000 amount can be adjusted. Newborns are covered without pre-existing condition limits for 30 days, and coverage beyond that requires an additional premium.',
              correct: true,
            },
            {
              text: 'Two benefits, $4,000 for each child.',
              why: 'If more than one child from the same birth is placed, only one adoption indemnity benefit is required.',
            },
            {
              text: 'None, because placement after 30 days is too late.',
              why: 'Thirty days is the line between coverage from birth and coverage from the date of placement. The indemnity itself is available for placement within 90 days of birth.',
            },
            {
              text: 'A benefit equal to 90 days of the mother’s hospital bill.',
              why: 'The indemnity is a stated $4,000 benefit, subject to adjustment, not a multiple of the hospital bill. Hospital maternity minimums are 48 and 96 hours.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c10-hipaa',
      title: 'HIPAA',
      body: `Legislation effective in July 1997 made group coverage portable and set required benefits affecting small employers, the self-employed, pregnant women, and the mentally ill. HIPAA applies to group health plans of employers with two or more employees and to individual policies sold by insurers.

Group plans may not discriminate against employees and dependents based on health, and they must allow special enrollment. Individual policies must guarantee access for qualifying people and guarantee renewability.

An employer plan cannot set enrollment rules that discriminate on a health factor of an eligible person or dependent. Health factors include health status, physical and mental medical conditions, claims experience, receipt of health care, medical history, genetic information, disability, and evidence of insurability, including domestic violence and activities such as motorcycling, skiing, or snowmobiling. Waiting periods are allowed if they apply to everyone the same way.

To convert from group coverage to an individual policy, a person must have 18 months of continuous creditable coverage, have been covered under a group plan most recently, have used up COBRA or state continuation, not be eligible for Medicare or Medicaid, have no other health insurance, and apply within 63 days of losing the prior coverage. Those people are guaranteed the right to buy individual coverage. If a new employee meets the requirements, the employer must offer coverage on a guaranteed-issue basis.

A pre-existing condition, under HIPAA, is one for which the person sought medical advice, diagnosis, or treatment within a specified period before issue. Creditable coverage gives day-for-day credit for prior health coverage against a pre-existing exclusion when moving from one group plan to another, or from group coverage to an individual plan.

Before the Affordable Care Act, credit applied when the break in coverage was not 63 or more consecutive days. The Act prohibited pre-existing condition exclusions, eliminated waiting periods longer than 90 days, and eliminated the requirement to issue HIPAA certificates of creditable coverage after December 31, 2014.

At the plan sponsor’s option, a group issuer must renew or continue the coverage. It may discontinue or nonrenew for nonpayment, fraud, violation of participation or contribution rules, discontinuation of that particular coverage, or movement outside the service area or the end of association membership.

Protected health information is all individually identifiable health information a covered entity or its business associate holds or transmits, in electronic, paper, or oral form. It includes demographic data about past, present, or future physical or mental health or condition, or payment information that could identify the person. A covered entity needs the person’s written authorization to disclose information that is not for treatment, payment, or health care operations.`,
      questions: [
        question(
          'c10q15',
          'Which person is guaranteed the right to buy an individual policy under HIPAA?',
          [
            {
              text: 'Someone with 18 months of continuous creditable coverage, most recently under a group plan, who has exhausted COBRA, is not eligible for Medicare or Medicaid, has no other health insurance, and applies within 63 days.',
              why: 'Group plans also may not discriminate on health factors, including genetic information and evidence of insurability such as skiing or snowmobiling. A waiting period is allowed if it applies uniformly. A qualifying new employee must be offered coverage on a guaranteed-issue basis.',
              correct: true,
            },
            {
              text: 'Anyone who applies within a year of losing coverage, even with a six-month gap and current Medicaid.',
              why: 'The application window is 63 days, COBRA must be used up, and the person cannot be eligible for Medicare or Medicaid or have other health insurance.',
            },
            {
              text: 'Only a person whose last coverage was an individual plan held for 18 months.',
              why: 'The most recent coverage must have been a group plan, and the person needs 18 months of continuous creditable coverage.',
            },
            {
              text: 'Any employee the employer chooses to exclude because of claims experience.',
              why: 'Claims experience is a health factor. Employer plans cannot set eligibility rules that discriminate on a health factor.',
            },
          ],
        ),
        question(
          'c10q16',
          'When may a covered entity disclose protected health information without the person’s written authorization?',
          [
            {
              text: 'For treatment, payment, or health care operations.',
              why: 'Protected health information is individually identifiable health information in any form, including oral. Other disclosures need written authorization. Creditable coverage gives day-for-day credit against a pre-existing exclusion. The Affordable Care Act barred those exclusions and waiting periods longer than 90 days.',
              correct: true,
            },
            {
              text: 'For any marketing use, because the information is not identifiable.',
              why: 'The definition includes information that could identify the person. A disclosure that is not for treatment, payment, or operations needs written authorization.',
            },
            {
              text: 'Only after a 63-day break in coverage.',
              why: 'Sixty-three days is the HIPAA conversion deadline and the old break-in-coverage test. It is not a privacy rule.',
            },
            {
              text: 'Never. Every disclosure, including treatment, requires a new authorization.',
              why: 'The authorization requirement applies to disclosures that are not for treatment, payment, or health care operations.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c10-pool',
      title: 'The Utah high-risk health pool',
      body: `The Comprehensive Health Insurance Pool Act gives residents who are denied adequate insurance, and who are considered uninsurable, low-cost access to coverage. A board of 12 directors runs the pool under a plan the Commissioner approves. The board includes the Commissioner, the executive director of the Department of Health, and 10 members the Governor appoints with Senate consent.

A person who is not HIPAA-eligible may qualify by paying the premium, living in the state, and meeting the health criteria. The following are not eligible: people eligible for Medicaid or Medicare, people who terminated pool coverage in the last 12 months unless the termination was involuntary for a reason other than nonpayment, people who have received the pool’s maximum lifetime benefit, inmates, people eligible for a public health plan, people who do not qualify because of a health condition, people eligible for similar employer-group coverage, people covered by any other health plan, people who have not lived in Utah for at least 12 consecutive months before applying, and people whose employer pays any part of their health premium. Someone whose coverage in another state’s high-risk pool ended because that person moved may apply within 63 days.

The pool offers major medical coverage. The board sets the schedule, exclusions, and limits, and the Commissioner approves them. At least one plan must be offered through managed care. A pre-existing condition may be excluded for no longer than 6 months. The lifetime maximum of covered benefits may not exceed $1,500,000. A pre-existing pregnancy may be excluded for 10 months, but not for a HIPAA-eligible person. The pre-existing exclusion is waived if the person applies within 63 days of an involuntary termination of prior coverage.

Deductibles are based on calendar years, and at least two deductible choices must be offered. In most cases coinsurance of at least 20% of eligible expenses is required in addition to the deductible. After the enrollee hits the maximum aggregate out-of-pocket amount, an additional coinsurance of no more than 5% of eligible expenses may be imposed.

Federal-HIPUtah was a temporary, federally subsidized high-risk pool for people with pre-existing conditions who had been without coverage for 6 months. It was to last until 2014, when exchanges arrived and pre-existing exclusions ended. Eligibility required lawful presence or citizenship, Utah residency on the application date, no creditable coverage in the prior 6 months, a pre-existing condition and the state’s underwriting criteria, payment of the premium, and no other bar to eligibility.

Insurers must issue a health benefit plan card that shows the insured’s name, the insurer’s name, contact information, copayments and deductibles, and whether the state regulates the plan.`,
      questions: [
        question(
          'c10q17',
          'How long may a Utah pool policy exclude a pre-existing condition, and what is the lifetime maximum?',
          [
            {
              text: 'No longer than 6 months, and covered benefits may not exceed $1,500,000.',
              why: 'A pre-existing pregnancy may be excluded for 10 months, except for a HIPAA-eligible person. Coinsurance is generally at least 20%, and any additional coinsurance after the out-of-pocket maximum is no more than 5%. At least two calendar-year deductibles must be offered. Someone who has not lived in Utah for 12 consecutive months, or whose employer pays any part of the premium, is not eligible.',
              correct: true,
            },
            {
              text: '12 months, with no lifetime maximum.',
              why: 'Twelve months is the residency requirement and the look-back on a prior pool termination. The pre-existing exclusion is capped at 6 months, and the lifetime maximum is $1,500,000.',
            },
            {
              text: '63 days, and benefits are unlimited if the person is on Medicare.',
              why: 'Sixty-three days is the window to apply after another state’s high-risk pool ends for nonresidency, or after an involuntary termination, in order to waive the exclusion. Medicare eligibility makes the person ineligible for the pool.',
            },
            {
              text: 'The exclusion lasts 6 months and the lifetime maximum is $4,000.',
              why: '$4,000 is the adoptive indemnity benefit. The pool’s lifetime maximum is $1,500,000.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c10-aca',
      title: 'The Affordable Care Act and the Utah exchange',
      body: `The Patient Protection and Affordable Care Act was signed on March 23, 2010, and was to be phased in until 2018. It is federal law, so state rules must conform. It increases preventive, educational, and community-based services. It set up a competitive private market, holds insurers accountable by keeping premiums down, preventing denials, and, as of January 2014, eliminating pre-existing condition exclusions. It was also meant to reduce the deficit and to extend coverage for adult children on individual and group plans until age 26. Small businesses and nonprofits can receive a tax credit for employer contributions. Insurers cannot rescind coverage because the insured becomes ill, and lifetime benefit limits are eliminated. Retiree-only plans, stand-alone dental, Medigap, and long-term care are generally exempt. Because the law has been contested, agents should check current law before advising.

Marketplace coverage is available to an uninsured person who is a U.S. citizen or national or is lawfully present, lives in the United States, and is not incarcerated. A person with Medicare cannot use the Marketplace to buy a health or dental plan.

A group or individual issuer cannot set eligibility rules based on health status, physical or mental medical condition, claims experience, receipt of care, medical history, genetic information, evidence of insurability including domestic violence, disability, or any other health-status factor. Premiums may be based on only four standards: geographic rating area, family composition, age, and tobacco use. For an individual plan, location is the home address. For a small group, it is the employer’s principal place of business.

Essential benefits include hospitalization, maternity, emergency services, wellness and preventive services, and chronic disease management. Every Marketplace plan must cover pregnancy and childbirth even if the pregnancy began before coverage. Insurers must accept any eligible applicant. Enrollment may be limited to open or special enrollment. Coverage must be renewed or continued at the option of the plan sponsor or the individual.

If an insurer rescinds individual or group coverage for fraud or an intentional misrepresentation of a material fact, it must give at least 30 days’ notice so the insured can appeal. The person may review the file, present evidence and testimony, and keep coverage in force while the appeal is pending.

Coverage for children extends to age 26 regardless of marital status, residency, financial dependence, or eligibility for the child’s own employer plan. It may continue past the 26th birthday if the child cannot hold self-sustaining work because of an intellectual or physical disability and is chiefly dependent on the policyholder for support.

Plans cannot put a dollar limit on essential benefits or a lifetime dollar limit. Emergency services must be covered even at an out-of-network provider, at the amount that would have been paid in network. Preventive care, including routine checkups, screenings, and counseling, must be covered at 100% with no cost sharing. A group plan’s annual cost sharing cannot exceed the stated limits.

Exchanges administer subsidies and help people enroll in private insurance, Medicaid, and the Children’s Health Insurance Program. They let an applicant compare plans, learn about options and tax credits, and enroll.

All plans must include ten essential benefits: ambulatory patient services, emergency services, hospitalization, maternity and newborn care, mental health and substance use disorder services including behavioral health treatment, prescription drugs, rehabilitative and habilitative services and devices, laboratory services, preventive and wellness services and chronic disease management, and pediatric services including oral and vision care.

Marketplace plans fall into four metal levels and catastrophic plans. On average the metal plans pay bronze 60%, silver 70%, gold 80%, and platinum 90%. Under bronze, participants cover the other 40% on average, and a person with severe disease may pay much more. Insurers that offer adult and family metal coverage must also offer child-only coverage.

Those plans have lower premiums and high deductibles, often several thousand dollars. The insured usually pays all costs up to the deductible. After that, essential benefits are covered with no copayment or coinsurance.

Marketplace enrollment began in October 2013, and tax credits began in 2014. A qualified person can take an advance credit, paid to the insurer, to reduce the monthly premium. Household income for the credit is the modified adjusted gross income of the taxpayer, spouse, and dependents, including wages, salary, foreign income, interest, dividends, and Social Security. Legal residents and citizens with income from 100% to 400% of the federal poverty level qualify. States may extend Medicaid to people under 138% of that level. Medicare or Medicaid recipients do not qualify for the credit. People eligible for the credit with income from 100% to 250% of the poverty level can get cost-sharing reductions, but they must buy a silver plan. The credit is based on expected annual income.

A small employer may get a federal credit based on average wages and size. Employers with fewer than $50,000 average wages per employee and 25 or fewer workers may receive up to 50% of premiums for a small business and 35% for a small tax-exempt employer. The employer must pay premiums for employees in a qualified plan offered through a Small Business Health Options Program. The credit lasts for two consecutive taxable years.

The Utah Health Exchange was created in the Governor’s office, with the Insurance Department, the Department of Health, and the Department of Workforce Services. It links to private and government insurance sites and electronic applications, and it gives employers a free or low-cost way for employees to buy coverage with pre-tax dollars. It tells consumers which public and private programs they may qualify for, lets them compare and enroll, and links to premium assistance. It contracts with private vendors to run enrollment and plan comparisons, to collect one policy’s premium from several payers, and to run a call center with unbiased answers.`,
      questions: [
        question(
          'c10q18',
          'Which factors may an insurer use to set health premiums under the Affordable Care Act?',
          [
            {
              text: 'Geographic area, family composition, age, and tobacco use.',
              why: 'Health status, claims experience, and genetic information cannot be used for eligibility. Pre-existing condition exclusions were eliminated as of January 2014. Children are covered to age 26 regardless of marital status. Emergency care at an out-of-network provider is paid at the in-network amount, and preventive care is covered at 100% with no cost sharing.',
              correct: true,
            },
            {
              text: 'Health status, claims experience, and whether the person has a pre-existing condition.',
              why: 'Those are health-status factors the law forbids as eligibility rules. Premiums are limited to the four listed standards.',
            },
            {
              text: 'The employer’s industry and the insured’s hobbies.',
              why: 'Evidence of insurability, including recreational activities, cannot set eligibility. Location for a small group is the employer’s principal place of business, not the industry.',
            },
            {
              text: 'Only the metal level the person picks.',
              why: 'Metal levels describe how much the plan pays on average: bronze 60%, silver 70%, gold 80%, and platinum 90%. They are not the four rating factors.',
            },
          ],
        ),
        question(
          'c10q19',
          'Who can receive a premium tax credit, and which plan is required for a cost-sharing reduction?',
          [
            {
              text: 'Legal residents and citizens from 100% to 400% of the federal poverty level can receive the credit. Cost-sharing help from 100% to 250% requires a silver plan.',
              why: 'The credit is sent to the insurer and is based on expected income, measured as modified adjusted gross income. Medicare and Medicaid recipients do not qualify. A small employer with 25 or fewer workers and average wages under $50,000 may receive up to 50% of premiums, or 35% if tax-exempt, for two years, if coverage is bought through a SHOP exchange. Catastrophic plans are for adults under 30 and people who cannot obtain affordable coverage.',
              correct: true,
            },
            {
              text: 'Anyone under 138% of the poverty level, and only if they buy a bronze plan.',
              why: 'States may extend Medicaid below 138% of the poverty level. The premium credit starts at 100% and goes to 400%. Cost-sharing reductions require silver, not bronze.',
            },
            {
              text: 'Medicare beneficiaries, because the credit replaces Part B.',
              why: 'A person with Medicare cannot use the Marketplace to buy a health or dental plan, and public coverage such as Medicare or Medicaid blocks the tax credit.',
            },
            {
              text: 'Any small employer, for as many years as the business offers a plan.',
              why: 'The small-employer credit is limited to low-wage employers with 25 or fewer workers, coverage through SHOP, and two consecutive taxable years.',
            },
          ],
        ),
      ],
    },

  ],
}

for (const section of chapter10.sections) {
  section.questions.push(...(chapter10Extra[section.id] ?? []))
}
