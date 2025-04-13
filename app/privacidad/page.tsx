import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PoliticasPrivacidad() {
  return (
    <div className="min-h-screen pt-16">
      <Header />

      <main className="py-12 md:py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="heading text-2xl md:text-3xl lg:text-4xl text-white mb-6 md:mb-8">
              Políticas de Privacidad
            </h1>

            <div className="card p-6 md:p-8 lg:p-10">
              <div className="prose prose-invert max-w-none">
                <p className="text-gray mb-6">
                  Última actualización:{" "}
                  {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">1. Introducción</h2>
                <p className="text-gray mb-4">
                  En Cordlang, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta
                  política de privacidad te informará sobre cómo cuidamos tus datos personales cuando visitas nuestro
                  sitio web o utilizas nuestro software, independientemente de dónde lo visites o utilices.
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">2. Datos que Recopilamos</h2>
                <p className="text-gray mb-4">Nuestro sitio web recopila información limitada:</p>
                <ul className="list-disc pl-6 text-gray mb-4 space-y-2">
                  <li>Información técnica: dirección IP, tipo de navegador, sistema operativo</li>
                  <li>Información de uso: páginas visitadas, tiempo de permanencia en el sitio</li>
                  <li>Cookies: pequeños archivos de texto almacenados en tu dispositivo</li>
                </ul>
                <p className="text-gray mb-4">
                  El software Cordlang en sí no recopila datos personales. Sin embargo, los bots que crees con Cordlang
                  pueden recopilar datos según cómo los configures. Es tu responsabilidad asegurarte de que tus bots
                  cumplan con las leyes de protección de datos aplicables.
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">3. Cómo Utilizamos tus Datos</h2>
                <p className="text-gray mb-4">Utilizamos los datos recopilados para:</p>
                <ul className="list-disc pl-6 text-gray mb-4 space-y-2">
                  <li>Mejorar nuestro sitio web y software</li>
                  <li>Analizar el uso del sitio para optimizar la experiencia del usuario</li>
                  <li>Administrar y mantener la seguridad de nuestro sitio</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">4. Cookies</h2>
                <p className="text-gray mb-4">
                  Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Puedes configurar tu navegador
                  para rechazar todas las cookies o para que te avise cuando se envíe una cookie. Sin embargo, si
                  rechazas las cookies, es posible que algunas partes de nuestro sitio no funcionen correctamente.
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">5. Compartir tus Datos</h2>
                <p className="text-gray mb-4">
                  No vendemos, comerciamos ni transferimos de ninguna otra manera tus datos personales a terceros. Esto
                  no incluye terceros de confianza que nos ayudan a operar nuestro sitio web o a servirte, siempre que
                  esos terceros acuerden mantener esta información confidencial.
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">6. Seguridad de los Datos</h2>
                <p className="text-gray mb-4">
                  Implementamos medidas de seguridad para mantener la seguridad de tu información personal. Sin embargo,
                  ninguna transmisión por Internet o método de almacenamiento electrónico es 100% seguro, por lo que no
                  podemos garantizar su seguridad absoluta.
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">7. Tus Derechos</h2>
                <p className="text-gray mb-4">Dependiendo de tu ubicación, puedes tener los siguientes derechos:</p>
                <ul className="list-disc pl-6 text-gray mb-4 space-y-2">
                  <li>Derecho a acceder a tus datos personales</li>
                  <li>Derecho a rectificar datos inexactos</li>
                  <li>Derecho a la eliminación de tus datos</li>
                  <li>Derecho a restringir el procesamiento de tus datos</li>
                  <li>Derecho a la portabilidad de los datos</li>
                  <li>Derecho a oponerte al procesamiento de tus datos</li>
                </ul>

                <h2 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">
                  8. Cambios en nuestra Política de Privacidad
                </h2>
                <p className="text-gray mb-4">
                  Podemos actualizar nuestra política de privacidad de vez en cuando. Te notificaremos cualquier cambio
                  publicando la nueva política de privacidad en esta página y, si los cambios son significativos, te
                  enviaremos una notificación.
                </p>

                <h2 className="text-xl md:text-2xl font-bold text-white mt-8 mb-4">9. Contacto</h2>
                <p className="text-gray mb-4">
                  Si tienes alguna pregunta sobre esta política de privacidad, puedes contactarnos en:
                </p>
                <p className="text-gray mb-4">
                  <Link href="mailto:support@cordlang.com" className="text-hot-pink hover:underline">
                    support@cordlang.com
                  </Link>
                </p>

                <div className="mt-10 pt-6 border-t border-white/10">
                  <p className="text-gray text-sm">
                    Nota: Esta política de privacidad está diseñada para cumplir con las regulaciones generales de
                    protección de datos. Para aplicaciones comerciales o que manejen datos sensibles, te recomendamos
                    consultar con un asesor legal.
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
