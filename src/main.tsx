import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { registerAppServiceWorker } from "./pwa/swRegistration";
import { initFCMForegroundHandler } from "./services/fcm";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

registerAppServiceWorker();
initFCMForegroundHandler();

