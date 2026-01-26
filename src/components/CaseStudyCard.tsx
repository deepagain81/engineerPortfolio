import { BUTTON_VARIANT, site } from '@/data'

import { ButtonLink } from './Button'
import { Card } from './Card'

type Impact = Readonly<{ label: string; value: string }>

export type CaseStudy = Readonly<{
  title: string
  context: string
  problem: string
  approaches: readonly string[]
  impacts: readonly Impact[]
  tech: readonly string[]
  role: string
  cta: Readonly<{ label: string; href: string }>
}>

export function CaseStudyCard({ project }: { project: CaseStudy }) {
  return (
    <Card>
      <div className="space-y-4">
        <div>
          <h3 className="text-sm tracking-tightish">{project.title}</h3>
          <div className="text-sm text-muted">{project.context}</div>
        </div>

        <div className="space-y-1">
          <div className="text-xs font-semibold uppercase tracking-wide text-muted">
            {site.labels.caseStudy.problem}
          </div>
          <p className="text-sm text-fg/80">{project.problem}</p>
        </div>

        <div className="space-y-1">
          <div className="text-xs font-semibold uppercase tracking-wide text-muted">
            {site.labels.caseStudy.approach}
          </div>
          <ul className="list-disc space-y-1 pl-5 text-sm text-fg/80">
            {project.approaches.map((approach) => (
              <li key={approach}>{approach}</li>
            ))}
          </ul>
        </div>

        {project.impacts.length > 0 && (
          <div className="grid gap-2 sm:grid-cols-2">
            {project.impacts.map((impact) => (
              <div key={impact.label} className="rounded-xl border border-border bg-fg/5 px-3 py-2">
                <div className="text-xs text-muted">{impact.label}</div>
                <div className="text-sm font-semibold">{impact.value}</div>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wide text-muted">
            {site.labels.caseStudy.tech}
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-border px-2.5 py-1 text-xs text-fg/80"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-xs font-semibold uppercase tracking-wide text-muted">
            {site.labels.caseStudy.role}
          </div>
          <p className="text-sm text-fg/80">{project.role}</p>
        </div>

        <ButtonLink href={project.cta.href} variant={BUTTON_VARIANT.primary}>
          {project.cta.label}
        </ButtonLink>
      </div>
    </Card>
  )
}
