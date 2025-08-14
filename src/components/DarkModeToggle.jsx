import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [theme, setTheme] = useState("light");

  // On mount: check if user has a saved theme in localStorage
  // If not, check system preference for dark mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPrefersDark) {
      setTheme("dark");
    }
  }, []);

  // Whenever theme changes: update <html> attribute and save to localStorage
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme); // Used for Tailwind's dark mode or custom themes
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    // Button to switch themes
    <button
      onClick={toggleTheme}
      aria-label={`switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
    >
      {/* Show ☀️ icon in dark mode, 🌙 icon in light mode */}
      {theme === "dark" ? (
        <span className="text-yellow-300 text-lg">☀️</span>
      ) : (
        <span className="text-gray-700 text-lg">🌙</span>
      )}
    </button>
  );
};

export default DarkModeToggle;
