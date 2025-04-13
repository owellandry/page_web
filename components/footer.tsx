import Link from "next/link"
import {
  Github,
  Twitter,
  MessageSquare,
  Mail,
  ExternalLink,
  Download,
  FileCode,
  BookOpen,
  Youtube,
  Heart,
  Coffee,
  Shield,
  FileText,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="footer py-8 md:py-12 lg:py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="bg-hot-pink text-white font-bold text-base md:text-xl p-1.5 md:p-2 rounded-full">
                &lt;/&lt;/&gt;
              </div>
              <span className="text-white font-bold text-base md:text-xl">Cordlang</span>
            </div>
            <p className="text-gray mb-4 md:mb-6 text-sm md:text-base">
              Un lenguaje de programación especializado para crear bots de Discord con código mínimo.
            </p>
            <p className="text-gray/70 text-xs md:text-sm">
              Cordlang no está afiliado con Discord. Este es un proyecto de código abierto.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Producto</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="https://github.com/cordlang/CordLang"
                  className="text-gray hover:text-hot-pink transition-colors flex items-center text-sm md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="inline-block mr-2 h-4 w-4 text-neon-yellow" />
                  Descargar
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray hover:text-hot-pink transition-colors flex items-center text-sm md:text-base"
                >
                  <BookOpen className="inline-block mr-2 h-4 w-4 text-bright-blue" />
                  Documentación
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray hover:text-hot-pink transition-colors flex items-center text-sm md:text-base"
                >
                  <FileCode className="inline-block mr-2 h-4 w-4 text-lime-green" />
                  Ejemplos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Redes Sociales</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="https://github.com/cordlang/CordLang"
                  className="text-gray hover:text-hot-pink transition-colors flex items-center text-sm md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="inline-block mr-2 h-4 w-4 text-white" />
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://discord.com/invite/c4q85TkKnf"
                  className="text-gray hover:text-hot-pink transition-colors flex items-center text-sm md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquare className="inline-block mr-2 h-4 w-4 text-[#5865F2]" />
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/cordlang"
                  className="text-gray hover:text-hot-pink transition-colors flex items-center text-sm md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="inline-block mr-2 h-4 w-4 text-[#1DA1F2]" />
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="https://youtube.com/@cordlang"
                  className="text-gray hover:text-hot-pink transition-colors flex items-center text-sm md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Youtube className="inline-block mr-2 h-4 w-4 text-[#FF0000]" />
                  YouTube
                </Link>
              </li>
              <li>
                <Link
                  href="https://patreon.com/cordlang"
                  className="text-gray hover:text-hot-pink transition-colors flex items-center text-sm md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heart className="inline-block mr-2 h-4 w-4 text-[#FF424D]" />
                  Patreon
                </Link>
              </li>
              <li>
                <Link
                  href="https://ko-fi.com/cordlang"
                  className="text-gray hover:text-hot-pink transition-colors flex items-center text-sm md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Coffee className="inline-block mr-2 h-4 w-4 text-[#29ABE0]" />
                  Ko-fi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white">Contacto</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>
                <Link
                  href="mailto:support@cordlang.com"
                  className="text-gray hover:text-hot-pink transition-colors flex items-center text-sm md:text-base"
                >
                  <Mail className="inline-block mr-2 h-4 w-4 text-hot-pink" />
                  support@cordlang.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/cordlang/CordLang"
                  className="text-gray hover:text-hot-pink transition-colors flex items-center text-sm md:text-base"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="inline-block mr-2 h-4 w-4 text-bright-blue" />
                  Última Versión
                </Link>
              </li>
              <li>
                <Link
                  href="https://cordlang.com"
                  className="text-gray hover:text-hot-pink transition-colors flex items-center text-sm md:text-base"
                >
                  <ExternalLink className="inline-block mr-2 h-4 w-4 text-lime-green" />
                  cordlang.com
                </Link>
              </li>
              <li>
                <Link
                  href="/terminos"
                  className="text-gray hover:text-hot-pink transition-colors flex items-center text-sm md:text-base"
                >
                  <FileText className="inline-block mr-2 h-4 w-4 text-gray" />
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link
                  href="/privacidad"
                  className="text-gray hover:text-hot-pink transition-colors flex items-center text-sm md:text-base"
                >
                  <Shield className="inline-block mr-2 h-4 w-4 text-gray" />
                  Políticas de Privacidad
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px bg-white/10 my-6 md:my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray/70 text-xs md:text-sm">
            © {new Date().getFullYear()} Cordlang. Todos los derechos reservados.
            <span className="mx-2">|</span>
            <Link href="/terminos" className="hover:text-hot-pink transition-colors">
              Términos
            </Link>
            <span className="mx-2">|</span>
            <Link href="/privacidad" className="hover:text-hot-pink transition-colors">
              Privacidad
            </Link>
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
            <Link
              href="https://github.com/cordlang/CordLang"
              className="text-gray hover:text-hot-pink transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://discord.com/invite/c4q85TkKnf"
              className="text-gray hover:text-hot-pink transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="h-5 w-5" />
              <span className="sr-only">Discord</span>
            </Link>
            <Link
              href="https://x.com/cordlang"
              className="text-gray hover:text-hot-pink transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://youtube.com/@cordlang"
              className="text-gray hover:text-hot-pink transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="h-5 w-5" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
