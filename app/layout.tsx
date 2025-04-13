import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import DevelopmentAlert from "@/components/development-alert"

// Inicializar la fuente JetBrains Mono con los pesos que necesitamos
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: "Cordlang | Software para Bots de Discord",
  description: "Un software de código abierto para crear bots de Discord de manera rápida y sencilla.",
  keywords: ["discord", "bot", "software", "cordlang", "bot de discord"],
  authors: [{ name: "Equipo Cordlang" }],
  creator: "Equipo Cordlang",
  publisher: "Cordlang",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://cordlang.com",
    siteName: "Cordlang",
    title: "Cordlang | Software para Bots de Discord",
    description: "Un software de código abierto para crear bots de Discord de manera rápida y sencilla.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cordlang - Software para Bots de Discord",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cordlang | Software para Bots de Discord",
    description: "Un software de código abierto para crear bots de Discord de manera rápida y sencilla.",
    creator: "@cordlang",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={jetbrainsMono.variable}>
      <body>
        <div className="grid-background"></div>
        <div className="glow glow-purple"></div>
        <div className="glow glow-blue"></div>
        <div className="glow glow-pink"></div>
        {children}
        <DevelopmentAlert />
      </body>
    </html>
  )
}


import './globals.css'