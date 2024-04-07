import React from "react";
import Guess from "../Guess/Guess";

function Guesses({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ id, guess }) => (
        <Guess key={id} guess={guess} />
      ))}
    </div>
  );
}

export default Guesses;
