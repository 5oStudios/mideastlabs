import { useTranslation } from "react-i18next";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ZoomIn, Loader2, ImageIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero/gallery-hero.jpg";
import { useGalleryImages } from "@/hooks/useGallery";

const GalleryPage = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const { images, isLoading } = useGalleryImages();

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20" dir={isRTL ? 'rtl' : 'ltr'}>
        <section className="relative py-20 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={heroImage} alt="Laboratory Gallery" className="w-full h-full object-cover object-center md:object-bottom" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <ScrollAnimation>
              <div className="max-w-4xl mx-auto text-center">
                <Badge className="mb-6 bg-white/20 text-white hover:bg-white/30 border-white/30">
                  {t("gallery.hero.badge")}
                </Badge>
                <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                  {t("gallery.hero.title")}
                </h1>
                <p className="text-xl text-white/90 leading-relaxed">
                  {t("gallery.hero.description")}
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto px-4 lg:px-8">
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : images.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
                <ImageIcon className="h-16 w-16 mb-4" />
                <p className="text-lg">No gallery images available.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => {
                  const title = isRTL && image.title_ar ? image.title_ar : image.title_en || '';
                  return (
                    <ScrollAnimation key={image.id} delay={0.05 * (index % 12)}>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Card className="overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500 group cursor-pointer border-0">
                            <div className="relative overflow-hidden aspect-square">
                              <img 
                                src={image.image_url} 
                                alt={title || `Gallery image ${index + 1}`} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <ZoomIn className="w-8 h-8 text-white" />
                              </div>
                            </div>
                          </Card>
                        </DialogTrigger>
                        <DialogContent className="max-w-5xl p-0 bg-transparent border-0">
                          <img 
                            src={image.image_url} 
                            alt={title || `Gallery image ${index + 1}`} 
                            className="w-full h-auto rounded-lg" 
                          />
                        </DialogContent>
                      </Dialog>
                    </ScrollAnimation>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GalleryPage;
