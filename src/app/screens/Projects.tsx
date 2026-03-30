import { useT } from "@/hooks/useT";
import ScreenTitle from "../components/ScreenTitle";
import { projects } from "../../data";
import CardApp from "../components/CardApp";
import CardProject from "../components/CardProject";


export default function Projects() {
  const { t } = useT();
  return (
    <div>
      <ScreenTitle idx={t("projects.idx")} title={t("projects.title")} />

      <div id="container-projects">
        {projects.map((project, idx) => (
          <CardApp key={idx}>
            <CardProject project={project} />
          </CardApp>
        ))}
      </div>
    </div>
  );
}
