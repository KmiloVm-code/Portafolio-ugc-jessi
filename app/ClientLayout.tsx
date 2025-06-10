"use client"

import type React from "react"
import "./globals.css"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-body">{children}</body>
    </html>
  )
}
