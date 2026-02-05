import React, { useState, useRef } from "react";
import "./App.css";
import Success from "./components/Success";

// GIF Imports
import flowerBear from "./flowerBear.gif";
import cryingBear from "./crying.gif";
import beggingBear from "./begging.gif";
import madBear from "./madBear.gif";
import heartBear from "./heart.gif"; 
import pointBear from "./point.gif"; 

const App = () => {
  const [opened, setOpened] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [noCount, setNoCount] = useState(0); 
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const iframeRef = useRef(null);

  const handleOpenMessage = () => {
    setOpened(true);
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      iframeRef.current.contentWindow.postMessage('{"event":"command","func":"unMute","args":""}', '*');
    }
  };

  const handleAccept = () => {
    setAccepted(true);
  };

  const handleReject = () => {
    setNoCount(noCount + 1);
    setYesButtonSize(prev => prev + 0.35); 
    
    const maxWidth = window.innerWidth > 500 ? 140 : 70; 
    const randomX = Math.floor(Math.random() * (maxWidth * 2)) - maxWidth;
    const randomY = Math.floor(Math.random() * 80) - 40; 
    setNoButtonPos({ x: randomX, y: randomY });
  };

  const rejectionGifs = [flowerBear, cryingBear, beggingBear, madBear, heartBear, pointBear];
  const rejectionTexts = ["No", "Are you sure?", "But we've been since Sep 2023! 😲", "I'm telling your mom! 🏃‍♂️", "Don't do this to me 💔", "Click the green one! 🫠✨"];

  return (
    <div className="App">
      <iframe 
        ref={iframeRef} 
        width="0" height="0" 
        src="https://www.youtube.com/embed/ZJ34geQLtUE?enablejsapi=1&autoplay=1&mute=1&start=24&loop=1&playlist=ZJ34geQLtUE" 
        allow="autoplay" 
        style={{ display: 'none', position: 'absolute' }}>
      </iframe>

      <div className="App-body">
        {!opened ? (
          <div className="pulse">
            <div className="bebe-tag">Established 25 Sep 2023</div>
            {/* Simple first page: No Photo here */}
            <h1 className="App-text">I have a question for you...</h1>
            <button className="App-button btn-yes" onClick={handleOpenMessage}>Open ❤️</button>
          </div>
        ) : !accepted ? (
          <div className="asking-container">
            <h1 className="App-text">Will you be my Valentine, Rohitas?</h1>
            <img src={rejectionGifs[Math.min(noCount, rejectionGifs.length - 1)]} alt="Mood Bear" className="App-gif" />
            <div className="button-group">
              <div className="yes-container">
                <button className="App-button btn-yes" style={{ transform: `scale(${yesButtonSize})` }} onClick={handleAccept}>Yes</button>
              </div>
              <button className="App-button btn-no" onClick={handleReject} onMouseEnter={handleReject} style={{ transform: `translate(${noButtonPos.x}px, ${noButtonPos.y}px)`, zIndex: 1000 }}>
                {rejectionTexts[Math.min(noCount, rejectionTexts.length - 1)]}
              </button>
            </div>
          </div>
        ) : (
          <Success />
        )}
      </div>
    </div>
  );
};

export default App;
