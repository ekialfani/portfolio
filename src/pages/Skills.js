function Skills() {
  return (
    <div className="">
      <h2 className="text-3xl font-semibold mb-4">
        My <span className="text-[#4070F4]">Skills</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        <ul className="flex flex-col gap-y-1">
          <h4 className="font-semibold">Languages</h4>
          <li className="text-slate-500 font-medium">HTML</li>
          <li className="text-slate-500 font-medium">CSS</li>
          <li className="text-slate-500 font-medium">JavaScript</li>
          <li className="text-slate-500 font-medium">Golang</li>
        </ul>
        <ul className="flex flex-col gap-y-1">
          <h4 className="font-semibold">Frameworks</h4>
          <li className="text-slate-500 font-medium">React JS</li>
          <li className="text-slate-500 font-medium">React Native</li>
          <li className="text-slate-500 font-medium">GIN</li>
          <li className="text-slate-500 font-medium">GORM</li>
          <li className="text-slate-500 font-medium">Tailwind CSS</li>
        </ul>
        <ul className="flex flex-col gap-y-1">
          <h4 className="font-semibold">Databases</h4>
          <li className="text-slate-500 font-medium">MySQL</li>
          <li className="text-slate-500 font-medium">PostgreSQL</li>
        </ul>
        <ul className="flex flex-col gap-y-1">
          <h4 className="font-semibold">Tools</h4>
          <li className="text-slate-500 font-medium">Git</li>
          <li className="text-slate-500 font-medium">Github</li>
          <li className="text-slate-500 font-medium">Postman</li>
        </ul>
      </div>
      <div className="flex flex-col gap-8 absolute right-0 top-0 bottom-0 justify-center">
        <a
          className="text-2xl lg:text-3xl text-[#374151] hover:text-[#4070F4]"
          href="https://www.facebook.com/ekialfani"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bi bi-facebook"></i>
        </a>
        <a
          className="text-2xl lg:text-3xl text-[#374151] hover:text-[#4070F4]"
          href="https://www.instagram.com/ekialfni/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bi bi-instagram"></i>
        </a>
        <a
          className="text-2xl lg:text-3xl text-[#374151] hover:text-[#4070F4]"
          href="https://www.linkedin.com/in/eki-alfani-1a1122271"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bi bi-linkedin"></i>
        </a>
        <a
          className="text-2xl lg:text-3xl text-[#374151] hover:text-[#4070F4]"
          href="https://github.com/ekialfani"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bi bi-github"></i>
        </a>
      </div>
    </div>
  );
}

export default Skills;
