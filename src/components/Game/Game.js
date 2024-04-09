import React from "react";

import { sample, range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { WORDS } from "../../data";
import Banner from "../Banner";
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
  const [guessesMade, setGuessesMade] = React.useState(0);
  const [outcome, setOutcome] = React.useState(null);

  return (
    <>
      {outcome && (
        <Banner guessesMade={guessesMade} outcome={outcome} answer={answer} />
      )}
      <Guesses guesses={guesses} answer={answer} />
      <GuessInput
        submit={(newGuess) => {
          setGuesses(
            guesses.map((guess, index) =>
              guessesMade === index ? newGuess : guess
            )
          );

          const nextGuessesMade = guessesMade + 1;
          setGuessesMade(nextGuessesMade);

          if (newGuess === answer) {
            setOutcome("win");
          } else if (nextGuessesMade >= NUM_OF_GUESSES_ALLOWED) {
            setOutcome("lose");
          }
        }}
      />
    </>
  );
}

export default Game;
