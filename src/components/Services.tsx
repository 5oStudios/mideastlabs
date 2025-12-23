import { useTranslation } from "react-i18next";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ArrowRight, TestTube, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { useServices, getIconByName } from "@/hooks/useServices";

const Services = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const { services, isLoading } = useServices();

  const plugin = useRef(Autoplay({
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true
  }));

  return (
    <section id="services" className="py-20 surface-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'} bg-primary/10 px-4 py-2 rounded-full mb-6`}>
            <TestTube className="w-4 h-4 text-primary" />
            <span className="text-primary font-semibold text-lg">{t("services.badge")}</span>
          </div>
          
          <h1 className="font-display font-bold text-heading text-foreground mb-6">
            {t("services.title")}
          </h1>
          
          <p className="text-muted-foreground leading-relaxed">
            {t("services.description")}
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative px-12" dir="ltr">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : services.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              No services available.
            </div>
          ) : (
            <Carousel plugins={[plugin.current]} opts={{
              align: "start",
              loop: true
            }} className="w-full">
              <CarouselContent className="-ml-4">
                {services.map((service) => {
                  const ServiceIcon = getIconByName(service.icon_name);
                  const title = isRTL && service.title_ar ? service.title_ar : service.title_en;
                  const category = isRTL && service.category_ar ? service.category_ar : service.category_en;
                  const shortDescription = isRTL && service.short_description_ar ? service.short_description_ar : service.short_description_en;

                  return (
                    <CarouselItem key={service.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <Link to={`/services/${service.slug}`}>
                        <Card className="group card-gradient shadow-elegant hover:shadow-glow transition-spring cursor-pointer overflow-hidden h-full">
                          {/* Image Header */}
                          <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                            {service.image_url ? (
                              <img src={service.image_url} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-spring" />
                            ) : (
                              <ServiceIcon className="w-16 h-16 text-primary/50" />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            
                            {/* Icon Overlay */}
                            <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                              <ServiceIcon className="w-6 h-6 text-primary" />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-6" dir={isRTL ? 'rtl' : 'ltr'}>
                            <div className="mb-2">
                              <span className="text-xs font-medium text-accent uppercase tracking-wide">
                                {category}
                              </span>
                            </div>
                            <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-smooth leading-tight">
                              {title}
                            </h3>
                            <p className="text-muted-foreground text-base leading-relaxed mb-4 line-clamp-3">
                              {shortDescription}
                            </p>
                            <Button variant="ghost" size="sm" className={`text-primary hover:text-accent hover:bg-accent/10 p-0 h-auto group-hover:translate-x-1 transition-spring ${isRTL ? 'flex-row-reverse' : ''}`}>
                              <span className={isRTL ? 'ml-2' : 'mr-2'}>{t("services.knowMore")}</span>
                              <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
                            </Button>
                          </div>
                        </Card>
                      </Link>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious className="bg-background hover:bg-primary hover:text-primary-foreground border-2 border-primary" />
              <CarouselNext className="bg-background hover:bg-primary hover:text-primary-foreground border-2 border-primary" />
            </Carousel>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link to="/services">
            <Button size="lg" variant="outline" className="group">
              <span>{t("services.viewAll")}</span>
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'} group-hover:translate-x-1 transition-spring`} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
