import type { JSX } from 'react'
import { WhoRegistersChart } from './Series63Charts.tsx'
import { InvertedYieldCurveChart, NormalYieldCurveChart } from './Series65Charts.tsx'
import { expectedReturn, figuresFor, type BarsFigure, type ChartFigure, type CompareFigure, type Figure, type StepsFigure, type Tone } from './figureData.ts'

const NAVY = '#1b2a4a'
const INK = '#14375f'
const MUTED = '#5c7288'
const GRID = '#d7e4f1'

const toneColor: Record<Tone, string> = {
  navy: NAVY,
  blue: '#2a6cb5',
  green: '#2f8f5b',
  amber: '#c47f1a',
  red: '#c2463b',
  gray: '#6b7f94',
}

const toneSoft: Record<Tone, string> = {
  navy: '#e6eaf2',
  blue: '#e7f1fb',
  green: '#e6f4ec',
  amber: '#fbf1e1',
  red: '#fbe9e7',
  gray: '#eef2f6',
}

export function SectionFigures({ ids }: { ids: readonly string[] | undefined }) {
  const items = figuresFor(ids)
  if (items.length === 0) return null
  return (
    <div className="mt-6 space-y-5" data-testid="section-figures">
      {items.map(({ id, figure }) => (
        <FigureCard key={id} id={id} figure={figure} />
      ))}
    </div>
  )
}

function FigureCard({ id, figure }: { id: string; figure: Figure }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-[#d7e4f1] bg-white p-4 shadow-sm sm:p-5" data-figure={id}>
      {figure.kind === 'compare' ? <CompareView figure={figure} /> : null}
      {figure.kind === 'steps' ? <StepsView figure={figure} /> : null}
      {figure.kind === 'bars' ? <BarsView figure={figure} /> : null}
      {figure.kind === 'chart' ? <ChartView figure={figure} /> : null}
      <figcaption className="mt-3 text-sm leading-relaxed text-[#3d5166]">{figure.caption}</figcaption>
    </figure>
  )
}

function CompareView({ figure }: { figure: CompareFigure }) {
  const cols = figure.columns.length
  const grid = cols >= 4 ? 'grid-cols-2 lg:grid-cols-4' : cols === 3 ? 'grid-cols-1 sm:grid-cols-3' : 'grid-cols-1 sm:grid-cols-2'
  return (
    <div className={`grid gap-3 ${grid}`}>
      {figure.columns.map((column) => (
        <div key={column.title} className="rounded-xl p-3" style={{ background: toneSoft[column.tone] }}>
          <p className="text-sm font-semibold" style={{ color: toneColor[column.tone] }}>
            {column.title}
          </p>
          <ul className="mt-2 space-y-1 text-sm text-[#14375f]">
            {column.rows.map((row) => (
              <li key={row} className="flex gap-2">
                <span aria-hidden="true" className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: toneColor[column.tone] }} />
                <span>{row}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function StepsView({ figure }: { figure: StepsFigure }) {
  return (
    <ol className="flex flex-col gap-2 sm:flex-row sm:items-stretch">
      {figure.steps.map((step, index) => {
        const tone = step.tone ?? 'blue'
        return (
          <li key={step.label} className="flex flex-col items-stretch gap-2 sm:flex-1 sm:flex-row sm:items-center">
            <div className="flex-1 rounded-xl border-l-4 p-3" style={{ borderColor: toneColor[tone], background: toneSoft[tone] }}>
              <p className="text-sm font-semibold" style={{ color: toneColor[tone] }}>
                {step.label}
              </p>
              <p className="mt-1 text-sm text-[#14375f]">{step.detail}</p>
            </div>
            {index < figure.steps.length - 1 ? (
              <span aria-hidden="true" className="self-center text-lg font-semibold text-[#8aa1b8] sm:px-0.5">
                <span className="sm:hidden">↓</span>
                <span className="hidden sm:inline">→</span>
              </span>
            ) : null}
          </li>
        )
      })}
    </ol>
  )
}

function BarsView({ figure }: { figure: BarsFigure }) {
  const max = Math.max(...figure.bars.map((bar) => bar.value), 1)
  return (
    <div className="space-y-3">
      {figure.bars.map((bar) => {
        const tone = bar.tone ?? 'blue'
        const width = Math.max(6, Math.round((bar.value / max) * 100))
        return (
          <div key={bar.label}>
            <div className="flex items-baseline justify-between gap-3 text-sm">
              <span className="text-[#14375f]">{bar.label}</span>
              <span className="font-semibold" style={{ color: toneColor[tone] }}>
                {bar.display}
              </span>
            </div>
            <div className="mt-1 h-3 overflow-hidden rounded-full bg-[#eef3f8]">
              <div className="h-full rounded-full" style={{ width: `${width}%`, background: toneColor[tone] }} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

function ChartView({ figure }: { figure: ChartFigure }) {
  const Chart = charts[figure.chart]
  return (
    <div role="img" aria-label={figure.description}>
      <Chart />
    </div>
  )
}

const svgProps = {
  className: 'block h-auto w-full',
  preserveAspectRatio: 'xMidYMid meet',
  fontFamily: 'Inter, system-ui, sans-serif',
  'aria-hidden': true,
} as const

export function AlphaBetaChart() {
  const x = (beta: number) => 70 + beta * 250
  const y = (ret: number) => 340 - ret * 18
  const fundA = { beta: 1.3, actual: 14 }
  const fundB = { beta: 0.6, actual: 4.5 }
  const aExpected = expectedReturn(fundA.beta)
  const bExpected = expectedReturn(fundB.beta)
  return (
    <svg viewBox="0 0 640 400" {...svgProps}>
      <rect x="0" y="0" width="640" height="400" rx="18" fill="#f7fafd" />
      {[0, 3, 6, 9, 12, 15].map((ret) => (
        <g key={ret}>
          <line x1={x(0)} x2={x(2)} y1={y(ret)} y2={y(ret)} stroke={GRID} strokeWidth="1" />
          <text x={x(0) - 10} y={y(ret) + 4} textAnchor="end" fontSize="12" fill={MUTED}>
            {ret}%
          </text>
        </g>
      ))}
      {[0, 0.5, 1, 1.5, 2].map((beta) => (
        <text key={beta} x={x(beta)} y={y(0) + 20} textAnchor="middle" fontSize="12" fill={MUTED}>
          {beta.toFixed(1)}
        </text>
      ))}
      <line x1={x(0)} x2={x(2)} y1={y(0)} y2={y(0)} stroke={NAVY} strokeWidth="1.5" />
      <line x1={x(0)} x2={x(0)} y1={y(0)} y2={y(16)} stroke={NAVY} strokeWidth="1.5" />
      <text x={x(1)} y="388" textAnchor="middle" fontSize="13" fontWeight="600" fill={INK}>
        Beta (market risk taken)
      </text>
      <text x="18" y={y(8)} fontSize="13" fontWeight="600" fill={INK} transform={`rotate(-90 18 ${y(8)})`} textAnchor="middle">
        Return
      </text>
      {/* Expected return line */}
      <line x1={x(0)} y1={y(expectedReturn(0))} x2={x(2)} y2={y(expectedReturn(2))} stroke={NAVY} strokeWidth="3" strokeLinecap="round" />
      <text x={x(1.5)} y={y(expectedReturn(1.5)) + 30} fontSize="12" fontWeight="600" fill={NAVY} transform={`rotate(-23 ${x(1.5)} ${y(expectedReturn(1.5)) + 30})`}>
        Expected return line
      </text>
      <circle cx={x(0)} cy={y(3)} r="5" fill="#ffffff" stroke={NAVY} strokeWidth="2" />
      <text x={x(0) + 10} y={y(3) + 18} fontSize="12" fill={MUTED}>
        T-bills: no market risk
      </text>
      {/* Market */}
      <circle cx={x(1)} cy={y(expectedReturn(1))} r="8" fill="#2a6cb5" stroke="#ffffff" strokeWidth="2" />
      <text x={x(1) + 12} y={y(expectedReturn(1)) + 22} fontSize="12" fontWeight="600" fill="#2a6cb5">
        Market (S&amp;P 500), beta 1
      </text>
      {/* Fund A: positive alpha */}
      <line x1={x(fundA.beta)} x2={x(fundA.beta)} y1={y(aExpected)} y2={y(fundA.actual)} stroke="#2f8f5b" strokeWidth="3" strokeDasharray="5 4" />
      <circle cx={x(fundA.beta)} cy={y(aExpected)} r="4" fill={NAVY} />
      <circle cx={x(fundA.beta)} cy={y(fundA.actual)} r="9" fill="#2f8f5b" stroke="#ffffff" strokeWidth="2" />
      <text x={x(fundA.beta) + 14} y={y(fundA.actual) + 4} fontSize="13" fontWeight="700" fill="#2f8f5b">
        Fund A
      </text>
      <text x={x(fundA.beta) - 12} y={y((fundA.actual + aExpected) / 2) + 6} textAnchor="end" fontSize="12" fontWeight="600" fill="#2f8f5b">
        Alpha +{(fundA.actual - aExpected).toFixed(1)}%
      </text>
      {/* Fund B: negative alpha */}
      <line x1={x(fundB.beta)} x2={x(fundB.beta)} y1={y(bExpected)} y2={y(fundB.actual)} stroke="#c2463b" strokeWidth="3" strokeDasharray="5 4" />
      <circle cx={x(fundB.beta)} cy={y(bExpected)} r="4" fill={NAVY} />
      <circle cx={x(fundB.beta)} cy={y(fundB.actual)} r="9" fill="#c2463b" stroke="#ffffff" strokeWidth="2" />
      <text x={x(fundB.beta) + 14} y={y(fundB.actual) + 4} fontSize="13" fontWeight="700" fill="#c2463b">
        Fund B
      </text>
      <text x={x(fundB.beta) + 14} y={y(fundB.actual) + 20} fontSize="12" fontWeight="600" fill="#c2463b">
        Alpha −{Math.abs(fundB.actual - bExpected).toFixed(1)}%
      </text>
      {/* Callout */}
      <g transform="translate(92 26)">
        <rect width="250" height="74" rx="12" fill="#ffffff" stroke={GRID} />
        <text x="14" y="26" fontSize="14" fontWeight="700" fill={NAVY}>
          Alpha = actual − expected
        </text>
        <text x="14" y="46" fontSize="12" fill={INK}>
          Above the line: beat expectations.
        </text>
        <text x="14" y="63" fontSize="12" fill={INK}>
          Below the line: fell short.
        </text>
      </g>
    </svg>
  )
}

function BetaCompareChart() {
  const rows = [
    { label: 'Beta 0.8 (a utility)', move: 8, color: '#2f8f5b' },
    { label: 'Beta 1.0 (the market)', move: 10, color: '#2a6cb5' },
    { label: 'Beta 1.2 (a tech stock)', move: 12, color: '#c47f1a' },
  ]
  return (
    <svg viewBox="0 0 640 220" {...svgProps}>
      <rect width="640" height="220" rx="18" fill="#f7fafd" />
      <text x="24" y="34" fontSize="14" fontWeight="700" fill={NAVY}>
        The market moves 10%. How far does each stock move?
      </text>
      {rows.map((row, index) => {
        const top = 60 + index * 52
        const width = row.move * 30
        return (
          <g key={row.label}>
            <text x="24" y={top + 22} fontSize="13" fill={INK}>
              {row.label}
            </text>
            <rect x="210" y={top + 6} width={width} height="24" rx="8" fill={row.color} />
            <text x={210 + width + 10} y={top + 23} fontSize="13" fontWeight="700" fill={row.color}>
              {row.move}%
            </text>
          </g>
        )
      })}
      <line x1={210 + 300} x2={210 + 300} y1="52" y2="210" stroke={NAVY} strokeDasharray="4 4" />
    </svg>
  )
}

function EfficientFrontierChart() {
  const dots = [
    [190, 250],
    [260, 230],
    [330, 210],
    [300, 260],
    [420, 190],
    [470, 220],
    [380, 250],
    [520, 170],
  ]
  return (
    <svg viewBox="0 0 640 340" {...svgProps}>
      <rect width="640" height="340" rx="18" fill="#f7fafd" />
      <line x1="70" y1="290" x2="610" y2="290" stroke={NAVY} strokeWidth="1.5" />
      <line x1="70" y1="290" x2="70" y2="30" stroke={NAVY} strokeWidth="1.5" />
      <text x="340" y="326" textAnchor="middle" fontSize="13" fontWeight="600" fill={INK}>
        Risk (low to high)
      </text>
      <text x="26" y="160" textAnchor="middle" fontSize="13" fontWeight="600" fill={INK} transform="rotate(-90 26 160)">
        Expected return
      </text>
      <path d="M 110 250 C 150 120, 260 80, 590 55" fill="none" stroke={NAVY} strokeWidth="4" strokeLinecap="round" />
      <text x="400" y="56" fontSize="13" fontWeight="700" fill={NAVY}>
        Efficient frontier
      </text>
      {dots.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="7" fill="#c47f1a" opacity="0.85" />
      ))}
      <text x="360" y="280" fontSize="12" fill="#c47f1a" fontWeight="600">
        Below the curve: too little return for the risk
      </text>
    </svg>
  )
}

function BondSeesawChart() {
  return (
    <svg viewBox="0 0 640 240" {...svgProps}>
      <rect width="640" height="240" rx="18" fill="#f7fafd" />
      <polygon points="320,200 290,226 350,226" fill={NAVY} />
      <g transform="rotate(-14 320 200)">
        <rect x="90" y="192" width="460" height="12" rx="6" fill="#2a6cb5" />
        <rect x="100" y="132" width="130" height="58" rx="12" fill="#c2463b" />
        <text x="165" y="158" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">
          Interest rates
        </text>
        <text x="165" y="178" textAnchor="middle" fontSize="13" fill="#ffffff">
          go UP ↑
        </text>
        <rect x="410" y="132" width="130" height="58" rx="12" fill="#2f8f5b" />
        <text x="475" y="158" textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">
          Bond prices
        </text>
        <text x="475" y="178" textAnchor="middle" fontSize="13" fill="#ffffff">
          go DOWN ↓
        </text>
      </g>
      <text x="320" y="36" textAnchor="middle" fontSize="14" fontWeight="700" fill={NAVY}>
        Rates and prices always move in opposite directions
      </text>
    </svg>
  )
}

function AirChart() {
  const months = [
    { m: 'Jan', ret: 3, pay: 3000 },
    { m: 'Feb', ret: 4, pay: 3030 },
    { m: 'Mar', ret: 3, pay: 3030 },
    { m: 'Apr', ret: 5, pay: 3093 },
    { m: 'May', ret: 3, pay: 3093 },
    { m: 'Jun', ret: 1, pay: 3055 },
  ]
  const x = (i: number) => 90 + i * 95
  const y = (pay: number) => 250 - (pay - 2980) * 1.6
  const path = months.map((row, i) => `${i === 0 ? 'M' : 'L'} ${x(i)} ${y(row.pay)}`).join(' ')
  return (
    <svg viewBox="0 0 640 320" {...svgProps}>
      <rect width="640" height="320" rx="18" fill="#f7fafd" />
      <text x="24" y="34" fontSize="14" fontWeight="700" fill={NAVY}>
        Monthly payment with a 3% AIR
      </text>
      <path d={path} fill="none" stroke={NAVY} strokeWidth="3" />
      {months.map((row, i) => {
        const color = row.ret > 3 ? '#2f8f5b' : row.ret < 3 ? '#c2463b' : '#2a6cb5'
        return (
          <g key={row.m}>
            <circle cx={x(i)} cy={y(row.pay)} r="7" fill={color} stroke="#ffffff" strokeWidth="2" />
            <text x={x(i)} y={y(row.pay) - 14} textAnchor="middle" fontSize="12" fontWeight="700" fill={INK}>
              ${row.pay.toLocaleString('en-US')}
            </text>
            <text x={x(i)} y="282" textAnchor="middle" fontSize="12" fill={MUTED}>
              {row.m}
            </text>
            <text x={x(i)} y="302" textAnchor="middle" fontSize="12" fontWeight="600" fill={color}>
              {row.ret}% return
            </text>
          </g>
        )
      })}
    </svg>
  )
}

const charts: Record<ChartFigure['chart'], () => JSX.Element> = {
  'alpha-beta': AlphaBetaChart,
  'beta-compare': BetaCompareChart,
  'efficient-frontier': EfficientFrontierChart,
  'bond-seesaw': BondSeesawChart,
  'air-chart': AirChart,
  's63-who-registers': WhoRegistersChart,
  's65-normal-yield': NormalYieldCurveChart,
  's65-inverted-yield': InvertedYieldCurveChart,
}
