import { skills } from "../../data/skill";
import { SectionTitle } from "../SectionTitle";
import { SkillCard } from "./SkillCard";

export function SkillSection() {
  return (
    <section id="skills" className="flex flex-col gap-12">
      <SectionTitle title="Habilidades" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill) => {
          return (
            <SkillCard
              key={skill.id}
              title={skill.title}
              icon={skill.icon}
              hoverColor={skill.hoverClass}
            />
          );
        })}
      </div>
    </section>
  );
}
