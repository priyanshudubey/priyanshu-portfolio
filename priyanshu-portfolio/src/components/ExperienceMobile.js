import React from "react";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

function ExperienceMobile() {
  const experiences = [
    {
      title: "Systems Engineer",
      company: "Tata Consultancy Services",
      location: "Pune, India",
      duration: "July 2021 - Jan 2024",
      description:
        "At TCS, I enhanced and maintained critical airline systems by applying modern technologies such as Node.js, AWS, JEST, Serverless, and REST API development. I successfully implemented crucial services, including Biometrics, Notifications, and Profiles, using Serverless architecture, resulting in a 60% increase in user engagement. Additionally, I developed and optimized Boarding Pass generation, REST APIs, and Akamai mapping to ensure seamless content delivery. To improve system performance and maintain code quality, I integrated Kafka, SonarQube, and Kibana into the workflow.",
      technologies: ["Node.js", "AWS", "Serverless", "Kafka", "SonarQube"],
    },
    {
      title: "Technology Development Intern",
      company: "Triluxo Technologies",
      location: "Remote",
      duration: "Oct 2020 - Dec 2020",
      description:
        "During my internship at Triluxo Technologies, I engineered a feature-rich chatbot using Node.js and Google Dialogflow for hotel room service management. This enabled guests to effortlessly request services like food ordering and room cleaning. I developed a robust Node.js backend to facilitate communication between the chatbot and the hotel's service system. Leveraging Google Dialogflow, I added advanced natural language processing features and collaborated with front-end developers to ensure a cohesive and user-friendly experience.",
      technologies: ["Node.js", "Dialogflow", "Backend Development"],
    },
    {
      title: "Software Developer Intern",
      company: "Gallant Fusion Tech",
      location: "Remote",
      duration: "July 2020 - Sep 2020",
      description:
        "At Gallant Fusion Tech, I architected and implemented the backend and database infrastructure for a golf game application using Node.js, Express.js, and MySQL. I designed a scalable and optimized system to ensure seamless functionality for the app. By incorporating passport-jwt for endpoint validation, I enhanced the application's security. Additionally, I collaborated closely with the team to conceptualize and develop efficient server-side solutions tailored for a robust user experience.",
      technologies: ["Node.js", "Express.js", "MySQL", "Passport-JWT"],
    },
  ];

  return (
    <section
      id="experience-mobile"
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
            Experience
          </h2>
        </div>

        <div className="relative max-w-md mx-auto space-y-12">
          {/* Vertical Guideline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-emerald-500/50 to-blue-500/50"></div>

          {experiences.map((exp, index) => (
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
                  <div className="flex items-center mb-4">
                    <FaBriefcase className="text-emerald-400 mr-4 text-2xl" />
                    <div>
                      <h3 className="text-2xl font-bold text-emerald-400">
                        {exp.title}
                      </h3>
                      <p className="text-emerald-300 text-lg">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-col text-gray-400 mb-4 space-y-2">
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 text-justify leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-emerald-500/20 text-emerald-300 
                          px-3 py-1 rounded-full text-xs 
                          hover:bg-emerald-500/40 transition-colors">
                        {tech}
                      </span>
                    ))}
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

export default ExperienceMobile;
