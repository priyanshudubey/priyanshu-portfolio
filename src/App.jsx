import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Education from "./components/Education";
import Footer, { Contact } from "./components/Footer";
import useReveal from "./hooks/useReveal";
import { useMotionBudget, useSpotlight } from "./hooks/motion";

export default function App() {
  useReveal();
  useSpotlight();
  useMotionBudget();

  return (
    <>
      <a
        href="#main"
        className="sr-only z-[70] rounded-sm bg-ink px-4 py-2 text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="overflow-x-clip">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <TechStack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
