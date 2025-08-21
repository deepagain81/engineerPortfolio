import React from 'react'
export const Badge = ({ variant='secondary', className='', ...p }) => (
  <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs ${className}`} {...p} />
)
