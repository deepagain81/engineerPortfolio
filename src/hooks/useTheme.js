import { useEffect, useState } from 'react'
import storage from '@/utils/storage'

export default function useTheme(defaultMode = 'system') {
  const [mode, setMode] = useState(storage.get('pf-theme', defaultMode))

  useEffect(() => {
    storage.set('pf-theme', mode)
    const root = window.document.documentElement
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = mode === 'dark' || (mode === 'system' && prefersDark)
    root.classList.toggle('dark', isDark)
  }, [mode])

  // cycle: system -> light -> dark -> system
  const cycle = () => setMode((m) => (m === 'system' ? 'light' : m === 'light' ? 'dark' : 'system'))

  return { mode, setMode, cycle }
}
