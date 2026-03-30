import { SvgIconComponent } from "@mui/icons-material";

type Props = {
  href: string;
  icon: SvgIconComponent;
  label: string;
};

export default function IconContact({ href, icon: Icon, label }: Props) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={label}
      title={label}
      className="contact_link"
    >
      <Icon />
    </a>
  );
}