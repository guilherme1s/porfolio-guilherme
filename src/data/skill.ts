import type { ElementType } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiTailwindcss,
  SiNextdotjs,
  SiPhp,
  SiMysql,
  SiGit,
} from "react-icons/si";

export interface Skill {
  id: number;
  title: string;
  icon: ElementType;
  hoverClass: string;
}

export const skills: Skill[] = [
  {
    id: 1,
    title: "HTML",
    icon: SiHtml5,
    hoverClass: "hover:text-orange-600",
  },
  {
    id: 2,
    title: "CSS",
    icon: SiCss3,
    hoverClass: "hover:text-blue-600",
  },
  {
    id: 3,
    title: "JavaScript",
    icon: SiJavascript,
    hoverClass: "hover:text-yellow-400",
  },
  {
    id: 4,
    title: "TypeScript",
    icon: SiTypescript,
    hoverClass: "hover:text-blue-500",
  },
  {
    id: 5,
    title: "React",
    icon: SiReact,
    hoverClass: "hover:text-cyan-400",
  },
  {
    id: 6,
    title: "Vue",
    icon: SiVuedotjs,
    hoverClass: "hover:text-green-500",
  },
  {
    id: 7,
    title: "Next.js",
    icon: SiNextdotjs,
    hoverClass: "hover:text-dark-secondary",
  },
  {
    id: 8,
    title: "Tailwind",
    icon: SiTailwindcss,
    hoverClass: "hover:text-sky-400",
  },
  {
    id: 9,
    title: "PHP",
    icon: SiPhp,
    hoverClass: "hover:text-indigo-500",
  },
  {
    id: 10,
    title: "MySQL",
    icon: SiMysql,
    hoverClass: "hover:text-blue-700",
  },
  {
    id: 11,
    title: "Git",
    icon: SiGit,
    hoverClass: "hover:text-red-500",
  },
];
