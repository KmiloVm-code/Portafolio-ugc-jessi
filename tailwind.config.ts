import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#7A8471",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#D4A574",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#F4F1E8",
          foreground: "#4A5D3A",
        },
        accent: {
          DEFAULT: "#D4A574",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Nueva paleta "Bienestar Natural"
        "sage-green": "#7A8471", // Principal
        linen: "#F4F1E8", // Neutral
        "honey-gold": "#D4A574", // Secundario
        white: "#FFFFFF", // Fondo
        "deep-green": "#4A5D3A", // Acentos
      },
      fontFamily: {
        title: ["var(--font-tantangkiwood)"],
        body: ["var(--font-garet-book)"],
        script: ["var(--font-gwendolyn)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
      },
      maskImage: {
        'fade-bottom': 'linear-gradient(black 80%, transparent)',
        'fade-top': 'linear-gradient(transparent, black 20%)',
        'fade-both': 'linear-gradient(transparent, black 10%, black 90%, transparent)',
      }
    },  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities, theme }: any) {
      const maskUtilities = Object.entries(theme('maskImage')).reduce((acc: any, [key, value]) => {
        acc[`.mask-${key}`] = {
          '-webkit-mask-image': value,
          'mask-image': value,
        };
        return acc;
      }, {});
      
      addUtilities(maskUtilities);
    }
  ],
} satisfies Config

export default config
