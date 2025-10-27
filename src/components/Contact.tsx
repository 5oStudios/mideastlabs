import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <MessageSquare className="w-4 h-4 text-accent" />
            <span className="text-accent font-medium">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us Today
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Reach out to our team of experts for comprehensive laboratory testing services
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Phone Card */}
          <Card className="p-8 card-gradient shadow-elegant group hover:shadow-glow transition-spring hover:-translate-y-1">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-spring">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-foreground">Call Us</h3>
                <a 
                  href="tel:+96522251588"
                  className="text-lg font-semibold text-primary hover:text-primary-deep transition-smooth block mb-1"
                >
                  +965 22251588
                </a>
                <p className="text-sm text-muted-foreground">
                  Available 24/7 for urgent testing needs
                </p>
              </div>
            </div>
          </Card>

          {/* Email Card */}
          <Card className="p-8 card-gradient shadow-elegant group hover:shadow-glow transition-spring hover:-translate-y-1">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-spring">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-foreground">Email Us</h3>
                <a 
                  href="mailto:info@mideastlabs.com"
                  className="text-lg font-semibold text-primary hover:text-primary-deep transition-smooth block mb-1"
                >
                  info@mideastlabs.com
                </a>
                <p className="text-sm text-muted-foreground">
                  Get detailed quotes and technical support
                </p>
              </div>
            </div>
          </Card>

          {/* Operating Hours Card */}
          <Card className="p-8 card-gradient shadow-elegant group hover:shadow-glow transition-spring hover:-translate-y-1 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-spring">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2 text-foreground">Working Hours</h3>
                <p className="text-base font-medium text-foreground mb-1">
                  Sunday - Thursday
                </p>
                <p className="text-sm text-muted-foreground">
                  8:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Location Card - Full Width */}
        <Card className="p-8 md:p-10 card-gradient shadow-strong mb-12 overflow-hidden relative">
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-start md:space-x-6">
              <div className="flex-shrink-0 mb-6 md:mb-0">
                <div className="w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-10 h-10 text-primary" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="font-bold text-2xl mb-4 text-foreground">
                  Visit Our Laboratory
                </h3>
                <div className="space-y-2">
                  <p className="text-base text-foreground font-medium">
                    Building 195, 1st Floor
                  </p>
                  <p className="text-base text-foreground">
                    West of Abu Fatira Al Herafia
                  </p>
                  <p className="text-base text-muted-foreground">
                    P.O. Box 114, AL-Qusour, 47402
                  </p>
                  <p className="text-base text-muted-foreground font-medium">
                    Kuwait
                  </p>
                </div>
                
                <Button 
                  size="lg" 
                  className="mt-6 bg-primary hover:bg-primary-deep shadow-glow"
                  asChild
                >
                  <a 
                    href="https://maps.google.com/?q=Building+195+Abu+Fatira+Al+Herafia+Kuwait" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Get Directions
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-0" />
        </Card>

        {/* CTA Section */}
        <Card className="p-10 md:p-12 hero-gradient shadow-glow text-center overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our team of experts today for professional laboratory testing services 
              and comprehensive analytical solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 shadow-medium"
                asChild
              >
                <a href="tel:+96522251588">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +965 22251588
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 text-white border-white/30 hover:bg-white/20"
                asChild
              >
                <a href="mailto:info@mideastlabs.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us
                </a>
              </Button>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        </Card>
      </div>
    </section>
  );
};

export default Contact;