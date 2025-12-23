import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { CheckCircle, Award, Users, Target } from "lucide-react";

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const features = [
    t("about.features.facilities"),
    t("about.features.guidance"),
    t("about.features.services"),
    t("about.features.quality"),
    t("about.features.compliance"),
    t("about.features.equipment")
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isRTL ? 'lg:grid-flow-dense' : ''}`}>
          {/* Content */}
          <div className={`animate-slide-in ${isRTL ? 'lg:col-start-2' : ''}`}>
            <div className={`inline-flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'} bg-primary/10 px-4 py-2 rounded-full mb-6`}>
              <Award className="w-4 h-4 text-primary" />
              <span className="text-primary font-semibold text-lg">{t("about.badge")}</span>
            </div>
            
            <h2 className="font-display font-bold text-heading text-foreground mb-6">{t("about.title")}</h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>{t("about.description")}</p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <div key={index} className={`flex items-center ${isRTL ? 'space-x-reverse space-x-3' : 'space-x-3'} animate-fade-up`} style={{
                  animationDelay: `${index * 0.1}s`
                }}>
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${isRTL ? 'lg:col-start-1' : ''}`}>
            <Card className="p-6 card-gradient shadow-elegant hover:shadow-glow transition-spring group">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-spring">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{t("about.mission.title")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("about.mission.description")}
              </p>
            </Card>

            <Card className="p-6 card-gradient shadow-elegant hover:shadow-glow transition-spring group mt-8 sm:mt-0">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-spring">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-3">{t("about.vision.title")}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("about.vision.description")}
              </p>
            </Card>

            {/* Statistics Card */}
            <Card className="p-6 card-gradient shadow-elegant col-span-1 sm:col-span-2">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">{t("about.stats.iso")}</div>
                  <div className="text-xs text-muted-foreground">{t("about.stats.isoCertified")}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent mb-1">{t("about.stats.epa")}</div>
                  <div className="text-xs text-muted-foreground">{t("about.stats.epaApproved")}</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">{t("about.stats.turnaround")}</div>
                  <div className="text-xs text-muted-foreground">{t("about.stats.turnaroundLabel")}</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
