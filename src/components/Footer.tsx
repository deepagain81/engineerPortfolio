import { site } from '@/data'

import { Container } from './Container'
import { SocialLinks } from './SocialLinks'

export function Footer() {
  const footer = site.footer
  if (!footer) return null

  const links = footer.links.map((key) => site.social[key])
  const year = new Date().getFullYear()
  const copyright = footer.copyright
    .replace('{year}', String(year))
    .replace('{site.name}', site.name)

  return (
    <footer className="border-t border-border py-8">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">{copyright}</p>

          <nav
            aria-label={site.labels.footerNav}
            className="flex flex-wrap gap-x-4 gap-y-2 text-sm"
          >
            {links.map((item) => (
              <div key={item.label} className="flex items-center">
                <div className="sm:hidden">
                  <SocialLinks items={[item]} variant="iconOnly" />
                </div>
                <div className="hidden sm:block">
                  <SocialLinks items={[item]} variant="iconLabel" />
                </div>
              </div>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  )
}
