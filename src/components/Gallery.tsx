import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import labChemistSamples from "@/assets/lab-chemist-samples.jpg";
import labEquipmentSetup from "@/assets/lab-equipment-setup.jpg";
import labSampleVials from "@/assets/lab-sample-vials.jpg";
import labTestingProcess from "@/assets/lab-testing-process.jpg";
import labSampleAnalysis from "@/assets/lab-sample-analysis.jpg";
import labAnalyticalInstrument from "@/assets/lab-analytical-instrument.jpg";
const Gallery = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const galleryImages = [{
    title: t('gallery.images.chemical.title'),
    description: t('gallery.images.chemical.description'),
    category: t('gallery.images.chemical.category'),
    image: labChemistSamples
  }, {
    title: t('gallery.images.equipment.title'),
    description: t('gallery.images.equipment.description'),
    category: t('gallery.images.equipment.category'),
    image: labEquipmentSetup
  }, {
    title: t('gallery.images.samples.title'),
    description: t('gallery.images.samples.description'),
    category: t('gallery.images.samples.category'),
    image: labSampleVials
  }, {
    title: t('gallery.images.testing.title'),
    description: t('gallery.images.testing.description'),
    category: t('gallery.images.testing.category'),
    image: labTestingProcess
  }, {
    title: t('gallery.images.analysis.title'),
    description: t('gallery.images.analysis.description'),
    category: t('gallery.images.analysis.category'),
    image: labSampleAnalysis
  }, {
    title: t('gallery.images.instruments.title'),
    description: t('gallery.images.instruments.description'),
    category: t('gallery.images.instruments.category'),
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
        <div className={`text-center max-w-3xl mx-auto mb-16 ${isRTL ? 'rtl' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
          <div className={`inline-flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'} bg-accent/10 px-4 py-2 rounded-full mb-6`}>
            <Camera className="w-4 h-4 text-accent" />
            <span className="text-accent font-semibold text-lg">{t('gallery.badge')}</span>
          </div>
          
          <h2 className="font-display font-bold text-heading text-foreground mb-6">
            {t('gallery.title')}
          </h2>
          
          <p className="text-muted-foreground leading-relaxed">
            {t('gallery.description')}
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
              <span>{t('gallery.cta')}</span>
              <ArrowRight className={`w-5 h-5 ${isRTL ? 'mr-2 group-hover:-translate-x-1 rotate-180' : 'ml-2 group-hover:translate-x-1'} transition-spring`} />
            </Button>
          </Link>
        </div>
      </div>
    </section>;
};
export default Gallery;