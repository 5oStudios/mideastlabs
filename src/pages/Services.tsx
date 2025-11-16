import ScrollAnimation from "@/components/ScrollAnimation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Beaker, Shield, Clock, Activity } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicesData } from "@/data/servicesData";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero/services-hero.jpg";
const Services = () => {
  const categories = [...new Set(servicesData.map(service => service.category))];
  return <>
      <Header />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Testing services laboratory" className="w-full h-full object-cover object-center md:object-bottom" />
          <div className="absolute inset-0 bg-blue-600/40"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
                Testing Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Our Testing Services
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Comprehensive analytical testing solutions across multiple industries 
                with state-of-the-art equipment and expert analysis.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Complete Testing Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our laboratory offers a comprehensive range of analytical testing services 
                designed to meet the diverse needs of various industries and regulatory requirements.
              </p>
            </div>
          </ScrollAnimation>

          {/* Category Filters - Coming Soon */}

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => <ScrollAnimation key={service.id} delay={0.1 * (index % 6)}>
                <Link to={`/services/${service.id}`}>
                  <Card className="group card-gradient shadow-elegant hover:shadow-glow transition-spring cursor-pointer overflow-hidden h-full">
                    {/* Image Header */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-spring" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                      
                      {/* Icon Overlay */}
                      <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="text-xs font-medium text-accent uppercase tracking-wide">
                          {service.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-smooth leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {service.shortDescription}
                      </p>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-accent hover:bg-accent/10 p-0 h-auto group-hover:translate-x-1 transition-spring">
                        <span className="mr-2">Know More</span>
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                </Link>
              </ScrollAnimation>)}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Why Choose Our Testing Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our commitment to excellence and precision ensures that you receive 
                accurate, reliable results for all your analytical testing needs.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Beaker className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">State-of-the-Art Equipment</h3>
                <p className="text-muted-foreground">
                  Latest analytical instruments and testing technologies
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Certified Quality</h3>
                <p className="text-muted-foreground">
                  Accredited laboratory with international quality standards
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-glow to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Fast Turnaround</h3>
                <p className="text-muted-foreground">
                  Quick and efficient testing with reliable delivery times
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-light to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Expert Analysis</h3>
                <p className="text-muted-foreground">
                  Professional interpretation and detailed reporting
                </p>
              </div>
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
                Need Testing Services?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Contact us today to discuss your testing requirements and get a customized 
                solution for your analytical needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors duration-300">
                  Request Quote
                </a>
                <a href="/about-us" className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-300">
                  Learn About Us
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
export default Services;