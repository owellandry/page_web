import Link from "next/link"
import { Download, MessageSquare } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-12 md:py-16 lg:py-24 relative black-section">
      <div className="fun-container">
        <div className="max-w-4xl mx-auto bg-white p-6 md:p-8 lg:p-12 text-center fun-card">
          <h2 className="fun-heading text-2xl md:text-3xl lg:text-4xl mb-3 md:mb-4">
            Ready to build your Discord bot?
          </h2>
          <p className="mb-6 md:mb-8 max-w-2xl mx-auto text-gray-700 text-sm md:text-base">
            Get started with Cordlang today and create powerful Discord bots in minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Link
              href="https://github.com/owellandry/CordLang/releases"
              className="fun-button bg-hotPink flex items-center justify-center w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Download Cordlang
            </Link>
            <Link
              href="https://discord.gg/c4q85TkKnf"
              className="fun-button bg-brightBlue flex items-center justify-center w-full sm:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Join Discord
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
