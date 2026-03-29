import { useT } from "@/hooks/useT";
import ScreenTitle from "../components/ScreenTitle";

export default function Projects() {
  const { t } = useT();
  return (
    <div>
      <ScreenTitle idx={t("projects.idx")} title={t("projects.title")} />
    </div>
  );
}
