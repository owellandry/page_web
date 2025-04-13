import Link from "next/link"
import { MessageSquare, Github, Twitter, ExternalLink } from "lucide-react"

export default function CommunitySection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading text-2xl md:text-3xl lg:text-4xl text-white mb-4 md:mb-6">
            Únete a Nuestra Comunidad
          </h2>
          <p className="text-gray mb-6 md:mb-10 max-w-2xl mx-auto text-sm md:text-base">
            Conéctate con otros desarrolladores de Cordlang, obtén ayuda y contribuye al proyecto.
          </p>
          <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="https://discord.gg/c4q85TkKnf"
              className="card p-4 md:p-6 hover:border-bright-blue/50 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-bright-blue mb-3 md:mb-4">
                <MessageSquare className="h-8 w-8 md:h-12 md:w-12 mx-auto" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">Servidor de Discord</h3>
              <p className="text-gray mb-3 md:mb-4 text-sm md:text-base">
                Únete a nuestra comunidad de Discord para soporte y actualizaciones
              </p>
              <div className="text-bright-blue font-bold flex items-center justify-center text-sm md:text-base">
                Unirse al Servidor <ExternalLink className="ml-1 h-3 w-3" />
              </div>
            </Link>
            <Link
              href="https://github.com/cordlang/CordLang"
              className="card p-4 md:p-6 hover:border-hot-pink/50 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-hot-pink mb-3 md:mb-4">
                <Github className="h-8 w-8 md:h-12 md:w-12 mx-auto" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">GitHub</h3>
              <p className="text-gray mb-3 md:mb-4 text-sm md:text-base">
                Contribuye al proyecto de código abierto en GitHub
              </p>
              <div className="text-hot-pink font-bold flex items-center justify-center text-sm md:text-base">
                @cordlang <ExternalLink className="ml-1 h-3 w-3" />
              </div>
            </Link>
            <Link
              href="https://twitter.com/cordlang"
              className="card p-4 md:p-6 hover:border-lime-green/50 transition-all sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-lime-green mb-3 md:mb-4">
                <Twitter className="h-8 w-8 md:h-12 md:w-12 mx-auto" />
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white">Twitter</h3>
              <p className="text-gray mb-3 md:mb-4 text-sm md:text-base">
                Síguenos para las últimas noticias y actualizaciones
              </p>
              <div className="text-lime-green font-bold flex items-center justify-center text-sm md:text-base">
                @cordlang <ExternalLink className="ml-1 h-3 w-3" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
