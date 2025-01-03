function About() {
  return (
    <div className="w-full relative mt-10 md:mt-0 md:h-[80vh] flex flex-col md:justify-center">
      <div className="flex items-center flex-col md:flex-row gap-x-10 justify-between">
        <div className="order-1 md:order-2 w-[40%] flex items-center justify-start">
          <img
            className="w-full sm:w-[80%]"
            src="./images/profile.png"
            alt="profile"
          />
        </div>
        <div className="order-2 sm:w-[80%] text-sm md:text-base text-center md:text-left md:order-1 md:w-[50%]">
          <h2 className="text-2xl md:text-3xl font-bold mb-5 text-black dark:text-white">
            About <span className="text-[#4070F4]">Me</span>
          </h2>
          <p className="text-slate-500  dark:text-slate-400 leading-relaxed">
            I am a fresh graduate in Informatics with expertise as a Full-Stack
            Developer, focusing on React for front-end development and Golang
            for back-end. I have participated in intensive training programs
            such as IDCamp and Magang dan Studi Independent (MSIB), where I
            successfully completed various group-based final projects to meet
            graduation standards and earn certifications. Through these
            experiences, I have developed the skills to build comprehensive
            applications, collaborate effectively in teams, and deliver optimal
            results.
          </p>
        </div>
      </div>
      <div className="hidden sm:flex flex-col gap-8 absolute right-0 top-0 bottom-0 justify-center">
        <a
          className="text-2xl lg:text-3xl text-[#374151] dark:text-white hover:text-[#4070F4] dark:hover:text-[#4070F4]"
          href="https://www.facebook.com/ekialfani"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bi bi-facebook"></i>
        </a>
        <a
          className="text-2xl lg:text-3xl text-[#374151] dark:text-white hover:text-[#4070F4] dark:hover:text-[#4070F4]"
          href="https://www.instagram.com/ekialfni/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bi bi-instagram"></i>
        </a>
        <a
          className="text-2xl lg:text-3xl text-[#374151] dark:text-white hover:text-[#4070F4] dark:hover:text-[#4070F4]"
          href="https://www.linkedin.com/in/eki-alfani-1a1122271"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bi bi-linkedin"></i>
        </a>
        <a
          className="text-2xl lg:text-3xl text-[#374151] dark:text-white hover:text-[#4070F4] dark:hover:text-[#4070F4]"
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

export default About;
