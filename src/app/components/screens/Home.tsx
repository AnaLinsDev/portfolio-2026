import { useT } from "@/hooks/useT";

export default function Home() {
  const { t } = useT();
  return (
    <div>
      <h1>{t("home.title")}</h1>
    </div>
  );
}
