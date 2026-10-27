/** @vitest-environment jsdom */
import { act, createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { describe, expect, it } from 'vitest'
import { MoreMenu } from './NarrationBar.tsx'

;(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true

async function setup() {
  const host = document.createElement('div')
  const outside = document.createElement('p')
  document.body.append(host, outside)
  const root = createRoot(host)
  await act(async () => {
    root.render(createElement(MoreMenu, { placement: 'up', mobileBarHeight: 60, children: createElement('span', null, 'Speed') }))
  })
  const button = host.querySelector('button')!
  return { host, outside, button, done: () => { act(() => root.unmount()); host.remove(); outside.remove() } }
}

describe('read-aloud More menu', () => {
  it('opens from the button and closes on Escape with focus back on the button', async () => {
    const { host, button, done } = await setup()
    expect(button.getAttribute('aria-haspopup')).toBe('dialog')
    expect(button.getAttribute('aria-expanded')).toBe('false')
    await act(async () => button.click())
    expect(button.getAttribute('aria-expanded')).toBe('true')
    const panel = host.querySelector('[role="dialog"]') as HTMLElement
    expect(panel.textContent).toBe('Speed')
    expect(panel.style.bottom).toBe('68px')
    await act(async () => document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' })))
    expect(host.querySelector('[role="dialog"]')).toBeNull()
    expect(document.activeElement).toBe(button)
    done()
  })

  it('closes on a tap outside but not on a tap inside', async () => {
    const { host, outside, button, done } = await setup()
    await act(async () => button.click())
    const panel = host.querySelector('[role="dialog"]')!
    await act(async () => panel.dispatchEvent(new Event('pointerdown', { bubbles: true })))
    expect(host.querySelector('[role="dialog"]')).not.toBeNull()
    await act(async () => outside.dispatchEvent(new Event('pointerdown', { bubbles: true })))
    expect(host.querySelector('[role="dialog"]')).toBeNull()
    done()
  })
})