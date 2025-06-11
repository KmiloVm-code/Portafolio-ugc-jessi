"use client";

import type React from "react";
import { useEffect } from "react";
import "./globals.css";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Suprimir errores específicos de TikTok
    const originalError = console.error;
    const originalWindowError = window.onerror;
    const originalUnhandledRejection = window.onunhandledrejection;

    console.error = (...args) => {
      const message = args[0]?.toString() || "";
      if (
        message.includes("getInstalledRelatedApps") ||
        message.includes("InvalidStateError") ||
        message.includes("top-level browsing contexts") ||
        message.includes("getRelatedApps failed")
      ) {
        return; // Suprimir estos errores específicos
      }
      originalError.apply(console, args);
    };

    window.onerror = (message, source, lineno, colno, error) => {
      if (
        typeof message === "string" &&
        (message.includes("getInstalledRelatedApps") ||
          message.includes("InvalidStateError") ||
          message.includes("top-level browsing contexts") ||
          message.includes("getRelatedApps failed"))
      ) {
        return true; // Prevenir que se muestre el error
      }
      if (originalWindowError) {
        return originalWindowError(message, source, lineno, colno, error);
      }
      return false;
    };
    window.onunhandledrejection = (event) => {
      const message = event.reason?.toString() || "";
      if (
        message.includes("getInstalledRelatedApps") ||
        message.includes("InvalidStateError") ||
        message.includes("top-level browsing contexts") ||
        message.includes("getRelatedApps failed")
      ) {
        event.preventDefault(); // Prevenir que se muestre el error
        return;
      }
      if (originalUnhandledRejection) {
        originalUnhandledRejection.call(window, event);
      }
    };

    return () => {
      console.error = originalError;
      window.onerror = originalWindowError;
      window.onunhandledrejection = originalUnhandledRejection;
    };
  }, []);
  return (
    <html lang="es">
      <body className="font-body">{children}</body>
    </html>
  );
}
