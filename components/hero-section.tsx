import Link from "next/link"
import { Zap, Code } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="hero-section pt-24 pb-12 md:pt-32 lg:pt-40 md:pb-16 lg:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-12 md:gap-12 items-center">
          {/* Texto */}
          <div className="w-full space-y-4 md:space-y-8 md:col-span-6 z-10 mb-8 md:mb-0">
            <div>
              <span className="inline-block bg-hot-pink/20 text-hot-pink font-bold px-3 py-1 text-xs md:text-sm rounded-full mb-3 md:mb-4">
                PRESENTANDO CORDLANG
              </span>
              <h1 className="heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 text-white">
                Diseño <span className="text-hot-pink">increíblemente</span> bueno.
              </h1>
              <p className="text-gray text-base md:text-lg max-w-lg">
                Un lenguaje de programación especializado basado en JavaScript para crear potentes bots de Discord con
                código mínimo y máximo impacto.
              </p>
            </div>

            {/* Botones */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
              <Link
                href="https://github.com/cordlang/CordLang/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-button flex items-center justify-center text-sm"
              >
                <Zap className="mr-1.5 h-4 w-4" />
                Descargar Cordlang
              </Link>

              <Link href="#" className="secondary-button flex items-center justify-center text-sm">
                <Code className="mr-1.5 h-4 w-4" />
                Ver Documentación
              </Link>
            </div>
          </div>

          {/* Código */}
          <div className="w-full md:col-span-6 z-10">
            <div className="code-block">
              <div className="terminal-header">
                <div className="terminal-button terminal-button-red"></div>
                <div className="terminal-button terminal-button-yellow"></div>
                <div className="terminal-button terminal-button-green"></div>
                <div className="terminal-title">main.cxl</div>
              </div>
              <div className="terminal-body">
                <pre className="text-xs md:text-sm text-white whitespace-pre-wrap break-words">
                  <code>
                    <span className="code-comment">// main.cxl</span>
                    {"\n\n"}
                    <span className="code-keyword">imports</span>
                    {"\n  "}
                    <span className="code-function">prefix</span>
                    {"\n  "}
                    <span className="code-function">token</span>
                    {"\n\n"}
                    <span className="code-keyword">commands</span>
                    {"\n  "}
                    <span className="code-keyword">command</span>
                    {"\n      "}
                    <span className="code-function">name:</span> <span className="code-string">hola</span>
                    {"\n      "}
                    <span className="code-function">prefix:</span> true
                    {"\n      "}
                    <span className="code-function">command_slash:</span> true
                    {"\n      "}
                    <span className="code-function">description:</span>{" "}
                    <span className="code-string">"comando hola para el bot de discord hecho con cordlang"</span>
                    {"\n\n"}
                    <span className="code-function">bot</span>(ready
                    {"{"}El bot esta activo{"}"})
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
