import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ImagesSection } from "@/components/images-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { WhyChooseMeSection } from "@/components/whyChooseMe-section";
import { tantangkiwood, gwendolyn, garetBook } from "../components/ui/fonts";
import { getHomePage } from "@/lib/cms-server";
import { ErrorPage } from "@/components/error-page";

export default async function Home() {
  const homePage = await getHomePage();

  // if homePage data is missing, render the ErrorPage component
  if (!homePage) {
    return <ErrorPage />;
  }

  const { hero, about, portfolio, whyChooseMe, images, faq } = homePage;

  return (
    <div
      className={`min-h-screen bg-linen ${tantangkiwood.variable} ${gwendolyn.variable} ${garetBook.variable} antialiased`}
    >
      <Header />
      <main>
        <HeroSection heroSection={hero} />
        <AboutSection aboutSection={about} />
        <PortfolioSection portfolioSection={portfolio} />
        <WhyChooseMeSection whyChooseMeSection={whyChooseMe} />
        <ImagesSection imagesSection={images} />
        <FAQSection faqSection={faq} />
      </main>
      <Footer />
    </div>
  );
}
