import { useT } from "@/hooks/useT";
import ScreenTitle from "../components/ScreenTitle";
import CardApp from "../components/CardApp";
import { skills } from "../../data";
import CardSkill from "../components/CardSkill";

export default function Skills() {
  const { t } = useT();

  return (
    <div>
      <ScreenTitle idx={t("skills.idx")} title={t("skills.title")} />

      <div id="container-skills">
        {skills.map((skill, idx) => (
          <CardApp key={idx} padding="p-6">
            <CardSkill skill={skill} />
          </CardApp>
        ))}
      </div>
    </div>
  );
}
