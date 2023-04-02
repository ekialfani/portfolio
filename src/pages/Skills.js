function Skills() {
  return (
    <div 
      className="h-full flex flex-col justify-center">
      <h2 
        className="capitalize text-4xl font-bold mt-10 mb-5 text-custom-shadow">
        Skills
      </h2>
      <ul
        className="grid grid-cols-2 gap-y-3">
        <li 
          className="flex items-center gap-x-3">
          <i className="bi bi-check-circle-fill text-custom-shadow"></i>
          <span 
            className="font-bold text-slate-700">
            HTML
          </span>
        </li>
        <li
          className="flex items-center gap-x-3">
          <i className="bi bi-check-circle-fill text-custom-shadow"></i>
          <span
            className="font-bold text-slate-700">
            CSS
          </span>
        </li>
        <li
          className="flex items-center gap-x-3">
          <i className="bi bi-check-circle-fill text-custom-shadow"></i>
          <span
            className="font-bold text-slate-700">
            JavaScript
          </span>
        </li>
        <li
          className="flex items-center gap-x-3">
          <i className="bi bi-check-circle-fill text-custom-shadow"></i>
          <span
            className="font-bold text-slate-700">
            ReactJS
          </span>
        </li>
        <li
          className="flex items-center gap-x-3">
          <i class="bi bi-check-circle-fill text-custom-shadow"></i>
          <span
            className="font-bold text-slate-700">
            React Native
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Skills;
