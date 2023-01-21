import { AppContext } from "./contexts/AppContext";
import ContextInterface from "./interfaces/ContextInterface";

import Board from "./components/Board";
import Letter from "./components/Letter";
import Keyboard from "./components/Keyboard";

import { useState } from "react";

import "./App.css";

function App() {
  const [currentWord, setCurrentWord] = useState("");
  const [guesses, setGuesses] = useState([]);

  const store: ContextInterface = {
    currentWord,
    guesses,
    setCurrentWord,
    setGuesses,
  };

  return (
    <AppContext.Provider value={store}>
      <Board />
      <Letter letter="K" />
      <Keyboard />
    </AppContext.Provider>
  );
}

export default App;
