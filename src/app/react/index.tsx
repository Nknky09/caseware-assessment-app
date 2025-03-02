import ReactDOM from "react-dom/client";
import { App } from "./App";
import React from "react";

const container = document.getElementById("react-root");
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(<App />);
}
