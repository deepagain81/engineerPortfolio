export const HERO_ANIMATION = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" as const },
} as const;

export const SECTION_IDS = {
  top: "top",
  work: "work",
  skills: "skills",
  experience: "experience",
  contact: "contact",
} as const;

export const LINK_LABELS = {
  resume: "Resume",
  github: "GitHub",
  linkedin: "LinkedIn",
  email: "Email",
} as const;

export const NAV_ITEMS = [
  { label: "Work", href: `#${SECTION_IDS.work}` },
  { label: "Skills", href: `#${SECTION_IDS.skills}` },
  { label: "Experience", href: `#${SECTION_IDS.experience}` },
  { label: "Contact", href: `#${SECTION_IDS.contact}` },
] as const;

export const BUTTON_VARIANT = {
  primary: "primary",
  secondary: "secondary",
  ghost: "ghost",
} as const;
