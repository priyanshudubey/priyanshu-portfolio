import React from "react";
import ExperienceWeb from "./ExperienceWeb";
import ExperienceMobile from "./ExperienceMobile";

function Experience() {
  const isMobile = window.innerWidth < 768; // Detect screen size for conditional rendering

  return <>{isMobile ? <ExperienceMobile /> : <ExperienceWeb />}</>;
}

export default Experience;
