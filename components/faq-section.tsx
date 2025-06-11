import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, Mail, Calendar } from "lucide-react";

export function FAQSection() {
  const faqs = [
    {
      question: "¿Qué incluye el servicio de contenido UGC?",
      answer:
        "Incluye la creación de videos y/o imágenes auténticas de tu producto, con guión personalizado, edición profesional y entrega en múltiples formatos. También proporciono insights sobre el rendimiento del contenido.",
    },
    {
      question: "¿Cuánto tiempo toma crear el contenido?",
      answer:
        "El tiempo varía según el proyecto, pero generalmente entrego el contenido en 48-72 horas. Para proyectos más complejos o múltiples piezas, podemos acordar un cronograma personalizado.",
    },
    {
      question: "¿Trabajas con productos de cualquier nicho?",
      answer:
        "Me especializo en productos relacionados con bienestar, alimentación saludable, sostenibilidad y lifestyle. Si tu producto se alinea con estos valores, ¡me encantaría trabajar contigo!",
    },
    {
      question: "¿Qué formatos de contenido ofreces?",
      answer:
        "Creo videos para TikTok, Instagram Reels, YouTube Shorts, así como imágenes para feed de Instagram, Pinterest y otros canales. Todo adaptado a las especificaciones de cada plataforma.",
    },
    {
      question: "¿Cómo garantizas la autenticidad del contenido?",
      answer:
        "Solo trabajo con productos que genuinamente uso y recomiendo. Mi enfoque se basa en experiencias reales y honestas, lo que se traduce en contenido más creíble y efectivo.",
    },
    {
      question: "¿Ofreces paquetes para múltiples contenidos?",
      answer:
        "Sí, ofrezco paquetes personalizados para marcas que buscan contenido regular. Esto incluye descuentos por volumen y planificación estratégica de contenido.",
    },
  ];

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-title font-bold text-dark-green mb-6">
            Preguntas <span className="text-warm-orange">Frecuentes</span>
          </h2>
          <p className="text-lg text-dark-green/80 max-w-2xl mx-auto font-body">
            Resuelvo las dudas más comunes sobre mi trabajo como creadora UGC.
            Si tienes alguna pregunta específica, ¡no dudes en contactarme!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-dark-green/20 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-title font-semibold text-dark-green hover:text-warm-orange">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-dark-green/80 leading-relaxed font-body">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-20">
          <div className="bg-gradient-to-br from-dark-green/10 to-warm-orange/10 rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-title font-bold text-dark-green mb-4">
              ¿Lista para crear contenido increíble juntas?
            </h3>
            <p className="text-lg text-dark-green/80 mb-8 max-w-2xl mx-auto font-body">
              Cuéntame sobre tu marca y tu visión. Trabajemos juntas para crear
              contenido auténtico que conecte con tu audiencia y genere
              resultados reales.
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
            >
              Empezar mi proyecto
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
