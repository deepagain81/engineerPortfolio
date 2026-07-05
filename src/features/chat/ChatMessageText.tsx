import type { ReactNode } from 'react'

// Only http(s), root-relative, and same-page hash hrefs are linkified;
// anything else (javascript:, data:, ...) stays plain text.
const MARKDOWN_LINK_PATTERN = /\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]*|#[^)\s]*)\)/g

function isSameOrigin(href: string): boolean {
  try {
    return new URL(href, window.location.href).origin === window.location.origin
  } catch {
    return false
  }
}

function isSamePageHashNavigation(href: string): boolean {
  try {
    const url = new URL(href, window.location.href)
    return (
      url.origin === window.location.origin &&
      url.pathname === window.location.pathname &&
      url.hash !== ''
    )
  } catch {
    return false
  }
}

type Props = {
  text: string
  // Called when a link that scrolls within the current page is clicked,
  // so the chat panel can close instead of covering the target section.
  onSamePageNavigation?: () => void
}

// Renders chat message text, converting markdown-style [label](url) links to
// anchors. Intentionally link-only: the chat backend replies with plain text
// plus links. If that contract grows (bold, lists, code), replace this
// component's internals with a markdown renderer - callers won't change.
export function ChatMessageText({ text, onSamePageNavigation }: Props) {
  const nodes: ReactNode[] = []
  let lastIndex = 0

  for (const match of text.matchAll(MARKDOWN_LINK_PATTERN)) {
    const [full, label, href] = match
    const index = match.index ?? 0

    if (index > lastIndex) {
      nodes.push(text.slice(lastIndex, index))
    }

    nodes.push(
      <a
        key={`${href}-${index}`}
        href={href}
        className="underline underline-offset-2"
        onClick={isSamePageHashNavigation(href) ? onSamePageNavigation : undefined}
        {...(isSameOrigin(href) ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
      >
        {label}
      </a>,
    )

    lastIndex = index + full.length
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return <p className="whitespace-pre-wrap leading-6">{nodes}</p>
}
