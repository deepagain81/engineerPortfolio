import { THEME_LABELS, THEME_TYPE } from '@/data'

import { IconButton } from './IconButton'
import { iconMap } from './icons'
import { useTheme } from './useTheme'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const isDark = theme === THEME_TYPE.dark
  const Icon = isDark ? iconMap.sun : iconMap.moon

  return (
    <IconButton label="Toggle theme" onClick={toggle} type="button" className="px-2">
      <Icon size={18} />
      <span className="hidden text-sm sm:inline">
        {isDark ? THEME_LABELS.light : THEME_LABELS.dark}
      </span>
    </IconButton>
  )
}
