import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { type NavProps } from "./NavMobile";

export function NavDesktop({ about, contact, experience, projects, skills }: NavProps) {
  return (
    <nav className="hidden xl:flex flex-col items-center justify-evenly h-full text-lg">
      <h1 className="text-3xl font-pacifico">Guilherme</h1>

      <ul className="flex flex-col gap-4">
        <li><a href={about}>Sobre Mim</a></li>
        <li><a href={experience}>Experiências</a></li>
        <li><a href={projects}>Projetos</a></li>
        <li><a href={skills}>Habilidades</a></li>
        <li><a href={contact}>Contato</a></li>
      </ul>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <GitHubIcon fontSize="large" />
          <a href="https://github.com/guilherme1s" target="_blank">Github</a>
        </div>

        <div className="flex items-center gap-2">
          <LinkedInIcon fontSize="large" />
          <a href="https://www.linkedin.com/in/guilherme-silva-evangelista022/" target="_blank">
            Linkedin
          </a>
        </div>
      </div>

      <footer className="text-xs mt-6">
        <p>©2025 Guilherme Evangelista.</p>
        <p>Todos os direitos reservados.</p>
      </footer>
    </nav>
  );
}
