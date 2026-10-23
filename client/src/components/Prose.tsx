import { X } from 'lucide-react'
import { highlightArrowLabel, paintRun, sourceBlocks, type HighlightRange, type SourceRun } from '../study/highlights.ts'

type JumpTarget = { href: string; label: string }

type Props = {
  text: string
  highlights?: HighlightRange[]
  jumps?: Record<string, { previous: JumpTarget | null; next: JumpTarget | null }>
  onDelete?: (highlightId: string) => void
  onJump?: (href: string) => void
}

export function Prose({ text, highlights = [], jumps, onDelete, onJump }: Props) {
  const blocks = sourceBlocks(text)
  return (
    <div className="space-y-4 text-[17px] leading-7 text-[#24364a] select-text">
      {blocks.map((block) => {
        if (block.kind === 'list') {
          return (
            <ul key={block.runs[0]?.start ?? 0} className="list-disc space-y-2 pl-5">
              {block.runs.map((run) => (
                <li key={run.start}>
                  <MarkedRun run={run} highlights={highlights} jumps={jumps} onDelete={onDelete} onJump={onJump} />
                </li>
              ))}
            </ul>
          )
        }
        return (
          <p key={block.run.start}>
            <MarkedRun run={block.run} highlights={highlights} jumps={jumps} onDelete={onDelete} onJump={onJump} />
          </p>
        )
      })}
    </div>
  )
}

function MarkedRun({
  run,
  highlights,
  jumps,
  onDelete,
  onJump,
}: {
  run: SourceRun
  highlights: HighlightRange[]
  jumps?: Props['jumps']
  onDelete?: (highlightId: string) => void
  onJump?: (href: string) => void
}) {
  const slices = paintRun(run.start, run.text, highlights)
  return (
    <>
      {slices.map((slice) => {
        const startsHere = slice.highlightId != null && slice.start === rangeStart(highlights, slice.highlightId)
        const endsHere = slice.highlightId != null && slice.end === rangeEnd(highlights, slice.highlightId)
        const jump = slice.highlightId ? jumps?.[slice.highlightId] : undefined
        return (
          <span key={`${slice.start}-${slice.highlightId ?? 'plain'}`}>
            {startsHere && slice.highlightId ? (
              <HighlightArrow side="previous" glyph="←" target={jump?.previous ?? null} onJump={onJump} />
            ) : null}
            <span data-start={slice.start}>
              {slice.highlightId ? (
                <mark
                  id={startsHere ? `h-${slice.highlightId}` : undefined}
                  className="rounded-sm bg-[#ffe08a] px-0.5 text-[#3a2a00]"
                >
                  {slice.text}
                </mark>
              ) : (
                slice.text
              )}
            </span>
            {endsHere && slice.highlightId ? (
              <HighlightArrow side="next" glyph="→" target={jump?.next ?? null} onJump={onJump} />
            ) : null}
            {onDelete && endsHere ? (
              <button
                type="button"
                data-chrome=""
                className="relative ml-0.5 inline-flex h-[18px] w-[18px] cursor-pointer items-center justify-center rounded-sm border-0 bg-transparent p-0 align-baseline leading-none text-[#8d5a00] select-none before:absolute before:-inset-y-3 before:-inset-x-2 before:content-[''] hover:text-[#6b5200] focus-visible:ring-2 focus-visible:ring-[#c49200] focus-visible:outline-none"
                aria-label="Delete this highlight"
                title="Delete this highlight"
                onClick={() => onDelete(slice.highlightId!)}
              >
                <X size={16} aria-hidden />
              </button>
            ) : null}
          </span>
        )
      })}
    </>
  )
}

function HighlightArrow({
  side,
  glyph,
  target,
  onJump,
}: {
  side: 'previous' | 'next'
  glyph: string
  target: JumpTarget | null
  onJump?: (href: string) => void
}) {
  const label = target?.label ?? highlightArrowLabel(side, null, '')
  return (
    <button
      type="button"
      data-chrome=""
      aria-disabled={target ? undefined : true}
      aria-label={label}
      title={label}
      className={`relative inline-flex h-[18px] w-[18px] items-center justify-center border-0 bg-transparent p-0 align-baseline text-[18px] leading-none select-none before:absolute before:-inset-y-3 before:-inset-x-2 before:content-[''] focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[#c49200] focus-visible:outline-none ${target ? 'cursor-pointer text-[#8d5a00] hover:text-[#6b5200]' : 'cursor-not-allowed text-[#c4b48a]'}`}
      onClick={() => {
        if (target) onJump?.(target.href)
      }}
    >
      <span aria-hidden="true">{glyph}</span>
    </button>
  )
}

function rangeStart(highlights: HighlightRange[], highlightId: string) {
  return highlights.find((range) => range.highlightId === highlightId)?.startOffset
}

function rangeEnd(highlights: HighlightRange[], highlightId: string) {
  return highlights.find((range) => range.highlightId === highlightId)?.endOffset
}
