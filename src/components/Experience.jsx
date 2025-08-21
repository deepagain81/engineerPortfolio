import { motion } from 'framer-motion'
import React, { useMemo, useState, useEffect } from 'react'
import Section from '@/components/Section'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Filter, ExternalLink } from 'lucide-react'
import { formatRange } from '@/utils/format'
import storage from '@/utils/storage'

export default function Experience({ items }) {
  const [q, setQ] = useState(storage.get('pf-exp-q', ''))
  useEffect(() => { storage.set('pf-exp-q', q) }, [q])

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return items
    return items.filter((e) => [e.company, e.role, e.location, ...(e.tags || [])].filter(Boolean).some((t) => t.toLowerCase().includes(term)))
  }, [q, items])
  const tags = Array.from(new Set(items.flatMap((i) => i.tags || [])))

  return (
    <Section id="experience" title="Experience" icon={Filter} right={<Input placeholder="Search roles, company…" value={q} onChange={(e) => setQ(e.target.value)} className="w-56" /> }>
      <div className="flex flex-wrap gap-2 pb-2">
        <Badge variant="outline" className="inline-flex items-center gap-1"><Filter className="h-3 w-3" /> Tags</Badge>
        {tags.map((t) => (<span key={t} className="inline-block"><Badge onClick={() => setQ(t)} className="cursor-pointer">{t}</Badge></span>))}
      </div>
      <div className="grid gap-3">
        {filtered.map((e, i) => (
          <Card key={`${e.company}-${i}`} className="border-muted/30">
            <CardContent className="p-4">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{e.role} · {e.company}</h3>
                  <p className="text-sm text-muted-foreground">{formatRange(e.start, e.end)} · {e.location}</p>
                  <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                    {e.bullets.map((b, idx) => (<li key={idx}>{b}</li>))}
                  </ul>
                  {e.tags?.length ? (<div className="mt-3 flex flex-wrap gap-2">{e.tags.map((t) => <motion.span key={t} whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}><Badge variant="secondary">{t}</Badge></motion.span>)}</div>) : null}
                </div>
                <div className="mt-2 flex gap-2 md:mt-0">
                  {(e.links || []).map((l) => (
                    <Button key={l.href} asChild size="sm" variant="outline">
                      <a href={l.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" /> {l.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
