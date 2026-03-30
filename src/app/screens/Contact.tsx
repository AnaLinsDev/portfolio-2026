import { useT } from "@/hooks/useT";
import { email, contacts } from "@/data";
import IconContact from "../components/IconContact";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export default function Contact() {
  const { t } = useT();

  function handleCopy() {
    navigator.clipboard.writeText(email);
  }

  return (
    <div className="contact_container">
      <h2 className="contact_title highlight-font">
        {t("contact.idx")}. {t("contact.page.title")}
      </h2>

      <p className="contact_description">{t("contact.page.description")}</p>

      <ul className="contact_list">
        {contacts.map((contact, index) => (
          <li key={index} className="contact_item">
            <IconContact
              href={contact.href}
              icon={contact.icon}
              label={contact.label}
            />
          </li>
        ))}
      </ul>

      <div className="contact_email_container">
        <span>{email}</span>
        <button onClick={handleCopy} className="contact_copy">
          <ContentCopyIcon fontSize="small" />
        </button>
      </div>
    </div>
  );
}
