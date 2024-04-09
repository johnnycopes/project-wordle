import React from "react";

function Banner({ outcome, guessesMade, answer }) {
  const win = (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {guessesMade} {guessesMade === 1 ? "guess" : "guesses"}
        </strong>
        .
      </p>
    </div>
  );
  const lose = (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );

  return outcome === "win" ? win : lose;
}

export default Banner;
