import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

type Props = {
  children: React.ReactNode;
  padding?: string;
  isExperience?: boolean;
};

export default function CardApp({
  children,
  padding = "p-0",
  isExperience = false,
}: Props) {
  return (
    <div className={isExperience ? "flex group" : "block"} >
      {isExperience && (
        <>
          <BusinessCenterIcon
          className="icon-experience"
            style={{ marginRight: "-10pt", marginTop: "-5pt" }}
          />
          <span className="line-experience" />
        </>
      )}

      <div className={"card-app " + padding} >{children}</div>
    </div>
  );
}
