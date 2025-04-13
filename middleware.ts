import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Definir las redirecciones
const redirects: Record<string, string> = {
  "/installer": "https://github.com/cordlang/installer",
}

export function middleware(request: NextRequest) {
  // Obtener la ruta solicitada
  const path = request.nextUrl.pathname

  // Verificar si la ruta está en nuestras redirecciones
  if (path in redirects) {
    return NextResponse.redirect(redirects[path])
  }

  // Si no hay redirección, continuar con la solicitud
  return NextResponse.next()
}

// Configurar las rutas en las que se ejecutará el middleware
export const config = {
  matcher: ["/installer"],
}
