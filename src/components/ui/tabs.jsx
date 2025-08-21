import { motion } from 'framer-motion'
import React, { createContext, useContext, useState } from 'react'
const Ctx = createContext(null)
export const Tabs = ({ defaultValue, children, className='' }) => {
  const [value, setValue] = useState(defaultValue)
  return <Ctx.Provider value={{ value, setValue }}><div className={className}>{children}</div></Ctx.Provider>
}
export const TabsList = ({ children }) => <div className="inline-flex rounded-xl border border-border p-1">{children}</div>
export const TabsTrigger = ({ value, children }) => {
  const { value: v, setValue } = useContext(Ctx)
  const active = v === value
  return (
    <button onClick={() => setValue(value)} className={`px-3 py-1.5 text-sm rounded-lg transition ${active ? 'bg-accent text-[rgb(var(--accent-foreground))]' : 'hover:bg-[rgb(var(--accent)/0.08)]'}`}>
      {children}
    </button>
  )
}
export const TabsContent = ({ value, children, className='' }) => {
  const { value: v } = useContext(Ctx)
  if (v !== value) return null
  return <div className={className}>{children}</div>
}
