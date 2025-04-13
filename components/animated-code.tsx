"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export default function AnimatedCode() {
  const containerRef = useRef<HTMLDivElement>(null)

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
      const particles = container.querySelectorAll("div")
      particles.forEach((particle) => particle.remove())
    }
  }, [])

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-to-br from-darker-blue/80 to-black/80 backdrop-blur-sm"></div>

      {/* Terminal con código animado */}
      <div className="relative z-10 h-full">
        <div className="terminal-header">
          <div className="terminal-button terminal-button-red"></div>
          <div className="terminal-button terminal-button-yellow"></div>
          <div className="terminal-button terminal-button-green"></div>
          <div className="terminal-title">cordlang.cxl</div>
        </div>

        <div className="terminal-body p-4 md:p-6 h-[calc(100%-40px)] flex flex-col">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="mb-4">
            <span className="text-gray">$</span> <span className="text-bright-blue">cordlang</span>{" "}
            <span className="text-hot-pink">init</span> <span className="text-lime-green">mi-bot-increible</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mb-4"
          >
            <span className="text-gray">Creando proyecto de bot...</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "70%" }}
            transition={{ duration: 1.5, delay: 1.2 }}
            className="h-2 bg-gradient-to-r from-hot-pink via-purple to-bright-blue rounded-full mb-4"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.7 }}
            className="mb-4"
          >
            <span className="text-lime-green">✓</span> <span className="text-white">Proyecto creado correctamente</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.2 }}
            className="mb-4"
          >
            <span className="text-gray">$</span> <span className="text-bright-blue">cd</span>{" "}
            <span className="text-lime-green">mi-bot-increible</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.7 }}
            className="mb-4"
          >
            <span className="text-gray">$</span> <span className="text-bright-blue">cordlang</span>{" "}
            <span className="text-hot-pink">run</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 4.2 }}
            className="mb-4"
          >
            <span className="text-gray">Iniciando bot...</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 4.7 }}
            className="text-lime-green"
          >
            <span className="text-lime-green">✓</span> <span className="text-white">Bot conectado a Discord</span>
          </motion.div>

          {/* Cursor parpadeante */}
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            className="w-2 h-5 bg-white mt-2"
          ></motion.div>
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
