import { Container } from "../components/Container";
import { Card } from "../components/Card";
import { site } from "../data/site";

export function Skills() {
  return (
    <section id={SECTION_IDS.skills} className="py-12">
      <Container>
        <h2 className="text-2xl tracking-tight">{site.sections.skills.title}</h2>
        <p className="mt-2 text-sm text-muted">
          {site.sections.skills.description}
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {site.skills.map((skill) => (
            <Card key={skill.group}>
              <h3 className="text-sm font-semibold">{skill.group}</h3>
              <ul className="mt-3 grid gap-2 text-sm text-fg/80 sm:grid-cols-2">
                {skill.items.map((item) => (
                  <li key={item} className="rounded-lg bg-fg/5 px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
