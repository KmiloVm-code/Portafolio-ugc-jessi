"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Leaf, Camera, Users } from "lucide-react";

const whatsappLink =
  "https://api.whatsapp.com/send?phone=573148474403&text=Hola%20Jessi,%20me%20gustaría%20saber%20más%20sobre%20tus%20servicios.";

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
              <h2 className="text-3xl md:text-5xl font-title font-bold text-sage-green mb-6">
                ¿Qué es ser creadora{" "}
                <span className="text-honey-gold">UGC</span>?
              </h2>
              <p className="text-lg text-deep-green/80 leading-relaxed font-body mb-6">
                Como creadora de contenido UGC, mi trabajo es dar vida a tu
                marca a través de contenido auténtico y relatable. No se trata
                solo de mostrar productos, sino de crear historias reales que
                conecten con las emociones y necesidades de tu audiencia.
              </p>
              <p className="text-lg text-deep-green/80 leading-relaxed font-body">
                Mi enfoque se centra en la vida saludable, el bienestar y la
                sostenibilidad, valores que transmito de forma natural y
                cercana, creando una conexión genuina con cada persona que ve mi
                contenido.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
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
            </div>
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

        {/* Why Choose Me Section */}
        <div className="bg-gradient-to-br from-sage-green/5 to-honey-gold/5 rounded-3xl p-8 md:p-12 mb-16">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-title font-bold text-sage-green mb-6">
              ¿Por qué elegirme a{" "}
              <span className="font-script text-honey-gold">mí</span>?
            </h3>
            <p className="text-lg text-deep-green/80 leading-relaxed font-body mb-8">
              Mi diferencial está en mi capacidad de mostrar cómo alimentarse
              bien puede ser simple, delicioso y accesible. No trabajo con
              extremos, sino que inspiro a construir rutinas que nutran el
              cuerpo, la mente y el planeta.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-honey-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-title font-semibold text-sage-green">
                      Contenido Auténtico
                    </h4>
                    <p className="text-sm text-deep-green/70 font-body">
                      Experiencias reales, no actuadas
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-honey-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-title font-semibold text-sage-green">
                      Enfoque Holístico
                    </h4>
                    <p className="text-sm text-deep-green/70 font-body">
                      Cuerpo, mente y planeta en equilibrio
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-honey-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-title font-semibold text-sage-green">
                      Conexión Emocional
                    </h4>
                    <p className="text-sm text-deep-green/70 font-body">
                      Historias que tocan el corazón
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-honey-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-title font-semibold text-sage-green">
                      Resultados Medibles
                    </h4>
                    <p className="text-sm text-deep-green/70 font-body">
                      Engagement real y conversiones
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
        </div>

        <div className="text-center">
          <Button
            onClick={() => window.open(whatsappLink, "_blank")}
            size="lg"
            className="bg-sage-green hover:bg-sage-green/90 text-white font-body"
          >
            Hablemos de tu proyecto
          </Button>
        </div>
      </div>
    </section>
  );
}
