import React, { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      htmlElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      htmlElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const handleToggle = () => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isDarkMode}
        onChange={handleToggle}
        aria-label="Toggle Theme"
      />
      <div
        className={`w-14 h-8 bg-gray-200 dark:bg-gray-700 rounded-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500 dark:peer-focus:ring-indigo-300 transition-colors duration-300`}
      >
        <div
          className={`w-6 h-6 bg-gradient-to-r from-orange-500 to-yellow-400 dark:from-gray-800 dark:to-gray-900 rounded-full shadow-md transform transition-transform duration-300 ${
            isDarkMode ? "translate-x-6" : "translate-x-1"
          }`}
        ></div>
      </div>
      <div className="absolute left-1 top-1 text-yellow-500 dark:hidden">
        {/* Sun Icon */}
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 15a5 5 0 100-10 5 5 0 000 10z" />
          <path
            fillRule="evenodd"
            d="M10 1a1 1 0 011 1v1a1 1 0 11-2 0V2a1 1 0 011-1zm0 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM4.22 4.22a1 1 0 011.42 0L6.34 5.34a1 1 0 11-1.42 1.42L4.22 5.64a1 1 0 010-1.42zM14.64 14.64a1 1 0 011.42 0l1.7 1.7a1 1 0 11-1.42 1.42l-1.7-1.7a1 1 0 010-1.42zM1 9a1 1 0 100 2h1a1 1 0 100-2H1zm16 0a1 1 0 100 2h1a1 1 0 100-2h-1zM4.22 15.78a1 1 0 010-1.42L5.64 13.64a1 1 0 011.42 1.42L5.64 17.2a1 1 0 01-1.42 0zM14.64 5.64a1 1 0 010-1.42l1.7-1.7a1 1 0 011.42 1.42l-1.7 1.7a1 1 0 01-1.42 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="absolute right-1 top-1 hidden dark:block text-gray-300">
        {/* Moon Icon */}
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293a8 8 0 11-11.586-11.586 8 8 0 0011.586 11.586z" />
        </svg>
      </div>
    </label>
  );
};

export default ThemeSwitch;
