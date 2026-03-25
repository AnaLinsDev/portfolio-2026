import { useT } from "@/hooks/useT";

export default function Experience() {
  const { t } = useT();
  return (
    <div>
      <h1>{t("experience.title")}</h1>
    </div>
  );
}
