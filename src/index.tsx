import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import enTranslations from "./locales/en-US/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: enTranslations,
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
