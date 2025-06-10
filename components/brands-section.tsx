import Image from "next/image"

export function BrandsSection() {
  const brands = [
    { name: "Wellness Co", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Green Life", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Natural Beauty", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Eco Foods", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Mindful Living", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Pure Nutrition", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Sustainable Style", logo: "/placeholder.svg?height=80&width=120" },
    { name: "Healthy Habits", logo: "/placeholder.svg?height=80&width=120" },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-neutral/30 to-warm-orange/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-title font-bold text-dark-green mb-6">
            Marcas que <span className="text-warm-orange">Confían</span> en Mí
          </h2>
          <p className="text-lg text-dark-green/80 max-w-2xl mx-auto font-body">
            He tenido el privilegio de colaborar con marcas increíbles que comparten mis valores de autenticidad,
            bienestar y sostenibilidad.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 grayscale hover:grayscale-0"
            >
              <Image
                src={brand.logo || "/placeholder.svg"}
                alt={`Logo de ${brand.name}`}
                width={120}
                height={80}
                className="max-w-full h-auto"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-title font-bold text-dark-green mb-4">
              ¿Quieres ser la próxima marca en esta lista?
            </h3>
            <p className="text-dark-green/80 mb-6 font-body">
              Trabajemos juntas para crear contenido auténtico que conecte con tu audiencia y genere resultados reales
              para tu marca.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-3xl font-title font-bold text-warm-orange">95%</div>
                <div className="text-sm text-dark-green/70 font-body">Tasa de satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-title font-bold text-warm-orange">48h</div>
                <div className="text-sm text-dark-green/70 font-body">Tiempo de entrega</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-title font-bold text-warm-orange">3x</div>
                <div className="text-sm text-dark-green/70 font-body">Aumento en engagement</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
