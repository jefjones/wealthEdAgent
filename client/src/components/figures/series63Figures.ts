import type { Figure } from './figureData.ts'

/** Original Series 63 study figures, drawn in the site's colors. Ids start with s63- so they never clash with other tests. */
export const series63Figures: Record<string, Figure> = {
  // Chapter 1
  's63-ia-test': {
    kind: 'steps',
    caption: 'The three-part test. An investment adviser does all three.',
    steps: [
      { label: 'Advice', detail: 'Gives advice or analysis about securities', tone: 'blue' },
      { label: 'Business', detail: 'Is in the business of giving that advice', tone: 'navy' },
      { label: 'Pay', detail: 'Gets paid for the advice', tone: 'green' },
    ],
  },
  's63-aum-bands': {
    kind: 'bars',
    caption: 'Assets under management decide where an adviser registers.',
    bars: [
      { label: 'Under $100 million', value: 100, display: 'States', tone: 'green' },
      { label: '$100M to $110M', value: 110, display: 'Either one', tone: 'amber' },
      { label: 'Over $110 million', value: 130, display: 'SEC', tone: 'navy' },
    ],
  },
  's63-de-minimis': {
    kind: 'compare',
    caption: 'An adviser with no office in a state can skip registering there in two cases.',
    columns: [
      { title: 'Institutions only', tone: 'blue', rows: ['No office in the state', 'Only institutional clients there', 'Any number of them'] },
      { title: 'De minimis', tone: 'green', rows: ['No office in the state', 'Five or fewer retail clients', 'In the past 12 months'] },
      { title: 'Must register', tone: 'red', rows: ['An office in the state', 'Or a sixth retail client'] },
    ],
  },
  's63-reg-calendar': {
    kind: 'steps',
    caption: 'The life of a state registration.',
    steps: [
      { label: 'File', detail: 'Application, consent, and fee', tone: 'gray' },
      { label: 'Day 30, noon', detail: 'Registration takes effect', tone: 'green' },
      { label: 'Up to day 90', detail: 'Can be revoked for past penalties found later', tone: 'amber' },
      { label: 'December 31', detail: 'Ends at midnight unless renewed', tone: 'navy' },
      { label: 'Withdraw', detail: 'Effective after 30 days, power kept 1 year', tone: 'red' },
    ],
  },
  // Chapter 2
  's63-who-registers': {
    kind: 'chart',
    chart: 's63-who-registers',
    caption: 'Who registers where. Advisers pick the SEC or the states. Broker-dealers almost always use both, and agents never register with the SEC.',
    description: 'A three-column chart. Investment advisers register with the SEC or the states, never FINRA. Broker-dealers register with the SEC, the states, and FINRA. Agents register with the states and FINRA, not the SEC.',
  },
  's63-sipc': {
    kind: 'bars',
    caption: 'SIPC covers customers when a broker-dealer fails, not when investments go down.',
    bars: [
      { label: 'Total per customer', value: 500, display: '$500,000', tone: 'navy' },
      { label: 'Cash part of that', value: 250, display: '$250,000', tone: 'blue' },
      { label: 'Market losses', value: 1, display: '$0', tone: 'red' },
    ],
  },
  's63-clerical-can': {
    kind: 'compare',
    caption: 'What unregistered clerical staff at a broker-dealer can and cannot do.',
    columns: [
      { title: 'Can do', tone: 'green', rows: ['Give stock or bond quotes', 'Give account information', 'Fax documents for signatures'] },
      { title: 'Cannot do', tone: 'red', rows: ['Give investment advice', 'Accept solicited orders', 'Accept unsolicited orders'] },
    ],
  },
  's63-denial-reasons': {
    kind: 'compare',
    caption: 'The look-back periods to know among the 12 reasons a registration can be denied.',
    columns: [
      { title: '10 years', tone: 'red', rows: ['Felony conviction', 'Securities misdemeanor', 'Other securities law violations'] },
      { title: '5 years', tone: 'amber', rows: ['Foreign law violations', 'Foreign revocation'] },
      { title: 'Never enough alone', tone: 'gray', rows: ['Lack of experience'] },
    ],
  },
  // Chapter 3
  's63-records': {
    kind: 'bars',
    caption: 'How long firms keep records.',
    bars: [
      { label: 'Broker-dealer trade records and marketing', value: 3, display: '3 years', tone: 'green' },
      { label: 'Adviser client records', value: 5, display: '5 years', tone: 'blue' },
      { label: 'Broker-dealer account records', value: 6, display: '6 years', tone: 'navy' },
      { label: 'Adviser charters and minute books', value: 8, display: 'Life of firm + 3 years', tone: 'amber' },
    ],
  },
  's63-five-percent': {
    kind: 'compare',
    caption: "FINRA's 5% Policy is a guide, not a hard cap.",
    columns: [
      { title: 'Can justify more', tone: 'green', rows: ['Hard-to-find security', 'Small trade amount', 'Extra services'] },
      { title: 'Looks unfair', tone: 'red', rows: ['A pattern above 5%', 'Fees unrelated to trades', 'Hidden charges'] },
      { title: 'Not covered', tone: 'gray', rows: ['IPOs', 'Mutual funds', 'Variable annuities', 'Municipal bonds'] },
    ],
  },
  's63-soft-dollars': {
    kind: 'compare',
    caption: 'Soft dollars must help clients, not just the adviser.',
    columns: [
      { title: 'Allowed', tone: 'green', rows: ['Research', 'Market data', 'Analysis software', 'Work-related seminars', 'Custody and clearing'] },
      { title: 'Not allowed', tone: 'red', rows: ['Office space and furniture', 'Clerical staff and salaries', 'Referral payments', 'Phones and computers'] },
    ],
  },
  's63-finra-comms': {
    kind: 'compare',
    caption: 'FINRA communication types and who approves them.',
    columns: [
      { title: 'Correspondence', tone: 'green', rows: ['25 or fewer retail in 30 days', 'Reviewed after use', 'Never filed'] },
      { title: 'Retail', tone: 'amber', rows: ['More than 25 retail in 30 days', 'Approved before use', 'Usually filed'] },
      { title: 'Institutional', tone: 'blue', rows: ['Institutions only', 'Reviewed after use', 'Not filed'] },
    ],
  },
  // Chapter 4
  's63-three-questions': {
    kind: 'steps',
    caption: 'Ask these in order. A "no" to the first or a "yes" to the others means no state registration.',
    steps: [
      { label: 'Is it a security?', detail: 'If not, the Administrator has no say', tone: 'navy' },
      { label: 'Is the security exempt?', detail: 'If so, no registration', tone: 'blue' },
      { label: 'Is the sale exempt?', detail: 'If so, no registration', tone: 'green' },
      { label: 'Otherwise', detail: 'Register in the state', tone: 'red' },
    ],
  },
  's63-security-or-not': {
    kind: 'compare',
    caption: 'Look for the key words. Variable points to a security. Fixed points away from one.',
    columns: [
      { title: 'Security', tone: 'blue', rows: ['Stocks and bonds', 'Mutual funds and ETFs', 'Variable annuities', 'Options', 'REITs and ADRs'] },
      { title: 'Not a security', tone: 'amber', rows: ['Fixed annuities', 'Term or whole life', 'Gold and commodities', 'Collectibles', 'IRAs and 401(k) plans'] },
    ],
  },
  's63-federal-vs-state': {
    kind: 'compare',
    caption: 'Federal covered securities skip state registration. Some still notice file.',
    columns: [
      { title: 'No state filing', tone: 'green', rows: ['NYSE and Nasdaq stocks', 'Their bonds and preferred stock'] },
      { title: 'Notice filing', tone: 'amber', rows: ['Mutual funds and UITs', 'Regulation D private placements'] },
      { title: 'Register in the state', tone: 'red', rows: ['Most OTC stocks', 'Stocks on a foreign exchange only'] },
    ],
  },
  's63-reg-methods': {
    kind: 'compare',
    caption: 'Three ways to register a security in a state.',
    columns: [
      { title: 'Qualification', tone: 'amber', rows: ['Most work', 'Often one state only', 'Effective when the state says'] },
      { title: 'Coordination', tone: 'blue', rows: ['Most common', 'First-time SEC issuers', 'On file 10 days'] },
      { title: 'Notification', tone: 'green', rows: ['Seasoned issuers', '36 months in business', 'On file 5 business days'] },
    ],
  },
  's63-prospectus-days': {
    kind: 'bars',
    caption: 'How long dealers must keep delivering the final prospectus after an offering starts.',
    bars: [
      { label: 'Follow-on, exchange-listed', value: 1, display: '0 days', tone: 'gray' },
      { label: 'IPO, exchange-listed', value: 25, display: '25 days', tone: 'green' },
      { label: 'Follow-on, OTC', value: 40, display: '40 days', tone: 'blue' },
      { label: 'IPO, OTC', value: 90, display: '90 days', tone: 'navy' },
    ],
  },
  's63-jurisdiction': {
    kind: 'compare',
    caption: 'Which states have power over an offer and a sale.',
    columns: [
      { title: 'Offer', tone: 'blue', rows: ['Where it started', 'Where it was sent and received', 'TV or radio: where it was broadcast from'] },
      { title: 'Sale', tone: 'navy', rows: ['Where it started', 'Where it was sent', 'Where it was processed'] },
    ],
  },
  // Chapter 5
  's63-margin': {
    kind: 'bars',
    caption: 'Margin numbers to know.',
    bars: [
      { label: 'Regulation T loan, up to', value: 50, display: '50%', tone: 'blue' },
      { label: 'Short account equity, at least', value: 30, display: '30%', tone: 'amber' },
      { label: 'Long account equity, at least', value: 25, display: '25%', tone: 'green' },
    ],
  },
  's63-discretion-clock': {
    kind: 'compare',
    caption: 'When written discretionary authority is due.',
    columns: [
      { title: 'Adviser or IAR', tone: 'green', rows: ['Verbal OK to start', 'Written within 10 business days of first trade'] },
      { title: 'Broker-dealer or agent', tone: 'red', rows: ['Verbal not valid', 'Written before the first trade'] },
      { title: 'Time and price only', tone: 'gray', rows: ['Verbal OK', 'Good for that trading day only'] },
    ],
  },
  's63-custody': {
    kind: 'steps',
    caption: 'Rules for an adviser with custody.',
    steps: [
      { label: 'Qualified custodian', detail: 'Bank or broker-dealer holds assets apart from the firm', tone: 'navy' },
      { label: 'Every 3 months', detail: 'Clients get account statements', tone: 'blue' },
      { label: 'Once a year', detail: 'Surprise outside audit', tone: 'amber' },
      { label: 'Tell clients', detail: 'Where and how assets are held', tone: 'green' },
    ],
  },
  's63-suitability-three': {
    kind: 'steps',
    caption: "FINRA's three suitability duties.",
    steps: [
      { label: 'Reasonable basis', detail: 'Fits at least some investors', tone: 'blue' },
      { label: 'Customer specific', detail: 'Fits this customer', tone: 'navy' },
      { label: 'Quantitative', detail: 'Not too many trades', tone: 'green' },
    ],
  },
  's63-regbi': {
    kind: 'steps',
    caption: 'The four duties of Regulation Best Interest.',
    steps: [
      { label: 'Disclosure', detail: 'Material facts in writing', tone: 'blue' },
      { label: 'Care', detail: 'The three suitability duties', tone: 'navy' },
      { label: 'Conflicts', detail: 'Find and reduce them', tone: 'amber' },
      { label: 'Compliance', detail: 'Written policies', tone: 'green' },
    ],
  },
  // Chapter 6
  's63-hold-timeline': {
    kind: 'steps',
    caption: 'Holding a payout that looks like exploitation. All days are business days.',
    steps: [
      { label: 'Day 0', detail: 'Reasonable belief of exploitation', tone: 'red' },
      { label: 'Within 2 days', detail: 'Tell APS, the Administrator, and others on the account', tone: 'amber' },
      { label: 'Within 7 days', detail: 'Report the internal review', tone: 'blue' },
      { label: 'Up to 15 days', detail: 'First hold, can end early', tone: 'navy' },
      { label: 'Up to 25 days', detail: 'Extended if APS or the Administrator asks', tone: 'gray' },
    ],
  },
  's63-banned-trades': {
    kind: 'compare',
    caption: 'Banned trading practices at a glance.',
    columns: [
      { title: 'Fake activity', tone: 'red', rows: ['Wash trading', 'Spoofing', 'Layering', 'Pump and dump'] },
      { title: 'Unfair edge', tone: 'amber', rows: ['Insider trading', 'Front running', 'Freeriding'] },
      { title: 'Bad dealing', tone: 'navy', rows: ['Backing away', 'Churning', 'Selling away'] },
    ],
  },
  's63-admin-can': {
    kind: 'compare',
    caption: 'What the Administrator can and cannot do.',
    columns: [
      { title: 'Can', tone: 'green', rows: ['Investigate and subpoena', 'Issue cease and desist orders', 'Deny, suspend, revoke, cancel', 'Ask a court for an injunction'] },
      { title: 'Cannot', tone: 'red', rows: ['Issue an injunction itself', 'Jail anyone or levy fines', 'Hold trials', 'Write state laws'] },
    ],
  },
  's63-rescission': {
    kind: 'compare',
    caption: 'Rescission lets a client undo a bad sale.',
    columns: [
      { title: 'Client gets', tone: 'green', rows: ['Amount invested', 'Plus interest up to 6%', 'Minus income received'] },
      { title: 'Still holds shares', tone: 'blue', rows: ['Accept or decline', 'Gives up the right to sue either way'] },
      { title: 'Already sold', tone: 'amber', rows: ['30 days to decide', 'Decline keeps the right to sue'] },
    ],
  },
  's63-time-limits': {
    kind: 'bars',
    caption: 'Time limits for bringing a case.',
    bars: [
      { label: 'Civil, from discovery', value: 2, display: '2 years', tone: 'blue' },
      { label: 'Civil, from the violation', value: 3, display: '3 years', tone: 'navy' },
      { label: 'Criminal, from the violation', value: 5, display: '5 years', tone: 'red' },
    ],
  },
}
