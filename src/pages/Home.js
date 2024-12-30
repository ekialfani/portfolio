import React from "react";

function Home() {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="text-[2.7rem] sm:text-6xl font-bold">
        <span className="block md:inline">Hi,</span> I'm{" "}
        <span className="text-[#4070F4]">Eki Alfani</span>
      </h1>
      <h2 className="text-xl sm:text-2xl font-semibold text-[#374151]">
        Full-Stack Developer
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-slate-500 sm:max-w-[500px] md:max-w-2xl pr-12">
        Junior Full-Stack Developer with expertise in building applications using React and Golang. Experience in developing user-friendly web and mobile applications with interactive interfaces and scalable backends. Eager to contribute to creating responsive and functional application in collaborative team environment.
      </p>
      <a
        href="mailto:ekialfani15@gmail.com"
        className="bg-[#4070F4] hover:bg-[#285dee] active:bg-[#4070F4] w-max text-sm md:text-base capitalize px-5 py-2 rounded-md text-white font-semibold"
      >
        reach me!
      </a>
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

export default Home;
