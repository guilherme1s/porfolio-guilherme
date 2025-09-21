import type { ElementType } from "react";

interface SkillCardProps {
  icon: ElementType;
  title: string;
  hoverColor?: string;
}

export function SkillCard({ icon: Icon, title, hoverColor }: SkillCardProps) {
  return (
    <div
      className={`rounded-xl p-6 border border-gray-300 w-full flex flex-col gap-6 justify-between items-center text-6xl transition-colors duration-100 ${hoverColor}`}
    >
      <div>
        <Icon />
      </div>
      <h1 className="text-lg font-medium">{title}</h1>
    </div>
  );
}
