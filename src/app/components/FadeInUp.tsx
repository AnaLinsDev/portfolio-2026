import { useEffect, useState } from "react";
import { useScreenState } from "@/hooks/useScreenState";

type Props = {
  children: React.ReactNode;
  id: string;
};

export function FadeInUp({ children, id }: Props) {
  const active = useScreenState();
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (active === `#${id}`) {
      setHasAnimated(true);
    }
  }, [active, id]);

  return (
    <div
      style={{
        opacity: hasAnimated ? 1 : 0,
        transform: hasAnimated ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.6s ease-out",
      }}
    >
      {children}
    </div>
  );
}