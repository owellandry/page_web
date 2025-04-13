import Link from "next/link"
import { Home, AlertTriangle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="grid-background"></div>
      <div className="glow glow-purple"></div>
      <div className="glow glow-blue"></div>
      <div className="glow glow-pink"></div>

      <div className="terminal-window max-w-2xl w-full">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">error.cxl</div>
        </div>
        <div className="terminal-body p-6 md:p-8">
          <div className="flex items-center justify-center mb-6">
            <AlertTriangle className="h-12 w-12 text-hot-pink mr-4" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Error 404</h1>
          </div>

          <div className="mb-6 text-center">
            <p className="text-gray mb-2">
              <span className="terminal-prompt">$</span> <span className="terminal-command">cd /ruta/solicitada</span>
            </p>
            <p className="text-hot-pink mb-4">Error: La ruta solicitada no existe en el sistema.</p>
            <p className="text-gray">El comando o la ruta que estás buscando no se encuentra en el sistema Cordlang.</p>
          </div>

          <div className="bg-darker-blue/50 border border-white/10 rounded-md p-4 mb-6">
            <p className="text-bright-blue font-bold mb-2">Sugerencias:</p>
            <ul className="text-gray space-y-2">
              <li className="flex items-start">
                <span className="text-lime-green mr-2">•</span>
                Verifica que la URL esté escrita correctamente
              </li>
              <li className="flex items-start">
                <span className="text-lime-green mr-2">•</span>
                Regresa a la página de inicio
              </li>
              <li className="flex items-start">
                <span className="text-lime-green mr-2">•</span>
                Explora la documentación
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/" className="primary-button">
              <Home className="mr-2 h-4 w-4" />
              Volver al Inicio
            </Link>
            <Link
              href="https://github.com/cordlang/CordLang"
              className="secondary-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver en GitHub
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
