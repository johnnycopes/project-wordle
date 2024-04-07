import React from "react";

function Guess({ id, guess }) {
  return (
    <p key={id} className="guess">
      {guess}
    </p>
  );
}

export default Guess;
