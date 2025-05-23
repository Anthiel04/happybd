import React, { useState, useRef } from "react";
import { Music, Play, Pause, Volume2, VolumeX } from "lucide-react";
import "../styles/MusicPlayer.css";

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        autoPlay
        src="assets/happy-birthday-254480.mp3"
        loop
      />

      <button
        className={`player-button ${isPlaying ? "active" : ""}`}
        onClick={togglePlay}
      >
        <Music size={20} className="icon-music" />
        {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        <span>{isPlaying ? "Pause Music" : "Play Birthday Music"}</span>
      </button>

      {isPlaying && (
        <button className="mute-button" onClick={toggleMute}>
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      )}
    </div>
  );
};

export default MusicPlayer;
