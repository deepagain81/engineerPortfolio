import { Container } from "../components/Container";
import { ButtonLink } from "../components/Button";
import { site } from "../data/site";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <motion.div
      initial={HERO_ANIMATION.initial}
      animate={HERO_ANIMATION.animate}
      transition={HERO_ANIMATION.transition}
      className="space-y-5"
    >
      <section id={SECTION_IDS.top} className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5">
              <p className="text-sm text-muted">
                {site.role} • {site.location}
              </p>

              <h1 className="t-hero">
                {site.tagline}
              </h1>

              <p className="text-base text-fg/80 sm:text-lg">
                {site.sections.hero.body}
              </p>

              <div className="flex flex-wrap gap-3">
                <ButtonLink href={site.ctas.primary.href}>
                  {site.ctas.primary.label}
                </ButtonLink>
                <ButtonLink variant={BUTTON_VARIANT.secondary} href={site.ctas.secondary.href}>
                  {site.ctas.secondary.label}
                </ButtonLink>
                <ButtonLink
                  variant={BUTTON_VARIANT.ghost}
                  href={site.links.linkedin}
                  rel="noreferrer"
                  target="_blank"
                >
                  {site.sections.hero.links.linkedinLabel}
                </ButtonLink>
              </div>

              <ul className="flex flex-wrap gap-2 pt-2">
                {site.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-full border border-border bg-fg/5 px-3.5 py-1.5 text-sm text-fg/80 font-medium"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-gradient-to-b from-fg/5 to-transparent p-6">
              <div className="space-y-4">
                <div className="text-sm text-muted">
                  {site.sections.hero.snapshot.title}
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {site.sections.hero.snapshot.items.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-border bg-surface p-4 shadow-sm"
                    >
                      <div className="text-xs text-muted">{item.label}</div>
                      <div className="mt-1 font-medium">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </motion.div>
  );
}
