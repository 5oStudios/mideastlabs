import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, Award, Loader2 } from "lucide-react";
import { useCertificates } from "@/hooks/useCertificates";
import { useTranslation } from "react-i18next";

const CertificateScroller = () => {
  const [selectedCert, setSelectedCert] = useState<{ image_url: string; title: string } | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const { data: certificates, isLoading, error } = useCertificates();
  const { i18n } = useTranslation();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !certificates || certificates.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
        <Award className="w-12 h-12 mb-4" />
        <p>No certificates available</p>
      </div>
    );
  }

  // Duplicate certificates for seamless loop
  const duplicatedCerts = [...certificates, ...certificates];

  return (
    <>
      <div className="relative overflow-hidden py-8" dir="ltr">
        {/* Left fade gradient */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none" 
          style={{ background: 'linear-gradient(to right, hsl(var(--background)), transparent)' }}
        />
        
        {/* Right fade gradient */}
        <div 
          className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none" 
          style={{ background: 'linear-gradient(to left, hsl(var(--background)), transparent)' }}
        />

        {/* Scrolling container */}
        <div
          className="flex w-max gap-6 md:gap-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{
            animation: `scroll 40s linear infinite`,
            animationPlayState: isPaused ? "paused" : "running",
          }}
        >
          {duplicatedCerts.map((cert, index) => {
            const title = i18n.language === 'ar' && cert.title_ar ? cert.title_ar : cert.title_en;
            return (
              <div
                key={`${cert.id}-${index}`}
                onClick={() => setSelectedCert({ image_url: cert.image_url, title })}
                className="flex-shrink-0 cursor-pointer group"
              >
                <div className="relative bg-white rounded-xl shadow-elegant overflow-hidden transition-all duration-300 group-hover:shadow-glow group-hover:scale-[1.02]">
                  <img
                    src={cert.image_url}
                    alt={title}
                    className="h-[280px] md:h-[350px] w-auto object-contain p-2"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Full-size preview modal */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-2 bg-white/95 backdrop-blur-sm">
          <button
            onClick={() => setSelectedCert(null)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
          >
            <X className="w-5 h-5 text-primary" />
          </button>
          {selectedCert && (
            <div className="w-full h-full flex items-center justify-center p-4">
              <img
                src={selectedCert.image_url}
                alt={selectedCert.title}
                className="max-w-full max-h-[85vh] object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CSS for scroll animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
};

export default CertificateScroller;
