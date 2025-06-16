"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { useSocialLinks } from "@/hooks/useSocialLinks";

export function ImagesSection() {
  const { openSocialLink } = useSocialLinks();

  const images = [
    {
      id: 1,
      src: "/placeholder.svg?height=400&width=300",
      alt: "Flat lay de ingredientes saludables",
      likes: "2.1K",
      comments: "89",
    },
    {
      id: 2,
      src: "/placeholder.svg?height=400&width=300",
      alt: "Momento de autocuidado con productos naturales",
      likes: "1.8K",
      comments: "67",
    },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=300",
      alt: "Setup de trabajo desde casa",
      likes: "3.2K",
      comments: "124",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=400&width=300",
      alt: "Productos eco-friendly en uso",
      likes: "1.5K",
      comments: "43",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=400&width=300",
      alt: "Preparación de comida saludable",
      likes: "2.7K",
      comments: "98",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=300",
      alt: "Rutina de skincare natural",
      likes: "1.9K",
      comments: "76",
    },
  ];

  return (
    <section id="contenido" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-title font-bold text-dark-green mb-6">
            Contenido <span className="text-warm-orange">Visual</span> UGC
          </h2>
          <p className="text-lg text-dark-green/80 max-w-2xl mx-auto font-body">
            Imágenes auténticas que cuentan historias. Cada foto está pensada
            para generar conexión y engagement genuino con tu audiencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <Card
              key={image.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium mb-3">
                      {image.alt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-white">
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span className="text-sm">{image.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="h-4 w-4" />
                          <span className="text-sm">{image.comments}</span>
                        </div>
                      </div>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-white hover:bg-white/20"
                      >
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="sage-green hover:bg-sage-green/90 text-white font-body"
            onClick={() => openSocialLink("instagram")}
          >
            Ver galería completa
          </Button>
        </div>
      </div>
    </section>
  );
}
