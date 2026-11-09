import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/700.css";
import "./index.css";
import App from "./App";

const container = document.getElementById("root");
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// In production the HTML is prerendered (scripts/prerender.mjs), so hydrate it.
if (container.firstElementChild) hydrateRoot(container, app);
else createRoot(container).render(app);
