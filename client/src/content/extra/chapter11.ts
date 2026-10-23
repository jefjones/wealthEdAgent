import { question } from '../build.ts'
import type { Question } from '../types.ts'

export const chapter11Extra: Record<string, Question[]> = {
'c11-contract': [
    question(
      'c11q22',
      'Who are the parties to a group health insurance contract?',
      [
        {
          text: 'The insurance company and the insured.',
          why: 'An individual policy is the contract between the insurance company and the insured. Group health insurance is a contract between the insurance company and the group sponsor.',
        },
        {
          text: 'The insurance company and the group sponsor.',
          why: 'Group health insurance is a contract between the insurance company and the group sponsor, such as the employer, union, trust, or other sponsoring organization. The policy is called the master policy and is issued to the policyowner.',
          correct: true,
        },
        {
          text: 'The certificate holder and the insurer’s community pool.',
          why: 'Community rating, or pool rating, is how an individual policy premium is set. It does not make the certificate holder a party to the group contract in place of the group sponsor.',
        },
        {
          text: 'A lender of funds and a borrower of funds.',
          why: 'A creditor is a lender of funds, and a debtor is a borrower of funds. Those terms do not name the parties to the group health contract.',
        },
      ],
    ),
    question(
      'c11q23',
      'An individual policy is a contract between which parties?',
      [
        {
          text: 'The insurance company and the group sponsor.',
          why: 'The insurance company and the group sponsor are the parties to group health insurance. An individual policy is a different contract.',
        },
        {
          text: 'The policyowner and every certificate holder.',
          why: 'The master policy is issued to the policyowner, and covered people receive certificates. An individual policy is a contract between the insurance company and the insured.',
        },
        {
          text: 'The insurance company and the insured.',
          why: 'An individual policy is a contract between the insurance company and the insured. Group health insurance is the contract with the group sponsor.',
          correct: true,
        },
        {
          text: 'The employer and a trust fund that pays claims directly.',
          why: 'A self-funded program is a noninsured plan that uses a trust fund to pay employees’ health care expenses directly. That arrangement is not the definition of an individual policy.',
        },
      ],
    ),
    question(
      'c11q24',
      'What is a certificate of insurance forbidden to contain?',
      [
        {
          text: 'A description of what is covered.',
          why: 'The certificate tells what is covered. That disclosure is not the material a certificate is forbidden to contain.',
        },
        {
          text: 'Instructions on how to file a claim.',
          why: 'The certificate tells how to file a claim. Claim instructions are part of what the certificate provides.',
        },
        {
          text: 'The steps for converting to an individual policy.',
          why: 'The certificate tells how to convert the policy to an individual policy. Conversion information is allowed content.',
        },
        {
          text: 'Provisions or statements that are unfair, misleading, or deceptive.',
          why: 'A certificate cannot contain provisions or statements that are unfair, misleading, or deceptive. Covered people receive that certificate as evidence of coverage.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q25',
      'What does a certificate of coverage tell the covered person?',
      [
        {
          text: 'What is covered, how to file a claim, how long the coverage will last, and how to convert the policy to an individual policy.',
          why: 'The certificate tells what is covered, how to file a claim, how long the coverage will last, and how to convert the policy to an individual policy. People covered under the plan receive it as evidence of coverage.',
          correct: true,
        },
        {
          text: 'That the premium comes from the insurance company’s overall claims experience.',
          why: 'A premium based on the overall claims experience of the insurance company is community rating, or pool rating, for individual policies. That rating method is not what the certificate tells the covered person.',
        },
        {
          text: 'That deceptive statements are allowed when they favor the insured.',
          why: 'A certificate cannot contain provisions or statements that are unfair, misleading, or deceptive. It instead tells what is covered, how to file a claim, how long coverage will last, and how to convert.',
        },
        {
          text: 'That the group contract is made only with the insured.',
          why: 'An individual policy is the contract between the insurance company and the insured. The certificate does not turn the group contract into that individual contract.',
        },
      ],
    ),
    question(
      'c11q26',
      'Which employers does experience rating help?',
      [
        {
          text: 'Employers whose individual policies are pool rated.',
          why: 'Individual policies are community rated, or pool rated, based on the overall claims experience of the insurance company. Experience rating is the usual group method, and it helps employers with low claims experience.',
        },
        {
          text: 'Employers with low claims experience, because they get lower premiums.',
          why: 'Group health insurance is usually experience rated, so premiums are determined by the experience of that particular group as a whole. Experience rating helps employers with low claims experience because they get lower premiums.',
          correct: true,
        },
        {
          text: 'Employers whose premiums ignore that group’s own claims.',
          why: 'Experience-rated group premiums are determined by the experience of that particular group as a whole. They are not set by ignoring the group’s own experience.',
        },
        {
          text: 'Employers who replace the master policy with a deceptive certificate.',
          why: 'A certificate cannot contain unfair, misleading, or deceptive statements. Experience rating helps employers with low claims experience through lower premiums.',
        },
      ],
    ),
    question(
      'c11q27',
      'How is the premium for an individual policy determined?',
      [
        {
          text: 'By the claims experience of one particular group as a whole.',
          why: 'Premiums determined by the experience of one particular group are experience-rated group premiums. An individual policy is community rated, or pool rated.',
        },
        {
          text: 'By lowering the premium whenever that group has low claims.',
          why: 'Lower premiums for low claims experience are the result of group experience rating. An individual premium is based on the overall claims experience of the insurance company.',
        },
        {
          text: 'It is community rated, or pool rated, from the overall claims experience of the insurance company.',
          why: 'Individual policies are community rated, or pool rated. That premium is based on the overall claims experience of the insurance company.',
          correct: true,
        },
        {
          text: 'By the conversion instructions printed in the certificate.',
          why: 'The certificate tells how to convert the policy to an individual policy. Conversion instructions do not set the individual premium.',
        },
      ],
    ),
    question(
      'c11q28',
      'In this chapter’s terms, who is a debtor?',
      [
        {
          text: 'A lender of funds.',
          why: 'A lender of funds is a creditor. A debtor is a borrower of funds.',
        },
        {
          text: 'The policyowner that holds the master policy.',
          why: 'The master policy is issued to the policyowner, which could be the employer, an association, a union, or a trust. A debtor is a borrower of funds.',
        },
        {
          text: 'A federal law that protects health information.',
          why: 'HIPAA is the Health Insurance Portability and Accountability Act, a federal law that protects health information. A debtor is a borrower of funds.',
        },
        {
          text: 'A borrower of funds.',
          why: 'A debtor is a borrower of funds. A creditor is a lender of funds.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q29',
      'How far does an extension of benefits continue coverage?',
      [
        {
          text: 'Past the policy’s expiration for an employee not actively at work because of disability, or for a dependent hospitalized on that date, only until the employee returns to work or the dependent leaves the hospital.',
          why: 'Extension of benefits means coverage continues beyond the policy’s expiration date for employees who are not actively at work because of disability, or who have dependents hospitalized on that date. Coverage continues only until the employee returns to work or the dependent leaves the hospital.',
          correct: true,
        },
        {
          text: 'For every actively working employee, for as long as the policy stays experience rated.',
          why: 'Experience rating sets group premiums from that group’s claims experience. Extension of benefits is the continuation past expiration for disability or a hospitalized dependent, and only until return to work or discharge.',
        },
        {
          text: 'Until an individual policy is re-rated on the insurer’s entire pool.',
          why: 'Community rating, or pool rating, bases an individual premium on the insurance company’s overall claims experience. That rating is not an extension of benefits.',
        },
        {
          text: 'After the certificate adds a misleading statement about conversion.',
          why: 'A certificate cannot contain unfair, misleading, or deceptive statements, and it tells how to convert. An extension of benefits is a limited continuation past the policy’s expiration.',
        },
      ],
    ),
    question(
      'c11q30',
      'What is persistency?',
      [
        {
          text: 'Risk selection and classification.',
          why: 'Underwriting is risk selection and classification. Persistency is the tendency of insurance policies not to lapse or be replaced with insurance from another insurer.',
        },
        {
          text: 'The tendency of insurance policies not to lapse or be replaced with insurance from another insurer.',
          why: 'Persistency is the tendency of insurance policies not to lapse or be replaced with insurance from another insurer. It is one of the terms used in this chapter.',
          correct: true,
        },
        {
          text: 'A federal law that protects health information.',
          why: 'HIPAA is the Health Insurance Portability and Accountability Act, a federal law that protects health information. That law is not the definition of persistency.',
        },
        {
          text: 'A noninsured plan that pays health care expenses from a trust fund.',
          why: 'Self-funded programs are a noninsured plan that uses a trust fund to pay employees’ health care expenses directly. Persistency is the tendency of policies not to lapse or be replaced.',
        },
      ],
    ),
    question(
      'c11q31',
      'What is a self-funded program?',
      [
        {
          text: 'A contract between the insurance company and the insured.',
          why: 'An individual policy is a contract between the insurance company and the insured. A self-funded program is a noninsured plan using a trust fund.',
        },
        {
          text: 'Coverage that stops when a hospitalized dependent leaves the hospital.',
          why: 'Extension of benefits continues only until the employee returns to work or the dependent leaves the hospital. A self-funded program is a noninsured plan that pays expenses from a trust fund.',
        },
        {
          text: 'A noninsured plan that uses a trust fund to pay employees’ health care expenses directly.',
          why: 'Self-funded programs are a noninsured plan that uses a trust fund to pay employees’ health care expenses directly. The plan is not an insured contract with the group sponsor.',
          correct: true,
        },
        {
          text: 'The tendency of policies not to lapse or be replaced.',
          why: 'That tendency is persistency. A self-funded program uses a trust fund to pay employees’ health care expenses directly.',
        },
      ],
    ),
  ],
  'c11-marketing': [
    question(
      'c11q32',
      'What standard must health insurance advertising meet?',
      [
        {
          text: 'Words may be used when their meaning is clear only by implication.',
          why: 'Words and phrases may not be used if their meaning is clear only by implication or by familiarity with insurance terminology. Advertising must be truthful and not misleading.',
        },
        {
          text: 'Phrases may require familiarity with insurance terminology.',
          why: 'A phrase whose meaning is clear only by familiarity with insurance terminology may not be used. Advertising has to be truthful and not misleading.',
        },
        {
          text: 'Illustrations may mislead about a premium if the benefit is named.',
          why: 'Illustrations cannot be used in a manner that misleads or has the tendency or capacity to deceive about a premium payable. Advertising must be truthful and not misleading.',
        },
        {
          text: 'Advertising must be truthful and not misleading.',
          why: 'Health insurance advertising must be truthful and not misleading. Words and phrases may not be used when their meaning is clear only by implication or by familiarity with insurance terminology.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q33',
      'When are words and phrases barred from health insurance advertising?',
      [
        {
          text: 'When their meaning is clear only by implication or by familiarity with insurance terminology.',
          why: 'Words and phrases may not be used if their meaning is clear only by implication or by familiarity with insurance terminology. Advertising must be truthful and not misleading.',
          correct: true,
        },
        {
          text: 'When they name a benefit the policy actually pays.',
          why: 'Naming a benefit that is actually payable is not the prohibited use. The bar applies when meaning is clear only by implication or by familiarity with insurance terminology.',
        },
        {
          text: 'When the advertisement is sufficiently complete and clear.',
          why: 'Advertisements must be sufficiently complete and clear to avoid deception or the capacity or tendency to deceive. Completeness is required, not forbidden.',
        },
        {
          text: 'When the issuing state has approved the policy.',
          why: 'Approval by the issuing state is one condition under which most state laws accept a multi-state policy. It is not a ban on words and phrases.',
        },
      ],
    ),
    question(
      'c11q34',
      'In advertisements of benefits payable, losses covered, and premiums payable, what use of words, phrases, or illustrations is forbidden?',
      [
        {
          text: 'A use that is sufficiently complete and clear.',
          why: 'Advertisements must be sufficiently complete and clear to avoid deception or the capacity or tendency to deceive. That standard is required.',
        },
        {
          text: 'A use that misleads, or that has the tendency or capacity to deceive, about a benefit payable, a loss covered, or a premium payable.',
          why: 'In advertisements of benefits payable, losses covered, and premiums payable, words, phrases, or illustrations cannot be used in a manner that misleads or that has the tendency or capacity to deceive concerning any policy benefit payable, loss covered, or premium payable.',
          correct: true,
        },
        {
          text: 'A use that identifies the state where coverage was delivered.',
          why: 'Group insurance can cover employees in more than one state, and generally the state where coverage was delivered has jurisdiction. Identifying that state is not the forbidden advertising use.',
        },
        {
          text: 'A use that shows the policy was approved by the issuing state.',
          why: 'Most state laws accept a multi-state policy if it is approved by the issuing state, among other conditions. Approval is not a deceptive illustration of a benefit, loss, or premium.',
        },
      ],
    ),
    question(
      'c11q35',
      'How complete and clear must a health insurance advertisement be?',
      [
        {
          text: 'Clear only to a reader who already knows insurance terminology.',
          why: 'Words and phrases may not be used if their meaning is clear only by familiarity with insurance terminology. An advertisement must be sufficiently complete and clear to avoid deception.',
        },
        {
          text: 'Complete enough to imply a benefit that is not payable.',
          why: 'A meaning that is clear only by implication is not allowed. Advertisements must be sufficiently complete and clear to avoid deception or the capacity or tendency to deceive.',
        },
        {
          text: 'Sufficiently complete and clear to avoid deception or the capacity or tendency to deceive.',
          why: 'Advertisements must be sufficiently complete and clear to avoid deception or the capacity or tendency to deceive. They also must be truthful and not misleading.',
          correct: true,
        },
        {
          text: 'Complete only as to the issuing state, and silent on premiums payable.',
          why: 'Advertisements of premiums payable cannot use words, phrases, or illustrations that mislead about a premium payable. The advertisement must be sufficiently complete and clear.',
        },
      ],
    ),
    question(
      'c11q36',
      'Under most state laws, when is a multi-state group policy acceptable?',
      [
        {
          text: 'When its advertising is clear only by implication.',
          why: 'Words and phrases may not be used if their meaning is clear only by implication. Multi-state acceptability depends on approval, substantial compliance, and similar group laws.',
        },
        {
          text: 'When the issuing state has not approved it and the two states have dissimilar group laws.',
          why: 'Most state laws accept the policy when it is approved by the issuing state and the laws governing group insurance are substantially similar. Lack of approval and dissimilar laws do not meet that test.',
        },
        {
          text: 'When illustrations can deceive readers about premiums payable.',
          why: 'Illustrations that have the tendency or capacity to deceive about a premium payable are forbidden. They do not make a multi-state policy acceptable.',
        },
        {
          text: 'When it is approved by the issuing state, written in substantial compliance with the laws of the delivery state, and the group laws of those states are substantially similar.',
          why: 'Most state laws say multi-state policies are acceptable if the policy is approved by the issuing state, written in substantial compliance with the laws of the delivery state, and the laws governing group insurance are substantially similar between the issuing state and the delivery state. Group insurance can cover employees in more than one state, and generally the state in which the coverage was delivered has jurisdiction.',
          correct: true,
        },
      ],
    ),
  ],
  'c11-groups': [
    question(
      'c11q37',
      'To qualify for group coverage, for what purpose must the group have been formed?',
      [
        {
          text: 'A purpose other than obtaining group health insurance.',
          why: 'To qualify for group coverage, the group must be formed for a purpose other than obtaining group health insurance. The coverage must be incidental to the group.',
          correct: true,
        },
        {
          text: 'The sole purpose of obtaining group health insurance.',
          why: 'A group formed to obtain group health insurance does not meet the qualification rule. The group must be formed for a purpose other than obtaining that insurance.',
        },
        {
          text: 'The purpose of buying insurance for association members.',
          why: 'An association must be organized for a reason other than buying insurance. Forming a group in order to obtain group health insurance does not qualify the group.',
        },
        {
          text: 'The purpose of letting employers pool risks and self-insure.',
          why: 'Pooling risks in order to self-insure describes a multiple-employer welfare arrangement. Qualification still requires a purpose other than obtaining group health insurance.',
        },
      ],
    ),
    question(
      'c11q38',
      'What relationship must the coverage have to the group?',
      [
        {
          text: 'It must be the only reason the group exists.',
          why: 'The group must be formed for a purpose other than obtaining group health insurance. The coverage must be incidental to the group, not the reason the group exists.',
        },
        {
          text: 'It must be incidental to the group.',
          why: 'The coverage must be incidental to the group. The group must be formed for a purpose other than obtaining group health insurance.',
          correct: true,
        },
        {
          text: 'It must be limited to debtors of one creditor.',
          why: 'Creditor group insurance covers debtors, but that is a type of plan, not the rule that coverage must be incidental to the group.',
        },
        {
          text: 'It must be issued by a duly admitted insurer only.',
          why: 'A multiple employer welfare association is an entity other than a duly admitted insurer. The qualification rule is that coverage must be incidental to the group.',
        },
      ],
    ),
    question(
      'c11q39',
      'What are the two general types of groups for this coverage?',
      [
        {
          text: 'Creditor groups and debtor groups.',
          why: 'Creditor group insurance covers debtors, with the creditor as contract owner. The two general types are employer-sponsored and association-sponsored.',
        },
        {
          text: 'Customer groups and discretionary groups.',
          why: 'Customer groups and discretionary groups are also eligible. They are not the two general types, which are employer-sponsored and association-sponsored.',
        },
        {
          text: 'Employer-sponsored and association-sponsored.',
          why: 'The two general types are employer-sponsored and association-sponsored. Customer groups and discretionary groups are also eligible.',
          correct: true,
        },
        {
          text: 'Fully insured MEWAs and individual conversions.',
          why: 'A MEWA can be fully or only partially insured, and an employee leaving the described group coverage has no conversion right. The two general types are employer-sponsored and association-sponsored.',
        },
      ],
    ),
    question(
      'c11q40',
      'Besides the two general types, which groups are also eligible?',
      [
        {
          text: 'Only groups formed so they can obtain health insurance.',
          why: 'A group must be formed for a purpose other than obtaining group health insurance. Customer groups and discretionary groups are the additional eligible groups.',
        },
        {
          text: 'Only duly admitted insurers.',
          why: 'A MEWA is any entity other than a duly admitted insurer. Customer groups and discretionary groups are also eligible, beyond employer-sponsored and association-sponsored groups.',
        },
        {
          text: 'Only borrowers covered by credit disability income insurance.',
          why: 'Creditor group insurance covers debtors. The groups that are also eligible, besides the two general types, are customer groups and discretionary groups.',
        },
        {
          text: 'Customer groups and discretionary groups.',
          why: 'Customer groups and discretionary groups are also eligible. The two general types remain employer-sponsored and association-sponsored.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q41',
      'Which business forms may an employer-sponsored group take?',
      [
        {
          text: 'A partnership, a corporation, or a sole proprietorship.',
          why: 'An employer-sponsored group may be a partnership, corporation, or sole proprietorship. Group health insurance may be contributory or noncontributory, the same as group life insurance.',
          correct: true,
        },
        {
          text: 'Only a trust that pays claims with no insurer.',
          why: 'A noninsured plan may operate without an insurance company’s services and funds. An employer-sponsored group may be a partnership, corporation, or sole proprietorship.',
        },
        {
          text: 'Only an alumni association with by-laws.',
          why: 'An alumni or professional group is an association group, and an association must have a constitution and by-laws. An employer-sponsored group may be a partnership, corporation, or sole proprietorship.',
        },
        {
          text: 'Only a credit union that insures its debtors.',
          why: 'A credit union is an example of a creditor that can own creditor group insurance. An employer-sponsored group may be a partnership, corporation, or sole proprietorship.',
        },
      ],
    ),
    question(
      'c11q42',
      'What do eligible employees in an employer-sponsored group usually have to meet?',
      [
        {
          text: 'Annual meetings and a constitution.',
          why: 'A constitution and by-laws, plus meetings at least annually, are association requirements. Eligible employees usually must meet a time-of-service requirement and work full time.',
        },
        {
          text: 'A time-of-service requirement and full-time work.',
          why: 'Eligible employees usually must meet a time-of-service requirement and work full time. Within limits, the employer can specify how many hours count as full time and whether both salaried and hourly employees are covered.',
          correct: true,
        },
        {
          text: 'Status as a debtor who pays the creditor’s premium.',
          why: 'In creditor group insurance, the debtor generally pays the premium. Eligible employees of an employer-sponsored group usually must meet a time-of-service requirement and work full time.',
        },
        {
          text: 'Jobs with two employers that do not qualify on their own.',
          why: 'A multiple-employer trust is two or more employers in similar or related businesses who do not qualify on their own. An eligible employee usually must meet a time-of-service requirement and work full time.',
        },
      ],
    ),
    question(
      'c11q43',
      'Which people may the employer legally leave out of the plan?',
      [
        {
          text: 'All full-time employees.',
          why: 'The employer normally covers all full-time employees. The employer can legally exclude a particular class, such as union or part-time employees.',
        },
        {
          text: 'The trustee who has charge of the trust funds.',
          why: 'The trustee has charge of the funds, and all financial activity goes through the trust. That role is not the class of employees the employer may exclude.',
        },
        {
          text: 'A particular class, such as union or part-time employees.',
          why: 'The employer normally covers all full-time employees. The employer can legally exclude a particular class, such as union or part-time employees.',
          correct: true,
        },
        {
          text: 'Every hourly employee, because only salaried employees may be covered.',
          why: 'Within limits, the employer can specify whether both salaried and hourly employees are covered. The stated exclusion is a particular class, such as union or part-time employees.',
        },
      ],
    ),
    question(
      'c11q44',
      'What is a multiple-employer trust?',
      [
        {
          text: 'One employer that already qualifies for group insurance on its own.',
          why: 'A multiple-employer trust is for employers who do not qualify for group insurance on their own. It is two or more employers in similar or related businesses.',
        },
        {
          text: 'An association that has been active for at least two years.',
          why: 'An association group must have been active for at least two years. A multiple-employer trust is two or more employers in similar or related businesses who do not qualify on their own.',
        },
        {
          text: 'A creditor that insures one debtor.',
          why: 'Creditor group insurance covers debtors and is owned by the creditor. A multiple-employer trust is two or more employers who do not qualify for group insurance on their own.',
        },
        {
          text: 'Two or more employers in similar or related businesses who do not qualify for group insurance on their own.',
          why: 'A multiple-employer trust is two or more employers in similar or related businesses who do not qualify for group insurance on their own. Several small companies may band together and jointly purchase a single benefits plan.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q45',
      'Before HIPAA defined small employers, why did many small companies band together for a single benefits plan?',
      [
        {
          text: 'They could not get health insurance at a reasonable cost because there were not enough people to insure.',
          why: 'Before HIPAA defined small employers, many small companies could not get health insurance at a reasonable cost because there were not enough people to insure. Several small companies banded together and jointly purchased a single benefits plan for the employees of each employer.',
          correct: true,
        },
        {
          text: 'Each company already had enough people to insure on its own.',
          why: 'The problem was that there were not enough people to insure, so the cost was not reasonable. The companies banded together and jointly purchased one benefits plan.',
        },
        {
          text: 'Each company was a duly admitted insurer.',
          why: 'A MEWA is an entity other than a duly admitted insurer. These small companies banded together because there were not enough people to insure at a reasonable cost.',
        },
        {
          text: 'Their employees already had a conversion right they wanted to expand.',
          why: 'An employee leaving this group coverage has no conversion right. The companies joined because they could not get health insurance at a reasonable cost.',
        },
      ],
    ),
    question(
      'c11q46',
      'What is self-funding once a multiple-employer trust fund is established?',
      [
        {
          text: 'Paying every claim through an insurance company’s services and funds.',
          why: 'A noninsured plan may operate without an insurance company’s services and funds. Self-funding means the trust fund pays health care expenses directly.',
        },
        {
          text: 'Paying health care expenses directly from the trust fund.',
          why: 'Once the trust fund is established, it can pay health care expenses directly. That is self-funding, and a noninsured plan may operate without an insurance company’s services and funds.',
          correct: true,
        },
        {
          text: 'Giving a leaving employee a conversion policy.',
          why: 'The employee has no conversion right upon leaving the group coverage. Self-funding is the trust fund paying health care expenses directly.',
        },
        {
          text: 'Paying the creditor more than the indebtedness.',
          why: 'Creditor group proceeds are paid to the creditor to liquidate the indebtedness. Self-funding is direct payment of health care expenses from the trust fund.',
        },
      ],
    ),
    question(
      'c11q47',
      'Who has charge of the funds in a multiple-employer trust?',
      [
        {
          text: 'The employee who is leaving the group.',
          why: 'The employee has no conversion right upon leaving. The trustee has charge of the funds, and all financial activity goes through the trust.',
        },
        {
          text: 'The head of the Department of Insurance.',
          why: 'A discretionary group can apply according to a decision by the head of the Department of Insurance. In a multiple-employer trust, the trustee has charge of the funds.',
        },
        {
          text: 'The trustee, with all financial activity going through the trust.',
          why: 'The trustee has charge of the funds, and all financial activity goes through the trust. The employer assumes legal responsibility for providing coverage.',
          correct: true,
        },
        {
          text: 'The debtor who pays the premium.',
          why: 'In creditor group insurance, the debtor generally pays the premium. The trustee has charge of the funds in a multiple-employer trust.',
        },
      ],
    ),
    question(
      'c11q48',
      'What conversion right does an employee have upon leaving this group coverage?',
      [
        {
          text: 'A right to convert to a policy owned by the creditor.',
          why: 'The creditor owns the creditor-group contract. An employee leaving the group coverage described for this trust has no conversion right.',
        },
        {
          text: 'A right to take charge of the trust funds.',
          why: 'The trustee has charge of the funds. The employee has no conversion right upon leaving the group coverage.',
        },
        {
          text: 'A right to have the Department of Insurance issue an individual policy.',
          why: 'The head of the Department of Insurance is involved when a discretionary group applies. Leaving this group coverage gives the employee no conversion right.',
        },
        {
          text: 'No conversion right.',
          why: 'The employer assumes legal responsibility for providing coverage, and the employee has no conversion right upon leaving the group coverage. That result follows this noninsured arrangement.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q49',
      'Which description fits a multiple employer welfare association?',
      [
        {
          text: 'Any entity, other than a duly admitted insurer, that establishes an employee benefit plan for the employees of at least two employers.',
          why: 'A MEWA can be any entity, other than a duly admitted insurer, that establishes an employee benefit plan to offer or provide accident and sickness or death benefits to the employees of at least two employers, including self-employed individuals and their dependents. Today the terms are generally treated as interchangeable with a MET.',
          correct: true,
        },
        {
          text: 'Only a duly admitted insurer.',
          why: 'The definition excludes a duly admitted insurer. A MEWA is any other entity that establishes the employee benefit plan for at least two employers.',
        },
        {
          text: 'One employer that already qualifies for group insurance alone.',
          why: 'Employers in a multiple-employer trust do not qualify for group insurance on their own. A MEWA provides benefits to the employees of at least two employers.',
        },
        {
          text: 'A credit contract owned by the debtor.',
          why: 'The contract owner of creditor group insurance is the creditor, not the debtor. A MEWA is an entity other than a duly admitted insurer offering benefits for at least two employers.',
        },
      ],
    ),
    question(
      'c11q50',
      'How is a multiple-employer welfare arrangement different from a MET?',
      [
        {
          text: 'It cannot cover self-employed people or their dependents.',
          why: 'A MEWA includes self-employed individuals and their dependents. The difference is that these employer groups pool their risks in order to self-insure.',
        },
        {
          text: 'The employers pool their risks in order to self-insure.',
          why: 'A multiple-employer welfare arrangement is similar to a MET, except that these groups of employers pool their risks in order to self-insure. Groups can be from the same or related industries because of the law of large numbers and similar risks.',
          correct: true,
        },
        {
          text: 'It must itself be a duly admitted insurer.',
          why: 'A MEWA is any entity other than a duly admitted insurer. It is similar to a MET except that the employers pool their risks in order to self-insure.',
        },
        {
          text: 'A leaving employee gains a conversion right.',
          why: 'The employee has no conversion right upon leaving the group coverage. The welfare arrangement differs because the employers pool their risks in order to self-insure.',
        },
      ],
    ),
    question(
      'c11q51',
      'Who may sponsor the group and help design the plan or handle administration?',
      [
        {
          text: 'Only the head of the Department of Insurance.',
          why: 'The head of the Department of Insurance is the decision maker for a discretionary group application. An insurance company or an independent administrator may sponsor a MEWA and help design the plan or handle administration.',
        },
        {
          text: 'Only the debtor, who must also be the beneficiary.',
          why: 'In creditor group insurance the debtor generally pays the premium, and the lending institution is the beneficiary. A MEWA sponsor may be an insurance company or an independent administrator.',
        },
        {
          text: 'An insurance company or an independent administrator.',
          why: 'An insurance company or an independent administrator may sponsor the group and help design the plan or handle administration. The sponsor is not required to be the head of the Department of Insurance.',
          correct: true,
        },
        {
          text: 'Only a group formed solely to obtain insurance.',
          why: 'A group must be formed for a purpose other than obtaining group health insurance. An insurance company or an independent administrator may sponsor the MEWA and help design or administer the plan.',
        },
      ],
    ),
    question(
      'c11q52',
      'If a MEWA plan is not fully insured, who retains responsibility for any debt?',
      [
        {
          text: 'A duly admitted insurer, in every case.',
          why: 'A MEWA is an entity other than a duly admitted insurer. If the plan is not fully insured, the individuals or employers retain full responsibility for any debt.',
        },
        {
          text: 'No one, because the arrangement cannot be only partially insured.',
          why: 'Some arrangements are only partially insured. The individuals or employers then retain full responsibility for any debt, and the arrangements are considered risky if not fully insured.',
        },
        {
          text: 'The employee, but only through a conversion right.',
          why: 'The employee has no conversion right upon leaving the group coverage. Debt responsibility, when the plan is not fully insured, stays with the individuals or employers.',
        },
        {
          text: 'The individuals or employers.',
          why: 'These arrangements are considered risky if not fully insured. Some are only partially insured, and the individuals or employers retain full responsibility for any debt if the plan is not fully insured.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q53',
      'Who is the contract owner and the beneficiary of creditor group insurance?',
      [
        {
          text: 'The creditor, such as a bank, a small-loan company, or a credit union.',
          why: 'The contract owner is the creditor, such as a bank, a small-loan company, or a credit union, and the lending institution is the beneficiary. The coverage protects that institution if a borrower dies or becomes disabled, the debtor generally pays the premium, and the proceeds liquidate the indebtedness.',
          correct: true,
        },
        {
          text: 'The debtor who borrows the funds.',
          why: 'The debtor generally pays the premium, but the debtor is not the contract owner or the beneficiary. The creditor owns the contract, and the lending institution is the beneficiary.',
        },
        {
          text: 'The employee who leaves a multiple-employer trust.',
          why: 'That employee has no conversion right and does not own the creditor contract. The creditor is the contract owner and the lending institution is the beneficiary.',
        },
        {
          text: 'The head of the Department of Insurance.',
          why: 'The head of the Department of Insurance decides on a discretionary group application. Creditor group insurance is owned by the creditor, who is also the beneficiary.',
        },
      ],
    ),
    question(
      'c11q54',
      'How long must an association group have been active?',
      [
        {
          text: 'At least 100 years.',
          why: 'At least 100 is the member count, not the activity period. The group must have been active for at least two years.',
        },
        {
          text: 'At least two years.',
          why: 'The group must have been active for at least two years. It must also be organized for a reason other than buying insurance, have a constitution and by-laws, and hold meetings at least annually.',
          correct: true,
        },
        {
          text: 'Only until it holds its first meeting.',
          why: 'The group must hold meetings at least annually, and it must have been active for at least two years. One meeting does not replace that activity period.',
        },
        {
          text: 'No minimum period if it was organized to buy insurance.',
          why: 'The group must be organized for a reason other than buying insurance and must have been active for at least two years. Organizing in order to buy insurance does not remove the activity period.',
        },
      ],
    ),
    question(
      'c11q55',
      'How many members must an association group have?',
      [
        {
          text: 'At least two members.',
          why: 'At least two employers is the MEWA threshold, not the association member count. An association group must have at least 100 members.',
        },
        {
          text: 'At least two years of membership for each person.',
          why: 'At least two years is how long the association itself must have been active. The member requirement is at least 100 members.',
        },
        {
          text: 'At least 100 members.',
          why: 'The group must have at least 100 members. That count stands beside the requirement that the group has been active for at least two years.',
          correct: true,
        },
        {
          text: 'One member for each creditor.',
          why: 'Creditor group insurance covers debtors of a lending institution. An association group must have at least 100 members.',
        },
      ],
    ),
    question(
      'c11q56',
      'Which group is named as an example of an association that can buy group insurance?',
      [
        {
          text: 'Two employers that do not qualify for group insurance on their own.',
          why: 'Those employers describe a multiple-employer trust. Association examples include customers of large retail chains, trade associations, and savings-account depositors.',
        },
        {
          text: 'A bank that owns a credit life contract.',
          why: 'A bank can be the creditor that owns credit life insurance. Association examples include customers of large retail chains and college alumni associations.',
        },
        {
          text: 'A sole proprietorship covering its own full-time staff.',
          why: 'A sole proprietorship is one form of employer-sponsored group. Customers of large retail chains are a named association example.',
        },
        {
          text: 'Customers of large retail chains.',
          why: 'Examples include trade associations, professional associations, college alumni associations, veteran associations, customers of large retail chains, and savings-account depositors. Association plans may be contributory or noncontributory.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q57',
      'How can a discretionary group apply for group health insurance?',
      [
        {
          text: 'According to a decision made by the head of the Department of Insurance.',
          why: 'A discretionary group can apply for group health insurance according to a decision made by the head of the Department of Insurance. Discretionary groups are also eligible for group coverage.',
          correct: true,
        },
        {
          text: 'By automatic approval once it has at least 100 members.',
          why: 'At least 100 members is an association requirement. A discretionary group applies according to a decision by the head of the Department of Insurance.',
        },
        {
          text: 'By a vote of debtors who pay the premium.',
          why: 'The debtor generally pays the creditor-group premium, and the creditor owns that contract. A discretionary group applies by a decision of the head of the Department of Insurance.',
        },
        {
          text: 'Only if a duly admitted insurer is the group.',
          why: 'A MEWA is an entity other than a duly admitted insurer. A discretionary group applies according to a decision made by the head of the Department of Insurance.',
        },
      ],
    ),
  ],
  'c11-funding': [
    question(
      'c11q58',
      'Who administers and guarantees a conventional fully insured plan?',
      [
        {
          text: 'The organization, using only its own exposure units.',
          why: 'Using its own exposure units is part of self-insurance. A conventional fully insured plan is administered and guaranteed by an insurance company.',
        },
        {
          text: 'An insurance company.',
          why: 'A conventional fully insured plan is administered and guaranteed by an insurance company. In return for the premium, the insurer assumes the risk of paying medical expenses.',
          correct: true,
        },
        {
          text: 'Employees who leave the plan.',
          why: 'An employee who leaves a noninsured group plan has no conversion right. A conventional fully insured plan is administered and guaranteed by an insurance company.',
        },
        {
          text: 'A fund that cannot yet pay the largest loss.',
          why: 'Until a self-insurance fund is large enough to pay the largest loss possible, the possibility of loss is not eliminated. A conventional fully insured plan is administered and guaranteed by an insurance company.',
        },
      ],
    ),
    question(
      'c11q59',
      'In return for the premium, what does the insurer assume on a conventional fully insured plan?',
      [
        {
          text: 'The duty to identify the organization’s losses without funding them.',
          why: 'Self-insurance is a formal program for identifying, evaluating, and funding the organization’s own losses. On a fully insured plan, the insurer assumes the risk of paying medical expenses.',
        },
        {
          text: 'The chance that one loss hits every exposure unit.',
          why: 'A loss that hits all units at once could cause a self-insurance program to fail. The fully insured insurer assumes the risk of paying medical expenses that may or may not occur during the policy period.',
        },
        {
          text: 'The risk of paying medical expenses that may or may not occur during the policy period.',
          why: 'In return for the premium, the insurer assumes the risk of paying medical expenses that may or may not occur during the policy period. The plan is administered and guaranteed by an insurance company.',
          correct: true,
        },
        {
          text: 'A conversion right for every employee who leaves.',
          why: 'An employee who leaves a noninsured group plan has no conversion right. The fully insured insurer assumes the medical-expense risk in return for the premium.',
        },
      ],
    ),
    question(
      'c11q60',
      'When a business uses the law of large numbers and predictions of future losses for its own risks, what are those activities commonly called?',
      [
        {
          text: 'A conventional fully insured plan.',
          why: 'A conventional fully insured plan is administered and guaranteed by an insurance company. Activities that use the law of large numbers and predictions of future losses for the organization’s own risks are commonly called self-insurance.',
        },
        {
          text: 'A premium paid so an insurer guarantees the medical expenses.',
          why: 'That premium arrangement is the fully insured plan. Self-insurance is the name for the same kinds of insurer activities when a business uses them for its own risks.',
        },
        {
          text: 'A conversion right from a noninsured plan.',
          why: 'An employee who leaves a noninsured group plan has no conversion right. The described activities are commonly called self-insurance.',
        },
        {
          text: 'Self-insurance.',
          why: 'A business or other organization can engage in the same kinds of activities as a commercial insurer, but for its own risks. When those activities use the law of large numbers and predictions of future losses, they are commonly called self-insurance.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q61',
      'What is self-insurance as a program?',
      [
        {
          text: 'A formal program for identifying, evaluating, and funding the organization’s own losses.',
          why: 'Self-insurance is a formal program for identifying, evaluating, and funding the organization’s own losses. It is the organization’s own-risk use of insurer-like activities.',
          correct: true,
        },
        {
          text: 'A plan an insurance company administers and guarantees for a premium.',
          why: 'That description is a conventional fully insured plan. Self-insurance is a formal program for identifying, evaluating, and funding the organization’s own losses.',
        },
        {
          text: 'A promise that loss is gone before any fund is built.',
          why: 'Until the fund is large enough to pay the largest loss possible, the possibility of loss is not eliminated. Self-insurance still has to identify, evaluate, and fund the organization’s own losses.',
        },
        {
          text: 'A right to convert coverage when the employee leaves.',
          why: 'An employee who leaves a noninsured group plan has no conversion right. Self-insurance is a formal funding program for the organization’s own losses.',
        },
      ],
    ),
    question(
      'c11q62',
      'What size must a dependable self-insurance program have?',
      [
        {
          text: 'It must stay small so that losses remain unpredictable.',
          why: 'Dependability requires a sufficiently large number of exposure units so that losses are predictable. The program must be based on the law of large numbers.',
        },
        {
          text: 'It must be big enough to use a sufficiently large number of exposure units so that losses are predictable.',
          why: 'The program must be big enough to use a sufficiently large number of exposure units so that losses are predictable, and it must be based on the law of large numbers. Self-insurance is frequently used for workers compensation, where losses are fairly predictable and most states have regulations for self-insurance.',
          correct: true,
        },
        {
          text: 'It must use only one exposure unit.',
          why: 'One unit cannot supply the sufficiently large number of exposure units the program needs. Losses must be predictable under the law of large numbers.',
        },
        {
          text: 'It must be too small for the law of large numbers to apply.',
          why: 'The program must be based on the law of large numbers. It has to be big enough for losses to be predictable.',
        },
      ],
    ),
    question(
      'c11q63',
      'What does a financially dependable self-insurance plan likely need?',
      [
        {
          text: 'No accumulated funds, because an insurer guarantees every loss.',
          why: 'An insurer’s guarantee in return for a premium is the fully insured plan. A self-insurance plan will likely need accumulated funds to meet losses.',
        },
        {
          text: 'Funds only for a loss that strikes all units at the same time.',
          why: 'A loss that hits all units at once could cause the program to fail, which is why units must be spread. Financial dependability calls for accumulated funds plus enough extra for unexpected deviations.',
        },
        {
          text: 'Accumulated funds to meet losses, with enough extra to cover unexpected deviations from predicted losses.',
          why: 'The plan must be financially dependable. It will likely need accumulated funds to meet losses, with enough extra to cover unexpected deviations from predicted losses.',
          correct: true,
        },
        {
          text: 'Funds that stop at the first predicted loss, with nothing held back.',
          why: 'The plan needs enough extra to cover unexpected deviations from predicted losses. Stopping at the first predicted loss would not make it financially dependable.',
        },
      ],
    ),
    question(
      'c11q64',
      'Why must the individual units exposed to loss be spread?',
      [
        {
          text: 'So an insurance company can guarantee the plan for a premium.',
          why: 'A premium guarantee is the conventional fully insured plan. Spreading units is a self-insurance condition so that a catastrophic loss is prevented.',
        },
        {
          text: 'So a leaving employee receives a conversion right.',
          why: 'An employee who leaves a noninsured group plan has no conversion right. Units are spread so that a catastrophic loss is prevented.',
        },
        {
          text: 'So one loss can hit every unit at the same time.',
          why: 'A loss that hits all units at once could cause the program to fail. The units must be spread so that a catastrophic loss is prevented, and smaller losses that occur frequently are a better subject for self-insurance than large, infrequent losses.',
        },
        {
          text: 'So that a catastrophic loss is prevented.',
          why: 'The individual units exposed to loss must be spread so that a catastrophic loss is prevented. A loss that hits all units at once could cause the program to fail.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q65',
      'Until the fund is large enough to pay the largest loss possible, what is true of the individual exposure units?',
      [
        {
          text: 'The possibility of loss is not eliminated.',
          why: 'Until the fund is large enough to pay the largest loss possible, the possibility of loss is not eliminated for the individual exposure units. Naming the program self-insurance does not remove that possibility sooner.',
          correct: true,
        },
        {
          text: 'The possibility of loss ends as soon as the program is called self-insurance.',
          why: 'The possibility of loss is not eliminated until the fund is large enough to pay the largest loss possible. The name of the program does not eliminate it.',
        },
        {
          text: 'An insurer has already assumed every medical expense.',
          why: 'That assumption of medical-expense risk is what the insurer does on a fully insured plan in return for the premium. A self-insurance fund that is not yet large enough leaves the possibility of loss in place.',
        },
        {
          text: 'Each employee has a conversion right out of the noninsured plan.',
          why: 'An employee who leaves a noninsured group plan has no conversion right. Until the fund can pay the largest loss possible, the possibility of loss is not eliminated.',
        },
      ],
    ),
    question(
      'c11q66',
      'Under a self-funded employer plan, who assumes legal responsibility for providing coverage?',
      [
        {
          text: 'The insurance company that guarantees the benefits.',
          why: 'An insurance company administers and guarantees a conventional fully insured plan. Under a self-funded employer plan, the employer assumes legal responsibility for providing coverage.',
        },
        {
          text: 'The employer.',
          why: 'Under a self-funded employer plan, the employer assumes legal responsibility for providing coverage. An employee who leaves a noninsured group plan has no conversion right.',
          correct: true,
        },
        {
          text: 'The employee who leaves, by using a conversion right.',
          why: 'An employee who leaves a noninsured group plan has no conversion right. The employer assumes legal responsibility for providing coverage.',
        },
        {
          text: 'Each exposure unit whose loss has already been eliminated.',
          why: 'Until the fund can pay the largest loss possible, the possibility of loss is not eliminated for the individual exposure units. Legal responsibility for coverage under a self-funded employer plan rests on the employer.',
        },
      ],
    ),
  ],
  'c11-underwriting': [
    question(
      'c11q67',
      'Why is group coverage lower in cost than individual coverage?',
      [
        {
          text: 'Because the underwriter prices each member separately.',
          why: 'The underwriter evaluates the group as a whole rather than each member. Group cost is lower because administrative costs and selling expenses are far lower.',
        },
        {
          text: 'Because selling expenses are higher than on individual policies.',
          why: 'Selling expenses are far lower, not higher. That is why group cost is lower than individual coverage.',
        },
        {
          text: 'Because administrative costs and selling expenses are far lower.',
          why: 'Most health insurance in force today is group coverage, and its cost is lower than individual coverage because administrative costs and selling expenses are far lower. The per-capita administrative cost in group health insurance is less than the administrative cost of individual coverage.',
          correct: true,
        },
        {
          text: 'Because most health insurance in force today is individual coverage.',
          why: 'Most health insurance in force today is group coverage. Its lower cost comes from administrative costs and selling expenses that are far lower.',
        },
      ],
    ),
    question(
      'c11q68',
      'How does the group underwriter look at the risk?',
      [
        {
          text: 'By ignoring the group and rating only the poorest member.',
          why: 'Adverse selection is the tendency of poorer risks to seek out insurance, and the underwriter tries to avoid it. The underwriter still evaluates the group as a whole rather than each member.',
        },
        {
          text: 'By requiring individual underwriting of every certificate.',
          why: 'Certificates are guaranteed issue with no individual underwriting. The underwriter evaluates the group as a whole rather than each member.',
        },
        {
          text: 'By setting a different benefit for each person.',
          why: 'Benefits are determined automatically and are not discriminatory, so everyone has the same coverage. The risk review evaluates the group as a whole.',
        },
        {
          text: 'By evaluating the group as a whole rather than each member.',
          why: 'Group health underwriting is similar to individual health underwriting, but the underwriter evaluates the group as a whole rather than each member. The group’s risk profile determines whether the group is accepted or rejected.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q69',
      'What determines whether the group is accepted or rejected?',
      [
        {
          text: 'The group’s risk profile.',
          why: 'The group’s risk profile determines whether the group is accepted or rejected. The underwriter evaluates the group as a whole rather than each member.',
          correct: true,
        },
        {
          text: 'The persistency of one individual policy only.',
          why: 'The persistency rate looks at a group of policies, and the underwriter evaluates the group as a whole. Acceptance or rejection follows the group’s risk profile.',
        },
        {
          text: 'Medical information taken from every participant in a group of 50 or more.',
          why: 'In groups of 50 or more, medical information cannot be required of plan participants. Whether the group is accepted or rejected depends on the group’s risk profile.',
        },
        {
          text: 'A rule that benefits must differ for each member.',
          why: 'Benefits are determined automatically and are not discriminatory. Acceptance or rejection is determined by the group’s risk profile.',
        },
      ],
    ),
    question(
      'c11q70',
      'What is adverse selection?',
      [
        {
          text: 'Giving everyone the same coverage automatically.',
          why: 'Benefits that are determined automatically and are not discriminatory are a group underwriting criterion. Adverse selection is the tendency of poorer risks to seek out insurance.',
        },
        {
          text: 'The tendency of poorer risks to seek out insurance.',
          why: 'Adverse selection is the tendency of poorer risks to seek out insurance. The underwriter tries to avoid it, and the group underwriting criteria limit it while they determine acceptability and the premium.',
          correct: true,
        },
        {
          text: 'A flow of new members through the group.',
          why: 'A flow of new members through the group is one of the underwriting criteria. Adverse selection is the tendency of poorer risks to seek out insurance.',
        },
        {
          text: 'The ratio of policies that continue to policies in force on the preceding due date.',
          why: 'That ratio is the persistency rate. Adverse selection is the tendency of poorer risks to seek out insurance.',
        },
      ],
    ),
    question(
      'c11q71',
      'How are certificates treated under the group underwriting criteria?',
      [
        {
          text: 'They are issued only after each member is underwritten individually.',
          why: 'Certificates are guaranteed issue with no individual underwriting. Individual underwriting of each member is not the group criterion.',
        },
        {
          text: 'They are declined whenever new members flow through the group.',
          why: 'There is a flow of new members through the group, and that flow is one of the criteria. Certificates are guaranteed issue with no individual underwriting.',
        },
        {
          text: 'They are guaranteed issue with no individual underwriting.',
          why: 'Certificates are guaranteed issue with no individual underwriting. The criteria also require that the group was formed for reasons other than purchasing insurance and that there is a flow of new members through the group.',
          correct: true,
        },
        {
          text: 'They are guaranteed only when each person has different benefits.',
          why: 'Everyone has the same coverage, and benefits are not discriminatory. Certificates are guaranteed issue with no individual underwriting.',
        },
      ],
    ),
    question(
      'c11q72',
      'What determines group premiums under the underwriting criteria?',
      [
        {
          text: 'Medical information required from participants in groups of 50 or more.',
          why: 'In groups of 50 or more, medical information cannot be required of plan participants. Premiums are determined by the age, sex, and occupation of the entire group.',
        },
        {
          text: 'Higher first-year commissions by themselves.',
          why: 'Higher first-year commissions are one reason expenses are higher in the first year. They do not replace age, sex, and occupation as the premium factors.',
        },
        {
          text: 'The per-capita administrative cost of individual coverage.',
          why: 'The per-capita administrative cost in group health insurance is less than the administrative cost of individual coverage. Group premiums are determined by the age, sex, and occupation of the entire group.',
        },
        {
          text: 'The age, sex, and occupation of the entire group.',
          why: 'Premiums are determined by the age, sex, and occupation of the entire group. A certain participation level must also be maintained.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q73',
      'Which benefit rule is a group underwriting criterion?',
      [
        {
          text: 'Benefits are determined automatically and are not discriminatory, so everyone has the same coverage.',
          why: 'Benefits are determined automatically and are not discriminatory. Everyone has the same coverage, which helps limit adverse selection.',
          correct: true,
        },
        {
          text: 'Each member chooses different benefits.',
          why: 'Benefits are not discriminatory, and everyone has the same coverage. Members do not choose different benefits under this criterion.',
        },
        {
          text: 'New members who flow through the group get no benefits.',
          why: 'A flow of new members through the group is a criterion, and certificates are guaranteed issue. Benefits are the same for everyone and are determined automatically.',
        },
        {
          text: 'Benefits depend on medical information from every person in a group of 50 or more.',
          why: 'In groups of 50 or more, medical information cannot be required of plan participants. Benefits are determined automatically and are not discriminatory.',
        },
      ],
    ),
    question(
      'c11q74',
      'In groups of 50 or more, what is the rule on medical information?',
      [
        {
          text: 'Medical information must be required of every plan participant.',
          why: 'In groups of 50 or more, medical information cannot be required of plan participants. Requiring it from every participant reverses that rule.',
        },
        {
          text: 'Medical information cannot be required of plan participants.',
          why: 'In groups of 50 or more, medical information cannot be required of plan participants. In a small group, even one bad risk can affect the claims experience.',
          correct: true,
        },
        {
          text: 'Medical information replaces the group’s risk profile.',
          why: 'The group’s risk profile determines whether the group is accepted or rejected. In groups of 50 or more, medical information cannot be required of plan participants.',
        },
        {
          text: 'Medical information is used so benefits can differ by person.',
          why: 'Benefits are determined automatically and are not discriminatory. In groups of 50 or more, medical information cannot be required of plan participants.',
        },
      ],
    ),
    question(
      'c11q75',
      'Why may insurers in some states allow some individual underwriting in the small groups they insure?',
      [
        {
          text: 'Because groups of 50 or more must submit medical information.',
          why: 'In groups of 50 or more, medical information cannot be required of plan participants. Small-group individual underwriting is allowed in some states because one bad risk can affect claims experience.',
        },
        {
          text: 'Because a noncontributory plan may include fewer than all eligible employees.',
          why: 'In a noncontributory plan, 100% of the eligible employees must be included. The small-group reason is that even one bad risk can affect the claims experience.',
        },
        {
          text: 'Because in a small group even one bad risk can affect the claims experience.',
          why: 'In a small group, even one bad risk can affect the claims experience. That is why, in some states, insurers may allow some individual underwriting in the small groups they insure.',
          correct: true,
        },
        {
          text: 'Because persistency usually falls as policy duration increases.',
          why: 'Persistency usually improves with policy duration. Individual underwriting in some small groups is tied to the effect one bad risk can have on claims experience.',
        },
      ],
    ),
    question(
      'c11q76',
      'In a contributory plan, who pays, and what participation is required?',
      [
        {
          text: 'Employees pay nothing, and only some eligible employees must be included.',
          why: 'A plan in which participants do not pay, and 100% of eligible employees must be included, is noncontributory. In a contributory plan, eligible employees contribute and at least 75% must participate.',
        },
        {
          text: 'Only the employer pays, and participation is optional.',
          why: 'When the employer pays the entire premium, the plan is noncontributory and 100% of eligible employees must be included. A contributory plan splits the premium and requires at least 75% participation.',
        },
        {
          text: 'The employee pays the entire premium, with no participation minimum.',
          why: 'Both the employee and the employer pay part of a contributory premium. At least 75% of all eligible employees must participate.',
        },
        {
          text: 'Eligible employees contribute, both the employee and the employer pay part of the premium, and at least 75% of all eligible employees must participate.',
          why: 'In a contributory plan, eligible employees contribute to the premium, and both the employee and the employer pay part of it. At least 75% of all eligible employees must participate.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q77',
      'In a noncontributory plan, who pays, and who must be included?',
      [
        {
          text: 'The employer pays the entire premium, and 100% of the eligible employees must be included.',
          why: 'In a noncontributory plan, the participants do not pay part of the premium. The employer pays the entire premium, and 100% of the eligible employees must be included.',
          correct: true,
        },
        {
          text: 'Employees pay part of the premium, and at least 75% must participate.',
          why: 'That payment split and the 75% rule describe a contributory plan. In a noncontributory plan the employer pays the entire premium and 100% of eligible employees must be included.',
        },
        {
          text: 'Participants pay the entire premium, and the employer may omit any share of eligible employees.',
          why: 'Participants do not pay part of the premium in a noncontributory plan. The employer pays the entire premium, and 100% of the eligible employees must be included.',
        },
        {
          text: 'Nobody pays a premium, and only new members are included.',
          why: 'A flow of new members is an underwriting criterion, not a waiver of premium. The employer pays the entire noncontributory premium, and 100% of eligible employees must be included.',
        },
      ],
    ),
    question(
      'c11q78',
      'What do the participation requirements do?',
      [
        {
          text: 'They require individual underwriting of every certificate.',
          why: 'Certificates are guaranteed issue with no individual underwriting. Participation requirements guard against adverse selection and reduce administrative costs.',
        },
        {
          text: 'They guard against adverse selection and reduce administrative costs.',
          why: 'These participation requirements guard against adverse selection and reduce administrative costs. Adverse selection is the tendency of poorer risks to seek out insurance.',
          correct: true,
        },
        {
          text: 'They let a group change insurers every year and stay a good risk.',
          why: 'Groups that change insurance companies every year are not a good risk. Participation requirements guard against adverse selection and reduce administrative costs.',
        },
        {
          text: 'They make the per-capita administrative cost higher than individual coverage.',
          why: 'The per-capita administrative cost in group health insurance is less than the administrative cost of individual coverage. Participation requirements reduce administrative costs and guard against adverse selection.',
        },
      ],
    ),
    question(
      'c11q79',
      'What is the persistency rate for a group of policies?',
      [
        {
          text: 'The ratio of first-year commissions to later commissions.',
          why: 'Higher first-year commissions help explain why expenses are higher in the first year. The persistency rate compares policies that continue on a premium due date with policies in force on the preceding due date.',
        },
        {
          text: 'The share of eligible employees who must join a noncontributory plan.',
          why: 'A noncontributory plan must include 100% of the eligible employees. The persistency rate is a ratio of policies continuing on a due date to policies in force on the preceding due date.',
        },
        {
          text: 'The ratio of the number of policies that continue coverage on a premium due date to the number of policies that were in force on the preceding due date.',
          why: 'The persistency rate is the ratio of the number of policies that continue coverage on a premium due date to the number of policies that were in force on the preceding due date. Persistency usually improves with policy duration.',
          correct: true,
        },
        {
          text: 'The tendency of poorer risks to seek out insurance.',
          why: 'That tendency is adverse selection. The persistency rate compares continuing policies on a premium due date with policies in force on the preceding due date.',
        },
      ],
    ),
    question(
      'c11q80',
      'Why does the underwriter consider persistency?',
      [
        {
          text: 'Because persistency usually worsens as policy duration increases.',
          why: 'Persistency usually improves with policy duration. The underwriter considers it because groups that change insurance companies every year are not a good risk.',
        },
        {
          text: 'Because claim rates usually fall as the insured’s age increases.',
          why: 'Claim rates usually increase as the insured’s age increases. Persistency matters for that reason and because groups that change insurers every year are not a good risk.',
        },
        {
          text: 'Because expenses are lower in the first year than in later years.',
          why: 'Expenses are higher in the first year, from issuing the policy and certificates and from higher first-year commissions. The underwriter also treats groups that change insurers every year as not a good risk.',
        },
        {
          text: 'Because groups that change insurance companies every year are not a good risk.',
          why: 'The underwriter considers persistency because groups that change insurance companies every year are not a good risk. Persistency usually improves with policy duration, expenses are higher in the first year from issuing the policy and certificates and from higher first-year commissions, and claim rates usually increase as the insured’s age increases.',
          correct: true,
        },
      ],
    ),
  ],
  'c11-eligibility': [
    question(
      'c11q81',
      'What employment conditions are commonly required before an employee may participate?',
      [
        {
          text: 'Full time, usually 30 hours per week, and employment by the employer from 1 to 3 months.',
          why: 'Group health plans commonly require a member to meet eligibility rules before participating. It is common that the employee must be full time, usually 30 hours per week, and have been employed by the employer from 1 to 3 months.',
          correct: true,
        },
        {
          text: 'Any number of hours, with no period of employment.',
          why: 'The common rule is full time, usually 30 hours per week, plus employment from 1 to 3 months. There is no common rule that hours and tenure do not matter.',
        },
        {
          text: 'Only the status of a child younger than the limiting age.',
          why: 'A child younger than the limiting age can be a dependent. The common employee rule is full time, usually 30 hours per week, and employment from 1 to 3 months.',
        },
        {
          text: 'Evidence of insurability at every open enrollment, regardless of hours.',
          why: 'Evidence of insurability is not required during open enrollment. The common employee conditions are full time, usually 30 hours per week, and employment from 1 to 3 months.',
        },
      ],
    ),
    question(
      'c11q82',
      'Who may use the 30-day open-enrollment period that is available once a year?',
      [
        {
          text: 'Only employees who took coverage at the initial enrollment and want no dependents.',
          why: 'The period is for employees who reject coverage during the initial enrollment period and later want coverage, or who want to add dependent coverage. It is not limited to people who already accepted employee-only coverage.',
        },
        {
          text: 'Employees who reject coverage during the initial enrollment period and later want coverage, or who want to add dependent coverage.',
          why: 'A 30-day open-enrollment period is available once a year to employees who reject coverage during the initial enrollment period and later want coverage, or who want to add dependent coverage. Evidence of insurability is not required during open enrollment.',
          correct: true,
        },
        {
          text: 'Employees who are outside any covered classification and are not actively at work.',
          why: 'Employer group health insurance generally requires a full-time employee, working in a covered classification, who is actively at work. Open enrollment serves employees who earlier rejected coverage or who want to add dependents.',
        },
        {
          text: 'Domestic partners only in states that have no civil-union law.',
          why: 'Most insurers cover domestic or same-sex partners whether or not the state has a domestic-partner or civil-union law. The 30-day period is the annual open enrollment for late employee or dependent enrollment.',
        },
      ],
    ),
    question(
      'c11q83',
      'What does employer group health insurance generally require of a covered employee?',
      [
        {
          text: 'Part-time work outside any covered classification.',
          why: 'The general requirement is a full-time employee, working in a covered classification, who is actively at work. Part-time status outside a covered class does not meet that requirement.',
        },
        {
          text: 'Employment of 1 to 3 hours in the week coverage starts.',
          why: 'The common tenure is employment from 1 to 3 months, and full time is usually 30 hours per week. The general test is a full-time employee in a covered classification who is actively at work.',
        },
        {
          text: 'A full-time employee, working in a covered classification, who is actively at work.',
          why: 'Employer group health insurance generally requires a full-time employee, working in a covered classification, who is actively at work. That general test sits beside the common 30-hour and 1-to-3-month conditions.',
          correct: true,
        },
        {
          text: 'A disabled child who is incapable of self-support.',
          why: 'A disabled child who is incapable of self-support can qualify as a dependent. The employee requirement is full time, a covered classification, and actively at work.',
        },
      ],
    ),
    question(
      'c11q84',
      'Under the Affordable Care Act, to which employees must employers extend coverage?',
      [
        {
          text: 'Only employees who have worked from 1 to 3 months, with no hour test.',
          why: 'Employment from 1 to 3 months is part of the common eligibility practice. Under the Affordable Care Act, employers must extend coverage to all employees who work more than 30 hours per week.',
        },
        {
          text: 'Only spouses and legally adopted children.',
          why: 'A spouse and a legally adopted child can be dependents. The Affordable Care Act hour rule extends coverage to all employees who work more than 30 hours per week.',
        },
        {
          text: 'Only employees who work fewer hours than the usual full-time schedule.',
          why: 'Full time is usually 30 hours per week. The Affordable Care Act requires coverage for all employees who work more than 30 hours per week.',
        },
        {
          text: 'All employees who work more than 30 hours per week.',
          why: 'Under the Affordable Care Act, employers must extend coverage to all employees who work more than 30 hours per week. Small and large employers also may not be denied coverage for failing the minimum participation or contribution requirements.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q85',
      'When may small and large employers not be denied coverage?',
      [
        {
          text: 'For failure to satisfy the minimum participation or contribution requirements.',
          why: 'Small and large employers may not be denied coverage for failure to satisfy the minimum participation or contribution requirements. That protection is separate from the employee eligibility rules.',
          correct: true,
        },
        {
          text: 'For refusing to cover an employee who is actively at work.',
          why: 'Employer group coverage generally requires a full-time employee who is actively at work. The denial protection named here is failure to satisfy minimum participation or contribution requirements.',
        },
        {
          text: 'For refusing every dependent who is a spouse.',
          why: 'A spouse is a person who generally may be a dependent. The rule against denial is about failure to satisfy minimum participation or contribution requirements.',
        },
        {
          text: 'For excluding domestic partners in a state with no civil-union law.',
          why: 'Most insurers cover domestic or same-sex partners whether or not the state has a domestic-partner or civil-union law. The stated protection from denial concerns minimum participation or contribution requirements.',
        },
      ],
    ),
    question(
      'c11q86',
      'Who may generally qualify as a dependent?',
      [
        {
          text: 'Only a domestic partner, and only if state law requires that coverage.',
          why: 'Most insurers cover domestic or same-sex partners whether or not the state has a domestic-partner or civil-union law. A dependent generally must be a spouse, a child younger than the limiting age, or a qualifying disabled child.',
        },
        {
          text: 'A spouse, a child younger than the limiting age, or a disabled child who is incapable of self-support and dependent on the insured.',
          why: 'A dependent generally must be a spouse, a child younger than the limiting age, or a disabled child who is incapable of self-support because of a physical or mental disability and who is dependent on the insured for support and maintenance. The child younger than the limiting age includes natural children of the insured, stepchildren, children legally placed for adoption, and legally adopted children.',
          correct: true,
        },
        {
          text: 'Any child of any age who is not dependent on the insured.',
          why: 'A child dependent is younger than the limiting age, or is a disabled child dependent on the insured for support and maintenance. Age and dependence are part of the dependent test.',
        },
        {
          text: 'Only an employee who is actively at work in a covered class.',
          why: 'Actively at work in a covered classification is the general employee requirement. Dependents are generally a spouse, a child younger than the limiting age, or a qualifying disabled child.',
        },
      ],
    ),
    question(
      'c11q87',
      'Whom do most insurers cover in the case of partners?',
      [
        {
          text: 'Domestic partners only when the state has a domestic-partner law.',
          why: 'Most insurers cover domestic or same-sex partners whether or not the state has a domestic-partner or civil-union law. A domestic-partner law is not required.',
        },
        {
          text: 'Same-sex partners only when the state has a civil-union law.',
          why: 'Coverage of same-sex partners does not depend on a civil-union law. Most insurers cover domestic or same-sex partners whether or not the state has such a law.',
        },
        {
          text: 'Domestic or same-sex partners whether or not the state has a domestic-partner or civil-union law.',
          why: 'Most insurers cover domestic or same-sex partners whether or not the state has a domestic-partner or civil-union law. That practice is in addition to the usual spouse, child, and disabled-child dependent tests.',
          correct: true,
        },
        {
          text: 'Partners only when they are children younger than the limiting age.',
          why: 'A child younger than the limiting age is one dependent category. Most insurers also cover domestic or same-sex partners whether or not state law provides for that status.',
        },
      ],
    ),
  ],
  'c11-cob': [
    question(
      'c11q88',
      'Where is the coordination of benefits provision found?',
      [
        {
          text: 'In every individual health policy.',
          why: 'The coordination of benefits provision is found only in group health plans. It is not a provision of every individual health policy.',
        },
        {
          text: 'Only in a plan that is always secondary.',
          why: 'A plan that is always secondary, or that uses inconsistent rules, is a nonconforming plan. Coordination of benefits rules themselves are found only in group health plans.',
        },
        {
          text: 'Only when parents are divorced or separated.',
          why: 'Divorce or separation is one order-of-benefits case, and the custodial parent’s policy is primary then. The provision itself is found only in group health plans.',
        },
        {
          text: 'Only in group health plans.',
          why: 'The coordination of benefits provision is found only in group health plans. Its purpose is to avoid duplication of benefit payments and overinsurance.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q89',
      'What is the purpose of coordination of benefits?',
      [
        {
          text: 'To avoid duplication of benefit payments and overinsurance when a person is covered under more than one group health plan.',
          why: 'The purpose is to avoid duplication of benefit payments and overinsurance when a person is covered under more than one group health plan. The provision is found only in group health plans.',
          correct: true,
        },
        {
          text: 'To let the insured collect the full benefit from every plan with no ceiling.',
          why: 'The insured never receives more than the costs incurred or the total maximum benefits available under all plans. The purpose is to avoid duplication and overinsurance.',
        },
        {
          text: 'To make every plan secondary.',
          why: 'The provision decides which plan is primary, and the primary plan pays the full benefit amounts it specifies. The purpose is to avoid duplication and overinsurance, not to make every plan secondary.',
        },
        {
          text: 'To replace a primary payment with equal shares on every claim.',
          why: 'Equal shares apply if the plans cannot agree on the order within 30 days. The purpose of the provision is to avoid duplication of benefit payments and overinsurance.',
        },
      ],
    ),
    question(
      'c11q90',
      'What ceiling does coordination of benefits put on the total paid by all insurers?',
      [
        {
          text: 'The total may exceed allowable medical expenses whenever two plans pay.',
          why: 'The provision limits the total paid by all insurers to no more than the total allowable medical expenses. Two plans do not remove that ceiling.',
        },
        {
          text: 'No more than the total allowable medical expenses.',
          why: 'Coordination of benefits limits the total paid by all insurers to no more than the total allowable medical expenses. That limit serves the purpose of avoiding duplication and overinsurance.',
          correct: true,
        },
        {
          text: 'No more than the primary plan’s deductible.',
          why: 'The secondary plan can pay additional benefits, including deductibles and coinsurance. The ceiling on all insurers together is the total allowable medical expenses.',
        },
        {
          text: 'An equal share of the claim even when the plans agree on the order.',
          why: 'Equal shares are used when the plans cannot agree on the order within 30 days. When coordination works, the total paid by all insurers is limited to the total allowable medical expenses.',
        },
      ],
    ),
    question(
      'c11q91',
      'What does the primary plan pay?',
      [
        {
          text: 'Only deductibles and coinsurance left after a secondary plan pays.',
          why: 'Deductibles and coinsurance can be additional benefits payable by the secondary, or excess, plan. The primary plan pays the full benefit amounts it specifies.',
        },
        {
          text: 'Nothing until 30 days pass with no agreement.',
          why: 'The 30-day equal-share rule applies when plans cannot agree on the order. A primary plan pays the full benefit amounts it specifies.',
        },
        {
          text: 'The full benefit amounts it specifies.',
          why: 'The provision decides which plan is primary. The primary plan pays the full benefit amounts it specifies.',
          correct: true,
        },
        {
          text: 'The loss plus whatever the secondary plan pays.',
          why: 'Loss minus the amount covered by the primary plan equals the amount covered by the secondary plan. The primary plan pays the full benefit amounts it specifies, not the loss plus the secondary payment.',
        },
      ],
    ),
    question(
      'c11q92',
      'After the primary plan has paid its full promised benefit, what may the insured do?',
      [
        {
          text: 'Keep both plans from paying any deductible or coinsurance.',
          why: 'Additional benefits payable by the secondary plan include deductibles and coinsurance. The insured submits the claim to that plan after the primary plan has paid its full promised benefit.',
        },
        {
          text: 'Collect more than the costs incurred.',
          why: 'The insured never receives more than the costs incurred or the total maximum benefits available under all plans. The next step is to submit the claim to the secondary plan.',
        },
        {
          text: 'Treat the primary plan as a nonconforming plan.',
          why: 'A nonconforming plan is one that is always secondary or that uses inconsistent rules. After the primary plan pays its full promised benefit, the insured submits the claim to the secondary plan.',
        },
        {
          text: 'Submit the claim to the secondary, or excess, plan for any additional benefits payable, including deductibles and coinsurance.',
          why: 'After the primary plan has paid its full promised benefit, the insured submits the claim to the secondary, or excess, plan for any additional benefits payable, including deductibles and coinsurance. The insured still never receives more than the costs incurred or the total maximum benefits available.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q93',
      'What is the most the insured may receive when benefits are coordinated?',
      [
        {
          text: 'No more than the costs incurred or the total maximum benefits available under all plans.',
          why: 'The insured never receives more than the costs incurred or the total maximum benefits available under all plans. Coordination also limits all insurers together to the total allowable medical expenses.',
          correct: true,
        },
        {
          text: 'The sum of every plan’s full benefit, even when that sum exceeds the costs incurred.',
          why: 'The insured never receives more than the costs incurred or the total maximum benefits available under all plans. Stacking full benefits above the costs incurred would be overinsurance.',
        },
        {
          text: 'Only the amount a nonconforming plan refuses to identify.',
          why: 'If a nonconforming plan does not provide needed information within a reasonable time, the conforming plan assumes the benefits are identical and pays on that basis. The insured still never receives more than the costs incurred or the total maximum benefits available.',
        },
        {
          text: 'Twice the allowable medical expenses.',
          why: 'The total paid by all insurers is limited to no more than the total allowable medical expenses. The insured never receives more than the costs incurred or the total maximum benefits available under all plans.',
        },
      ],
    ),
    question(
      'c11q94',
      'How is the secondary plan’s amount described?',
      [
        {
          text: 'The loss plus the primary payment.',
          why: 'Adding the primary payment to the loss would increase the payment. Loss minus the amount covered by the primary plan equals the amount covered by the secondary plan.',
        },
        {
          text: 'Loss minus the amount covered by the primary plan.',
          why: 'Loss minus the amount covered by the primary plan equals the amount covered by the secondary plan. The secondary plan is the excess plan that can pay remaining benefits, including deductibles and coinsurance.',
          correct: true,
        },
        {
          text: 'The full benefit amounts the primary plan specifies.',
          why: 'The full benefit amounts it specifies are what the primary plan pays. The secondary amount is loss minus the amount covered by the primary plan.',
        },
        {
          text: 'An equal share paid before either plan reads the claim.',
          why: 'Equal shares are paid immediately if the plans cannot agree on the order within 30 days of receiving all necessary claim information. The secondary formula is loss minus the primary amount.',
        },
      ],
    ),
    question(
      'c11q95',
      'If a married couple each has group coverage that names the other as a dependent, which coverage is primary?',
      [
        {
          text: 'The spouse’s coverage.',
          why: 'The spouse’s coverage is secondary and picks up where the first policy left off. The person’s own group coverage is primary.',
        },
        {
          text: 'The plan that uses the gender rule.',
          why: 'The gender rule occasionally makes the father’s coverage primary when both parents name their children as dependents. For a married couple who name each other, the person’s own group coverage is primary.',
        },
        {
          text: 'The person’s own group coverage.',
          why: 'If a married couple each has group coverage that names the other as a dependent, the person’s own group coverage is primary. The spouse’s coverage is secondary and picks up where the first policy left off.',
          correct: true,
        },
        {
          text: 'Whichever plan is nonconforming.',
          why: 'A nonconforming plan is always secondary or uses inconsistent rules. Between spouses who cover each other, the person’s own group coverage is primary.',
        },
      ],
    ),
    question(
      'c11q96',
      'If the parents are divorced or separated, which policy is primary for the children?',
      [
        {
          text: 'The policy of the parent whose birthday is later in the year.',
          why: 'If both parents name their children as dependents, the birthday rule usually makes the parent whose birthday is earlier in the year primary, and occasionally the gender rule makes the father’s coverage primary. When the parents are divorced or separated, the policy of the parent who has custody of the children is primary.',
        },
        {
          text: 'The father’s coverage in every case.',
          why: 'The gender rule only occasionally makes the father’s coverage primary. Divorce or separation makes the policy of the parent who has custody primary.',
        },
        {
          text: 'The spouse’s coverage that names the other adult.',
          why: 'When spouses name each other, each person’s own group coverage is primary and the spouse’s coverage is secondary. For children of divorced or separated parents, the custodial parent’s policy is primary.',
        },
        {
          text: 'The policy of the parent who has custody of the children.',
          why: 'If the parents are divorced or separated, the policy of the parent who has custody of the children is primary. That order is separate from the birthday rule and the gender rule.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q97',
      'If the plans cannot agree on the order of benefits within 30 days of receiving all necessary claim information, how do they pay?',
      [
        {
          text: 'They immediately pay the claim in equal shares, and no plan has to pay more than its policy limits.',
          why: 'If the plans cannot agree on the order of benefits within 30 days of receiving all necessary claim information, they immediately pay the claim in equal shares. No plan has to pay more than its policy limits.',
          correct: true,
        },
        {
          text: 'They wait until a conforming plan has 3 years of payment history.',
          why: 'The 3-year period is how long a conforming plan has to adjust payments after it learns a nonconforming plan’s actual benefits. Disagreement on order within 30 days leads to equal shares immediately.',
        },
        {
          text: 'They assign the full specified benefit to the secondary plan only.',
          why: 'The primary plan pays the full benefit amounts it specifies. If order cannot be agreed within 30 days, the plans immediately pay the claim in equal shares.',
        },
        {
          text: 'They pay more than each plan’s policy limits.',
          why: 'No plan has to pay more than its policy limits. If they cannot agree within 30 days, they immediately pay the claim in equal shares.',
        },
      ],
    ),
    question(
      'c11q98',
      'What is a conforming plan?',
      [
        {
          text: 'A plan that is always secondary or that uses inconsistent rules.',
          why: 'A plan that is always secondary or that uses inconsistent rules is a nonconforming plan. A conforming plan is a plan with coordination of benefits rules.',
        },
        {
          text: 'A plan with coordination of benefits rules.',
          why: 'A plan with coordination of benefits rules is a conforming plan. It may coordinate with a nonconforming plan that is always secondary or that uses inconsistent rules.',
          correct: true,
        },
        {
          text: 'A plan that never coordinates with any other plan.',
          why: 'A conforming plan may coordinate with a nonconforming plan. A conforming plan is a plan with coordination of benefits rules.',
        },
        {
          text: 'An individual policy that duplicates group benefits.',
          why: 'Coordination of benefits is found only in group health plans, and its purpose is to avoid duplication. A conforming plan is a plan with coordination of benefits rules.',
        },
      ],
    ),
    question(
      'c11q99',
      'If a nonconforming plan does not give a conforming plan the needed information within a reasonable time after a request, what does the conforming plan do?',
      [
        {
          text: 'It refuses to pay until 30 days of equal shares are calculated.',
          why: 'Equal shares apply when plans cannot agree on the order within 30 days. If the nonconforming plan withholds information, the conforming plan assumes the benefits are identical and pays on that basis.',
        },
        {
          text: 'It pays more than the total allowable medical expenses.',
          why: 'All insurers together are limited to no more than the total allowable medical expenses. Missing nonconforming-plan information leads the conforming plan to assume the benefits are identical and pay on that basis.',
        },
        {
          text: 'It assumes the benefits are identical and pays on that basis.',
          why: 'If the nonconforming plan does not provide the information the conforming plan needs within a reasonable time after a request, the conforming plan assumes the benefits are identical and pays on that basis. If, within 3 years of payment, the conforming plan learns the nonconforming plan’s actual benefits, it adjusts any payments.',
          correct: true,
        },
        {
          text: 'It treats the person’s own coverage as secondary.',
          why: 'The person’s own group coverage is primary when spouses cover each other. A missing response from a nonconforming plan leads the conforming plan to assume the benefits are identical and pay on that basis.',
        },
      ],
    ),
  ],
  'c11-replace': [
    question(
      'c11q100',
      'On the day coverage transfers to another carrier, what happens to employees who are not actively at work?',
      [
        {
          text: 'They may be left out of the new plan.',
          why: 'Employees who are not actively at work on that date must be included in the new plan. They are not omitted from it.',
        },
        {
          text: 'They are exempt from any probationary period and get the new plan’s full benefits at once.',
          why: 'Employees who are actively at work on the transfer date are automatically covered under the new plan and are exempt from any probationary period. Employees who are not actively at work must be included, but benefits can be limited to the prior plan’s level until they return to work.',
        },
        {
          text: 'Their prior coinsurance and deductibles must be forfeited.',
          why: 'Coinsurance and deductibles may be carried over from the old plan to the new plan so the insured is not penalized. Employees who are not actively at work are included, with benefits that can be limited to the prior plan’s level until they return to work.',
        },
        {
          text: 'They must be included in the new plan, but benefits can be limited to the prior plan’s level until they return to work.',
          why: 'Employees who are not actively at work on the transfer date must be included in the new plan, but their benefits can be limited to the prior plan’s level until they return to work. That limit is separate from the automatic coverage of employees who are actively at work.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q101',
      'What amounts may be carried over from the old plan to the new plan?',
      [
        {
          text: 'Coinsurance and deductibles.',
          why: 'Coinsurance and deductibles may be carried over from the old plan to the new plan. The purpose is to credit expenses already incurred so the insured is not penalized.',
          correct: true,
        },
        {
          text: 'A new probationary period for employees who are actively at work.',
          why: 'Employees who are actively at work on the transfer date are exempt from any probationary period. The amounts that may be carried over are coinsurance and deductibles.',
        },
        {
          text: 'A rule that drops employees who are not actively at work.',
          why: 'Employees who are not actively at work must be included in the new plan. Coinsurance and deductibles are what may be carried over.',
        },
        {
          text: 'Termination of the master contract.',
          why: 'Termination of the master contract is one date on which an employee’s coverage can end. Carryover refers to coinsurance and deductibles.',
        },
      ],
    ),
    question(
      'c11q102',
      'What do no-loss/no-gain statutes use?',
      [
        {
          text: 'A new probationary period on every ongoing claim.',
          why: 'Employees actively at work on a transfer are exempt from any probationary period. No-loss/no-gain statutes use indemnification.',
        },
        {
          text: 'Indemnification, which places the insured in the same economic position after a loss as before the loss.',
          why: 'No-loss/no-gain statutes use indemnification. The insured is placed in the same economic position after a loss as before the loss.',
          correct: true,
        },
        {
          text: 'A cut of benefits below the prior plan for employees who are actively at work.',
          why: 'Benefits limited to the prior plan’s level can apply to employees who are not actively at work until they return. No-loss/no-gain uses indemnification so the insured keeps the same economic position.',
        },
        {
          text: 'An end to coverage while a dependent still meets the dependent definition.',
          why: 'Dependent coverage ends when the dependent fails to meet the definition of a dependent. No-loss/no-gain statutes use indemnification.',
        },
      ],
    ),
    question(
      'c11q103',
      'When health insurance changes, what must be paid for ongoing claims?',
      [
        {
          text: 'Benefits only when a pre-existing condition is excluded.',
          why: 'Benefits must be paid for ongoing claims regardless of pre-existing conditions. An exclusion for those conditions is not the rule when health insurance changes.',
        },
        {
          text: 'Nothing, until prior expenses are wiped out.',
          why: 'Coinsurance and deductibles may be carried over so expenses already incurred are credited and the insured is not penalized. Ongoing claims must still be paid regardless of pre-existing conditions.',
        },
        {
          text: 'Benefits regardless of pre-existing conditions.',
          why: 'When health insurance changes, benefits must be paid for ongoing claims regardless of pre-existing conditions. No-loss/no-gain statutes use indemnification to keep the same economic position.',
          correct: true,
        },
        {
          text: 'Benefits only after the master contract is terminated.',
          why: 'Termination of the master contract is one of the dates on which employee coverage ends. A change of health insurance requires payment of ongoing claims regardless of pre-existing conditions.',
        },
      ],
    ),
    question(
      'c11q104',
      'When does coverage for an employee end?',
      [
        {
          text: 'Only when a dependent fails to meet the definition of a dependent.',
          why: 'Failure to meet the definition of a dependent ends dependent coverage. Employee coverage ends on the earliest of its own listed dates.',
        },
        {
          text: 'On the latest of the listed ending dates.',
          why: 'Coverage for an employee ends on the earliest of the listed dates, not the latest. Those dates include termination of employment and termination of the master contract.',
        },
        {
          text: 'Only while the employee is totally disabled and the policy continues.',
          why: 'A reasonable extension of benefits applies to a covered person who is totally disabled when the group policy is terminated. Employee coverage otherwise ends on the earliest of the listed dates.',
        },
        {
          text: 'On the earliest of employment termination, loss of eligibility, receipt of the overall maximum major medical benefit, the end of the last period for which the required premium was paid, or termination of the master contract.',
          why: 'Coverage for an employee ends on the earliest of these dates: employment terminates, the employee ceases to be eligible, the date the overall maximum benefit for major medical benefits is received, the end of the last period for which the employee has paid the required premium, or the master contract is terminated.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q105',
      'When does coverage for a dependent end?',
      [
        {
          text: 'On the earliest of the dependent failing to meet the definition of a dependent, receipt of the overall maximum major medical benefit, or the end of the last period for which the required premium for dependent coverage was paid.',
          why: 'Coverage for a dependent ends on the earliest of these dates: the dependent fails to meet the definition of a dependent, the overall maximum benefit for major medical benefits is received, or the end of the last period for which the employee has paid the required premium for dependent coverage.',
          correct: true,
        },
        {
          text: 'On the latest of those dates.',
          why: 'Dependent coverage ends on the earliest of the listed dates. Waiting for the latest date would keep coverage past an ending event.',
        },
        {
          text: 'When the employee is actively at work on a carrier-transfer date.',
          why: 'An employee who is actively at work on the transfer date is automatically covered and exempt from any probationary period. Dependent coverage ends on the earliest of the dependent-ending dates.',
        },
        {
          text: 'Only if coinsurance is carried over to a new plan.',
          why: 'Carryover of coinsurance and deductibles credits expenses so the insured is not penalized. It is not the event that ends dependent coverage.',
        },
      ],
    ),
    question(
      'c11q106',
      'When a group policy is discontinued, what extension must it provide?',
      [
        {
          text: 'An extension for every employee who is actively at work.',
          why: 'Employees actively at work on a transfer to another carrier are automatically covered and exempt from any probationary period. Discontinuance requires a reasonable extension for a covered person who is totally disabled when the group policy is terminated.',
        },
        {
          text: 'A reasonable extension of benefits to any covered person who is totally disabled when the group policy is terminated.',
          why: 'When a group policy is discontinued, the policy must provide a reasonable extension of benefits to any covered person who is totally disabled when the group policy is terminated. That extension follows discontinuance of the group policy.',
          correct: true,
        },
        {
          text: 'An extension that drops ongoing claims if a pre-existing condition exists.',
          why: 'When health insurance changes, benefits must be paid for ongoing claims regardless of pre-existing conditions. Discontinuance instead requires a reasonable extension for a covered person who is totally disabled.',
        },
        {
          text: 'An extension that replaces indemnification under no-loss/no-gain statutes.',
          why: 'No-loss/no-gain statutes use indemnification so the insured stays in the same economic position. A discontinued policy must provide a reasonable extension of benefits to a covered person who is totally disabled at termination.',
        },
      ],
    ),
    question(
      'c11q107',
      'Why may coinsurance and deductibles be carried from the old plan to the new plan?',
      [
        {
          text: 'To start a probationary period for employees who are actively at work.',
          why: 'Employees who are actively at work on the transfer date are exempt from any probationary period. Carryover credits expenses already incurred so the insured is not penalized.',
        },
        {
          text: 'To exclude employees who are not actively at work.',
          why: 'Employees who are not actively at work must be included in the new plan. The purpose of carryover is to credit expenses already incurred so the insured is not penalized.',
        },
        {
          text: 'To credit expenses already incurred so the insured is not penalized.',
          why: 'Coinsurance and deductibles may be carried over from the old plan to the new plan. The purpose is to credit expenses already incurred so the insured is not penalized.',
          correct: true,
        },
        {
          text: 'To end coverage because the master contract terminated.',
          why: 'Termination of the master contract is one employee-coverage ending date. Carryover exists to credit expenses already incurred so the insured is not penalized.',
        },
      ],
    ),
  ],
  'c11-cobra': [
    question(
      'c11q108',
      'What does the Consolidated Omnibus Budget Reconciliation Act of 1985 require of an employer with 20 or more employees?',
      [
        {
          text: 'Replacement of group coverage with an individual life policy.',
          why: 'Conversion replaces group coverage with an individual health policy, and COBRA applies to group health insurance, not group life insurance. The 1985 Act requires an extension of group health coverage after a qualifying event.',
        },
        {
          text: 'Continuation only when employment ends for gross misconduct.',
          why: 'A qualifying termination is for reasons other than gross misconduct, such as a company downsizing. An employer with 20 or more employees must extend group health coverage after a qualifying event.',
        },
        {
          text: 'The extension rule only for employers with fewer than 20 employees.',
          why: 'The Act requires any employer with 20 or more employees to extend group health coverage. It does not limit that duty to employers with fewer than 20 employees.',
        },
        {
          text: 'An extension of group health coverage to terminated employees and their families after a qualifying event.',
          why: 'The Consolidated Omnibus Budget Reconciliation Act of 1985 requires any employer with 20 or more employees to extend group health coverage to terminated employees and their families after a qualifying event. Qualifying events include voluntary termination, termination other than gross misconduct, and a change from full time to part time.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q109',
      'Which of these is a qualifying event for the employment-related COBRA extension?',
      [
        {
          text: 'Voluntary termination of employment.',
          why: 'Qualifying events include voluntary termination of employment, termination for reasons other than gross misconduct, and a change from full time to part time. For these events, coverage is extended up to 18 months.',
          correct: true,
        },
        {
          text: 'The death of the employee, treated as the same 18-month employment event.',
          why: 'For the death of the employee, divorce, or legal separation, the period is 36 months for the dependents. Voluntary termination is the employment qualifying event in this list, and that list is extended up to 18 months.',
        },
        {
          text: 'A child qualifying as a disabled dependent.',
          why: 'Coverage for children must extend until the adult child reaches age 26, unless the child qualifies as a disabled dependent. Voluntary termination of employment is a qualifying event for the employment extension.',
        },
        {
          text: 'The employer terminates all group health plans.',
          why: 'COBRA may be discontinued if the person fails to pay the premium, becomes covered under another group plan, becomes eligible for Medicare, or if the employer terminates all group health plans. Those are endings, while voluntary termination of employment is a qualifying event.',
        },
      ],
    ),
    question(
      'c11q110',
      'Termination of employment is a qualifying event in which situation?',
      [
        {
          text: 'When the termination is for gross misconduct.',
          why: 'Gross misconduct is the reason that is left out of the qualifying termination. The qualifying case is termination for reasons other than gross misconduct, such as a company downsizing.',
        },
        {
          text: 'When it is for reasons other than gross misconduct, such as a company downsizing.',
          why: 'Termination of employment for reasons other than gross misconduct, such as a company downsizing, is a qualifying event. For that event, coverage is extended up to 18 months.',
          correct: true,
        },
        {
          text: 'When the employee elects only after 60 days from separation have passed.',
          why: 'The terminated employee must elect the extension within 60 days of separation from employment. A late election is not what makes a termination a qualifying event.',
        },
        {
          text: 'When the person becomes eligible for Medicare.',
          why: 'Becoming eligible for Medicare is a reason COBRA may be discontinued. A qualifying termination is one for reasons other than gross misconduct, such as a company downsizing.',
        },
      ],
    ),
    question(
      'c11q111',
      'A change from full time to part time is a qualifying event. For how long can coverage be extended for that event?',
      [
        {
          text: 'Up to 36 months.',
          why: 'The period is 36 months for the dependents after the death of the employee, divorce, or legal separation. A change from full time to part time is extended up to 18 months.',
        },
        {
          text: 'Until the child reaches age 26 and no other period applies.',
          why: 'The age-26 limit applies to coverage for children, including COBRA coverage for eligible children. The part-time change is one of the events for which coverage is extended up to 18 months.',
        },
        {
          text: 'Up to 18 months.',
          why: 'For voluntary termination, termination other than gross misconduct, and a change from full time to part time, coverage is extended up to 18 months. The terminated employee must elect the extension within 60 days of separation from employment.',
          correct: true,
        },
        {
          text: 'For 60 days after the employer collects a premium.',
          why: 'The terminated employee must elect within 60 days of separation from employment. The length of the extension for a change from full time to part time is up to 18 months.',
        },
      ],
    ),
    question(
      'c11q112',
      'How long does a terminated employee have to elect the extension?',
      [
        {
          text: 'Up to 18 months after separation, with no shorter election window.',
          why: 'Coverage for the employment qualifying events is extended up to 18 months. The election itself must be made within 60 days of separation from employment.',
        },
        {
          text: '36 months after a divorce.',
          why: 'Divorce gives dependents a period of 36 months. The terminated employee must elect the extension within 60 days of separation from employment.',
        },
        {
          text: 'Until the adult child reaches age 26.',
          why: 'Age 26 is the limit for coverage of children of the insured, including eligible children on COBRA. The election period is within 60 days of separation from employment.',
        },
        {
          text: 'Within 60 days of separation from employment.',
          why: 'The terminated employee must elect the extension within 60 days of separation from employment. That election window is shorter than the up-to-18-month coverage period.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q113',
      'What does the extra 2% in the COBRA premium cover?',
      [
        {
          text: 'The employer’s administrative costs.',
          why: 'The employer may collect a premium of no more than 102% of the individual’s group premium rate. The extra 2% covers the employer’s administrative costs.',
          correct: true,
        },
        {
          text: 'A conversion to an individual life policy.',
          why: 'COBRA applies to group health insurance, not group life insurance, and it continues the same group coverage. The extra 2% covers the employer’s administrative costs.',
        },
        {
          text: 'The full 36-month dependent period.',
          why: 'Death, divorce, or legal separation produces a 36-month period for the dependents. The extra 2% covers the employer’s administrative costs on a premium of no more than 102% of the individual’s group premium rate.',
        },
        {
          text: 'Gross-misconduct terminations that the Act excludes.',
          why: 'Termination for gross misconduct is not a listed qualifying event. The extra 2% covers the employer’s administrative costs.',
        },
      ],
    ),
    question(
      'c11q114',
      'How long is the continuation period for dependents after the employee’s death, divorce, or legal separation?',
      [
        {
          text: 'Up to 18 months.',
          why: 'Up to 18 months applies to voluntary termination, termination other than gross misconduct, and a change from full time to part time. Death, divorce, or legal separation is 36 months for the dependents.',
        },
        {
          text: '36 months.',
          why: 'For the death of the employee, divorce, or legal separation, the period is 36 months for the dependents. That period is longer than the up-to-18-month employment events.',
          correct: true,
        },
        {
          text: '60 days.',
          why: 'The terminated employee must elect within 60 days of separation from employment. Dependents receive 36 months after death, divorce, or legal separation.',
        },
        {
          text: 'Until the employer drops below 20 employees.',
          why: 'The Act applies to any employer with 20 or more employees. The dependent period for death, divorce, or legal separation is 36 months.',
        },
      ],
    ),
    question(
      'c11q115',
      'How does COBRA differ from conversion?',
      [
        {
          text: 'COBRA replaces group coverage with an individual health policy, and conversion keeps the group plan.',
          why: 'Conversion replaces group coverage with an individual health policy. COBRA continues the same group coverage.',
        },
        {
          text: 'COBRA applies to group life insurance, and conversion applies to group health insurance.',
          why: 'COBRA applies to group health insurance, not group life insurance. Unlike conversion, COBRA continues the same group coverage.',
        },
        {
          text: 'Conversion replaces group coverage with an individual health policy, while COBRA continues the same group coverage.',
          why: 'Unlike conversion, which replaces group coverage with an individual health policy, COBRA continues the same group coverage, and COBRA applies to group health insurance, not group life insurance. The employee pays the group premium that the employer paid, or that the employer and employee paid if the plan was contributory.',
          correct: true,
        },
        {
          text: 'Both replace the group health plan with individual life insurance.',
          why: 'COBRA applies to group health insurance, not group life insurance, and it continues the same group coverage. Conversion is the route that replaces group coverage with an individual health policy.',
        },
      ],
    ),
    question(
      'c11q116',
      'Until what age must coverage for children of the insured extend under the Affordable Care Act, including COBRA coverage for eligible children?',
      [
        {
          text: 'Only through 18 months of an employment qualifying event.',
          why: 'Up to 18 months is the extension for the employment qualifying events. Child coverage must extend until the adult child reaches age 26, unless the child qualifies as a disabled dependent.',
        },
        {
          text: 'Only for the 60-day election window.',
          why: 'The terminated employee must elect within 60 days of separation. The age limit for children is age 26, including COBRA coverage for eligible children.',
        },
        {
          text: 'For 36 months after the employee’s death, with no age rule.',
          why: 'Dependents have 36 months after the death of the employee, divorce, or legal separation. Separately, coverage for children must extend until the adult child reaches age 26, unless the child qualifies as a disabled dependent.',
        },
        {
          text: 'Until the adult child reaches age 26, unless the child qualifies as a disabled dependent.',
          why: 'Under the Affordable Care Act, coverage for children of the insured must extend until the adult child reaches age 26, unless the child qualifies as a disabled dependent, and the same age limit applies to COBRA coverage for eligible children. If a child loses dependent status under the group plan, the child qualifies for a maximum of 36 months of continuation coverage.',
          correct: true,
        },
      ],
    ),
  ],
'c11-utah': [
    question(
      'c11q117',
      'What is an employee who participates in a group disability policy entitled to have issued?',
      [
        {
          text: 'An individual policy on the same basis of eligibility.',
          why: 'An employee who participates in a group disability policy is entitled to have an individual policy issued on the same basis of eligibility.',
          correct: true,
        },
        {
          text: 'Extended group coverage that continues after the employer’s coverage is terminated.',
          why: 'Extended coverage may end if the employer’s coverage is terminated. The group disability entitlement is an individual policy on the same basis of eligibility.',
        },
        {
          text: 'Conversion while other group coverage covers all pre-existing conditions.',
          why: 'Conversion requires that the person is not covered by any other group coverage that covers all pre-existing conditions. The disability-policy entitlement is an individual policy on the same basis of eligibility.',
        },
        {
          text: 'A reinstated policy that adds a waiting period after mobilization.',
          why: 'A policy reinstated after mobilization will not have a waiting period. The group disability entitlement is an individual policy on the same basis of eligibility.',
        },
      ],
    ),
    question(
      'c11q118',
      'Which events does the right to extend group coverage include?',
      [
        {
          text: 'Only a move out of the insurer’s service area.',
          why: 'Moving out of the insurer’s service area can end extended coverage. The extension right includes the listed employment and family events, from termination through death.',
        },
        {
          text: 'Voluntary and involuntary termination, retirement, sabbatical or leave of absence, reduction of hours, divorce or legal separation, loss of dependent status, disability, or death.',
          why: 'The right includes voluntary and involuntary termination, retirement, sabbatical or leave of absence, reduction of hours, divorce or legal separation, loss of dependent status, disability, or death.',
          correct: true,
        },
        {
          text: 'Only failure to pay premiums, fraud, or a misrepresentation.',
          why: 'Failure to pay premiums, fraud, and a misrepresentation can end extended coverage. They are events that stop the extension, rather than events that create the right.',
        },
        {
          text: 'Only other similar coverage after the employer’s coverage ends.',
          why: 'Eligibility for other similar coverage, or termination of the employer’s coverage, can end extended coverage. The right itself covers the listed employment and family events.',
        },
      ],
    ),
    question(
      'c11q119',
      'What written notice must the employer give after group coverage ends?',
      [
        {
          text: 'Notice of conversion within 60 days after the termination.',
          why: 'The conversion application and first premium must reach the insurer no more than 60 days after the termination. The employer must give written notice of the right to extend group coverage within 30 days of the termination of group coverage.',
        },
        {
          text: 'Notice that a reinstated premium may be increased excessively.',
          why: 'After reinstatement following mobilization, the premium may not be increased excessively. The employer’s notice is the right to extend group coverage within 30 days of the termination of group coverage.',
        },
        {
          text: 'Written notice of the right to extend group coverage within 30 days of the termination of group coverage.',
          why: 'The employer must give written notice of the right to extend group coverage within 30 days of the termination of group coverage.',
          correct: true,
        },
        {
          text: 'Notice that the insured has established residence outside the state.',
          why: 'Establishing residence outside the state can end extended coverage. The employer’s required notice is the right to extend group coverage within 30 days of the termination of group coverage.',
        },
      ],
    ),
    question(
      'c11q120',
      'If the employer gives no extension notice and the employee contacts the insurer within 60 days of coverage termination, whom must the insurer offer the chance to extend group coverage?',
      [
        {
          text: 'Only a person who lives outside the insurer’s service area.',
          why: 'Residence in the insurer’s service area is required for conversion, and a move out of the service area can end extended coverage. The missed-notice duty is an offer to the employee, spouse, or dependent.',
        },
        {
          text: 'Only the employee, and only after a new waiting period.',
          why: 'A policy reinstated after mobilization will not have a waiting period. When the employer gives no notice and the employee contacts the insurer within 60 days, the offer goes to the employee, spouse, or dependent.',
        },
        {
          text: 'Only dependents whose premiums will be increased excessively.',
          why: 'The premium after military reinstatement may not be increased excessively. The missed-notice offer is the chance for the employee, spouse, or dependent to extend group coverage.',
        },
        {
          text: 'The employee, spouse, or dependent.',
          why: 'If the employer does not give that notice and the employee contacts the insurer within 60 days of coverage termination, the insurer must offer the employee, spouse, or dependent the chance to extend group coverage.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q121',
      'Which event may end extended coverage?',
      [
        {
          text: 'The insured establishes residence outside the state.',
          why: 'Extended coverage may end if the insured establishes residence outside the state, moves out of the insurer’s service area, fails to pay premiums, commits fraud, makes a misrepresentation, becomes eligible for other similar coverage, or the employer’s coverage is terminated.',
          correct: true,
        },
        {
          text: 'The employee contacts the insurer within 60 days of coverage termination.',
          why: 'Contact within 60 days of coverage termination can require the insurer to offer the extension when the employer gave no notice. That contact does not end extended coverage.',
        },
        {
          text: 'The insured is notified of a conversion right within 30 days after exhaustion.',
          why: 'Within 30 days of the exhaustion of any extended coverage, the insured and any dependents must be notified of the right to an individual conversion policy. That notice does not end extended coverage.',
        },
        {
          text: 'The application and first premium arrive no more than 60 days after termination.',
          why: 'The application and first premium must reach the insurer no more than 60 days after the termination in order to elect conversion. That delivery does not end extended coverage.',
        },
      ],
    ),
    question(
      'c11q122',
      'What notice is required within 30 days of the exhaustion of any extended coverage?',
      [
        {
          text: 'Notice that the employer may skip the extension-right notice.',
          why: 'The employer must give written notice of the right to extend group coverage within 30 days of the termination of group coverage. The exhaustion notice is the right to an individual conversion policy.',
        },
        {
          text: 'Notice to the insured and any dependents of the right to an individual conversion policy.',
          why: 'Within 30 days of the exhaustion of any extended coverage, the insured and any dependents must be notified of the right to an individual conversion policy.',
          correct: true,
        },
        {
          text: 'Notice that the conversion premium ignores age and class of risk.',
          why: 'The initial premium for the first 12 months of the converted policy is set from the premium rates for age, class of risk, and the type and amount of insurance. The exhaustion notice is the conversion right.',
        },
        {
          text: 'Notice that military reinstatement must be refused.',
          why: 'The insurer cannot refuse reinstatement of an insured, or any dependents, when the military application rule is met. The exhaustion notice is the right to an individual conversion policy.',
        },
      ],
    ),
    question(
      'c11q123',
      'Who may elect conversion with the same insurer after losing group coverage?',
      [
        {
          text: 'A person who has other group coverage that covers all pre-existing conditions.',
          why: 'Conversion requires that the person is not covered by any other group coverage that covers all pre-existing conditions. Coverage of that kind blocks this election.',
        },
        {
          text: 'A person who has not exhausted Utah mini-COBRA or federal COBRA.',
          why: 'The person must have exhausted Utah mini-COBRA or federal COBRA. Failure to exhaust that coverage blocks conversion with the same insurer.',
        },
        {
          text: 'A person continuously covered for 3 months by the policy, who has exhausted Utah mini-COBRA or federal COBRA, has no other group coverage that covers all pre-existing conditions, and resides in the insurer’s service area.',
          why: 'A person who has lost group coverage may elect conversion with the same insurer when continuous coverage for 3 months, exhaustion of Utah mini-COBRA or federal COBRA, no other group coverage that covers all pre-existing conditions, and residence in the insurer’s service area are all met.',
          correct: true,
        },
        {
          text: 'A person who resides outside the insurer’s service area.',
          why: 'The person must reside in the insurer’s service area. Residence outside that area does not meet the conversion rule.',
        },
      ],
    ),
    question(
      'c11q124',
      'When must the conversion application and the first premium reach the insurer?',
      [
        {
          text: 'Within 30 days of the termination of group coverage.',
          why: 'The employer’s written notice of the extension right is due within 30 days of the termination of group coverage. The conversion application and first premium must arrive no more than 60 days after the termination.',
        },
        {
          text: 'Within 180 days of release from active duty.',
          why: 'The 180-day period runs from release from active duty for a military reinstatement application. Conversion delivery is no more than 60 days after the termination.',
        },
        {
          text: 'During the 3 months before termination, with no later delivery.',
          why: 'Continuous coverage for 3 months is a coverage condition for the extension right and for conversion. The application and first premium must still reach the insurer no more than 60 days after the termination.',
        },
        {
          text: 'No more than 60 days after the termination.',
          why: 'The application and first premium must reach the insurer no more than 60 days after the termination.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q125',
      'How is the initial premium set for the first 12 months of the converted policy?',
      [
        {
          text: 'From the premium rates for age, class of risk, and the type and amount of insurance.',
          why: 'The initial premium for the first 12 months of the converted policy is set from the premium rates for age, class of risk, and the type and amount of insurance.',
          correct: true,
        },
        {
          text: 'By an excessive increase because dependents are reinstated.',
          why: 'When coverage is reinstated after mobilization, the premium may not be increased excessively. The converted-policy premium uses age, class of risk, and the type and amount of insurance.',
        },
        {
          text: 'By the 30-day employer notice period for the extension right.',
          why: 'The employer notice period does not set the premium. The initial premium uses age, class of risk, and the type and amount of insurance.',
        },
        {
          text: 'By whether the insured establishes residence outside the state.',
          why: 'Residence outside the state can end extended coverage. The initial conversion premium is set from age, class of risk, and the type and amount of insurance.',
        },
      ],
    ),
    question(
      'c11q126',
      'Besides the insured, whose lapsed coverage is included in the military reinstatement rule after mobilization into the United States armed forces?',
      [
        {
          text: 'Only a former employer whose group coverage has ended.',
          why: 'Termination of the employer’s coverage can end extended coverage. The reinstatement rule includes the insured and any dependents.',
        },
        {
          text: 'Any dependents.',
          why: 'Insurers cannot refuse to reinstate an insured, or any dependents, whose coverage lapsed because of the insured’s mobilization into the United States armed forces, when the application is made within 180 days of release from active duty.',
          correct: true,
        },
        {
          text: 'Only a spouse who has established residence outside the state.',
          why: 'Residence outside the state can end extended coverage. Dependents are included in the reinstatement rule with the insured.',
        },
        {
          text: 'Only a person who has become eligible for other similar coverage.',
          why: 'Eligibility for other similar coverage can end extended coverage. The reinstatement rule includes the insured and any dependents.',
        },
      ],
    ),
    question(
      'c11q127',
      'After reinstatement of coverage that lapsed because of mobilization, what will the reinstated policy omit?',
      [
        {
          text: 'Coverage for any dependents.',
          why: 'Any dependents are included with the insured in the reinstatement rule. The reinstated policy will not have a waiting period and will not exclude pre-existing conditions.',
        },
        {
          text: 'Any premium during the first 12 months.',
          why: 'The first 12 months are the period for which a converted policy’s initial premium is set. The reinstated policy omits a waiting period and a pre-existing-condition exclusion.',
        },
        {
          text: 'A waiting period and an exclusion of pre-existing conditions.',
          why: 'If that reinstatement is made, the reinstated policy will not have a waiting period and will not exclude pre-existing conditions.',
          correct: true,
        },
        {
          text: 'Use of age, class of risk, and the type and amount of insurance.',
          why: 'Those factors set the initial premium for the first 12 months of a converted policy. The reinstated policy omits a waiting period and a pre-existing-condition exclusion.',
        },
      ],
    ),
    question(
      'c11q128',
      'What limit applies to the premium when coverage that lapsed because of mobilization is reinstated?',
      [
        {
          text: 'Age must be left out, and only the type of insurance may be used.',
          why: 'Age, class of risk, and the type and amount of insurance set the initial premium of a converted policy. On this reinstatement, the premium may not be increased excessively.',
        },
        {
          text: 'The premium must arrive within 30 days after extended coverage is exhausted.',
          why: 'Thirty days after exhaustion is the period for notice of the individual conversion right. The reinstatement premium may not be increased excessively.',
        },
        {
          text: 'The premium may be increased excessively when dependents are reinstated.',
          why: 'Dependents are included in the reinstatement, and the premium may not be increased excessively.',
        },
        {
          text: 'The premium may not be increased excessively.',
          why: 'The premium may not be increased excessively.',
          correct: true,
        },
      ],
    ),
  ],
  'c11-small': [
    question(
      'c11q129',
      'How must a carrier apply its requirements when deciding whether to cover a small employer?',
      [
        {
          text: 'Uniformly among all small employers with the same number of employees.',
          why: 'When a carrier decides whether to cover a small employer, the requirements must be applied uniformly among all small employers with the same number of employees.',
          correct: true,
        },
        {
          text: 'By increasing the employee requirement after the employer is accepted.',
          why: 'Once an employer is accepted, the carrier may not increase that employee requirement. The decision requirements must be applied uniformly among small employers with the same number of employees.',
        },
        {
          text: 'By a different standard for each employer with the same number of employees.',
          why: 'The requirements must be applied uniformly among all small employers with the same number of employees. A different standard for each of those employers conflicts with that rule.',
        },
        {
          text: 'Only after enrollment-application records pass the current year plus 3 years.',
          why: 'Enrollment-application records must be kept for the current year plus 3 years. That retention rule does not change the uniform application of coverage requirements.',
        },
      ],
    ),
    question(
      'c11q130',
      'What employee minimum may a covered carrier require?',
      [
        {
          text: 'A minimum that must be raised after the employer is accepted.',
          why: 'Once an employer is accepted, the carrier may not increase that employee requirement. A covered carrier may require a minimum of 2 eligible employees.',
        },
        {
          text: 'A minimum of 2 eligible employees.',
          why: 'A covered carrier may require a minimum of 2 eligible employees.',
          correct: true,
        },
        {
          text: 'A minimum equal to the $5,000 annual out-of-pocket maximum.',
          why: 'The annual out-of-pocket maximum per person in a basic health care plan is $5,000. The employee minimum a covered carrier may require is 2 eligible employees.',
        },
        {
          text: 'No minimum, because an incomplete application is denied within 15 days.',
          why: 'If the application is incomplete, the carrier must notify the applicant within 15 days of receipt. That notice still leaves the carrier able to require a minimum of 2 eligible employees.',
        },
      ],
    ),
    question(
      'c11q131',
      'After an employer is accepted, what may the carrier do with that employee requirement?',
      [
        {
          text: 'Increase it for that employer alone.',
          why: 'Requirements for the coverage decision must be applied uniformly among small employers with the same number of employees. Once an employer is accepted, the carrier may not increase that employee requirement.',
        },
        {
          text: 'Replace it with the $1,500 major medical deductible.',
          why: 'The major medical deductible may not be less than $1,500 per person. That deductible floor is separate from the employee requirement, which the carrier may not increase after acceptance.',
        },
        {
          text: 'The carrier may not increase it.',
          why: 'Once an employer is accepted, the carrier may not increase that employee requirement.',
          correct: true,
        },
        {
          text: 'Reset it to the $300,000 maximum annual benefit.',
          why: 'The maximum annual benefit per person must not be less than $300,000. That benefit floor does not reset the employee requirement after acceptance.',
        },
      ],
    ),
    question(
      'c11q132',
      'What must individual carriers that offer health care plans offer?',
      [
        {
          text: 'Coverage below basic coverage, with no basic-level choice.',
          why: 'Individual carriers that offer health care plans must offer a choice of coverage at least equal to basic coverage. A small employer carrier’s separate duty is to offer at least two health benefit plans, one basic and one standard.',
        },
        {
          text: 'A new rating period for plans renewed in the same calendar month.',
          why: 'A small employer carrier treats all health benefit plans issued or renewed in the same calendar month as having the same rating period. Individual carriers must offer a choice of coverage at least equal to basic coverage.',
        },
        {
          text: 'Enrollment that closes 15 days after the eligibility date.',
          why: 'An eligible employee may request enrollment no later than 30 days after the eligibility date, and 15 days is the incomplete-application notice period. Individual carriers must offer a choice of coverage at least equal to basic coverage.',
        },
        {
          text: 'A choice of coverage at least equal to basic coverage.',
          why: 'Individual carriers that offer health care plans must offer a choice of coverage at least equal to basic coverage.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q133',
      'In a basic health care plan, what is the maximum benefit per person for the entire period of coverage?',
      [
        {
          text: '$1,000,000.',
          why: 'The maximum benefit per person for the entire period of coverage is $1,000,000.',
          correct: true,
        },
        {
          text: '$300,000.',
          why: 'The maximum annual benefit per person must not be less than $300,000. The maximum for the entire period of coverage is $1,000,000.',
        },
        {
          text: '$5,000.',
          why: 'The annual out-of-pocket maximum per person is $5,000. The maximum benefit for the entire period of coverage is $1,000,000.',
        },
        {
          text: '$1,500.',
          why: 'The major medical deductible may not be less than $1,500 per person. The maximum benefit for the entire period of coverage is $1,000,000.',
        },
      ],
    ),
    question(
      'c11q134',
      'How low may the maximum annual benefit per person be in a basic health care plan?',
      [
        {
          text: 'Below $300,000 whenever the entire-period maximum is $1,000,000.',
          why: 'The entire-period maximum is $1,000,000, and the maximum annual benefit per person must not be less than $300,000. The annual floor remains in place.',
        },
        {
          text: 'It must not be less than $300,000.',
          why: 'The maximum annual benefit per person must not be less than $300,000.',
          correct: true,
        },
        {
          text: 'It must not be less than $500.',
          why: 'An annual deductible for prescription benefits may not be less than $500 per person. The maximum annual benefit per person must not be less than $300,000.',
        },
        {
          text: 'It must not be less than $25.',
          why: 'A copayment may not be less than $25 per office visit. The maximum annual benefit per person must not be less than $300,000.',
        },
      ],
    ),
    question(
      'c11q135',
      'In a basic health care plan, which dollar figure is the yearly out-of-pocket ceiling for one person?',
      [
        {
          text: '$150 per emergency-room visit.',
          why: 'A copayment may not be less than $150 per emergency-room visit. The annual out-of-pocket maximum per person is $5,000.',
        },
        {
          text: '$1,500 per person.',
          why: 'The major medical deductible may not be less than $1,500 per person. The annual out-of-pocket maximum per person is $5,000.',
        },
        {
          text: '$5,000.',
          why: 'The annual out-of-pocket maximum per person is $5,000.',
          correct: true,
        },
        {
          text: '$1,000,000 for the entire period of coverage.',
          why: 'The maximum benefit per person for the entire period of coverage is $1,000,000. The annual out-of-pocket maximum per person is $5,000.',
        },
      ],
    ),
    question(
      'c11q136',
      'What limit applies to a waiting period in a basic health care plan?',
      [
        {
          text: 'It cannot exceed 15 days from receipt of an incomplete application.',
          why: 'The carrier must notify the applicant within 15 days of receipt if the application is incomplete. Any waiting period cannot exceed 12 months, with credit for prior coverage.',
        },
        {
          text: 'It must last for the current year plus 3 years.',
          why: 'Enrollment-application records must be kept for the current year plus 3 years. Any waiting period cannot exceed 12 months, with credit for prior coverage.',
        },
        {
          text: 'It is imposed with no credit for prior coverage.',
          why: 'Any waiting period cannot exceed 12 months, with credit for prior coverage. The credit is part of that limit.',
        },
        {
          text: 'It cannot exceed 12 months, with credit for prior coverage.',
          why: 'Any waiting period cannot exceed 12 months, with credit for prior coverage.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q137',
      'What is the floor on the major medical deductible in a basic health care plan?',
      [
        {
          text: 'It may not be less than $1,500 per person.',
          why: 'The major medical deductible may not be less than $1,500 per person.',
          correct: true,
        },
        {
          text: 'It may not be less than $25 per office visit.',
          why: 'A copayment may not be less than $25 per office visit. The major medical deductible may not be less than $1,500 per person.',
        },
        {
          text: 'It may not be less than $300,000 per person.',
          why: 'The maximum annual benefit per person must not be less than $300,000. The major medical deductible may not be less than $1,500 per person.',
        },
        {
          text: 'It may not be less than $5,000 per person.',
          why: 'The annual out-of-pocket maximum per person is $5,000. The major medical deductible may not be less than $1,500 per person.',
        },
      ],
    ),
    question(
      'c11q138',
      'What is the floor on the annual deductible for prescription benefits in a basic health care plan?',
      [
        {
          text: 'It may not be less than $150 per person.',
          why: 'A copayment may not be less than $150 per emergency-room visit. The annual deductible for prescription benefits may not be less than $500 per person.',
        },
        {
          text: 'It may not be less than $500 per person.',
          why: 'An annual deductible for prescription benefits may not be less than $500 per person.',
          correct: true,
        },
        {
          text: 'It may not be less than $1,500 per person.',
          why: 'The major medical deductible may not be less than $1,500 per person. The prescription deductible may not be less than $500 per person.',
        },
        {
          text: 'It may not be less than $1,000,000 per person.',
          why: 'The maximum benefit per person for the entire period of coverage is $1,000,000. The prescription deductible may not be less than $500 per person.',
        },
      ],
    ),
    question(
      'c11q139',
      'How low may a copayment be in a basic health care plan?',
      [
        {
          text: '$5,000 per person for the year.',
          why: 'The annual out-of-pocket maximum per person is $5,000. A copayment may not be less than $25 per office visit and $150 per emergency-room visit.',
        },
        {
          text: '$300,000 per person for the year.',
          why: 'The maximum annual benefit per person must not be less than $300,000. A copayment may not be less than $25 per office visit and $150 per emergency-room visit.',
        },
        {
          text: 'Not less than $25 per office visit and $150 per emergency-room visit.',
          why: 'A copayment may not be less than $25 per office visit and $150 per emergency-room visit.',
          correct: true,
        },
        {
          text: 'Not less than $500 for every office visit.',
          why: 'An annual deductible for prescription benefits may not be less than $500 per person. An office-visit copayment may not be less than $25.',
        },
      ],
    ),
    question(
      'c11q140',
      'When must written notice of the carrier’s decision go to the applicant?',
      [
        {
          text: 'Within 15 days of receipt of every complete application.',
          why: 'If the application is incomplete, the carrier must notify the applicant within 15 days of receipt. Written notice of the decision must go to the applicant within 30 days of the decision, and individual carriers must treat applications consistently under a procedure for their order.',
        },
        {
          text: 'Before the applicant has had 30 days to provide additional information.',
          why: 'Before an application can be filed as incomplete, the applicant must have at least 30 days to provide additional information. Notice of the decision is due within 30 days of the decision.',
        },
        {
          text: 'After records have been kept for the current year plus 3 years.',
          why: 'Enrollment-application records must be kept for the current year plus 3 years. Written notice of the decision must go to the applicant within 30 days of the decision.',
        },
        {
          text: 'Within 30 days of the decision.',
          why: 'Written notice of the decision must go to the applicant within 30 days of the decision.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q141',
      'How late may an eligible employee request enrollment and still be allowed to enroll under the terms of the plans?',
      [
        {
          text: 'No later than 30 days after the eligibility date.',
          why: 'A small employer carrier must let an eligible employee or dependent enroll under the terms of the plans if the employee requests enrollment no later than 30 days after the eligibility date.',
          correct: true,
        },
        {
          text: 'No later than 15 days after an incomplete application is received.',
          why: 'Fifteen days from receipt is the notice period for an incomplete application. The enrollment request must be no later than 30 days after the eligibility date.',
        },
        {
          text: 'Any time during the current year plus 3 years.',
          why: 'Enrollment-application records must be kept for the current year plus 3 years. The enrollment request must be no later than 30 days after the eligibility date.',
        },
        {
          text: 'Only if each employee is given a different rate in a later calendar month.',
          why: 'Rates for employees of small employers are assigned uniformly, consistently, and without discrimination, and plans issued or renewed in the same calendar month share a rating period. The enrollment request must be no later than 30 days after the eligibility date.',
        },
      ],
    ),
  ],
  'c11-defined': [
    question(
      'c11q142',
      'Beginning January 1, 2010, which employers may participate in defined contribution arrangement health benefit plans?',
      [
        {
          text: 'Only employers that refuse a quarterly wage list.',
          why: 'Refusing the quarterly wage list can let the insurer deny or terminate coverage. Starting January 1, 2010, small employers may participate in these plans.',
        },
        {
          text: 'Small employers.',
          why: 'Starting January 1, 2010, small employers may participate in defined contribution arrangement health benefit plans.',
          correct: true,
        },
        {
          text: 'Only plan sponsors that have failed to pay premiums.',
          why: 'Failure to pay premiums can discontinue a small employer health benefit plan. Participation starting January 1, 2010 is for small employers.',
        },
        {
          text: 'Only employers that stay out so benefits cannot move with the job.',
          why: 'Benefits are portable from job to job when both employers participate. Small employers may participate starting January 1, 2010.',
        },
      ],
    ),
    question(
      'c11q143',
      'What do these employer-sponsored plans let individual employees control?',
      [
        {
          text: 'The date the Commissioner must receive a discontinuance notice.',
          why: 'A covered carrier gives the Commissioner notice at least 3 working days before the discontinuance notice is sent. Employees control the plan choice.',
        },
        {
          text: 'Whether a limitation period may exceed 12 months.',
          why: 'A limitation period may not exceed 12 months. In these plans, individual employees control the plan choice.',
        },
        {
          text: 'The plan choice.',
          why: 'These employer-sponsored plans let individual employees control the plan choice.',
          correct: true,
        },
        {
          text: 'Whether the participating insurer imposes a premium surcharge.',
          why: 'The insurer may not impose a premium surcharge. What the employees control is the plan choice.',
        },
      ],
    ),
    question(
      'c11q144',
      'What does the employer offer, and how does the employee use it?',
      [
        {
          text: 'No funding, because one plan must suit every coworker.',
          why: 'The employer is no longer forced to find one plan that suits every employee. The employer offers a predetermined level of funding that the employee uses to buy a chosen health plan.',
        },
        {
          text: 'A one-time surcharge of up to 25% of the annualized premium.',
          why: 'A one-time surcharge of up to 25% can apply when a small group moves coverage from another carrier. The employer offers a predetermined level of funding for the employee’s chosen plan.',
        },
        {
          text: 'Funding that the employer keeps so the employee cannot buy a plan.',
          why: 'The employee uses the predetermined level of funding to buy a chosen health plan. The funding is the means of that purchase.',
        },
        {
          text: 'A predetermined level of funding, which the employee uses to buy a chosen health plan.',
          why: 'The employer offers a predetermined level of funding, and the employee uses it to buy a chosen health plan.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q145',
      'What is the employer’s decision in a defined contribution arrangement?',
      [
        {
          text: 'How much to contribute.',
          why: 'The employer’s decision is how much to contribute.',
          correct: true,
        },
        {
          text: 'Which single plan must suit every employee.',
          why: 'The employer is no longer forced to find one plan that suits every employee. The employer’s decision is how much to contribute.',
        },
        {
          text: 'Which physical condition a limitation period will leave unnamed.',
          why: 'A limitation period must specify the physical condition it excludes. The employer’s decision is how much to contribute.',
        },
        {
          text: 'Whether to discontinue coverage with no notice to insureds.',
          why: 'A carrier that elects to discontinue coverage must give notice. The employer’s decision in the arrangement is how much to contribute.',
        },
      ],
    ),
    question(
      'c11q146',
      'How does a defined contribution arrangement reduce administration?',
      [
        {
          text: 'The employer stops making any contribution.',
          why: 'The employer still decides how much to contribute. Administration is reduced because the employer is no longer forced to find one plan that suits every employee.',
        },
        {
          text: 'The employer is no longer forced to find one plan that suits every employee.',
          why: 'Administration is reduced because the employer is no longer forced to find one plan that suits every employee.',
          correct: true,
        },
        {
          text: 'The insurer denies coverage to every bona fide employee.',
          why: 'The insurer may deny or terminate coverage if the employer refuses wage-list documentation. The administrative reduction is that the employer no longer must find one plan for every employee.',
        },
        {
          text: 'Employees lose ownership of the coverage they buy.',
          why: 'Employees choose, buy, and own the coverage that meets their needs. The administrative reduction is that the employer is no longer forced to find one plan for every employee.',
        },
      ],
    ),
    question(
      'c11q147',
      'What does the arrangement let the employer do about cost?',
      [
        {
          text: 'Find one plan for every employee and drop any set contribution.',
          why: 'The employer decides how much to contribute and is no longer forced to find one plan that suits every employee. The cost result is that the employer can predict the cost.',
        },
        {
          text: 'Avoid predicting cost by changing plans after each claim.',
          why: 'The arrangement lets the employer predict the cost. It is described through a predetermined contribution, not through a new plan after each claim.',
        },
        {
          text: 'Predict the cost.',
          why: 'The arrangement lets the employer predict the cost.',
          correct: true,
        },
        {
          text: 'Give the contribution decision to the Commissioner.',
          why: 'The Commissioner receives discontinuance notice. The employer’s cost result in the arrangement is the ability to predict the cost.',
        },
      ],
    ),
    question(
      'c11q148',
      'What do employees do with the coverage that meets their needs?',
      [
        {
          text: 'They accept the one plan selected for every employee.',
          why: 'The employer is no longer forced to find one plan that suits every employee. Employees choose, buy, and own the coverage that meets their needs.',
        },
        {
          text: 'They forfeit it at a job change even when both employers participate.',
          why: 'Benefits are portable from job to job as long as both employers participate in defined contribution arrangements. Employees choose, buy, and own the coverage.',
        },
        {
          text: 'They pay the participating insurer a premium surcharge in order to own it.',
          why: 'A participating insurer may not impose a premium surcharge. Employees choose, buy, and own the coverage that meets their needs.',
        },
        {
          text: 'They choose, buy, and own it.',
          why: 'Employees choose, buy, and own the coverage that meets their needs.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q149',
      'When are benefits portable from job to job?',
      [
        {
          text: 'As long as both employers participate in defined contribution arrangements.',
          why: 'Benefits are portable from job to job as long as both employers participate in defined contribution arrangements.',
          correct: true,
        },
        {
          text: 'Only after the employee has been discontinued for 12 months.',
          why: 'An eligible employee who was discontinued may reenroll 12 months after the discontinuance if the plan sponsor’s coverage is in effect. Portability depends on both employers participating.',
        },
        {
          text: 'Only if the new employer refuses the quarterly wage list.',
          why: 'Refusing the quarterly wage list can lead to denial or termination of coverage. Portability requires that both employers participate.',
        },
        {
          text: 'Only when the plan sponsor fails to pay premiums.',
          why: 'Failure to pay premiums can discontinue a small employer health benefit plan. Portability requires that both employers participate.',
        },
      ],
    ),
    question(
      'c11q150',
      'At what benefit level must a participating insurer offer to accept all eligible employees of an employer and their dependents?',
      [
        {
          text: 'At a lower level than anyone else with the same plan in that market.',
          why: 'The offer is at the same level of benefits as anyone else who has the same health benefit plan in that market. A lower level does not meet the rule.',
        },
        {
          text: 'At the same level as anyone else with the same health benefit plan in that market.',
          why: 'A participating insurer must offer to accept all eligible employees of an employer, and their dependents, at the same level of benefits as anyone else who has the same health benefit plan in the defined contribution arrangement market.',
          correct: true,
        },
        {
          text: 'Only after the employer pays a premium surcharge.',
          why: 'The insurer may not impose a premium surcharge. Acceptance is at the same level of benefits as anyone else with the same plan in that market.',
        },
        {
          text: 'For employees only, with dependents left out of the offer.',
          why: 'The offer includes the employees and their dependents. Dependents are part of the acceptance offer at the same level of benefits.',
        },
      ],
    ),
    question(
      'c11q151',
      'What premium surcharge may a participating insurer impose in the defined contribution arrangement market?',
      [
        {
          text: 'Up to 25% of the annualized premium.',
          why: 'Up to 25% of the annualized premium is a one-time surcharge a carrier may charge a small group that moves coverage from another carrier. A participating insurer in this market may not impose a premium surcharge.',
        },
        {
          text: 'An amount equal to three times the annual deductible.',
          why: 'The annual out-of-pocket maximum on the federally qualified high-deductible plan must not exceed three times the annual deductible. That cap is separate, and the insurer may not impose a premium surcharge.',
        },
        {
          text: 'No premium surcharge.',
          why: 'The insurer may not impose a premium surcharge.',
          correct: true,
        },
        {
          text: 'At least 15% of the other plan’s actuarial value.',
          why: 'One required plan has an actuarial value at least 15% greater than the federally qualified high-deductible plan. That difference is separate, and the insurer may not impose a premium surcharge.',
        },
      ],
    ),
    question(
      'c11q152',
      'Why may the insurer ask the employer for a copy of the quarterly wage list?',
      [
        {
          text: 'To calculate a one-time surcharge of up to 25%.',
          why: 'The 25% surcharge is a separate charge when a small group moves coverage from another carrier. The wage list is used to see whether the people to be covered are bona fide employees.',
        },
        {
          text: 'To give the Commissioner 3 working days of discontinuance notice.',
          why: 'Commissioner notice at least 3 working days before the discontinuance notice is sent is part of a carrier’s discontinuance election. The wage list is used to see whether the people to be covered are bona fide employees.',
        },
        {
          text: 'To prove benefits are portable when only one employer participates.',
          why: 'Portability requires that both employers participate. The wage list is used to see whether the people to be covered are bona fide employees.',
        },
        {
          text: 'To see whether the people to be covered are bona fide employees.',
          why: 'The insurer may ask for the quarterly wage list to see whether the people to be covered are bona fide employees.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q153',
      'What may the insurer do if the employer refuses the quarterly wage list documentation?',
      [
        {
          text: 'Deny or terminate coverage.',
          why: 'The insurer may deny or terminate coverage if the employer refuses that documentation.',
          correct: true,
        },
        {
          text: 'Impose a premium surcharge and keep every person covered.',
          why: 'A participating insurer may not impose a premium surcharge. Refusal of the documentation allows the insurer to deny or terminate coverage.',
        },
        {
          text: 'Force the employer to find one plan that suits every employee.',
          why: 'The arrangement means the employer is no longer forced to find one plan that suits every employee. Refusal of the wage list supports denial or termination of coverage.',
        },
        {
          text: 'Make benefits portable when only one employer participates.',
          why: 'Portability requires both employers to participate. Refusal of the documentation allows the insurer to deny or terminate coverage.',
        },
      ],
    ),
    question(
      'c11q154',
      'For whom is a small employer health benefit plan renewable, and at whose option?',
      [
        {
          text: 'For discontinued employees only, at the option of the Commissioner.',
          why: 'The Commissioner receives notice when a carrier elects to discontinue coverage. The plan is renewable for all eligible insureds at the option of the plan sponsor.',
        },
        {
          text: 'For all eligible insureds, at the option of the plan sponsor.',
          why: 'A small employer health benefit plan is renewable for all eligible insureds at the option of the plan sponsor.',
          correct: true,
        },
        {
          text: 'For late enrollees only, at the option of the insurer.',
          why: 'A pre-existing condition exclusion can end no later than 18 months after a late enrollment. Renewal is for all eligible insureds at the option of the plan sponsor.',
        },
        {
          text: 'For no one, once the employer sets a contribution amount.',
          why: 'A predetermined contribution does not end renewability. The plan is renewable for all eligible insureds at the option of the plan sponsor.',
        },
      ],
    ),
    question(
      'c11q155',
      'When may the plan be discontinued because of the plan sponsor’s conduct?',
      [
        {
          text: 'When an employee chooses a health plan.',
          why: 'Employee plan choice is how the defined contribution arrangement works. Discontinuance for the sponsor’s conduct requires failure to pay premiums, fraud, or an intentional misrepresentation.',
        },
        {
          text: 'When both employers participate and benefits are portable.',
          why: 'Portability when both employers participate does not discontinue the plan. Discontinuance for the sponsor’s conduct requires nonpayment, fraud, or intentional misrepresentation.',
        },
        {
          text: 'If the plan sponsor fails to pay premiums, commits fraud, or makes an intentional misrepresentation.',
          why: 'The plan may be discontinued if the plan sponsor fails to pay premiums, commits fraud, or makes an intentional misrepresentation.',
          correct: true,
        },
        {
          text: 'When the employer contributes a predetermined level of funding.',
          why: 'A predetermined contribution is the employer’s funding decision. Discontinuance for conduct requires nonpayment, fraud, or intentional misrepresentation.',
        },
      ],
    ),
    question(
      'c11q156',
      'How much notice must each plan sponsor and insured receive when a covered carrier elects to discontinue coverage?',
      [
        {
          text: 'At least 3 working days before the coverage ends.',
          why: 'The Commissioner must get notice at least 3 working days before the date the notice to sponsors and insureds is sent. Each plan sponsor and insured must get notice at least 90 days before the coverage ends.',
        },
        {
          text: 'Notice 12 months after discontinuance, and only if coverage has ended.',
          why: 'An eligible employee who was discontinued may reenroll 12 months after the discontinuance if the plan sponsor’s coverage is in effect. Sponsor and insured notice is at least 90 days before the coverage ends.',
        },
        {
          text: 'No notice if the carrier simply elects to discontinue.',
          why: 'A covered carrier may discontinue coverage if it elects to do so and gives the required notices. Each plan sponsor and insured must get notice at least 90 days before the coverage ends.',
        },
        {
          text: 'At least 90 days before the coverage ends.',
          why: 'The carrier must give each plan sponsor and insured notice at least 90 days before the coverage ends.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q157',
      'When must the Commissioner receive notice that a covered carrier has elected to discontinue coverage?',
      [
        {
          text: 'At least 3 working days before the date the notice to plan sponsors and insureds is sent.',
          why: 'The carrier must give the Commissioner notice at least 3 working days before the date that notice to each plan sponsor and insured is sent.',
          correct: true,
        },
        {
          text: 'At least 90 days after the coverage has already ended.',
          why: 'Each plan sponsor and insured must get notice at least 90 days before the coverage ends. The Commissioner’s notice is at least 3 working days before that notice is sent.',
        },
        {
          text: 'At least 12 months after the employee applies for reenrollment.',
          why: 'Reenrollment may occur 12 months after the discontinuance if the plan sponsor’s coverage is in effect. The Commissioner’s notice is at least 3 working days before the other notice is sent.',
        },
        {
          text: 'Only after the plan sponsor has committed fraud.',
          why: 'Fraud by the plan sponsor is a separate discontinuance ground. When the carrier elects to discontinue, the Commissioner gets notice at least 3 working days before the notice to sponsors and insureds is sent.',
        },
      ],
    ),
    question(
      'c11q158',
      'When may an eligible employee who was discontinued reenroll?',
      [
        {
          text: 'Immediately, even if the plan sponsor’s coverage is no longer in effect.',
          why: 'Reenrollment requires that the plan sponsor’s coverage is in effect when the employee applies. It is available 12 months after the discontinuance.',
        },
        {
          text: '12 months after the discontinuance, if the plan sponsor’s coverage is in effect when the employee applies.',
          why: 'An eligible employee who was discontinued may reenroll 12 months after the discontinuance, if the plan sponsor’s coverage is in effect when the employee applies.',
          correct: true,
        },
        {
          text: '90 days before the coverage ends.',
          why: 'Ninety days is the minimum notice to each plan sponsor and insured before the coverage ends. Reenrollment is 12 months after the discontinuance if the sponsor’s coverage is in effect.',
        },
        {
          text: 'Only after paying a one-time surcharge of up to 25%.',
          why: 'The one-time surcharge of up to 25% applies to a small group that moves coverage from another carrier. Reenrollment is 12 months after the discontinuance if the sponsor’s coverage is in effect.',
        },
      ],
    ),
    question(
      'c11q159',
      'When is a limitation period allowed?',
      [
        {
          text: 'When the policy never names the condition and the period exceeds 12 months.',
          why: 'Each policy that uses a limitation period must specify the physical condition it excludes, and the period may not exceed 12 months. An unnamed condition and a longer period fail that rule.',
        },
        {
          text: 'When the period is applied to some policies and not others.',
          why: 'The period must be applied uniformly. Applying it only to some policies fails that condition.',
        },
        {
          text: 'When each policy that uses one names the excluded physical condition, the period does not exceed 12 months, and the period is applied uniformly.',
          why: 'A limitation period is allowed if each policy that uses one specifies the physical condition it excludes, the period does not exceed 12 months, and the period is applied uniformly. A pre-existing condition exclusion is separate and is reduced by days of creditable coverage.',
          correct: true,
        },
        {
          text: 'When it replaces renewal at the plan sponsor’s option.',
          why: 'The plan is renewable for all eligible insureds at the option of the plan sponsor. A limitation period does not replace that renewal rule.',
        },
      ],
    ),
    question(
      'c11q160',
      'What one-time surcharge may a carrier charge a small group that moves coverage from another carrier?',
      [
        {
          text: 'A premium surcharge inside the defined contribution arrangement market.',
          why: 'A participating insurer in the defined contribution arrangement market may not impose a premium surcharge. The move from another carrier can bring a one-time surcharge of up to 25% of the annualized premium the carrier could otherwise charge.',
        },
        {
          text: 'Three times the annual deductible.',
          why: 'Three times the annual deductible is the cap on the annual out-of-pocket maximum of the federally qualified high-deductible plan. The move surcharge is up to 25% of the annualized premium the carrier could otherwise charge.',
        },
        {
          text: '15% of the annualized premium on an anniversary move.',
          why: 'The 15% figure is the minimum extra actuarial value of the second required plan. The surcharge is up to 25%, and it may not be imposed if the change occurs on the anniversary of the plan year.',
        },
        {
          text: 'Up to 25% of the annualized premium the carrier could otherwise charge.',
          why: 'A carrier may charge a small group that moves coverage from another carrier a one-time surcharge of up to 25% of the annualized premium the carrier could otherwise charge. It may not be imposed if the change occurs on the anniversary of the plan year, the previous coverage was terminated, or employees from an existing group form a new business.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q161',
      'If a carrier uses a surcharge, where must the surcharge and the criteria for incurring or avoiding it appear?',
      [
        {
          text: 'In the written application materials given at application and in the written producer guidelines.',
          why: 'If a carrier uses a surcharge, the surcharge and the criteria for incurring or avoiding it must appear in the written application materials given at application and in the written producer guidelines.',
          correct: true,
        },
        {
          text: 'Only in a Commissioner notice sent after coverage ends.',
          why: 'The Commissioner notice is part of a discontinuance election. Surcharge criteria belong in the application materials and the written producer guidelines.',
        },
        {
          text: 'Only on the quarterly wage list.',
          why: 'The quarterly wage list is used to see whether the people to be covered are bona fide employees. Surcharge criteria belong in the application materials and the written producer guidelines.',
        },
        {
          text: 'Nowhere in materials given to the applicant.',
          why: 'The surcharge and the criteria for incurring or avoiding it must appear in the written application materials given at application and in the written producer guidelines.',
        },
      ],
    ),
  ],
  'c11-erisa': [
    question(
      'c11q162',
      'Why was the Employee Retirement Income Security Act of 1974 enacted?',
      [
        {
          text: 'To make the Internal Revenue Service the payer of holiday gifts.',
          why: 'The Internal Revenue Service administers the taxation of contributions and benefits. Holiday gifts are payroll practices and are not included. The Act was enacted so employees receive the pension and other benefits their employers promise.',
        },
        {
          text: 'So employees receive the pension and other benefits their employers promise.',
          why: 'The Employee Retirement Income Security Act of 1974 was enacted so employees receive the pension and other benefits their employers promise. It is tied to Internal Revenue Code provisions that encourage employers to provide retirement and other benefits.',
          correct: true,
        },
        {
          text: 'To leave pension rules entirely to each state.',
          why: 'The Act supersedes almost all state laws that affect employee benefit plans and creates a single federal standard. Its purpose is that employees receive the benefits their employers promise.',
        },
        {
          text: 'To regulate overtime premiums as welfare plans.',
          why: 'Overtime premiums are payroll practices and are not included. The Act was enacted so employees receive the pension and other benefits their employers promise.',
        },
      ],
    ),
    question(
      'c11q163',
      'What do many tax-favored pension rules keep those plans from doing?',
      [
        {
          text: 'Paying any benefit to rank-and-file employees.',
          why: 'The rules address favoring the highest-paid employees over rank-and-file employees. They keep that favoritism from being the design of the tax-favored plan.',
        },
        {
          text: 'Covering health and life insurance.',
          why: 'The Act covers most welfare benefit plans, such as health and life insurance. Many tax-favored pension rules keep plans from favoring the highest-paid employees over rank-and-file employees.',
        },
        {
          text: 'Favoring the highest-paid employees over rank-and-file employees.',
          why: 'Many of those rules keep tax-favored pension plans from favoring the highest-paid employees over rank-and-file employees.',
          correct: true,
        },
        {
          text: 'Using the Pension Benefit Guaranty Corporation for pension insurance.',
          why: 'The Pension Benefit Guaranty Corporation is in charge of pension insurance provisions. The tax-favored pension rules address favoring the highest-paid employees over rank-and-file employees.',
        },
      ],
    ),
    question(
      'c11q164',
      'Which plans does the Act cover?',
      [
        {
          text: 'Only unfunded vacation and holiday practices.',
          why: 'Vacation and holidays are unfunded benefits or payroll practices and are not included. The Act covers pension, profit-sharing, stock bonus, and most welfare benefit plans.',
        },
        {
          text: 'Only voluntary insurance to which the employer makes no contribution.',
          why: 'Group-type voluntary insurance programs to which the employer makes no contribution are excluded. The Act covers pension, profit-sharing, stock bonus, and most welfare benefit plans.',
        },
        {
          text: 'Only cash bonus plans and severance pay of less than 2 years.',
          why: 'Cash bonus plans and severance pay of less than 2 years are compensation and are not regulated by the Act. Coverage reaches pension, profit-sharing, stock bonus, and most welfare benefit plans.',
        },
        {
          text: 'Pension, profit-sharing, stock bonus, and most welfare benefit plans, such as health and life insurance.',
          why: 'The Act covers pension, profit-sharing, stock bonus, and most welfare benefit plans, such as health and life insurance.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q165',
      'What does the Act do to state laws that affect employee benefit plans?',
      [
        {
          text: 'It supersedes almost all of them and creates a single federal standard.',
          why: 'The Act supersedes almost all state laws that affect employee benefit plans and creates a single federal standard.',
          correct: true,
        },
        {
          text: 'It adopts a separate standard for each state.',
          why: 'The Act creates a single federal standard. It supersedes almost all state laws that affect employee benefit plans.',
        },
        {
          text: 'It covers church plans and leaves other plans to state law.',
          why: 'Governmental and church plans, plans established solely to comply with unemployment compensation, workers compensation, or disability insurance laws, and plans designed to provide benefits above the deduction limits to certain employees are exempt from the Act. The Act still supersedes almost all state laws that affect employee benefit plans.',
        },
        {
          text: 'It regulates holiday gifts in place of state payroll rules.',
          why: 'Holiday gifts are not included. The Act supersedes almost all state laws that affect employee benefit plans and creates a single federal standard.',
        },
      ],
    ),
    question(
      'c11q166',
      'Which coverages are employee welfare benefit plans?',
      [
        {
          text: 'Vacation, holidays, and pay for time not worked.',
          why: 'Those items are unfunded benefits or payroll practices and are not included. Welfare benefit plans include health care, life insurance, prepaid legal services, and both long-term and short-term disability insurance.',
        },
        {
          text: 'Health care, life insurance, prepaid legal services, and both long-term and short-term disability insurance.',
          why: 'Health care, life insurance, prepaid legal services, and both long-term and short-term disability insurance are employee welfare benefit plans.',
          correct: true,
        },
        {
          text: 'Severance pay of less than 2 years and cash profit-sharing.',
          why: 'Cash profit-sharing plans and severance pay of less than 2 years are compensation and are not regulated by the Act. They are outside the welfare benefit plans listed here.',
        },
        {
          text: 'Plans that exist only to comply with unemployment compensation laws.',
          why: 'Plans established solely to comply with unemployment compensation, workers compensation, or disability insurance laws are exempt from the Act. The welfare list is health care, life insurance, prepaid legal services, and long-term and short-term disability insurance.',
        },
      ],
    ),
    question(
      'c11q167',
      'Which items are left out because they are unfunded benefits or payroll practices?',
      [
        {
          text: 'Health care and life insurance.',
          why: 'Health care and life insurance are employee welfare benefit plans. The excluded payroll practices are vacation, holidays, overtime premiums, holiday gifts, and compensation paid for time not worked.',
        },
        {
          text: 'Prepaid legal services.',
          why: 'Prepaid legal services are employee welfare benefit plans. They are not in the excluded payroll list.',
        },
        {
          text: 'Vacation, holidays, overtime premiums, holiday gifts, and compensation paid for time not worked.',
          why: 'Unfunded benefits or payroll practices are not included: vacation, holidays, overtime premiums, holiday gifts, and compensation paid for time not worked.',
          correct: true,
        },
        {
          text: 'Long-term and short-term disability insurance.',
          why: 'Both long-term and short-term disability insurance are employee welfare benefit plans. They are not the excluded payroll list.',
        },
      ],
    ),
    question(
      'c11q168',
      'Which insurance programs are also excluded?',
      [
        {
          text: 'Health care plans to which the employer contributes.',
          why: 'Health care is an employee welfare benefit plan. The further exclusion is group-type voluntary insurance to which the employer makes no contribution.',
        },
        {
          text: 'Life insurance arranged as a welfare benefit plan.',
          why: 'Life insurance is an employee welfare benefit plan. The further exclusion is group-type voluntary insurance to which the employer makes no contribution.',
        },
        {
          text: 'Pension plans funded with deferred compensation.',
          why: 'Deferred compensation is treated as a pension plan. The further exclusion is group-type voluntary insurance to which the employer makes no contribution.',
        },
        {
          text: 'Group-type voluntary insurance programs to which the employer makes no contribution.',
          why: 'Group-type voluntary insurance programs to which the employer makes no contribution are also excluded.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q169',
      'Which arrangements does the Act treat as pension plans?',
      [
        {
          text: 'Any deferred compensation, including deferred profit-sharing, stock purchasing, and savings and thrift plans, as well as pension plans.',
          why: 'The Act treats as pension plans any deferred compensation, including deferred profit-sharing, stock purchasing, and savings and thrift plans, as well as pension plans.',
          correct: true,
        },
        {
          text: 'Cash bonus plans paid currently.',
          why: 'Cash bonus plans are compensation and are not regulated by the Act. Deferred compensation is what the Act treats as a pension plan.',
        },
        {
          text: 'Severance pay of less than 2 years.',
          why: 'Severance pay of less than 2 years is compensation and is not regulated by the Act. It is outside the deferred-compensation pension category.',
        },
        {
          text: 'Holiday gifts and overtime premiums.',
          why: 'Holiday gifts and overtime premiums are payroll practices and are not included. They are not treated as pension plans.',
        },
      ],
    ),
    question(
      'c11q170',
      'Which payments are compensation and are not regulated by the Act?',
      [
        {
          text: 'A bonus systematically deferred and paid out over several years.',
          why: 'A bonus that is systematically deferred and paid out over several years is a pension plan. Cash bonus plans, cash profit-sharing plans, and severance pay of less than 2 years are the unregulated compensation.',
        },
        {
          text: 'Cash bonus plans, cash profit-sharing plans, and severance pay of less than 2 years.',
          why: 'Cash bonus plans, cash profit-sharing plans, and severance pay of less than 2 years are compensation and are not regulated by the Act.',
          correct: true,
        },
        {
          text: 'Deferred profit-sharing and stock purchasing plans.',
          why: 'Deferred profit-sharing and stock purchasing are treated as pension plans. They are inside the Act, unlike current cash compensation.',
        },
        {
          text: 'Savings and thrift plans.',
          why: 'Savings and thrift plans are within the deferred compensation treated as pension plans. They are not in the unregulated compensation list.',
        },
      ],
    ),
    question(
      'c11q171',
      'What is a bonus that is systematically deferred and paid out over several years?',
      [
        {
          text: 'A payroll practice, in the same group as a holiday gift.',
          why: 'Holiday gifts are payroll practices and are not included. A systematically deferred bonus paid out over several years is a pension plan.',
        },
        {
          text: 'Severance pay that the Act does not regulate.',
          why: 'Severance pay of less than 2 years is not regulated by the Act. A bonus systematically deferred and paid over several years is a pension plan.',
        },
        {
          text: 'A pension plan.',
          why: 'A bonus that is systematically deferred and paid out over several years is a pension plan.',
          correct: true,
        },
        {
          text: 'A small unfunded welfare plan exempt from reporting and disclosure.',
          why: 'Small unfunded welfare plans have reporting and disclosure exemptions. A systematically deferred bonus paid out over several years is a pension plan.',
        },
      ],
    ),
    question(
      'c11q172',
      'Which duties apply to pension plans?',
      [
        {
          text: 'Only pension insurance duties of the Pension Benefit Guaranty Corporation.',
          why: 'The Pension Benefit Guaranty Corporation is in charge of pension insurance provisions. Pension plans are subject to all of the rules, including reporting and disclosure, financial management of plan assets, administration, and participation, vesting, and funding.',
        },
        {
          text: 'Only reporting and disclosure, with participation and funding omitted.',
          why: 'Welfare plans are concerned with reporting and disclosure and with financial management and plan administration. Pension plans also include participation, vesting, and funding.',
        },
        {
          text: 'No duties, because pension plans are payroll practices.',
          why: 'Payroll practices such as vacation and holidays are not included. Pension plans are subject to reporting and disclosure, financial management of plan assets, administration, and participation, vesting, and funding.',
        },
        {
          text: 'Reporting and disclosure, financial management of plan assets, administration, and participation, vesting, and funding.',
          why: 'Pension plans are subject to all of the rules, including reporting and disclosure, financial management of plan assets, administration, and participation, vesting, and funding.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q173',
      'Which standards apply to welfare plans such as health insurance?',
      [
        {
          text: 'Reporting and disclosure, plus financial management and plan administration standards.',
          why: 'Welfare plans, such as health insurance, are concerned with reporting and disclosure and with financial management and plan administration standards.',
          correct: true,
        },
        {
          text: 'Participation, vesting, and funding, with reporting left out.',
          why: 'Participation, vesting, and funding are part of the pension-plan rules. Welfare plans are concerned with reporting and disclosure and with financial management and plan administration.',
        },
        {
          text: 'Pension insurance provisions treated as welfare benefits.',
          why: 'The Pension Benefit Guaranty Corporation is in charge of pension insurance provisions. Welfare plans are concerned with reporting and disclosure and with financial management and plan administration.',
        },
        {
          text: 'A total exemption from reporting because the plan is a top hat plan.',
          why: 'Top hat plans are unfunded plans for a select group of management or highly compensated employees, and they are exempt from participation, vesting, funding, and fiduciary responsibility. Unless another exemption applies, they remain subject to reporting and disclosure and to the administration and enforcement provisions.',
        },
      ],
    ),
    question(
      'c11q174',
      'What does the Internal Revenue Service handle for these plans?',
      [
        {
          text: 'Reporting and disclosure and the fiduciary rules for plan assets.',
          why: 'The Department of Labor administers reporting and disclosure and the fiduciary requirements that regulate management of plan assets. The Internal Revenue Service handles taxation and, for retirement plans, funding, participation, and vesting.',
        },
        {
          text: 'Taxation of contributions and benefits, and retirement-plan funding, participation, and vesting.',
          why: 'The Internal Revenue Service administers the taxation of contributions and benefits. For retirement plans, the IRS enforces funding, participation, and vesting standards.',
          correct: true,
        },
        {
          text: 'Pension insurance provisions.',
          why: 'The Pension Benefit Guaranty Corporation is in charge of pension insurance provisions. That work is separate from the Internal Revenue Service role.',
        },
        {
          text: 'Only the exemption for church plans.',
          why: 'Governmental and church plans are exempt from the Act. The Internal Revenue Service administers taxation of contributions and benefits and enforces retirement-plan funding, participation, and vesting.',
        },
      ],
    ),
    question(
      'c11q175',
      'Which body is in charge of pension insurance provisions?',
      [
        {
          text: 'The Internal Revenue Service.',
          why: 'The Internal Revenue Service administers taxation of contributions and benefits and enforces retirement-plan funding, participation, and vesting. Pension insurance provisions belong to the Pension Benefit Guaranty Corporation.',
        },
        {
          text: 'The Department of Labor.',
          why: 'The Department of Labor administers reporting and disclosure and the fiduciary requirements. Pension insurance provisions belong to the Pension Benefit Guaranty Corporation.',
        },
        {
          text: 'The Pension Benefit Guaranty Corporation.',
          why: 'The Pension Benefit Guaranty Corporation is in charge of pension insurance provisions.',
          correct: true,
        },
        {
          text: 'Each state that still regulates employee benefit plans.',
          why: 'The Act creates a single federal standard and supersedes almost all state laws that affect employee benefit plans. Pension insurance provisions are charged to the Pension Benefit Guaranty Corporation.',
        },
      ],
    ),
    question(
      'c11q176',
      'What does the Department of Labor administer under the Act?',
      [
        {
          text: 'The taxation of contributions and benefits.',
          why: 'The Internal Revenue Service administers the taxation of contributions and benefits. The Department of Labor administers reporting and disclosure and the fiduciary requirements.',
        },
        {
          text: 'Pension insurance provisions.',
          why: 'The Pension Benefit Guaranty Corporation is in charge of pension insurance provisions. The Department of Labor administers reporting and disclosure and the fiduciary requirements.',
        },
        {
          text: 'Retirement-plan funding, participation, and vesting standards.',
          why: 'For retirement plans, the IRS enforces funding, participation, and vesting standards. The Department of Labor administers reporting and disclosure and the fiduciary requirements.',
        },
        {
          text: 'Reporting and disclosure, and the fiduciary requirements that regulate management of plan assets.',
          why: 'The Department of Labor administers reporting and disclosure and the fiduciary requirements that regulate management of plan assets.',
          correct: true,
        },
      ],
    ),
  ],
  'c11-fairness': [
    question(
      'c11q177',
      'What does the Age Discrimination in Employment Act of 1967 set out to do?',
      [
        {
          text: 'Promote employment of older persons based on ability rather than age, prohibit arbitrary age discrimination, and help with problems that come from the impact of age on employment.',
          why: 'The Age Discrimination in Employment Act of 1967 promotes employment of older persons based on ability rather than age, prohibits arbitrary age discrimination in employment, and helps employers and workers meet problems that come from the impact of age on employment.',
          correct: true,
        },
        {
          text: 'Allow arbitrary age limits whenever the employer prefers younger workers.',
          why: 'The Act prohibits arbitrary age discrimination in employment. An arbitrary preference for younger workers is the conduct the Act targets.',
        },
        {
          text: 'Set every retiree benefit at one-fourth of wages for workers of every age.',
          why: 'Retiree health benefits must at least equal Social Security Act benefit values for retirees below age 65, and one-fourth of Social Security benefit values for retirees age 65 or older. That value test is separate from the Act’s purposes.',
        },
        {
          text: 'Bar every bona fide occupational qualification, including one the business needs.',
          why: 'Age can be a bona fide occupational qualification reasonably necessary to the normal operation of the business. The Act’s purposes are ability-based employment, a ban on arbitrary age discrimination, and help with problems that come from age.',
        },
      ],
    ),
    question(
      'c11q178',
      'For whom is age discrimination in employment illegal under that Act?',
      [
        {
          text: 'Only a labor organization, and only in advertisements.',
          why: 'Printing or publishing an age-based advertisement is one unfair practice, and a labor organization is covered. An employer is covered as well.',
        },
        {
          text: 'An employer or a labor organization.',
          why: 'It is illegal for an employer or a labor organization to discriminate against an employee based on age.',
          correct: true,
        },
        {
          text: 'Only an employment agency hiring persons under age 40.',
          why: 'Under the civil-rights limits, age protection applies if the person is 40 or older. The age-discrimination ban runs against an employer or a labor organization.',
        },
        {
          text: 'Only an employer abroad when compliance would violate that country’s laws.',
          why: 'When the workplace is in a foreign country and compliance would cause the employer, or a corporation the employer controls, to violate that country’s laws, age is not an illegal basis. The general ban applies to an employer or a labor organization.',
        },
      ],
    ),
    question(
      'c11q179',
      'Which hiring and pay actions count as unfair age discrimination?',
      [
        {
          text: 'A bona fide occupational qualification the business reasonably needs.',
          why: 'A bona fide occupational qualification reasonably necessary to the normal operation of the business is a case in which age is not an illegal basis. The unfair list covers hiring, discharge, referral, and employment terms.',
        },
        {
          text: 'A difference based on reasonable factors other than age.',
          why: 'Reasonable factors other than age can keep age from being an illegal basis. They are separate from the listed unfair hiring and pay actions.',
        },
        {
          text: 'Failing or refusing to hire, discharging, or refusing to refer a person, or discriminating in compensation, terms, conditions, or privileges of employment.',
          why: 'Unfair discrimination includes failing or refusing to hire, discharging, or refusing to refer a person for employment, or discriminating in compensation, terms, conditions, or privileges of employment.',
          correct: true,
        },
        {
          text: 'Raising an employee’s contribution when benefit cost rises for all employees.',
          why: 'An employee’s contribution may be increased when the cost of providing benefits increases for all employees, not solely because of the employee’s age. That contribution rule is separate from the hiring and pay list.',
        },
      ],
    ),
    question(
      'c11q180',
      'When is limiting, segregating, or classifying employees unfair age discrimination?',
      [
        {
          text: 'When the classification raises every employee’s wage rate.',
          why: 'Reducing any employee’s wage rate is a separate unfair act. Limiting, segregating, or classifying is unfair when it deprives employees of employment opportunities or otherwise adversely affects status.',
        },
        {
          text: 'When the classification copies a foreign country’s statute.',
          why: 'Foreign-country law can be a reason age is not an illegal basis. Classification is unfair when it deprives employees of opportunities or otherwise adversely affects status.',
        },
        {
          text: 'When it is a reasonable factor other than age.',
          why: 'Reasonable factors other than age are an exception. Limiting, segregating, or classifying is unfair when it deprives employees of employment opportunities or otherwise adversely affects status.',
        },
        {
          text: 'When it deprives them of employment opportunities or otherwise adversely affects their status.',
          why: 'Unfair discrimination includes limiting, segregating, or classifying employees in a way that deprives them of employment opportunities or otherwise adversely affects status.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q181',
      'Which wage action is unfair age discrimination?',
      [
        {
          text: 'Reducing any employee’s wage rate.',
          why: 'Unfair discrimination includes reducing any employee’s wage rate.',
          correct: true,
        },
        {
          text: 'Spending the same benefit cost on older workers and younger workers.',
          why: 'An employer may reduce benefits based on age only if the cost of providing the reduced benefits to older workers is the same as the cost of providing benefits to younger workers. Reducing any employee’s wage rate remains unfair discrimination.',
        },
        {
          text: 'Adjusting retiree benefit values each year with the Consumer Price Index.',
          why: 'Retiree health benefit values are adjusted annually based on the Consumer Price Index. Reducing any employee’s wage rate is the unfair wage action.',
        },
        {
          text: 'Covering pregnancy to the same extent as any other medical condition.',
          why: 'Pregnancy, childbirth, and related medical conditions must be covered to the same extent as any other medical condition. Reducing any employee’s wage rate is the unfair wage action under the age Act.',
        },
      ],
    ),
    question(
      'c11q182',
      'What kind of notice or advertisement is unfair age discrimination?',
      [
        {
          text: 'A notice that states only job duties and no age limit.',
          why: 'Job-related qualifications go to whether an applicant is otherwise qualified. The unfair notice indicates a preference, limitation, or specification based on age.',
        },
        {
          text: 'A notice or advertisement that indicates a preference, limitation, or specification based on age.',
          why: 'Unfair discrimination includes printing or publishing a notice or advertisement that indicates a preference, limitation, or specification based on age.',
          correct: true,
        },
        {
          text: 'An advertisement that lists qualifications and states no age preference.',
          why: 'An advertisement with no age preference is outside the unfair notice rule. The unfair notice indicates a preference, limitation, or specification based on age.',
        },
        {
          text: 'A notice that benefit cost increased for all employees.',
          why: 'A contribution may increase when the cost of providing benefits increases for all employees. That notice is separate from an age preference, limitation, or specification.',
        },
      ],
    ),
    question(
      'c11q183',
      'When is age not an illegal basis because of the job itself?',
      [
        {
          text: 'Whenever the employer reduces an employee’s wage rate.',
          why: 'Reducing any employee’s wage rate is unfair discrimination. The job exception is a bona fide occupational qualification reasonably necessary to the normal operation of the business.',
        },
        {
          text: 'Whenever a notice states an age limitation.',
          why: 'A notice or advertisement that indicates an age limitation is unfair discrimination. The job exception is a bona fide occupational qualification reasonably necessary to the normal operation of the business.',
        },
        {
          text: 'When age is a bona fide occupational qualification reasonably necessary to the normal operation of the business.',
          why: 'Age is not an illegal basis when age is a bona fide occupational qualification reasonably necessary to the normal operation of the business.',
          correct: true,
        },
        {
          text: 'When reduced benefits for older workers cost more than benefits for younger workers.',
          why: 'An employer may reduce benefits based on age only if the cost of providing the reduced benefits to older workers is the same as the cost of providing benefits to younger workers. The job exception is the bona fide occupational qualification test.',
        },
      ],
    ),
    question(
      'c11q184',
      'When is a difference not illegal age discrimination because of the factors used?',
      [
        {
          text: 'When the difference is based only on age.',
          why: 'A difference based only on age is what the Act prohibits unless an exception applies. The exception here is reasonable factors other than age.',
        },
        {
          text: 'When the employer refuses to hire because of age alone.',
          why: 'Failing or refusing to hire based on age is unfair discrimination. A difference based on reasonable factors other than age is the exception.',
        },
        {
          text: 'When a labor organization refuses to refer a person because of age.',
          why: 'Refusing to refer a person for employment is unfair discrimination. A difference based on reasonable factors other than age is the exception.',
        },
        {
          text: 'When the difference is based on reasonable factors other than age.',
          why: 'Age is not an illegal basis when the difference is based on reasonable factors other than age.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q185',
      'When does a foreign workplace keep age from being an illegal basis?',
      [
        {
          text: 'When compliance would cause the employer, or a corporation the employer controls, to violate that country’s laws.',
          why: 'Age is not an illegal basis when the workplace is in a foreign country and compliance would cause the employer, or a corporation the employer controls, to violate that country’s laws.',
          correct: true,
        },
        {
          text: 'When the employer prefers not to follow that country’s laws.',
          why: 'The exception applies when compliance would cause a violation of that country’s laws. A wish to ignore those laws does not create the exception.',
        },
        {
          text: 'When that country has no age law and the employer wants younger staff.',
          why: 'The Act prohibits arbitrary age discrimination. The foreign-workplace exception requires that compliance would violate that country’s laws.',
        },
        {
          text: 'When the employer reduces any employee’s wage rate while working abroad.',
          why: 'Reducing any employee’s wage rate is unfair discrimination. The foreign exception is about violating that country’s laws.',
        },
      ],
    ),
    question(
      'c11q186',
      'When may an employee’s contribution for benefits be increased?',
      [
        {
          text: 'Solely because of the employee’s age.',
          why: 'The contribution may be increased when the cost of providing benefits increases for all employees, not solely because of the employee’s age.',
        },
        {
          text: 'When the cost of providing benefits increases for all employees, not solely because of the employee’s age.',
          why: 'An employee’s contribution may be increased when the cost of providing benefits increases for all employees, not solely because of the employee’s age.',
          correct: true,
        },
        {
          text: 'Only for retirees below age 65, and only by one-fourth.',
          why: 'Retiree health benefits for retirees below age 65 must at least equal the value of benefits under the Social Security Act, and one-fourth applies to retirees age 65 or older. The contribution rule looks at a cost increase for all employees.',
        },
        {
          text: 'Whenever older workers’ reduced benefits cost more than younger workers’ benefits.',
          why: 'Benefits may be reduced based on age only if the cost for older workers equals the cost of benefits for younger workers. The contribution rule requires a cost increase for all employees, not age alone.',
        },
      ],
    ),
    question(
      'c11q187',
      'What retiree health benefit value must benefits an employer provides at least meet?',
      [
        {
          text: 'One-fourth of Social Security benefits for every retiree, including those below age 65.',
          why: 'Retirees below age 65 must receive at least the value of benefits under the Social Security Act. One-fourth of Social Security benefit values applies to retirees age 65 or older.',
        },
        {
          text: 'The wage rate of active employees age 40 or older.',
          why: 'Age 40 or older is the civil-rights age threshold. Retiree health values are measured against Social Security benefits.',
        },
        {
          text: 'Social Security Act benefit values for retirees below age 65, and one-fourth of Social Security benefit values for retirees age 65 or older.',
          why: 'Retiree health benefits an employer provides must at least equal the value of benefits under the Social Security Act for retirees below age 65, and one-fourth the value of Social Security benefits for retirees age 65 or older.',
          correct: true,
        },
        {
          text: 'A frozen amount that is never adjusted after the benefits are set.',
          why: 'Those values are adjusted annually based on the Consumer Price Index. The required comparison is to Social Security benefit values, split at age 65.',
        },
      ],
    ),
    question(
      'c11q188',
      'How are those retiree health benefit values adjusted?',
      [
        {
          text: 'They stay fixed from the date of hire.',
          why: 'The values are adjusted annually based on the Consumer Price Index. They are not left fixed from hire.',
        },
        {
          text: 'They change only when an employee’s wage rate is reduced.',
          why: 'Reducing any employee’s wage rate is unfair age discrimination. The retiree values are adjusted annually based on the Consumer Price Index.',
        },
        {
          text: 'They are adjusted only for retirees below age 65.',
          why: 'The adjustment applies to those values, both the below-65 Social Security value and the one-fourth value for retirees age 65 or older. The adjustment is annual and based on the Consumer Price Index.',
        },
        {
          text: 'Annually, based on the Consumer Price Index.',
          why: 'Those values are adjusted annually based on the Consumer Price Index.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q189',
      'The Pregnancy Discrimination Act is an amendment to which law?',
      [
        {
          text: 'The Civil Rights Act of 1964.',
          why: 'The Pregnancy Discrimination Act is an amendment to the Civil Rights Act of 1964. Pregnancy, childbirth, and related medical conditions must be covered to the same extent as any other medical condition under the policy.',
          correct: true,
        },
        {
          text: 'The Age Discrimination in Employment Act of 1967.',
          why: 'The Age Discrimination in Employment Act of 1967 is the age statute. The Pregnancy Discrimination Act amends the Civil Rights Act of 1964.',
        },
        {
          text: 'The Social Security Act.',
          why: 'Retiree health values are compared with benefits under the Social Security Act. The Pregnancy Discrimination Act amends the Civil Rights Act of 1964.',
        },
        {
          text: 'The age law of a foreign country.',
          why: 'Foreign-country law is an age-discrimination exception. The Pregnancy Discrimination Act amends the Civil Rights Act of 1964.',
        },
      ],
    ),
    question(
      'c11q190',
      'Which employers does the Pregnancy Discrimination Act apply to?',
      [
        {
          text: 'Employers with fewer than 15 employees only.',
          why: 'The Act applies to employers with 15 or more employees. It is not limited to employers below that size.',
        },
        {
          text: 'Employers with 15 or more employees.',
          why: 'The Act applies to employers with 15 or more employees.',
          correct: true,
        },
        {
          text: 'Labor organizations only, and no employers.',
          why: 'Civil-rights limits also apply to labor organizations. The Pregnancy Discrimination Act applies to employers with 15 or more employees.',
        },
        {
          text: 'Only employers whose workers are under age 40.',
          why: 'Age 40 or older is the civil-rights age threshold for adverse treatment. The Act’s employer test is 15 or more employees.',
        },
      ],
    ),
    question(
      'c11q191',
      'Besides an employer’s hiring, promotion, discharge, compensation, and terms and conditions of employment, where do the same civil-rights limits apply?',
      [
        {
          text: 'Only in a foreign country when compliance would violate that country’s laws.',
          why: 'The foreign-country rule is an exception under the age Act. The same civil-rights limits also apply to employment agencies, labor organizations, advertisements and applications, and apprenticeship or other training programs.',
        },
        {
          text: 'Only to wage-rate reductions based on age.',
          why: 'Reducing any employee’s wage rate is one unfair age act. The same civil-rights limits also apply to employment agencies, labor organizations, advertisements and applications, and apprenticeship or other training programs.',
        },
        {
          text: 'To employment agencies, labor organizations, advertisements and applications, and apprenticeship or other training programs.',
          why: 'The same civil-rights limits apply to hiring, promotion, discharge, compensation, and the terms and conditions of employment, and they apply to employment agencies, labor organizations, advertisements and applications, and apprenticeship or other training programs.',
          correct: true,
        },
        {
          text: 'Only to retiree health benefits for people below age 65.',
          why: 'Retiree health values below age 65 are an age-act comparison with Social Security benefits. The civil-rights limits also reach employment agencies, labor organizations, advertisements and applications, and apprenticeship or other training programs.',
        },
      ],
    ),
    question(
      'c11q192',
      'A person may not be treated adversely because of which characteristics?',
      [
        {
          text: 'Race and color only.',
          why: 'Race and color are included, together with sex, pregnancy, childbirth, or pregnancy-related conditions, religion, national origin, disability, and age if the person is 40 or older.',
        },
        {
          text: 'Religion and national origin only.',
          why: 'Religion and national origin are included, together with race, color, sex, pregnancy, childbirth, or pregnancy-related conditions, disability, and age if the person is 40 or older.',
        },
        {
          text: 'Disability only, with age left out at every age.',
          why: 'Disability is included, and age is included if the person is 40 or older. The protected list is broader than disability alone.',
        },
        {
          text: 'Race, color, sex, pregnancy, childbirth, or pregnancy-related conditions, religion, national origin, disability, or age if the person is 40 or older.',
          why: 'A person may not be treated adversely because of race, color, sex, pregnancy, childbirth, or pregnancy-related conditions, religion, national origin, disability, or age if the person is 40 or older.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q193',
      'When is an applicant otherwise qualified for the job?',
      [
        {
          text: 'When the applicant has the education, training, ability, moral character, integrity, disposition to work, adherence to reasonable rules, and other job-related qualifications the employer requires.',
          why: 'An applicant is not otherwise qualified unless the applicant has the education, training, ability, moral character, integrity, disposition to work, adherence to reasonable rules, and other job-related qualifications the employer requires for that job.',
          correct: true,
        },
        {
          text: 'When the applicant lacks the required education but is age 40 or older.',
          why: 'Age if the person is 40 or older is a protected characteristic. It does not replace the education and other job-related qualifications the employer requires.',
        },
        {
          text: 'When religion is used even though it is not a bona fide occupational qualification.',
          why: 'Religion, sex, pregnancy, childbirth, or pregnancy-related conditions, age, national origin, or disability may be used where that characteristic is a bona fide occupational qualification reasonably necessary to the normal operation of the business. Missing the required qualifications leaves the applicant otherwise unqualified.',
        },
        {
          text: 'When the applicant refuses the reasonable rules the employer requires.',
          why: 'Otherwise qualified includes adherence to reasonable rules and the other job-related qualifications the employer requires. Refusal of those rules fails that test.',
        },
      ],
    ),
  ],
  'c11-medicare': [
    question(
      'c11q194',
      'A person age 65 or older is currently employed, or covered under a working spouse’s group plan, and the employer has fewer than 20 employees. Which plan is primary?',
      [
        {
          text: 'The group plan is primary and Medicare is secondary.',
          why: 'The group plan is primary and Medicare is secondary when the employer has 20 or more employees. With fewer than 20 employees, Medicare is primary and the group plan is secondary.',
        },
        {
          text: 'Medicare is primary and the group plan is secondary.',
          why: 'When the person is age 65 or older, currently employed or covered under a working spouse’s group plan, and the employer has fewer than 20 employees, the group plan is secondary and Medicare is primary.',
          correct: true,
        },
        {
          text: 'Both plans are primary for the first 30 months.',
          why: 'For end-stage renal disease, the group plan is primary for the first 30 months and Medicare is secondary for those 30 months. In this age-65 case with fewer than 20 employees, Medicare is primary.',
        },
        {
          text: 'The group plan is primary because the employer has 100 or more employees.',
          why: 'An employer with 100 or more employees is the under-age-65 disability test, which makes the group plan primary. Fewer than 20 employees makes Medicare primary in this age-65 case.',
        },
      ],
    ),
    question(
      'c11q195',
      'For a disabled employee under 65 whose employer has 100 or more employees, which plan pays first?',
      [
        {
          text: 'Medicare is primary and the group plan is secondary.',
          why: 'Medicare primary and the group plan secondary is the age-65 result when the employer has fewer than 20 employees. In this disability case the group plan is primary and Medicare is secondary.',
        },
        {
          text: 'The group plan is secondary because the person is under age 65.',
          why: 'Being under age 65 does not by itself make the group plan secondary. With disability and an employer of 100 or more employees, the group plan is primary and Medicare is secondary.',
        },
        {
          text: 'The group plan is primary and Medicare is secondary.',
          why: 'When the person is under age 65, disabled, currently employed or covered under a working spouse’s group plan, and the employer has 100 or more employees, the group plan is primary and Medicare is secondary.',
          correct: true,
        },
        {
          text: 'Medicare is primary for the first 30 months.',
          why: 'For end-stage renal disease, Medicare is secondary for the first 30 months and primary after that. This disability rule makes the group plan primary.',
        },
      ],
    ),
    question(
      'c11q196',
      'For a person eligible for Medicare because of end-stage renal disease, which plan is primary for the first 30 months?',
      [
        {
          text: 'Medicare is primary for those 30 months.',
          why: 'Medicare is secondary for those 30 months. The group plan is primary for the first 30 months.',
        },
        {
          text: 'The group plan is secondary for those 30 months.',
          why: 'The group plan is primary for the first 30 months. Medicare is secondary during those 30 months.',
        },
        {
          text: 'Neither plan is primary until the 30 months end.',
          why: 'The group plan is primary for the first 30 months, and Medicare is secondary for those 30 months. The period has a primary plan.',
        },
        {
          text: 'The group plan is primary, and Medicare is secondary for those 30 months.',
          why: 'For end-stage renal disease, the group plan is primary for the first 30 months, and Medicare is secondary for those 30 months.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q197',
      'After the first 30 months of end-stage renal disease Medicare eligibility, which plan is primary?',
      [
        {
          text: 'Medicare is primary after that.',
          why: 'Medicare is secondary for those 30 months and primary after that.',
          correct: true,
        },
        {
          text: 'The group plan remains primary after that.',
          why: 'The group plan is primary for the first 30 months. Medicare is primary after that.',
        },
        {
          text: 'The group plan is primary only when the employer has fewer than 20 employees.',
          why: 'Fewer than 20 employees is the age-65 employment rule that makes Medicare primary and the group plan secondary. After the end-stage renal disease period of 30 months, Medicare is primary.',
        },
        {
          text: 'A Medicare carve-out plan becomes primary.',
          why: 'Medicare carve-out and supplement plans act as excess insurance. After the 30 months, Medicare is primary.',
        },
      ],
    ),
    question(
      'c11q198',
      'Which plans are large group plans for disabled employees and disabled dependents under age 65?',
      [
        {
          text: 'Plans covering fewer than 20 employees.',
          why: 'Fewer than 20 employees is the age-65 group size that makes the group plan secondary. Large group plans are those covering 100 or more employees.',
        },
        {
          text: 'Plans covering 100 or more employees.',
          why: 'Large group plans are those covering 100 or more employees. Disabled employees or disabled dependents under age 65 who are eligible for Medicare and covered under a large group plan have primary coverage under the group plan, and Medicare is secondary.',
          correct: true,
        },
        {
          text: 'Plans that pay only the deductibles Medicare has already paid.',
          why: 'Carve-out and supplement plans pay covered expenses Medicare does not pay, such as deductibles or copayments. Large group plans are those covering 100 or more employees.',
        },
        {
          text: 'Plans limited to employees under age 21.',
          why: 'Employees under age 21 are excluded from the top-paid count used for the nondiscrimination rules. Large group plans are those covering 100 or more employees.',
        },
      ],
    ),
    question(
      'c11q199',
      'Who may use Medicare carve-out and supplement plans?',
      [
        {
          text: 'Any employee left out of the top-paid count.',
          why: 'Listed employees are excluded when the nondiscrimination rules are applied and the top-paid group is counted. Carve-out and supplement plans are available to people enrolled in Medicare.',
        },
        {
          text: 'Only a person under age 65 who has no group plan.',
          why: 'A person under age 65 who is disabled and covered by a large group plan has that group plan as primary. Carve-out and supplement plans are available to people enrolled in Medicare.',
        },
        {
          text: 'People enrolled in Medicare.',
          why: 'Medicare carve-out and supplement plans are available to people enrolled in Medicare.',
          correct: true,
        },
        {
          text: 'Only employees who have not completed 6 months of service.',
          why: 'Employees who have not completed 6 months of service are excluded from the top-paid count. These plans are available to people enrolled in Medicare.',
        },
      ],
    ),
    question(
      'c11q200',
      'After Medicare pays, what do carve-out and supplement plans cover?',
      [
        {
          text: 'They replace Medicare as primary coverage for the first 30 months.',
          why: 'For end-stage renal disease, the group plan is primary for the first 30 months. Carve-out and supplement plans act as excess insurance.',
        },
        {
          text: 'They pay expenses Medicare has already paid in full.',
          why: 'They pay covered expenses Medicare does not pay, such as deductibles or copayments. They act as excess insurance.',
        },
        {
          text: 'They pay wages for employees under age 21.',
          why: 'Employees under age 21 are excluded from the top-paid count. These plans pay covered expenses Medicare does not pay, such as deductibles or copayments.',
        },
        {
          text: 'As excess insurance for covered expenses Medicare does not pay, such as deductibles or copayments.',
          why: 'They act as excess insurance and pay covered expenses Medicare does not pay, such as deductibles or copayments.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q201',
      'Which employees are excluded from the top-paid count because of short service?',
      [
        {
          text: 'Employees who have not completed 6 months of service.',
          why: 'To apply the nondiscrimination rules and count employees in the top-paid group, employees who have not completed 6 months of service are excluded.',
          correct: true,
        },
        {
          text: 'Employees who have completed more than 6 months of service.',
          why: 'The exclusion is for employees who have not completed 6 months of service. Longer service is outside that exclusion.',
        },
        {
          text: 'Employees who normally work more than 17½ hours per week.',
          why: 'The hours exclusion is for employees who normally work fewer than 17½ hours per week. The short-service exclusion is failure to complete 6 months of service.',
        },
        {
          text: 'Employees age 21 or older.',
          why: 'Employees under age 21 are a separate exclusion. The short-service exclusion is employees who have not completed 6 months of service.',
        },
      ],
    ),
    question(
      'c11q202',
      'Which weekly schedule excludes an employee from the top-paid count?',
      [
        {
          text: 'Normally working more than 17½ hours per week.',
          why: 'The exclusion applies to employees who normally work fewer than 17½ hours per week. Working more than that is outside this exclusion.',
        },
        {
          text: 'Normally working fewer than 17½ hours per week.',
          why: 'Employees who normally work fewer than 17½ hours per week are excluded from the count.',
          correct: true,
        },
        {
          text: 'Normally working during more than 6 months per year.',
          why: 'Employees who normally work during no more than 6 months per year are a separate exclusion. The weekly test is fewer than 17½ hours per week.',
        },
        {
          text: 'Having completed 6 months of service.',
          why: 'Employees who have not completed 6 months of service are excluded for short service. The weekly exclusion is fewer than 17½ hours per week.',
        },
      ],
    ),
    question(
      'c11q203',
      'Which yearly work pattern excludes an employee from the top-paid count?',
      [
        {
          text: 'Normally working during more than 6 months per year.',
          why: 'Working during more than 6 months per year is outside this exclusion. The exclusion covers employees who normally work during no more than 6 months per year.',
        },
        {
          text: 'Being under age 21 and working all year.',
          why: 'Employees under age 21 are excluded because of age. The yearly pattern exclusion is for employees who normally work during no more than 6 months per year.',
        },
        {
          text: 'Normally working during no more than 6 months per year.',
          why: 'Employees who normally work during no more than 6 months per year are excluded from the count.',
          correct: true,
        },
        {
          text: 'Working in a unit the Secretary of Labor has not found to be a collective bargaining agreement.',
          why: 'The collective-bargaining exclusion applies when the Secretary of Labor finds the agreement to be a collective bargaining agreement, except to the extent regulations provide otherwise. The yearly exclusion is no more than 6 months per year.',
        },
      ],
    ),
    question(
      'c11q204',
      'Which age excludes an employee from the top-paid count?',
      [
        {
          text: 'Age 65 or older.',
          why: 'Age 65 or older is a Medicare coordination category. The count excludes employees under age 21.',
        },
        {
          text: 'Under age 65 and disabled.',
          why: 'Under age 65 and disabled is a Medicare coordination category when the employer has 100 or more employees. The count excludes employees under age 21.',
        },
        {
          text: 'Age 21 or older.',
          why: 'Employees age 21 or older are outside the age exclusion. Employees under age 21 are excluded.',
        },
        {
          text: 'Under age 21.',
          why: 'Employees under age 21 are excluded from the count.',
          correct: true,
        },
      ],
    ),
    question(
      'c11q205',
      'When is an employee in a bargaining unit excluded from the top-paid count?',
      [
        {
          text: 'When the employee is in a unit covered by an agreement the Secretary of Labor finds to be a collective bargaining agreement, except to the extent regulations provide otherwise.',
          why: 'Employees in a unit covered by an agreement the Secretary of Labor finds to be a collective bargaining agreement are excluded, except to the extent regulations provide otherwise.',
          correct: true,
        },
        {
          text: 'When the employee has completed 6 months of service and works all year.',
          why: 'Short service and a work year of no more than 6 months are separate exclusions. Completing 6 months and working all year does not create the collective-bargaining exclusion.',
        },
        {
          text: 'Whenever the employer chooses to count the top 20% by compensation.',
          why: 'If the employer so chooses, the top 20% of employees ranked by compensation can be part of who is a highly compensated employee for the preceding year. That choice is separate from the collective-bargaining exclusion.',
        },
        {
          text: 'When the employee owned more than 5% of the business.',
          why: 'A highly compensated employee includes an employee who owned more than 5% of the interest in the business at any time during the year or the preceding year, regardless of compensation. That ownership test is separate from the collective-bargaining exclusion.',
        },
      ],
    ),
    question(
      'c11q206',
      'When a person has an employer’s group health coverage and also qualifies for Medicare, how do the two plans relate?',
      [
        {
          text: 'Both plans are primary for every employer size.',
          why: 'One plan is primary and the other is secondary. The rules do not make both plans primary for every employer size.',
        },
        {
          text: 'One plan is primary and the other is secondary.',
          why: 'When a person has an employer’s group health coverage and also qualifies for Medicare, one plan is primary and the other is secondary.',
          correct: true,
        },
        {
          text: 'The group plan is secondary even when it covers 20 or more employees.',
          why: 'If an individual is covered under an employer group health plan covering 20 or more employees, that plan is primary and Medicare is secondary. One plan is primary and the other is secondary.',
        },
        {
          text: 'A Medicare carve-out is always the primary plan.',
          why: 'Carve-out and supplement plans act as excess insurance and pay covered expenses Medicare does not pay. Between the group plan and Medicare, one plan is primary and the other is secondary.',
        },
      ],
    ),
  ],
}
