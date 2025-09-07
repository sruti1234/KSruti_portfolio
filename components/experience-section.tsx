"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional <span className="text-primary glow-effect">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building real-world solutions and gaining hands-on experience in modern web technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-300 glow-effect">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                    <Building className="text-primary" size={24} />
                    Full Stack Developer
                  </CardTitle>
                  <CardDescription className="text-lg text-primary font-medium mt-1">Gradious</CardDescription>
                </div>
                <div className="flex flex-col md:items-end gap-2">
                  <Badge variant="secondary" className="bg-primary/20 text-white border-primary/30 w-fit">
                    <Calendar size={14} className="mr-1" />
                    May 2025 - June 2025
                  </Badge>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin size={14} />
                    <span className="text-sm">Hyderabad, India</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Worked as a Full Stack Developer in a dynamic tech community environment, focusing on building
                  scalable data solutions and modern web applications.
                </p>

                <div className="space-y-3">
                  <div className="text-muted-foreground leading-relaxed">
                    <p>
                      Built an S3 Input Connector to enable smooth data flow from AWS S3 into internal databases. Gained
                      hands-on experience with modern web technologies and cloud services, contributing to both backend
                      and frontend development using cutting-edge frameworks. Collaborated effectively with the tech
                      team in an agile development environment, enhancing technical skills and understanding of
                      full-stack development practices.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  {["AWS S3", "Python", "React", "FastAPI", "MongoDB", "Full Stack Development"].map((tech) => (
                    <Badge key={tech} variant="outline" className="bg-primary/20 text-white border-primary/30">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
