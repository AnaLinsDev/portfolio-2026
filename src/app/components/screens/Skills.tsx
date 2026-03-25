import { useT } from "@/hooks/useT";

export default function Skills() {
  const { t } = useT();
  return (
    <div>
      <h1>{t("skills.title")}</h1>
    </div>
  );
}
