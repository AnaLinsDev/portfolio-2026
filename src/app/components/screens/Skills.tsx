import { useT } from "@/hooks/useT";
import ScreenTitle from "../ScreenTitle";

export default function Skills() {
  const { t } = useT();
  return (
    <div>
      <ScreenTitle idx={t("skills.idx")} title={t("skills.title")} />
    </div>
  );
}
