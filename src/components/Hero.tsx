import { Button } from "@/components/ui/button";
import { ArrowRight, Microscope, FlaskConical, Shield, Atom, Dna, TestTube, Beaker } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-lab.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Advanced laboratory testing facility"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-indigo-900/70 to-purple-900/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Animated Particles Background */}
      <div className="absolute inset-0 z-1">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Advanced Floating Laboratory Elements */}
      <div className="absolute inset-0 z-2">
        {/* DNA Helix Animation */}
        <div className="absolute top-1/4 right-8 md:right-16 animate-pulse-slow">
          <div className="relative w-20 h-32 md:w-24 md:h-40">
            <Dna className="w-full h-full text-cyan-400/60 animate-spin" style={{ animationDuration: '8s' }} />
            <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>

        {/* Floating Laboratory Equipment */}
        <div className="absolute top-20 left-8 md:left-16 animate-float">
          <div className="relative group">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 transition-all duration-500">
              <Microscope className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />
            </div>
            <div className="absolute inset-0 bg-emerald-400/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity"></div>
          </div>
        </div>

        <div className="absolute bottom-1/3 right-12 md:right-24 animate-float" style={{ animationDelay: '2s' }}>
          <div className="relative group">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 transition-all duration-500">
              <FlaskConical className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
            </div>
            <div className="absolute inset-0 bg-blue-400/30 rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity"></div>
          </div>
        </div>

        <div className="absolute top-1/2 left-4 md:left-12 animate-float" style={{ animationDelay: '4s' }}>
          <div className="relative group">
            <div className="w-14 h-14 md:w-18 md:h-18 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 transition-all duration-500">
              <TestTube className="w-7 h-7 md:w-9 md:h-9 text-purple-400" />
            </div>
            <div className="absolute inset-0 bg-purple-400/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity"></div>
          </div>
        </div>

        <div className="absolute bottom-20 left-1/4 animate-float" style={{ animationDelay: '1s' }}>
          <div className="relative group">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-xl backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 transition-all duration-500">
              <Beaker className="w-5 h-5 md:w-7 md:h-7 text-cyan-400" />
            </div>
            <div className="absolute inset-0 bg-cyan-400/30 rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity"></div>
          </div>
        </div>

        <div className="absolute top-32 right-1/3 animate-float" style={{ animationDelay: '3s' }}>
          <div className="relative group">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 transition-all duration-500">
              <Atom className="w-4 h-4 md:w-6 md:h-6 text-green-400 animate-spin" style={{ animationDuration: '6s' }} />
            </div>
            <div className="absolute inset-0 bg-green-400/30 rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-opacity"></div>
          </div>
        </div>

        {/* Molecular Structure Animation */}
        <div className="absolute bottom-1/4 right-8 md:right-20">
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse"
                style={{
                  left: `${20 + Math.cos((i * 60 * Math.PI) / 180) * 25}px`,
                  top: `${20 + Math.sin((i * 60 * Math.PI) / 180) * 25}px`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
            <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl">
          {/* Brand Badge */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-medium mb-8 hover:scale-105 transition-all duration-300">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
              Testhub - Advanced Laboratory Solutions
            </div>
          </div>
          
          {/* Main Heading with Enhanced Typography */}
          <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                Analytical Testing
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                Laboratory
              </span>
            </h1>
          </div>

          {/* Enhanced Description */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl leading-relaxed backdrop-blur-sm">
              The modern consumer marketplace demands products in terms of quality, performance, 
              sustainability and value for money. <span className="text-cyan-300 font-semibold">TESTHUB</span> provides 
              services to do it right, saving time, effort and money.
            </p>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="animate-fade-up flex flex-col sm:flex-row gap-4 mb-16" style={{ animationDelay: '0.6s' }}>
            <Link 
              to="/about-us"
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-100 group-hover:opacity-90 transition-opacity"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative text-white flex items-center space-x-2">
                <span>About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
            </Link>
            
            <Button size="lg" className="group relative bg-transparent border-2 border-white/30 backdrop-blur-md text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl">
              <span className="relative z-10">Our Services</span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>
          </div>

          {/* Enhanced Stats with Modern Design */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 animate-fade-up" style={{ animationDelay: '0.8s' }}>
            {[
              { number: "15+", label: "Years Experience", color: "from-emerald-400 to-cyan-400" },
              { number: "50+", label: "Testing Services", color: "from-blue-400 to-purple-400" },
              { number: "1000+", label: "Satisfied Clients", color: "from-purple-400 to-pink-400" },
              { number: "24/7", label: "Support Available", color: "from-cyan-400 to-teal-400" }
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="text-center p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-xs md:text-sm font-medium">{stat.label}</div>
                </div>
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity blur-xl`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="relative">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full mt-2 animate-bounce"></div>
          </div>
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-lg animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;