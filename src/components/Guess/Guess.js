import React from "react";

function Guess({ id, guess }) {
  return (
    <p key={id} className="guess">
      {guess.split("").map((letter) => (
        <span className="cell">{letter}</span>
      ))}
    </p>
  );
}

export default Guess;
