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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero/contact-hero.jpg";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  const contactInfo = [{
    title: "Location",
    details: ["Building 195, 1st Floor, West of Abu Fatira Al Herafia", "P.O. Box 114, AL-Qusour, 47402, Kuwait"],
    icon: MapPin
  }, {
    title: "Phone Numbers",
    details: ["+965 22251577"],
    icon: Phone
  }, {
    title: "Email Address",
    details: ["info@mideastlabs.com"],
    icon: Mail
  }, {
    title: "Working Hours",
    details: ["Sunday - Thursday: 8:00 AM - 6:00 PM", "Friday: 8:00 AM - 12:00 PM", "Saturday: Closed"],
    icon: Clock
  }];
  const services = ["Water & Wastewater Testing", "Food Testing", "Soil & Sludge Analysis", "Cosmetics Testing", "Environmental Monitoring", "Material Testing", "Other"];
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Handle form submission logic here
  };
  return <>
      <Header />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Contact our laboratory" className="w-full h-full object-cover object-center md:object-bottom" />
          <div className="absolute inset-0 bg-blue-600/40"></div>
        </div>
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
              return <ScrollAnimation key={index} delay={0.1 * index}>
                  <Card className="p-6 text-center shadow-elegant hover:shadow-glow transition-all duration-500 group h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-3 group-hover:text-primary-glow transition-colors duration-300">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => <p key={detailIndex} className="text-muted-foreground text-sm leading-relaxed">
                          {detail}
                        </p>)}
                    </div>
                  </Card>
                </ScrollAnimation>;
            })}
          </div>
        </div>
      </section>

      {/* Company Location Heading */}
      <section className="py-4 md:py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-4 md:mb-8">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                Company Location
              </h2>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Full Width Map Section */}
      <section className="pb-12 md:pb-20">
        <div className="w-full">
          <ScrollAnimation>
            <div className="relative w-full">
              <div className="aspect-[3/4] md:aspect-[21/9] w-full">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.8220955191327!2d48.0510782!3d29.199364199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcfa04550d25ded%3A0x8514275ef9b403ce!2zTWlkZGxlIEVhc3QgRW52aXJvbm1lbnRhbCBMYWJvcmF0b3JpZXMg2YXYrtiq2KjYsdin2Kog2KfZhNi02LHZgiDYp9mE2KPZiNiz2Lcg2KfZhNio2YrYptmK2Kk!5e0!3m2!1sen!2skw!4v1766315758961!5m2!1sen!2skw" width="100%" height="100%" style={{
                  border: 0
                }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Middle East Environmental Laboratories Location" className="w-full h-full"></iframe>
              </div>
              
              {/* Address Overlay Card */}
              <div className="absolute top-4 left-4 right-4 md:bottom-8 md:top-auto md:left-8 md:right-auto md:max-w-md">
                
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Emergency Contact */}
      

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
                <a href="/services" className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors duration-300">
                  View Services
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
export default ContactPage;