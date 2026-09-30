// import profile from '../assets/images/profile.jpg';
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  const htmlElement = document.getElementsByTagName("html")[0];

  if (darkMode) {
    htmlElement.classList.add("dark");
  } else {
    htmlElement.classList.remove("dark");
  }

  return (
    <nav
      className={`sticky top-0 right-0 z-40 max-w-[1100px] h-[55px] mx-auto flex justify-between border-b-2 border-gray-100 dark:border-b-gray-800 bg-white dark:bg-slate-900`}
    >
      <NavLink className="h-full hidden md:flex items-center" to="/about">
        <h1 className="text-md font-semibold text-black dark:text-white">
          Eki Alfani
        </h1>
      </NavLink>
      <ul className="flex gap-x-6">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `inline-block h-full flex items-center text-xs ${
              isActive
                ? "text-black dark:text-white font-medium border-b-2 border-b-black dark:border-b-white"
                : "text-gray-500 dark:text-gray-400"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `inline-block h-full flex items-center text-xs ${
              isActive
                ? "text-black dark:text-white font-medium border-b-2 border-b-black dark:border-b-white"
                : "text-gray-500 dark:text-gray-400"
            }`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            `inline-block h-full flex items-center text-xs ${
              isActive
                ? "text-black dark:text-white font-medium border-b-2 border-b-black dark:border-b-white"
                : "text-gray-500 dark:text-gray-400"
            }`
          }
        >
          Experience
        </NavLink>
        <NavLink
          to="/certifications"
          className={({ isActive }) =>
            `inline-block h-full flex items-center text-xs ${
              isActive
                ? "text-black dark:text-white font-medium border-b-2 border-b-black dark:border-b-white"
                : "text-gray-500 dark:text-gray-400"
            }`
          }
        >
          Certifications
        </NavLink>
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            `inline-block h-full flex items-center text-xs ${
              isActive
                ? "text-black dark:text-white font-medium border-b-2 border-b-black dark:border-b-white"
                : "text-gray-500 dark:text-gray-400"
            }`
          }
        >
          Contacts
        </NavLink>
        <button
          className="hidden md:inline"
          onClick={() => setDarkMode((mode) => !mode)}
        >
          {darkMode ? (
            <i class="bi bi-sun-fill text-yellow-500 text-xs"></i>
          ) : (
            <i class="bi bi-moon-stars-fill text-gray-500 text-xs"></i>
          )}
        </button>
      </ul>
      <button
        className="md:hidden"
        onClick={() => setDarkMode((mode) => !mode)}
      >
        {darkMode ? (
          <i class="bi bi-sun-fill text-yellow-500"></i>
        ) : (
          <i class="bi bi-moon-stars-fill text-gray-500"></i>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
