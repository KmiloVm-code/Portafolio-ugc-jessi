"use client";

import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { tantangkiwood, gwendolyn, garetBook } from "./ui/fonts";

export function ErrorPage() {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-linen via-white/50 to-honey-gold/10 px-4 ${tantangkiwood.variable} ${gwendolyn.variable} ${garetBook.variable}`}
    >
      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-honey-gold/20 rounded-full blur-sm"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-sage-green/20 rounded-full blur-sm"></div>

      <div className="relative z-10 text-center space-y-8 max-w-lg">
        {/* Icon or Emoji */}
        <div className="text-8xl mb-4 select-none">🌿</div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-title font-bold text-sage-green leading-tight">
          ¡Oops! Algo salió{" "}
          <span className="text-honey-gold font-script">mal</span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-deep-green/80 leading-relaxed font-body">
          Estamos experimentando problemas técnicos. No te preocupes, estamos
          trabajando para solucionarlo.
        </p>

        {/* Retry Button */}
        <Button
          onClick={handleReload}
          size="lg"
          className="bg-sage-green hover:bg-sage-green/90 text-white group font-body mt-6"
        >
          <RefreshCw className="mr-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-500" />
          Intentar de nuevo
        </Button>

        {/* Additional help text */}
        <p className="text-sm text-deep-green/60 font-body mt-8">
          Si el problema persiste, por favor intenta más tarde o contáctame por
          mis redes sociales.
        </p>
      </div>
    </div>
  );
}
