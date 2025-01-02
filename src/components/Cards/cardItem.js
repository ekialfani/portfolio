export default function CardItem({ project }) {
  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-sm relative overflow-hidden">
      <a
        className="inline-block w-full h-[180px]"
        href={project.url}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="w-full h-full object-cover"
          src={project.img}
          alt={project.title}
        />
      </a>
      <div className="p-4 mb-10">
        <h4 className="capitalize text-base md:text-lg font-semibold mb-2 text-slate-700 dark:text-white hover:text-[#4070F4] dark:hover:text-[#4070F4] active:text-slate-700">
          <a href={project.url} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        </h4>
        <p className="limit-sentences leading-relaxed text-sm text-slate-500 dark:text-slate-400">
          {project.description}
        </p>
      </div>
      <div className="absolute left-0 w-full bottom-0 flex items-center justify-between px-4 py-2 gap-x-2 overflow-auto">
        <div className="flex gap-x-1">
          {project.techStack.map((stack, index) => (
            <p
              className="text-[11px] px-2 text-white bg-[#4070F4] rounded-full"
              key={index}
            >
              {stack}
            </p>
          ))}
        </div>
        <a
          className="text-2xl text-slate-700 dark:text-slate-200"
          href={project.repository}
          target="_blank"
          rel="noreferrer"
        >
          <i class="bi bi-github"></i>
        </a>
      </div>
    </div>
  );
}
