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

const ServiceDetail = () => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = serviceSlug ? getServiceById(serviceSlug) : undefined;
  const relatedServices = serviceSlug ? getRelatedServices(serviceSlug) : [];

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const ServiceIcon = service.icon;

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section with Image */}
      <section className="relative h-[400px] overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
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
                    <Link to="/" className="hover:text-primary-foreground">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/60" />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/services" className="hover:text-primary-foreground">Services</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-primary-foreground/60" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-primary-foreground font-medium">
                    {service.title}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </ScrollAnimation>

          <ScrollAnimation delay={100}>
            <Badge className="mb-4 w-fit bg-accent text-accent-foreground">
              {service.category}
            </Badge>
          </ScrollAnimation>

          <ScrollAnimation delay={200}>
            <h1 className="font-display font-bold text-4xl lg:text-5xl text-primary-foreground mb-4 max-w-3xl">
              {service.title}
            </h1>
          </ScrollAnimation>

          <ScrollAnimation delay={300}>
            <p className="text-primary-foreground/90 text-lg max-w-2xl leading-relaxed">
              {service.shortDescription}
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
                  <h2 className="font-display font-bold text-2xl mb-4">Service Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.fullDescription}
                  </p>
                </div>

                <div className="flex flex-col gap-4 min-w-[200px]">
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">Turnaround Time</div>
                      <div className="text-muted-foreground">{service.turnaroundTime}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <Award className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <div className="font-medium text-foreground">Certifications</div>
                      <div className="text-muted-foreground">{service.certifications.length}+ Standards</div>
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
              <h2 className="font-display font-bold text-3xl mb-4">Services We Provide</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive testing solutions tailored to meet your specific requirements
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.subServices.map((subService, index) => (
              <ScrollAnimation key={index} delay={index * 50}>
                <Card className="card-gradient shadow-sm hover:shadow-elegant transition-spring p-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <p className="text-foreground leading-relaxed">{subService}</p>
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
                <h2 className="font-display font-bold text-3xl mb-6">Testing Parameters</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Our laboratory analyzes a comprehensive range of parameters to ensure accurate and reliable results.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.testingParameters.map((parameter, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <TestTube className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{parameter}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={200}>
              <div>
                <h2 className="font-display font-bold text-3xl mb-6">Key Features</h2>
                <div className="space-y-6">
                  {service.features.map((feature, index) => (
                    <Card key={index} className="card-gradient shadow-sm p-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <CheckCircle2 className="w-6 h-6 text-primary" />
                        </div>
                        <p className="font-medium text-foreground">{feature}</p>
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
                <div className="flex items-center gap-4 mb-6">
                  <Award className="w-8 h-8 text-primary" />
                  <h3 className="font-display font-bold text-2xl">Certifications</h3>
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
                <div className="flex items-center gap-4 mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                  <h3 className="font-display font-bold text-2xl">Sample Requirements</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.sampleRequirements}
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
                <h2 className="font-display font-bold text-3xl mb-4">Related Services</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Explore other testing services that complement your needs
                </p>
              </div>
            </ScrollAnimation>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService, index) => {
                const RelatedIcon = relatedService.icon;
                return (
                  <ScrollAnimation key={relatedService.id} delay={index * 100}>
                    <Link to={`/services/${relatedService.id}`}>
                      <Card className="group card-gradient shadow-elegant hover:shadow-glow transition-spring cursor-pointer overflow-hidden h-full">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={relatedService.image} 
                            alt={relatedService.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-spring"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                          <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm p-3 rounded-lg">
                            <RelatedIcon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div className="p-6">
                          <Badge className="mb-3">{relatedService.category}</Badge>
                          <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-smooth">
                            {relatedService.title}
                          </h3>
                          <p className="text-muted-foreground text-sm line-clamp-2">
                            {relatedService.shortDescription}
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
                Need This Testing Service?
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-8 leading-relaxed">
                Contact our team of experts for a consultation or to request a detailed quote for {service.title}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="shadow-lg">
                    <Mail className="w-5 h-5 mr-2" />
                    Request a Quote
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg">
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Us
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
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to All Services
              </Button>
            </Link>
            <Link to="/">
              <Button variant="ghost" className="hover:text-primary">
                Return to Home
                <ArrowRight className="w-5 h-5 ml-2" />
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
