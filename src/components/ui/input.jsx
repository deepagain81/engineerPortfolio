import React from 'react'
export const Input = (props) => (
  <input {...props} className={`h-9 w-full rounded-xl border border-border bg-transparent px-3 text-sm outline-none focus:ring-2 focus:ring-[rgb(var(--accent)/0.3)] ${props.className||''}`} />
)
