import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectsMobile() {
  const projects = [
    {
      title: "Resume Builder Project",
      description:
        "A full-stack application that allows users to create, customize, and download ATS-friendly resumes. Built with React.js, Node.js, Express, and MongoDB, it provides real-time preview, drag-and-drop features, and seamless PDF generation.",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "PDF.js"],
      githubLink: "https://github.com/priyanshudubey/resume-builder",
      demoLink: "#", // Add your demo link here
    },
    {
      title: "Email Template System",
      description:
        "A dynamic system for creating, editing, and executing email templates. Features include placeholder rendering, live preview, and email sending using React.js, Node.js, MySQL, and Mustache.js.",
      technologies: ["React.js", "Node.js", "MySQL", "Mustache.js"],
      githubLink: "https://github.com/priyanshudubey/email-template-system",
      demoLink: "#", // Add your demo link here
    },
  ];

  return (
    <section
      id="projects-mobile"
      className="mb-16 relative py-16 bg-[#1A1A1A] overflow-hidden">
      {/* Glowing Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-4xl font-bold text-emerald-400 
            relative inline-block
            before:absolute before:bottom-[-10px] before:left-0 before:w-full before:h-1 
            before:bg-gradient-to-r before:from-emerald-400 before:to-blue-500
            hover:scale-105 transition-transform duration-300
          ">
            Mobile Projects
          </h2>
        </div>

        <div className="relative max-w-md mx-auto space-y-12">
          {/* Vertical Guideline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-500/50 to-blue-500/50"></div>

          {projects.map((project, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center">
              {/* Floating Node */}
              <div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 
                w-10 h-10 bg-emerald-500 rounded-full border-4 border-[#1A1A1A] 
                shadow-lg shadow-emerald-500/50 animate-pulse z-20"></div>

              <div
                className="w-full bg-[#2A2A2A] rounded-2xl shadow-2xl border-2 border-emerald-500/30 
                  transform transition-all duration-500 hover:scale-[1.03] hover:shadow-emerald-500/30
                  p-6 space-y-4 relative overflow-hidden z-10
                  mt-6 md:mt-8">
                {/* Glowing Border Effect */}
                <div
                  className="absolute inset-0 border-4 border-transparent 
                  bg-gradient-to-br from-emerald-500/20 to-blue-500/20 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500 
                  pointer-events-none"></div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-justify leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-emerald-500/20 text-emerald-300 
                          px-3 py-1 rounded-full text-xs 
                          hover:bg-emerald-500/40 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 
                        hover:text-emerald-400 transition-colors 
                        bg-[#3A3A3A] px-4 py-2 rounded-lg flex-1 justify-center">
                      <FaGithub className="mr-2 text-xl" />
                      GitHub
                    </a>
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-300 
                        hover:text-blue-400 transition-colors 
                        bg-[#3A3A3A] px-4 py-2 rounded-lg flex-1 justify-center">
                      <FaExternalLinkAlt className="mr-2 text-lg" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsMobile;
