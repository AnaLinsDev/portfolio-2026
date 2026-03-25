import Button from "@mui/material/Button";

type Props = {
  text: string;
  classStyle: "highlight-class" | "dark-class";
};

export default function AppButton({ text, classStyle }: Props) {
  return (
    <Button className={classStyle} sx={{ textTransform: "none" }}>
      {text}
    </Button>
  );
}
