import { AboutSection } from "./components/about/AboutSection";
import { ExperienceSection } from "./components/experience/ExperienceSection";
import { ProjectSection } from "./components/projects/ProjectSection";
import { SkillSection } from "./components/skills/SkillSection";
import { Layout } from "./layouts/Layout";

export function App() {
  return (
    <Layout>
      <AboutSection />
      <div className="mx-auto xl:w-4xl flex flex-col gap-12 px-12 xl:px-0">
        <ExperienceSection />
        <ProjectSection />
        <SkillSection />
      </div>
    </Layout>
  );
}
