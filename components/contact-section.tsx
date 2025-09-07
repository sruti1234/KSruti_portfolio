"use client"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on innovative projects? Let's discuss your next big idea
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Let's Connect</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed text-center max-w-3xl mx-auto">
                I'm a passionate Computer Science student specializing in AI/ML, always excited to work on challenging
                projects and collaborate with innovative teams. Whether you have a project idea, internship opportunity,
                or just want to discuss technology, feel free to reach out!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">Email</h4>
                  <p className="text-muted-foreground">saisrutikodukula@gmail.com</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">Phone</h4>
                  <p className="text-muted-foreground">+91 8269519060</p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">Location</h4>
                  <p className="text-muted-foreground">Hyderabad, India</p>
                </div>
              </div>
            </div>

            <div className="bg-card/50 rounded-lg p-8 border border-border max-w-2xl mx-auto">
              <h4 className="font-semibold text-foreground mb-4 text-center">Quick Facts</h4>
              <div className="space-y-2 text-sm text-muted-foreground text-center">
                <p>🎓 CSE Student at CMR Technical Campus (GPA: 9.43)</p>
                <p>💻 150+ LeetCode problems solved</p>
                <p>🏆 Certificate of Appreciation - Walmart Sparkathon 2025</p>
                <p>👥 CP Lead at CodeOholics community</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
