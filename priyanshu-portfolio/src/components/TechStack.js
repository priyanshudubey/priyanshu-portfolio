"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
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
  FaCode,
  FaRocket,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";
import { SiServerless, SiExpress } from "react-icons/si";

function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-500" />,
      color: "bg-yellow-500/20 text-yellow-500",
      category: "Programming Language",
      experience: "3+ years",
      proficiency: 90,
      description:
        "Modern ES6+ JavaScript for both frontend and backend development",
    },
    {
      name: "Python",
      icon: <FaPython className="text-blue-500" />,
      color: "bg-blue-500/20 text-blue-500",
      category: "Programming Language",
      experience: "2+ years",
      proficiency: 75,
      description: "Data analysis, automation, and backend development",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-green-500" />,
      color: "bg-green-500/20 text-green-500",
      category: "Runtime Environment",
      experience: "3+ years",
      proficiency: 95,
      description: "Server-side JavaScript runtime for scalable applications",
    },
    {
      name: "AWS",
      icon: <FaAws className="text-orange-500" />,
      color: "bg-orange-500/20 text-orange-500",
      category: "Cloud Platform",
      experience: "2+ years",
      proficiency: 80,
      description: "Cloud computing services and serverless architecture",
    },
    {
      name: "MySQL",
      icon: <FaDatabase className="text-blue-600" />,
      color: "bg-blue-600/20 text-blue-600",
      category: "Database",
      experience: "3+ years",
      proficiency: 85,
      description: "Relational database management and optimization",
    },
    {
      name: "React.js",
      icon: <FaReact className="text-cyan-400" />,
      color: "bg-cyan-400/20 text-cyan-400",
      category: "Frontend Framework",
      experience: "3+ years",
      proficiency: 90,
      description:
        "Modern React with hooks, context, and component architecture",
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
      category: "Frontend Technologies",
      experience: "4+ years",
      proficiency: 95,
      description: "Semantic HTML5 and modern CSS3 with responsive design",
    },
    {
      name: "Serverless",
      icon: <SiServerless className="text-purple-500" />,
      color: "bg-purple-500/20 text-purple-500",
      category: "Architecture",
      experience: "2+ years",
      proficiency: 80,
      description: "AWS Lambda and serverless application development",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-gray-300" />,
      color: "bg-gray-300/20 text-gray-300",
      category: "Backend Framework",
      experience: "3+ years",
      proficiency: 90,
      description: "Fast, unopinionated web framework for Node.js",
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-red-500" />,
      color: "bg-red-500/20 text-red-500",
      category: "Version Control",
      experience: "4+ years",
      proficiency: 85,
      description: "Version control and collaborative development workflows",
    },
  ];

  const categories = [
    { name: "Programming Languages", icon: FaCode, color: "emerald" },
    { name: "Frontend", icon: FaLaptopCode, color: "blue" },
    { name: "Backend", icon: FaTools, color: "purple" },
    { name: "Cloud & DevOps", icon: FaRocket, color: "orange" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="techstack"
      ref={ref}
      className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute top-32 right-32 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 3,
          }}
          className="absolute bottom-32 left-32 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        />

        {/* Tech-themed floating elements */}
        {[...Array(25)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute text-emerald-400/10 text-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: index * 0.2,
            }}>
            {["⚡", "🚀", "💻", "⚙️", "🔧"][Math.floor(Math.random() * 5)]}
          </motion.div>
        ))}
      </div>

      {/* Tech grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px",
          }}
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-6 relative z-10">
        {/* Enhanced section title */}
        <motion.div
          variants={titleVariants}
          className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}>
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="p-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-emerald-500/30">
              <FaTools className="text-2xl text-emerald-400" />
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tech Stack
            </h2>
          </motion.div>
          <motion.p
            variants={titleVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and expertise across
            various technologies, frameworks, and tools.
          </motion.p>
        </motion.div>

        {/* Skills showcase */}
        <div className="max-w-7xl mx-auto">
          {/* Skills grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                }}
                onHoverStart={() => setHoveredSkill(index)}
                onHoverEnd={() => setHoveredSkill(null)}
                className="group relative">
                <div className="relative p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-xl overflow-hidden transition-all duration-300 hover:border-emerald-500/30">
                  {/* Animated background */}
                  <motion.div
                    animate={{
                      opacity: hoveredSkill === index ? [0.1, 0.2, 0.1] : 0.05,
                      scale: hoveredSkill === index ? [1, 1.05, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 pointer-events-none"
                  />

                  {/* Skill content */}
                  <div className="relative z-10">
                    {/* Icon and name */}
                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        animate={{
                          rotate: hoveredSkill === index ? [0, 10, -10, 0] : 0,
                        }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl">
                        {skill.icon}
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {skill.name}
                        </h3>
                        <p className="text-xs text-gray-400">
                          {skill.category}
                        </p>
                      </div>
                    </div>

                    {/* Experience and proficiency */}
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Experience</span>
                        <span className="text-emerald-400 font-semibold">
                          {skill.experience}
                        </span>
                      </div>

                      {/* Proficiency bar */}
                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-sm">
                          <span className="text-gray-400">Proficiency</span>
                          <span className="text-blue-400 font-semibold">
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={
                              isInView
                                ? { width: `${skill.proficiency}%` }
                                : { width: 0 }
                            }
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="bg-gradient-to-r from-emerald-400 to-blue-400 h-2 rounded-full"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(16, 185, 129, 0.05), transparent)",
                      boxShadow: "0 0 30px rgba(16, 185, 129, 0.1)",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Skills summary */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              const categorySkills = skills.filter((skill) => {
                switch (category.name) {
                  case "Programming Languages":
                    return ["JavaScript", "Python"].includes(skill.name);
                  case "Frontend":
                    return ["React.js", "HTML/CSS"].includes(skill.name);
                  case "Backend":
                    return ["Node.js", "Express.js", "MySQL"].includes(
                      skill.name
                    );
                  case "Cloud & DevOps":
                    return ["AWS", "Serverless", "Git"].includes(skill.name);
                  default:
                    return false;
                }
              });

              return (
                <motion.div
                  key={category.name}
                  variants={categoryVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group">
                  <div className="relative p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl rounded-2xl border border-slate-700/30 shadow-lg overflow-hidden">
                    {/* Category header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                        <IconComponent className="text-emerald-400 text-xl" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {category.name}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {categorySkills.length} technologies
                        </p>
                      </div>
                    </div>

                    {/* Category skills */}
                    <div className="space-y-2">
                      {categorySkills.map((skill, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-300">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>

                    {/* Hover effect */}
                    <motion.div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ delay: 2, duration: 0.8 }}
          className="text-center mt-20">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-full border border-emerald-500/20 backdrop-blur-sm">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}>
              <FaTools className="text-emerald-400" />
            </motion.div>
            <span className="text-gray-300 font-medium">
              10+ Technologies Mastered
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <FaRocket className="text-blue-400" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default TechStack;
