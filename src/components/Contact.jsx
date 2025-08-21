import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import Section from '@/components/Section'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Download } from 'lucide-react'

export default function Contact({ cfg }) {
  return (
    <Section id="contact" title="Contact">
      <Tabs defaultValue="say-hi" className="w-full">
        <TabsList>
          <TabsTrigger value="say-hi">Say hello</TabsTrigger>
          <TabsTrigger value="links">Links</TabsTrigger>
        </TabsList>
        <TabsContent value="say-hi" className="mt-4"><motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <Card className="border-muted/30">
            <CardContent className="p-4">
              <p className="text-sm text-muted-foreground">The quickest way to reach me is email. I respond within 1–2 business days.</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Button asChild>
                  <a href={`mailto:${cfg.profile.email}`}><Mail className="mr-2 h-4 w-4" /> Email me</a>
                </Button>
                {cfg.profile.resumeUrl && (
                  <Button asChild variant="outline">
                    <a href={cfg.profile.resumeUrl} target="_blank" rel="noreferrer"><Download className="mr-2 h-4 w-4" /> Resume</a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div></TabsContent>
        <TabsContent value="links" className="mt-4"><motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <div className="flex flex-wrap gap-2">
            {cfg.socials.map((s) => (
              <Button key={s.href} asChild variant="outline" className="rounded-full">
                <a href={s.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                  <s.icon className="h-4 w-4" /> {s.label}
                </a>
              </Button>
            ))}
          </div>
        </motion.div></TabsContent>
      </Tabs>
    </Section>
  )
}
