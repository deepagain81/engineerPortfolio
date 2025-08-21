import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ThemeToggle from '@/components/common/ThemeToggle'

// mock matchMedia
window.matchMedia = jest.fn().mockImplementation((q) => ({
  matches: q.includes('prefers-color-scheme') ? true /* dark */ : false,
  media: q,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));

// Provide a root element for class toggling
beforeEach(() => {
  document.documentElement.className = ''
  localStorage.clear()
})

test('cycles system -> light -> dark -> system', () => {
  render(<ThemeToggle />)
  const btn = screen.getByRole('button', { name: /toggle theme/i })
  // initial is system (Star icon present via aria not easily asserted). We'll click and verify localStorage state.
  fireEvent.click(btn)
  expect(localStorage.getItem('pf-theme')).toBe('light')
  fireEvent.click(btn)
  expect(localStorage.getItem('pf-theme')).toBe('dark')
  fireEvent.click(btn)
  expect(localStorage.getItem('pf-theme')).toBe('system')
})
