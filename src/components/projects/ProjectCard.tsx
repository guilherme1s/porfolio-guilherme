interface ProjectCardProps {
  title: string;
  description?: string;
  deployUrl?: string;
  projectUrl: string;
  tags: string[];
}

export function ProjectCard({
  title,
  description,
  deployUrl,
  projectUrl,
  tags,
}: ProjectCardProps) {
  return (
    <div className="rounded-xl p-6 border border-gray-300 w-full flex flex-col gap-6 justify-between">
      <h1 className="text-3xl">{title}</h1>

      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => {
          return (
            <span
              key={tag}
              className="px-3 py-1 rounded-md text-sm font-medium
                 bg-blue-100 text-blue-800 border border-secondary
                  hover:bg-blue-200 transition"
            >
              {tag}
            </span>
          );
        })}
      </div>

      <p>{description}</p>

      <div className="flex gap-2 justify-start">
        {deployUrl && (
          <button className="cursor-pointer p-2 w-1/2 rounded-lg text-white bg-primary hover:text-gray-300 transition-colors duration-100">
            <a href={deployUrl} target="_blank">
              Ver deploy
            </a>
          </button>
        )}

        <button
          className={`p-2 cursor-pointer rounded-lg text-white hover:text-gray-300 transition-colors duration-100 bg-primary  
            ${
            deployUrl ? "w-1/2" : "w-full"
          }`}
        >
          <a href={projectUrl} target="_blank">
            Ver código
          </a>
        </button>
      </div>
    </div>
  );
}
