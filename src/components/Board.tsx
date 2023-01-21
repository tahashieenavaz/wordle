import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Board() {
  const { guesses } = useContext(AppContext);
  return (
    <>
      {guesses.map((guess: string) => {
        return <div>{guess}</div>;
      })}
    </>
  );
}
