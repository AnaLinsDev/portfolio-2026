import { FadeInUp } from "./FadeInUp";

type Props = {
  children: React.ReactNode;
  id: string
};

export default function ScreenCard({ children, id }: Props) {
  return (
    <FadeInUp id={id}>
      <div className="section">{children}</div>
    </FadeInUp>
  );
}
