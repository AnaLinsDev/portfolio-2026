import { useT } from "@/hooks/useT";
import ScreenTitle from "../ScreenTitle";

export default function AboutMe() {
  const { t } = useT();
  return (
    <div>
      <ScreenTitle idx={t("aboutMe.idx")} title={t("aboutMe.title")} />
    </div>
  );
}
