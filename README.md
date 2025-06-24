# 🎬 Portafolio UGC - Jessica Torres

> **Creadora de Contenido UGC especializada en Bienestar y Estilo de Vida**  
> Portafolio profesional desarrollado con Next.js 15 y Tailwind CSS

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/jessicapino4-7179s-projects/v0-creadora-de-contenido-ugc)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js_15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🌟 Descripción del Proyecto

Este es el portafolio profesional de **Jessica Torres** (@jesstorres_bienestar), una creadora de contenido UGC (User Generated Content) especializada en bienestar, estilo de vida y productos de consumo. El sitio web muestra su trabajo, experiencia y servicios de creación de contenido para marcas.

### ✨ Características Principales

- **🎥 Portafolio de Videos**: Integración con TikTok para mostrar contenido creado
- **📱 Diseño Responsivo**: Optimizado para todos los dispositivos
- **🎨 UI Moderna**: Interfaz elegante con componentes de shadcn/ui
- **⚡ Rendimiento Optimizado**: Construido con Next.js 15 y React 19
- **🌙 Modo Oscuro**: Soporte para temas claro y oscuro
- **📊 Filtros Avanzados**: Sistema de categorización de contenido
- **🏢 Sección de Marcas**: Showcase de colaboraciones
- **❓ FAQ Interactivo**: Preguntas frecuentes con acordeón

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 15**: Framework de React con App Router
- **React 19**: Biblioteca de interfaz de usuario
- **TypeScript**: Tipado estático para JavaScript
- **Tailwind CSS**: Framework de CSS utility-first

### UI/UX
- **shadcn/ui**: Componentes de interfaz de usuario
- **Radix UI**: Componentes primitivos accesibles
- **Lucide React**: Iconos modernos
- **next-themes**: Gestión de temas

### Herramientas de Desarrollo
- **ESLint**: Linting de código
- **PostCSS**: Procesamiento de CSS
- **pnpm**: Gestor de paquetes

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js 18+ 
- pnpm (recomendado) o npm

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/portafolio-ugc-jessi.git

# Navegar al directorio
cd portafolio-ugc-jessi

# Instalar dependencias
pnpm install

# Ejecutar en modo desarrollo
pnpm dev
```

### Scripts Disponibles

```bash
# Desarrollo
pnpm dev

# Construir para producción
pnpm build

# Ejecutar en producción
pnpm start

# Linting
pnpm lint
```

## 📁 Estructura del Proyecto

```
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
│   ├── ui/               # Componentes de UI reutilizables
│   ├── hero-section.tsx  # Sección hero
│   ├── about-section.tsx # Sección sobre mí
│   ├── portfolio-section.tsx # Portafolio de videos
│   └── ...               # Otros componentes
├── config/               # Configuración
│   └── portfolio.ts      # Configuración del portafolio
├── data/                 # Datos estáticos
│   ├── videos.ts         # Datos de videos
│   └── categories.ts     # Categorías de contenido
├── hooks/                # Custom React Hooks
├── lib/                  # Utilidades y funciones helper
├── types/                # Definiciones de tipos TypeScript
└── public/               # Archivos estáticos
```

## 🎨 Secciones del Portafolio

1. **Hero Section**: Presentación principal con llamada a la acción
2. **Sobre Mí**: Información personal y profesional
3. **Portafolio**: Galería de videos organizados por categorías
4. **Por qué Elegirme**: Ventajas competitivas y estadísticas
5. **Galería de Imágenes**: Showccase visual del trabajo
6. **Marcas Colaboradoras**: Logotipos de clientes y colaboraciones
7. **FAQ**: Preguntas frecuentes sobre servicios
8. **Contacto**: Información de contacto y redes sociales

## 🔧 Configuración

### Variables de Entorno

El proyecto utiliza configuración estática en `config/portfolio.ts`:

```typescript
export const PORTFOLIO_CONFIG = {
  username: "user_name",
} as const;
```

### Personalización

Para personalizar el contenido:

1. **Videos**: Edita `data/videos.ts`
2. **Categorías**: Modifica `data/categories.ts`
3. **Configuración**: Actualiza `config/portfolio.ts`
4. **Componentes**: Personaliza los componentes en `components/`

## 🌐 Despliegue

El proyecto está desplegado en **Vercel** y se actualiza automáticamente con cada push a la rama principal.

**URL de Producción**: [https://jessitorresugc.vercel.app](https://jessitorresugc.vercel.app)

### Despliegue Manual

```bash
# Construir para producción
pnpm build

# El directorio .next/ contiene los archivos para desplegar
```

## 📱 Redes Sociales

- **TikTok**: [@jesstorres_bienestar](https://www.tiktok.com/@jessitorres_ugc)
- **Instagram**: [Perfil de Instagram](https://www.instagram.com/jessitorres.ugc/)

## 🤝 Contribución

Este es un proyecto personal, pero si encuentras algún bug o tienes sugerencias de mejora, no dudes en abrir un issue.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

**Desarrollado con ❤️ por Kmilovm | © 2025**