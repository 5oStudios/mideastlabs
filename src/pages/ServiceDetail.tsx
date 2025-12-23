import { useParams, Link, Navigate } from "react-router-dom";
import { getServiceById, getRelatedServices } from "@/data/servicesData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft, ArrowRight, Clock, FileText, Award, CheckCircle2, 
  TestTube, Mail, Phone
} from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useTranslation } from "react-i18next";

const ServiceDetail = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const service = serviceSlug ? getServiceById(serviceSlug) : undefined;
  const relatedServices = serviceSlug ? getRelatedServices(serviceSlug) : [];

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const ServiceIcon = service.icon;

  // Get localized content
  const title = isRTL && service.titleAr ? service.titleAr : service.title;
  const category = isRTL && service.categoryAr ? service.categoryAr : service.category;
  const shortDescription = isRTL && service.shortDescriptionAr ? service.shortDescriptionAr : service.shortDescription;
  const fullDescription = isRTL && service.fullDescriptionAr ? service.fullDescriptionAr : service.fullDescription;
  const subServices = isRTL && service.subServicesAr ? service.subServicesAr : service.subServices;
  const features = isRTL && service.featuresAr ? service.featuresAr : service.features;
  const testingParameters = isRTL && service.testingParametersAr ? service.testingParametersAr : service.testingParameters;
  const turnaroundTime = isRTL && service.turnaroundTimeAr ? service.turnaroundTimeAr : service.turnaroundTime;
  const sampleRequirements = isRTL && service.sampleRequirementsAr ? service.sampleRequirementsAr : service.sampleRequirements;

  return (
    <main className={`min-h-screen ${isRTL ? 'rtl' : 'ltr'}`} dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      {/* Hero Section with Image */}
      <section className="relative h-[400px] overflow-hidden">
        <img 
          src={service.image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        
        <div className="absolute inset-0 container mx-auto px-4 lg:px-8 flex flex-col justify-center">
          {/* Breadcrumb */}
          <ScrollAnimation delay={0}>
            <Breadcrumb className="mb-6">
              <BreadcrumbList className="text-primary-foreground/80">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="hover:text-primary-foreground">{t('serviceDetail.breadcrumb.home')}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/60" />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/services" className="hover:text-primary-foreground">{t('serviceDetail.breadcrumb.services')}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/60" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary-foreground font-medium">
                    {title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <Badge className="mb-4 w-fit bg-accent text-accent-foreground">
              {category}
            </Badge>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <h1 className="font-display font-bold text-4xl lg:text-5xl text-primary-foreground mb-4 max-w-3xl">
              {title}
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <p className="text-primary-foreground/90 text-lg max-w-2xl leading-relaxed">
              {shortDescription}
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Service Overview Card */}
      <section className="py-12 surface-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <Card className="card-gradient shadow-elegant p-8 -mt-20 relative z-10">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="bg-primary/10 p-6 rounded-2xl">
                  <ServiceIcon className="w-16 h-16 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h2 className="font-display font-bold text-2xl mb-4">{t('serviceDetail.overview.title')}</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {fullDescription}
                  </p>
                </div>

                <div className="flex flex-col gap-4 min-w-[200px]">
                  <div className={`flex items-center gap-3 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className={isRTL ? 'text-right' : ''}>
                      <div className="font-medium text-foreground">{t('serviceDetail.overview.turnaround')}</div>
                      <div className="text-muted-foreground">{turnaroundTime}</div>
                    </div>
                  </div>
                  
                  <div className={`flex items-center gap-3 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <Award className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className={isRTL ? 'text-right' : ''}>
                      <div className="font-medium text-foreground">{t('serviceDetail.overview.certifications')}</div>
                      <div className="text-muted-foreground">{service.certifications.length}+ {t('serviceDetail.overview.standards')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollAnimation>
        </div>
      </section>

      {/* Sub-Services Grid */}
      <section className="py-16 surface-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl mb-4">{t('serviceDetail.subServices.title')}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('serviceDetail.subServices.description')}
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subServices.map((subService, index) => (
              <ScrollAnimation key={index} delay={index * 50}>
                <Card className="card-gradient shadow-sm hover:shadow-elegant transition-spring p-6">
                  <div className={`flex items-start gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <p className={`text-foreground leading-relaxed ${isRTL ? 'text-right' : ''}`}>{subService}</p>
                  </div>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Parameters */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ScrollAnimation>
              <div>
                <h2 className="font-display font-bold text-3xl mb-6">{t('serviceDetail.parameters.title')}</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {t('serviceDetail.parameters.description')}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {testingParameters.map((parameter, index) => (
                    <div key={index} className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <TestTube className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className={`text-sm text-foreground ${isRTL ? 'text-right' : ''}`}>{parameter}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div>
                <h2 className="font-display font-bold text-3xl mb-6">{t('serviceDetail.features.title')}</h2>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <Card key={index} className="card-gradient shadow-sm p-6">
                      <div className={`flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <CheckCircle2 className="w-6 h-6 text-primary" />
                        </div>
                        <p className={`font-medium text-foreground ${isRTL ? 'text-right' : ''}`}>{feature}</p>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Certifications & Requirements */}
      <section className="py-16 surface-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollAnimation>
              <Card className="card-gradient shadow-elegant p-8">
                <div className={`flex items-center gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <Award className="w-8 h-8 text-primary" />
                  <h3 className="font-display font-bold text-2xl">{t('serviceDetail.certifications.title')}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {service.certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="text-base px-4 py-2">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={100}>
              <Card className="card-gradient shadow-elegant p-8">
                <div className={`flex items-center gap-4 mb-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <FileText className="w-8 h-8 text-primary" />
                  <h3 className="font-display font-bold text-2xl">{t('serviceDetail.requirements.title')}</h3>
                </div>
                <p className={`text-muted-foreground leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                  {sampleRequirements}
                </p>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-surface">
          <div className="container mx-auto px-4 lg:px-8">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h2 className="font-display font-bold text-3xl mb-4">{t('serviceDetail.related.title')}</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {t('serviceDetail.related.description')}
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService, index) => {
                const RelatedIcon = relatedService.icon;
                const relatedTitle = isRTL && relatedService.titleAr ? relatedService.titleAr : relatedService.title;
                const relatedCategory = isRTL && relatedService.categoryAr ? relatedService.categoryAr : relatedService.category;
                const relatedShortDesc = isRTL && relatedService.shortDescriptionAr ? relatedService.shortDescriptionAr : relatedService.shortDescription;
                
                return (
                  <ScrollAnimation key={relatedService.id} delay={index * 100}>
                    <Link to={`/services/${relatedService.id}`}>
                      <Card className="group card-gradient shadow-elegant hover:shadow-glow transition-spring cursor-pointer overflow-hidden h-full">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={relatedService.image} 
                            alt={relatedTitle}
                            className="w-full h-full object-cover group-hover:scale-110 transition-spring"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                          <div className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} bg-background/90 backdrop-blur-sm p-3 rounded-lg`}>
                            <RelatedIcon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div className="p-6">
                          <Badge className="mb-3">{relatedCategory}</Badge>
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
                            {relatedTitle}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2">
                            {relatedShortDesc}
                          </p>
                        </div>
                      </Card>
                    </Link>
                  </ScrollAnimation>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-deep text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-display font-bold text-4xl mb-6">
                {t('serviceDetail.cta.title')}
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-8 leading-relaxed">
                {t('serviceDetail.cta.description', { serviceName: title })}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="shadow-lg">
                    <Mail className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {t('serviceDetail.cta.requestQuote')}
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg">
                    <Phone className={`w-5 h-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                    {t('serviceDetail.cta.contactUs')}
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Back Navigation */}
      <section className="py-8 surface-gradient border-t">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/services">
              <Button variant="ghost" className="hover:text-primary">
                {isRTL ? <ArrowRight className="w-5 h-5 ml-2" /> : <ArrowLeft className="w-5 h-5 mr-2" />}
                {t('serviceDetail.navigation.backToServices')}
              </Button>
            </Link>
            <Link to="/">
              <Button variant="ghost" className="hover:text-primary">
                {t('serviceDetail.navigation.returnHome')}
                {isRTL ? <ArrowLeft className="w-5 h-5 mr-2" /> : <ArrowRight className="w-5 h-5 ml-2" />}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServiceDetail;