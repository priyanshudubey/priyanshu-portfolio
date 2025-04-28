import React from "react";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";

function Header() {
  return (
    <header className="bg-[#3F3F3F] py-6 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#13FF00] animate-pulse">
          Priyanshu Dubey
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#about"
                className="hover:text-[#13FF00] transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="hover:text-[#13FF00] transition-colors">
                Experience
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="hover:text-[#13FF00] transition-colors">
                Education
              </a>
            </li>
            <li>
              <a
                href="#tech-stack"
                className="hover:text-[#13FF00] transition-colors">
                Tech Stack
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <a
            href="https://github.com/priyanshudubey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#13FF00] transition-colors">
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/priyanshudubey/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#13FF00] transition-colors">
            <FaLinkedin />
          </a>
          <a
            href="https://priyanshudubey.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#13FF00] transition-colors">
            <FaGlobe />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
