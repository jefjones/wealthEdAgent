import { useEffect, useId, useRef, useState } from 'react'
import { IOS_CHROME_VOICE_NOTE, IOS_VOICE_HINT } from '../study/narrator.ts'
import type { NarrationRate, PlayerPhase } from '../study/narrator.ts'
import { Button } from './ui/button.tsx'

export type NarrationVoiceOption = {
  id: string
  name: string
  lang: string
}

type Props = {
  supported: boolean
  phase: PlayerPhase
  rate: NarrationRate
  status: string
  stepName: 'sentence' | 'highlight'
  startTitle: string
  canPrevious: boolean
  canNext: boolean
  voiceId: string
  voices: readonly NarrationVoiceOption[]
  showIosVoiceHint: boolean
  onStart: () => void
  onStop: () => void
  onPrevious: () => void
  onNext: () => void
  onCycleRate: () => void
  onVoiceChange: (id: string) => void
  onPreviewVoice: () => void
}

function rateLabel(rate: NarrationRate) {
  return `${rate}×`
}

export function NarrationBar(props: Props) {
  const { supported } = props
  const barRef = useRef<HTMLDivElement>(null)
  const [barHeight, setBarHeight] = useState(0)
  useEffect(() => {
    if (!supported) return
    const query = window.matchMedia('(min-width: 1024px)')
    const bar = barRef.current
    const apply = () => {
      const height = bar?.offsetHeight ?? 0
      setBarHeight(height)
      document.body.style.paddingBottom = query.matches ? '' : `${height}px`
    }
    apply()
    const observer = bar ? new ResizeObserver(apply) : null
    if (bar) observer?.observe(bar)
    query.addEventListener('change', apply)
    return () => {
      observer?.disconnect()
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
        <NarrationControls {...props} placement="down" mobileBarHeight={0} />
      </div>
      <div
        ref={barRef}
        className="fixed inset-x-0 bottom-0 z-30 border-t border-[#d5e2f0] bg-white/95 backdrop-blur-sm lg:hidden"
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        <div className="px-3 py-2">
          <NarrationControls {...props} placement="up" mobileBarHeight={barHeight} />
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
  voiceId,
  voices,
  showIosVoiceHint,
  onStart,
  onStop,
  onPrevious,
  onNext,
  onCycleRate,
  onVoiceChange,
  onPreviewVoice,
  placement,
  mobileBarHeight,
}: Props & { placement: 'up' | 'down'; mobileBarHeight: number }) {
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
        <VoicePicker
          placement={placement}
          mobileBarHeight={mobileBarHeight}
          voiceId={voiceId}
          voices={voices}
          showIosVoiceHint={showIosVoiceHint}
          onVoiceChange={onVoiceChange}
          onPreviewVoice={onPreviewVoice}
        />
      </div>
      <p aria-live="polite" className="min-h-5 text-sm text-[#5c7288]">
        {status}
      </p>
    </div>
  )
}

function VoicePicker({
  placement,
  mobileBarHeight,
  voiceId,
  voices,
  showIosVoiceHint,
  onVoiceChange,
  onPreviewVoice,
}: {
  placement: 'up' | 'down'
  mobileBarHeight: number
  voiceId: string
  voices: readonly NarrationVoiceOption[]
  showIosVoiceHint: boolean
  onVoiceChange: (id: string) => void
  onPreviewVoice: () => void
}) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const groupName = useId()

  useEffect(() => {
    if (!open) return
    const onPointer = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const panelClass =
    placement === 'up'
      ? 'fixed inset-x-3 z-40 max-h-[min(24rem,70vh)]'
      : 'absolute left-0 top-full z-40 mt-2 w-80 max-h-80'
  const panelStyle = placement === 'up' ? { bottom: `${mobileBarHeight + 8}px` } : undefined

  return (
    <div ref={rootRef} className="relative">
      <Button
        type="button"
        variant="outline"
        className="min-w-11 px-3"
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label="Choose a voice"
        title="Choose a voice"
        onClick={() => setOpen((value) => !value)}
      >
        Voice
      </Button>
      {open ? (
        <div
          role="dialog"
          aria-label="Choose a voice"
          className={`${panelClass} overflow-y-auto rounded-2xl border border-[#d5e2f0] bg-white p-3 shadow-lg`}
          style={panelStyle}
        >
          {showIosVoiceHint ? (
            <div className="mb-3 space-y-1 text-xs leading-5 text-[#3d5166]">
              <p>{IOS_VOICE_HINT}</p>
              <p>{IOS_CHROME_VOICE_NOTE}</p>
            </div>
          ) : null}
          <div className="mb-2 flex items-center justify-between gap-2">
            <p className="text-sm font-semibold text-[#14375f]">Voice</p>
            <Button type="button" variant="outline" size="sm" onClick={onPreviewVoice}>
              Preview
            </Button>
          </div>
          <div role="radiogroup" aria-label="Narration voice" className="flex flex-col">
            <VoiceChoice
              name={groupName}
              checked={voiceId === 'auto'}
              label="Best available (auto)"
              onSelect={() => onVoiceChange('auto')}
            />
            {voices.map((voice) => (
              <VoiceChoice
                key={voice.id}
                name={groupName}
                checked={voiceId === voice.id}
                label={voice.name}
                detail={voice.lang}
                onSelect={() => onVoiceChange(voice.id)}
              />
            ))}
            {voices.length === 0 ? <p className="px-1 py-2 text-sm text-[#5c7288]">Loading voices…</p> : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}

function VoiceChoice({
  name,
  checked,
  label,
  detail,
  onSelect,
}: {
  name: string
  checked: boolean
  label: string
  detail?: string
  onSelect: () => void
}) {
  return (
    <label className="flex min-h-11 cursor-pointer items-center gap-2 rounded-xl px-1 py-1.5 text-sm text-[#1c3f66] hover:bg-[#f3f7fc]">
      <input className="size-4 accent-[#2a6cb5]" type="radio" name={name} checked={checked} onChange={onSelect} />
      <span className="min-w-0 flex-1">
        <span className="block">{label}</span>
        {detail ? <span className="block text-xs text-[#5c7288]">{detail}</span> : null}
      </span>
    </label>
  )
}
