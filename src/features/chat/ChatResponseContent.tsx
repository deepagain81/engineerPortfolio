import type { ReactNode } from 'react'

import { SECTION_IDS, site } from '@/data'

// FE/BE link contract: backend emits approved tokens only.
// Allowed: #work #skills #experience #contact, site:github/linkedin/email/resume.
// Unknown tokens, raw URLs, or unsafe schemes render as plain text.
const MARKDOWN_LINK_PATTERN = /\[([^\]]+)\]\(([^)\s]+)\)/g

const SECTION_ID_VALUES: readonly string[] = Object.values(SECTION_IDS)

// Transitional: cached backend responses (KV/R2) may still contain legacy
// URL-form links from before the token contract. Exact matches only.
// Remove once the backend cache has fully turned over post-migration.
const LEGACY_TARGET_ALIASES: Record<string, string> = {
  'https://www.deepakchapagain.com/#contact': '#contact',
  'https://deepakchapagain.com/#contact': '#contact',
  '/#contact': '#contact',
}

type ResolvedLink = {
  href: string
  external: boolean
  samePage: boolean
}

function resolveLinkTarget(rawTarget: string): ResolvedLink | null {
  const target = LEGACY_TARGET_ALIASES[rawTarget] ?? rawTarget

  if (target.startsWith('#')) {
    const sectionId = target.slice(1)
    if (!SECTION_ID_VALUES.includes(sectionId)) return null

    return { href: target, external: false, samePage: true }
  }

  if (!target.startsWith('site:')) return null

  const key = target.slice('site:'.length)
  if (!(key in site.social)) return null

  const entry = site.social[key as keyof typeof site.social]
  return { href: entry.href, external: entry.external, samePage: false }
}

type Props = {
  text: string
  // Called when a link that scrolls within the current page is clicked,
  // so the chat panel can close instead of covering the target section.
  onNavigation?: () => void
}

// Converts token links like [label](site:github) to anchors from site registries.
// Token-only by design; swap internals for markdown later without changing callers.
export function ChatResponseContent({ text, onNavigation }: Props) {
  const nodes: ReactNode[] = []
  let lastIndex = 0

  for (const match of text.matchAll(MARKDOWN_LINK_PATTERN)) {
    const [full, label, target] = match
    const index = match.index ?? 0

    if (index > lastIndex) {
      nodes.push(text.slice(lastIndex, index))
    }

    const resolved = resolveLinkTarget(target)

    if (!resolved) {
      nodes.push(label)
    } else {
      nodes.push(
        <a
          key={`${target}-${index}`}
          href={resolved.href}
          className="underline underline-offset-2"
          onClick={resolved.samePage ? onNavigation : undefined}
          {...(resolved.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {label}
        </a>,
      )
    }

    lastIndex = index + full.length
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return <p className="whitespace-pre-wrap leading-6">{nodes}</p>
}
