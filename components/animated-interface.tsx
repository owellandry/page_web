"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function AnimatedInterface() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (step < 4) {
        setStep(step + 1)
      } else {
        setStep(0) // Reiniciar la animación
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [step])

  useEffect(() => {
    // Efecto de partículas flotantes
    if (!containerRef.current) return

    const container = containerRef.current
    const width = container.offsetWidth
    const height = container.offsetHeight

    // Crear partículas
    const particleCount = 30
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "absolute rounded-full opacity-20"

      // Tamaño aleatorio
      const size = Math.random() * 6 + 2
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`

      // Posición aleatoria
      particle.style.left = `${Math.random() * width}px`
      particle.style.top = `${Math.random() * height}px`

      // Color aleatorio
      const colors = ["bg-hot-pink", "bg-bright-blue", "bg-lime-green", "bg-neon-yellow", "bg-purple"]
      particle.classList.add(colors[Math.floor(Math.random() * colors.length)])

      // Animación
      particle.animate(
        [
          { transform: `translate(0, 0)` },
          { transform: `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px)` },
        ],
        {
          duration: 2000 + Math.random() * 3000,
          direction: "alternate",
          iterations: Number.POSITIVE_INFINITY,
          easing: "ease-in-out",
        },
      )

      container.appendChild(particle)
    }

    return () => {
      // Limpiar partículas al desmontar
      const particles = container.querySelectorAll("div.absolute.rounded-full")
      particles.forEach((particle) => particle.remove())
    }
  }, [])

  // Bloques de código para la animación
  const blocks = [
    {
      id: "command",
      color: "bg-hot-pink",
      textColor: "text-white",
      text: "command",
      width: "w-40",
      height: "h-12",
    },
    {
      id: "if",
      color: "bg-lime-green",
      textColor: "text-white",
      text: "if",
      width: "w-32",
      height: "h-12",
    },
    {
      id: "else",
      color: "bg-bright-blue",
      textColor: "text-white",
      text: "else",
      width: "w-32",
      height: "h-12",
    },
    {
      id: "message",
      color: "bg-purple",
      textColor: "text-white",
      text: "send message",
      width: "w-44",
      height: "h-12",
    },
    {
      id: "event",
      color: "bg-neon-yellow",
      textColor: "text-black",
      text: "on message",
      width: "w-40",
      height: "h-12",
    },
  ]

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#3b3b87] to-[#1a1a40] backdrop-blur-sm"></div>

      {/* Interfaz de Cordlang */}
      <div className="relative z-10 h-full flex">
        {/* Panel lateral */}
        <div className="w-1/4 h-full bg-[#1a1a40]/80 border-r border-white/10 p-4">
          <div className="text-white font-bold mb-4 text-center">Bloques</div>
          <div className="space-y-3">
            {blocks.map((block) => (
              <motion.div
                key={block.id}
                className={`${block.color} ${block.textColor} ${block.width} ${block.height} rounded-lg flex items-center justify-center font-medium shadow-lg cursor-grab`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {block.text}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Área de trabajo */}
        <div className="flex-1 p-6 relative">
          {/* Cuadrícula de fondo */}
          <div className="absolute inset-0 grid-background opacity-20"></div>

          {/* Animación de bloques conectándose */}
          <div className="relative h-full">
            {/* Bloque 1: on message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: step >= 0 ? 1 : 0,
                y: step >= 0 ? 0 : 20,
              }}
              transition={{ duration: 0.5 }}
              className="absolute top-10 left-10"
            >
              <div className="bg-neon-yellow text-black w-44 h-12 rounded-lg flex items-center justify-center font-medium shadow-lg">
                on message
              </div>
            </motion.div>

            {/* Línea conectora 1 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: step >= 1 ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="absolute top-[88px] left-[28px] h-8 w-0.5 bg-white/50"
            ></motion.div>

            {/* Bloque 2: if */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: step >= 1 ? 1 : 0,
                y: step >= 1 ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-[120px] left-10"
            >
              <div className="bg-lime-green text-white w-32 h-12 rounded-lg flex items-center justify-center font-medium shadow-lg">
                if
              </div>
            </motion.div>

            {/* Línea conectora 2 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: step >= 2 ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="absolute top-[120px] left-[160px] h-0.5 w-20 bg-white/50"
            ></motion.div>

            {/* Bloque 3: else */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: step >= 2 ? 1 : 0,
                x: step >= 2 ? 0 : -20,
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-[120px] left-[200px]"
            >
              <div className="bg-bright-blue text-white w-32 h-12 rounded-lg flex items-center justify-center font-medium shadow-lg">
                else
              </div>
            </motion.div>

            {/* Línea conectora 3 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: step >= 3 ? 1 : 0,
              }}
              transition={{ duration: 0.5 }}
              className="absolute top-[198px] left-[28px] h-8 w-0.5 bg-white/50"
            ></motion.div>

            {/* Bloque 4: send message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: step >= 3 ? 1 : 0,
                y: step >= 3 ? 0 : 20,
              }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute top-[230px] left-10"
            >
              <div className="bg-purple text-white w-44 h-12 rounded-lg flex items-center justify-center font-medium shadow-lg">
                send message
              </div>
            </motion.div>

            {/* Vista previa */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: step >= 4 ? 1 : 0,
                scale: step >= 4 ? 1 : 0.8,
              }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20"
            >
              <div className="text-white text-sm">
                <div className="font-bold mb-2">Vista previa:</div>
                <div className="text-gray-300">
                  Cuando recibas un mensaje, si contiene &quot;hola&quot;, responde con &quot;¡Hola! ¿Cómo estás?&quot;
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Elementos flotantes */}
      <motion.div
        className="absolute bottom-10 right-10 text-hot-pink text-opacity-20 text-4xl"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        &lt;/&gt;
      </motion.div>

      <motion.div
        className="absolute top-20 left-10 text-bright-blue text-opacity-20 text-2xl"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        {}
      </motion.div>
    </div>
  )
}
