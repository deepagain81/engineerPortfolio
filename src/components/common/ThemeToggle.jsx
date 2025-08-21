import React from 'react'
import { Moon, Sun, Star } from 'lucide-react'
import useTheme from '@/hooks/useTheme'
import { Button } from '@/components/ui/button'

export default function ThemeToggle() {
  const { mode, cycle } = useTheme('system')
  const Icon = mode === 'system' ? Star : mode === 'light' ? Sun : Moon
  return (
    <Button size="sm" variant="ghost" onClick={cycle} aria-label="Toggle theme">
      <Icon className="h-4 w-4" />
    </Button>
  )
}
