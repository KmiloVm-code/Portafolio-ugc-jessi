"use client";

import { Button } from "./ui/button";
import { useSocialLinks } from "@/hooks/useSocialLinks";
import { WhyChooseMe } from "@/types/whyChooseMe";

export function WhyChooseMeSection({
  whyChooseMeSection,
}: {
  whyChooseMeSection: WhyChooseMe;
}) {
  const { openWhatsApp } = useSocialLinks();
  return (
    <section
      id="por-que-elegirme"
      className="py-20 bg-gradient-to-br from-sage-green/5 to-honey-gold/5 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-title font-bold text-dark-green mb-6">
            {whyChooseMeSection.title.split("*").map((part, index) =>
              index % 2 === 1 ? (
                <span key={index} className="text-honey-gold font-script">
                  {part}
                </span>
              ) : (
                part
              )
            )}
          </h2>
          <p className="text-lg text-deep-green/80 leading-relaxed font-body mb-10 text-balance">
            {whyChooseMeSection.description}
          </p>

          <div className="grid md:grid-cols-3 gap-8 justify-center md:justify-items-center text-left">
            {whyChooseMeSection.items.map((item, index) => (
              <div className="flex items-start space-x-3" key={index}>
                <div className="w-6 h-6 bg-honey-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-title font-semibold text-sage-green">
                    {item.text}
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <Button
            onClick={() => openWhatsApp()}
            size="lg"
            className="bg-sage-green hover:bg-sage-green/90 text-white font-body mt-10"
          >
            Hablemos de tu proyecto
          </Button>
        </div>
      </div>
    </section>
  );
}
