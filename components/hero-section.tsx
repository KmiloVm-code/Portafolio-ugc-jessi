"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useSocialLinks } from "@/hooks/useSocialLinks";

export function HeroSection() {
  const { getSocialData } = useSocialLinks();
  const socialData = getSocialData("tiktok", "instagram", "whatsapp", "email");
  return (
    <section
      id="inicio"
      className="pt-24 pb-10 sm:pb-0 bg-gradient-to-br from-linen via-white/50 to-honey-gold/10 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagen first on mobile, second on desktop */}{" "}
          <div className="relative order-1 lg:order-2">
            <Image
              src="/portada.webp"
              alt="Creadora de contenido UGC"
              width={800}
              height={800}
              priority
              className="relative max-h-96 md:max-h-[800px] object-contain mask-fade-bottom drop-shadow-lg z-20"
            />
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
            </div>
            <div className="flex gap-4 align-center justify-center sm:justify-start">
              {socialData.map((social) => (
                <Link
                  key={social.key}
                  href={social.href}
                  target="_blank"
                  className="flex items-center gap-2 text-sage-green hover:text-honey-gold transition-colors duration-300"
                  aria-label={`Ir a ${social.label}`}
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
