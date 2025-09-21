interface SectionTitleProps {
    title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h1 className="text-4xl">
      {title} <span className="text-secondary text-5xl">.</span>
    </h1>
  );
}
