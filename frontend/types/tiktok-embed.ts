// Tipos específicos para los hooks de TikTok Embed

import type { RefObject } from "react";

/**
 * Configuración del reproductor de TikTok
 */
export interface TikTokPlayerConfig {
  /** Control de reproducción automática: "0" = deshabilitado, "1" = habilitado */
  autoplay?: "0" | "1";
  /** Control de bucle: "0" = deshabilitado, "1" = habilitado */
  loop?: "0" | "1";
  /** Mostrar timestamp: "0" = deshabilitado, "1" = habilitado */
  timestamp?: "0" | "1";
  /** Mostrar botón de play: "0" = deshabilitado, "1" = habilitado */
  play_button?: "0" | "1";
  /** Mostrar subtítulos: "0" = deshabilitado, "1" = habilitado */
  closed_caption?: "0" | "1";
  /** Permitir pantalla completa: "0" = deshabilitado, "1" = habilitado */
  full_screen?: "0" | "1";
  /** Mostrar videos relacionados: "0" = deshabilitado, "1" = habilitado */
  rel?: "0" | "1";
  /** Permitir menú contextual nativo: "0" = deshabilitado, "1" = habilitado */
  native_context_menu?: "0" | "1";
  /** Mostrar barra de progreso: "0" = deshabilitado, "1" = habilitado */
  progress_bar?: "0" | "1";
}

/**
 * Configuración para el Intersection Observer
 */
export interface IntersectionObserverConfig {
  /** Porcentaje del elemento que debe ser visible para activar (0.0 - 1.0) */
  threshold?: number;
  /** Margen adicional para activar la observación antes de tiempo */
  rootMargin?: string;
  /** Si la observación debe activarse solo una vez */
  once?: boolean;
}

/**
 * Propiedades del iframe de TikTok
 */
export interface TikTokIframeProps {
  src: string;
  title: string;
  loading: "lazy" | "eager";
  sandbox: string;
  allow: string;
  referrerPolicy: "strict-origin-when-cross-origin";
  allowFullScreen: boolean;
  className: string;
  "data-video-id": string;
  "data-username"?: string;
  onLoad: () => void;
  onError: () => void;
}

/**
 * Resultado del hook useIntersectionObserver
 */
export interface UseIntersectionObserverResult {
  /** Indica si el elemento está actualmente visible */
  isInView: boolean;
  /** Referencia al elemento DOM a observar */
  elementRef: RefObject<HTMLDivElement | null>;
}

/**
 * Resultado del hook useIframeLoader
 */
export interface UseIframeLoaderResult {
  /** Indica si el iframe ha terminado de cargar */
  isLoaded: boolean;
  /** Función para marcar el iframe como cargado */
  handleLoad: () => void;
  /** Función para manejar errores de carga del iframe */
  handleError: (videoId?: string) => void;
  /** Función para resetear el estado de carga */
  resetLoadState: () => void;
}

/**
 * Resultado del hook useTikTokPlayer
 */
export interface UseTikTokPlayerResult {
  /** URL completa del reproductor de TikTok */
  playerUrl: string;
  /** Propiedades preconfiguradas para el iframe */
  iframeProps: Omit<TikTokIframeProps, "src" | "title" | "data-username" | "onLoad" | "onError">;
}

/**
 * Opciones para el hook useTikTokEmbed
 */
export interface UseTikTokEmbedOptions {
  /** Configuración del Intersection Observer */
  threshold?: number;
  /** Margen adicional para el Intersection Observer */
  rootMargin?: string;
  /** Configuración personalizada del reproductor */
  playerConfig?: Partial<TikTokPlayerConfig>;
}

/**
 * Resultado del hook useTikTokEmbed
 */
export interface UseTikTokEmbedResult {
  /** Referencia al contenedor del embed */
  elementRef: RefObject<HTMLDivElement | null>;
  /** Indica si el elemento está visible en el viewport */
  isInView: boolean;
  /** Indica si el iframe ha terminado de cargar */
  isLoaded: boolean;
  /** Indica si el embed está completamente listo (visible y cargado) */
  isReady: boolean;
  /** Indica si debe mostrar el placeholder de carga */
  showPlaceholder: boolean;
  /** Texto a mostrar en el placeholder */
  placeholderText: string;
  /** Propiedades completas para el iframe */
  iframeProps: TikTokIframeProps;
}

/**
 * Propiedades del componente TikTokEmbed
 */
export interface TikTokEmbedProps {
  /** ID único del video de TikTok */
  videoId: string;
  /** Nombre de usuario de TikTok */
  username: string;
}

/**
 * Propiedades del componente TikTokPlaceholder
 */
export interface TikTokPlaceholderProps {
  /** Mensaje a mostrar en el placeholder */
  message: string;
  /** Clases CSS personalizadas para el contenedor */
  className?: string;
}

/**
 * Tipo de error para manejo de errores en los hooks
 */
export interface TikTokEmbedError {
  /** Tipo de error */
  type: "load_error" | "intersection_error" | "player_error";
  /** Mensaje descriptivo del error */
  message: string;
  /** ID del video que causó el error (opcional) */
  videoId?: string;
  /** Error original (opcional) */
  originalError?: Error;
}

/**
 * Configuración por defecto del reproductor de TikTok
 */
export const DEFAULT_TIKTOK_PLAYER_CONFIG: Required<TikTokPlayerConfig> = {
  autoplay: "0",
  loop: "1",
  timestamp: "1",
  play_button: "1",
  closed_caption: "0",
  full_screen: "1",
  rel: "0",
  native_context_menu: "1",
  progress_bar: "0",
} as const;

/**
 * Configuración por defecto del Intersection Observer
 */
export const DEFAULT_INTERSECTION_CONFIG: Required<IntersectionObserverConfig> = {
  threshold: 0.1,
  rootMargin: "200px",
  once: true,
} as const;
