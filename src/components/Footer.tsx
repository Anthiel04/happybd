import React from 'react';
import { Heart } from 'lucide-react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p className="footer-message">
            Made with <Heart className="heart-icon" size={16} fill="#FF9A8B" /> for your special day
          </p>
          <p className="copyright">© {new Date().getFullYear()} Birthday Wishes</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;