import React, { useState, useEffect } from "react";
import { Terminal, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { name: "About",      href: "#about",      id: "about" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects",   href: "#projects",   id: "projects" },
    { name: "Skills",     href: "#skills",     id: "skills" },
    { name: "Education",  href: "#education",  id: "education" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Navbar background
      setScrolled(window.scrollY > 20);

      // Scroll progress bar
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);

      // Active section spy
      const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean);
      let current = "home";
      for (const section of sections) {
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        id="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_32px_0_rgba(0,0,0,0.08)] border-b border-slate-200/80"
            : "bg-white/80 backdrop-blur-sm border-b border-slate-200/60"
        }`}
      >
        <div className="w-full max-w-[1760px] mx-auto px-6 sm:px-10 lg:px-14">
          <div className="flex items-center justify-between h-20">

            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center gap-2.5 group">
                <div className="w-8 h-8 rounded-sm bg-[#6b2338] flex items-center justify-center shadow-sm group-hover:shadow-[#6b2338] transition-shadow">
                  <Terminal className="w-4 h-4 text-white" />
                </div>
                <span className="font-mono font-bold text-xl tracking-tighter text-slate-900 group-hover:text-[#6b2338] transition-colors">
                  P.DUBEY<span className="text-[#6b2338] animate-pulse">_</span>
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-semibold font-mono uppercase tracking-wide transition-colors rounded-sm ${
                    activeSection === link.id
                      ? "text-[#6b2338]"
                      : "text-[#46514a] hover:text-slate-900"
                  }`}
                >
                  {activeSection === link.id && (
                    <span className="absolute inset-0 bg-[#f3ece8] rounded-sm" />
                  )}
                  <span className="relative">{link.name}</span>
                </a>
              ))}

              <a
                href="#contact"
                className="ml-3 inline-flex items-center gap-2 bg-slate-900 hover:bg-[#6b2338] text-white px-5 py-2.5 rounded-sm text-sm font-bold font-mono transition-all duration-200 shadow-sm hover:shadow-[#6b2338] hover:shadow-md"
              >
                <span className="text-[#d9bd83] group-hover:text-white">[INIT]:</span>&nbsp;Connect
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[#3d4942] hover:text-[#6b2338] focus:outline-none p-2 rounded-sm hover:bg-slate-100 transition-colors"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white/98 backdrop-blur-md ${
            isOpen ? "max-h-96 opacity-100 border-b border-slate-200" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pt-4 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-mono font-bold uppercase tracking-wider rounded-sm transition-all ${
                  activeSection === link.id
                    ? "text-[#6b2338] bg-[#f3ece8] border border-[#e3d7d3]"
                    : "text-[#3d4942] hover:text-[#6b2338] hover:bg-slate-50 border border-transparent"
                }`}
              >
                {activeSection === link.id && (
                  <span className="w-1.5 h-1.5 bg-[#6b2338] rounded-full animate-pulse" />
                )}
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-slate-900 hover:bg-[#6b2338] text-white px-5 py-3 rounded-sm text-sm font-mono font-bold shadow-md transition-all duration-200"
            >
              [INIT]: Connect
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
