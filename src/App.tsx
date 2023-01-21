import { useEffect, useState } from "react";
import { alphabet } from "./utils";
import Letter from "./components/Letter";

import "./App.css";

function App() {
  const [currentWord, setCurrentWord] = useState("sdf");

  useEffect(() => {
    const changeLetter = (e: KeyboardEvent) => {
      if (alphabet.includes(e.key)) setCurrentWord((prev) => prev + e.key);
    };

    addEventListener("keydown", changeLetter);

    return () => {
      removeEventListener("keydown", changeLetter);
    };
  }, []);

  return (
    <>
      <div>{currentWord}</div>
    </>
  );
}

export default App;
