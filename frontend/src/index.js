import React from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
