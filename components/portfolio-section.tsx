"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Heart } from "lucide-react"

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("todos")

  const categories = [
    { id: "todos", label: "Todos" },
    { id: "alimentacion", label: "Alimentación" },
    { id: "wellness", label: "Wellness" },
    { id: "sostenibilidad", label: "Sostenibilidad" },
    { id: "lifestyle", label: "Lifestyle" },
  ]

  const videos = [
    {
      id: 1,
      title: "Desayuno saludable en 5 minutos",
      category: "alimentacion",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "0:45",
      views: "12.5K",
    },
    {
      id: 2,
      title: "Rutina de autocuidado matutina",
      category: "wellness",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "1:20",
      views: "8.2K",
    },
    {
      id: 3,
      title: "Productos eco-friendly favoritos",
      category: "sostenibilidad",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "2:15",
      views: "15.7K",
    },
    {
      id: 4,
      title: "Un día en mi vida saludable",
      category: "lifestyle",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "3:30",
      views: "22.1K",
    },
    {
      id: 5,
      title: "Smoothie bowl perfecto",
      category: "alimentacion",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "1:05",
      views: "9.8K",
    },
    {
      id: 6,
      title: "Meditación para principiantes",
      category: "wellness",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "2:45",
      views: "6.3K",
    },
  ]

  const filteredVideos =
    activeCategory === "todos" ? videos : videos.filter((video) => video.category === activeCategory)

  return (
    <section
      id="portafolio"
      className="py-20 bg-gradient-to-br from-linen/50 to-honey-gold/10 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-10 animate-pulse" style={{ animationDelay: "1s" }}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="text-sage-green/15">
            <path d="M14 4L16 12L24 10L16 12L14 4Z" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M14 24L12 16L4 18L12 16L14 24Z" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="absolute bottom-20 right-16 animate-spin" style={{ animationDuration: "25s" }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" className="text-honey-gold/10">
            <path d="M18 6L20.5 15.5L30 13L20.5 15.5L18 6Z" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M18 30L15.5 20.5L6 23L15.5 20.5L18 30Z" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M6 18L15.5 15.5L13 6L15.5 15.5L6 18Z" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M30 18L20.5 20.5L23 30L20.5 20.5L30 18Z" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 relative">
          {/* Title decoration */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-honey-gold/40 animate-bounce">
              <path d="M12 3L13.5 10.5L21 9L13.5 10.5L12 3Z" fill="currentColor" />
              <path d="M12 21L10.5 13.5L3 15L10.5 13.5L12 21Z" fill="currentColor" />
            </svg>
          </div>

          <h2 className="text-3xl md:text-5xl font-title font-bold text-sage-green mb-6 relative">
            Mi{" "}
            <span className="text-honey-gold relative">
              Portafolio
              {/* Sparkle decoration */}
              <div className="absolute -top-2 -right-2">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-honey-gold animate-ping">
                  <circle cx="6" cy="6" r="1" fill="currentColor" />
                  <path d="M6 0V3M6 9V12M0 6H3M9 6H12" stroke="currentColor" strokeWidth="0.5" />
                </svg>
              </div>
            </span>{" "}
            de Videos
          </h2>
          <p className="text-lg text-deep-green/80 max-w-2xl mx-auto font-body">
            Explora mi trabajo organizado por categorías. Cada video está creado con amor y dedicación para conectar de
            forma auténtica con la audiencia.
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
                  ? "bg-sage-green hover:bg-sage-green/90 text-white font-body relative group"
                  : "border-sage-green text-sage-green hover:bg-sage-green/10 font-body"
              }
            >
              {category.label}
              {/* Active button sparkle */}
              {activeCategory === category.id && (
                <div className="absolute -top-1 -right-1">
                  <svg width="6" height="6" viewBox="0 0 6 6" fill="none" className="text-white animate-pulse">
                    <circle cx="3" cy="3" r="0.5" fill="currentColor" />
                  </svg>
                </div>
              )}
            </Button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredVideos.map((video, index) => (
            <div key={video.id} className="group flex justify-center relative">
              {/* Floating decoration for some videos */}
              {index % 3 === 0 && (
                <div className="absolute -top-4 -right-4 z-20">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-honey-gold/60 animate-pulse"
                  >
                    <path d="M8 1L9 6L14 5L9 6L8 1Z" fill="currentColor" />
                    <path d="M8 15L7 10L2 11L7 10L8 15Z" fill="currentColor" />
                  </svg>
                </div>
              )}

              {/* Phone Mockup */}
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative w-48 h-80 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-2 shadow-2xl">
                  {/* Screen */}
                  <div className="relative w-full h-full bg-black rounded-[2rem] overflow-hidden">
                    {/* Video Thumbnail */}
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center relative">
                        <Play className="h-8 w-8 text-sage-green ml-1" />
                        {/* Play button sparkle */}
                        <div className="absolute -top-1 -right-1">
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                            className="text-sage-green animate-ping"
                          >
                            <circle cx="4" cy="4" r="0.5" fill="currentColor" />
                            <path d="M4 0V2M4 6V8M0 4H2M6 4H8" stroke="currentColor" strokeWidth="0.5" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                      {video.duration}
                    </div>

                    {/* TikTok-style UI Elements */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-honey-gold rounded-full flex items-center justify-center relative">
                          <Heart className="h-4 w-4 text-white" />
                          {/* Heart sparkle */}
                          <div className="absolute -top-1 -right-1">
                            <svg width="4" height="4" viewBox="0 0 4 4" fill="none" className="text-white animate-ping">
                              <circle cx="2" cy="2" r="0.5" fill="currentColor" />
                            </svg>
                          </div>
                        </div>
                        <span className="text-sm font-bold">{video.views}</span>
                      </div>
                    </div>
                  </div>

                  {/* Phone Details */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full"></div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
                </div>

                {/* Video Info */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-title font-bold text-sage-green mb-1 group-hover:text-honey-gold transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-deep-green/70 font-body">{video.views} visualizaciones</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-sage-green text-sage-green hover:bg-sage-green/10 font-body relative group"
          >
            Ver todos mis videos
            {/* Button hover sparkle */}
            <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="text-sage-green animate-ping">
                <circle cx="4" cy="4" r="0.5" fill="currentColor" />
                <path d="M4 0V2M4 6V8M0 4H2M6 4H8" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
          </Button>
        </div>
      </div>
    </section>
  )
}
