import { useT } from "@/hooks/useT";
import { Skill } from "@/types/types";

import Chip from "@mui/material/Chip";

type Props = {
  skill: Skill;
};

export default function CardSkill({ skill }: Props) {
  const { t } = useT();

  const Icon = skill.icon;

  const i18nPrefix = "skills.skillsList.";

  return (
    <div>
      <div className="card-skill-title">
        <Icon className="icon-skill" />
        <div className="title-skill">
          {t(i18nPrefix + `titles.${skill.title}`)}
        </div>
      </div>

      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
        {skill.technologies.map((tech, idx) => (
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
