"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Mail, Calendar } from "lucide-react";
import { useSocialLinks } from "@/hooks/useSocialLinks";

export function FAQSection() {
  const { openWhatsApp } = useSocialLinks();

  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-br from-neutral/50 to-warm-orange/10"
    >
      <div className="container mx-auto text-center px-4">
        <div>
          <h3 className="text-3xl font-title font-bold text-dark-green mb-4">
            ¿Lista para crear contenido increíble juntas?
          </h3>
          <p className="text-lg text-dark-green/80 mb-8 max-w-2xl mx-auto font-body">
            Cuéntame sobre tu marca y tu visión. Trabajemos juntas para crear
            contenido auténtico que conecte con tu audiencia y genere resultados
            reales.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-0 shadow-sm bg-white/80">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-8 w-8 text-dark-green mx-auto mb-3" />
                <h4 className="font-title font-semibold text-dark-green mb-2">
                  WhatsApp
                </h4>
                <p className="text-sm text-dark-green/70 font-body">
                  Respuesta inmediata
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/80">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 text-dark-green mx-auto mb-3" />
                <h4 className="font-title font-semibold text-dark-green mb-2">
                  Email
                </h4>
                <p className="text-sm text-dark-green/70 font-body">
                  Propuestas detalladas
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm bg-white/80">
              <CardContent className="p-6 text-center">
                <Calendar className="h-8 w-8 text-dark-green mx-auto mb-3" />
                <h4 className="font-title font-semibold text-dark-green mb-2">
                  Videollamada
                </h4>
                <p className="text-sm text-dark-green/70 font-body">
                  Conocernos mejor
                </p>
              </CardContent>
            </Card>
          </div>

          <Button
            size="lg"
            className="deep-green hover:sage-green text-white font-body"
            onClick={() => openWhatsApp()}
            aria-label="Iniciar proyecto en WhatsApp"
          >
            Empezar mi proyecto
          </Button>
        </div>
      </div>
    </section>
  );
}
