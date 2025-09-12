import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navItems = [{
    label: "Home",
    href: "/"
  }, {
    label: "About Us",
    href: "/about-us"
  }, {
    label: "Services",
    href: "/services"
  }, {
    label: "Accreditation",
    href: "/accreditation"
  }, {
    label: "Gallery",
    href: "/gallery"
  }, {
    label: "Career",
    href: "/career"
  }, {
    label: "Contact Us",
    href: "/contact"
  }];
  return <header className="fixed top-0 left-0 right-0 z-50 bg-primary-deep/90 backdrop-blur-md border-b border-primary-glow/30 shadow-glow">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/1ebeb099-7be5-468c-abea-c14172407db6.png" 
              alt="Middle East Environmental Laboratories Co. Logo"
              className="h-12 w-auto"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => {
              const isActive = location.pathname === item.href;
              return (
                <Link 
                  key={item.label} 
                  to={item.href} 
                  className={`text-sm font-medium transition-smooth relative group ${
                    isActive ? 'text-accent-light hover:text-accent' : 'text-primary-foreground hover:text-accent-light'
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-smooth"></span>
                </Link>
              );
            })}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" className="flex items-center space-x-2 border-accent/50 text-primary-foreground hover:bg-accent/20">
              <Phone className="w-4 h-4" />
              <span>+96522251588</span>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button variant="ghost" size="icon" className="lg:hidden text-primary-foreground hover:bg-accent/20" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="lg:hidden absolute top-full left-0 right-0 bg-primary-deep/95 backdrop-blur-md border-b border-primary-glow/30 shadow-glow animate-fade-up">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map(item => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link 
                      key={item.label} 
                      to={item.href} 
                      className={`transition-smooth py-2 ${
                        isActive ? 'text-accent-light hover:text-accent' : 'text-primary-foreground hover:text-accent-light'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Button className="flex items-center space-x-2 mt-4 bg-accent hover:bg-accent/80">
                  <Phone className="w-4 h-4" />
                  <span>+96522251588</span>
                </Button>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;