import React from 'react';
import '../styles/Balloon.css';

interface BalloonProps {
  color: string;
  left: string;
  delay: number;
}

const Balloon: React.FC<BalloonProps> = ({ color, left, delay }) => {
  return (
    <div 
      className="balloon"
      style={{
        backgroundColor: color,
        left,
        animationDelay: `${delay}s`
      }}
    >
      <div className="balloon-string"></div>
    </div>
  );
};

export default Balloon;