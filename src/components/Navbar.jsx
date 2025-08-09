import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import { FaSun, FaMoon } from "react-icons/fa";
import DarkModeToggle from "../components/DarkModeToggle";
import { DarkThemeToggle } from "flowbite-react";

export function Component() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply/remove dark mode class on html element
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
      className=" fixed top-0 left-0 w-full z-50 
    bg-gradient-to-r from-teal-300 via-indigo-500 to-purple-400 
    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="w-full px-12 flex flex-wrap items-center justify-between">
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

        {/* Avatar */}
        <div className="flex md:order-2 items-center gap-4">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="/user.png"
                rounded
                className="w-12 h-12"
              />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">Bonnie Green</span>
            </DropdownHeader>
            <DropdownDivider />
            <DropdownItem>Sign out</DropdownItem>
          </Dropdown>
          <NavbarToggle />
        </div>

        {/* Nav Links */}
        <NavbarCollapse className="md:ml-auto flex items-center gap-4">
          <NavbarLink
            href="#"
            className="text-white text-xl font-custom dark:text-yellow-300"
          >
            Pokemon
          </NavbarLink>
          <DarkModeToggle />
        </NavbarCollapse>
      </div>
    </Navbar>
  );
}
