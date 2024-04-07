import React from "react";

function Guess({ id, guess }) {
  return (
    <p key={id} className="guess">
      {guess.map((letter, index) => (
        <span key={index} className="cell">
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
