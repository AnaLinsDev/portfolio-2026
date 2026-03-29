type Props = {
  idx: string;
  title: string;
};

export default function ScreenTitle({ idx, title }: Props) {
  return (
    <div className="screen-title">
      <h1>
        <span className="highlight-default">{idx}.</span>
        <span className="highlight-text">{title}</span>
        <span className="line-title" />
      </h1>
    </div>
  );
}
