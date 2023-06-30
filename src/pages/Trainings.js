function Trainings() {
  return (
    <div>
      <h2 
        className="capitalize text-3xl md:text-4xl 2xl:text-6xl font-bold mt-24 mb-4 md:mt-10 md:mb-5 2xl:mb-8 text-custom-shadow">
        online trainings
      </h2>

      <div
        className="w-full mb-10">
          <div 
            className="flex items-center justify-between flex-wrap gap-x-5 gap-y-1">
            <h3 
              className="text-base md:text-lg capitalize font-semibold text-slate-700">
              menjadi front-end web developer expert (IDCamp)
            </h3>
            <span
              className="text-xs text-custom-shadow font-medium mb-2">
              Nov 12, 2022 - Jan 26, 2023
            </span>
          </div>
        <h4
          className="capitalize text-sm md:text-base italic text-slate-700 mb-1 mt-2">
          dicoding indonesia
        </h4>
        <ul
          className="text-sm leading-relaxed md:text-base list-disc ml-3 md:ml-4 text-slate-500">
          <li>
            Learn how to build a website by applying the mobile-first approach and accessibility principles.
          </li>
          <li>
            Learn JavaScript clean code and progressive web app development.
            </li>
          <li>
            Learn Automation Testing and Web Performance optimization techniques.
          </li>
          <li>
            Learn Deployment with CI/CD and work on a final project to create a restaurant catalog website.
          </li>
        </ul>
      </div>

      <div
        className="w-full mb-10">
        <div
          className="flex items-center justify-between flex-wrap gap-x-5 gap-y-1">
          <h3
            className="text-base md:text-lg capitalize font-semibold text-slate-700">
              belajar fundamental front-end web development (IDCamp)
          </h3>
          <span 
            className="text-xs text-custom-shadow font-medium mb-2">
            Sep 8, 2022 - Nov 7, 2022
          </span>
        </div>
        <h4 
          className="capitalize text-sm md:text-base italic text-slate-700 mb-1 mt-2">
          dicoding indonesia
        </h4>
        <ul
          className="text-sm leading-relaxed md:text-base list-disc ml-3 md:ml-4 text-slate-500 md:max-w-3xl">
          <li>
            Learn EcmaScript 6 (ES6) and Web Components.
          </li>
          <li>
            Learn Package Manager and Module Bundler for JavaScript.
          </li>
          <li>
            Learn Asynchronous JavaScript Requests and work on a final project to create a website that implements Web Components, Webpack, and displays dynamic data from a Web API using AJAX.
          </li>
        </ul>
      </div>

      <div
        className="w-full mb-10">
        <div
          className="flex items-center justify-between flex-wrap gap-x-5 gap-y-1">
          <h3
            className="text-base md:text-lg capitalize font-semibold text-slate-700">
            belajar membuat front-end web untuk pemula (IDCamp)
          </h3>
          <span
            className="text-xs text-custom-shadow font-medium mb-2">
            Aug 10, 2022 - Sep 4, 2022
          </span>
        </div>
        <h4
          className="capitalize text-sm md:text-base italic text-slate-700 mb-1 mt-2">
          dicoding indonesia
        </h4>
        <ul
          className="text-sm leading-relaxed md:text-base list-disc ml-3 md:ml-4 text-slate-500 md:max-w-3xl">
          <li>
            Learn Browser Object Model (BOM) and Document Object Model (DOM) concepts.
          </li>
          <li>
            Learn Event Handlers and Custom Events in web development.
          </li>
          <li>
            Learn data storage with Web Storage and work on a final project to create an interactive front-end web application with storage feature using Web Storage.
          </li>
        </ul>
      </div>

      <div
        className="w-full mb-10">
        <div
          className="flex items-center justify-between flex-wrap gap-x-5 gap-y-1">
          <h3 
            className="text-base md:text-lg capitalize font-semibold text-slate-700">
            belajar dasar pemrograman web (IDCamp)
          </h3>
          <span
            className="text-xs text-custom-shadow font-medium mb-2">
            May 27, 2022 - Aug 10, 2022
          </span>
        </div>
        <h4 
          className="capitalize text-sm md:text-base italic text-slate-700 mb-1 mt-2">
          dicoding indonesia
        </h4>
        <ul
          className="text-sm leading-relaxed md:text-base list-disc ml-3 md:ml-4 text-slate-500 md:max-w-3xl">
          <li>
            Learn the introduction of websites, how they work, and the tools used to develop them.
          </li>
          <li>
            Learn HTML and CSS.
          </li>
          <li>
            Learn how to create responsive layouts with Flexbox and work on a final project to create a simple website that implements semantic elements and Flexbox or Float layouts.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Trainings;
