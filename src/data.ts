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
    label: "Email",
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
    image: "/images/project5.png",
    title: "project5.title",
    descriptionComplete: "project5.descriptionComplete",
    listOfTech: [
      "skills.skillsList.tech.typescript",
      "skills.skillsList.tech.react",
      "skills.skillsList.tech.idb",
      "skills.skillsList.tech.lint",
      "skills.skillsList.tech.tailwind",
      "skills.skillsList.tech.i18n",
    ],
    linkGithub: "https://github.com/AnaLinsDev/my-agenda-app",
    linkDemo: "https://my-agenda-app-woad.vercel.app/",
  },
  {
    image: "/images/project4.png",
    title: "project4.title",
    descriptionComplete: "project4.descriptionComplete",
    listOfTech: [
      "skills.skillsList.tech.typescript",
      "skills.skillsList.tech.react",
      "skills.skillsList.tech.express",
      "skills.skillsList.tech.lint",
      "skills.skillsList.tech.tailwind",
      "skills.skillsList.tech.vitest",
    ],
    linkGithub: "https://github.com/AnaLinsDev/factory-pulse",
    linkDemo: "",
  },
  {
    image: "/images/project1.png",
    title: "project1.title",
    descriptionComplete: "project1.descriptionComplete",
    listOfTech: [
      "skills.skillsList.tech.react",
      "skills.skillsList.tech.html",
      "skills.skillsList.tech.css",
      "skills.skillsList.tech.axios",
    ],
    linkGithub: "https://github.com/AnaLinsDev/cadastro-reactjs",
    linkDemo: "",
  },
  {
    image: "/images/project2.png",
    title: "project2.title",
    descriptionComplete: "project2.descriptionComplete",
    listOfTech: [
      "skills.skillsList.tech.react",
      "skills.skillsList.tech.redux",
      "skills.skillsList.tech.html",
      "skills.skillsList.tech.sass",
      "skills.skillsList.tech.rest",
    ],
    linkGithub: "https://github.com/AnaLinsDev/free-to-play-app-reactjs",
    linkDemo: "",
  },
  {
    image: "/images/project3.png",
    title: "project3.title",
    descriptionComplete: "project3.descriptionComplete",
    listOfTech: [
      "skills.skillsList.tech.react",
      "skills.skillsList.tech.node",
      "skills.skillsList.tech.html",
      "skills.skillsList.tech.css",
    ],
    linkGithub: "https://github.com/AnaLinsDev/be-the-hero",
    linkDemo: "",
  },
];

export const skills = [
  {
    title: "frontend",
    technologies: [
      "typescript",
      "react",
      "vue",
      "next",
      "i18n",
      "javascript",
      "tailwind",
      "html",
      "css",
    ],
    icon: CodeOffOutlinedIcon,
  },
  {
    title: "state",
    technologies: ["zustand", "contextApi", "zod"],
    icon: HubOutlinedIcon,
  },
  {
    title: "backend",
    technologies: ["node", "express", "python", "rest", "jwt"],
    icon: DnsOutlinedIcon,
  },
  {
    title: "database",
    technologies: ["postgres", "sql"],
    icon: StorageOutlinedIcon,
  },
  {
    title: "architecture",
    technologies: ["componentization", "cleanCode"],
    icon: AccountTreeOutlinedIcon,
  },
  {
    title: "devops",
    technologies: ["vercel", "githubActions"],
    icon: BuildOutlinedIcon,
  },
  {
    title: "versionControl",
    technologies: ["git", "github"],
    icon: TerminalOutlinedIcon,
  },
  {
    title: "tools",
    technologies: ["vite", "postman", "scrum", "kanban"],
    icon: BuildOutlinedIcon,
  },
  {
    title: "learning",
    technologies: ["docker", "figma", "jest"],
    icon: AutoGraphOutlinedIcon,
  },
  /*
  Study and create slides or pdfs to pass as learned:
  - docker
  - figma
  - jest
  - systemDesign
  - reactQuery
  - gitFlow
  - cicd
  - solid
  - prisma
  */
];
