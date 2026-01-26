import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

import { BUTTON_VARIANT } from '@/data'

type Variant = keyof typeof BUTTON_VARIANT

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  variant?: Variant
  children: ReactNode
}

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  children: ReactNode
}

const base =
  'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition ' +
  'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg'

const variants: Record<Variant, string> = {
  [BUTTON_VARIANT.primary]:
    'bg-accent text-accent-contrast hover:opacity-90 ' +
    'focus-visible:ring-2 focus-visible:ring-accent ring-offset-2 ring-offset-bg',
  [BUTTON_VARIANT.secondary]:
    'bg-surface text-fg border border-border hover:bg-fg/5 ' +
    'focus-visible:ring-2 focus-visible:ring-accent ring-offset-2 ring-offset-bg',
  [BUTTON_VARIANT.ghost]:
    'bg-transparent text-fg hover:bg-fg/5 ' +
    'focus-visible:ring-2 focus-visible:ring-accent ring-offset-2 ring-offset-bg',
}

export function ButtonLink({
  variant = BUTTON_VARIANT.primary,
  className = '',
  ...props
}: AnchorProps) {
  return <a className={`${base} ${variants[variant]} ${className}`} {...props} />
}

export function Button({
  variant = BUTTON_VARIANT.primary,
  className = '',
  ...props
}: NativeButtonProps) {
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}
