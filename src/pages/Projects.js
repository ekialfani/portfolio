import Cards from "../components/Cards";
import getProjects from "../data";

function Projects() {
  const dataProjects = getProjects();

  return (
    <div className="w-full h-full py-14">
      <h2 className="text-2xl md:text-3xl text-center font-bold mb-10 text-black dark:text-white">
        My <span className="text-[#4070F4]">Projects</span>
      </h2>
      <Cards
        className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5"
        projects={dataProjects}
      />
    </div>
  );
}

export default Projects;
