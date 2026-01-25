import { Container } from "../components/Container";
import { site } from "../data/site";
import { ButtonLink } from "../components/Button";
import { ThemeToggle } from "../components/ThemeToggle";

const items = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-page/80 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <a href="#top" className="font-display text-lg tracking-tight">
            {site.name}
          </a>

          <nav className="hidden gap-6 sm:flex">
            {items.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-ink/70 hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <ButtonLink variant="secondary" href={site.ctas.secondary.href} className="hidden sm:inline-flex">
              {site.ctas.secondary.label}
            </ButtonLink>
            <ButtonLink href={site.ctas.primary.href}>{site.ctas.primary.label}</ButtonLink>
          </div>
        </div>
      </Container>
    </header>
  );
}
