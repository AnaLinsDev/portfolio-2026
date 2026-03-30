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

export const email = "teste@gmail.com";

export const contacts = [
  {
    href: "https://github.com/teste",
    icon: GitHubIcon,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/teste/",
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
    image: "/images/project1.png",
    title: "project1.title",
    descriptionComplete: "project1.descriptionComplete",
    listOfTech: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    linkGithub: "https://github.com/youruser/task-manager",
    linkDemo: "https://task-manager-demo.com",
  },
  {
    image: "/images/project2.jpg",
    title: "project2.title",
    descriptionComplete: "project2.descriptionComplete",
    listOfTech: ["Vue", "Vuex", "Firebase", "Stripe API"],
    linkGithub: "https://github.com/youruser/ecommerce",
    linkDemo: "https://ecommerce-demo.com",
  },
  {
    image: "/images/project3.png",
    title: "project3.title",
    descriptionComplete: "project3.descriptionComplete",
    listOfTech: ["React", "Socket.io", "Node.js", "Express"],
    linkGithub: "https://github.com/youruser/chat-app",
    linkDemo: "https://chat-demo.com",
  },
  {
    image: "/images/project4.png",
    title: "project4.title",
    descriptionComplete: "project4.descriptionComplete",
    listOfTech: ["Nuxt", "Vuetify", "CSS", "Netlify"],
    linkGithub: "https://github.com/youruser/portfolio",
    linkDemo: "https://portfolio-demo.com",
  },
  {
    image: "/images/project5.png",
    title: "project5.title",
    descriptionComplete: "project5.descriptionComplete",
    listOfTech: ["React", "Recharts", "TailwindCSS", "REST API"],
    linkGithub: "https://github.com/youruser/dashboard",
    linkDemo: "https://dashboard-demo.com",
  },
  {
    image: "/images/project6.png",
    title: "project6.title",
    descriptionComplete: "project6.descriptionComplete",
    listOfTech: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
    linkGithub: "https://github.com/youruser/booking-system",
    linkDemo: "https://booking-demo.com",
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
