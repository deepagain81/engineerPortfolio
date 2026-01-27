import { Download, Mail, Moon, Sun } from 'lucide-react'
import { ComponentType } from 'react'
import { SiGithub, SiLinkedin } from 'react-icons/si'

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>

export const iconMap = {
  download: Download as unknown as IconComponent,
  mail: Mail as unknown as IconComponent,
  sun: Sun as unknown as IconComponent,
  moon: Moon as unknown as IconComponent,
  // brand Icons from react-icons
  github: SiGithub as IconComponent,
  linkedin: SiLinkedin as IconComponent,
} as const

export type IconKey = keyof typeof iconMap
