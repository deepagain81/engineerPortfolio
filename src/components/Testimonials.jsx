import { motion } from 'framer-motion'
import React from 'react'
import Section from '@/components/Section'
export default function Testimonials({ items }) {
  return (
    <Section id="testimonials" title="Testimonials">
      <div className="grid gap-3 md:grid-cols-2">
        {items.map((t, i) => (
          <motion.blockquote key={i} className="rounded-xl border border-muted/30 p-4 text-sm text-muted-foreground" whileHover={{ scale: 1.01 }}>
            “{t.quote}”
            <div className="mt-2 font-medium text-foreground">— {t.name}, {t.role}</div>
          </motion.blockquote>
        ))}
      </div>
    </Section>
  )
}
