import { ButtonLink, Container, SocialLinks, ThemeToggle } from '@/components'
import { NAV_ITEMS, SECTION_IDS, site } from '@/data'

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <a href={`#${SECTION_IDS.top}`} className="font-display text-lg tracking-tight">
            {site.name}
          </a>

          <nav className="hidden gap-6 sm:flex">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-fg/70 hover:text-fg">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="sm:hidden">
              <SocialLinks items={[site.ctas.secondary.icon]} variant="iconOnly" />
            </div>
            <div className="hidden sm:block">
              <SocialLinks items={[site.ctas.secondary.icon]} variant="iconLabel" />
            </div>

            <ButtonLink href={site.ctas.primary.href}>{site.ctas.primary.label}</ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  )
}
