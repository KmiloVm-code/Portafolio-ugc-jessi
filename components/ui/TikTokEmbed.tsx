import React, { useState } from "react";

interface TikTokEmbedProps {
  videoId: string;
  username: string;
}

const playerParams = new URLSearchParams({
  autoplay: "0",
  loop: "1",
  timestamp: "1",
  play_button: "1",
  closed_caption: "0",
  full_screen: "1",
  rel: "0",
  native_context_menu: "1",
  progress_bar: "0",
});

const TikTokEmbed = ({ videoId, username }: TikTokEmbedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleLoad = () => {
    setIsLoaded(true);
  };
  const handleError = () => {
    console.error("Failed to load TikTok video.");
  };

  return (
    <iframe
      src={`https://www.tiktok.com/player/v1/${videoId}?${playerParams.toString()}`}
      title={`TikTok video by ${username}`}
      loading="lazy"
      sandbox="allow-scripts allow-same-origin allow-popups allow-presentation allow-popups-to-escape-sandbox"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      onLoad={handleLoad}
      onError={handleError}
      style={{
        border: "none",
        borderRadius: 30,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        transition: "opacity 0.3s ease-in-out",
        opacity: isLoaded ? 1 : 0,
        aspectRatio: "9/16", // Maintain a 9:16 aspect ratio
      }}
      allowFullScreen
      className="tiktok-embed"
      data-video-id={videoId}
      data-username={username}
    ></iframe>
  );
};

export default TikTokEmbed;
