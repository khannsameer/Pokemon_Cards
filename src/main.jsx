import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import "flowbite/dist/flowbite.css"; // ✅ Flowbite styles
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
