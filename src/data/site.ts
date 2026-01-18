// Single source of truth for all site content and data. 
// This keeps it organized and makes it easy to update without digging through multiple files.
export const site = {
  name: "Deepak Chapagain",
  role: "Software Engineer",
  location: "Nashville, TN",
  tagline:
    "I build performant, accessible React and React Native products with pragmatic architecture and measurable outcomes.",
  ctas: {
    primary: { label: "View Work", href: "#work" },
    secondary: { label: "Download Resume", href: "/Deepak_Chapagain_Resume.pdf" },
  },

  links: {
    github: "https://github.com/deepagain81",
    linkedin: "https://www.linkedin.com/in/dchapagain/",
    email: "mailto:dchapagain.dev@gmail.com",
  },

  highlights: [
    "React / TypeScript / React Native / Node / Kotlin / Java",
    "GraphQL + secure auth patterns",
    "Testing culture + observability",
  ],

  projects: [
    {
      title: "Retail App Modernization",
      subtitle: "GraphQL migration + performance wins",
      bullets: [
        "Migrated REST → GraphQL to reduce over-fetching and improve UI responsiveness.",
        "Introduced reliable monitoring signals and guardrails for regressions.",
      ],
      tags: ["React Native", "TypeScript", "GraphQL"],
      href: "#contact",
    },
    {
      title: "Secure WebView Integration",
      subtitle: "JWT-based auth + fraud solution integration",
      bullets: [
        "Implemented secure JWT-based WebView handshake flows.",
        "Reduced login errors and improved approval/conversion reliability.",
      ],
      tags: ["React Native", "Security", "Mobile"],
      href: "#contact",
    },
    {
      title: "Testing & Quality Uplift",
      subtitle: "Unit testing patterns and maintainability",
      bullets: [
        "Established Jest + RTL conventions to increase coverage and confidence.",
        "Improved developer velocity through reusable component patterns.",
      ],
      tags: ["Jest", "RTL", "DX"],
      href: "#contact",
    },
  ],

  skills: [
    { group: "Frontend", items: ["React", "TypeScript", "Redux/RTK", "Accessibility (WCAG)"] },
    { group: "Mobile", items: ["React Native", "Kotlin", "WebView", "App performance"] },
    { group: "API & Data", items: ["GraphQL", "REST", "JWT auth patterns"] },
    { group: "Quality", items: ["Jest", "React Testing Library", "CI checks"] },
    { group: "Observability", items: ["Dynatrace", "Splunk", "Crashlytics (if applicable)"] },
  ],

  experiences: [
    {
      company: "Tractor Supply Company (Consultant)",
      role: "Technology Analyst",
      period: "Sep 2024 – Present",
      points: [
        "Led front-end initiatives on a retail app with measurable performance and reliability outcomes.",
        "Partnered cross-functionally to ship features with strong quality and monitoring.",
      ],
    },
    {
      company: "Southern California Edison",
      role: "Software Engineer",
      period: "Previously",
      points: [
        "Delivered React features and modernization work; improved maintainability and testing standards.",
        "Implemented dashboards and monitoring to reduce incident volume.",
      ],
    },
  ],
} as const;
