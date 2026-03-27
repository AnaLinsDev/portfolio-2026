import { useContext } from "react";
import { ScreenActionsContext } from "../providers/ScreenContext";

export const useScreenActions = () => {
  const context = useContext(ScreenActionsContext);

  if (!context) {
    throw new Error("useScreenActions must be used within ScreenProvider");
  }

  return context;
};