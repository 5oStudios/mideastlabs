import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, FlaskConical, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lab.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Advanced laboratory testing facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-10 animate-float">
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Microscope className="w-8 h-8 text-white" />
        </div>
      </div>
      <div className="absolute bottom-32 right-32 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <FlaskConical className="w-6 h-6 text-white" />
        </div>
      </div>
      <div className="absolute top-48 left-10 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <Shield className="w-10 h-10 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl">
          <div className="animate-fade-up">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              Testhub
            </span>
          </div>
          
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="font-display font-bold text-display lg:text-6xl text-white mb-6 leading-tight">
              Analytical Testing
              <br />
              <span className="text-accent">Laboratory</span>
            </h1>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
              The modern consumer marketplace demands products in terms of quality, performance, 
              sustainability and value for money. TESTHUB provides services to do it right, 
              saving time, effort and money.
            </p>
          </div>

          <div className="animate-fade-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.6s' }}>
            <Link 
              to="/about-us"
              className="inline-flex items-center justify-center px-6 py-3 text-lg bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg shadow-glow transition-colors duration-300 space-x-2"
            >
              <span>About Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">15+</div>
              <div className="text-white/80 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80 text-sm">Testing Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">1000+</div>
              <div className="text-white/80 text-sm">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80 text-sm">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pulse">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;