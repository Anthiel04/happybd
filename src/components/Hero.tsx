import React, { useState, useEffect } from "react";
import { Gift, Cake, Music } from "lucide-react";
import "../styles/Hero.css";

const Hero: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <section className={`hero ${visible ? "visible" : ""}`}>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Happy Birthday!</h1>
          <p className="hero-subtitle">
            Wishing you a day filled with happiness and a year filled with joy.
          </p>
          <div className="hero-icons">
            <div className="hero-icon">
              <Cake size={32} />
              <span>Make a Wish</span>
            </div>
            <div className="hero-icon">
              <Gift size={32} />
              <span>Open Gifts</span>
            </div>
            <div className="hero-icon">
              <Music size={32} />
              <span>Play Music</span>
            </div>
          </div>
          <button className="hero-cta">
            <a href="#cakesect" style={{ all: "unset" }}>
              Celebrate Now!
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
