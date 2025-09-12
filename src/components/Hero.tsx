import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, FlaskConical, Shield, Atom, Dna, TestTube, Beaker, Activity, Zap, ChevronDown, Sparkles, Target } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Advanced Multi-layered Background */}
      <div className="absolute inset-0 z-0">
        {/* Primary Background with Parallax Effect */}
        <div className="absolute inset-0 scale-110 transition-transform duration-1000">
          <img 
            src="/assets/hero-lab.jpg" 
            alt="Advanced laboratory testing facility" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Secondary Background Overlay */}
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/assets/scientist-1.jpg" 
            alt="Scientific research" 
            className="w-full h-full object-cover mix-blend-soft-light"
          />
        </div>

        {/* Sophisticated Gradient System */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/98 via-primary-deep/95 to-primary/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/90 via-primary/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-glow/30 to-transparent"></div>
        <div className="absolute inset-0 bg-radial-gradient from-primary-glow/20 via-transparent to-transparent"></div>
        
        {/* Dynamic Mesh Gradient */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-glow/60 via-transparent to-primary-deep/60 animate-scale-breathe"></div>
        </div>

        {/* Shimmer Effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 animate-shimmer"></div>
        </div>
      </div>

      {/* Enhanced Particle System */}
      <div className="absolute inset-0 z-10">
        {/* Floating DNA Helixes with Enhanced Animation */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`dna-${i}`}
            className="absolute animate-float"
            style={{
              left: `${15 + i * 25}%`,
              top: `${5 + i * 20}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${10 + i * 3}s`
            }}
          >
            <div className="relative group">
              <Dna className="w-6 h-12 md:w-10 md:h-18 lg:w-12 lg:h-20 text-primary-glow/70 animate-rotate-slow group-hover:text-primary-glow transition-colors" />
              <div className="absolute inset-0 bg-primary-glow/30 blur-lg rounded-full opacity-50 group-hover:opacity-100 transition-opacity animate-pulse-glow"></div>
            </div>
          </div>
        ))}

        {/* Enhanced Scientific Elements Grid */}
        {[
          { icon: Microscope, size: 'w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8', position: { top: '12%', right: '8%' }, delay: 0 },
          { icon: FlaskConical, size: 'w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7', position: { top: '65%', left: '3%' }, delay: 1 },
          { icon: TestTube, size: 'w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6', position: { top: '20%', left: '85%' }, delay: 2 },
          { icon: Beaker, size: 'w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7', position: { bottom: '15%', right: '12%' }, delay: 3 },
          { icon: Atom, size: 'w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8', position: { top: '75%', right: '30%' }, delay: 4 },
          { icon: Target, size: 'w-4 h-4 md:w-6 md:h-6 lg:w-7 lg:h-7', position: { top: '40%', left: '10%' }, delay: 5 },
        ].map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={`element-${index}`}
              className="absolute animate-float group cursor-pointer"
              style={{
                ...item.position,
                animationDelay: `${item.delay * 0.8}s`,
                animationDuration: `${7 + index * 0.5}s`
              }}
            >
              <div className="relative">
                <div className="p-2 md:p-3 lg:p-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:bg-white/15 transition-all duration-700 group-hover:scale-125 group-hover:rotate-12 animate-pulse-glow">
                  <IconComponent className={`${item.size} text-primary-glow/80 group-hover:text-white transition-all duration-500`} />
                </div>
                <div className="absolute inset-0 bg-primary-glow/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
              </div>
            </div>
          );
        })}

        {/* Enhanced Energy Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`pulse-${i}`}
            className="absolute rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              backgroundColor: i % 2 === 0 ? 'hsl(var(--primary-glow) / 0.8)' : 'hsl(var(--primary) / 0.6)',
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}

        {/* Floating Sparkles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-primary-glow/60 animate-pulse" />
          </div>
        ))}
      </div>

      {/* Advanced Circuit Pattern */}
      <div className="absolute inset-0 z-5 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <defs>
            <pattern id="circuit-advanced" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 20 20 L 100 20 L 100 60 L 60 60 L 60 100 L 20 100 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              <circle cx="20" cy="20" r="2" fill="currentColor"/>
              <circle cx="100" cy="20" r="1.5" fill="currentColor"/>
              <circle cx="60" cy="60" r="2.5" fill="currentColor"/>
              <rect x="55" y="55" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-advanced)" className="text-primary-glow"/>
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-7xl mx-auto">
          
          {/* Enhanced Animated Badge */}
          <div className="animate-fade-up mb-6 md:mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/20 text-white/90 text-sm md:text-base font-medium shadow-2xl group hover:bg-white/10 transition-all duration-500 hover:scale-105">
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary-glow animate-pulse-glow" />
              <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent font-semibold">
                ISO 17025 Certified Laboratory
              </span>
              <Activity className="w-4 h-4 md:w-5 md:h-5 text-success animate-pulse" />
            </div>
          </div>

          {/* Revolutionary Main Headline */}
          <div className="animate-fade-up mb-8 md:mb-12" style={{ animationDelay: '0.2s' }}>
            <h1 className="font-display font-black leading-none mb-4 md:mb-6">
              {/* Mobile: Stacked layout */}
              <div className="block sm:hidden">
                <span className="block text-4xl bg-gradient-to-r from-white via-primary-glow to-white bg-clip-text text-transparent mb-2">
                  Precision
                </span>
                <span className="block text-4xl bg-gradient-to-r from-primary-glow via-white to-primary-glow bg-clip-text text-transparent mb-2">
                  Laboratory
                </span>
                <span className="block text-2xl font-semibold text-white/80">
                  Testing Solutions
                </span>
              </div>
              
              {/* Tablet: Medium layout */}
              <div className="hidden sm:block md:hidden">
                <span className="block text-5xl bg-gradient-to-r from-white via-primary-glow to-white bg-clip-text text-transparent mb-3">
                  Precision
                </span>
                <span className="block text-5xl bg-gradient-to-r from-primary-glow via-white to-primary-glow bg-clip-text text-transparent mb-3">
                  Laboratory
                </span>
                <span className="block text-3xl font-semibold text-white/80">
                  Testing Solutions
                </span>
              </div>
              
              {/* Desktop: Large layout */}
              <div className="hidden md:block lg:hidden">
                <span className="block text-6xl bg-gradient-to-r from-white via-primary-glow to-white bg-clip-text text-transparent mb-4">
                  Precision
                </span>
                <span className="block text-6xl bg-gradient-to-r from-primary-glow via-white to-primary-glow bg-clip-text text-transparent mb-4">
                  Laboratory
                </span>
                <span className="block text-4xl font-semibold text-white/80">
                  Testing Solutions
                </span>
              </div>
              
              {/* Large Desktop: Extra large layout */}
              <div className="hidden lg:block">
                <span className="block text-7xl xl:text-8xl bg-gradient-to-r from-white via-primary-glow to-white bg-clip-text text-transparent mb-4">
                  Precision
                </span>
                <span className="block text-7xl xl:text-8xl bg-gradient-to-r from-primary-glow via-white to-primary-glow bg-clip-text text-transparent mb-4 animate-pulse">
                  Laboratory
                </span>
                <span className="block text-4xl xl:text-5xl font-semibold text-white/80">
                  Testing Solutions
                </span>
              </div>
            </h1>
          </div>

          {/* Enhanced Subtitle */}
          <div className="animate-fade-up mb-8 md:mb-12 lg:mb-16" style={{ animationDelay: '0.4s' }}>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed px-4">
              Advanced analytical testing with cutting-edge technology and scientific precision. 
              <span className="text-primary-glow font-bold bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent"> TESTHUB</span> delivers 
              reliable results for quality assurance, compliance, and innovation across all industries.
            </p>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="animate-fade-up mb-12 md:mb-16 lg:mb-20" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center px-4">
              <Link to="/about-us" className="w-full sm:w-auto group relative">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto bg-gradient-to-r from-primary to-primary-deep hover:from-primary-deep hover:to-primary text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold rounded-xl shadow-2xl hover:shadow-primary-glow/50 transition-all duration-500 hover:scale-105 border-2 border-primary-glow/30 animate-pulse-glow relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
                  <span className="flex items-center justify-center gap-2 relative z-10">
                    Discover Excellence
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </Button>
              </Link>
              
              <Link to="/services" className="w-full sm:w-auto group relative">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto bg-white/5 backdrop-blur-xl border-2 border-white/30 text-white hover:bg-white/15 hover:border-primary-glow/60 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold rounded-xl transition-all duration-500 hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  <span className="flex items-center justify-center gap-2 relative z-10">
                    Our Services
                    <Zap className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 group-hover:text-primary-glow transition-all duration-300" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Revolutionary Statistics Grid */}
          <div className="animate-fade-up px-4" style={{ animationDelay: '0.8s' }}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {[
                { number: "15+", label: "Years of Excellence", icon: Shield, color: "from-emerald-400 to-teal-400" },
                { number: "500+", label: "Testing Parameters", icon: TestTube, color: "from-blue-400 to-cyan-400" },
                { number: "10K+", label: "Samples Analyzed", icon: Microscope, color: "from-purple-400 to-pink-400" },
                { number: "99.9%", label: "Accuracy Rate", icon: Activity, color: "from-orange-400 to-red-400" }
              ].map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div 
                    key={index} 
                    className="group relative animate-fade-up"
                    style={{ animationDelay: `${1 + index * 0.15}s` }}
                  >
                    <div className="text-center p-4 md:p-6 lg:p-8 bg-white/5 backdrop-blur-xl rounded-2xl md:rounded-3xl border border-white/20 hover:bg-white/10 transition-all duration-700 hover:scale-110 hover:-translate-y-2 shadow-xl hover:shadow-2xl cursor-pointer">
                      <div className="relative mb-4">
                        <IconComponent className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary-glow mx-auto group-hover:scale-125 transition-all duration-500 animate-pulse-glow" />
                        <div className="absolute inset-0 bg-primary-glow/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div className={`text-2xl md:text-3xl lg:text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        {stat.number}
                      </div>
                      <div className="text-white/70 text-xs md:text-sm lg:text-base font-semibold group-hover:text-white transition-colors duration-300">
                        {stat.label}
                      </div>
                    </div>
                    <div className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity blur-2xl duration-500`}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-fade-up" style={{ animationDelay: '1.4s' }}>
        <div className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-all duration-500 cursor-pointer group">
          <span className="text-xs md:text-sm font-semibold tracking-wider uppercase">Scroll to explore</span>
          <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-xl group-hover:border-primary-glow/60 transition-colors duration-500">
            <ChevronDown className="w-3 h-3 md:w-4 md:h-4 animate-bounce mt-1 md:mt-2 group-hover:text-primary-glow transition-colors" />
          </div>
        </div>
      </div>

      {/* Enhanced Ambient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-64 md:h-64 lg:w-96 lg:h-96 bg-primary-glow/20 rounded-full blur-3xl animate-scale-breathe"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-primary-deep/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem] bg-primary/10 rounded-full blur-3xl animate-rotate-slow"></div>
    </section>
  );
};

export default Hero;