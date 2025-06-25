"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
  FaCode,
  FaRocket,
  FaMapMarkerAlt,
  FaPhone,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/priyanshudubey/",
      color: "blue",
      label: "LinkedIn",
      username: "@priyanshudubey",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/priyanshudubey",
      color: "gray",
      label: "GitHub",
      username: "@priyanshudubey",
    },
    {
      icon: <FaTwitter />,
      href: "https://x.com/PriyanshuDube15",
      color: "cyan",
      label: "Twitter",
      username: "@PriyanshuDube15",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:priyanshu0dubey@gmail.com",
      color: "emerald",
      label: "Email",
      username: "priyanshu0dubey@gmail.com",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#techstack" },
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Wales, United Kingdom",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "priyanshu0dubey@gmail.com",
    },
    {
      icon: <FaPhone />,
      label: "WhatsApp",
      value: "+44 7444 764677",
    },
  ];

  const currentYear = new Date().getFullYear();

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        bg: "from-blue-500/10 to-blue-600/10",
        border: "border-blue-500/30",
        text: "text-blue-400",
        hover: "hover:text-blue-300 hover:border-blue-400/50",
        glow: "rgba(59, 130, 246, 0.2)",
      },
      gray: {
        bg: "from-gray-500/10 to-gray-600/10",
        border: "border-gray-500/30",
        text: "text-gray-400",
        hover: "hover:text-gray-300 hover:border-gray-400/50",
        glow: "rgba(107, 114, 128, 0.2)",
      },
      cyan: {
        bg: "from-cyan-400/10 to-cyan-500/10",
        border: "border-cyan-400/30",
        text: "text-cyan-400",
        hover: "hover:text-cyan-300 hover:border-cyan-400/50",
        glow: "rgba(6, 182, 212, 0.2)",
      },
      emerald: {
        bg: "from-emerald-500/10 to-emerald-600/10",
        border: "border-emerald-500/30",
        text: "text-emerald-400",
        hover: "hover:text-emerald-300 hover:border-emerald-400/50",
        glow: "rgba(16, 185, 129, 0.2)",
      },
    };
    return colors[color] || colors.emerald;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="footer"
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
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
          className="absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full"
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

      {/* Grid pattern overlay */}
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
        className="container mx-auto px-6 py-20 relative z-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 space-y-8">
            {/* Logo and title */}
            <div className="space-y-4">
              <motion.h2
                whileHover={{ scale: 1.02 }}
                className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Priyanshu Dubey
              </motion.h2>
              <div className="flex items-center gap-3 text-lg text-gray-400">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}>
                  <FaCode className="text-emerald-400" />
                </motion.div>
                <span>Software Engineer & Full-Stack Developer</span>
              </div>
            </div>

            {/* Description */}
            {/* <p className="text-xl text-gray-300 leading-relaxed">
              Passionate about creating innovative solutions at the intersection
              of technology and creativity. Specializing in modern web
              development, cloud architecture, and scalable systems.
            </p> */}

            {/* Status badges */}
            <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 backdrop-blur-sm">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}>
                  <FaRocket className="text-emerald-400" />
                </motion.div>
                <span className="text-emerald-300 text-sm font-medium">
                  Available for opportunities
                </span>
              </motion.div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm">
                <span className="text-blue-300 text-sm font-medium">
                  3+ Years Experience
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="mailto:priyanshu0dubey@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-semibold rounded-2xl hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25">
                <FaEnvelope className="text-lg" />
                Get In Touch
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                  }}>
                  →
                </motion.span>
              </motion.a>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <FaRocket className="text-emerald-400" />
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="block group">
                  <div className="flex items-center gap-3 text-gray-400 hover:text-emerald-400 transition-colors duration-300 py-2">
                    <motion.div
                      whileHover={{ rotate: 90 }}
                      className="w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <span className="border-b border-transparent group-hover:border-emerald-400/50 pb-1 transition-all duration-300">
                      {link.name}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              Contact Info
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                  <div className="p-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                    <span className="text-emerald-400">{info.icon}</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social media section */}
        <motion.div
          variants={itemVariants}
          className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Let's Connect
            </h3>
            <p className="text-gray-400 text-lg">
              Follow me on social media for updates and insights
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {socialLinks.map((link, index) => {
              const colorClasses = getColorClasses(link.color);
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative">
                  <div
                    className={`p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-2xl border ${colorClasses.border} ${colorClasses.hover} transition-all duration-300 text-center`}>
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className={`text-4xl ${colorClasses.text} mb-4 flex justify-center`}>
                      {link.icon}
                    </motion.div>

                    {/* Content */}
                    <h4 className="text-lg font-bold text-white mb-2">
                      {link.label}
                    </h4>
                    <p className="text-sm text-gray-400 mb-3">
                      {link.username}
                    </p>

                    {/* Connect button */}
                    <div
                      className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${colorClasses.bg} border ${colorClasses.border} rounded-full text-sm font-medium ${colorClasses.text}`}>
                      <span>Connect</span>
                      <FaExternalLinkAlt className="text-xs" />
                    </div>

                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, ${colorClasses.glow}, transparent)`,
                        boxShadow: `0 0 30px ${colorClasses.glow}`,
                      }}
                    />
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm mb-2">
              © {currentYear} Priyanshu Dubey. All Rights Reserved.
            </p>
            <p className="text-gray-500 text-xs flex items-center justify-center md:justify-start gap-2">
              Crafted with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                className="text-red-500">
                <FaHeart />
              </motion.span>
              and lots of ☕ in Wales, UK
            </p>
          </div>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="group p-4 bg-emerald-500/20 text-emerald-400 rounded-2xl border border-emerald-500/30 hover:bg-emerald-500/30 transition-all duration-300 backdrop-blur-sm"
            title="Back to top">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex items-center gap-2">
              <FaArrowUp className="text-lg" />
              <span className="text-sm font-medium hidden sm:block">
                Back to Top
              </span>
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Decorative bottom border */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 opacity-50 origin-left"
        />
      </motion.div>
    </footer>
  );
}

export default Footer;
