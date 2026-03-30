import { useT } from "@/hooks/useT";
import AppButton from "../components/AppButton";

export default function Home() {
  const { t } = useT();

  return (
    <div className="hero">
      <div className="hero_intro">{t("home.screen.intro")}</div>

      <div className="hero_name">{t("home.screen.name")}</div>

      <div className="hero_title">{t("home.screen.title")}</div>

      {/* Description Section */}
      <div className="hero_description">
        {t("home.screen.description.line01")} <br />
        <br />
        {t("home.screen.description.line02")}
      </div>

      <div className="home_container_buttons">
        {/* Buttons Section */}
        <div className="home_buttons">
          <AppButton
            text={t("home.screen.button")}
            classStyle="highlight-class"
            href="#projects"
          />
        </div>
      </div>
    </div>
  );
}
