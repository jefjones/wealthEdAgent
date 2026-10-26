const NAVY = '#1b2a4a'
const INK = '#24364b'
const MUTED = '#5c7288'
const GRID = '#dce6f0'

const svgProps = {
  className: 'block h-auto w-full',
  preserveAspectRatio: 'xMidYMid meet',
  fontFamily: 'Inter, system-ui, sans-serif',
  'aria-hidden': true,
} as const

const terms = [
  { label: '3 mo', years: 0.25 },
  { label: '2 yr', years: 2 },
  { label: '5 yr', years: 5 },
  { label: '10 yr', years: 10 },
  { label: '30 yr', years: 30 },
]

/** Sample yields in percent for each term. Normal rises with time; inverted falls. */
export const yieldCurves = {
  normal: [2.4, 3.1, 3.7, 4.2, 4.6],
  inverted: [5.3, 4.8, 4.3, 4.0, 3.9],
} as const

export type CurveShape = keyof typeof yieldCurves

function YieldCurve({ shape }: { shape: CurveShape }) {
  const values = yieldCurves[shape]
  const color = shape === 'normal' ? '#2f8f5b' : '#c2463b'
  const x = (i: number) => 90 + i * 120
  const y = (v: number) => 300 - (v - 1.5) * 48
  const points = values.map((v, i) => [x(i), y(v)] as const)
  const path = points
    .map(([px, py], i) => {
      if (i === 0) return `M ${px} ${py}`
      const [qx, qy] = points[i - 1]
      const mid = (qx + px) / 2
      return `C ${mid} ${qy}, ${mid} ${py}, ${px} ${py}`
    })
    .join(' ')
  const title = shape === 'normal' ? 'Normal yield curve' : 'Inverted yield curve'
  const note =
    shape === 'normal'
      ? 'Longer loans pay more. Investors expect a growing economy.'
      : 'Short loans pay more than long ones. Often a warning of a slowdown.'
  return (
    <svg viewBox="0 0 640 380" {...svgProps}>
      <rect width="640" height="380" rx="18" fill="#f7fafd" />
      <text x="24" y="36" fontSize="16" fontWeight="700" fill={NAVY}>
        {title}
      </text>
      <text x="24" y="58" fontSize="12" fill={MUTED}>
        {note}
      </text>
      {[2, 3, 4, 5, 6].map((v) => (
        <g key={v}>
          <line x1="70" x2="610" y1={y(v)} y2={y(v)} stroke={GRID} />
          <text x="60" y={y(v) + 4} textAnchor="end" fontSize="12" fill={MUTED}>
            {v}%
          </text>
        </g>
      ))}
      <line x1="70" x2="610" y1="300" y2="300" stroke={NAVY} strokeWidth="1.5" />
      <path d={path} fill="none" stroke={color} strokeWidth="4" strokeLinecap="round" />
      {points.map(([px, py], i) => (
        <g key={terms[i].label}>
          <circle cx={px} cy={py} r="7" fill={color} stroke="#ffffff" strokeWidth="2" />
          <text x={px} y={py - 14} textAnchor="middle" fontSize="12" fontWeight="700" fill={INK}>
            {values[i].toFixed(1)}%
          </text>
          <text x={px} y="322" textAnchor="middle" fontSize="12" fill={MUTED}>
            {terms[i].label}
          </text>
        </g>
      ))}
      <text x="340" y="356" textAnchor="middle" fontSize="13" fontWeight="600" fill={INK}>
        Time until the bond matures
      </text>
      <text x="20" y="200" textAnchor="middle" fontSize="13" fontWeight="600" fill={INK} transform="rotate(-90 20 200)">
        Yield
      </text>
    </svg>
  )
}

export function NormalYieldCurveChart() {
  return <YieldCurve shape="normal" />
}

export function InvertedYieldCurveChart() {
  return <YieldCurve shape="inverted" />
}
