import { useState } from "react";
import Select, { components } from "react-select";
import "devicon/devicon.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const techOptions = [
  { value: "react", label: "React Native", icon: "devicon-react-original" },
  {
    value: "typescript",
    label: "TypeScript",
    icon: "devicon-typescript-original",
  },
  {
    value: "javascript",
    label: "JavaScript",
    icon: "devicon-javascript-plain",
  },
  {
    value: "golang",
    label: "Golang",
    icon: "devicon-go-original-wordmark",
  },
  { value: "html5", label: "HTML5", icon: "devicon-html5-plain" },
  { value: "css3", label: "CSS3", icon: "devicon-css3-plain" },
  {
    value: "tailwindcss",
    label: "Tailwind CSS",
    icon: "devicon-tailwindcss-original",
  },
  { value: "redux", label: "Redux Toolkit", icon: "devicon-redux-original" },
  { value: "axios", label: "Axios", icon: "devicon-axios-plain" },
  { value: "firebase", label: "Firebase", icon: "devicon-firebase-plain" },
  {
    value: "androidstudio",
    label: "Android Studio",
    icon: "devicon-androidstudio-plain",
  },
  {
    value: "xcode",
    label: "Xcode",
    icon: "devicon-xcode-plain",
  },
  { value: "git", label: "Git", icon: "devicon-git-plain" },
  { value: "github", label: "GitHub", icon: "devicon-github-original" },
];

const Option = (props) => (
  <components.Option {...props}>
    <div className="flex min-w-0 items-center gap-2.5 whitespace-nowrap">
      <i
        className={`${props.data.icon} shrink-0 text-[19px]`}
        aria-hidden="true"
      />
      <span className="truncate">{props.data.label}</span>
    </div>
  </components.Option>
);

const MenuList = (props) => (
  <components.MenuList {...props}>
    <div className="grid grid-cols-2 gap-x-1 gap-y-0.5">{props.children}</div>
  </components.MenuList>
);

const selectClassNames = {
  container: () =>
    "relative w-[90px] font-sans border-l border-gray-200 dark:border-gray-700",

  valueContainer: () => "min-w-0 flex-nowrap overflow-hidden pl-3",

  placeholder: () =>
    "m-0 whitespace-nowrap text-[13px] text-slate-700 dark:text-gray-400 font-medium",

  indicatorsContainer: () => "h-[35px]",

  dropdownIndicator: () => "px-2 pl-1 text-slate-300 hover:text-white",

  indicatorSeparator: () => "hidden",

  menu: () =>
    [
      "!left-auto !right-0 !mt-2 !w-[357px]",
      "overflow-hidden rounded-[14px]",
      "border border-gray-200 dark:border-gray-600 bg-white dark:bg-slate-800",
      "shadow-xl shadow-black/25 dark:shadow-slate-500/25 z-50",
    ].join(" "),

  menuList: () => "max-h-[260px] overflow-x-hidden overflow-y-auto p-2.5",

  option: () =>
    "cursor-pointer rounded-md px-2.5 py-[7px] text-xs text-gray-700 dark:text-gray-300 transition-colors",

  noOptionsMessage: () => "p-3 text-sm text-slate-400",
};

export default function TechStackDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-20">
      <Select
        unstyled
        options={techOptions}
        classNames={selectClassNames}
        components={{
          Option,
          MenuList,
          IndicatorSeparator: () => null,
          DropdownIndicator: () => (
            <span className="flex items-center pr-2 text-gray-500 mt-1">
              {isOpen ? (
                <FontAwesomeIcon icon={faCaretDown} />
              ) : (
                <FontAwesomeIcon icon={faCaretRight} />
              )}
            </span>
          ),
        }}
        placeholder="+ more"
        isSearchable={false}
        isClearable={false}
        isMulti={false}
        controlShouldRenderValue={false}
        menuIsOpen={isOpen}
        onMenuOpen={() => setIsOpen(true)}
        onMenuClose={() => setIsOpen(false)}
        onChange={() => setIsOpen(false)}
        aria-label="More technologies"
      />
    </div>
  );
}
