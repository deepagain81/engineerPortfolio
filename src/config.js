import { Github, Linkedin, Mail, Globe } from 'lucide-react'

export const CONFIG = {
  meta: { siteTitle: 'Engineer Portfolio', theme: 'system' },
  profile: {
    name: 'Deepak Chapagain',
    role: 'Front-end leader with mobile depth',
    location: 'Nashville, TN, USA',
    email: 'dchapagain.dev@gmail.com',
    website: 'https://example.dev',
    avatarUrl: '../assets/picofme.png',
    summary:`I am a front-end engineer with 5+ years building React and React Native experiences at enterprise scale. My sweet spot is simplifying complex flows—migrating data access to GraphQL, hardening auth, and trimming payloads for faster LCP/INP. I care about accessibility, performance, and measurable outcomes; I instrument what I ship and iterate with data. With an MBA plus a computer engineering degree, I bridge product intent and technical design, and I’m comfortable partnering across design, backend, and analytics. I’m targeting senior front-end roles in e-commerce or high-scale product teams.`,
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
      links: [{ label: 'iOS', href: 'https://apps.apple.com/us/app/tractor-supply/id1502197298' },{label: 'Android', href:'https://play.google.com/store/apps/details?id=com.consumerapp_v1&pcampaignid=web_share'}],
      tags: ['React Native', 'Redux-Saga', 'Design System', 'Metrics'],
    },
    {
      company: 'Southern California Edison (SCE)',
      role: 'Software Engineer',
      start: '2020-11',
      end: '2024-08',
      location: 'Richardson, TX, USA',
      bullets: [
        'Shipped multi-tenant SaaS on AWS (ECS, RDS).',
        'Improved TTFB 45% with SSR and caching.',
      ],
      links: [{ label: 'SCE.com', href: 'https://www.sce.com/' },{label: 'iOS', href:'https://apps.apple.com/us/app/mysce/id553317645'}],
      tags: ['ReactJS', 'React Native', 'Azure', 'SaaS'],
    },
    {
      company: 'Allstate Corporation',
      role: 'Associate Software Engineer',
      start: '2020-02',
      end: '2020-08',
      location: 'Irving, TX, USA',
      bullets: [
        'Integrated and tested SiteCatalyst on native mobile apps to ensure accurate data collection for business reporting.',
        'Performed end-to-end API validation; produced reports and delivered stakeholder insights.',
      ],
      links: [{label: 'iOS', href:'https://apps.apple.com/us/app/allstate-mobile/id364376344'}],
      tags: ['Java', 'SpringBoot', 'Swift', 'Analytics'],
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
