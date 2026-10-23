import { question } from './build.ts'
import type { Chapter } from './types.ts'
import { chapter15Extra } from './extra/chapter15.ts'

/**
 * Wording follows the course OCR in content/source/chapter-15-ocr.txt.
 * The source pages have no practice questions. Questions are written from that text,
 * four options each, with a reason for the right answer and for each wrong one.
 */
export const chapter15: Chapter = {
  id: 'ch-utah',
  number: 15,
  title: 'Utah Insurance Rules',
  summary:
    'How Utah licenses producers, what the Commissioner may do, and which marketing, claims, and federal rules apply in this state.',
  sections: [
    {
      id: 'c15-commissioner',
      title: 'The Insurance Commissioner',
      body: `The Insurance Commissioner is the chief officer of the Department of Insurance and exercises the powers given to the Department. The governor appoints the Commissioner with the consent of the Senate. If the Commissioner dies, resigns, or is removed while the Legislature is not in session, a successor may serve as acting Commissioner until the Senate can consent. The governor may also remove the Commissioner. When the office is vacant, or the Commissioner cannot perform the duties, the governor fills the position.

The Commissioner regulates the Department’s internal affairs, enforces the insurance laws, and may make reasonable rules to carry out the Insurance Code. The Commissioner issues, suspends, revokes, or denies licenses and certificates of authority, examines insurers, issues orders and notices, and reviews and approves policy forms and rates. The Commissioner does not set premium rates or establish fines and penalties. Those are defined by state law.

Examinations of insurers’ books and records are meant to keep companies solvent and in compliance with laws on licensing, policy forms, rates, claims, and market conduct. The Commissioner may examine an authorized insurer at any time, and must examine domestic and foreign insurers at least once every 5 years. For a foreign insurer, the Commissioner may accept an examination report from another state’s insurance department, another Utah government agency, the federal government, or another state. The company being examined pays the cost.

Licensees must keep separate records of every transaction, organized and available for inspection on reasonable notice. The records include each insurance contract procured or issued through the licensee, with the names of the insurers and insureds, the premium, the commissions or other compensation, and the subject of the insurance. They also include the names of other producers or brokers from whom business is accepted and of persons to whom commissions or allowances are promised or paid, and a record of consumer complaints forwarded by an insurance regulator. The records must be available during all business hours for at least the current calendar year plus 3 years.`,
      questions: [
        question(
          'c15q07',
          'Who appoints the Commissioner, and what does the Commissioner not do?',
          [
            {
              text: 'The governor appoints the Commissioner with the Senate’s consent. The Commissioner does not set premium rates or establish fines and penalties. Those are defined by state law.',
              why: 'If the Legislature is not in session, a successor may serve as acting Commissioner until the Senate can consent. The governor may remove the Commissioner and fills the office when it is vacant or the Commissioner cannot serve.',
              correct: true,
            },
            {
              text: 'The Senate appoints the Commissioner, who sets the premium rates insurers must use.',
              why: 'The governor appoints, and the Senate consents. The Commissioner reviews and approves rates. The Commissioner does not set premium rates.',
            },
            {
              text: 'Insurers elect the Commissioner, who establishes the fine for each violation.',
              why: 'The governor appoints the Commissioner. Fines and penalties are defined by state law, not set by the Commissioner.',
            },
            {
              text: 'The Commissioner is appointed for a 5-year term and cannot examine a foreign insurer.',
              why: 'Five years is how often domestic and foreign insurers must be examined. The Commissioner may examine an authorized insurer at any time and may accept another state’s report on a foreign insurer.',
            },
          ],
        ),
        question(
          'c15q08',
          'How often must insurers be examined, and how long must a licensee keep transaction records?',
          [
            {
              text: 'Domestic and foreign insurers must be examined at least once every 5 years. The examined company pays the cost. Transaction records must be available during business hours for at least the current calendar year plus 3 years.',
              why: 'The Commissioner may examine an authorized insurer at any time. Records include each contract, the premium and compensation, other producers who sent business, and consumer complaints forwarded by a regulator.',
              correct: true,
            },
            {
              text: 'Examinations occur every 2 years, and the Department pays the cost. Records are kept for 90 days.',
              why: 'Two years is the producer license period. Ninety days is the renewal window. Examinations of domestic and foreign insurers are at least every 5 years, at the company’s expense, and records are kept for the current calendar year plus 3 years.',
            },
            {
              text: 'Only domestic insurers are examined, once every 15 days.',
              why: 'Both domestic and foreign insurers must be examined at least every 5 years. Fifteen days is the appointment-filing and prohibited-form deadline.',
            },
            {
              text: 'Records may be kept only for the year of the sale, and a foreign examination must be repeated in Utah.',
              why: 'The retention period is the current calendar year plus 3 years. For a foreign insurer, the Commissioner may accept an examination report from another state, another Utah agency, or the federal government.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c15-license',
      title: 'Who must have a license',
      body: `These rules apply only in this state. They cover the Insurance Department, licensing, and the time limits and dollar amounts in the Insurance Code.

Terms used in this chapter:
• Appointment — the authority an insurer gives an agent to transact insurance or adjust claims on the insurer’s behalf.
• Cease and desist — to stop or discontinue.
• Commission — payment to the agent by the insurance company for placing insurance, usually a percentage of the policy premium.
• Commissioner — the head of the State Department of Insurance.
• Exempt — not subject to an obligation.
• Fiduciary — a person in a position of trust, someone who handles funds in a trust capacity.
• Inducement — an offer that attempts to influence the other party.
• Insolvent — unable to meet financial obligations.
• Statute — a formal written law enacted by the legislature. Insurance statutes are in the state Insurance Code.
• Surplus lines insurance — insurance that is not available from admitted insurers.

A person must be licensed for a specific line of authority to transact insurance. Licensing is meant to ensure that a producer meets the educational and ethical standards required to fulfill responsibilities to the insurer and the public. It sets the requirements, procedures, and fees for qualification, licensure, and appointment.

The purpose of licensing in this state is to promote the professional competence of producers, brokers, and consultants, provide maximum freedom of marketing methods for insurance, consistent with the interests of the public, preserve and encourage competition at the consumer level, regulate marketing practices in conformity with the Insurance Code, and govern the qualifications and procedures for licensing producers.

It is illegal to act as a producer or agency without a license. A contract produced through a producer or broker who is not properly licensed is invalid.

The Commissioner will issue or renew a license to a natural person who wants to act as a producer, broker, or consultant if the person is at least 18, satisfies the applicable education, examination, and training requirements, pays the fees, has not committed an act that is grounds for denial, suspension, or revocation, and is competent and trustworthy.

The Department may require a criminal background check. The applicant then submits a fingerprint card and consents to a fingerprint check by the Utah Bureau of Criminal Identification and the FBI.`,
      questions: [
        question(
          'c15q01',
          'What happens if insurance is produced through a producer or broker who is not properly licensed?',
          [
            {
              text: 'Acting without a license is illegal, and the contract is invalid.',
              why: 'Licensing exists so the producer meets educational and ethical standards owed to the insurer and the public. A natural person must be at least 18, complete the required education and examination, pay the fees, have no ground for denial, and be competent and trustworthy.',
              correct: true,
            },
            {
              text: 'The contract stays in force, and only the insurer is fined.',
              why: 'A contract produced through an unlicensed producer or broker is invalid. Acting without a license is itself illegal.',
            },
            {
              text: 'The producer may bind coverage for 15 days while the application is pending.',
              why: 'Fifteen days is the time an appointing insurer has to file a notice of appointment, and the time to discontinue a prohibited form. It is not a grace period for an unlicensed person to bind coverage.',
            },
            {
              text: 'The license may be issued at age 16 if the person passes the examination.',
              why: 'The applicant must be at least 18. Examination and training are additional requirements, not a substitute for that age.',
            },
          ],
        ),
        question(
          'c15q02',
          'When the Department requires a background check, what must the applicant provide?',
          [
            {
              text: 'A fingerprint card and consent to a fingerprint check by the Utah Bureau of Criminal Identification and the FBI.',
              why: 'The check is a condition of receiving the license when the Department requires it. The person must also be 18, meet education and examination requirements, pay fees, and be competent and trustworthy.',
              correct: true,
            },
            {
              text: 'Only a letter from the home-state insurance department.',
              why: 'A home-state license in good standing is part of nonresident licensing. A required criminal check uses fingerprints through the Utah Bureau of Criminal Identification and the FBI.',
            },
            {
              text: 'Proof of 24 hours of ethics training before the first license is issued.',
              why: 'Three of the 24 continuing-education hours every 2 years must be ethics. That is a renewal rule, not the background-check requirement.',
            },
            {
              text: 'A $2,500 deposit with the Commissioner.',
              why: '$2,500 is the penalty for each violation by a producer or adjuster. It is not an application deposit.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c15-types',
      title: 'Producers, consultants, adjusters, and nonresidents',
      body: `A producer represents at least one insurance company. Producers must keep at least one current appointment and must meet any continuing-education requirement. Life and health producers may solicit, receive, and forward applications. They generally cannot bind coverage or alter or modify it. Property and casualty producers can usually bind coverage.

A producer license can include life insurance, variable contracts, accident and health, property, casualty including surety and other bonds, title insurance, and personal lines. A limited license can include limited-line credit, travel, motor club, car-rental-related insurance, legal expense, bail bond agent, and customer service representative.

A producer may add surplus lines after being a producer in Utah or another state, in substantially the same license class, for at least 3 of the 4 years immediately before the application, or after being regularly employed for that period by an insurer in work that would prepare the person to act as an insurance broker.

A licensee may not act as a consultant, producer, or broker without complying with the conflict-of-interest disclosure. Before consulting, the consultant must disclose to the client, prominently and in writing, any interest as a producer or broker, or any relationship to an insurer, producer, or broker, and that the recommendations should be scrutinized because of those interests. The fee must be agreed in writing before the services are performed. Any report must contain a copy of that disclosure.

When a person applies through a broker, the broker must disclose in writing that the broker is not the producer of the potential insurer, and that the applicant likely does not have the benefit of an insurer being financially responsible for the broker’s conduct.

A person who is not a legal resident of Utah may be licensed as a nonresident producer without a written examination if the person is licensed as a resident producer in the home state when applying, applies to the Commissioner, submits the application to the home state with the uniform application and fees, and is in good standing. The home state must award nonresident licenses to residents of Utah on the same basis. That is reciprocity.

Consultants advise the public, for a fee, about the benefits, advantages, and disadvantages of policies. The license uses the same lines of authority as a producer license. A person is eligible only after at least 3 of the 4 years before the application were spent in work that would prepare the person to be a consultant.

Insurance adjusting means directing the investigation, negotiation, or settlement of a claim. Adjusters do that work for an insurer, a policyholder, or a claimant. An independent or public adjuster license may be issued to a person who meets the education, examination, and character requirements in the Insurance Code.`,
      questions: [
        question(
          'c15q03',
          'What authority does a life and health producer usually have, and what must every producer keep?',
          [
            {
              text: 'A life and health producer may solicit, receive, and forward applications, but generally cannot bind or change coverage. Every producer must keep at least one current appointment and meet continuing education. Property and casualty producers can usually bind coverage.',
              why: 'Producer lines include life, variable contracts, accident and health, property, casualty including bonds, title, and personal lines. Limited lines include credit, travel, motor club, car rental, legal expense, bail bond, and customer service representative.',
              correct: true,
            },
            {
              text: 'A life and health producer may bind coverage, and an appointment is optional.',
              why: 'Binding is the usual property and casualty authority. Life and health producers generally cannot bind or alter coverage, and a producer must maintain at least one current appointment.',
            },
            {
              text: 'A producer may add surplus lines immediately after the first license is issued.',
              why: 'Surplus lines require at least 3 of the 4 years immediately before the application as a producer in substantially the same class, or equivalent employment by an insurer.',
            },
            {
              text: 'Consultants use a different set of lines and may bind life coverage.',
              why: 'A consultant license uses the same lines as a producer license. Consultants give advice for a fee. They are not described as having binding authority.',
            },
          ],
        ),
        question(
          'c15q04',
          'What must a nonresident show to be licensed in Utah without a written examination?',
          [
            {
              text: 'A resident license in good standing in the home state, an application to the Commissioner and to the home state with the uniform application and fees, and reciprocity: the home state licenses Utah residents on the same basis.',
              why: 'A broker must also tell an applicant, in writing, that the broker is not the producer of the potential insurer and that an insurer is likely not financially responsible for the broker’s conduct. A consultant must have 3 of the last 4 years in preparing work.',
              correct: true,
            },
            {
              text: 'Three years of Utah residency and a new written examination.',
              why: 'A nonresident is not a legal resident of Utah. The examination is waived when the home-state license, application, fees, good standing, and reciprocity are in place.',
            },
            {
              text: 'An appointment from a Utah insurer and 24 hours of ethics credit.',
              why: 'An appointment is what a producer must maintain with an insurer. Ethics hours are part of the 24-hour continuing-education requirement. Neither replaces the nonresident examination waiver.',
            },
            {
              text: 'A consultant license, because nonresidents cannot hold a producer license.',
              why: 'The nonresident license described here is a producer license. Consultants are a separate classification with the same lines of authority.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c15-maintain',
      title: 'Renewing a license and continuing education',
      body: `A producer license stays in effect unless it is suspended or revoked, as long as it is properly renewed. It is renewed every 2 years. The producer submits the renewal forms, any required fees, and proof of continuing education. The renewal window opens 90 days before the license expires.

Continuing education protects the public by keeping professional standards high and by maintaining and improving the skills of licensed producers. Producers, brokers, and adjusters must complete at least 24 hours every 2 years, before renewal:
• At least 3 of the 24 hours must be ethics.
• At least 12 hours, one half of the total, must be classroom courses.
• The remaining hours may be home study, video recording, experience credit, or another approved method.
• Hours may be earned at any time during the 2-year period.

Credits do not carry over from one licensing period to the next. A course may be repeated for credit, but not more than once in the same license continuation period.

A license that has lapsed or was voluntarily surrendered may be reinstated within 1 year of the day it became inactive. A license lapses if the licensee fails to pay fees when due, finish continuing education before submitting the renewal, submit a completed renewal, submit other documents required for that license type, or, for a nonresident, keep an active license in the resident state.

If the lapse is due to military service or another extenuating circumstance, such as a long-term medical disability, the licensee may request reinstatement no later than 1 year after the lapse, and may request a waiver of fees, examination requirements, or other sanctions imposed for missing the renewal procedures.

A licensee who does business under a name other than the legal name must notify the Commissioner before using the assumed name. Every Utah producer or broker must notify the Commissioner in writing within 30 days of a change in residence address, business address, or telephone number.

Licensed producers and applicants must report any administrative action taken against them in another jurisdiction or by another regulatory agency in this state, and any criminal prosecution in any jurisdiction. The report is filed with the application, or within 30 days of the start of the action or prosecution, and it includes a copy of the complaint or other relevant legal documents.`,
      questions: [
        question(
          'c15q05',
          'What continuing education must a producer finish before a 2-year renewal?',
          [
            {
              text: 'At least 24 hours, including at least 3 hours of ethics and at least 12 classroom hours. Credits do not carry into the next licensing period.',
              why: 'The other hours may be home study, video, experience credit, or another approved method. A course may be repeated, but not more than once in the same continuation period. The renewal window opens 90 days before expiration.',
              correct: true,
            },
            {
              text: '12 hours, all of them ethics, and unused hours carry forward.',
              why: 'Twelve hours is the classroom half of the 24. Ethics is 3 hours. Credits do not carry over.',
            },
            {
              text: '24 hours of ethics, completed only in the 90 days before expiration.',
              why: 'Ethics is 3 of the 24 hours. The hours may be earned at any time during the 2-year period. Ninety days is when the renewal window opens.',
            },
            {
              text: 'Three hours every year, with no classroom requirement.',
              why: 'The requirement is 24 hours every 2 years, and at least half of those hours must be classroom courses.',
            },
          ],
        ),
        question(
          'c15q06',
          'How soon must a lapsed license be reinstated, and how soon must a move or a criminal prosecution be reported?',
          [
            {
              text: 'A lapsed or voluntarily surrendered license may be reinstated within 1 year. A change of address or telephone number, and the start of an administrative action or criminal prosecution, must be reported within 30 days.',
              why: 'Military service or a long-term medical disability also allows a reinstatement request no later than 1 year after the lapse, and a request to waive renewal fees, examinations, or other sanctions. An assumed name must be reported to the Commissioner before it is used.',
              correct: true,
            },
            {
              text: 'Reinstatement is available for 5 years. Address changes are reported at the next renewal.',
              why: 'Five years is the longest period a revocation order may set before the person can apply again. Address changes and reportable actions use 30 days. Reinstatement of a lapse is 1 year.',
            },
            {
              text: 'The license cannot be reinstated, and a prosecution is reported only if it results in a conviction.',
              why: 'Reinstatement is available within 1 year of the day the license became inactive. The report covers the initiation of an administrative action or criminal prosecution, and it includes the complaint or other legal documents.',
            },
            {
              text: 'Both the reinstatement and the address notice use the 90-day renewal window.',
              why: 'Ninety days is how early the renewal window opens. It is not the reinstatement period or the address-change deadline.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c15-company',
      title: 'Insurer rates, policy forms, and appointments',
      body: `An insurer is solvent if it has the assets to meet its financial obligations. If it cannot, it is insolvent. The Commissioner and the Department monitor financial strength so that continued operation is not hazardous to policyholders, creditors, or the public. Domestic and foreign insurers must keep on deposit the required capital for stock insurers and the minimum permanent surplus for mutual insurers. The Commissioner will not issue or renew a certificate of authority until the insurer complies.

Rate regulation is meant to keep rates from being excessive, inadequate, or unfairly discriminatory, and to authorize and regulate cooperative action in rate-making. Insurers file premium rates with the Commissioner. A filing waits 30 days before it becomes effective. The filing must include the information used to set the rate. If that information is not enough, the Commissioner may ask for more. If the insurer does not provide it within 45 days of the Commissioner’s mailed notice, the filing is incomplete and unfiled, and it is returned as unavailable for use. A returned filing may not be used for a policy issued or renewed on or after 60 days from the return. An insurer may apply a higher rate than usual for a specific risk. If that rate is filed and not disapproved within 10 days, it may be used.

The Commissioner may prohibit a form. The form must then be discontinued within 15 days. After a form is no longer used, the insurer keeps a record of its use for 5 years from the last day it was used, or from the last day any policy issued on that form is in effect.

A producer cannot act as an insurer’s agent unless that insurer appoints the producer. A producer who is not acting as an insurer’s agent does not have to be appointed. The insurer files an electronic notice of appointment, with the effective date, within 15 days of the appointment.

An insurer that terminates an appointment, employment, contract, or other insurance business relationship must electronically submit the termination to the Department within 30 days of the termination date. If the termination is for cause, the insurer also sends, by facsimile or as a PDF attached to an email, the fact that it was for cause and the specific circumstances.`,
      questions: [
        question(
          'c15q09',
          'How long does a rate filing wait, and when may a higher rate for a specific risk be used?',
          [
            {
              text: 'A rate filing waits 30 days before it is effective. A higher rate for a specific risk may be used if it is filed and not disapproved within 10 days. Supporting information that is not sent within 45 days makes the filing incomplete, and a returned filing cannot be used on policies issued or renewed on or after 60 days from the return.',
              why: 'Rates are regulated so they are not excessive, inadequate, or unfairly discriminatory. A prohibited policy form must be discontinued within 15 days, and the insurer keeps a record of that form for 5 years.',
              correct: true,
            },
            {
              text: 'Rates are effective the day they are filed. A higher rate needs 60 days of approval.',
              why: 'The waiting period is 30 days. The 10-day period is how long a filed higher rate may sit without disapproval before it may be used. Sixty days is how long after a returned filing the insurer must stop using it.',
            },
            {
              text: 'The Commissioner sets the rate. Insurers do not file rates.',
              why: 'Insurers file rates. The Commissioner does not set premium rates. If the supporting information is insufficient, the Commissioner may request more.',
            },
            {
              text: 'A prohibited form may be used for 5 years, and rate support is due in 15 days.',
              why: 'A prohibited form must be discontinued within 15 days. Five years is how long the insurer keeps a record after the form is no longer used. Missing rate support is measured by 45 days.',
            },
          ],
        ),
        question(
          'c15q10',
          'How quickly must an insurer file an appointment and a termination?',
          [
            {
              text: 'The electronic notice of appointment, including the effective date, is filed within 15 days. A termination is submitted electronically within 30 days. A for-cause termination also explains the circumstances by fax or PDF email.',
              why: 'A producer who is not acting as an insurer’s agent does not have to be appointed. A producer cannot act as that insurer’s agent without the appointment.',
              correct: true,
            },
            {
              text: 'Both the appointment and the termination are filed within 5 years.',
              why: 'Five years is the examination cycle and the longest reapplication bar after revocation. Appointment is 15 days. Termination is 30 days.',
            },
            {
              text: 'The producer files the appointment within 30 days, and the insurer files the termination within 15 days.',
              why: 'The appointing insurer files the notice of appointment. The 15-day and 30-day periods are reversed in that answer.',
            },
            {
              text: 'No filing is required if the producer already holds a license.',
              why: 'A license is not an appointment. The producer cannot act as the insurer’s agent until appointed, and the insurer must file that appointment.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c15-fiduciary',
      title: 'Trust accounts, controlled business, and commissions',
      body: `Producers who collect premiums act as trustees of money received for forwarding to insurers or insureds. They hold those premiums in a fiduciary capacity and must account for them until they are sent to the proper payee. The funds cannot be commingled with the licensee’s own money or money held in any other capacity. That limit does not apply to money needed to pay bank charges, or to money that belongs to the licensee as a fee or commission.

Collected funds are deposited in a federally insured trust account in a depository that has an office in Utah, has federal deposit insurance, or is authorized to engage in the trust business. They may also go into another account that the Commissioner approves as comparably safe.

Licensees register the address and telephone numbers of the principal place of business. Individuals also give a residential address and telephone number. A change is reported within 30 days. Transaction records are kept at the place of business and made available to the Commissioner on request. The Commissioner need not give prior notice of an examination.

Controlled business is coverage written on a producer’s own life, health, or property, or on that of the producer’s immediate family or business associates. The Commissioner will not issue a license if the person’s primary purpose is to write controlled business. A producer may not be paid for controlled business unless, during the previous 12 months, aggregate premiums from general business exceed aggregate premiums from controlled business.

Licensees and insurers may pay consideration only to licensed producers, consultants, managing general agents, or reinsurance intermediaries. A consultant may not pay or receive a commission or other compensation that results, directly or indirectly, from an insurance transaction. A consultant may share a consulting fee with another licensed consultant only to the extent that the other consultant contributed to the services.`,
      questions: [
        question(
          'c15q12',
          'How must a producer handle collected premiums, and when may the producer be paid for controlled business?',
          [
            {
              text: 'Premiums are held in a fiduciary capacity in a qualifying trust account and are not commingled with the producer’s own money, except for bank charges or the producer’s own fees or commissions. Payment for controlled business is allowed only if, over the previous 12 months, general-business premiums exceed controlled-business premiums.',
              why: 'Controlled business is coverage on the producer’s own life, health, or property, or on that of immediate family or business associates. A license is not issued if writing controlled business is the primary purpose. Commissions may be paid only to licensed producers, consultants, managing general agents, or reinsurance intermediaries.',
              correct: true,
            },
            {
              text: 'Premiums may be kept in the producer’s personal account. Controlled business may be the producer’s only business.',
              why: 'Commingling with the licensee’s own money is prohibited, aside from bank charges and the licensee’s own fees or commissions. The primary purpose of the license cannot be controlled business.',
            },
            {
              text: 'Controlled-business premiums must exceed general-business premiums before the producer is paid.',
              why: 'The test runs the other way. General-business premiums collected during the previous 12 months must exceed controlled-business premiums.',
            },
            {
              text: 'A consultant may take a sales commission if the fee was disclosed.',
              why: 'A consultant may not pay or receive compensation that results from an insurance transaction. A consulting fee may be shared with another licensed consultant only to the extent that person contributed to the services.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c15-unfair',
      title: 'Unfair marketing practices',
      body: `Insurers and producers may not use a trade practice that is an unfair method of competition or an unfair or deceptive act. Knowingly committing unfair methods often enough to show a general business practice is an unfair trade practice. After a hearing, the Department may order the person to cease and desist and may impose penalties.

Misrepresentation is issuing, publishing, or circulating any illustration or sales material, including a verbal statement, that is false, misleading, or deceptive as to policy benefits or terms, or the payment of dividends.

False advertising is an untrue, deceptive, or misleading statement about the business of insurance or anyone who conducts it, in print, on television, or on the Internet. It includes misrepresenting policy terms, benefits, conditions, or advantages, dividends to be received or already paid, the financial condition of a person or the company, or the true purpose of an assignment or loan. Representing a policy as a share of stock, or using a name or title that misstates what the policy is, is also false advertising. A person or entity cannot use a name that deceptively suggests it is an insurer.

Rebating is any inducement offered in the sale of insurance that is not specified in the policy. Both the offer and the acceptance are illegal. Rebates include a return of premium, special favors or services, advantages in dividends or other benefits, and stocks, bonds, securities, and their dividends or profits.

Boycott, coercion, or intimidation intended to restrict fair trade or create a monopoly is illegal. It includes unfair behavior aimed at clients and at competing agents and brokers. Coercion is requiring, as a condition of a loan, that the applicant buy insurance from a specific insurer.

It is illegal to make or offer an insurance contract or annuity on terms other than those in the contract, or to offer as an inducement any special favor or advantage in dividends or benefits, any stocks, bonds, securities, or accrued dividends or profits, or anything of value not specified in the contract. Under Utah law, a small gift or meal under $100 per person is not an inducement if it is a social courtesy and is not conditioned on a quote or the purchase of a particular product. A gift or meal that does not exceed $10 may be conditioned on receiving a quote. An insurer may still give promotional gifts that are generally available to the public.

Discrimination in rates, premiums, or benefits for persons in the same class or with the same life expectancy is illegal. No distinction may be based on marital status, race, national origin, gender identity, sexual orientation, creed, or ancestry unless the distinction is for a business purpose or required by law.`,
      questions: [
        question(
          'c15q15',
          'What is rebating, and which gifts are not illegal inducements?',
          [
            {
              text: 'Rebating is an inducement to buy that is not specified in the policy. Both offering and accepting it are illegal. A social gift or meal under $100 is not an inducement if it is not tied to a quote or a purchase. A gift or meal of no more than $10 may be tied to receiving a quote.',
              why: 'Rebates include returned premium, special favors, dividend advantages, and securities. Offering a contract on terms that are not in the contract is a separate illegal inducement. Promotional gifts generally available to the public are also allowed.',
              correct: true,
            },
            {
              text: 'Only the producer who offers a rebate breaks the law. The buyer may accept it.',
              why: 'Both the offer and the acceptance of a rebate are illegal.',
            },
            {
              text: 'Any gift over $10 is an inducement, and a $100 meal is always illegal.',
              why: 'A gift or meal under $100 can be a permitted social courtesy when it is not conditioned on a quote or a purchase. The $10 figure is the amount that may be conditioned on receiving a quote.',
            },
            {
              text: 'Returning part of the premium is allowed if it is paid from the trust account.',
              why: 'A rebate of premium payable on the policy is listed as a rebate. Trust-account rules govern fiduciary premium handling. They do not authorize a rebate.',
            },
          ],
        ),
        question(
          'c15q16',
          'Which distinction in rates or benefits is illegal, and what is coercion?',
          [
            {
              text: 'Discrimination among people in the same class, or with the same life expectancy, is illegal, including a distinction based on marital status, race, national origin, gender identity, sexual orientation, creed, or ancestry, unless it is for a business purpose or required by law. Coercion is requiring, as a condition of a loan, that the applicant buy insurance from a specific insurer.',
              why: 'Boycott, coercion, or intimidation intended to restrict fair trade or create a monopoly is illegal. It can be aimed at clients or at competing agents and brokers. Misrepresentation includes false statements about benefits, terms, or dividends.',
              correct: true,
            },
            {
              text: 'Any difference in rate for a different class is illegal, and coercion is failing continuing education.',
              why: 'The ban is discrimination for persons within the same class or with the same life expectancy. A business purpose or a legal requirement can support a distinction. Coercion, in this section, is tying a loan to insurance from a specific insurer.',
            },
            {
              text: 'An insurer may require its own policy as a condition of a loan, because that is a filed rate.',
              why: 'Requiring purchase from a specific insurer as a condition of a loan is coercion. A filed rate is a different rule.',
            },
            {
              text: 'False advertising is legal if the statement is only verbal.',
              why: 'Misrepresentation includes verbal statements. False advertising includes untrue or misleading statements about terms, dividends, financial condition, or the purpose of an assignment or loan.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c15-claims',
      title: 'Unfair claim practices',
      body: `The following are unfair claims settlement practices if they are committed openly and in conscious disregard of the rules, or so often that they show a general business practice:
• Misrepresenting pertinent facts or policy provisions about coverage.
• Failing to acknowledge and act reasonably promptly on communications about claims.
• Failing to adopt and implement reasonable standards for prompt investigation.
• Refusing to pay claims without a reasonable investigation based on all available information.
• Failing to affirm or deny coverage within a reasonable time after proof-of-loss statements are completed.
• Not attempting in good faith to make prompt, fair, and equitable settlements once liability is reasonably clear.
• Compelling insureds to sue by offering substantially less than the amounts ultimately recovered.
• Trying to settle for less than a reasonable person would have believed was due, based on written or printed advertising that accompanied the application.
• Settling on an application that was altered without notice to, or the knowledge or consent of, the insured.
• Making claim payments without a statement of the coverage under which the payment is made.
• Making known a policy of appealing arbitration awards in favor of insureds or claimants in order to force a settlement below the award.
• Delaying investigation or payment by requiring a preliminary claim report and then a formal proof of loss that contains substantially the same information.
• Failing to settle promptly a part of the claim where liability is reasonably clear, in order to influence settlement of other parts.
• Failing to promptly explain the policy basis, in light of the facts or applicable law, for a denial or a compromise offer.`,
      questions: [
        question(
          'c15q11',
          'When is a claims practice an unfair claims settlement practice?',
          [
            {
              text: 'When it is committed openly and in conscious disregard of the rules, or so often that it is a general business practice. Examples include refusing to pay without a reasonable investigation and offering far less than is later recovered in order to force a lawsuit.',
              why: 'Other listed practices include failing to affirm or deny coverage within a reasonable time after the proof of loss, settling on an application altered without the insured’s knowledge, and paying a claim without stating the coverage that applies.',
              correct: true,
            },
            {
              text: 'Only when the Commissioner has set the claim amount in advance.',
              why: 'The Commissioner does not set premium rates or the statutory fines. An unfair claims practice is judged by conscious disregard or by frequency that shows a general business practice.',
            },
            {
              text: 'Whenever a single claim is denied, even after a prompt investigation and a clear explanation.',
              why: 'A denial must include a prompt explanation of the policy basis in relation to the facts or law. A denial after a reasonable investigation is not itself listed as the unfair practice.',
            },
            {
              text: 'Only if the producer commingles premium in a trust account.',
              why: 'Commingling is a fiduciary violation. Unfair claims practices are the claims-handling acts listed above, done openly in conscious disregard or as a general business practice.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c15-discipline',
      title: 'License suspension, revocation, and fines',
      body: `The Commissioner may revoke, suspend for up to 12 months, or limit a license or certificate of authority for reasons that include incorrect, misleading, incomplete, or partially untrue information on the application, violating an insurance law or an order of the Commissioner, obtaining a license by misrepresentation or fraud, misappropriating money received in the insurance business, intentionally misrepresenting a contract or application, a felony conviction, an unfair trade practice or fraud, fraudulent, coercive, or dishonest practices, or incompetence, untrustworthiness, or financial irresponsibility, a license denied, suspended, or revoked in another state, territory, or province, forging a name on an insurance document, improperly using notes on a licensing examination, knowingly accepting business from an unlicensed person, failing to comply with a child-support order, failing to pay income taxes, violating the federal Violent Crime Control and Law Enforcement Act, or a practice that endangers customers and the public.

An order revoking a license may set a period, not longer than 5 years, during which the former licensee may not apply for a new license. A person who knowingly and intentionally violates the licensing rules, the rules on transacting business through unauthorized insurers, or the Insurance Fraud Act is guilty of a felony as provided in the Insurance Code.

Where a suspension would be justified, after a formal adjudicative proceeding the Commissioner may place the licensee on probation for no longer than 24 months. The order must state reasonable conditions for keeping the license. A violation of probation is grounds for revocation.

After a hearing, the Commissioner may order, for each separate violation, a penalty of $2,500 for a producer or adjuster, or $5,000 for any other person, and may revoke or suspend the producer’s license. A managing general producer may be ordered to reimburse the insurer, or the insurer’s rehabilitator or liquidator, for losses the violation caused. Unless a specific criminal penalty is provided, the penalties that may be leveled are $10,000 for a corporation and $5,000 for an individual. The Commissioner may still impose other penalties provided by law when necessary.`,
      questions: [
        question(
          'c15q13',
          'What are the limits on suspension, probation, and a new application after revocation?',
          [
            {
              text: 'Suspension may last up to 12 months. Probation may last no longer than 24 months. A revocation order may bar a new application for up to 5 years.',
              why: 'Probation follows a formal adjudicative proceeding in circumstances that would justify suspension, and it must state reasonable conditions. Violating probation is grounds for revocation. A knowing and intentional violation of the licensing rules, the unauthorized-insurer rules, or the Insurance Fraud Act is a felony.',
              correct: true,
            },
            {
              text: 'Suspension may last 5 years, probation 12 months, and a new application is never allowed.',
              why: 'Five years is the longest reapplication bar after revocation. Suspension is up to 12 months. Probation is no longer than 24 months.',
            },
            {
              text: 'Probation may last 5 years, and suspension is limited to 30 days.',
              why: 'Thirty days is a notice period for termination, address changes, and reportable actions. Probation is capped at 24 months. Suspension is up to 12 months.',
            },
            {
              text: 'Only a court may suspend a license, and only for a felony.',
              why: 'The Commissioner may suspend, revoke, or limit a license. A felony conviction is one ground. It is not the only ground.',
            },
          ],
        ),
        question(
          'c15q14',
          'What penalty may follow a hearing on a violation of the insurance laws?',
          [
            {
              text: 'For each violation, $2,500 for a producer or adjuster, or $5,000 for any other person. Unless a specific criminal penalty is provided, a corporation may be penalized $10,000 and an individual $5,000.',
              why: 'The Commissioner may also revoke or suspend the producer’s license. A managing general producer may have to reimburse the insurer, rehabilitator, or liquidator for losses the violation caused.',
              correct: true,
            },
            {
              text: '$50,000 for a producer and $2,500 for every other person.',
              why: '$50,000 is the federal civil amount for a violation of 18 U.S.C. 1033, or the compensation received, whichever is greater. The state hearing penalty for a producer or adjuster is $2,500 per violation.',
            },
            {
              text: 'A flat $100 fine, which is the most the Commissioner can set.',
              why: '$100 is the gift amount that, as a social courtesy not tied to a quote or a purchase, is not an illegal inducement. The Commissioner does not establish the fines. The statute states these amounts.',
            },
            {
              text: 'No money penalty is allowed if the license is suspended.',
              why: 'After a hearing, the order may include the money penalty and revocation or suspension. They are listed together.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c15-fraud',
      title: 'Privacy, fraud, and contracts that are not allowed',
      body: `Besides the federal Fair Credit Reporting Act, information practices are regulated by the Insurance Information and Privacy Protection Act, a model law developed by the National Association of Insurance Commissioners. Insurers and agents must give applicants and policyholders a notice of information practices no later than policy delivery. Notices are in writing, or electronic if the customer agrees. The notice must let the consumer opt out, meaning direct the holder not to disclose nonpublic personal financial information to a nonaffiliated third party except as the regulation permits.

On a written request, an authorized agency may give an insurer information relevant to suspected insurance fraud, and an insurer or a producer authorized to act for the insurer must give an authorized agency information relevant to suspected fraud. That information may be a protected record. Information given to an insurer is not subject to discovery in a civil case unless, after notice and a hearing, a court finds that disclosure will not jeopardize the public interest or an ongoing criminal investigation. An insurer must report to the department terminations based on a violation of this regulation.

A fraudulent insurance act includes knowingly presenting a statement that contains false, incomplete, or misleading information material to an application or renewal, doing the same in support of a claim or a civil claim for personal injury or property damage, accepting a benefit from the proceeds of a fraudulent act, assisting or conspiring with someone to commit one, or supplying false material information in a document the Department requires. An insurer or service provider is not liable for an employee’s fraudulent act committed without authority, unless the insurer or provider knew or should have known of it.

A contract issued by an unauthorized insurer is illegal and unenforceable by the insurer. It may still be enforced in an action brought against the insurer. If the policyowner entered the illegal contract without knowing it was illegal, the contract can be voided. A person who helped procure the illegal contract, and who knew or should have known it was illegal, is liable to the insured for the full amount of a claim or loss if the insurer does not pay it.`,
      questions: [
        question(
          'c15q17',
          'Who can be liable for the full claim when an unauthorized insurer does not pay?',
          [
            {
              text: 'A person who helped procure the illegal contract and knew or should have known the transaction was illegal. The contract is unenforceable by the unauthorized insurer, but it can be enforced against that insurer. A policyowner who did not know the contract was illegal can void it.',
              why: 'A fraudulent act includes a knowing false or misleading statement material to an application, renewal, or claim, accepting proceeds of the fraud, or helping someone else commit it. An insurer is not liable for an employee’s unauthorized fraud unless it knew or should have known.',
              correct: true,
            },
            {
              text: 'Only the unauthorized insurer, and the contract can never be enforced.',
              why: 'The insurer cannot enforce the illegal contract. An action can still be brought against the insurer, and a person who knowingly assisted can be liable for the full unpaid claim.',
            },
            {
              text: 'The policyowner, even if the policyowner did not know the insurer was unauthorized.',
              why: 'A policyowner who entered the contract without knowing it was illegal can void it. Liability for the unpaid claim falls on the person who assisted and knew or should have known.',
            },
            {
              text: 'Any consultant who disclosed a conflict of interest in writing.',
              why: 'The conflict disclosure is what lets a consultant act. It is not the liability rule for an illegal contract with an unauthorized insurer.',
            },
          ],
        ),
      ],
    },
    {
      id: 'c15-federal',
      title: 'Federal credit, fraud, privacy, and telemarketing rules',
      body: `The Fair Credit Reporting Act requires consumer-reporting agencies to keep records confidential, accurate, relevant, and properly used. Reports may be used only for a legitimate business purpose, including insurance underwriting, employment screening, and credit.

A consumer report is written or oral information on a consumer’s credit, character, reputation, or habits, collected from employment records, credit reports, and other public sources. An investigative consumer report also covers character, reputation, and habits, but the information comes from an investigation and interviews with associates, friends, and neighbors. An investigative report cannot be made unless the consumer is told in writing, within 3 days of the date the report was requested, and told of the right to request more information. The insurer or reporting agency has 5 days to provide that additional information.

A person who knowingly and willfully obtains consumer information under false pretenses may be fined, imprisoned for up to 2 years, or both. An unknowing violation makes the person liable for the consumer’s loss and reasonable attorney fees. A willful violation that amounts to a general pattern or business practice can bring a penalty of up to $2,500.

If insurance is declined or modified because of a consumer or investigative report, the consumer must be told and given the name and address of the reporting agency. The consumer may learn what was in the report and who received a copy during the past year. If the consumer challenges the information, the agency must reinvestigate and amend the report if warranted. When a report is corrected, the corrected information goes to everyone who received the inaccurate information within the last 2 years.

If the report is for a life policy or a credit transaction of less than $150,000, it cannot include bankruptcies more than 10 years old, civil suits, records of arrest or convictions, or other negative information more than 7 years old. Negative information includes delinquencies, late payments, insolvency, or any other default.

It is unlawful insurance fraud to willfully, and with intent to deceive, make an oral or written statement that is false or that omits a material fact. That includes applications, renewals, claims, premiums paid, and an insurer’s financial condition. A person in the business of insurance whose activities affect interstate commerce, and who knowingly makes a false material statement, may be fined, imprisoned for up to 10 years, or both. If the activity jeopardized the security of the insurer, the punishment can be up to 15 years. An officer, director, agent, or other employee convicted of embezzling funds faces those fines and imprisonment. If the embezzlement was less than $5,000, prison time may be reduced to 1 year.

A person convicted of a crime involving dishonesty, breach of trust, or a violation of the Violent Crime Control and Law Enforcement Act of 1994 may not work in the business of insurance affecting interstate commerce without a letter of written consent from an insurance regulatory official, a 1033 waiver. The consent must say it is granted for 18 U.S.C. 1033. A person convicted of a felony involving dishonesty or breach of trust who engages in the business of insurance will be fined, imprisoned for up to 5 years, or both. Under Section 1034, the Attorney General may bring a civil action for not more than $50,000 for each violation, or the compensation the person received from the prohibited conduct, whichever is greater.

The Gramm-Leach-Bliley Act generally bars an insurer from disclosing nonpublic personal information to a nonaffiliated third party unless the insurer clearly and conspicuously discloses in writing that information may be disclosed, the consumer can direct, before the first disclosure, that it not be disclosed, or the consumer is told how to exercise that option. A customer, someone with an ongoing financial relationship, receives two disclosures: when the relationship is established, such as when a policy is purchased, and before protected information is disclosed. The customer also receives an annual privacy disclosure and may opt out.

In 2003 the Federal Trade Commission and the Federal Communications Commission created the National Do Not Call Registry. Telemarketers may not call a number on the national registry or on that seller’s own do-not-call list, deny someone the right to be placed on a registry, call before 8 a.m. or after 9 p.m., abandon calls, fail to transmit caller ID, threaten, intimidate, or use obscene language, or cause a phone to ring in order to annoy, abuse, or harass. Exceptions include a call from or for an organization with an established business relationship during the last 18 months after a sale or transaction, a call the consumer permitted in writing, a call that is not commercial and has no unsolicited advertisement, and a call by or for a tax-exempt nonprofit. Organizations consult the registry every 31 days and drop registered numbers from their call lists.`,
      questions: [
        question(
          'c15q18',
          'How does an investigative consumer report differ from a consumer report, and what old information is barred on a small life policy?',
          [
            {
              text: 'An investigative report comes from interviews with associates, friends, and neighbors. The consumer must be told in writing within 3 days of the request, and extra information must be provided within 5 days. For a life policy or credit transaction under $150,000, bankruptcies older than 10 years and other negative information older than 7 years are prohibited.',
              why: 'A consumer report is collected from employment records, credit reports, and public sources. A willful pattern of violating the Act can bring a penalty of up to $2,500. Obtaining information under false pretenses can mean a fine, up to 2 years in prison, or both. If coverage is declined or modified because of a report, the consumer gets the reporting agency’s name and address.',
              correct: true,
            },
            {
              text: 'Both reports require an interview, and negative information may be reported forever.',
              why: 'Only the investigative report is based on interviews. Negative information older than 7 years, and bankruptcies older than 10 years, are barred when the life policy or credit transaction is under $150,000.',
            },
            {
              text: 'The consumer is told 5 days before the report is requested, and the agency has 3 days to explain it.',
              why: 'The written notice comes within 3 days of the request. The additional information is due within 5 days after the consumer’s request for it.',
            },
            {
              text: 'A corrected report is sent only to the insurer, and only for errors found within the past year.',
              why: 'The consumer may learn who received a copy during the past year. If a report is corrected, the corrected information goes to all parties who received the inaccurate information within the last 2 years.',
            },
          ],
        ),
        question(
          'c15q19',
          'Who needs a 1033 waiver, and what prison term can follow a false material statement that affects interstate commerce?',
          [
            {
              text: 'A person convicted of a crime involving dishonesty, breach of trust, or the Violent Crime Control and Law Enforcement Act of 1994 needs written consent to work in insurance affecting interstate commerce. A knowing false material statement can mean up to 10 years, or up to 15 years if it jeopardized the insurer’s security.',
              why: 'The consent must state that it is granted for 18 U.S.C. 1033. Working without it after a felony involving dishonesty or breach of trust can mean a fine, up to 5 years, or both. Embezzlement under $5,000 may reduce prison time to 1 year. A civil action under Section 1034 can seek $50,000 per violation or the compensation received, whichever is greater.',
              correct: true,
            },
            {
              text: 'Every producer needs a 1033 waiver at each renewal. The maximum prison term is 2 years.',
              why: 'The waiver is for a person with a disqualifying conviction, not for every renewal. Two years is the Fair Credit Reporting Act term for obtaining information under false pretenses. The false-statement term that affects interstate commerce is up to 10 years, or 15 if the insurer’s security was jeopardized.',
            },
            {
              text: 'Embezzlement under $5,000 is not a crime, and the civil fine is $2,500.',
              why: 'Embezzlement under $5,000 can still be punished, but prison time may be reduced to 1 year. $2,500 is the Fair Credit Reporting Act penalty for a willful pattern, and also the state penalty for a producer. The Section 1034 civil amount is $50,000 per violation or the compensation received, whichever is greater.',
            },
            {
              text: 'The waiver comes from the insurer, and a false statement about premiums is outside the statute.',
              why: 'The letter of consent comes from an insurance regulatory official. Premiums paid, applications, renewals, claims, and the insurer’s financial condition are all included.',
            },
          ],
        ),
        question(
          'c15q20',
          'When may a telemarketer call, and what must an insurer tell a customer under the Gramm-Leach-Bliley Act?',
          [
            {
              text: 'Calls may not be made before 8 a.m. or after 9 p.m., or to a number on the National Do Not Call Registry. An established business relationship covers the 18 months after a sale. The registry is checked every 31 days. A customer receives a privacy notice when the relationship starts and before protected information is disclosed, plus an annual notice and a right to opt out.',
              why: 'Other do-not-call exceptions include prior written permission, a call that is not commercial, and a call for a tax-exempt nonprofit. Telemarketers must transmit caller ID and may not abandon calls or harass the person called. The Gramm-Leach-Bliley opt-out must be available before nonpublic personal information is first disclosed to a nonaffiliated third party.',
              correct: true,
            },
            {
              text: 'Calls may be made at any hour if the number was bought from a list. The privacy notice is given only once, at claim time.',
              why: 'Permissible hours stop at 9 p.m. and do not start before 8 a.m. Numbers on the registry must be dropped. The customer disclosures are at the start of the relationship, before disclosure of protected information, and annually.',
            },
            {
              text: 'An established business relationship lasts 31 days. The registry is checked every 18 months.',
              why: 'Those periods are reversed. The business-relationship exception lasts 18 months from a sale or transaction. The registry is consulted every 31 days.',
            },
            {
              text: 'Nonprofit calls are barred, and a consumer cannot opt out of information sharing.',
              why: 'Calls by or for a tax-exempt nonprofit are an exception. The customer has the right to opt out of sharing private information.',
            },
          ],
        ),
      ],
    },

  ],
}

for (const section of chapter15.sections) {
  section.questions.push(...(chapter15Extra[section.id] ?? []))
}
