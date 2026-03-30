import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";

export type Project = {
  title: string;
  image: string;

  descriptionResumed: string;
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