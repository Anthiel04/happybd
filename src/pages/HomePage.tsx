import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import BirthdayCake from '../components/BirthdayCake';
import BalloonContainer from '../components/BalloonContainer';
import MessageWall from '../components/MessageWall';
import PhotoGallery from '../components/PhotoGallery';
import GiftSection from '../components/GiftSection';
import Footer from '../components/Footer';
import Confetti from '../components/Confetti';
import MusicPlayer from '../components/MusicPlayer';
import '../styles/HomePage.css';

const HomePage: React.FC = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  
  useEffect(() => {
    // Trigger confetti after a short delay
    const timer = setTimeout(() => {
      setShowConfetti(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="home-page">
      {showConfetti && <Confetti />}
      <Header />
      <main>
        <Hero />
        <BalloonContainer />
        <BirthdayCake />
        <MessageWall />
        <PhotoGallery />
        <GiftSection />
        <MusicPlayer />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;