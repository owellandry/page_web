"use client"

import Link from "next/link"
import { Menu, X, Wifi, Volume2, Battery, Bell } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState("")
  const [currentDate, setCurrentDate] = useState("")

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" }))
      setCurrentDate(now.toLocaleDateString("es-ES", { day: "2-digit", month: "short" }))
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 topbar">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Izquierda */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-white font-medium">
            Actividades
          </Link>
          <div className="flex items-center bg-hot-pink/20 px-3 py-1 rounded-full">
            <svg
              className="w-4 h-4 mr-2 text-hot-pink"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.6 8.97L7.11 11.46C6.82 11.75 6.82 12.24 7.11 12.53L9.6 15.02"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.4 8.97L16.89 11.46C17.18 11.75 17.18 12.24 16.89 12.53L14.4 15.02"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-white text-sm">cordlang</span>
          </div>
        </div>

        {/* Centro */}
        <div className="hidden md:block text-center text-sm text-white">
          <span>{currentDate}</span>
          <span className="mx-2">{currentTime}</span>
        </div>

        {/* Derecha */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-3">
            <Bell className="h-4 w-4 text-white" />
            <Wifi className="h-4 w-4 text-white" />
            <Volume2 className="h-4 w-4 text-white" />
            <Battery className="h-4 w-4 text-white" />
          </div>

          {/* Botón de menú móvil */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`absolute top-full left-0 right-0 bg-darker-blue/95 backdrop-blur-md transition-transform ${
          mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } duration-300 ease-in-out md:hidden`}
      >
        <nav className="container mx-auto py-4">
          <ul className="space-y-3">
            {["Inicio", "Documentación", "Ejemplos", "Comunidad", "GitHub", "Descargar"].map((item, index) => (
              <li key={index}>
                <Link
                  href={
                    item === "GitHub"
                      ? "https://github.com/cordlang/CordLang"
                      : item === "Descargar"
                        ? "https://github.com/cordlang/CordLang/releases"
                        : item === "Comunidad"
                          ? "https://discord.gg/c4q85TkKnf"
                          : "#"
                  }
                  className="block text-white font-medium hover:text-hot-pink transition-colors py-2 text-lg flex items-center"
                  target={["GitHub", "Descargar", "Comunidad"].includes(item) ? "_blank" : undefined}
                  rel={["GitHub", "Descargar", "Comunidad"].includes(item) ? "noopener noreferrer" : undefined}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
