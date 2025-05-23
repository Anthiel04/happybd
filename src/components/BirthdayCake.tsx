import React, { useState } from "react";
import "../styles/BirthdayCake.css";

const BirthdayCake: React.FC = () => {
  const [candlesLit, setCandlesLit] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  const handleBlow = () => {
    if (candlesLit) {
      setCandlesLit(false);
      setTimeout(() => {
        setShowMessage(true);
      }, 500);
    } else {
      setCandlesLit(true);
      setShowMessage(false);
    }
  };

  return (
    <section id="cakesect" className="cake-section h-[100vh]">
      <div className="container">
        <h2 className="section-title">Make a Birthday Wish</h2>
        <p className="section-description">
          Blow out the candles and make your wish come true!
        </p>

        <div className="cake-container">
          <div className="cake">
            <div className="cake-top"></div>
            <div className="cake-middle"></div>
            <div className="cake-bottom"></div>

            {Array(5)
              .fill(0)
              .map((_, index) => (
                <div key={index} className={`candle candle-${index + 1}`}>
                  <div className="wick">
                    {candlesLit && (
                      <div>
                        <div className="flame"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>

          <button className="blow-button" onClick={handleBlow}>
            {candlesLit ? "Blow Candles" : "Light Candles Again"}
          </button>

          {showMessage && (
            <div className="wish-message fadeIn">
              <h3>Your wish has been made!</h3>
              <p>May all your birthday wishes come true.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BirthdayCake;
