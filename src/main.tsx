import "./styles/index.css";

import App from "@/routes";
import ReactDOM from "react-dom/client";
import { Toaster } from "./components/ui/ui/toaster";
import { TokenProvider } from "./utils/contexts/token";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TokenProvider>
    <App />
    <Toaster />
  </TokenProvider>
);
