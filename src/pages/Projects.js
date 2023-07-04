import Cards from "../components/Cards";
import getProjects from "../data";

function Projects() {
  const dataProjects = getProjects();

  return (
    <div>
      <h2 
        className="capitalize text-center text-3xl md:text-4xl 2xl:text-6xl font-bold mt-24 mb-6 md:mt-10 mb-10 md:mb-12 2xl:mb-14 2xl:mt-14 text-custom-shadow">
        projects
      </h2>
      <Cards
        className="grid grid-cols-[minmax(180px,_280px)] sm:grid-cols-[repeat(2,_minmax(180px,_280px))] xl:grid-cols-[repeat(3,_minmax(200px,_300px))] justify-center gap-8"
        projects={dataProjects}
      />
    </div>
  );
}

export default Projects;
