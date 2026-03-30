import { useT } from "@/hooks/useT";
import ScreenTitle from "../components/ScreenTitle";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const { t } = useT();

  const contacts = [
    {
      href: "https://github.com/teste",
      icon: <FaGithub />,
      label: "GitHub profile",
    },
    {
      href: "https://www.linkedin.com/in/teste/",
      icon: <FaLinkedin />,
      label: "LinkedIn profile",
    },
    {
      href: "mailto:teste@gmail.com",
      icon: <FaEnvelope />,
      label: "Send email",
    },
  ];

  return (
    <div className="contact_container">
      <h2 className="contact_title highlight-font">
        {t("contact.idx")}. {t("contact.page.title")}
      </h2>

      <p className="contact_description">{t("contact.page.description")}</p>

      <ul className="contact_list">
        {contacts.map((contact, index) => (
          <li key={index} className="contact_item">
            <a
              href={contact.href}
              target={contact.href.startsWith("http") ? "_blank" : undefined}
              rel={
                contact.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={contact.label}
              title={contact.label}
              className="contact_link"
            >
              {contact.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
