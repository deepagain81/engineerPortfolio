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
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-2 text-sm text-black/60">
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
                <label className="text-sm font-medium">Name</label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-black/15 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-black/15 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-xl bg-black px-4 py-2 text-sm font-medium text-white hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Send via email
              </button>

              <p className="text-xs text-black/50">
                This form opens your email client (no backend). We can add a real endpoint later if you want.
              </p>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
