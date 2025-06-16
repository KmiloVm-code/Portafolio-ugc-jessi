"use client";

import { Button } from "./ui/button";
import { useSocialLinks } from "@/hooks/useSocialLinks";

export function WhyChooseMeSection() {
  const { openWhatsApp } = useSocialLinks();
  return (
    <section
      id="por-que-elegirme"
      className="py-20 bg-gradient-to-br from-sage-green/5 to-honey-gold/5 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-title font-bold text-sage-green mb-6">
            ¿Por qué{" "}
            <span className="font-script text-honey-gold">elegirme</span> a mí?
          </h3>
          <p className="text-lg text-deep-green/80 leading-relaxed font-body mb-10 text-balance">
            Mi diferencial está en mostrar que llevar un estilo de vida
            saludable no tiene que ser complicado ni restrictivo. A través de
            contenido real, inspiro rutinas que nutren el cuerpo, la mente y el
            planeta.
          </p>

          <div className="grid md:grid-cols-3 gap-8 sm:justify-items-center text-left">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-honey-gold rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-title font-semibold text-sage-green">
                  Contenido Auténtico
                </h4>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-honey-gold rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-title font-semibold text-sage-green">
                  Vida Saludable
                </h4>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-honey-gold rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-title font-semibold text-sage-green">
                  Habitos sostenibles
                </h4>
              </div>
            </div>
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
