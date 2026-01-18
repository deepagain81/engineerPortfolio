import { Container } from "../components/Container";
import { Card } from "../components/Card";
import { site } from "../data/site";

export function Work() {
  return (
    <section id="work" className="py-12">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Featured Work</h2>
            <p className="mt-2 text-sm text-black/60">
              A few outcomes-focused examples. We can expand these into full case studies later.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {site.projects.map((project) => (
            <Card key={project.title}>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-semibold">{project.title}</div>
                  <div className="text-sm text-black/60">{project.subtitle}</div>
                </div>

                <ul className="list-disc space-y-1 pl-5 text-sm text-black/70">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-black/10 px-2.5 py-1 text-xs text-black/70">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href={project.href} className="inline-flex text-sm font-medium text-black underline underline-offset-4">
                  Ask me about this
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
