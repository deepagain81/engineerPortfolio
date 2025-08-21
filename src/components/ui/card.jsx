import { motion } from 'framer-motion'
import React from 'react'
export const Card = ({ className = '', ...p }) => (
  <motion.div whileHover={{ scale: 1.01, translateY: -2 }} whileTap={{ scale: 0.995 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }} className={`rounded-2xl border transition-shadow hover:shadow-md ${className}`} {...p} />
)
export const CardHeader = ({ className = '', ...p }) => <div className={`p-4 ${className}`} {...p} />
export const CardTitle = ({ className = '', ...p }) => <h3 className={`font-semibold ${className}`} {...p} />
export const CardContent = ({ className = '', ...p }) => <div className={`p-4 pt-0 ${className}`} {...p} />
