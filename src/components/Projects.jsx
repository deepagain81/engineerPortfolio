import { motion } from 'framer-motion'
import React, { useMemo, useState, useEffect } from 'react'
import Section from '@/components/Section'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { ExternalLink, Search } from 'lucide-react'
import storage from '@/utils/storage'

export default function Projects({ items }) {
  const [q, setQ] = useState(storage.get('pf-proj-q', ''))
  const [active, setActive] = useState(storage.get('pf-proj-active', 'All'))
  useEffect(() => { storage.set('pf-proj-q', q) }, [q])
  useEffect(() => { storage.set('pf-proj-active', active) }, [active])

  const allTags = useMemo(() => Array.from(new Set(items.flatMap((p) => p.tags || []))), [items])
  const visible = useMemo(() => {
    const term = q.trim().toLowerCase()
    return items.filter((p) => {
      const matchesTag = active === 'All' || (p.tags || []).includes(active)
      const hay = [p.title, p.description, ...(p.tags || [])].join(' ').toLowerCase()
      return matchesTag && (!term || hay.includes(term))
    })
  }, [items, q, active])

  return (
    <Section id="projects" title="Projects" icon={Search} right={<div className="flex gap-2"><Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects…" className="w-48" /></div>}>
      <div className="mb-3 flex flex-wrap gap-2">
        <Button size="sm" variant={active === 'All' ? 'default' : 'outline'} onClick={() => setActive('All')}>
          <Search className="mr-2 h-4 w-4" /> All
        </Button>
        {allTags.map((t) => (
          <Button key={t} size="sm" variant={active === t ? 'default' : 'outline'} onClick={() => setActive(t)}>{t}</Button>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {visible.map((p, i) => (
          <Card key={`${p.title}-${i}`} className="border-muted/30">
            <CardHeader><CardTitle className="text-lg">{p.title}</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{p.description}</p>
              {p.tags?.length ? (<div className="mt-3 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="rounded-full border px-2 py-0.5 text-xs">{t}</span>)}</div>) : null}
              <div className="mt-4 flex flex-wrap gap-2">
                {(p.links || []).map((l) => (
                  <Button key={l.href} asChild size="sm" variant="outline">
                    <a href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" /> {l.label}
                    </a>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
