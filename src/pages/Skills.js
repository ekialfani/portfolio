function Skills() {
  return (
    <div 
      className="md:h-full md:flex md:flex-col md:justify-center">
      <h2 
        className="capitalize text-3xl md:text-4xl 2xl:text-6xl font-bold mt-24 mb-4 md:mt-10 md:mb-5 2xl:mb-8 text-custom-shadow">
        Skills
      </h2>
      <ul
        className="grid grid-cols-2 2xl:grid-cols-[repeat(2,_max-content)] 2xl:gap-x-60 2xl:gap-y-6 gap-y-3 text-sm md:text-base 2xl:text-2xl">
        <li 
          className="flex items-center gap-x-3 order-1">
          <i className="bi bi-check-circle-fill text-custom-shadow"></i>
          <span 
            className="font-bold text-slate-700">
            HTML
          </span>
        </li>
        <li
          className="flex items-center gap-x-3 order-3">
          <i className="bi bi-check-circle-fill text-custom-shadow"></i>
          <span
            className="font-bold text-slate-700">
            CSS
          </span>
        </li>
        <li
          className="flex items-center gap-x-3 order-5">
          <i className="bi bi-check-circle-fill text-custom-shadow"></i>
          <span
            className="font-bold text-slate-700">
            JavaScript
          </span>
        </li>
        <li
          className="flex items-center gap-x-3 order-2">
          <i className="bi bi-check-circle-fill text-custom-shadow"></i>
          <span
            className="font-bold text-slate-700">
            Tailwind CSS
          </span>
        </li>
        <li
          className="flex items-center gap-x-3 order-4">
          <i class="bi bi-check-circle-fill text-custom-shadow"></i>
          <span
            className="font-bold text-slate-700">
            ReactJS
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Skills;
