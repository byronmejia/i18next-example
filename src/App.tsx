import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Trans, useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt={t("home.logoAlt", "logo")} />
        <p>
          <Trans i18nKey="home.editSrcAndSaveToReload">
            Edit <code>{{ fileName: "src/App.tsx" }}</code> and save to reload.
          </Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Trans i18nKey="home.learnReact">Learn React</Trans>
        </a>
      </header>
    </div>
  );
}

export default App;
