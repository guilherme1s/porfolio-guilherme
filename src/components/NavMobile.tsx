import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { Divider } from "@mui/material";

import { useTheme } from "../contexts/ThemeContext";
import { ThemeToggle } from "./ThemeToggle";

export interface NavProps {
  about: string;
  experience: string;
  projects: string;
  skills: string;
  contact: string;
}

export function NavMobile({
  about,
  contact,
  experience,
  skills,
  projects,
}: NavProps) {
  const { dark, toggleTheme } = useTheme();

  return (
    <nav className="xl:hidden bg-white dark:bg-dark-secondary dark:text-white text-primary rounded-xl p-6 w-fit shadow-md -translate-4">
      <ul className="flex flex-col gap-6">
        <li className="flex items-center gap-2">
          <PersonOutlineOutlinedIcon fontSize="small" />
          <a href={about} className="font-sans font-light">
            Sobre Mim
          </a>
        </li>

        <li className="flex items-center gap-2">
          <WorkOutlineOutlinedIcon fontSize="small" />
          <a href={experience} className="font-sans font-light">
            Experiências
          </a>
        </li>

        <li className="flex items-center gap-2">
          <FolderOpenOutlinedIcon fontSize="small" />
          <a href={projects} className="font-sans font-light">
            Projetos
          </a>
        </li>

        <li className="flex items-center gap-2">
          <BuildOutlinedIcon fontSize="small" />
          <a href={skills} className="font-sans font-light">
            Habilidades
          </a>
        </li>

        <li className="flex items-center gap-2">
          <MailOutlineOutlinedIcon fontSize="small" />
          <a href={contact} className="font-sans font-light">
            Contato
          </a>
        </li>

        <Divider className="bg-primary dark:bg-white" />

        <div className="w-fit mx-auto">
          <ThemeToggle
            darkMode={dark}
            onThemeChange={toggleTheme}
            isMobile
          />
        </div>
      </ul>
    </nav>
  );
}
