function About() {
  return (
    <div>
      <h1 
        className="text-8xl capitalize font-bold text-custom-shadow">
        eki alfani
      </h1>
      <h2
        className="text-4xl capitalize font-semibold text-slate-700 mt-2 mb-6">
        front-end web developer
      </h2>
      <p 
        className="text-slate-500 mb-6">
        Hi, my name is Eki Alfani, and I am a computer science student. I am very interested and enthusiastic about learning and developing my skills in web technology, particularly in Front-End development with ReactJS. I have completed several online training programs in Front-End development and have built several projects for practice.
      </p>
      <div 
        className="flex gap-6">
        <a
          className="text-2xl text-custom-shadow"
          href="https://www.facebook.com/ekialfani"
          target="_blank"
          rel="noreferrer">
          <i class="bi bi-facebook"></i>
        </a>
        <a
          className="text-2xl text-custom-shadow"
          href="https://www.instagram.com/ekialfni/"
          target="_blank"
          rel="noreferrer">
          <i class="bi bi-instagram"></i>
        </a>
        <a
          className="text-2xl text-custom-shadow"
          href="#null"
          target="_blank"
          rel="noreferrer">
          <i class="bi bi-linkedin"></i>
        </a>
        <a
          className="text-2xl text-custom-shadow"
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
