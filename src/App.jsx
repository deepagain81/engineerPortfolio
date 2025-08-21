import { motion } from 'framer-motion'
import React from 'react'
import { CONFIG } from '@/config'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Awards from '@/components/Awards'
import Education from '@/components/Education'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function App() {
  const cfg = CONFIG
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header cfg={cfg} />
      <motion.main className="mx-auto grid max-w-6xl gap-6 p-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <Hero cfg={cfg} />
        <Experience items={cfg.experience} />
        <Projects items={cfg.projects} />
        <Skills groups={cfg.skills} />
        <Awards items={cfg.awards} />
        <Education items={cfg.education} />
        <Testimonials items={cfg.testimonials} />
        <Blog posts={cfg.blog} />
        <Contact cfg={cfg} />
      </motion.main>
      <Footer cfg={cfg} />
    </div>
  )
}
