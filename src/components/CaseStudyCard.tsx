import { Card } from "./Card";
import { ButtonLink } from "./Button";

type Impact = Readonly<{ label: string; value: string }>;

export type CaseStudy = Readonly<{
  title: string;
  context: string;
  problem: string;
  approaches: readonly string[];
  impacts: readonly Impact[];
  tech: readonly string[];
  role: string;
  cta: Readonly<{ label: string; href: string }>;
}>;

export function CaseStudyCard({ project }: { project: CaseStudy }) {
  return (
    <Card>
      <div className="space-y-4">
        <div>
          <h3 className="text-sm tracking-tightish">{project.title}</h3>
          <div className="text-sm text-ink/60">{project.context}</div>
        </div>

        <div className="space-y-1">
          <div className="text-xs weight-strong uppercase tracking-wide text-ink/50">
            Problem
          </div>
          <p className="text-sm text-ink/70">{project.problem}</p>
        </div>

        <div className="space-y-1">
          <div className="text-xs weight-strong uppercase tracking-wide text-ink/50">
            Approach
          </div>
          <ul className="list-disc space-y-1 pl-5 text-sm text-ink/70">
            {project.approaches.map((approach) => (
              <li key={approach}>{approach}</li>
            ))}
          </ul>
        </div>

        {project.impacts.length > 0 && (
          <div className="grid gap-2 sm:grid-cols-2">
            {project.impacts.map((impact) => (
              <div
                key={impact.label}
                className="rounded-xl border border-ink/10 bg-ink/5 px-3 py-2"
              >
                <div className="text-xs text-ink/60">{impact.label}</div>
                <div className="text-sm weight-strong">{impact.value}</div>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-2">
          <div className="text-xs weight-strong uppercase tracking-wide text-ink/50">
            Tech
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-ink/10 px-2.5 py-1 text-xs text-ink/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-xs weight-strong uppercase tracking-wide text-ink/50">
            My Role
          </div>
          <p className="text-sm text-ink/70">{project.role}</p>
        </div>

        <ButtonLink href={project.cta.href} variant="secondary">
          {project.cta.label}
        </ButtonLink>
      </div>
    </Card>
  );
}
