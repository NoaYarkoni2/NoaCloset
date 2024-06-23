import React from "react";
import "./Hero.css";

import fashionImg from "../../assets/fashionImg.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARIVALS ONLY</h2>
        <p>collections</p>
        <p>for you</p>
        <div className="hero-latest-btn">
          <div>Latest collection</div>
        </div>
      </div>

      <div className="hero-right">
        <img src={fashionImg} alt="" />
      </div>
    </div>
  );
}

export default Hero;
