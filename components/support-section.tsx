import Link from "next/link"
import { Heart, Coffee, DollarSign } from "lucide-react"

export default function SupportSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading text-2xl md:text-3xl lg:text-4xl text-white mb-4 md:mb-6">
            Apoya a <span className="gradient-text">Cordlang</span>
          </h2>
          <p className="text-gray mb-6 md:mb-10 max-w-2xl mx-auto text-sm md:text-base">
            Cordlang es un proyecto de código abierto mantenido por la comunidad. Tu apoyo nos ayuda a seguir mejorando
            y desarrollando nuevas características.
          </p>

          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 max-w-2xl mx-auto">
            <Link
              href="https://patreon.com/cordlang"
              className="card p-6 md:p-8 hover:border-hot-pink/50 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-hot-pink mb-4 md:mb-6">
                <Heart className="h-10 w-10 md:h-14 md:w-14 mx-auto" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white">Patreon</h3>
              <p className="text-gray mb-4 md:mb-6 text-sm md:text-base">
                Conviértete en patrocinador y recibe acceso a características exclusivas y contenido anticipado.
              </p>
              <div className="primary-button flex items-center justify-center">
                <DollarSign className="mr-2 h-4 w-4" />
                Apoyar en Patreon
              </div>
            </Link>

            <Link
              href="https://ko-fi.com/cordlang"
              className="card p-6 md:p-8 hover:border-bright-blue/50 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-bright-blue mb-4 md:mb-6">
                <Coffee className="h-10 w-10 md:h-14 md:w-14 mx-auto" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-white">Ko-fi</h3>
              <p className="text-gray mb-4 md:mb-6 text-sm md:text-base">
                Invítanos a un café para ayudar a mantener el proyecto y agradecer nuestro trabajo.
              </p>
              <div className="secondary-button flex items-center justify-center bg-[#29abe0]/20 hover:bg-[#29abe0]/30 border-[#29abe0]/30">
                <Coffee className="mr-2 h-4 w-4" />
                Invitar a un café
              </div>
            </Link>
          </div>

          <div className="mt-10 md:mt-12 text-center">
            <p className="text-gray text-sm md:text-base">
              También puedes contribuir con código, documentación o reportando errores en nuestro{" "}
              <Link
                href="https://github.com/cordlang/CordLang"
                className="text-hot-pink hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                repositorio de GitHub
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
