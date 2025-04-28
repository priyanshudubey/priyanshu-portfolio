import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const education = [
    {
      degree: "Master of Science - M.Sc",
      institution: "Swansea University",
      duration: "Expected 2025",
      details:
        "Advanced Computer Science with a focus on emerging technologies and cloud computing.",
      location: "Wales, United Kingdom",
      gpa: "Predicted First Class Honors",
    },
    {
      degree: "Bachelor of Technology",
      institution: "Sagar Institute Of Science and Technology",
      duration: "2017 - 2021",
      details:
        "Computer Science and Technology with specialization in Software Engineering.",
      location: "Bhopal, Madhya Pradesh, India",
      gpa: "7.8 CGPA",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen flex flex-col justify-center items-center py-16 relative overflow-hidden bg-[#1A1A1A]">
      {/* Glowing Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-16 text-emerald-400 
        relative inline-block
        before:absolute before:bottom-[-10px] before:left-0 before:w-full before:h-1 
        before:bg-gradient-to-r before:from-emerald-400 before:to-blue-500
        hover:scale-105 transition-transform duration-300">
        Education
      </motion.h2>

      {/* Education Cards */}
      <div className="container mx-auto px-4 space-y-8 relative z-10">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
            className="bg-[#2A2A2A] p-8 rounded-2xl shadow-2xl mb-8 
            border-2 border-emerald-500/30 
            relative overflow-hidden group
            transform transition-all duration-500 
            hover:shadow-emerald-500/30">
            {/* Hover Glow Effect */}
            <div
              className="absolute inset-0 border-4 border-transparent 
              bg-gradient-to-br from-emerald-500/20 to-blue-500/20 
              opacity-0 group-hover:opacity-100 transition-opacity duration-500 
              pointer-events-none"
            />

            <div className="flex items-center mb-4 relative z-10">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="mr-4">
                <FaGraduationCap className="text-emerald-500 text-4xl" />
              </motion.div>

              <div>
                <h3 className="text-2xl font-bold text-emerald-400">
                  {edu.degree}
                </h3>
                <p className="text-emerald-500 font-semibold">
                  {edu.institution}
                </p>
                <p className="text-gray-300">{edu.duration}</p>
                <p className="text-gray-400 text-sm">{edu.location}</p>
              </div>
            </div>

            <div className="relative z-10">
              <p className="text-gray-300 mb-2">{edu.details}</p>
              <div className="bg-emerald-500/10 rounded-lg p-2 mt-4">
                <p className="text-sm text-emerald-500 font-medium">
                  Academic Performance: {edu.gpa}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
