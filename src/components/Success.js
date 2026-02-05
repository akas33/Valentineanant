import React, { useEffect, useState } from "react";
import ourPhoto from "../our-photo.jpg"; // Moved from App.js to here

const Success = () => {
  const [daysSince, setDaysSince] = useState(0);

  useEffect(() => {
    const startDate = new Date("2023-09-25");
    const today = new Date();
    const timeDiff = Math.abs(today - startDate);
    const diffDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    setDaysSince(diffDays);
  }, []);

  return (
    <div className="success-container">
      {/* Your photo now appears after clicking Yes */}
      <img src={ourPhoto} alt="Us" className="App-photo" />
      
      <h1 className="App-text">Yay! See you on Valentine's Day, Babu... ❤️</h1>
      
      <div className="days-counter">
        <span className="days-count-number">{daysSince}</span>
        <p>Days since Sep 25, 2023</p>
      </div>
      
      <img 
        src="https://media.tenor.com/gUv1Ou87D8MAAAAi/milk-and-mocha.gif" 
        alt="Success Kiss" 
        className="App-gif" 
        style={{ marginTop: '20px' }}
      />
    </div>
  );
};

export default Success;
