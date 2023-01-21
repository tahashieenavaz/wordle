import { motion } from "framer-motion";
import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Board() {
  const { guesses } = useContext(AppContext);

  return (
    <section id="board">
      {guesses.map((guess: string, i: number) => {
        return (
          <div className="row">
            {guess.map((letter: string, j: number) => {
              return (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    rotateX: 360,
                    background: letter ? "green" : "",
                  }}
                  key={`${i} + ${j} + ${letter ? "y" : "n"}`}
                  style={{ background: letter ? "#18A558" : "" }}
                  className="letter"
                >
                  {letter}
                </motion.div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
}
