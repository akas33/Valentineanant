import React, { useState } from "react";
import "./App.css";

export default function ValentinePage() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No", "Are you sure, Anant?", "Really sure?", "Think again!",
      "Last chance!", "Surely not?", "You might regret this!",
      "Give it another thought!", "Are you absolutely sure?",
      "This could be a mistake!", "Have a heart!", "Don't be so cold!",
      "Change of heart?", "Wouldn't you reconsider?", "Is that your final answer?",
      "You're breaking my heart ;(",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUv1Ou87D8MAAAAi/milk-and-mocha.gif" alt="bear-kissing" />
          <div className="text-container">Ok Yay!!!</div>
          {/* Updated Song: Aankhon Se Batana - Autoplay starts at 24s */}
          <iframe
            width="0"
            height="0"
            src="https://www.youtube.com/embed/ZJ34geQLtUE?autoplay=1&start=24"
            frameBorder="0"
            allow="autoplay"
          ></iframe>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            style={{ width: "400px", height: "240px" }}
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5pwz46268f.gif"
            alt="bear-with-roses"
          />
          <h1 className="text-container">Will you be my Valentine, Anant?</h1>
          <p className="established-tag">Established 25 Sep 2023</p>
          <div>
            <button
              className={"yes-button"}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="no-button">
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
