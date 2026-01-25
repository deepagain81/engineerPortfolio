import { CaseStudyCard, Container } from "@/components";
import { SECTION_IDS, site } from "@/data";

export function Work() {
  return (
    <section id={SECTION_IDS.work} className="py-12">
      <Container>
        <div>
          <h2 className="t-section">{site.sections.work.title}</h2>
          <p className="t-muted mt-2">
            {site.sections.work.description}
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
