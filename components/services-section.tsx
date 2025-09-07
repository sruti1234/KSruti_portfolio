import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Smartphone, Brain } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Full-Stack Development",
      description: "End-to-end web application development using modern frameworks and cloud technologies",
      features: ["React/Next.js", "Node.js/FastAPI", "AWS Integration", "API Development"],
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Database & Cloud Solutions",
      description: "Scalable database design and cloud infrastructure for modern applications",
      features: ["MongoDB/SQL", "AWS S3", "Data Ingestion", "Cloud Architecture"],
    },
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Mobile Development",
      description: "Cross-platform mobile applications with Flutter and modern development practices",
      features: ["Flutter/Dart", "Cross-platform", "UI/UX Design", "App Deployment"],
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "AI/ML Solutions",
      description: "Machine learning and AI-powered applications with focus on security and user experience",
      features: ["Python/ML", "NLP/LLMs", "Security Systems", "Behavioral Analysis"],
    },
  ]

  return (
    <section id="services" className="py-20 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical solutions from full-stack development to AI/ML implementations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group text-center"
            >
              <CardHeader className="pb-4">
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-card-foreground text-lg">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-sm">{service.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-muted-foreground flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
