import { Container } from "../components/Container";
import { site } from "../data/site";
import { CaseStudyCard } from "../components/CaseStudyCard";

export function Work() {
  return (
    <section id="work" className="py-12">
      <Container>
        <div>
          <h2 className="text-2xl tracking-tight">Featured Work</h2>
          <p className="mt-2 text-sm text-ink/60">
            Selected projects framed as mini case studies: problem, approach, and measurable impact.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {site.projects.map((project) => (
            <CaseStudyCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
