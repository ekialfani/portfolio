// import profile from '../assets/images/profile.jpg';
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import DrawerButton from "./buttons/DrawerButton";

function Navbar() {
  const [isToggleOn, setIsToggleOn] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let drawerButton;
  let animation;

  if (isToggleOn) {
    drawerButton = (
      <DrawerButton
        className="absolute z-50 text-white text-2xl md:hidden"
        onClick={() => setIsToggleOn(false)}
      >
        <i class="bi bi-x"></i>
      </DrawerButton>
    );
    animation = "animate-drawer-show";
  } else {
    drawerButton = (
      <DrawerButton
        className="absolute z-50 text-2xl text-[#4070F4] md:hidden"
        onClick={() => setIsToggleOn(true)}
      >
        <i class="bi bi-list"></i>
      </DrawerButton>
    );
    animation = "animate-drawer-hide";
  }

  const htmlElement = document.getElementsByTagName("html")[0];

  if (darkMode) {
    htmlElement.classList.add("dark");
  } else {
    htmlElement.classList.remove("dark");
  }

  return (
    <nav
      className={`sticky top-0 right-0 z-40 bg-white dark:bg-slate-900 w-full px-[5%] sm:px-[10%] lg:w-[70%] lg:px-0 xl:max-w-[1200px] mx-auto py-6 md:py-8 flex items-start md:items-center md:flex-row justify-between ${
        scrollY > 10
          ? "border-b border-slate-200 dark:border-slate-700"
          : "border-none"
      }`}
    >
      <div>
        {drawerButton}
        <NavLink className="hidden md:flex items-center" to="/">
          <h1 className="text-xl font-semibold text-black dark:text-white">
            Eki
          </h1>
        </NavLink>
      </div>
      <ul
        className={`absolute left-0 bg-[#4070F4] md:bg-white md:dark:bg-slate-900 w-full md:w-max md:static flex flex-col items-start gap-8 capitalize text-md font-medium md:flex-row ${animation} md:animate-none z-40`}
      >
        <li className="sm:w-[83%] sm:mx-auto md:w-max md:mx-0 mt-10 md:mt-0">
          <NavLink exact to="/" onClick={() => setIsToggleOn(false)}>
            {({ isActive }) =>
              isActive ? (
                <span className="md:text-[#4070F4] font-semibold">Home</span>
              ) : (
                <span className="text-white md:text-[#374151] md:dark:text-white hover:text-[#4070F4] font-semibold">
                  Home
                </span>
              )
            }
          </NavLink>
        </li>
        <li className="sm:w-[83%] sm:mx-auto md:w-max md:mx-0">
          <NavLink exact to="/about" onClick={() => setIsToggleOn(false)}>
            {({ isActive }) =>
              isActive ? (
                <span className="md:text-[#4070F4] font-semibold">about</span>
              ) : (
                <span className="text-white md:text-[#374151] md:dark:text-white hover:text-[#4070F4] font-semibold">
                  about
                </span>
              )
            }
          </NavLink>
        </li>
        <li className="sm:w-[83%] sm:mx-auto md:w-max md:mx-0">
          <NavLink to="/skills" onClick={() => setIsToggleOn(false)}>
            {({ isActive }) =>
              isActive ? (
                <span className="md:text-[#4070F4] font-semibold">skills</span>
              ) : (
                <span className="text-white md:text-[#374151] md:dark:text-white hover:text-[#4070F4] font-semibold">
                  skills
                </span>
              )
            }
          </NavLink>
        </li>
        <li className="sm:w-[83%] sm:mx-auto md:w-max md:mx-0">
          <NavLink to="/projects" onClick={() => setIsToggleOn(false)}>
            {({ isActive }) =>
              isActive ? (
                <span className="md:text-[#4070F4] font-semibold">
                  projects
                </span>
              ) : (
                <span className="text-white md:text-[#374151] md:dark:text-white hover:text-[#4070F4] font-semibold">
                  projects
                </span>
              )
            }
          </NavLink>
        </li>
        <li className="sm:w-[83%] sm:mx-auto md:w-max md:mx-0">
          <NavLink to="/certifications" onClick={() => setIsToggleOn(false)}>
            {({ isActive }) =>
              isActive ? (
                <span className="md:text-[#4070F4] font-semibold">
                  certifications
                </span>
              ) : (
                <span className="text-white md:text-[#374151] md:dark:text-white hover:text-[#4070F4] font-semibold">
                  certifications
                </span>
              )
            }
          </NavLink>
        </li>
        <li className="sm:w-[83%] sm:mx-auto md:w-max md:mx-0">
          <NavLink to="/contacts" onClick={() => setIsToggleOn(false)}>
            {({ isActive }) =>
              isActive ? (
                <span className="md:text-[#4070F4] font-semibold">
                  contacts
                </span>
              ) : (
                <span className="text-white md:text-[#374151] md:dark:text-white hover:text-[#4070F4] font-semibold">
                  contacts
                </span>
              )
            }
          </NavLink>
        </li>
        <button
          className="hidden md:inline"
          onClick={() => setDarkMode((mode) => !mode)}
        >
          {darkMode ? (
            <i class="bi bi-sun-fill text-yellow-500"></i>
          ) : (
            <i class="bi bi-moon-stars-fill text-[#374151]"></i>
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
          <i class="bi bi-moon-stars-fill text-[#374151]"></i>
        )}
      </button>
    </nav>
  );
}

export default Navbar;
