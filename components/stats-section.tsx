export default function StatsSection() {
  return (
    <section className="py-10 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-4">
          <div className="card p-4 md:p-6 float float-delay-1">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-hot-pink mb-1 md:mb-2">
              10,000+
            </div>
            <div className="text-gray font-medium text-sm md:text-base">Desarrolladores</div>
          </div>
          <div className="card p-4 md:p-6 float">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-bright-blue mb-1 md:mb-2">
              50,000+
            </div>
            <div className="text-gray font-medium text-sm md:text-base">Bots de Discord</div>
          </div>
          <div className="card p-4 md:p-6 float float-delay-2">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-lime-green mb-1 md:mb-2">
              Open Source
            </div>
            <div className="text-gray font-medium text-sm md:text-base">Licencia MIT</div>
          </div>
          <div className="card p-4 md:p-6 float float-delay-1">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-neon-yellow mb-1 md:mb-2">
              Simple
            </div>
            <div className="text-gray font-medium text-sm md:text-base">Fácil de Aprender</div>
          </div>
        </div>
      </div>
    </section>
  )
}
