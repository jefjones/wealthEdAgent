/** @vitest-environment jsdom */
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { act } from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { Prose } from './Prose.tsx'
import { bodyOffsetFromDom, highlightPreview } from '../study/highlights.ts'

const text = 'Alpha line. Keep this sentence.'

function jumpsFor(ids: string[]) {
  return Object.fromEntries(
    ids.map((id, index) => [
      id,
      {
        previous: index === 0 ? null : { href: `/study/s1#h-${ids[index - 1]}`, label: 'Previous highlight' },
        next: index === ids.length - 1 ? null : { href: `/study/s1#h-${ids[index + 1]}`, label: 'Next highlight' },
      },
    ]),
  )
}

async function renderProse(props: Parameters<typeof Prose>[0]) {
  const host = document.createElement('div')
  document.body.appendChild(host)
  const root = createRoot(host)
  await act(async () => {
    root.render(createElement(Prose, props))
  })
  return {
    host,
    unmount() {
      act(() => root.unmount())
      host.remove()
    },
  }
}

describe('inline highlight arrows', () => {
  beforeEach(() => {
    document.body.innerHTML = ''
  })

  it('shows disabled arrows on the first and last highlights', async () => {
    const onJump = vi.fn()
    const view = await renderProse({
      text,
      highlights: [
        { highlightId: 'h1', startOffset: 0, endOffset: 5 },
        { highlightId: 'h2', startOffset: 6, endOffset: 10 },
      ],
      jumps: jumpsFor(['h1', 'h2']),
      onJump,
      onDelete: () => {},
    })
    const previous = view.host.querySelector('[aria-label="No earlier highlight"]')
    const next = view.host.querySelector('[aria-label="No later highlight"]')
    expect(previous?.getAttribute('aria-disabled')).toBe('true')
    expect(previous?.getAttribute('title')).toBe('No earlier highlight')
    expect(next?.getAttribute('aria-disabled')).toBe('true')
    expect(next?.getAttribute('title')).toBe('No later highlight')
    expect((previous as HTMLButtonElement).disabled).toBe(false)
    expect((next as HTMLButtonElement).disabled).toBe(false)
    const forward = view.host.querySelector('[aria-label="Next highlight"]') as HTMLButtonElement
    const back = view.host.querySelector('[aria-label="Previous highlight"]') as HTMLButtonElement
    expect(forward).toBeTruthy()
    expect(back).toBeTruthy()
    forward.click()
    expect(onJump).toHaveBeenCalledWith('/study/s1#h-h2')
    previous?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    expect(onJump).toHaveBeenCalledTimes(1)
    const marks = [...view.host.querySelectorAll('mark')].map((mark) => mark.textContent)
    expect(marks).toEqual(['Alpha', 'line'])
    expect(view.host.querySelector('#h-h1')?.parentElement?.previousElementSibling?.getAttribute('aria-label')).toBe(
      'No earlier highlight',
    )
    expect(view.host.querySelector('#h-h2')?.parentElement?.nextElementSibling?.getAttribute('aria-label')).toBe(
      'No later highlight',
    )
    view.unmount()
  })

  it('leaves body offsets and previews unchanged when arrow chrome sits in the run', async () => {
    const view = await renderProse({
      text,
      highlights: [{ highlightId: 'h1', startOffset: 0, endOffset: 5 }],
      jumps: jumpsFor(['h1']),
      onDelete: () => {},
    })
    const hosts = [...view.host.querySelectorAll('[data-start]')]
    const joined = hosts.map((node) => node.textContent ?? '').join('')
    expect(joined).toBe(text)
    expect(joined.includes('←')).toBe(false)
    expect(joined.includes('→')).toBe(false)
    expect(highlightPreview(joined).includes('←')).toBe(false)

    const prose = view.host.querySelector('div') as HTMLElement
    const mark = view.host.querySelector('mark') as HTMLElement
    const word = mark.firstChild as Text
    expect(bodyOffsetFromDom(prose, word, 0)).toBe(0)
    expect(bodyOffsetFromDom(prose, word, 5)).toBe(5)

    const arrow = view.host.querySelector('[aria-label="No earlier highlight"]') as HTMLButtonElement
    const arrowText = arrow.querySelector('span')?.firstChild as Text
    expect(bodyOffsetFromDom(prose, arrowText, 0)).toBeNull()

    const host = document.createElement('span')
    host.setAttribute('data-start', '10')
    host.append('Alpha')
    const chrome = document.createElement('button')
    chrome.setAttribute('data-chrome', '')
    chrome.textContent = '←'
    host.append(chrome)
    host.append(' line')
    prose.append(host)
    const after = host.lastChild as Text
    expect(after.textContent).toBe(' line')
    expect(bodyOffsetFromDom(prose, after, 0)).toBe(15)
    expect(bodyOffsetFromDom(prose, after, 1)).toBe(16)
    view.unmount()
  })
})
