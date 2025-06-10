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
    <section id="portafolio" className="py-20 bg-gradient-to-br from-neutral/50 to-warm-orange/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-title font-bold text-dark-green mb-6">
            Mi <span className="text-warm-orange">Portafolio</span> de Videos
          </h2>
          <p className="text-lg text-dark-green/80 max-w-2xl mx-auto font-body">
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
                  ? "bg-dark-green hover:bg-dark-green/90 text-white font-body"
                  : "border-dark-green text-dark-green hover:bg-dark-green/10 font-body"
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
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <Play className="h-8 w-8 text-dark-green ml-1" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                      {video.duration}
                    </div>

                    {/* TikTok-style UI Elements */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-warm-orange rounded-full flex items-center justify-center">
                          <Heart className="h-4 w-4 text-white" />
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
                  <h3 className="text-lg font-title font-bold text-dark-green mb-1 group-hover:text-warm-orange transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-dark-green/70 font-body">{video.views} visualizaciones</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-dark-green text-dark-green hover:bg-dark-green/10 font-body"
          >
            Ver todos mis videos
          </Button>
        </div>
      </div>
    </section>
  )
}
