import ScrollAnimation from "@/components/ScrollAnimation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, CheckCircle, FileCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CertificateScroller from "@/components/CertificateScroller";
import heroImage from "@/assets/hero/accreditation-hero.jpg";
import { useTranslation } from "react-i18next";

const Accreditation = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  const certifications = [
    {
      title: "ISO/IEC 17025:2017",
      description: t('accreditation.certifications.iso17025'),
      status: t('accreditation.status.accredited'),
      validUntil: "2025"
    },
    {
      title: "ISO 9001",
      description: t('accreditation.certifications.iso9001'),
      status: t('accreditation.status.certified'),
      validUntil: "2025"
    },
    {
      title: t('accreditation.certifications.dubaiMunicipalityTitle'),
      description: t('accreditation.certifications.dubaiMunicipality'),
      status: t('accreditation.status.approved'),
      validUntil: "2024"
    },
    {
      title: t('accreditation.certifications.esmaTitle'),
      description: t('accreditation.certifications.esma'),
      status: t('accreditation.status.accredited'),
      validUntil: "2025"
    }
  ];

  const accreditationBenefits = [
    {
      title: t('accreditation.benefits.qualityAssurance.title'),
      description: t('accreditation.benefits.qualityAssurance.description'),
      icon: Shield
    },
    {
      title: t('accreditation.benefits.internationalRecognition.title'),
      description: t('accreditation.benefits.internationalRecognition.description'),
      icon: Award
    },
    {
      title: t('accreditation.benefits.regulatoryCompliance.title'),
      description: t('accreditation.benefits.regulatoryCompliance.description'),
      icon: CheckCircle
    },
    {
      title: t('accreditation.benefits.continuousImprovement.title'),
      description: t('accreditation.benefits.continuousImprovement.description'),
      icon: FileCheck
    }
  ];

  return (
    <>
      <Header />
      <div className={`min-h-screen pt-20 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt={t('accreditation.hero.imageAlt')}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-600/40"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
                {t('accreditation.hero.badge')}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                {t('accreditation.hero.title')}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                {t('accreditation.hero.description')}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                {t('accreditation.certificates.title')}
              </h3>
              <p className="text-muted-foreground">
                {t('accreditation.certificates.description')}
              </p>
            </div>
          </ScrollAnimation>
        </div>
        
        {/* Full-width scrolling certificates */}
        <ScrollAnimation delay={0.1}>
          <CertificateScroller />
        </ScrollAnimation>
      </section>

      {/* Benefits of Accreditation */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                {t('accreditation.benefitsSection.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('accreditation.benefitsSection.description')}
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {accreditationBenefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <ScrollAnimation key={index} delay={0.1 * index}>
                  <Card className="p-6 text-center shadow-elegant hover:shadow-glow transition-all duration-500 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-3 group-hover:text-primary-glow transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </Card>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation>
              <Card className="p-8 md:p-12 shadow-elegant">
                <div className="text-center mb-8">
                  <Award className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-primary mb-4">
                    {t('accreditation.commitment.title')}
                  </h2>
                </div>
                
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    {t('accreditation.commitment.paragraph1')}
                  </p>
                  
                  <p className="leading-relaxed">
                    {t('accreditation.commitment.paragraph2')}
                  </p>
                  
                  <p className="leading-relaxed">
                    {t('accreditation.commitment.paragraph3')}
                  </p>
                </div>
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
                {t('accreditation.cta.title')}
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {t('accreditation.cta.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors duration-300"
                >
                  {t('accreditation.cta.getQuote')}
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-300"
                >
                  {t('accreditation.cta.viewServices')}
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

export default Accreditation;