export const socialLinks = {
  whatsapp: {
    phone: "+573148474403",
    getLink: (message?: string) => {
      const defaultMessage = "Hola, estoy interesada en tus servicios de UGC.";
      const encodedMessage = encodeURIComponent(message || defaultMessage);
      return `https://api.whatsapp.com/send?phone=${socialLinks.whatsapp.phone}&text=${encodedMessage}`;
    },
  },
  instagram: "https://www.instagram.com/jessitorres.ugc/",
  tiktok: "https://www.tiktok.com/@jessitorres_ugc",
  email: "mailto:jesstorres96@hotmail.com"
} as const;
