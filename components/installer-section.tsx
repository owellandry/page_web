import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function InstallerSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
          {/* Sidebar izquierdo */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="flex flex-col items-center mb-8">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-hot-pink rounded-full flex items-center justify-center mb-4">
                <div className="text-white font-bold text-xl md:text-2xl">&lt;/&lt;/&gt;</div>
              </div>
              <h2 className="text-hot-pink text-2xl md:text-3xl font-bold mb-1">cordlang</h2>
              <p className="text-white text-lg">Installer</p>
            </div>

            {/* Terminal */}
            <div className="terminal-window mb-8">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <div className="terminal-title">main.cxl</div>
              </div>
              <div className="terminal-body">
                <p>
                  <span className="terminal-prompt">$ </span>
                  <span className="terminal-command">instalando cordlang</span>
                </p>
              </div>
            </div>

            {/* Pasos */}
            <div className="space-y-4">
              <div className="step-indicator">
                <div className="step-number">1</div>
                <div className="step-title">Requisitos</div>
              </div>
              <div className="step-indicator">
                <div className="step-number inactive">2</div>
                <div className="step-title inactive">Instalación</div>
              </div>
              <div className="step-indicator">
                <div className="step-number inactive">3</div>
                <div className="step-title inactive">Completado</div>
              </div>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <div className="card p-6 md:p-8 mb-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-hot-pink rounded-full flex items-center justify-center mr-4">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-white mb-1">Todo listo para instalar cordlang</h2>
                  <p className="text-gray">NVM encontrado en el sistema</p>
                </div>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full mb-8">
                <div className="progress-bar w-3/4"></div>
              </div>
              <div className="flex justify-center">
                <Link href="#" className="primary-button">
                  Instalar cordlang
                </Link>
              </div>
            </div>

            <div className="card p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-bold text-white mb-4">Requisitos del sistema</h3>
              <ul className="space-y-3 text-gray">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-hot-pink mr-2 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Node.js 14.0.0 o superior</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-hot-pink mr-2 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>NPM 6.0.0 o superior</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-hot-pink mr-2 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Conexión a Internet</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-hot-pink mr-2 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.75 12L10.58 14.83L16.25 9.17"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Cuenta de Discord para probar tu bot</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
