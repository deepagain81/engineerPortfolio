import { Container } from "./Container";
import { site } from "@/data";

export function Footer() {
  const footer = site.footer;
  if (!footer) return null;

  const { links } = footer;
  const year = new Date().getFullYear();
  const copyright = footer.copyright
    .replace("{year}", String(year))
    .replace("{site.name}", site.name);

  return (
    <footer className="border-t border-border py-8">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">{copyright}</p>

          <nav aria-label={site.labels.footerNav} className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                className="text-fg/80 hover:text-accent underline underline-offset-4 decoration-transparent hover:decoration-accent/60 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
