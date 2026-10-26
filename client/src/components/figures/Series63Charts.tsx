const NAVY = '#1b2a4a'
const MUTED = '#5c7288'

const svgProps = {
  className: 'block h-auto w-full',
  preserveAspectRatio: 'xMidYMid meet',
  fontFamily: 'Inter, system-ui, sans-serif',
  'aria-hidden': true,
} as const

type Mark = 'yes' | 'no' | 'either'

const regulators = ['SEC', 'States', 'FINRA'] as const

const rows: { who: string; color: string; marks: Mark[]; note: string }[] = [
  { who: 'Investment adviser', color: '#2a6cb5', marks: ['either', 'either', 'no'], note: 'SEC or the states, by assets' },
  { who: 'Broker-dealer', color: NAVY, marks: ['yes', 'yes', 'yes'], note: 'Almost always all three' },
  { who: 'Agent', color: '#2f8f5b', marks: ['no', 'yes', 'yes'], note: 'States and FINRA only' },
]

const markStyle: Record<Mark, { fill: string; text: string; label: string }> = {
  yes: { fill: '#2f8f5b', text: '#ffffff', label: 'Yes' },
  no: { fill: '#fbe9e7', text: '#c2463b', label: 'No' },
  either: { fill: '#fbf1e1', text: '#c47f1a', label: 'One or other' },
}

/** Who registers with whom: advisers, broker-dealers, and agents against the SEC, the states, and FINRA. */
export function WhoRegistersChart() {
  const colX = (i: number) => 300 + i * 110
  const rowY = (i: number) => 112 + i * 84
  return (
    <svg viewBox="0 0 640 380" {...svgProps}>
      <rect width="640" height="380" rx="18" fill="#f7fafd" />
      <text x="320" y="38" textAnchor="middle" fontSize="16" fontWeight="700" fill={NAVY}>
        Who registers where
      </text>
      {regulators.map((name, i) => (
        <text key={name} x={colX(i)} y="76" textAnchor="middle" fontSize="14" fontWeight="700" fill={NAVY}>
          {name}
        </text>
      ))}
      {rows.map((row, r) => (
        <g key={row.who}>
          <rect x="24" y={rowY(r) - 30} width="200" height="60" rx="12" fill={row.color} />
          <text x="124" y={rowY(r) - 4} textAnchor="middle" fontSize="14" fontWeight="700" fill="#ffffff">
            {row.who}
          </text>
          <text x="124" y={rowY(r) + 16} textAnchor="middle" fontSize="11" fill="#ffffff">
            {row.note}
          </text>
          {row.marks.map((mark, c) => (
            <g key={regulators[c]}>
              <rect x={colX(c) - 48} y={rowY(r) - 22} width="96" height="44" rx="22" fill={markStyle[mark].fill} />
              <text x={colX(c)} y={rowY(r) + 5} textAnchor="middle" fontSize="13" fontWeight="700" fill={markStyle[mark].text}>
                {markStyle[mark].label}
              </text>
            </g>
          ))}
        </g>
      ))}
      <text x="320" y="360" textAnchor="middle" fontSize="12" fill={MUTED}>
        Advisers never register with FINRA. Agents never register with the SEC.
      </text>
    </svg>
  )
}
