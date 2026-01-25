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

  skills: [
    { group: "Frontend", items: ["React", "TypeScript", "Redux/RTK", "Accessibility (WCAG)"] },
    { group: "Mobile", items: ["React Native", "Kotlin", "WebView", "App performance"] },
    { group: "API & Data", items: ["GraphQL", "REST", "JWT auth patterns"] },
    { group: "Quality", items: ["Jest", "React Testing Library", "CI checks"] },
    { group: "Observability", items: ["Dynatrace", "Splunk", "Crashlytics (if applicable)"] },
  ],

  footer: {
    copyright: "© {year} • {site.name}. All rights reserved.",
    links: [
      { label: "Resume", href: "/Deepak_Chapagain_Resume.pdf", external: false },
      { label: "GitHub", href: "https://github.com/deepagain81", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/dchapagain/", external: true },
      { label: "Email", href: "mailto:dchapagain.dev@gmail.com", external: false },
    ],
  },

  // case studies: measurable outcomes and clear impact is important
  projects: [
    {
        title: "Retail App Modernization",
        context: "Tractor Supply Company (Consultant)",
        problem:
        "REST-driven screens were over-fetching data, increasing payload size and slowing UI responsiveness on mid-tier devices.",
        approaches: [
        "Migrated key surfaces from REST to GraphQL and designed query patterns to reduce unnecessary fields.",
        "Improved UI rendering paths and added guardrails to catch regressions early.",
        ],
        impacts: [
        { label: "Over-fetching", value: "↓ 40%" },
        { label: "p90 render time", value: "↓ 120ms" },
        ],
        tech: ["React", "TypeScript", "GraphQL", "Performance"],
        role: "Led front-end delivery; collaborated with backend and QA on release readiness.",
        cta: { label: "Discuss this project", href: "#contact" },
    },
    {
        title: "Secure WebView Integration",
        context: "Retail Mobile App",
        problem:
        "Login reliability and fraud checks required a secure in-app WebView flow with consistent authentication and session handling.",
        approaches: [
        "Implemented JWT-based WebView handshake and session lifecycle controls.",
        "Integrated third-party fraud solution while maintaining a smooth UX across devices.",
        ],
        impacts: [
        { label: "Login errors", value: "↓ (measurable)" },
        { label: "Order approval", value: "↑ (measurable)" },
        ],
        tech: ["React Native", "JWT", "Security", "WebView"],
        role: "Owned integration design and implementation; partnered with security stakeholders.",
        cta: { label: "Discuss this project", href: "#contact" },
    },
    {
        title: "Testing & Observability Uplift",
        context: "Southern California Edison",
        problem:
        "Legacy patterns and limited test coverage increased defect risk and slowed delivery.",
        approaches: [
        "Refactored class components to hooks and consolidated state patterns to improve maintainability.",
        "Established Jest + RTL conventions and dashboards for proactive monitoring.",
        ],
        impacts: [
        { label: "Unit coverage", value: "↑ to 80%" },
        { label: "Bundle size", value: "↓ 9%" },
        ],
        tech: ["React", "Jest", "RTL", "Monitoring"],
        role: "Drove quality standards; mentored teammates on testing patterns.",
        cta: { label: "Discuss this project", href: "#contact" },
    },
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
