"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaTrophy,
  FaUniversity,
} from "react-icons/fa";

function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: "Master of Science - M.Sc",
      field: "Advanced Computer Science",
      institution: "Swansea University",
      duration: "January 2024 - March 2025",
      details:
        "Advanced Computer Science with a focus on emerging technologies, cloud computing, artificial intelligence, and distributed systems. Specializing in scalable software architectures and modern development practices.",
      location: "Wales, United Kingdom",
      gpa: "Pass with Merit",
      status: "completed",
      highlights: [
        "Cloud Computing",
        "AI & Machine Learning",
        "Distributed Systems",
        "Software Architecture",
      ],
      color: "emerald",
    },
    {
      degree: "Bachelor of Technology",
      field: "Computer Science & Technology",
      institution: "Sagar Institute Of Science and Technology",
      duration: "August 2017 - June 2021",
      details:
        "Computer Science and Technology with specialization in Software Engineering, Data Structures, Algorithms, and Web Development. Strong foundation in programming fundamentals and software design principles.",
      location: "Bhopal, Madhya Pradesh, India",
      gpa: "BTech with Honors",
      status: "completed",
      highlights: [
        "Software Engineering",
        "Data Structures",
        "Web Development",
        "Database Systems",
      ],
      color: "blue",
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
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="education"
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
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
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
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: index * 0.2,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
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
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="p-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-emerald-500/30">
              <FaGraduationCap className="text-2xl text-emerald-400" />
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-300 to-blue-400 bg-clip-text text-transparent">
              Education
            </h2>
          </motion.div>
          <motion.p
            variants={titleVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            My academic journey in computer science and technology, building the
            foundation for innovation and excellence.
          </motion.p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <motion.div
            variants={timelineVariants}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 via-blue-400 to-purple-400 rounded-full origin-top hidden lg:block"
          />

          {/* Education cards */}
          <div className="space-y-12 lg:space-y-24">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}>
                {/* Timeline dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full border-4 border-slate-900 z-10 hidden lg:block">
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full opacity-30"
                  />
                </motion.div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    rotateY: index % 2 === 0 ? 2 : -2,
                  }}
                  className="w-full lg:w-1/2 group">
                  <div className="relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl border border-emerald-500/20 shadow-2xl overflow-hidden">
                    {/* Animated background gradient */}
                    <motion.div
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                      className={`absolute inset-0 bg-gradient-to-br ${
                        edu.color === "emerald"
                          ? "from-emerald-500/10 to-blue-500/10"
                          : "from-blue-500/10 to-purple-500/10"
                      } pointer-events-none`}
                    />

                    {/* Status badge */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                        edu.status === "current"
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                          : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      }`}>
                      {edu.status === "current"
                        ? "🎓 In Progress"
                        : "✅ Completed"}
                    </motion.div>

                    {/* Header */}
                    <div className="relative z-10 mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
                        className="inline-flex items-center gap-3 mb-4">
                        <div
                          className={`p-3 rounded-xl ${
                            edu.color === "emerald"
                              ? "bg-emerald-500/20 border border-emerald-500/30"
                              : "bg-blue-500/20 border border-blue-500/30"
                          }`}>
                          <FaUniversity
                            className={`text-xl ${
                              edu.color === "emerald"
                                ? "text-emerald-400"
                                : "text-blue-400"
                            }`}
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {edu.degree}
                          </h3>
                          <p
                            className={`font-semibold ${
                              edu.color === "emerald"
                                ? "text-emerald-400"
                                : "text-blue-400"
                            }`}>
                            {edu.field}
                          </p>
                        </div>
                      </motion.div>

                      <motion.h4
                        whileHover={{ scale: 1.02 }}
                        className="text-xl font-semibold text-gray-200 mb-2">
                        {edu.institution}
                      </motion.h4>

                      {/* Meta information */}
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-emerald-400" />
                          <span>{edu.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="text-blue-400" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 space-y-4">
                      <p className="text-gray-300 leading-relaxed">
                        {edu.details}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-3">
                        <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                          Key Areas
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, idx) => (
                            <motion.span
                              key={idx}
                              whileHover={{ scale: 1.05 }}
                              className={`px-3 py-1 text-xs font-medium rounded-full ${
                                edu.color === "emerald"
                                  ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                                  : "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                              }`}>
                              {highlight}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* GPA/Performance */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`p-4 rounded-xl ${
                          edu.color === "emerald"
                            ? "bg-emerald-500/10 border border-emerald-500/20"
                            : "bg-blue-500/10 border border-blue-500/20"
                        }`}>
                        <div className="flex items-center gap-2">
                          <FaTrophy
                            className={`${
                              edu.color === "emerald"
                                ? "text-emerald-400"
                                : "text-blue-400"
                            }`}
                          />
                          <span className="text-sm font-semibold text-gray-300">
                            Academic Performance:
                          </span>
                          <span
                            className={`font-bold ${
                              edu.color === "emerald"
                                ? "text-emerald-400"
                                : "text-blue-400"
                            }`}>
                            {edu.gpa}
                          </span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Hover glow effect */}
                    <motion.div
                      className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                        edu.color === "emerald"
                          ? "bg-gradient-to-br from-emerald-500/5 to-blue-500/5"
                          : "bg-gradient-to-br from-blue-500/5 to-purple-500/5"
                      }`}
                      style={{
                        boxShadow: `0 0 50px ${
                          edu.color === "emerald"
                            ? "rgba(16, 185, 129, 0.1)"
                            : "rgba(59, 130, 246, 0.1)"
                        }`,
                      }}
                    />
                  </div>
                </motion.div>

                {/* Spacer for timeline */}
                <div className="w-full lg:w-1/2 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-20">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full border border-emerald-500/20 backdrop-blur-sm">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}>
              <FaGraduationCap className="text-emerald-400" />
            </motion.div>
            <span className="text-gray-300 font-medium">
              Continuous Learning Journey
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Education;
