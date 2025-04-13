export default function DiscordMessageDemo() {
  return (
    <section className="py-12 md:py-16 lg:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="heading text-2xl md:text-3xl lg:text-4xl text-white mb-4 md:mb-6">Míralo en Acción</h2>
            <p className="text-gray max-w-2xl mx-auto text-sm md:text-base">
              Cordlang facilita la creación de bots de Discord responsivos e interactivos.
            </p>
          </div>
          <div className="discord-message">
            <div className="discord-message-header">
              <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-black flex items-center justify-center text-white font-bold text-[8px] md:text-[11px]">
                &lt;/&lt;/&gt;
              </div>
              <div className="ml-2 font-medium text-white text-sm md:text-base">Bot Cordlang</div>
              <div className="ml-1 md:ml-2 text-[10px] md:text-xs px-1.5 py-0.5 md:px-2 md:py-0.5 rounded-md bg-[#5865f2] text-white flex items-center">
                <svg className="w-2.5 h-2.5 mr-0.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                </svg>
                APP
              </div>
            </div>
            <div className="discord-message-body">
              <div className="flex mb-4 md:mb-6">
                <div className="discord-avatar bg-black">
                  <span className="text-white text-xs">&lt;/&lt;/&gt;</span>
                </div>
                <div>
                  <div className="flex items-center flex-wrap">
                    <div className="discord-username">Bot Cordlang</div>
                    <div className="ml-1 md:ml-2 text-[10px] md:text-xs px-1.5 py-0.5 md:px-2 md:py-0.5 rounded-md bg-[#5865f2] text-white flex items-center">
                      <svg
                        className="w-2.5 h-2.5 mr-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                      APP
                    </div>
                    <div className="discord-timestamp">
                      Hoy a las {new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                  <div className="discord-content">
                    ¡Hola! Soy un bot creado con Cordlang. ¿Cómo puedo ayudarte hoy?
                  </div>
                </div>
              </div>
              <div className="flex mb-4 md:mb-6">
                <div className="discord-avatar bg-[#3ba55c]">
                  <span className="text-white text-xs">U</span>
                </div>
                <div>
                  <div className="flex items-center">
                    <div className="discord-username">Usuario</div>
                    <div className="discord-timestamp">
                      Hoy a las {new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                  <div className="discord-content">/hola</div>
                </div>
              </div>
              <div className="flex">
                <div className="discord-avatar bg-black">
                  <span className="text-white text-xs">&lt;/&lt;/&gt;</span>
                </div>
                <div>
                  <div className="flex items-center flex-wrap">
                    <div className="discord-username">Bot Cordlang</div>
                    <div className="ml-1 md:ml-2 text-[10px] md:text-xs px-1.5 py-0.5 md:px-2 md:py-0.5 rounded-md bg-[#5865f2] text-white flex items-center">
                      <svg
                        className="w-2.5 h-2.5 mr-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" fill="currentColor" />
                      </svg>
                      APP
                    </div>
                    <div className="discord-timestamp">
                      Hoy a las {new Date().toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}
                    </div>
                  </div>
                  <div className="discord-content">¡Hola Usuario! ¿Cómo estás?</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
