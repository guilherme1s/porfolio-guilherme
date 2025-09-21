import { Sidebar } from "./components/Sidebar";
import { About } from "./components/About";
import { ExpansionCard } from "./components/ExpansionCard";
import { ExperienceList } from "./components/ExperienceList";
import { professional } from "./data/experience";
import { projects } from "./data/project";

import { SectionTitle } from "./components/SectionTitle";
import { ProjectCard } from "./components/ProjectCard";
import { SkillCard } from "./components/SkillCard";
import { skills } from "./data/skill";

export function App() {
  return (
    <div className="xl:grid xl:grid-cols-[auto_1fr] h-screen">
      <aside className="xl:h-screen xl:overflow-y-auto">
        <Sidebar />
      </aside>

      <main className="overflow-y-auto flex flex-col gap-12 xl:gap-14 mt-12 pb-12 xl:mt-0">
        <section
          id="about"
          className="xl:min-h-screen flex items-center justify-center"
        >
          <About />
        </section>

        <div className="mx-auto w-full xl:w-4xl flex flex-col gap-12 px-12 xl:px-0">
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

          <section id="projects" className="flex flex-col gap-12">
            <SectionTitle title="Projetos" />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {projects.map((project) => {
                return (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    deployUrl={project.deployUrl}
                    projectUrl={project.gitHubUrl}
                    tags={project.tecnology}
                  />
                );
              })}
            </div>
          </section>

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
        </div>
      </main>
    </div>
  );
}
