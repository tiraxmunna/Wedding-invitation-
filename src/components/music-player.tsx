"use client";

import React, { useState, useRef, useEffect } from "react";
import { weddingConfig } from "@/config/wedding";
import { Volume2, VolumeX, Music } from "lucide-react";

export default function MusicPlayer() {
  const music = weddingConfig.music;
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (!music || !music.enabled || !music.audioSrc) return null;

  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        })
        .catch((err) => {
          console.warn("Audio playback couldn't start automatically:", err);
          setIsPlaying(false);
        });
    }
  };

  return (
    <aside
      aria-label="Ambient Background Music"
      className="fixed bottom-5 right-5 z-40 print:hidden"
    >
      <audio
        ref={audioRef}
        src={music.audioSrc}
        loop
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
      />

      <div className="flex items-center gap-2 group">
        {/* Track Title Tooltip/Pill on Hover */}
        <div
          className={`bg-[#FFFEFA] text-[#202A24] border border-[#DCD8CD] px-3 py-1.5 rounded-full text-xs shadow-md transition-all duration-300 pointer-events-none hidden sm:flex items-center gap-2 ${
            isPlaying ? "opacity-90 translate-x-0" : "opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
          }`}
        >
          <Music className={`w-3.5 h-3.5 text-[#A88753] ${isPlaying ? "animate-bounce" : ""}`} />
          <span className="font-serif italic text-xs max-w-[160px] truncate">
            {music.trackTitle || "Wedding Melody"}
          </span>
          {isPlaying && (
            <span className="flex items-center gap-0.5 ml-1">
              <span className="w-0.5 h-2 bg-[#A88753] animate-pulse" />
              <span className="w-0.5 h-3.5 bg-[#A88753] animate-pulse delay-75" />
              <span className="w-0.5 h-2.5 bg-[#A88753] animate-pulse delay-150" />
            </span>
          )}
        </div>

        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={isPlaying ? "Mute ambient music" : "Play ambient music"}
          className={`relative p-3 rounded-full border shadow-md transition-all duration-300 focus:ring-2 focus:ring-[#A88753] ${
            isPlaying
              ? "bg-[#202A24] text-[#FFFEFA] border-[#A88753] scale-105"
              : "bg-[#FFFEFA] text-[#202A24] border-[#DCD8CD] hover:border-[#A88753] hover:text-[#A88753]"
          }`}
          title={isPlaying ? "Mute music" : "Play ambient music"}
        >
          {isPlaying ? (
            <Volume2 className="w-4 h-4 text-[#A88753]" />
          ) : (
            <VolumeX className="w-4 h-4 text-[#737F68]" />
          )}
        </button>
      </div>
    </aside>
  );
}
