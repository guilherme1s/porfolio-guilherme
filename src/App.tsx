import { ThemeProvider } from "./contexts/ThemeContext";
import { Layout } from "./layouts/Layout";
import { AboutSection } from "./components/about/AboutSection";
import { ExperienceSection } from "./components/experience/ExperienceSection";
import { ProjectSection } from "./components/projects/ProjectSection";
import { ContactFormSection } from "./components/contactForm/ContactFormSection";
import { SkillSection } from "./components/skills/SkillSection";
import { Avatar } from "./components/Avatar";
import guilhermePerfil from "./assets/guilherme-perfil.jpeg";

export function App() {
  return (
    <ThemeProvider>
      <Layout>
        <AboutSection />
        <div className="mx-auto xl:w-4xl flex flex-col gap-12 px-12 xl:px-0">
          <ExperienceSection />
          <ProjectSection />
          <SkillSection />
          <ContactFormSection />

          <div className="xl:hidden">
            <Avatar src={guilhermePerfil} />
          </div>
        </div>
      </Layout>
    </ThemeProvider>
  );
}
