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
  FaServer,
  FaCloud,
} from "react-icons/fa";
import { SiServerless, SiExpress } from "react-icons/si";

function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("all");

  const skills = [
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-4xl" />,
      color: "yellow",
      category: "languages",
      experience: "3+ years",
      proficiency: 90,
      description: "Modern ES6+ JavaScript for full-stack development",
    },
    {
      name: "Python",
      icon: <FaPython className="text-4xl" />,
      color: "blue",
      category: "languages",
      experience: "2+ years",
      proficiency: 75,
      description: "Data analysis, automation, and backend development",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="text-4xl" />,
      color: "green",
      category: "backend",
      experience: "3+ years",
      proficiency: 95,
      description: "Server-side JavaScript runtime for scalable applications",
    },
    {
      name: "React.js",
      icon: <FaReact className="text-4xl" />,
      color: "cyan",
      category: "frontend",
      experience: "3+ years",
      proficiency: 90,
      description: "Modern React with hooks and component architecture",
    },
    {
      name: "AWS",
      icon: <FaAws className="text-4xl" />,
      color: "orange",
      category: "cloud",
      experience: "2+ years",
      proficiency: 80,
      description: "Cloud computing services and serverless architecture",
    },
    {
      name: "MySQL",
      icon: <FaDatabase className="text-4xl" />,
      color: "blue",
      category: "backend",
      experience: "3+ years",
      proficiency: 85,
      description: "Relational database management and optimization",
    },
    {
      name: "HTML/CSS",
      icon: (
        <div className="flex items-center text-4xl">
          <FaHtml5 className="text-orange-600 mr-1" />
          <FaCss3Alt className="text-blue-500" />
        </div>
      ),
      color: "orange",
      category: "frontend",
      experience: "4+ years",
      proficiency: 95,
      description: "Semantic HTML5 and modern CSS3 with responsive design",
    },
    {
      name: "Serverless",
      icon: <SiServerless className="text-4xl" />,
      color: "purple",
      category: "cloud",
      experience: "2+ years",
      proficiency: 80,
      description: "AWS Lambda and serverless application development",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="text-4xl" />,
      color: "gray",
      category: "backend",
      experience: "3+ years",
      proficiency: 90,
      description: "Fast, unopinionated web framework for Node.js",
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-4xl" />,
      color: "red",
      category: "tools",
      experience: "4+ years",
      proficiency: 85,
      description: "Version control and collaborative development workflows",
    },
  ];

  const categories = [
    { id: "all", name: "All Technologies", icon: FaCode, color: "emerald" },
    { id: "languages", name: "Languages", icon: FaCode, color: "blue" },
    { id: "frontend", name: "Frontend", icon: FaLaptopCode, color: "cyan" },
    { id: "backend", name: "Backend", icon: FaServer, color: "green" },
    { id: "cloud", name: "Cloud & DevOps", icon: FaCloud, color: "orange" },
    { id: "tools", name: "Tools", icon: FaTools, color: "red" },
  ];

  const getColorClasses = (color) => {
    const colors = {
      yellow: {
        bg: "from-yellow-500/10 to-yellow-600/10",
        border: "border-yellow-500/30",
        text: "text-yellow-500",
        glow: "shadow-yellow-500/20",
      },
      blue: {
        bg: "from-blue-500/10 to-blue-600/10",
        border: "border-blue-500/30",
        text: "text-blue-500",
        glow: "shadow-blue-500/20",
      },
      green: {
        bg: "from-green-500/10 to-green-600/10",
        border: "border-green-500/30",
        text: "text-green-500",
        glow: "shadow-green-500/20",
      },
      cyan: {
        bg: "from-cyan-400/10 to-cyan-500/10",
        border: "border-cyan-400/30",
        text: "text-cyan-400",
        glow: "shadow-cyan-400/20",
      },
      orange: {
        bg: "from-orange-500/10 to-orange-600/10",
        border: "border-orange-500/30",
        text: "text-orange-500",
        glow: "shadow-orange-500/20",
      },
      purple: {
        bg: "from-purple-500/10 to-purple-600/10",
        border: "border-purple-500/30",
        text: "text-purple-500",
        glow: "shadow-purple-500/20",
      },
      gray: {
        bg: "from-gray-400/10 to-gray-500/10",
        border: "border-gray-400/30",
        text: "text-gray-400",
        glow: "shadow-gray-400/20",
      },
      red: {
        bg: "from-red-500/10 to-red-600/10",
        border: "border-red-500/30",
        text: "text-red-500",
        glow: "shadow-red-500/20",
      },
    };
    return colors[color] || colors.blue;
  };

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

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
            opacity: [0.5, 0.25, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-32 right-20 w-96 h-96 bg-gradient-to-r from-emerald-500/15 to-blue-500/15 rounded-full blur-sm"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 3,
          }}
          className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-sm"
        />

        {/* Professional floating elements */}
        {[...Array(12)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.3,
            }}>
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-400/40 to-blue-400/40 rounded-full" />
          </motion.div>
        ))}
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-6 relative z-10">
        {/* Section title */}
        <motion.div
          variants={titleVariants}
          className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-3 mb-6"
            whileHover={{ scale: 1.05 }}>
            <motion.div
              animate={{ rotate: [0, 360] }}
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
            Technologies and tools I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          variants={titleVariants}
          className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border backdrop-blur-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400"
                    : "bg-slate-800/50 border-slate-700/50 text-gray-400 hover:text-emerald-400 hover:border-emerald-500/30"
                }`}>
                <IconComponent className="text-lg" />
                <span className="font-medium">{category.name}</span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {filteredSkills.map((skill, index) => {
            const colorClasses = getColorClasses(skill.color);
            return (
              <motion.div
                key={skill.name}
                layout
                variants={skillVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                }}
                className="group relative">
                <div
                  className={`relative p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl border ${colorClasses.border} shadow-xl overflow-hidden transition-all duration-300 hover:${colorClasses.glow} hover:shadow-2xl`}>
                  {/* Animated background */}
                  <motion.div
                    animate={{
                      opacity: [0.05, 0.1, 0.05],
                      scale: [1, 1.02, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                    className={`absolute inset-0 bg-gradient-to-br ${colorClasses.bg} pointer-events-none`}
                  />

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`mb-4 ${colorClasses.text} flex justify-center`}>
                      {skill.icon}
                    </motion.div>

                    {/* Name */}
                    <h3 className="text-lg font-bold text-white mb-2">
                      {skill.name}
                    </h3>

                    {/* Experience */}
                    <div className="flex justify-center mb-3">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${colorClasses.bg} border ${colorClasses.border} ${colorClasses.text}`}>
                        {skill.experience}
                      </span>
                    </div>

                    {/* Proficiency bar */}
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-400">Proficiency</span>
                        <span className={`font-semibold ${colorClasses.text}`}>
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
                          className={`bg-gradient-to-r ${colorClasses.bg.replace(
                            "/10",
                            ""
                          )} h-2 rounded-full`}
                          style={{
                            background: `linear-gradient(90deg, ${
                              skill.color === "yellow"
                                ? "#eab308"
                                : skill.color === "blue"
                                ? "#3b82f6"
                                : skill.color === "green"
                                ? "#22c55e"
                                : skill.color === "cyan"
                                ? "#06b6d4"
                                : skill.color === "orange"
                                ? "#f97316"
                                : skill.color === "purple"
                                ? "#a855f7"
                                : skill.color === "gray"
                                ? "#6b7280"
                                : "#ef4444"
                            }, ${
                              skill.color === "yellow"
                                ? "#ca8a04"
                                : skill.color === "blue"
                                ? "#2563eb"
                                : skill.color === "green"
                                ? "#16a34a"
                                : skill.color === "cyan"
                                ? "#0891b2"
                                : skill.color === "orange"
                                ? "#ea580c"
                                : skill.color === "purple"
                                ? "#9333ea"
                                : skill.color === "gray"
                                ? "#4b5563"
                                : "#dc2626"
                            })`,
                          }}
                        />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${
                        skill.color === "yellow"
                          ? "rgba(234, 179, 8, 0.1)"
                          : skill.color === "blue"
                          ? "rgba(59, 130, 246, 0.1)"
                          : skill.color === "green"
                          ? "rgba(34, 197, 94, 0.1)"
                          : skill.color === "cyan"
                          ? "rgba(6, 182, 212, 0.1)"
                          : skill.color === "orange"
                          ? "rgba(249, 115, 22, 0.1)"
                          : skill.color === "purple"
                          ? "rgba(168, 85, 247, 0.1)"
                          : skill.color === "gray"
                          ? "rgba(107, 114, 128, 0.1)"
                          : "rgba(239, 68, 68, 0.1)"
                      }, transparent)`,
                      boxShadow: `0 0 30px ${
                        skill.color === "yellow"
                          ? "rgba(234, 179, 8, 0.2)"
                          : skill.color === "blue"
                          ? "rgba(59, 130, 246, 0.2)"
                          : skill.color === "green"
                          ? "rgba(34, 197, 94, 0.2)"
                          : skill.color === "cyan"
                          ? "rgba(6, 182, 212, 0.2)"
                          : skill.color === "orange"
                          ? "rgba(249, 115, 22, 0.2)"
                          : skill.color === "purple"
                          ? "rgba(168, 85, 247, 0.2)"
                          : skill.color === "gray"
                          ? "rgba(107, 114, 128, 0.2)"
                          : "rgba(239, 68, 68, 0.2)"
                      }`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-16">
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
