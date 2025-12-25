import { useTranslation } from "react-i18next";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Users, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePageHeroImage } from "@/hooks/usePageHeroImages";
import fallbackHeroImage from "@/assets/hero/about-us-hero.jpg";

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const { data: heroData } = usePageHeroImage('about-us');
  const heroImage = heroData?.image_url || fallbackHeroImage;

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="relative py-20 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Modern laboratory facility" className="w-full h-full object-cover" loading="eager" />
            <div className="absolute inset-0 bg-blue-600/40"></div>
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <ScrollAnimation>
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
                  {t("aboutPage.badge")}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                  {t("aboutPage.title")}
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  {t("aboutPage.heroDescription")}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollAnimation>
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                    {t("aboutPage.companyName")}
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
                </div>
                
                <Card className="p-8 md:p-12 shadow-elegant">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                    {t("aboutPage.companyDescription")}
                  </p>
                </Card>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <ScrollAnimation>
                <Card className={`p-8 md:p-10 h-full shadow-elegant hover:shadow-glow transition-all duration-500 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className={`flex items-center gap-4 mb-6 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-primary">{t("aboutPage.mission.title")}</h3>
                  </div>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {t("aboutPage.mission.description")}
                  </p>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <Card className={`p-8 md:p-10 h-full shadow-elegant hover:shadow-glow transition-all duration-500 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className={`flex items-center gap-4 mb-6 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center shrink-0">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-primary">{t("aboutPage.vision.title")}</h3>
                  </div>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {t("aboutPage.vision.description")}
                  </p>
                </Card>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                  {t("aboutPage.whyChooseUs.title")}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t("aboutPage.whyChooseUs.description")}
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <ScrollAnimation delay={0.1}>
                <Card className="p-8 text-center shadow-elegant hover:shadow-glow transition-all duration-500 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">{t("aboutPage.whyChooseUs.qualityAssurance.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("aboutPage.whyChooseUs.qualityAssurance.description")}
                  </p>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={0.2}>
                <Card className="p-8 text-center shadow-elegant hover:shadow-glow transition-all duration-500 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">{t("aboutPage.whyChooseUs.expertTeam.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("aboutPage.whyChooseUs.expertTeam.description")}
                  </p>
                </Card>
              </ScrollAnimation>

              <ScrollAnimation delay={0.3}>
                <Card className="p-8 text-center shadow-elegant hover:shadow-glow transition-all duration-500 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-glow to-accent rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">{t("aboutPage.whyChooseUs.fastTurnaround.title")}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t("aboutPage.whyChooseUs.fastTurnaround.description")}
                  </p>
                </Card>
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
                  {t("aboutPage.cta.title")}
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  {t("aboutPage.cta.description")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors duration-300">
                    {t("aboutPage.cta.getInTouch")}
                  </a>
                  <a href="/services" className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-300">
                    {t("aboutPage.cta.viewServices")}
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

export default AboutUs;
