import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

function Footer() {
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/priyanshudubey/",
      color: "text-blue-500 hover:text-blue-400",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/priyanshudubey",
      color: "text-gray-300 hover:text-white",
    },
    {
      icon: <FaTwitter />,
      href: "https://x.com/PriyanshuDube15",
      color: "text-cyan-500 hover:text-cyan-400",
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:priyanshu0dubey@gmail.com",
      color: "text-emerald-500 hover:text-emerald-400",
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="bg-[#1A1A1A] py-16 relative overflow-hidden">
      {/* Glowing Background Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Footer Content */}
        <div className="text-center">
          {/* Name and Tagline */}
          <h2
            className="text-4xl font-bold text-emerald-400 
            relative inline-block
            before:absolute before:bottom-[-10px] before:left-0 before:w-full before:h-1 
            before:bg-gradient-to-r before:from-emerald-400 before:to-blue-500
            hover:scale-105 transition-transform duration-300
            mb-8">
            Priyanshu Dubey
          </h2>

          <p className="text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Passionate developer crafting innovative solutions at the
            intersection of technology and creativity. Always learning, always
            growing.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  text-4xl ${link.color} 
                  transition-all duration-300 
                  transform hover:scale-125 
                  hover:rotate-12
                `}>
                {link.icon}
              </a>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mb-12">
            <a
              href="mailto:your.email@example.com"
              className="
                inline-block
                bg-emerald-500/20 
                text-emerald-400 
                px-8 py-3 
                rounded-full 
                text-lg 
                font-semibold 
                border-2 
                border-emerald-500/30
                hover:bg-emerald-500/40 
                transition-colors 
                duration-300
                hover:text-white
                hover:border-emerald-500/50
              ">
              Get In Touch
            </a>
          </div>

          {/* Copyright */}
          <div className="border-t border-emerald-500/30 pt-8">
            <p className="text-gray-400 text-sm">
              © {currentYear} Priyanshu Dubey. All Rights Reserved.
              <br className="md:hidden" />
              <span className="hidden md:inline mx-2">|</span>
              Crafted with <span className="text-emerald-500">❤️</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
