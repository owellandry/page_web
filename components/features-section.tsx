import { Terminal, Bot, Zap } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="heading text-2xl md:text-3xl lg:text-4xl text-white mb-4 md:mb-6">
            ¿Por qué elegir <span className="gradient-text">Cordlang</span>?
          </h2>
          <p className="text-gray max-w-2xl mx-auto text-sm md:text-base">
            Diseñado específicamente para el desarrollo de bots de Discord, Cordlang hace que crear bots potentes sea
            simple e intuitivo.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="feature-card">
            <div className="feature-icon bg-hot-pink/20 text-hot-pink">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-white">Simple y Potente</h3>
            <p className="text-gray text-sm md:text-base">
              Escribe menos código mientras construyes bots de Discord potentes con nuestra sintaxis intuitiva y
              ayudantes incorporados.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon bg-bright-blue/20 text-bright-blue">
              <Bot className="h-6 w-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-white">Enfocado en Discord</h3>
            <p className="text-gray text-sm md:text-base">
              Construido específicamente para Discord, con todas las características que necesitas para el desarrollo
              moderno de bots.
            </p>
          </div>
          <div className="feature-card sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none">
            <div className="feature-icon bg-lime-green/20 text-lime-green">
              <Terminal className="h-6 w-6" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-4 text-white">Basado en JavaScript</h3>
            <p className="text-gray text-sm md:text-base">
              Aprovecha tu conocimiento existente de JavaScript mientras disfrutas de las características especializadas
              de Discord de Cordlang.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
