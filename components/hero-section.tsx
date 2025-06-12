"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="pt-24 pb-10 sm:pb-0 bg-gradient-to-br from-linen via-white/50 to-honey-gold/10"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen first on mobile, second on desktop */}{" "}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 max-w-md mx-auto lg:max-w-lg">
              {" "}
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src="/portada.png"
                  alt="Creadora de contenido UGC"
                  width={500}
                  height={600}
                  priority
                  className="w-full h-auto max-h-[650px] object-cover mask-fade-bottom drop-shadow-lg"
                />
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-honey-gold/30 rounded-full"></div>
            <div className="absolute -bottom-0 -left-4 w-32 h-32 bg-sage-green/20 rounded-full"></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-linen rounded-full"></div>
          </div>
          <div className="space-y-8 animate-fade-in order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-title font-bold text-sage-green leading-tight">
                Creando contenido{" "}
                <span className="text-honey-gold">auténtico</span> que{" "}
                <span className="text-honey-gold">conecta</span>
              </h1>
              <p className="text-xl text-deep-green/80 leading-relaxed font-body">
                Soy creadora de contenido UGC especializada en vida saludable y
                sostenible. Ayudo a las marcas a conectar de forma genuina con
                su audiencia a través de contenido real y cercano.
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
              <Button
                size="lg"
                variant="outline"
                className="border-honey-gold text-honey-gold hover:bg-honey-gold/10 group font-body"
              >
                <Play className="mr-2 h-4 w-4" />
                Ver reel de presentación
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-honey-gold font-title">
                  50+
                </div>
                <div className="text-sm text-deep-green/70 font-body">
                  Marcas colaboradoras
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-honey-gold font-title">
                  100K+
                </div>
                <div className="text-sm text-deep-green/70 font-body">
                  Visualizaciones
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-honey-gold font-title">
                  95%
                </div>
                <div className="text-sm text-deep-green/70 font-body">
                  Satisfacción
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
