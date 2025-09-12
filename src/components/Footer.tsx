import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Accreditation", href: "#accreditation" },
    { label: "Gallery", href: "#gallery" },
    { label: "Career", href: "#career" },
    { label: "Contact", href: "#contact" }
  ];

  const services = [
    "Water & Wastewater Testing",
    "Food Testing",
    "Soil & Sludge Analysis",
    "Cosmetics Testing",
    "Environmental Monitoring",
    "Material Testing"
  ];

  return (
    <footer className="bg-gradient-to-b from-primary-deep to-primary text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg">TESTHUB</span>
                <span className="text-xs text-white/80 -mt-1">LABORATORIES L.L.C</span>
              </div>
            </div>
            
            <p className="text-white/90 text-sm leading-relaxed">
              Leading analytical testing laboratory providing comprehensive microbiological, 
              chemical, and environmental testing services with state-of-the-art facilities.
            </p>

            <div className="flex space-x-3">
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                <FacebookIcon className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                <TwitterIcon className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                <LinkedinIcon className="w-5 h-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:bg-white/20">
                <InstagramIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-smooth text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white/80 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/90 text-sm">Dubai, United Arab Emirates</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/80 flex-shrink-0" />
                <div>
                  <p className="text-white/90 text-sm">+971 4 824 8015</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/80 flex-shrink-0" />
                <div>
                  <p className="text-white/90 text-sm">info@testhublab.com</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-6 pt-6 border-t border-white/20">
              <h4 className="font-medium mb-3">Stay Updated</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <Button size="sm" className="bg-accent hover:bg-accent/90">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              © 2024 TestHub Laboratories L.L.C. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-white/80 hover:text-white transition-smooth">
                Privacy Policy
              </a>
              <a href="#terms" className="text-white/80 hover:text-white transition-smooth">
                Terms of Service
              </a>
              <a href="#sitemap" className="text-white/80 hover:text-white transition-smooth">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;