import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Accreditation", href: "#accreditation" },
    { label: "Gallery", href: "#gallery" },
    { label: "Career", href: "#career" },
    { label: "Blog", href: "#blog" },
    { label: "Contact Us", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-elegant">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center transform rotate-45">
              <div className="w-6 h-6 bg-white rounded-sm transform -rotate-45 flex items-center justify-center">
                <span className="text-primary font-bold text-xs">ME</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-sm text-primary">MIDDLE EAST ENVIRONMENTAL</span>
              <span className="text-xs text-muted-foreground -mt-1">LABORATORIES Co.</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-smooth relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-smooth"></span>
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+971 4 824 8015</span>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b shadow-medium animate-fade-up">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-smooth py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <Button className="flex items-center space-x-2 mt-4">
                  <Phone className="w-4 h-4" />
                  <span>+971 4 824 8015</span>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;