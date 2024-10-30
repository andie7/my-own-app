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
          Andreia Fernandes {""}
          and {""}
          <a
            href="https://tourmaline-lily-9c2c85.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
