import { useTranslation } from "react-i18next";
import { ArrowRight, Phone, Beaker, CheckCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";
import teamLab from "@/assets/team-lab.jpg";

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const stats = [
    {
      icon: Phone,
      number: t("hero.stats.support"),
      label: t("hero.stats.supportLabel"),
      color: "from-cyan-400 to-teal-400",
      iconColor: "text-cyan-400"
    },
    {
      icon: Beaker,
      number: t("hero.stats.samples"),
      label: t("hero.stats.samplesLabel"),
      color: "from-blue-400 to-purple-400",
      iconColor: "text-blue-400"
    },
    {
      icon: CheckCircle,
      number: t("hero.stats.accredited"),
      label: t("hero.stats.accreditedLabel"),
      color: "from-emerald-400 to-cyan-400",
      iconColor: "text-emerald-400"
    },
    {
      icon: Users,
      number: t("hero.stats.serving"),
      label: t("hero.stats.servingLabel"),
      color: "from-purple-400 to-pink-400",
      iconColor: "text-purple-400"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 pt-32 lg:pt-40 pb-20 lg:pb-32">
      {/* Background with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-800/80 to-blue-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent"></div>
        
        {/* Laboratory Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3C!-- Flask --%3E%3Cpath d='M20 10h8v12h-2l-4 8h12l-4-8h-2V10h8v2h-5v8l4 8H15l4-8v-8h-5v-2h6z'/%3E%3C!-- Beaker --%3E%3Cpath d='M70 15h20v4h-2v16h2v4H70v-4h2V19h-2v-4zm4 4v16h12V19H74z'/%3E%3C!-- Test tube --%3E%3Cpath d='M105 8h6v2h-1v22a3 3 0 01-3 3 3 3 0 01-3-3V10h-1V8h2zm2 2h2v20a1 1 0 01-1 1 1 1 0 01-1-1V10z'/%3E%3C!-- Molecule --%3E%3Ccircle cx='15' cy='70' r='4'/%3E%3Ccircle cx='30' cy='60' r='3'/%3E%3Ccircle cx='30' cy='80' r='3'/%3E%3Cline x1='18' y1='68' x2='27' y2='62' stroke='%23ffffff' stroke-width='1.5'/%3E%3Cline x1='18' y1='72' x2='27' y2='78' stroke='%23ffffff' stroke-width='1.5'/%3E%3C!-- Erlenmeyer --%3E%3Cpath d='M75 55h10v2h-2l-6 12v6h-4v-6l-6-12h-2v-2h10zm-4 2l5 10v6h0v-6l5-10h-10z'/%3E%3C!-- DNA Helix hint --%3E%3Cpath d='M100 55c4 0 6 4 6 8s-2 8-6 8-6-4-6-8 2-8 6-8zm0 2c-3 0-4 3-4 6s1 6 4 6 4-3 4-6-1-6-4-6z'/%3E%3C!-- Microscope hint --%3E%3Crect x='10' y='95' width='8' height='12' rx='1'/%3E%3Crect x='12' y='90' width='4' height='6' rx='1'/%3E%3Ccircle cx='14' cy='88' r='3'/%3E%3C!-- Petri dish --%3E%3Cellipse cx='60' cy='100' rx='12' ry='4'/%3E%3Cellipse cx='60' cy='100' rx='8' ry='2.5'/%3E%3C!-- Dropper --%3E%3Cpath d='M95 90l3-8h4l3 8-5 4-5-4zm3-6l-2 5 4 3 4-3-2-5h-4z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-0 items-center ${isRTL ? 'direction-rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
          
          {/* Left Column - Content (Right in RTL) */}
          <div className={`space-y-8 px-4 ${isRTL ? 'lg:pl-8 lg:pr-12' : 'lg:pl-8 lg:pr-12'}`}>
            {/* Main Heading */}
            <div className={`animate-fade-up ${isRTL ? 'text-right' : 'text-left'}`}>
              <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
                  {t("hero.title1")}
                </span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                  {t("hero.title2")}
                </span>
              </h1>
              <p className={`text-lg md:text-xl text-blue-100/90 leading-relaxed max-w-2xl ${isRTL ? 'ml-auto text-right' : ''}`}>
                {t("hero.description")}
              </p>
            </div>

            {/* Action Buttons */}
            <div className={`animate-fade-up flex flex-col sm:flex-row gap-4 ${isRTL ? 'sm:flex-row-reverse justify-end' : 'justify-start'}`} style={{
              animationDelay: '0.2s'
            }}>
              <Link to="/about-us" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-100 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className={`relative text-white flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                  <span>{t("hero.aboutUs")}</span>
                  <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                </span>
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
              </Link>
              
              <Link to="/services" className="group relative inline-flex items-center justify-center bg-transparent border-2 border-blue-400/50 backdrop-blur-md text-white hover:bg-blue-500/20 hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl">
                <span className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                  <span>{t("hero.ourServices")}</span>
                  <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Link>
            </div>

            {/* Stats Widgets */}
            <div className="grid grid-cols-2 gap-4 animate-fade-up" style={{
              animationDelay: '0.4s'
            }}>
              {stats.map((stat, index) => (
                <div key={index} className="group relative">
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
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image (Left in RTL) */}
          <div className={`animate-fade-up lg:animate-fade-in h-full flex mx-4 ${isRTL ? 'order-first lg:order-none' : ''}`} style={{
            animationDelay: '0.6s'
          }}>
            <div className="relative overflow-hidden w-full md:h-full rounded-lg">
              <img src={teamLab} alt="Laboratory facility" className="w-full h-auto object-contain md:h-full md:min-h-[400px] md:object-cover rounded-xl" />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-blue-900/30 to-transparent pointer-events-none"></div>
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
    </section>
  );
};

export default Hero;
