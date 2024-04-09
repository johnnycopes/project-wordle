import React from "react";
import Guess from "../Guess/Guess";

function Guesses({ guesses, answer }) {
  return (
    <div className="guess-results">
      {guesses.map((guess, index) => (
        <Guess key={index} guess={guess} answer={answer} />
      ))}
    </div>
  );
}

export default Guesses;
