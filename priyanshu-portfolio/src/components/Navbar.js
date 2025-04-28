import React, { useState } from "react";
import { Link } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "education", label: "Education" },
    { to: "experience", label: "Experience" },
    { to: "projects", label: "Projects" },
    { to: "techstack", label: "Technologies" },
  ];

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const linkHoverVariants = {
    rest: {
      scale: 1,
      color: "rgb(209, 213, 219)", // neutral gray
    },
    hover: {
      scale: 1.05,
      color: "rgb(52, 211, 153)", // emerald-500
      transition: { duration: 0.2 },
    },
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 p-4 bg-[#1A1A1A] backdrop-blur-sm bg-opacity-90 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with Hover Effect */}
        <motion.a
          href="https://priyanshudubey.com"
          whileHover={{ scale: 1.1 }}
          className="text-emerald-400 text-3xl font-bold 
          hover:text-blue-500 transition-colors">
          pd..
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <motion.div
              key={link.to}
              initial="rest"
              whileHover="hover"
              variants={linkHoverVariants}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer text-gray-300 
                hover:text-emerald-400 transition-colors">
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-2xl text-emerald-400"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            className="md:hidden absolute top-full left-0 w-full 
            bg-[#2A2A2A] border-t border-emerald-500/30 
            shadow-2xl">
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <motion.div
                  key={link.to}
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-300 
                    hover:text-emerald-400 transition-colors
                    hover:pl-2 text-lg">
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
