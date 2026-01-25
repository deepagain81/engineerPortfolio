import { Container } from "../components/Container";
import { ButtonLink } from "../components/Button";
import { Card } from "../components/Card";
import { site } from "../data/site";

export function Contact() {

    const onFormSubmission = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.currentTarget;
      const data = new FormData(form);
      const name = String(data.get("name") || "");
      const message = String(data.get("message") || "");
      const subject = encodeURIComponent(`Portfolio inquiry from ${name || "someone"}`);
      const body = encodeURIComponent(message);
      window.location.href = `${site.links.email}?subject=${subject}&body=${body}`;
    };

  return (
    <section id="contact" className="py-12 pb-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl tracking-tight">Contact</h2>
            <p className="mt-2 text-sm text-ink/60">
              Want to discuss a role, a contract, or a collaboration? Email is best.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <ButtonLink href={site.links.email}>Email me</ButtonLink>
              <ButtonLink variant="secondary" href={site.links.github}>
                GitHub
              </ButtonLink>
              <ButtonLink variant="secondary" href={site.links.linkedin}>
                LinkedIn
              </ButtonLink>
            </div>
          </div>

          <Card>
            <form
              onSubmit={onFormSubmission}
              className="space-y-4"
            >
              <div>
                <label className="text-sm weight-strong">Name</label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-ink/15 bg-surface px-3 py-2 text-sm text-ink outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <div>
                <label className="text-sm weight-strong">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-ink/15 bg-surface px-3 py-2 text-sm text-ink outline-none focus:ring-2 focus:ring-accent"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-accent px-4 py-2 text-sm weight-strong text-white hover:bg-accent/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-page"
              >
                Send via email
              </button>

              <p className="text-xs text-ink/50">
                This form opens your email client.
              </p>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
