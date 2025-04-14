"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function SimpleInterface() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Bloques de código para la interfaz estática
  const blocks = [
    {
      id: "event",
      color: "bg-neon-yellow",
      textColor: "text-black",
      text: "on message",
      top: "top-10",
      left: "left-10",
      width: "w-44",
      height: "h-12",
    },
    {
      id: "if",
      color: "bg-lime-green",
      textColor: "text-white",
      text: "if",
      top: "top-[120px]",
      left: "left-10",
      width: "w-32",
      height: "h-12",
    },
    {
      id: "else",
      color: "bg-bright-blue",
      textColor: "text-white",
      text: "else",
      top: "top-[120px]",
      left: "left-[200px]",
      width: "w-32",
      height: "h-12",
    },
    {
      id: "message",
      color: "bg-purple",
      textColor: "text-white",
      text: "send message",
      top: "top-[230px]",
      left: "left-10",
      width: "w-44",
      height: "h-12",
    },
  ]

  // Líneas conectoras
  const lines = [
    {
      id: "line1",
      top: "top-[88px]",
      left: "left-[28px]",
      height: "h-8",
      width: "w-0.5",
      className: "bg-white/50",
    },
    {
      id: "line2",
      top: "top-[120px]",
      left: "left-[160px]",
      height: "h-0.5",
      width: "w-20",
      className: "bg-white/50",
    },
    {
      id: "line3",
      top: "top-[198px]",
      left: "left-[28px]",
      height: "h-8",
      width: "w-0.5",
      className: "bg-white/50",
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
            <motion.div
              className="bg-neon-yellow text-black w-40 h-12 rounded-lg flex items-center justify-center font-medium shadow-lg cursor-grab"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              on message
            </motion.div>
            <motion.div
              className="bg-lime-green text-white w-32 h-12 rounded-lg flex items-center justify-center font-medium shadow-lg cursor-grab"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              if
            </motion.div>
            <motion.div
              className="bg-bright-blue text-white w-32 h-12 rounded-lg flex items-center justify-center font-medium shadow-lg cursor-grab"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              else
            </motion.div>
            <motion.div
              className="bg-purple text-white w-44 h-12 rounded-lg flex items-center justify-center font-medium shadow-lg cursor-grab"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              send message
            </motion.div>
            <motion.div
              className="bg-hot-pink text-white w-40 h-12 rounded-lg flex items-center justify-center font-medium shadow-lg cursor-grab"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              command
            </motion.div>
          </div>
        </div>

        {/* Área de trabajo */}
        <div className="flex-1 p-6 relative">
          {/* Cuadrícula de fondo - MODIFICADA para que no bloquee interacciones */}
          <div className="absolute inset-0 grid-background opacity-20 pointer-events-none"></div>

          {/* Bloques conectados (estáticos) */}
          <div className="relative h-full">
            {/* Bloques */}
            {blocks.map((block) => (
              <div
                key={block.id}
                className={`absolute ${block.top} ${block.left} ${block.color} ${block.textColor} ${block.width} ${block.height} rounded-lg flex items-center justify-center font-medium shadow-lg`}
              >
                {block.text}
              </div>
            ))}

            {/* Líneas conectoras */}
            {lines.map((line) => (
              <div
                key={line.id}
                className={`absolute ${line.top} ${line.left} ${line.height} ${line.width} ${line.className}`}
              ></div>
            ))}

            {/* Vista previa */}
            <div className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <div className="text-white text-sm">
                <div className="font-bold mb-2">Vista previa:</div>
                <div className="text-gray-300">
                  Cuando recibas un mensaje, si contiene &quot;hola&quot;, responde con &quot;¡Hola! ¿Cómo estás?&quot;
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos flotantes */}
      <motion.div
        className="absolute bottom-10 right-10 text-hot-pink text-opacity-20 text-4xl pointer-events-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        &lt;/&gt;
      </motion.div>

      <motion.div
        className="absolute top-20 left-10 text-bright-blue text-opacity-20 text-2xl pointer-events-none"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      >
        {}
      </motion.div>
    </div>
  )
}
