import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Mail, Phone, LinkedinIcon } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Johnson",
      position: "Laboratory Director",
      image: "/assets/scientist-1.jpg",
      description: "Leading expert in analytical chemistry with 15+ years of experience in laboratory management and quality assurance."
    },
    {
      name: "Dr. Michael Chen",
      position: "Senior Microbiologist",
      image: "/assets/scientist-2.jpg",
      description: "Specialized in microbiology testing and environmental monitoring with extensive research background."
    },
    {
      name: "Dr. Emily Roberts",
      position: "Quality Assurance Manager",
      image: null,
      description: "Expert in quality control systems and regulatory compliance with international testing standards."
    },
    {
      name: "Dr. Ahmed Hassan",
      position: "Chemical Analysis Lead",
      image: null,
      description: "Specialized in advanced chemical testing methods and instrumental analysis techniques."
    }
  ];

  return (
    <section id="team" className="py-20 surface-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Our Team</span>
          </div>
          
          <h2 className="font-display font-bold text-heading text-foreground mb-6">
            Meet Our Experts
          </h2>
          
          <p className="text-muted-foreground leading-relaxed">
            Our team of experienced scientists and analysts are dedicated to providing 
            accurate testing results and exceptional customer service.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <Card 
              key={index}
              className="group card-gradient shadow-elegant hover:shadow-glow transition-spring overflow-hidden"
            >
              {/* Profile Image */}
              <div className="relative h-64 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                {member.image ? (
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-spring"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Users className="w-20 h-20 text-primary/60" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-primary/20 transition-smooth"></div>
                
                {/* Social Links Overlay */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button size="icon" variant="ghost" className="w-8 h-8 bg-white/90 hover:bg-white">
                    <Mail className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="w-8 h-8 bg-white/90 hover:bg-white">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button size="icon" variant="ghost" className="w-8 h-8 bg-white/90 hover:bg-white">
                    <LinkedinIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-smooth">
                  {member.name}
                </h3>
                <div className="text-accent font-medium mb-3 text-sm">
                  {member.position}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="group">
            <span>View All Team Members</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-spring" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Team;