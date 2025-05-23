import React, { useState } from "react";
import { Heart, Star, ThumbsUp } from "lucide-react";
import "../styles/MessageWall.css";

interface Message {
  id: number;
  text: string;
  author: string;
  likes: number;
  icon: "heart" | "star" | "thumbsUp";
}

const MessageWall: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Happy birthday! Wishing you all the happiness in the world.",
      author: "Sarah",
      likes: 12,
      icon: "heart",
    },
    {
      id: 2,
      text: "Another trip around the sun complete! Have an amazing day!",
      author: "Mike",
      likes: 8,
      icon: "star",
    },
    {
      id: 3,
      text: "May your special day be filled with memories and flowers.",
      author: "Emily",
      likes: 15,
      icon: "thumbsUp",
    },
  ]);

  const handleLike = (id: number) => {
    setMessages(
      messages.map((message) =>
        message.id === id ? { ...message, likes: message.likes + 1 } : message
      )
    );
  };

  const renderIcon = (icon: string) => {
    switch (icon) {
      case "heart":
        return <Heart size={16} fill="#FF9A8B" stroke="#FF9A8B" />;
      case "star":
        return <Star size={16} fill="#FFEEAD" stroke="#FFEEAD" />;
      case "thumbsUp":
        return <ThumbsUp size={16} fill="#A6D1E6" stroke="#A6D1E6" />;
      default:
        return null;
    }
  };

  return (
    <section className="message-wall min-w-96" id="wishes">
      <div className="container">
        <h2 className="section-title">Birthday Wishes</h2>
        <p className="section-description">
          Leave a special message for the birthday person!
        </p>

        <div className="messages">
          {messages.map((message) => (
            <div key={message.id} className="message-card">
              <div className="message-icon">{renderIcon(message.icon)}</div>
              <p className="message-text">{message.text}</p>
              <div className="message-footer">
                <span className="message-author">- {message.author}</span>
                <button
                  className="like-button"
                  onClick={() => handleLike(message.id)}
                >
                  <Heart size={14} /> {message.likes}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MessageWall;
