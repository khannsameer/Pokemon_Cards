import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-teal-300 via-indigo-500 to-purple-400 text-black py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between ">
        {/* Left - Copyright */}
        <p className="text-sm mb-3 md:mb-0">
          © {new Date().getFullYear()} Pokedex. All rights reserved.
        </p>

        {/* Right - Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/khannsameer"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sameer-khan0008"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
