import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="pt-24 pb-16 bg-gradient-to-br from-linen via-white/50 to-honey-gold/10 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Sparkle Elements */}
        <div className="absolute top-20 left-10 animate-pulse">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-honey-gold/40">
            <path d="M12 0L14.09 8.26L22 6L14.09 8.26L12 0Z" fill="currentColor" />
            <path d="M12 24L9.91 15.74L2 18L9.91 15.74L12 24Z" fill="currentColor" />
            <path d="M0 12L8.26 9.91L6 2L8.26 9.91L0 12Z" fill="currentColor" />
            <path d="M24 12L15.74 14.09L18 22L15.74 14.09L24 12Z" fill="currentColor" />
          </svg>
        </div>

        <div className="absolute top-32 right-20 animate-bounce" style={{ animationDelay: "1s" }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-sage-green/30">
            <circle cx="8" cy="8" r="2" fill="currentColor" />
            <path d="M8 0V4M8 12V16M0 8H4M12 8H16" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>

        <div className="absolute bottom-32 left-20 animate-pulse" style={{ animationDelay: "2s" }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-honey-gold/50">
            <path d="M10 2L11.5 7.5L17 6L11.5 7.5L10 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M10 18L8.5 12.5L3 14L8.5 12.5L10 18Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        </div>

        {/* Monoline Stars */}
        <div className="absolute top-40 right-32 animate-spin" style={{ animationDuration: "20s" }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-sage-green/20">
            <path d="M16 4L18.5 13.5L28 11L18.5 13.5L16 4Z" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M16 28L13.5 18.5L4 21L13.5 18.5L16 28Z" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M4 16L13.5 13.5L11 4L13.5 13.5L4 16Z" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M28 16L18.5 18.5L21 28L18.5 18.5L28 16Z" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="absolute bottom-20 right-10 animate-pulse" style={{ animationDelay: "3s" }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-honey-gold/60">
            <path d="M7 1L8 6L13 5L8 6L7 1Z" fill="currentColor" />
            <path d="M7 13L6 8L1 9L6 8L7 13Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4 relative">
              {/* Small decorative star near title */}
              <div className="absolute -top-4 -left-4">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="text-honey-gold/70 animate-pulse"
                >
                  <path d="M10 2L11 8L17 7L11 8L10 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path d="M10 18L9 12L3 13L9 12L10 18Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </div>

              <h1 className="text-4xl md:text-6xl font-title font-bold text-sage-green leading-tight">
                Creando contenido{" "}
                <span className="text-honey-gold relative">
                  auténtico
                  {/* Sparkle decoration */}
                  <div className="absolute -top-2 -right-2">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      className="text-honey-gold animate-ping"
                    >
                      <circle cx="6" cy="6" r="1" fill="currentColor" />
                      <path d="M6 0V3M6 9V12M0 6H3M9 6H12" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                  </div>
                </span>{" "}
                que{" "}
                <span className="font-script text-honey-gold text-5xl md:text-7xl relative">
                  conecta
                  {/* Star decoration */}
                  <div className="absolute -bottom-2 -right-4">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-sage-green/50 animate-bounce"
                    >
                      <path d="M8 1L9 6L14 5L9 6L8 1Z" fill="currentColor" />
                      <path d="M8 15L7 10L2 11L7 10L8 15Z" fill="currentColor" />
                    </svg>
                  </div>
                </span>
              </h1>
              <p className="text-xl text-deep-green/80 leading-relaxed font-body">
                Soy creadora de contenido UGC especializada en vida saludable y sostenible. Ayudo a las marcas a
                conectar de forma genuina con su audiencia a través de contenido real y cercano.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-sage-green hover:bg-sage-green/90 text-white group font-body relative">
                Ver mi trabajo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                {/* Button sparkle */}
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="text-white animate-ping">
                    <circle cx="4" cy="4" r="0.5" fill="currentColor" />
                    <path d="M4 0V2M4 6V8M0 4H2M6 4H8" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>
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
              <div className="text-center relative">
                <div className="text-2xl font-bold text-honey-gold font-title">50+</div>
                <div className="text-sm text-deep-green/70 font-body">Marcas colaboradoras</div>
                {/* Small star decoration */}
                <div className="absolute -top-2 -right-2">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="text-honey-gold/40 animate-pulse">
                    <path d="M4 0L4.5 3L7 2.5L4.5 3L4 0Z" fill="currentColor" />
                    <path d="M4 8L3.5 5L1 5.5L3.5 5L4 8Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-honey-gold font-title">100K+</div>
                <div className="text-sm text-deep-green/70 font-body">Visualizaciones</div>
              </div>
              <div className="text-center relative">
                <div className="text-2xl font-bold text-honey-gold font-title">95%</div>
                <div className="text-sm text-deep-green/70 font-body">Satisfacción</div>
                {/* Sparkle decoration */}
                <div className="absolute -bottom-1 -right-2">
                  <svg width="6" height="6" viewBox="0 0 6 6" fill="none" className="text-sage-green/50 animate-ping">
                    <circle cx="3" cy="3" r="0.5" fill="currentColor" />
                    <path d="M3 0V1.5M3 4.5V6M0 3H1.5M4.5 3H6" stroke="currentColor" strokeWidth="0.3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Creadora de contenido UGC"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            {/* Enhanced Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-honey-gold/30 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-sage-green/20 rounded-full"></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-linen rounded-full"></div>

            {/* Additional sparkles around image */}
            <div className="absolute top-10 left-10 animate-pulse" style={{ animationDelay: "1.5s" }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-honey-gold/60">
                <path d="M6 1L6.5 5L10 4.5L6.5 5L6 1Z" fill="currentColor" />
                <path d="M6 11L5.5 7L2 7.5L5.5 7L6 11Z" fill="currentColor" />
              </svg>
            </div>

            <div className="absolute bottom-10 right-10 animate-bounce" style={{ animationDelay: "2.5s" }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-sage-green/40">
                <circle cx="5" cy="5" r="1" fill="currentColor" />
                <path d="M5 0V2M5 8V10M0 5H2M8 5H10" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
