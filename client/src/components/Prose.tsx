import { X } from 'lucide-react'
import { useRef, type PointerEvent as ReactPointerEvent } from 'react'
import { highlightArrowLabel, paintRun, sourceBlocks, type HighlightRange, type SourceRun } from '../study/highlights.ts'
import { isSentenceTap, sentencePieces } from '../study/narrator.ts'

type JumpTarget = { href: string; label: string }

type SentenceRange = { start: number; end: number }

type Props = {
  text: string
  highlights?: HighlightRange[]
  jumps?: Record<string, { previous: JumpTarget | null; next: JumpTarget | null }>
  onDelete?: (highlightId: string) => void
  onJump?: (href: string) => void
  /** Body ranges for read-aloud. Wrappers do not add characters, so highlight offsets stay put. */
  sentences?: readonly SentenceRange[]
  selectedSentence?: number | null
  activeSentence?: number | null
  onSentenceTap?: (index: number) => void
  /** Brief mark on the first keyword hit. Offsets are indexes into `text`. */
  searchHit?: { start: number; end: number } | null
  searchToken?: number
}

export function Prose({
  text,
  highlights = [],
  jumps,
  onDelete,
  onJump,
  sentences,
  selectedSentence = null,
  activeSentence = null,
  onSentenceTap,
  searchHit = null,
  searchToken = 0,
}: Props) {
  const blocks = sourceBlocks(text)
  const press = useRef<{ id: number; x: number; y: number; t: number; sentence: string | null; chrome: boolean } | null>(null)

  function onPointerDown(event: ReactPointerEvent<HTMLDivElement>) {
    if (!onSentenceTap || event.button !== 0) return
    const target = event.target
    if (!(target instanceof Element)) return
    const sentence = target.closest('[data-sentence]')
    press.current = sentence
      ? {
          id: event.pointerId,
          x: event.clientX,
          y: event.clientY,
          t: event.timeStamp,
          sentence: sentence.getAttribute('data-sentence'),
          chrome: Boolean(target.closest('[data-chrome], button, a')),
        }
      : null
  }

  function onPointerUp(event: ReactPointerEvent<HTMLDivElement>) {
    const start = press.current
    press.current = null
    if (!onSentenceTap || !start || start.id !== event.pointerId || start.sentence == null) return
    const target = event.target
    if (!(target instanceof Element)) return
    const sentence = target.closest('[data-sentence]')
    if (!sentence || sentence.getAttribute('data-sentence') !== start.sentence) return
    const selection = window.getSelection()
    const collapsed = !selection || selection.rangeCount === 0 || selection.isCollapsed
    if (
      !isSentenceTap({
        targetChrome: start.chrome || Boolean(target.closest('[data-chrome], button, a')),
        movedPx: Math.hypot(event.clientX - start.x, event.clientY - start.y),
        durationMs: event.timeStamp - start.t,
        selectionCollapsed: collapsed,
      })
    ) {
      return
    }
    const index = Number(start.sentence)
    if (!Number.isInteger(index)) return
    onSentenceTap(index)
  }

  return (
    <div
      className="space-y-4 text-[17px] leading-7 text-[#24364a] select-text"
      onPointerDown={onSentenceTap ? onPointerDown : undefined}
      onPointerUp={onSentenceTap ? onPointerUp : undefined}
    >
      {blocks.map((block) => {
        if (block.kind === 'list') {
          return (
            <ul key={block.runs[0]?.start ?? 0} className="list-disc space-y-2 pl-5">
              {block.runs.map((run) => (
                <li key={run.start}>
                  <MarkedRun
                    run={run}
                    highlights={highlights}
                    jumps={jumps}
                    sentences={sentences}
                    selectedSentence={selectedSentence}
                    activeSentence={activeSentence}
                    searchHit={searchHit}
                    searchToken={searchToken}
                    onDelete={onDelete}
                    onJump={onJump}
                  />
                </li>
              ))}
            </ul>
          )
        }
        return (
          <p key={block.run.start}>
            <MarkedRun
              run={block.run}
              highlights={highlights}
              jumps={jumps}
              sentences={sentences}
              selectedSentence={selectedSentence}
              activeSentence={activeSentence}
              searchHit={searchHit}
              searchToken={searchToken}
              onDelete={onDelete}
              onJump={onJump}
            />
          </p>
        )
      })}
    </div>
  )
}

function SearchPieces({
  text,
  absStart,
  hit,
  token,
}: {
  text: string
  absStart: number
  hit: { start: number; end: number } | null
  token: number
}) {
  if (!hit) return text
  const from = Math.max(0, hit.start - absStart)
  const to = Math.min(text.length, hit.end - absStart)
  if (to <= from) return text
  return (
    <>
      {from > 0 ? text.slice(0, from) : null}
      <mark key={token} data-search-hit="" className="search-hit">
        {text.slice(from, to)}
      </mark>
      {to < text.length ? text.slice(to) : null}
    </>
  )
}

function sentenceClass(index: number | null, selected: number | null, active: number | null) {
  if (index == null) return undefined
  const scroll = 'scroll-mb-32 lg:scroll-mb-4'
  if (index === active) return `rounded-sm bg-[#c9dff6] ${scroll}`
  if (index === selected) return `rounded-sm bg-[#e7f0fa] shadow-[inset_0_-2px_0_#8fb4d9] ${scroll}`
  return scroll
}

function MarkedRun({
  run,
  highlights,
  jumps,
  sentences,
  selectedSentence,
  activeSentence,
  searchHit,
  searchToken,
  onDelete,
  onJump,
}: {
  run: SourceRun
  highlights: HighlightRange[]
  jumps?: Props['jumps']
  sentences?: readonly SentenceRange[]
  selectedSentence: number | null
  activeSentence: number | null
  searchHit: { start: number; end: number } | null
  searchToken: number
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
        const pieces =
          sentences && sentences.length > 0
            ? sentencePieces(slice.start, slice.text, sentences)
            : [{ start: slice.start, text: slice.text, sentence: null as number | null }]
        return (
          <span key={`${slice.start}-${slice.highlightId ?? 'plain'}`}>
            {startsHere && slice.highlightId ? (
              <HighlightArrow side="previous" glyph="←" target={jump?.previous ?? null} onJump={onJump} />
            ) : null}
            {pieces.map((piece) => (
              <span
                key={`${piece.start}-${piece.sentence ?? 'gap'}`}
                data-start={piece.start}
                data-sentence={piece.sentence ?? undefined}
                className={sentenceClass(piece.sentence, selectedSentence, activeSentence)}
              >
                {slice.highlightId ? (
                  <mark
                    id={piece.start === slice.start && startsHere ? `h-${slice.highlightId}` : undefined}
                    className="rounded-sm bg-[#ffe08a] px-0.5 text-[#3a2a00]"
                  >
                    <SearchPieces text={piece.text} absStart={piece.start} hit={searchHit} token={searchToken} />
                  </mark>
                ) : (
                  <SearchPieces text={piece.text} absStart={piece.start} hit={searchHit} token={searchToken} />
                )}
              </span>
            ))}
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
