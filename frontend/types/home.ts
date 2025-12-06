import { About } from "./about";
import { FAQSectionType } from "./faq-section";
import { Hero } from "./hero";
import { ImagesSection } from "./images-section";
import { Portfolio } from "./portfolio";
import { WhyChooseMe } from "./whyChooseMe";

// Tipo unión discriminada por __component
export type HomeSection = 
  | Hero 
  | About 
  | Portfolio 
  | WhyChooseMe 
  | ImagesSection 
  | FAQSectionType;

export interface Home {
  hero: Hero;
  about: About;
  portfolio: Portfolio;
  whyChooseMe: WhyChooseMe;
  images: ImagesSection;
  faq: FAQSectionType;
}