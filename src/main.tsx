import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import { ProductList } from "./pages/ProductList";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

