type Props = {
  children: React.ReactNode;
};

export default function ScreenCard({ children }: Props) {
  return <div className="section">{children}</div>;
}
