import { Card, Container, SocialLinks } from '@/components'
import { SECTION_IDS, site } from '@/data'

export function Contact() {
  const links = Object.keys(site.sections.contact.actions).map(
    (key) => site.social[key as keyof typeof site.social],
  )

  const onFormSubmission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name'))
    const message = String(data.get('message'))
    const subject = encodeURIComponent(`${site.sections.contact.form.subjectPrefix} ${name}`)
    const body = encodeURIComponent(message)
    window.location.href = `${site.social.email.href}?subject=${subject}&body=${body}`
  }

  return (
    <section id={SECTION_IDS.contact} className="py-12 pb-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="t-section">{site.sections.contact.title}</h2>
            <p className="t-muted mt-2">{site.sections.contact.description}</p>

            <div className="mt-4 flex flex-wrap gap-3">
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
            </div>
          </div>

          <Card>
            <form onSubmit={onFormSubmission} className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="text-sm font-semibold">
                  {site.sections.contact.form.nameLabel}
                </label>
                <input id="contact-name" name="name" required className="t-input" />
              </div>

              <div>
                <label htmlFor="contact-message" className="text-sm font-semibold">
                  {site.sections.contact.form.messageLabel}
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  className="t-input"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-contrast hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                {site.sections.contact.form.submitLabel}
              </button>

              <p className="text-xs text-muted">{site.sections.contact.form.note}</p>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  )
}
