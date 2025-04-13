import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function GettingStarted() {
  return (
    <section className="py-12 md:py-16 lg:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="heading text-2xl md:text-3xl lg:text-4xl text-white mb-4 md:mb-6">Comienza en Minutos</h2>
          <p className="text-gray max-w-2xl mx-auto text-sm md:text-base">
            Sigue estos sencillos pasos para crear tu primer bot de Discord con Cordlang.
          </p>
        </div>
        <div className="mx-auto max-w-3xl space-y-4 md:space-y-6">
          <div className="card p-4 md:p-6">
            <div className="flex items-center mb-3 md:mb-4">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-hot-pink flex items-center justify-center text-white font-bold text-sm md:text-base">
                1
              </div>
              <h3 className="ml-2 md:ml-3 text-lg md:text-xl font-bold text-white">Descarga Cordlang</h3>
            </div>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
              </div>
              <div className="terminal-body">
                <code>
                  Descarga desde{" "}
                  <Link
                    href="https://github.com/cordlang/CordLang/releases"
                    className="text-bright-blue hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/cordlang/CordLang/releases
                  </Link>
                </code>
              </div>
            </div>
          </div>
          <div className="card p-4 md:p-6">
            <div className="flex items-center mb-3 md:mb-4">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-bright-blue flex items-center justify-center text-white font-bold text-sm md:text-base">
                2
              </div>
              <h3 className="ml-2 md:ml-3 text-lg md:text-xl font-bold text-white">Crea un nuevo bot</h3>
            </div>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
              </div>
              <div className="terminal-body">
                <code>coder init mi-bot-increible</code>
              </div>
            </div>
          </div>
          <div className="card p-4 md:p-6">
            <div className="flex items-center mb-3 md:mb-4">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-lime-green flex items-center justify-center text-white font-bold text-sm md:text-base">
                3
              </div>
              <h3 className="ml-2 md:ml-3 text-lg md:text-xl font-bold text-white">Ejecuta tu bot</h3>
            </div>
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
              </div>
              <div className="terminal-body">
                <code>cd mi-bot-increible coder run</code>
              </div>
            </div>
          </div>
          <div className="text-center mt-8 md:mt-10">
            <Link href="#" className="primary-button inline-flex items-center">
              Leer la guía completa
              <ChevronRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
