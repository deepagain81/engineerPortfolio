import { ButtonLink, Container, ThemeToggle } from "@/components";
import { BUTTON_VARIANT, NAV_ITEMS, SECTION_IDS, site } from "@/data";

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
            <ButtonLink variant={BUTTON_VARIANT.secondary}href={site.ctas.secondary.href} className="hidden sm:inline-flex">
              {site.ctas.secondary.label}
            </ButtonLink>
            <ButtonLink href={site.ctas.primary.href}>{site.ctas.primary.label}</ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  );
}
