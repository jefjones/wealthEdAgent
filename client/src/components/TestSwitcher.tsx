import { Check, ChevronDown } from 'lucide-react'
import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { tests } from '../content/catalog.ts'
import { peekStudyState } from '../study/stateSync.ts'
import { switchTestTarget, testShortName } from '../study/testSwitch.ts'

/** Small test name under the site title. Opens a list of tests; picking one keeps the current feature. */
export function TestSwitcher({ testId }: { testId: string }) {
  const location = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const button = useRef<HTMLButtonElement>(null)
  const list = useRef<HTMLUListElement>(null)
  const wrap = useRef<HTMLDivElement>(null)
  const listId = useId()
  const currentIndex = Math.max(0, tests.findIndex((test) => test.id === testId))

  useEffect(() => {
    if (!open) return
    list.current?.focus()
    function onDown(event: PointerEvent) {
      if (wrap.current && !wrap.current.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('pointerdown', onDown)
    return () => document.removeEventListener('pointerdown', onDown)
  }, [open])

  function close(refocus: boolean) {
    setOpen(false)
    if (refocus) button.current?.focus()
  }

  function pick(index: number) {
    const target = tests[index]
    close(true)
    if (!target || target.id === testId) return
    const next = switchTestTarget(location.pathname, target.id, peekStudyState(testId).search?.query ?? '')
    navigate(next.to, next.state ? { state: next.state } : undefined)
  }

  function openList() {
    setActive(currentIndex)
    setOpen(true)
  }

  function onListKey(event: KeyboardEvent<HTMLUListElement>) {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActive((index) => (index + 1) % tests.length)
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((index) => (index - 1 + tests.length) % tests.length)
    } else if (event.key === 'Home') {
      event.preventDefault()
      setActive(0)
    } else if (event.key === 'End') {
      event.preventDefault()
      setActive(tests.length - 1)
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      pick(active)
    } else if (event.key === 'Escape') {
      event.preventDefault()
      close(true)
    } else if (event.key === 'Tab') {
      close(false)
    }
  }

  return (
    <div ref={wrap} className="relative">
      <button
        ref={button}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        aria-label={`Current test: ${testShortName(testId)}. Change test`}
        onClick={() => (open ? close(false) : openList())}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            event.preventDefault()
            openList()
          }
        }}
        className="-ml-2 inline-flex min-h-9 items-center gap-1 rounded-full px-2 text-sm font-semibold text-white/90 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
      >
        <span>{testShortName(testId)}</span>
        <ChevronDown size={16} aria-hidden className={open ? 'rotate-180' : undefined} />
      </button>
      {open ? (
        <ul
          ref={list}
          id={listId}
          role="listbox"
          tabIndex={-1}
          aria-label="Choose a test"
          aria-activedescendant={`${listId}-${active}`}
          onKeyDown={onListKey}
          className="absolute top-full left-0 z-50 mt-1 w-64 max-w-[calc(100vw-2rem)] rounded-xl border border-[#d5e2f0] bg-white py-1 text-[#14375f] shadow-lg focus:outline-none"
        >
          {tests.map((test, index) => {
            const current = test.id === testId
            return (
              <li
                key={test.id}
                id={`${listId}-${index}`}
                role="option"
                aria-selected={current}
                aria-current={current ? 'true' : undefined}
                onPointerEnter={() => setActive(index)}
                onClick={() => pick(index)}
                className={`flex min-h-11 cursor-pointer items-center gap-2 px-3 text-sm font-semibold ${index === active ? 'bg-[#e7f0fa]' : ''}`}
              >
                <span className="inline-flex w-4 justify-center text-[#2a6cb5]">{current ? <Check size={16} aria-hidden /> : null}</span>
                {testShortName(test.id)}
              </li>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}