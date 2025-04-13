import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import StatsSection from "@/components/stats-section"
import FeaturesSection from "@/components/features-section"
import DiscordMessageDemo from "@/components/discord-message-demo"
import GettingStarted from "@/components/getting-started"
import CommunitySection from "@/components/community-section"
import SupportSection from "@/components/support-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen pt-16">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <DiscordMessageDemo />
      <GettingStarted />
      <CommunitySection />
      <SupportSection />
      <Footer />
    </div>
  )
}
