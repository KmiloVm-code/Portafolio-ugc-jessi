"use client";

import React, { useState, useEffect, useRef } from "react";

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
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Solo cargar una vez
        }
      },
      {
        threshold: 0.1, // Se activa cuando el 10% del elemento es visible
        rootMargin: "200px", // Comenzar a cargar 200px antes de que sea visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };
  const handleError = () => {
    console.error("Failed to load TikTok video.");
  };
  return (
    <div ref={containerRef} className="relative w-full h-full">
      {/* Pantalla de carga o placeholder */}
      {(!isInView || !isLoaded) && (
        <div className="inset-0 flex items-center justify-center h-full p-2 bg-gray-100 dark:bg-gray-800 rounded-[30px] z-10">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
            <p className="text-sm text-balance text-center text-gray-600 dark:text-gray-400">
              {!isInView
                ? "Preparando video..."
                : "Cargando video de TikTok..."}
            </p>
          </div>
        </div>
      )}

      {/* Solo renderizar el iframe cuando esté en vista */}
      {isInView && (
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
      )}
    </div>
  );
};

export default TikTokEmbed;
