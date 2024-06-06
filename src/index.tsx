import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const rootEl = document.getElementById("root");

if (!rootEl) throw Error("Root container is missing");

const root = ReactDOM.createRoot(rootEl);

root.render(<App />);
