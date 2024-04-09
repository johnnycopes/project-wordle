import React from "react";

import { checkGuess } from "../../game-helpers";
import { range } from "../../utils";

function Guess({ guess, answer }) {
  const diff = checkGuess(guess, answer);

  return (
    <p className="guess">
      {range(5).map((position) => (
        <Cell
          key={position}
          letter={diff ? diff[position]?.letter : undefined}
          status={diff ? diff[position]?.status : ""}
        />
      ))}
    </p>
  );
}

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{letter ? letter : undefined}</span>;
}

export default Guess;
