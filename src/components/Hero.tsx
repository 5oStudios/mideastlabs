import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, Video, Microscope, FlaskConical, TestTube, Atom, Dna, Beaker } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with gradient similar to reference */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-deep via-primary to-primary-glow"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }} 
          />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-fade-up">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <span className="text-accent font-medium text-sm">— Certified Laboratory</span>
              </div>
            </div>

            {/* Main heading */}
            <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight">
                This Is Your
                <br />
                Year To <span className="text-accent">Analyze</span>
              </h1>
            </div>

            {/* Description */}
            <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-lg text-foreground/80 max-w-lg leading-relaxed">
                The modern consumer marketplace demands products in terms of quality, performance, 
                sustainability and value for money. <span className="text-accent font-semibold">TESTHUB</span> provides 
                services to do it right.
              </p>
            </div>

            {/* Action buttons */}
            <div className="animate-fade-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: '0.6s' }}>
              <Link 
                to="/contact" 
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl bg-foreground text-primary transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span className="flex items-center space-x-2">
                  <span>Call Lab Expert</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              
              <Button 
                size="lg" 
                variant="outline"
                className="group relative bg-transparent border-2 border-foreground/20 text-foreground hover:bg-foreground/10 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl h-auto"
              >
                <span>Start Unlimited Test</span>
              </Button>
            </div>
          </div>

          {/* Right Side - Animated Laboratory Scene */}
          <div className="relative flex items-center justify-center lg:justify-end">
            
            {/* Floating contact elements similar to reference */}
            <div className="absolute top-12 left-8 animate-float">
              <div className="group relative">
                <div className="w-14 h-14 bg-foreground/10 backdrop-blur-md rounded-2xl border border-foreground/20 flex items-center justify-center hover:scale-110 transition-all duration-500">
                  <Phone className="w-6 h-6 text-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="absolute top-32 right-4 animate-float" style={{ animationDelay: '2s' }}>
              <div className="group relative">
                <div className="w-12 h-12 bg-foreground/10 backdrop-blur-md rounded-xl border border-foreground/20 flex items-center justify-center hover:scale-110 transition-all duration-500">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="absolute bottom-24 left-4 animate-float" style={{ animationDelay: '1s' }}>
              <div className="group relative">
                <div className="w-16 h-16 bg-foreground/10 backdrop-blur-md rounded-2xl border border-foreground/20 flex items-center justify-center hover:scale-110 transition-all duration-500">
                  <Video className="w-7 h-7 text-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-accent rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Rating/review element */}
            <div className="absolute bottom-12 right-8 animate-fade-up" style={{ animationDelay: '1.5s' }}>
              <div className="bg-foreground/10 backdrop-blur-md rounded-2xl border border-foreground/20 p-4 flex items-center space-x-3">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-accent rounded-full"></div>
                  ))}
                </div>
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-accent">❤️</span>
                </div>
              </div>
            </div>

            {/* Main laboratory equipment animation */}
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              
              {/* Central laboratory setup */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-foreground/10 to-foreground/5 backdrop-blur-md rounded-full border border-foreground/20 flex items-center justify-center">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center animate-pulse-slow">
                    <Microscope className="w-16 h-16 md:w-20 md:h-20 text-accent" />
                  </div>
                </div>
              </div>

              {/* Orbiting laboratory elements */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-foreground/10 backdrop-blur-md rounded-xl border border-foreground/20 flex items-center justify-center">
                    <FlaskConical className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-foreground/10 backdrop-blur-md rounded-xl border border-foreground/20 flex items-center justify-center">
                    <TestTube className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                  <div className="w-12 h-12 bg-foreground/10 backdrop-blur-md rounded-xl border border-foreground/20 flex items-center justify-center">
                    <Atom className="w-6 h-6 text-accent" />
                  </div>
                </div>
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                  <div className="w-12 h-12 bg-foreground/10 backdrop-blur-md rounded-xl border border-foreground/20 flex items-center justify-center">
                    <Beaker className="w-6 h-6 text-accent" />
                  </div>
                </div>
              </div>

              {/* DNA helix animation */}
              <div className="absolute top-8 right-8 animate-spin" style={{ animationDuration: '15s' }}>
                <div className="relative w-16 h-24">
                  <Dna className="w-full h-full text-accent/60" />
                  <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl animate-pulse"></div>
                </div>
              </div>

              {/* Floating molecules */}
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-2 h-2 bg-accent/40 rounded-full animate-float"
                  style={{
                    left: `${20 + Math.cos(i * 45 * Math.PI / 180) * 120}px`,
                    top: `${20 + Math.sin(i * 45 * Math.PI / 180) * 120}px`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${4 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;