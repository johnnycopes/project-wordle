import React from "react";

function Banner({ outcome }) {
  const win = (
    <div class="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>3 guesses</strong>.
      </p>
    </div>
  );
  const lose = (
    <div class="sad banner">
      <p>
        Sorry, the correct answer is <strong>LEARN</strong>.
      </p>
    </div>
  );

  return outcome === "win" ? win : lose;
}

export default Banner;
