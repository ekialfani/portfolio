import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CardItem({ project }) {
  return (
    <div className="border border-gray-200 dark:border-gray-800 rounded-md relative px-4 pb-4 pt-3 flex flex-col">
      <a
        className="inline-block w-full h-[120px] overflow-hidden rounded-md"
        href={project.url}
        target="_blank"
        rel="noreferrer"
      >
        <img src={project.img} alt={project.title} />
      </a>

      {/* content */}
      <div className="flex flex-col flex-1 mt-2">
        <div className="mb-1">
          <div className="flex justify-between items-center">
            <h4 className="text-sm font-semibold">{project.title}</h4>
            {project?.url && (
              <a href={project?.url} target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  className="text-[10px] font-medium"
                  icon={faArrowUpRightFromSquare}
                />
              </a>
            )}
          </div>

          <p className="max-w-[90%] limit-sentences leading-relaxed text-xs text-gray-500 dark:text-gray-400">
            {project.description}
          </p>
        </div>

        {/* tech stack + repository */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-wrap gap-1">
            {project.techStack.map((stack, index) => (
              <p
                className="text-[9px] bg-gray-200 dark:bg-gray-400 font-medium px-3 py-0.5 rounded-full text-gray-600 dark:text-gray-800"
                key={index}
              >
                {stack}
              </p>
            ))}
          </div>

          <a
            className="text-md text-slate-700 dark:text-slate-200 ml-2"
            href={project.repository}
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
