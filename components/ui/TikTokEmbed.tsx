import React from "react";
import { useTikTokEmbed } from "@/hooks/useTikTokEmbed";
import { TikTokPlaceholder } from "./TikTokPlaceholder";
import type { TikTokEmbedProps } from "@/types";

/**
 * Componente para embedizar videos de TikTok con lazy loading y estados de carga
 *
 * @param props - Propiedades del componente
 * @returns Elemento JSX del embed de TikTok
 *
 * @example
 * ```tsx
 * <TikTokEmbed
 *   videoId="7234567890123456789"
 *   username="example_user"
 * />
 * ```
 */
const TikTokEmbed: React.FC<TikTokEmbedProps> = ({ videoId, username }) => {
  const {
    elementRef,
    isInView,
    isLoaded,
    showPlaceholder,
    placeholderText,
    iframeProps,
  } = useTikTokEmbed(videoId, username);

  return (
    <div ref={elementRef} className="relative w-full h-full">
      {/* Pantalla de carga o placeholder */}
      {showPlaceholder && <TikTokPlaceholder message={placeholderText} />}

      {/* Solo renderizar el iframe cuando esté en vista */}
      {isInView && (
        <iframe
          {...iframeProps}
          style={{
            border: "none",
            borderRadius: 30,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            transition: "opacity 0.3s ease-in-out",
            opacity: isLoaded ? 1 : 0,
            aspectRatio: "9/16",
          }}
        />
      )}
    </div>
  );
};

export default TikTokEmbed;
