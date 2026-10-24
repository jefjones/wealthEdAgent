import { useCallback, useEffect, useReducer, useRef } from 'react'
import {
  initialPlayerState,
  nextNarrationRate,
  playerReducer,
  preferEnglishVoice,
  speechSynthesisAvailable,
  startPartIndex,
  stepDestination,
  type NarrationRate,
  type SpeechPart,
} from './narrator.ts'

/**
 * One speechSynthesis queue shared by section reading and highlight reading.
 * Utterances are queued inside the click that starts them so iOS keeps the
 * user gesture. The queue is cancelled on stop, scope change, unmount,
 * pagehide, and when the page is hidden.
 */
export function useNarration(scope: string, parts: readonly SpeechPart[]) {
  const [state, dispatch] = useReducer(playerReducer, undefined, initialPlayerState)
  const supported =
    typeof window !== 'undefined' && speechSynthesisAvailable(window as Window & typeof globalThis)
  const tokenRef = useRef(0)
  const stateRef = useRef(state)
  stateRef.current = state
  const partsRef = useRef(parts)
  partsRef.current = parts

  const speakFrom = useCallback((index: number, rate: NarrationRate) => {
    const synth = window.speechSynthesis
    const list = partsRef.current
    if (!synth || index < 0 || index >= list.length) {
      dispatch({ type: 'finish' })
      return
    }
    const token = tokenRef.current + 1
    tokenRef.current = token
    if (synth.speaking || synth.pending) synth.cancel()
    const voice = preferEnglishVoice(synth.getVoices())
    const pending = list.slice(index)
    pending.forEach((part, offset) => {
      const utter = new SpeechSynthesisUtterance(part.speak)
      utter.rate = rate
      utter.lang = voice?.lang || 'en-US'
      if (voice) utter.voice = voice
      const partIndex = index + offset
      utter.onstart = () => {
        if (tokenRef.current !== token) return
        dispatch({ type: 'tick', index: partIndex })
      }
      utter.onend = () => {
        if (tokenRef.current !== token) return
        if (offset === pending.length - 1) dispatch({ type: 'finish' })
      }
      utter.onerror = (event) => {
        if (tokenRef.current !== token) return
        if (event.error === 'interrupted' || event.error === 'canceled') return
        dispatch({ type: 'stop' })
      }
      synth.speak(utter)
    })
    synth.resume()
  }, [])

  useEffect(() => {
    const synth = window.speechSynthesis
    if (!synth) return
    synth.getVoices()
    const prime = () => {
      synth.getVoices()
    }
    synth.addEventListener('voiceschanged', prime)
    return () => synth.removeEventListener('voiceschanged', prime)
  }, [supported])

  useEffect(() => {
    tokenRef.current += 1
    window.speechSynthesis?.cancel()
    dispatch({ type: 'reset' })
    return () => {
      tokenRef.current += 1
      window.speechSynthesis?.cancel()
    }
  }, [scope])

  useEffect(() => {
    const stopSpeaking = () => {
      tokenRef.current += 1
      window.speechSynthesis?.cancel()
      dispatch({ type: 'stop' })
    }
    const onHide = () => {
      if (document.visibilityState === 'hidden') stopSpeaking()
    }
    window.addEventListener('pagehide', stopSpeaking)
    document.addEventListener('visibilitychange', onHide)
    return () => {
      window.removeEventListener('pagehide', stopSpeaking)
      document.removeEventListener('visibilitychange', onHide)
      stopSpeaking()
    }
  }, [])

  const signature = parts.map((part) => `${part.group}\u0000${part.speak}`).join('\u0001')
  const signatureRef = useRef<string | null>(null)
  useEffect(() => {
    if (signatureRef.current == null) {
      signatureRef.current = signature
      return
    }
    if (signatureRef.current === signature) return
    signatureRef.current = signature
    if (stateRef.current.phase !== 'speaking') return
    tokenRef.current += 1
    window.speechSynthesis?.cancel()
    dispatch({ type: 'stop' })
  }, [signature])

  const select = useCallback((group: string) => {
    dispatch({ type: 'select', group })
  }, [])

  const start = useCallback(
    (group?: string) => {
      if (group) dispatch({ type: 'select', group })
      const anchor = group ?? stateRef.current.anchor
      const index = startPartIndex(partsRef.current, anchor)
      if (index == null) return
      dispatch({ type: 'start', index })
      speakFrom(index, stateRef.current.rate)
    },
    [speakFrom],
  )

  const stop = useCallback(() => {
    tokenRef.current += 1
    window.speechSynthesis?.cancel()
    dispatch({ type: 'stop' })
  }, [])

  const step = useCallback(
    (direction: -1 | 1) => {
      const list = partsRef.current
      const current = stateRef.current
      const dest = stepDestination(list, current.phase, current.index, current.anchor, direction)
      if (dest == null) return
      const group = list[dest]?.group
      if (!group) return
      dispatch({ type: 'select', group })
      if (current.phase === 'speaking') {
        dispatch({ type: 'start', index: dest })
        speakFrom(dest, current.rate)
      }
    },
    [speakFrom],
  )

  const previous = useCallback(() => step(-1), [step])
  const next = useCallback(() => step(1), [step])

  const cycleRate = useCallback(() => {
    const nextRate = nextNarrationRate(stateRef.current.rate)
    dispatch({ type: 'rate', rate: nextRate })
    if (stateRef.current.phase === 'speaking' && stateRef.current.index != null) {
      dispatch({ type: 'start', index: stateRef.current.index })
      speakFrom(stateRef.current.index, nextRate)
    }
  }, [speakFrom])

  const activeGroup = state.phase === 'speaking' && state.index != null ? (parts[state.index]?.group ?? null) : null

  return {
    supported,
    phase: state.phase,
    anchor: state.anchor,
    index: state.index,
    rate: state.rate,
    activeGroup,
    canPrevious: stepDestination(parts, state.phase, state.index, state.anchor, -1) != null,
    canNext: stepDestination(parts, state.phase, state.index, state.anchor, 1) != null,
    select,
    start,
    stop,
    previous,
    next,
    cycleRate,
  }
}

export function scrollNarrationTarget(node: Element | null, block: ScrollLogicalPosition = 'center') {
  if (!(node instanceof HTMLElement)) return
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  node.scrollIntoView({ block, inline: 'nearest', behavior: reduced ? 'auto' : 'smooth' })
}
