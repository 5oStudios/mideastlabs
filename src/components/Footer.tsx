import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-footer.gif";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Services", href: "/services" },
    { label: "Accreditation", href: "/accreditation" },
    { label: "Gallery", href: "/gallery" },
    { label: "Career", href: "/career" },
    { label: "Contact", href: "/contact" }
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
              <img 
                src={logo} 
                alt="Middle East Environmental Laboratories Co. Logo"
                className="h-28 w-28 rounded-full object-cover"
                loading="lazy"
              />
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
                  <Link 
                    to={link.href}
                    className="text-white/80 hover:text-white transition-smooth text-sm"
                  >
                    {link.label}
                  </Link>
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
                  <Link to="/services" className="text-white/80 hover:text-white transition-smooth text-sm">
                    {service}
                  </Link>
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
                  <p className="text-white/90 text-sm">Building 195, 1st Floor, West of Abu Fatira Al Herafia</p>
                  <p className="text-white/90 text-sm">P.O. Box 114, AL-Qusour, 47402, Kuwait</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/80 flex-shrink-0" />
                <div>
                  <p className="text-white/90 text-sm">+965 22251577</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/80 flex-shrink-0" />
                <div>
                  <p className="text-white/90 text-sm">info@mideastlabs.com</p>
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
              © 2025 Middle East Environmental Laboratories Co. All rights reserved.
            </div>
            
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-white/80 hover:text-white transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-white/80 hover:text-white transition-smooth">
                Terms of Service
              </Link>
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