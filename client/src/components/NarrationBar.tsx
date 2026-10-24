import { useEffect } from 'react'
import { Button } from './ui/button.tsx'
import type { NarrationRate, PlayerPhase } from '../study/narrator.ts'

type Props = {
  supported: boolean
  phase: PlayerPhase
  rate: NarrationRate
  status: string
  stepName: 'sentence' | 'highlight'
  startTitle: string
  canPrevious: boolean
  canNext: boolean
  onStart: () => void
  onStop: () => void
  onPrevious: () => void
  onNext: () => void
  onCycleRate: () => void
}

function rateLabel(rate: NarrationRate) {
  return `${rate}×`
}

export function NarrationBar(props: Props) {
  const { supported } = props
  useEffect(() => {
    if (!supported) return
    const query = window.matchMedia('(min-width: 1024px)')
    const apply = () => {
      document.body.style.paddingBottom = query.matches ? '' : 'calc(7.25rem + env(safe-area-inset-bottom))'
    }
    apply()
    query.addEventListener('change', apply)
    return () => {
      query.removeEventListener('change', apply)
      document.body.style.paddingBottom = ''
    }
  }, [supported])

  if (!supported) {
    return <p className="text-sm text-[#5c7288]">Read aloud is not available in this browser.</p>
  }

  return (
    <>
      <div className="hidden lg:block">
        <NarrationControls {...props} />
      </div>
      <div
        className="fixed inset-x-0 bottom-0 z-30 border-t border-[#d5e2f0] bg-white/95 backdrop-blur-sm lg:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="px-3 py-2">
          <NarrationControls {...props} />
        </div>
      </div>
    </>
  )
}

function NarrationControls({
  phase,
  rate,
  status,
  stepName,
  startTitle,
  canPrevious,
  canNext,
  onStart,
  onStop,
  onPrevious,
  onNext,
  onCycleRate,
}: Props) {
  const rateText = rateLabel(rate)
  return (
    <div className="flex flex-col gap-1 lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-3 lg:gap-y-1">
      <div role="group" aria-label="Read aloud" className="flex flex-wrap items-center gap-2">
        <Button
          type="button"
          variant="outline"
          className="min-w-11 px-3"
          disabled={!canPrevious}
          aria-label={`Previous ${stepName}`}
          title={`Previous ${stepName}`}
          onClick={onPrevious}
        >
          Prev
        </Button>
        <Button type="button" className="min-w-11 px-4" aria-label={startTitle} title={startTitle} onClick={onStart}>
          Start
        </Button>
        <Button
          type="button"
          variant="outline"
          className="min-w-11 px-4"
          disabled={phase !== 'speaking'}
          aria-label="Stop reading aloud"
          title="Stop reading aloud"
          onClick={onStop}
        >
          Stop
        </Button>
        <Button
          type="button"
          variant="outline"
          className="min-w-11 px-3"
          disabled={!canNext}
          aria-label={`Next ${stepName}`}
          title={`Next ${stepName}`}
          onClick={onNext}
        >
          Next
        </Button>
        <Button
          type="button"
          variant="outline"
          className="min-w-11 px-3"
          aria-label={`Reading speed ${rateText}. Change speed.`}
          title="Change reading speed between 0.8×, 1×, and 1.25×"
          onClick={onCycleRate}
        >
          {rateText}
        </Button>
      </div>
      <p aria-live="polite" className="min-h-5 text-sm text-[#5c7288]">
        {status}
      </p>
    </div>
  )
}
