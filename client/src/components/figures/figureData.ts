import { series63Figures } from './series63Figures.ts'
import { series65Figures } from './series65Figures.ts'

/**
 * Study figures drawn for this site. Each one is an original design in the site's colors.
 * The source pages were only used to understand the idea being shown.
 * Figures sit outside the section body, so highlights, search, and narration offsets do not change.
 */

export type Tone = 'navy' | 'blue' | 'green' | 'amber' | 'red' | 'gray'

export type CompareFigure = {
  kind: 'compare'
  caption: string
  columns: { title: string; tone: Tone; rows: string[] }[]
}

export type StepsFigure = {
  kind: 'steps'
  caption: string
  steps: { label: string; detail: string; tone?: Tone }[]
}

export type BarsFigure = {
  kind: 'bars'
  caption: string
  unit?: string
  bars: { label: string; value: number; display: string; tone?: Tone }[]
}

export type ChartFigure = {
  kind: 'chart'
  caption: string
  chart: 'alpha-beta' | 'beta-compare' | 'efficient-frontier' | 'bond-seesaw' | 'air-chart' | 's63-who-registers' | 's65-normal-yield' | 's65-inverted-yield'
  /** Read aloud by screen readers in place of the drawing. */
  description: string
}

export type Figure = CompareFigure | StepsFigure | BarsFigure | ChartFigure

export const figures: Record<string, Figure> = {
  // Chapter 1
  'bond-seesaw': {
    kind: 'chart',
    chart: 'bond-seesaw',
    caption: 'Rates and bond prices sit on opposite ends of a seesaw. When one goes up, the other comes down.',
    description: 'A seesaw. The interest rate side is up and the bond price side is down.',
  },
  'credit-ladder': {
    kind: 'compare',
    caption: 'The rating ladder. BBB (Baa) is the lowest rung of investment grade.',
    columns: [
      { title: 'Investment grade', tone: 'green', rows: ['AAA / Aaa', 'AA / Aa', 'A / A', 'BBB / Baa'] },
      { title: 'Speculative grade', tone: 'amber', rows: ['BB / Ba', 'B / B', 'CCC / Caa', 'CC / Ca', 'C / C'] },
    ],
  },
  'option-grid': {
    kind: 'compare',
    caption: 'Holders buy a right. Writers take on an obligation.',
    columns: [
      { title: 'Long call', tone: 'green', rows: ['Right to buy', 'Bullish'] },
      { title: 'Short call', tone: 'red', rows: ['Obligation to sell', 'Bearish'] },
      { title: 'Long put', tone: 'red', rows: ['Right to sell', 'Bearish'] },
      { title: 'Short put', tone: 'green', rows: ['Obligation to buy', 'Bullish'] },
    ],
  },
  // Chapter 2
  'fund-team': {
    kind: 'steps',
    caption: 'The team behind a mutual fund. Shareholders elect the board, and the board hires the rest.',
    steps: [
      { label: 'Shareholders', detail: 'Elect the board', tone: 'navy' },
      { label: 'Board of directors', detail: 'Protects shareholders, sets the objective', tone: 'blue' },
      { label: 'Investment adviser', detail: 'Manages the money for a fee', tone: 'green' },
      { label: 'Custodian bank', detail: 'Keeps the assets safe', tone: 'gray' },
      { label: 'Transfer agent', detail: 'Records who owns shares', tone: 'gray' },
    ],
  },
  'rule-75-5-10': {
    kind: 'bars',
    caption: 'The 75-5-10 test a fund must pass to call itself diversified.',
    unit: '%',
    bars: [
      { label: 'At least this much in securities', value: 75, display: '75%', tone: 'blue' },
      { label: 'Most in any one issuer', value: 5, display: '5%', tone: 'amber' },
      { label: 'Most of one issuer’s voting stock', value: 10, display: '10%', tone: 'amber' },
    ],
  },
  'cap-sizes': {
    kind: 'bars',
    caption: 'Company size by market value. Longer bars are bigger companies.',
    bars: [
      { label: 'Large-cap', value: 5, display: '$10 billion +', tone: 'navy' },
      { label: 'Mid-cap', value: 4, display: '$2–10 billion', tone: 'blue' },
      { label: 'Small-cap', value: 3, display: '$300 million–$2 billion', tone: 'green' },
      { label: 'Micro-cap', value: 2, display: '$50–300 million', tone: 'amber' },
      { label: 'Nano-cap', value: 1, display: 'under $50 million', tone: 'red' },
    ],
  },
  // Chapter 3
  'pop-stack': {
    kind: 'steps',
    caption: 'Buyers pay the POP. Sellers get the NAV.',
    steps: [
      { label: 'NAV', detail: 'Fund value per share, figured at the close', tone: 'blue' },
      { label: '+ Sales charge', detail: 'The load paid to buy', tone: 'amber' },
      { label: '= POP', detail: 'Public offering price the buyer pays', tone: 'navy' },
    ],
  },
  'breakpoint-steps': {
    kind: 'bars',
    caption: 'A sample breakpoint schedule. Bigger buys step down to a lower sales charge.',
    unit: '%',
    bars: [
      { label: '$0 to $10,000', value: 8.5, display: '8.5%', tone: 'red' },
      { label: '$10,001 to $25,000', value: 7.75, display: '7.75%', tone: 'amber' },
      { label: '$25,001 or more', value: 6.5, display: '6.5%', tone: 'green' },
    ],
  },
  'dca-chart': {
    kind: 'steps',
    caption: 'Rights of accumulation count what the account is worth now toward the next breakpoint.',
    steps: [
      { label: 'Invest $5,000', detail: 'Pays 8.5%', tone: 'gray' },
      { label: 'Grows to $6,000', detail: 'Current value counts', tone: 'blue' },
      { label: 'Add $4,001', detail: 'Total reaches $10,001', tone: 'navy' },
      { label: '7.75% rate', detail: 'On the new purchase', tone: 'green' },
    ],
  },
  'share-classes': {
    kind: 'compare',
    caption: 'How each share class charges you.',
    columns: [
      { title: 'Class A', tone: 'navy', rows: ['Front-end load', 'Breakpoints', 'Low 12b-1 fee', 'Long-term, larger accounts'] },
      { title: 'Class B', tone: 'blue', rows: ['No up-front load', 'Back-end CDSC that shrinks', 'Higher 12b-1 fee'] },
      { title: 'Class C', tone: 'amber', rows: ['Level load', 'Highest 12b-1 fee', 'Shorter holding periods'] },
      { title: 'No-load', tone: 'green', rows: ['Bought and sold at NAV', '12b-1 fee 0.25% or less'] },
    ],
  },
  // Chapter 4
  'annuity-compare': {
    kind: 'compare',
    caption: 'Fixed and variable annuities side by side.',
    columns: [
      { title: 'Fixed annuity', tone: 'blue', rows: ['General account', 'Guaranteed rate', 'Insurer takes the risk', 'Not a security'] },
      { title: 'Variable annuity', tone: 'green', rows: ['Separate account', 'Owner picks subaccounts', 'Owner takes the risk', 'A security'] },
    ],
  },
  'annuity-phases': {
    kind: 'steps',
    caption: 'An annuity is either filling up or paying out, not both.',
    steps: [
      { label: 'Accumulation', detail: 'Premiums buy accumulation units', tone: 'blue' },
      { label: 'Annuitize', detail: 'Units trade for a lifetime promise', tone: 'navy' },
      { label: 'Distribution', detail: 'A fixed number of annuity units pays out', tone: 'green' },
    ],
  },
  'payout-options': {
    kind: 'bars',
    caption: 'Payout options from largest check to smallest. More protection for heirs means a smaller check.',
    bars: [
      { label: 'Life only', value: 4, display: 'Largest check', tone: 'green' },
      { label: 'Life with period certain', value: 3, display: 'Smaller', tone: 'blue' },
      { label: 'Joint and last survivor', value: 2, display: 'Smaller still', tone: 'amber' },
      { label: 'Unit refund', value: 1, display: 'Smallest check', tone: 'red' },
    ],
  },
  'air-chart': {
    kind: 'chart',
    chart: 'air-chart',
    caption: 'With a 3% AIR, payments rise only when returns beat 3% and fall when returns come in under it.',
    description:
      'Monthly payments: January $3,000, February $3,030, March $3,030, April $3,093, May $3,093, June $3,055. Returns were 3, 4, 3, 5, 3, and 1 percent.',
  },
  'life-compare': {
    kind: 'compare',
    caption: 'Kinds of life insurance.',
    columns: [
      { title: 'Term', tone: 'gray', rows: ['Temporary', 'No cash value'] },
      { title: 'Whole life', tone: 'blue', rows: ['Fixed premium', 'Guaranteed cash value', 'Not a security'] },
      { title: 'Variable life', tone: 'green', rows: ['Separate account', 'Cash value and benefit vary', 'A security'] },
      { title: 'Variable universal', tone: 'amber', rows: ['Flexible premium', 'Separate account', 'A security'] },
    ],
  },
  // Chapter 5
  'transfer-rollover': {
    kind: 'compare',
    caption: 'Two ways to move retirement money.',
    columns: [
      { title: 'Transfer', tone: 'green', rows: ['Moves straight between firms', 'Nothing withheld', 'No 60-day clock'] },
      { title: 'Rollover', tone: 'amber', rows: ['Check goes to the owner', '20% withheld', 'Redeposit within 60 days'] },
    ],
  },
  'ira-compare': {
    kind: 'compare',
    caption: 'Traditional and Roth IRAs.',
    columns: [
      { title: 'Traditional IRA', tone: 'blue', rows: ['May be deductible', 'Withdrawals taxed', 'RMDs at 73'] },
      { title: 'Roth IRA', tone: 'green', rows: ['Never deductible', 'Qualified withdrawals tax-free', 'No RMDs'] },
    ],
  },
  'limits-2026': {
    kind: 'bars',
    caption: '2026 yearly contribution limits, before catch-ups.',
    bars: [
      { label: 'SEP IRA', value: 72000, display: '$72,000', tone: 'navy' },
      { label: '401(k), 403(b), 457', value: 24500, display: '$24,500', tone: 'blue' },
      { label: 'SIMPLE IRA', value: 17000, display: '$17,000', tone: 'green' },
      { label: 'IRA', value: 7500, display: '$7,500', tone: 'amber' },
    ],
  },
  '529-flow': {
    kind: 'steps',
    caption: 'How a 529 plan works.',
    steps: [
      { label: 'Contribute', detail: 'After-tax money, no federal deduction', tone: 'gray' },
      { label: 'Grow', detail: 'Earnings are tax-deferred', tone: 'blue' },
      { label: 'Withdraw', detail: 'Tax-free for qualified education costs', tone: 'green' },
    ],
  },
  // Chapter 6
  'joint-accounts': {
    kind: 'compare',
    caption: 'What happens to a joint account when one owner dies.',
    columns: [
      { title: 'JTWROS', tone: 'blue', rows: ['Survivor owns it all', 'Skips probate'] },
      { title: 'Tenants in common', tone: 'amber', rows: ['Each owns a set share', 'Share goes to the estate'] },
      { title: 'Tenants by entirety', tone: 'green', rows: ['Married couples only', 'Shielded from one spouse’s lawsuit'] },
    ],
  },
  'hold-timeline': {
    kind: 'steps',
    caption: 'A hold on a suspicious payout from a senior’s account can last up to 55 days.',
    steps: [
      { label: '15 business days', detail: 'First hold', tone: 'blue' },
      { label: '+10 business days', detail: 'If the review supports it', tone: 'amber' },
      { label: '+30 days', detail: 'If a state or federal investigation is open', tone: 'red' },
    ],
  },
  'three-as': {
    kind: 'steps',
    caption: 'Without discretion, the customer must pick all three A’s.',
    steps: [
      { label: 'Asset', detail: 'Which security', tone: 'navy' },
      { label: 'Action', detail: 'Buy or sell', tone: 'blue' },
      { label: 'Amount', detail: 'How much', tone: 'green' },
    ],
  },
  'investor-fit': {
    kind: 'compare',
    caption: 'The three FINRA suitability obligations.',
    columns: [
      { title: 'Reasonable basis', tone: 'blue', rows: ['Know the product', 'Fits at least some investors'] },
      { title: 'Customer-specific', tone: 'green', rows: ['Fits this customer’s profile'] },
      { title: 'Quantitative', tone: 'amber', rows: ['Trades are not excessive'] },
    ],
  },
  'acats-steps': {
    kind: 'steps',
    caption: 'Moving an account to a new firm through ACATS.',
    steps: [
      { label: 'Sign the TIF', detail: 'From the receiving firm', tone: 'gray' },
      { label: '1 business day', detail: 'Old firm validates or objects', tone: 'blue' },
      { label: '3 business days', detail: 'Old firm finishes the transfer', tone: 'green' },
    ],
  },
  'settle-timeline': {
    kind: 'steps',
    caption: 'Settlement and the Reg T payment deadline.',
    steps: [
      { label: 'Trade date (T)', detail: 'Order is filled', tone: 'gray' },
      { label: 'T+1', detail: 'Regular-way settlement', tone: 'blue' },
      { label: 'S+2 (about T+3)', detail: 'Reg T payment deadline', tone: 'amber' },
    ],
  },
  // Chapter 7
  'bond-tax-map': {
    kind: 'compare',
    caption: 'Who taxes the interest on each kind of bond.',
    columns: [
      { title: 'Corporate', tone: 'red', rows: ['Federal: taxed', 'State and local: taxed'] },
      { title: 'Treasury', tone: 'amber', rows: ['Federal: taxed', 'State and local: exempt'] },
      { title: 'Municipal', tone: 'green', rows: ['Federal: exempt', 'State: exempt for residents'] },
      { title: 'U.S. territory', tone: 'blue', rows: ['Exempt at all levels'] },
    ],
  },
  conduit: {
    kind: 'steps',
    caption: 'A regulated investment company passes income through, so shareholders pay the tax.',
    steps: [
      { label: 'Fund earns income', detail: 'Interest, dividends, gains', tone: 'gray' },
      { label: 'Pays out 90% or more', detail: 'Subchapter M', tone: 'blue' },
      { label: 'Shareholders pay tax', detail: 'On their own returns', tone: 'green' },
    ],
  },
  'lifo-fifo': {
    kind: 'compare',
    caption: 'Which dollars come out first.',
    columns: [
      { title: 'Annuity: LIFO', tone: 'amber', rows: ['Earnings come out first', 'Taxed first'] },
      { title: 'Life insurance: FIFO', tone: 'green', rows: ['Premiums come out first', 'Tax-free first'] },
    ],
  },
  'basis-compare': {
    kind: 'compare',
    caption: 'Cost basis for securities you inherit or receive as a gift.',
    columns: [
      { title: 'Inherited', tone: 'green', rows: ['Basis steps up to value at death', 'Always long-term'] },
      { title: 'Gifted', tone: 'blue', rows: ['Lower of giver’s basis or value at gift', 'May keep giver’s holding period'] },
    ],
  },
  // Chapter 8
  'risk-split': {
    kind: 'compare',
    caption: 'Diversification can remove one kind of risk but not the other.',
    columns: [
      { title: 'Systematic', tone: 'red', rows: ['Market', 'Interest rate', 'Inflation', 'Cannot diversify away'] },
      { title: 'Nonsystematic', tone: 'green', rows: ['Business', 'Liquidity', 'Call, political, currency', 'Diversify it away'] },
    ],
  },
  'beta-compare': {
    kind: 'chart',
    chart: 'beta-compare',
    caption: 'If the market moves 10%, a stock’s beta tells you how far it tends to move.',
    description: 'Bars for a 10% market move: beta 0.8 moves 8%, beta 1.0 moves 10%, beta 1.2 moves 12%.',
  },
  'efficient-frontier': {
    kind: 'chart',
    chart: 'efficient-frontier',
    caption: 'Portfolios on the curve get the most return for their risk. Dots below it fall short.',
    description: 'A curve rising from low risk and low return to high risk and high return, with dots scattered below it.',
  },
  'alpha-beta': {
    kind: 'chart',
    chart: 'alpha-beta',
    caption: 'Beta sets how much return to expect for the market risk taken. Alpha is how far the fund landed above or below that line.',
    description:
      'A rising line shows the expected return for each beta, starting at the T-bill rate. The market sits on the line at beta 1. Fund A sits above the line with a positive alpha. Fund B sits below it with a negative alpha.',
  },
  'allocation-pies': {
    kind: 'bars',
    caption: 'A sample strategic target mix. Rebalancing brings drifted weights back to these.',
    unit: '%',
    bars: [
      { label: 'Large-company stocks', value: 50, display: '50%', tone: 'navy' },
      { label: 'Long-term corporate bonds', value: 30, display: '30%', tone: 'blue' },
      { label: 'Treasury bills', value: 20, display: '20%', tone: 'green' },
    ],
  },
  'risk-ladder': {
    kind: 'compare',
    caption: 'About how much goes into stocks at each risk level.',
    columns: [
      { title: 'Conservative', tone: 'green', rows: ['20%–40% stocks', '60%–80% fixed income'] },
      { title: 'Moderate', tone: 'blue', rows: ['50%–60% stocks', '40%–50% fixed income'] },
      { title: 'Aggressive', tone: 'amber', rows: ['Up to 90% stocks', '10%–20% fixed income or cash'] },
    ],
  },
  // Chapter 9
  'reg-timeline': {
    kind: 'steps',
    caption: 'The three periods of a new registration.',
    steps: [
      { label: 'Pre-filing', detail: 'Prepare the filing. No offers or sales.', tone: 'gray' },
      { label: 'Cooling-off', detail: '20 days of SEC review. Interest only, no sales.', tone: 'amber' },
      { label: 'Post-effective', detail: 'Price set. Sell with a final prospectus.', tone: 'green' },
    ],
  },
  'delivery-grid': {
    kind: 'compare',
    caption: 'How long dealers must keep delivering the final prospectus after the offering starts.',
    columns: [
      { title: 'IPO', tone: 'blue', rows: ['Listed: 25 days', 'Over the counter: 90 days'] },
      { title: 'Follow-on', tone: 'green', rows: ['Listed: none', 'Over the counter: 40 days'] },
    ],
  },
  'spread-split': {
    kind: 'steps',
    caption: 'A $20.00 POP with $19.50 to the issuer leaves a $0.50 spread, split three ways.',
    steps: [
      { label: 'Management fee', detail: 'To the managing underwriter', tone: 'navy' },
      { label: 'Underwriting fee', detail: 'To the syndicate for taking risk', tone: 'blue' },
      { label: 'Concession', detail: 'To the firm that sells. Usually the largest.', tone: 'green' },
    ],
  },
  'tipper-tippee': {
    kind: 'steps',
    caption: 'Inside information becomes insider trading once someone trades on it.',
    steps: [
      { label: 'Tipper', detail: 'Shares material nonpublic information', tone: 'amber' },
      { label: 'Tippee', detail: 'Trades on it', tone: 'red' },
      { label: 'Both liable', detail: 'No trade, no violation', tone: 'navy' },
    ],
  },
  // Chapter 10
  'arbitrator-count': {
    kind: 'compare',
    caption: 'How many arbitrators hear a claim.',
    columns: [
      { title: '$50,000 or less', tone: 'green', rows: ['One arbitrator'] },
      { title: 'Up to $100,000', tone: 'blue', rows: ['One, or three if both agree'] },
      { title: 'Over $100,000', tone: 'amber', rows: ['Three, or one if both agree'] },
    ],
  },
  'appeal-ladder': {
    kind: 'steps',
    caption: 'The path of a FINRA disciplinary case.',
    steps: [
      { label: 'Enforcement', detail: 'Complaint filed', tone: 'gray' },
      { label: 'Hearing panel', detail: 'Decision made', tone: 'blue' },
      { label: 'NAC', detail: 'First appeal', tone: 'navy' },
      { label: 'SEC', detail: 'Second appeal', tone: 'amber' },
      { label: 'Federal court', detail: 'Final appeal', tone: 'red' },
    ],
  },
  'comm-types': {
    kind: 'compare',
    caption: 'The three kinds of communications and who must approve them.',
    columns: [
      { title: 'Correspondence', tone: 'green', rows: ['25 or fewer retail in 30 days', 'Reviewed after use', 'Never filed'] },
      { title: 'Retail', tone: 'amber', rows: ['More than 25 retail in 30 days', 'Approved before use', 'Often filed'] },
      { title: 'Institutional', tone: 'blue', rows: ['Institutions only', 'Reviewed after use', 'Never filed'] },
    ],
  },
  'records-timeline': {
    kind: 'bars',
    caption: 'How many years firms keep each kind of record.',
    bars: [
      { label: 'Communications, orders', value: 3, display: '3 years', tone: 'green' },
      { label: 'Written complaints', value: 4, display: '4 years', tone: 'blue' },
      { label: 'AML records', value: 5, display: '5 years', tone: 'amber' },
      { label: 'Statements, ledgers', value: 6, display: '6 years', tone: 'navy' },
    ],
  },
  ...series63Figures,
  ...series65Figures,
}

export function figureFor(id: string): Figure | null {
  return Object.prototype.hasOwnProperty.call(figures, id) ? figures[id] : null
}

export function figuresFor(ids: readonly string[] | undefined): { id: string; figure: Figure }[] {
  if (!ids) return []
  return ids.flatMap((id) => {
    const figure = figureFor(id)
    return figure ? [{ id, figure }] : []
  })
}

/** Expected return line for the alpha and beta chart: a 3% T-bill rate plus 6% for each unit of beta. */
export function expectedReturn(beta: number) {
  return 3 + 6 * beta
}
