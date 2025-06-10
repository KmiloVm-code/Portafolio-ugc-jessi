import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "UGC Creator - Contenido Auténtico",
  description: "Creadora de contenido UGC especializada en vida saludable y sostenible",
    generator: 'v0.dev'
}

import ClientLayout from "./ClientLayout"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <ClientLayout>{children}</ClientLayout>
}


import './globals.css'