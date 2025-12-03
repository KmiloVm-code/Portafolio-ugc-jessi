// Utilidades de validación para TikTok Embed
import type { TikTokPlayerConfig, Video } from "@/types";

/**
 * Valida si un string es un ID válido de video de TikTok
 *
 * @param videoId - ID del video a validar
 * @returns true si es válido, false si no
 */
export const isValidTikTokVideoId = (videoId: string): boolean => {
  // Los IDs de TikTok suelen ser números de 19 dígitos
  const videoIdRegex = /^\d{19}$/;
  return videoIdRegex.test(videoId);
};

/**
 * Valida si un string es un nombre de usuario válido de TikTok
 *
 * @param username - Nombre de usuario a validar
 * @returns true si es válido, false si no
 */
export const isValidTikTokUsername = (username: string): boolean => {
  // Los usernames de TikTok pueden contener letras, números, puntos y guiones bajos
  // Longitud mínima de 2 caracteres, máxima de 24
  const usernameRegex = /^[a-zA-Z0-9._]{2,24}$/;
  return usernameRegex.test(username);
};

/**
 * Valida la configuración del reproductor de TikTok
 *
 * @param config - Configuración a validar
 * @returns true si es válida, false si no
 */
export const isValidPlayerConfig = (
  config: Partial<TikTokPlayerConfig>
): boolean => {
  const validValues = ["0", "1"];

  return Object.values(config).every(
    (value) => value === undefined || validValues.includes(value)
  );
};

/**
 * Sanitiza un ID de video de TikTok removiendo caracteres no válidos
 *
 * @param videoId - ID del video a sanitizar
 * @returns ID sanitizado
 */
export const sanitizeTikTokVideoId = (videoId: string): string => {
  return videoId.replace(/[^\d]/g, "");
};

/**
 * Sanitiza un nombre de usuario de TikTok removiendo caracteres no válidos
 *
 * @param username - Nombre de usuario a sanitizar
 * @returns Username sanitizado
 */
export const sanitizeTikTokUsername = (username: string): string => {
  return username.replace(/[^a-zA-Z0-9._]/g, "").slice(0, 24);
};

/**
 * Genera una URL de perfil de TikTok basada en el username
 *
 * @param username - Nombre de usuario
 * @returns URL del perfil
 */
export const getTikTokProfileUrl = (username: string): string => {
  const sanitizedUsername = sanitizeTikTokUsername(username);
  return `https://www.tiktok.com/@${sanitizedUsername}`;
};

/**
 * Genera una URL directa al video de TikTok
 *
 * @param username - Nombre de usuario
 * @param videoId - ID del video
 * @returns URL del video
 */
export const getTikTokVideoUrl = (
  username: string,
  videoId: string
): string => {
  const sanitizedUsername = sanitizeTikTokUsername(username);
  const sanitizedVideoId = sanitizeTikTokVideoId(videoId);
  return `https://www.tiktok.com/@${sanitizedUsername}/video/${sanitizedVideoId}`;
};

/**
 * Formatea el número de vistas a un string legible
 *
 * @param views - Número de vistas
 * @returns String formateado
 */
export const formatViewsCount = (video: Pick<Video, "views">): string => {
  if (video.views === undefined) return "Vistas no disponibles";

  if (video.views >= 1000000) {
    return `${(video.views / 1000000).toFixed(1)}M vistas`;
  }

  if (video.views >= 1000) {
    return `${(video.views / 1000).toFixed(1)}K vistas`;
  }

  return `${video.views.toLocaleString()} vistas`;
};
