/**
 * Hooks para funcionalidad de TikTok Embed
 * 
 * Este módulo exporta todos los hooks personalizados necesarios
 * para implementar embedización de videos de TikTok con lazy loading,
 * gestión de estados y configuración flexible.
 * 
 * @author TikTok Embed System
 * @version 1.0.0
 */

// Hook para detectar visibilidad en viewport
export { useIntersectionObserver } from "./useIntersectionObserver";

// Hook para gestión de estado de carga de iframes
export { useIframeLoader } from "./useIframeLoader";

// Hook para configuración del reproductor de TikTok
export { useTikTokPlayer } from "./useTikTokPlayer";

// Hook principal que combina toda la funcionalidad
export { useTikTokEmbed } from "./useTikTokEmbed";

// Hook para filtrado de videos (ya existente)
export { useVideoFilter } from "./useVideoFilter";
