"use client"

import { useState } from "react"
import { X, AlertTriangle } from "lucide-react"

export default function DevelopmentAlert() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-darker-blue/90 backdrop-blur-md border border-hot-pink/30 rounded-lg shadow-lg p-4 flex items-start">
          <AlertTriangle className="h-5 w-5 text-hot-pink shrink-0 mt-0.5 mr-3" />
          <div className="flex-1">
            <p className="text-white text-sm md:text-base">
              <span className="font-bold text-hot-pink">Sitio en desarrollo:</span> Este sitio web está en fase de
              desarrollo activo. Algunas funciones pueden moverse de lugar, eliminarse o agregarse sin previo aviso.
              Agradecemos tu paciencia y feedback.
            </p>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="ml-3 text-gray hover:text-white transition-colors shrink-0"
            aria-label="Cerrar alerta"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
