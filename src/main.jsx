import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import UserContextProvider from "./context/userContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </UserContextProvider>
);
