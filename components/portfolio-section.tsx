"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play, Heart } from "lucide-react";
import TikTokEmbed from "@/components/ui/TikTokEmbed";

const videos = [
  {
    id: "7416859783199853829",
    title: "Primer vez visitando el Planetario de Medellín",
    category: "Lugares",
  },
  {
    id: "7418453897410383110",
    title: "Producto nuevo del D1",
    category: "unboxing",
  },
  {
    id: "7511742646352661766",
    title:
      "¿Vale la pena ir a un brunch de creadoras UGC cuando apenas estás empezando?",
    category: "UGC",
  },
  {
    id: "7508115920816966918",
    title: "Vinagre sidra de manzana",
    category: "alimentacion",
  },
  {
    id: "7506606182367300920",
    title: "TIP DE BELLEZA PARA CHICAS",
    category: "lifestyle",
  },
  {
    id: "7509885583708179768",
    title:
      "Los ingredientes como pantenol y niacinamida, te dejan la piel suave, calmada y con esa sensación rica de limpieza. Lo has probado ?",
    category: "wellness",
  },
];

const categories = [
  { id: "todos", label: "Todos" },
  { id: "alimentacion", label: "Alimentación" },
  { id: "wellness", label: "Wellness" },
  { id: "unboxing", label: "Unboxing" },
  { id: "lifestyle", label: "Lifestyle" },
  { id: "UGC", label: "UGC" },
  { id: "Lugares", label: "Lugares" },
];

const tiktokAcount = "https://www.tiktok.com/@jesstorres_bienestar";

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredVideos =
    activeCategory === "todos"
      ? videos
      : videos.filter((video) => video.category === activeCategory);

  return (
    <section
      id="portafolio"
      className="py-20 bg-gradient-to-br from-neutral/50 to-warm-orange/10"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-title font-bold text-dark-green mb-6">
            Mi <span className="text-warm-orange">Portafolio</span> de Videos
          </h2>
          <p className="text-lg text-dark-green/80 max-w-2xl mx-auto font-body">
            Explora mi trabajo organizado por categorías. Cada video está creado
            con amor y dedicación para conectar de forma auténtica con la
            audiencia.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={
                activeCategory === category.id
                  ? "deep-green hover:deepgreen/90 text-white font-body"
                  : "border-deep-green text-deep-green hover:bg-deep-green/10 font-body"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredVideos.map((video) => (
            <div key={video.id} className="group flex justify-center">
              {/* Phone Mockup */}
              <div className="flex flex-col items-center relative">
                {/* Phone Frame */}
                <div className="relative w-48 h-80 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  {/* Screen */}

                  {video && (
                    <TikTokEmbed
                      key={video.id}
                      videoId={video.id.toString()}
                      username="jesstorres_bienestar"
                    />
                  )}

                  {/* Phone Details */}
                  <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
                </div>

                {/* Video Info */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-title font-bold text-dark-green mb-1 group-hover:text-warm-orange transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-dark-green/70 font-body">
                    visualizaciones
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            onClick={() => {
              window.open(tiktokAcount, "_blank");
            }}
            size="lg"
            variant="outline"
            className="honey-gold text-honey-gold hover:bg-honey-gold/10 group font-body"
          >
            Ver todos mis videos
          </Button>
        </div>
      </div>
    </section>
  );
}
