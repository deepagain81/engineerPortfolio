import { Github, Linkedin, Mail, Globe } from 'lucide-react'

export const CONFIG = {
  meta: { siteTitle: 'Engineer Portfolio', theme: 'system' },
  profile: {
    name: 'Deepak Chapagain',
    role: 'Software Engineer',
    location: 'Nashville, TN, USA',
    email: 'dchapagain.dev@gmail.com',
    website: 'https://example.dev',
    avatarUrl: '../assets/picofme.png',
    summary:
      'I build reliable, user-loving products with React, TypeScript, and cloud-native backends. I care about DX, performance, and elegant APIs.',
    resumeUrl: '../assets/deepakChapagainResume.pdf',
    availability: 'Open to roles & consulting',
  },
  socials: [
    { label: 'GitHub', icon: Github, href: 'https://github.com/deepagain81' },
    { label: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/dchapagain/' },
    { label: 'Website', icon: Globe, href: 'https://example.dev' },
    { label: 'Email', icon: Mail, href: 'mailto:dchapagain.dev@gmail.com' },
  ],
  skills: [
    { category: 'Frontend', items: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 50 },
      { name: 'Redux / Redux-Saga', level: 80 },
      { name: 'Tailwind', level: 85 },
    ]},
    { category: 'Backend', items: [
      { name: 'Node.js', level: 25 },
      { name: 'Java', level: 70 },
      { name: 'PostgreSQL', level: 25 },
      { name: 'REST / GraphQL', level: 80 },
    ]},
    { category: 'Cloud & DevOps', items: [
      { name: 'Azure', level: 55 },
      // { name: 'Docker', level: 80 },
      { name: 'CI/CD', level: 85 },
    ]},
  ],
  experience: [
    {
      company: 'Tractor Supply Company (TSC)',
      role: 'Software Engineer',
      start: '2024-09',
      end: 'Present',
      location: 'Brentwood, TN, USA',
      bullets: [
        'Led migration to GraphQL, Reduced over-fetching, shrank payloads, sped renders—mobile-optimized UX.',
        'Built a design system, cut UI build time by 40%.',
        'Owned performance (Core Web Vitals P95 < 2s).',
      ],
      links: [{ label: 'Product', href: 'https://apps.apple.com/us/app/tractor-supply/id1502197298' }],
      tags: ['React Native', 'Redux-Saga', 'Design System', 'Metrics'],
    },
    {
      company: 'Globex',
      role: 'Full-Stack Engineer',
      start: '2020-01',
      end: '2022-02',
      location: 'NYC, USA',
      bullets: [
        'Shipped multi-tenant SaaS on AWS (ECS, RDS).',
        'Improved TTFB 45% with SSR and caching.',
      ],
      links: [],
      tags: ['Node.js', 'AWS', 'Postgres', 'SaaS'],
    },
  ],
  projects: [
    {
      title: 'Realtime Whiteboard',
      description: 'Collaborative canvas with OT, WebRTC screenshare, and offline sync.',
      tags: ['React', 'WebSockets', 'CRDT'],
      links: [
        { label: 'Live', href: 'https://whiteboard.example' },
        { label: 'Code', href: 'https://github.com/example/whiteboard' },
      ],
    },
    {
      title: 'Dev Analytics',
      description: 'Self-hosted engineering metrics dashboard with PR and DORA insights.',
      tags: ['Next.js', 'Postgres', 'ETL'],
      links: [
        { label: 'Live', href: 'https://analytics.example' },
        { label: 'Code', href: 'https://github.com/example/dev-analytics' },
      ],
    },
  ],
  education: [
    { school: 'Louisiana State University-Shreveport', degree: 'Master in Business Administration (MBA)', start: '2023', end: '2025' },
    { school: 'Mississippi State University', degree: 'Bachelor of Science in Computer Engineering (BSCE)', start: '2017', end: '2019' },
    { school: 'North Lake College', degree: 'Associates in Computer Science', start: '2015', end: '2017' },
    { school: 'Nicholls State University', degree: 'Bachelor in Pre-Engineering', start: '2014', end: '2015' },
  ],
  awards: [
    { title: 'Google Summer of Code', org: 'Google', year: '2018' },
    { title: 'Hackathon Winner', org: 'DevCon', year: '2021' },
  ],
  testimonials: [
    { name: 'Pat Manager', role: 'Director of Engineering, Acme', quote: 'Alex combines product sense with engineering excellence. They ship fast and thoughtfully.' },
  ],
  blog: [
    { title: 'Building a Design System that Sticks', href: '#' },
    { title: 'From Redux Thunks to RTK Query', href: '#' },
  ],
}
