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
      className="fixed top-0 left-0 w-full z-50 
      bg-gradient-to-r from-teal-300 via-indigo-500 to-purple-400 
      dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="w-full px-10 flex flex-wrap items-center justify-between">
        {/* Logo */}
        <NavbarBrand
          as={Link}
          to="/"
          className="flex items-center cursor-pointer"
        >
          <img
            src="/logo1.ico"
            className="mr-3 h-15 sm:h-18"
            alt="Pokemon Logo"
          />
          <span className="whitespace-nowrap text-4xl font-pokemon text-black dark:text-white">
            Pokedex
          </span>
        </NavbarBrand>

        {/* Dark Mode Toggle + Avatar + Hamburger */}
        <div className="flex items-center gap-4 md:order-2">
          {/* Dark Mode Toggle */}
          <div className="flex items-center">
            <DarkModeToggle
              onToggle={() => setDarkMode(!darkMode)}
              className="w-10 h-10 flex items-center justify-center rounded-full"
            />
          </div>

          {/* Avatar only on md+ */}
          <div className="hidden md:block">
            <Avatar
              alt="User settings"
              img="/user.png"
              rounded
              className="w-12 h-12"
            />
          </div>

          {/* Hamburger menu — visible only on mobile */}
          <NavbarToggle className="md:hidden" />
        </div>

        {/* Collapsible Menu */}
        <NavbarCollapse>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <NavbarLink
              href="#"
              className="text-white text-xl font-custom dark:text-yellow-300"
            >
              Pokemon
            </NavbarLink>
          </div>
        </NavbarCollapse>
      </div>
    </Navbar>
  );
}
