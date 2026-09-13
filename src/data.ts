//ICONS
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import CodeOffOutlinedIcon from "@mui/icons-material/CodeOffOutlined";
import DnsOutlinedIcon from "@mui/icons-material/DnsOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import BugReportOutlinedIcon from "@mui/icons-material/BugReportOutlined";
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
    image: "/images/project1.png",
    title: "project1.title",
    descriptionComplete: "project1.descriptionComplete",
    listOfTech: [
      "skills.skillsList.tech.dotnet",
      "skills.skillsList.tech.aspnet_core",
      "skills.skillsList.tech.entity_framework_core",
      "skills.skillsList.tech.async_await",
      "skills.skillsList.tech.solid",
      "skills.skillsList.tech.rest",
    ],
    linkGithub: "https://github.com/AnaLinsDev/cash-flow-api",
    linkDemo: "",
  },
  {
    image: "/images/project2.png",
    title: "project2.title",
    descriptionComplete: "project2.descriptionComplete",
    listOfTech: [
      "skills.skillsList.tech.dotnet",
      "skills.skillsList.tech.aspnet_core",
      "skills.skillsList.tech.rest",
      "skills.skillsList.tech.sqlite",
    ],
    linkGithub: "https://github.com/AnaLinsDev/journey-api",
    linkDemo: "",
  },
  {
    image: "/images/project5.png",
    title: "project5.title",
    descriptionComplete: "project5.descriptionComplete",
    listOfTech: [
      "skills.skillsList.tech.typescript",
      "skills.skillsList.tech.react",
      "skills.skillsList.tech.tailwind",
    ],
    linkGithub: "https://github.com/AnaLinsDev/my-agenda-app",
    linkDemo: "https://my-agenda-app-woad.vercel.app/login",
  },
  {
    image: "/images/project4.png",
    title: "project4.title",
    descriptionComplete: "project4.descriptionComplete",
    listOfTech: [
      "skills.skillsList.tech.typescript",
      "skills.skillsList.tech.react",
      "skills.skillsList.tech.tailwind",
    ],
    linkGithub: "https://github.com/AnaLinsDev/factory-pulse",
    linkDemo: "",
  },
];

export const skills = [
  {
    title: "backend",
    technologies: [
      "dotnet",
      "csharp",
      "aspnet_core",
      "entity_framework_core",
      "rest",
      "jwt",
      "dependency_injection",
      "solid",
    ],
    icon: DnsOutlinedIcon,
  },
  {
    title: "frontend",
    technologies: [
      "typescript",
      "react",
      "vue",
      "next",
      "javascript",
      "tailwind",
      "html",
      "css",
    ],
    icon: CodeOffOutlinedIcon,
  },
  {
    title: "database",
    technologies: ["postgresql", "sql"],
    icon: StorageOutlinedIcon,
  },
  {
    title: "architecture",
    technologies: [
      "dotnet_layered_architecture",
      "frontend_componentization",
      "cleanCode",
    ],
    icon: AccountTreeOutlinedIcon,
  },
  {
    title: "testing",
    technologies: ["unit_tests"],
    icon: BugReportOutlinedIcon,
  },
  {
    title: "versionControl",
    technologies: ["git", "github", "githubActions"],
    icon: TerminalOutlinedIcon,
  },
  {
    title: "tools",
    technologies: ["postman", "scrum", "kanban"],
    icon: BuildOutlinedIcon,
  },
  {
    title: "learning",
    technologies: ["docker", "integration_tests", "azure"],
    icon: AutoGraphOutlinedIcon,
  },
];

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
