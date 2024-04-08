import React from "react";

import { sample, range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import Guesses from "../Guesses";
import GuessInput from "../GuessInput";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState(
    range(NUM_OF_GUESSES_ALLOWED).map(() => "")
  );
  const [numberGuess, setNumberGuess] = React.useState(0);

  return (
    <>
      <Guesses guesses={guesses} />
      <GuessInput
        submit={(newGuess) => {
          setGuesses(
            guesses.map((guess, index) =>
              numberGuess === index ? newGuess : guess
            )
          );
          setNumberGuess(numberGuess + 1);
        }}
      />
    </>
  );
}

export default Game;
