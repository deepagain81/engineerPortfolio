import { motion } from 'framer-motion'
import React from 'react'
import ThemeToggle from '@/components/common/ThemeToggle'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

export default function Header({ cfg }) {
  return (
    <div className="sticky top-0 z-40 border-b border-accent/50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-3 md:p-4">
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a href="#top" className="font-semibold tracking-tight text-accent">
            {cfg.meta.siteTitle}
          </a>
        </div>
        <nav className="hidden gap-6 text-sm md:flex">
          {[
            ['About', 'about'],
            ['Experience', 'experience'],
            ['Projects', 'projects'],
            ['Skills', 'skills'],
            ['Awards', 'awards'],
            ['Education', 'education'],
            ['Testimonials', 'testimonials'],
            ['Blog', 'blog'],
            ['Contact', 'contact'],
          ].map(([label, id]) => (
            <motion.a key={id} href={`#${id}`} className="text-muted-foreground hover:text-accent">
              {label}
            </motion.a>
          ))}
        </nav>
        {cfg.profile.resumeUrl && (
          <Button asChild size="sm" variant="default" className="bg-accent text-[rgb(var(--accent-foreground))] hover:opacity-90">
            <a href={cfg.profile.resumeUrl} target="_blank" rel="noreferrer">
              <Download className="mr-2 h-4 w-4" /> Resume
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}
