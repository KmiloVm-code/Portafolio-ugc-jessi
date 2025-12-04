import { useMemo } from "react";
import type { TikTokPlayerConfig, UseTikTokPlayerResult } from "@/types";

/**
 * Hook personalizado para generar URL y propiedades del reproductor de TikTok
 *
 * @param videoId - ID único del video de TikTok
 * @param config - Configuración personalizada del reproductor (opcional)
 * @returns Objeto con URL del reproductor y propiedades del iframe
 *
 * @example
 * ```tsx
 * const { playerUrl, iframeProps } = useTikTokPlayer("video123", {
 *   autoplay: "1",
 *   loop: "0"
 * });
 * ```
 */
export const useTikTokPlayer = (
  videoId: string,
  config: Partial<TikTokPlayerConfig> = {}
): UseTikTokPlayerResult => {
  const playerUrl = useMemo((): string => {
    // Configuración por defecto
    const defaultConfig: Required<TikTokPlayerConfig> = {
      autoplay: "0",
      loop: "1",
      timestamp: "1",
      play_button: "1",
      closed_caption: "0",
      full_screen: "1",
      rel: "0",
      native_context_menu: "1",
      progress_bar: "0",
    };

    const mergedConfig = { ...defaultConfig, ...config };
    const params = new URLSearchParams(mergedConfig);
    return `https://www.tiktok.com/player/v1/${videoId}?${params.toString()}`;
  }, [videoId, config]);

  const iframeProps = useMemo(
    () => ({
      title: `TikTok video ${videoId}`,
      loading: "lazy" as const,
      sandbox:
        "allow-scripts allow-same-origin allow-popups allow-presentation allow-popups-to-escape-sandbox",
      allow:
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
      referrerPolicy: "strict-origin-when-cross-origin" as const,
      allowFullScreen: true,
      className: "tiktok-embed",
      "data-video-id": videoId,
    }),
    [videoId]
  );

  return {
    playerUrl,
    iframeProps,
  };
};
