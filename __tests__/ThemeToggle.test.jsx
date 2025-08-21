import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ThemeToggle from '@/components/common/ThemeToggle'

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
