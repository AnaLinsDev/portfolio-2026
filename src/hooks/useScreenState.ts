import { useContext } from "react";
import { ScreenStateContext } from "../providers/ScreenContext";

export const useScreenState = () => {
  const context = useContext(ScreenStateContext);

  if (!context) {
    throw new Error("useScreenState must be used within ScreenProvider");
  }

  return context;
};