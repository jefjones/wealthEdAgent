import { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import {
  AUTO_VOICE_ID,
  END_OF_COURSE_ANNOUNCEMENT,
  NARRATION_PITCH,
  VOICE_PREVIEW_TEXT,
  initialPlayerState,
  isIosWebKitVoiceHost,
  nextNarrationRate,
  playerReducer,
  rankNarrationVoices,
  readAutoContinue,
  readVoicePreference,
  resolveNarrationVoice,
  speechSynthesisAvailable,
  narrationJump,
  startPartIndex,
  stepDestination,
  voiceStorageId,
  writeAutoContinue,
  writeVoicePreference,
  type NarrationRate,
  type SpeechPart,
  type VoiceChoice,
} from './narrator.ts'

/**
 * One speechSynthesis queue shared by section reading and highlight reading.
 * Utterances are queued inside the click that starts them so iOS keeps the
 * user gesture. Auto-continue queues the next section from the last
 * utterance's onend and does not call cancel() between sections, so Safari
 * and Chrome on iPhone keep the gesture. The queue is cancelled on stop, a
 * manual scope change, unmount, pagehide, and when the page is hidden.
 */

export type NarrationAdvance = {
  action: 'advance'
  /** Scope value the screen will pass on the next render. Must match useNarration's scope. */
  scope: string
  announcement: string
  parts: readonly SpeechPart[]
  /** Navigate only after the next utterances are already queued. */
  commit: () => void
}

export type NarrationContinuation = { action: 'stop' } | { action: 'end'; announcement: string } | NarrationAdvance

type Spoken = {
  text: string
  /** Part index in the section. Null speaks without moving the sentence highlight. */
  index: number | null
}

function spokenParts(parts: readonly SpeechPart[], startIndex: number): Spoken[] {
  return parts.slice(startIndex).map((part, offset) => ({
    text: part.speak,
    index: startIndex + offset,
  }))
}
function choiceFrom(voice: SpeechSynthesisVoice): VoiceChoice {
  return { lang: voice.lang, name: voice.name, default: voice.default, voiceURI: voice.voiceURI }
}

function nativeVoice(catalog: readonly SpeechSynthesisVoice[], savedId: string, voicesReady: boolean) {
  const resolved = resolveNarrationVoice(catalog.map(choiceFrom), savedId, voicesReady)
  if (!resolved.voice) return null
  const id = voiceStorageId(resolved.voice)
  return catalog.find((voice) => voiceStorageId(choiceFrom(voice)) === id) ?? null
}

export function useNarration(
  scope: string,
  parts: readonly SpeechPart[],
  follow?: { afterSection: () => NarrationContinuation },
) {
  const [state, dispatch] = useReducer(playerReducer, undefined, initialPlayerState)
  const supported =
    typeof window !== 'undefined' && speechSynthesisAvailable(window as Window & typeof globalThis)
  const [savedVoiceId, setSavedVoiceId] = useState(() =>
    typeof window === 'undefined' ? AUTO_VOICE_ID : readVoicePreference(window.localStorage),
  )
  const [autoContinue, setAutoContinueState] = useState(() =>
    typeof window === 'undefined' ? true : readAutoContinue(window.localStorage),
  )
  const [catalog, setCatalog] = useState<SpeechSynthesisVoice[]>([])
  const [voicesReady, setVoicesReady] = useState(false)
  const tokenRef = useRef(0)
  const stateRef = useRef(state)
  stateRef.current = state
  const partsRef = useRef(parts)
  partsRef.current = parts
  const followRef = useRef(follow)
  followRef.current = follow
  const autoContinueRef = useRef(autoContinue)
  autoContinueRef.current = autoContinue
  /** Set to the destination scope before navigating so that change does not cancel speech. */
  const handoffScopeRef = useRef<string | null>(null)
  /** The next parts update belongs to a section we already started speaking. */
  const adoptPartsRef = useRef(false)
  const chainingRef = useRef(false)
  const voiceRef = useRef<SpeechSynthesisVoice | null>(null)
  const appliedVoiceRef = useRef<string | null>(null)
  const catalogRef = useRef(catalog)
  catalogRef.current = catalog
  const readyRef = useRef(voicesReady)
  readyRef.current = voicesReady

  const enqueue = useCallback((token: number, items: readonly Spoken[], rate: NarrationRate, onDone: () => void) => {
    const synth = window.speechSynthesis
    if (!synth || items.length === 0) return false
    const voice = voiceRef.current
    items.forEach((item, offset) => {
      const utter = new SpeechSynthesisUtterance(item.text)
      utter.rate = rate
      utter.pitch = NARRATION_PITCH
      utter.lang = voice?.lang || 'en-US'
      if (voice) utter.voice = voice
      utter.onstart = () => {
        if (tokenRef.current !== token) return
        if (item.index != null) dispatch({ type: 'tick', index: item.index })
      }
      utter.onend = () => {
        if (tokenRef.current !== token) return
        if (offset === items.length - 1) onDone()
      }
      utter.onerror = (event) => {
        if (tokenRef.current !== token) return
        if (event.error === 'interrupted' || event.error === 'canceled') return
        dispatch({ type: 'stop' })
      }
      synth.speak(utter)
    })
    synth.resume()
    return true
  }, [])

  const continueAfterSection = useCallback(
    (token: number) => {
      if (tokenRef.current !== token || chainingRef.current) return
      const followUp = followRef.current
      if (!autoContinueRef.current || !followUp) {
        dispatch({ type: 'finish' })
        return
      }
      const decision = followUp.afterSection()
      const rate = stateRef.current.rate
      if (decision.action === 'stop') {
        dispatch({ type: 'finish' })
        return
      }
      if (decision.action === 'end') {
        const queued = enqueue(
          token,
          [{ text: decision.announcement || END_OF_COURSE_ANNOUNCEMENT, index: null }],
          rate,
          () => {
            if (tokenRef.current !== token) return
            dispatch({ type: 'finish' })
          },
        )
        if (!queued) dispatch({ type: 'finish' })
        return
      }
      const items: Spoken[] = [
        { text: decision.announcement, index: null },
        ...spokenParts(decision.parts, 0),
      ].filter((item) => item.text.trim().length > 0)
      if (items.length === 0) {
        dispatch({ type: 'finish' })
        return
      }
      // Queue from this onend before navigation. cancel() or a timer here drops
      // the iOS user-activation chain, and the next section would stay silent.
      chainingRef.current = true
      handoffScopeRef.current = decision.scope
      adoptPartsRef.current = true
      dispatch({ type: 'bridge' })
      const queued = enqueue(token, items, rate, () => continueAfterSection(token))
      chainingRef.current = false
      if (!queued) {
        handoffScopeRef.current = null
        adoptPartsRef.current = false
        dispatch({ type: 'finish' })
        return
      }
      decision.commit()
    },
    [enqueue],
  )

  const speakFrom = useCallback(
    (index: number, rate: NarrationRate) => {
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
      enqueue(token, spokenParts(list, index), rate, () => continueAfterSection(token))
    },
    [continueAfterSection, enqueue],
  )

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
    if (handoffScopeRef.current === scope) {
      handoffScopeRef.current = null
      return () => {
        if (handoffScopeRef.current) return
        tokenRef.current += 1
        window.speechSynthesis?.cancel()
      }
    }
    handoffScopeRef.current = null
    tokenRef.current += 1
    window.speechSynthesis?.cancel()
    dispatch({ type: 'reset' })
    return () => {
      if (handoffScopeRef.current) return
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
    const adopt = adoptPartsRef.current
    adoptPartsRef.current = false
    if (signatureRef.current == null) {
      signatureRef.current = signature
      return
    }
    if (signatureRef.current === signature) return
    signatureRef.current = signature
    if (adopt || stateRef.current.phase !== 'speaking') return
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

  const setAutoContinue = useCallback((enabled: boolean) => {
    autoContinueRef.current = enabled
    if (typeof window !== 'undefined') writeAutoContinue(window.localStorage, enabled)
    setAutoContinueState(enabled)
  }, [])

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
    autoContinue,
    setAutoContinue,
  }
}

