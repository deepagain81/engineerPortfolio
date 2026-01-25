import { Container } from "../components/Container";
import { Card } from "../components/Card";
import { site } from "../data/site";

export function Experience() {
  return (
    <section id={SECTION_IDS.experience} className="py-12">
      <Container>
        <h2 className="text-2xl tracking-tight">{site.sections.experience.title}</h2>
        <p className="mt-2 text-sm text-muted">
          {site.sections.experience.description}
        </p>

        <div className="mt-6 grid gap-4">
          {site.experiences.map((experience) => (
            <Card key={experience.company + experience.role}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold">{experience.company}</h3>
                  <div className="text-sm text-fg/80">{experience.role}</div>
                </div>
                <div className="text-sm text-muted">{experience.period}</div>
              </div>

              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-fg/80">
                {experience.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
