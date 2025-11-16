import ScrollAnimation from "@/components/ScrollAnimation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero/gallery-hero.jpg";
import microscopeAnalysis from "@/assets/gallery/microscope-analysis.jpg";
import labEquipmentSoxhlet from "@/assets/gallery/lab-equipment-soxhlet.jpg";
import colorfulSamples from "@/assets/gallery/colorful-samples.jpg";
import gcmsInstrument from "@/assets/gallery/gcms-instrument.jpg";
import chemicalFlasks from "@/assets/gallery/chemical-flasks.jpg";
import labAnalysisScreen from "@/assets/gallery/lab-analysis-screen.jpg";
import blueChemicalTest from "@/assets/gallery/blue-chemical-test.jpg";
import touchscreenAnalysis from "@/assets/gallery/touchscreen-analysis.jpg";
import sampleVialsTray from "@/assets/gallery/sample-vials-tray.jpg";
import advancedGcmsSystem from "@/assets/gallery/advanced-gcms-system.jpg";
import icapSpectrometer from "@/assets/gallery/icap-spectrometer.jpg";
import discreteAnalyzer from "@/assets/gallery/discrete-analyzer.jpg";
import labWorkstation from "@/assets/gallery/lab-workstation.jpg";
import behrotestEquipment from "@/assets/gallery/behrotest-equipment.jpg";
import hachAnalyzer from "@/assets/gallery/hach-analyzer.jpg";
import microbiologicalInspection from "@/assets/gallery/microbiological-inspection.jpg";
import acolyteDevice from "@/assets/gallery/acolyte-device.jpg";
import incubatorCultures from "@/assets/gallery/incubator-cultures.jpg";
import memmertIncubator from "@/assets/gallery/memmert-incubator.jpg";
import nikonMicroscope from "@/assets/gallery/nikon-microscope.jpg";

const GalleryPage = () => {
  const galleryImages = [
    microscopeAnalysis,
    labEquipmentSoxhlet,
    colorfulSamples,
    gcmsInstrument,
    chemicalFlasks,
    labAnalysisScreen,
    blueChemicalTest,
    touchscreenAnalysis,
    sampleVialsTray,
    advancedGcmsSystem,
    icapSpectrometer,
    discreteAnalyzer,
    labWorkstation,
    behrotestEquipment,
    hachAnalyzer,
    microbiologicalInspection,
    acolyteDevice,
    incubatorCultures,
    memmertIncubator,
    nikonMicroscope
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage}
            alt="Laboratory Gallery"
            className="w-full h-full object-contain object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <ScrollAnimation>
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 border-white/30">
                Laboratory Gallery
              </Badge>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Our Laboratory Gallery
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Explore our state-of-the-art laboratory facilities and advanced testing equipment.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <ScrollAnimation key={index} delay={0.05 * index}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 group cursor-pointer border-0">
                      <div className="relative overflow-hidden aspect-square">
                        <img 
                          src={image} 
                          alt={`Laboratory image ${index + 1}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <ZoomIn className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-5xl p-0 bg-transparent border-0">
                    <div className="relative">
                      <img 
                        src={image} 
                        alt={`Laboratory image ${index + 1}`}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default GalleryPage;