import { faReact, faTypescript } from "@fortawesome/free-brands-svg-icons";
import {
  faCircle,
  faGear,
  faLocationDot,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Experience() {
  return (
    <div className="w-full min-h-[86vh] py-10">
      <div className="flex-1">
        <h2 className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">
          My Journey
        </h2>
        <h2 className="text-3xl font-bold dark:text-gray-100">
          Work Experience
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-[350px] leading-6">
          My professional journey, where i've gained experience and grown as a
          developer.
        </p>
      </div>
      <div className="mt-10 p-3 flex border border-gray-200 dark:border-gray-700 gap-x-10 rounded-lg">
        {/* left */}
        <div className="basis-3/4 flex gap-x-5 p-5">
          <div className="border border-gray-200 dark:border-gray-500 self-start rounded-lg bg-white dark:bg-gray-300">
            <img
              className="w-30"
              src="/images/blockdev-logo.webp"
              alt="blockdev-logo.png"
            />
          </div>
          <div>
            <div>
              <div className="flex justify-between">
                <h4 className="text-sm font-bold dark:text-gray-100">
                  BlockDev
                </h4>
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  2025 - Present
                </p>
              </div>
              <h5 className="text-xs font-medium text-gray-500 dark:text-gray-400 my-1">
                Mobile Developer
              </h5>
              <div className="flex items-center gap-x-3">
                <div className="flex items-center gap-x-1">
                  <FontAwesomeIcon
                    className="text-[11px] text-gray-500 dark:text-gray-400"
                    icon={faLocationDot}
                  />
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">
                    Remote
                  </p>
                </div>
                <FontAwesomeIcon
                  className="text-[3px] text-gray-500 dark:text-gray-400"
                  icon={faCircle}
                />
                <p className="text-[11px] text-gray-500 dark:text-gray-400">
                  Contract
                </p>
              </div>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-5">
                Worked on the development, maintenance, and modernization of a
                client-facing e-commerce mobile application after taking over
                the project from an external vendor.
              </p>

              <div className="mt-10">
                <div className="flex items-center gap-x-3 mb-2 dark:text-gray-100">
                  <FontAwesomeIcon icon={faTrophy} />
                  <h5 className="text-base font-semibold">Key Contributions</h5>
                </div>
                <ul className="list-disc list-inside text-sm leading-6 text-gray-500 dark:text-gray-400">
                  <li>
                    Developed and maintained various e-commerce features based
                    on product and business requirement.
                  </li>
                  <li>
                    Redesigned the application UI and improved the overall user
                    experience.
                  </li>
                  <li>
                    Rewrote the codebase from JavaScript to TypeScript and
                    migrated the project to a feature-based architecture to
                    improve code quality, maintainability, and scalability.
                  </li>
                  <li>
                    Upgraded React Native and third-party libraries to support
                    the latest Android and iOS platform requirements.
                  </li>
                  <li>
                    Implemented integrations such as Google Sign-In, Apple
                    Sign-In, and push notifications.
                  </li>
                  <li>
                    Improved existing features, fixed bugs, and enchanced
                    application stability throughout the handover and ongoing
                    development process.
                  </li>
                  <li>
                    Managed and deployed application updates to the Google Play
                    Store and Apple App Store.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="basis-1/2 bg-slate-100 dark:bg-slate-800 p-5 rounded-lg">
          <div className="flex items-center gap-x-3 dark:text-gray-100">
            <FontAwesomeIcon className="text-sm" icon={faGear} />
            <h4 className="text-base font-semibold ">Skills & Technologies</h4>
          </div>
          <ul className="mt-5 flex flex-col gap-y-5">
            <li className="flex items-center gap-x-3">
              <div className="bg-slate-200 dark:bg-slate-700 w-[45px] h-[45px] flex items-center justify-center rounded-md">
                <i className="text-2xl devicon-reactnative-original colored"></i>
              </div>
              <div>
                <h5 className="text-sm font-medium dark:text-gray-200 mb-1">
                  React Native
                </h5>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">
                  Mobile App Development
                </p>
              </div>
            </li>

            <li className="flex items-center gap-x-3">
              <div className="bg-slate-200 dark:bg-gray-700 w-[45px] h-[45px] flex items-center justify-center rounded-md">
                <i className="text-2xl devicon-typescript-plain colored"></i>
              </div>
              <div>
                <h5 className="text-sm font-medium dark:text-gray-200 mb-1">
                  TypeScript
                </h5>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">
                  Programming Language
                </p>
              </div>
            </li>

            <li className="flex items-center gap-x-3">
              <div className="bg-slate-200 dark:bg-gray-700 w-[45px] h-[45px] flex items-center justify-center rounded-md">
                <i className="text-2xl devicon-redux-original colored"></i>
              </div>

              <div>
                <h5 className="text-sm font-medium dark:text-gray-200 mb-1">
                  Redux Toolkit
                </h5>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">
                  State Management
                </p>
              </div>
            </li>

            <li className="flex items-center gap-x-3">
              <div className="bg-slate-200 dark:bg-gray-700 w-[45px] h-[45px] flex items-center justify-center rounded-md">
                <i className="text-2xl devicon-axios-plain colored"></i>
              </div>

              <div>
                <h5 className="text-sm font-medium dark:text-gray-200 mb-1">
                  Axios
                </h5>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">
                  HTTP Request
                </p>
              </div>
            </li>

            <li className="flex items-center gap-x-3">
              <div className="bg-slate-200 dark:bg-gray-700 w-[45px] h-[45px] flex items-center justify-center rounded-md">
                <i className="text-2xl devicon-firebase-plain colored"></i>
              </div>

              <div>
                <h5 className="text-sm font-medium dark:text-gray-200 mb-1">
                  Firebase Messaging
                </h5>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">
                  Push Notification
                </p>
              </div>
            </li>

            <li className="flex items-center gap-x-3">
              <div className="bg-slate-200 dark:bg-gray-700 w-[45px] h-[45px] flex items-center justify-center rounded-md">
                <i className="text-2xl devicon-git-plain colored"></i>
              </div>

              <div>
                <h5 className="text-sm font-medium dark:text-gray-200 mb-1">
                  Git
                </h5>
                <p className="text-[10px] text-gray-500 dark:text-gray-400">
                  Version Control
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
