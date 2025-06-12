import Link from "next/link";
import { Heart } from "lucide-react";
import { TikTok, Instagram, Facebook, Gmail } from "@/components/ui/logos";

export function Footer() {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: TikTok, href: "#", label: "TikTok" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Gmail, href: "#", label: "Gmail" },
  ];

  return (
    <footer className="bg-deep-green text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-title font-bold text-honey-gold mb-4">
              Jessi Torres UGC
            </h3>
            <p className="text-white/80 leading-relaxed font-body">
              Creando contenido auténtico que conecta marcas con audiencias
              reales. Especializada en vida saludable y sostenible.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-title font-semibold mb-4">
              Enlaces Rápidos
            </h4>
            <nav className="space-y-2">
              <Link
                href="#inicio"
                className="block text-white/80 hover:text-honey-gold transition-colors font-body"
              >
                Inicio
              </Link>
              <Link
                href="#sobre-mi"
                className="block text-white/80 hover:text-honey-gold transition-colors font-body"
              >
                Sobre Mí
              </Link>
              <Link
                href="#portafolio"
                className="block text-white/80 hover:text-honey-gold transition-colors font-body"
              >
                Portafolio
              </Link>
              <Link
                href="#contacto"
                className="block text-white/80 hover:text-honey-gold transition-colors font-body"
              >
                Contacto
              </Link>
            </nav>
          </div>

          <div>
            <h4 className="text-lg font-title font-semibold mb-4">Sígueme</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-10 h-10 p-2 bg-honey-gold/20 rounded-full flex items-center justify-center hover:bg-honey-gold transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-honey-gold group-hover:text-white" />
                </Link>
              ))}
            </div>
            <p className="text-white/80 text-sm mt-4 font-body">
              ¡Conectemos y creemos contenido increíble juntas!
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 flex items-center justify-center gap-2 font-body">
            Hecho con <Heart className="h-4 w-4 text-honey-gold" /> para marcas
            que valoran la autenticidad
          </p>
          <p className="text-white/50 text-sm mt-2 font-body">
            © {new Date().getFullYear()} Jessi Torres UGC. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
