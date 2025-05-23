import React, { useEffect, useRef } from 'react';
import '../styles/Confetti.css';

const Confetti: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const colors = ['#FF9A8B', '#FFEEAD', '#A6D1E6', '#DDBDF1', '#FFD3B6'];
    const shapes = ['circle', 'square', 'triangle'];
    
    // Create confetti pieces
    const pieces: {
      x: number;
      y: number;
      size: number;
      color: string;
      shape: string;
      velocity: { x: number; y: number };
      rotation: number;
      rotationSpeed: number;
    }[] = [];
    
    // Generate 100 confetti pieces
    for (let i = 0; i < 100; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * -1 - 100,
        size: Math.random() * 10 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        velocity: {
          x: (Math.random() - 0.5) * 3,
          y: Math.random() * 3 + 2
        },
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2
      });
    }
    
    const drawConfetti = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      pieces.forEach(piece => {
        ctx.save();
        ctx.translate(piece.x, piece.y);
        ctx.rotate((piece.rotation * Math.PI) / 180);
        
        ctx.fillStyle = piece.color;
        
        if (piece.shape === 'circle') {
          ctx.beginPath();
          ctx.arc(0, 0, piece.size / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (piece.shape === 'square') {
          ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size);
        } else if (piece.shape === 'triangle') {
          ctx.beginPath();
          ctx.moveTo(0, -piece.size / 2);
          ctx.lineTo(-piece.size / 2, piece.size / 2);
          ctx.lineTo(piece.size / 2, piece.size / 2);
          ctx.closePath();
          ctx.fill();
        }
        
        ctx.restore();
        
        // Update position
        piece.x += piece.velocity.x;
        piece.y += piece.velocity.y;
        piece.rotation += piece.rotationSpeed;
        
        // Reset if out of bounds
        if (piece.y > canvas.height) {
          piece.y = -piece.size;
          piece.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(drawConfetti);
    };
    
    const animation = requestAnimationFrame(drawConfetti);
    
    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animation);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="confetti-canvas"></canvas>;
};

export default Confetti;