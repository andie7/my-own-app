import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather city="New York" />

        <footer className="footer">
          This project was coded by Andreia Fernandes and is
          <a
            href="https://github.com/andie7/my-own-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
