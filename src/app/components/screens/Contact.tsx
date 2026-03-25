import { useT } from "@/hooks/useT";

export default function Contact() {
  const { t } = useT();
  return (
    <div>
      <h1>{t("contact.title")}</h1>
    </div>
  );
}
