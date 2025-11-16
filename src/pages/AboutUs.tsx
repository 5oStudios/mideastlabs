import ScrollAnimation from "@/components/ScrollAnimation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Users, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero/about-us-hero.jpg";
const AboutUs = () => {
  return <>
      <Header />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Modern laboratory facility" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-blue-600/40"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
                About Our Laboratory
              </Badge>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                About Us
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Leading analytical testing laboratory providing comprehensive solutions 
                for environmental, microbiological, and chemical analysis.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                  MIDDLE EAST ENVIRONMENTAL LABORATORIES Co.
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
              </div>
              
              <Card className="p-8 md:p-12 shadow-elegant">
                <p className="text-lg leading-relaxed text-muted-foreground mb-8">Middle East Environmental Laboratories Co. W.L.L (MEL) is a specialized independent laboratory
services company with the capability to support a wide range of investigation, compliance and assurance
testing services. MEL laboratories are well designed, equipped with the latest instruments and certified by
International agencies to provide the best quality testing services to a broad range of clients including;
Regional governments, private sector consulting, manufacturing and retailing organizations.
                </p>
                
                
              </Card>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ScrollAnimation>
              <Card className="p-8 md:p-10 h-full shadow-elegant hover:shadow-glow transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary">Our Mission</h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  The mission of Middle East Environmental Laboratories W.L.L. is to provide accurate, timely, and trusted environmental testing and analysis services that support sustainable development, regulatory compliance, and public health. We are committed to delivering scientific excellence through advanced technology and professional expertise, empowering our clients to make responsible environmental decisions and contribute to a cleaner, healthier future.
                </p>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <Card className="p-8 md:p-10 h-full shadow-elegant hover:shadow-glow transition-all duration-500">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary">Our Vision</h3>
                </div>
                <p className="text-lg leading-relaxed text-muted-foreground">To provide superior services in Laboratory needs that advance the well-being of our community and this can
only be achieved through our quality and differentiation.
                </p>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Why Choose Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our commitment to excellence and innovation drives us to deliver 
                exceptional analytical services across various industries.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <ScrollAnimation delay={0.1}>
              <Card className="p-8 text-center shadow-elegant hover:shadow-glow transition-all duration-500 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Quality Assurance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Highest standards of analytical testing with certified quality management systems
                </p>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <Card className="p-8 text-center shadow-elegant hover:shadow-glow transition-all duration-500 group">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Expert Team</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Well-trained analytical professionals with extensive experience in laboratory sciences
                </p>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <Card className="p-8 text-center shadow-elegant hover:shadow-glow transition-all duration-500 group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-glow to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">Fast Turnaround</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tight analytical schedules with professional and personal client service
                </p>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Contact us today to discuss your analytical testing requirements and 
                discover how we can support your business objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors duration-300">
                  Get In Touch
                </a>
                <a href="/services" className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-300">
                  View Services
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
export default AboutUs;