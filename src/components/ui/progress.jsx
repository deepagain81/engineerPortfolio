import React from 'react'
export const Progress = ({ value=0 }) => (
  <div className="h-2 w-full overflow-hidden rounded-full bg-[rgb(0_0_0/0.08)]">
    <div className="h-full bg-accent" style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
  </div>
)
