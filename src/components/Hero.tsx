import { ArrowRight, Phone, Beaker, CheckCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";
import teamLab from "@/assets/team-lab.jpg";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-32 lg:pt-40 pb-20 lg:pb-32">
      {/* Background with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-blue-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-0 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8 px-4 lg:pl-8 lg:pr-12">
            {/* Main Heading */}
            <div className="animate-fade-up">
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                  Analytical Testing
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  Laboratory
                </span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-2xl">
                Delivering precise analytical testing services with cutting-edge technology 
                and certified expertise for environmental and chemical analysis.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="animate-fade-up flex flex-col sm:flex-row gap-4" style={{
            animationDelay: '0.2s'
          }}>
              <Link to="/about-us" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-100 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative text-white flex items-center space-x-2">
                  <span>About Us</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              </Link>
              
              <Link to="/services" className="group relative inline-flex items-center justify-center bg-transparent border-2 border-blue-400/50 backdrop-blur-md text-white hover:bg-blue-500/20 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl">
                <span className="flex items-center space-x-2">
                  <span>Our Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>

            {/* Stats Widgets */}
            <div className="grid grid-cols-2 gap-4 animate-fade-up" style={{
            animationDelay: '0.4s'
          }}>
              {[{
              icon: Phone,
              number: "24/7",
              label: "Support Available",
              color: "from-cyan-400 to-teal-400",
              iconColor: "text-cyan-400"
            }, {
              icon: Beaker,
              number: "4000+",
              label: "Sample Test Monthly",
              color: "from-blue-400 to-purple-400",
              iconColor: "text-blue-400"
            }, {
              icon: CheckCircle,
              number: "Accredited",
              label: "ISO/IEC 17205",
              color: "from-emerald-400 to-cyan-400",
              iconColor: "text-emerald-400"
            }, {
              icon: Users,
              number: "Serving",
              label: "Chemical & Environmental",
              color: "from-purple-400 to-pink-400",
              iconColor: "text-purple-400"
            }].map((stat, index) => <div key={index} className="group relative">
                  <div className="text-center p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                    <div className="flex justify-center mb-2">
                      <stat.icon className={`w-6 h-6 md:w-8 md:h-8 ${stat.iconColor} drop-shadow-lg`} strokeWidth={1.5} />
                    </div>
                    <div className={`text-lg md:text-xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                      {stat.number}
                    </div>
                    <div className="text-white/80 text-xs md:text-sm font-medium">{stat.label}</div>
                  </div>
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity blur-xl`}></div>
                </div>)}
            </div>
          </div>

          {/* Right Column - Image Carousel */}
          <div className="animate-fade-up lg:animate-fade-in h-full flex mr-4" style={{
          animationDelay: '0.6s'
        }}>
            <div className="relative overflow-hidden w-full h-full">
              <img src={teamLab} alt="Laboratory facility" className="w-full h-full min-h-[400px] object-contain md:object-cover rounded-lg" />
              {/* Overlay gradient for better blend */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent pointer-events-none"></div>
            </div>
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
    </section>;
};
export default Hero;