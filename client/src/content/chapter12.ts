import { question } from './build.ts'
import type { Chapter } from './types.ts'
import { chapter12Extra } from './extra/chapter12.ts'

/**
 * Section text is the current study wording.
 * The source pages have no practice questions. Questions are written from that text,
 * four options each, with a reason for the right answer and for each wrong one.
 */
export const chapter12: Chapter = {
  id: 'ch-dental',
  number: 11,
  title: 'Dental Insurance',
  summary:
    'How indemnity and employer group dental plans pay for preventive, basic, and major care, and what they leave out.',
  sections: [
    {
      id: 'c12-plans',
      title: 'Scheduled plans and nonscheduled plans',
      body: `Dental insurance falls into two major categories: indemnity plans and employer group dental expense insurance. Indemnity plans are the focus here.

These words are used with these plans.

• First-dollar benefits. Benefits paid without a deductible or a copay that must be satisfied first.
• Indemnity. The principle that an insured cannot profit from reimbursement for a loss.
• Nonscheduled plan. Also called comprehensive. Benefits are paid on a reasonable and customary basis and are subject to deductibles and coinsurance.
• Scheduled plan. Also called basic. It pays benefits from a list of procedures, up to the amount shown in the schedule.

Some dental plans limit which providers the insured may use. Others simply limit the benefits payable to any qualified practitioner.

A basic, or scheduled, plan pays benefits from a list of procedures up to the amount shown on the schedule. Most of these plans provide first-dollar benefits, with no coinsurance and no deductible. The maximum benefits are often lower than the usual and customary charges of dentists, so the insured bears part of the cost.

On a nonscheduled plan, benefits are paid on a reasonable and customary basis and are subject to deductibles and coinsurance. Services are usually divided into three broad categories: diagnostic and preventive services, basic services, and major services.`,
      questions: [
        question(
          'c12q01',
          'How does a scheduled dental plan differ from a nonscheduled plan?',
          [
            {
              text: 'A scheduled, or basic, plan pays from a list of procedures up to the amount in the schedule. A nonscheduled, or comprehensive, plan pays on a reasonable and customary basis and is subject to deductibles and coinsurance.',
              why: 'Most scheduled plans provide first-dollar benefits, with no coinsurance or deductible. Their maximums are often below usual and customary charges, so the insured pays part of the cost. Some plans limit the choice of provider. Others limit the benefit to any qualified practitioner.',
              correct: true,
            },
            {
              text: 'A scheduled plan pays reasonable and customary charges with coinsurance. A nonscheduled plan pays only the amount on a fee list.',
              why: 'Those descriptions are reversed. Reasonable and customary payment, with deductibles and coinsurance, is the nonscheduled plan.',
            },
            {
              text: 'A scheduled plan lets the insured profit from the reimbursement. A nonscheduled plan pays nothing until a medical deductible is met.',
              why: 'Indemnity means the insured cannot profit from reimbursement for a loss. A dental deductible is a dental-plan feature, not a rule that scheduled plans ignore indemnity.',
            },
            {
              text: 'Both plans pay 100% of any dentist’s bill, with no schedule and no coinsurance.',
              why: 'Scheduled benefits stop at the amount in the schedule. Nonscheduled benefits are subject to deductibles and coinsurance.',
            },
          ],
        ),
        question(
          'c12q02',
          'What are first-dollar benefits?',
          [
            {
              text: 'Benefits paid without any deductibles or copays to satisfy.',
              why: 'Most scheduled dental plans provide first-dollar benefits without coinsurance or deductibles. Diagnostic and preventive services are generally not subject to coinsurance or deductibles either.',
              correct: true,
            },
            {
              text: 'Benefits that pay the insured more than the cost of the care.',
              why: 'Indemnity says an insured cannot profit from reimbursement for a loss.',
            },
            {
              text: 'Benefits paid only after a calendar-year deductible of $25, $50, or $100.',
              why: 'Those are common dental deductibles. First-dollar benefits are paid without a deductible or copay to satisfy.',
            },
            {
              text: 'Benefits the insurer will not identify until after the work is finished.',
              why: 'Predetermination of benefits lets the insured and the dentist know in advance what will be paid. It is generally not mandatory.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c12-treatment',
      title: 'Diagnostic, preventive, and restorative care',
      body: `An important feature of a dental plan, which is typically not found in a medical expense plan, is diagnostic and preventive care. Most dental plans cover routine preventive procedures such as periodic teeth cleaning and fluoride treatments. An increasing number of dental plans require periodic examinations as a condition of continued coverage.

Dental treatment is grouped this way.

• Diagnostic and preventive. Routine preventive care, including periodic cleaning and fluoride treatments.
• Restorative care. Treatment that restores functional use to natural teeth, such as fillings or crowns.
• Oral surgery. Operative treatment of the mouth, such as an extraction and the related surgical treatment.
• Endodontics. Treatment of the dental pulp inside a natural tooth, such as a root canal.
• Periodontics. Treatment of the tissue around and supporting the teeth, such as treatment for gum disease.
• Prosthodontics. Replacement of missing teeth with an artificial device, such as bridgework or dentures.
• Orthodontics. Treatment of natural teeth to prevent or correct a dental anomaly, using braces or appliances.`,
      questions: [
        question(
          'c12q03',
          'Which treatment is endodontics, and which is periodontics?',
          [
            {
              text: 'Endodontics treats the dental pulp inside natural teeth, such as a root canal. Periodontics treats the surrounding and supporting tissue, such as gum disease.',
              why: 'Restorative care restores functional use with fillings or crowns. Oral surgery is operative treatment of the mouth, such as extractions. Prosthodontics replaces missing teeth with bridgework or dentures. Orthodontics uses braces or appliances to prevent or correct dental anomalies.',
              correct: true,
            },
            {
              text: 'Endodontics replaces missing teeth with dentures. Periodontics straightens teeth with braces.',
              why: 'Replacement with artificial devices is prosthodontics. Braces and appliances are orthodontics.',
            },
            {
              text: 'Endodontics is gum surgery. Periodontics is a root canal.',
              why: 'The pulp treatment, such as a root canal, is endodontics. The supporting tissue, such as the gums, is periodontics.',
            },
            {
              text: 'Both names mean preventive cleaning and fluoride, which medical plans usually include.',
              why: 'Cleaning and fluoride are diagnostic and preventive care. That care is typically included in dental plans and typically not found in a medical expense plan.',
            },
          ],
        ),
        question(
          'c12q04',
          'What does prosthodontics cover?',
          [
            {
              text: 'Replacement of missing teeth with artificial devices such as bridgework or dentures.',
              why: 'Orthodontics instead treats natural teeth with braces or appliances. Restorative care restores function to natural teeth with fillings or crowns.',
              correct: true,
            },
            {
              text: 'Extraction of teeth and related surgery.',
              why: 'Operative treatment of the mouth, including extractions, is oral surgery.',
            },
            {
              text: 'Fluoride treatments and periodic cleaning only.',
              why: 'Those are diagnostic and preventive services. Most dental plans cover them, and some require periodic exams for coverage to continue.',
            },
            {
              text: 'Treatment of the dental pulp, such as a root canal.',
              why: 'Pulp treatment is endodontics.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c12-benefits',
      title: 'Preventive, basic, and major services',
      body: `A dental plan typically covers these kinds of treatment.

Diagnostic and preventive services generally are not subject to coinsurance or to a deductible.

Basic services, such as fillings, oral surgery, periodontics, and endodontics, may require the insured to pay a deductible or 20% of the balance. The insurer would pay the other 80%.

Major services, such as inlays, crowns, dentures, and orthodontics, could have a large deductible, or the plan could pay around 50% of the services provided.

A $900 filling is a basic service on an 80/20 plan, and the deductible for the year has already been met. The insurer pays $720. The insured pays the other $180.`,
      questions: [
        question(
          'c12q05',
          'How do basic dental services and major dental services usually share the cost?',
          [
            {
              text: 'Basic services, such as fillings, oral surgery, periodontics, and endodontics, may require a deductible or 20% from the insured, with the insurer paying 80%. Major services, such as inlays, crowns, dentures, and orthodontics, may have large deductibles or pay around 50%.',
              why: 'Diagnostic and preventive services generally are not subject to coinsurance or deductibles. On a nonscheduled plan, all three categories are paid on a reasonable and customary basis and are subject to the plan’s deductibles and coinsurance.',
              correct: true,
            },
            {
              text: 'Basic services pay about 50%. Major services pay 80% with no deductible.',
              why: 'The 20% insured share, and the insurer’s 80%, belongs to basic services. The lower payment, around 50%, or a large deductible, belongs to major services.',
            },
            {
              text: 'Both are first-dollar benefits up to the amount in a schedule, with no percentage share.',
              why: 'First-dollar benefits without coinsurance or deductibles describe most scheduled plans, and diagnostic and preventive care. Basic and major services can require a deductible or coinsurance.',
            },
            {
              text: 'Major services are excluded unless workers compensation pays them first.',
              why: 'Occupational injuries covered by workers compensation are a typical exclusion. Inlays, crowns, dentures, and orthodontics are major services the dental plan may cover at a reduced level.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c12-deductible',
      title: 'Deductibles and combination plans',
      body: `Most dental plans have a deductible, such as $25, $50, or $100, which must be met each calendar year. Generally the deductible does not apply to preventive care such as cleaning and a routine examination.

A combination plan combines features of both the basic plan and the comprehensive plan. It generally covers diagnostic and preventive services on a usual and customary basis, but it still uses a fee schedule for the other dental services.`,
      questions: [
        question(
          'c12q06',
          'Which deductible is typical of a dental plan, and when does it usually not apply?',
          [
            {
              text: 'A calendar-year deductible such as $25, $50, or $100. It generally does not apply to preventive care such as cleaning and routine examinations.',
              why: 'Diagnostic and preventive services are generally not subject to coinsurance or deductibles. Basic services may still require a deductible or 20% coinsurance.',
              correct: true,
            },
            {
              text: 'A $1,500 major medical deductible that applies to cleaning and exams first.',
              why: 'The dental deductibles named in the course are $25, $50, and $100 per calendar year, and preventive care is generally exempt.',
            },
            {
              text: 'No deductible is ever used. Every service is paid at 50%.',
              why: 'Most plans have a calendar-year deductible. Around 50% is a possible payment level for major services, not for every service.',
            },
            {
              text: 'A lifetime deductible that must be met again every time dentures are replaced.',
              why: 'The deductible is met each calendar year. Replacement of dentures is generally limited to once every 5 years, which is a benefit limitation, not the deductible.',
            },
          ],
        ),
        question(
          'c12q07',
          'What does a combination dental plan do?',
          [
            {
              text: 'It covers diagnostic and preventive services on a usual and customary basis and uses a fee schedule for other dental services.',
              why: 'A combination plan uses features of both the basic plan and the comprehensive plan. A basic plan pays from a schedule. A comprehensive plan pays reasonable and customary charges subject to deductibles and coinsurance.',
              correct: true,
            },
            {
              text: 'It pays only scheduled benefits for cleaning, and reasonable and customary charges for everything else.',
              why: 'The usual-and-customary portion is the diagnostic and preventive care. The fee schedule is used for the other dental services.',
            },
            {
              text: 'It integrates dental care into major medical and uses one deductible for both.',
              why: 'An integrated plan may have a common deductible, or it may keep separate medical and dental deductibles. That is a different arrangement from a combination of basic and comprehensive dental features.',
            },
            {
              text: 'It is available only for children 18 or younger under the Affordable Care Act.',
              why: 'Pediatric dental coverage is the essential health benefit for children 18 or younger. A combination plan is a way of blending basic and comprehensive payment methods.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c12-limits',
      title: 'Exclusions and predetermination',
      body: `A dental plan typically excludes cosmetic services, unless an accident requires them. It also typically excludes replacement of lost dentures, duplicate dentures, oral hygiene instruction, an occupational injury covered by workers compensation, and a service provided by a government agency.

To help keep costs down, dental plans use more limitations than deductibles and copayments. Most plans set a calendar-year maximum and a lifetime maximum. A routine exam and a cleaning are generally limited to once every 6 months, which is typically twice a year. X-rays are covered on the plan's schedule. Replacement of dentures is generally limited to once every 5 years.

The predetermination of benefits clause, also called precertification or prior authorization, is found in most dental plans. The service is generally not mandatory. It lets the insured and the dentist know in advance what benefits will be paid.`,
      questions: [
        question(
          'c12q08',
          'Which service will a typical dental plan exclude?',
          [
            {
              text: 'Cosmetic services, unless an accident requires them, along with replacement of lost dentures, duplicate dentures, oral hygiene instruction, occupational injuries covered by workers compensation, and services provided by government agencies.',
              why: 'Diagnostic and preventive care, such as cleaning and fluoride, is covered by most plans. Fillings are a basic service. The exclusions are the items listed above.',
              correct: true,
            },
            {
              text: 'Fluoride treatments and periodic cleaning.',
              why: 'Most dental plans cover those preventive procedures. Some require periodic examinations as a condition for continued coverage.',
            },
            {
              text: 'A root canal, because endodontics is always cosmetic.',
              why: 'Endodontics is treatment of the dental pulp, such as a root canal. It is a basic service, not a listed cosmetic exclusion.',
            },
            {
              text: 'Any care the insured receives from a qualified dentist, because plans pay only government providers.',
              why: 'Services provided by government agencies are excluded. Care from a qualified practitioner can be covered, though some plans limit which providers the insured may use.',
            },
          ],
        ),
        question(
          'c12q09',
          'How often do most dental plans allow routine exams, x-rays, and replacement of dentures?',
          [
            {
              text: 'Exams and cleaning once every 6 months, which is typically twice a year. X-rays follow the plan’s schedule. Dentures are replaced once every 5 years.',
              why: 'Plans also use calendar-year maximums and lifetime maximums. These frequency limits, more than deductibles and copayments, are how the plans keep costs down.',
              correct: true,
            },
            {
              text: 'Exams every 5 years, x-rays whenever the dentist asks, and dentures every 6 months.',
              why: 'The 6-month limit is for routine exams and cleaning. X-rays follow the plan’s schedule. Denture replacement is once every 5 years.',
            },
            {
              text: 'Each service once per lifetime, with no calendar-year maximum.',
              why: 'Most plans have both a calendar-year maximum and a lifetime maximum. The frequency limits are shorter than a lifetime.',
            },
            {
              text: 'As often as the dentist recommends, because predetermination makes the limits optional.',
              why: 'Predetermination tells the insured and the dentist in advance what will be paid. It does not remove the frequency limits, and it is generally not mandatory.',
            },
          ],
        ),
        question(
          'c12q10',
          'What does predetermination of benefits do?',
          [
            {
              text: 'It lets the insured and the dentist know in advance what benefits will be paid. It is found in most dental plans and is generally not mandatory.',
              why: 'The clause is also called precertification or prior authorization. It is not the same as a probationary period, which dental plans use to limit adverse selection.',
              correct: true,
            },
            {
              text: 'It requires the insurer to approve every cleaning or the claim is denied.',
              why: 'The service is generally not mandatory. Routine exams and cleaning are a covered preventive benefit, generally once every 6 months.',
            },
            {
              text: 'It guarantees payment of the dentist’s full usual and customary charge.',
              why: 'It identifies what the plan will pay. Scheduled maximums are often below usual and customary charges, and nonscheduled plans still apply deductibles and coinsurance.',
            },
            {
              text: 'It converts the dental plan to an individual policy when employment ends.',
              why: 'Dental coverage is seldom convertible like individual health insurance, even though COBRA continuation rules regulate it.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c12-group',
      title: 'Dental coverage from an employer',
      body: `A dental plan may be written as an individual plan or as a group plan provided through the employer. An employer group dental plan generally includes preventive care for up to two visits a year. It will not cover cosmetic treatment, and it may limit a procedure such as braces or another appliance.

Dental expense may be packaged, or integrated, with other health insurance benefits such as major medical. The integrated plan may have a common deductible. Some integrated plans instead keep a separate deductible for the medical portion and the dental portion. Other dental coverage is written as a stand-alone plan.

Dental plans try to limit adverse selection with probationary periods. A person who had no prior dental coverage is likely to have a large number of untreated dental problems. Benefits for a late enrollee may be reduced for the first year. Dental coverage is regulated by the COBRA continuation rules, but it is seldom convertible the way individual health insurance is.`,
      questions: [
        question(
          'c12q11',
          'How can a dental deductible work when dental expense is integrated with major medical?',
          [
            {
              text: 'The integrated plan may use one common deductible, or it may keep separate deductibles for the medical and dental portions.',
              why: 'An employer group plan generally includes preventive care for up to two visits a year. It does not cover cosmetic treatment, and it may limit braces or other appliances. Dental expense can also be written on its own rather than packaged with medical coverage.',
              correct: true,
            },
            {
              text: 'Integration always erases the dental deductible and pays major services at 100%.',
              why: 'An integrated plan may have a common deductible. It does not remove cost sharing. Major services may still pay around 50% or carry a large deductible.',
            },
            {
              text: 'The medical deductible must be satisfied twice, and dental care is then excluded.',
              why: 'Separate deductibles keep the medical and dental portions apart. They do not exclude dental care.',
            },
            {
              text: 'Only a stand-alone pediatric plan can be integrated, and only for adults.',
              why: 'Pediatric dental coverage is for children 18 or younger, and insurers do not have to offer adult dental coverage. Integration with major medical is a separate choice and can use a common or a separate deductible.',
            },
          ],
        ),
        question(
          'c12q12',
          'How do dental plans limit adverse selection, and what happens to the coverage when the group plan ends?',
          [
            {
              text: 'They use probationary periods, because people with no prior dental coverage often have many untreated problems, and they may reduce benefits for late enrollees in the first year. COBRA regulates the coverage, but it is seldom convertible to an individual policy.',
              why: 'Employer group dental coverage generally includes up to two preventive visits a year and does not cover cosmetic treatment. Predetermination, which is generally not mandatory, is a different tool. It tells the insured and the dentist what will be paid before treatment.',
              correct: true,
            },
            {
              text: 'They guarantee issue with no waiting period and must convert to an individual dental policy.',
              why: 'Probationary periods are used because untreated problems are likely when there was no prior coverage. Conversion is seldom available, unlike individual health insurance.',
            },
            {
              text: 'They exclude preventive care for the first five years.',
              why: 'Preventive care is generally covered, including up to two visits a year on an employer plan. Five years is the usual limit on replacing dentures, not a waiting period for prevention.',
            },
            {
              text: 'They refuse COBRA continuation, so dental coverage ends on the day employment ends.',
              why: 'Dental coverage is regulated by COBRA continuation rules. What it seldom offers is conversion to an individual policy.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c12-pediatric',
      title: 'Dental coverage for children',
      body: `Pediatric dental coverage is an essential health benefit under the Affordable Care Act. It must be available as part of a health plan, or as a stand-alone plan, for a child who is 18 or younger. An insurer does not have to offer adult dental coverage.

Depending on the state, pediatric dental benefits may be offered in these ways.

• A qualified health plan that includes dental coverage.
• A stand-alone dental plan bought together with a qualified health plan.
• A contracted or bundled plan.`,
      questions: [
        question(
          'c12q13',
          'What does the Affordable Care Act require for dental coverage?',
          [
            {
              text: 'Pediatric dental coverage must be available as part of a health plan or as a stand-alone plan for children 18 or younger. Insurers do not have to offer adult dental coverage.',
              why: 'Depending on the state, the benefit may be inside a qualified health plan, a stand-alone dental plan bought with a qualified health plan, or a contracted or bundled plan.',
              correct: true,
            },
            {
              text: 'Adult and child dental coverage are both essential health benefits and must be inside every major medical policy.',
              why: 'The essential benefit is pediatric dental coverage. Insurers do not have to offer adult dental coverage.',
            },
            {
              text: 'Dental coverage is required only for late enrollees during the first year.',
              why: 'A first-year reduction for late enrollees is an adverse-selection limit. It is not the Affordable Care Act pediatric rule.',
            },
            {
              text: 'Insurers must offer adult dental coverage, and pediatric coverage is optional.',
              why: 'The essential benefit is pediatric dental coverage for children 18 or younger. Insurers do not have to offer adult dental coverage.',
            },
          ],
        ),
        question(
          'c12q14',
          'Which arrangement can be used to offer pediatric dental benefits?',
          [
            {
              text: 'A qualified health plan that includes dental coverage, a stand-alone dental plan bought with a qualified health plan, or a contracted or bundled plan, depending on the state.',
              why: 'The coverage is an essential health benefit for children 18 or younger. It has to be available either inside a health plan or as a stand-alone plan.',
              correct: true,
            },
            {
              text: 'Only a scheduled indemnity plan sold without any health plan.',
              why: 'A stand-alone dental plan is one allowed form, and it is purchased in conjunction with a qualified health plan. A scheduled indemnity plan is a payment method, not the only permitted arrangement.',
            },
            {
              text: 'Only an employer group plan with a common medical and dental deductible.',
              why: 'A common deductible is one way an integrated employer plan can be written. Pediatric benefits can also be offered through a qualified health plan or a stand-alone or bundled plan.',
            },
            {
              text: 'Only government agencies, because other dental services are excluded.',
              why: 'Services provided by government agencies are a typical dental exclusion. Pediatric benefits are offered through qualified health plans, stand-alone dental plans, or contracted or bundled plans.',
            },
          ],
        ),
        question(
          'c12q15',
          'An employer dental plan covers two cleanings a year and will not pay to replace a denture that was lost. Which course rules do those facts match?',
          [
            {
              text: 'Employer group dental coverage generally includes preventive care for up to two visits a year, and dental plans typically exclude replacement of lost dentures.',
              why: 'The plan also will not cover cosmetic treatment, and it may limit braces or other appliances. Replacement of dentures that are worn out, as opposed to lost, is generally allowed once every 5 years. Duplicate dentures are excluded.',
              correct: true,
            },
            {
              text: 'Two visits are the lifetime maximum, and lost dentures are a major service paid at 80%.',
              why: 'Two visits a year is the usual preventive benefit on an employer plan, not a lifetime maximum. Lost dentures are an exclusion. The 80% payment is the insurer’s share of basic services.',
            },
            {
              text: 'Cleanings are excluded as oral hygiene instruction, and lost dentures must be replaced every 6 months.',
              why: 'Oral hygiene instruction is excluded. Cleaning is preventive care. Six months is the usual interval for exams and cleaning. Denture replacement, when covered, is once every 5 years.',
            },
            {
              text: 'Both benefits are paid first-dollar up to the dentist’s full charge because the plan is nonscheduled.',
              why: 'A nonscheduled plan pays reasonable and customary benefits subject to deductibles and coinsurance. It does not promise the full charge, and replacement of lost dentures is a typical exclusion.',
            },
          ],
        ),
      ],
    },

  ],
}

for (const section of chapter12.sections) {
  section.questions.push(...(chapter12Extra[section.id] ?? []))
}
