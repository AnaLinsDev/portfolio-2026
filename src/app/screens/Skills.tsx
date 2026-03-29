import { useT } from "@/hooks/useT";
import ScreenTitle from "../components/ScreenTitle";
import CardApp from "../components/CardApp";

//ICONS
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import CodeOffOutlinedIcon from "@mui/icons-material/CodeOffOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";

import CardSkill from "../components/Skills/CardSkill";

export default function Skills() {
  const { t } = useT();

const skills = [
  {
    title: "frontend",
    technologies: [
      "react",
      "next",
      "typescript",
      "javascript",
      "tailwind",
      "html",
      "css"
    ],
    icon: CodeOffOutlinedIcon,
  },
  {
    title: "state",
    technologies: [
      "zustand",
      "reactQuery",
      "contextApi",
      "zod"
    ],
    icon: HubOutlinedIcon,
  },
  {
    title: "backend",
    technologies: ["node", "express", "rest", "jwt"],
    icon: DnsOutlinedIcon,
  },
  {
    title: "database",
    technologies: ["postgres", "prisma", "sql"],
    icon: StorageOutlinedIcon,
  },
  {
    title: "architecture",
    technologies: [
      "componentization",
      "cleanCode",
      "solid",
      "scalableFrontend"
    ],
    icon: AccountTreeOutlinedIcon,
  },
  {
    title: "devops",
    technologies: ["vercel", "githubActions", "cicd"],
    icon: BuildOutlinedIcon,
  },
  {
    title: "versionControl",
    technologies: ["git", "github", "gitFlow"],
    icon: TerminalOutlinedIcon,
  },
  {
    title: "tools",
    technologies: ["vite", "postman", "scrum", "kanban"],
    icon: BuildOutlinedIcon,
  },
  {
    title: "learning",
    technologies: ["docker", "systemDesign", "figma", "jest"],
    icon: AutoGraphOutlinedIcon,
  },
];

  return (
    <div>
      <ScreenTitle idx={t("skills.idx")} title={t("skills.title")} />

      <div id="container-skills">
        {skills.map((skill, idx) => (
          <CardApp key={idx}>
            <CardSkill
              title={skill.title}
              technologies={skill.technologies}
              icon={skill.icon}
            />
          </CardApp>
        ))}
      </div>
    </div>
  );
}
