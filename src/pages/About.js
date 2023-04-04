function About() {
  return (
    <div
      className="mt-28 md:h-full md:mt-0 md:flex md:flex-col md:justify-center">
      <h1 
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-[10em] capitalize font-bold text-custom-shadow">
        eki alfani
      </h1>
      <h2
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-6xl capitalize font-semibold text-slate-700 mt-2 mb-5 md:mb-8 2xl:mb-12 ml-1">
        front-end web developer
      </h2>
      <p 
        className="text-xs md:text-sm lg:text-base 2xl:text-2xl text-slate-500 mb-5 md:mb-8 2xl:mb-12 max-w-xl md:max-w-2xl lg:max-w-3xl 2xl:max-w-5xl leading-5 md:leading-relaxed xl:leading-looser 2xl:leading-10">
        Hi, my name is Eki Alfani, and I am a computer science student. I am very interested and enthusiastic about learning and developing my skills in web technology, particularly in Front-End development with ReactJS. I have completed several online training programs in Front-End development and have built several projects for practice.
      </p>
      <div 
        className="flex gap-6 md:gap-7 2xl:gap-10">
        <a
          className="text-xl md:text-2xl 2xl:text-4xl text-custom-shadow"
          href="https://www.facebook.com/ekialfani"
          target="_blank"
          rel="noreferrer">
          <i class="bi bi-facebook"></i>
        </a>
        <a
          className="text-xl md:text-2xl 2xl:text-4xl text-custom-shadow"
          href="https://www.instagram.com/ekialfni/"
          target="_blank"
          rel="noreferrer">
          <i class="bi bi-instagram"></i>
        </a>
        <a
          className="text-xl md:text-2xl 2xl:text-4xl text-custom-shadow"
          href="https://www.linkedin.com/in/eki-alfani-1a1122271"
          target="_blank"
          rel="noreferrer">
          <i class="bi bi-linkedin"></i>
        </a>
        <a
          className="text-xl md:text-2xl 2xl:text-4xl text-custom-shadow"
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
