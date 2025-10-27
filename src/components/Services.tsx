import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight, TestTube } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Services = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  return (
    <section id="services" className="py-20 surface-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <TestTube className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Our Services</span>
          </div>
          
          <h1 className="font-display font-bold text-heading text-foreground mb-6">
            Comprehensive Laboratory Testing Services
          </h1>
          
          <p className="text-muted-foreground leading-relaxed">
            We offer a comprehensive range of analytical services tailored to your specific needs, 
            combined with the capacity to provide expert support and technical guidance.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative px-12">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {servicesData.map((service, index) => (
                <CarouselItem key={service.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Link to={`/services/${service.id}`}>
                    <Card 
                      className="group card-gradient shadow-elegant hover:shadow-glow transition-spring cursor-pointer overflow-hidden h-full"
                    >
                      {/* Image Header */}
                      <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-spring"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        
                        {/* Icon Overlay */}
                        <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
                          <service.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="mb-2">
                          <span className="text-xs font-medium text-accent uppercase tracking-wide">
                            {service.category}
                          </span>
                        </div>
                        <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-smooth leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                          {service.shortDescription}
                        </p>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-primary hover:text-accent hover:bg-accent/10 p-0 h-auto group-hover:translate-x-1 transition-spring"
                        >
                          <span className="mr-2">Know More</span>
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-background hover:bg-primary hover:text-primary-foreground border-2 border-primary" />
            <CarouselNext className="bg-background hover:bg-primary hover:text-primary-foreground border-2 border-primary" />
          </Carousel>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link to="/services">
            <Button size="lg" className="bg-primary hover:bg-primary-deep shadow-glow">
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
