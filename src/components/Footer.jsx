import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="w-full 
  bg-gradient-to-r from-teal-300 via-indigo-500 to-purple-400 
  dark:from-gray-800 dark:via-gray-900 dark:to-black 
  text-black dark:text-gray-100 
  py-6"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
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
            className="hover:text-white dark:hover:text-teal-300 transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/sameer-khan0008"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white dark:hover:text-indigo-300 transition"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
