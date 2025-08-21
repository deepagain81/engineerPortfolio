import { motion } from 'framer-motion'
import React from 'react'
export default function Footer({ cfg }) {
  return (
    <motion.footer initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-8 border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
      <div>© {new Date().getFullYear()} {cfg.profile.name}. Built with React + Tailwind.</div>
    </motion.footer>
  )
}
