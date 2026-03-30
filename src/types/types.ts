import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";

export type Project = {
  title: string;
  image: string;

  descriptionComplete: string;

  linkGithub: string;
  linkDemo: string;

  listOfTech: string[];
};

export type Skill = {
  title: string;
  technologies: string[];
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};

export type Experience = {
  position: string;
  from: string;
  to: string;
  company: string;
  responsibilities: string[];
};
