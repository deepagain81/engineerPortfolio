import { Footer } from "@/components";
import { SECTION_IDS, site } from "@/data";
import { Contact, Experience, Hero, Nav, Skills, Work } from "@/sections";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-fg font-sans">
      <a
        href={`#${SECTION_IDS.work}`}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-3 focus:py-2 focus:shadow"
      >
        {site.labels.skipToContent}
      </a>

      <Nav />

      <main>
        <Hero />
        <Work />
        <Skills />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}