import ScrollAnimation from "@/components/ScrollAnimation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import heroLab from "@/assets/hero-lab.jpg";
import waterTesting from "@/assets/water-testing.jpg";
import foodTesting from "@/assets/food-testing.jpg";
import soilTesting from "@/assets/soil-testing.jpg";
import scientist1 from "@/assets/scientist-1.jpg";
import scientist2 from "@/assets/scientist-2.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const galleryItems = [
    {
      id: 1,
      title: "Main Laboratory Facility",
      category: "Facilities",
      image: heroLab,
      description: "Our state-of-the-art laboratory facility equipped with modern analytical instruments"
    },
    {
      id: 2,
      title: "Water Testing Laboratory",
      category: "Testing Areas",
      image: waterTesting,
      description: "Specialized water and wastewater analysis section with advanced equipment"
    },
    {
      id: 3,
      title: "Food Testing Department",
      category: "Testing Areas",
      image: foodTesting,
      description: "Comprehensive food safety and nutrition analysis laboratory"
    },
    {
      id: 4,
      title: "Soil Analysis Laboratory",
      category: "Testing Areas",
      image: soilTesting,
      description: "Environmental soil and sludge testing facility"
    },
    {
      id: 5,
      title: "Senior Analyst",
      category: "Team",
      image: scientist1,
      description: "Our experienced analytical chemist conducting precision measurements"
    },
    {
      id: 6,
      title: "Microbiologist at Work",
      category: "Team",
      image: scientist2,
      description: "Microbiological testing and analysis being performed by our expert team"
    }
  ];

  const categories = ["All", ...new Set(galleryItems.map(item => item.category))];
  
  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/src/assets/water-testing.jpg" 
            alt="Water testing laboratory equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-600/40"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30">
                Laboratory Gallery
              </Badge>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Our Laboratory Gallery
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Take a virtual tour of our modern facilities, advanced equipment, 
                and dedicated team of analytical professionals.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Explore Our Facilities
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our state-of-the-art laboratory facilities are equipped with the latest 
                analytical instruments and staffed by experienced professionals.
              </p>
            </div>
          </ScrollAnimation>

          {/* Category Filter */}
          <ScrollAnimation delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <Badge 
                  key={index}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className="text-sm py-2 px-4 cursor-pointer hover:bg-primary hover:text-white transition-colors"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </ScrollAnimation>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <ScrollAnimation key={item.id} delay={0.1 * (index % 6)}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 group cursor-pointer">
                      <div className="relative overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="absolute bottom-4 left-4 right-4">
                            <div className="flex items-center justify-between">
                              <Badge variant="secondary" className="text-xs">
                                {item.category}
                              </Badge>
                              <ZoomIn className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-primary-glow transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <div className="space-y-4">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-auto rounded-lg"
                      />
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{item.category}</Badge>
                        </div>
                        <h3 className="text-xl font-semibold text-primary mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratory Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
                Our Laboratory Features
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Modern facilities designed for precision, efficiency, and safety in all analytical operations.
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollAnimation delay={0.1}>
              <Card className="p-6 text-center shadow-elegant hover:shadow-glow transition-all duration-500">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">🔬</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Advanced Instruments</h3>
                <p className="text-muted-foreground text-sm">
                  Latest analytical equipment for precise measurements
                </p>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <Card className="p-6 text-center shadow-elegant hover:shadow-glow transition-all duration-500">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-light rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">🧪</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Clean Environment</h3>
                <p className="text-muted-foreground text-sm">
                  Controlled environment for contamination-free testing
                </p>
              </Card>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <Card className="p-6 text-center shadow-elegant hover:shadow-glow transition-all duration-500">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-glow to-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">👥</span>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Expert Team</h3>
                <p className="text-muted-foreground text-sm">
                  Skilled professionals with extensive experience
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
                Visit Our Laboratory
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Schedule a visit to see our facilities in person and learn more 
                about our testing capabilities and quality standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors duration-300"
                >
                  Schedule Visit
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors duration-300"
                >
                  Our Services
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

export default GalleryPage;