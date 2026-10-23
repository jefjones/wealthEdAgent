import { question } from '../build.ts'
import type { Question } from '../types.ts'

export const chapter12Extra: Record<string, Question[]> = {
  'c12-plans': [
    question(
      'c12q16',
      'What are the two major categories of dental insurance?',
      [
        {
          text: 'Scheduled plans and nonscheduled plans.',
          why: 'Scheduled and nonscheduled are terms used with these plans. The two major categories are indemnity plans and employer group dental expense insurance.',
        },
        {
          text: 'Diagnostic and preventive services, basic services, and major services.',
          why: 'Those are the three broad benefit categories of a nonscheduled plan. The two major categories are indemnity plans and employer group dental expense insurance.',
        },
        {
          text: 'Basic plans and comprehensive plans.',
          why: 'Basic and comprehensive are other names for scheduled and nonscheduled plans. The two major categories are indemnity plans and employer group dental expense insurance.',
        },
        {
          text: 'Indemnity plans and employer group dental expense insurance.',
          why: 'There are two major categories of dental insurance: indemnity plans and employer group dental expense insurance.',
          correct: true,
        },
      ],
    ),
    question(
      'c12q17',
      'Which category of dental insurance is the focus here?',
      [
        {
          text: 'Indemnity plans.',
          why: 'Indemnity plans are the focus here. Employer group dental expense insurance is the other major category.',
          correct: true,
        },
        {
          text: 'Employer group dental expense insurance.',
          why: 'Employer group dental expense insurance is the other major category. Indemnity plans are the focus here.',
        },
        {
          text: 'Plans that limit the insured’s choices of providers.',
          why: 'Some dental plans limit the insured’s choices of providers. Indemnity plans are the focus here.',
        },
        {
          text: 'Plans that limit the benefits payable to any qualified practitioner.',
          why: 'Other plans simply limit the benefits payable to any qualified practitioner. Indemnity plans are the focus here.',
        },
      ],
    ),
    question(
      'c12q18',
      'What does the indemnity principle state?',
      [
        {
          text: 'Benefits are paid without any deductibles or copays to satisfy.',
          why: 'That is the meaning of first-dollar benefits. Indemnity states that an insured cannot profit from reimbursement for a loss.',
        },
        {
          text: 'An insured cannot profit from reimbursement for a loss.',
          why: 'Indemnity is a principle which states that an insured cannot profit from reimbursement for a loss.',
          correct: true,
        },
        {
          text: 'Benefits are paid on a reasonable and customary basis and are subject to deductibles and coinsurance.',
          why: 'That is how a nonscheduled plan pays. Indemnity states that an insured cannot profit from reimbursement for a loss.',
        },
        {
          text: 'Benefits are paid from a list of procedures up to the amount shown in the schedule.',
          why: 'That is how a scheduled plan pays. Indemnity states that an insured cannot profit from reimbursement for a loss.',
        },
      ],
    ),
    question(
      'c12q19',
      'What is another name for a nonscheduled plan?',
      [
        {
          text: 'Basic.',
          why: 'Basic is another name for a scheduled plan. A nonscheduled plan is also known as comprehensive.',
        },
        {
          text: 'Indemnity.',
          why: 'Indemnity is the reimbursement principle and the category in focus. A nonscheduled plan is also known as comprehensive.',
        },
        {
          text: 'Comprehensive.',
          why: 'A nonscheduled plan is also known as comprehensive.',
          correct: true,
        },
        {
          text: 'Scheduled.',
          why: 'Scheduled is the other plan type, also known as basic. A nonscheduled plan is also known as comprehensive.',
        },
      ],
    ),
    question(
      'c12q20',
      'On what basis does a nonscheduled plan pay benefits?',
      [
        {
          text: 'From a list of procedures up to the amount shown in the schedule.',
          why: 'Payment from a list up to the schedule describes a scheduled plan. A nonscheduled plan pays on a reasonable and customary basis and is subject to deductibles and coinsurance.',
        },
        {
          text: 'Without any deductibles or copays to satisfy.',
          why: 'That describes first-dollar benefits. A nonscheduled plan pays on a reasonable and customary basis and is subject to deductibles and coinsurance.',
        },
        {
          text: 'Only up to maximums that are often lower than the usual and customary charges of dentists.',
          why: 'Maximums often lower than the usual and customary charges of dentists describe basic or scheduled plans. A nonscheduled plan pays on a reasonable and customary basis and is subject to deductibles and coinsurance.',
        },
        {
          text: 'On a reasonable and customary basis, subject to deductibles and coinsurance.',
          why: 'With a nonscheduled plan, benefits are paid on a reasonable and customary basis and are subject to deductibles and coinsurance.',
          correct: true,
        },
      ],
    ),
    question(
      'c12q21',
      'What is another name for a scheduled plan?',
      [
        {
          text: 'Basic.',
          why: 'A scheduled plan is also known as basic. It pays benefits from a list of procedures up to the amount shown in the schedule.',
          correct: true,
        },
        {
          text: 'Comprehensive.',
          why: 'Comprehensive is another name for a nonscheduled plan. A scheduled plan is also known as basic.',
        },
        {
          text: 'Employer group dental expense insurance.',
          why: 'Employer group dental expense insurance is one of the two major categories. A scheduled plan is also known as basic.',
        },
        {
          text: 'First-dollar benefits.',
          why: 'First-dollar benefits are benefits paid without any deductibles or copays to satisfy. A scheduled plan is also known as basic.',
        },
      ],
    ),
    question(
      'c12q22',
      'How does a scheduled plan determine the benefit for a procedure?',
      [
        {
          text: 'It pays on a reasonable and customary basis, subject to deductibles and coinsurance.',
          why: 'That payment method belongs to a nonscheduled plan. A scheduled plan pays from a list of procedures up to the amount shown in the schedule.',
        },
        {
          text: 'It pays from a list of procedures up to the amount shown in the schedule.',
          why: 'A scheduled plan, also known as basic, pays benefits from a list of procedures up to the amount shown in the schedule.',
          correct: true,
        },
        {
          text: 'It divides services into diagnostic and preventive, basic, and major categories.',
          why: 'Those three categories are how nonscheduled plans usually divide services. A scheduled plan pays from a list of procedures up to the amount shown in the schedule.',
        },
        {
          text: 'It limits only the insured’s choices of providers.',
          why: 'Some dental plans limit the insured’s choices of providers. A scheduled plan pays from a list of procedures up to the amount shown in the schedule.',
        },
      ],
    ),
    question(
      'c12q23',
      'Some dental plans only limit the benefits payable to any qualified practitioner. What do other dental plans limit?',
      [
        {
          text: 'The insured’s profit from reimbursement for a loss.',
          why: 'Indemnity states that an insured cannot profit from reimbursement for a loss. Some dental plans limit the insured’s choices of providers.',
        },
        {
          text: 'Coinsurance on nonscheduled benefits.',
          why: 'Nonscheduled benefits are subject to deductibles and coinsurance. Some dental plans limit the insured’s choices of providers.',
        },
        {
          text: 'The insured’s choices of providers.',
          why: 'Some dental plans limit the insured’s choices of providers. Others simply limit the benefits payable to any qualified practitioner.',
          correct: true,
        },
        {
          text: 'The three broad benefit categories.',
          why: 'Diagnostic and preventive services, basic services, and major services are how nonscheduled services are divided. Some dental plans limit the insured’s choices of providers.',
        },
      ],
    ),
    question(
      'c12q24',
      'What do most basic or scheduled plans provide without coinsurance or deductibles?',
      [
        {
          text: 'Payment on a reasonable and customary basis that is still subject to deductibles and coinsurance.',
          why: 'Reasonable and customary payment subject to deductibles and coinsurance describes a nonscheduled plan. Most basic or scheduled plans provide first-dollar benefits without coinsurance or deductibles.',
        },
        {
          text: 'A split into diagnostic and preventive services, basic services, and major services.',
          why: 'That split is how nonscheduled services are usually divided. Most basic or scheduled plans provide first-dollar benefits without coinsurance or deductibles.',
        },
        {
          text: 'Maximum benefits set equal to the usual and customary charges of dentists.',
          why: 'Maximum benefits on these plans are often lower than the usual and customary charges of dentists. Most basic or scheduled plans provide first-dollar benefits without coinsurance or deductibles.',
        },
        {
          text: 'First-dollar benefits.',
          why: 'Most basic or scheduled plans provide first-dollar benefits without coinsurance or deductibles.',
          correct: true,
        },
      ],
    ),
    question(
      'c12q25',
      'How do maximum benefits on a basic or scheduled plan often compare with the usual and customary charges of dentists?',
      [
        {
          text: 'They are often lower, so the insured bears a portion of the cost.',
          why: 'Maximum benefits are often lower than the usual and customary charges of dentists, forcing the insured to bear a portion of the cost.',
          correct: true,
        },
        {
          text: 'They are paid on a reasonable and customary basis, subject to deductibles and coinsurance.',
          why: 'That describes nonscheduled payment. On a basic or scheduled plan, maximum benefits are often lower than the usual and customary charges of dentists, so the insured bears a portion of the cost.',
        },
        {
          text: 'They let the insured profit from reimbursement for the loss.',
          why: 'Indemnity states that an insured cannot profit from reimbursement for a loss. Lower maximums force the insured to bear a portion of the cost.',
        },
        {
          text: 'They remove any portion of the cost because the plan pays first-dollar benefits.',
          why: 'Most basic or scheduled plans provide first-dollar benefits without coinsurance or deductibles. Maximum benefits are still often lower than the usual and customary charges of dentists, so the insured bears a portion of the cost.',
        },
      ],
    ),
    question(
      'c12q26',
      'Into which three broad benefit categories are nonscheduled services usually divided?',
      [
        {
          text: 'Indemnity plans and employer group dental expense insurance.',
          why: 'Those are the two major categories of dental insurance. Nonscheduled services are usually divided into diagnostic and preventive services, basic services, and major services.',
        },
        {
          text: 'Diagnostic and preventive services, basic services, and major services.',
          why: 'Services under a nonscheduled plan are usually divided into diagnostic and preventive services, basic services, and major services.',
          correct: true,
        },
        {
          text: 'Limits on provider choice and limits on benefits payable to any qualified practitioner.',
          why: 'Those are two ways plans restrict providers or payment. Nonscheduled services are usually divided into diagnostic and preventive services, basic services, and major services.',
        },
        {
          text: 'Deductibles, coinsurance, and copays.',
          why: 'Those are cost-sharing terms used with these plans. Nonscheduled services are usually divided into diagnostic and preventive services, basic services, and major services.',
        },
      ],
    ),
  ],
  'c12-treatment': [
    question(
      'c12q27',
      'Which feature of a dental insurance plan is typically not found in a medical expense insurance plan?',
      [
        {
          text: 'Restorative care that restores functional use to natural teeth.',
          why: 'Restorative care restores functional use to natural teeth, such as with fillings or crowns. The feature typically absent from a medical expense insurance plan is diagnostic and preventive care.',
        },
        {
          text: 'Oral surgery such as extractions of teeth.',
          why: 'Oral surgery is operative treatment of the mouth, such as extractions of teeth. The feature typically absent from a medical expense insurance plan is diagnostic and preventive care.',
        },
        {
          text: 'Diagnostic and preventive care.',
          why: 'Diagnostic and preventive care is an important feature of a dental insurance plan that is typically not found in a medical expense insurance plan.',
          correct: true,
        },
        {
          text: 'Orthodontics with braces or appliances.',
          why: 'Orthodontics treats natural teeth to prevent or correct dental anomalies with braces or appliances. The feature typically absent from a medical expense insurance plan is diagnostic and preventive care.',
        },
      ],
    ),
    question(
      'c12q28',
      'Which routine preventive procedures do most dental plans cover?',
      [
        {
          text: 'A root canal of the dental pulp.',
          why: 'A root canal is an example of endodontics, treatment of the dental pulp within natural teeth. Most dental plans cover periodic teeth cleaning and fluoride treatments.',
        },
        {
          text: 'Bridgework or dentures for missing teeth.',
          why: 'Bridgework and dentures are artificial devices used in prosthodontics to replace missing teeth. Most dental plans cover periodic teeth cleaning and fluoride treatments.',
        },
        {
          text: 'Extractions and related surgical treatment.',
          why: 'Extractions and related surgical treatment are oral surgery. Most dental plans cover periodic teeth cleaning and fluoride treatments.',
        },
        {
          text: 'Periodic teeth cleaning and fluoride treatments.',
          why: 'Most dental plans cover routine preventive procedures such as periodic teeth cleaning and fluoride treatments.',
          correct: true,
        },
      ],
    ),
    question(
      'c12q29',
      'What do an increasing number of dental plans require as a condition for continued coverage?',
      [
        {
          text: 'Periodic examinations.',
          why: 'An increasing number of dental plans require periodic examinations as a condition for continued coverage.',
          correct: true,
        },
        {
          text: 'Braces or appliances.',
          why: 'Braces or appliances are orthodontic treatment of natural teeth. An increasing number of dental plans require periodic examinations as a condition for continued coverage.',
        },
        {
          text: 'Replacement of missing teeth.',
          why: 'Replacement of missing teeth is prosthodontics. An increasing number of dental plans require periodic examinations as a condition for continued coverage.',
        },
        {
          text: 'Treatment for gum disease.',
          why: 'Treatment for gum disease is periodontics. An increasing number of dental plans require periodic examinations as a condition for continued coverage.',
        },
      ],
    ),
    question(
      'c12q30',
      'What does restorative care do?',
      [
        {
          text: 'It provides operative treatment of the mouth, such as extractions.',
          why: 'Operative treatment of the mouth, such as extractions, is oral surgery. Restorative care restores functional use to natural teeth, such as with fillings or crowns.',
        },
        {
          text: 'It restores functional use to natural teeth, such as with fillings or crowns.',
          why: 'Restorative care means treatments that restore functional use to natural teeth, such as fillings or crowns.',
          correct: true,
        },
        {
          text: 'It treats the dental pulp within natural teeth, such as with a root canal.',
          why: 'Treatment of the dental pulp, such as a root canal, is endodontics. Restorative care restores functional use to natural teeth, such as with fillings or crowns.',
        },
        {
          text: 'It treats the surrounding and supporting tissue of the teeth, such as for gum disease.',
          why: 'Treatment of the surrounding and supporting tissue, such as for gum disease, is periodontics. Restorative care restores functional use to natural teeth, such as with fillings or crowns.',
        },
      ],
    ),
    question(
      'c12q31',
      'Which category is operative treatment of the mouth, such as extractions of teeth and related surgical treatment?',
      [
        {
          text: 'Endodontics.',
          why: 'Endodontics is treatment of the dental pulp within natural teeth, such as a root canal. Operative treatment of the mouth, such as extractions, is oral surgery.',
        },
        {
          text: 'Periodontics.',
          why: 'Periodontics is treatment of the surrounding and supporting tissue of the teeth, such as treatment for gum disease. Operative treatment of the mouth, such as extractions, is oral surgery.',
        },
        {
          text: 'Oral surgery.',
          why: 'Oral surgery is operative treatment of the mouth, such as extractions of teeth and related surgical treatment.',
          correct: true,
        },
        {
          text: 'Prosthodontics.',
          why: 'Prosthodontics is replacement of missing teeth with artificial devices like bridgework or dentures. Operative treatment of the mouth, such as extractions, is oral surgery.',
        },
      ],
    ),
    question(
      'c12q32',
      'A root canal is treatment of which part of a natural tooth?',
      [
        {
          text: 'The surrounding and supporting tissue of the teeth.',
          why: 'The surrounding and supporting tissue is the focus of periodontics, such as treatment for gum disease. A root canal treats the dental pulp within natural teeth.',
        },
        {
          text: 'A missing tooth that is replaced by an artificial device.',
          why: 'Replacement of missing teeth with artificial devices is prosthodontics. A root canal treats the dental pulp within natural teeth.',
        },
        {
          text: 'The alignment corrected by braces or appliances.',
          why: 'Braces or appliances are used in orthodontics to prevent or correct dental anomalies. A root canal treats the dental pulp within natural teeth.',
        },
        {
          text: 'The dental pulp within natural teeth.',
          why: 'Endodontics is treatment of the dental pulp within natural teeth, such as a root canal.',
          correct: true,
        },
      ],
    ),
    question(
      'c12q33',
      'Treatment for gum disease is directed at which tissue?',
      [
        {
          text: 'The surrounding and supporting tissue of the teeth.',
          why: 'Periodontics is treatment of the surrounding and supporting tissue of the teeth, such as treatment for gum disease.',
          correct: true,
        },
        {
          text: 'The dental pulp within natural teeth.',
          why: 'The dental pulp within natural teeth is treated by endodontics, such as a root canal. Gum disease treatment is directed at the surrounding and supporting tissue of the teeth.',
        },
        {
          text: 'Natural teeth being moved to correct dental anomalies.',
          why: 'Moving natural teeth to prevent or correct dental anomalies is orthodontics. Gum disease treatment is directed at the surrounding and supporting tissue of the teeth.',
        },
        {
          text: 'Missing teeth replaced by bridgework or dentures.',
          why: 'Bridgework or dentures replace missing teeth under prosthodontics. Gum disease treatment is directed at the surrounding and supporting tissue of the teeth.',
        },
      ],
    ),
    question(
      'c12q34',
      'What is the goal of orthodontic treatment of natural teeth?',
      [
        {
          text: 'To replace missing teeth with bridgework or dentures.',
          why: 'Replacing missing teeth with bridgework or dentures is prosthodontics. Orthodontics prevents or corrects dental anomalies of natural teeth with braces or appliances.',
        },
        {
          text: 'To prevent or correct dental anomalies with braces or appliances.',
          why: 'Orthodontics is treatment of natural teeth to prevent or correct dental anomalies with braces or appliances.',
          correct: true,
        },
        {
          text: 'To restore functional use with fillings or crowns.',
          why: 'Fillings or crowns are restorative care that restores functional use to natural teeth. Orthodontics prevents or corrects dental anomalies with braces or appliances.',
        },
        {
          text: 'To extract teeth and provide related surgical treatment.',
          why: 'Extractions and related surgical treatment are oral surgery. Orthodontics prevents or corrects dental anomalies with braces or appliances.',
        },
      ],
    ),
    question(
      'c12q35',
      'What do artificial devices such as bridgework and dentures do?',
      [
        {
          text: 'They treat the dental pulp within natural teeth.',
          why: 'Treatment of the dental pulp within natural teeth, such as a root canal, is endodontics. Bridgework and dentures replace missing teeth.',
        },
        {
          text: 'They prevent or correct dental anomalies.',
          why: 'Preventing or correcting dental anomalies with braces or appliances is orthodontics. Bridgework and dentures replace missing teeth.',
        },
        {
          text: 'They replace missing teeth.',
          why: 'Prosthodontics is replacement of missing teeth with artificial devices like bridgework or dentures.',
          correct: true,
        },
        {
          text: 'They provide periodic cleaning and fluoride treatments.',
          why: 'Periodic cleaning and fluoride treatments are routine preventive care. Bridgework and dentures replace missing teeth.',
        },
      ],
    ),
  ],
  'c12-benefits': [
    question(
      'c12q36',
      'How are diagnostic and preventive services generally treated for coinsurance and deductibles?',
      [
        {
          text: 'The insured pays 20% of the balance and the insurer pays the other 80%.',
          why: 'That share is described for basic services. Diagnostic and preventive services generally are not subject to coinsurance or deductibles.',
        },
        {
          text: 'They could have large deductibles or pay around 50%.',
          why: 'Large deductibles or payment around 50% is described for major services. Diagnostic and preventive services generally are not subject to coinsurance or deductibles.',
        },
        {
          text: 'They are paid only when the service is an inlay, crown, denture, or orthodontic treatment.',
          why: 'Inlays, crowns, dentures, and orthodontics are examples of major services. Diagnostic and preventive services generally are not subject to coinsurance or deductibles.',
        },
        {
          text: 'They generally are not subject to coinsurance or deductibles.',
          why: 'Diagnostic and preventive services generally are not subject to coinsurance or deductibles.',
          correct: true,
        },
      ],
    ),
    question(
      'c12q37',
      'Which treatments are the examples of basic services?',
      [
        {
          text: 'Fillings, oral surgery, periodontics, and endodontics.',
          why: 'Basic services, such as fillings, oral surgery, periodontics, and endodontics, may require the insured to pay a deductible or 20% of the balance.',
          correct: true,
        },
        {
          text: 'Inlays, crowns, dentures, and orthodontics.',
          why: 'Inlays, crowns, dentures, and orthodontics are examples of major services. Basic services include fillings, oral surgery, periodontics, and endodontics.',
        },
        {
          text: 'Diagnostic and preventive services only.',
          why: 'Diagnostic and preventive services are their own type and generally are not subject to coinsurance or deductibles. Basic services include fillings, oral surgery, periodontics, and endodontics.',
        },
        {
          text: 'Services that pay around 50% after a large deductible.',
          why: 'Payment around 50%, or large deductibles, is described for major services. Basic services include fillings, oral surgery, periodontics, and endodontics.',
        },
      ],
    ),
    question(
      'c12q38',
      'If the insured pays 20% of the balance for a basic service, what does the insurer pay?',
      [
        {
          text: 'Around 50% for that service.',
          why: 'Around 50% is a share described for major services. On a basic service, if the insured pays 20% of the balance, the insurer pays the other 80%.',
        },
        {
          text: 'The other 80%.',
          why: 'For basic services, the insured may pay a deductible or 20% of the balance. The insurer would pay the other 80%.',
          correct: true,
        },
        {
          text: 'No percentage, because basic services are free of coinsurance and deductibles.',
          why: 'Diagnostic and preventive services generally are not subject to coinsurance or deductibles. When the insured pays 20% of the balance for a basic service, the insurer pays the other 80%.',
        },
        {
          text: 'The same 20% of the balance.',
          why: '20% is the share the insured may pay. The insurer pays the other 80%.',
        },
      ],
    ),
    question(
      'c12q39',
      'What cost sharing could apply to major services such as inlays, crowns, dentures, and orthodontics?',
      [
        {
          text: 'No coinsurance and no deductible.',
          why: 'Diagnostic and preventive services generally are not subject to coinsurance or deductibles. Major services could have large deductibles or pay around 50% for services provided.',
        },
        {
          text: 'The insured pays 20% and the insurer pays the other 80%.',
          why: 'That split is described for basic services. Major services could have large deductibles or pay around 50% for services provided.',
        },
        {
          text: 'Large deductibles or payment around 50% for services provided.',
          why: 'Major services, such as inlays, crowns, dentures, and orthodontics, could either have large deductibles or pay around 50% for services provided.',
          correct: true,
        },
        {
          text: 'The insured pays 80% and the insurer pays 20%.',
          why: 'On basic services the insured may pay 20% and the insurer pays the other 80%. Major services could have large deductibles or pay around 50% for services provided.',
        },
      ],
    ),
  ],
  'c12-deductible': [
    question(
      'c12q40',
      'How often must a dental deductible such as $25, $50, or $100 be met?',
      [
        {
          text: 'Only when a combination plan applies a fee schedule to other dental services.',
          why: 'A fee schedule is what a combination plan uses for other dental services. A deductible such as $25, $50, or $100 must be met each calendar year.',
        },
        {
          text: 'It is met each time cleaning or a routine examination is provided.',
          why: 'The deductible generally does not apply to preventive care such as cleaning and routine examinations. It must be met each calendar year.',
        },
        {
          text: 'It is met only for diagnostic and preventive services paid on a usual and customary basis.',
          why: 'Combination plans cover diagnostic and preventive services on a usual and customary basis. The deductible, such as $25, $50, or $100, must be met each calendar year.',
        },
        {
          text: 'Each calendar year.',
          why: 'Most dental plans have a deductible, such as $25, $50, or $100, which must be met each calendar year.',
          correct: true,
        },
      ],
    ),
    question(
      'c12q41',
      'Which care is given as the example of services the deductible generally does not apply to?',
      [
        {
          text: 'Preventive care such as cleaning and routine examinations.',
          why: 'Generally the deductible does not apply to preventive care such as cleaning and routine examinations.',
          correct: true,
        },
        {
          text: 'Other dental services that are paid from a fee schedule.',
          why: 'A combination plan still uses a fee schedule for other dental services. The deductible generally does not apply to preventive care such as cleaning and routine examinations.',
        },
        {
          text: 'Every service in both the basic and comprehensive portions.',
          why: 'Combination plans combine features of both the basic and comprehensive plans. The deductible generally does not apply to preventive care such as cleaning and routine examinations.',
        },
        {
          text: 'Diagnostic and preventive services only when a fee schedule is used for them.',
          why: 'Combination plans generally cover diagnostic and preventive services on a usual and customary basis. The deductible generally does not apply to preventive care such as cleaning and routine examinations.',
        },
      ],
    ),
    question(
      'c12q42',
      'Which features do combination plans combine?',
      [
        {
          text: 'A $25, $50, or $100 calendar-year deductible and usual and customary payment for every service.',
          why: 'A deductible such as $25, $50, or $100 must be met each calendar year. Combination plans combine features of both the basic and comprehensive plans.',
        },
        {
          text: 'Features of both the basic and comprehensive plans.',
          why: 'Combination plans combine features of both the basic and comprehensive plans.',
          correct: true,
        },
        {
          text: 'A fee schedule for diagnostic and preventive services and usual and customary payment for every other service.',
          why: 'Combination plans generally cover diagnostic and preventive services on a usual and customary basis, and they still use a fee schedule for other dental services.',
        },
        {
          text: 'Only the comprehensive plan, with no basic-plan features.',
          why: 'Combination plans combine features of both the basic and comprehensive plans.',
        },
      ],
    ),
    question(
      'c12q43',
      'What do combination plans still use for dental services other than diagnostic and preventive services?',
      [
        {
          text: 'A usual and customary basis for those other services.',
          why: 'Usual and customary payment is how combination plans generally cover diagnostic and preventive services. They still use a fee schedule for other dental services.',
        },
        {
          text: 'The same deductible waiver that applies to cleaning and routine examinations.',
          why: 'The deductible generally does not apply to preventive care such as cleaning and routine examinations. Other dental services still use a fee schedule.',
        },
        {
          text: 'A fee schedule.',
          why: 'Combination plans generally cover diagnostic and preventive services on a usual and customary basis, but still use a fee schedule for other dental services.',
          correct: true,
        },
        {
          text: 'The $25, $50, or $100 calendar-year deductible in place of any fee schedule.',
          why: 'That dollar deductible must be met each calendar year. Combination plans still use a fee schedule for dental services other than diagnostic and preventive services.',
        },
      ],
    ),
  ],
  'c12-limits': [
    question(
      'c12q44',
      'When may cosmetic services that a dental plan typically excludes still be covered?',
      [
        {
          text: 'When the service is oral hygiene instruction.',
          why: 'Oral hygiene instruction is one of the services dental plans typically exclude. Cosmetic services may be covered when they are required by an accident.',
        },
        {
          text: 'When duplicate dentures are provided.',
          why: 'Duplicate dentures are typically excluded. Cosmetic services may be covered when they are required by an accident.',
        },
        {
          text: 'When a government agency provides the service.',
          why: 'Services provided by government agencies are typically excluded. Cosmetic services may be covered when they are required by an accident.',
        },
        {
          text: 'When they are required by an accident.',
          why: 'Dental plans typically exclude cosmetic services, unless required by an accident.',
          correct: true,
        },
      ],
    ),
    question(
      'c12q45',
      'Why do dental plans provide more limitations than deductibles and copayments?',
      [
        {
          text: 'To help keep costs down.',
          why: 'To help keep costs down, dental plans provide more limitations than deductibles and copayments.',
          correct: true,
        },
        {
          text: 'To make predetermination of benefits mandatory.',
          why: 'Predetermination, also called precertification or prior authorization, is generally not mandatory. The extra limitations help keep costs down.',
        },
        {
          text: 'To require the plan to pay for replacement of lost dentures.',
          why: 'Replacement of lost dentures is typically excluded. The extra limitations help keep costs down.',
        },
        {
          text: 'To cover occupational injuries that workers compensation covers.',
          why: 'Occupational injuries covered by workers compensation are typically excluded. The extra limitations help keep costs down.',
        },
      ],
    ),
    question(
      'c12q46',
      'Which maximum benefits do most dental plans provide?',
      [
        {
          text: 'Deductibles and copayments with no maximum benefit.',
          why: 'Dental plans provide more limitations than deductibles and copayments. Most plans provide calendar-year maximum benefits and lifetime maximum benefits.',
        },
        {
          text: 'Calendar-year maximum benefits and lifetime maximum benefits.',
          why: 'Most plans provide for calendar-year maximum benefits and lifetime maximum benefits.',
          correct: true,
        },
        {
          text: 'A maximum that applies only when an accident requires a cosmetic service.',
          why: 'An accident can allow an otherwise excluded cosmetic service. Most plans provide calendar-year maximum benefits and lifetime maximum benefits.',
        },
        {
          text: 'Only a lifetime maximum, with no calendar-year maximum.',
          why: 'Most plans provide calendar-year maximum benefits and lifetime maximum benefits.',
        },
      ],
    ),
    question(
      'c12q47',
      'What are the other names for the predetermination of benefits clause?',
      [
        {
          text: 'Calendar-year maximum and lifetime maximum.',
          why: 'Calendar-year maximum benefits and lifetime maximum benefits are plan limits. Predetermination of benefits is also called precertification or prior authorization.',
        },
        {
          text: 'Deductible and copayment.',
          why: 'Deductibles and copayments are cost shares that dental limitations go beyond. Predetermination of benefits is also called precertification or prior authorization.',
        },
        {
          text: 'Precertification or prior authorization.',
          why: 'The predetermination of benefits clause is also called precertification or prior authorization.',
          correct: true,
        },
        {
          text: 'Lost-denture exclusion and duplicate-denture exclusion.',
          why: 'Replacement of lost dentures and duplicate dentures are typical exclusions. Predetermination of benefits is also called precertification or prior authorization.',
        },
      ],
    ),
    question(
      'c12q48',
      'How mandatory is predetermination of benefits in most dental plans?',
      [
        {
          text: 'It is mandatory before any benefit is paid.',
          why: 'The clause lets the insured and the dentist know in advance what benefits will be paid. The service is generally not mandatory.',
        },
        {
          text: 'It is mandatory only for services provided by government agencies.',
          why: 'Services provided by government agencies are typically excluded. Predetermination is generally not mandatory.',
        },
        {
          text: 'It replaces calendar-year maximum benefits and lifetime maximum benefits.',
          why: 'Most plans provide calendar-year maximum benefits and lifetime maximum benefits. Predetermination is a separate clause and is generally not mandatory.',
        },
        {
          text: 'It is generally not mandatory.',
          why: 'The predetermination service, although generally not mandatory, lets the insured and the dentist know in advance what benefits will be paid.',
          correct: true,
        },
      ],
    ),
    question(
      'c12q49',
      'Who does predetermination let know in advance what benefits will be paid?',
      [
        {
          text: 'The insured and the dentist.',
          why: 'Predetermination lets the insured and the dentist know in advance what benefits will be paid. The service is generally not mandatory.',
          correct: true,
        },
        {
          text: 'A government agency that provides the service.',
          why: 'Services provided by government agencies are typically excluded. Predetermination lets the insured and the dentist know in advance what benefits will be paid.',
        },
        {
          text: 'The workers compensation coverage for an occupational injury.',
          why: 'Occupational injuries covered by workers compensation are typically excluded. Predetermination lets the insured and the dentist know in advance what benefits will be paid.',
        },
        {
          text: 'Only the insured, and not the dentist.',
          why: 'Predetermination lets the insured and the dentist know in advance what benefits will be paid.',
        },
      ],
    ),
    question(
      'c12q50',
      'Which list matches services a typical dental plan excludes along with cosmetic services?',
      [
        {
          text: 'Calendar-year maximum benefits and lifetime maximum benefits.',
          why: 'Those are maximum benefits most plans provide. The exclusion list adds replacement of lost dentures, duplicate dentures, oral hygiene instruction, occupational injuries covered by workers compensation, and services provided by government agencies.',
        },
        {
          text: 'Replacement of lost dentures, duplicate dentures, oral hygiene instruction, occupational injuries covered by workers compensation, and services provided by government agencies.',
          why: 'Dental plans typically exclude cosmetic services unless required by an accident, plus replacement of lost dentures, duplicate dentures, oral hygiene instruction, occupational injuries covered by workers compensation, and services provided by government agencies.',
          correct: true,
        },
        {
          text: 'Precertification or prior authorization.',
          why: 'Precertification or prior authorization is another name for predetermination of benefits. Typical exclusions include replacement of lost dentures, duplicate dentures, oral hygiene instruction, occupational injuries covered by workers compensation, and services provided by government agencies.',
        },
        {
          text: 'Routine exams and cleaning once every 6 months, full-mouth x-rays once every 2 to 3 years, and replacement of dentures once every 5 years.',
          why: 'Those are frequency limitations. Routine exams and cleaning are generally limited to once every 6 months, full-mouth x-rays to once every 2 to 3 years, and replacement of dentures to once every 5 years.',
        },
      ],
    ),
  ],
  'c12-group': [
    question(
      'c12q51',
      'In what forms are dental plans written?',
      [
        {
          text: 'Only as stand-alone plans.',
          why: 'Other dental coverage is written as a stand-alone plan. Dental plans are written as individual plans or as group plans provided through the employer.',
        },
        {
          text: 'Only as coverage integrated with major medical.',
          why: 'Dental expense may be packaged, or integrated, with benefits such as major medical. Dental plans are written as individual plans or as group plans provided through the employer.',
        },
        {
          text: 'As individual plans or as group plans provided through the employer.',
          why: 'Dental plans are written as individual plans or as group plans provided through the employer.',
          correct: true,
        },
        {
          text: 'Only as reduced benefits for late enrollees during the first year.',
          why: 'Benefits for late enrollees may be reduced for the first year. Dental plans are written as individual plans or as group plans provided through the employer.',
        },
      ],
    ),
    question(
      'c12q52',
      'What preventive care does an employer group dental plan generally include?',
      [
        {
          text: 'Cosmetic treatment at every visit.',
          why: 'An employer group dental plan will not cover cosmetic treatment. It generally includes preventive care for up to two visits per year.',
        },
        {
          text: 'Braces or other appliances with no limit.',
          why: 'The plan may limit procedures such as braces or other appliances. It generally includes preventive care for up to two visits per year.',
        },
        {
          text: 'A common deductible shared with major medical.',
          why: 'An integrated plan may have a common deductible. An employer group dental plan generally includes preventive care for up to two visits per year.',
        },
        {
          text: 'Preventive care for up to two visits per year.',
          why: 'An employer group dental plan generally includes preventive care for up to two visits per year.',
          correct: true,
        },
      ],
    ),
    question(
      'c12q53',
      'What will an employer group dental plan not cover, and what procedures may it limit?',
      [
        {
          text: 'It will not cover cosmetic treatment, and it may limit procedures such as braces or other appliances.',
          why: 'An employer group dental plan will not cover cosmetic treatment, and it may limit procedures such as braces or other appliances.',
          correct: true,
        },
        {
          text: 'It will not cover preventive care for up to two visits per year, and it may limit individual plans.',
          why: 'The plan generally includes preventive care for up to two visits per year. It will not cover cosmetic treatment, and it may limit procedures such as braces or other appliances.',
        },
        {
          text: 'It covers cosmetic treatment, and it will not limit braces or other appliances.',
          why: 'An employer group dental plan will not cover cosmetic treatment, and it may limit procedures such as braces or other appliances.',
        },
        {
          text: 'It will not cover a common deductible, and it may limit separate medical and dental deductibles.',
          why: 'An integrated plan may have a common deductible, and some keep separate deductibles. An employer group plan will not cover cosmetic treatment, and it may limit braces or other appliances.',
        },
      ],
    ),
    question(
      'c12q54',
      'With which other benefits may dental expense be packaged, or integrated?',
      [
        {
          text: 'Probationary periods used to minimize adverse selection.',
          why: 'Dental plans try to minimize adverse selection with probationary periods. Dental expense may be packaged, or integrated, with other health insurance benefits such as major medical.',
        },
        {
          text: 'Other health insurance benefits such as major medical.',
          why: 'Dental expense may be packaged, or integrated, with other health insurance benefits such as major medical.',
          correct: true,
        },
        {
          text: 'Conversion on the same terms as individual health insurance.',
          why: 'Dental coverage is seldom convertible like individual health insurance. Dental expense may be packaged, or integrated, with other health insurance benefits such as major medical.',
        },
        {
          text: 'Cosmetic treatment and braces.',
          why: 'An employer group dental plan will not cover cosmetic treatment, and it may limit braces or other appliances. Integration is with other health insurance benefits such as major medical.',
        },
      ],
    ),
    question(
      'c12q55',
      'Which deductible arrangements are described for an integrated plan?',
      [
        {
          text: 'Reduced benefits for late enrollees for the first year.',
          why: 'Benefits for late enrollees may be reduced for the first year. An integrated plan may have a common deductible, or separate deductibles for the medical and dental portions of the contract.',
        },
        {
          text: 'A stand-alone plan in place of any deductible.',
          why: 'Other dental coverage is written as a stand-alone plan. An integrated plan may have a common deductible, or separate deductibles for the medical and dental portions of the contract.',
        },
        {
          text: 'A common deductible, or separate deductibles for the medical and dental portions of the contract.',
          why: 'The integrated plan may have a common deductible. Some integrated plans instead keep separate deductibles for the medical and dental portions of the contract.',
          correct: true,
        },
        {
          text: 'Probationary periods used to minimize adverse selection.',
          why: 'Dental plans try to minimize adverse selection with probationary periods. An integrated plan may have a common deductible, or separate deductibles for the medical and dental portions of the contract.',
        },
      ],
    ),
    question(
      'c12q56',
      'How is other dental coverage written when it is not packaged with other health insurance?',
      [
        {
          text: 'As a common deductible inside major medical.',
          why: 'A common deductible is one arrangement for an integrated plan. Other dental coverage is written as a stand-alone plan.',
        },
        {
          text: 'As benefits reduced for late enrollees for the first year.',
          why: 'Benefits for late enrollees may be reduced for the first year. Other dental coverage is written as a stand-alone plan.',
        },
        {
          text: 'As cosmetic treatment limited to braces or other appliances.',
          why: 'An employer group plan will not cover cosmetic treatment, and it may limit braces or other appliances. Other dental coverage is written as a stand-alone plan.',
        },
        {
          text: 'As a stand-alone plan.',
          why: 'Other dental coverage is written as a stand-alone plan.',
          correct: true,
        },
      ],
    ),
    question(
      'c12q57',
      'What may happen to benefits for late enrollees?',
      [
        {
          text: 'They may be reduced for the first year.',
          why: 'Benefits for late enrollees may be reduced for the first year. Dental plans try to minimize adverse selection with probationary periods, and insureds who had no prior dental coverage are likely to have a large number of untreated dental problems.',
          correct: true,
        },
        {
          text: 'Probationary periods are removed and full benefits are paid.',
          why: 'Dental plans try to minimize adverse selection with probationary periods. Benefits for late enrollees may be reduced for the first year.',
        },
        {
          text: 'They must include cosmetic treatment and unlimited braces.',
          why: 'An employer group dental plan will not cover cosmetic treatment, and it may limit braces or other appliances. Benefits for late enrollees may be reduced for the first year.',
        },
        {
          text: 'They become convertible in the same way as individual health insurance.',
          why: 'Dental coverage is seldom convertible like individual health insurance. Benefits for late enrollees may be reduced for the first year.',
        },
      ],
    ),
    question(
      'c12q58',
      'Dental coverage is regulated by COBRA continuation rules. How convertible is that coverage?',
      [
        {
          text: 'It is convertible in the same way as individual health insurance.',
          why: 'Individual health insurance is the comparison for convertibility. Dental coverage is seldom convertible like individual health insurance, even though COBRA continuation rules regulate it.',
        },
        {
          text: 'It is seldom convertible like individual health insurance.',
          why: 'Even though dental coverage is regulated by COBRA continuation rules, it is seldom convertible like individual health insurance.',
          correct: true,
        },
        {
          text: 'It converts by keeping late-enrollee benefits whole for the first year.',
          why: 'Benefits for late enrollees may be reduced for the first year. Dental coverage is seldom convertible like individual health insurance.',
        },
        {
          text: 'It converts into covered cosmetic treatment and braces without a limit.',
          why: 'An employer group dental plan will not cover cosmetic treatment, and it may limit braces or other appliances. Dental coverage is seldom convertible like individual health insurance.',
        },
      ],
    ),
  ],
  'c12-pediatric': [
    question(
      'c12q59',
      'What is pediatric dental coverage under the Affordable Care Act?',
      [
        {
          text: 'Adult dental coverage that insurers must offer.',
          why: 'Insurers do not have to offer adult dental coverage. Pediatric dental coverage is an essential health benefit under the Affordable Care Act.',
        },
        {
          text: 'A benefit that can be offered only as a contracted or bundled plan.',
          why: 'A contracted or bundled plan is one arrangement, and the state may allow others. Pediatric dental coverage is an essential health benefit under the Affordable Care Act.',
        },
        {
          text: 'An essential health benefit.',
          why: 'Pediatric dental coverage is an essential health benefit under the Affordable Care Act.',
          correct: true,
        },
        {
          text: 'Coverage limited to children older than 18.',
          why: 'The coverage must be available for children 18 or younger. Pediatric dental coverage is an essential health benefit under the Affordable Care Act.',
        },
      ],
    ),
    question(
      'c12q60',
      'How must pediatric dental coverage be available for children 18 or younger?',
      [
        {
          text: 'Only as adult dental coverage inside a health plan.',
          why: 'Insurers do not have to offer adult dental coverage. Pediatric dental coverage must be available as part of a health plan or as a stand-alone plan for children 18 or younger.',
        },
        {
          text: 'Only as a contracted or bundled plan.',
          why: 'A contracted or bundled plan is one way benefits may be offered depending on the state. Pediatric dental coverage must be available as part of a health plan or as a stand-alone plan for children 18 or younger.',
        },
        {
          text: 'Only through a qualified health plan that does not include dental coverage.',
          why: 'One arrangement is a qualified health plan that includes dental coverage. Pediatric dental coverage must be available as part of a health plan or as a stand-alone plan for children 18 or younger.',
        },
        {
          text: 'As part of a health plan or as a stand-alone plan.',
          why: 'Pediatric dental coverage must be available as part of a health plan or as a stand-alone plan for children 18 or younger.',
          correct: true,
        },
      ],
    ),
    question(
      'c12q61',
      'What dental coverage do insurers not have to offer?',
      [
        {
          text: 'Adult dental coverage.',
          why: 'Insurers do not have to offer adult dental coverage. Pediatric dental coverage still must be available for children 18 or younger.',
          correct: true,
        },
        {
          text: 'Pediatric dental coverage for children 18 or younger.',
          why: 'Pediatric dental coverage must be available as part of a health plan or as a stand-alone plan for children 18 or younger. The coverage insurers do not have to offer is adult dental coverage.',
        },
        {
          text: 'An essential health benefit under the Affordable Care Act.',
          why: 'Pediatric dental coverage is an essential health benefit under the Affordable Care Act. Insurers do not have to offer adult dental coverage.',
        },
        {
          text: 'A qualified health plan that includes dental coverage.',
          why: 'A qualified health plan that includes dental coverage is one way pediatric benefits may be offered. Insurers do not have to offer adult dental coverage.',
        },
      ],
    ),
    question(
      'c12q62',
      'Depending on the state, through which arrangements may pediatric dental benefits be offered?',
      [
        {
          text: 'Only as adult dental coverage added to a health plan.',
          why: 'Insurers do not have to offer adult dental coverage. Depending on the state, pediatric benefits may be offered through a qualified health plan that includes dental coverage, a stand-alone dental plan purchased in conjunction with a qualified health plan, or a contracted or bundled plan.',
        },
        {
          text: 'A qualified health plan that includes dental coverage, a stand-alone dental plan purchased in conjunction with a qualified health plan, or a contracted or bundled plan.',
          why: 'Depending on the state, pediatric dental benefits may be offered through a qualified health plan that includes dental coverage, a stand-alone dental plan purchased in conjunction with a qualified health plan, or a contracted or bundled plan.',
          correct: true,
        },
        {
          text: 'Only a stand-alone dental plan that is not purchased with a qualified health plan.',
          why: 'A stand-alone dental plan in this list is purchased in conjunction with a qualified health plan, and it is one of three arrangements. The state may also allow a qualified health plan that includes dental coverage or a contracted or bundled plan.',
        },
        {
          text: 'Only a qualified health plan that includes dental coverage.',
          why: 'A qualified health plan that includes dental coverage is one arrangement. Depending on the state, a stand-alone dental plan purchased in conjunction with a qualified health plan, or a contracted or bundled plan, may also be used.',
        },
      ],
    ),
  ],
}
