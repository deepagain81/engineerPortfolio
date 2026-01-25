import { ButtonLink, Card, Container } from "@/components";
import { BUTTON_VARIANT, SECTION_IDS, site } from "@/data";

export function Contact() {

    const onFormSubmission = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.currentTarget;
      const data = new FormData(form);
      const name = String(data.get("name"));
      const message = String(data.get("message"));
      const subject = encodeURIComponent(
        `${site.sections.contact.form.subjectPrefix} ${name}`
      );
      const body = encodeURIComponent(message);
      window.location.href = `${site.links.email}?subject=${subject}&body=${body}`;
    };

  return (
    <section id={SECTION_IDS.contact} className="py-12 pb-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl tracking-tight">{site.sections.contact.title}</h2>
            <p className="mt-2 text-sm text-muted">
              {site.sections.contact.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <ButtonLink href={site.links.email}>
                {site.sections.contact.actions.email}
              </ButtonLink>
              <ButtonLink variant={BUTTON_VARIANT.secondary} href={site.links.github}>
                {site.sections.contact.actions.github}
              </ButtonLink>
              <ButtonLink variant={BUTTON_VARIANT.secondary} href={site.links.linkedin}>
                {site.sections.contact.actions.linkedin}
              </ButtonLink>
            </div>
          </div>

          <Card>
            <form
              onSubmit={onFormSubmission}
              className="space-y-4"
            >
              <div>
                <label className="text-sm font-semibold">
                  {site.sections.contact.form.nameLabel}
                </label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm text-fg outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="text-sm font-semibold">
                  {site.sections.contact.form.messageLabel}
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-border bg-surface px-3 py-2 text-sm text-fg outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-accent-contrast hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                {site.sections.contact.form.submitLabel}
              </button>

              <p className="text-xs text-muted">
                {site.sections.contact.form.note}
              </p>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
