"use client";

import { Button } from "@/components/ui/button";
import TikTokEmbed from "@/components/ui/TikTokEmbed";
import { videos, categories } from "@/data";
import { PORTFOLIO_CONFIG } from "@/config/portfolio";
import { useSocialLinks } from "@/hooks/useSocialLinks";
import { useVideoFilter } from "@/hooks/useVideoFilter";
import { formatViewsCount } from "@/lib/tiktok-utils";

export function PortfolioSection() {
  const { activeCategory, setActiveCategory, filteredVideos } =
    useVideoFilter(videos);

  const { openSocialLink } = useSocialLinks();

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
          <p className="text-lg text-dark-green/80 max-w-2xl mx-auto font-body text-balance">
            Cada video está hecho con intención: mostrar, inspirar y generar
            confianza. Aquí puedes explorar mi trabajo según el tipo de marca o
            enfoque.
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
                      username={PORTFOLIO_CONFIG.username}
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
                    {formatViewsCount(video)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          {" "}
          <Button
            onClick={() => openSocialLink("tiktok")}
            size="lg"
            variant="outline"
            className="bg-sage-green hover:bg-sage-green/90 text-white group font-body"
          >
            Ver todos mis videos
          </Button>
        </div>
      </div>
    </section>
  );
}
