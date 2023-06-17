function Contacts() {
  return (
    <div className="md:h-full md:flex flex-col justify-center">
      <h2
        className="capitalize text-3xl md:text-4xl 2xl:text-6xl font-bold mt-24 mb-4 md:mt-10 md:mb-5 2xl:mb-8 text-custom-shadow">
        Contacts
      </h2>
      <ul className="flex gap-y-4 flex-col">
        <li>
          <a
            className="inline-block flex items-center gap-x-4 md:gap-5"
            href="ekialfani15@gmail.com"
            target="_blank"
            rel="noreferrer">
            <i className="bi bi-envelope text-2xl md:text-3xl text-custom-shadow"></i>
            <span 
              className="underline text-sm md:text-base text-slate-500">
              ekialfani15@gmail.com
            </span>
          </a>
        </li>
        <li>
          <a
            className="inline block flex gap-x-4 md:gap-5 items-center"
            href="https://www.facebook.com/ekialfani"
            target="_blank"
            rel="noreferrer">
            <i className="bi bi-facebook text-2xl md:text-3xl text-custom-shadow"></i>
            <span
              className="underline text-sm md:text-base capitalize text-slate-500">
              eki alfani
            </span>
          </a>
        </li>
        <li>
          <a
            className="inline-block flex items-center gap-x-4 md:gap-5"
            href="https://www.instagram.com/ekialfni/"
            target="_blank"
            rel="noreferrer">
            <i className="bi bi-instagram text-2xl md:text-3xl text-custom-shadow"></i>
            <span
              className="underline text-sm md:text-base text-slate-500">
              @ekialfni
            </span>
          </a>
        </li>
        <li>
          <a
            className="inline-block flex items-center gap-x-4 md:gap-5"
            href="https://www.linkedin.com/in/eki-alfani-1a1122271"
            target="_blank"
            rel="noreferrer">
            <i className="bi bi-linkedin text-2xl md:text-3xl text-custom-shadow"></i>
            <span
              className="underline text-sm md:text-base text-slate-500 capitalize">
              eki alfani
            </span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-x-4 md:gap-5"
            href="https://github.com/ekialfani"
            target="_blank"
            rel="noreferrer">
            <i className="bi bi-github text-2xl md:text-3xl text-custom-shadow"></i>
            <span
              className="underline text-sm md:text-base text-slate-500">
              ekialfani
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
