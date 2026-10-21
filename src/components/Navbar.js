import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Select, { components } from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const navOptions = [
  { value: "/about", label: "About", type: "navigation" },
  { value: "/projects", label: "Projects", type: "navigation" },
  { value: "/experience", label: "Experience", type: "navigation" },
  {
    value: "/certifications",
    label: "Certifications",
    type: "navigation",
  },
  { value: "/contacts", label: "Contact", type: "navigation" },
];

const MenuList = (props) => (
  <components.MenuList {...props}>
    <div className="flex flex-col">{props.children}</div>
  </components.MenuList>
);

const MenuOption = (props) => (
  <components.Option {...props}>
    <div className="flex items-center gap-2.5 whitespace-nowrap">
      {props.data.type === "theme" && (
        <i
          className={
            props.data.darkMode
              ? "bi bi-sun-fill text-yellow-500 text-xs"
              : "bi bi-moon-stars-fill text-gray-500 text-xs"
          }
          aria-hidden="true"
        />
      )}
      <span>{props.data.label}</span>
    </div>
  </components.Option>
);

function Navbar() {
  const [darkMode, setDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark"),
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const mobileOptions = [
    ...navOptions,
    {
      value: "__toggle_theme",
      label: darkMode ? "Light Mode" : "Dark Mode",
      type: "theme",
      darkMode,
    },
  ];

  const currentOption =
    navOptions.find((option) => option.value === location.pathname) ?? null;

  const mobileSelectClassNames = {
    container: () => "relative w-[160px] font-sans",
    control: () => "hidden",
    valueContainer: () => "hidden",
    indicatorsContainer: () => "hidden",
    dropdownIndicator: () => "hidden",
    indicatorSeparator: () => "hidden",

    menu: () =>
      [
        "!relative !left-auto !right-auto !top-auto !mt-0 !translate-y-0 !w-[160px]",
        "overflow-hidden rounded-lg",
        "border border-gray-200 dark:border-gray-700",
        "bg-gray-50 dark:bg-slate-900",
        "shadow-lg",
      ].join(" "),

    menuList: () => "max-h-[280px] overflow-y-auto p-1.5",

    option: (state) =>
      [
        "cursor-pointer rounded-md px-3 py-2.5 text-xs transition-colors",
        state.isFocused ? "bg-gray-100 dark:bg-slate-800" : "",
        state.isSelected
          ? "font-medium text-black dark:text-white"
          : "text-gray-700 dark:text-gray-300",
      ].join(" "),

    noOptionsMessage: () => "p-3 text-sm text-gray-500",
  };

  const handleMobileChange = (option) => {
    if (!option) return;

    if (option.type === "theme") {
      setDarkMode((mode) => !mode);
      setIsMenuOpen(false);
      return;
    }

    navigate(option.value);
    setIsMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode((mode) => !mode);
  };

  return (
    <nav className="sticky top-0 z-50 mx-auto flex h-[55px] max-w-[1130px] items-center justify-between bg-gray-50 dark:bg-slate-900 sm:border-b sm:border-gray-200 dark:sm:border-gray-800">
      <NavLink className="flex h-full items-center" to="/about">
        <h1 className="text-md font-semibold text-black dark:text-white">
          Eki Alfani
        </h1>
      </NavLink>

      {/* Desktop navigation */}
      <ul className="hidden h-full items-center gap-x-6 md:flex">
        {navOptions.map((option) => (
          <li key={option.value} className="h-full">
            <NavLink
              to={option.value}
              className={({ isActive }) =>
                `inline-flex h-full items-center border-b-2 text-xs ${
                  isActive
                    ? "border-b-black font-medium text-black dark:border-b-white dark:text-white"
                    : "border-b-transparent text-gray-500 dark:text-gray-400"
                }`
              }
            >
              {option.label}
            </NavLink>
          </li>
        ))}

        <li>
          <button
            type="button"
            onClick={toggleDarkMode}
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {darkMode ? (
              <i className="bi bi-sun-fill text-yellow-500 text-xs" />
            ) : (
              <i className="bi bi-moon-stars-fill text-gray-500 text-xs" />
            )}
          </button>
        </li>
      </ul>

      {/* Mobile navigation */}
      <div className="relative md:hidden">
        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          className="relative z-[60] flex h-10 w-10 items-center justify-center text-gray-700 dark:text-gray-300"
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
        </button>

        {isMenuOpen && (
          <div className="pointer-events-none absolute right-0 top-0 z-50">
            <div className="pointer-events-auto">
              <Select
                unstyled
                options={mobileOptions}
                value={currentOption}
                classNames={mobileSelectClassNames}
                components={{
                  Option: MenuOption,
                  MenuList,
                  IndicatorSeparator: () => null,
                  DropdownIndicator: () => null,
                }}
                placeholder=""
                isSearchable={false}
                isClearable={false}
                isMulti={false}
                controlShouldRenderValue={false}
                menuIsOpen
                onChange={handleMobileChange}
                aria-label="Mobile navigation"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
