import { useEffect } from 'react'
import { useAuth } from '../auth/AuthContext.tsx'
import { findCourseSection } from '../content/catalog.ts'
import { resumeEntries } from '../study/draws.ts'
import { AUTO_CONTINUE_STORAGE_KEY, readVoicePreference } from '../study/narrator.ts'
import { flushStudyState, loadStudyState, migrateStudyState, setStateSyncPerson } from '../study/stateSync.ts'
import { GLOBAL_STATE_ID } from '../study/studyState.ts'

function deviceVoices() {
  try {
    return window.speechSynthesis?.getVoices().map((voice) => ({ name: voice.name, lang: voice.lang, voiceURI: voice.voiceURI })) ?? []
  } catch {
    return []
  }
}

/** Loads the reader's saved state at app start, uploads old browser-only data once, and flushes on hide. Renders nothing. */
export function StateBridge() {
  const { person } = useAuth()
  const personId = person?.personId ?? null

  useEffect(() => {
    setStateSyncPerson(personId)
    if (!personId) return
    const id = personId
    void loadStudyState(GLOBAL_STATE_ID).then(() => {
      const run = () =>
        migrateStudyState({
          readResume: () => resumeEntries(id),
          chapterOf: (testId, sectionId) => findCourseSection(testId, sectionId)?.chapter.id ?? null,
          readVoiceId: () => readVoicePreference(window.localStorage),
          readAutoContinue: () => {
            const raw = window.localStorage.getItem(AUTO_CONTINUE_STORAGE_KEY)
            return raw === null ? null : raw !== 'off'
          },
          voices: deviceVoices,
        })
      // Voice names load late on some browsers; give them a moment so the language can be looked up.
      const synth = window.speechSynthesis
      if (synth && synth.getVoices().length === 0) window.setTimeout(() => void run(), 1500)
      else void run()
    })
  }, [personId])

  useEffect(() => {
    const onVisibility = () => {
      if (document.visibilityState === 'hidden') flushStudyState(true)
    }
    const onPageHide = () => flushStudyState(true)
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('pagehide', onPageHide)
    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pagehide', onPageHide)
    }
  }, [])

  return null
}
