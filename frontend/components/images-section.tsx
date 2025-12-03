"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSocialLinks } from "@/hooks/useSocialLinks";
import Image from "next/image";
import { ImagesSection as ImagesSectionType } from "@/types/images-section";

export function ImagesSection({
  imagesSection,
}: {
  imagesSection: ImagesSectionType;
}) {
  const { openSocialLink } = useSocialLinks();
  const imagesItems = imagesSection.images;

  return (
    <section id="contenido" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-title font-bold text-dark-green mb-6">
            {imagesSection.title}
          </h2>
          <p className="text-lg text-dark-green/80 max-w-2xl mx-auto font-body">
            {imagesSection.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center justify-center">
          {imagesItems.map((items, index) => (
            <Card
              key={index}
              className="relative group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white"
            >
              <Image
                src={items.image.url || "/placeholder.svg"}
                alt={items.image.alternativeText}
                width={440}
                height={550}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium mb-3">
                    {items.image.alternativeText}
                  </p>
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
