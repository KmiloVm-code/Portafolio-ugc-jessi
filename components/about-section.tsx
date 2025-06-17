"use client";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl md:text-5xl font-title font-bold text-sage-green mb-8 text-balance">
                ¿Por qué el contenido{" "}
                <span className="text-honey-gold font-script">UGC</span>{" "}
                funciona?
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <p className="text-lg text-deep-green/80 leading-relaxed font-body text-balance">
                  🌱 <strong className="text-honey-gold">79%</strong> cree que
                  el UGC hace a las marcas más auténticas
                </p>
                <p className="text-lg text-deep-green/80 leading-relaxed font-body text-balance">
                  ❤️ <strong className="text-honey-gold">8 de cada 10</strong>{" "}
                  confían más en recomendaciones auténticas
                </p>
                <p className="text-lg text-deep-green/80 leading-relaxed font-body text-balance">
                  🚀 UGC aumenta el engagement hasta en un{" "}
                  <strong className="text-honey-gold">28%</strong>
                </p>
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
      </div>
    </section>
  );
}
