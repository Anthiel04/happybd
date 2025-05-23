import React, { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import "../styles/Header.css";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <div className="logo">
          <Heart
            className="heart-icon"
            size={28}
            fill="#FF9A8B"
            stroke="#FF9A8B"
          />
          <span>Birthday Wishes</span>
        </div>
        <nav>
          <ul>
            <li>
              <a href="#wishes">Wishes</a>
            </li>
            <li>
              <a href="#gallery">Memories</a>
            </li>
            <li>
              <a href="#gifts">Gifts</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
