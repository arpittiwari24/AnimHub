import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProviders.jsx";
import PopupContextProvider from "./context/PopupContextProvider.jsx";
import Providers from "./context/Providers.jsx";
// import axios from "axios";
import { axiosDefaults } from "./api.js";

const axios = axiosDefaults


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Providers children={<App />} />
    </BrowserRouter>
  </React.StrictMode>
);
