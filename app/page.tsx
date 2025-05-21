import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { EpisodesSection } from "@/components/episodes-section"
import { NewsletterStandalone } from "@/components/newsletter-standalone"
import { AboutSection } from "@/components/about-section"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 noise-bg pointer-events-none"></div>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <EpisodesSection />
        <AboutSection />
        <NewsletterStandalone />
      </main>
      <Footer />
    </div>
  )
}
