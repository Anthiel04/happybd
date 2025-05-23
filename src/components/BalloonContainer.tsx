import React, { useEffect, useState } from 'react';
import Balloon from './Balloon';
import '../styles/BalloonContainer.css';

const BalloonContainer: React.FC = () => {
  const [balloons, setBalloons] = useState<{ id: number; color: string; left: string; delay: number }[]>([]);
  
  useEffect(() => {
    const colors = ['#FF9A8B', '#FFEEAD', '#A6D1E6', '#DDBDF1', '#FFD3B6'];
    const newBalloons = Array(10).fill(0).map((_, index) => ({
      id: index,
      color: colors[Math.floor(Math.random() * colors.length)],
      left: `${5 + Math.random() * 90}%`,
      delay: Math.random() * 5
    }));
    
    setBalloons(newBalloons);
  }, []);

  return (
    <div className="balloon-container">
      {balloons.map(balloon => (
        <Balloon 
          key={balloon.id}
          color={balloon.color}
          left={balloon.left}
          delay={balloon.delay}
        />
      ))}
    </div>
  );
};

export default BalloonContainer;