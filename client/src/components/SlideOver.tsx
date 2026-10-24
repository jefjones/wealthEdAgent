import { X } from 'lucide-react'
import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../lib/utils.ts'
import { slideDurationMs } from './slideOver.ts'

function focusable(root: HTMLElement) {
  return [...root.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])')].filter(
    (element) => !element.hasAttribute('disabled') && element.tabIndex !== -1,
  )
}

export function SlideOver({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean
  title: string
  onClose: () => void
  children: ReactNode
}) {
  const titleId = useId()
  const panelRef = useRef<HTMLDivElement>(null)
  const opener = useRef<HTMLElement | null>(null)
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose
  const [mounted, setMounted] = useState(open)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (open) {
      setMounted(true)
      const frame = window.requestAnimationFrame(() => setShown(true))
      return () => window.cancelAnimationFrame(frame)
    }
    setShown(false)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const timer = window.setTimeout(() => setMounted(false), slideDurationMs(reduced))
    return () => window.clearTimeout(timer)
  }, [open])

  useEffect(() => {
    if (!open || !mounted) return
    opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const node = panelRef.current
    node?.querySelector<HTMLElement>('[data-slide-close]')?.focus()

    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        event.stopPropagation()
        onCloseRef.current()
        return
      }
      if (event.key !== 'Tab' || !node) return
      const items = focusable(node)
      if (items.length === 0) return
      const first = items[0]
      const last = items[items.length - 1]
      if (!first || !last) return
      const active = document.activeElement
      if (event.shiftKey && (active === first || !node.contains(active))) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey, true)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKey, true)
      if (opener.current?.isConnected) opener.current.focus()
    }
  }, [open, mounted])

  if (!mounted) return null

  return createPortal(
    <div className="fixed inset-0 z-50 lg:hidden">
      <button type="button" className="absolute inset-0 bg-[#172033]/40" aria-label="Close contents" onClick={onClose} />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          'absolute inset-y-0 left-0 flex w-[min(20rem,calc(100vw-2.5rem))] max-w-[calc(100vw-2.5rem)] flex-col bg-white shadow-xl motion-reduce:transition-none',
          'transition-transform duration-200 ease-out',
          shown ? 'translate-x-0' : '-translate-x-full motion-reduce:translate-x-0',
        )}
        style={{
          paddingTop: 'env(safe-area-inset-top)',
          paddingBottom: 'env(safe-area-inset-bottom)',
          paddingLeft: 'env(safe-area-inset-left)',
        }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-[#d5e2f0] px-4 py-2">
          <h2 id={titleId} className="text-base font-semibold text-[#14375f]">
            {title}
          </h2>
          <button
            type="button"
            data-slide-close
            aria-label="Close"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full text-[#14375f] hover:bg-[#f3f7fb]"
            onClick={onClose}
          >
            <X size={22} />
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-3">{children}</div>
      </div>
    </div>,
    document.body,
  )
}
