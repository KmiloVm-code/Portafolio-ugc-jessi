import { useIntersectionObserver } from "./useIntersectionObserver";
import { useIframeLoader } from "./useIframeLoader";
import { useTikTokPlayer } from "./useTikTokPlayer";
import type { 
  UseTikTokEmbedOptions, 
  UseTikTokEmbedResult,
  TikTokIframeProps 
} from "@/types";

/**
 * Hook principal que combina toda la lógica del TikTok embed
 * 
 * @param videoId - ID único del video de TikTok
 * @param username - Nombre de usuario de TikTok
 * @param options - Opciones de configuración (opcional)
 * @returns Objeto completo con estado y propiedades del embed
 * 
 * @example
 * ```tsx
 * const {
 *   elementRef,
 *   isInView,
 *   isLoaded,
 *   showPlaceholder,
 *   placeholderText,
 *   iframeProps
 * } = useTikTokEmbed("video123", "username", {
 *   threshold: 0.5,
 *   playerConfig: { autoplay: "1" }
 * });
 * ```
 */
export const useTikTokEmbed = (
  videoId: string,
  username: string,
  options: UseTikTokEmbedOptions = {}
): UseTikTokEmbedResult => {
  const { threshold, rootMargin, playerConfig } = options;
  
  const { isInView, elementRef } = useIntersectionObserver({
    threshold,
    rootMargin,
  });
  
  const { isLoaded, handleLoad, handleError } = useIframeLoader();
  
  const { playerUrl, iframeProps } = useTikTokPlayer(videoId, playerConfig);

  const isReady: boolean = isInView && isLoaded;
  const showPlaceholder: boolean = !isInView || !isLoaded;
  
  const placeholderText: string = !isInView 
    ? "Preparando video..." 
    : "Cargando video de TikTok...";

  const enhancedIframeProps: TikTokIframeProps = {
    ...iframeProps,
    src: playerUrl,
    title: `TikTok video by ${username}`,
    onLoad: handleLoad,
    onError: () => handleError(videoId),
    "data-username": username,
  };

  return {
    elementRef,
    isInView,
    isLoaded,
    isReady,
    showPlaceholder,
    placeholderText,
    iframeProps: enhancedIframeProps,
  };
};
