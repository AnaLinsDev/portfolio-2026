import { useScreenActions } from "@/hooks/useScreenActions ";
import Button from "@mui/material/Button";

type Props = {
  text: string;
  href: string;
  classStyle: "highlight-class" | "dark-class";
};

export default function AppButton({ text, classStyle, href }: Props) {
  const setActive = useScreenActions();
  
  const goToPage = (href: string) => {
    const element = document.querySelector(href);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", href);
      setActive(href);
    }
  };

  return (
    <Button
      className={classStyle}
      sx={{ textTransform: "none" }}
      onClick={() => goToPage(href)}
    >
      {text}
    </Button>
  );
}
