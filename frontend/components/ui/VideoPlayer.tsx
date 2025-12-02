import React from "react";
import { useVideoPlayer } from "../../hooks";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  ariaLabel?: string;
  className?: string;
  containerClassName?: string;
}

export function VideoPlayer({
  src,
  poster,
  ariaLabel,
  className = "w-auto h-[500px] object-cover aspect-[4/5] rounded-2xl shadow-xl cursor-pointer",
}: VideoPlayerProps) {
  const { videoRef, togglePlay, isPlaying } = useVideoPlayer();

  return (
    <div className="relative group">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        aria-label={ariaLabel}
        preload="auto"
        className={className}
        onClick={togglePlay}
      />

      {/* Play Button Overlay - only visible when not playing */}
      {!isPlaying && (
        <div
          className="play-overlay absolute inset-0 flex items-center justify-center cursor-pointer hover:opacity-75 transition-opacity"
          onClick={togglePlay}
        >
          <div className="w-16 h-16 bg-honey-gold/90 rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-8 h-8 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}

      {/* Pause Button Overlay - only visible when playing */}
      {isPlaying && (
        <div
          className="pause-overlay absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 hover:opacity-75 transition-opacity"
          onClick={togglePlay}
        >
          <div className="w-16 h-16 bg-honey-gold/90 rounded-full flex items-center justify-center shadow-lg">
            <svg
              className="w-8 h-8 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
