import React from "react";
import {
  FaJsSquare,
  FaPython,
  FaNodeJs,
  FaAws,
  FaDatabase,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import { SiServerless, SiExpress } from "react-icons/si";

function TechStack() {
  const skills = [
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-500" />,
      color: "bg-yellow-500/20 text-yellow-500",
    },
    {
      name: "Python",
      icon: <FaPython className="text-blue-500" />,
      color: "bg-blue-500/20 text-blue-500",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
      color: "bg-green-500/20 text-green-500",
    },
    {
      name: "AWS",
      icon: <FaAws className="text-orange-500" />,
      color: "bg-orange-500/20 text-orange-500",
    },
    {
      name: "MySQL",
      icon: <FaDatabase className="text-blue-600" />,
      color: "bg-blue-600/20 text-blue-600",
    },
    {
      name: "React.js",
      icon: <FaReact className="text-cyan-400" />,
      color: "bg-cyan-400/20 text-cyan-400",
    },
    {
      name: "HTML/CSS",
      icon: (
        <div className="flex items-center">
          <FaHtml5 className="text-orange-600 mr-1" />
          <FaCss3Alt className="text-blue-500" />
        </div>
      ),
      color:
        "bg-gradient-to-r from-orange-600/20 to-blue-500/20 text-orange-600",
    },
    {
      name: "Serverless",
      icon: <SiServerless className="text-purple-500" />,
      color: "bg-purple-500/20 text-purple-500",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-300" />,
      color: "bg-gray-300/20 text-gray-300",
    },
    {
      name: "GIT",
      icon: <FaGitAlt className="text-red-500" />,
      color: "bg-red-500/20 text-red-500",
    },
  ];

  return (
    <section
      id="tech-stack"
      className="py-16 bg-[#1A1A1A] relative overflow-hidden">
      {/* Glowing Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2
            className="text-5xl font-bold text-emerald-400 
            relative inline-block
            before:absolute before:bottom-[-10px] before:left-0 before:w-full before:h-1 
            before:bg-gradient-to-r before:from-emerald-400 before:to-blue-500
            hover:scale-105 transition-transform duration-300
          ">
            Technology Stack
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center justify-center 
                p-6 rounded-2xl 
                ${skill.color}
                transform transition-all duration-300 
                hover:scale-110 hover:shadow-2xl
                hover:rotate-6 hover:bg-opacity-30
                cursor-pointer
              `}>
              <div className="text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-lg font-semibold text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
