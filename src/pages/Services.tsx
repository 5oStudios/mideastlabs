import { useTranslation } from "react-i18next";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Beaker, Shield, Clock, Activity } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { servicesData } from "@/data/servicesData";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero/services-hero.jpg";

const Services = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="relative py-20 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Testing services laboratory" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-blue-600/40"></div>
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <ScrollAnimation>
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
                  {t("servicesPage.badge")}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                  {t("servicesPage.title")}
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  {t("servicesPage.heroDescription")}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                  {t("servicesPage.completeSolutions.title")}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t("servicesPage.completeSolutions.description")}
                </p>
              </div>
            </ScrollAnimation>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {servicesData.map((service, index) => (
                <ScrollAnimation key={service.id} delay={0.1 * (index % 6)}>
                  <Link to={`/services/${service.id}`}>
                    <Card className="group card-gradient shadow-elegant hover:shadow-glow transition-spring cursor-pointer overflow-hidden h-full">
                      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                        <img src={service.image} alt={isRTL && service.titleAr ? service.titleAr : service.title} className="w-full h-full object-cover group-hover:scale-110 transition-spring" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} bg-background/90 backdrop-blur-sm p-3 rounded-lg shadow-lg`}>
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="mb-2">
                          <span className="text-xs font-medium text-accent uppercase tracking-wide">
                            {isRTL && service.categoryAr ? service.categoryAr : service.category}
                          </span>
                        </div>
                        <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-smooth leading-tight">
                          {isRTL && service.titleAr ? service.titleAr : service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                          {isRTL && service.shortDescriptionAr ? service.shortDescriptionAr : service.shortDescription}
                        </p>
                        <Button variant="ghost" size="sm" className={`text-primary hover:text-accent hover:bg-accent/10 p-0 h-auto group-hover:translate-x-1 transition-spring ${isRTL ? 'flex-row-reverse' : ''}`}>
                          <span className={isRTL ? 'ml-2' : 'mr-2'}>{t("services.knowMore")}</span>
                          <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                        </Button>
                      </div>
                    </Card>
                  </Link>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                  {t("servicesPage.whyChoose.title")}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t("servicesPage.whyChoose.description")}
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ScrollAnimation delay={0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                    <Beaker className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{t("servicesPage.whyChoose.equipment.title")}</h3>
                  <p className="text-muted-foreground">{t("servicesPage.whyChoose.equipment.description")}</p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{t("servicesPage.whyChoose.quality.title")}</h3>
                  <p className="text-muted-foreground">{t("servicesPage.whyChoose.quality.description")}</p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-glow to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{t("servicesPage.whyChoose.turnaround.title")}</h3>
                  <p className="text-muted-foreground">{t("servicesPage.whyChoose.turnaround.description")}</p>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={0.4}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-light to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Activity className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{t("servicesPage.whyChoose.analysis.title")}</h3>
                  <p className="text-muted-foreground">{t("servicesPage.whyChoose.analysis.description")}</p>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollAnimation>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  {t("servicesPage.cta.title")}
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  {t("servicesPage.cta.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors duration-300">
                    {t("servicesPage.cta.requestQuote")}
                  </a>
                  <a href="/about-us" className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-300">
                    {t("servicesPage.cta.learnAboutUs")}
                  </a>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Services;
