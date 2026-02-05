import React, { useEffect, useState } from "react";

const Success = () => {
  const [daysSince, setDaysSince] = useState(0);

  useEffect(() => {
    // Calculate days since Sep 25, 2023
    const startDate = new Date("2023-09-25");
    const today = new Date();
    const timeDiff = Math.abs(today - startDate);
    const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    setDaysSince(diffDays);

    // Trigger confetti using the window object (no import needed)
    if (window.confetti) {
      window.confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, []);

  return (
    <div className="success-container">
      <img 
        src="https://media.tenor.com/gUv1Ou87D8MAAAAi/milk-and-mocha.gif" 
        alt="Success Kiss" 
        className="App-gif" 
      />
      <h1 className="App-text">Yay! See you on Valentine's Day, Anant! ❤️</h1>
      
      <div className="days-counter">
        <span className="days-count-number">{daysSince}</span>
        <p>Days since Sep 25, 2023</p>
      </div>
    </div>
  );
};

export default Success;
