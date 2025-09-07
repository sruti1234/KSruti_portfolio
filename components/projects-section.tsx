"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "IRE - Student Resource Platform",
      description:
        "A student-centric platform for accessing academic resources like theory notes, assignments, and previous question papers in a subject-wise organized manner with user-friendly interface.",
      image: "/student-academic-platform-interface-dark-theme.jpg",
      tech: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/tech-mates2027/IRE.in",
      live: "https://tech-mates2027.github.io/IRE.in/",
      period: "Oct 2023 - Nov 2023",
    },
    {
      title: "Fun Learning Platform for Kids",
      description:
        "An interactive educational platform designed specifically for children, featuring engaging animations and gamified learning experiences to make education fun and accessible.",
      image: "/kids-education-platform-interface-dark-theme.jpg",
      tech: ["HTML5", "CSS3", "GSAP", "JavaScript", "Responsive Design"],
      github: "#",
      live: "https://illustrious-travesseiro-dbb16f.netlify.app/",
      period: "2024",
    },
    {
      title: "S3 Input Connector",
      description:
        "Designed and implemented an S3 Input Connector using AWS SDK and FastAPI for seamless data ingestion from AWS S3 into internal databases with modern web interface.",
      image: "/aws-s3-connector-dashboard-dark-theme.jpg",
      tech: ["AWS S3", "AWS SDK", "Python", "React", "FastAPI", "MongoDB"],
      github: "https://github.com/sruti1234/s3Connector",
      live: "#",
      period: "May 2025 - Jun 2025",
    },
    {
      title: "Captcha Refinement System",
      description:
        "Enhanced traditional CAPTCHA usability while maintaining strong bot security using behavioral metrics like mouse movements, clicks, and typing speed to distinguish humans from bots.",
      image: "/captcha-security-interface-dark-theme.jpg",
      tech: ["Python", "Flask", "Google Colab", "MySQL", "Machine Learning"],
      github: "https://github.com/sruti1234/Captcha-Refinement",
      live: "#",
      period: "Feb 2024 - Apr 2025",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work showcasing full-stack development and innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-2 py-1 rounded text-xs">
                  {project.period}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-card-foreground text-xl">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/20 text-primary-foreground text-sm rounded-full border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github !== "#" && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </Button>
                  )}
                  {project.live !== "#" && (
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => window.open(project.live, "_blank")}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
