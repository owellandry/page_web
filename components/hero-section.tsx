import Link from "next/link"
import { Zap, Code } from "lucide-react"
import SimpleInterface from "./simple-interface"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="hero-section pt-24 pb-12 md:pt-32 lg:pt-40 md:pb-16 lg:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-12 md:gap-12 items-center">
          {/* Texto */}
          <div className="w-full space-y-4 md:space-y-8 md:col-span-6 z-10 mb-8 md:mb-0">
            <div className="relative">
              <div className="absolute -top-16 -left-16 w-32 h-32 opacity-10">
                <Image
                  src="/cordlang-logo.png"
                  alt="Cordlang Logo"
                  width={128}
                  height={128}
                  className="animate-pulse"
                />
              </div>

              <span className="inline-block bg-hot-pink/20 text-hot-pink font-bold px-3 py-1 text-xs md:text-sm rounded-full mb-3 md:mb-4">
                PRESENTANDO CORDLANG
              </span>
              <h1 className="heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-white">
                Diseño <span className="text-hot-pink">increíblemente</span> bueno.
              </h1>
              <p className="text-gray text-base md:text-lg max-w-lg">
                Un software de código abierto para crear bots de Discord. Cordlang es una herramienta visual que te
                permite desarrollar bots de Discord arrastrando y soltando bloques, sin necesidad de escribir código.
              </p>
            </div>

            {/* Botones */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
              <Link
                href="https://github.com/cordlang/installer/releases/tag/release"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button flex items-center justify-center text-sm"
              >
                <Zap className="mr-1.5 h-4 w-4" />
                Descargar Cordlang
              </Link>

              <Link
                href="https://github.com/cordlang/CordLang"
                className="secondary-button flex items-center justify-center text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Code className="mr-1.5 h-4 w-4" />
                Ver en GitHub
              </Link>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <div className="bg-darker-blue/60 border border-white/10 rounded-full px-3 py-1 text-xs text-gray flex items-center">
                <span className="w-2 h-2 bg-lime-green rounded-full mr-2"></span>
                Visual Blocks
              </div>
              <div className="bg-darker-blue/60 border border-white/10 rounded-full px-3 py-1 text-xs text-gray flex items-center">
                <span className="w-2 h-2 bg-bright-blue rounded-full mr-2"></span>
                Drag & Drop
              </div>
              <div className="bg-darker-blue/60 border border-white/10 rounded-full px-3 py-1 text-xs text-gray flex items-center">
                <span className="w-2 h-2 bg-hot-pink rounded-full mr-2"></span>
                Sin código
              </div>
            </div>
          </div>

          {/* Animación de interfaz */}
          <div className="w-full md:col-span-6 z-10 h-[350px] md:h-[400px]">
            <SimpleInterface />
          </div>
        </div>
      </div>
    </section>
  )
}
