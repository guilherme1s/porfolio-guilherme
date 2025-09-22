interface ExperienceListProps {
  title: string;
  content: string[];
}

export function ExperienceList({ title, content }: ExperienceListProps) {
  return (
    <div>
      <h1 className="text-xl mb-2">{title}</h1>
      <ul className="flex flex-col gap-1">
        {content.map((item) => {
          return (
            <li className="list-disc ml-5" key={item}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
