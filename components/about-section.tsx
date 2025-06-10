import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Leaf, Camera, Users } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Heart,
      title: "Contenido Auténtico",
      description: "Creo contenido real y genuino que conecta emocionalmente con tu audiencia",
    },
    {
      icon: Leaf,
      title: "Vida Saludable",
      description: "Especializada en wellness, alimentación consciente y estilo de vida sostenible",
    },
    {
      icon: Camera,
      title: "Calidad Visual",
      description: "Producciones de alta calidad con estética natural y luminosa",
    },
    {
      icon: Users,
      title: "Conexión Real",
      description: "Enfoque cercano que genera confianza y engagement genuino",
    },
  ]

  return (
    <section id="sobre-mi" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 animate-spin" style={{ animationDuration: "30s" }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-sage-green/10">
            <path d="M20 5L22.5 17.5L35 15L22.5 17.5L20 5Z" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M20 35L17.5 22.5L5 25L17.5 22.5L20 35Z" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M5 20L17.5 17.5L15 5L17.5 17.5L5 20Z" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M35 20L22.5 22.5L25 35L22.5 22.5L35 20Z" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>
        </div>

        <div className="absolute bottom-32 left-16 animate-pulse" style={{ animationDelay: "2s" }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-honey-gold/20">
            <path d="M9 2L10 8L16 7L10 8L9 2Z" fill="currentColor" />
            <path d="M9 16L8 10L2 11L8 10L9 16Z" fill="currentColor" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="relative">
              {/* Decorative star near title */}
              <div className="absolute -top-6 -left-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-honey-gold/50 animate-pulse"
                >
                  <path d="M12 3L13.5 10.5L21 9L13.5 10.5L12 3Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  <path
                    d="M12 21L10.5 13.5L3 15L10.5 13.5L12 21Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </div>

              <h2 className="text-3xl md:text-5xl font-title font-bold text-sage-green mb-6">
                ¿Qué es ser creadora{" "}
                <span className="text-honey-gold relative">
                  UGC
                  {/* Small sparkle */}
                  <div className="absolute -top-1 -right-1">
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="text-honey-gold animate-ping">
                      <circle cx="4" cy="4" r="0.5" fill="currentColor" />
                      <path d="M4 0V2M4 6V8M0 4H2M6 4H8" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                  </div>
                </span>
                ?
              </h2>
              <p className="text-lg text-deep-green/80 leading-relaxed font-body mb-6">
                Como creadora de contenido UGC, mi trabajo es dar vida a tu marca a través de contenido auténtico y
                relatable. No se trata solo de mostrar productos, sino de crear historias reales que conecten con las
                emociones y necesidades de tu audiencia.
              </p>
              <p className="text-lg text-deep-green/80 leading-relaxed font-body">
                Mi enfoque se centra en la vida saludable, el bienestar y la sostenibilidad, valores que transmito de
                forma natural y cercana, creando una conexión genuina con cada persona que ve mi contenido.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-linen rounded-xl shadow-sm relative">
                <div className="text-2xl font-title font-bold text-honey-gold">3+</div>
                <div className="text-sm text-deep-green/70 font-body">Años de experiencia</div>
                {/* Small decoration */}
                <div className="absolute -top-1 -right-1">
                  <svg width="6" height="6" viewBox="0 0 6 6" fill="none" className="text-sage-green/40 animate-pulse">
                    <circle cx="3" cy="3" r="0.5" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <div className="text-center p-4 bg-linen rounded-xl shadow-sm relative">
                <div className="text-2xl font-title font-bold text-honey-gold">50+</div>
                <div className="text-sm text-deep-green/70 font-body">Marcas colaboradoras</div>
                {/* Star decoration */}
                <div className="absolute -top-2 -right-2">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="text-honey-gold/50 animate-bounce">
                    <path d="M4 0L4.5 3L7 2.5L4.5 3L4 0Z" fill="currentColor" />
                    <path d="M4 8L3.5 5L1 5.5L3.5 5L4 8Z" fill="currentColor" />
                  </svg>
                </div>
              </div>
              <div className="text-center p-4 bg-linen rounded-xl shadow-sm">
                <div className="text-2xl font-title font-bold text-honey-gold">1M+</div>
                <div className="text-sm text-deep-green/70 font-body">Visualizaciones totales</div>
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/placeholder.svg?height=500&width=400"
                alt="Creadora UGC trabajando"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </div>
            {/* Enhanced Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-honey-gold/20 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-sage-green/20 rounded-full"></div>
            <div className="absolute top-1/2 -left-4 w-16 h-16 bg-linen rounded-full"></div>

            {/* Floating sparkles */}
            <div className="absolute top-16 right-4 animate-pulse" style={{ animationDelay: "1s" }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-honey-gold/60">
                <path d="M7 1L7.5 6L12 5.5L7.5 6L7 1Z" fill="currentColor" />
                <path d="M7 13L6.5 8L2 8.5L6.5 8L7 13Z" fill="currentColor" />
              </svg>
            </div>

            <div className="absolute bottom-20 left-4 animate-bounce" style={{ animationDelay: "3s" }}>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-sage-green/50">
                <circle cx="5" cy="5" r="1" fill="currentColor" />
                <path d="M5 0V2M5 8V10M0 5H2M8 5H10" stroke="currentColor" strokeWidth="0.5" />
              </svg>
            </div>
          </div>
        </div>

        {/* Why Choose Me Section */}
        <div className="bg-gradient-to-br from-sage-green/5 to-honey-gold/5 rounded-3xl p-8 md:p-12 mb-16 relative">
          {/* Section decorations */}
          <div className="absolute top-4 right-4">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="text-sage-green/20 animate-spin"
              style={{ animationDuration: "15s" }}
            >
              <path d="M10 2L11.5 8.5L18 7L11.5 8.5L10 2Z" stroke="currentColor" strokeWidth="1" fill="none" />
              <path d="M10 18L8.5 11.5L2 13L8.5 11.5L10 18Z" stroke="currentColor" strokeWidth="1" fill="none" />
            </svg>
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-title font-bold text-sage-green mb-6 relative">
              ¿Por qué elegirme a{" "}
              <span className="font-script text-honey-gold relative">
                mí
                {/* Sparkle decoration */}
                <div className="absolute -top-2 -right-2">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-honey-gold animate-ping">
                    <circle cx="6" cy="6" r="1" fill="currentColor" />
                    <path d="M6 0V3M6 9V12M0 6H3M9 6H12" stroke="currentColor" strokeWidth="0.5" />
                  </svg>
                </div>
              </span>
              ?
            </h3>
            <p className="text-lg text-deep-green/80 leading-relaxed font-body mb-8">
              Mi diferencial está en mi capacidad de mostrar cómo alimentarse bien puede ser simple, delicioso y
              accesible. No trabajo con extremos, sino que inspiro a construir rutinas que nutran el cuerpo, la mente y
              el planeta.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-honey-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1 relative">
                    <span className="text-white text-xs font-bold">✓</span>
                    {/* Small sparkle on checkmark */}
                    <div className="absolute -top-1 -right-1">
                      <svg width="4" height="4" viewBox="0 0 4 4" fill="none" className="text-white animate-ping">
                        <circle cx="2" cy="2" r="0.5" fill="currentColor" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-title font-semibold text-sage-green">Contenido Auténtico</h4>
                    <p className="text-sm text-deep-green/70 font-body">Experiencias reales, no actuadas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-honey-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-title font-semibold text-sage-green">Enfoque Holístico</h4>
                    <p className="text-sm text-deep-green/70 font-body">Cuerpo, mente y planeta en equilibrio</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-honey-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-title font-semibold text-sage-green">Conexión Emocional</h4>
                    <p className="text-sm text-deep-green/70 font-body">Historias que tocan el corazón</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-honey-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-title font-semibold text-sage-green">Resultados Medibles</h4>
                    <p className="text-sm text-deep-green/70 font-body">Engagement real y conversiones</p>
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
              className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-white to-linen/30 relative group"
            >
              <CardContent className="p-6 text-center">
                {/* Card decoration */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="text-honey-gold/50 animate-pulse">
                    <path d="M4 0L4.5 3L7 2.5L4.5 3L4 0Z" fill="currentColor" />
                    <path d="M4 8L3.5 5L1 5.5L3.5 5L4 8Z" fill="currentColor" />
                  </svg>
                </div>

                <div className="w-16 h-16 bg-sage-green/10 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                  <feature.icon className="h-8 w-8 text-sage-green" />
                  {/* Icon sparkle */}
                  <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" className="text-sage-green animate-ping">
                      <circle cx="3" cy="3" r="0.5" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-title font-bold text-sage-green mb-2">{feature.title}</h3>
                <p className="text-deep-green/70 text-sm leading-relaxed font-body">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-sage-green hover:bg-sage-green/90 text-white font-body relative group">
            Hablemos de tu proyecto
            {/* Button sparkle */}
            <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="text-white animate-ping">
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
