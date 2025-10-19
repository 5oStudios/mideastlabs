import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Utensils, TestTube, Clock, Microscope, Palette, Recycle, Building, PaintBucket, Shield, Leaf, Package, Dna, TreePine, Beaker, Layers } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Droplets,
      title: "Water Analysis",
      description: "Testhub Laboratories LLC offers a comprehensive range of Microbiological and Chemical water testing solutions to support various regulatory...",
      image: "/assets/water-testing.jpg"
    },
    {
      icon: Utensils,
      title: "Food – Microbiological, Chemical & Nutritional Labelling",
      description: "To ensure your food is free from contamination we offer an extensive range of testing programmes...",
      image: "/assets/food-testing.jpg"
    },
    {
      icon: TreePine,
      title: "Soil & Sediment Testing",
      description: "We provide analysis of priority pollutants and emerging substances in wastewater treatment sewage sludge...",
      image: "/assets/soil-testing.jpg"
    },
    {
      icon: Clock,
      title: "Shelf Life Analysis",
      description: "The shelf life of food products is an important feature for both manufacturers and consumers. The most important factor for shelf life evaluation...",
      image: null
    },
    {
      icon: Microscope,
      title: "Air Quality Testing",
      description: "Environmental air pollution is of growing public concern, much importance being placed on clean air and the reduction of contaminants...",
      image: null
    },
    {
      icon: Palette,
      title: "Cosmetics & Personal Care Products",
      description: "Testhub Laboratories is one of the leading laboratories in the region for the testing of Cosmetics and Personal Care products...",
      image: null
    },
    {
      icon: Recycle,
      title: "Cleaning Materials, Toiletries & Detergents",
      description: "To ensure the products perform to the best of their ability, and to modify the products of the future, testing and analysis...",
      image: null
    },
    {
      icon: Building,
      title: "Tiles, Marble, Granite, Natural Stone & Paving Blocks",
      description: "Our laboratory testing scope covers all types of natural and artificial stone. We test Granite, Marble, Slate, Sandstone, Limestone, Travertine...",
      image: null
    },
    {
      icon: PaintBucket,
      title: "Paint Testing",
      description: "Testing of paints & coatings generally falls into three categories: testing of the raw materials, testing of the finished product and performance testing...",
      image: null
    },
    {
      icon: Shield,
      title: "Geotextile & GeoMembranes",
      description: "For any project for any civil engineering project the design engineer must check the required specifications of geotextile material...",
      image: null
    },
    {
      icon: Leaf,
      title: "Waterproofing Membranes & Bituminous Products",
      description: "Waterproofing is a very important and useful construction method to prevent leakage and improve the overall integrity of the building...",
      image: null
    },
    {
      icon: Package,
      title: "Tissues, Paper & Paper Products",
      description: "By combining industry experience with advanced laboratory testing facilities, we provide tangible solutions to customers in paper products...",
      image: null
    },
    {
      icon: Dna,
      title: "Halal, Meat Identification, Porcine Content, GMO Analysis",
      description: "Testhub laboratories offers Halal testing to ensure that our customer products meet the halal requirements. With our RTPCR we can identify...",
      image: null
    },
    {
      icon: TestTube,
      title: "Migration/Food Contact Material Test",
      description: "All types of food packaging materials, including plastics, ceramics, paper, board, rubber and silicone, glass or metals, can contain dangerous contaminants...",
      image: null
    },
    {
      icon: Beaker,
      title: "Rubber, Silicone, Plastic & Polymer Materials",
      description: "Testhub Laboratories offer analytical and research support to our customers for rubber, silicone, plastic & polymer materials...",
      image: null
    },
    {
      icon: Layers,
      title: "Adhesives, Sealants, Self Adhesive Tapes",
      description: "Testhub Laboratories offers a strong array of capabilities and testing services to adhesives, sealants and tapes...",
      image: null
    }
  ];

  return (
    <section id="services" className="py-20 surface-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <TestTube className="w-4 h-4 text-primary" />
            <span className="text-primary font-medium">Our Services</span>
          </div>
          
          <h2 className="font-display font-bold text-heading text-foreground mb-6">
            What We Work
          </h2>
          
          <p className="text-muted-foreground leading-relaxed">
            We offer a comprehensive range of analytical services tailored to your specific needs, 
            combined with the capacity to provide expert support and technical guidance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group card-gradient shadow-elegant hover:shadow-glow transition-spring cursor-pointer overflow-hidden"
            >
              {/* Image/Icon Header */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                {service.image ? (
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-spring"
                  />
                ) : (
                  <service.icon className="w-16 h-16 text-primary group-hover:scale-110 group-hover:text-accent transition-spring" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/40 transition-smooth"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-smooth leading-tight">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
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
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="bg-primary hover:bg-primary-deep shadow-glow">
            <span>Explore More Services</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;