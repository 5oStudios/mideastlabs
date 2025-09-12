import ScrollAnimation from "@/components/ScrollAnimation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const contactInfo = [
    {
      title: "Location",
      details: [
        "W.H No. 7 Union Beverages Factory Building",
        "Jebel Ali Industrial Area 2",
        "Dubai, United Arab Emirates"
      ],
      icon: MapPin
    },
    {
      title: "Phone Numbers",
      details: [
        "+971 4 824 8015",
        "+971 56 990 6509"
      ],
      icon: Phone
    },
    {
      title: "Email Address",
      details: [
        "info@testhublab.com",
        "sales@testhublab.com"
      ],
      icon: Mail
    },
    {
      title: "Working Hours",
      details: [
        "Sunday - Thursday: 8:00 AM - 6:00 PM",
        "Friday: 8:00 AM - 12:00 PM",
        "Saturday: Closed"
      ],
      icon: Clock
    }
  ];

  const services = [
    "Water & Wastewater Testing",
    "Food Testing",
    "Soil & Sludge Analysis", 
    "Cosmetics Testing",
    "Environmental Monitoring",
    "Material Testing",
    "Other"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary-glow text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
                Get In Touch
              </Badge>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Ready to discuss your testing requirements? Our team of experts 
                is here to provide you with the analytical solutions you need.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Get In Touch With Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Contact our team through any of the following channels. We're here 
                to help with your analytical testing needs.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <ScrollAnimation key={index} delay={0.1 * index}>
                  <Card className="p-6 text-center shadow-elegant hover:shadow-glow transition-all duration-500 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-3 group-hover:text-primary-glow transition-colors duration-300">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-muted-foreground text-sm leading-relaxed">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </Card>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <ScrollAnimation>
              <Card className="p-8 shadow-elegant">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-2xl font-display font-bold text-primary">Send Us a Message</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone"
                        placeholder="+971 XX XXX XXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input 
                        id="company"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service, index) => (
                          <SelectItem key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message"
                      placeholder="Tell us about your testing requirements..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </ScrollAnimation>

            {/* Map and Additional Info */}
            <ScrollAnimation delay={0.2}>
              <div className="space-y-8">
                <Card className="p-8 shadow-elegant">
                  <h3 className="text-xl font-semibold text-primary mb-4">Visit Our Laboratory</h3>
                  <div className="aspect-video bg-gradient-to-br from-secondary to-secondary/50 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-muted-foreground">Interactive Map</p>
                      <p className="text-sm text-muted-foreground">Jebel Ali Industrial Area 2, Dubai</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our laboratory is conveniently located in Jebel Ali Industrial Area, 
                    providing easy access for sample drop-off and consultation meetings.
                  </p>
                </Card>

                <Card className="p-8 shadow-elegant">
                  <h3 className="text-xl font-semibold text-primary mb-4">Quick Response</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-foreground">Email Response</p>
                        <p className="text-sm text-muted-foreground">Within 2 hours during business hours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-foreground">Phone Support</p>
                        <p className="text-sm text-muted-foreground">Immediate response during office hours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary-glow rounded-full mt-2"></div>
                      <div>
                        <p className="font-medium text-foreground">Quote Delivery</p>
                        <p className="text-sm text-muted-foreground">Within 24 hours for standard services</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <Card className="p-8 max-w-4xl mx-auto text-center shadow-elegant">
              <h2 className="text-2xl font-display font-bold text-primary mb-4">
                Need Urgent Testing Services?
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                For urgent testing requirements or emergency analytical services, 
                contact us directly via phone for immediate assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+97148248015"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-glow transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +971 4 824 8015
                </a>
                <a
                  href="tel:+971569906509"
                  className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  +971 56 990 6509
                </a>
              </div>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Contact us today to discuss your analytical testing requirements and 
                discover how we can help achieve your quality objectives.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors duration-300"
                >
                  View Services
                </a>
                <a
                  href="/about-us"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;