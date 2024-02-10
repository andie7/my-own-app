import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Weather city="New York" />

        <footer className="footer">
          This project was coded by {""}
          <a
            href="https://linktr.ee/andiekay90"
            target="_blank"
            rel="noreferrer"
          >
            Andreia Fernandes
          </a>{" "}
          {""}
          and is {""}
          <a
            href="https://github.com/andie7/my-own-app"
            target="_blank"
            rel="noreferrer"
          >
            open sourced on Github
          </a>
          {""} and {""}
          <a href="" target="_blank" rel="noreferrer">
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
