import ScrollAnimation from "@/components/ScrollAnimation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Droplets, 
  Leaf, 
  Sparkles, 
  Shirt, 
  Clock, 
  Droplet, 
  Square, 
  Brush, 
  Activity,
  Layers,
  Shield,
  Beaker,
  Utensils,
  FileText
} from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Water & Wastewater Testing",
      description: "Comprehensive analysis of water quality parameters including chemical, microbiological, and physical testing",
      icon: Droplets,
      category: "Environmental"
    },
    {
      title: "Soil & Sludge Analysis",
      description: "Complete soil composition analysis, contamination assessment, and environmental monitoring",
      icon: Leaf,
      category: "Environmental"
    },
    {
      title: "Cosmetics & Personal Care Products",
      description: "Safety testing, stability studies, and regulatory compliance for cosmetic products",
      icon: Sparkles,
      category: "Consumer Products"
    },
    {
      title: "Textile, Footwear & Leather Products",
      description: "Quality testing for textile materials, footwear components, and leather products",
      icon: Shirt,
      category: "Materials"
    },
    {
      title: "Shelf Life Analysis",
      description: "Product stability testing and shelf life determination studies",
      icon: Clock,
      category: "Food & Nutrition"
    },
    {
      title: "Cleaning Materials & Detergents",
      description: "Performance testing and chemical analysis of cleaning products and detergents",
      icon: Beaker,
      category: "Consumer Products"
    },
    {
      title: "Tiles, Marble & Natural Stone",
      description: "Physical and chemical testing of construction materials and natural stones",
      icon: Square,
      category: "Construction"
    },
    {
      title: "Paint Testing",
      description: "Quality control testing for paints, coatings, and surface treatments",
      icon: Brush,
      category: "Materials"
    },
    {
      title: "Water Efficiency Labelling (WELS)",
      description: "Testing and certification for water efficiency rating systems",
      icon: Activity,
      category: "Certification"
    },
    {
      title: "Geotextile & GeoMembranes",
      description: "Testing of geosynthetic materials for civil engineering applications",
      icon: Layers,
      category: "Construction"
    },
    {
      title: "Waterproofing & Bituminous Products",
      description: "Performance testing of waterproofing membranes and bituminous materials",
      icon: Shield,
      category: "Construction"
    },
    {
      title: "Glass-reinforced Plastic (GRP) Testing",
      description: "Mechanical and chemical testing of composite materials and GRP products",
      icon: Beaker,
      category: "Materials"
    },
    {
      title: "Food Testing - Microbiological & Chemical",
      description: "Comprehensive food safety testing, nutritional analysis, and labeling verification",
      icon: Utensils,
      category: "Food & Nutrition"
    },
    {
      title: "Tissues, Paper & Paper Products",
      description: "Quality testing for paper products, tissues, and packaging materials",
      icon: FileText,
      category: "Materials"
    }
  ];

  const categories = [...new Set(services.map(service => service.category))];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary-glow text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
                Testing Services
              </Badge>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Our Testing Services
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Comprehensive analytical testing solutions across multiple industries 
                with state-of-the-art equipment and expert analysis.
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
                Complete Testing Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our laboratory offers a comprehensive range of analytical testing services 
                designed to meet the diverse needs of various industries and regulatory requirements.
              </p>
            </div>
          </ScrollAnimation>

          {/* Category Filters */}
          <ScrollAnimation delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <Badge 
                  key={index}
                  variant="outline" 
                  className="text-sm py-2 px-4 cursor-pointer hover:bg-primary hover:text-white transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </ScrollAnimation>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <ScrollAnimation key={index} delay={0.1 * (index % 6)}>
                  <Card className="p-6 h-full shadow-elegant hover:shadow-glow transition-all duration-500 group">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-2 text-xs">
                          {service.category}
                        </Badge>
                        <h3 className="text-lg font-semibold text-primary group-hover:text-primary-glow transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300"
                    >
                      Learn More
                    </Button>
                  </Card>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Why Choose Our Testing Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our commitment to excellence and precision ensures that you receive 
                accurate, reliable results for all your analytical testing needs.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ScrollAnimation delay={0.1}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Beaker className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">State-of-the-Art Equipment</h3>
                <p className="text-muted-foreground">
                  Latest analytical instruments and testing technologies
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Certified Quality</h3>
                <p className="text-muted-foreground">
                  Accredited laboratory with international quality standards
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-glow to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Fast Turnaround</h3>
                <p className="text-muted-foreground">
                  Quick and efficient testing with reliable delivery times
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-light to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Expert Analysis</h3>
                <p className="text-muted-foreground">
                  Professional interpretation and detailed reporting
                </p>
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
                Need Testing Services?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Contact us today to discuss your testing requirements and get a customized 
                solution for your analytical needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors duration-300"
                >
                  Request Quote
                </a>
                <a
                  href="/about-us"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-300"
                >
                  Learn About Us
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
};

export default Services;