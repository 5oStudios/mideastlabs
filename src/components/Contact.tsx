import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <MessageSquare className="w-4 h-4 text-accent" />
            <span className="text-accent font-medium">Get In Touch</span>
          </div>
          
          <h2 className="font-display font-bold text-heading text-foreground mb-6">
            Request a Free Consultation
          </h2>
          
          <p className="text-muted-foreground leading-relaxed">
            Ready to discuss your testing requirements? Our experts are here to help you 
            find the right analytical solutions for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-xl mb-6 text-foreground">
                Looking for the best laboratory service?
              </h3>
              
              <div className="space-y-6">
                <Card className="p-6 card-gradient shadow-elegant group hover:shadow-glow transition-spring">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-spring">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Phone Number</h4>
                      <p className="text-muted-foreground">+96522251588</p>
                      <p className="text-muted-foreground">Available 24/7 for urgent testing needs</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 card-gradient shadow-elegant group hover:shadow-glow transition-spring">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-spring">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Email Address</h4>
                      <p className="text-muted-foreground">info@testhublab.com</p>
                      <p className="text-muted-foreground">Get detailed quotes and technical support</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 card-gradient shadow-elegant group hover:shadow-glow transition-spring">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-spring">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Laboratory Location</h4>
                      <p className="text-muted-foreground">Dubai, United Arab Emirates</p>
                      <p className="text-muted-foreground">State-of-the-art testing facility</p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 card-gradient shadow-elegant group hover:shadow-glow transition-spring">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-spring">
                      <Clock className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Operating Hours</h4>
                      <p className="text-muted-foreground">Sunday - Thursday: 8:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Emergency services available 24/7</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* CTA Button */}
            <Card className="p-8 hero-gradient shadow-glow text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-white/90 mb-6">
                Contact us today for professional laboratory testing services
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-medium">
                <Phone className="w-5 h-5 mr-2" />
                Call: +96522251588
              </Button>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 card-gradient shadow-strong">
            <h3 className="font-semibold text-xl mb-6 text-foreground">
              Send us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Testing Service Required
                </label>
                <select className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth">
                  <option>Select a service...</option>
                  <option>Water & Waste Water Testing</option>
                  <option>Food Testing</option>
                  <option>Soil & Sludge Analysis</option>
                  <option>Cosmetics Testing</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                  placeholder="Please describe your testing requirements..."
                ></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary-deep shadow-glow">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;