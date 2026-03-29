type Props = {
  children: React.ReactNode;
};

export default function CardApp({ children }: Props) {
  return <div className="card-app">{children}</div>;
}
