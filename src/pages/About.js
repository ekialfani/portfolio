function About() {
  return (
    <div
      className="mt-24 md:h-full md:mt-0 md:flex md:flex-col md:justify-center">
      <h1 
        className="text-6xl md:text-8xl xl:text-9xl capitalize font-bold text-custom-shadow">
        eki alfani
      </h1>
      <h2
        className="text-2xl md:text-4xl xl:text-5xl capitalize font-semibold text-slate-700 mt-2 mb-5 md:mb-8 2xl:mb-12 ml-1">
        front-end developer
      </h2>
      <p 
        className="text-sm lg:text-base xl:text-lg text-slate-500 mb-6 md:mb-8 2xl:mb-12 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl xl:leading-relaxed">
        Hi, I'm Eki Alfani, a Front-End Developer with expertise in React and React Native. I have a strong command of HTML, CSS, and JavaScript, and I'm experienced in creating responsive and visually appealing web applications. My skills include implementing component-based architecture, managing application state, and integrating APIs using React and React Native. I'm passionate about continuous learning and staying updated with the latest trends in Front-End Development.
      </p>
      <div 
        className="flex gap-7 2xl:gap-10">
        <a
          className="text-2xl lg:text-3xl text-custom-shadow"
          href="https://www.facebook.com/ekialfani"
          target="_blank"
          rel="noreferrer">
          <i class="bi bi-facebook"></i>
        </a>
        <a
          className="text-2xl lg:text-3xl text-custom-shadow"
          href="https://www.instagram.com/ekialfni/"
          target="_blank"
          rel="noreferrer">
          <i class="bi bi-instagram"></i>
        </a>
        <a
          className="text-2xl lg:text-3xl text-custom-shadow"
          href="https://www.linkedin.com/in/eki-alfani-1a1122271"
          target="_blank"
          rel="noreferrer">
          <i class="bi bi-linkedin"></i>
        </a>
        <a
          className="text-2xl lg:text-3xl text-custom-shadow"
          href="https://github.com/ekialfani"
          target="_blank"
          rel="noreferrer">
          <i class="bi bi-github"></i>
        </a>
      </div>
    </div>
  );
}

export default About;
