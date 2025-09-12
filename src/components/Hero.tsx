import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, FlaskConical, Shield, Atom, Dna, TestTube, Beaker, Activity, Zap, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Multi-layered Background with Laboratory Images */}
      <div className="absolute inset-0 z-0">
        {/* Primary Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/assets/hero-lab.jpg" 
            alt="Advanced laboratory testing facility" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Secondary Background Image - Blended */}
        <div className="absolute inset-0 opacity-40">
          <img 
            src="/assets/scientist-1.jpg" 
            alt="Scientific research" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>

        {/* Futuristic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-primary-deep/90 to-primary/85"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-glow/40 via-transparent to-primary-deep/40 animate-pulse-slow"></div>
        </div>
      </div>

      {/* Animated Particle System */}
      <div className="absolute inset-0 z-10">
        {/* DNA Helixes */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`dna-${i}`}
            className="absolute animate-float"
            style={{
              left: `${20 + i * 30}%`,
              top: `${10 + i * 20}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${8 + i * 2}s`
            }}
          >
            <Dna className="w-8 h-16 md:w-12 md:h-20 text-primary-glow/60 animate-spin" 
                 style={{ animationDuration: `${10 + i * 5}s` }} />
          </div>
        ))}

        {/* Floating Scientific Elements */}
        {[
          { icon: Microscope, size: 'w-6 h-6 md:w-8 md:h-8', position: { top: '15%', right: '10%' } },
          { icon: FlaskConical, size: 'w-5 h-5 md:w-7 md:h-7', position: { top: '60%', left: '5%' } },
          { icon: TestTube, size: 'w-4 h-4 md:w-6 md:h-6', position: { top: '25%', left: '80%' } },
          { icon: Beaker, size: 'w-5 h-5 md:w-7 md:h-7', position: { bottom: '20%', right: '15%' } },
          { icon: Atom, size: 'w-6 h-6 md:w-8 md:h-8', position: { top: '70%', right: '25%' } },
        ].map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={`element-${index}`}
              className="absolute animate-float group"
              style={{
                ...item.position,
                animationDelay: `${index * 1.5}s`,
                animationDuration: `${6 + index}s`
              }}
            >
              <div className="relative">
                <div className="p-3 md:p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 group-hover:bg-white/20 transition-all duration-500 group-hover:scale-110">
                  <IconComponent className={`${item.size} text-primary-glow group-hover:text-white transition-colors`} />
                </div>
                <div className="absolute inset-0 bg-primary-glow/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          );
        })}

        {/* Energy Pulses */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`pulse-${i}`}
            className="absolute w-2 h-2 bg-primary-glow/80 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 z-5 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 10 10 L 90 10 L 90 90 L 10 90 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="10" cy="10" r="2" fill="currentColor"/>
              <circle cx="90" cy="90" r="2" fill="currentColor"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" className="text-primary-glow"/>
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-6xl mx-auto">
          
          {/* Animated Badge */}
          <div className="animate-fade-up mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white/90 text-sm font-medium">
              <Shield className="w-4 h-4 text-primary-glow" />
              <span>ISO Certified Laboratory</span>
              <Activity className="w-4 h-4 text-success animate-pulse" />
            </div>
          </div>

          {/* Main Headline */}
          <div className="animate-fade-up mb-8" style={{ animationDelay: '0.2s' }}>
            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-6">
              <span className="block bg-gradient-to-r from-white via-primary-glow to-white bg-clip-text text-transparent">
                Precision
              </span>
              <span className="block bg-gradient-to-r from-primary-glow via-white to-primary-glow bg-clip-text text-transparent">
                Laboratory
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-white/80 mt-4">
                Testing Solutions
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-up mb-12" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Advanced analytical testing with cutting-edge technology and scientific precision. 
              <span className="text-primary-glow font-semibold"> TESTHUB</span> delivers reliable results 
              for quality assurance, compliance, and innovation.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="animate-fade-up mb-16" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/about-us" className="group relative">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-deep text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-glow hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-primary-glow/50"
                >
                  <span className="flex items-center gap-2">
                    Discover More
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              
              <Link to="/services" className="group relative">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    Our Services
                    <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Statistics Grid */}
          <div className="animate-fade-up" style={{ animationDelay: '0.8s' }}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { number: "15+", label: "Years of Excellence", icon: Shield },
                { number: "500+", label: "Testing Parameters", icon: TestTube },
                { number: "10K+", label: "Samples Analyzed", icon: Microscope },
                { number: "99.9%", label: "Accuracy Rate", icon: Activity }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="group relative"
                    style={{ animationDelay: `${1 + index * 0.1}s` }}
                  >
                    <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                      <IconComponent className="w-8 h-8 text-primary-glow mx-auto mb-4 group-hover:scale-110 transition-transform" />
                      <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-primary-glow transition-colors">
                        {stat.number}
                      </div>
                      <div className="text-white/70 text-sm md:text-base font-medium">
                        {stat.label}
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-primary-glow/10 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-fade-up" style={{ animationDelay: '1.2s' }}>
        <div className="flex flex-col items-center gap-2 text-white/60 hover:text-white/80 transition-colors cursor-pointer">
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm">
            <ChevronDown className="w-4 h-4 animate-bounce mt-2" />
          </div>
        </div>
      </div>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-deep/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;