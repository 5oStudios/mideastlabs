import { Card } from "@/components/ui/card";
import { CheckCircle, Award, Users, Target } from "lucide-react";
const About = () => {
  const features = ["Purpose-built testing facilities", "Expert technical guidance", "Comprehensive analytical services", "Quality assurance protocols", "Regulatory compliance support", "Advanced testing equipment"];
  return <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-primary font-medium">About Our Laboratory</span>
            </div>
            
            <h2 className="font-display font-bold text-heading text-foreground mb-6">Middle East Environmental Laboratories W.L.L. </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>Middle East Environmental Laboratories W.L.L. delivers high-quality, reliable environmental testing services that support compliance, sustainability, and informed decision-making. With advanced equipment and a team of skilled experts, we help industries, government entities, and organizations monitor and manage their environmental impact. Our accurate analyses and customized reporting ensure clients meet local and international regulations while contributing to a cleaner, safer environment for future generations.</p>
              
              
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => <div key={index} className="flex items-center space-x-3 animate-fade-up" style={{
              animationDelay: `${index * 0.1}s`
            }}>
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>)}
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6 card-gradient shadow-elegant hover:shadow-glow transition-spring group">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-spring">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Our Mission</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The mission of Middle East Environmental Laboratories W.L.L. is to provide accurate, timely, and trusted environmental testing and analysis services    
              </p>
            </Card>

            <Card className="p-6 card-gradient shadow-elegant hover:shadow-glow transition-spring group mt-8 sm:mt-0">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-spring">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-3">Our Vision</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To provide superior services in Laboratory needs that advance the well-being of our community and this can only be achieved through our quality and differentiation
              </p>
            </Card>

            {/* Statistics Card */}
            <Card className="p-6 card-gradient shadow-elegant col-span-1 sm:col-span-2">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">ISO</div>
                  <div className="text-xs text-muted-foreground">Certified</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">EPA</div>
                  <div className="text-xs text-muted-foreground">Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">48hr</div>
                  <div className="text-xs text-muted-foreground">Turnaround</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default About;