import {
  faGitAlt,
  faGithub,
  faJs,
  faReact,
  faTypescript,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Home() {
  return (
    <div className="w-full relative">
      <div className="flex gap-x-10 pt-14 pb-10 border-b border-b-gray-100 dark:border-b-gray-800">
        {/* LEFT */}
        <div className="flex-1">
          <h1 className="text-md text-gray-600 mb-1 dark:text-gray-400">
            Hi, I'm
          </h1>

          <h1 className="text-5xl font-bold dark:text-white">Eki Alfani</h1>

          <h2 className="text-2xl text-gray-600 dark:text-gray-400 max-w-[300px] my-3">
            I build simple and useful digital products.
          </h2>

          <p className="text-sm text-gray-500 max-w-[400px] leading-5">
            I'm a software developer with a focus on mobile and web application.
            I enjoy turning ideas into clean, functional, and user-friendly
            products.
          </p>

          <div className="flex gap-x-5 mt-5">
            <button className="bg-black dark:bg-white px-5 py-2.5 rounded-md flex items-center gap-x-2">
              <p className="text-white dark:text-black text-xs font-bold">
                View Projects
              </p>

              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-white dark:text-black text-xs"
              />
            </button>

            <button className="px-5 py-2.5 text-xs font-bold border border-gray-200 dark:border-gray-500 dark:text-gray-200 rounded-md">
              Get in touch
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 pl-12">
          <img
            src="./images/hero.png"
            alt="hero"
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>

      <div className="flex items-center py-5 border-b border-b-gray-100 dark:border-b-gray-800">
        <div className="flex-1">
          <h2 className="text-md font-medium dark:text-white">Tech Stack</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 max-w-[200px]">
            Tools and technologies i use to build application
          </p>
        </div>
        <div className="flex-2">
          <ul className="flex items-center gap-x-10">
            <li className="flex items-center gap-x-3">
              <FontAwesomeIcon
                className="text-2xl font-bold dark:text-gray-300"
                icon={faReact}
              />
              <p className="text-xs text-gray-700 dark:text-gray-400 font-medium">
                React Native
              </p>
            </li>
            <li className="flex items-center gap-x-3">
              <FontAwesomeIcon
                className="text-2xl font-bold dark:text-gray-300"
                icon={faTypescript}
              />
              <p className="text-xs text-gray-700 dark:text-gray-400 font-medium">
                Typescript
              </p>
            </li>
            <li className="flex items-center gap-x-3">
              <FontAwesomeIcon
                className="text-2xl font-bold dark:text-gray-300"
                icon={faJs}
              />
              <p className="text-xs text-gray-700 dark:text-gray-400 font-medium">
                JavaScript
              </p>
            </li>
            <li className="flex items-center gap-x-3">
              <FontAwesomeIcon
                className="text-2xl font-bold dark:text-gray-300"
                icon={faGitAlt}
              />
              <p className="text-xs text-gray-700 dark:text-gray-400 font-medium">
                Git
              </p>
            </li>
            <li className="flex items-center gap-x-3">
              <FontAwesomeIcon
                className="text-2xl font-bold dark:text-gray-300"
                icon={faGithub}
              />
              <p className="text-xs text-gray-700 dark:text-gray-400 font-medium">
                Github
              </p>
            </li>
            <button className="border-l border-gray-100 dark:border-l-gray-800 pl-6 text-xs text-gray-700 dark:text-gray-400 font-medium">
              + more
            </button>
          </ul>
        </div>
      </div>

      <div className="pt-5 pb-6 border-b border-b-gray-100 dark:border-b-gray-800">
        <div>
          <div className="flex justify-between">
            <p className="text-md font-semibold dark:text-white">
              Featured Projects
            </p>
            <button className="flex items-center gap-x-2">
              <p className="text-xs font-medium text-gray-600 dark:text-gray-200">
                View all projects
              </p>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-gray-600 dark:text-gray-200 text-xs font-bold"
              />
            </button>
          </div>
          <p className="text-xs max-w-[215px] text-gray-500 dark:text-gray-400 mt-2">
            A selection of projects i'v worked on recently. Take a look at some
            of them
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-5">
          <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-md">
            <div className="h-[125px] overflow-hidden rounded-md">
              <img src="./images/exam-app.png" alt="exam-app" />
            </div>

            <div className="pt-3">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold dark:text-white">
                  Exam App
                </h4>
                <a
                  href="http://github.com/ekialfani/exam-app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-gray-600 dark:text-gray-300 text-xs font-bold"
                  />
                </a>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-5">
                An e-commerce mobile app for daily needs with a simple and clean
                user experience
              </p>
              <div className="flex items-center gap-x-2 mt-5">
                <p className="text-[9px] bg-gray-200 dark:bg-gray-400 font-medium px-3 py-0.5 rounded-full text-gray-600 dark:text-gray-800">
                  React Native
                </p>
                <p className="text-[9px] bg-gray-200 dark:bg-gray-400 font-medium px-3 py-0.5 rounded-full text-gray-600 dark:text-gray-800">
                  Typescript
                </p>
                <p className="text-[9px] bg-gray-200 dark:bg-gray-400 font-medium px-3 py-0.5 rounded-full text-gray-600 dark:text-gray-800">
                  Redux Toolkit
                </p>
                <p className="text-[9px] bg-gray-200 dark:bg-gray-400 font-medium px-3 py-0.5 rounded-full text-gray-600 dark:text-gray-800">
                  Golang
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-md">
            <div className="h-[125px] overflow-hidden rounded-md">
              <img src="./images/staydors.png" alt="exam-app" />
            </div>

            <div className="pt-3">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-semibold dark:text-white">
                  StayDoors
                </h4>
                <a
                  href="https://github.com/FinalProject03-Kel04-Hacktiv8/Kel04-FP03-Hacktiv8-Hotel-Reservation-MobileApp.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-gray-600 dark:text-gray-300 text-xs font-bold"
                  />
                </a>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-5">
                An e-commerce mobile app for daily needs with a simple and clean
                user experience
              </p>
              <div className="flex items-center gap-x-2 mt-5">
                <p className="text-[9px] bg-gray-200 dark:bg-gray-400 font-medium px-3 py-0.5 rounded-full text-gray-600 dark:text-gray-800">
                  React Native
                </p>
                <p className="text-[9px] bg-gray-200 dark:bg-gray-400 font-medium px-3 py-0.5 rounded-full text-gray-600 dark:text-gray-800">
                  Typescript
                </p>
                <p className="text-[9px] bg-gray-200 dark:bg-gray-400 font-medium px-3 py-0.5 rounded-full text-gray-600 dark:text-gray-800">
                  Redux Toolkit
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-md">
            <div className="h-[125px] overflow-hidden rounded-md">
              <img src="./images/blipedia.png" alt="exam-app" />
            </div>

            <div className="pt-3">
              <div className="flex items-center justify-between mb-1.5">
                <h4 className="text-sm font-semibold dark:text-white">
                  Blipedia
                </h4>
                <a
                  href="https://blipedia.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-gray-600 dark:text-gray-300 text-xs font-bold"
                  />
                </a>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-5">
                An e-commerce mobile app for daily needs with a simple and clean
                user experience
              </p>
              <div className="flex items-center gap-x-2 mt-5">
                <p className="text-[9px] bg-gray-200 dark:bg-gray-400 font-medium px-3 py-0.5 rounded-full text-gray-600 dark:text-gray-800">
                  React.js
                </p>
                <p className="text-[9px] bg-gray-200 dark:bg-gray-400 font-medium px-3 py-0.5 rounded-full text-gray-600 dark:text-gray-800">
                  Tailwind CSS
                </p>
                <p className="text-[9px] bg-gray-200 dark:bg-gray-400 font-medium px-3 py-0.5 rounded-full text-gray-600 dark:text-gray-800">
                  Redux Toolkit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 py-8">
        <div className="pr-12 border-r border-r-gray-100 dark:border-r-gray-800">
          <h2 className="text-md font-semibold dark:text-white">Experience</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 max-w-[250px] mt-2">
            My work experince and what i've done along the way.
          </p>
        </div>
        <div className="flex flex-row gap-x-5 items-start px-4">
          <a href="https://blocdev.id/">
            <img
              className="w-16 h-16 dark:bg-white rounded-lg"
              src="/images/blockdev-logo.webp"
              alt="blockdev-logo"
            />
          </a>

          <div>
            <h4 className="text-sm font-semibold dark:text-white">BlockDev</h4>
            <h5 className="text-xs font-medium text-gray-600 dark:text-gray-400 mt-1">
              Mobile Developer
            </h5>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              2025 - Present
            </p>
          </div>
        </div>
        <ul className="list-disc px-4">
          <li className="text-xs text-gray-500 dark:text-gray-400 leading-5">
            Developed and maintained bulky mobile app (React Native)
          </li>
          <li className="text-xs text-gray-500 dark:text-gray-400 leading-5">
            Implemented new features and integrated with backend APIs
          </li>
          <li className="text-xs text-gray-500 dark:text-gray-400 leading-5">
            Collaborated with cross-functional teams (desing, backend and
            product)
          </li>
          <li className="text-xs text-gray-500 dark:text-gray-400 leading-5">
            Improved app performance and resolved production issues
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
