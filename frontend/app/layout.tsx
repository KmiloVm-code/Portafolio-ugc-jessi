import type React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jessi Torres UGC - Contenido Auténtico",
  description:
    "Creadora de contenido UGC amante de la vida saludable y sostenible",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/favicon/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

import ClientLayout from "./ClientLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}

import "./globals.css";
