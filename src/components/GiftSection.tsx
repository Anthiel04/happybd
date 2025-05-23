import React, { useState } from 'react';
import { Gift } from 'lucide-react';
import '../styles/GiftSection.css';

interface GiftItem {
  id: number;
  message: string;
  opened: boolean;
}

const GiftSection: React.FC = () => {
  const [gifts, setGifts] = useState<GiftItem[]>([
    { id: 1, message: "Wishing you love and laughter on your special day!", opened: false },
    { id: 2, message: "May this year bring you endless joy and prosperity!", opened: false },
    { id: 3, message: "Here's to another amazing year around the sun!", opened: false },
    { id: 4, message: "Sending you the biggest virtual hug on your birthday!", opened: false }
  ]);
  
  const openGift = (id: number) => {
    setGifts(gifts.map(gift => 
      gift.id === id ? { ...gift, opened: true } : gift
    ));
  };

  return (
    <section className="gift-section" id="gifts">
      <div className="container">
        <h2 className="section-title">Birthday Surprises</h2>
        <p className="section-description">Click on a gift to reveal a special message!</p>
        
        <div className="gifts-container">
          {gifts.map((gift) => (
            <div key={gift.id} className={`gift-box ${gift.opened ? 'opened' : ''}`}>
              {!gift.opened ? (
                <div className="gift-wrapper" onClick={() => openGift(gift.id)}>
                  <div className="gift-top"></div>
                  <div className="gift-body"></div>
                  <div className="gift-ribbon"></div>
                  <Gift className="gift-icon" size={32} />
                </div>
              ) : (
                <div className="gift-message">
                  <p>{gift.message}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GiftSection;