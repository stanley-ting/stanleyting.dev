import { IconType } from "react-icons";
import {
  SiPython,
  SiTypescript,
  SiGo,
  SiJavascript,
  SiNodedotjs,
  SiFastapi,
  SiSpringboot,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiOpenai,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiTerraform,
  SiPostgresql,
  SiRedis,
  SiGit,
  SiFlask,
  SiLanggraph,
  SiLangchain,
  SiNeo4J,
  SiN8N,
  SiPrefect,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "Java", icon: FaJava },
      { name: "Go", icon: SiGo },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "FastAPI", icon: SiFastapi },
      { name: "Flask", icon: SiFlask},
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Redis", icon: SiRedis },
      { name: "Prefect", icon: SiPrefect },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
    ],
  },
  {
    name: "Agentic Development",
    skills: [
      { name: "LangGraph", icon: SiLanggraph },
      { name: "LangChain", icon: SiLangchain },
      { name: "Neo4J", icon: SiNeo4J },
      { name: "n8n", icon: SiN8N },
      { name: "OpenAI", icon: SiOpenai },
    ],
  },
  {
    name: "DevOps",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "AWS", icon: FaAws },
      { name: "Terraform", icon: SiTerraform },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Git", icon: SiGit },
    ],
  },
];

// Flat list of all skills for simpler displays
export const allSkills = skillCategories.flatMap((cat) => cat.skills);
