import { question } from './build.ts'
import type { Chapter } from './types.ts'
import { chapter11Extra } from './extra/chapter11.ts'

/**
 * Wording follows the course OCR in content/source/chapter-11-ocr.txt.
 * The source pages have no practice questions. Questions are written from that text,
 * four options each, with a reason for the right answer and for each wrong one.
 */
export const chapter11: Chapter = {
  id: 'ch-group',
  number: 10,
  title: 'Health Insurance from an Employer',
  summary:
    'How group health coverage is issued and underwritten, who may enroll, and the continuation, small-employer, and federal rules that apply.',
  sections: [
    {
      id: 'c11-contract',
      title: 'The master policy and the certificates',
      body: `Group health insurance is a contract between the insurance company and the group sponsor, such as the employer, union, trust, or other sponsoring organization. An individual policy is a contract between the insurance company and the insured.

The policy is called the master policy. It is issued to the policyowner, which could be the employer, an association, a union, or a trust. The people covered under the plan receive evidence of coverage as certificates of insurance, or certificates of coverage. A certificate cannot contain provisions or statements that are unfair, misleading, or deceptive. It tells what is covered, how to file a claim, how long the coverage will last, and how to convert the policy to an individual policy.

Group health insurance is usually experience rated. Premiums are determined by the experience of that particular group as a whole. Experience rating helps employers with low claims experience because they get lower premiums. Individual policies are community rated, or pool rated. That premium is based on the overall claims experience of the insurance company.

Terms used in this chapter:
• Creditor — a lender of funds.
• Debtor — a borrower of funds.
• Extension of benefits — coverage continues beyond the policy’s expiration date for employees who are not actively at work because of disability, or who have dependents hospitalized on that date. Coverage continues only until the employee returns to work or the dependent leaves the hospital.
• HIPAA — the Health Insurance Portability and Accountability Act, a federal law that protects health information.
• Persistency — the tendency of insurance policies not to lapse or be replaced with insurance from another insurer.
• Self-funded programs — a noninsured plan that uses a trust fund to pay employees’ health care expenses directly.
• Underwriting — risk selection and classification.`,
      questions: [
        question(
          'c11q01',
          'Who receives the master policy in group health insurance, and what do covered individuals receive?',
          [
            {
              text: 'The policyowner, such as the employer, association, union, or trust, receives the master policy. Covered individuals receive certificates of insurance.',
              why: 'The contract is between the insurer and the group sponsor. A certificate tells what is covered, how to file a claim, how long coverage lasts, and how to convert. It cannot be unfair, misleading, or deceptive.',
              correct: true,
            },
            {
              text: 'Each employee receives a master policy, and the employer keeps a certificate.',
              why: 'The master policy goes to the policyowner. Employees receive certificates of coverage, not the master policy.',
            },
            {
              text: 'The creditor receives the master policy, and debtors receive certificates only if the plan is self-funded.',
              why: 'A creditor is the contract owner of credit insurance, which is a specialized use of group coverage. That is not how an ordinary employer group policy is issued.',
            },
            {
              text: 'The insurer issues one individual policy to the sponsor and nothing to the employees.',
              why: 'An individual policy is a contract with the insured. Group coverage uses a master policy plus certificates.',
            },
          ],
        ),
        question(
          'c11q02',
          'How are premiums usually set for group health insurance?',
          [
            {
              text: 'By experience rating, using the claims experience of that particular group as a whole.',
              why: 'Employers with low claims experience get lower premiums. Individual policies use community rating, or pool rating, based on the insurer’s overall claims experience.',
              correct: true,
            },
            {
              text: 'By community rating, using the insurer’s overall claims experience for every group of the same size.',
              why: 'Community rating, also called pool rating, is how the course describes individual policies, not the usual group method.',
            },
            {
              text: 'By the claims of each employee, because every certificate is individually underwritten.',
              why: 'Group certificates are generally guaranteed issue with no individual underwriting. The group is evaluated as a whole.',
            },
            {
              text: 'By a flat amount that cannot change with the group’s own claims.',
              why: 'Experience rating moves the premium with that group’s own experience. A low-claims employer pays less.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c11-groups',
      title: 'Groups that can buy coverage',
      body: `To qualify for group coverage, the group must be formed for a purpose other than obtaining group health insurance. The coverage must be incidental to the group. The two general types are employer-sponsored and association-sponsored. Customer groups and discretionary groups are also eligible.

An employer-sponsored group may be a partnership, corporation, or sole proprietorship. Eligible employees usually must meet a time-of-service requirement and work full time. Group health insurance may be contributory or noncontributory, the same as group life insurance. The employer normally covers all full-time employees. Within limits, the employer can specify how many hours count as full time and whether both salaried and hourly employees are covered. The employer can legally exclude a particular class, such as union or part-time employees.

A multiple-employer trust (MET) is two or more employers in similar or related businesses who do not qualify for group insurance on their own. Before HIPAA defined small employers, many small companies could not get health insurance at a reasonable cost because there were not enough people to insure. Several small companies banded together and jointly purchased a single benefits plan for the employees of each employer. A noninsured plan may operate without an insurance company’s services and funds. Once the trust fund is established, it can pay health care expenses directly. That is self-funding. The trustee has charge of the funds, and all financial activity goes through the trust. The employer assumes legal responsibility for providing coverage, and the employee has no conversion right upon leaving the group coverage.

A multiple employer welfare association (MEWA) can be any entity, other than a duly admitted insurer, that establishes an employee benefit plan to offer or provide accident and sickness or death benefits to the employees of at least two employers, including self-employed individuals and their dependents. A multiple-employer welfare arrangement is similar to a MET, except that these groups of employers pool their risks in order to self-insure. An insurance company or an independent administrator may sponsor the group and help design the plan or handle administration. Groups can be from the same or related industries because of the law of large numbers and similar risks. Today the terms are generally treated as interchangeable. They are considered risky if not fully insured. Some are only partially insured, and the individuals or employers retain full responsibility for any debt if the plan is not fully insured.

An association group, such as an alumni or professional group, can buy group insurance for its members. The group must have at least 100 members, be organized for a reason other than buying insurance, have been active for at least two years, have a constitution and by-laws, and hold meetings at least annually. Examples include trade associations, professional associations, college alumni associations, veteran associations, customers of large retail chains, and savings-account depositors. Association plans may be contributory or noncontributory.

Creditor group insurance, also called credit life and credit disability income insurance, covers debtors. It protects the lending institution from losing money if a borrower dies or becomes disabled. The contract owner is the creditor, such as a bank, a small-loan company, or a credit union. Generally the debtor pays the premium, but the lending institution is the beneficiary. If the debtor dies or becomes disabled, the proceeds are paid to the creditor to liquidate the indebtedness. The amount of insurance cannot exceed the amount of indebtedness.

A discretionary group can apply for group health insurance according to a decision made by the head of the Department of Insurance.`,
      questions: [
        question(
          'c11q04',
          'What must an association group have in order to buy group insurance for its members?',
          [
            {
              text: 'At least 100 members, a purpose other than buying insurance, at least two years of activity, a constitution and by-laws, and at least annual meetings.',
              why: 'Association plans may be contributory or noncontributory. The group itself must exist for a reason other than obtaining insurance.',
              correct: true,
            },
            {
              text: 'At least two employers in related businesses, with no minimum number of members.',
              why: 'Two or more employers in similar or related businesses describes a multiple-employer trust, not the association-group minimums.',
            },
            {
              text: 'At least 50 employees and a decision by the head of the Department of Insurance.',
              why: 'A discretionary group is one the head of the Department of Insurance allows to apply. Fifty is the top of the small-employer range, not the association rule.',
            },
            {
              text: 'A creditor as contract owner and coverage limited to the amount of a debt.',
              why: 'Those are the rules for creditor group insurance, also called credit life and credit disability income insurance.',
            },
          ],
        ),
        question(
          'c11q05',
          'How much insurance can a creditor group policy provide on a borrower?',
          [
            {
              text: 'No more than the amount of the indebtedness.',
              why: 'The creditor owns the contract and is the beneficiary. The debtor generally pays the premium. Proceeds liquidate the debt if the borrower dies or becomes disabled.',
              correct: true,
            },
            {
              text: 'Any amount the borrower chooses, because the borrower is the beneficiary.',
              why: 'The lending institution is the beneficiary. The borrower is generally the premium payor, not the person who receives the proceeds.',
            },
            {
              text: 'A flat $1,000,000, the maximum benefit of a basic health care plan.',
              why: 'The $1,000,000 figure is the maximum benefit per person for the entire period of a basic health care plan. Credit insurance is limited to the debt.',
            },
            {
              text: 'Twice the debt, so the borrower’s family also receives a benefit.',
              why: 'The amount of insurance cannot exceed the indebtedness. It is not a family benefit on top of the debt.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c11-funding',
      title: 'Insurer-funded plans and self-funded plans',
      body: `A conventional fully insured plan is administered and guaranteed by an insurance company. In return for the premium, the insurer assumes the risk of paying medical expenses that may or may not occur during the policy period.

A business or other organization can engage in the same kinds of activities as a commercial insurer, but for its own risks. When those activities use the law of large numbers and predictions of future losses, they are commonly called self-insurance. Self-insurance is a formal program for identifying, evaluating, and funding the organization’s own losses.

For a self-insurance program to be dependable, it must meet these conditions:
• It must be big enough to use a sufficiently large number of exposure units so that losses are predictable. The program must be based on the law of large numbers.
• The plan must be financially dependable. It will likely need accumulated funds to meet losses, with enough extra to cover unexpected deviations from predicted losses.
• The individual units exposed to loss must be spread so that a catastrophic loss is prevented. A loss that hits all units at once could cause the program to fail.
• Until the fund is large enough to pay the largest loss possible, the possibility of loss is not eliminated for the individual exposure units.

Smaller losses that occur frequently are a better subject for self-insurance than large, infrequent losses. Self-insurance is frequently used for workers compensation, where losses are fairly predictable and most states have regulations for self-insurance.

Under a self-funded employer plan, the employer assumes legal responsibility for providing coverage. An employee who leaves a noninsured group plan has no conversion right.`,
      questions: [
        question(
          'c11q06',
          'Which losses are a better subject for self-insurance?',
          [
            {
              text: 'Smaller losses that occur frequently, such as many workers compensation claims.',
              why: 'The program still has to be large enough for the law of large numbers, financially able to fund unexpected deviations, and spread out so one event cannot hit every unit. Until the fund can pay the largest possible loss, the chance of loss is not gone.',
              correct: true,
            },
            {
              text: 'Large, infrequent losses, because they are easier to predict from a small number of exposures.',
              why: 'The course says the opposite. Large infrequent losses are a poorer subject, and the program must have enough exposure units for losses to be predictable.',
            },
            {
              text: 'Any loss, because a self-funded plan is guaranteed by an insurance company.',
              why: 'A conventional fully insured plan is administered and guaranteed by an insurer. Self-insurance funds the organization’s own losses.',
            },
            {
              text: 'Only catastrophic losses that strike every unit at the same time.',
              why: 'A loss that affects all units at once can cause the program to fail. Exposures must be distributed to prevent that.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c11-underwriting',
      title: 'How a group is underwritten',
      body: `Most health insurance in force today is group coverage. Its cost is lower than individual coverage because administrative costs and selling expenses are far lower.

Group health underwriting is similar to individual health underwriting, but the underwriter evaluates the group as a whole rather than each member. The group’s risk profile determines whether the group is accepted or rejected. The underwriter tries to avoid adverse selection, which is the tendency of poorer risks to seek out insurance.

Group underwriting criteria determine acceptability and the premium, and they limit adverse selection:
• Certificates are guaranteed issue with no individual underwriting.
• Premiums are determined by the age, sex, and occupation of the entire group.
• The group was formed for reasons other than purchasing insurance.
• A certain participation level must be maintained.
• There is a flow of new members through the group.
• Benefits are determined automatically and are not discriminatory. Everyone has the same coverage.

In groups of 50 or more, medical information cannot be required of plan participants. In a small group, even one bad risk can affect the claims experience. That is why, in some states, insurers may allow some individual underwriting in the small groups they insure.

Group health insurance may be contributory or noncontributory. In a contributory plan, eligible employees contribute to the premium. Both the employee and the employer pay part of it. At least 75% of all eligible employees must participate. In a noncontributory plan, the participants do not pay part of the premium. The employer pays the entire premium, and 100% of the eligible employees must be included. These participation requirements guard against adverse selection and reduce administrative costs.

The persistency rate for a group of policies is the ratio of the number of policies that continue coverage on a premium due date to the number of policies that were in force on the preceding due date. Persistency usually improves with policy duration. It matters in health insurance because expenses are higher in the first year, from issuing the policy and certificates and from higher first-year commissions, and because claim rates usually increase as the insured’s age increases. The underwriter considers persistency because groups that change insurance companies every year are not a good risk.

The per-capita administrative cost in group health insurance is less than the administrative cost of individual coverage.`,
      questions: [
        question(
          'c11q07',
          'What participation does a group health plan require?',
          [
            {
              text: 'At least 75% of eligible employees if the plan is contributory, and 100% if the employer pays the entire premium.',
              why: 'A contributory plan splits the premium between employee and employer. A noncontributory plan is paid entirely by the employer. The requirements guard against adverse selection and reduce administrative costs.',
              correct: true,
            },
            {
              text: '100% if employees contribute, and 75% if the employer pays the entire premium.',
              why: 'The percentages run the other way. The 100% rule is the noncontributory plan.',
            },
            {
              text: 'At least 50% in every plan, because medical information cannot be required once the group reaches 50.',
              why: 'Fifty is the group size at which medical information cannot be required of participants. It is not the participation percentage.',
            },
            {
              text: 'Whatever share the employer chooses, because adverse selection is not a group underwriting concern.',
              why: 'Adverse selection is the tendency of poorer risks to seek coverage, and the participation rules exist to guard against it.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c11-eligibility',
      title: 'Who may enroll',
      body: `Group health plans commonly require a member to meet eligibility rules before participating. It is common that the employee must be full time, usually 30 hours per week, and have been employed by the employer from 1 to 3 months.

A 30-day open-enrollment period is available once a year to employees who reject coverage during the initial enrollment period and later want coverage, or who want to add dependent coverage. Evidence of insurability is not required during open enrollment.

Employer group health insurance generally requires a full-time employee, working in a covered classification, who is actively at work. Under the Affordable Care Act, employers must extend coverage to all employees who work more than 30 hours per week. Small and large employers may not be denied coverage for failure to satisfy the minimum participation or contribution requirements.

A dependent generally must be:
• A spouse.
• A child younger than the limiting age, including natural children of the insured, stepchildren, children legally placed for adoption, and legally adopted children.
• A disabled child who is incapable of self-support because of a physical or mental disability and who is dependent on the insured for support and maintenance.

Most insurers cover domestic or same-sex partners whether or not the state has a domestic-partner or civil-union law.`,
      questions: [
        question(
          'c11q08',
          'An employee declined coverage at the initial enrollment and now wants to join at the annual open enrollment. What is required?',
          [
            {
              text: 'The employee can enroll during the 30-day open-enrollment period. Evidence of insurability is not required.',
              why: 'The same window can be used to add dependent coverage. Ordinary eligibility is still full time, usually 30 hours a week, and employment of 1 to 3 months. Under the Affordable Care Act, coverage must extend to employees who work more than 30 hours per week.',
              correct: true,
            },
            {
              text: 'The employee must submit medical information, because open enrollment is individually underwritten.',
              why: 'Evidence of insurability is not required during the open-enrollment period. In groups of 50 or more, medical information cannot be required at all.',
            },
            {
              text: 'The employee must wait until the next carrier change, and then only the prior plan’s benefits are available.',
              why: 'Open enrollment is once a year. A limit to the prior plan’s benefit level applies to employees who are not actively at work when coverage transfers to a new carrier.',
            },
            {
              text: 'The employee can enroll only by converting to an individual policy within 60 days.',
              why: 'Sixty days is the window for Utah conversion after group coverage ends, and for electing COBRA. It is not the annual open-enrollment rule.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c11-cob',
      title: 'When two group plans cover the same person',
      body: `The coordination of benefits provision is found only in group health plans. Its purpose is to avoid duplication of benefit payments and overinsurance when a person is covered under more than one group health plan. It limits the total paid by all insurers to no more than the total allowable medical expenses.

The provision decides which plan is primary. The primary plan pays the full benefit amounts it specifies. After the primary plan has paid its full promised benefit, the insured submits the claim to the secondary, or excess, plan for any additional benefits payable, including deductibles and coinsurance. The insured never receives more than the costs incurred or the total maximum benefits available under all plans.

Loss minus the amount covered by the primary plan equals the amount covered by the secondary plan.

If all policies have a coordination of benefits provision, the order is:
• If a married couple each has group coverage that names the other as a dependent, the person’s own group coverage is primary. The spouse’s coverage is secondary and picks up where the first policy left off.
• If both parents name their children as dependents, the birthday rule usually applies. The coverage of the parent whose birthday is earlier in the year is primary. Occasionally the gender rule applies, and the father’s coverage is primary.
• If the parents are divorced or separated, the policy of the parent who has custody of the children is primary.

If the plans cannot agree on the order of benefits within 30 days of receiving all necessary claim information, they immediately pay the claim in equal shares. No plan has to pay more than its policy limits.

A plan with coordination of benefits rules is a conforming plan. It may coordinate with a plan that is always secondary or that uses inconsistent rules, a nonconforming plan. If the nonconforming plan does not provide the information the conforming plan needs within a reasonable time after a request, the conforming plan assumes the benefits are identical and pays on that basis. If, within 3 years of payment, the conforming plan learns the nonconforming plan’s actual benefits, it adjusts any payments.`,
      questions: [
        question(
          'c11q09',
          'Both parents cover their children on group plans that have coordination of benefits. Which plan is usually primary?',
          [
            {
              text: 'The plan of the parent whose birthday is earlier in the year.',
              why: 'That is the birthday rule. Occasionally the gender rule makes the father’s coverage primary. If the parents are divorced or separated, the custodial parent’s plan is primary. A person’s own plan is primary over a plan that covers that person as a spouse’s dependent.',
              correct: true,
            },
            {
              text: 'The plan of the parent whose birthday is later in the year.',
              why: 'The birthday rule uses the earlier birthday in the year, not the later one.',
            },
            {
              text: 'The plan that has been in force longer, regardless of whose birthday comes first.',
              why: 'Length of coverage is not the order given for children. The birthday rule, and sometimes the gender rule, decides it.',
            },
            {
              text: 'Both plans pay the full bill, because coordination of benefits applies only to individual policies.',
              why: 'Coordination of benefits is found only in group health plans, and its purpose is to prevent duplication. Total payments cannot exceed the allowable expenses.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c11-replace',
      title: 'Changing from one insurer to another',
      body: `Employees who are actively at work on the date coverage transfers to another insurance carrier are automatically covered under the new plan, and they are exempt from any probationary period. Employees who are not actively at work on that date must be included in the new plan, but their benefits can be limited to the prior plan’s level until they return to work.

Coinsurance and deductibles may be carried over from the old plan to the new plan. The purpose is to credit expenses already incurred so the insured is not penalized.

No-loss/no-gain statutes use indemnification: the insured is placed in the same economic position after a loss as before the loss. When health insurance changes, benefits must be paid for ongoing claims regardless of pre-existing conditions.

Coverage for an employee ends on the earliest of these dates:
• Employment terminates.
• The employee ceases to be eligible.
• The date the overall maximum benefit for major medical benefits is received.
• The end of the last period for which the employee has paid the required premium.
• The master contract is terminated.

Coverage for a dependent ends on the earliest of these dates:
• The dependent fails to meet the definition of a dependent.
• The overall maximum benefit for major medical benefits is received.
• The end of the last period for which the employee has paid the required premium for dependent coverage.

When a group policy is discontinued, the policy must provide a reasonable extension of benefits to any covered person who is totally disabled when the group policy is terminated.`,
      questions: [
        question(
          'c11q10',
          'Coverage moves to a new carrier. What happens to an employee who is actively at work that day?',
          [
            {
              text: 'The employee is automatically covered under the new plan and is exempt from any probationary period.',
              why: 'Someone who is not actively at work must still be included, but benefits can be limited to the prior plan’s level until that person returns to work. Coinsurance and deductibles may carry over so the insured is not penalized. No-loss/no-gain requires payment of ongoing claims regardless of pre-existing conditions.',
              correct: true,
            },
            {
              text: 'The employee must satisfy a new probationary period and a new deductible, with no credit for expenses under the old plan.',
              why: 'Actively-at-work employees are exempt from the probationary period. Carryover credits coinsurance and deductibles already incurred.',
            },
            {
              text: 'The employee is left off the new plan until returning from any later disability.',
              why: 'Employees not actively at work are included, with benefits that can be limited to the prior level. They are not omitted.',
            },
            {
              text: 'Ongoing treatment stops if the condition was pre-existing under the old plan.',
              why: 'No-loss/no-gain says benefits must be paid for ongoing claims regardless of pre-existing conditions.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c11-cobra',
      title: 'Keeping the plan after you leave the job',
      body: `The Consolidated Omnibus Budget Reconciliation Act of 1985 requires any employer with 20 or more employees to extend group health coverage to terminated employees and their families after a qualifying event. Qualifying events include:
• Voluntary termination of employment.
• Termination of employment for reasons other than gross misconduct, such as a company downsizing.
• A change from full time to part time.

For these events, coverage is extended up to 18 months. The terminated employee must elect the extension within 60 days of separation from employment. The employer may collect a premium of no more than 102% of the individual’s group premium rate. The extra 2% covers the employer’s administrative costs.

For the death of the employee, divorce, or legal separation, the period is 36 months for the dependents.

COBRA applies to group health insurance, not group life insurance. Unlike conversion, which replaces group coverage with an individual health policy, COBRA continues the same group coverage. The employee pays the group premium that the employer paid, or that the employer and employee paid if the plan was contributory.

Under the Affordable Care Act, coverage for children of the insured must extend until the adult child reaches age 26, unless the child qualifies as a disabled dependent. The same age limit applies to COBRA coverage for eligible children. If a child loses dependent status under the group plan, the child qualifies for a maximum of 36 months of continuation coverage.

COBRA may be discontinued if the person fails to pay the premium, becomes covered under another group plan, becomes eligible for Medicare, or if the employer terminates all group health plans.`,
      questions: [
        question(
          'c11q11',
          'An employer with 20 or more employees lays an employee off. How long can COBRA continue the group health coverage, and what can the employer charge?',
          [
            {
              text: 'Up to 18 months, at no more than 102% of the group premium. The employee must elect within 60 days of separation.',
              why: 'Voluntary termination, termination other than for gross misconduct, and a move from full time to part time are the 18-month events. The extra 2% covers administrative costs. COBRA continues the same group health coverage. It does not apply to group life insurance.',
              correct: true,
            },
            {
              text: 'Up to 36 months, at 100% of the group premium, with no election deadline.',
              why: 'Thirty-six months is the period for dependents after the employee’s death, divorce, or legal separation, and for a child who loses dependent status. The layoff itself is an 18-month event, and the election must be made within 60 days.',
            },
            {
              text: 'Up to 12 months under Utah mini-COBRA only. Federal COBRA does not apply at 20 employees.',
              why: 'Federal COBRA applies to employers with 20 or more employees. Utah mini-COBRA is a separate 12-month extension.',
            },
            {
              text: 'The employee must convert to an individual life policy within 60 days. Group health coverage cannot be continued.',
              why: 'COBRA continues group health coverage. It is not group life insurance, and it is not a conversion to an individual policy.',
            },
          ],
        ),
        question(
          'c11q12',
          'Which event ends COBRA coverage?',
          [
            {
              text: 'The person fails to pay the premium, becomes covered under another group plan, becomes eligible for Medicare, or the employer terminates all group health plans.',
              why: 'Death, divorce, and legal separation do not end the dependents’ continuation. Those events start a 36-month period. A child who loses dependent status also gets up to 36 months, and children can be covered until age 26.',
              correct: true,
            },
            {
              text: 'The employee’s divorce, which ends dependent coverage immediately.',
              why: 'Divorce is a qualifying event. Dependents can continue for 36 months.',
            },
            {
              text: 'The child’s 18th birthday.',
              why: 'Coverage for children extends until age 26, unless the child is a disabled dependent. Loss of dependent status itself allows up to 36 months of continuation.',
            },
            {
              text: 'The first anniversary of the group life policy.',
              why: 'COBRA benefits apply to group health insurance, not group life insurance.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c11-utah',
      title: 'Utah continuation, conversion, and military leave',
      body: `An employee who participates in a group disability policy is entitled to have an individual policy issued on the same basis of eligibility. Utah mini-COBRA lets employees extend coverage under the group policy for 12 months. The right includes voluntary and involuntary termination, retirement, sabbatical or leave of absence, reduction of hours, divorce or legal separation, loss of dependent status, disability, or death.

The employee does not have this right without continuous coverage under the policy for 3 months before the termination. The employer must give written notice of the right to extend group coverage within 30 days of the termination of group coverage. The insurer must offer the employee, spouse, or dependent the chance to extend group coverage if the employer does not give that notice and the employee contacts the insurer within 60 days of coverage termination.

Extended coverage may end if the insured establishes residence outside the state, moves out of the insurer’s service area, fails to pay premiums, commits fraud, makes a misrepresentation, becomes eligible for other similar coverage, or the employer’s coverage is terminated. Within 30 days of the exhaustion of any extended coverage, the insured and any dependents must be notified of the right to an individual conversion policy.

A person who has lost group coverage may elect conversion with the same insurer if that person has been continuously covered for 3 months by the policy, has exhausted Utah mini-COBRA or federal COBRA, is not covered by any other group coverage that covers all pre-existing conditions, and resides in the insurer’s service area. The application and first premium must reach the insurer no more than 60 days after the termination. The initial premium for the first 12 months of the converted policy is set from the premium rates for age, class of risk, and the type and amount of insurance.

Insurers cannot refuse to reinstate an insured, or any dependents, whose coverage lapsed because of the insured’s mobilization into the United States armed forces, if the application is made within 180 days of release from active duty. If that is done, the reinstated policy will not have a waiting period and will not exclude pre-existing conditions. The premium may not be increased excessively.`,
      questions: [
        question(
          'c11q13',
          'How long can Utah mini-COBRA extend group coverage, and who is not entitled to it?',
          [
            {
              text: '12 months. An employee who was not continuously covered for 3 months before termination does not have the right.',
              why: 'The employer must give written notice within 30 days of termination. If the employer does not, and the employee contacts the insurer within 60 days, the insurer must offer the extension. The course states this for an employee who participates in a group disability policy and is entitled to an individual policy on the same basis of eligibility.',
              correct: true,
            },
            {
              text: '18 months, for any employee of a firm with 20 or more workers, with no prior-coverage requirement.',
              why: 'Eighteen months and the 20-employee threshold are federal COBRA. Utah mini-COBRA is 12 months and requires 3 months of prior continuous coverage.',
            },
            {
              text: '36 months, but only after divorce or the employee’s death.',
              why: 'Thirty-six months is the federal COBRA period for dependents after death, divorce, or legal separation. Utah’s extension is 12 months and also covers those events.',
            },
            {
              text: 'Until age 65, if the employee pays 102% of the individual premium.',
              why: 'The 102% figure is the federal COBRA maximum. Utah mini-COBRA is a 12-month extension of group coverage, not coverage to age 65.',
            },
          ],
        ),
        question(
          'c11q14',
          'Coverage lapsed because the insured was mobilized into the United States armed forces. What must the insurer do if the insured applies within 180 days of release from active duty?',
          [
            {
              text: 'Reinstate the insured and dependents, with no waiting period and no pre-existing-condition exclusion, and without an excessive premium increase.',
              why: 'The insurer cannot refuse reinstatement when the application is made within 180 days of release. Conversion is a different right: it requires 3 months of prior coverage, exhaustion of Utah mini-COBRA or federal COBRA, no other group coverage that covers all pre-existing conditions, residence in the service area, and application with the first premium within 60 days.',
              correct: true,
            },
            {
              text: 'Offer reinstatement only after a new waiting period, and exclude conditions that existed before the mobilization.',
              why: 'The reinstated policy will not have a waiting period and will not exclude pre-existing conditions.',
            },
            {
              text: 'Refuse reinstatement, because military service is a permanent bar.',
              why: 'The insurer cannot refuse reinstatement if the application comes within 180 days of release from active duty.',
            },
            {
              text: 'Convert the coverage automatically, and charge the first 12 months at the group rate.',
              why: 'Conversion is elected separately and must be applied for within 60 days. The first 12 months of a converted policy are priced for age, class of risk, and the type and amount of insurance, not automatically at the group rate.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c11-small',
      title: 'Medical plans for small employers',
      body: `In a health benefit plan, a small employer is any employer with an average of between 2 and 50 eligible employees on each business day during the preceding calendar year, and at least 2 employees on the first day of the plan year.

When a carrier decides whether to cover a small employer, the requirements must be applied uniformly among all small employers with the same number of employees. A covered carrier may require a minimum of 2 eligible employees. Once an employer is accepted, the carrier may not increase that employee requirement.

Individual carriers that offer health care plans must offer a choice of coverage at least equal to basic coverage. A basic health care plan has these features:
• The maximum benefit per person for the entire period of coverage is $1,000,000.
• The maximum annual benefit per person must not be less than $300,000.
• The annual out-of-pocket maximum per person is $5,000.
• Any waiting period cannot exceed 12 months, with credit for prior coverage.
• The major medical deductible may not be less than $1,500 per person.
• An annual deductible for prescription benefits may not be less than $500 per person.
• A copayment may not be less than $25 per office visit and $150 per emergency-room visit.

As a condition of transacting business in this state with small employers, every small employer carrier must actively offer small employers at least two health benefit plans. One must be a basic health benefit plan and one must be a standard health benefit plan.

Individual carriers must have a procedure for the order of applications. All applications must be treated consistently. Written notice of the decision must go to the applicant within 30 days of the decision. If the application is incomplete, the carrier must notify the applicant within 15 days of receipt. Before an application can be filed as incomplete, the applicant must have at least 30 days to provide additional information.

A small employer carrier must let an eligible employee or dependent enroll under the terms of the plans if the employee requests enrollment no later than 30 days after the eligibility date. Enrollment-application records must be kept for the current year plus 3 years.

An insurer assigns rates for employees of small employers uniformly, consistently, and without discrimination. A small employer carrier treats all health benefit plans issued or renewed in the same calendar month as having the same rating period.`,
      questions: [
        question(
          'c11q15',
          'Which employer is a small employer for a health benefit plan, and what must a small employer carrier offer?',
          [
            {
              text: 'An employer that averaged between 2 and 50 eligible employees on each business day of the preceding calendar year, and that has at least 2 employees on the first day of the plan year. The carrier must actively offer at least a basic plan and a standard plan.',
              why: 'Requirements are applied uniformly to small employers with the same number of employees. A carrier may require a minimum of 2 eligible employees and, once the employer is accepted, may not raise that requirement. A basic plan’s maximum benefit for the whole period is $1,000,000, the annual maximum must be at least $300,000, and the annual out-of-pocket maximum is $5,000.',
              correct: true,
            },
            {
              text: 'Any employer with 20 or more employees. The only required plan is a high-deductible plan.',
              why: 'Twenty employees is the federal COBRA threshold. A small employer tops out at 50. The required pair is a basic plan and a standard plan.',
            },
            {
              text: 'An employer with one eligible employee. The carrier can raise the minimum after the employer is accepted.',
              why: 'The definition starts at 2 eligible employees. After acceptance, the carrier may not increase the employee requirement.',
            },
            {
              text: 'An employer with 51 to 100 employees. The carrier must offer only the plan the employer already has.',
              why: 'Above 50 eligible employees is outside this definition. The carrier must actively offer at least two plans, one basic and one standard.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c11-defined',
      title: 'Defined contribution arrangements and pre-existing conditions',
      body: `Starting January 1, 2010, small employers may participate in defined contribution arrangement health benefit plans. These employer-sponsored plans let individual employees control the plan choice. The employer offers a predetermined level of funding, and the employee uses it to buy a chosen health plan.

The employer’s decision is how much to contribute. That reduces administration, because the employer is no longer forced to find one plan that suits every employee, and it lets the employer predict the cost. Employees choose, buy, and own the coverage that meets their needs. Benefits are portable from job to job as long as both employers participate in defined contribution arrangements.

A participating insurer must offer to accept all eligible employees of an employer, and their dependents, at the same level of benefits as anyone else who has the same health benefit plan in the defined contribution arrangement market. The insurer may not impose a premium surcharge. The insurer may ask the employer for a copy of the quarterly wage list to see whether the people to be covered are bona fide employees, and it may deny or terminate coverage if the employer refuses that documentation.

An insurer that offers a health benefit plan in this market must offer two plans:
• One federally qualified high-deductible health plan, with the lowest deductible permitted for such a plan, and an annual out-of-pocket maximum that does not exceed three times the annual deductible.
• One health benefit plan with an actuarial value at least 15% greater than that plan.

A small employer health benefit plan is renewable for all eligible insureds at the option of the plan sponsor. It may be discontinued if the plan sponsor fails to pay premiums, commits fraud, or makes an intentional misrepresentation. A covered carrier may also discontinue coverage if it elects to do so, gives each plan sponsor and insured notice at least 90 days before the coverage ends, and gives the Commissioner notice at least 3 working days before the date that notice is sent. An eligible employee who was discontinued may reenroll 12 months after the discontinuance, if the plan sponsor’s coverage is in effect when the employee applies.

A small employer health benefit plan may impose a pre-existing condition exclusion if the exclusion relates to a condition for which medical advice, diagnosis, care, or treatment was recommended during the 6 months before enrollment, the exclusion ends no later than 12 months after the enrollment date (or 18 months after a late enrollment), and the exclusion is reduced by days of creditable coverage. A limitation period is allowed if each policy that uses one specifies the physical condition it excludes, the period does not exceed 12 months, and the period is applied uniformly.

A carrier may charge a small group that moves coverage from another carrier a one-time surcharge of up to 25% of the annualized premium the carrier could otherwise charge. The surcharge may not be imposed if the change occurs on the anniversary of the plan year, the previous coverage was terminated, or employees from an existing group form a new business. It also may not be imposed when the offer falls after the anniversary because the application was made before the anniversary under the carrier’s published policies and the offer was not issued until after that date, or because additional underwriting or rating information requested by the carrier was not received until after the anniversary. If a carrier uses a surcharge, the surcharge and the criteria for incurring or avoiding it must appear in the written application materials given at application and in the written producer guidelines.`,
      questions: [
        question(
          'c11q16',
          'What must an insurer offer in the defined contribution arrangement market?',
          [
            {
              text: 'A federally qualified high-deductible plan, with the lowest deductible that plan allows and an out-of-pocket maximum no more than three times the deductible, and a second plan with an actuarial value at least 15% greater.',
              why: 'The insurer must accept all eligible employees and their dependents at the same benefit level as others with that plan, and it may not impose a premium surcharge. It may require the quarterly wage list. These arrangements have been available to small employers since January 1, 2010.',
              correct: true,
            },
            {
              text: 'Only a basic health care plan with a $1,000,000 lifetime maximum.',
              why: 'The $1,000,000 maximum is a feature of the basic health care plan that small employer carriers offer alongside a standard plan. The defined contribution market has its own two-plan requirement.',
            },
            {
              text: 'One plan, and the insurer may surcharge employees who are older than the group average.',
              why: 'Two plans are required, and a participating insurer may not impose a premium surcharge.',
            },
            {
              text: 'Any association plan with at least 100 members, portable even if the next employer does not participate.',
              why: 'Portability in this market lasts from job to job only while both employers participate in defined contribution arrangements. The 100-member rule is for association groups.',
            },
          ],
        ),
        question(
          'c11q17',
          'When may a small employer plan exclude a pre-existing condition, and when is a carrier’s one-time surcharge forbidden?',
          [
            {
              text: 'The exclusion can apply to a condition for which advice, diagnosis, care, or treatment was recommended in the 6 months before enrollment, and it must end by 12 months after enrollment, or 18 months after a late enrollment, reduced by creditable coverage. A surcharge of up to 25% cannot be charged when the carrier change is on the plan anniversary.',
              why: 'A limitation period must name the excluded physical condition, last no longer than 12 months, and be applied uniformly. The surcharge is also barred if the previous coverage was terminated or if employees from an existing group form a new business. Discontinuing a plan for nonpayment, fraud, or intentional misrepresentation is a separate renewal rule, and a carrier that drops a plan must give 90 days’ notice to sponsors and insureds and 3 working days’ notice to the Commissioner.',
              correct: true,
            },
            {
              text: 'The exclusion can last 36 months and cannot be reduced by prior coverage. The surcharge is required on every anniversary move.',
              why: 'Thirty-six months is a COBRA continuation period. Creditable coverage reduces the exclusion, and an anniversary change is one of the times the surcharge may not be imposed.',
            },
            {
              text: 'Pre-existing conditions cannot be excluded at all. The surcharge can be charged every year the group stays with the carrier.',
              why: 'A small employer plan may impose the exclusion on the terms above. The surcharge is a one-time charge when a group moves from another carrier, not an annual charge for staying.',
            },
            {
              text: 'The look-back is 12 months and the exclusion can run 6 months. The surcharge is 102% of premium.',
              why: 'The 6 months is the look-back, and the exclusion runs up to 12 months, or 18 after late enrollment. The 102% figure is the COBRA premium cap, not this surcharge.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c11-marketing',
      title: 'Advertising and which state law applies',
      body: `Health insurance advertising must be truthful and not misleading. Words and phrases may not be used if their meaning is clear only by implication or by familiarity with insurance terminology.

In advertisements of benefits payable, losses covered, and premiums payable, words, phrases, or illustrations cannot be used in a manner that misleads, or that has the tendency or capacity to deceive, concerning any policy benefit payable, loss covered, or premium payable. Advertisements must be sufficiently complete and clear to avoid deception or the capacity or tendency to deceive.

Group insurance can cover employees in more than one state. Generally, the state in which the coverage was delivered has jurisdiction. Most state laws say multi-state policies are acceptable if the policy is approved by the issuing state, written in substantial compliance with the laws of the delivery state, and the laws governing group insurance are substantially similar between the issuing state and the delivery state.`,
      questions: [
        question(
          'c11q03',
          'Which state’s law generally has jurisdiction over a group health policy that covers employees in more than one state?',
          [
            {
              text: 'The state in which the coverage was delivered.',
              why: 'A multi-state policy is generally acceptable if the issuing state approved it, it is written in substantial compliance with the delivery state’s laws, and the two states’ group insurance laws are substantially similar.',
              correct: true,
            },
            {
              text: 'The state where the largest number of employees live.',
              why: 'The course uses the place of delivery, not a headcount of employees.',
            },
            {
              text: 'Every state where an employee lives must approve the policy before any certificate is issued.',
              why: 'The policy must be approved by the issuing state and substantially comply with the delivery state. Each employee’s home state does not have to approve it.',
            },
            {
              text: 'Only the state where the insurer is domiciled, regardless of where coverage was delivered.',
              why: 'Domicile of the insurer is not the rule given here. Jurisdiction generally follows the state of delivery.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c11-erisa',
      title: 'ERISA',
      body: `The Employee Retirement Income Security Act of 1974 was enacted so employees receive the pension and other benefits their employers promise. It is tied to Internal Revenue Code provisions that encourage employers to provide retirement and other benefits. Many of those rules keep tax-favored pension plans from favoring the highest-paid employees over rank-and-file employees. ERISA covers pension, profit-sharing, stock bonus, and most welfare benefit plans, such as health and life insurance. It supersedes almost all state laws that affect employee benefit plans and creates a single federal standard.

Health care, life insurance, prepaid legal services, and both long-term and short-term disability insurance are employee welfare benefit plans. Unfunded benefits or payroll practices are not included: vacation, holidays, overtime premiums, holiday gifts, and compensation paid for time not worked. Group-type voluntary insurance programs to which the employer makes no contribution are also excluded.

ERISA treats as pension plans any deferred compensation, including deferred profit-sharing, stock purchasing, and savings and thrift plans, as well as pension plans. Cash bonus plans, cash profit-sharing plans, and severance pay of less than 2 years are compensation and are not regulated by ERISA. A bonus that is systematically deferred and paid out over several years is a pension plan.

Pension plans are subject to all of the rules, including reporting and disclosure, financial management of plan assets, administration, and participation, vesting, and funding. Welfare plans, such as health insurance, are concerned with reporting and disclosure and with financial management and plan administration standards.

The Internal Revenue Service administers the taxation of contributions and benefits. For retirement plans, the IRS enforces funding, participation, and vesting standards. The Pension Benefit Guaranty Corporation is in charge of pension insurance provisions. The U.S. Department of Labor administers reporting and disclosure and the fiduciary requirements that regulate management of plan assets.

Small unfunded welfare plans have reporting and disclosure exemptions. Governmental and church plans, plans established solely to comply with unemployment compensation, workers compensation, or disability insurance laws, and plans designed to provide benefits above the deduction limits to certain employees are exempt from ERISA. Unfunded plans maintained primarily to provide deferred compensation for a select group of management or highly compensated employees are exempt from the participation, vesting, funding, and fiduciary responsibility requirements. Those plans are called top hat plans. Unless another exemption applies, they are still subject to reporting and disclosure and to the administration and enforcement provisions.`,
      questions: [
        question(
          'c11q18',
          'Which plans are top hat plans, and which ERISA duties still apply to them?',
          [
            {
              text: 'Unfunded plans maintained primarily for deferred compensation for a select group of management or highly compensated employees. They remain subject to reporting and disclosure and to administration and enforcement, unless another exemption applies.',
              why: 'They are exempt from participation, vesting, funding, and fiduciary responsibility. Welfare plans such as health insurance follow reporting and disclosure plus financial management and administration. Pension plans follow all of the rules. Vacation, holiday, and overtime-premium payroll practices are not welfare plans.',
              correct: true,
            },
            {
              text: 'Every employer health plan. Top hat plans are exempt from reporting and disclosure.',
              why: 'Health coverage is a welfare benefit plan, not a top hat plan. Top hat plans are generally still subject to reporting and disclosure.',
            },
            {
              text: 'Church and governmental plans. They must meet the funding and vesting rules.',
              why: 'Governmental and church plans are exempt from ERISA. They are not the top hat category.',
            },
            {
              text: 'Cash bonus plans and severance pay of less than 2 years. They are pension plans.',
              why: 'Those arrangements are compensation and are not regulated by ERISA. A bonus systematically deferred and paid over several years is the arrangement treated as a pension plan.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c11-fairness',
      title: 'Age, pregnancy, and civil rights',
      body: `The Age Discrimination in Employment Act of 1967 promotes employment of older persons based on ability rather than age, prohibits arbitrary age discrimination in employment, and helps employers and workers meet problems that come from the impact of age on employment.

It is illegal for an employer or a labor organization to discriminate against an employee based on age. Unfair discrimination includes failing or refusing to hire, discharging, or refusing to refer a person for employment, or discriminating in compensation, terms, conditions, or privileges of employment. It includes limiting, segregating, or classifying employees in a way that deprives them of employment opportunities or otherwise adversely affects status. It includes reducing any employee’s wage rate. It includes printing or publishing a notice or advertisement that indicates a preference, limitation, or specification based on age.

Age is not an illegal basis for an action that would otherwise be prohibited when age is a bona fide occupational qualification reasonably necessary to the normal operation of the business, when the difference is based on reasonable factors other than age, or when the workplace is in a foreign country and compliance would cause the employer, or a corporation the employer controls, to violate that country’s laws.

An employer may reduce benefits based on age only if the cost of providing the reduced benefits to older workers is the same as the cost of providing benefits to younger workers. An employee’s contribution may be increased when the cost of providing benefits increases for all employees, not solely because of the employee’s age.

Under the act, retiree health benefits an employer provides must at least equal the value of benefits under the Social Security Act for retirees below age 65, and one-fourth the value of Social Security benefits for retirees age 65 or older. Those values are adjusted annually based on the Consumer Price Index.

The Pregnancy Discrimination Act is an amendment to the Civil Rights Act of 1964. Pregnancy, childbirth, and related medical conditions must be covered to the same extent as any other medical condition under the policy. The act applies to employers with 15 or more employees.

The same civil-rights limits apply to hiring, promotion, discharge, compensation, and the terms and conditions of employment, and they apply to employment agencies, labor organizations, advertisements and applications, and apprenticeship or other training programs. A person may not be treated adversely because of race, color, sex, pregnancy, childbirth, or pregnancy-related conditions, religion, national origin, disability, or age if the person is 40 or older. An applicant is not otherwise qualified unless the applicant has the education, training, ability, moral character, integrity, disposition to work, adherence to reasonable rules, and other job-related qualifications the employer requires for that job. Religion, sex, pregnancy, childbirth, or pregnancy-related conditions, age, national origin, or disability may be used where that characteristic is a bona fide occupational qualification reasonably necessary to the normal operation of the business.`,
      questions: [
        question(
          'c11q19',
          'When may an employer reduce insured benefits because of age, and how must pregnancy be covered?',
          [
            {
              text: 'Benefits may be reduced for age only when the cost of the reduced benefits for older workers equals the cost of benefits for younger workers. Pregnancy, childbirth, and related conditions must be covered like any other medical condition, at employers with 15 or more employees.',
              why: 'An employee’s contribution can rise when the cost of benefits rises for all employees, not solely because that employee is older. Retiree health benefits must at least equal Social Security benefits for retirees under 65, and one-fourth of that value at 65 or older, adjusted annually by the Consumer Price Index.',
              correct: true,
            },
            {
              text: 'Benefits may be cut at age 65 with no regard to cost. Pregnancy may be excluded if the employer has fewer than 50 employees.',
              why: 'The cost of the reduced benefit must match the cost of the younger workers’ benefit. The Pregnancy Discrimination Act applies at 15 or more employees, and it requires the same coverage as any other medical condition.',
            },
            {
              text: 'Benefits cannot be reduced at any age. Pregnancy coverage is required only for employers with 100 or more employees.',
              why: 'A cost-equal reduction is permitted. One hundred employees is the Medicare secondary threshold for disabled workers under 65, not the pregnancy threshold.',
            },
            {
              text: 'Older workers must pay the entire extra cost of their own age. Pregnancy can be limited to a 6-month pre-existing exclusion.',
              why: 'A contribution increase cannot be based solely on the employee’s age. Pregnancy must be covered to the same extent as any other medical condition. The 6-month figure is the small-employer pre-existing look-back.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c11-medicare',
      title: 'When the employer plan pays before Medicare',
      body: `When a person has an employer’s group health coverage and also qualifies for Medicare, one plan is primary and the other is secondary.

• Age 65 or older, currently employed or covered under a working spouse’s group plan, and the employer has 20 or more employees: the group plan is primary and Medicare is secondary.
• Age 65 or older, currently employed or covered under a working spouse’s group plan, and the employer has fewer than 20 employees: the group plan is secondary and Medicare is primary.
• Under age 65, disabled, currently employed or covered under a working spouse’s group plan, and the employer has 100 or more employees: the group plan is primary and Medicare is secondary.
• Eligible for Medicare because of end-stage renal disease: the group plan is primary for the first 30 months, and Medicare is secondary for those 30 months and primary after that.

If an individual is covered under an employer group health plan covering 20 or more employees, that plan is primary and Medicare is secondary. Disabled employees or disabled dependents under age 65 who are eligible for Medicare and covered under a large group plan have primary coverage under the group plan. Medicare is secondary. Large group plans are those covering 100 or more employees.

Medicare carve-out and supplement plans are available to people enrolled in Medicare. They act as excess insurance and pay covered expenses Medicare does not pay, such as deductibles or copayments.

To apply the nondiscrimination rules and count employees in the top-paid group, these employees are excluded:
• Employees who have not completed 6 months of service.
• Employees who normally work fewer than 17½ hours per week.
• Employees who normally work during no more than 6 months per year.
• Employees under age 21.
• Employees in a unit covered by an agreement the Secretary of Labor finds to be a collective bargaining agreement, except to the extent regulations provide otherwise.

A highly compensated employee is any employee who owned more than 5% of the interest in the business at any time during the year or the preceding year, regardless of compensation, or who, for the preceding year, received compensation from the business above a specified dollar amount ($150,000 if the preceding year is 2023) and, if the employer so chooses, was in the top 20% of employees when ranked by compensation.`,
      questions: [
        question(
          'c11q20',
          'A 66-year-old employee is still working for an employer with 20 or more employees and has both the group plan and Medicare. Which plan pays first?',
          [
            {
              text: 'The group plan is primary and Medicare is secondary.',
              why: 'If that employer had fewer than 20 employees, Medicare would be primary. A disabled worker under 65 has the group plan as primary when the employer has 100 or more employees. For end-stage renal disease, the group plan is primary for the first 30 months, and Medicare is primary after that. Carve-out and supplement plans pay covered expenses Medicare does not pay, such as deductibles or copayments.',
              correct: true,
            },
            {
              text: 'Medicare is primary whenever the person is 65 or older, no matter how many employees the employer has.',
              why: 'At 65 or older, Medicare is primary when the employer has fewer than 20 employees. At 20 or more, the group plan pays first.',
            },
            {
              text: 'The group plan is primary for 30 months, and then Medicare is primary, because the person is over 65.',
              why: 'The 30-month order is the end-stage renal disease rule, not the rule for a working employee age 65 or older.',
            },
            {
              text: 'Both pay half, because coordination of benefits always splits a Medicare claim in equal shares.',
              why: 'Equal shares are the group coordination rule when plans cannot agree on order within 30 days. Medicare secondary status follows the employment and employer-size rules above.',
            },
          ],
        ),
        question(
          'c11q21',
          'Who is a highly compensated employee under the nondiscrimination count?',
          [
            {
              text: 'Someone who owned more than 5% of the business at any time during the year or the preceding year, or who received more than the stated compensation amount for the preceding year ($150,000 if that year is 2023) and, if the employer chooses, was in the top 20% by pay.',
              why: 'The count excludes employees with fewer than 6 months of service, those who normally work fewer than 17½ hours per week, those who normally work no more than 6 months a year, those under 21, and those in a collective bargaining unit except as regulations provide. Ownership of more than 5% counts regardless of compensation.',
              correct: true,
            },
            {
              text: 'Any employee over age 65, because Medicare is secondary at that age.',
              why: 'Age 65 is a Medicare coordination fact. It does not define a highly compensated employee.',
            },
            {
              text: 'Only employees who earned more than $150,000, and 5% owners are excluded if their pay is lower.',
              why: 'More than 5% ownership counts regardless of the employee’s compensation.',
            },
            {
              text: 'The top 50% of employees by hours worked, including part-time workers under 21.',
              why: 'The optional ranking is the top 20% by compensation, and employees under 21 are excluded from the count. Workers who normally work fewer than 17½ hours per week are also excluded.',
            },
          ],
        ),
      ],
    },

  ],
}

for (const section of chapter11.sections) {
  section.questions.push(...(chapter11Extra[section.id] ?? []))
}
