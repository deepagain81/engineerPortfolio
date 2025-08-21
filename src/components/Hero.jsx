import React from 'react'
import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Mail, MapPin, Globe } from 'lucide-react'

const SocialIcon = ({ Icon }) => <Icon className="h-4 w-4" />

export default function Hero({ cfg }) {
  const initials = cfg.profile.name.split(' ').map((n) => n[0]).slice(0, 2).join('')
  return (
    <div id="about" className="mx-auto max-w-6xl px-4 pt-10 md:pt-16">
      <div className="grid items-center gap-6 md:grid-cols-[auto_1fr]">
        <Avatar className="h-24 w-24 md:h-28 md:w-28">
          <AvatarImage src={cfg.profile.avatarUrl} alt={`${cfg.profile.name} avatar`} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <motion.h1 whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.995 }} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-2xl font-bold leading-tight md:text-4xl">
            {cfg.profile.name}
          </motion.h1>
          <p className="mt-1 text-base text-muted-foreground md:text-lg">
            {cfg.profile.role} · {cfg.profile.availability}
          </p>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" /> {cfg.profile.location}</span>
            <a className="inline-flex items-center gap-1 hover:underline" href={`mailto:${cfg.profile.email}`}><Mail className="h-4 w-4" /> {cfg.profile.email}</a>
            <a className="inline-flex items-center gap-1 hover:underline" href={cfg.profile.website} target="_blank" rel="noreferrer"><Globe className="h-4 w-4" /> {cfg.profile.website.replace(/^https?:\/\//, '')}</a>
          </div>
          <p className="mt-4 max-w-3xl text-muted-foreground">{cfg.profile.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {cfg.socials.map((s) => (
              <Button key={s.label} asChild size="sm" variant="outline" className="rounded-full">
                <a href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  <SocialIcon Icon={s.icon} /> {s.label}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
