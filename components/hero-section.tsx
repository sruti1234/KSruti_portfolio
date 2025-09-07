"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  const texts = [
    "A Software Engineering Student...",
    "A Full Stack Developer...",
    "A Tech Enthusiast...",
    "A Product & Design Enthusiast...",
  ]

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = texts[currentIndex]

        if (!isDeleting) {
          // Writing text
          if (currentText.length < current.length) {
            setCurrentText(current.substring(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          // Deleting text
          if (currentText.length > 0) {
            setCurrentText(current.substring(0, currentText.length - 1))
          } else {
            // Finished deleting, move to next text
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, texts])

  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const downloadCV = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement("a")
    link.href = "/resume.pdf" // You'll need to add your resume PDF to the public folder
    link.download = "Kodukula_Sai_Sruti_Resume.pdf"
    link.target = "_blank" // Updated to open in new tab
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 z-10 max-w-6xl mx-auto px-6">
        {/* Profile Image */}
        <div className="relative">
          <div className="w-80 h-80 relative rounded-full overflow-hidden border-4 border-primary/30 glow-effect">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/srutiformal.jpg-NqrDhkjawL6C01QcFtrC8De0tMWq3s.jpeg"
              alt="Kodukula Sai Sruti"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/60 rounded-full animate-bounce"></div>
          <div className="absolute top-1/2 -left-8 w-4 h-4 bg-primary/40 rounded-full animate-ping"></div>
        </div>

        {/* Content */}
        <div className="text-center lg:text-left max-w-2xl">
          <div className="mb-4">
            <span className="text-primary text-lg font-medium">Hello, I'm</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">Kodukula Sai Sruti</h1>

          <div className="h-16 mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {currentText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            Passionate about creating innovative solutions through code. Currently pursuing Computer Science with AIML
            specialization, building impactful projects and exploring the intersection of technology and design.
          </p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-4 mb-8">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg glow-effect"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={downloadCV}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg bg-transparent"
            >
              <Download size={18} className="mr-2" />
              Download CV
            </Button>
          </div>

          <div className="flex items-center lg:justify-start justify-center gap-6">
            <a
              href="https://github.com/sruti1234"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/k-sruti-1733b7290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:saisrutikodukula@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-primary" size={32} />
      </div>
    </section>
  )
}
