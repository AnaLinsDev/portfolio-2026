import { useT } from "@/hooks/useT";
import ScreenTitle from "../ScreenTitle";

export default function Contact() {
  const { t } = useT();
  return (
    <div>
      <ScreenTitle idx={t("contact.idx")} title={t("contact.title")} />
    </div>
  );
}
