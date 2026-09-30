import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import getProjects from "../data";

function Projects() {
  const dataProjects = getProjects();

  const [projects, setProjects] = useState([]);

  const [sort, setSort] = useState("all");

  useEffect(() => {
    if (sort === "all") {
      setProjects(dataProjects);
      return;
    }

    if (sort === "mobile") {
      const filtered = dataProjects?.filter((item) => item?.type === "mobile");
      setProjects(filtered);
      return;
    }

    if (sort === "web") {
      const filtered = dataProjects?.filter((item) => item?.type === "web");
      setProjects(filtered);
      return;
    }
  }, [dataProjects, sort]);

  const onSetSort = (value) => {
    setSort(value);
  };

  return (
    <div className="w-full min-h-[86vh] py-10">
      <div className="mb-5">
        <h2 className="text-xs text-gray-500 font-medium mb-1">My Projects</h2>
        <h2 className="text-3xl font-bold">Things I've Built</h2>
        <p className="text-xs text-gray-500 mt-2 max-w-[280px] leading-5">
          A selection of projects I've worked on recently. take a look at some
          of them.
        </p>
      </div>
      <div>
        <div className="flex items-center gap-x-2 mb-5">
          <button
            className={`text-[11px] font-medium ${sort === "all" ? "bg-black text-white" : "bg-gray-100 text-gray-800"} border border-gray-300 px-4 py-1 rounded-full`}
            onClick={() => onSetSort("all")}
          >
            All
          </button>
          <button
            className={`text-[11px] font-medium ${sort === "mobile" ? "bg-black text-white" : "bg-gray-100 text-gray-800"} border border-gray-300 px-4 py-1 rounded-full`}
            onClick={() => onSetSort("mobile")}
          >
            Mobile App
          </button>
          <button
            className={`text-[11px] font-medium ${sort === "web" ? "bg-black text-white" : "bg-gray-100 text-gray-800"} border border-gray-300 px-4 py-1 rounded-full`}
            onClick={() => onSetSort("web")}
          >
            Web
          </button>
        </div>
        <Cards
          className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5"
          projects={projects}
        />
      </div>
    </div>
  );
}

export default Projects;
