type Props = {
  children: React.ReactNode;
  padding?: string;
};

export default function CardApp({ children, padding = "p-0" }: Props) {
  return <div className={"card-app " + padding}>{children}</div>;
}
