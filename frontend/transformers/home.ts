import { getMediaUrl } from "../utils/url";
import { Hero } from "@/types/hero";
import { About } from "@/types/about";
import { Portfolio } from "@/types/portfolio";
import { WhyChooseMe } from "@/types/whyChooseMe";
import { ImagesSection } from "@/types/images-section";
import { FAQSectionType } from "@/types/faq-section";
import { Home, HomeSection } from "@/types/home";

export function transformHomePageData(data: HomeSection[]): Home | null {
  const hero = findSection<Hero>(data, "layout.hero-section");
  const about = findSection<About>(data, "layout.about-section");
  const portfolio = findSection<Portfolio>(data, "layout.portfolio-section");
  const whyChooseMe = findSection<WhyChooseMe>(
    data,
    "layout.why-choose-me-section"
  );
  const images = findSection<ImagesSection>(data, "layout.images-section");
  const faq = findSection<FAQSectionType>(data, "layout.faq-section");

  if (!hero || !about || !portfolio || !whyChooseMe || !images || !faq) {
    return null;
  }

  return {
    hero: transformHero(hero),
    about: transformAbout(about),
    portfolio,
    whyChooseMe,
    images: transformImages(images),
    faq,
  };
}

function findSection<T extends { __component: string }>(
  data: HomeSection[],
  component: string
): T | undefined {
  return data.find((section) => section.__component === component) as
    | T
    | undefined;
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
