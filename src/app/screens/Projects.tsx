import { useT } from "@/hooks/useT";
import ScreenTitle from "../components/ScreenTitle";
import { projects } from "../../data";
import CardApp from "../components/CardApp";
import CardProject from "../components/CardProject";
import CardProjectHorizontal from "../components/CardProjectHorizontal";
import Box from "@mui/material/Box";

export default function Projects() {
  const { t } = useT();
  return (
    <div>
      <ScreenTitle idx={t("projects.idx")} title={t("projects.title")} />

      <Box id="container-projects" sx={{ display: { xs: "grid", md: "none" } }}>
        {projects.map((project, idx) => (
          <CardApp key={idx}>
            <CardProject project={project} />
          </CardApp>
        ))}
      </Box>

      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          marginTop: "2rem",
          gap: "2rem",
          flexDirection: "column",
        }}
      >
        {projects.map((project, idx) => (
          <CardApp key={idx}>
            <CardProjectHorizontal project={project} />
          </CardApp>
        ))}
      </Box>
    </div>
  );
}
