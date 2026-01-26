import { useEffect, useMemo, useState } from 'react'

import { THEME_TYPE } from '@/data/constants'

type Theme = (typeof THEME_TYPE)[keyof typeof THEME_TYPE]

function getInitialTheme(): Theme {
  const stored = localStorage.getItem('theme')
  if (stored === THEME_TYPE.light || stored === THEME_TYPE.dark) return stored

  return THEME_TYPE.light
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme())

  useEffect(() => {
    const root = document.documentElement
    if (theme === THEME_TYPE.dark) root.classList.add(THEME_TYPE.dark)
    else root.classList.remove(THEME_TYPE.dark)

    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = useMemo(
    () => () =>
      setTheme((theme) => (theme === THEME_TYPE.dark ? THEME_TYPE.light : THEME_TYPE.dark)),
    [],
  )

  return { theme, setTheme, toggle }
}
