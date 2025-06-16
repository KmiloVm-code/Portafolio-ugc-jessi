"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useSocialLinks } from "@/hooks/useSocialLinks";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openWhatsApp } = useSocialLinks();

  const navItems = [
    { href: "#inicio", label: "Inicio" },
    { href: "#sobre-mi", label: "Sobre Mí" },
    { href: "#portafolio", label: "Portafolio" },
    { href: "#por-que-elegirme", label: "¿Por qué elegirme?" },
    { href: "#contenido", label: "Contenido" },
    { href: "#contacto", label: "Contacto" },
  ];

  const handleNavClick = (href: string) => {
    const targetId = href.replace("#", "");
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Cerrar menú móvil si está abierto
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-sage-green/20 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavClick("#inicio")}
            className="text-2xl font-title font-bold text-sage-green"
          >
            Jessi Torres UGC
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                onClick={() => handleNavClick(item.href)}
                key={item.href}
                className="text-sm xl:text-base text-deep-green/80 hover:text-sage-green transition-colors font-medium font-body"
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => openWhatsApp()}
              className="bg-sage-green hover:bg-sage-green/90 text-white font-body"
            >
              Trabajemos Juntas
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-sage-green"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-sage-green/20">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  onClick={() => handleNavClick(item.href)}
                  key={item.href}
                  className="text-deep-green/80 hover:text-sage-green transition-colors font-medium font-body"
                >
                  {item.label}
                </button>
              ))}
              <Button className="bg-sage-green hover:bg-sage-green/90 text-white w-fit font-body">
                Trabajemos Juntas
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
