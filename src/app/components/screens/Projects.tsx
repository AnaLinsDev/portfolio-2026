import { useT } from "@/hooks/useT";

export default function Projects() {
  const { t } = useT();
  return (
    <div>
      <h1>{t("projects.title")}</h1>
    </div>
  );
}
