import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string
  children: ReactNode
}

export function IconButton({ label, className = '', children, ...props }: Props) {
  return (
    <button
      aria-label={label}
      className={[
        'inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2',
        'border border-border bg-surface text-fg hover:text-fg hover:bg-fg/5',
        'transition focus:outline-none focus-visible:ring-2 focus-visible:ring-accent',
        'ring-offset-2 ring-offset-bg',
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
