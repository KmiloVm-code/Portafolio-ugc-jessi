import { socialLinks } from "@/lib/social-links";
import { TikTok, Instagram, WhatsApp, Gmail } from "@/components/ui/logos";

/**
 * Hook personalizado para manejar enlaces de redes sociales e iconos
 * 
 * Proporciona funciones para:
 * - Abrir enlaces de redes sociales en nuevas ventanas
 * - Generar datos estructurados de redes sociales con iconos
 * - Obtener iconos específicos de cada plataforma
 * 
 * @returns {Object} Objeto con funciones y datos de redes sociales
 */
export const useSocialLinks = () => {  /**
   * Abre WhatsApp con un mensaje personalizado
   * @param customMessage - Mensaje personalizado (opcional)
   */
  const openWhatsApp = (customMessage?: string) => {
    const link = socialLinks.whatsapp.getLink(customMessage);
    window.open(link, "_blank");
  };
  /**
   * Abre un enlace de red social en una nueva ventana
   * @param platform - Plataforma de red social
   */
  const openSocialLink = (platform: keyof typeof socialLinks) => {
    if (platform === "whatsapp") {
      openWhatsApp();
      return;
    }
    const link = socialLinks[platform] as string;
    window.open(link, "_blank");
  };
  /**
   * Mapeo de plataformas de redes sociales con sus respectivos iconos SVG
   */
  const socialIcons = {
    whatsapp: WhatsApp,
    instagram: Instagram,
    tiktok: TikTok,
    email: Gmail,
  };
  /**
   * Obtiene el componente de icono para una plataforma específica
   * @param platform - Plataforma de red social
   * @returns Componente React del icono
   */
  const getSocialIcon = (platform: keyof typeof socialLinks) => {
    return socialIcons[platform];
  }

  /**
   * Genera un array de datos estructurados para redes sociales
   * @param platforms - Lista de plataformas a incluir
   * @returns Array de objetos con datos de cada red social (key, href, icon, label, platform)
   * 
   * @example
   * ```tsx
   * const { getSocialData } = useSocialLinks();
   * const socialData = getSocialData("tiktok", "instagram", "whatsapp");
   * 
   * return (
   *   <div>
   *     {socialData.map((social) => (
   *       <a key={social.key} href={social.href}>
   *         <social.icon className="w-6 h-6" />
   *         {social.label}
   *       </a>
   *     ))}
   *   </div>
   * );
   * ```
   */
  const getSocialData = ( ...platforms: (keyof typeof socialLinks)[] ) => platforms.map((platform) => {
      let href: string;
      
      // Manejar casos especiales
      if (platform === "whatsapp") {
        href = socialLinks.whatsapp.getLink();
      } else if (platform === "email") {
        href = `mailto:${socialLinks.email}`;
      } else {
        href = socialLinks[platform] as string;
      }

      return {
        key: platform,
        href,
        icon: getSocialIcon(platform),
        label: platform.charAt(0).toUpperCase() + platform.slice(1),
        platform,
      };
    }
  );
  return {
    /**
     * Función para abrir WhatsApp con mensaje personalizado
     */
    openWhatsApp,
    /**
     * Función para abrir cualquier red social
     */
    openSocialLink,
    /**
     * Función para obtener icono de una plataforma específica
     */
    getSocialIcon,
    /**
     * Función para generar datos estructurados de redes sociales
     */
    getSocialData,
  };
};
