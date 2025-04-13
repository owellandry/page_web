import Link from "next/link"
import { ChevronRight, Download, MousePointer, Play } from "lucide-react"
import Image from "next/image"

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

        <div className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="card p-6 hover:border-hot-pink/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-hot-pink/20 flex items-center justify-center mb-4">
                <Download className="h-6 w-6 text-hot-pink" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">1. Descarga Cordlang</h3>
              <p className="text-gray text-sm mb-4">
                Descarga el instalador de Cordlang desde nuestro repositorio oficial en GitHub.
              </p>
              <Link
                href="https://github.com/cordlang/installer/releases/tag/release"
                className="text-hot-pink hover:underline text-sm flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar Installer <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
              <div className="mt-4">
                <Image
                  src="/step-download.png"
                  alt="Descarga Cordlang"
                  width={300}
                  height={150}
                  className="rounded-md border border-white/10"
                />
              </div>
            </div>

            <div className="card p-6 hover:border-bright-blue/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-bright-blue/20 flex items-center justify-center mb-4">
                <MousePointer className="h-6 w-6 text-bright-blue" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">2. Crea tu bot</h3>
              <p className="text-gray text-sm mb-4">
                Abre Cordlang y crea un nuevo proyecto. Arrastra y suelta bloques para definir el comportamiento de tu
                bot.
              </p>
              <div className="mt-4">
                <Image
                  src="/step-create.png"
                  alt="Crear bot con bloques"
                  width={300}
                  height={150}
                  className="rounded-md border border-white/10"
                />
              </div>
            </div>

            <div className="card p-6 hover:border-lime-green/30 transition-all">
              <div className="w-12 h-12 rounded-full bg-lime-green/20 flex items-center justify-center mb-4">
                <Play className="h-6 w-6 text-lime-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">3. Ejecuta tu bot</h3>
              <p className="text-gray text-sm mb-4">
                Haz clic en el botón "Ejecutar" para poner tu bot en línea y probarlo en tu servidor de Discord.
              </p>
              <div className="mt-4">
                <Image
                  src="/step-run.png"
                  alt="Ejecutar bot"
                  width={300}
                  height={150}
                  className="rounded-md border border-white/10"
                />
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="https://github.com/cordlang/CordLang"
              className="primary-button inline-flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver documentación completa
              <ChevronRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
