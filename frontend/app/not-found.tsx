"use client";

import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { tantangkiwood, gwendolyn, garetBook } from "@/components/ui/fonts";

export default function NotFound() {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-linen via-white/50 to-honey-gold/10 px-4 ${tantangkiwood.variable} ${gwendolyn.variable} ${garetBook.variable}`}
    >
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-honey-gold/20 rounded-full blur-sm"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-sage-green/20 rounded-full blur-sm"></div>
      <div className="absolute top-1/3 left-10 w-16 h-16 bg-linen rounded-full"></div>
      <div className="absolute bottom-1/3 right-10 w-20 h-20 bg-honey-gold/10 rounded-full"></div>

      <div className="relative z-10 text-center space-y-8 max-w-lg">
        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-[150px] md:text-[200px] font-title font-bold text-sage-green/10 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl md:text-7xl font-script text-honey-gold">
              ¡Ups!
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-title font-bold text-sage-green leading-tight">
          Página{" "}
          <span className="text-honey-gold font-script">no encontrada</span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-deep-green/80 leading-relaxed font-body">
          Parece que esta página se perdió entre el contenido. No te preocupes,
          te ayudo a volver al camino correcto.
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
          <Button
            onClick={handleGoHome}
            size="lg"
            className="bg-sage-green text-white hover:bg-sage-green/90 group font-body px-6 py-3 rounded-md"
          >
            <Home className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>

          <Button
            onClick={handleGoBack}
            size="lg"
            variant="outline"
            className="border-sage-green text-sage-green hover:bg-sage-green/10 group font-body"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Regresar
          </Button>
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 pt-8">
          <div className="w-12 h-[2px] bg-honey-gold/40"></div>
          <span className="text-2xl select-none">🌿</span>
          <div className="w-12 h-[2px] bg-honey-gold/40"></div>
        </div>

        {/* Additional help text */}
        <p className="text-sm text-deep-green/60 font-body">
          ¿Buscabas algo específico? Explora mi portafolio desde la página
          principal.
        </p>
      </div>
    </div>
  );
}
