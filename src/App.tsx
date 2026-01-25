import { Nav } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { Work } from "./sections/Work";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { Contact } from "./sections/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:shadow"
      >
        Skip to content
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