import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ImagesSection } from "@/components/images-section";
import { BrandsSection } from "@/components/brands-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { WhyChooseMeSection } from "@/components/whyChooseMe-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-linen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <WhyChooseMeSection />
        <ImagesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
