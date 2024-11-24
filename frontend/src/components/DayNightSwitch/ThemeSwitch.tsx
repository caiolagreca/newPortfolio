// src/components/ThemeSwitch.tsx

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
    <button
      onClick={handleToggle}
      className="flex items-center justify-center w-10 h-10 rounded-full transition duration-300 bg-gray-200 dark:bg-gray-700 focus:outline-none"
    >
      {isDarkMode ? (
        <svg
          className="w-6 h-6 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22
            2.22a1 1 0 111.42 1.42l-.7.7a1 1 0 11-1.42-1.42l.7-.7zM18
            9a1 1 0 110 2h-1a1 1 0 110-2h1zm-3.78 5.78a1 1 0 10-1.42
            1.42l.7.7a1 1 0 001.42-1.42l-.7-.7zM10 16a1 1 0 100
            2v-1a1 1 0 100-2v1zm-4.22-.78a1 1 0 00-1.42-1.42l-.7.7a1
            1 0 001.42 1.42l.7-.7zM4 9a1 1 0 100 2H3a1 1 0 100-2h1zm.22-4.78a1
            1 0 00-1.42 1.42l.7.7a1 1 0 001.42-1.42l-.7-.7z"
          />
        </svg>
      ) : (
        <svg
          className="w-6 h-6 text-gray-800 dark:text-gray-200"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            d="M17.293 13.293a8 8 0 11-11.586-11.586
            8 8 0 0011.586 11.586zM12 2a7 7 0 00-7 7 7
            7 0 0014 0 7 7 0 00-7-7z"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeSwitch;
