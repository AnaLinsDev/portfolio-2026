//ICONS
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import CodeOffOutlinedIcon from "@mui/icons-material/CodeOffOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export const email = "analinsdev@gmail.com";

export const contacts = [
  {
    href: "https://github.com/AnaLinsDev",
    icon: GitHubIcon,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/ana-julia-lins-devbrasil/",
    icon: LinkedInIcon,
    label: "LinkedIn",
  },
  {
    href: `mailto:${email}`,
    icon: EmailIcon,
    label: "email",
  },
];

export const experiences = [
  {
    position: "0.position",
    from: "0.from",
    to: "0.to",
    company: "0.company",
    responsibilities: [
      "0.responsibilities.0",
      "0.responsibilities.1",
      "0.responsibilities.2",
    ],
  },
  {
    position: "1.position",
    from: "1.from",
    to: "1.to",
    company: "1.company",
    responsibilities: [
      "1.responsibilities.0",
      "1.responsibilities.1",
      "1.responsibilities.2",
    ],
  },
  {
    position: "2.position",
    from: "2.from",
    to: "2.to",
    company: "2.company",
    responsibilities: [
      "2.responsibilities.0",
      "2.responsibilities.1",
      "2.responsibilities.2",
    ],
  },
];

export const projects = [
  {
    image:
      "https://user-images.githubusercontent.com/60307596/81940568-1b2da800-95ce-11ea-85a5-68189354b434.PNG",
    title: "project1.title",
    descriptionComplete: "project1.descriptionComplete",
    listOfTech: ["React", "HTML", "CSS", "Json"],
    linkGithub: "https://github.com/AnaLinsDev/cadastro-reactjs",
    linkDemo: "",
  },
  {
    image:
      "https://user-images.githubusercontent.com/60307596/130265320-63646d08-c7a4-490b-aadd-77cec15a7f80.PNG",
    title: "project2.title",
    descriptionComplete: "project2.descriptionComplete",
    listOfTech: ["React", "Redux", "HTML", "Sass", "API"],
    linkGithub: "https://github.com/AnaLinsDev/free-to-play-app-reactjs",
    linkDemo: "",
  },
  {
    image:
      "https://user-images.githubusercontent.com/60307596/81362712-ded2e700-90b7-11ea-9814-142b1c9508fd.PNG",
    title: "project3.title",
    descriptionComplete: "project3.descriptionComplete",
    listOfTech: ["React", "Node", "HTML", "CSS"],
    linkGithub: "https://github.com/AnaLinsDev/be-the-hero",
    linkDemo: "",
  },
];

export const skills = [
  {
    title: "frontend",
    technologies: [
      "react",
      "next",
      "typescript",
      "javascript",
      "tailwind",
      "html",
      "css",
    ],
    icon: CodeOffOutlinedIcon,
  },
  {
    title: "state",
    technologies: ["zustand", "reactQuery", "contextApi", "zod"],
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
    technologies: ["componentization", "cleanCode", "solid"],
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
