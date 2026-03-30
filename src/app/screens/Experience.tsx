import { useT } from "@/hooks/useT";
import ScreenTitle from "../components/ScreenTitle";
import Box from "@mui/material/Box";
import { experiences } from "../../data";
import CardApp from "../components/CardApp";
import CardExperience from "../components/CardExperience";

export default function Experience() {
  const { t } = useT();

  return (
    <div>
      <ScreenTitle idx={t("experience.idx")} title={t("experience.title")} />

      <Box
        sx={{
          display: "flex",
          marginTop: "2rem",
          gap: "2rem",
          flexDirection: "column",
        }}
      >
        {experiences.map((experience, idx) => (
          <CardApp key={idx} isExperience>
            <CardExperience experience={experience}></CardExperience>
          </CardApp>
        ))}
      </Box>
    </div>
  );
}
