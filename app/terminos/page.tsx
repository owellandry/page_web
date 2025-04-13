import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TerminosCondiciones() {
  return (
    <div className="min-h-screen pt-16">
      <Header />

      <main className="py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading text-2xl md:text-3xl lg:text-4xl text-white mb-6 md:mb-8">Términos y Condiciones</h1>

            <div className="card p-6 md:p-8 lg:p-10">
              <div className="prose prose-invert max-w-none">
                <p className="text-gray mb-6">
                  Última actualización:{" "}
                  {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">1. Introducción</h2>
                <p className="text-gray mb-4">
                  Bienvenido a Cordlang. Estos Términos y Condiciones rigen el uso de nuestro sitio web y software,
                  disponible en{" "}
                  <Link href="/" className="text-hot-pink hover:underline">
                    cordlang.com
                  </Link>{" "}
                  y en{" "}
                  <Link
                    href="https://github.com/cordlang/CordLang"
                    className="text-hot-pink hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Link>
                  .
                </p>
                <p className="text-gray mb-4">
                  Al acceder a nuestro sitio web o utilizar nuestro software, aceptas estos términos en su totalidad. Si
                  no estás de acuerdo con estos términos, no debes utilizar nuestro sitio web o software.
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">2. Licencia de Software</h2>
                <p className="text-gray mb-4">
                  Cordlang es un software de código abierto distribuido bajo la licencia MIT. Esto significa que puedes:
                </p>
                <ul className="list-disc pl-6 text-gray mb-4 space-y-2">
                  <li>Usar el software para cualquier propósito</li>
                  <li>Estudiar cómo funciona el software y adaptarlo a tus necesidades</li>
                  <li>Redistribuir el software</li>
                  <li>Mejorar el software y publicar tus mejoras</li>
                </ul>
                <p className="text-gray mb-4">
                  Para más detalles, consulta el texto completo de la licencia MIT incluido en nuestro repositorio de
                  GitHub.
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">3. Uso Aceptable</h2>
                <p className="text-gray mb-4">Al utilizar Cordlang, aceptas no:</p>
                <ul className="list-disc pl-6 text-gray mb-4 space-y-2">
                  <li>
                    Utilizar nuestro software para actividades ilegales o que violen los términos de servicio de Discord
                  </li>
                  <li>Intentar dañar, deshabilitar o sobrecargar nuestros servidores o redes</li>
                  <li>Acceder a áreas del sitio web o sistemas a los que no se te ha concedido acceso</li>
                  <li>Utilizar el software para enviar spam, phishing o cualquier tipo de contenido malicioso</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">4. Limitación de Responsabilidad</h2>
                <p className="text-gray mb-4">
                  Cordlang se proporciona "tal cual", sin garantías de ningún tipo, expresas o implícitas. No somos
                  responsables de:
                </p>
                <ul className="list-disc pl-6 text-gray mb-4 space-y-2">
                  <li>
                    Cualquier daño directo, indirecto, incidental, especial o consecuente que resulte del uso de nuestro
                    software
                  </li>
                  <li>Cualquier pérdida de datos, beneficios o ingresos</li>
                  <li>Interrupciones en el servicio o fallos técnicos</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">5. Cambios en los Términos</h2>
                <p className="text-gray mb-4">
                  Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en
                  vigor inmediatamente después de su publicación en el sitio web. Es tu responsabilidad revisar
                  periódicamente estos términos.
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">6. Ley Aplicable</h2>
                <p className="text-gray mb-4">
                  Estos términos se rigen por las leyes internacionales de derechos de autor y propiedad intelectual
                  aplicables.
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">7. Contacto</h2>
                <p className="text-gray mb-4">
                  Si tienes alguna pregunta sobre estos términos, puedes contactarnos en:
                </p>
                <p className="text-gray mb-4">
                  <Link href="mailto:support@cordlang.com" className="text-hot-pink hover:underline">
                    support@cordlang.com
                  </Link>
                </p>

                <div className="mt-10 pt-6 border-t border-white/10">
                  <p className="text-gray text-sm">
                    Nota: Este documento es una versión simplificada de nuestros términos y condiciones. Para proyectos
                    comerciales o de gran escala, te recomendamos consultar con un asesor legal.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/" className="primary-button">
                Volver al Inicio
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
