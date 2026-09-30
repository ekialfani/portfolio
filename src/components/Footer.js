import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="max-w-[1100px] mx-auto flex justify-between py-6 border-t border-b-gray-100 dark:border-t-gray-800">
      <div className="flex items-center">
        <h1 className="text-sm font-semibold pr-5 border-r border-r-gray-200 dark:border-r-gray-800 dark:text-white">
          <a href="/about">Eki Alfani</a>
        </h1>
        <p className="text-xs pl-5 text-gray-500 dark:text-gray-400">
          Build. Improve. Repeat.
        </p>
      </div>
      <div className="flex items-center gap-x-3 text-gray-600 dark:text-gray-400">
        <a href="https://github.com/ekialfani" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/eki-alfani/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto:ekialfani15@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
