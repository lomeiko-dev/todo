import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { BrowserRouter } from "react-router";
import { StoreProvider } from "app/providers/store";
import "app/styles/index.css";
import { AuthAuthProvider } from "app/providers/auth";

createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <BrowserRouter>
      <AuthAuthProvider>
        <App />
      </AuthAuthProvider>
    </BrowserRouter>
  </StoreProvider>
);
