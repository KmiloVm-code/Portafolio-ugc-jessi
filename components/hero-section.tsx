"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="pt-24 pb-10 sm:pb-0 bg-gradient-to-br from-linen via-white/50 to-honey-gold/10 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen first on mobile, second on desktop */}{" "}
          <div className="relative order-1 lg:order-2">
            <div className="max-w-md mx-auto lg:max-w-lg">
              {" "}
              <img
                src="/circulo.svg"
                alt="Creadora de contenido UGC"
                className="absolute bottom-0 sm:-bottom-16 left-0 z-10 max-h-96 sm:max-h-[650px]"
              />
              <div className="relative rounded-lg">
                <Image
                  src="/portada.webp"
                  alt="Creadora de contenido UGC"
                  width={500}
                  height={600}
                  priority
                  className="relative w-full h-auto max-h-96 sm:max-h-[650px] object-contain mask-fade-bottom drop-shadow-lg z-20"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-honey-gold/30 rounded-full"></div>
            <div className="absolute -bottom-0 -left-4 w-32 h-32 bg-sage-green/20 rounded-full"></div>
            <div className="absolute top-2/3 -right-8 w-16 h-16 bg-sage-green/40 rounded-full"></div>
          </div>
          <div className="space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-title font-bold text-sage-green leading-tight text-balance">
                Creando contenido{" "}
                <span className="text-honey-gold font-script">auténtico</span>{" "}
                que <span className="text-honey-gold font-script">conecta</span>
              </h1>
              <p className="text-xl text-deep-green/80 leading-relaxed font-body text-pretty">
                Soy Jessi Torres creadora <strong>UGC</strong> de bienestar,
                sostenibilidad y belleza real. Colaboro con marcas conscientes
                para inspirar decisiones más saludables y auténticas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => {
                  const portfolioSection =
                    document.getElementById("portafolio");
                  portfolioSection?.scrollIntoView({ behavior: "smooth" });
                }}
                size="lg"
                className="bg-sage-green hover:bg-sage-green/90 text-white group font-body"
              >
                Ver mi trabajo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* <Button
                size="lg"
                variant="outline"
                className="border-honey-gold text-honey-gold hover:bg-honey-gold/10 group font-body"
              >
                <Play className="mr-2 h-4 w-4" />
                Ver reel de presentación
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
