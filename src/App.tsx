import { Sidebar } from "./components/Sidebar";
import { About } from "./components/About";
import { ExpansionCard } from "./components/ExpansionCard";
import { ExperienceList } from "./components/ExperienceList";
import * as experience from "./data/experience";
import { SectionTitle } from "./components/SectionTitle";

export function App() {
  return (
    <div className="xl:grid xl:grid-cols-[auto_1fr] h-screen">
      <aside className="xl:h-screen xl:overflow-y-auto">
        <Sidebar />
      </aside>

      <main className="overflow-y-auto flex flex-col gap-12 xl:gap-14 mt-12 xl:mt-0">
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
              expansionPanel={experience.professional.map((exp) => ({
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
        </div>
      </main>
    </div>
  );
}
