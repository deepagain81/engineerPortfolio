import { motion } from 'framer-motion'
import React from 'react'
import Section from '@/components/Section'
import { ExternalLink } from 'lucide-react'
export default function Blog({ posts }) {
  return (
    <Section id="blog" title="Blog">
      <ul className="space-y-2">
        {posts.map((p, i) => (
          <li key={i}>
            <motion.a href={p.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline" whileHover={{ x: 2 }} whileTap={{ scale: 0.98 }}>
              <ExternalLink className="h-4 w-4" /> {p.title}
            </motion.a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
