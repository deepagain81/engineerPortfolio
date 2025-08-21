import { motion } from 'framer-motion'
import React from 'react'
import Section from '@/components/Section'
export default function Education({ items }) {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-3">
        {items.map((e, i) => (
          <motion.div key={i} className="rounded-xl border border-muted/30 p-4" whileHover={{ scale: 1.01, translateY: -2 }} whileTap={{ scale: 0.995 }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{e.school}</div>
                <div className="text-sm text-muted-foreground">{e.degree}</div>
              </div>
              <div className="text-sm text-muted-foreground">{e.start} — {e.end}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
