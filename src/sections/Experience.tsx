import { Container } from "../components/Container";
import { Card } from "../components/Card";
import { site } from "../data/site";

export function Experience() {
  return (
    <section id="experience" className="py-12">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <p className="mt-2 text-sm text-black/60 dark:text-white/60">
          Recent roles and impact areas.
        </p>

        <div className="mt-6 grid gap-4">
          {site.experiences.map((experience) => (
            <Card key={experience.company + experience.role}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div>
                  <div className="font-semibold">{experience.company}</div>
                  <div className="text-sm text-black/70 dark:text-white/70">{experience.role}</div>
                </div>
                <div className="text-sm text-black/50 dark:text-white/50">{experience.period}</div>
              </div>

              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-black/70 dark:text-white/70">
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
