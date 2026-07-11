import React, { useState } from "react";
import { Terminal, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all duration-300 shadow-sm">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / System ID */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2 group">
              <Terminal className="text-blue-600 w-5 h-5 group-hover:text-blue-700 transition-colors" />
              <span className="font-mono font-bold text-xl tracking-tighter text-slate-900 group-hover:text-blue-600 transition-colors">
                P.DUBEY<span className="text-blue-500 animate-pulse">_</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-blue-600 px-2 py-2 text-sm font-semibold font-mono uppercase tracking-wide transition-colors"
                >
                  {link.name}
                </a>
              ))}
              {/* Primary CTA */}
              <a
                href="#contact"
                className="ml-4 bg-slate-900 border border-slate-800 text-white hover:bg-slate-800 px-6 py-2.5 rounded-sm text-sm font-bold transition-all duration-300 shadow-sm"
              >
                [INIT]: Connect
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-blue-600 focus:outline-none p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-[#fcfcfc] ${isOpen ? "max-h-96 opacity-100 border-b border-slate-200" : "max-h-0 opacity-0"}`}>
        <div className="px-6 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
             <a
               key={link.name}
               href={link.href}
               onClick={() => setIsOpen(false)}
               className="block px-4 py-3 text-sm font-mono font-bold uppercase tracking-wider text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-sm transition-colors border border-transparent hover:border-slate-200"
             >
               {link.name}
             </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center mt-6 bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-sm text-sm font-mono font-bold shadow-md"
          >
            [INIT]: Connect
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;