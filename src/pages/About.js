import {
  faGitAlt,
  faGithub,
  faNodeJs,
  faReact,
  faTypescript,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Home() {
  return (
    <div className="w-full relative">
      <div className="flex gap-x-5 pt-14 pb-10 border-b-2 border-b-gray-100 dark:border-b-gray-800">
        <div className="flex-1">
          <h1 className="text-md text-gray-600 mb-1 dark:text-gray-400">
            Hi, I'm
          </h1>
          <h1 className="text-5xl font-bold dark:text-white">Eki Alfani</h1>
          <h2 className="text-2xl text-gray-600 dark:text-gray-400 max-w-[300px] my-3">
            I build simple and useful digital products.
          </h2>
          <p className="text-sm text-gray-500 max-w-[400px]">
            I'm a software developer with a focus on mobile and web application.
            I enjoy turning ideas into clean, functional, and user-friendly
            products.
          </p>
          <div className="flex gap-x-5 mt-5">
            <button className="bg-black dark:bg-white px-5 py-2.5 rounded-md flex flex-row items-center gap-x-2">
              <p className="text-white dark:text-black text-xs font-bold">
                View Projects
              </p>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-white dark:text-black text-xs font-bold"
              />
            </button>
            <button className="px-5 py-2.5 text-xs font-bold border border-gray-200 dark:border-gray-500 dark:text-gray-200 rounded-md">
              Get in touch
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img
            className="w-full h-auto rounded-lg"
            src="./images/hero.png"
            alt="hero"
          />
        </div>
      </div>
      <div className="flex items-center py-5 border-b-2 border-b-gray-100 dark:border-b-gray-800">
        <div className="flex-1">
          <h2 className="text-md font-medium dark:text-white">Tech Stack</h2>
          <p className="text-xs text-gray-500 max-w-[200px]">
            Tools and technologies i use to build application
          </p>
        </div>
        <div className="flex-2">
          <ul className="flex items-center gap-x-10">
            <li className="flex items-center gap-x-3">
              <FontAwesomeIcon
                className="text-2xl font-bold dark:text-white"
                icon={faReact}
              />
              <p className="text-xs text-gray-700 dark:text-gray-400 font-medium">
                React Native
              </p>
            </li>
            <li className="flex items-center gap-x-3">
              <FontAwesomeIcon
                className="text-2xl font-bold dark:text-white"
                icon={faTypescript}
              />
              <p className="text-xs text-gray-700 dark:text-gray-400 font-medium">
                Typescript
              </p>
            </li>
            <li className="flex items-center gap-x-3">
              <FontAwesomeIcon
                className="text-2xl font-bold dark:text-white"
                icon={faNodeJs}
              />
              <p className="text-xs text-gray-700 dark:text-gray-400 font-medium">
                Node JS
              </p>
            </li>
            <li className="flex items-center gap-x-3">
              <FontAwesomeIcon
                className="text-2xl font-bold dark:text-white"
                icon={faGitAlt}
              />
              <p className="text-xs text-gray-700 dark:text-gray-400 font-medium">
                Git
              </p>
            </li>
            <li className="flex items-center gap-x-3">
              <FontAwesomeIcon
                className="text-2xl font-bold dark:text-white"
                icon={faGithub}
              />
              <p className="text-xs text-gray-700 dark:text-gray-400 font-medium">
                Github
              </p>
            </li>
            <button className="border-l-2 border-gray-300 dark:border-l-gray-700 pl-6 text-xs text-gray-700 dark:text-gray-400 font-medium">
              + more
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
