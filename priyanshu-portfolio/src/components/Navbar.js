"use client";

import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { to: "home", label: "Home", icon: "🏠" },
    { to: "education", label: "Education", icon: "🎓" },
    { to: "experience", label: "Experience", icon: "💼" },
    { to: "projects", label: "Projects", icon: "🚀" },
    { to: "techstack", label: "Technologies", icon: "⚡" },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.to);
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navbarVariants = {
    top: {
      backgroundColor: "rgba(15, 23, 42, 0.1)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid rgba(16, 185, 129, 0.1)",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    },
    scrolled: {
      backgroundColor: "rgba(15, 23, 42, 0.95)",
      backdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(16, 185, 129, 0.2)",
      boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.3)",
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const linkVariants = {
    rest: {
      scale: 1,
      y: 0,
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <>
      <motion.nav
        initial="top"
        animate={scrolled ? "scrolled" : "top"}
        variants={navbarVariants}
        className="fixed w-full z-50 top-0 left-0 transition-all duration-300">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Enhanced Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group">
              <motion.a
                href="https://priyanshudubey.com"
                className="relative z-10 text-2xl lg:text-3xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-300 to-blue-400 bg-clip-text text-transparent">
                pd.
              </motion.a>

              {/* Glowing effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  variants={linkVariants}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  className="relative">
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className={`relative px-4 py-2 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-2 group ${
                      activeSection === link.to
                        ? "text-emerald-400 bg-emerald-500/10"
                        : "text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/5"
                    }`}>
                    <span className="text-sm opacity-70 group-hover:opacity-100 transition-opacity">
                      {link.icon}
                    </span>
                    <span className="font-medium">{link.label}</span>

                    {/* Active indicator */}
                    {activeSection === link.to && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-xl border border-emerald-500/20"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}

              {/* CTA Button */}
              <motion.a
                href="mailto:priyanshu0dubey@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ml-4 px-6 py-2 bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-semibold rounded-xl hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-emerald-500/25">
                Contact
              </motion.a>
            </div>

            {/* Enhanced Mobile Menu Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden relative p-2 text-2xl text-emerald-400 bg-emerald-500/10 rounded-xl border border-emerald-500/20 backdrop-blur-sm"
              onClick={() => setIsOpen(!isOpen)}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? "close" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}>
                  {isOpen ? <HiX /> : <HiMenu />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
              />

              {/* Menu Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={mobileMenuVariants}
                className="lg:hidden absolute top-full left-0 right-0 mx-4 mt-2 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-emerald-500/20 shadow-2xl overflow-hidden">
                <div className="p-6 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.to}
                      variants={mobileItemVariants}
                      whileHover={{ x: 8 }}
                      whileTap={{ scale: 0.98 }}>
                      <Link
                        to={link.to}
                        smooth={true}
                        duration={500}
                        offset={-70}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
                          activeSection === link.to
                            ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                            : "text-gray-300 hover:text-emerald-400 hover:bg-emerald-500/5"
                        }`}>
                        <span className="text-lg">{link.icon}</span>
                        <span className="font-medium text-lg">
                          {link.label}
                        </span>
                        {activeSection === link.to && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="ml-auto w-2 h-2 bg-emerald-400 rounded-full"
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}

                  {/* Mobile CTA */}
                  <motion.div
                    variants={mobileItemVariants}
                    className="pt-4 border-t border-gray-700/50">
                    <motion.a
                      href="mailto:priyanshu0dubey@gmail.com"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-center gap-2 p-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-black font-semibold rounded-xl hover:from-emerald-400 hover:to-emerald-500 transition-all duration-300"
                      onClick={() => setIsOpen(false)}>
                      <span>📧</span>
                      Get In Touch
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 transform-gpu z-50"
        style={{
          scaleX: scrolled ? 1 : 0,
          transformOrigin: "0%",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
}

export default Navbar;
