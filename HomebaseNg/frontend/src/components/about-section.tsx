import { Building2, Users2, TrendingUp, Shield } from 'lucide-react'

export function AboutSection() {
  const features = [
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "Nigeria's Premier Real Estate Platform",
      description: "HomeBase NG is revolutionizing Nigeria's real estate market by providing a comprehensive digital ecosystem for property transactions, management, and investment opportunities."
    },
    {
      icon: <Users2 className="w-12 h-12 text-primary" />,
      title: "Connecting Stakeholders",
      description: "We bridge the gap between property developers, real estate agents, investors, and home seekers, creating a seamless marketplace for all real estate needs."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: "Market Intelligence",
      description: "Access real-time market trends, property valuations, and investment analytics powered by advanced data analytics and AI technology."
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Trust & Security",
      description: "Our platform ensures secure transactions, verified listings, and transparent processes, making real estate dealings safer and more reliable."
    }
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-primary">
            Transforming Nigeria's Real Estate Landscape
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Join the future of real estate in Nigeria with HomeBase NG - where technology meets property excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-6 bg-background/50 hover:bg-background rounded-lg border border-border/50 hover:border-border transition-colors duration-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
          
            <p className="text-muted-foreground mb-6">
              For developers, we offer powerful tools to showcase properties and reach qualified buyers. 
              For agents, our platform provides lead generation and client management solutions. 
              For investors, we deliver data-driven insights and premium investment opportunities. 
              For tech enthusiasts, we offer API integration capabilities and developer-friendly tools.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">100+ Active Developers</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">1000+ Listed Properties</span>
              </div>
              <div className="px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">36 States Coverage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
