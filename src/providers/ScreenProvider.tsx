import { useState, ReactNode } from "react";
import { ScreenStateContext, ScreenActionsContext } from "./ScreenContext";

type Props = {
  children: ReactNode;
};

export const ScreenProvider = ({ children }: Props) => {
  const [active, setActive] = useState<string>("home");

  return (
    <ScreenStateContext.Provider value={active}>
      <ScreenActionsContext.Provider value={setActive}>
        {children}
      </ScreenActionsContext.Provider>
    </ScreenStateContext.Provider>
  );
};