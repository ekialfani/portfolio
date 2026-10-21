import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import getProjects from "../data";
import TechStackDropdown from "../components/dropdown";
import { useNavigate } from "react-router-dom";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Home() {
  const navigate = useNavigate();
  const projects = getProjects();
  const selectedProjects = projects?.filter((project) => project?.isSelected);

  const handleGetInTouch = () => {
    navigate("/contacts");
  };

  const handleSeeAllProjects = () => {
    navigate("/projects");
  };

  return (
    <div className="w-full relative">
      <div className="flex gap-x-10 pt-8 sm:pt-14 pb-3 sm:pb-10 sm:border-b sm:border-b-gray-200 dark:border-b-gray-800">
        {/* LEFT */}
        <div className="flex-1">
          <h1 className="text-md text-gray-600 mb-1 dark:text-gray-400">
            Hi, I'm
          </h1>

          <h1 className="text-5xl font-bold dark:text-white">Eki Alfani</h1>

          <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 max-w-[300px] my-3">
            I build simple and useful digital products.
          </h2>

          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[400px] leading-5">
            I'm a software developer with a focus on mobile and web application.
            I enjoy turning ideas into clean, functional, and user-friendly
            products.
          </p>

          <div className="hidden md:flex gap-x-5 mt-5">
            <button
              className="bg-black dark:bg-white px-5 py-2.5 rounded-md flex items-center gap-x-2"
              onClick={handleSeeAllProjects}
            >
              <p className="text-white dark:text-black text-xs font-bold">
                View Projects
              </p>

              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-white dark:text-black text-xs"
              />
            </button>

            <button
              className="px-5 py-2.5 text-xs font-bold border border-gray-200 dark:border-gray-500 dark:text-gray-200 rounded-md"
              onClick={handleGetInTouch}
            >
              Get in touch
            </button>
          </div>

          <button
            className="md:hidden bg-black dark:bg-white px-5 py-2.5 rounded-md flex items-center gap-x-2 mt-5"
            onClick={handleGetInTouch}
          >
            <p className="text-white dark:text-black text-xs font-bold">
              Get in touch
            </p>

            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-white dark:text-black text-xs"
            />
          </button>

          <div className="mt-5 flex items-center gap-x-2">
            <a
              className="inline-block border border-gray-200 dark:border-gray-600 w-8 h-8 flex justify-center items-center rounded-md"
              href="https://github.com/ekialfani"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="text-sm dark:text-gray-100"
                icon={faGithub}
              />
            </a>

            <a
              className="inline-block border border-gray-200 dark:border-gray-600 w-8 h-8 flex justify-center items-center rounded-md"
              href="https://www.linkedin.com/in/eki-alfani/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="text-sm dark:text-gray-100"
                icon={faLinkedin}
              />
            </a>

            <a
              className="inline-block border border-gray-200 dark:border-gray-600 w-8 h-8 flex justify-center items-center rounded-md"
              href="mailto:ekii.dev@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                className="text-sm dark:text-gray-100"
                icon={faEnvelope}
              />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 pl-12 hidden md:inline-block">
          <img
            src="./images/hero.png"
            alt="hero"
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center py-3 sm:py-5 sm:border-b sm:border-b-gray-200 dark:border-b-gray-800">
        <div className="flex-1 mb-5 md:mb-0">
          <h2 className="text-md font-medium dark:text-white">Tech Stack</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[200px]">
            Tools and technologies i use to build application
          </p>
        </div>
        <div className="flex-2">
          <ul className="grid grid-cols-3 items-stretch gap-y-3 sm:gap-y-5 md:gap-y-0 md:flex items-center gap-x-3 sm:gap-x-5 lg:gap-x-10">
            <li className="flex flex-col md:flex-row border border-gray-300 md:border-none py-3 sm:py-5 md:py-0 px-2 md:py-0 rounded-md md:rounded-none items-center gap-x-3">
              <i className="devicon-react-original text-3xl mb-1 sm:mb-3 md:mb-0 md:text-2xl text-gray-700 dark:text-gray-300"></i>

              <p className="text-xs text-gray-700 dark:text-gray-400 font-medium text-center md:text-left">
                React Native
              </p>
            </li>
            <li className="flex flex-col md:flex-row border border-gray-300 md:border-none py-3 sm:py-5 md:py-0 px-2 md:py-0 rounded-md md:rounded-none items-center gap-x-3">
              <i className="devicon-typescript-plain text-3xl mb-1 sm:mb-3 md:mb-0 md:text-2xl text-gray-700 dark:text-gray-300"></i>

              <p className="text-xs text-gray-700 dark:text-gray-400 font-medium text-center md:text-left">
                Typescript
              </p>
            </li>
            <li className="flex flex-col md:flex-row border border-gray-300 md:border-none py-3 sm:py-5 md:py-0 px-2 md:py-0 rounded-md md:rounded-none items-center gap-x-3">
              <i className="devicon-redux-original text-3xl mb-1 sm:mb-3 md:mb-0 md:text-2xl text-gray-700 dark:text-gray-300"></i>

              <p className="text-xs text-gray-700 dark:text-gray-400 font-medium text-center md:text-left">
                Redux Toolkit
              </p>
            </li>
            <li className="flex flex-col md:flex-row border border-gray-300 md:border-none py-3 sm:py-5 md:py-0 px-2 md:py-0 rounded-md md:rounded-none items-center gap-x-3">
              <i className="devicon-firebase-plain text-3xl mb-1 sm:mb-3 md:mb-0 md:text-2xl text-gray-700 dark:text-gray-300"></i>

              <p className="text-xs text-gray-700 dark:text-gray-400 font-medium text-center md:text-left">
                Firebase
              </p>
            </li>
            <li className="flex flex-col md:flex-row border border-gray-300 md:border-none py-3 sm:py-5 md:py-0 px-2 md:py-0 rounded-md md:rounded-none items-center gap-x-3">
              <i className="devicon-git-plain text-3xl mb-1 sm:mb-3 md:mb-0 md:text-2xl text-gray-700 dark:text-gray-300"></i>

              <p className="text-xs text-gray-700 dark:text-gray-400 font-medium text-center md:text-left">
                Git
              </p>
            </li>
            <TechStackDropdown />
          </ul>
        </div>
      </div>

      <div className="py-3 sm:pt-5 sm:pb-6 sm:border-b sm:border-b-gray-200 dark:border-b-gray-800">
        <div>
          <div className="flex justify-between">
            <p className="text-md font-semibold dark:text-white">
              Featured Projects
            </p>
            <button
              className="flex items-center gap-x-2"
              onClick={handleSeeAllProjects}
            >
              <p className="text-xs font-medium text-gray-600 dark:text-gray-200">
                View all projects
              </p>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-gray-600 dark:text-gray-200 text-xs font-bold"
              />
            </button>
          </div>
          <p className="text-sm max-w-[300px] text-gray-500 dark:text-gray-400 mt-2">
            A selection of projects i'v worked on recently. Take a look at some
            of them
          </p>
        </div>

        <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
          {selectedProjects?.map((project) => (
            <div
              key={project?.id}
              className="p-4 border border-gray-200 dark:border-gray-600 rounded-md"
            >
              <div className="h-[125px] overflow-hidden rounded-md">
                <img src={project?.img} alt="exam-app" />
              </div>

              <div className="pt-3">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-semibold dark:text-white">
                    {project?.title}
                  </h4>
                  <a
                    href={project?.url ? project?.url : project?.repository}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-gray-600 dark:text-gray-300 text-xs font-bold"
                    />
                  </a>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-5 line-clamp-2">
                  {project?.description}
                </p>
                <div className="flex items-center gap-x-2 mt-5">
                  {project?.techStack?.map((stack) => (
                    <p className="text-[10px] bg-gray-200 dark:bg-gray-800 font-medium px-3 py-0.5 rounded-full text-gray-600 dark:text-gray-300">
                      {stack}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols md:grid-cols-3 py-3 sm:py-8">
        <div className="pr-12 md:border-r border-r-gray-100 dark:border-r-gray-800 mb-5 md:mb-0">
          <h2 className="text-md font-semibold dark:text-white">Experience</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[250px] mt-2">
            My work experince and what i've done along the way.
          </p>
        </div>
        <div className="hidden md:flex flex-row gap-x-5 items-start px-4">
          <a href="https://blocdev.id/" target="_blank" rel="noreferrer">
            <img
              className="w-16 h-16 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg"
              src="/images/blockdev-logo.webp"
              alt="blockdev-logo"
            />
          </a>

          <div>
            <h4 className="text-sm font-semibold dark:text-white">BlocDev</h4>
            <h5 className="text-xs font-medium text-gray-600 dark:text-gray-400 mt-1">
              Mobile Developer
            </h5>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              2025 - Present
            </p>
          </div>
        </div>
        <ul className="hidden md:inline-block list-disc px-4">
          <li className="text-xs text-gray-500 dark:text-gray-400 leading-5">
            Developed and maintained e-commerce features while improving UI/UX
            and application stability.
          </li>
          <li className="text-xs text-gray-500 dark:text-gray-400 leading-5">
            Modernized the codebase with TypeScript, feature-based architecture,
            and React Native upgrades.
          </li>
          <li className="text-xs text-gray-500 dark:text-gray-400 leading-5">
            Integrated authentication and push notifications, and managed
            releases to Google Play Store and Apple App Store.
          </li>
        </ul>

        <div className="border border-gray-200 dark:border-slate-700 md:hidden p-5 rounded-md">
          <div className="flex flex-row gap-x-5 items-start">
            <a href="https://blocdev.id/" target="_blank" rel="noreferrer">
              <img
                className="w-16 h-16 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg"
                src="/images/blockdev-logo.webp"
                alt="blockdev-logo"
              />
            </a>

            <div>
              <h4 className="text-sm font-semibold dark:text-white">BlocDev</h4>
              <h5 className="text-xs font-medium text-gray-600 dark:text-gray-400 mt-1">
                Mobile Developer
              </h5>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                2025 - Present
              </p>
            </div>
          </div>
          <ul className="list-disc ml-5 mt-5">
            <li className="text-xs text-gray-500 dark:text-gray-400 leading-5">
              Developed and maintained e-commerce features while improving UI/UX
              and application stability.
            </li>
            <li className="text-xs text-gray-500 dark:text-gray-400 leading-5">
              Modernized the codebase with TypeScript, feature-based
              architecture, and React Native upgrades.
            </li>
            <li className="text-xs text-gray-500 dark:text-gray-400 leading-5">
              Integrated authentication and push notifications, and managed
              releases to Google Play Store and Apple App Store.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
