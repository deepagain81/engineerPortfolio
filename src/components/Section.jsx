import { motion } from 'framer-motion'
import React from 'react'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
export default function Section({ id, title, icon: Icon, right, children }) {
  return (
    <motion.section id={id} className="scroll-mt-24" initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, ease: "easeOut" }}>
      <Card className="border-muted/40 bg-background/50 backdrop-blur">
        <CardHeader className="flex items-center justify-between gap-2 md:flex-row md:items-center">
          <div className="flex items-center gap-2">
            {Icon ? <Icon className="h-5 w-5" /> : null}
            <CardTitle className="text-xl md:text-2xl">{title}</CardTitle>
          </div>
          <div>{right}</div>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </motion.section>
  )
}
