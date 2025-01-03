function Contacts() {
  return (
    <div className="w-full md:h-full md:flex flex-col justify-center py-14">
      <h2 className="text-2xl md:text-3xl font-bold mb-5 text-black dark:text-white">
        Contacts
      </h2>
      <ul className="flex gap-y-6 flex-col">
        <li>
          <a
            className="flex items-center gap-x-4 md:gap-5"
            href="mailto:ekialfani15@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-envelope-at text-2xl md:text-3xl text-[#374151] dark:text-slate-400"></i>
            <span className="hover:underline text-sm md:text-base text-slate-500 dark:text-slate-400">
              ekialfani15@gmail.com
            </span>
          </a>
        </li>
        <li>
          <a
            className="flex gap-x-4 md:gap-5 items-center"
            href="https://www.facebook.com/ekialfani"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-facebook text-2xl md:text-3xl text-[#374151] dark:text-slate-400"></i>
            <span className="hover:underline text-sm md:text-base capitalize text-slate-500 dark:text-slate-400">
              eki alfani
            </span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-x-4 md:gap-5"
            href="https://www.instagram.com/ekialfni/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-instagram text-2xl md:text-3xl text-[#374151] dark:text-slate-400"></i>
            <span className="hover:underline text-sm md:text-base text-slate-500 dark:text-slate-400">
              @ekialfni
            </span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-x-4 md:gap-5"
            href="https://www.linkedin.com/in/eki-alfani-1a1122271"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin text-2xl md:text-3xl text-[#374151] dark:text-slate-400"></i>
            <span className="hover:underline text-sm md:text-base text-slate-500 dark:text-slate-400 capitalize">
              eki alfani
            </span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-x-4 md:gap-5"
            href="https://github.com/ekialfani"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github text-2xl md:text-3xl text-[#374151] dark:text-slate-400"></i>
            <span className="hover:underline text-sm md:text-base text-slate-500 dark:text-slate-400">
              ekialfani
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
