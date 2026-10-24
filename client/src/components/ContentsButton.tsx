import { List } from 'lucide-react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

/** Puts a Contents control in the top bar, beside the existing menu button. */
export function ContentsButton({
  pressed,
  onClick,
  label = 'Contents',
}: {
  pressed: boolean
  onClick: () => void
  label?: string
}) {
  const [slot, setSlot] = useState<HTMLElement | null>(null)

  useEffect(() => {
    setSlot(document.getElementById('mobile-contents-slot'))
  }, [])

  if (!slot) return null

  return createPortal(
    <button
      type="button"
      className="inline-flex min-h-11 shrink-0 items-center gap-1 rounded-full px-3 text-sm font-semibold text-white hover:bg-white/10"
      aria-expanded={pressed}
      aria-haspopup="dialog"
      onClick={onClick}
    >
      <List size={18} aria-hidden />
      {label}
    </button>,
    slot,
  )
}
