import ScrollAnimation from "@/components/ScrollAnimation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock, Loader2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePageHeroImage } from "@/hooks/usePageHeroImages";
import { useTranslation } from "react-i18next";
import { useContactSettings } from "@/hooks/useContactSettings";

const ContactPage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const { data: settings, isLoading } = useContactSettings();
  const { heroImage, isLoading: heroLoading } = usePageHeroImage('contact');

  const getContactInfo = () => {
    if (!settings) {
      // Fallback to translation keys if no settings
      return [
        {
          title: t('contact.info.location.title'),
          details: [
            t('contact.info.location.address1'),
            t('contact.info.location.address2')
          ],
          icon: MapPin
        },
        {
          title: t('contact.info.phone.title'),
          details: ["+965 22251577"],
          icon: Phone
        },
        {
          title: t('contact.info.email.title'),
          details: ["info@mideastlabs.com"],
          icon: Mail
        },
        {
          title: t('contact.info.hours.title'),
          details: [
            t('contact.info.hours.weekdays'),
            t('contact.info.hours.friday'),
            t('contact.info.hours.saturday')
          ],
          icon: Clock
        }
      ];
    }

    const address = isRTL ? settings.address_ar : settings.address_en;
    const weekdays = isRTL ? settings.working_hours_weekdays_ar : settings.working_hours_weekdays_en;
    const friday = isRTL ? settings.working_hours_friday_ar : settings.working_hours_friday_en;
    const saturday = isRTL ? settings.working_hours_saturday_ar : settings.working_hours_saturday_en;

    return [
      {
        title: t('contact.info.location.title'),
        details: address ? [address] : [t('contact.info.location.address1')],
        icon: MapPin
      },
      {
        title: t('contact.info.phone.title'),
        details: settings.phone ? [settings.phone] : ["+965 22251577"],
        icon: Phone
      },
      {
        title: t('contact.info.email.title'),
        details: settings.email ? [settings.email] : ["info@mideastlabs.com"],
        icon: Mail
      },
      {
        title: t('contact.info.hours.title'),
        details: [
          weekdays || t('contact.info.hours.weekdays'),
          friday || t('contact.info.hours.friday'),
          saturday || t('contact.info.hours.saturday')
        ].filter(Boolean),
        icon: Clock
      }
    ];
  };

  const contactInfo = getContactInfo();
  const mapUrl = settings?.map_embed_url || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3482.8220955191327!2d48.0510782!3d29.199364199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcfa04550d25ded%3A0x8514275ef9b403ce!2zTWlkZGxlIEVhc3QgRW52aXJvbm1lbnRhbCBMYWJvcmF0b3JpZXMg2YXYrtiq2KjYsdin2Kog2KfZhNi02LHZgiDYp9mE2KPZiNiz2Lcg2KfZhNio2YrYptmK2Kk!5e0!3m2!1sen!2skw!4v1766315758961!5m2!1sen!2skw";

  return (
    <>
      <Header />
      <div className={`min-h-screen pt-20 ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section className="relative py-20 text-white overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            {!heroLoading && heroImage && (
              <img 
                src={heroImage} 
                alt={t('contact.hero.imageAlt')} 
                className="w-full h-full object-cover object-center md:object-bottom" 
              />
            )}
            <div className="absolute inset-0 bg-blue-600/40"></div>
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <ScrollAnimation>
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
                  {t('contact.hero.badge')}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                  {t('contact.hero.title')}
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  {t('contact.hero.description')}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                  {t('contact.infoSection.title')}
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  {t('contact.infoSection.description')}
                </p>
              </div>
            </ScrollAnimation>

            {isLoading ? (
              <div className="flex justify-center py-12">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <ScrollAnimation key={index} delay={0.1 * index}>
                      <Card className="p-6 text-center shadow-elegant hover:shadow-glow transition-all duration-500 group h-full">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-primary mb-3 group-hover:text-primary-glow transition-colors duration-300">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground text-sm leading-relaxed">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </Card>
                    </ScrollAnimation>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Company Location Heading */}
        <section className="py-4 md:py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-4 md:mb-8">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary">
                  {t('contact.location.title')}
                </h2>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Full Width Map Section */}
        <section className="pb-12 md:pb-20">
          <div className="w-full">
            <ScrollAnimation>
              <div className="relative w-full">
                <div className="aspect-[3/4] md:aspect-[21/9] w-full">
                  <iframe 
                    src={mapUrl} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade" 
                    title={t('contact.location.mapTitle')} 
                    className="w-full h-full"
                  ></iframe>
                </div>
                
                {/* Address Overlay Card */}
                <div className="absolute top-4 left-4 right-4 md:bottom-8 md:top-auto md:left-8 md:right-auto md:max-w-md">
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-glow text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollAnimation>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  {t('contact.cta.title')}
                </h2>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  {t('contact.cta.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/services" 
                    className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors duration-300"
                  >
                    {t('contact.cta.viewServices')}
                  </a>
                  <a 
                    href="/about-us" 
                    className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-300"
                  >
                    {t('contact.cta.learnMore')}
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

export default ContactPage;
