import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="bg-[#202020] min-h-screen text-white relative overflow-hidden">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      {/* <section id="about">
        <About />
      </section> */}
      <section id="education">
        <Education />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="techstack">
        <TechStack />
      </section>
      <Footer />
    </div>
  );
}

export default App;
