export interface Portada {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string;
}

export interface SocialLink {
  id: number;
  label: string;
  href: string;
  isExternal: boolean;
}

export interface Hero {
  title: string;
  description: string;
  portada: Portada;
  social: SocialLink[];
}
