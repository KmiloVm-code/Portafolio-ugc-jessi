import { useEffect, useState, useRef } from "react";
import type {
  IntersectionObserverConfig,
  UseIntersectionObserverResult,
  DEFAULT_INTERSECTION_CONFIG,
} from "@/types";

/**
 * Hook personalizado para observar cuando un elemento entra en el viewport
 * 
 * @param options - Configuración del Intersection Observer
 * @returns Objeto con estado de visibilidad y referencia del elemento
 * 
 * @example
 * ```tsx
 * const { isInView, elementRef } = useIntersectionObserver({
 *   threshold: 0.5,
 *   rootMargin: "100px",
 *   once: true
 * });
 * ```
 */
export const useIntersectionObserver = (
  options: IntersectionObserverConfig = {}
): UseIntersectionObserverResult => {
  const {
    threshold = 0.1,
    rootMargin = "200px",
    once = true,
  } = options;
  
  const [isInView, setIsInView] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentElement);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  return { isInView, elementRef };
};
