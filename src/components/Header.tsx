import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.gif";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white border-b border-border shadow-md' : 'bg-white border-b border-border shadow-sm'}`}>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Middle East Environmental Laboratories Co. Logo" className="h-20 lg:h-24 w-auto" loading="eager" fetchPriority="high" />
            <div className="flex flex-col">
              <span className="text-sm lg:text-base font-semibold leading-tight text-blue-900">
                Middle East Environmental
              </span>
              <span className="text-sm lg:text-base font-semibold leading-tight text-blue-900">
                Laboratories W.L.L
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => {
            const isActive = location.pathname === item.href;
            return <Link key={item.label} to={item.href} className={`text-base font-medium transition-smooth relative group ${isActive ? 'text-blue-600 hover:text-blue-800' : 'text-foreground hover:text-primary'}`}>
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-smooth text-blue-900"></span>
                </Link>;
          })}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+96522251588</span>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b shadow-medium animate-fade-up">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map(item => {
              const isActive = location.pathname === item.href;
              return <Link key={item.label} to={item.href} className={`transition-smooth py-2 ${isActive ? 'text-blue-600 hover:text-blue-800' : 'text-foreground hover:text-primary'}`} onClick={() => setIsMenuOpen(false)}>
                      {item.label}
                    </Link>;
            })}
                <Button className="flex items-center space-x-2 mt-4">
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