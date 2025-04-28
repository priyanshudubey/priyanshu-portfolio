import React from "react";
import { FaFacebookF, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 z-50">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-[#3F3F3F] rounded-full flex items-center justify-center hover:bg-[#13FF00] transition-colors duration-300 group">
        <FaFacebookF className="text-white group-hover:text-black" />
      </a>
      <a
        href="https://github.com/priyanshudubey"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-[#3F3F3F] rounded-full flex items-center justify-center hover:bg-[#13FF00] transition-colors duration-300 group">
        <FaGithub className="text-white group-hover:text-black" />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-[#3F3F3F] rounded-full flex items-center justify-center hover:bg-[#13FF00] transition-colors duration-300 group">
        <FaTwitter className="text-white group-hover:text-black" />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 bg-[#3F3F3F] rounded-full flex items-center justify-center hover:bg-[#13FF00] transition-colors duration-300 group">
        <FaInstagram className="text-white group-hover:text-black" />
      </a>
    </div>
  );
}

export default SocialLinks;
