import { useT } from "@/hooks/useT";

import Chip from "@mui/material/Chip";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material/SvgIcon";

type SkillProp = {
  title: string;
  technologies: string[];
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
};

export default function CardSkill({ title, technologies, icon }: SkillProp) {
  const { t } = useT();

  const Icon = icon;

  const i18nPrefix = "skills.skillsList.";

  return (
    <div>
      <div className="card-skill-title">
        <Icon className="icon-skill" />
        <div className="title-skill">{t(i18nPrefix + `titles.${title}`)}</div>
      </div>

      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {technologies.map((tech, idx) => (
          <Chip
            key={idx}
            label={t(i18nPrefix + `tech.${tech}`)}
            className="chip-skill"
          ></Chip>
        ))}
      </div>
    </div>
  );
}
