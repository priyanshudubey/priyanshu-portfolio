"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCode,
  FaRocket,
  FaUsers,
} from "react-icons/fa";

function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Systems Engineer",
      company: "Tata Consultancy Services",
      location: "Pune, India",
      duration: "July 2021 - Jan 2024",
      type: "full-time",
      description:
        "At TCS, I enhanced and maintained critical airline systems by applying modern technologies such as Node.js, AWS, JEST, Serverless, and REST API development. I successfully implemented crucial services, including Biometrics, Notifications, and Profiles, using Serverless architecture, resulting in a 60% increase in user engagement. Additionally, I developed and optimized Boarding Pass generation, REST APIs, and Akamai mapping to ensure seamless content delivery. To improve system performance and maintain code quality, I integrated Kafka, SonarQube, and Kibana into the workflow.",
      technologies: [
        "Node.js",
        "AWS",
        "Serverless",
        "Kafka",
        "SonarQube",
        "REST API",
        "JEST",
        "Kibana",
      ],
      achievements: [
        "60% increase in user engagement",
        "Implemented critical airline systems",
        "Optimized system performance",
        "Enhanced code quality workflows",
      ],
      color: "emerald",
      icon: FaRocket,
    },
    {
      title: "Technology Development Intern",
      company: "Triluxo Technologies",
      location: "Remote",
      duration: "Oct 2020 - Dec 2020",
      type: "internship",
      description:
        "During my internship at Triluxo Technologies, I engineered a feature-rich chatbot using Node.js and Google Dialogflow for hotel room service management. This enabled guests to effortlessly request services like food ordering and room cleaning. I developed a robust Node.js backend to facilitate communication between the chatbot and the hotel's service system. Leveraging Google Dialogflow, I added advanced natural language processing features and collaborated with front-end developers to ensure a cohesive and user-friendly experience.",
      technologies: [
        "Node.js",
        "Dialogflow",
        "Backend Development",
        "NLP",
        "API Integration",
      ],
      achievements: [
        "Built feature-rich chatbot system",
        "Integrated natural language processing",
        "Collaborated with frontend team",
        "Enhanced user experience",
      ],
      color: "blue",
      icon: FaCode,
    },
    {
      title: "Software Developer Intern",
      company: "Gallant Fusion Tech",
      location: "Remote",
      duration: "July 2020 - Sep 2020",
      type: "internship",
      description:
        "At Gallant Fusion Tech, I architected and implemented the backend and database infrastructure for a golf game application using Node.js, Express.js, and MySQL. I designed a scalable and optimized system to ensure seamless functionality for the app. By incorporating passport-jwt for endpoint validation, I enhanced the application's security. Additionally, I collaborated closely with the team to conceptualize and develop efficient server-side solutions tailored for a robust user experience.",
      technologies: [
        "Node.js",
        "Express.js",
        "MySQL",
        "Passport-JWT",
        "Database Design",
        "Security",
      ],
      achievements: [
        "Architected scalable backend system",
        "Enhanced application security",
        "Optimized database performance",
        "Delivered robust server solutions",
      ],
      color: "purple",
      icon: FaUsers,
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
      },
      blue: {
        bg: "from-blue-500/10 to-cyan-500/10",
        border: "border-blue-500/30",
        text: "text-blue-400",
        badge: "bg-blue-500/20 text-blue-300 border-blue-500/30",
        glow: "rgba(59, 130, 246, 0.1)",
      },
      purple: {
        bg: "from-purple-500/10 to-pink-500/10",
        border: "border-purple-500/30",
        text: "text-purple-400",
        badge: "bg-purple-500/20 text-purple-300 border-purple-500/30",
        glow: "rgba(147, 51, 234, 0.1)",
      },
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section
      id="experience"
      ref={ref}
      className="min-h-screen py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
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

      {/* Professional grid pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
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
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
              className="p-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-emerald-500/30">
              <FaBriefcase className="text-2xl text-emerald-400" />
            </motion.div>
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </h2>
          </motion.div>
          <motion.p
            variants={titleVariants}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            My professional journey in software development, from internships to
            full-time engineering roles, building scalable solutions and driving
            innovation.
          </motion.p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <motion.div
            variants={timelineVariants}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-400 via-blue-400 to-purple-400 rounded-full origin-top hidden lg:block"
          />

          {/* Experience cards */}
          <div className="space-y-12 lg:space-y-24">
            {experiences.map((exp, index) => {
              const colorClasses = getColorClasses(exp.color);
              const IconComponent = exp.icon;

              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}>
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ x: "-50%" }}
                    animate={{ x: "-50%" }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r ${colorClasses.bg} rounded-full border-4 border-slate-900 z-10 hidden lg:flex items-center justify-center`}>
                    <IconComponent className={`text-lg ${colorClasses.text}`} />
                    <motion.div
                      animate={{ scale: [1, 1.8, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className={`absolute inset-0 bg-gradient-to-r ${colorClasses.bg} rounded-full opacity-30`}
                    />
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      scale: 1.02,
                    }}
                    className="w-full lg:w-1/2 group">
                    <div
                      className={`relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-3xl border ${colorClasses.border} shadow-2xl overflow-hidden`}>
                      {/* Animated background gradient */}
                      <motion.div
                        animate={{
                          opacity: [0.1, 0.3, 0.1],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                        className={`absolute inset-0 bg-gradient-to-br ${colorClasses.bg} pointer-events-none`}
                      />

                      {/* Type badge */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                          exp.type === "full-time"
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        }`}>
                        {exp.type === "full-time"
                          ? "💼 Full-time"
                          : "🎓 Internship"}
                      </motion.div>

                      {/* Header */}
                      <div className="relative z-10 mb-6">
                        <motion.div
                          initial={{ scale: 1, rotate: 0 }}
                          whileHover={{
                            scale: 1.1,
                            rotate: [0, 5, -5, 0],
                          }}
                          className="inline-flex items-center gap-3 mb-4">
                          <div
                            className={`p-3 rounded-xl bg-gradient-to-r ${colorClasses.bg} border ${colorClasses.border}`}>
                            <IconComponent
                              className={`text-xl ${colorClasses.text}`}
                            />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">
                              {exp.title}
                            </h3>
                            <p className={`font-semibold ${colorClasses.text}`}>
                              {exp.company}
                            </p>
                          </div>
                        </motion.div>

                        {/* Meta information */}
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center gap-2">
                            <FaCalendarAlt className="text-emerald-400" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="text-blue-400" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="relative z-10 space-y-6">
                        <p className="text-gray-300 leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Key Achievements */}
                        <div className="space-y-3">
                          <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                            Key Achievements
                          </h5>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {exp.achievements.map((achievement, idx) => (
                              <motion.div
                                key={idx}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="flex items-center gap-2 text-sm text-gray-300">
                                <div
                                  className={`w-2 h-2 rounded-full ${colorClasses.text.replace(
                                    "text-",
                                    "bg-"
                                  )}`}
                                />
                                <span>{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="space-y-3">
                          <h5 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                            Technologies Used
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <motion.span
                                key={idx}
                                whileHover={{ scale: 1.05, y: -2 }}
                                className={`px-3 py-1 text-xs font-medium rounded-full border ${colorClasses.badge}`}>
                                {tech}
                              </motion.span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Hover glow effect */}
                      <motion.div
                        className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                        style={{
                          background: `linear-gradient(135deg, ${colorClasses.glow}, transparent)`,
                          boxShadow: `0 0 50px ${colorClasses.glow}`,
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

        {/* Professional summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-20">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-purple-500/10 rounded-full border border-emerald-500/20 backdrop-blur-sm">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear",
              }}>
              <FaBriefcase className="text-emerald-400" />
            </motion.div>
            <span className="text-gray-300 font-medium">
              3+ Years of Professional Experience
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

export default Experience;
