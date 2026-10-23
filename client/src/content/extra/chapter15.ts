import { question } from '../build.ts'
import type { Question } from '../types.ts'

export const chapter15Extra: Record<string, Question[]> = {
'c15-license': [
    question(
      'c15q21',
      'Where do these rules apply?',
      [
        {
          text: 'Only in this state.',
          why: 'These rules apply only in this state. They cover the Insurance Department, licensing, and the time limits and dollar amounts in the Insurance Code.',
          correct: true,
        },
        {
          text: 'In every state that enacts a statute.',
          why: 'A statute is a formal written law enacted by the legislature. These rules still apply only in this state.',
        },
        {
          text: 'Only to a person who is exempt.',
          why: 'Exempt means not subject to an obligation. That term does not move these rules outside this state.',
        },
        {
          text: 'Wherever surplus lines coverage is available from admitted insurers.',
          why: 'Surplus lines insurance is insurance that is not available from admitted insurers. These rules apply only in this state.',
        },
      ],
    ),
    question(
      'c15q22',
      'What do these rules cover?',
      [
        {
          text: 'Only an inducement offered to influence another party.',
          why: 'An inducement is an offer that attempts to influence the other party. These rules cover the Insurance Department, licensing, and the time limits and dollar amounts in the Insurance Code.',
        },
        {
          text: 'The Insurance Department, licensing, and the time limits and dollar amounts in the Insurance Code.',
          why: 'These rules apply only in this state and cover the Insurance Department, licensing, and the time limits and dollar amounts in the Insurance Code.',
          correct: true,
        },
        {
          text: 'Only the commission paid for placing a policy.',
          why: 'A commission is payment to the agent by the insurance company for placing insurance. The rules also cover the Insurance Department, licensing, and the Code’s time limits and dollar amounts.',
        },
        {
          text: 'Only a cease and desist direction.',
          why: 'Cease and desist means to stop or discontinue. The rules cover the Insurance Department, licensing, and the time limits and dollar amounts in the Insurance Code.',
        },
      ],
    ),
    question(
      'c15q23',
      'What is an appointment?',
      [
        {
          text: 'Payment to the agent for placing insurance, usually a percentage of the premium.',
          why: 'That describes a commission. An appointment is the authority an insurer gives an agent to transact insurance or adjust claims on the insurer’s behalf.',
        },
        {
          text: 'A formal written law enacted by the legislature.',
          why: 'That describes a statute. An appointment is the authority an insurer gives an agent to transact insurance or adjust claims on the insurer’s behalf.',
        },
        {
          text: 'The authority an insurer gives an agent to transact insurance or adjust claims on the insurer’s behalf.',
          why: 'An appointment is the authority an insurer gives an agent to transact insurance or adjust claims on the insurer’s behalf.',
          correct: true,
        },
        {
          text: 'An offer that attempts to influence the other party.',
          why: 'That describes an inducement. An appointment is the authority an insurer gives an agent to transact insurance or adjust claims on the insurer’s behalf.',
        },
      ],
    ),
    question(
      'c15q24',
      'What does cease and desist mean?',
      [
        {
          text: 'Unable to meet financial obligations.',
          why: 'Unable to meet financial obligations is the meaning of insolvent. Cease and desist means to stop or discontinue.',
        },
        {
          text: 'Not subject to an obligation.',
          why: 'Not subject to an obligation is the meaning of exempt. Cease and desist means to stop or discontinue.',
        },
        {
          text: 'A person who handles funds in a trust capacity.',
          why: 'A fiduciary is a person in a position of trust who handles funds in a trust capacity. Cease and desist means to stop or discontinue.',
        },
        {
          text: 'To stop or discontinue.',
          why: 'Cease and desist means to stop or discontinue.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q25',
      'What is a commission?',
      [
        {
          text: 'Payment to the agent by the insurance company for placing insurance, usually a percentage of the policy premium.',
          why: 'A commission is payment to the agent by the insurance company for placing insurance, usually a percentage of the policy premium.',
          correct: true,
        },
        {
          text: 'The head of the State Department of Insurance.',
          why: 'The Commissioner is the head of the State Department of Insurance. A commission is payment to the agent for placing insurance, usually a percentage of the policy premium.',
        },
        {
          text: 'Insurance that is not available from admitted insurers.',
          why: 'That is surplus lines insurance. A commission is payment to the agent for placing insurance, usually a percentage of the policy premium.',
        },
        {
          text: 'A formal written law in the state Insurance Code.',
          why: 'That describes a statute, and insurance statutes are in the state Insurance Code. A commission is payment for placing insurance.',
        },
      ],
    ),
    question(
      'c15q26',
      'Who is the Commissioner?',
      [
        {
          text: 'A person who handles funds in a trust capacity.',
          why: 'That is a fiduciary. The Commissioner is the head of the State Department of Insurance.',
        },
        {
          text: 'The head of the State Department of Insurance.',
          why: 'The Commissioner is the head of the State Department of Insurance.',
          correct: true,
        },
        {
          text: 'A person who is not subject to an obligation.',
          why: 'A person who is not subject to an obligation is exempt. The Commissioner is the head of the State Department of Insurance.',
        },
        {
          text: 'The legislature that enacts an insurance statute.',
          why: 'A statute is a formal written law enacted by the legislature. The Commissioner is the head of the State Department of Insurance.',
        },
      ],
    ),
    question(
      'c15q27',
      'What conduct do these licensing rules call illegal?',
      [
        {
          text: 'Paying the fees set for qualification, licensure, and appointment.',
          why: 'Licensing sets the requirements, procedures, and fees for qualification, licensure, and appointment. Acting as a producer or agency without a license is illegal.',
        },
        {
          text: 'Meeting the educational and ethical standards owed to the public.',
          why: 'Licensing is meant to ensure that a producer meets the educational and ethical standards required to fulfill responsibilities to the insurer and the public. Acting without a license is illegal.',
        },
        {
          text: 'Acting as a producer or agency without a license.',
          why: 'It is illegal to act as a producer or agency without a license.',
          correct: true,
        },
        {
          text: 'Being competent and trustworthy on a license application.',
          why: 'The Commissioner issues or renews a license for a natural person who is competent and trustworthy and meets the other stated conditions. Acting without a license is what the rule calls illegal.',
        },
      ],
    ),
    question(
      'c15q28',
      'What kind of license must a person hold to transact insurance?',
      [
        {
          text: 'A general permission that names no line of authority.',
          why: 'A person must be licensed for a specific line of authority to transact insurance.',
        },
        {
          text: 'An exemption from any duty to be licensed.',
          why: 'Exempt means not subject to an obligation. Transacting insurance still requires a license for a specific line of authority.',
        },
        {
          text: 'A commission agreement and no license.',
          why: 'A commission is payment for placing insurance. It is illegal to act as a producer or agency without a license for a specific line of authority.',
        },
        {
          text: 'A license for a specific line of authority.',
          why: 'A person must be licensed for a specific line of authority to transact insurance.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q29',
      'What is licensing meant to ensure about a producer?',
      [
        {
          text: 'The producer meets the educational and ethical standards required for duties to the insurer and the public.',
          why: 'Licensing is meant to ensure that a producer meets the educational and ethical standards required to fulfill responsibilities to the insurer and the public.',
          correct: true,
        },
        {
          text: 'The producer is exempt from licensure fees and procedures.',
          why: 'Licensing sets the requirements, procedures, and fees for qualification, licensure, and appointment. Its aim is the required educational and ethical standards.',
        },
        {
          text: 'An unlicensed agency may transact insurance for the public.',
          why: 'It is illegal to act as a producer or agency without a license. Licensing is meant to ensure the educational and ethical standards owed to the insurer and the public.',
        },
        {
          text: 'Competence and trustworthiness can be ignored.',
          why: 'A license is issued or renewed when the person is competent and trustworthy, among other conditions. Licensing is meant to ensure the required educational and ethical standards.',
        },
      ],
    ),
    question(
      'c15q30',
      'Which purpose is stated for licensing in this state?',
      [
        {
          text: 'To reduce marketing freedom and discourage consumer-level competition.',
          why: 'Licensing is meant to provide maximum freedom of marketing methods consistent with the interests of the public, and to preserve and encourage competition at the consumer level.',
        },
        {
          text: 'To promote the professional competence of producers, brokers, and consultants.',
          why: 'The purpose of licensing in this state includes promoting the professional competence of producers, brokers, and consultants.',
          correct: true,
        },
        {
          text: 'To regulate marketing practices apart from the Insurance Code.',
          why: 'Licensing is meant to regulate marketing practices in conformity with the Insurance Code and to govern qualifications and procedures for licensing producers.',
        },
        {
          text: 'To leave producer licensing qualifications ungoverned.',
          why: 'The stated purpose includes governing the qualifications and procedures for licensing producers, along with promoting professional competence.',
        },
      ],
    ),
    question(
      'c15q31',
      'Which natural person meets the conditions for the Commissioner to issue or renew a producer, broker, or consultant license?',
      [
        {
          text: 'A person under 18 who has not paid the fees.',
          why: 'The person must be at least 18, pay the fees, and meet the other stated conditions.',
        },
        {
          text: 'A person who has committed an act that is grounds for denial, suspension, or revocation.',
          why: 'The Commissioner issues or renews the license if the person has not committed an act that is grounds for denial, suspension, or revocation.',
        },
        {
          text: 'A person at least 18 who meets the education, examination, and training requirements, pays the fees, has not committed an act that is grounds for denial, suspension, or revocation, and is competent and trustworthy.',
          why: 'The Commissioner will issue or renew a license to a natural person who wants to act as a producer, broker, or consultant when every one of those conditions is met.',
          correct: true,
        },
        {
          text: 'A person who skips the applicable education, examination, and training requirements.',
          why: 'The person must satisfy the applicable education, examination, and training requirements, along with the age, fee, conduct, and trustworthiness conditions.',
        },
      ],
    ),
    question(
      'c15q32',
      'Who makes the fingerprint check when the Department requires a criminal background check?',
      [
        {
          text: 'Only the insurer that pays the agent’s commission.',
          why: 'A commission is payment by the insurance company for placing insurance. The fingerprint check is by the Utah Bureau of Criminal Identification and the FBI.',
        },
        {
          text: 'Only the legislature that enacts the Insurance Code.',
          why: 'A statute is a formal written law enacted by the legislature. The applicant consents to a fingerprint check by the Utah Bureau of Criminal Identification and the FBI.',
        },
        {
          text: 'The applicant alone, with no criminal-identification bureau.',
          why: 'The applicant submits a fingerprint card and consents to the check. The check itself is by the Utah Bureau of Criminal Identification and the FBI.',
        },
        {
          text: 'The Utah Bureau of Criminal Identification and the FBI.',
          why: 'When the Department requires a criminal background check, the applicant submits a fingerprint card and consents to a fingerprint check by the Utah Bureau of Criminal Identification and the FBI.',
          correct: true,
        },
      ],
    ),
  ],
  'c15-types': [
    question(
      'c15q33',
      'Whom does a producer represent?',
      [
        {
          text: 'At least one insurance company.',
          why: 'A producer represents at least one insurance company.',
          correct: true,
        },
        {
          text: 'Only claimants, and never an insurance company.',
          why: 'Adjusters do their work for an insurer, a policyholder, or a claimant. A producer represents at least one insurance company.',
        },
        {
          text: 'The public for a fee, with no company to represent.',
          why: 'Consultants advise the public for a fee. A producer represents at least one insurance company.',
        },
        {
          text: 'Only the home-state licensing office.',
          why: 'A nonresident applicant works with the home state and the Commissioner for licensing. A producer represents at least one insurance company.',
        },
      ],
    ),
    question(
      'c15q34',
      'When is a person eligible for a consultant license?',
      [
        {
          text: 'As soon as the person holds any limited license.',
          why: 'A limited license can include lines such as limited-line credit, travel, or bail bond agent. Consultant eligibility requires preparatory work during at least 3 of the 4 years before the application.',
        },
        {
          text: 'After at least 3 of the 4 years before the application were spent in work that would prepare the person to be a consultant.',
          why: 'A person is eligible only after at least 3 of the 4 years before the application were spent in work that would prepare the person to be a consultant.',
          correct: true,
        },
        {
          text: 'Only after the person is able to bind life and health coverage.',
          why: 'Life and health producers generally cannot bind coverage or alter or modify it. Consultant eligibility depends on the preparatory work during at least 3 of the 4 years before the application.',
        },
        {
          text: 'After giving advice with no written fee agreement.',
          why: 'The fee must be agreed in writing before the services are performed. Eligibility still requires that preparatory work during at least 3 of the 4 years before the application.',
        },
      ],
    ),
    question(
      'c15q35',
      'What can property and casualty producers usually do?',
      [
        {
          text: 'Alter or modify life and health coverage.',
          why: 'Life and health producers generally cannot bind coverage or alter or modify it. Property and casualty producers can usually bind coverage.',
        },
        {
          text: 'Add surplus lines with none of the required experience.',
          why: 'Surplus lines follow producer experience in substantially the same license class, or qualifying employment by an insurer. Property and casualty producers can usually bind coverage.',
        },
        {
          text: 'Bind coverage.',
          why: 'Property and casualty producers can usually bind coverage.',
          correct: true,
        },
        {
          text: 'Act as a consultant without the conflict-of-interest disclosure.',
          why: 'A licensee may not act as a consultant, producer, or broker without complying with the conflict-of-interest disclosure. Property and casualty producers can usually bind coverage.',
        },
      ],
    ),
    question(
      'c15q36',
      'Which lines can a producer license include?',
      [
        {
          text: 'Only limited-line credit, travel, and motor club.',
          why: 'Those lines fit a limited license. A producer license can include life insurance, variable contracts, accident and health, property, casualty, title insurance, and personal lines.',
        },
        {
          text: 'Only bail bond agent and customer service representative.',
          why: 'Bail bond agent and customer service representative are limited-license authorities. A producer license uses the broader lines named for that license.',
        },
        {
          text: 'Only legal expense and car-rental-related insurance.',
          why: 'Legal expense and car-rental-related insurance fit a limited license. A producer license can include the life, health, property, casualty, title, and personal lines listed for it.',
        },
        {
          text: 'Life insurance, variable contracts, accident and health, property, casualty including surety and other bonds, title insurance, and personal lines.',
          why: 'A producer license can include life insurance, variable contracts, accident and health, property, casualty including surety and other bonds, title insurance, and personal lines.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q37',
      'Which authority can a limited license include?',
      [
        {
          text: 'Bail bond agent.',
          why: 'A limited license can include limited-line credit, travel, motor club, car-rental-related insurance, legal expense, bail bond agent, and customer service representative.',
          correct: true,
        },
        {
          text: 'Variable contracts.',
          why: 'Variable contracts are a line a producer license can include. Bail bond agent is one of the limited-license authorities.',
        },
        {
          text: 'Title insurance.',
          why: 'Title insurance is a producer-license line. A limited license can include bail bond agent and the other limited lines named in this section.',
        },
        {
          text: 'Personal lines.',
          why: 'Personal lines belong on a producer license. A limited license can include bail bond agent and the other limited lines named here.',
        },
      ],
    ),
    question(
      'c15q38',
      'Which experience allows a producer to add surplus lines?',
      [
        {
          text: 'Producer status in a different license class for a shorter time than the rule states.',
          why: 'The producer path requires Utah or another state, in substantially the same license class, for at least 3 of the 4 years immediately before the application.',
        },
        {
          text: 'Being a producer in Utah or another state, in substantially the same license class, for at least 3 of the 4 years immediately before the application.',
          why: 'A producer may add surplus lines after that experience, or after regular employment for that period by an insurer in work that would prepare the person to act as an insurance broker.',
          correct: true,
        },
        {
          text: 'Insurer employment in work that would not prepare the person to act as an insurance broker.',
          why: 'The employment alternative requires work that would prepare the person to act as an insurance broker for that period. Work that would not prepare the person does not qualify.',
        },
        {
          text: 'Consultant advice with neither producer experience nor qualifying insurer employment.',
          why: 'Consultants advise the public for a fee. Surplus lines are added after the stated producer experience or the qualifying insurer employment.',
        },
      ],
    ),
    question(
      'c15q39',
      'What must a licensee follow before acting as a consultant, producer, or broker?',
      [
        {
          text: 'A duty to bind every life and health application.',
          why: 'Life and health producers may solicit, receive, and forward applications, and they generally cannot bind coverage. The licensee must comply with the conflict-of-interest disclosure.',
        },
        {
          text: 'A duty to drop every current appointment.',
          why: 'Producers must keep at least one current appointment and meet any continuing-education requirement. The disclosure rule still applies before acting as a consultant, producer, or broker.',
        },
        {
          text: 'The conflict-of-interest disclosure.',
          why: 'A licensee may not act as a consultant, producer, or broker without complying with the conflict-of-interest disclosure.',
          correct: true,
        },
        {
          text: 'A home-state rule that refuses nonresident licenses to Utah residents.',
          why: 'Reciprocity means the home state awards nonresident licenses to residents of Utah on the same basis. Acting as a consultant, producer, or broker requires the conflict-of-interest disclosure.',
        },
      ],
    ),
    question(
      'c15q40',
      'What must a consultant tell the client before consulting?',
      [
        {
          text: 'Only an oral fee note after the services are performed.',
          why: 'The fee must be agreed in writing before the services are performed. The interest disclosure is made prominently and in writing before consulting.',
        },
        {
          text: 'That no producer or broker interest exists, even when one does.',
          why: 'The consultant must disclose any interest as a producer or broker, or any relationship to an insurer, producer, or broker.',
        },
        {
          text: 'That the recommendations need not be scrutinized.',
          why: 'The disclosure must state that the recommendations should be scrutinized because of those interests. It is made prominently and in writing before consulting.',
        },
        {
          text: 'Any producer or broker interest, or any insurer, producer, or broker relationship, prominently and in writing, and that the recommendations should be scrutinized.',
          why: 'Before consulting, the consultant must disclose those interests and relationships to the client and state that the recommendations should be scrutinized because of them.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q41',
      'When must the consultant’s fee be agreed?',
      [
        {
          text: 'In writing before the services are performed.',
          why: 'The fee must be agreed in writing before the services are performed.',
          correct: true,
        },
        {
          text: 'Orally, after the report is delivered.',
          why: 'The fee must be agreed in writing before the services are performed. Any report must contain a copy of the disclosure.',
        },
        {
          text: 'Only if the client later buys through a broker.',
          why: 'The written fee agreement comes before the services are performed. It is not postponed until a purchase through a broker.',
        },
        {
          text: 'After property and casualty coverage is bound.',
          why: 'Property and casualty producers can usually bind coverage. The consultant’s fee must be agreed in writing before the services are performed.',
        },
      ],
    ),
    question(
      'c15q42',
      'For whom do adjusters direct the investigation, negotiation, or settlement of a claim?',
      [
        {
          text: 'Only a consultant who charges a fee for policy advice.',
          why: 'Consultants advise the public for a fee. Adjusters do that work for an insurer, a policyholder, or a claimant.',
        },
        {
          text: 'An insurer, a policyholder, or a claimant.',
          why: 'Insurance adjusting means directing the investigation, negotiation, or settlement of a claim, and adjusters do that work for an insurer, a policyholder, or a claimant.',
          correct: true,
        },
        {
          text: 'Only the home state that grants reciprocity.',
          why: 'Reciprocity means the home state awards nonresident licenses to residents of Utah on the same basis. Adjusters work for an insurer, a policyholder, or a claimant.',
        },
        {
          text: 'Only a producer soliciting life and health applications.',
          why: 'Life and health producers may solicit, receive, and forward applications. Adjusters work for an insurer, a policyholder, or a claimant.',
        },
      ],
    ),
    question(
      'c15q43',
      'What must a broker disclose in writing when a person applies through the broker?',
      [
        {
          text: 'That the broker is the producer of the potential insurer.',
          why: 'The written disclosure states that the broker is not the producer of the potential insurer.',
        },
        {
          text: 'That an insurer is financially responsible for the broker’s conduct.',
          why: 'The disclosure states that the applicant likely does not have the benefit of an insurer being financially responsible for the broker’s conduct.',
        },
        {
          text: 'That the broker is not the producer of the potential insurer, and that the applicant likely does not have the benefit of an insurer being financially responsible for the broker’s conduct.',
          why: 'When a person applies through a broker, the broker must disclose both of those points in writing.',
          correct: true,
        },
        {
          text: 'That brokers need not comply with conflict-of-interest disclosure.',
          why: 'A licensee may not act as a consultant, producer, or broker without complying with the conflict-of-interest disclosure. The broker’s application notice is a separate writing.',
        },
      ],
    ),
    question(
      'c15q44',
      'What must the home state do for nonresident licensing to be reciprocity?',
      [
        {
          text: 'Require a written examination of every Utah resident.',
          why: 'A qualifying nonresident may be licensed without a written examination. Reciprocity means the home state awards nonresident licenses to residents of Utah on the same basis.',
        },
        {
          text: 'Refuse nonresident licenses to residents of Utah.',
          why: 'Reciprocity means the home state awards nonresident licenses to residents of Utah on the same basis.',
        },
        {
          text: 'License the person only as a consultant.',
          why: 'A consultant advises the public for a fee. Reciprocity is the home state’s award of nonresident licenses to residents of Utah on the same basis.',
        },
        {
          text: 'Award nonresident licenses to residents of Utah on the same basis.',
          why: 'The home state must award nonresident licenses to residents of Utah on the same basis. That is reciprocity.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q45',
      'What do consultants do?',
      [
        {
          text: 'Advise the public, for a fee, about the benefits, advantages, and disadvantages of policies.',
          why: 'Consultants advise the public, for a fee, about the benefits, advantages, and disadvantages of policies. The license uses the same lines of authority as a producer license.',
          correct: true,
        },
        {
          text: 'Bind property and casualty coverage for an insurer.',
          why: 'Property and casualty producers can usually bind coverage. Consultants advise the public for a fee about policy benefits, advantages, and disadvantages.',
        },
        {
          text: 'Direct the investigation, negotiation, or settlement of a claim.',
          why: 'That is insurance adjusting. Consultants advise the public for a fee about the benefits, advantages, and disadvantages of policies.',
        },
        {
          text: 'Represent at least one insurer by soliciting applications only.',
          why: 'A producer represents at least one insurance company. Consultants advise the public for a fee about policy benefits, advantages, and disadvantages.',
        },
      ],
    ),
    question(
      'c15q46',
      'Who may be issued an independent or public adjuster license?',
      [
        {
          text: 'Anyone who solicits applications without the Code’s requirements.',
          why: 'Life and health producers may solicit, receive, and forward applications. An adjuster license requires the education, examination, and character requirements in the Insurance Code.',
        },
        {
          text: 'A person who meets the education, examination, and character requirements in the Insurance Code.',
          why: 'An independent or public adjuster license may be issued to a person who meets the education, examination, and character requirements in the Insurance Code.',
          correct: true,
        },
        {
          text: 'A nonresident who is out of good standing in the home state.',
          why: 'A nonresident producer must be in good standing, among other conditions, for licensing without a written examination. Adjuster licensing uses the education, examination, and character requirements.',
        },
        {
          text: 'A broker who omits the written disclosure to an applicant.',
          why: 'A broker must make the stated written disclosure when a person applies through the broker. An adjuster license requires the education, examination, and character requirements in the Insurance Code.',
        },
      ],
    ),
  ],
  'c15-maintain': [
    question(
      'c15q47',
      'What is true of a producer license that is properly renewed?',
      [
        {
          text: 'It ends when the renewal window opens.',
          why: 'The renewal window opens 90 days before the license expires. A properly renewed license stays in effect unless it is suspended or revoked.',
        },
        {
          text: 'It lasts only 1 year after it becomes inactive.',
          why: 'A lapsed or voluntarily surrendered license may be reinstated within 1 year of the day it became inactive. A properly renewed license stays in effect unless it is suspended or revoked.',
        },
        {
          text: 'It stays in effect unless it is suspended or revoked.',
          why: 'A producer license stays in effect unless it is suspended or revoked, as long as it is properly renewed.',
          correct: true,
        },
        {
          text: 'It ends if hours are earned during the 2-year period.',
          why: 'Hours may be earned at any time during the 2-year period. A properly renewed license stays in effect unless it is suspended or revoked.',
        },
      ],
    ),
    question(
      'c15q48',
      'How often is a producer license renewed?',
      [
        {
          text: 'Every 90 days.',
          why: 'The renewal window opens 90 days before the license expires. The license is renewed every 2 years.',
        },
        {
          text: 'Within 30 days after an address change.',
          why: 'A change in residence address, business address, or telephone number is reported within 30 days. Renewal is every 2 years.',
        },
        {
          text: 'Only after it has been inactive for 1 year.',
          why: 'Reinstatement of a lapsed or surrendered license may occur within 1 year of the day it became inactive. The renewal cycle is every 2 years.',
        },
        {
          text: 'Every 2 years.',
          why: 'A producer license is renewed every 2 years. The producer submits the renewal forms, any required fees, and proof of continuing education.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q49',
      'What does the producer submit to renew?',
      [
        {
          text: 'The renewal forms, any required fees, and proof of continuing education.',
          why: 'The producer submits the renewal forms, any required fees, and proof of continuing education.',
          correct: true,
        },
        {
          text: 'Only a request to carry credits into the next period.',
          why: 'Credits do not carry over from one licensing period to the next. Renewal requires the forms, any required fees, and proof of continuing education.',
        },
        {
          text: 'A fee waiver when no extenuating circumstance is claimed.',
          why: 'A waiver of fees, examination requirements, or other sanctions may be requested for military service or another extenuating circumstance. Ordinary renewal still needs the forms, fees, and proof of continuing education.',
        },
        {
          text: 'Notice that an assumed name was used with no prior notice.',
          why: 'A licensee who does business under a name other than the legal name must notify the Commissioner before using the assumed name. Renewal requires the forms, fees, and proof of continuing education.',
        },
      ],
    ),
    question(
      'c15q50',
      'When does the renewal window open?',
      [
        {
          text: 'On the day a lapsed license becomes inactive.',
          why: 'Reinstatement is measured from the day the license became inactive. The renewal window opens 90 days before the license expires.',
        },
        {
          text: '90 days before the license expires.',
          why: 'The renewal window opens 90 days before the license expires.',
          correct: true,
        },
        {
          text: '30 days after a change of residence address.',
          why: 'A residence, business-address, or telephone change is reported within 30 days. The renewal window opens 90 days before the license expires.',
        },
        {
          text: '1 year after the producer misses renewal.',
          why: 'Reinstatement may be requested within 1 year. The renewal window opens 90 days before the license expires.',
        },
      ],
    ),
    question(
      'c15q51',
      'When must a licensee notify the Commissioner about doing business under a name other than the legal name?',
      [
        {
          text: 'Within 30 days after the assumed name is already in use.',
          why: 'Address and telephone changes are reported within 30 days. An assumed name requires notice before the licensee uses a name other than the legal name.',
        },
        {
          text: 'Only when a lapsed license is reinstated.',
          why: 'Reinstatement applies to a license that lapsed or was voluntarily surrendered. The assumed-name notice comes before that name is used.',
        },
        {
          text: 'Before using the assumed name.',
          why: 'A licensee who does business under a name other than the legal name must notify the Commissioner before using the assumed name.',
          correct: true,
        },
        {
          text: 'Only if the name change is a change of resident state.',
          why: 'A nonresident license can lapse if the licensee does not keep an active license in the resident state. The assumed-name rule is notice before using a name other than the legal name.',
        },
      ],
    ),
    question(
      'c15q52',
      'Which change must every Utah producer or broker notify the Commissioner about in writing?',
      [
        {
          text: 'A course repeated for credit in a later continuation period.',
          why: 'A course may be repeated for credit, but not more than once in the same license continuation period. The 30-day written notice is for a residence address, business address, or telephone number change.',
        },
        {
          text: 'Ethics hours earned during the 2-year period.',
          why: 'At least 3 of the 24 hours must be ethics, and hours may be earned at any time during the 2-year period. The 30-day notice covers a residence, business-address, or telephone change.',
        },
        {
          text: 'Credits that end because they do not carry over.',
          why: 'Credits do not carry over from one licensing period to the next. The 30-day written notice is for a change in residence address, business address, or telephone number.',
        },
        {
          text: 'A change in residence address, business address, or telephone number.',
          why: 'Every Utah producer or broker must notify the Commissioner in writing within 30 days of a change in residence address, business address, or telephone number.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q53',
      'How many of the continuing-education hours must be ethics?',
      [
        {
          text: 'At least 3 of the 24 hours.',
          why: 'Producers, brokers, and adjusters must complete at least 24 hours every 2 years, before renewal, and at least 3 of the 24 hours must be ethics. Continuing education protects the public by keeping professional standards high and by maintaining and improving the skills of licensed producers.',
          correct: true,
        },
        {
          text: 'At least 12 hours, with ethics left out.',
          why: 'At least 12 hours, one half of the total, must be classroom courses. Ethics is a separate minimum of at least 3 of the 24 hours.',
        },
        {
          text: 'All 24 hours.',
          why: 'The full requirement is at least 24 hours every 2 years. Ethics must be at least 3 of those 24 hours.',
        },
        {
          text: 'No ethics hours when the rest are home study.',
          why: 'The remaining hours may be home study, video recording, experience credit, or another approved method. At least 3 of the 24 hours must still be ethics.',
        },
      ],
    ),
    question(
      'c15q54',
      'How much of the continuing education must be classroom courses?',
      [
        {
          text: 'At least 3 hours, counted only as ethics.',
          why: 'At least 3 of the 24 hours must be ethics. Classroom study is separate: at least 12 hours, one half of the total.',
        },
        {
          text: 'At least 12 hours, one half of the total.',
          why: 'At least 12 hours, one half of the total, must be classroom courses.',
          correct: true,
        },
        {
          text: 'All 24 hours, so no other method can count.',
          why: 'The remaining hours may be home study, video recording, experience credit, or another approved method. Classroom courses must be at least 12 hours, one half of the total.',
        },
        {
          text: 'Only hours earned after the license has lapsed.',
          why: 'Hours may be earned at any time during the 2-year period, before renewal. The classroom minimum is at least 12 hours, one half of the total.',
        },
      ],
    ),
    question(
      'c15q55',
      'What must licensed producers and applicants report about actions and prosecutions?',
      [
        {
          text: 'Only a telephone-number change, with no report of an administrative action.',
          why: 'A telephone-number change is reported to the Commissioner along with a residence or business address change. Producers and applicants must also report administrative actions and criminal prosecutions.',
        },
        {
          text: 'Credits they want carried into the next licensing period.',
          why: 'Credits do not carry over from one licensing period to the next. The report here covers administrative actions and criminal prosecutions.',
        },
        {
          text: 'Any administrative action in another jurisdiction or by another regulatory agency in this state, and any criminal prosecution in any jurisdiction.',
          why: 'The report is filed with the application, or within 30 days of the start of the action or prosecution, and it includes a copy of the complaint or other relevant legal documents.',
          correct: true,
        },
        {
          text: 'A voluntary surrender filed more than 1 year after the license became inactive.',
          why: 'A lapsed or voluntarily surrendered license may be reinstated within 1 year of the day it became inactive. The report required here is the administrative-action or criminal-prosecution report.',
        },
      ],
    ),
    question(
      'c15q56',
      'What happens to continuing-education credits at the end of a licensing period?',
      [
        {
          text: 'They carry over and count in the next period.',
          why: 'Credits do not carry over from one licensing period to the next.',
        },
        {
          text: 'They renew the license by themselves during the 90-day window.',
          why: 'The renewal window opens 90 days before the license expires, and renewal still needs forms, fees, and proof of continuing education. Credits do not carry over.',
        },
        {
          text: 'They replace the duty to report a criminal prosecution.',
          why: 'Administrative actions and criminal prosecutions must still be reported. Credits do not carry over from one licensing period to the next.',
        },
        {
          text: 'They do not carry over from one licensing period to the next.',
          why: 'Credits do not carry over from one licensing period to the next. A course may be repeated for credit, but not more than once in the same license continuation period.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q57',
      'What may a licensee request when a lapse is due to military service or a long-term medical disability?',
      [
        {
          text: 'Reinstatement no later than 1 year after the lapse, and a waiver of fees, examination requirements, or other sanctions for missing renewal.',
          why: 'If the lapse is due to military service or another extenuating circumstance, such as a long-term medical disability, the licensee may request reinstatement no later than 1 year after the lapse and may request that waiver.',
          correct: true,
        },
        {
          text: 'Carryover of unused credits from the prior period.',
          why: 'Credits do not carry over from one licensing period to the next. The military or medical request is reinstatement and a waiver of fees, examination requirements, or other sanctions.',
        },
        {
          text: 'Use of an assumed name with no notice to the Commissioner.',
          why: 'An assumed name requires notice before it is used. The extenuating-circumstance request is reinstatement and the stated waiver.',
        },
        {
          text: 'Ordinary renewal with no forms, fees, or proof of continuing education.',
          why: 'Ordinary renewal requires the renewal forms, any required fees, and proof of continuing education. The waiver is for military service or another extenuating circumstance such as a long-term medical disability.',
        },
      ],
    ),
    question(
      'c15q58',
      'Which failure causes a license to lapse?',
      [
        {
          text: 'Finishing continuing education before submitting the renewal.',
          why: 'A license lapses if the licensee fails to finish continuing education before submitting the renewal. Completing it before submission follows the rule.',
        },
        {
          text: 'Failing to submit a completed renewal.',
          why: 'A license lapses if the licensee fails to pay fees when due, finish continuing education before submitting the renewal, submit a completed renewal, submit other documents required for that license type, or, for a nonresident, keep an active license in the resident state.',
          correct: true,
        },
        {
          text: 'Notifying the Commissioner before using an assumed name.',
          why: 'Notice before using an assumed name is required. A lapse follows the listed failures, including failure to submit a completed renewal.',
        },
        {
          text: 'Earning the required hours at any time during the 2-year period.',
          why: 'Hours may be earned at any time during the 2-year period. A lapse follows failures such as not submitting a completed renewal.',
        },
      ],
    ),
  ],
  'c15-commissioner': [
    question(
      'c15q59',
      'What is the Insurance Commissioner’s place in the Department of Insurance?',
      [
        {
          text: 'A stand-in who may serve only while the Legislature is in session.',
          why: 'If the Commissioner dies, resigns, or is removed while the Legislature is not in session, a successor may serve as acting Commissioner until the Senate can consent. The Commissioner is the chief officer of the Department.',
        },
        {
          text: 'An officer who sets premium rates and establishes fines and penalties.',
          why: 'The Commissioner does not set premium rates or establish fines and penalties, because those are defined by state law. The Commissioner is the chief officer of the Department of Insurance.',
        },
        {
          text: 'The chief officer who exercises the powers given to the Department.',
          why: 'The Insurance Commissioner is the chief officer of the Department of Insurance and exercises the powers given to the Department.',
          correct: true,
        },
        {
          text: 'A licensee who stores other producers’ transaction records.',
          why: 'Licensees must keep separate records of every transaction. The Commissioner is the chief officer of the Department of Insurance.',
        },
      ],
    ),
    question(
      'c15q60',
      'Who may serve if the Commissioner dies, resigns, or is removed while the Legislature is not in session?',
      [
        {
          text: 'The insurer under examination, until the exam is paid for.',
          why: 'The company being examined pays the cost. In this vacancy, a successor may serve as acting Commissioner until the Senate can consent.',
        },
        {
          text: 'Any licensee whose records are open during business hours.',
          why: 'Licensees keep records available during all business hours. The acting role is a successor until the Senate can consent.',
        },
        {
          text: 'The Senate alone, with nobody serving until it meets.',
          why: 'A successor may serve as acting Commissioner until the Senate can consent. Senate consent is the later step.',
        },
        {
          text: 'A successor, as acting Commissioner, until the Senate can consent.',
          why: 'If the Commissioner dies, resigns, or is removed while the Legislature is not in session, a successor may serve as acting Commissioner until the Senate can consent.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q61',
      'Who may remove the Commissioner?',
      [
        {
          text: 'The governor.',
          why: 'The governor may remove the Commissioner. When the office is vacant, or the Commissioner cannot perform the duties, the governor fills the position.',
          correct: true,
        },
        {
          text: 'The company that pays the examination cost.',
          why: 'The company being examined pays the cost. Removal of the Commissioner belongs to the governor.',
        },
        {
          text: 'A licensee during an inspection of transaction records.',
          why: 'Licensees must keep records available for inspection on reasonable notice. The governor may remove the Commissioner.',
        },
        {
          text: 'Another state’s insurance department that writes an exam report.',
          why: 'For a foreign insurer, the Commissioner may accept an examination report from another state’s insurance department. The governor may remove the Commissioner.',
        },
      ],
    ),
    question(
      'c15q62',
      'Who fills the office when it is vacant or the Commissioner cannot perform the duties?',
      [
        {
          text: 'The Senate, acting alone.',
          why: 'The governor appoints the Commissioner with the consent of the Senate, and an acting Commissioner may serve until the Senate can consent. The governor fills a vacancy or an inability to serve.',
        },
        {
          text: 'The governor.',
          why: 'When the office is vacant, or the Commissioner cannot perform the duties, the governor fills the position.',
          correct: true,
        },
        {
          text: 'The domestic insurer examined most recently.',
          why: 'The Commissioner must examine domestic and foreign insurers at least once every 5 years. Filling the vacant office is the governor’s duty.',
        },
        {
          text: 'The federal government.',
          why: 'The Commissioner may accept a foreign insurer’s examination report from the federal government. The governor fills the position when the office is vacant or the duties cannot be performed.',
        },
      ],
    ),
    question(
      'c15q63',
      'Which task is part of the Commissioner’s work?',
      [
        {
          text: 'Setting premium rates.',
          why: 'The Commissioner does not set premium rates or establish fines and penalties, which are defined by state law. The Commissioner regulates the Department’s internal affairs and enforces the insurance laws.',
        },
        {
          text: 'Establishing fines and penalties.',
          why: 'Fines and penalties are defined by state law, and the Commissioner does not establish them. The Commissioner may make reasonable rules to carry out the Insurance Code.',
        },
        {
          text: 'Regulating the Department’s internal affairs and enforcing the insurance laws.',
          why: 'The Commissioner regulates the Department’s internal affairs, enforces the insurance laws, and may make reasonable rules to carry out the Insurance Code.',
          correct: true,
        },
        {
          text: 'Keeping each producer’s transaction records in the producer’s place.',
          why: 'Licensees must keep separate records of every transaction. The Commissioner regulates internal affairs and enforces the insurance laws.',
        },
      ],
    ),
    question(
      'c15q64',
      'What may the Commissioner do with licenses and certificates of authority?',
      [
        {
          text: 'Only issue them.',
          why: 'The Commissioner issues, suspends, revokes, or denies licenses and certificates of authority.',
        },
        {
          text: 'Only deny them.',
          why: 'Denial is one action, together with issuing, suspending, and revoking licenses and certificates of authority.',
        },
        {
          text: 'Leave every license decision to the governor.',
          why: 'The governor appoints the Commissioner with the consent of the Senate and may remove the Commissioner. The Commissioner issues, suspends, revokes, or denies licenses and certificates of authority.',
        },
        {
          text: 'Issue, suspend, revoke, or deny them.',
          why: 'The Commissioner issues, suspends, revokes, or denies licenses and certificates of authority.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q65',
      'What must the separate transaction records include for each contract?',
      [
        {
          text: 'The insurer and insured names, the premium, the commissions or other compensation, and the subject of the insurance.',
          why: 'The records include each insurance contract procured or issued through the licensee with those details. They also name other producers or brokers from whom business is accepted, persons to whom commissions or allowances are promised or paid, and consumer complaints forwarded by an insurance regulator.',
          correct: true,
        },
        {
          text: 'Only the Commissioner’s rules, with no contract or premium entries.',
          why: 'The Commissioner may make reasonable rules. The licensee’s records still include each contract and the names, premium, compensation, and subject of the insurance.',
        },
        {
          text: 'Only the insurer names, leaving out premium and the subject of insurance.',
          why: 'The records include the names of the insurers and insureds, the premium, the commissions or other compensation, and the subject of the insurance.',
        },
        {
          text: 'Orders that set fines and penalties.',
          why: 'The Commissioner does not establish fines and penalties, which are defined by state law. The transaction records cover the contract details named in this section.',
        },
      ],
    ),
    question(
      'c15q66',
      'Why are an insurer’s books and records examined?',
      [
        {
          text: 'So the company can shift the cost to the governor.',
          why: 'The company being examined pays the cost. Examinations are meant to keep companies solvent and in compliance with laws on licensing, policy forms, rates, claims, and market conduct.',
        },
        {
          text: 'To keep companies solvent and in compliance with laws on licensing, policy forms, rates, claims, and market conduct.',
          why: 'Examinations of insurers’ books and records are meant to keep companies solvent and in compliance with those laws.',
          correct: true,
        },
        {
          text: 'So the Commissioner can establish fines and penalties.',
          why: 'The Commissioner does not establish fines and penalties, which are defined by state law. Examinations aim at solvency and compliance with the listed laws.',
        },
        {
          text: 'So domestic insurers can skip examination.',
          why: 'The Commissioner must examine domestic and foreign insurers at least once every 5 years and may examine an authorized insurer at any time. The purpose is solvency and compliance.',
        },
      ],
    ),
    question(
      'c15q67',
      'When may the Commissioner examine an authorized insurer?',
      [
        {
          text: 'Only once every 5 years, and at no earlier time.',
          why: 'Domestic and foreign insurers must be examined at least once every 5 years. The Commissioner may also examine an authorized insurer at any time.',
        },
        {
          text: 'Only when the insurer volunteers.',
          why: 'The Commissioner may examine an authorized insurer at any time. The power is not limited to an insurer request.',
        },
        {
          text: 'At any time.',
          why: 'The Commissioner may examine an authorized insurer at any time, and must examine domestic and foreign insurers at least once every 5 years.',
          correct: true,
        },
        {
          text: 'Only after current-year records have been discarded.',
          why: 'Records must be available during all business hours for at least the current calendar year plus 3 years. An authorized insurer may be examined at any time.',
        },
      ],
    ),
    question(
      'c15q68',
      'Which examination report may the Commissioner accept for a foreign insurer?',
      [
        {
          text: 'Only a report written by the foreign insurer’s own staff.',
          why: 'The company being examined pays the cost. For a foreign insurer, the Commissioner may accept a report from another state’s insurance department, another Utah government agency, the federal government, or another state.',
        },
        {
          text: 'Only a licensee’s list of consumer complaints.',
          why: 'Licensee records include consumer complaints forwarded by an insurance regulator. A foreign-insurer exam report may come from the outside agencies named in this section.',
        },
        {
          text: 'Only a report the Senate prepares while giving consent.',
          why: 'Senate consent relates to the Commissioner’s appointment. A foreign-insurer report may come from another state’s insurance department, another Utah government agency, the federal government, or another state.',
        },
        {
          text: 'A report from another state’s insurance department, another Utah government agency, the federal government, or another state.',
          why: 'For a foreign insurer, the Commissioner may accept an examination report from any of those sources.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q69',
      'Who pays the cost of an examination?',
      [
        {
          text: 'The company being examined.',
          why: 'The company being examined pays the cost.',
          correct: true,
        },
        {
          text: 'The governor, as part of filling a vacancy.',
          why: 'The governor fills the position when the office is vacant or the Commissioner cannot perform the duties. The company being examined pays the examination cost.',
        },
        {
          text: 'Each licensee whose complaint a regulator forwarded.',
          why: 'Records include consumer complaints forwarded by an insurance regulator. The company being examined pays the examination cost.',
        },
        {
          text: 'The federal government, on every examination.',
          why: 'The federal government is one source whose report may be accepted for a foreign insurer. The company being examined pays the cost.',
        },
      ],
    ),
  ],
  'c15-company': [
    question(
      'c15q70',
      'When is an insurer solvent?',
      [
        {
          text: 'When it cannot meet its financial obligations.',
          why: 'If an insurer cannot meet its financial obligations, it is insolvent. An insurer is solvent when it has the assets to meet its financial obligations.',
        },
        {
          text: 'When it has the assets to meet its financial obligations.',
          why: 'An insurer is solvent if it has the assets to meet its financial obligations.',
          correct: true,
        },
        {
          text: 'When it uses a returned rate filing on the day of the return.',
          why: 'A returned filing may not be used for a policy issued or renewed on or after 60 days from the return. Solvency means the insurer has the assets to meet its financial obligations.',
        },
        {
          text: 'When it ends an appointment for cause and gives no circumstances.',
          why: 'A for-cause termination includes the fact that it was for cause and the specific circumstances. Solvency is a matter of assets and financial obligations.',
        },
      ],
    ),
    question(
      'c15q71',
      'Why do the Commissioner and the Department monitor an insurer’s financial strength?',
      [
        {
          text: 'So hazardous operation can continue for policyholders.',
          why: 'They monitor financial strength so that continued operation is not hazardous to policyholders, creditors, or the public.',
        },
        {
          text: 'So a producer can act as an insurer’s agent with no appointment.',
          why: 'A producer cannot act as an insurer’s agent unless that insurer appoints the producer. Monitoring asks whether continued operation is hazardous to policyholders, creditors, or the public.',
        },
        {
          text: 'So that continued operation is not hazardous to policyholders, creditors, or the public.',
          why: 'The Commissioner and the Department monitor financial strength so that continued operation is not hazardous to policyholders, creditors, or the public.',
          correct: true,
        },
        {
          text: 'So filed rates may be excessive.',
          why: 'Rate regulation is meant to keep rates from being excessive, inadequate, or unfairly discriminatory. Financial monitoring guards policyholders, creditors, and the public.',
        },
      ],
    ),
    question(
      'c15q72',
      'What must domestic and foreign insurers keep on deposit?',
      [
        {
          text: 'Only a producer’s commission after termination.',
          why: 'Termination of an appointment is submitted to the Department. The deposit is the required capital for stock insurers and the minimum permanent surplus for mutual insurers.',
        },
        {
          text: 'A prohibited form for 10 days and then no record.',
          why: 'A prohibited form must be discontinued within 15 days, and a record of its use is kept for 5 years. The deposit is capital for stock insurers and minimum permanent surplus for mutual insurers.',
        },
        {
          text: 'No capital or surplus until a certificate is already renewed.',
          why: 'The Commissioner will not issue or renew a certificate of authority until the insurer complies. The deposit is the required capital and the minimum permanent surplus.',
        },
        {
          text: 'The required capital for stock insurers and the minimum permanent surplus for mutual insurers.',
          why: 'Domestic and foreign insurers must keep that capital and surplus on deposit.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q73',
      'When will the Commissioner issue or renew a certificate of authority?',
      [
        {
          text: 'After the insurer complies with the deposit requirement.',
          why: 'The Commissioner will not issue or renew a certificate of authority until the insurer complies.',
          correct: true,
        },
        {
          text: 'Before the required capital or minimum permanent surplus is on deposit.',
          why: 'Domestic and foreign insurers must keep the required capital and minimum permanent surplus on deposit. The certificate waits until the insurer complies.',
        },
        {
          text: 'As soon as a rate filing is mailed, even if support is missing.',
          why: 'If the information used to set the rate is not enough, the Commissioner may ask for more. The certificate is issued or renewed when the insurer complies with the deposit requirement.',
        },
        {
          text: 'While the insurer is insolvent.',
          why: 'An insurer that cannot meet its financial obligations is insolvent. The certificate is not issued or renewed until the insurer complies.',
        },
      ],
    ),
    question(
      'c15q74',
      'What is rate regulation meant to prevent rates from being?',
      [
        {
          text: 'Filed with the Commissioner.',
          why: 'Insurers file premium rates with the Commissioner. Regulation is meant to keep rates from being excessive, inadequate, or unfairly discriminatory.',
        },
        {
          text: 'Excessive, inadequate, or unfairly discriminatory.',
          why: 'Rate regulation is meant to keep rates from being excessive, inadequate, or unfairly discriminatory, and to authorize and regulate cooperative action in rate-making.',
          correct: true,
        },
        {
          text: 'Accompanied by the information used to set the rate.',
          why: 'A filing must include the information used to set the rate. The purpose is to keep rates from being excessive, inadequate, or unfairly discriminatory.',
        },
        {
          text: 'Used by a mutual insurer that holds the minimum permanent surplus.',
          why: 'Mutual insurers keep the minimum permanent surplus on deposit. Rate regulation addresses rates that are excessive, inadequate, or unfairly discriminatory.',
        },
      ],
    ),
    question(
      'c15q75',
      'How does an insurer send the extra notice when a termination is for cause?',
      [
        {
          text: 'By waiting 30 days and then filing a new rate.',
          why: 'A rate filing waits 30 days before it becomes effective. A for-cause termination is sent by facsimile or as a PDF attached to an email, with the specific circumstances.',
        },
        {
          text: 'By discontinuing a prohibited form and sending nothing else.',
          why: 'A prohibited form must be discontinued within 15 days. A for-cause termination states that fact and the specific circumstances by facsimile or PDF email.',
        },
        {
          text: 'By facsimile or as a PDF attached to an email, with the for-cause fact and the specific circumstances.',
          why: 'If the termination is for cause, the insurer sends, by facsimile or as a PDF attached to an email, the fact that it was for cause and the specific circumstances.',
          correct: true,
        },
        {
          text: 'By placing the reason only in the 5-year form record.',
          why: 'The 5-year record covers a form that is no longer used. A for-cause termination is sent by facsimile or as a PDF attached to an email with the specific circumstances.',
        },
      ],
    ),
    question(
      'c15q76',
      'What happens if the insurer does not supply added rate information within 45 days of the Commissioner’s mailed notice?',
      [
        {
          text: 'The filing becomes effective after the 30-day wait.',
          why: 'A complete filing waits 30 days before it becomes effective. If the added information is not provided within 45 days, the filing is incomplete and unfiled and is returned as unavailable for use.',
        },
        {
          text: 'The insurer may use it for policies issued on or after 60 days from the return.',
          why: 'A returned filing may not be used for a policy issued or renewed on or after 60 days from the return. Missing the 45-day response makes the filing incomplete and unfiled.',
        },
        {
          text: 'The Commissioner must renew the certificate of authority.',
          why: 'A certificate of authority waits until the insurer complies with the deposit requirement. The incomplete rate filing is returned as unavailable for use.',
        },
        {
          text: 'The filing is incomplete and unfiled, and it is returned as unavailable for use.',
          why: 'If the insurer does not provide the information within 45 days of the Commissioner’s mailed notice, the filing is incomplete and unfiled, and it is returned as unavailable for use.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q77',
      'For which policy may a returned filing not be used?',
      [
        {
          text: 'A policy issued or renewed on or after 60 days from the return.',
          why: 'A returned filing may not be used for a policy issued or renewed on or after 60 days from the return.',
          correct: true,
        },
        {
          text: 'A policy that ended 5 years before the form was last used.',
          why: 'The 5-year period is the record kept after a form is no longer used. A returned rate filing may not be used for a policy issued or renewed on or after 60 days from the return.',
        },
        {
          text: 'A form the Commissioner has not prohibited.',
          why: 'The Commissioner may prohibit a form, and that form must be discontinued within 15 days. The 60-day rule limits use of a returned rate filing.',
        },
        {
          text: 'A specific risk during the 10 days after a higher rate is filed.',
          why: 'A higher rate than usual for a specific risk may be used if it is filed and not disapproved within 10 days. A returned filing may not be used on or after 60 days from the return.',
        },
      ],
    ),
    question(
      'c15q78',
      'How soon must a prohibited form be discontinued?',
      [
        {
          text: 'Within 60 days after a rate filing is returned.',
          why: 'A returned filing may not be used for a policy issued or renewed on or after 60 days from the return. A prohibited form must be discontinued within 15 days.',
        },
        {
          text: 'Within 15 days.',
          why: 'The Commissioner may prohibit a form. The form must then be discontinued within 15 days.',
          correct: true,
        },
        {
          text: 'Within 45 days of a request for more rate information.',
          why: 'The insurer has 45 days after the Commissioner’s mailed notice to provide added rate information. A prohibited form must be discontinued within 15 days.',
        },
        {
          text: 'Within 5 years after the form is first used.',
          why: 'After a form is no longer used, the insurer keeps a record for 5 years from the last day it was used, or from the last day any policy issued on that form is in effect. Discontinuance is within 15 days.',
        },
      ],
    ),
    question(
      'c15q79',
      'How long must an insurer keep a record of a form after the form is no longer used?',
      [
        {
          text: 'For 15 days after the Commissioner prohibits it.',
          why: 'A prohibited form must be discontinued within 15 days. The record of use is kept for 5 years from the last day the form was used, or from the last day any policy issued on that form is in effect.',
        },
        {
          text: 'For 30 days after an appointment or termination.',
          why: 'An appointment notice is filed within 15 days, and a termination is submitted within 30 days. The form record is kept for 5 years from the last day stated for that record.',
        },
        {
          text: 'For 5 years from the last day it was used, or from the last day any policy issued on that form is in effect.',
          why: 'After a form is no longer used, the insurer keeps a record of its use for that 5-year period.',
          correct: true,
        },
        {
          text: 'Only until the rate filing’s 30-day wait ends.',
          why: 'A rate filing waits 30 days before it becomes effective. The form record runs for 5 years from the last day it was used, or from the last day any policy issued on that form is in effect.',
        },
      ],
    ),
    question(
      'c15q80',
      'When must an insurer appoint a producer?',
      [
        {
          text: 'When the producer is not acting as that insurer’s agent.',
          why: 'A producer who is not acting as an insurer’s agent does not have to be appointed. Appointment is required before the producer acts as that insurer’s agent.',
        },
        {
          text: 'Only after a for-cause termination is sent by facsimile.',
          why: 'Facsimile or a PDF attached to an email carries the for-cause circumstances. Appointment is required before the producer acts as that insurer’s agent.',
        },
        {
          text: 'Only after a higher specific-risk rate is disapproved.',
          why: 'A higher rate for a specific risk may be used if it is filed and not disapproved within 10 days. Appointment is what allows the producer to act as that insurer’s agent.',
        },
        {
          text: 'Before the producer acts as that insurer’s agent.',
          why: 'A producer cannot act as an insurer’s agent unless that insurer appoints the producer. The insurer files an electronic notice of appointment, with the effective date, within 15 days of the appointment.',
          correct: true,
        },
      ],
    ),
  ],
  'c15-claims': [
    question(
      'c15q81',
      'Which statement about coverage is an unfair claims settlement practice?',
      [
        {
          text: 'Misrepresenting pertinent facts or policy provisions about coverage.',
          why: 'Misrepresenting pertinent facts or policy provisions about coverage is an unfair claims settlement practice if it is committed openly and in conscious disregard of the rules, or so often that it shows a general business practice.',
          correct: true,
        },
        {
          text: 'Affirming or denying coverage within a reasonable time after proof of loss is completed.',
          why: 'Failing to affirm or deny coverage within a reasonable time after proof-of-loss statements are completed is the listed violation. Doing so within a reasonable time is not that violation.',
        },
        {
          text: 'Making a good-faith prompt, fair, and equitable settlement once liability is reasonably clear.',
          why: 'The listed violation is not attempting in good faith to make prompt, fair, and equitable settlements once liability is reasonably clear.',
        },
        {
          text: 'Promptly explaining the policy basis for a denial in light of the facts or applicable law.',
          why: 'The violation is failing to promptly explain the policy basis, in light of the facts or applicable law, for a denial or a compromise offer.',
        },
      ],
    ),
    question(
      'c15q82',
      'Which treatment of claim communications is an unfair claims settlement practice?',
      [
        {
          text: 'Acknowledging claim communications and acting reasonably promptly.',
          why: 'Failing to acknowledge and act reasonably promptly on communications about claims is the unfair practice. A prompt acknowledgment is not that failure.',
        },
        {
          text: 'Failing to acknowledge and act reasonably promptly on communications about claims.',
          why: 'That failure is an unfair claims settlement practice if it is committed openly and in conscious disregard of the rules, or so often that it shows a general business practice.',
          correct: true,
        },
        {
          text: 'Paying after a reasonable investigation based on all available information.',
          why: 'Refusing to pay claims without a reasonable investigation based on all available information is the unfair practice. Payment after that investigation is not the refusal.',
        },
        {
          text: 'Including a statement of the coverage under which a payment is made.',
          why: 'Making claim payments without a statement of the coverage under which the payment is made is the unfair practice. Including the statement is not that violation.',
        },
      ],
    ),
    question(
      'c15q83',
      'Which investigation conduct is an unfair claims settlement practice?',
      [
        {
          text: 'Adopting and implementing reasonable standards for prompt investigation.',
          why: 'Failing to adopt and implement reasonable standards for prompt investigation is the unfair practice. Adopting those standards is not that failure.',
        },
        {
          text: 'Investigating all available information before refusing to pay.',
          why: 'Refusing to pay claims without a reasonable investigation based on all available information is the unfair practice. That investigation is what the rule describes as reasonable.',
        },
        {
          text: 'Refusing to pay claims without a reasonable investigation based on all available information.',
          why: 'That refusal is an unfair claims settlement practice if it is committed openly and in conscious disregard of the rules, or so often that it shows a general business practice.',
          correct: true,
        },
        {
          text: 'Promptly settling a part of a claim where liability is reasonably clear.',
          why: 'The unfair practice is failing to settle promptly a part of the claim where liability is reasonably clear, in order to influence settlement of other parts.',
        },
      ],
    ),
    question(
      'c15q84',
      'What offer amount makes a claims settlement an unfair practice because it pushes insureds into court?',
      [
        {
          text: 'A prompt, fair, and equitable settlement once liability is reasonably clear.',
          why: 'Not attempting in good faith to make prompt, fair, and equitable settlements once liability is reasonably clear is the unfair practice.',
        },
        {
          text: 'A compromise offer with a prompt explanation of the policy basis.',
          why: 'Failing to promptly explain the policy basis for a denial or a compromise offer is the unfair practice. A prompt explanation is not that failure.',
        },
        {
          text: 'Payment of what a reasonable person would have believed was due from the advertising.',
          why: 'The unfair practice is trying to settle for less than a reasonable person would have believed was due from written or printed advertising that accompanied the application.',
        },
        {
          text: 'Compelling insureds to sue by offering substantially less than the amounts ultimately recovered.',
          why: 'Compelling insureds to sue by offering substantially less than the amounts ultimately recovered is an unfair claims settlement practice under the stated standard.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q85',
      'Which use of advertising that accompanied the application is an unfair claims settlement practice?',
      [
        {
          text: 'Trying to settle for less than a reasonable person would have believed was due from that advertising.',
          why: 'Trying to settle for less than a reasonable person would have believed was due, based on written or printed advertising that accompanied the application, is an unfair claims settlement practice under the stated standard.',
          correct: true,
        },
        {
          text: 'Settling for the amount a reasonable person would have believed was due.',
          why: 'The violation is trying to settle for less than that amount. Paying what a reasonable person would have believed was due is not that practice.',
        },
        {
          text: 'Giving the insured notice before settling on an altered application.',
          why: 'The unfair practice is settling on an application altered without notice to, or the knowledge or consent of, the insured.',
        },
        {
          text: 'Stating the coverage that applies to the payment.',
          why: 'Making claim payments without a statement of the coverage under which the payment is made is the unfair practice.',
        },
      ],
    ),
    question(
      'c15q86',
      'When is settlement on an altered application an unfair claims settlement practice?',
      [
        {
          text: 'When the insured had notice, knowledge, and consent.',
          why: 'The unfair practice is settling on an application altered without notice to, or the knowledge or consent of, the insured.',
        },
        {
          text: 'When the application was altered without notice to, or the knowledge or consent of, the insured.',
          why: 'Settling on an application that was altered without notice to, or the knowledge or consent of, the insured is an unfair claims settlement practice under the stated standard.',
          correct: true,
        },
        {
          text: 'When coverage is affirmed within a reasonable time after proof of loss.',
          why: 'Failing to affirm or deny coverage within a reasonable time after proof-of-loss statements are completed is a separate listed practice.',
        },
        {
          text: 'When the insurer explains the basis for a denial.',
          why: 'Failing to promptly explain the policy basis for a denial is a separate listed failure. The altered-application practice turns on lack of notice, knowledge, or consent.',
        },
      ],
    ),
    question(
      'c15q87',
      'Which payment practice is an unfair claims settlement practice?',
      [
        {
          text: 'Paying a claim with a statement of the coverage under which the payment is made.',
          why: 'The unfair practice is making claim payments without that statement. Including the statement is not the violation.',
        },
        {
          text: 'Acknowledging a claim communication reasonably promptly.',
          why: 'Failing to acknowledge and act reasonably promptly on communications about claims is a different listed failure.',
        },
        {
          text: 'Making claim payments without a statement of the coverage under which the payment is made.',
          why: 'That payment practice is an unfair claims settlement practice if it is committed openly and in conscious disregard of the rules, or so often that it shows a general business practice.',
          correct: true,
        },
        {
          text: 'Implementing reasonable standards for prompt investigation.',
          why: 'Failing to adopt and implement reasonable standards for prompt investigation is the unfair practice. Implementing those standards is not the failure.',
        },
      ],
    ),
    question(
      'c15q88',
      'What public policy about appealing arbitration awards is an unfair claims settlement practice?',
      [
        {
          text: 'Paying an award for an insured without using an appeal to force a lower settlement.',
          why: 'The unfair practice is making known a policy of appealing arbitration awards in favor of insureds or claimants in order to force a settlement below the award.',
        },
        {
          text: 'Settling once liability is reasonably clear.',
          why: 'Not attempting in good faith to make prompt, fair, and equitable settlements once liability is reasonably clear is a different violation.',
        },
        {
          text: 'Investigating before refusing payment.',
          why: 'Refusing to pay without a reasonable investigation based on all available information is a different violation.',
        },
        {
          text: 'Making known a policy of appealing arbitration awards in favor of insureds or claimants in order to force a settlement below the award.',
          why: 'Making known a policy of appealing arbitration awards in favor of insureds or claimants in order to force a settlement below the award is an unfair claims settlement practice under the stated standard.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q89',
      'Which delay is an unfair claims settlement practice?',
      [
        {
          text: 'Delaying investigation or payment by requiring a preliminary claim report and then a formal proof of loss with substantially the same information.',
          why: 'Delaying investigation or payment by requiring a preliminary claim report and then a formal proof of loss that contains substantially the same information is an unfair claims settlement practice under the stated standard.',
          correct: true,
        },
        {
          text: 'Affirming or denying coverage within a reasonable time after proof-of-loss statements are completed.',
          why: 'Failing to affirm or deny coverage within a reasonable time after those statements are completed is the unfair practice.',
        },
        {
          text: 'Promptly settling the clear part of a claim without using it to influence other parts.',
          why: 'The unfair practice is failing to settle promptly a part of the claim where liability is reasonably clear, in order to influence settlement of other parts.',
        },
        {
          text: 'Explaining the policy basis for a denial in light of the facts or applicable law.',
          why: 'Failing to promptly explain that basis for a denial or a compromise offer is the unfair practice.',
        },
      ],
    ),
  ],
  'c15-fiduciary': [
    question(
      'c15q90',
      'What duty do producers have for premiums collected to forward to insurers or insureds?',
      [
        {
          text: 'They may treat the funds as their own and mix them freely.',
          why: 'The funds cannot be commingled with the licensee’s own money or money held in any other capacity. Producers who collect premiums act as trustees of that money.',
        },
        {
          text: 'They act as trustees and must account for the money until it is sent to the proper payee.',
          why: 'Producers who collect premiums act as trustees, hold the premiums in a fiduciary capacity, and must account for them until they are sent to the proper payee.',
          correct: true,
        },
        {
          text: 'They may take a commission from the insurance transaction as consultants.',
          why: 'A consultant may not pay or receive a commission or other compensation that results, directly or indirectly, from an insurance transaction. Collecting producers act as trustees of the premium.',
        },
        {
          text: 'Their accounting duty ends when the premium is deposited.',
          why: 'Producers must account for the premiums until they are sent to the proper payee. Deposit does not end that accounting.',
        },
      ],
    ),
    question(
      'c15q91',
      'Which money is outside the ban on commingling collected premiums?',
      [
        {
          text: 'Premiums not yet sent to the proper payee.',
          why: 'Those premiums stay in a fiduciary capacity and cannot be commingled with the licensee’s own money or money held in any other capacity.',
        },
        {
          text: 'Money held in some capacity other than the premium trust.',
          why: 'Money held in any other capacity is money with which premium funds cannot be commingled. The exception is bank charges and the licensee’s fee or commission.',
        },
        {
          text: 'Money needed to pay bank charges, or money that belongs to the licensee as a fee or commission.',
          why: 'The commingling limit does not apply to money needed to pay bank charges, or to money that belongs to the licensee as a fee or commission.',
          correct: true,
        },
        {
          text: 'The licensee’s own money placed in the premium account.',
          why: 'Premium funds cannot be commingled with the licensee’s own money. The exception is bank-charge money or money that already belongs to the licensee as a fee or commission.',
        },
      ],
    ),
    question(
      'c15q92',
      'Where may collected funds be deposited?',
      [
        {
          text: 'In an account used only for the licensee’s personal money.',
          why: 'Premium funds cannot be commingled with the licensee’s own money. They go to a qualifying federally insured trust account or to another account the Commissioner approves as comparably safe.',
        },
        {
          text: 'In an account the licensee holds in any other capacity.',
          why: 'Premium funds cannot be commingled with money held in any other capacity. Collected funds go to a federally insured trust account in a qualifying depository, or to another account the Commissioner approves as comparably safe.',
        },
        {
          text: 'In any account, even with no federal deposit insurance and no approval by the Commissioner.',
          why: 'Collected funds go to a federally insured trust account in a depository with a Utah office, federal deposit insurance, or authority to engage in the trust business, or to another account the Commissioner approves as comparably safe.',
        },
        {
          text: 'In a federally insured trust account at a depository with a Utah office, federal deposit insurance, or authority to engage in the trust business.',
          why: 'Collected funds are deposited in that kind of trust account. They may also go into another account that the Commissioner approves as comparably safe.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q93',
      'To whom may licensees and insurers pay consideration?',
      [
        {
          text: 'Licensed producers, consultants, managing general agents, or reinsurance intermediaries.',
          why: 'Licensees and insurers may pay consideration only to licensed producers, consultants, managing general agents, or reinsurance intermediaries.',
          correct: true,
        },
        {
          text: 'Any unlicensed person who forwards a premium.',
          why: 'Consideration is limited to licensed producers, consultants, managing general agents, or reinsurance intermediaries.',
        },
        {
          text: 'A consultant, as a commission from an insurance transaction.',
          why: 'A consultant may not pay or receive a commission or other compensation that results, directly or indirectly, from an insurance transaction.',
        },
        {
          text: 'A producer whose primary purpose is controlled business.',
          why: 'The Commissioner will not issue a license if the person’s primary purpose is to write controlled business. Consideration is limited to the licensed persons named in this section.',
        },
      ],
    ),
    question(
      'c15q94',
      'What contact information do licensees register?',
      [
        {
          text: 'Only the depository location, with no business or home address.',
          why: 'The trust account uses a qualifying depository. Licensees register the address and telephone numbers of the principal place of business, and individuals also give a residential address and telephone number.',
        },
        {
          text: 'The principal place of business address and telephone numbers, plus a residential address and telephone number for individuals.',
          why: 'Licensees register the address and telephone numbers of the principal place of business. Individuals also give a residential address and telephone number.',
          correct: true,
        },
        {
          text: 'Only the names of family members insured as controlled business.',
          why: 'Controlled business includes coverage on the producer’s immediate family or business associates. Registration here is the business address and telephones, and a residential address and telephone for individuals.',
        },
        {
          text: 'An examination date the Commissioner must announce in advance.',
          why: 'The Commissioner need not give prior notice of an examination. Registration covers the principal place of business and, for individuals, a residential address and telephone number.',
        },
      ],
    ),
    question(
      'c15q95',
      'How soon must a change in the registered address or telephone number be reported?',
      [
        {
          text: 'No report is due if the trust account stays at the same depository.',
          why: 'A change in the registered address or telephone information is reported within 30 days. The depository rule for the trust account is separate.',
        },
        {
          text: 'Within 12 months, and only if controlled premiums are higher.',
          why: 'During the previous 12 months, aggregate premiums from general business must exceed aggregate premiums from controlled business before a producer may be paid for controlled business. An address or telephone change is reported within 30 days.',
        },
        {
          text: 'Within 30 days.',
          why: 'A change is reported within 30 days.',
          correct: true,
        },
        {
          text: 'Only after the Commissioner gives prior notice of an examination.',
          why: 'The Commissioner need not give prior notice of an examination. A change in address or telephone number is reported within 30 days.',
        },
      ],
    ),
    question(
      'c15q96',
      'When will the Commissioner refuse to issue a license because of controlled business?',
      [
        {
          text: 'Whenever a producer writes coverage for a member of the public.',
          why: 'Controlled business is coverage on the producer’s own life, health, or property, or on that of the immediate family or business associates. The license refusal applies when the primary purpose is to write controlled business.',
        },
        {
          text: 'When general-business premiums exceed controlled-business premiums over the previous 12 months.',
          why: 'That comparison is when a producer may be paid for controlled business. The Commissioner will not issue a license if the person’s primary purpose is to write controlled business.',
        },
        {
          text: 'When premiums are placed in a federally insured trust account.',
          why: 'Collected funds are deposited in a qualifying trust account. The license is refused if the person’s primary purpose is to write controlled business.',
        },
        {
          text: 'If the person’s primary purpose is to write controlled business.',
          why: 'The Commissioner will not issue a license if the person’s primary purpose is to write controlled business.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q97',
      'Where are transaction records kept, and what examination notice must the Commissioner give?',
      [
        {
          text: 'At the place of business, and the Commissioner need not give prior notice.',
          why: 'Transaction records are kept at the place of business and made available to the Commissioner on request. The Commissioner need not give prior notice of an examination.',
          correct: true,
        },
        {
          text: 'Only at the depository, and only after prior notice.',
          why: 'The depository holds the trust account. Transaction records are kept at the place of business, and the Commissioner need not give prior notice of an examination.',
        },
        {
          text: 'Only at a residence, and only if the licensee requests the exam.',
          why: 'Individuals give a residential address and telephone number. Transaction records are kept at the place of business, and the Commissioner need not give prior notice.',
        },
        {
          text: 'In a fee-sharing file, after written notice from the Commissioner.',
          why: 'A consultant may share a consulting fee only to the extent another licensed consultant contributed to the services. Records stay at the place of business, and no prior examination notice is required.',
        },
      ],
    ),
    question(
      'c15q98',
      'What is controlled business?',
      [
        {
          text: 'Coverage written only for the public, not for family or business associates.',
          why: 'That is outside controlled business. Controlled business is coverage on the producer’s own life, health, or property, or on that of the immediate family or business associates.',
        },
        {
          text: 'Coverage on the producer’s own life, health, or property, or on that of the producer’s immediate family or business associates.',
          why: 'That is controlled business. The Commissioner will not issue a license if the person’s primary purpose is to write it.',
          correct: true,
        },
        {
          text: 'A consulting fee shared for work the other consultant did not do.',
          why: 'A consultant may share a consulting fee with another licensed consultant only to the extent that the other consultant contributed to the services. That share is not controlled business.',
        },
        {
          text: 'Consideration paid to a reinsurance intermediary.',
          why: 'Licensees and insurers may pay consideration to a reinsurance intermediary among other licensed persons. Controlled business is the producer’s own, family, or business-associate coverage.',
        },
      ],
    ),
    question(
      'c15q99',
      'With whom may a consultant share a consulting fee?',
      [
        {
          text: 'With any producer, as a commission on an insurance transaction.',
          why: 'A consultant may not pay or receive a commission or other compensation that results, directly or indirectly, from an insurance transaction. A consulting fee may be shared only with another licensed consultant who contributed.',
        },
        {
          text: 'With an unlicensed person.',
          why: 'Consideration may be paid only to licensed producers, consultants, managing general agents, or reinsurance intermediaries. Fee sharing is limited to another licensed consultant who contributed to the services.',
        },
        {
          text: 'With another licensed consultant, only to the extent that consultant contributed to the services.',
          why: 'A consultant may share a consulting fee on that basis. A consultant may not pay or receive a commission or other compensation resulting, directly or indirectly, from an insurance transaction.',
          correct: true,
        },
        {
          text: 'With a producer whose primary purpose is controlled business.',
          why: 'The Commissioner will not issue a license if the person’s primary purpose is to write controlled business. Fee sharing is with another licensed consultant only to the extent of that contribution.',
        },
      ],
    ),
  ],
'c15-discipline': [
    question(
      'c15q100',
      'Besides revoking a license or suspending it for up to 12 months, what may the Commissioner do to a license or certificate of authority?',
      [
        {
          text: 'Issue a new license during the period set in a revocation order',
          why: 'An order revoking a license may set a period, not longer than 5 years, during which the former licensee may not apply for a new license. That order does not issue a new license during the barred period.',
        },
        {
          text: 'Place the licensee on probation without a formal adjudicative proceeding',
          why: 'Where a suspension would be justified, probation comes after a formal adjudicative proceeding. The Commissioner may not open probation by skipping that proceeding.',
        },
        {
          text: 'Drop all penalties whenever no specific criminal penalty is provided',
          why: 'Unless a specific criminal penalty is provided, the penalties that may be leveled are $10,000 for a corporation and $5,000 for an individual. Missing a specific criminal penalty does not drop those amounts.',
        },
        {
          text: 'Limit the license or certificate of authority',
          why: 'The Commissioner may revoke, suspend for up to 12 months, or limit a license or certificate of authority for the reasons listed in this material.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q101',
      'Which application defect is a reason the Commissioner may revoke, suspend, or limit a license?',
      [
        {
          text: 'Incorrect, misleading, incomplete, or partially untrue information on the application',
          why: 'Listed reasons include incorrect, misleading, incomplete, or partially untrue information on the application.',
          correct: true,
        },
        {
          text: 'A fully true and complete application',
          why: 'The application ground is information that is incorrect, misleading, incomplete, or partially untrue. A fully true and complete application is not that ground.',
        },
        {
          text: 'Payment of income taxes',
          why: 'Failing to pay income taxes is a listed reason for action against a license. Paying those taxes is not the defect named here.',
        },
        {
          text: 'Compliance with a child-support order',
          why: 'Failing to comply with a child-support order, and violating the federal Violent Crime Control and Law Enforcement Act, are listed reasons. Compliance with a child-support order is not a ground for license action.',
        },
      ],
    ),
    question(
      'c15q102',
      'Which of these is a listed reason for revocation, suspension, or limitation of a license?',
      [
        {
          text: 'Obtaining a license through a truthful application',
          why: 'Obtaining a license by misrepresentation or fraud, and intentionally misrepresenting a contract or application, are listed reasons. A truthful application is not those grounds.',
        },
        {
          text: 'Misappropriating money received in the insurance business',
          why: 'Misappropriating money received in the insurance business is a listed reason the Commissioner may revoke, suspend, or limit a license.',
          correct: true,
        },
        {
          text: 'A license that another state, territory, or province has left in force',
          why: 'A listed reason is a license denied, suspended, or revoked in another state, territory, or province. A license left in force is not that ground.',
        },
        {
          text: 'Refusing business from an unlicensed person',
          why: 'Knowingly accepting business from an unlicensed person is a listed reason. Refusing that business is not the conduct named here.',
        },
      ],
    ),
    question(
      'c15q103',
      'Which personal failing is a listed reason for revocation, suspension, or limitation of a license?',
      [
        {
          text: 'Trustworthiness',
          why: 'The listed failing is untrustworthiness, together with incompetence or financial irresponsibility. Trustworthiness is not a ground for action against the license.',
        },
        {
          text: 'Financial responsibility',
          why: 'Financial irresponsibility is a listed reason. Financial responsibility is not a ground for revocation, suspension, or limitation.',
        },
        {
          text: 'Incompetence, untrustworthiness, or financial irresponsibility',
          why: 'Listed reasons include incompetence, untrustworthiness, or financial irresponsibility. A felony conviction, an unfair trade practice or fraud, and fraudulent, coercive, or dishonest practices are separate listed reasons.',
          correct: true,
        },
        {
          text: 'A practice that protects customers and the public',
          why: 'A practice that endangers customers and the public is a listed reason. A practice that protects them is not that ground.',
        },
      ],
    ),
    question(
      'c15q104',
      'Which event in another jurisdiction is a listed reason for action against a license?',
      [
        {
          text: 'An active license elsewhere with no denial, suspension, or revocation',
          why: 'The listed other-jurisdiction event is a license denied, suspended, or revoked in another state, territory, or province. An active license with no such action is not that ground.',
        },
        {
          text: 'A licensing examination elsewhere taken without improper notes',
          why: 'Improperly using notes on a licensing examination, and forging a name on an insurance document, are listed reasons. Taking an examination without improper notes is not a license denial, suspension, or revocation elsewhere.',
        },
        {
          text: 'Business accepted elsewhere only from a licensed person',
          why: 'Knowingly accepting business from an unlicensed person is a listed reason. Accepting business only from a licensed person is not an out-of-jurisdiction license action.',
        },
        {
          text: 'A license denied, suspended, or revoked in another state, territory, or province',
          why: 'A license denied, suspended, or revoked in another state, territory, or province is a listed reason for revocation, suspension, or limitation.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q105',
      'A person who knowingly and intentionally violates the licensing rules, the rules on transacting business through unauthorized insurers, or the Insurance Fraud Act is guilty of what?',
      [
        {
          text: 'A felony as provided in the Insurance Code',
          why: 'That person is guilty of a felony as provided in the Insurance Code.',
          correct: true,
        },
        {
          text: 'A suspension for up to 12 months and nothing else named for this violation',
          why: 'The Commissioner may suspend a license for up to 12 months, and violating an insurance law or an order of the Commissioner is a listed reason for license action. This knowing and intentional violation is a felony as provided in the Insurance Code.',
        },
        {
          text: 'Probation for no longer than 24 months in place of any criminal result',
          why: 'Probation for no longer than 24 months may follow a formal adjudicative proceeding where a suspension would be justified. It does not replace the felony named for this violation.',
        },
        {
          text: 'Reimbursement owed only by a managing general producer, with no criminal result named',
          why: 'A managing general producer may be ordered to reimburse losses the violation caused. The violation named here is a felony as provided in the Insurance Code.',
        },
      ],
    ),
    question(
      'c15q106',
      'What must the order state when the Commissioner places a licensee on probation?',
      [
        {
          text: 'A new-license bar not longer than 5 years',
          why: 'A period not longer than 5 years, during which the former licensee may not apply for a new license, may appear in an order revoking a license. That bar is not what the probation order must state.',
        },
        {
          text: 'Reasonable conditions for keeping the license',
          why: 'The probation order must state reasonable conditions for keeping the license.',
          correct: true,
        },
        {
          text: 'A hearing penalty of $2,500 against a corporation',
          why: 'After a hearing, the penalty for each separate violation is $2,500 for a producer or adjuster, or $5,000 for any other person. That hearing penalty is not the required text of a probation order.',
        },
        {
          text: 'A statement that a violation of probation cannot support revocation',
          why: 'A violation of probation is grounds for revocation. The order does not say that a violation cannot support revocation.',
        },
      ],
    ),
    question(
      'c15q107',
      'What follows a violation of probation?',
      [
        {
          text: 'A right to apply for a new license during the post-revocation bar',
          why: 'An order revoking a license may set a period, not longer than 5 years, during which the former licensee may not apply for a new license. A probation violation does not open that period.',
        },
        {
          text: 'An extension of probation past 24 months',
          why: 'Probation may last no longer than 24 months. A violation is grounds for revocation, not an extension past that limit.',
        },
        {
          text: 'Grounds for revocation',
          why: 'A violation of probation is grounds for revocation.',
          correct: true,
        },
        {
          text: 'A ban on every other penalty provided by law',
          why: 'The Commissioner may still impose other penalties provided by law when necessary. A probation violation remains grounds for revocation.',
        },
      ],
    ),
    question(
      'c15q108',
      'What may a managing general producer be ordered to reimburse?',
      [
        {
          text: 'A $10,000 corporate penalty instead of the loss',
          why: 'Unless a specific criminal penalty is provided, a corporation may be leveled a penalty of $10,000. That penalty is separate from reimbursement of losses the violation caused.',
        },
        {
          text: 'Only the $2,500 producer penalty, with the loss kept',
          why: 'After a hearing, a producer or adjuster may be assessed $2,500 for each separate violation, and the producer’s license may be revoked or suspended. A managing general producer may also be ordered to reimburse the loss.',
        },
        {
          text: 'Income taxes the producer failed to pay',
          why: 'Failing to pay income taxes is a listed reason for action against a license. It is not the reimbursement a managing general producer may be ordered to make.',
        },
        {
          text: 'Losses the violation caused to the insurer, or to the insurer’s rehabilitator or liquidator',
          why: 'A managing general producer may be ordered to reimburse the insurer, or the insurer’s rehabilitator or liquidator, for losses the violation caused.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q109',
      'Unless a specific criminal penalty is provided, what penalty may be leveled against a corporation?',
      [
        {
          text: '$10,000',
          why: 'Unless a specific criminal penalty is provided, the penalties that may be leveled are $10,000 for a corporation and $5,000 for an individual.',
          correct: true,
        },
        {
          text: '$5,000, the amount named for an individual',
          why: '$5,000 is the amount named for an individual when no specific criminal penalty is provided. The corporation amount is $10,000.',
        },
        {
          text: '$2,500, the hearing amount for a producer or adjuster',
          why: 'After a hearing, the Commissioner may order $2,500 for each separate violation by a producer or adjuster, and may revoke or suspend the producer’s license. The corporation amount in the separate penalty rule is $10,000.',
        },
        {
          text: '$5,000, the hearing amount for any other person',
          why: 'After a hearing, $5,000 is the penalty for any other person for each separate violation. Unless a specific criminal penalty is provided, a corporation may be leveled $10,000.',
        },
      ],
    ),
    question(
      'c15q110',
      'When may the Commissioner still impose other penalties provided by law?',
      [
        {
          text: 'Only when a probation order states no conditions',
          why: 'A probation order must state reasonable conditions for keeping the license. Violating an insurance law or an order of the Commissioner is a separate listed reason, and other penalties are not limited to orders that state no conditions.',
        },
        {
          text: 'When necessary',
          why: 'The Commissioner may still impose other penalties provided by law when necessary.',
          correct: true,
        },
        {
          text: 'Only after a new license has been barred for 5 years',
          why: 'A revocation order may set a period not longer than 5 years before a new application. Other penalties provided by law may be imposed when necessary, not only after that bar.',
        },
        {
          text: 'Only after a managing general producer has reimbursed every loss',
          why: 'A managing general producer may be ordered to reimburse losses the violation caused. Other penalties provided by law may still be imposed when necessary.',
        },
      ],
    ),
  ],
  'c15-unfair': [
    question(
      'c15q111',
      'What kind of trade practice are insurers and producers forbidden to use?',
      [
        {
          text: 'A cease and desist order entered after a hearing',
          why: 'After a hearing, the Department may order the person to cease and desist and may impose penalties. That order is the response, not the forbidden trade practice.',
        },
        {
          text: 'A pattern of following the terms written in the policy',
          why: 'Knowingly committing unfair methods often enough to show a general business practice is an unfair trade practice. Following the policy terms is not that practice.',
        },
        {
          text: 'An unfair method of competition or an unfair or deceptive act',
          why: 'Insurers and producers may not use a trade practice that is an unfair method of competition or an unfair or deceptive act.',
          correct: true,
        },
        {
          text: 'A promotional gift that is generally available to the public',
          why: 'An insurer may still give promotional gifts that are generally available to the public. Those gifts are not the forbidden unfair method described here.',
        },
      ],
    ),
    question(
      'c15q112',
      'When is knowingly committing unfair methods an unfair trade practice?',
      [
        {
          text: 'When it happens once and does not show a general business practice',
          why: 'The unfair trade practice described here is conduct often enough to show a general business practice. A single act that does not show that practice is not the rule stated.',
        },
        {
          text: 'When the Department has not held a hearing',
          why: 'After a hearing, the Department may order a cease and desist and may impose penalties. The unfair trade practice is the knowing pattern, not the absence of a hearing.',
        },
        {
          text: 'When the person truthfully describes dividends the policy will pay',
          why: 'A false, misleading, or deceptive statement about the payment of dividends can be misrepresentation. A truthful description of dividends is not the general-business-practice test.',
        },
        {
          text: 'When it happens often enough to show a general business practice',
          why: 'Knowingly committing unfair methods often enough to show a general business practice is an unfair trade practice.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q113',
      'After a hearing, what may the Department order the person to do, along with imposing penalties?',
      [
        {
          text: 'Cease and desist',
          why: 'After a hearing, the Department may order the person to cease and desist and may impose penalties.',
          correct: true,
        },
        {
          text: 'Publish a false illustration of policy benefits',
          why: 'Misrepresentation includes issuing, publishing, or circulating illustration or sales material that is false, misleading, or deceptive as to policy benefits or terms. The hearing order is to cease and desist.',
        },
        {
          text: 'Offer a rebate that is not specified in the policy',
          why: 'Rebating is any inducement offered in the sale of insurance that is not specified in the policy, and both the offer and the acceptance are illegal. That conduct is not what the Department orders.',
        },
        {
          text: 'Require, as a condition of a loan, a purchase from a specific insurer',
          why: 'Coercion is requiring, as a condition of a loan, that the applicant buy insurance from a specific insurer. The hearing result is a cease and desist order and penalties.',
        },
      ],
    ),
    question(
      'c15q114',
      'Which of these is misrepresentation as to policy benefits, terms, or the payment of dividends?',
      [
        {
          text: 'A true verbal statement about the payment of dividends',
          why: 'Misrepresentation uses a false, misleading, or deceptive statement about benefits, terms, or the payment of dividends. A true verbal statement is not that act.',
        },
        {
          text: 'A false, misleading, or deceptive illustration, sales material, or verbal statement',
          why: 'Misrepresentation is issuing, publishing, or circulating any illustration or sales material, including a verbal statement, that is false, misleading, or deceptive as to policy benefits or terms, or the payment of dividends.',
          correct: true,
        },
        {
          text: 'A name that does not suggest the user is an insurer',
          why: 'A person or entity cannot use a name that deceptively suggests it is an insurer. A name that does not suggest that status is not misrepresentation of benefits, terms, or dividends.',
        },
        {
          text: 'An accurate print statement of policy conditions',
          why: 'False advertising includes misrepresenting policy terms, benefits, conditions, or advantages. An accurate statement of conditions is not misrepresentation.',
        },
      ],
    ),
    question(
      'c15q115',
      'False advertising about the business of insurance, or about anyone who conducts it, is made in which places?',
      [
        {
          text: 'Only in a verbal statement during a sale',
          why: 'Misrepresentation can include a verbal statement. False advertising, as defined here, is a statement in print, on television, or on the Internet.',
        },
        {
          text: 'Only in an illustration of dividends',
          why: 'Misrepresentation covers illustration or sales material about the payment of dividends. False advertising is not limited to dividend illustrations.',
        },
        {
          text: 'In print, on television, or on the Internet',
          why: 'False advertising is an untrue, deceptive, or misleading statement about the business of insurance or anyone who conducts it, in print, on television, or on the Internet.',
          correct: true,
        },
        {
          text: 'Only under a name that truthfully describes the policy',
          why: 'Using a name or title that misstates what the policy is is also false advertising. A truthful policy name is not the media rule.',
        },
      ],
    ),
    question(
      'c15q116',
      'Which topic, when misrepresented, is included in false advertising?',
      [
        {
          text: 'A social courtesy that is not conditioned on a quote or a purchase',
          why: 'Under Utah law, a small gift or meal under $100 per person is not an inducement if it is a social courtesy and is not conditioned on a quote or the purchase of a particular product. That courtesy is not this false-advertising topic.',
        },
        {
          text: 'A promotional gift generally available to the public',
          why: 'An insurer may still give promotional gifts that are generally available to the public. Those gifts are not a misrepresented financial condition or loan purpose.',
        },
        {
          text: 'A gift or meal that does not exceed $10 and is conditioned on a quote',
          why: 'A gift or meal that does not exceed $10 may be conditioned on receiving a quote. That permitted gift is not the false-advertising topic in this question.',
        },
        {
          text: 'The financial condition of a person or the company, or the true purpose of an assignment or loan',
          why: 'False advertising includes misrepresenting the financial condition of a person or the company, or the true purpose of an assignment or loan. It also includes misrepresenting policy terms, benefits, conditions, or advantages, and dividends to be received or already paid.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q117',
      'Which use of a policy or its name is false advertising?',
      [
        {
          text: 'Representing a policy as a share of stock, or using a name or title that misstates what the policy is',
          why: 'Representing a policy as a share of stock, or using a name or title that misstates what the policy is, is also false advertising.',
          correct: true,
        },
        {
          text: 'Using a name that does not suggest the entity is an insurer',
          why: 'A person or entity cannot use a name that deceptively suggests it is an insurer. A name that does not suggest that status is not this false-advertising act.',
        },
        {
          text: 'Stating policy terms, benefits, conditions, and advantages accurately',
          why: 'False advertising includes misrepresenting policy terms, benefits, conditions, or advantages. An accurate statement of those items is not that act.',
        },
        {
          text: 'Describing dividends already paid without misstating them',
          why: 'False advertising includes misrepresenting dividends to be received or already paid. Describing them without a misstatement is not false advertising.',
        },
      ],
    ),
    question(
      'c15q118',
      'What name is a person or entity forbidden to use?',
      [
        {
          text: 'A title that states accurately what the policy is',
          why: 'Using a name or title that misstates what the policy is is false advertising. An accurate title is not the naming ban.',
        },
        {
          text: 'A name that deceptively suggests it is an insurer',
          why: 'A person or entity cannot use a name that deceptively suggests it is an insurer.',
          correct: true,
        },
        {
          text: 'The true name of a company whose financial condition is stated accurately',
          why: 'False advertising includes misrepresenting the financial condition of a person or the company. An accurate statement under a true name is not a name that deceptively suggests insurer status.',
        },
        {
          text: 'A label showing a gift is generally available to the public',
          why: 'Promotional gifts generally available to the public may still be given. Labeling such a gift is not the ban on a deceptive insurer name.',
        },
      ],
    ),
    question(
      'c15q119',
      'When a rebate is offered in the sale of insurance, which conduct is illegal?',
      [
        {
          text: 'Payment of a dividend that the policy already specifies',
          why: 'Advantages in dividends or other benefits can be rebates when they are inducements not specified in the policy. A dividend the policy specifies is not the illegal offer and acceptance.',
        },
        {
          text: 'Refusal of an inducement that is not in the policy',
          why: 'Both the offer and the acceptance are illegal. Refusing the inducement is not the acceptance this rule makes illegal.',
        },
        {
          text: 'Both the offer and the acceptance',
          why: 'Rebating is any inducement offered in the sale of insurance that is not specified in the policy. Both the offer and the acceptance are illegal.',
          correct: true,
        },
        {
          text: 'A social-courtesy meal under $100 per person that is not conditioned on a quote or a purchase',
          why: 'Under Utah law, a small gift or meal under $100 per person is not an inducement if it is a social courtesy and is not conditioned on a quote or the purchase of a particular product. That meal is not the illegal rebate conduct.',
        },
      ],
    ),
    question(
      'c15q120',
      'Which of these items is named as a rebate?',
      [
        {
          text: 'A term already written in the contract',
          why: 'It is illegal to make or offer an insurance contract or annuity on terms other than those in the contract. A term already written in the contract is not named as a rebate.',
        },
        {
          text: 'A promotional gift generally available to the public',
          why: 'An insurer may still give promotional gifts that are generally available to the public. Those gifts are not the rebate list.',
        },
        {
          text: 'A meal that does not exceed $10 and is conditioned on receiving a quote',
          why: 'A gift or meal that does not exceed $10 may be conditioned on receiving a quote. That meal is not named as a rebate.',
        },
        {
          text: 'A return of premium',
          why: 'Rebates include a return of premium, special favors or services, advantages in dividends or other benefits, and stocks, bonds, securities, and their dividends or profits.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q121',
      'Boycott, coercion, or intimidation is illegal when it is intended to do what?',
      [
        {
          text: 'Restrict fair trade or create a monopoly',
          why: 'Boycott, coercion, or intimidation intended to restrict fair trade or create a monopoly is illegal.',
          correct: true,
        },
        {
          text: 'Explain a dividend that the policy already provides',
          why: 'Misrepresentation concerns false, misleading, or deceptive statements about the payment of dividends. Explaining a dividend the policy already provides is not this boycott rule.',
        },
        {
          text: 'Give a promotional gift the public can obtain generally',
          why: 'An insurer may still give promotional gifts that are generally available to the public. That gift is not boycott, coercion, or intimidation aimed at a monopoly.',
        },
        {
          text: 'State the true purpose of an assignment or loan',
          why: 'False advertising includes misrepresenting the true purpose of an assignment or loan. Stating that purpose truly is not the fair-trade or monopoly rule.',
        },
      ],
    ),
    question(
      'c15q122',
      'Unfair behavior under boycott, coercion, or intimidation is aimed at whom?',
      [
        {
          text: 'The Department, as the target of the hearing order',
          why: 'After a hearing, the Department may order the person to cease and desist and may impose penalties. The unfair behavior described here is aimed at clients and at competing agents and brokers.',
        },
        {
          text: 'Clients and competing agents and brokers',
          why: 'Boycott, coercion, or intimidation includes unfair behavior aimed at clients and at competing agents and brokers.',
          correct: true,
        },
        {
          text: 'A person who publishes a true illustration',
          why: 'Misrepresentation includes publishing false, misleading, or deceptive sales material. A person who publishes a true illustration is not the target named for this unfair behavior.',
        },
        {
          text: 'Only an applicant who refuses one insurer as a loan condition',
          why: 'Coercion is requiring, as a condition of a loan, that the applicant buy insurance from a specific insurer. The unfair behavior also reaches clients and competing agents and brokers.',
        },
      ],
    ),
    question(
      'c15q123',
      'Which offer of an insurance contract or annuity is illegal?',
      [
        {
          text: 'An offer that uses only the terms already in the contract',
          why: 'The ban reaches terms other than those in the contract. An offer that uses only the terms already in the contract is not that violation.',
        },
        {
          text: 'An annuity offer that stays inside the contract',
          why: 'An annuity offered on terms other than those in the contract is illegal. An annuity offer that stays inside the contract is not the violation stated here.',
        },
        {
          text: 'An insurance contract or annuity on terms other than those in the contract',
          why: 'It is illegal to make or offer an insurance contract or annuity on terms other than those in the contract. It is also illegal to offer as an inducement any special favor or advantage in dividends or benefits, any stocks, bonds, securities, or accrued dividends or profits, or anything of value not specified in the contract.',
          correct: true,
        },
        {
          text: 'A dividend specified in the contract and not offered as an extra inducement',
          why: 'A special favor or advantage in dividends or benefits is illegal when offered as an inducement not specified in the contract. A dividend specified in the contract, and not offered as an extra inducement, is not that ban.',
        },
      ],
    ),
    question(
      'c15q124',
      'When may a distinction based on marital status, race, national origin, gender identity, sexual orientation, creed, or ancestry be made?',
      [
        {
          text: 'Never, even when it is for a business purpose or required by law',
          why: 'The material allows the distinction when it is for a business purpose or required by law. It does not say the distinction is never allowed.',
        },
        {
          text: 'Whenever the rates differ, even for persons who are not in the same class',
          why: 'Discrimination in rates, premiums, or benefits for persons in the same class or with the same life expectancy is illegal. A rate difference does not by itself permit a distinction on the listed bases.',
        },
        {
          text: 'Only when the distinction is also a return of premium',
          why: 'A return of premium is named among rebates. That rebate list does not state when a distinction on marital status, race, or the other listed bases may be made.',
        },
        {
          text: 'When the distinction is for a business purpose or required by law',
          why: 'No distinction may be based on marital status, race, national origin, gender identity, sexual orientation, creed, or ancestry unless the distinction is for a business purpose or required by law.',
          correct: true,
        },
      ],
    ),
  ],
  'c15-fraud': [
    question(
      'c15q125',
      'Besides the federal Fair Credit Reporting Act, which law regulates information practices here?',
      [
        {
          text: 'The Insurance Information and Privacy Protection Act',
          why: 'Besides the federal Fair Credit Reporting Act, information practices are regulated by the Insurance Information and Privacy Protection Act, a model law developed by the National Association of Insurance Commissioners.',
          correct: true,
        },
        {
          text: 'A rule that fraud information is freely discoverable in every civil case',
          why: 'Information given to an insurer is not subject to discovery in a civil case unless a court makes the finding described here. That limit is not the law that regulates information practices.',
        },
        {
          text: 'A rule that notices may skip writing even when the customer does not agree to electronic notice',
          why: 'Notices are in writing, or electronic if the customer agrees. That form rule is not a substitute for the Insurance Information and Privacy Protection Act.',
        },
        {
          text: 'A right of an unauthorized insurer to enforce its own illegal contract',
          why: 'A contract issued by an unauthorized insurer is illegal and unenforceable by the insurer. That contract rule is not the information-practices law.',
        },
      ],
    ),
    question(
      'c15q126',
      'When must insurers and agents give applicants and policyholders a notice of information practices?',
      [
        {
          text: 'Only after a court hearing on civil discovery',
          why: 'Notice and a hearing are part of the discovery rule for information given to an insurer. The information-practices notice is due no later than policy delivery.',
        },
        {
          text: 'No later than policy delivery',
          why: 'Insurers and agents must give applicants and policyholders a notice of information practices no later than policy delivery.',
          correct: true,
        },
        {
          text: 'Only when a termination is reported to the department',
          why: 'An insurer must report to the department terminations based on a violation of this regulation. That report is not the deadline for the notice of information practices.',
        },
        {
          text: 'Only after an unknowing policyowner voids an illegal contract',
          why: 'If the policyowner entered an illegal contract without knowing it was illegal, the contract can be voided. Voiding is not the deadline for the notice.',
        },
      ],
    ),
    question(
      'c15q127',
      'In what form may the notice of information practices be given?',
      [
        {
          text: 'In a form other than writing and other than electronic notice the customer agreed to',
          why: 'Notices are in writing, or electronic if the customer agrees. A form that is neither of those is not the rule.',
        },
        {
          text: 'Only as a response in a civil discovery dispute',
          why: 'Discovery limits apply to information given to an insurer about suspected fraud. They do not replace the written or agreed electronic notice.',
        },
        {
          text: 'In writing, or electronic if the customer agrees',
          why: 'Notices are in writing, or electronic if the customer agrees.',
          correct: true,
        },
        {
          text: 'Only as a protected record sent to an authorized agency',
          why: 'Information relevant to suspected fraud may be a protected record. The consumer notice itself is in writing, or electronic if the customer agrees.',
        },
      ],
    ),
    question(
      'c15q128',
      'What does the required opt-out let the consumer direct the holder not to disclose?',
      [
        {
          text: 'The policy at delivery',
          why: 'Insurers and agents must give the notice no later than policy delivery. The opt-out does not direct the holder to withhold delivery.',
        },
        {
          text: 'A termination report to the department',
          why: 'An insurer must report to the department terminations based on a violation of this regulation. The opt-out is about nonpublic personal financial information and a nonaffiliated third party.',
        },
        {
          text: 'Fraud information that an authorized agency requested in writing',
          why: 'On a written request, an insurer or a producer authorized to act for the insurer must give an authorized agency information relevant to suspected fraud. That duty is not the opt-out.',
        },
        {
          text: 'Nonpublic personal financial information to a nonaffiliated third party, except as the regulation permits',
          why: 'The notice must let the consumer opt out, meaning direct the holder not to disclose nonpublic personal financial information to a nonaffiliated third party except as the regulation permits.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q129',
      'On a written request, what must an insurer, or a producer authorized to act for the insurer, give an authorized agency?',
      [
        {
          text: 'Information relevant to suspected fraud',
          why: 'On a written request, an authorized agency may give an insurer information relevant to suspected insurance fraud, and an insurer or a producer authorized to act for the insurer must give an authorized agency information relevant to suspected fraud.',
          correct: true,
        },
        {
          text: 'Every civil pleading the insurer wants discovered',
          why: 'Information given to an insurer is not subject to discovery in a civil case unless a court makes the required finding. The duty here is to give fraud information to an authorized agency.',
        },
        {
          text: 'Permission for the insurer to enforce an illegal contract',
          why: 'A contract issued by an unauthorized insurer is unenforceable by the insurer. Fraud information given to an agency is not permission to enforce that contract.',
        },
        {
          text: 'A waiver of the consumer opt-out',
          why: 'The notice must let the consumer opt out of certain disclosure of nonpublic personal financial information. Giving fraud information to an authorized agency is not a waiver of that opt-out.',
        },
      ],
    ),
    question(
      'c15q130',
      'When may information given to an insurer be discovered in a civil case?',
      [
        {
          text: 'In every civil case, because the information cannot be a protected record',
          why: 'That information may be a protected record. It is not subject to discovery in a civil case unless the court makes the finding in this material.',
        },
        {
          text: 'After notice and a hearing, if a court finds that disclosure will not jeopardize the public interest or an ongoing criminal investigation',
          why: 'Information given to an insurer is not subject to discovery in a civil case unless, after notice and a hearing, a court finds that disclosure will not jeopardize the public interest or an ongoing criminal investigation.',
          correct: true,
        },
        {
          text: 'Whenever the insurer asks, with no notice and no hearing',
          why: 'The exception requires notice and a hearing, plus the court finding. An insurer request alone does not open discovery.',
        },
        {
          text: 'Only after the policyowner voids an illegal contract',
          why: 'If the policyowner entered an illegal contract without knowing it was illegal, the contract can be voided. Voiding is not the discovery test.',
        },
      ],
    ),
    question(
      'c15q131',
      'What must an insurer report to the department?',
      [
        {
          text: 'The notice of information practices given at policy delivery',
          why: 'The notice of information practices goes to applicants and policyholders no later than policy delivery. The department report is of terminations based on a violation of this regulation.',
        },
        {
          text: 'An electronic notice the customer refused',
          why: 'Notices are in writing, or electronic if the customer agrees. The department report is about terminations based on a violation of this regulation.',
        },
        {
          text: 'Terminations based on a violation of this regulation',
          why: 'An insurer must report to the department terminations based on a violation of this regulation.',
          correct: true,
        },
        {
          text: 'Every unauthorized contract the insurer hopes to enforce',
          why: 'A contract issued by an unauthorized insurer is unenforceable by the insurer. The required report is of terminations based on a violation of this regulation.',
        },
      ],
    ),
    question(
      'c15q132',
      'Which knowing presentation is a fraudulent insurance act?',
      [
        {
          text: 'A complete and true statement that is not material to an application or renewal',
          why: 'The fraudulent act uses false, incomplete, or misleading information that is material. A complete and true statement that is not material is not that act.',
        },
        {
          text: 'A true claim with no false, incomplete, or misleading information',
          why: 'The same kind of false, incomplete, or misleading information in support of a claim is a fraudulent insurance act. A true claim is not that act.',
        },
        {
          text: 'A Department document that contains only true material information',
          why: 'Supplying false material information in a document the Department requires is a fraudulent insurance act. A document with only true material information is not that act.',
        },
        {
          text: 'A statement with false, incomplete, or misleading information material to an application or renewal',
          why: 'A fraudulent insurance act includes knowingly presenting a statement that contains false, incomplete, or misleading information material to an application or renewal.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q133',
      'Which further conduct is a fraudulent insurance act?',
      [
        {
          text: 'Accepting a benefit from the proceeds of a fraudulent act',
          why: 'A fraudulent insurance act includes accepting a benefit from the proceeds of a fraudulent act. It also includes assisting or conspiring with someone to commit one, and knowingly presenting false, incomplete, or misleading information in support of a claim or a civil claim for personal injury or property damage.',
          correct: true,
        },
        {
          text: 'Refusing a benefit that came from a fraudulent act',
          why: 'Accepting a benefit from the proceeds of a fraudulent act is included. Refusing that benefit is not the act described.',
        },
        {
          text: 'Reporting a termination that this regulation requires',
          why: 'An insurer must report to the department terminations based on a violation of this regulation. That required report is not listed as accepting a benefit from a fraudulent act.',
        },
        {
          text: 'Giving an authorized agency true information relevant to suspected fraud',
          why: 'An insurer or authorized producer must give an authorized agency information relevant to suspected fraud. Giving that information is not the fraudulent act of accepting a benefit from the proceeds.',
        },
      ],
    ),
    question(
      'c15q134',
      'When is an insurer or service provider not liable for an employee’s fraudulent act?',
      [
        {
          text: 'When the insurer or provider knew or should have known of the act',
          why: 'Nonliability for an act committed without authority fails if the insurer or provider knew or should have known of it. Knowledge is not itself the safe harbor.',
        },
        {
          text: 'When the employee committed it without authority, unless the insurer or provider knew or should have known of it',
          why: 'An insurer or service provider is not liable for an employee’s fraudulent act committed without authority, unless the insurer or provider knew or should have known of it.',
          correct: true,
        },
        {
          text: 'Whenever the act supports a claim, even if the provider knew of it',
          why: 'Knowingly presenting false, incomplete, or misleading information in support of a claim can be a fraudulent insurance act. Knowledge of the employee’s act removes the nonliability protection.',
        },
        {
          text: 'When the provider supplied false material information the Department requires',
          why: 'Supplying false material information in a document the Department requires is a fraudulent insurance act. That supply is not the nonliability rule for an unauthorized employee act.',
        },
      ],
    ),
    question(
      'c15q135',
      'How is a contract issued by an unauthorized insurer treated?',
      [
        {
          text: 'Enforceable by the insurer in the insurer’s own action',
          why: 'The contract is unenforceable by the insurer. It may still be enforced in an action brought against the insurer, which is not an action by the insurer.',
        },
        {
          text: 'Voidable only when the policyowner knew it was illegal',
          why: 'If the policyowner entered the illegal contract without knowing it was illegal, the contract can be voided. A person who helped procure it, and who knew or should have known it was illegal, is liable to the insured for the full amount of a claim or loss if the insurer does not pay it.',
        },
        {
          text: 'Illegal and unenforceable by the insurer, but still enforceable in an action brought against the insurer',
          why: 'A contract issued by an unauthorized insurer is illegal and unenforceable by the insurer. It may still be enforced in an action brought against the insurer.',
          correct: true,
        },
        {
          text: 'Made legal if a producer gave fraud information to an agency',
          why: 'Giving an authorized agency information relevant to suspected fraud is a separate duty. It does not make an unauthorized insurer’s contract legal.',
        },
      ],
    ),
  ],
  'c15-federal': [
    question(
      'c15q136',
      'What does the Fair Credit Reporting Act require of records kept by consumer-reporting agencies?',
      [
        {
          text: 'Use for any purpose, including a purpose that is not a legitimate business purpose',
          why: 'Reports may be used only for a legitimate business purpose, including insurance underwriting, employment screening, and credit. Open use for any purpose is not the standard.',
        },
        {
          text: 'Records that need not be accurate or relevant if they are used',
          why: 'The records must be confidential, accurate, relevant, and properly used. Use alone does not drop accuracy and relevance.',
        },
        {
          text: 'Sharing of every record with each neighbor interviewed for an investigative report',
          why: 'A consumer report is written or oral information on credit, character, reputation, or habits, collected from employment records, credit reports, and other public sources. An investigative consumer report also covers character, reputation, and habits, but the information comes from an investigation and interviews with associates, friends, and neighbors, not from a duty to share agency files with each neighbor.',
        },
        {
          text: 'Records kept confidential, accurate, relevant, and properly used',
          why: 'The Fair Credit Reporting Act requires consumer-reporting agencies to keep records confidential, accurate, relevant, and properly used.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q137',
      'For what purpose may these reports be used?',
      [
        {
          text: 'A legitimate business purpose, including insurance underwriting, employment screening, and credit',
          why: 'Reports may be used only for a legitimate business purpose, including insurance underwriting, employment screening, and credit.',
          correct: true,
        },
        {
          text: 'Any purpose the reporting agency prefers',
          why: 'Use is limited to a legitimate business purpose. The agency’s preference for some other purpose is not the permission stated here.',
        },
        {
          text: 'Employment screening, with insurance underwriting and credit excluded',
          why: 'The listed legitimate purposes include insurance underwriting, employment screening, and credit. Underwriting and credit are not excluded.',
        },
        {
          text: 'Obtaining consumer information under false pretenses',
          why: 'A person who knowingly and willfully obtains consumer information under false pretenses may be fined, imprisoned for up to 2 years, or both. That conduct is not a permitted purpose.',
        },
      ],
    ),
    question(
      'c15q138',
      'When must the consumer be told in writing that an investigative consumer report was requested?',
      [
        {
          text: 'Within 5 days after additional information is provided',
          why: 'The insurer or reporting agency has 5 days to provide additional information the consumer requests. That period is not the deadline for the first written notice.',
        },
        {
          text: 'Within 3 days of the date the report was requested',
          why: 'An investigative report cannot be made unless the consumer is told in writing, within 3 days of the date the report was requested, and told of the right to request more information.',
          correct: true,
        },
        {
          text: 'During the past year after insurance is declined',
          why: 'If insurance is declined or modified because of a report, the consumer must be told and may learn who received a copy during the past year. That adverse-action timing is not the 3-day investigative notice.',
        },
        {
          text: 'Within the last 2 years after a corrected report is sent',
          why: 'When a report is corrected, the corrected information goes to everyone who received the inaccurate information within the last 2 years. That distribution is not the 3-day notice.',
        },
      ],
    ),
    question(
      'c15q139',
      'How long does the insurer or reporting agency have to provide additional information the consumer requests about an investigative report?',
      [
        {
          text: '3 days from the date the report was requested',
          why: 'The consumer must be told in writing within 3 days of the date the report was requested. The additional information is due in 5 days.',
        },
        {
          text: 'The past year',
          why: 'The consumer may learn who received a copy during the past year when insurance is declined or modified because of a report. That look-back is not the deadline for additional investigative-report information.',
        },
        {
          text: '5 days',
          why: 'The insurer or reporting agency has 5 days to provide that additional information.',
          correct: true,
        },
        {
          text: 'The last 2 years',
          why: 'Corrected information goes to everyone who received the inaccurate information within the last 2 years. That period is not the 5-day response time.',
        },
      ],
    ),
    question(
      'c15q140',
      'What right must the written investigative-report notice give the consumer?',
      [
        {
          text: 'A right to obtain consumer information under false pretenses',
          why: 'Knowingly and willfully obtaining consumer information under false pretenses may bring a fine, imprisonment for up to 2 years, or both. That is not a right the notice gives.',
        },
        {
          text: 'A right to have bankruptcies more than 10 years old included on a life policy of less than $150,000',
          why: 'If the report is for a life policy or a credit transaction of less than $150,000, it cannot include bankruptcies more than 10 years old. The notice right is the right to request more information.',
        },
        {
          text: 'A right to skip the reporting agency’s name and address if coverage is declined',
          why: 'If insurance is declined or modified because of a report, the consumer must be given the name and address of the reporting agency. The investigative notice instead tells the consumer of the right to request more information.',
        },
        {
          text: 'The right to request more information',
          why: 'The consumer must be told in writing of the right to request more information. The insurer or reporting agency then has 5 days to provide that additional information.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q141',
      'What may follow knowingly and willfully obtaining consumer information under false pretenses?',
      [
        {
          text: 'A fine, imprisonment for up to 2 years, or both',
          why: 'A person who knowingly and willfully obtains consumer information under false pretenses may be fined, imprisoned for up to 2 years, or both.',
          correct: true,
        },
        {
          text: 'Liability for reasonable attorney fees only, with no fine and no imprisonment',
          why: 'An unknowing violation makes the person liable for the consumer’s loss and reasonable attorney fees. The knowing and willful false-pretenses case may bring a fine, imprisonment for up to 2 years, or both.',
        },
        {
          text: 'A penalty of up to $2,500 for an unknowing violation',
          why: 'A willful violation that amounts to a general pattern or business practice can bring a penalty of up to $2,500. An unknowing violation is not that penalty, and knowing false pretenses may bring up to 2 years.',
        },
        {
          text: 'Imprisonment for up to 10 years for a false material insurance statement',
          why: 'A person in the business of insurance whose activities affect interstate commerce, and who knowingly makes a false material statement, may be imprisoned for up to 10 years. That is a different violation from obtaining consumer information under false pretenses.',
        },
      ],
    ),
    question(
      'c15q142',
      'What is a person liable for when a violation of these consumer-reporting rules is unknowing?',
      [
        {
          text: 'Imprisonment for up to 2 years even though the violation was unknowing',
          why: 'Imprisonment for up to 2 years may follow knowing and willful obtaining of consumer information under false pretenses. An unknowing violation is tied to the consumer’s loss and reasonable attorney fees.',
        },
        {
          text: 'The consumer’s loss and reasonable attorney fees',
          why: 'An unknowing violation makes the person liable for the consumer’s loss and reasonable attorney fees.',
          correct: true,
        },
        {
          text: 'A Section 1034 civil action of not more than $50,000',
          why: 'Under Section 1034, the Attorney General may bring a civil action for not more than $50,000 for each violation, or the compensation received, whichever is greater. That action is not the remedy for an unknowing consumer-reporting violation.',
        },
        {
          text: 'An automatic letter of written consent under 18 U.S.C. 1033',
          why: 'A 1033 waiver is a letter of written consent from an insurance regulatory official, and the consent must say it is granted for 18 U.S.C. 1033. It is not the liability for an unknowing violation.',
        },
      ],
    ),
    question(
      'c15q143',
      'What can a willful violation bring when it amounts to a general pattern or business practice?',
      [
        {
          text: 'Imprisonment for up to 15 years even if the insurer’s security was not jeopardized',
          why: 'If a false material statement jeopardized the security of the insurer, the punishment can be up to 15 years. That insurance-fraud term is not the consumer-reporting pattern penalty.',
        },
        {
          text: 'Only the consumer’s loss, with no separate penalty amount named',
          why: 'An unknowing violation makes the person liable for the consumer’s loss and reasonable attorney fees. The willful pattern can bring a penalty of up to $2,500.',
        },
        {
          text: 'A penalty of up to $2,500',
          why: 'A willful violation that amounts to a general pattern or business practice can bring a penalty of up to $2,500.',
          correct: true,
        },
        {
          text: 'Reduction of every embezzlement sentence to 1 year',
          why: 'If an embezzlement was less than $5,000, prison time may be reduced to 1 year. That reduction is not the penalty for a willful consumer-reporting pattern.',
        },
      ],
    ),
    question(
      'c15q144',
      'If insurance is declined or modified because of a consumer or investigative report, what must the consumer be given along with notice of that action?',
      [
        {
          text: 'Negative information more than 7 years old from a life policy of less than $150,000',
          why: 'For a life policy or a credit transaction of less than $150,000, the report cannot include other negative information more than 7 years old. The adverse-action duty is to give the name and address of the reporting agency.',
        },
        {
          text: 'The compensation a person received from prohibited conduct',
          why: 'Under Section 1034, a civil amount can be the compensation the person received from the prohibited conduct. That compensation is not what the consumer is given when insurance is declined or modified because of a report.',
        },
        {
          text: 'The annual privacy disclosure required of a customer',
          why: 'A customer receives an annual privacy disclosure under the Gramm-Leach-Bliley Act. The adverse-action item here is the name and address of the reporting agency.',
        },
        {
          text: 'The name and address of the reporting agency',
          why: 'If insurance is declined or modified because of a consumer or investigative report, the consumer must be told and given the name and address of the reporting agency.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q145',
      'If insurance is declined or modified because of a consumer or investigative report, what may the consumer learn?',
      [
        {
          text: 'What was in the report and who received a copy during the past year',
          why: 'The consumer may learn what was in the report and who received a copy during the past year.',
          correct: true,
        },
        {
          text: 'Only the names of neighbors, with no right to learn the report contents',
          why: 'An investigative consumer report uses interviews with associates, friends, and neighbors. The consumer may still learn what was in the report and who received a copy during the past year.',
        },
        {
          text: 'Bankruptcies more than 10 years old that a life policy of less than $150,000 must include',
          why: 'If the report is for a life policy or a credit transaction of less than $150,000, it cannot include bankruptcies more than 10 years old, civil suits, records of arrest or convictions, or other negative information more than 7 years old. Negative information includes delinquencies, late payments, insolvency, or any other default.',
        },
        {
          text: 'Recipients of inaccurate information from more than 2 years ago, and no one else',
          why: 'Corrected information goes to everyone who received the inaccurate information within the last 2 years. The consumer’s look-back for who received a copy is the past year.',
        },
      ],
    ),
    question(
      'c15q146',
      'What must the agency do if the consumer challenges information in the report?',
      [
        {
          text: 'Leave the report unchanged and make no further inquiry',
          why: 'The agency must reinvestigate and amend the report if warranted. A challenge is not a reason to refuse any further inquiry.',
        },
        {
          text: 'Reinvestigate and amend the report if warranted',
          why: 'If the consumer challenges the information, the agency must reinvestigate and amend the report if warranted.',
          correct: true,
        },
        {
          text: 'Send the challenge only to a nonaffiliated third party',
          why: 'The Gramm-Leach-Bliley Act addresses disclosure of nonpublic personal information to a nonaffiliated third party. A challenged consumer report requires the agency to reinvestigate and amend the report if warranted.',
        },
        {
          text: 'Wait 31 days and drop the consumer from a call list',
          why: 'Organizations consult the National Do Not Call Registry every 31 days and drop registered numbers from their call lists. That step is not the response to a challenged report.',
        },
      ],
    ),
    question(
      'c15q147',
      'When a report is corrected, who receives the corrected information?',
      [
        {
          text: 'Only the consumer who made the challenge',
          why: 'The corrected information goes to everyone who received the inaccurate information within the last 2 years. It is not limited to the consumer who challenged it.',
        },
        {
          text: 'Only associates, friends, and neighbors who were interviewed',
          why: 'Interviews with associates, friends, and neighbors are a source for an investigative consumer report. Recipients of the correction are everyone who received the inaccurate information within the last 2 years.',
        },
        {
          text: 'Everyone who received the inaccurate information within the last 2 years',
          why: 'When a report is corrected, the corrected information goes to everyone who received the inaccurate information within the last 2 years.',
          correct: true,
        },
        {
          text: 'Only a tax-exempt nonprofit',
          why: 'A call by or for a tax-exempt nonprofit is an exception to certain telemarketing bans. That exception does not decide who receives a corrected report.',
        },
      ],
    ),
    question(
      'c15q148',
      'What makes an oral or written statement unlawful insurance fraud here?',
      [
        {
          text: 'It is true and complete, and it is made without intent to deceive',
          why: 'The unlawful act is willful, done with intent to deceive, and false or missing a material fact. A true, complete statement without that intent is not this fraud.',
        },
        {
          text: 'It is an unknowing error about a consumer’s attorney fees',
          why: 'An unknowing consumer-reporting violation can bring liability for the consumer’s loss and reasonable attorney fees. That is not the willful insurance-fraud statement.',
        },
        {
          text: 'It omits a fact that is not material',
          why: 'The omission that counts is omission of a material fact. Omitting a fact that is not material is not the statement described here.',
        },
        {
          text: 'It is made willfully, with intent to deceive, and is false or omits a material fact',
          why: 'It is unlawful insurance fraud to willfully, and with intent to deceive, make an oral or written statement that is false or that omits a material fact.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q149',
      'Which subjects are included in an unlawful false statement or omission of a material fact?',
      [
        {
          text: 'Applications, renewals, claims, premiums paid, and an insurer’s financial condition',
          why: 'That includes applications, renewals, claims, premiums paid, and an insurer’s financial condition.',
          correct: true,
        },
        {
          text: 'Only a consumer report on habits taken from public sources',
          why: 'A consumer report is written or oral information on credit, character, reputation, or habits, collected from employment records, credit reports, and other public sources. That report is not the list of fraudulent insurance statements.',
        },
        {
          text: 'The hours before 8 a.m. and after 9 p.m.',
          why: 'Telemarketers may not call before 8 a.m. or after 9 p.m. Those hours are not the subjects of the false material statement.',
        },
        {
          text: 'Only a privacy notice given when a policy is purchased',
          why: 'Under the Gramm-Leach-Bliley Act, a customer receives a disclosure when the relationship is established, such as when a policy is purchased. That timing is not the list of fraudulent statements.',
        },
      ],
    ),
    question(
      'c15q150',
      'Who faces fines and imprisonment if convicted of embezzling funds?',
      [
        {
          text: 'A consumer-reporting agency that kept an inaccurate record',
          why: 'Consumer-reporting agencies must keep records confidential, accurate, relevant, and properly used. That record duty is not the embezzlement conviction described here.',
        },
        {
          text: 'An officer, director, agent, or other employee',
          why: 'An officer, director, agent, or other employee convicted of embezzling funds faces those fines and imprisonment.',
          correct: true,
        },
        {
          text: 'A person who embezzled less than $5,000 and therefore cannot be imprisoned',
          why: 'If the embezzlement was less than $5,000, prison time may be reduced to 1 year. The reduction does not say imprisonment is unavailable, and the persons who face the fines and imprisonment include an officer, director, agent, or other employee.',
        },
        {
          text: 'A caller who abandons a telemarketing call',
          why: 'Telemarketers may not abandon calls. Abandoning a call is not a conviction for embezzling funds.',
        },
      ],
    ),
    question(
      'c15q151',
      'When may prison time for embezzling funds be reduced to 1 year?',
      [
        {
          text: 'When the conduct jeopardized the security of the insurer',
          why: 'If the activity jeopardized the security of the insurer, the punishment for the false material statement can be up to 15 years. Jeopardy is not the reason embezzlement prison time is reduced to 1 year.',
        },
        {
          text: 'When a false material statement affecting interstate commerce draws up to 10 years',
          why: 'A person in the business of insurance whose activities affect interstate commerce, and who knowingly makes a false material statement, may be fined, imprisoned for up to 10 years, or both, and up to 15 years if that activity jeopardized the security of the insurer. Neither term is the 1-year reduction for embezzlement of less than $5,000.',
        },
        {
          text: 'When the embezzlement was less than $5,000',
          why: 'If the embezzlement was less than $5,000, prison time may be reduced to 1 year.',
          correct: true,
        },
        {
          text: 'When the person holds consent granted for 18 U.S.C. 1033',
          why: 'The 1033 consent must say it is granted for 18 U.S.C. 1033. That wording is not the condition for reducing embezzlement prison time to 1 year.',
        },
      ],
    ),
    question(
      'c15q152',
      'What must the 1033 letter of written consent say?',
      [
        {
          text: 'That embezzlement under $5,000 is allowed',
          why: 'Embezzlement of less than $5,000 can reduce prison time to 1 year. The consent must say it is granted for 18 U.S.C. 1033.',
        },
        {
          text: 'That imprisonment is reduced to 1 year',
          why: 'The 1-year figure is the possible reduction when embezzlement was less than $5,000. It is not the wording the consent must contain.',
        },
        {
          text: 'That the Attorney General will sue only for compensation received',
          why: 'Under Section 1034, the Attorney General may seek not more than $50,000 for each violation, or the compensation received, whichever is greater. The consent must say it is granted for 18 U.S.C. 1033.',
        },
        {
          text: 'That it is granted for 18 U.S.C. 1033',
          why: 'The consent must say it is granted for 18 U.S.C. 1033.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q153',
      'What punishment follows if a person convicted of a felony involving dishonesty or breach of trust engages in the business of insurance?',
      [
        {
          text: 'A fine, imprisonment for up to 5 years, or both',
          why: 'A person convicted of a felony involving dishonesty or breach of trust who engages in the business of insurance will be fined, imprisoned for up to 5 years, or both. A person convicted of a crime involving dishonesty, breach of trust, or a violation of the Violent Crime Control and Law Enforcement Act of 1994 may not work in the business of insurance affecting interstate commerce without a letter of written consent from an insurance regulatory official, a 1033 waiver.',
          correct: true,
        },
        {
          text: 'Imprisonment for up to 2 years for false pretenses',
          why: 'Imprisonment for up to 2 years may follow knowingly and willfully obtaining consumer information under false pretenses. Engaging in the business of insurance after this felony can bring up to 5 years.',
        },
        {
          text: 'Only a civil penalty of up to $2,500',
          why: 'A willful consumer-reporting violation that amounts to a general pattern or business practice can bring a penalty of up to $2,500. The punishment here is a fine, imprisonment for up to 5 years, or both.',
        },
        {
          text: 'No fine and no imprisonment',
          why: 'The stated punishment is a fine, imprisonment for up to 5 years, or both. The material does not remove that fine and imprisonment.',
        },
      ],
    ),
    question(
      'c15q154',
      'Under Section 1034, what civil amount may the Attorney General seek for each violation?',
      [
        {
          text: 'Up to $2,500, and never the compensation the person received',
          why: 'A penalty of up to $2,500 can apply to a willful consumer-reporting pattern. Section 1034 uses not more than $50,000 or the compensation received, whichever is greater.',
        },
        {
          text: 'Not more than $50,000, or the compensation received from the prohibited conduct, whichever is greater',
          why: 'Under Section 1034, the Attorney General may bring a civil action for not more than $50,000 for each violation, or the compensation the person received from the prohibited conduct, whichever is greater.',
          correct: true,
        },
        {
          text: 'A flat reduction tied to embezzlement of less than $5,000',
          why: 'Less than $5,000 is the embezzlement level at which prison time may be reduced to 1 year. It is not the Section 1034 civil amount.',
        },
        {
          text: 'Only the consumer’s reasonable attorney fees',
          why: 'Reasonable attorney fees are part of the liability for an unknowing consumer-reporting violation. They are not the Section 1034 civil amount.',
        },
      ],
    ),
    question(
      'c15q155',
      'Under the Gramm-Leach-Bliley Act, who is a customer?',
      [
        {
          text: 'Anyone who receives one abandoned telemarketing call',
          why: 'Telemarketers may not abandon calls. An abandoned call does not define a customer.',
        },
        {
          text: 'A nonaffiliated third party with no relationship to the insurer',
          why: 'The Act generally bars an insurer from disclosing nonpublic personal information to a nonaffiliated third party unless the insurer clearly and conspicuously discloses in writing that information may be disclosed, the consumer can direct, before the first disclosure, that it not be disclosed, or the consumer is told how to exercise that option. The customer is someone with an ongoing financial relationship.',
        },
        {
          text: 'Someone with an ongoing financial relationship',
          why: 'A customer is someone with an ongoing financial relationship.',
          correct: true,
        },
        {
          text: 'Only a person who has already opted out of every disclosure',
          why: 'The customer may opt out. Opting out is a choice the customer has, not the definition of who a customer is.',
        },
      ],
    ),
    question(
      'c15q156',
      'When does a customer receive the two privacy disclosures under the Gramm-Leach-Bliley Act?',
      [
        {
          text: 'Only in an annual notice, and never when a policy is purchased',
          why: 'The customer also receives an annual privacy disclosure. The two disclosures are when the relationship is established and before protected information is disclosed.',
        },
        {
          text: 'Within 3 days after an investigative report is requested, and again in 5 days',
          why: 'Those 3-day and 5-day periods belong to the investigative consumer report notice and the additional information. They are not the two Gramm-Leach-Bliley disclosures.',
        },
        {
          text: 'Before 8 a.m. and after 9 p.m. on the day of a sales call',
          why: 'Telemarketers may not call before 8 a.m. or after 9 p.m. Those hours are not when the two privacy disclosures are given.',
        },
        {
          text: 'When the relationship is established, such as when a policy is purchased, and before protected information is disclosed',
          why: 'A customer receives two disclosures: when the relationship is established, such as when a policy is purchased, and before protected information is disclosed.',
          correct: true,
        },
      ],
    ),
    question(
      'c15q157',
      'What annual privacy notice does a Gramm-Leach-Bliley customer receive, and what may the customer do?',
      [
        {
          text: 'An annual privacy disclosure, and the customer may opt out',
          why: 'The customer also receives an annual privacy disclosure and may opt out.',
          correct: true,
        },
        {
          text: 'A 1033 waiver in place of any privacy notice',
          why: 'A 1033 waiver is written consent related to certain criminal convictions and work in insurance. It is not the annual privacy disclosure, and the customer may opt out.',
        },
        {
          text: 'A corrected consumer report and no privacy notice',
          why: 'Corrected report information goes to prior recipients within the last 2 years under the Fair Credit Reporting Act. The Gramm-Leach-Bliley customer receives an annual privacy disclosure and may opt out.',
        },
        {
          text: 'A do-not-call exemption lasting 31 days',
          why: 'Organizations consult the National Do Not Call Registry every 31 days. That interval is not the annual privacy disclosure.',
        },
      ],
    ),
    question(
      'c15q158',
      'Who created the National Do Not Call Registry, and in what year?',
      [
        {
          text: 'An insurance regulatory official issuing a 1033 waiver',
          why: 'An insurance regulatory official issues the letter of written consent called a 1033 waiver. That official is not described as creating the registry.',
        },
        {
          text: 'The Federal Trade Commission and the Federal Communications Commission, in 2003',
          why: 'In 2003 the Federal Trade Commission and the Federal Communications Commission created the National Do Not Call Registry.',
          correct: true,
        },
        {
          text: 'Consumer-reporting agencies, when they issue an investigative report',
          why: 'Consumer-reporting agencies keep consumer reports and investigative reports. The registry was created by the Federal Trade Commission and the Federal Communications Commission in 2003.',
        },
        {
          text: 'The Attorney General, under Section 1034',
          why: 'Under Section 1034, the Attorney General may bring a civil action. That role is not the creation of the registry.',
        },
      ],
    ),
    question(
      'c15q159',
      'Which calling practice is forbidden?',
      [
        {
          text: 'A call the consumer permitted in writing',
          why: 'A call the consumer permitted in writing is an exception. It is not the banned call to a number on a registry.',
        },
        {
          text: 'A call by or for a tax-exempt nonprofit',
          why: 'A call by or for a tax-exempt nonprofit is an exception. It is not listed as a forbidden call.',
        },
        {
          text: 'A call to a number on the national registry or on that seller’s own do-not-call list',
          why: 'Telemarketers may not call a number on the national registry or on that seller’s own do-not-call list. They also may not deny someone the right to be placed on a registry, abandon calls, fail to transmit caller ID, threaten, intimidate, or use obscene language, or cause a phone to ring in order to annoy, abuse, or harass.',
          correct: true,
        },
        {
          text: 'A call that is not commercial and has no unsolicited advertisement',
          why: 'A call that is not commercial and has no unsolicited advertisement is an exception. It is not the registry ban.',
        },
      ],
    ),
    question(
      'c15q160',
      'How often must organizations consult the registry, and what do they do with registered numbers?',
      [
        {
          text: 'Every 18 months, and they add those numbers to their call lists',
          why: 'An exception covers a call from or for an organization with an established business relationship during the last 18 months after a sale or transaction. Consultation is every 31 days, and registered numbers are dropped rather than added.',
        },
        {
          text: 'Only after written consent under 18 U.S.C. 1033, while continuing to call registered numbers',
          why: 'A 1033 letter is written consent related to work in the business of insurance after certain convictions. It does not set the registry schedule, and registered numbers are dropped from call lists.',
        },
        {
          text: 'Within 3 days of a report request, using neighbor interviews',
          why: 'An investigative consumer report requires written notice within 3 days and may use interviews with neighbors. Organizations consult this registry every 31 days and drop registered numbers.',
        },
        {
          text: 'Every 31 days, and they drop registered numbers from their call lists',
          why: 'Organizations consult the registry every 31 days and drop registered numbers from their call lists.',
          correct: true,
        },
      ],
    ),
  ],
}
