import { useEffect, useLayoutEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { captureScroll } from '../study/columnScroll.ts'
import { highlightDeletePreview } from '../study/highlights.ts'
import { Button } from './ui/button.tsx'

type Props = {
  text: string
  busy: boolean
  error?: string
  onConfirm: () => void
  onCancel: () => void
}

export function DeleteHighlightDialog({ text, busy, error = '', onConfirm, onCancel }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const restoreScroll = captureScroll()
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null
    dialogRef.current?.querySelector<HTMLButtonElement>('[data-cancel]')?.focus({ preventScroll: true })
    restoreScroll()
    return () => {
      if (previous && document.contains(previous)) previous.focus({ preventScroll: true })
    }
  }, [])

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        event.stopImmediatePropagation()
        if (!busy) onCancel()
        return
      }
      if (event.key !== 'Tab') return
      const dialog = dialogRef.current
      if (!dialog) return
      const buttons = [...dialog.querySelectorAll<HTMLButtonElement>('button')].filter((button) => !button.disabled)
      const first = buttons[0]
      const last = buttons[buttons.length - 1]
      if (!first || !last) return
      const active = document.activeElement
      if (event.shiftKey && (active === first || !dialog.contains(active))) {
        event.preventDefault()
        last.focus({ preventScroll: true })
      } else if (!event.shiftKey && (active === last || !dialog.contains(active))) {
        event.preventDefault()
        first.focus({ preventScroll: true })
      }
    }
    document.addEventListener('keydown', onKey, true)
    return () => document.removeEventListener('keydown', onKey, true)
  }, [busy, onCancel])

  function confirm() {
    if (busy) return
    onConfirm()
  }

  const preview = highlightDeletePreview(text)

  return createPortal(
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-[#172033]/40 p-3"
        onClick={(event) => {
        if (event.target === event.currentTarget && !busy) onCancel()
      }}
    >
      <div
        ref={dialogRef}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="delete-highlight-title"
        aria-describedby="delete-highlight-preview"
        className="w-full max-w-sm rounded-2xl border border-[#d5e2f0] bg-white p-4 shadow-[0_12px_40px_rgba(20,55,95,0.2)]"
      >
        <h2 id="delete-highlight-title" className="text-base font-semibold text-[#14375f]">
          Delete this highlight?
        </h2>
        <p id="delete-highlight-preview" className="mt-2 text-sm break-words text-[#3d5166]">
          {preview}
        </p>
        {error ? <p className="mt-3 rounded-xl bg-[#fdecec] px-3 py-2 text-sm text-[#8d1d1d]">{error}</p> : null}
        <div className="mt-4 flex flex-wrap gap-2">
          <Button type="button" variant="outline" data-cancel="" className="min-h-11 min-w-11 flex-1" onClick={onCancel} disabled={busy}>
            Cancel
          </Button>
          <Button type="button" variant="danger" className="min-h-11 min-w-11 flex-1" onClick={confirm} disabled={busy}>
            {busy ? 'Deleting…' : 'Delete'}
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  )
}
