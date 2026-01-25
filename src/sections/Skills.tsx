import { Container } from "../components/Container";
import { Card } from "../components/Card";
import { site } from "../data/site";

export function Skills() {
  return (
    <section id="skills" className="py-12">
      <Container>
        <h2 className="text-2xl tracking-tight">Skills</h2>
        <p className="mt-2 text-sm text-ink/60">
          Tools and patterns I use to ship reliable software.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {site.skills.map((skill) => (
            <Card key={skill.group}>
              <h3 className="text-sm weight-strong">{skill.group}</h3>
              <ul className="mt-3 grid gap-2 text-sm text-ink/70 sm:grid-cols-2">
                {skill.items.map((item) => (
                  <li key={item} className="rounded-lg bg-ink/5 px-3 py-2">
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
