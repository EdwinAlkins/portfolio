import React from "react";
import logo from "./logo.svg";
import "./App.css";

import ButtonSwipe from "./components/button/swipe";
import GameOfLifeView from "./components/background/gameoflife";

function App() {
  const width = 100;
  const height = 100;
  const cellInit = [
    { x: 1, y: 1 },
    { x: 2, y: 1 },
    { x: 3, y: 1 },
    { x: 0, y: 2 },
    { x: 2, y: 2 },
    { x: 4, y: 2 },
    { x: 1, y: 3 },
    { x: 2, y: 3 },
    { x: 3, y: 3 },
  ];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonSwipe text="Hello World" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <GameOfLifeView width={10} height={10} cellInit={cellInit} zoom={10} speed={50} />
      </header>
    </div>
  );
}

export default App;
