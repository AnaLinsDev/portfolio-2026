import { useT } from "@/hooks/useT";

export default function AboutMe() {
  const { t } = useT();
  return (
    <div>
      <h1>{t("aboutMe.title")}</h1>
    </div>
  );
}
