"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaRocket,
  FaTools,
  FaStar,
  FaCalendarAlt,
} from "react-icons/fa";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: "Resume Builder",
      category: "Full-Stack Application",
      description:
        "A comprehensive full-stack application that revolutionizes resume creation with ATS-friendly templates, real-time preview, and drag-and-drop functionality. Built with modern technologies to provide seamless PDF generation and an intuitive user experience.",
      technologies: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "PDF.js",
        "JWT",
        "Tailwind CSS",
      ],
      githubLink: "https://github.com/priyanshudubey/resume-builder",
      demoLink: "#",
      status: "completed",
      year: "Januray 2025",
      features: [
        "ATS-friendly resume templates",
        "Real-time preview functionality",
        "Drag-and-drop interface",
        "Seamless PDF generation",
        "User authentication system",
        "Template customization",
      ],
      color: "emerald",
      icon: FaCode,
      type: "web-app",
    },
    {
      title: "Email Template System",
      category: "Dynamic Web Platform",
      description:
        "An advanced email template management system featuring dynamic placeholder rendering, live preview capabilities, and automated email sending. Designed for scalability and ease of use with a modern tech stack.",
      technologies: [
        "React.js",
        "Node.js",
        "MySQL",
        "Mustache.js",
        "Express",
        "REST API",
      ],
      githubLink: "https://github.com/priyanshudubey/email-template-system",
      demoLink: "#",
      status: "completed",
      year: "November 2024",
      features: [
        "Dynamic template creation",
        "Live preview functionality",
        "Placeholder rendering",
        "Automated email sending",
        "Template management system",
        "RESTful API integration",
      ],
      color: "blue",
      icon: FaTools,
      type: "platform",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const getColorClasses = (color) => {
    const colors = {
      emerald: {
        bg: "from-emerald-500/10 to-green-500/10",
        border: "border-emerald-500/30",
        text: "text-emerald-400",
        badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
        glow: "rgba(16, 185, 129, 0.1)",
        button:
          "from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500",
      },
      blue: {
        bg: "from-blue-500/10 to-cyan-500/10",
        border: "border-blue-500/30",
        text: "text-blue-400",
        badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
        glow: "rgba(59, 130, 246, 0.1)",
        button:
          "from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500",
      },
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-sm"
        />

        {/* Floating particles */}
        {[...Array(15)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-2 h-2 bg-emerald-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.2,
            }}
          />
        ))}
      </div>

      {/* Code pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
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
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="p-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-emerald-500/30">
              <FaRocket className="text-2xl text-emerald-400" />
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </h2>
          </motion.div>
          <motion.p
            variants={titleVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A showcase of my technical expertise through full-stack
            applications, demonstrating problem-solving skills and modern
            development practices.
          </motion.p>
        </motion.div>

        {/* Projects showcase */}
        <div className="relative max-w-7xl mx-auto">
          {/* Timeline line */}
          <motion.div
            variants={timelineVariants}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 via-blue-400 to-purple-400 rounded-full origin-top hidden lg:block"
          />

          {/* Project cards */}
          <div className="space-y-16 lg:space-y-24">
            {projects.map((project, index) => {
              const colorClasses = getColorClasses(project.color);
              const IconComponent = project.icon;

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                  onHoverStart={() => setHoveredProject(index)}
                  onHoverEnd={() => setHoveredProject(null)}>
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ x: "-50%" }}
                    animate={{ x: "-50%" }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r ${colorClasses.bg} rounded-full border-4 border-slate-900 z-10 hidden lg:flex items-center justify-center`}>
                    <IconComponent className={`text-lg ${colorClasses.text}`} />
                    <motion.div
                      animate={{ scale: [1, 2, 1] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className={`absolute inset-0 bg-gradient-to-r ${colorClasses.bg} rounded-full opacity-30`}
                    />
                  </motion.div>

                  {/* Project showcase card */}
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                    }}
                    className="w-full lg:w-1/2 group">
                    <div
                      className={`relative p-8 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl border ${colorClasses.border} shadow-2xl overflow-hidden`}>
                      {/* Animated background */}
                      <motion.div
                        animate={{
                          opacity:
                            hoveredProject === index ? [0.1, 0.2, 0.1] : 0.05,
                          scale: hoveredProject === index ? [1, 1.05, 1] : 1,
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        className={`absolute inset-0 bg-gradient-to-br ${colorClasses.bg} pointer-events-none`}
                      />

                      {/* Status and year badges */}
                      <div className="absolute top-4 right-4 flex gap-2">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-semibold">
                          ✅ {project.status}
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className={`px-3 py-1 rounded-full text-xs font-semibold border ${colorClasses.badge}`}>
                          <FaCalendarAlt className="inline mr-1" />
                          {project.year}
                        </motion.div>
                      </div>

                      {/* Header */}
                      <div className="relative z-10 mb-6">
                        <motion.div
                          initial={{ scale: 1, rotate: 0 }}
                          whileHover={{
                            scale: 1.1,
                            rotate: [0, 5, -5, 0],
                          }}
                          className="mb-4">
                          <div className="flex items-center gap-3 mb-2">
                            <div
                              className={`p-2 rounded-lg bg-gradient-to-r ${colorClasses.bg} border ${colorClasses.border}`}>
                              <IconComponent
                                className={`text-lg ${colorClasses.text}`}
                              />
                            </div>
                            <span className="text-sm text-gray-400 font-medium">
                              {project.category}
                            </span>
                          </div>
                          <h3 className="text-3xl font-bold text-white mb-2">
                            {project.title}
                          </h3>
                        </motion.div>
                      </div>

                      {/* Project mockup placeholder */}
                      {/* <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative mb-6 h-48 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl border border-gray-600/30 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <FaEye
                              className={`text-4xl ${colorClasses.text} mb-2 mx-auto`}
                            />
                            <p className="text-gray-400 text-sm">
                              Project Preview
                            </p>
                          </div>
                        </div>
                        <motion.div
                          animate={{
                            opacity: [0.1, 0.3, 0.1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "reverse",
                          }}
                          className={`absolute inset-0 bg-gradient-to-br ${colorClasses.bg}`}
                        />
                      </motion.div> */}

                      {/* Content */}
                      <div className="relative z-10 space-y-6">
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {project.description}
                        </p>

                        {/* Key Features */}
                        <div className="space-y-3">
                          <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-2">
                            <FaStar className={colorClasses.text} />
                            Key Features
                          </h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {project.features.map((feature, idx) => (
                              <motion.div
                                key={idx}
                                whileHover={{ scale: 1.02, x: 8 }}
                                className="flex items-center gap-2 text-sm text-gray-300 p-2 rounded-lg bg-slate-800/30">
                                <div
                                  className={`w-2 h-2 rounded-full ${colorClasses.text.replace(
                                    "text-",
                                    "bg-"
                                  )}`}
                                />
                                <span>{feature}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="space-y-3">
                          <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                            Tech Stack
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <motion.span
                                key={idx}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className={`px-4 py-2 text-sm font-medium rounded-full border ${colorClasses.badge} backdrop-blur-sm`}>
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <motion.a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-xl transition-all duration-300 border border-gray-600">
                            <FaGithub className="text-lg" />
                            View Code
                          </motion.a>
                          <motion.a
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${colorClasses.button} text-black font-semibold rounded-xl transition-all duration-300 shadow-lg`}>
                            <FaExternalLinkAlt className="text-lg" />
                            Live Demo
                          </motion.a>
                        </div>
                      </div>

                      {/* Hover glow effect */}
                      <motion.div
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: `linear-gradient(135deg, ${colorClasses.glow}, transparent)`,
                          boxShadow: `0 0 80px ${colorClasses.glow}`,
                        }}
                      />
                    </div>
                  </motion.div>

                  {/* Spacer for timeline */}
                  <div className="w-full lg:w-1/2 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
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
                duration: 5,
                repeat: Infinity,
                ease: "linear",
              }}>
              <FaCode className="text-emerald-400" />
            </motion.div>
            <span className="text-gray-300 font-medium">
              More Projects Coming Soon
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}>
              <FaRocket className="text-blue-400" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
