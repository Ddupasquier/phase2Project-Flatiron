import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
// hash/browserrouter is provider component
import "./index.css";
import App from "./Components/App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
