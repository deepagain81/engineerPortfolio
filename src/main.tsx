import '@/index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from '@/App.tsx'

if (import.meta.env.DEV) {
  void (async () => {
    const axe = (await import('@axe-core/react')).default
    const React = await import('react')
    const ReactDOM = await import('react-dom')
    axe(React, ReactDOM, 1000)
  })()
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
