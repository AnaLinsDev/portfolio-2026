import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "../styles/index.css";
import "../i18n";
import App from "./App";
import { ScreenProvider } from "@/providers/ScreenProvider";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <ScreenProvider>
      <App />
    </ScreenProvider>
  </StrictMode>,
);
