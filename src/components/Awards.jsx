import { motion } from 'framer-motion'
import React from 'react'
import Section from '@/components/Section'
export default function Awards({ items }) {
  return (
    <Section id="awards" title="Awards">
      <div className="grid gap-3 md:grid-cols-2">
        {items.map((element, index) => (
          <motion.div key={index} className="rounded-xl border border-muted/30 p-4" whileHover={{ scale: 1.01, translateY: -2 }} whileTap={{ scale: 0.995 }}>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">{element.title}</div>
                <div className="text-sm text-muted-foreground">{element.org}</div>
              </div>
              <div className="text-sm text-muted-foreground">{element.year}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
