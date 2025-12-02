import React from "react";
import type { TikTokPlaceholderProps } from "@/types";

/**
 * Componente de placeholder para mostrar durante la carga de videos de TikTok
 *
 * @param props - Propiedades del componente
 * @returns Elemento JSX del placeholder
 *
 * @example
 * ```tsx
 * <TikTokPlaceholder
 *   message="Cargando video..."
 *   className="custom-placeholder"
 * />
 * ```
 */
export const TikTokPlaceholder: React.FC<TikTokPlaceholderProps> = ({
  message,
  className = "inset-0 flex items-center justify-center h-full p-2 bg-gray-100 dark:bg-gray-800 rounded-[30px] z-10",
}) => {
  return (
    <div className={className}>
      <div className="flex flex-col items-center space-y-4">
        <div
          className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"
          role="status"
          aria-label="Cargando video"
        />
        <p className="text-sm text-balance text-center text-gray-600 dark:text-gray-400">
          {message}
        </p>
      </div>
    </div>
  );
};
