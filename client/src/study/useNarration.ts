import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import {
  AUTO_VOICE_ID,
  NARRATION_PITCH,
  VOICE_PREVIEW_TEXT,
  initialPlayerState,
  isIosWebKitVoiceHost,
  nextNarrationRate,
  playerReducer,
  rankNarrationVoices,
  readVoicePreference,
  resolveNarrationVoice,
  speechSynthesisAvailable,
  narrationJump,
  startPartIndex,
  stepDestination,
  voiceStorageId,
  writeVoicePreference,
  type NarrationRate,
  type SpeechPart,
  type VoiceChoice,
} from './narrator.ts'

/**
 * One speechSynthesis queue shared by section reading and highlight reading.
 * Utterances are queued inside the click that starts them so iOS keeps the
 * user gesture. The queue is cancelled on stop, scope change, unmount,
 * pagehide, and when the page is hidden.
 */
function choiceFrom(voice: SpeechSynthesisVoice): VoiceChoice {
  return { lang: voice.lang, name: voice.name, default: voice.default, voiceURI: voice.voiceURI }
}

function nativeVoice(catalog: readonly SpeechSynthesisVoice[], savedId: string, voicesReady: boolean) {
  const resolved = resolveNarrationVoice(catalog.map(choiceFrom), savedId, voicesReady)
  if (!resolved.voice) return null
  const id = voiceStorageId(resolved.voice)
  return catalog.find((voice) => voiceStorageId(choiceFrom(voice)) === id) ?? null
}

export function useNarration(scope: string, parts: readonly SpeechPart[]) {
  const [state, dispatch] = useReducer(playerReducer, undefined, initialPlayerState)
  const supported =
    typeof window !== 'undefined' && speechSynthesisAvailable(window as Window & typeof globalThis)
  const [savedVoiceId, setSavedVoiceId] = useState(() =>
    typeof window === 'undefined' ? AUTO_VOICE_ID : readVoicePreference(window.localStorage),
  )
  const [catalog, setCatalog] = useState<SpeechSynthesisVoice[]>([])
  const [voicesReady, setVoicesReady] = useState(false)
  const tokenRef = useRef(0)
  const stateRef = useRef(state)
  stateRef.current = state
  const partsRef = useRef(parts)
  partsRef.current = parts
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null)
  const appliedVoiceRef = useRef<string | null>(null)
  const catalogRef = useRef(catalog)
  catalogRef.current = catalog
  const readyRef = useRef(voicesReady)
  readyRef.current = voicesReady

  const speakFrom = useCallback((index: number, rate: NarrationRate) => {
    const synth = window.speechSynthesis
    const list = partsRef.current
    if (!synth || index < 0 || index >= list.length) {
      dispatch({ type: 'finish' })
      return
    }
    // Bump the run token before cancel(). iOS and Chrome fire onend for the
    // utterance cancel() just dropped, and that stale end must not finish this run.
    const token = tokenRef.current + 1
    tokenRef.current = token
    if (synth.speaking || synth.pending) synth.cancel()
    const voice = voiceRef.current
    const pending = list.slice(index)
    pending.forEach((part, offset) => {
      const utter = new SpeechSynthesisUtterance(part.speak)
      utter.rate = rate
      utter.pitch = NARRATION_PITCH
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
    const apply = (ready: boolean) => {
      const list = synth.getVoices()
      setCatalog(list)
      // iOS often returns an empty list until voiceschanged. Do not treat that
      // first empty read as the final catalog, or a saved voice would be dropped.
      if (ready || list.length > 0) setVoicesReady(true)
    }
    apply(false)
    const onChange = () => apply(true)
    synth.addEventListener('voiceschanged', onChange)
    return () => synth.removeEventListener('voiceschanged', onChange)
  }, [supported])

  useEffect(() => {
    if (!voicesReady) return
    if (!savedVoiceId || savedVoiceId === AUTO_VOICE_ID) return
    const stillThere = rankNarrationVoices(catalog.map(choiceFrom)).some((voice) => voiceStorageId(voice) === savedVoiceId)
    if (stillThere) return
    writeVoicePreference(window.localStorage, AUTO_VOICE_ID)
    setSavedVoiceId(AUTO_VOICE_ID)
  }, [voicesReady, catalog, savedVoiceId])

  useEffect(() => {
    const voice = nativeVoice(catalog, savedVoiceId, voicesReady)
    voiceRef.current = voice
    const marker = voice ? voiceStorageId(choiceFrom(voice)) : ''
    if (appliedVoiceRef.current == null) {
      appliedVoiceRef.current = marker
      return
    }
    if (appliedVoiceRef.current === marker) return
    appliedVoiceRef.current = marker
    const current = stateRef.current
    if (current.phase === 'speaking' && current.index != null) speakFrom(current.index, current.rate)
  }, [catalog, savedVoiceId, voicesReady, speakFrom])

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

  const select = useCallback(
    (group: string) => {
      const current = stateRef.current
      const decision = narrationJump({
        phase: current.phase,
        parts: partsRef.current,
        targetGroup: group,
        index: current.index,
        plainTap: true,
      })
      if (decision.action === 'ignore') return
      dispatch({ type: 'select', group })
      if (decision.action === 'jump') {
        dispatch({ type: 'start', index: decision.index })
        speakFrom(decision.index, current.rate)
      }
    },
    [speakFrom],
  )

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

  const chooseVoice = useCallback((id: string) => {
    const next = id || AUTO_VOICE_ID
    if (typeof window !== 'undefined') writeVoicePreference(window.localStorage, next)
    voiceRef.current = nativeVoice(catalogRef.current, next, readyRef.current)
    setSavedVoiceId(next)
  }, [])

  const previewVoice = useCallback(() => {
    const synth = window.speechSynthesis
    if (!synth) return
    tokenRef.current += 1
    if (synth.speaking || synth.pending) synth.cancel()
    dispatch({ type: 'stop' })
    const utter = new SpeechSynthesisUtterance(VOICE_PREVIEW_TEXT)
    utter.rate = 1
    utter.pitch = NARRATION_PITCH
    const voice = voiceRef.current
    utter.lang = voice?.lang || 'en-US'
    if (voice) utter.voice = voice
    synth.speak(utter)
    synth.resume()
  }, [])

  const activeGroup = state.phase === 'speaking' && state.index != null ? (parts[state.index]?.group ?? null) : null
  const voiceOptions = useMemo(
    () =>
      rankNarrationVoices(catalog.map(choiceFrom)).map((voice) => ({
        id: voiceStorageId(voice),
        name: voice.name,
        lang: voice.lang,
      })),
    [catalog],
  )
  const voiceSelection = resolveNarrationVoice(catalog.map(choiceFrom), savedVoiceId, voicesReady).id
  const showIosVoiceHint =
    typeof navigator !== 'undefined' &&
    isIosWebKitVoiceHost(navigator.userAgent, navigator.maxTouchPoints, navigator.platform)

  return {
    supported,
    phase: state.phase,
    anchor: state.anchor,
    index: state.index,
    rate: state.rate,
    activeGroup,
    canPrevious: stepDestination(parts, state.phase, state.index, state.anchor, -1) != null,
    canNext: stepDestination(parts, state.phase, state.index, state.anchor, 1) != null,
    voiceId: voiceSelection,
    voices: voiceOptions,
    showIosVoiceHint,
    select,
    start,
    stop,
    previous,
    next,
    cycleRate,
    chooseVoice,
    previewVoice,
  }
}

