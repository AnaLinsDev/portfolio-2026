import { useT } from "@/hooks/useT";
import { Experience } from "@/types/types";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

type Props = {
  experience: Experience;
};
export default function CardExperience({ experience }: Props) {
  const { t } = useT();
  const prefix = "experience.screen.experiences.";

  return (
    <div
      style={{
        padding: "1rem",
      }}
    >
      <div className="card-title">{t(prefix + experience.position)}</div>

      <div className="highlight-default">{t(prefix + experience.company)}</div>

      <div className="highlight-text" style={{ marginTop: "1rem" }}>
        {t(prefix + experience.from)} - {t(prefix + experience.to)}
      </div>

      <div
        className="highlight-text"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        {experience.responsibilities.map((resp, idx) => (
          <div key={idx}>
            {" "}
            <ChevronRightIcon className="highlight-default" />{" "}
            {t(prefix + resp)}
          </div>
        ))}
      </div>
    </div>
  );
}
