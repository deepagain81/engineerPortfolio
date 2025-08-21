import React, { forwardRef } from 'react'
function cx(...cls){return cls.filter(Boolean).join(' ')}
const base = 'inline-flex items-center justify-center rounded-2xl px-3 py-2 text-sm transition border'
const variants = {
  default: 'bg-accent text-[rgb(var(--accent-foreground))] border-transparent hover:opacity-90',
  outline: 'bg-transparent border-border hover:bg-[rgb(var(--accent)/0.08)]',
  ghost: 'border-transparent hover:bg-[rgb(var(--accent)/0.08)]',
  secondary: 'bg-accent text-[rgb(var(--accent-foreground))] border-transparent hover:opacity-90',
}
export const Button = forwardRef(({ asChild, variant='default', className='', ...props }, ref) => {
  if (asChild && props.children && React.isValidElement(props.children)) {
    return React.cloneElement(props.children, {
      ref,
      className: cx(base, variants[variant], className, props.children.props.className)
    })
  }
  return <button ref={ref} className={cx(base, variants[variant], className)} {...props} />
})
