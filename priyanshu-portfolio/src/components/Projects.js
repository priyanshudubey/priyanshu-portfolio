import React from "react";
import ProjectsWeb from "./ProjectsWeb";
import ProjectsMobile from "./ProjectsMobile";

function Projects() {
  const isMobile = window.innerWidth < 768; // Detect screen size

  return <>{isMobile ? <ProjectsMobile /> : <ProjectsWeb />}</>;
}

export default Projects;
