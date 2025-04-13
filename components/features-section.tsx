"use client"

import { Terminal, Bot, Rocket, Shield, MousePointer, Layers } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function FeaturesSection() {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)

  return (
    <section className="py-12 md:py-16 lg:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="heading text-2xl md:text-3xl lg:text-4xl text-white mb-4 md:mb-6">
            ¿Por qué elegir <span className="gradient-text">Cordlang</span>?
          </h2>
          <p className="text-gray max-w-2xl mx-auto text-sm md:text-base">
            Diseñado específicamente para el desarrollo de bots de Discord, Cordlang hace que crear bots potentes sea
            simple e intuitivo con su interfaz visual.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
            className={`feature-card group transition-all duration-500 ease-in-out ${
              hoveredFeature === "drag-drop" ? "sm:col-span-2 lg:col-span-3" : ""
            }`}
            onMouseEnter={() => setHoveredFeature("drag-drop")}
            onMouseLeave={() => setHoveredFeature(null)}
          >
            <div className="feature-icon bg-hot-pink/20 text-hot-pink group-hover:bg-hot-pink/30 transition-colors">
              <MousePointer className="h-6 w-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-white">Drag & Drop</h3>
            <p className="text-gray text-sm md:text-base">
              Crea bots de Discord simplemente arrastrando y soltando bloques visuales. No se necesita escribir código.
            </p>
            <div
              className={`mt-4 transition-all duration-500 ease-in-out ${
                hoveredFeature === "drag-drop" ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <div className="relative w-full h-[150px] md:h-[200px]">
                <Image
                  src="/feature-drag-drop.png"
                  alt="Interfaz drag and drop"
                  fill
                  className="rounded-md border border-white/10 object-cover"
                />
              </div>
            </div>
          </div>

          <div
            className={`feature-card group transition-all duration-500 ease-in-out ${
              hoveredFeature === "discord" ? "sm:col-span-2 lg:col-span-3" : ""
            }`}
            onMouseEnter={() => setHoveredFeature("discord")}
            onMouseLeave={() => setHoveredFeature(null)}
          >
            <div className="feature-icon bg-bright-blue/20 text-bright-blue group-hover:bg-bright-blue/30 transition-colors">
              <Bot className="h-6 w-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-white">Enfocado en Discord</h3>
            <p className="text-gray text-sm md:text-base">
              Construido específicamente para Discord, con bloques especializados para todas las funciones de la API de
              Discord.
            </p>
            <div
              className={`mt-4 transition-all duration-500 ease-in-out ${
                hoveredFeature === "discord" ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <div className="relative w-full h-[150px] md:h-[200px]">
                <Image
                  src="/feature-discord.png"
                  alt="Integración con Discord"
                  fill
                  className="rounded-md border border-white/10 object-cover"
                />
              </div>
            </div>
          </div>

          <div
            className={`feature-card group sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none transition-all duration-500 ease-in-out ${
              hoveredFeature === "fast" ? "sm:col-span-2 lg:col-span-3 sm:max-w-none" : ""
            }`}
            onMouseEnter={() => setHoveredFeature("fast")}
            onMouseLeave={() => setHoveredFeature(null)}
          >
            <div className="feature-icon bg-lime-green/20 text-lime-green group-hover:bg-lime-green/30 transition-colors">
              <Rocket className="h-6 w-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-white">Rápido Desarrollo</h3>
            <p className="text-gray text-sm md:text-base">
              Crea y despliega bots en minutos, no en horas. La interfaz visual de Cordlang simplifica todo el proceso
              de desarrollo.
            </p>
            <div
              className={`mt-4 transition-all duration-500 ease-in-out ${
                hoveredFeature === "fast" ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            >
              <div className="relative w-full h-[150px] md:h-[200px]">
                <Image
                  src="/feature-fast.png"
                  alt="Desarrollo rápido"
                  fill
                  className="rounded-md border border-white/10 object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Segunda fila de características */}
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-6 md:mt-8">
          <div className="feature-card group">
            <div className="feature-icon bg-neon-yellow/20 text-neon-yellow group-hover:bg-neon-yellow/30 transition-colors">
              <Layers className="h-6 w-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-white">Bloques Visuales</h3>
            <p className="text-gray text-sm md:text-base">
              Una biblioteca completa de bloques visuales que representan todas las funcionalidades necesarias para tu
              bot de Discord.
            </p>
          </div>

          <div className="feature-card group">
            <div className="feature-icon bg-purple/20 text-purple group-hover:bg-purple/30 transition-colors">
              <Terminal className="h-6 w-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-white">Vista Previa en Tiempo Real</h3>
            <p className="text-gray text-sm md:text-base">
              Visualiza cómo funcionará tu bot mientras lo construyes, con una vista previa en tiempo real de su
              comportamiento.
            </p>
          </div>

          <div className="feature-card group sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none">
            <div className="feature-icon bg-white/20 text-white group-hover:bg-white/30 transition-colors">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-white">Código Abierto</h3>
            <p className="text-gray text-sm md:text-base">
              Totalmente open source bajo licencia MIT. Contribuye, modifica y adapta Cordlang a tus necesidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
