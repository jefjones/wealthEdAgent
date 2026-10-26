import type { Figure } from './figureData.ts'

/** Original Series 65 study figures, drawn in the site's colors. Ids start with s65- so they never clash with other tests. */
export const series65Figures: Record<string, Figure> = {
  // Chapter 1
  's65-market-caps': {
    kind: 'bars',
    caption: 'Company size by market value. Bigger companies are usually steadier; smaller ones swing more.',
    bars: [
      { label: 'Mega cap', value: 200, display: '$200 billion+', tone: 'navy' },
      { label: 'Large cap', value: 120, display: '$10B to $200B', tone: 'blue' },
      { label: 'Mid cap', value: 70, display: '$2B to $10B', tone: 'green' },
      { label: 'Small cap', value: 35, display: '$250M to $2B', tone: 'amber' },
      { label: 'Micro cap', value: 12, display: 'Under $250M', tone: 'red' },
    ],
  },
  's65-rate-seesaw': {
    kind: 'chart',
    chart: 'bond-seesaw',
    caption: 'Rates and bond prices sit on opposite ends of a seesaw. When rates go up, bond prices come down.',
    description: 'A seesaw. The interest rate side is up and the bond price side is down.',
  },
  's65-credit-ladder': {
    kind: 'compare',
    caption: 'The rating ladder. BBB (Baa) is the lowest rung of investment grade.',
    columns: [
      { title: 'Investment grade', tone: 'green', rows: ['AAA / Aaa', 'AA / Aa', 'A / A', 'BBB / Baa'] },
      { title: 'Speculative (junk)', tone: 'amber', rows: ['BB / Ba', 'B / B', 'CCC / Caa', 'CC / Ca', 'C / C'] },
    ],
  },
  's65-liquidation-order': {
    kind: 'steps',
    caption: 'Who gets paid first if a company is liquidated.',
    steps: [
      { label: 'Secured creditors', detail: 'Mortgage bonds, equipment trusts', tone: 'navy' },
      { label: 'Priority claims', detail: 'Wages, taxes, bankruptcy costs', tone: 'gray' },
      { label: 'Unsecured creditors', detail: 'Debenture holders', tone: 'blue' },
      { label: 'Subordinated creditors', detail: 'Subordinated debentures', tone: 'gray' },
      { label: 'Preferred stock', detail: 'Before common owners', tone: 'green' },
      { label: 'Common stock', detail: 'Paid last, if anything is left', tone: 'amber' },
    ],
  },
  's65-option-grid': {
    kind: 'compare',
    caption: 'Holders buy a right. Writers take on an obligation.',
    columns: [
      { title: 'Long call', tone: 'green', rows: ['Right to buy', 'Bullish'] },
      { title: 'Short call', tone: 'red', rows: ['Obligation to sell', 'Bearish'] },
      { title: 'Long put', tone: 'red', rows: ['Right to sell', 'Bearish'] },
      { title: 'Short put', tone: 'green', rows: ['Obligation to buy', 'Bullish'] },
    ],
  },
  's65-open-closed': {
    kind: 'compare',
    caption: 'Open-end funds trade with the fund. Closed-end funds trade on an exchange.',
    columns: [
      { title: 'Open-end (mutual fund)', tone: 'blue', rows: ['New shares sold all the time', 'Bought and redeemed with the fund', 'Priced at NAV once a day'] },
      { title: 'Closed-end fund', tone: 'navy', rows: ['Fixed number of shares', 'Trades on an exchange', 'Price set by supply and demand'] },
    ],
  },
  's65-breakpoints': {
    kind: 'bars',
    caption: 'A sample breakpoint schedule. The lower rate applies to the whole purchase.',
    unit: '%',
    bars: [
      { label: 'Up to $10,000', value: 8.5, display: '8.5%', tone: 'red' },
      { label: '$10,001 to $25,000', value: 7.75, display: '7.75%', tone: 'amber' },
      { label: '$25,001 or more', value: 6.5, display: '6.5%', tone: 'green' },
    ],
  },
  's65-share-classes': {
    kind: 'compare',
    caption: 'Mutual fund share classes trade one kind of cost for another.',
    columns: [
      { title: 'Class A', tone: 'green', rows: ['Front-end load', 'Low or no 12b-1 fee', 'Breakpoints for big buys', 'Good for long-term'] },
      { title: 'Class B', tone: 'amber', rows: ['Back-end load (CDSC)', 'Shrinks the longer you hold', 'Converts to A later'] },
      { title: 'Class C', tone: 'red', rows: ['Level load', 'Highest 12b-1 fee', 'Good for short-term'] },
    ],
  },
  's65-fixed-variable': {
    kind: 'compare',
    caption: 'Who carries the investment risk in an annuity.',
    columns: [
      { title: 'Fixed annuity', tone: 'blue', rows: ['Insurer carries the risk', 'Set rate of return', 'Not a security'] },
      { title: 'Variable annuity', tone: 'amber', rows: ['Buyer carries the risk', 'Value rides on subaccounts', 'A security'] },
    ],
  },
  's65-life-types': {
    kind: 'compare',
    caption: 'Kinds of life insurance.',
    columns: [
      { title: 'Term', tone: 'gray', rows: ['Covers a set period', 'No cash value', 'Cheapest'] },
      { title: 'Whole', tone: 'blue', rows: ['Lifetime coverage', 'Fixed premium', 'Guaranteed cash value'] },
      { title: 'Universal', tone: 'green', rows: ['Flexible premium', 'Flexible death benefit'] },
      { title: 'Variable', tone: 'amber', rows: ['Cash value invested', 'A security'] },
    ],
  },
  // Chapter 2
  's65-business-cycle': {
    kind: 'steps',
    caption: 'The business cycle repeats in four phases.',
    steps: [
      { label: 'Expansion', detail: 'Output, jobs, and spending grow', tone: 'green' },
      { label: 'Peak', detail: 'Growth tops out', tone: 'navy' },
      { label: 'Contraction', detail: 'Output falls; a long one is a recession', tone: 'red' },
      { label: 'Trough', detail: 'The low point before recovery', tone: 'amber' },
    ],
  },
  's65-fed-tools': {
    kind: 'compare',
    caption: 'How the Fed speeds up or slows down the economy.',
    columns: [
      { title: 'Easier money', tone: 'green', rows: ['Buy securities in the open market', 'Lower the discount rate', 'More money to lend'] },
      { title: 'Tighter money', tone: 'red', rows: ['Sell securities in the open market', 'Raise the discount rate', 'Less money to lend'] },
    ],
  },
  's65-correlation': {
    kind: 'bars',
    caption: 'Correlation runs from -1 to +1. The lower it is, the more two holdings help diversify.',
    bars: [
      { label: 'Perfect positive', value: 100, display: '+1', tone: 'red' },
      { label: 'No relation', value: 50, display: '0', tone: 'gray' },
      { label: 'Perfect negative', value: 4, display: '-1', tone: 'green' },
    ],
  },
  's65-alpha-beta': {
    kind: 'chart',
    chart: 'alpha-beta',
    caption: 'Expected return rises with beta. A fund above the line has positive alpha; below it, negative alpha.',
    description: 'A straight line of expected return rising with beta. One fund sits above the line, showing positive alpha, and one sits below, showing negative alpha.',
  },
  's65-beta-compare': {
    kind: 'chart',
    chart: 'beta-compare',
    caption: 'Beta compares a stock\'s swings with the market. Above 1 moves more; below 1 moves less.',
    description: 'Three lines over time: the market, a high-beta stock that swings more, and a low-beta stock that swings less.',
  },
  's65-yield-order': {
    kind: 'compare',
    caption: 'How the four yields line up. Remember: the yield to call is the extreme.',
    columns: [
      { title: 'Discount bond', tone: 'green', rows: ['Coupon lowest', 'Current yield', 'Yield to maturity', 'Yield to call highest'] },
      { title: 'At par', tone: 'gray', rows: ['All four equal'] },
      { title: 'Premium bond', tone: 'red', rows: ['Coupon highest', 'Current yield', 'Yield to maturity', 'Yield to call lowest'] },
    ],
  },
  's65-normal-yield': {
    kind: 'chart',
    chart: 's65-normal-yield',
    caption: 'A normal yield curve slopes up. Lenders want more interest to tie up money longer.',
    description: 'A rising curve of yields from 3 months to 30 years, from about 2.4% up to about 4.6%.',
  },
  's65-inverted-yield': {
    kind: 'chart',
    chart: 's65-inverted-yield',
    caption: 'An inverted yield curve slopes down. Short-term rates are higher, which often comes before a slowdown.',
    description: 'A falling curve of yields from 3 months to 30 years, from about 5.3% down to about 3.9%.',
  },
  // Chapter 3
  's65-efficient-frontier': {
    kind: 'chart',
    chart: 'efficient-frontier',
    caption: 'The efficient frontier: the best expected return for each level of risk.',
    description: 'A curve bending up and to the right. Portfolios on the curve are efficient; ones below it are not.',
  },
  's65-capm-line': {
    kind: 'chart',
    chart: 'alpha-beta',
    caption: 'CAPM: expected return = risk-free rate + beta × (market return - risk-free rate). Results above the line are positive alpha.',
    description: 'A straight line of expected return rising with beta, starting at the risk-free rate. One fund sits above the line and one below.',
  },
  's65-rebalance': {
    kind: 'steps',
    caption: 'Rebalancing brings a portfolio back to its target mix.',
    steps: [
      { label: 'Target', detail: '60% stocks, 40% bonds', tone: 'navy' },
      { label: 'Drift', detail: 'Stocks rise to 70%', tone: 'amber' },
      { label: 'Rebalance', detail: 'Sell some stocks, buy bonds', tone: 'blue' },
      { label: 'Back on target', detail: '60 / 40 again', tone: 'green' },
    ],
  },
  's65-growth-value': {
    kind: 'compare',
    caption: 'Growth and value managers look for different things.',
    columns: [
      { title: 'Growth', tone: 'green', rows: ['Fast-rising earnings', 'High P/E', 'Low or no dividends'] },
      { title: 'Value', tone: 'blue', rows: ['Priced below worth', 'Low P/E', 'Often pays dividends'] },
    ],
  },
  's65-risk-types': {
    kind: 'compare',
    caption: 'Risk you can diversify away versus risk you cannot.',
    columns: [
      { title: 'Systematic (market)', tone: 'red', rows: ['Hits the whole market', 'Interest rate, inflation, market risk', 'Cannot diversify away'] },
      { title: 'Unsystematic', tone: 'green', rows: ['Hits one company or industry', 'Business, credit, regulatory risk', 'Reduced by diversifying'] },
    ],
  },
  's65-time-dollar': {
    kind: 'compare',
    caption: 'Two ways to measure return.',
    columns: [
      { title: 'Time-weighted', tone: 'blue', rows: ['Ignores deposits and withdrawals', 'Judges the manager', 'Used by funds and advisers'] },
      { title: 'Dollar-weighted', tone: 'amber', rows: ['Counts deposits and withdrawals', 'Judges the investor\'s timing', 'Best for individuals'] },
    ],
  },
  // Chapter 4
  's65-objectives': {
    kind: 'steps',
    caption: 'Common investment goals, from safest to most aggressive.',
    steps: [
      { label: 'Preservation of capital', detail: 'Do not lose what you put in', tone: 'gray' },
      { label: 'Income', detail: 'Steady cash from interest and dividends', tone: 'blue' },
      { label: 'Growth and income', detail: 'Some of both', tone: 'green' },
      { label: 'Growth', detail: 'Value rising over time', tone: 'amber' },
      { label: 'Speculation', detail: 'Big gains, big risk', tone: 'red' },
    ],
  },
  's65-gain-holding': {
    kind: 'compare',
    caption: 'How long you hold decides how a gain is taxed.',
    columns: [
      { title: 'One year or less', tone: 'red', rows: ['Short-term gain', 'Taxed like wages', '10% to 37%'] },
      { title: 'More than one year', tone: 'green', rows: ['Long-term gain', 'Lower rates', '0%, 15%, or 20%'] },
    ],
  },
  's65-bond-tax': {
    kind: 'compare',
    caption: 'Where bond interest is taxed.',
    columns: [
      { title: 'Corporate', tone: 'red', rows: ['Federal: taxed', 'State: taxed'] },
      { title: 'U.S. Treasury', tone: 'blue', rows: ['Federal: taxed', 'State: free'] },
      { title: 'Municipal', tone: 'green', rows: ['Federal: free', 'State: free if in-state'] },
    ],
  },
  's65-gift-estate': {
    kind: 'bars',
    caption: 'Key gift and estate tax numbers for 2026.',
    bars: [
      { label: 'Yearly gift per person', value: 19, display: '$19,000', tone: 'green' },
      { label: 'With gift splitting', value: 38, display: '$38,000', tone: 'blue' },
      { label: 'Lifetime exemption', value: 100, display: '$15 million', tone: 'navy' },
    ],
  },
  // Chapter 5
  's65-joint-accounts': {
    kind: 'compare',
    caption: 'Two ways to own an account together.',
    columns: [
      { title: 'Joint with rights of survivorship', tone: 'blue', rows: ['Equal shares', 'Passes to the survivor', 'Skips probate'] },
      { title: 'Tenants in common', tone: 'amber', rows: ['Shares can differ', 'Goes to the owner\'s estate', 'Can go through probate'] },
    ],
  },
  's65-business-types': {
    kind: 'compare',
    caption: 'Business forms and how they are taxed.',
    columns: [
      { title: 'Sole proprietor', tone: 'gray', rows: ['Unlimited liability', 'Taxed on owner\'s return'] },
      { title: 'Partnership / LLC', tone: 'blue', rows: ['Income flows through', 'LLC limits liability'] },
      { title: 'S corporation', tone: 'green', rows: ['Limited liability', 'Income flows through'] },
      { title: 'C corporation', tone: 'navy', rows: ['Limited liability', '21% corporate tax, then on dividends'] },
    ],
  },
  's65-trust-roles': {
    kind: 'steps',
    caption: 'The three roles in a trust.',
    steps: [
      { label: 'Grantor', detail: 'Creates and funds the trust', tone: 'navy' },
      { label: 'Trustee', detail: 'Manages the assets', tone: 'blue' },
      { label: 'Beneficiary', detail: 'Receives the benefits', tone: 'green' },
    ],
  },
  's65-db-dc': {
    kind: 'compare',
    caption: 'Who carries the risk in a retirement plan.',
    columns: [
      { title: 'Defined benefit', tone: 'blue', rows: ['Promises a set payout', 'Employer carries the risk', 'Like a pension'] },
      { title: 'Defined contribution', tone: 'green', rows: ['Sets what goes in', 'Employee carries the risk', 'Like a 401(k)'] },
    ],
  },
  's65-transfer-rollover': {
    kind: 'compare',
    caption: 'Moving retirement money: direct transfer versus rollover.',
    columns: [
      { title: 'Direct transfer', tone: 'green', rows: ['Custodian to custodian', 'No withholding', 'No limit on how often'] },
      { title: '60-day rollover', tone: 'amber', rows: ['Check goes to the owner', 'Redeposit within 60 days', '20% withheld from plans', 'IRA-to-IRA once a year'] },
    ],
  },
  's65-ira-compare': {
    kind: 'compare',
    caption: 'Traditional and Roth IRAs in 2026: $7,500 a year, plus $1,100 at 50 or older.',
    columns: [
      { title: 'Traditional IRA', tone: 'blue', rows: ['May be deductible', 'Withdrawals taxed', 'RMDs start at 73'] },
      { title: 'Roth IRA', tone: 'green', rows: ['Not deductible', 'Qualified withdrawals tax-free', 'No RMDs for the owner'] },
    ],
  },
  's65-529-coverdell': {
    kind: 'compare',
    caption: 'Two ways to save for school.',
    columns: [
      { title: '529 plan', tone: 'green', rows: ['No federal yearly limit', 'Up to $20,000 a year for K-12', 'Owner keeps control'] },
      { title: 'Coverdell ESA', tone: 'blue', rows: ['$2,000 a year per child', 'Income limits', 'Used by age 30'] },
    ],
  },
  // Chapter 6
  's65-ia-test': {
    kind: 'steps',
    caption: 'The three-part test. An investment adviser does all three.',
    steps: [
      { label: 'Advice', detail: 'Gives advice or analysis about securities', tone: 'blue' },
      { label: 'Business', detail: 'Is in the business of giving that advice', tone: 'navy' },
      { label: 'Pay', detail: 'Gets paid for the advice', tone: 'green' },
    ],
  },
  's65-aum-bands': {
    kind: 'bars',
    caption: 'Assets under management decide where an adviser registers.',
    bars: [
      { label: 'Under $100 million', value: 100, display: 'States', tone: 'green' },
      { label: '$100M to $110M', value: 110, display: 'Either one', tone: 'amber' },
      { label: 'Over $110 million', value: 130, display: 'SEC', tone: 'navy' },
    ],
  },
  's65-de-minimis': {
    kind: 'compare',
    caption: 'An adviser with no office in a state can skip registering there in two cases.',
    columns: [
      { title: 'Institutions only', tone: 'blue', rows: ['No office in the state', 'Only institutional clients there', 'Any number of them'] },
      { title: 'De minimis', tone: 'green', rows: ['No office in the state', 'Five or fewer retail clients', 'In the past 12 months'] },
      { title: 'Must register', tone: 'red', rows: ['An office in the state', 'Or a sixth retail client'] },
    ],
  },
  's65-reg-calendar': {
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
  's65-who-registers': {
    kind: 'chart',
    chart: 's63-who-registers',
    caption: 'Who registers where. Advisers pick the SEC or the states. Broker-dealers almost always use both, and agents never register with the SEC.',
    description: 'A three-column chart. Investment advisers register with the SEC or the states, never FINRA. Broker-dealers register with the SEC, the states, and FINRA. Agents register with the states and FINRA, not the SEC.',
  },
  's65-clerical-can': {
    kind: 'compare',
    caption: 'What unregistered clerical staff at a broker-dealer can and cannot do.',
    columns: [
      { title: 'Can do', tone: 'green', rows: ['Give stock or bond quotes', 'Give account information', 'Fax documents for signatures'] },
      { title: 'Cannot do', tone: 'red', rows: ['Give investment advice', 'Accept solicited orders', 'Accept unsolicited orders'] },
    ],
  },
  // Chapter 7
  's65-brochure-timing': {
    kind: 'steps',
    caption: 'Brochure timing for state-registered advisers.',
    steps: [
      { label: '48 hours before signing', detail: 'Deliver the brochure', tone: 'green' },
      { label: 'Late or at signing', detail: 'Client may cancel within 5 business days, no fee', tone: 'amber' },
      { label: 'Within 120 days of year end', detail: 'Updated brochure or summary of changes', tone: 'blue' },
      { label: 'Form CRS on request', detail: 'Within 30 days; changes within 60 days', tone: 'navy' },
    ],
  },
  's65-soft-dollars': {
    kind: 'compare',
    caption: 'Soft dollars must help clients, not just the adviser.',
    columns: [
      { title: 'Allowed', tone: 'green', rows: ['Research reports', 'Market data services', 'Analysis software', 'Work-related seminars', 'Custody and clearing'] },
      { title: 'Not allowed', tone: 'red', rows: ['Rent and furniture', 'Salaries and clerical staff', 'Referral payments', 'Cell phones and computers'] },
    ],
  },
  's65-ad-rules': {
    kind: 'compare',
    caption: 'Testimonials and past results in ads.',
    columns: [
      { title: 'State-registered adviser', tone: 'amber', rows: ['No testimonials', 'Past picks only with a full 12-month list'] },
      { title: 'Federal covered adviser', tone: 'blue', rows: ['Testimonials allowed with disclosures', 'Performance over 1, 5, and 10 years', 'No cherry-picking'] },
    ],
  },
  // Chapter 8
  's65-security-or-not': {
    kind: 'compare',
    caption: 'Is it a security?',
    columns: [
      { title: 'Security', tone: 'green', rows: ['Stocks and bonds', 'Mutual funds and ETFs', 'Variable annuities', 'Options and warrants', 'REITs and ADRs'] },
      { title: 'Not a security', tone: 'red', rows: ['Fixed annuities', 'Term, whole, universal life', 'Commodities and futures', 'Gold, coins, currency', 'Art and collectibles'] },
    ],
  },
  's65-exempt-sec': {
    kind: 'compare',
    caption: 'Securities that skip state registration, because of who issues them.',
    columns: [
      { title: 'Government', tone: 'navy', rows: ['U.S. Treasuries and agencies', 'Municipal bonds', 'Friendly foreign governments'] },
      { title: 'Regulated issuers', tone: 'blue', rows: ['Banks and credit unions', 'Insurers (not variable products)', 'Utilities and railroads'] },
      { title: 'Other', tone: 'green', rows: ['Nonprofits', 'Commercial paper: 9 months, $50,000', 'Exchange-listed stocks'] },
    ],
  },
  's65-exempt-tx': {
    kind: 'compare',
    caption: 'Exempt transactions: how a sale happens can skip registration.',
    columns: [
      { title: 'Who is buying', tone: 'blue', rows: ['Institutions only', 'Up to 10 local buyers, no commission', 'Existing holders, no commission'] },
      { title: 'How it happens', tone: 'green', rows: ['Unsolicited', 'Isolated non-issuer trade', 'Issuer to underwriter', 'By an executor or trustee'] },
    ],
  },
  's65-reg-methods': {
    kind: 'compare',
    caption: 'Three ways to register a security in a state.',
    columns: [
      { title: 'Qualification', tone: 'amber', rows: ['Most information', 'Usually one state', 'Effective when the Administrator says'] },
      { title: 'Coordination', tone: 'blue', rows: ['Most common', 'Same time as SEC', 'On file 10 days'] },
      { title: 'Notification', tone: 'green', rows: ['Seasoned issuers', '36 months in business', 'On file 5 business days'] },
    ],
  },
  's65-primary-secondary': {
    kind: 'compare',
    caption: 'Where the money goes.',
    columns: [
      { title: 'Primary market', tone: 'navy', rows: ['IPOs and follow-ons', 'Issuer gets the money', 'Issuer transaction'] },
      { title: 'Secondary market', tone: 'blue', rows: ['Investors trade with each other', 'Seller gets the money', 'Non-issuer transaction'] },
    ],
  },
  's65-prospectus-days': {
    kind: 'bars',
    caption: 'How long dealers must deliver a prospectus after a new offering starts.',
    unit: 'days',
    bars: [
      { label: 'OTC IPO', value: 90, display: '90 days', tone: 'red' },
      { label: 'OTC follow-on', value: 40, display: '40 days', tone: 'amber' },
      { label: 'Listed IPO', value: 25, display: '25 days', tone: 'blue' },
      { label: 'Listed follow-on', value: 1, display: 'None', tone: 'green' },
    ],
  },
  's65-bid-ask': {
    kind: 'steps',
    caption: 'Reading the inside market. Buyers pay the lowest ask; sellers get the highest bid.',
    steps: [
      { label: 'Best bid $15.50', detail: 'What a seller receives', tone: 'green' },
      { label: 'Best ask $15.55', detail: 'What a buyer pays', tone: 'blue' },
      { label: 'Spread $0.05', detail: 'The gap between them', tone: 'amber' },
    ],
  },
  's65-order-types': {
    kind: 'compare',
    caption: 'Where orders sit. BLUSS goes under the price; SLOBS goes over.',
    columns: [
      { title: 'Above the market', tone: 'blue', rows: ['Sell limit', 'Buy stop'] },
      { title: 'Below the market', tone: 'amber', rows: ['Buy limit', 'Sell stop'] },
    ],
  },
  // Chapter 9
  's65-custody-rules': {
    kind: 'steps',
    caption: 'What an adviser with custody must do.',
    steps: [
      { label: 'Qualified custodian', detail: 'Client assets kept separate', tone: 'navy' },
      { label: 'Statements', detail: 'At least every three months', tone: 'blue' },
      { label: 'Surprise audit', detail: 'At least once a year', tone: 'amber' },
      { label: 'Written notice', detail: 'Where assets are held, and any change', tone: 'green' },
    ],
  },
  's65-discretion-timeline': {
    kind: 'compare',
    caption: 'When written discretionary authority is due.',
    columns: [
      { title: 'Adviser or IAR', tone: 'blue', rows: ['May start on verbal OK', 'Written within 10 business days of first trade'] },
      { title: 'Broker-dealer or agent', tone: 'navy', rows: ['Written before the first trade'] },
      { title: 'Time and price only', tone: 'green', rows: ['Verbal is fine', 'Ends that trading day'] },
    ],
  },
  's65-regbi': {
    kind: 'steps',
    caption: 'The four duties of Regulation Best Interest.',
    steps: [
      { label: 'Disclosure', detail: 'Material facts in writing', tone: 'blue' },
      { label: 'Care', detail: 'Reasonable basis, fit, not too much trading', tone: 'green' },
      { label: 'Conflicts', detail: 'Find, reduce, and disclose', tone: 'amber' },
      { label: 'Compliance', detail: 'Written policies', tone: 'navy' },
    ],
  },
  's65-laundering': {
    kind: 'steps',
    caption: 'The three stages of money laundering.',
    steps: [
      { label: 'Placement', detail: 'Dirty cash enters the system', tone: 'red' },
      { label: 'Layering', detail: 'Moved around to hide the source', tone: 'amber' },
      { label: 'Integration', detail: 'Comes back looking clean', tone: 'gray' },
    ],
  },
  's65-elder-timeline': {
    kind: 'steps',
    caption: 'Suspected exploitation of a vulnerable adult. All days are business days.',
    steps: [
      { label: 'Day 0', detail: 'Reasonable belief of exploitation', tone: 'red' },
      { label: 'By day 2', detail: 'Tell APS, the Administrator, and others on the account', tone: 'amber' },
      { label: 'By day 7', detail: 'Report the internal review', tone: 'blue' },
      { label: 'Up to day 15', detail: 'Hold the withdrawal; end early if cleared', tone: 'navy' },
      { label: 'Up to day 25', detail: 'Extended if authorities ask', tone: 'gray' },
    ],
  },
  's65-admin-can': {
    kind: 'compare',
    caption: 'The Administrator\'s powers.',
    columns: [
      { title: 'Can', tone: 'green', rows: ['Investigate and subpoena', 'Cease-and-desist orders', 'Deny, suspend, revoke', 'Ask a court for an injunction'] },
      { title: 'Cannot', tone: 'red', rows: ['Arrest or jail anyone', 'Issue injunctions itself', 'Hold trials', 'Write state laws'] },
    ],
  },
  's65-penalties': {
    kind: 'compare',
    caption: 'Criminal and civil consequences under state law.',
    columns: [
      { title: 'Criminal', tone: 'red', rows: ['Up to $5,000 and 3 years', 'Must be intentional', 'Filed within 5 years'] },
      { title: 'Civil suit', tone: 'amber', rows: ['Money paid, losses, interest, legal costs', '2 years from discovery or 3 from violation'] },
    ],
  },
}
