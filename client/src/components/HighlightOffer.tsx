import { X } from 'lucide-react'
import { useLayoutEffect, useRef, useState, type MouseEvent, type PointerEvent } from 'react'
import { createPortal } from 'react-dom'
import { HIGHLIGHT_TEXT_MAX, placeHighlightPopup, type ViewportRect } from '../study/highlights.ts'
import { Button } from './ui/button.tsx'

type Props = {
  rect: ViewportRect
  textLength: number
  adding: boolean
  onPointerDown: (event: PointerEvent<HTMLElement> | MouseEvent<HTMLElement>) => void
  onConfirm: () => void
  onDismiss: () => void
}

export function HighlightOffer({ rect, textLength, adding, onPointerDown, onConfirm, onDismiss }: Props) {
  const popupRef = useRef<HTMLDivElement>(null)
  const confirmed = useRef(false)
  const [size, setSize] = useState({ width: 320, height: 140 })
  const tooLong = textLength > HIGHLIGHT_TEXT_MAX

  useLayoutEffect(() => {
    const el = popupRef.current
    if (!el) return
    const measured = el.getBoundingClientRect()
    setSize((current) =>
      Math.abs(current.width - measured.width) < 1 && Math.abs(current.height - measured.height) < 1
        ? current
        : { width: measured.width, height: measured.height },
    )
  })

  const place = placeHighlightPopup({
    selection: rect,
    popup: size,
    viewport: { width: window.innerWidth, height: window.innerHeight },
  })

  function confirmFromPointer(event: PointerEvent<HTMLButtonElement>) {
    if (adding || tooLong) return
    if (event.pointerType === 'mouse' && event.button !== 0) return
    confirmed.current = true
    onConfirm()
  }

  function confirmFromClick() {
    if (confirmed.current) {
      confirmed.current = false
      return
    }
    if (adding || tooLong) return
    onConfirm()
  }

  return createPortal(
    <div
      ref={popupRef}
      role="dialog"
      aria-labelledby="highlight-offer-title"
      data-highlight-offer=""
      className="fixed z-50 w-[min(20rem,calc(100vw-1rem))] rounded-2xl border border-[#d5e2f0] bg-white p-3 shadow-[0_8px_24px_rgba(20,55,95,0.16)] select-none"
      style={{ top: place.top, left: place.left }}
      onPointerDown={onPointerDown}
      onMouseDown={onPointerDown}
    >
      <div className="flex items-center gap-2">
        <p id="highlight-offer-title" className="min-w-0 flex-1 text-sm font-semibold text-[#14375f]">
          Highlight this text?
        </p>
        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#1c3f66] hover:bg-[#e7f0fa] focus-visible:ring-2 focus-visible:ring-[#2a6cb5] focus-visible:outline-none"
          aria-label="Dismiss"
          onClick={onDismiss}
        >
          <X size={18} aria-hidden />
        </button>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        <Button
          type="button"
          className="min-h-11 cursor-pointer"
          disabled={adding || tooLong}
          onPointerUp={confirmFromPointer}
          onClick={confirmFromClick}
        >
          {adding ? 'Saving…' : 'Highlight'}
        </Button>
        <Button type="button" variant="outline" className="min-h-11 cursor-pointer" onClick={onDismiss}>
          Not now
        </Button>
      </div>
      {tooLong ? <p className="mt-2 text-sm text-[#8d1d1d]">Select 2000 characters or fewer.</p> : null}
    </div>,
    document.body,
  )
}

export function HighlightSavedNotice({ open, message, onDismiss }: { open: boolean; message: string; onDismiss: () => void }) {
  const [top, setTop] = useState(12)

  useLayoutEffect(() => {
    if (!open) return
    function measure() {
      const header = document.querySelector('header')
      const bottom = header?.getBoundingClientRect().bottom ?? 0
      setTop(Math.max(12, bottom + 8))
    }
    measure()
    window.addEventListener('resize', measure)
    document.addEventListener('scroll', measure, true)
    return () => {
      window.removeEventListener('resize', measure)
      document.removeEventListener('scroll', measure, true)
    }
  }, [open])

  return (
    <div
      role="status"
      aria-live="polite"
      className={
        open
          ? 'fixed right-3 left-3 z-[60] mx-auto flex max-w-lg items-start gap-2 rounded-2xl border border-[#b7d4ef] bg-white p-3 text-sm text-[#14375f] shadow-[0_8px_24px_rgba(20,55,95,0.16)]'
          : 'sr-only'
      }
      style={open ? { top } : undefined}
    >
      {open ? (
        <>
          <p className="min-w-0 flex-1 py-2.5">{message}</p>
          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-[#1c3f66] hover:bg-[#e7f0fa] focus-visible:ring-2 focus-visible:ring-[#2a6cb5] focus-visible:outline-none"
            aria-label="Dismiss"
            onClick={onDismiss}
          >
            <X size={18} aria-hidden />
          </button>
        </>
      ) : null}
    </div>
  )
}
