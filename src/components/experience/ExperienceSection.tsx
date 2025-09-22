import { professional } from "../../data/experience";
import { ExpansionCard } from "../ExpansionCard";
import { SectionTitle } from "../SectionTitle";
import { ExperienceList } from "./ExperienceList";

export function ExperienceSection() {
  return (
    <section id="experience" className="flex flex-col gap-12">
      <SectionTitle title="Experiência" />

      <ExpansionCard
        expansionPanel={professional.map((exp) => ({
          id: exp.id,
          title: exp.title,
          subtitle: exp.subtitle,
          content: (
            <ExperienceList
              key={exp.id}
              title={exp.role}
              content={exp.topics}
            />
          ),
        }))}
      />
    </section>
  );
}
