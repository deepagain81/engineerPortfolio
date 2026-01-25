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
    <footer className="border-t border-ink/10 py-8">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink/60">{copyright}</p>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noreferrer" : undefined}
                className="text-ink/70 hover:text-accent underline underline-offset-4 decoration-transparent hover:decoration-accent/60 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
