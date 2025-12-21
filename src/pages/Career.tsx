import ScrollAnimation from "@/components/ScrollAnimation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Briefcase, GraduationCap, TrendingUp, Upload } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero/career-hero.jpg";
const Career = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: ""
  });
  const benefits = [{
    title: "Professional Growth",
    description: "Continuous learning opportunities and career advancement",
    icon: TrendingUp
  }, {
    title: "Modern Facilities",
    description: "Work with state-of-the-art equipment and technology",
    icon: Briefcase
  }, {
    title: "Training Programs",
    description: "Regular training and skill development programs",
    icon: GraduationCap
  }, {
    title: "Team Environment",
    description: "Collaborative and supportive work culture",
    icon: Users
  }];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };
  return <>
      <Header />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Join our laboratory team" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-blue-600/40"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
                Join Our Team
              </Badge>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Career Opportunities
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Build your career with us and be part of a leading analytical laboratory 
                that's shaping the future of environmental and chemical testing.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Why Choose Our Laboratory
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Join a dynamic team of professionals dedicated to excellence in analytical 
                testing and environmental protection.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return <ScrollAnimation key={index} delay={0.1 * index}>
                  <Card className="p-6 text-center shadow-elegant hover:shadow-glow transition-all duration-500 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-primary-glow transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </Card>
                </ScrollAnimation>;
            })}
          </div>
        </div>
      </section>


      {/* Application Form */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Start Your Career Journey
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Join us in making a positive impact through analytical excellence and 
                environmental protection. We're always looking for talented individuals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors duration-300">
                  Contact HR
                </a>
                <a href="/about-us" className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-300">
                  Learn More
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
      </div>
      <Footer />
    </>;
};
export default Career;