import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import {
  createHighlight,
  deleteHighlight,
  errorText,
  listHighlights,
  type Highlight,
  type HighlightInput,
} from '../api/client.ts'
import { useAuth } from '../auth/AuthContext.tsx'

type HighlightValue = {
  highlights: Highlight[]
  ready: boolean
  error: string
  addHighlight: (input: HighlightInput) => Promise<Highlight>
  removeHighlight: (highlightId: string) => Promise<void>
}

const HighlightContext = createContext<HighlightValue | null>(null)

export function HighlightProvider({ children }: { children: ReactNode }) {
  const { person } = useAuth()
  const [highlights, setHighlights] = useState<Highlight[]>([])
  const [ready, setReady] = useState(false)
  const [error, setError] = useState('')

  const reload = useCallback(async () => {
    if (!person) {
      setHighlights([])
      setReady(true)
      setError('')
      return
    }
    const result = await listHighlights()
    setHighlights(result.highlights)
    setError('')
  }, [person])

  useEffect(() => {
    let cancel = false
    setReady(false)
    reload()
      .catch((cause: unknown) => {
        if (!cancel) setError(errorText(cause, 'Could not load highlights.'))
      })
      .finally(() => {
        if (!cancel) setReady(true)
      })
    return () => {
      cancel = true
    }
  }, [reload])

  const addHighlight = useCallback(async (input: HighlightInput) => {
    const result = await createHighlight(input)
    setHighlights((current) =>
      current.some((row) => row.highlightId === result.highlight.highlightId) ? current : [...current, result.highlight],
    )
    setError('')
    return result.highlight
  }, [])

  const removeHighlight = useCallback(async (highlightId: string) => {
    await deleteHighlight(highlightId)
    setHighlights((current) => current.filter((row) => row.highlightId !== highlightId))
    setError('')
  }, [])

  const value = useMemo(
    () => ({ highlights, ready, error, addHighlight, removeHighlight }),
    [addHighlight, error, highlights, ready, removeHighlight],
  )

  return <HighlightContext.Provider value={value}>{children}</HighlightContext.Provider>
}

export function useHighlights() {
  const value = useContext(HighlightContext)
  if (!value) throw new Error('useHighlights must be used inside HighlightProvider.')
  return value
}
