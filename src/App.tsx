import { Nav } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { Work } from "./sections/Work";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";

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