import { useT } from "@/hooks/useT";
import ScreenTitle from "../components/ScreenTitle";


export default function Experience() {
  const { t } = useT();
  return (
    <div>
      <ScreenTitle idx={t("experience.idx")} title={t("experience.title")} />
    </div>
  );
}
