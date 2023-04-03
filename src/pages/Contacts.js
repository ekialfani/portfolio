function Contacts() {
  return (
    <div className="h-full flex flex-col justify-center">
      <h2
        className="text-4xl text-custom-shadow font-bold mb-5">
        Contacts
      </h2>
      <ul className="flex gap-y-3 flex-col">
        <li>
          <a
            className="inline-block flex items-center gap-5"
            href="ekialfani15@gmail.com"
            target="_blank"
            rel="noreferrer">
            <i className="bi bi-envelope text-2xl text-custom-shadow"></i>
            <span 
              className="underline text-slate-500">
              ekialfani15@gmail.com
            </span>
          </a>
        </li>
        <li>
          <a
            className="inline block flex gap-5 items-center"
            href="https://www.facebook.com/ekialfani"
            target="_blank"
            rel="noreferrer">
            <i className="bi bi-facebook text-2xl text-custom-shadow"></i>
            <span
              className="underline capitalize text-slate-500">
              eki alfani
            </span>
          </a>
        </li>
        <li>
          <a
            className="inline-block flex items-center gap-5"
            href="https://www.instagram.com/ekialfni/"
            target="_blank"
            rel="noreferrer">
            <i className="bi bi-instagram text-2xl text-custom-shadow"></i>
            <span
              className="underline text-slate-500">
              @ekialfni
            </span>
          </a>
        </li>
        <li>
          <a
            className="inline-block flex items-center gap-5"
            href="https://www.linkedin.com/in/eki-alfani-1a1122271"
            target="_blank"
            rel="noreferrer">
            <i className="bi bi-linkedin text-2xl text-custom-shadow"></i>
            <span
              className="underline text-slate-500 capitalize">
              eki alfani
            </span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center gap-5"
            href="https://github.com/ekialfani"
            target="_blank"
            rel="noreferrer">
            <i className="bi bi-github text-2xl text-custom-shadow"></i>
            <span
              className="underline text-slate-500">
              ekialfani
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contacts;
