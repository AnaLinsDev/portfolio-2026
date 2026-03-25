import { useT } from "@/hooks/useT";
import AppButton from "../AppButton";

export default function Home() {
  const { t } = useT();
  return (
    <div>
      <h1>
        {t("home.idx")}. {t("home.title")}
      </h1>

      <div>
        <span>Hi, my name is</span>

        <span>Alex Johnson</span>

        <span>Fullstack Developer</span>

        <span>
          I build exceptional digital experiences that live on the web.
          Specializing in creating robust, scalable applications with modern
          technologies and best practices.
        </span>
      </div>

      <div className="home-buttons">
        <AppButton text="View Projects" classStyle="highlight-class" />
        <AppButton text="Contact Me" classStyle="dark-class" />
      </div>
    </div>
  );
}
