import { Container } from "../components/Container";
import { ButtonLink } from "../components/Button";
import { site } from "../data/site";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="space-y-5"
    >
      <section id="top" className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-5">
              <p className="text-sm text-ink/60">
                {site.role} • {site.location}
              </p>

              <h1 className="text-3xl tracking-tight sm:text-5xl">
                {site.tagline}
              </h1>

              <p className="text-base text-ink/70 sm:text-lg">
                I ship production-grade UI with strong performance,
                accessibility, and quality guardrails—built for teams that move
                fast without breaking things.
              </p>

              <div className="flex flex-wrap gap-3">
                <ButtonLink href={site.ctas.primary.href}>
                  {site.ctas.primary.label}
                </ButtonLink>
                <ButtonLink variant="secondary" href={site.ctas.secondary.href}>
                  {site.ctas.secondary.label}
                </ButtonLink>
                <ButtonLink
                  variant="ghost"
                  href={site.links.linkedin}
                  rel="noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </ButtonLink>
              </div>

              <ul className="flex flex-wrap gap-2 pt-2">
                {site.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-full border border-ink/10 bg-ink/5 px-3.5 py-1.5 text-sm text-ink/70 weight-strong"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-ink/10 bg-gradient-to-b from-ink/5 to-transparent p-6">
              <div className="space-y-4">
                <div className="text-sm text-ink/60">
                  Snapshot
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-ink/10 bg-surface p-4 shadow-sm">
                    <div className="text-xs text-ink/60">
                      Focus
                    </div>
                    <div className="mt-1 weight-strong">Front-end + Mobile</div>
                  </div>
                  <div className="rounded-2xl border border-ink/10 bg-surface p-4 shadow-sm">
                    <div className="text-xs text-ink/60">
                      Strength
                    </div>
                    <div className="mt-1 weight-strong">
                      Performance & Quality
                    </div>
                  </div>
                  <div className="rounded-2xl border border-ink/10 bg-surface p-4 shadow-sm">
                    <div className="text-xs text-ink/60">
                      API
                    </div>
                    <div className="mt-1 weight-strong">GraphQL + Auth</div>
                  </div>
                  <div className="rounded-2xl border border-ink/10 bg-surface p-4 shadow-sm">
                    <div className="text-xs text-ink/60">
                      Workflow
                    </div>
                    <div className="mt-1 weight-strong">CI + Observability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </motion.div>
  );
}
