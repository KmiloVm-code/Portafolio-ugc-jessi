"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Leaf, Camera, Users } from "lucide-react";
import { WhyChooseMeSection } from "./whyChooseMe-section";

export function AboutSection() {
  const features = [
    {
      icon: Heart,
      title: "Contenido Auténtico",
      description:
        "Creo contenido real y genuino que conecta emocionalmente con tu audiencia",
    },
    {
      icon: Leaf,
      title: "Vida Saludable",
      description:
        "Especializada en wellness, alimentación consciente y estilo de vida sostenible",
    },
    {
      icon: Camera,
      title: "Calidad Visual",
      description:
        "Producciones de alta calidad con estética natural y luminosa",
    },
    {
      icon: Users,
      title: "Conexión Real",
      description: "Enfoque cercano que genera confianza y engagement genuino",
    },
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-5xl font-title font-bold text-sage-green mb-8 text-balance">
                ¿Por qué el contenido{" "}
                <span className="text-honey-gold">UGC</span> funciona?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <p className="text-lg text-deep-green/80 leading-relaxed font-body">
                  🌱 <strong className="text-honey-gold">79%</strong> cree que
                  el UGC hace a las marcas más auténticas
                </p>
                <p className="text-lg text-deep-green/80 leading-relaxed font-body">
                  ❤️ <strong className="text-honey-gold">8 de cada 10</strong>{" "}
                  confían más en recomendaciones auténticas
                </p>
                <p className="text-lg text-deep-green/80 leading-relaxed font-body">
                  🚀 UGC aumenta el engagement hasta en un{" "}
                  <strong className="text-honey-gold">28%</strong>
                </p>
              </div>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-linen rounded-xl shadow-sm">
                <div className="text-2xl font-title font-bold text-honey-gold">
                  3+
                </div>
                <div className="text-sm text-deep-green/70 font-body">
                  Años de experiencia
                </div>
              </div>
              <div className="text-center p-4 bg-linen rounded-xl shadow-sm">
                <div className="text-2xl font-title font-bold text-honey-gold">
                  50+
                </div>
                <div className="text-sm text-deep-green/70 font-body">
                  Marcas colaboradoras
                </div>
              </div>
              <div className="text-center p-4 bg-linen rounded-xl shadow-sm">
                <div className="text-2xl font-title font-bold text-honey-gold">
                  1M+
                </div>
                <div className="text-sm text-deep-green/70 font-body">
                  Visualizaciones totales
                </div>
              </div>
            </div> */}
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/creadoraUGC.webp"
                alt="Creadora UGC trabajando"
                className="w-full h-96 object-cover object-top rounded-2xl shadow-xl"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-honey-gold/20 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sage-green/20 rounded-full"></div>
            <div className="absolute top-1/2 -left-4 w-16 h-16 bg-linen rounded-full"></div>
          </div>
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-linen/30"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-sage-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-sage-green" />
                </div>
                <h3 className="text-xl font-title font-bold text-sage-green mb-2">
                  {feature.title}
                </h3>
                <p className="text-deep-green/70 text-sm leading-relaxed font-body">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* <div className="text-center">
          <Button
            onClick={() => window.open(whatsappLink, "_blank")}
            size="lg"
            className="bg-sage-green hover:bg-sage-green/90 text-white font-body"
          >
            Hablemos de tu proyecto
          </Button>
        </div> */}
      </div>
    </section>
  );
}
