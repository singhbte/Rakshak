import React from 'react';
import Lottie from 'lottie-react';
import rakhiAnimation from './assets/rakhi.json';
import aartiAnimation from './assets/aarti.json';
import tikaAnimation from './assets/tika.json';
import sweetAnimation from './assets/sweet.json';
import liftHand from './assets/lift_hand.json';
import './style.css';

const App = () => {
  const playMusic = () => {
    const audio = new Audio('/assets/bgmusic.mp3');
    audio.play();
  };

  return (
    <div className="container">
      <h1>Virtual Rakhi ❤️</h1>

      <div className="animation-box">
        <Lottie animationData={liftHand} loop={false} />
        <Lottie animationData={rakhiAnimation} loop={false} />
        <Lottie animationData={tikaAnimation} loop={false} />
        <Lottie animationData={sweetAnimation} loop={false} />
        <Lottie animationData={aartiAnimation} loop={false} />
      </div>

      <button className="rakhi-btn" onClick={playMusic}>Play Rakhi Music 🎵</button>
      <p>Click each part to experience full Rakhi ritual with love and tradition!</p>
    </div>
  );
};

export default App;
