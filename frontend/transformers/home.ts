import { getMediaUrl } from "../utils/url";
import { Hero } from "@/types/hero";
import { About } from "@/types/about";
import { Portfolio } from "@/types/portfolio";
import { WhyChooseMe } from "@/types/whyChooseMe";
import { ImagesSection } from "@/types/images-section";
import { FAQSectionType } from "@/types/faq-section";

export interface HomePageData {
  hero: Hero;
  about: About;
  portfolio: Portfolio;
  whyChooseMe: WhyChooseMe;
  images: ImagesSection;
  faq: FAQSectionType;
}

export function transformHomePageData(sections: any[]): HomePageData {
  const [hero, about, portfolio, whyChooseMe, images, faq] = sections;

  return {
    hero: transformHero(hero),
    about: transformAbout(about),
    portfolio,
    whyChooseMe,
    images: transformImages(images),
    faq,
  };
}

function transformHero(data: Hero): Hero {
  return {
    ...data,
    portada: {
      ...data.portada,
      url: getMediaUrl(data.portada.url),
    },
  };
}

function transformAbout(data: About): About {
  return {
    ...data,
    video_about: {
      ...data.video_about,
      video: {
        ...data.video_about.video,
        url: getMediaUrl(data.video_about.video.url),
      },
      poster: {
        ...data.video_about.poster,
        url: getMediaUrl(data.video_about.poster.url),
      },
    },
  };
}

function transformImages(data: ImagesSection): ImagesSection {
  return {
    ...data,
    images: data.images.map((item) => ({
      ...item,
      image: {
        ...item.image,
        url: getMediaUrl(item.image.url),
      },
    })),
  };
}