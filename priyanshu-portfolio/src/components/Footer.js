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
} from "react-icons/fa";

function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/priyanshudubey/",
      color: "text-blue-500 hover:text-blue-400",
      bgColor: "bg-blue-500/20 border-blue-500/30",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/priyanshudubey",
      color: "text-gray-300 hover:text-white",
      bgColor: "bg-gray-500/20 border-gray-500/30",
      label: "GitHub",
    },
    {
      icon: <FaTwitter />,
      href: "https://x.com/PriyanshuDube15",
      color: "text-cyan-500 hover:text-cyan-400",
      bgColor: "bg-cyan-500/20 border-cyan-500/30",
      label: "Twitter",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:priyanshu0dubey@gmail.com",
      color: "text-emerald-500 hover:text-emerald-400",
      bgColor: "bg-emerald-500/20 border-emerald-500/30",
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Tech Stack", href: "#techstack" },
  ];

  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
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
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 2,
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        />

        {/* Floating elements */}
        {[...Array(15)].map((_, index) => (
          <motion.div
            key={index}
            className="absolute text-emerald-400/10 text-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: index * 0.3,
            }}>
            {["✨", "💫", "⭐", "🌟"][Math.floor(Math.random() * 4)]}
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-2 space-y-6">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Priyanshu Dubey
              </h2>
              <div className="flex items-center gap-2 text-lg text-gray-400">
                <FaCode className="text-emerald-400" />
                <span>Software Engineer & Full-Stack Developer</span>
              </div>
            </motion.div>

            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Passionate about creating innovative solutions at the intersection
              of technology and creativity. Specializing in modern web
              development, cloud architecture, and scalable systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                <FaRocket className="text-emerald-400" />
                <span className="text-emerald-300 text-sm font-medium">
                  Available for opportunities
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20">
                <span className="text-blue-300 text-sm font-medium">
                  3+ Years Experience
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick links */}
          <motion.div
            variants={itemVariants}
            className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="block text-gray-400 hover:text-emerald-400 transition-colors duration-300 py-2">
                  <span className="border-b border-transparent hover:border-emerald-400/50 pb-1">
                    {link.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Social links section */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={socialVariants}
                whileHover={{
                  scale: 1.2,
                  y: -8,
                  rotate: [0, 5, -5, 0],
                }}
                whileTap={{ scale: 0.9 }}
                className={`group relative p-4 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${link.bgColor}`}
                title={link.label}>
                <span
                  className={`text-2xl ${link.color} transition-colors duration-300`}>
                  {link.icon}
                </span>

                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-800 text-white text-sm rounded-lg border border-slate-600 pointer-events-none">
                  {link.label}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800" />
                </motion.div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${
                      link.color.includes("blue")
                        ? "rgba(59, 130, 246, 0.1)"
                        : link.color.includes("cyan")
                        ? "rgba(6, 182, 212, 0.1)"
                        : link.color.includes("emerald")
                        ? "rgba(16, 185, 129, 0.1)"
                        : "rgba(107, 114, 128, 0.1)"
                    })`,
                    boxShadow: `0 0 20px ${
                      link.color.includes("blue")
                        ? "rgba(59, 130, 246, 0.2)"
                        : link.color.includes("cyan")
                        ? "rgba(6, 182, 212, 0.2)"
                        : link.color.includes("emerald")
                        ? "rgba(16, 185, 129, 0.2)"
                        : "rgba(107, 114, 128, 0.2)"
                    }`,
                  }}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            href="mailto:priyanshu0dubey@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-semibold rounded-2xl hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25">
            <FaEnvelope className="text-lg" />
            Get In Touch
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
              →
            </motion.span>
          </motion.a>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-slate-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
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
              and lots of ☕
            </p>
          </div>

          {/* Scroll to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30 hover:bg-emerald-500/30 transition-all duration-300 group"
            title="Back to top">
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <FaArrowUp className="text-lg" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 opacity-50" />
      </motion.div>
    </footer>
  );
}

export default Footer;
