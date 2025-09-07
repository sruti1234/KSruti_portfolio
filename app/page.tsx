import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import ServicesSection from "@/components/services-section"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <ExperienceSection />
      <section id="projects">
        <ProjectsSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Kodukula Sai Sruti. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
