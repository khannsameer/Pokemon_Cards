import {
  Avatar,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import DarkModeToggle from "../components/DarkModeToggle";

export function Component() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply/remove dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <Navbar
      fluid
      rounded
      className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 bg-gradient-to-r from-teal-300 via-indigo-500 to-purple-400 
  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <NavbarBrand
          as={Link}
          to="/"
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src="/logo1.ico"
            className="h-15 w-15 sm:h-15 sm:w-15"
            alt="Pokemon Logo"
          />
          <span className="text-2xl sm:text-3xl font-pokemon text-black dark:text-white font-bold">
            Pokedex
          </span>
        </NavbarBrand>

        <div className="flex items-center gap-3 mt-2">
          {/* Desktop-only Pokemon link */}
          <Link
            to="/"
            className="hidden md:block text-white text-lg sm:text-xl font-custom dark:text-yellow-300"
          >
            Pokemon
          </Link>

          {/* Dark Mode Toggle */}
          <DarkModeToggle
            onToggle={() => setDarkMode(!darkMode)}
            className="w-9 h-9 flex items-center justify-center rounded-full"
          />

          {/* Avatar (desktop only) */}
          <div className="hidden md:block">
            <Avatar
              alt="User settings"
              img="/user.png"
              rounded
              className="w-10 h-10"
            />
          </div>

          {/* Hamburger */}
          <NavbarToggle className="md:hidden" />
        </div>
      </div>

      {/* Collapsible Menu - for mobile */}
      <NavbarCollapse>
        {/* Pokemon link for mobile */}
        <NavbarLink
          href="#"
          className="block md:hidden text-white text-lg sm:text-xl font-custom dark:text-yellow-300"
        >
          Pokemon
        </NavbarLink>

        {/* Avatar for mobile */}
        <div className="block md:hidden mt-2">
          <Avatar
            alt="User settings"
            img="/user.png"
            rounded
            className="w-12 h-12"
          />
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}
