import React from 'react'
import Section from '@/components/Section'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'

export default function Skills({ groups }) {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 md:grid-cols-3">
        {groups.map((g) => (
          <Card key={g.category} className="border-muted/30">
            <CardHeader><CardTitle className="text-base">{g.category}</CardTitle></CardHeader>
            <CardContent className="space-y-3">
              {g.items.map((s) => (
                <div key={s.name}>
                  <div className="mb-1 flex items-center justify-between text-sm"><span>{s.name}</span><span className="text-muted-foreground">{s.level}%</span></div>
                  <Progress value={s.level} />
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
