import React from "react";

import { range } from "../../utils";

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((position) => (
        <span key={position} className="cell">
          {guess[position]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
