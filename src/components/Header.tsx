import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.gif";

interface NavItem {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
  const location = useLocation();
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsAboutOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsAboutOpen(false);
    }, 150);
  };

  const navItems: NavItem[] = [{
    label: "Home",
    href: "/"
  }, {
    label: "About Us",
    href: "/about-us",
    subItems: [
      { label: "Gallery", href: "/gallery" }
    ]
  }, {
    label: "Services",
    href: "/services"
  }, {
    label: "Accreditation",
    href: "/accreditation"
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
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Middle East Environmental Laboratories Co. Logo" className="h-16 lg:h-20 w-auto" loading="eager" fetchPriority="high" />
            <div className="hidden md:flex flex-col justify-center">
              <span className="text-sm lg:text-base font-bold leading-tight text-blue-900">
                Middle East Environmental
              </span>
              <span className="text-sm lg:text-base font-bold leading-tight text-blue-900">
                Laboratories W.L.L
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map(item => {
            const isActive = location.pathname === item.href || item.subItems?.some(sub => location.pathname === sub.href);
            
            if (item.subItems) {
              return (
                <div 
                  key={item.label} 
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className={`text-base font-medium transition-smooth relative group flex items-center gap-1 py-2 ${isActive ? 'text-blue-600 hover:text-blue-800' : 'text-foreground hover:text-primary'}`}>
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isAboutOpen && (
                    <>
                      {/* Invisible bridge to prevent gap issues */}
                      <div className="absolute top-full left-0 right-0 h-2" />
                      <div className="absolute top-full left-0 pt-2 z-50">
                        <div className="bg-white border border-border rounded-lg shadow-lg py-2 min-w-[160px]">
                          <Link
                            to={item.href}
                            onClick={() => setIsAboutOpen(false)}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                          >
                            About Us
                          </Link>
                          {item.subItems.map(subItem => (
                            <Link
                              key={subItem.label}
                              to={subItem.href}
                              onClick={() => setIsAboutOpen(false)}
                              className={`block px-4 py-2 text-sm hover:bg-muted transition-colors ${location.pathname === subItem.href ? 'text-blue-600' : 'text-foreground hover:text-primary'}`}
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            }
            
            return (
              <Link key={item.label} to={item.href} className={`text-base font-medium transition-smooth relative group ${isActive ? 'text-blue-600 hover:text-blue-800' : 'text-foreground hover:text-primary'}`}>
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-smooth text-blue-900"></span>
              </Link>
            );
          })}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" className="flex items-center space-x-2 bg-green-600 text-white hover:bg-green-700 border-green-600">
              <Phone className="w-4 h-4" />
              <span className="font-bold">+965 22251577</span>
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
                  const isActive = location.pathname === item.href || item.subItems?.some(sub => location.pathname === sub.href);
                  
                  if (item.subItems) {
                    return (
                      <div key={item.label} className="flex flex-col">
                        <button 
                          className={`transition-smooth py-2 flex items-center justify-between ${isActive ? 'text-blue-600 hover:text-blue-800' : 'text-foreground hover:text-primary'}`}
                          onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                        >
                          {item.label}
                          <ChevronDown className={`w-4 h-4 transition-transform ${isMobileAboutOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isMobileAboutOpen && (
                          <div className="pl-4 flex flex-col border-l-2 border-muted ml-2">
                            <Link
                              to={item.href}
                              className="transition-smooth py-2 text-sm text-foreground hover:text-primary"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              About Us
                            </Link>
                            {item.subItems.map(subItem => (
                              <Link
                                key={subItem.label}
                                to={subItem.href}
                                className={`transition-smooth py-2 text-sm ${location.pathname === subItem.href ? 'text-blue-600' : 'text-foreground hover:text-primary'}`}
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }
                  
                  return (
                    <Link key={item.label} to={item.href} className={`transition-smooth py-2 ${isActive ? 'text-blue-600 hover:text-blue-800' : 'text-foreground hover:text-primary'}`} onClick={() => setIsMenuOpen(false)}>
                      {item.label}
                    </Link>
                  );
                })}
                <Button className="flex items-center space-x-2 mt-4 bg-green-600 hover:bg-green-700">
                  <Phone className="w-4 h-4" />
                  <span className="font-bold">+965 22251577</span>
                </Button>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;