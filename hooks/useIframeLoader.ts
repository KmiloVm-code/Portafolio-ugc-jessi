import { useState, useCallback } from "react";
import type { UseIframeLoaderResult } from "@/types";

/**
 * Hook personalizado para manejar el estado de carga de un iframe
 * 
 * @returns Objeto con estado de carga y funciones de control
 * 
 * @example
 * ```tsx
 * const { isLoaded, handleLoad, handleError } = useIframeLoader();
 * 
 * <iframe 
 *   onLoad={handleLoad}
 *   onError={() => handleError("video123")}
 * />
 * ```
 */
export const useIframeLoader = (): UseIframeLoaderResult => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const handleLoad = useCallback((): void => {
    setIsLoaded(true);
  }, []);

  const handleError = useCallback((videoId?: string): void => {
    console.error(
      `Failed to load TikTok video${videoId ? ` with ID: ${videoId}` : ''}.`
    );
    setIsLoaded(false);
  }, []);

  const resetLoadState = useCallback((): void => {
    setIsLoaded(false);
  }, []);

  return {
    isLoaded,
    handleLoad,
    handleError,
    resetLoadState,
  };
};
