import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import labChemistSamples from "@/assets/lab-chemist-samples.jpg";
import labEquipmentSetup from "@/assets/lab-equipment-setup.jpg";
import labSampleVials from "@/assets/lab-sample-vials.jpg";
import labTestingProcess from "@/assets/lab-testing-process.jpg";
import labSampleAnalysis from "@/assets/lab-sample-analysis.jpg";
import labAnalyticalInstrument from "@/assets/lab-analytical-instrument.jpg";
const Gallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const galleryImages = [{
    title: "Chemical Analysis",
    description: "Expert chemist examining sample vials for precise chemical analysis",
    category: "Laboratory",
    image: labChemistSamples
  }, {
    title: "Advanced Equipment",
    description: "State-of-the-art laboratory equipment setup for comprehensive testing",
    category: "Equipment",
    image: labEquipmentSetup
  }, {
    title: "Sample Collection",
    description: "Colorful chemical sample vials prepared for testing and analysis",
    category: "Chemistry",
    image: labSampleVials
  }, {
    title: "Testing Process",
    description: "Laboratory technician conducting hands-on chemical testing procedures",
    category: "Laboratory",
    image: labTestingProcess
  }, {
    title: "Sample Analysis",
    description: "Precision sample vials prepared for detailed analytical testing",
    category: "Quality",
    image: labSampleAnalysis
  }, {
    title: "Analytical Instruments",
    description: "High-tech GC-MS analytical instrument for advanced chemical analysis",
    category: "Equipment",
    image: labAnalyticalInstrument
  }];
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % galleryImages.length);
  };
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + galleryImages.length) % galleryImages.length);
  };
  return <section id="gallery" className="py-20 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
            <Camera className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold">Our Facilities</span>
          </div>
          
          <h2 className="font-display font-bold text-heading text-foreground mb-6">
            Gallery
          </h2>
          
          <p className="text-muted-foreground leading-relaxed">
            Take a virtual tour of our state-of-the-art laboratory facilities and 
            advanced testing equipment that ensure accurate and reliable results.
          </p>
        </div>

        {/* Main Gallery Carousel */}
        <div className="relative mb-12">
          <Card className="overflow-hidden shadow-strong">
            <div className="relative h-96 lg:h-[500px] overflow-hidden">
              <img src={galleryImages[currentSlide].image} alt={galleryImages[currentSlide].title} className="w-full h-full object-cover" />
              {/* Image Overlay with Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <span className="inline-block mb-3 px-3 py-1 bg-primary/90 text-white text-sm rounded-full">
                    {galleryImages[currentSlide].category}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
                    {galleryImages[currentSlide].title}
                  </h3>
                  <p className="text-white/90 max-w-2xl">
                    {galleryImages[currentSlide].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <Button variant="ghost" size="icon" className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-medium" onClick={prevSlide}>
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button variant="ghost" size="icon" className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-medium" onClick={nextSlide}>
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {galleryImages.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-smooth ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`} onClick={() => setCurrentSlide(index)} />)}
            </div>
          </Card>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {galleryImages.map((image, index) => <Card key={index} className={`group cursor-pointer overflow-hidden transition-spring ${index === currentSlide ? 'ring-2 ring-primary shadow-glow' : 'shadow-elegant hover:shadow-medium'}`} onClick={() => setCurrentSlide(index)}>
              <div className="relative h-24 overflow-hidden">
                <img src={image.image} alt={image.title} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                <div className={`absolute inset-0 transition-smooth ${index === currentSlide ? 'bg-primary/20' : 'bg-black/0 group-hover:bg-black/10'}`}></div>
              </div>
              <div className="p-3">
                <div className="text-base font-bold text-foreground truncate">
                  {image.title}
                </div>
                <div className="text-base text-muted-foreground mt-1">
                  {image.category}
                </div>
              </div>
            </Card>)}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/gallery">
            <Button size="lg" variant="outline" className="group">
              <span>Explore More Images</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-spring" />
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};
export default Gallery;