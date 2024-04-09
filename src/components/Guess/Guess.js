import React from "react";

import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ guess, answer }) {
  const diff = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((position) => (
        <span
          key={position}
          className={`cell ${diff ? diff[position].status : ""}`}
        >
          {guess ? guess[position] : undefined}
        </span>
      ))}
    </p>
  );
}

export default Guess;
