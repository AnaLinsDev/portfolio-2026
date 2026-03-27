import { createContext } from "react";

export const ScreenStateContext = createContext<string | null>(null);

export const ScreenActionsContext = createContext<
  React.Dispatch<React.SetStateAction<string>> | null
>(null);